import React, { Component } from "react";
import RootStore from "../stores/RootStore";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
export default class Login extends Component<RootStore, any> {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.authStore
      .login(e.target.userName.value, e.target.password.value)
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name={"userName"} />
          <input type="password" name={"password"} />
          <button type={"submit"}>Send</button>
        </form>
      </div>
    );
  }
}
