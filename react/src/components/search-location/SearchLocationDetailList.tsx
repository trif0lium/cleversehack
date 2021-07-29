import React, { useEffect } from "react";
import { DetailList } from "../styles/DetailListStyles";
import { MOCK_DATA } from "../const";
import { SearchLocationCard } from "./SearchLocationCard";
import { SearchBarSelectOption } from "./search-location";
import { observer } from "mobx-react-lite";
import { useHospitelList } from "../../hooks/useHospitelList";

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
      <div className="location-detail-list pt-5 md:grid md:grid-cols-2 lg:grid-cols-3 px-5">
        {hospitelList.map((location) => (
          <SearchLocationCard key={location.code} selectedLocation={location} />
        ))}
      </div>
    </DetailList>
  );
};

export const SearchLocationDetailList = observer(_SearchLocationDetailList);
