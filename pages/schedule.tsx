import React, { Component } from "react";
import RootStore from "stores/RootStore";
import Schedule from "../components/schedule/Schedule";

export default class SchedulePage extends Component<RootStore, any> {
  render() {
    return <Schedule />;
  }
}
