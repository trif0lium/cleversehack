import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { io, Socket } from "socket.io-client";

const API_URL = "cleversehack-api-dot-everyday-development.et.r.appspot.com";

class DataStore {
  websocket: Socket = io(`wss://${API_URL}`, { transports: ["websocket"] });
  hospitelList: Hospitel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    try {
      const { data } = await axios.get<Hospitel[]>(
        `https://${API_URL}/hospitel`
      );
      this.setHospitelList(data);
    } catch (_) {}
  }

  @action
  setHospitelList(list: Hospitel[]) {
    this.hospitelList = list;
  }
}

export const dataStore = new DataStore();
