import RootStore from "./RootStore";
import {enableStaticRendering} from "mobx-react";

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

let store = null;

export default function initRootStore(initialData: RootStore) {
  if (isServer) {
    return new RootStore(initialData)
  }
  if (store === null) {
    store = new RootStore(initialData)
  }

  return store;
}
