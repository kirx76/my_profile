import MenuStore from "./MenuStore";
import TokenStore from "./TokenStore";
import initAxios from "../utils/axios";
import AuthStore from "./AuthStore";

class RootStore {
  menuStore?: MenuStore;
  tokenStore?: TokenStore;
  $axios?: any;
  authStore?: AuthStore;

  constructor(initialData = null) {
    this.menuStore = new MenuStore();
    this.tokenStore = new TokenStore(initialData?.tokenStore);
    this.$axios = initAxios(this.tokenStore);
    this.authStore = new AuthStore(
      this.$axios,
      initialData?.authStore,
      this.tokenStore
    );
  }
}

export default RootStore;
