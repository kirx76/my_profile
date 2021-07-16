import React, { Component } from "react";
import styles from "./Header.module.scss";
import { inject, observer } from "mobx-react";
import Link from "next/link";

import RootStore from "../../stores/RootStore";
import MenuStore from "../../stores/MenuStore";
import AuthStore from "../../stores/AuthStore";

@inject("menuStore")
@inject("authStore")
@observer
export default class Header extends Component<RootStore, any> {
  render() {
    const { menuStore, authStore } = this.props;
    const { isMenuOpen, toggleMenu } = menuStore;
    return (
      <>
        <div className={styles.Header}>
          <div className={styles.Header_Left}>
            <span>Kirx</span>
          </div>
          <div className={styles.Header_Right}>
            {Tabs.map((tab) => (
              <HeaderTab tab={tab} key={tab.name} />
            ))}
          </div>
          <div className={styles.Header_Mobile_Right} onClick={toggleMenu}>
            <span
              className={
                isMenuOpen
                  ? styles.Header_Mobile_Right_Active
                  : styles.Header_Mobile_Right_Inactive
              }
            >
              X
            </span>
          </div>
        </div>
        <MobileMenu />
      </>
    );
  }
}

type THeaderTab = {
  name: string;
  color?: string;
  callback?: string;
  link?: string;
  replaceable?: boolean;
};

const HeaderTab = inject("authStore")(
  observer(
    ({
      tab,
      mobile,
      authStore,
    }: {
      tab: THeaderTab;
      mobile?: boolean;
      authStore?: AuthStore;
    }) => {
      if (mobile) {
        if (tab.link) {
          if (tab.replaceable && authStore.user) {
            return <Link href={"/me"}>{authStore.user.userName}</Link>;
          }
          return <Link href={tab.link}>{tab.name}</Link>;
        } else {
          return (
            <span
              style={
                tab.color && { color: tab.color, textTransform: "uppercase" }
              }
              onClick={tab.callback ? authStore[tab.callback] : null}
            >
              {tab.name}
            </span>
          );
        }
      }
      return (
        <div className={styles.Header_Right_Tab}>
          {tab.link ? (
            tab.replaceable && authStore.user ? (
              <Link href={"/me"}>{authStore.user.userName}</Link>
            ) : (
              <Link href={tab.link}>{tab.name}</Link>
            )
          ) : (
            <span
              style={
                tab.color && { color: tab.color, textTransform: "uppercase" }
              }
              onClick={tab.callback ? authStore[tab.callback] : null}
            >
              {tab.name}
            </span>
          )}
        </div>
      );
    }
  )
);

export const MobileMenu = inject(
  "menuStore",
  "authStore"
)(
  observer(({ menuStore }: { menuStore?: MenuStore }) => {
    return (
      <div
        className={
          menuStore.isMenuOpen
            ? styles.Mobile_Menu
            : styles.Mobile_Menu_Inactive
        }
        onClick={menuStore.toggleMenu}
      >
        <div className={styles.Mobile_Menu_Container}>
          <div className={styles.Mobile_Menu_Container_Content}>
            {Tabs.map((tab) => (
              <HeaderTab key={tab.name} tab={tab} mobile />
            ))}
          </div>
        </div>
      </div>
    );
  })
);

const Tabs = [
  { name: "Main", link: "/" },
  { name: "Work" },
  { name: "Photography" },
  { name: "Contact" },
  { name: "Login", link: "/login", replaceable: true },
  { name: "Exit", callback: "exit", color: "#5221E6" },
];
