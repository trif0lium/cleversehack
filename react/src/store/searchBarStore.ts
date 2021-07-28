import { MyLocationType } from "../components/const";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import {
  SearchBarCheckBoxOption,
  SearchBarSelectOption,
} from "../components/search-location/search-location";

class SearchBarStore {
  searchTerm: string = "";
  sortBy: string = SearchBarSelectOption.DISTANCE;
  checkBoxOptions!: string[];

  constructor() {
    makeAutoObservable(this, {
      searchTerm: observable,
      sortBy: observable,
      checkBoxOptions: observable,
      setSearchTerm: action,
      setSortBy: action,
      setCheckBoxOptions: action,
      addCheckBoxOption: action,
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
  setCheckBoxOptions = (checkBoxOptions: string[]) => {
    this.checkBoxOptions = checkBoxOptions;
  };

  @action
  addCheckBoxOption = (checkBoxOption: string) => {
    if (this.checkBoxOptions.includes(checkBoxOption)) {
      // var index = this.checkBoxOptions.indexOf(checkBoxOption);
      var filteredOptions = this.checkBoxOptions.filter(
        (e) => e !== checkBoxOption
      );
      this.checkBoxOptions = filteredOptions;
    } else {
      this.checkBoxOptions.push(checkBoxOption);
    }
    console.log("op:", this.checkBoxOptions);
  };
}

export const searchBarStore = new SearchBarStore();
