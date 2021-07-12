import React, {Component} from "react";
import styles from '/styles/test.module.scss'

export default class Test extends Component<any, any> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span>text 1</span>
          <p>text2</p>
        </div>
        <div className={styles.box_red}/>
        <div className={styles.box_yellow}/>
        <div className={styles.box_green}/>
        <div className={styles.box_blue}/>
        <div className={styles.button}>
          <span>button</span>
        </div>
      </div>
    )
  }
}