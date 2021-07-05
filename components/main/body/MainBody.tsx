import React, {Component} from "react";
import styles from './MainBody.module.scss'

export default class MainBody extends Component<any, any> {
  render() {
    return (
      <div className={styles.MainBody}>
        <div className={styles.MainBody_Left}>1</div>
        <div className={styles.MainBody_Right}>2</div>
      </div>
    )
  }
}
