import React, { Component } from "react";
import styles from "./Philosophy.module.scss";
import img from "/public/img.png";

export default class Philosophy extends Component<any, any> {
  render() {
    return (
      <div className={styles.Philosophy}>
        <div className={styles.Philosophy_Left}>
          <div className={styles.Philosophy_Left_Header}>
            <span>Philosophy & values</span>
          </div>
          <div className={styles.Philosophy_Left_Content}>
            <span>
              I think everyone wants the same thing - relationship with
              humanity, peace with the metaphysical, and experience with the
              universe. I try to grasp these things with my values:
              authenticity, creativity, & hospitality.
            </span>
          </div>
          <div className={styles.Philosophy_Left_Link}>
            <span>More about me</span>
          </div>
        </div>
        <div className={styles.Philosophy_Right}>
          <img src={img.src} alt="Philosophy" />
        </div>
      </div>
    );
  }
}
