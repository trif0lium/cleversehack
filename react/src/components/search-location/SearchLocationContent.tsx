import { SearchLocationMenu } from "./search-location";
import React from "react";
import { SearchLocationMap } from "./SearchLocationMap";
import { SearchLocationDetailList } from "./SearchLocationDetailList";

interface SearchLocationContentProps {
  menu: SearchLocationMenu;
  isVisibleSearchBar: boolean;
  setIsVisibleSearchBar: (isVisibleSearchBar: boolean) => void;
}

export const SearchLocationContent = ({
  menu,
  isVisibleSearchBar,
  setIsVisibleSearchBar,
}: SearchLocationContentProps) => {
  switch (menu) {
    case SearchLocationMenu.MAP:
      return (
        <SearchLocationMap
          isVisibleSearchBar={isVisibleSearchBar}
          setIsVisibleSearchBar={setIsVisibleSearchBar}
        />
      );
    case SearchLocationMenu.DETAIL_LIST:
      return <SearchLocationDetailList />;
    default:
      return (
        <SearchLocationMap
          isVisibleSearchBar={isVisibleSearchBar}
          setIsVisibleSearchBar={setIsVisibleSearchBar}
        />
      );
  }
};
