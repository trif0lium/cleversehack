import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { io, Socket } from "socket.io-client";

const API_URL = "cleversehack-api-dot-everyday-development.et.r.appspot.com";

class DataStore {
  websocket: Socket = io(`wss://${API_URL}`, { transports: ["websocket"] });
  websocketReady: boolean = false;

  hospitelList: Hospitel[] = [];
  hospitelListLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    this.websocket.on("connect", () => {
      this.setWebsocketReady(this.websocket.connected);
      if (this.websocket.connected) this.subscribeCapacityUpdate();
    });

    try {
      this.setHospitelListLoading(true);
      const { data } = await axios.get<Hospitel[]>(
        `https://${API_URL}/hospitel`
      );
      this.setHospitelList(data);
      this.setHospitelListLoading(false);
      this.subscribeCapacityUpdate();
    } catch (_) {}
  }

  @action
  setHospitelListLoading(loading: boolean) {
    this.hospitelListLoading = loading;
  }

  @action
  setHospitelList(list: Hospitel[]) {
    this.hospitelList = list;
  }

  @action
  setWebsocketReady(ready: boolean) {
    this.websocketReady = ready;
  }

  subscribeCapacityUpdate() {
    if (this.websocketReady && !this.hospitelListLoading) {
      this.hospitelList.forEach((h) => {
        this.websocket.emit("hospitel:subscribe", h.code);
      });
    }
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
