import { SearchBarSelectOption, SearchLocationMenu } from "./search-location";
import React from "react";
import { SearchLocationMap } from "./SearchLocationMap";
import { SearchLocationDetailList } from "./SearchLocationDetailList";

interface SearchLocationContentProps {
  menu: SearchLocationMenu;
  searchTerm: string;
  sortBy: SearchBarSelectOption;
  options: [];
  isVisibleSearchBar: boolean;
  setIsVisibleSearchBar: (isVisibleSearchBar: boolean) => void;
}

export const SearchLocationContent = ({
  menu,
  searchTerm,
  sortBy,
  options,
  isVisibleSearchBar,
  setIsVisibleSearchBar,
}: SearchLocationContentProps) => {
  switch (menu) {
    case SearchLocationMenu.MAP:
      return (
        <SearchLocationMap
          searchTerm={searchTerm}
          sortBy={sortBy}
          options={options}
          isVisibleSearchBar={isVisibleSearchBar}
          setIsVisibleSearchBar={setIsVisibleSearchBar}
        />
      );
    case SearchLocationMenu.DETAIL_LIST:
      return (
        <SearchLocationDetailList
          searchTerm={searchTerm}
          sortBy={sortBy}
          options={options}
        />
      );
    default:
      return (
        <SearchLocationMap
          searchTerm={searchTerm}
          sortBy={sortBy}
          options={options}
          isVisibleSearchBar={isVisibleSearchBar}
          setIsVisibleSearchBar={setIsVisibleSearchBar}
        />
      );
  }
};
