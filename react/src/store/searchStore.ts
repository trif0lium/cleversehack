import { makeAutoObservable } from "mobx";

export class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
}
