(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7630:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "cookies"
var external_cookies_namespaceObject = require("cookies");;
var external_cookies_default = /*#__PURE__*/__webpack_require__.n(external_cookies_namespaceObject);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(9877);
;// CONCATENATED MODULE: external "react-notifications"
var external_react_notifications_namespaceObject = require("react-notifications");;
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(2965);
;// CONCATENATED MODULE: ./stores/MenuStore.ts
var _class, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let MenuStore = (_class = class MenuStore {
  get isMenuOpen() {
    if (typeof document !== "undefined") document.body.style.overflow = this._isMenuOpen ? "hidden" : "auto";
    if (false) {}
    return this._isMenuOpen;
  }

  constructor() {
    _initializerDefineProperty(this, "_isMenuOpen", _descriptor, this);

    _initializerDefineProperty(this, "toggleMenu", _descriptor2, this);

    _initializerDefineProperty(this, "setOpenMenu", _descriptor3, this);

    (0,external_mobx_.makeAutoObservable)(this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_isMenuOpen", [external_mobx_.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "isMenuOpen", [external_mobx_.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isMenuOpen"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "toggleMenu", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => this._isMenuOpen = !this.isMenuOpen;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "setOpenMenu", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return v => this._isMenuOpen = v;
  }
})), _class);

// EXTERNAL MODULE: ./node_modules/mobx-cookie/dist-web/index.js
var dist_web = __webpack_require__(9626);
;// CONCATENATED MODULE: ./stores/TokenStore.ts
var TokenStore_class, TokenStore_descriptor, TokenStore_descriptor2, TokenStore_descriptor3, _descriptor4;

function TokenStore_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function TokenStore_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function TokenStore_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let TokenStore = (TokenStore_class = class TokenStore {
  constructor(initialData) {
    TokenStore_initializerDefineProperty(this, "_token", TokenStore_descriptor, this);

    TokenStore_initializerDefineProperty(this, "server_token", TokenStore_descriptor2, this);

    TokenStore_initializerDefineProperty(this, "set", TokenStore_descriptor3, this);

    TokenStore_initializerDefineProperty(this, "remove", _descriptor4, this);

    (0,external_mobx_.makeAutoObservable)(this);
    this._token = new dist_web/* default */.Z("Authorization");
    this.server_token = (initialData === null || initialData === void 0 ? void 0 : initialData.server_token) || null;
    console.log(initialData, "initialData"); // if (!initialData?.server_token) {
    //   this._token.remove();
    // }
  }

  get() {
    return this.server_token || this._token.value;
  }

}, (TokenStore_descriptor = TokenStore_applyDecoratedDescriptor(TokenStore_class.prototype, "_token", [external_mobx_.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), TokenStore_descriptor2 = TokenStore_applyDecoratedDescriptor(TokenStore_class.prototype, "server_token", [external_mobx_.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), TokenStore_applyDecoratedDescriptor(TokenStore_class.prototype, "get", [external_mobx_.action], Object.getOwnPropertyDescriptor(TokenStore_class.prototype, "get"), TokenStore_class.prototype), TokenStore_descriptor3 = TokenStore_applyDecoratedDescriptor(TokenStore_class.prototype, "set", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (token, server = false) => {
      if (server) {
        this.server_token = token;
      } else {
        this._token.set(token, {
          expires: 365
        });
      }
    };
  }
}), _descriptor4 = TokenStore_applyDecoratedDescriptor(TokenStore_class.prototype, "remove", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this._token.remove();

      this.server_token = null;
    };
  }
})), TokenStore_class);

;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./utils/axios.ts


const initAxios = tokenStore => {
  const $axios = external_axios_default().create({
    baseURL: "http://151.248.112.37:5000/",
    withCredentials: true
  });
  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.put["Content-Type"] = "application/json";
  $axios.defaults.headers.patch["Content-Type"] = "application/json";
  $axios.defaults.headers.delete["Content-Type"] = "application/json";
  $axios.interceptors.request.use(config => {
    const token = tokenStore.get();

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  }, error => {
    console.error(error);
  });
  return $axios;
};

/* harmony default export */ var axios = (initAxios);
;// CONCATENATED MODULE: ./stores/AuthStore.ts
var AuthStore_class, AuthStore_descriptor, AuthStore_descriptor2, AuthStore_descriptor3, AuthStore_descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function AuthStore_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function AuthStore_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function AuthStore_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let AuthStore = (AuthStore_class = class AuthStore {
  constructor(client, initialData, tokenStore) {
    this._client = void 0;
    this.tokenStore = void 0;

    AuthStore_initializerDefineProperty(this, "_user", AuthStore_descriptor, this);

    AuthStore_initializerDefineProperty(this, "setUser", AuthStore_descriptor2, this);

    AuthStore_initializerDefineProperty(this, "login", AuthStore_descriptor3, this);

    AuthStore_initializerDefineProperty(this, "exit", AuthStore_descriptor4, this);

    AuthStore_initializerDefineProperty(this, "handleAuth", _descriptor5, this);

    AuthStore_initializerDefineProperty(this, "setToken", _descriptor6, this);

    AuthStore_initializerDefineProperty(this, "getUser", _descriptor7, this);

    AuthStore_initializerDefineProperty(this, "fetchCurrentUser", _descriptor8, this);

    (0,external_mobx_.makeObservable)(this);
    this._client = client;
    this._user = initialData === null || initialData === void 0 ? void 0 : initialData._user;
    this.tokenStore = tokenStore;
  }

  get user() {
    return (0,external_mobx_.toJS)(this._user);
  }

  get client() {
    return this._client;
  }

}, (AuthStore_descriptor = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "_user", [external_mobx_.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "user", [external_mobx_.computed], Object.getOwnPropertyDescriptor(AuthStore_class.prototype, "user"), AuthStore_class.prototype), AuthStore_descriptor2 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "setUser", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return userData => this._user = userData;
  }
}), AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "client", [external_mobx_.computed], Object.getOwnPropertyDescriptor(AuthStore_class.prototype, "client"), AuthStore_class.prototype), AuthStore_descriptor3 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "login", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (userName, password) => {
      console.log("LOGIN");
      return this.client.post("/user/login", JSON.stringify({
        userName,
        password
      })).then(response => {
        console.log(response, ["respon"]);
        this.handleAuth(response);
        return this.getUser().then(userData => {
          this.setUser(userData);
          return this.user;
        });
      });
    };
  }
}), AuthStore_descriptor4 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "exit", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      this.setUser(null);
      this.tokenStore.remove();

      if (false) {}
    };
  }
}), _descriptor5 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "handleAuth", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return response => this.setToken(response.data.token);
  }
}), _descriptor6 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "setToken", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return token => this.tokenStore.set(token);
  }
}), _descriptor7 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "getUser", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      return this.client.get("/user").then(response => {
        return response.data;
      });
    };
  }
}), _descriptor8 = AuthStore_applyDecoratedDescriptor(AuthStore_class.prototype, "fetchCurrentUser", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      if (this.tokenStore.get()) {
        return this.getUser().then(userData => {
          this.setUser(userData);
          return this.user;
        }).catch(error => {
          var _error$response, _error$response2;

          if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 || ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 403) {
            this.tokenStore.remove();
            this.setUser(null);
          }

          return new Promise(resolve => {
            this.setUser(null);
            resolve(null);
          });
        });
      } else {
        // some shit
        this.setUser(null);
        this.tokenStore.remove();
      }
    };
  }
})), AuthStore_class);

;// CONCATENATED MODULE: ./stores/NotificationStore.ts
var NotificationStore_class, NotificationStore_descriptor;

function NotificationStore_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function NotificationStore_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function NotificationStore_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let NotificationStore = (NotificationStore_class = class NotificationStore {
  constructor() {
    NotificationStore_initializerDefineProperty(this, "createNotification", NotificationStore_descriptor, this);

    (0,external_mobx_.makeAutoObservable)(this);
  }

}, (NotificationStore_descriptor = NotificationStore_applyDecoratedDescriptor(NotificationStore_class.prototype, "createNotification", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (type, text, title, timeOut = 10000, callback = null, priority = true) => {
      switch (type) {
        case "info":
          external_react_notifications_namespaceObject.NotificationManager.info(text, title, timeOut, callback, priority);
          break;

        case "success":
          external_react_notifications_namespaceObject.NotificationManager.success(text, title, timeOut, callback, priority);
          break;

        case "warning":
          external_react_notifications_namespaceObject.NotificationManager.warning(text, title, timeOut, callback, priority);
          break;

        case "error":
          external_react_notifications_namespaceObject.NotificationManager.error(text, title, timeOut, callback, priority);
          break;
      }
    };
  }
})), NotificationStore_class);

;// CONCATENATED MODULE: ./stores/TravelStore.ts
var TravelStore_class, TravelStore_descriptor, TravelStore_descriptor2, TravelStore_descriptor3, TravelStore_descriptor4, TravelStore_descriptor5;

function TravelStore_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function TravelStore_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function TravelStore_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let TravelStore = (TravelStore_class = class TravelStore {
  constructor(client) {
    this.client = void 0;

    TravelStore_initializerDefineProperty(this, "_placeMarks", TravelStore_descriptor, this);

    TravelStore_initializerDefineProperty(this, "setPlaceMarks", TravelStore_descriptor2, this);

    TravelStore_initializerDefineProperty(this, "addPlaceMark", TravelStore_descriptor3, this);

    TravelStore_initializerDefineProperty(this, "getPlaceMarks", TravelStore_descriptor4, this);

    TravelStore_initializerDefineProperty(this, "removeMark", TravelStore_descriptor5, this);

    (0,external_mobx_.makeObservable)(this);
    this.client = client;
  }

  get placeMarks() {
    return this._placeMarks;
  } // @action addPlaceMark = (placeMark: TPlaceMark) => {
  //   this.client.post("/travel", placeMark).then((response) => {
  //     console.log(response);
  //   });
  //   this.loadPlaceMarks();
  // };
  //
  // @action removePlaceMark = (placeMark: TPlaceMark) => {
  //   this._placeMarks = this.placeMarks.filter((mark) => mark !== placeMark);
  // };
  //
  // @action addPlaceMarks = (placeMarks: TPlaceMark[]) =>
  //   this._placeMarks.concat(placeMarks);
  //
  // @action loadPlaceMarks = (): Promise<TPlaceMark[]> => {
  //   return this.client.get("/travel").then((response) => {
  //     console.log(response);
  //     this.setPlaceMarks(response.data);
  //     return this.placeMarks;
  //   });
  // };


}, (TravelStore_descriptor = TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "_placeMarks", [external_mobx_.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "placeMarks", [external_mobx_.computed], Object.getOwnPropertyDescriptor(TravelStore_class.prototype, "placeMarks"), TravelStore_class.prototype), TravelStore_descriptor2 = TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "setPlaceMarks", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return placeMarks => this._placeMarks = placeMarks;
  }
}), TravelStore_descriptor3 = TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "addPlaceMark", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return placeMark => {
      this.client.post("/travel", placeMark).then(response => {
        console.log(response);
        this.getPlaceMarks();
      });
    };
  }
}), TravelStore_descriptor4 = TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "getPlaceMarks", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      return await this.client.get("/travel").then(response => {
        this.setPlaceMarks(response.data);
        return this.placeMarks;
      });
    };
  }
}), TravelStore_descriptor5 = TravelStore_applyDecoratedDescriptor(TravelStore_class.prototype, "removeMark", [external_mobx_.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async id => {
      return await this.client.delete(`/travel/${id}/`).then(response => {
        this.getPlaceMarks();
        return this.placeMarks;
      });
    };
  }
})), TravelStore_class);

;// CONCATENATED MODULE: ./stores/RootStore.ts







class RootStore {
  constructor(initialData = null) {
    this.menuStore = void 0;
    this.tokenStore = void 0;
    this.$axios = void 0;
    this.authStore = void 0;
    this.notificationStore = void 0;
    this.travelStore = void 0;
    console.log(initialData, ["initialData"]);
    this.menuStore = new MenuStore();
    this.tokenStore = new TokenStore(initialData === null || initialData === void 0 ? void 0 : initialData.tokenStore);
    this.$axios = axios(this.tokenStore);
    this.authStore = new AuthStore(this.$axios, initialData === null || initialData === void 0 ? void 0 : initialData.authStore, this.tokenStore);
    this.notificationStore = new NotificationStore();
    this.travelStore = new TravelStore(this.$axios);
  }

}

/* harmony default export */ var stores_RootStore = (RootStore);
;// CONCATENATED MODULE: ./stores/index.ts


const isServer = true;
(0,external_mobx_react_.enableStaticRendering)(isServer);
let store = null;
function initRootStore(initialData) {
  const rootStore = new stores_RootStore(initialData);

  if (isServer) {
    return rootStore;
  }

  if (store === null) {
    store = rootStore;
  }

  return store;
}
// EXTERNAL MODULE: ./components/header/Header.module.scss
var Header_module = __webpack_require__(9018);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/header/Header.tsx




var _dec, _dec2, Header_class;





let Header = (_dec = (0,external_mobx_react_.inject)("menuStore"), _dec2 = (0,external_mobx_react_.inject)("authStore"), _dec(Header_class = _dec2(Header_class = (0,external_mobx_react_.observer)(Header_class = class Header extends external_react_.Component {
  render() {
    const {
      menuStore,
      authStore
    } = this.props;
    const {
      isMenuOpen,
      toggleMenu
    } = menuStore;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).Header,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Header_module_default()).Header_Left,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Kirx"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Header_module_default()).Header_Right,
          children: Tabs.map(tab => /*#__PURE__*/jsx_runtime_.jsx(HeaderTab, {
            tab: tab
          }, tab.name))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Header_module_default()).Header_Mobile_Right,
          onClick: toggleMenu,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: isMenuOpen ? (Header_module_default()).Header_Mobile_Right_Active : (Header_module_default()).Header_Mobile_Right_Inactive,
            children: "X"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(MobileMenu, {})]
    });
  }

}) || Header_class) || Header_class) || Header_class);

const HeaderTab = (0,external_mobx_react_.inject)("authStore")((0,external_mobx_react_.observer)(({
  tab,
  mobile,
  authStore
}) => {
  if (mobile) {
    if (tab.link) {
      if (tab.replaceable && authStore.user) {
        return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/me",
          children: authStore.user.userName
        });
      }

      return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: tab.link,
        children: tab.name
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: tab.color && {
          color: tab.color,
          textTransform: "uppercase"
        },
        onClick: tab.callback ? authStore[tab.callback] : null,
        children: tab.name
      });
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Header_module_default()).Header_Right_Tab,
    children: tab.link ? tab.replaceable && authStore.user ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/me",
      children: authStore.user.userName
    }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: tab.link,
      children: tab.name
    }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: tab.color && {
        color: tab.color,
        textTransform: "uppercase"
      },
      onClick: tab.callback ? authStore[tab.callback] : null,
      children: tab.name
    })
  });
}));
const MobileMenu = (0,external_mobx_react_.inject)("menuStore", "authStore")((0,external_mobx_react_.observer)(({
  menuStore
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: menuStore.isMenuOpen ? (Header_module_default()).Mobile_Menu : (Header_module_default()).Mobile_Menu_Inactive,
    onClick: menuStore.toggleMenu,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).Mobile_Menu_Container,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).Mobile_Menu_Container_Content,
        children: Tabs.map(tab => /*#__PURE__*/jsx_runtime_.jsx(HeaderTab, {
          tab: tab,
          mobile: true
        }, tab.name))
      })
    })
  });
}));
const Tabs = [{
  name: "Main",
  link: "/"
}, {
  name: "Work"
}, {
  name: "Photography"
}, {
  name: "Contact"
}, {
  name: "Login",
  link: "/login",
  replaceable: true
}, {
  name: "Exit",
  callback: "exit",
  color: "#5221E6"
}, {
  name: "Travel",
  link: "/travel"
}];
;// CONCATENATED MODULE: ./components/header/index.ts

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./components/footer/Footer.module.scss
var Footer_module = __webpack_require__(8895);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/footer/Footer.tsx




class Footer extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).Footer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).Footer_Left,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Footer_module_default()).Footer_Left_Top,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "KIRX"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).Footer_Left_Middle,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "icons"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "icons"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "icons"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Footer_module_default()).Footer_Left_Bottom,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["Not Copyright ", new Date().getFullYear(), " \u2022 Kirx."]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).Footer_Right,
        children: links.map(link => /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          link: link
        }, link))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).Footer_Copyright,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["Not Copyright ", new Date().getFullYear(), " \u2022 Kirx."]
        })
      })]
    });
  }

}

const LinkItem = ({
  link
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Footer_module_default()).Footer_Right_Item,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: link
    })
  });
};

const links = ['Home', 'Store', 'About', 'Blog', 'Work', 'Reading List', 'Process'];
;// CONCATENATED MODULE: ./components/footer/index.ts

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./utils/redirectTo.ts + 1 modules
var redirectTo = __webpack_require__(7393);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class MyApp extends app.default {
  constructor(props) {
    super(props);
    this.props = void 0;
    this.rootStore = void 0;
    const isServer = true;
    this.rootStore = isServer ? props.initialState : initRootStore(props.initialState);
  }

  render() {
    const {
      Component,
      pageProps,
      err,
      noindex
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx(external_mobx_react_.Provider, _objectSpread(_objectSpread({}, this.rootStore), {}, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(footer, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_notifications_namespaceObject.NotificationContainer, {})]
      })
    }));
  }

}

MyApp.getInitialProps = async appContext => {
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    try {
      pageProps = appContext.Component.getInitialProps(appContext.ctx);
    } catch (e) {
      console.log(e, "getInitialProps");
    }
  }

  const rootStore = initRootStore({});
  appContext.ctx.rootStore = rootStore;

  if (appContext.ctx.req) {
    const cookies = new (external_cookies_default())(appContext.ctx.req, appContext.ctx.res);
    const token = cookies.get("Authorization");
    rootStore.tokenStore.set(token, true);
  }

  if (appContext.ctx.pathname.startsWith("/me") && !rootStore.tokenStore.get()) {
    (0,redirectTo/* default */.Z)("/login", {
      res: appContext.ctx.res,
      status: 302
    });
  }

  if (appContext.ctx.pathname.startsWith("/login") && rootStore.tokenStore.get()) {
    (0,redirectTo/* default */.Z)("/me", {
      res: appContext.ctx.res,
      status: 302
    });
  }

  await rootStore.authStore.fetchCurrentUser();
  return {
    initialState: rootStore,
    pageProps: pageProps
  };
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 7393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ redirectTo; }
});

;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./utils/redirectTo.ts

function redirectTo(destination, {
  res = null,
  status = null
} = {}) {
  if (res) {
    res.writeHead(status || 302, {
      Location: destination
    });
    res.end();
  } else {
    if (destination[0] === "/" && destination[1] !== "/") {
      router_default().push(destination);
    } else {
      window.location = destination;
    }
  }
}

/***/ }),

/***/ 8895:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Footer_Font___5p27",
	"Label1": "Footer_Label1__3fIAR",
	"Heading1": "Footer_Heading1__tFkJm",
	"Heading2": "Footer_Heading2__PgUuw",
	"Footer_Left_Top": "Footer_Footer_Left_Top__28mDZ",
	"Heading3": "Footer_Heading3__l5mJu",
	"Heading4": "Footer_Heading4__3aUIv",
	"Heading5": "Footer_Heading5__2-P9-",
	"Body1": "Footer_Body1__2dJ-L",
	"Body2": "Footer_Body2__1K-o8",
	"Footer_Left_Bottom": "Footer_Footer_Left_Bottom__2rvXd",
	"Footer_Right_Item": "Footer_Footer_Right_Item__2KALM",
	"Footer_Copyright": "Footer_Footer_Copyright__kKy3n",
	"Overline": "Footer_Overline__1Pm3O",
	"Button": "Footer_Button___onDx",
	"Footer": "Footer_Footer__T-ay7",
	"Footer_Left": "Footer_Footer_Left__SP5o1",
	"Footer_Left_Middle": "Footer_Footer_Left_Middle__zUwo1",
	"Footer_Right": "Footer_Footer_Right__icVQ3"
};


/***/ }),

/***/ 9018:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Header_Font__6FW11",
	"Label1": "Header_Label1__5axG_",
	"Heading1": "Header_Heading1__1DnaB",
	"Heading2": "Header_Heading2__4knOF",
	"Header_Left": "Header_Header_Left__2zznl",
	"Heading3": "Header_Heading3__1YftQ",
	"Mobile_Menu_Container": "Header_Mobile_Menu_Container__Iyh80",
	"Heading4": "Header_Heading4__2REQ5",
	"Heading5": "Header_Heading5__3nl1C",
	"Body1": "Header_Body1__tO9-6",
	"Body2": "Header_Body2__2KYMK",
	"Overline": "Header_Overline__VD2xH",
	"Button": "Header_Button__dT18T",
	"Header_Right": "Header_Header_Right__1_KTG",
	"Header_Mobile_Right": "Header_Header_Mobile_Right__1xedk",
	"Header": "Header_Header__3gfp0",
	"Header_Right_Tab": "Header_Header_Right_Tab__28BQ4",
	"Header_Mobile_Right_Active": "Header_Header_Mobile_Right_Active__8H4DB",
	"Header_Mobile_Right_Inactive": "Header_Header_Mobile_Right_Inactive__73h2i",
	"Mobile_Menu": "Header_Mobile_Menu__2Ebnw",
	"slidein": "Header_slidein__1wTl7",
	"Mobile_Menu_Container_Content": "Header_Mobile_Menu_Container_Content__2JT9a",
	"Mobile_Menu_Inactive": "Header_Mobile_Menu_Inactive__152vi",
	"slideout": "Header_slideout__mH_ID"
};


/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 2965:
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ 9877:
/***/ (function(module) {

"use strict";
module.exports = require("mobx-react");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [706], function() { return __webpack_exec__(7630); });
module.exports = __webpack_exports__;

})();