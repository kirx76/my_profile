import MenuStore from "./MenuStore";

class RootStore {
  menuStore?: MenuStore;

  constructor(initialData) {
    this.menuStore = new MenuStore();
  }
}

export default RootStore