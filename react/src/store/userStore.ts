import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    makeAutoObservable(true);
  }
}

export const userStore = new UserStore();
