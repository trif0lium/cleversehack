import React, { useState } from "react";
import { Form } from "../styles/Styles";
import {
  SearchBarCheckBoxOption,
  SearchBarSelectOption,
  SEARCH_BAR_CHECK_BOX_OPTION,
  SEARCH_BAR_SELECT_OPTION,
} from "./search-location";

export const SearchBar = () => {
  return (
    <div className="search-bar flex flex-col sm:flex-row bg-white shadow-inner w-full">
      <div className="flex sm:mt-4">
        <input
          className="search-text w-full h-10 sm:w-72 sm:max-w-96 border-2 border-gray-200 rounded py-2 px-4 m-3
				text-tertiary leading-tight focus:outline-none  
				focus:border-primary"
          id="search-bar"
          type="text"
          placeholder="ชื่อสถานที่หรือบริเวณ..."
          onChange={(e) => {
            // setSearchTerm(e.target.value)
          }}
        ></input>
      </div>
      <div className="flex flex-col">
        <h5 className="mx-3 my-1">เรียงตาม</h5>
        <div className="flex">
          <select
            name="genre"
            id="genre-select"
            className="mb-3 mx-3 block h-10 w-40 py-2 px-3 text-tertiary border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            {Object.values(SearchBarSelectOption).map((key) => (
              <option value={key} key={key}>
                {SEARCH_BAR_SELECT_OPTION[key]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="mx-3 my-1">ตัวเลือกการกรอง</h5>
        <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
          {Object.values(SearchBarCheckBoxOption).map((key) => (
            <label className="form-checkbox-label ml-3">
              <input className="form-checkbox-field" type="checkbox" />
              <i className="form-checkbox-button" onClick={() => {}}></i>
              <span> {SEARCH_BAR_CHECK_BOX_OPTION[key]}</span>
            </label>
          ))}
        </Form>
      </div>
    </div>
  );
};
