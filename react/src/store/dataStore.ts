import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { io, Socket } from "socket.io-client";

const API_URL = "cleversehack-api-dot-everyday-development.et.r.appspot.com";

interface _Hospitel extends Hospitel {
  timestamp: number;
  relativeDistance?: number;
}

class DataStore {
  websocket: Socket = io(`wss://${API_URL}`, { transports: ["websocket"] });
  websocketReady: boolean = false;

  hospitelList: _Hospitel[] = [];
  hospitelListLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    this.websocket.on("connect", () => {
      this.setWebsocketReady(this.websocket.connected);
      if (this.websocket.connected) {
        this.subscribeCapacityUpdate();
        this.websocket.on("hospitel:capacity-update", (data) => {
          this.setCurrentCapacity(
            data.hospitelCode,
            data.currentCapacity,
            data.maxCapacity,
            data.timestamp
          );
        });
      }
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
    const _list = list.map((l) => {
      return { ...l, timestamp: Date.now() };
    });

    this.hospitelList = _list;
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
    maxCapacity: number,
    timestamp: number
  ) {
    const hospitel = this.hospitelList.find((h) => h.code === hospitelCode);
    if (
      hospitel &&
      (hospitel.currentCapacity !== currentCapacity ||
        hospitel.maxCapacity !== maxCapacity) &&
      hospitel.timestamp < timestamp
    ) {
      hospitel.currentCapacity = currentCapacity;
      hospitel.maxCapacity = maxCapacity;
      hospitel.timestamp = timestamp;
    }
  }
}

export const dataStore = new DataStore();
