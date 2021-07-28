import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { io, Socket } from "socket.io-client";

const API_URL = "cleversehack-api-dot-everyday-development.et.r.appspot.com";

class DataStore {
  websocket: Socket = io(`wss://${API_URL}`, { transports: ["websocket"] });
  websocketReady: boolean = false;

  hospitelList: Hospitel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    this.websocket.on("connection", () => {
      this.setWebsocketReady(this.websocket.connected);
    });

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

  @action
  setWebsocketReady(ready: boolean) {
    this.websocketReady = ready;
  }

  @action
  setCurrentCapacity(
    hospitelCode: string,
    currentCapacity: number,
    maxCapacity: number
  ) {
    const hospitel = this.hospitelList.find((h) => h.code === hospitelCode);
    if (
      hospitel &&
      (hospitel.currentCapacity !== currentCapacity ||
        hospitel.maxCapacity !== maxCapacity)
    ) {
      hospitel.currentCapacity = currentCapacity;
      hospitel.maxCapacity = maxCapacity;
    }
  }
}

export const dataStore = new DataStore();
