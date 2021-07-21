(function() {
var exports = {};
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 2592:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TravelEditor; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/travel/AddPlaceMark/AddPlaceMark.module.scss
var AddPlaceMark_module = __webpack_require__(6896);
var AddPlaceMark_module_default = /*#__PURE__*/__webpack_require__.n(AddPlaceMark_module);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(9877);
;// CONCATENATED MODULE: external "react-yandex-maps"
var external_react_yandex_maps_namespaceObject = require("react-yandex-maps");;
;// CONCATENATED MODULE: ./components/travel/AddPlaceMark/AddPlaceMark.tsx



var _dec, _dec2, _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let AddPlaceMark = (_dec = (0,external_mobx_react_.inject)("notificationStore"), _dec2 = (0,external_mobx_react_.inject)("travelStore"), _dec(_class = _dec2(_class = (0,external_mobx_react_.observer)(_class = class AddPlaceMark extends external_react_.Component {
  componentDidMount() {
    this.props.travelStore.getPlaceMarks();
  }

  constructor(props) {
    super(props);
    this.formRef = /*#__PURE__*/(0,external_react_.createRef)();

    this.submitForm = e => {
      e.preventDefault();

      if (!this.state.placeMark) {
        this.props.notificationStore.createNotification("error", "Выберите точку на карте", "Ашыбка");
        return;
      }

      const formData = new FormData(this.formRef.current);
      const data = {
        lat: this.state.placeMark.lat,
        long: this.state.placeMark.long,
        name: formData.get("name"),
        description: formData.get("description"),
        extraData: formData.get("extraData")
      };
      this.props.travelStore.addPlaceMark(data);
      this.setState({
        selectedMark: null,
        placeMark: null
      });
    };

    this.addMark = e => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        placeMark: {
          lat: e.get("coords")[0],
          long: e.get("coords")[1]
        }
      }));
    };

    this.dragMark = e => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        placeMark: {
          lat: e.get("target").geometry.getCoordinates()[0],
          long: e.get("target").geometry.getCoordinates()[1]
        }
      }));
    };

    this.selectMark = placeMark => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selectedMark: placeMark
      }));
      console.log(this.state);
    };

    this.deleteMark = () => {
      this.props.travelStore.removeMark(this.state.selectedMark.id).then(() => {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          selectedMark: null
        }));
      });
    };

    this.state = {
      placeMark: null,
      selectedMark: null
    };
  }

  render() {
    var _this$props$travelSto;

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (AddPlaceMark_module_default()).AddPlaceMark,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: (AddPlaceMark_module_default()).AddPlaceMark_Form,
        onSubmit: this.submitForm,
        style: {
          width: "100%"
        },
        ref: this.formRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.YMaps, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_yandex_maps_namespaceObject.Map, {
            width: "100%",
            height: "500px",
            onClick: this.addMark,
            defaultState: {
              center: [59.95, 30.19],
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"]
            },
            modules: ["control.ZoomControl", "control.FullscreenControl"],
            children: [this.state.placeMark && /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.Placemark, {
              onDragEnd: this.dragMark,
              geometry: [this.state.placeMark.lat, this.state.placeMark.long],
              options: {
                draggable: true,
                preset: "islands#circleDotIcon",
                iconColor: "red"
              }
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.Clusterer, {
              options: {
                preset: "islands#invertedBlueClusterIcons",
                groupByCoordinates: false,
                zoomMargin: 150
              },
              children: (_this$props$travelSto = this.props.travelStore.placeMarks) === null || _this$props$travelSto === void 0 ? void 0 : _this$props$travelSto.map(placeMark => {
                return /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.Placemark, {
                  onClick: () => this.selectMark(placeMark),
                  geometry: [placeMark.lat, placeMark.long],
                  properties: {
                    hintContent: placeMark.name,
                    balloonContentHeader: placeMark.name,
                    balloonContentBody: `${placeMark.description} ${"<br/>"} ${placeMark === null || placeMark === void 0 ? void 0 : placeMark.extraData}`,
                    objectId: placeMark.id
                  },
                  modules: ["geoObject.addon.balloon", "geoObject.addon.hint"],
                  options: {
                    preset: "islands#circleDotIcon"
                  }
                }, placeMark.id);
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (AddPlaceMark_module_default()).AddPlaceMark_Form_Input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "name",
            children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            id: "name",
            name: "name",
            required: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (AddPlaceMark_module_default()).AddPlaceMark_Form_Input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "description",
            children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
          }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
            rows: 5,
            id: "description",
            name: "description",
            required: true,
            cols: 4
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (AddPlaceMark_module_default()).AddPlaceMark_Form_Input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "extraData",
            children: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
            rows: 5,
            id: "extraData",
            name: "extraData"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (AddPlaceMark_module_default()).AddPlaceMark_Form_Button,
          type: "submit",
          children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443"
        })]
      }), this.state.selectedMark && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          position: "absolute",
          top: 0
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443?"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: this.deleteMark,
          children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        })]
      })]
    });
  }

}) || _class) || _class) || _class);
/* harmony default export */ var AddPlaceMark_AddPlaceMark = (AddPlaceMark);
;// CONCATENATED MODULE: ./components/travel/AddPlaceMark/index.ts

;// CONCATENATED MODULE: ./pages/travel-editor.tsx



class TravelEditor extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(AddPlaceMark_AddPlaceMark, {});
  }

}

/***/ }),

/***/ 6896:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "AddPlaceMark_Font__3vP4b",
	"Label1": "AddPlaceMark_Label1__3R-2y",
	"Heading1": "AddPlaceMark_Heading1__3QK6e",
	"Heading2": "AddPlaceMark_Heading2__3CdhQ",
	"Heading3": "AddPlaceMark_Heading3__2fSa2",
	"AddPlaceMark": "AddPlaceMark_AddPlaceMark__2bBTy",
	"Heading4": "AddPlaceMark_Heading4__1oZgV",
	"Heading5": "AddPlaceMark_Heading5__pT9Jt",
	"Body1": "AddPlaceMark_Body1__O78KA",
	"Body2": "AddPlaceMark_Body2__3Qfbb",
	"Overline": "AddPlaceMark_Overline__puOtV",
	"Button": "AddPlaceMark_Button__22fXc",
	"AddPlaceMark_Form_Input": "AddPlaceMark_AddPlaceMark_Form_Input__rbJ9Z",
	"AddPlaceMark_Form": "AddPlaceMark_AddPlaceMark_Form__2sSdz",
	"AddPlaceMark_Form_Button": "AddPlaceMark_AddPlaceMark_Form_Button__1rtqy"
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
var __webpack_exports__ = (__webpack_exec__(2592));
module.exports = __webpack_exports__;

})();