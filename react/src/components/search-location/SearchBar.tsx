import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form } from '../styles/Styles';
import Select from 'react-select';

import {
  SearchBarSelectOption,
  SEARCH_BAR_SELECT_OPTION,
} from './search-location';
import { observer } from 'mobx-react-lite';
import { useDebounce } from '../../hooks/useDebounce';
import { searchStore } from '../../store/searchStore';

const _SearchBar = () => {
  const [selectedSortBy, setSelectedSortBy] = useState<SearchBarSelectOption>(
    SearchBarSelectOption.DISTANCE,
  );

  const sortOptions = useMemo(() => {
    return Object.values(SearchBarSelectOption).map((key) => {
      return { value: key, label: SEARCH_BAR_SELECT_OPTION[key] };
    });
  }, []);

  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const [keyword, setKeyword] = useState<string>('');
  const debouncedSearch = useDebounce(keyword, 300);
  useEffect(() => {
    searchStore.setSearch(debouncedSearch);
  }, [debouncedSearch]);

  const reset = useCallback(() => {
    setKeyword('');
    searchStore.reset();
  }, []);

  return (
    <>
      <div className="search-bar flex flex-col sm:flex-row bg-white shadow-inner w-full justify-between px-3">
        <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
          <div className="flex sm:mt-4 w-full sm:mr-3">
            <input
              className="search-text h-10 w-full sm:max-w-96 border-2 border-gray-200 rounded p-2 px-4 my-3 text-tertiary leading-tight focus:outline-none focus:border-primary"
              id="search-bar"
              type="text"
              value={keyword}
              placeholder="ชื่อสถานที่หรือบริเวณ..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col w-full sm:mr-3">
            <h5 className="my-1">เรียงตาม</h5>
            <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
              <Select
                placeholder="เลือก..."
                defaultValue={{
                  value: SearchBarSelectOption.DISTANCE,
                  label:
                    SEARCH_BAR_SELECT_OPTION[SearchBarSelectOption.DISTANCE],
                }}
                value={{
                  value: selectedSortBy,
                  label: SEARCH_BAR_SELECT_OPTION[selectedSortBy],
                }}
                name="options"
                options={sortOptions}
                className="basic-multi-select min-w-full"
                classNamePrefix="select"
                noOptionsMessage={(obj) => 'ไม่มีตัวเลือก'}
                theme={(theme) => ({
                  ...theme,
                  borderWidth: 1,
                  colors: {
                    ...theme.colors,
                    primary50: '#E5F9F9',
                    primary25: '#F3F3F3',
                    primary: '#1A7676',
                  },
                })}
                onChange={(e) => {
                  setSelectedSortBy(e?.value || selectedSortBy);
                }}
              />
            </Form>
          </div>
          <div className="flex flex-col w-full sm:mr-3">
            <h5 className="my-1">ตัวเลือกการกรอง</h5>
            <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
              <Select
                placeholder="เลือก..."
                isMulti
                name="options"
                value={selectedOptions}
                options={options}
                className="basic-multi-select min-w-full"
                classNamePrefix="select"
                noOptionsMessage={(obj) => 'ไม่มีตัวเลือก'}
                isClearable={true}
                theme={(theme) => ({
                  ...theme,
                  borderWidth: 1,
                  colors: {
                    ...theme.colors,
                    primary50: '#E5F9F9',
                    primary25: '#F3F3F3',
                    primary: '#1A7676',
                  },
                })}
                onChange={(e) => {
                  setSelectedOptions(e);
                }}
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
        <div className="flex flex-col sm:flex-col-reverse w-auto sm:w-40 mb-2 justify-center">
          <button className="search-button flex h-10 rounded p-3 items-center justify-center text-white font-bold">
            ค้นหา
          </button>
          <button
            className="text-tertiary text-xs underline mt-2 mb-3 sm:mb-1 sm:mt-0"
            onClick={() => {
              searchStore.reset();
            }}
          >
            เคลียร์ตัวเลือกการค้นหา
          </button>
        </div>
      </div>
      {searchStore.isFiltering && (
        <div className="flex w-full items-center justify-center">
          <button
            className="reset-button flex h-10 rounded p-3 items-center justify-center text-white font-bold"
            onClick={() => {
              searchStore.reset();
            }}
          >
            เคลียร์ตัวเลือกการค้นหา
          </button>
        </div>
      )}
    </>
  );
};

export const SearchBar = observer(_SearchBar);
