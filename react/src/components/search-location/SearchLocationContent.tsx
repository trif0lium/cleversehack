import { SearchLocationMenu } from "./search-location";
import React from "react";
import { SearchLocationMap } from "./SearchLocationMap";
import { SearchLocationDetailList } from "./SearchLocationDetailList";

interface SearchLocationContentProps {
  menu: SearchLocationMenu;
  isVisibleSearchBar: boolean;
}

export const SearchLocationContent = ({
  menu,
  isVisibleSearchBar,
}: SearchLocationContentProps) => {
  switch (menu) {
    case SearchLocationMenu.MAP:
      return <SearchLocationMap isVisibleSearchBar={isVisibleSearchBar} />;
    case SearchLocationMenu.DETAIL_LIST:
      return <SearchLocationDetailList />;
    default:
      return <SearchLocationMap isVisibleSearchBar={isVisibleSearchBar} />;
  }
};
