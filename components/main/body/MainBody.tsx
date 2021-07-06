import React, {Component} from "react";
import styles from './MainBody.module.scss'
import Introduce from "../introduce";
import Experience from "../experience";
import Philosophy from "../philosophy";
import Skillset from "../skillset";

export default class MainBody extends Component<any, any> {
  render() {
    return (
      <div className={styles.MainBody}>
        <Introduce/>
        <Experience/>
        <Philosophy/>
        <Skillset/>
      </div>
    )
  }
}
