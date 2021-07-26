import { action, computed, makeObservable, observable } from "mobx";
import { AxiosInstance } from "axios";

export type TPlaceMark = {
  id?: number;
  name: string;
  description: string;
  extraData?: string;
  lat: number;
  long: number;
};

export default class TravelStore {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    makeObservable(this);
    this.client = client;
  }

  @observable _placeMarks: TPlaceMark[] = [];

  @computed get placeMarks() {
    return this._placeMarks;
  }

  @action setPlaceMarks = (placeMarks: TPlaceMark[]) =>
    (this._placeMarks = placeMarks);

  @action addPlaceMark = (placeMark: TPlaceMark) => {
    this.client.post("/travel", placeMark).then((response) => {
      // console.log(response);
      this.getPlaceMarks();
    });
  };

  @action getPlaceMarks = async () => {
    return await this.client.get("/travel").then((response) => {
      this.setPlaceMarks(response.data);
      return this.placeMarks;
    });
  };

  @action removeMark = async (id: number) => {
    return await this.client.delete(`/travel/${id}/`).then((response) => {
      this.getPlaceMarks();
      return this.placeMarks;
    });
  };

  // @action addPlaceMark = (placeMark: TPlaceMark) => {
  //   this.client.post("/travel", placeMark).then((response) => {
  //     console.log(response);
  //   });
  //   this.loadPlaceMarks();
  // };
  //
  // @action removePlaceMark = (placeMark: TPlaceMark) => {
  //   this._placeMarks = this.placeMarks.filter((mark) => mark !== placeMark);
  // };
  //
  // @action addPlaceMarks = (placeMarks: TPlaceMark[]) =>
  //   this._placeMarks.concat(placeMarks);
  //
  // @action loadPlaceMarks = (): Promise<TPlaceMark[]> => {
  //   return this.client.get("/travel").then((response) => {
  //     console.log(response);
  //     this.setPlaceMarks(response.data);
  //     return this.placeMarks;
  //   });
  // };
}
