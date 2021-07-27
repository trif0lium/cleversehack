import { SearchLocationMenu } from "./search-location";
import React from "react";
import { SearchLocationMap } from "./SearchLocationMap";
import { SearchLocationDetailList } from "./SearchLocationDetailList";

interface SearchLocationContentProps {
  menu: SearchLocationMenu;
}

export const SearchLocationContent = ({ menu }: SearchLocationContentProps) => {
  switch (menu) {
    case SearchLocationMenu.MAP:
      return <SearchLocationMap />;
    case SearchLocationMenu.DETAIL_LIST:
      return <SearchLocationDetailList />;
    default:
      return <SearchLocationMap />;
  }
};
