import { MyLocationType } from "../components/const";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";

class LocationStore {
  myLocation!: MyLocationType;
  isVisibleSearchBar!: boolean;
  distance!: string;

  constructor() {
    this.isVisibleSearchBar = false;
    makeAutoObservable(this, {
      myLocation: observable,
      isVisibleSearchBar: observable,
      distance: observable,
      setMyLocation: action,
      setIsVisibleSearchBar: action,
      setDistance: action,
    });
  }

  @action
  setMyLocation = (myLocation: MyLocationType) => {
    this.myLocation = myLocation;
  };

  @action
  setIsVisibleSearchBar = (isVisibleSearchBar: boolean) => {
    this.isVisibleSearchBar = isVisibleSearchBar;
  };

  @action
  setDistance = (distance: string) => {
    this.distance = distance;
  };
}

export const locationStore = new LocationStore();
