import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import mapStyles from "../styles/MapStyles";
import { FaCompass, FaSearch } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

const mapContainerStyle = {
  height: "calc(100vh - 60px)",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 13.736717,
  lng: 100.523186,
};

export const SearchLocationMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBoONR0q9T6-FkrslzfPXrQ4lqtZ7aI0a4",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(center);
  const [isGeoLocLoading, setIsGeoLocLoading] = useState(false);

  const history = useHistory();

  const onMapClick = useCallback((e) => {
    //close drawer
    // setMarkers((current) => [
    //   ...current,
    //   {
    //     lat: e.latLng.lat(),
    //     lng: e.latLng.lng(),
    //     time: new Date(),
    //   },
    // ]);
  }, []);

  const mapRef = useRef<any>();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 13.736717, lng: () => 100.523186 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  if (loadError) return <h3>"Error"</h3>;
  if (!isLoaded) return <h3>"Loading..."</h3>;

  return (
    <div>
      {/* <div className="navbar flex bg-white shadow-lg">
        <div className="flex p-2" onClick={() => history.push("/menu")}>
          <IoMdArrowRoundBack className="h-6 w-6" />
          <h3 className="mx-2">กลับสู่เมนูหลัก</h3>
        </div>

        <div className="search mt-1 flex items-center justify-end mr-8">
          <FaSearch className="h-5 w-5" />
          <Combobox onSelect={handleSelect}>
            <ComboboxInput
              value={value}
              onChange={handleInput}
              // disabled={!ready}
              placeholder="ค้นหา..."
            />
            <ComboboxPopover>
              <ComboboxList>
                {status === "OK" &&
                  data.map(({ id, description }) => (
                    <ComboboxOption key={id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </div>
      </div> */}
      <button
        className="locate flex"
        onClick={() => {
          setIsGeoLocLoading(true);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
              setIsGeoLocLoading(false);
            },
            () => null
          );
        }}
      >
        {isGeoLocLoading && <h3 className="m-4">กำลังค้นหา...</h3>}
        <MdMyLocation className="h-8 w-8 my-4 text-white bg-primary shadow-lg p-1 rounded" />
      </button>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))} */}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(center);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>
              </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
