import React from "react";
import App from "next/app";

import {Provider} from "mobx-react";

import '../styles/globals.css'
import RootStore from "../stores/RootStore";
import initRootStore from "../stores";
import Header from "../components/header";
import Footer from "../components/footer";

class MyApp extends App {
  props: any;
  rootStore: RootStore;

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.rootStore = isServer ? props.initialState : initRootStore(props.initialState);
  }

  static getInitialProps = async (appContext) => {
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
      try {
        pageProps = appContext.Component.getInitialProps(appContext.ctx)
      } catch (e) {
        console.log(e)
      }
    }

    const rootStore = initRootStore({} as RootStore);
    appContext.ctx.rootStore = rootStore;

    // await rootStore.authStore.fetchCurrentUser();

    return {
      initialState: rootStore,
      pageProps: pageProps,
    }
  }

  render() {
    const {Component, pageProps, err, noindex} = this.props;

    return (
      <Provider {...this.rootStore}>
        <div style={{width: '100%', display: "flex", flexDirection: 'column'}}>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </div>
      </Provider>
    )
  }
}

export default MyApp
