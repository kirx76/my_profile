import React, {Component} from "react";
import styles from './Header.module.scss'
import {inject, observer} from "mobx-react";
import RootStore from "../../stores/RootStore";
import MenuStore from "../../stores/MenuStore";

@inject('menuStore')
@observer
export default class Header extends Component<RootStore, any> {
  render() {
    const {isMenuOpen, toggleMenu} = this.props.menuStore;
    return (
      <>
        <div className={styles.Header}>
          <div className={styles.Header_Left}>
            <span>Kirx</span>
          </div>
          <div className={styles.Header_Right}>
            {Tabs.map(tab => <HeaderTab tab={tab} key={tab.name}/>)}
          </div>
          <div
            className={styles.Header_Mobile_Right}
            onClick={toggleMenu}>
          <span
            className={isMenuOpen ? styles.Header_Mobile_Right_Active : styles.Header_Mobile_Right_Inactive}>X</span>
          </div>
        </div>
        <MobileMenu/>
      </>
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

export const MobileMenu = inject('menuStore')(observer((props: { menuStore?: MenuStore }) => {
  return (
    <div
      className={props.menuStore.isMenuOpen ? styles.Mobile_Menu : styles.Mobile_Menu_Inactive}
      onClick={props.menuStore.toggleMenu}
    >
      <div className={styles.Mobile_Menu_Container}>
        <div className={styles.Mobile_Menu_Container_Content}
             onClick={e => e.stopPropagation()}>
          {Tabs.map(tab => <span key={tab.name}>{tab.name}</span>)}
        </div>
      </div>
    </div>
  )
}))


const Tabs = [
  {name: 'Experience'},
  {name: 'Work'},
  {name: 'Photography'},
  {name: 'Contact'}
]
