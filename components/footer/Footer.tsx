import React, {Component} from "react";
import styles from './Footer.module.scss';

export default class Footer extends Component<any, any> {
  render() {
    return (
      <div className={styles.Footer}>
        <div className={styles.Footer_Left}>
          <div className={styles.Footer_Left_Top}>
            <span>KIRX</span>
          </div>
          <div className={styles.Footer_Left_Middle}>
            <span>icons</span>
            <span>icons</span>
            <span>icons</span>
          </div>
          <div className={styles.Footer_Left_Bottom}>
            <span>Not Copyright {new Date().getFullYear()} • Kirx.</span>
          </div>
        </div>
        <div className={styles.Footer_Right}>
          {links.map(link => <LinkItem link={link} key={link}/>)}
        </div>
        <div className={styles.Footer_Copyright}>
          <span>Not Copyright {new Date().getFullYear()} • Kirx.</span>
        </div>
      </div>
    )
  }
}

const LinkItem = ({link}) => {
  return (
    <div className={styles.Footer_Right_Item}>
      <span>{link}</span>
    </div>
  )
}

const links = [
  'Home',
  'Store',
  'About',
  'Blog',
  'Work',
  'Reading List',
  'Process',
]
