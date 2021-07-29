import React, { useCallback, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import {
  SearchBarSelectOption,
  SearchLocationMenu,
} from "../components/search-location/search-location";
import { SearchBar } from "../components/search-location/SearchBar";
import { SearchLocationContent } from "../components/search-location/SearchLocationContent";
import { SearchLocationMenuTab } from "../components/search-location/SearchLocationMenuTab";
import { searchBarStore } from "../store/searchBarStore";

const SearchLocation = () => {
  const [menu, setMenu] = useState<SearchLocationMenu>(SearchLocationMenu.MAP);
  const [isVisibleSearchBar, setIsVisibleSearchBar] = useState(false);
  const [sortBy, setSortBy] = useState<SearchBarSelectOption>(
    SearchBarSelectOption.DISTANCE
  );
  const [options, setOptions] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const history = useHistory();

  return (
    <>
      <div className="navbar-tab ">
        <div className="navbar flex bg-white shadow-lg justify-between">
          <button
            className="back-button flex p-2 text-tertiary text-sm"
            onClick={() => history.push("/menu")}
          >
            <IoMdArrowRoundBack className="option-button-icon h-5 w-5 mr-2" />
            <p className="truncate">เมนูหลัก</p>
          </button>
          <div className="flex text-tertiary items-center">
            <button className="option-button flex text-tertiary items-center mr-2 pr-1">
              <MdAdd className="icon h-5 w-5 mr-1" /> เพิ่ม
            </button>
            <button
              className={`option-button flex items-center mr-3 pr-1 ${
                isVisibleSearchBar ? `font-bold text-primary` : `text-tertiary`
              }`}
              onClick={() =>
                isVisibleSearchBar
                  ? setIsVisibleSearchBar(false)
                  : setIsVisibleSearchBar(true)
              }
            >
              <FaSearch className="icon h-3 w-3 mr-2 ml-1" /> ค้นหา
            </button>
          </div>
        </div>
        {isVisibleSearchBar && (
          <SearchBar
            setSearchTerm={setSearchTerm}
            setSortBy={setSortBy}
            setOptions={setOptions}
          />
        )}

        <div className="flex bg-base justify-center">
          <SearchLocationMenuTab menu={menu} setMenu={setMenu} />
        </div>
      </div>
      <SearchLocationContent
        menu={menu}
        searchTerm={searchTerm}
        sortBy={sortBy}
        options={options}
        isVisibleSearchBar={isVisibleSearchBar}
        setIsVisibleSearchBar={setIsVisibleSearchBar}
      />
    </>
  );
};

export default SearchLocation;
