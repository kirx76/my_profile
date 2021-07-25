import React, { Component } from "react";
import styles from "./Schedule.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import Todo from "../Todo";

@observer
class Schedule extends Component<RootStore, any> {
  render() {
    return (
      <div className={styles.Schedule}>
        <Todo />
      </div>
    );
  }
}

export default Schedule;
