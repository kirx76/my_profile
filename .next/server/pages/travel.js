(function() {
var exports = {};
exports.id = 104;
exports.ids = [104];
exports.modules = {

/***/ 7004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TravelPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/travel/Travel/Travel.module.scss
var Travel_module = __webpack_require__(8582);
var Travel_module_default = /*#__PURE__*/__webpack_require__.n(Travel_module);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(9877);
;// CONCATENATED MODULE: ./components/travel/Travel/Travel.tsx


var _class;





let Travel = (0,external_mobx_react_.observer)(_class = class Travel extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Travel_module_default()).Travel,
      children: "123"
    });
  }

}) || _class;

/* harmony default export */ var Travel_Travel = (Travel);
;// CONCATENATED MODULE: ./components/travel/Travel/index.ts

;// CONCATENATED MODULE: ./pages/travel.tsx



class TravelPage extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(Travel_Travel, {});
  }

}

/***/ }),

/***/ 8582:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Travel_Font__1jCIW",
	"Label1": "Travel_Label1__1VGZN",
	"Heading1": "Travel_Heading1__2mak8",
	"Heading2": "Travel_Heading2__1MPUV",
	"Heading3": "Travel_Heading3__1oXDg",
	"Heading4": "Travel_Heading4__2t4YX",
	"Heading5": "Travel_Heading5__37PQQ",
	"Body1": "Travel_Body1__1I4qJ",
	"Body2": "Travel_Body2__3sjir",
	"Overline": "Travel_Overline__3j35y",
	"Button": "Travel_Button__3jrEb"
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
var __webpack_exports__ = (__webpack_exec__(7004));
module.exports = __webpack_exports__;

})();