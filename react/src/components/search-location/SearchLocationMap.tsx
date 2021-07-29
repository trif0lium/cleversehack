import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../styles/MapStyles";
import { MdMyLocation } from "react-icons/md";
import { FaHospitalAlt, FaClinicMedical } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  FacilityType,
  LocationType,
  MyLocationType,
  MOCK_DATA,
  TAG_COLOR_MAPPER,
} from "../const";
import { SearchLocationDetailDrawer } from "./SearchLocationDetailDrawer";
import { dataStore } from "../../store/dataStore";
import { locationStore } from "../../store/locationStore";
import { SearchBarSelectOption } from "./search-location";

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

interface SearchLocationMapProps {
  searchTerm: string;
  sortBy: SearchBarSelectOption;
  options: [];
  isVisibleSearchBar: boolean;
  setIsVisibleSearchBar: (isVisibleSearchBar: boolean) => void;
}

export const SearchLocationMap = ({
  searchTerm,
  sortBy,
  options: searchOptions,
  isVisibleSearchBar,
  setIsVisibleSearchBar,
}: SearchLocationMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBoONR0q9T6-FkrslzfPXrQ4lqtZ7aI0a4",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [selectedLocation, setSelectedLocation] = useState<LocationType>();
  const [selectedMyLocation, setSelectedMyLocation] =
    useState<MyLocationType>();
  const [
    isSearchLocationDetailDrawerVisible,
    setIsSearchLocationDetailDrawerVisible,
  ] = useState(false);
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);
  const [isGeoLocLoading, setIsGeoLocLoading] = useState(false);

  const { setMyLocation } = locationStore;

  const history = useHistory();

  const mapRef = useRef<any>();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = useCallback((e) => {
    //TOOD: set close drawer
    setSelectedLocation(undefined);
    setIsInfoWindowVisible(false);
    setIsSearchLocationDetailDrawerVisible(false);
    setIsVisibleSearchBar(false);
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

  if (loadError) return <h3>"Error"</h3>;
  if (!isLoaded) return <h3>"Loading..."</h3>;

  return (
    <div>
      {isSearchLocationDetailDrawerVisible && selectedLocation && (
        <SearchLocationDetailDrawer selectedLocation={selectedLocation} />
      )}
      {!isVisibleSearchBar && (
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
                  code: "my_current_location",
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
                setMyLocation({
                  code: "my_current_location",
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
                history.push(`/search-location`);
              },
              () => null
            );
          }}
        >
          {isGeoLocLoading && (
            <p className="m-4 text-md text-secondary">กำลังค้นหา...</p>
          )}
          <MdMyLocation className="h-8 w-8 my-4 text-white bg-primary shadow-lg p-1 rounded" />
        </button>
      )}

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
            key={location.code}
            position={{ lat: location.latitude, lng: location.longitude }}
            onClick={() => {
              setSelectedLocation(location);
              setIsInfoWindowVisible(true);
              history.push(`/search-location/${location.code}`);
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
            key={selectedMyLocation.code}
            position={{
              lat: selectedMyLocation.lat,
              lng: selectedMyLocation.lng,
            }}
            animation={google.maps.Animation.BOUNCE}
          />
        )}

        {selectedLocation && isInfoWindowVisible ? (
          <InfoWindow
            position={{
              lat: selectedLocation.latitude + 0.0008,
              lng: selectedLocation.longitude,
            }}
            onCloseClick={() => {
              setSelectedLocation(undefined);
            }}
          >
            <div
              className="flex justify-center items-center my-1"
              onClick={() => {
                setIsSearchLocationDetailDrawerVisible(true);
              }}
            >
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
                    <span className={`tag ${TAG_COLOR_MAPPER[tag]}`}></span>
                  ))}
                </div>
              </div>

              <div className="flex w-auto px-2 h-12 bg-red-500 rounded justify-center items-center text-white text-lg font-bold">
                {`${selectedLocation.currentCapacity}/${selectedLocation.maxCapacity}`}
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
