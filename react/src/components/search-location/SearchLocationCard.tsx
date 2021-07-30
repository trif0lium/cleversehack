import { observer } from 'mobx-react-lite';
import React from 'react';
import { FaClinicMedical, FaHospitalAlt } from 'react-icons/fa';
import { useRelativeTime } from '../../hooks/useRelativeTime';
import { Hospitel } from '../../store/dataStore';
import { FacilityType, TAG_COLOR_MAPPER, TAG_MAPPER } from '../const';

interface SearchLocationDetailDrawerProps {
  selectedLocation: Hospitel;
}

const _SearchLocationCard = ({
  selectedLocation,
}: SearchLocationDetailDrawerProps) => {
  const { relativeTime } = useRelativeTime(selectedLocation.timestamp);
  return (
    <div
      className="w-auto flex-shrink flex-wrap mb-1 sm:mr-5"
      onClick={() => {}}
    >
      <div
        className={`detail-card flex justify-between ${
          selectedLocation ? `h-auto` : `h-0`
        } border-b-2 flex flew-col p-5 shadow-sm rounded-md`}
      >
        <div className="flex flex-col ">
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
              {selectedLocation.relativeDistance && (
                <p className="mr-2 pr-1 border-r-2">{`${selectedLocation.relativeDistance} km`}</p>
              )}

              <p className="mr-2">{`อัพเดตเมื่อ ${relativeTime}`}</p>
            </div>
          </div>
          {/* <h5>{selectedLocation?.address}</h5> */}
          <div className="flex mt-2">
            {selectedLocation?.tags.map((tag) => (
              <span
                className={`tag-drawer px-2 text-white text-xs ${TAG_COLOR_MAPPER[tag]}`}
              >
                {TAG_MAPPER[tag]}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between w-auto items-end px-2 sm:w-32">
          <div className="flex flex-col items-right text-right">
            <h5 className="text-xs sm:text-sm ">จำนวนเตียงที่ว่าง</h5>
            <div className="flex justify-end">
              <div
                className={`flex w-auto h-12 rounded justify-center items-center ${
                  selectedLocation?.currentCapacity ===
                  selectedLocation?.maxCapacity
                    ? `text-red-500`
                    : `text-yellow-400`
                } text-xl font-bold`}
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
          <a className="flex underline text-xs text-tertiary">ดูข้อมูล</a>
        </div>
      </div>
    </div>
  );
};

export const SearchLocationCard = observer(_SearchLocationCard);
