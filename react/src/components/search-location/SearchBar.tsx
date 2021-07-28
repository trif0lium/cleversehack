import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { searchBarStore } from "../../store/searchBarStore";
import { Form } from "../styles/Styles";
import Select from "react-select";

import {
  SearchBarCheckBoxOption,
  SearchBarSelectOption,
  SEARCH_BAR_CHECK_BOX_OPTION,
  SEARCH_BAR_SELECT_OPTION,
} from "./search-location";

export const SearchBar = () => {
  const [checkBox, setCheckBox] = useState<string[]>([]);

  const { setSearchTerm, setSortBy, setCheckBoxOptions } = searchBarStore;

  useEffect(() => {
    setCheckBoxOptions(checkBox);
  }, [checkBox]);

  const options = useMemo(() => {
    const obj: any[] = [];
    Object.values(SearchBarCheckBoxOption).map((key) => {
      obj.push({ value: key, label: SEARCH_BAR_CHECK_BOX_OPTION[key] });
    });
    return obj;
  }, []);

  const sortBy = useMemo(() => {
    const obj: any[] = [];
    Object.values(SearchBarSelectOption).map((key) => {
      obj.push({ value: key, label: SEARCH_BAR_SELECT_OPTION[key] });
    });
    return obj;
  }, []);

  return (
    <div className="search-bar flex flex-col sm:flex-row bg-white shadow-inner w-full justify-between">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex sm:mt-4">
          <input
            className="search-text w-full h-10 sm:w-48 lg:w-72 sm:max-w-96 border-2 border-gray-200 rounded py-2 px-4 m-3
				text-tertiary leading-tight focus:outline-none  
				focus:border-primary"
            id="search-bar"
            type="text"
            placeholder="ชื่อสถานที่หรือบริเวณ..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col px-3 w-full">
          <h5 className="my-1">เรียงตาม</h5>

          {/* <select
              name="sortBy"
              id="sortBy-select"
              className="mb-3 mx-3 block h-10 w-40 py-2 px-3 text-tertiary border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              onChange={(e) => {
                console.log(e.target.value);
                setSortBy(e.target.value);
                e.preventDefault();
              }}
            >
              {Object.values(SearchBarSelectOption).map((key) => (
                <option value={key} key={key}>
                  {SEARCH_BAR_SELECT_OPTION[key]}
                </option>
              ))}
            </select> */}
          <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
            <Select
              placeholder="เลือก..."
              defaultValue={{
                value: SearchBarSelectOption.DISTANCE,
                label: SEARCH_BAR_SELECT_OPTION[SearchBarSelectOption.DISTANCE],
              }}
              name="options"
              options={sortBy}
              className="basic-multi-select min-w-full"
              classNamePrefix="select"
              noOptionsMessage={(obj) => "ไม่มีตัวเลือก"}
            />
          </Form>
        </div>
        <div className="flex flex-col px-3 w-full">
          <h5 className="my-1">ตัวเลือกการกรอง</h5>
          <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
            <Select
              placeholder="เลือก..."
              isMulti
              name="options"
              options={options}
              className="basic-multi-select min-w-full"
              classNamePrefix="select"
              noOptionsMessage={(obj) => "ไม่มีตัวเลือก"}
              isClearable={true}
            />

            {/* {Object.values(SearchBarCheckBoxOption).map((key) => (
              <div
                onClick={() => {
                  console.log("onselect1", checkBox);

                  if (!checkBox.includes(key)) {
                    checkBox.push(key);
                    setCheckBox(checkBox);
                    console.log("onselect2.5", checkBox);
                  }
                  // else if (checkBox.length > 0) {
                  //   var filteredOptions = checkBox.filter((e) => e !== key);
                  //   setCheckBox(filteredOptions);
                  //   console.log("onselect2", checkBox);
                  // }
                  console.log("onselect3", checkBox);
                }}
              >
                <label className="form-checkbox-label ml-3">
                  <input className="form-checkbox-field" type="checkbox" />
                  <i className="form-checkbox-button"></i>
                  <span> {SEARCH_BAR_CHECK_BOX_OPTION[key]}</span>
                </label>
              </div>
            ))} */}
          </Form>
        </div>
      </div>
      <div className="flex flex-col m-3 w-auto sm:w-40">
        <button className="search-button flex h-10 rounded p-3 items-center justify-center text-white font-bold">
          ค้นหา
        </button>
        <button
          className="mt-2 text-tertiary text-xs underline"
          onClick={() => {
            setSearchTerm("");
            setSortBy("");
            setCheckBoxOptions([]);
          }}
        >
          เคลียร์ตัวเลือกการค้นหา
        </button>
      </div>
    </div>
  );
};
