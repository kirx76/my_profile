(function() {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 6828:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MePage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/me/Me.module.scss
var Me_module = __webpack_require__(7661);
var Me_module_default = /*#__PURE__*/__webpack_require__.n(Me_module);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(9877);
// EXTERNAL MODULE: ./utils/redirectTo.ts + 1 modules
var redirectTo = __webpack_require__(7393);
;// CONCATENATED MODULE: ./components/me/Me.tsx


var _dec, _class;





let Me = (_dec = (0,external_mobx_react_.inject)("authStore"), _dec(_class = (0,external_mobx_react_.observer)(_class = class Me extends external_react_.Component {
  componentDidMount() {
    if (!this.props.authStore.user) {
      (0,redirectTo/* default */.Z)("/login");
    }
  }

  render() {
    console.log(this.props.authStore.user);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Me_module_default()).Me,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["Name: ", this.props.authStore.user.name, " "]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["Second name: ", this.props.authStore.user.secondName, " "]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["User name: ", this.props.authStore.user.userName, " "]
      })]
    });
  }

}) || _class) || _class);
/* harmony default export */ var me_Me = (Me);
;// CONCATENATED MODULE: ./components/me/index.ts

;// CONCATENATED MODULE: ./pages/me.tsx



class MePage extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(me_Me, {});
  }

}

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

/***/ 7661:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Me_Font__2q5oQ",
	"Label1": "Me_Label1__ZJFnp",
	"Heading1": "Me_Heading1__2Ak4z",
	"Heading2": "Me_Heading2__yysnD",
	"Heading3": "Me_Heading3__HuLnN",
	"Heading4": "Me_Heading4__1n7hj",
	"Heading5": "Me_Heading5__2r8jg",
	"Body1": "Me_Body1__T6xHk",
	"Body2": "Me_Body2__1vWF3",
	"Overline": "Me_Overline__lOfJf",
	"Button": "Me_Button__30siP",
	"Me": "Me_Me__1CKxR"
};


/***/ }),

/***/ 9877:
/***/ (function(module) {

"use strict";
module.exports = require("mobx-react");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6828));
module.exports = __webpack_exports__;

})();