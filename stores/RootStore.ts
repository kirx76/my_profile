import MenuStore from "./MenuStore";
import TokenStore from "./TokenStore";
import initAxios from "../utils/axios";
import AuthStore from "./AuthStore";
import NotificationStore from "./NotificationStore";

class RootStore {
  menuStore?: MenuStore;
  tokenStore?: TokenStore;
  $axios?: any;
  authStore?: AuthStore;
  notificationStore?: NotificationStore;

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
  }
}

export default RootStore;
