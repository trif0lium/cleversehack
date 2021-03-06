import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import {
  FaClinicMedical,
  FaHospitalAlt,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';
import { useAvailableCapacity } from '../../hooks/useAvailableCapacity';
import { useRelativeTime } from '../../hooks/useRelativeTime';
import { locationStore } from '../../store/locationStore';
import {
  FacilityType,
  LocationType,
  MyLocationType,
  TAG_COLOR_MAPPER,
  TAG_MAPPER,
} from '../const';

interface SearchLocationDetailDrawerProps {
  selectedLocation: LocationType;
  myLocation?: MyLocationType;
}

const _SearchLocationDetailDrawer = ({
  selectedLocation,
}: SearchLocationDetailDrawerProps) => {
  const { myLocation, setDistance } = locationStore;
  const { relativeTime } = useRelativeTime(selectedLocation.timestamp);
  const { availableCapacity, availableCapacityPercent } = useAvailableCapacity(
    selectedLocation.currentCapacity,
    selectedLocation.maxCapacity,
  );

  const haversine_distance = useMemo(() => {
    if (myLocation) {
      var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = selectedLocation.latitude * (Math.PI / 180); // Convert degrees to radians
      var rlat2 = myLocation.lat * (Math.PI / 180); // Convert degrees to radians
      var difflat = rlat2 - rlat1; // Radian difference (latitudes)
      var difflon =
        (myLocation.lng - selectedLocation.longitude) * (Math.PI / 180); // Radian difference (longitudes)

      var d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2),
          ),
        );
      setDistance(d.toFixed(3));
      return d.toFixed(3);
    }
  }, [selectedLocation, myLocation]);

  return (
    <div className="search-drawer w-auto flex-shrink flex-wrap">
      <div
        className={`search-drawer-content flex-shrink ${
          selectedLocation ? `h-auto` : `h-0`
        } bg-white flex flew-col p-5 shadow-lg`}
      >
        <div className="flex">
          <div className="flex flex-col items-left mb-2">
            <div className="flex">
              {selectedLocation?.type === FacilityType.HOSPITAL ? (
                <FaHospitalAlt className="mr-2 w-5 h-5" />
              ) : (
                <FaClinicMedical className="mr-2 w-5 h-5" />
              )}

              <h3 className="mr-2">{selectedLocation?.name}</h3>
            </div>
            <div className="flex text-xs text-tertiary">
              {haversine_distance && (
                <p className="mr-2">{`${haversine_distance} km |`}</p>
              )}
              <p className="mr-2">{relativeTime}</p>
            </div>
            <h5 className="mt-2">{selectedLocation?.address}</h5>
          </div>
          <div className="items-center text-center w-auto sm:w-32">
            <h5 className="text-xs sm:text-sm">??????????????????????????????????????????</h5>
            <div className="flex justify-center items-center">
              <div
                className={`flex w-auto h-12 rounded justify-center items-center ${
                  availableCapacityPercent < 20
                    ? 'text-red-500'
                    : availableCapacityPercent < 50
                    ? 'text-yellow-400'
                    : 'text-green-600'
                } text-2xl font-bold`}
              >
                {`${
                  selectedLocation?.maxCapacity -
                  selectedLocation?.currentCapacity
                }`}
              </div>
              <div className="flex w-auto h-12 rounded justify-center items-center text-gray-400 text-md font-bold">
                {`/${selectedLocation?.maxCapacity}`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          {selectedLocation?.tags.map((tag) => (
            <span
              className={`tag-drawer px-2 text-white text-xs ${TAG_COLOR_MAPPER[tag]}`}
            >
              {TAG_MAPPER[tag]}
            </span>
          ))}
        </div>

        <div className="flex flex-col mt-4 h-20">
          <h5>??????????????????????????????</h5>

          <h5 className="location-description flex-wrap overflow-auto">
            {selectedLocation.additionalDetail ?? '?????????????????????????????????????????????'}
          </h5>
        </div>

        {/*TODO: redirect */}
        <a href={'https://forms.gle/zHP4YbmMty9WAhPA9'}>
          <h5 className="underline mt-4 mb-2">???????????????/????????????????????????????????????</h5>
        </a>
        <div className="flex items-center justify-between">
          <button
            className={`drawer-button rounded-md mr-1 w-full ${
              !selectedLocation.googleMapsURL
                ? `border text-tertiary`
                : `border-primary text-primary`
            } `}
            disabled={!!selectedLocation.googleMapsURL}
          >
            <a
              href={`${selectedLocation.googleMapsURL}`}
              className="flex items-center justify-between"
            >
              <FaMapMarkedAlt className="w-5 h-5 m-2" />
              <p className="text-sm pr-2 ">??????????????????</p>
            </a>
          </button>

          <button
            className={`drawer-button rounded-md mr-1 w-full ${
              !selectedLocation.phoneNumber
                ? `border text-tertiary`
                : `border border-primary text-primary`
            } `}
            disabled={!selectedLocation.phoneNumber}
          >
            <a
              href={`${selectedLocation.phoneNumber}`}
              className="flex items-center justify-between"
            >
              <FaPhoneAlt className="w-5 h-5 m-2" />
              <p className="text-xs xs:text-sm pr-2">???????????????????????????</p>
            </a>
          </button>
          <button
            className={`drawer-button rounded-md mr-1 w-full ${
              !selectedLocation.website
                ? `border text-tertiary`
                : `border border-primary text-primary`
            } `}
            disabled={!selectedLocation.website}
          >
            <a
              href={`${selectedLocation.website}`}
              className="flex items-center justify-between"
            >
              <IoIosGlobe className="w-5 h-5 m-2" />
              <p className="text-sm pr-2 ">????????????????????????</p>
            </a>
          </button>
          {/* <button className="drawer-button rounded-md mr-2">
            <FaEdit className="w-5 h-5 m-2" />
            <p className="text-sm pr-2 hidden xs:block">?????????????????????????????????</p>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export const SearchLocationDetailDrawer = observer(_SearchLocationDetailDrawer);
