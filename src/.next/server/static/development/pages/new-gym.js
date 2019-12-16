module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/common/form/TextField/TextField.js":
/*!****************************************************!*\
  !*** ./modules/common/form/TextField/TextField.js ***!
  \****************************************************/
/*! exports provided: TextInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/admin/Documents/projects/muay-app/src/modules/common/form/TextField/TextField.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TextInput = ({
  input
}) => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
  name: input.name,
  value: input.value,
  onChange: input.onChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
});

const TextField = ({
  name
}) => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: name,
  component: TextInput,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
});

TextField.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TextField);

/***/ }),

/***/ "./modules/common/form/TextField/index.js":
/*!************************************************!*\
  !*** ./modules/common/form/TextField/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./modules/common/form/TextField/TextField.js");

/* harmony default export */ __webpack_exports__["default"] = (_TextField__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./modules/gyms/actions.js":
/*!*********************************!*\
  !*** ./modules/gyms/actions.js ***!
  \*********************************/
/*! exports provided: addGym, deleteGym */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGym", function() { return addGym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGym", function() { return deleteGym; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./modules/gyms/types.js");

const addGym = ({
  gymName,
  gymOwner
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_GYM"],
  payload: {
    gymName,
    gymOwner
  }
});
const deleteGym = gymName => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_GYM"],
  payload: gymName
});

/***/ }),

/***/ "./modules/gyms/components/AddGym/AddGym.js":
/*!**************************************************!*\
  !*** ./modules/gyms/components/AddGym/AddGym.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddGymForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddGymForm */ "./modules/gyms/components/AddGymForm/index.js");
var _jsxFileName = "/Users/admin/Documents/projects/muay-app/src/modules/gyms/components/AddGym/AddGym.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AddGym = ({
  handleFormSubmit
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  onSubmit: handleFormSubmit,
  component: _AddGymForm__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

AddGym.propsTypes = {
  handleFormSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AddGym);

/***/ }),

/***/ "./modules/gyms/components/AddGym/index.js":
/*!*************************************************!*\
  !*** ./modules/gyms/components/AddGym/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGym__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGym */ "./modules/gyms/components/AddGym/AddGym.js");

/* harmony default export */ __webpack_exports__["default"] = (_AddGym__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./modules/gyms/components/AddGymForm/AddGymForm.js":
/*!**********************************************************!*\
  !*** ./modules/gyms/components/AddGymForm/AddGymForm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_form_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/form/TextField */ "./modules/common/form/TextField/index.js");
var _jsxFileName = "/Users/admin/Documents/projects/muay-app/src/modules/gyms/components/AddGymForm/AddGymForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddGymForm = ({
  handleSubmit
}) => __jsx("form", {
  onSubmit: handleSubmit,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_common_form_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: "gymName",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_common_form_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: "gymOwner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("button", {
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Submit"));

/* harmony default export */ __webpack_exports__["default"] = (AddGymForm);

/***/ }),

/***/ "./modules/gyms/components/AddGymForm/index.js":
/*!*****************************************************!*\
  !*** ./modules/gyms/components/AddGymForm/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGymForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGymForm */ "./modules/gyms/components/AddGymForm/AddGymForm.js");

/* harmony default export */ __webpack_exports__["default"] = (_AddGymForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./modules/gyms/components/NewGymPage/NewGymPage.js":
/*!**********************************************************!*\
  !*** ./modules/gyms/components/NewGymPage/NewGymPage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddGym__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddGym */ "./modules/gyms/components/AddGym/index.js");
var _jsxFileName = "/Users/admin/Documents/projects/muay-app/src/modules/gyms/components/NewGymPage/NewGymPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewGymPage = ({
  handleFormSubmit
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_AddGym__WEBPACK_IMPORTED_MODULE_1__["default"], {
  handleFormSubmit: handleFormSubmit,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (NewGymPage);

/***/ }),

/***/ "./modules/gyms/components/NewGymPage/index.js":
/*!*****************************************************!*\
  !*** ./modules/gyms/components/NewGymPage/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewGymPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewGymPage */ "./modules/gyms/components/NewGymPage/NewGymPage.js");

/* harmony default export */ __webpack_exports__["default"] = (_NewGymPage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./modules/gyms/types.js":
/*!*******************************!*\
  !*** ./modules/gyms/types.js ***!
  \*******************************/
/*! exports provided: ADD_GYM, DELETE_GYM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GYM", function() { return ADD_GYM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_GYM", function() { return DELETE_GYM; });
const ADD_GYM = 'ADD_GYM';
const DELETE_GYM = 'DELETE_GYM';

/***/ }),

/***/ "./pages/new-gym.js":
/*!**************************!*\
  !*** ./pages/new-gym.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_gyms_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/gyms/actions */ "./modules/gyms/actions.js");
/* harmony import */ var _modules_gyms_components_NewGymPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/gyms/components/NewGymPage */ "./modules/gyms/components/NewGymPage/index.js");




const mapDispatchToProps = {
  handleFormSubmit: ({
    gymName,
    gymOwner
  }) => Object(_modules_gyms_actions__WEBPACK_IMPORTED_MODULE_2__["addGym"])({
    gymName,
    gymOwner
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(_modules_gyms_components_NewGymPage__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/new-gym.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/projects/muay-app/src/pages/new-gym.js */"./pages/new-gym.js");


/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=new-gym.js.map