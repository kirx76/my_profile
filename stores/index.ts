import RootStore from "./RootStore";
import { enableStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

let store = null;

export default function initRootStore(initialData: RootStore) {
  const rootStore = new RootStore(initialData);
  if (isServer) {
    return rootStore;
  }
  if (store === null) {
    store = rootStore;
  }

  return store;
}
