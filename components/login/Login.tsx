import React, { Component } from "react";
import styles from "./Login.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import redirectTo from "../../utils/redirectTo";

@inject("authStore")
@inject("notificationStore")
@observer
class Login extends Component<RootStore, any> {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.authStore
      .login(e.target.userName.value, e.target.password.value)
      .then(() => {
        redirectTo("/");
      })
      .catch((error) => {
        console.log(error.response, "error.response");
        this.props.notificationStore.createNotification(
          "error",
          error.response.data.message,
          error.response.data.status
        );
      });
  };

  render() {
    return (
      <div className={styles.Login}>
        <form className={styles.Login_Form} onSubmit={this.onSubmit}>
          <label htmlFor="userName">User name:</label>
          <input type="text" id={"userName"} name={"userName"} />
          <label htmlFor="password">Password: </label>
          <input type="password" id={"password"} name={"password"} />
          <button type={"submit"}>Send</button>
        </form>
      </div>
    );
  }
}

export default Login;
