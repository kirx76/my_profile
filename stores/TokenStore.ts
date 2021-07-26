import Cookie from "mobx-cookie";
import { action, makeAutoObservable, observable } from "mobx";

export default class TokenStore {
  @observable _token: Cookie;
  @observable server_token: string;

  constructor(initialData) {
    makeAutoObservable(this);
    this._token = new Cookie("Authorization");
    this.server_token = initialData?.server_token || null;
    // console.log(initialData, "initialData");
    // if (!initialData?.server_token) {
    //   this._token.remove();
    // }
  }

  @action get() {
    return this.server_token || this._token.value;
  }

  @action set = (token: string, server = false) => {
    if (server) {
      this.server_token = token;
    } else {
      this._token.set(token, { expires: 365 });
    }
  };

  @action remove = () => {
    this._token.remove();
    this.server_token = null;
  };
}
