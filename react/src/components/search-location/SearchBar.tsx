import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { useDebounce } from '../../hooks/useDebounce';
import { searchStore } from '../../store/searchStore';
import { Form } from '../styles/Styles';
import {
  SearchBarCheckBoxOption,
  SearchBarSelectOption,
  SEARCH_BAR_CHECK_BOX_OPTION,
  SEARCH_BAR_SELECT_OPTION,
} from './search-location';

const _SearchBar = () => {
  useEffect(() => {
    if (!searchStore.sort)
      searchStore.setSort({ field: 'relativeDistance', direction: 'asc' });

    if (searchStore.filters.length === 0) searchStore.setFilters([]);
  }, []);

  const filterOptions = useMemo(() => {
    return Object.values(SearchBarCheckBoxOption).map((key) => {
      return { value: key, label: SEARCH_BAR_CHECK_BOX_OPTION[key] };
    });
  }, []);

  const sortOptions = useMemo(() => {
    return Object.values(SearchBarSelectOption).map((key) => {
      return { value: key, label: SEARCH_BAR_SELECT_OPTION[key] };
    });
  }, []);

  const [selectedSortOption, setSelectedSortOption] =
    useState<SearchBarSelectOption>(SearchBarSelectOption.DISTANCE);
  useEffect(() => {
    searchStore.setSort({
      field: {
        [SearchBarSelectOption.DISTANCE]: 'relativeDistance',
        [SearchBarSelectOption.TYPE]: 'type',
        [SearchBarSelectOption.AREA]: 'type',
        [SearchBarSelectOption.LOCATION]: 'type',
      }[selectedSortOption],
      direction: 'asc',
    });
  }, [selectedSortOption]);

  const [selectedFilterOptions, setSelectedFilterOptions] = useState<any>([]);
  useEffect(() => {
    const _filters = selectedFilterOptions
      .map((f: { value: string }) => {
        if (f.value === SearchBarCheckBoxOption.HOSPITEL)
          return 'ONLY_HOSPITEL';

        if (f.value === SearchBarCheckBoxOption.FIELD_HOSPITAL)
          return 'ONLY_HOSPITAL';

        if (f.value === SearchBarCheckBoxOption.AVAILABILITY)
          return 'ONLY_AVAILABLE';

        return undefined;
      })
      .filter((f: any) => f);

    searchStore.setFilters(_filters);
  }, [selectedFilterOptions]);

  const [keyword, setKeyword] = useState<string>('');
  const debouncedSearch = useDebounce(keyword, 300);
  useEffect(() => {
    searchStore.setSearch(debouncedSearch);
  }, [debouncedSearch]);

  const reset = useCallback(() => {
    setKeyword('');
    setSelectedSortOption(SearchBarSelectOption.DISTANCE);
    setSelectedFilterOptions([]);
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
              placeholder="???????????????????????????????????????????????????????????????..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col w-full sm:mr-3">
            <h5 className="my-1">????????????????????????</h5>
            <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
              <Select
                placeholder="???????????????..."
                defaultValue={{
                  value: SearchBarSelectOption.DISTANCE,
                  label:
                    SEARCH_BAR_SELECT_OPTION[SearchBarSelectOption.DISTANCE],
                }}
                value={{
                  value: selectedSortOption,
                  label: SEARCH_BAR_SELECT_OPTION[selectedSortOption],
                }}
                name="options"
                options={sortOptions}
                className="basic-multi-select min-w-full"
                classNamePrefix="select"
                noOptionsMessage={(obj) => '???????????????????????????????????????'}
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
                  setSelectedSortOption(e?.value || selectedSortOption);
                }}
              />
            </Form>
          </div>
          <div className="flex flex-col w-full sm:mr-3">
            <h5 className="my-1">?????????????????????????????????????????????</h5>
            <Form className="flex flex-col sm:flex-wrap sm:flex-row mb-3 text-tertiary text-sm">
              <Select
                placeholder="???????????????..."
                isMulti
                name="options"
                value={selectedFilterOptions}
                options={filterOptions}
                className="basic-multi-select min-w-full"
                classNamePrefix="select"
                noOptionsMessage={(obj) => '???????????????????????????????????????'}
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
                  setSelectedFilterOptions(e);
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

        <div className="flex flex-col sm:flex-col-reverse w-auto sm:w-60 mb-2 justify-center">
          <button
            className="search-button flex h-10 w-full mb-3 sm:mb-0 sm:mt-6 rounded p-3 items-center justify-center text-white font-bold"
            onClick={() => {
              reset();
            }}
          >
            ?????????????????????????????????????????????????????????????????????
          </button>
          {/* <button
            className="text-tertiary text-xs underline mt-2 mb-3 sm:mb-1 sm:mt-0"
            onClick={() => {
              reset();
            }}
          >
            ?????????????????????????????????????????????????????????????????????
          </button> */}
          {/* <button
            className="text-white text-sm text-right mt-2 mb-3 sm:mb-1 sm:mt-0"
            onClick={() => {
              reset();
            }}
          >
            x
          </button> */}
        </div>
      </div>
      {searchStore.isFiltering && (
        <div className="flex w-full items-center justify-center">
          <button
            className="reset-button flex h-10 rounded p-3 items-center justify-center text-white font-bold"
            onClick={() => {
              reset();
            }}
          >
            ?????????????????????????????????????????????????????????????????????
          </button>
        </div>
      )}
    </>
  );
};

export const SearchBar = observer(_SearchBar);
