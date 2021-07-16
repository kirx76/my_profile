import { action, makeAutoObservable } from "mobx";
import { NotificationManager } from "react-notifications";

export default class NotificationStore {
  @action createNotification = (
    type: "info" | "success" | "warning" | "error",
    text: string,
    title: string,
    timeOut = 10000,
    callback: () => void | null = null,
    priority = true
  ) => {
    switch (type) {
      case "info":
        NotificationManager.info(text, title, timeOut, callback, priority);
        break;
      case "success":
        NotificationManager.success(text, title, timeOut, callback, priority);
        break;
      case "warning":
        NotificationManager.warning(text, title, timeOut, callback, priority);
        break;
      case "error":
        NotificationManager.error(text, title, timeOut, callback, priority);
        break;
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}
