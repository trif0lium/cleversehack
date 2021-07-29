import React from 'react';
import { DetailList } from '../styles/DetailListStyles';
import { SearchLocationCard } from './SearchLocationCard';
import { observer } from 'mobx-react-lite';
import { useHospitelList } from '../../hooks/useHospitelList';

const _SearchLocationDetailList = () => {
  const { hospitelList, relativeDistanceList } = useHospitelList();

  return (
    <DetailList>
      <div className="location-detail-list pt-5 md:grid md:grid-cols-2 lg:grid-cols-3 px-5">
        {hospitelList.map((location) => (
          <SearchLocationCard
            key={location.code}
            selectedLocation={location}
            relativeDistance={relativeDistanceList[location.code]}
          />
        ))}
      </div>
    </DetailList>
  );
};

export const SearchLocationDetailList = observer(_SearchLocationDetailList);
