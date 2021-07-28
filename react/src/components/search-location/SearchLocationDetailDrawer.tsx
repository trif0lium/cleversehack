import React, { useMemo } from "react";
import {
  FaHospitalAlt,
  FaClinicMedical,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEdit,
} from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { locationStore } from "../../store/locationStore";
import {
  FacilityType,
  LocationType,
  MyLocationType,
  Tag,
  MOCK_DATA,
  TAG_MAPPER,
  TAG_COLOR_MAPPER,
} from "../const";

interface SearchLocationDetailDrawerProps {
  selectedLocation: LocationType;
  myLocation?: MyLocationType;
}

export const SearchLocationDetailDrawer = ({
  selectedLocation,
}: SearchLocationDetailDrawerProps) => {
  const { myLocation, setDistance } = locationStore;

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
                Math.sin(difflon / 2)
          )
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
          <div>
            <div className="flex items-center mb-2">
              {selectedLocation?.type === FacilityType.HOSPITAL ? (
                <FaHospitalAlt className="mr-2 w-5 h-5" />
              ) : (
                <FaClinicMedical className="mr-2 w-5 h-5" />
              )}

              <h3 className="mr-2">{selectedLocation?.name}</h3>
              {haversine_distance && (
                <h5 className="mr-2">{`${haversine_distance} km`}</h5>
              )}
            </div>
            <h5>{selectedLocation?.address}</h5>
          </div>
          <div className="items-center text-center w-auto sm:w-32">
            <h5 className="text-xs sm:text-sm">จำนวนเตียงว่าง</h5>
            <div className="flex w-auto px-2 h-12 rounded justify-center items-center text-red-500 text-lg font-bold">
              {`${selectedLocation?.currentCapacity}/${selectedLocation?.maxCapacity}`}
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
        {selectedLocation.additionalDetail && (
          <div className="flex flex-col mt-4 h-20">
            <h5>รายละเอียด</h5>

            <h5 className="location-description flex-wrap overflow-auto">
              {selectedLocation.additionalDetail}
            </h5>
          </div>
        )}
        {/*TODO: redirect */}
        <a href={"http://www.google.com"}>
          <h5 className="underline mt-4 mb-2">แก้ไข/อัพเดตข้อมูล</h5>
        </a>
        <div className="flex items-center justify-between">
          <button className="drawer-button rounded-md mr-2 w-full">
            <FaMapMarkedAlt className="w-5 h-5 m-2" />
            <p className="text-sm pr-2 ">แผนที่</p>
          </button>
          <button className="drawer-button rounded-md mr-2 w-full">
            <FaPhoneAlt className="w-5 h-5 m-2" />
            <p className="text-xs xs:text-sm pr-2">โทรติดต่อ</p>
          </button>
          <button className="drawer-button rounded-md w-full">
            <IoIosGlobe className="w-5 h-5 m-2" />
            <p className="text-sm pr-2 ">เว็บไซต์</p>
          </button>
          {/* <button className="drawer-button rounded-md mr-2">
            <FaEdit className="w-5 h-5 m-2" />
            <p className="text-sm pr-2 hidden xs:block">แก้ไขข้อมูล</p>
          </button> */}
        </div>
      </div>
    </div>
  );
};
