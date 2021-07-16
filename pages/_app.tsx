import React from "react";
import App from "next/app";
import Cookies from "cookies";
import { Provider } from "mobx-react";
import { NotificationContainer } from "react-notifications";

import "react-notifications/lib/notifications.css";
import "../styles/globals.css";

import initRootStore from "../stores";
import RootStore from "../stores/RootStore";
import Header from "../components/header";
import Footer from "../components/footer";
import redirectTo from "../utils/redirectTo";

class MyApp extends App {
  props: any;
  rootStore: RootStore;

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.rootStore = isServer
      ? props.initialState
      : initRootStore(props.initialState);
  }

  static getInitialProps = async (appContext) => {
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
      try {
        pageProps = appContext.Component.getInitialProps(appContext.ctx);
      } catch (e) {
        console.log(e, "getInitialProps");
      }
    }

    const rootStore = initRootStore({} as RootStore);
    appContext.ctx.rootStore = rootStore;

    if (appContext.ctx.req) {
      const cookies = new Cookies(appContext.ctx.req, appContext.ctx.res);
      const token = cookies.get("Authorization");

      rootStore.tokenStore.set(token, true);
    }

    if (
      appContext.ctx.pathname.startsWith("/me") &&
      !rootStore.tokenStore.get()
    ) {
      redirectTo("/login", { res: appContext.ctx.res, status: 302 });
    }

    if (
      appContext.ctx.pathname.startsWith("/login") &&
      rootStore.tokenStore.get()
    ) {
      redirectTo("/me", { res: appContext.ctx.res, status: 302 });
    }

    await rootStore.authStore.fetchCurrentUser();

    return {
      initialState: rootStore,
      pageProps: pageProps,
    };
  };

  render() {
    const { Component, pageProps, err, noindex } = this.props;

    return (
      <Provider {...this.rootStore}>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
          <NotificationContainer />
        </div>
      </Provider>
    );
  }
}

export default MyApp;
