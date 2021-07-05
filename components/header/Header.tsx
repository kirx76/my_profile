import React, {Component} from "react";
import styles from './Header.module.scss'

export default class Header extends Component<any, any> {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.Header_Left}>
          <span>Kirx</span>
        </div>
        <div className={styles.Header_Right}>
          {Tabs.map(tab => <HeaderTab tab={tab} key={tab.name}/>)}
        </div>
      </div>
    )
  }
}


const HeaderTab = ({tab}) => {
  return (
    <div className={styles.Header_Right_Tab}>
      <span>{tab.name}</span>
    </div>
  )
}

const Tabs = [
  {name: 'Experience'},
  {name: 'Work'},
  {name: 'Photography'},
  {name: 'Contact'}
]
