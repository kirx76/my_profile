import React, {Component} from "react";
import styles from './Introduce.module.scss'

export default class Introduce extends Component<any, any> {
  render() {
    return (
      <div className={styles.Introduce}>
        <div className={styles.Introduce_Image}>
          <img
            src='https://sun9-22.userapi.com/impf/c830109/v830109662/d6b1b/B86haq6vdz0.jpg?size=2560x1702&quality=96&sign=5e52ec059e6edbf4e6e5902d0676ebc5&type=album'
            alt="my photo"/>
        </div>
        <div className={styles.Introduce_Block}>
          <div className={styles.Introduce_Block_Top}>
            <span>I’m Kirx. A Front-end developer <span className={styles.Introduce_Block_Top_Base}>based in Kazan.</span></span>
          </div>
          <div className={styles.Introduce_Block_Bottom}>
            <span> I’m probably the most passionate «Fronter» you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</span>
          </div>
        </div>
      </div>
    )
  }
}
