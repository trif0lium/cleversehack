import { MyLocationType } from "../components/const";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import {
  SearchBarCheckBoxOption,
  SearchBarSelectOption,
} from "../components/search-location/search-location";
import { OptionsType } from "react-select/src/types";
class SearchBarStore {
  searchTerm: string = "";
  sortBy: string = SearchBarSelectOption.DISTANCE;
  checkBoxOptions?: OptionsType<any>;
  isFiltering: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      searchTerm: observable,
      sortBy: observable,
      checkBoxOptions: observable,
      isFiltering: observable,
      setSearchTerm: action,
      setSortBy: action,
      setCheckBoxOptions: action,
      setIsFiltering: action,
    });
  }

  @action
  setSearchTerm = (searchTerm: string) => {
    this.searchTerm = searchTerm;
  };

  @action
  setSortBy = (sortBy: string) => {
    this.sortBy = sortBy;
  };

  @action
  setCheckBoxOptions = (checkBoxOptions: OptionsType<any>) => {
    console.log("check1", this.checkBoxOptions);

    this.checkBoxOptions = checkBoxOptions;
    console.log("check2", this.checkBoxOptions);
  };

  @action
  setIsFiltering = (isFiltering: boolean) => {
    this.isFiltering = isFiltering;
  };
}

export const searchBarStore = new SearchBarStore();
