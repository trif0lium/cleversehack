import { makeAutoObservable } from "mobx";

class DataStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const dataStore = new DataStore();
