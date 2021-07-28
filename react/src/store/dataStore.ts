import { action, makeAutoObservable } from "mobx";
import axios from "axios";

const API_URL =
  "https://cleversehack-api-dot-everyday-development.et.r.appspot.com";

class DataStore {
  hospitelList: Hospitel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    try {
      const { data } = await axios.get<Hospitel[]>(`${API_URL}/hospitel`);
      this.setHospitelList(data);
    } catch (_) {}
  }

  @action
  setHospitelList(list: Hospitel[]) {
    this.hospitelList = list;
  }
}

export const dataStore = new DataStore();
