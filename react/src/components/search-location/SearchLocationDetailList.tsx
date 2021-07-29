import React, { useEffect, useState } from "react";
import { DetailList } from "../styles/DetailListStyles";
import {
  FacilityType,
  LocationType,
  MyLocationType,
  MOCK_DATA,
  TAG_COLOR_MAPPER,
} from "../const";
import { SearchLocationCard } from "./SearchLocationCard";
import { searchBarStore } from "../../store/searchBarStore";
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
  // const { searchTerm, sortBy, checkBoxOptions } = searchBarStore;
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
