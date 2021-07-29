import React, { useEffect } from "react";
import { DetailList } from "../styles/DetailListStyles";
import { MOCK_DATA } from "../const";
import { SearchLocationCard } from "./SearchLocationCard";
import { SearchBarSelectOption } from "./search-location";

interface SearchLocationContentProps {
  searchTerm: string;
  sortBy: SearchBarSelectOption;
  options: [];
}

export const SearchLocationDetailList = ({
  searchTerm,
  sortBy,
  options,
}: SearchLocationContentProps) => {
  useEffect(() => {
    console.log("hhey", searchTerm, sortBy, options);
  }, [searchTerm, sortBy, options]);
  useEffect(() => {
    console.log("hhey1", searchTerm, sortBy, options);
  }, []);

  return (
    <DetailList>
      <div className="location-detail-list pt-5 md:grid md:grid-cols-2 lg:grid-cols-3 px-5">
        {MOCK_DATA.map((location) => (
          <SearchLocationCard selectedLocation={location} />
        ))}
      </div>
    </DetailList>
  );
};
