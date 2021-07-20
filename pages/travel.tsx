import { Component } from "react";
import RootStore from "stores/RootStore";
import Travel from "../components/travel/Travel";

export default class TravelPage extends Component<RootStore, any> {
  render() {
    return <Travel />;
  }
}
