import React, { Component } from "react";
import styles from "./Travel.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";

@observer
class Travel extends Component<RootStore, any> {
  render() {
    return <div className={styles.Travel}>123</div>;
  }
}

export default Travel;
