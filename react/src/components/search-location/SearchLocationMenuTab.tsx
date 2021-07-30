import { SEARCH_LOCATION_MENU } from "./search-location";
import { SearchLocationMenu } from "./search-location";
import React from "react";

interface SearchLocationMenuTabProps {
  menu: SearchLocationMenu;
  setMenu: (menu: SearchLocationMenu) => void;
}
export const SearchLocationMenuTab = ({
  menu,
  setMenu,
}: SearchLocationMenuTabProps) => {
  return (
    <>
      {Object.values(SearchLocationMenu).map((key) => (
        <div
          className={`flex w-full h-7 shadow-lg ${
            menu == key
              ? `bg-white border-b-2 border-primary text-primary`
              : `text-tertiary shadow-inner`
          }`}
        >
          <button
            className={`menu-button ${menu == key ? `font-bold` : ``}`}
            key={key}
            onClick={() => setMenu(key)}
          >
            {SEARCH_LOCATION_MENU[key]}
          </button>
        </div>
      ))}
    </>
  );
};
