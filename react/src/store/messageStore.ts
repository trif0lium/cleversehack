import { makeAutoObservable } from "mobx";

class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const messageStore = new MessageStore();
