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
    <DetailList>
      <div className="location-detail-list py-5 overflow-auto md:grid md:grid-cols-2 px-5">
        {hospitelList.map((location) => (
          <SearchLocationCard key={location.code} selectedLocation={location} />
        ))}
      </div>
    </DetailList>
  );
};

export const SearchLocationDetailList = observer(_SearchLocationDetailList);
