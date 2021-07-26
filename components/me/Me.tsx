import React, { Component } from "react";
import styles from "./Me.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import redirectTo from "../../utils/redirectTo";

@inject("authStore")
@observer
class Me extends Component<RootStore, any> {
  componentDidMount() {
    if (!this.props.authStore.user) {
      redirectTo("/login");
    }
  }

  render() {
    // console.log(this.props.authStore.user);
    return (
      <div className={styles.Me}>
        <span>Name: {this.props.authStore.user.name} </span>
        <span>Second name: {this.props.authStore.user.secondName} </span>
        <span>User name: {this.props.authStore.user.userName} </span>
      </div>
    );
  }
}

export default Me;
