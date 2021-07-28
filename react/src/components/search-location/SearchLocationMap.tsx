import React, { useCallback, useEffect, useRef, useState } from "react";
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
import mapStyles from "../styles/MapStyles";
import { MdMyLocation } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { FacilityType, LocationType, MOCK_DATA } from "../const";

type MyLocation = {
  id: string;
  lat: number;
  lng: number;
};

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
  const [selectedLocation, setSelectedLocation] = useState<LocationType>();
  const [selectedMyLocation, setSelectedMyLocation] = useState<MyLocation>();
  const [isGeoLocLoading, setIsGeoLocLoading] = useState(false);

  const history = useHistory();

  const onMapClick = useCallback((e) => {
    //TOOD: set close drawer
    setSelectedLocation(undefined);
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

  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     location: { lat: () => 13.736717, lng: () => 100.523186 },
  //     radius: 100 * 1000,
  //   },
  // });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       panTo({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //       setIsGeoLocLoading(false);
  //     },
  //     () => null
  //   );
  // }, []);

  const handleSelect = async (address: any) => {
    // setValue(address, false);
    // clearSuggestions();

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
              setSelectedMyLocation({
                id: "my_current_location",
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <MdMyLocation className="h-8 w-8 my-4 text-white bg-primary shadow-lg p-1 rounded" />
        {isGeoLocLoading && (
          <p className="m-4 text-lg text-secondary">กำลังค้นหา...</p>
        )}
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
        {MOCK_DATA.map((location) => (
          <Marker
            visible={true}
            onMouseOver={() => {}}
            key={location.id}
            position={{ lat: location.latitude, lng: location.longitude }}
            onClick={() => {
              setSelectedLocation(location);
            }}
            icon={{
              url:
                location.type === FacilityType.HOSPITAL
                  ? "/hospital.svg"
                  : "/medic.svg",
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />
        ))}
        {selectedMyLocation && (
          <Marker
            key={selectedMyLocation.id}
            position={{
              lat: selectedMyLocation.lat,
              lng: selectedMyLocation.lng,
            }}
            animation={google.maps.Animation.BOUNCE}
          />
        )}

        {selectedLocation ? (
          <InfoWindow
            position={{
              lat: selectedLocation.latitude,
              lng: selectedLocation.longitude,
            }}
            onCloseClick={() => {
              setSelectedLocation(undefined);
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
