import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { SearchLocationMenu } from "../components/search-location/search-location";
import { SearchLocationContent } from "../components/search-location/SearchLocationContent";
import { SearchLocationMenuTab } from "../components/search-location/SearchLocationMenuTab";

const SearchLocation = () => {
  const [menu, setMenu] = useState<SearchLocationMenu>(SearchLocationMenu.MAP);

  const history = useHistory();

  return (
    <>
      <div className="navbar-tab shadow-lg">
        <div className="navbar flex bg-white justify-between">
          <div
            className="back-button flex p-2 text-tertiary text-sm"
            onClick={() => history.push("/menu")}
          >
            <IoMdArrowRoundBack className="h-5 w-5 mr-2" />
            กลับสู่หน้าหลัก
          </div>
          <div className="flex text-tertiary items-center">
            <button className="option-button flex text-tertiary items-center mr-2 pr-1">
              <GrFormAdd className="h-5 w-5 mr-1" /> เพิ่ม
            </button>
            <button className="option-button flex text-tertiary items-center mr-3 pr-1">
              <FaSearch className="h-3 w-3 mr-2 ml-1" /> ค้นหา
            </button>
          </div>
        </div>
        <div className="flex bg-base justify-center">
          <SearchLocationMenuTab menu={menu} setMenu={setMenu} />
        </div>
      </div>
      <SearchLocationContent menu={menu} />
    </>
  );
};

export default SearchLocation;
