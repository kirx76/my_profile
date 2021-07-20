import MenuStore from "./MenuStore";
import TokenStore from "./TokenStore";
import initAxios from "../utils/axios";
import AuthStore from "./AuthStore";
import NotificationStore from "./NotificationStore";
import TravelStore from "stores/TravelStore";

class RootStore {
  menuStore?: MenuStore;
  tokenStore?: TokenStore;
  $axios?: any;
  authStore?: AuthStore;
  notificationStore?: NotificationStore;
  travelStore?: TravelStore;

  constructor(initialData = null) {
    console.log(initialData, ["initialData"]);
    this.menuStore = new MenuStore();
    this.tokenStore = new TokenStore(initialData?.tokenStore);
    this.$axios = initAxios(this.tokenStore);
    this.authStore = new AuthStore(
      this.$axios,
      initialData?.authStore,
      this.tokenStore
    );
    this.notificationStore = new NotificationStore();
    this.travelStore = new TravelStore(this.$axios);
  }
}

export default RootStore;
