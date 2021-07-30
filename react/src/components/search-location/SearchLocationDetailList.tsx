import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHospitelList } from '../../hooks/useHospitelList';
import { DetailList } from '../styles/DetailListStyles';
import { SearchBarSelectOption } from './search-location';
import { SearchLocationCard } from './SearchLocationCard';

interface SearchLocationContentProps {
  searchTerm: string;
  sortBy: SearchBarSelectOption;
  options: [];
}

const _SearchLocationDetailList = ({
  searchTerm,
  sortBy,
  options,
}: SearchLocationContentProps) => {
  const { hospitelList } = useHospitelList();

  return (
    <DetailList className="p-5 overflow-y-scroll">
      <div className="flex flex-col sm:flex-row">
        <h5 className="mr-3">{`ผลการค้นหา: พบ ${hospitelList.length} รายการ`}</h5>
      </div>
      <div className="location-detail-list mb-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {hospitelList.map((location) => (
          <SearchLocationCard key={location.code} selectedLocation={location} />
        ))}
      </div>
    </DetailList>
  );
};

export const SearchLocationDetailList = observer(_SearchLocationDetailList);
