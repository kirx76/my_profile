import React, { Component } from "react";
import RootStore from "../stores/RootStore";
import Login from "../components/login";

export default class LoginPage extends Component<RootStore, any> {
  render() {
    return <Login />;
  }
}
