import React, {Component} from "react";
import Header from "../components/header";
import MainBody from "../components/main/body";

export default class Home extends Component<any, any> {
  render() {
    return (
      <div style={{width: '100%', display: "flex", flexDirection: 'column'}}>
        <Header/>
        <MainBody/>
      </div>
    )
  }
}
