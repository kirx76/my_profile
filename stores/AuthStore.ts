import { AxiosInstance, AxiosResponse } from "axios";
import TokenStore from "./TokenStore";
import { action, computed, makeObservable, observable, toJS } from "mobx";

export default class AuthStore {
  _client: AxiosInstance;
  tokenStore: TokenStore;

  @observable _user = null;

  constructor(client: AxiosInstance, initialData, tokenStore) {
    makeObservable(this);
    this._client = client;
    this._user = initialData?.user;
    this.tokenStore = tokenStore;
  }

  @computed get user() {
    return toJS(this._user);
  }

  @action setUser = (userData) => (this._user = userData);

  @computed get client() {
    return this._client;
  }

  @action login = (userName: string, password: string) => {
    console.log("LOGIN");
    return this.client
      .post("/user/login", JSON.stringify({ userName, password }))
      .then((response) => {
        this.handleAuth(response);
        return this.getUser().then((userData) => {
          this.setUser(userData);
          return this.user;
        });
      });
  };

  @action exit = (): void => {
    this.setUser(null);
    this.tokenStore.remove();
  };

  @action handleAuth = (response: AxiosResponse) =>
    this.setToken(response.data.token);

  @action setToken = (token: string) => this.tokenStore.set(token);

  @action getUser = () => {
    return this.client.get("/user").then((response) => {
      return response.data;
    });
  };

  @action fetchCurrentUser = () => {
    if (this.tokenStore.get()) {
      return this.getUser()
        .then((userData) => {
          this.setUser(userData);
          return this.user;
        })
        .catch((error) => {
          if (
            error.response?.status === 401 ||
            error.response?.status === 403
          ) {
            this.tokenStore.remove();
            this.setUser(null);
          }
          return new Promise((resolve) => {
            this.setUser(null);
            resolve(null);
          });
        });
    } else {
      // some shit
      this.setUser(null);
      this.tokenStore.remove();
    }
  };
}
