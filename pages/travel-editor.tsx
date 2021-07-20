import React, { Component } from "react";
import RootStore from "stores/RootStore";
import AddPlaceMark from "../components/travel/AddPlaceMark";

export default class TravelEditor extends Component<RootStore, any> {
  render() {
    return <AddPlaceMark />;
  }
}
