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
import { FaHospitalAlt, FaClinicMedical } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { FacilityType, LocationType, Tag, MOCK_DATA } from "../const";

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

  const mapRef = useRef<any>();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = useCallback((e) => {
    //TOOD: set close drawer
    setSelectedLocation(undefined);
    history.push(`/search-location`);
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }
  }, []);

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  useEffect(() => {
    if (selectedLocation) {
      mapRef.current.panTo({
        lat: selectedLocation.latitude,
        lng: selectedLocation.longitude,
      });
      mapRef.current.setZoom(16);
    }
  }, [selectedLocation]);

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
              setSelectedLocation(undefined);
              history.push(`/search-location`);
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
            clickable={true}
            onMouseOver={() => {}}
            key={location.id}
            position={{ lat: location.latitude, lng: location.longitude }}
            onClick={() => {
              setSelectedLocation(location);
              history.push(`/search-location/${location.id}`);
            }}
            icon={{
              url:
                location.type === FacilityType.HOSPITAL
                  ? "/hospital.svg"
                  : "/medic.svg",
              scaledSize: new window.google.maps.Size(30, 30),
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
              lat: selectedLocation.latitude + 0.0008,
              lng: selectedLocation.longitude,
            }}
            onCloseClick={() => {
              setSelectedLocation(undefined);
            }}
          >
            <div className="flex justify-center items-center my-1">
              <div className="flex flex-col mx-2">
                <div className="flex justify-center items-center mb-2">
                  {selectedLocation.type === FacilityType.HOSPITAL ? (
                    <FaHospitalAlt className="mr-2 w-5 h-5" />
                  ) : (
                    <FaClinicMedical className="mr-2 w-5 h-5" />
                  )}
                  <h3>{selectedLocation.name}</h3>
                </div>
                <div>
                  {selectedLocation.tags.map((tag) => (
                    <span
                      className={`tag ${
                        tag === Tag.R
                          ? `bg-red-500`
                          : tag === Tag.Y
                          ? `bg-yellow-400`
                          : `bg-green-600`
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="flex w-16 h-12 bg-red-500 rounded justify-center items-center text-white text-lg font-bold">
                1/30
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
