import { observer } from 'mobx-react-lite';
import React from 'react';
import { FaClinicMedical, FaHospitalAlt } from 'react-icons/fa';
import { Hospitel } from '../../store/dataStore';
import { FacilityType, TAG_COLOR_MAPPER, TAG_MAPPER } from '../const';

interface SearchLocationDetailDrawerProps {
  selectedLocation: Hospitel;
}

const _SearchLocationCard = ({
  selectedLocation,
}: SearchLocationDetailDrawerProps) => {
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
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            {selectedLocation?.type === FacilityType.HOSPITAL ? (
              <FaHospitalAlt className="mr-2 w-5 h-5" />
            ) : (
              <FaClinicMedical className="mr-2 w-5 h-5" />
            )}

            <h3 className="mr-2">{selectedLocation?.name}</h3>
            {selectedLocation.relativeDistance && (
              <h5 className="mr-2">{`${selectedLocation.relativeDistance} km`}</h5>
            )}
          </div>
          <h5>{selectedLocation?.address}</h5>
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
        <div className="flex flex-col items-center text-center w-auto sm:w-32">
          <h5 className="text-xs sm:text-sm">จำนวนเตียงว่าง</h5>
          <div className="flex w-auto px-2 h-12 rounded justify-center items-center text-red-500 text-lg font-bold">
            {`${selectedLocation?.currentCapacity}/${selectedLocation?.maxCapacity}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchLocationCard = observer(_SearchLocationCard);
