/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/For_exp.js":
/*!************************!*\
  !*** ./src/For_exp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leadsDegree\": () => /* binding */ leadsDegree,\n/* harmony export */   \"studentsBoy\": () => /* binding */ studentsBoy,\n/* harmony export */   \"studentsGirl\": () => /* binding */ studentsGirl,\n/* harmony export */   \"getPair\": () => /* binding */ getPair,\n/* harmony export */   \"getRandomArray\": () => /* binding */ getRandomArray,\n/* harmony export */   \"students\": () => /* binding */ students,\n/* harmony export */   \"getAverageMark\": () => /* binding */ getAverageMark,\n/* harmony export */   \"ukraine\": () => /* binding */ ukraine,\n/* harmony export */   \"getMyTaxes\": () => /* binding */ getMyTaxes,\n/* harmony export */   \"bar\": () => /* binding */ bar,\n/* harmony export */   \"randomColor\": () => /* binding */ randomColor,\n/* harmony export */   \"generateBlocks\": () => /* binding */ generateBlocks,\n/* harmony export */   \"generateBlocksInterval\": () => /* binding */ generateBlocksInterval,\n/* harmony export */   \"openMusic\": () => /* binding */ openMusic\n/* harmony export */ });\n//визначає ступінь числа\nfunction leadsDegree(x, y) {\n  var result = x;\n\n  for (var i = 1; i < y; i++) {\n    result *= x;\n  }\n\n  return result;\n}\nvar studentsBoy = ['Олександр', 'Ігор', 'Олексій'];\nvar studentsGirl = ['Олена', 'Іра', 'Світлана'];\nfunction getPair() {\n  var pair = [];\n\n  for (var i = 0; i < studentsBoy.length; i++) {\n    pair.push([studentsBoy[i], studentsGirl[i]]);\n  }\n\n  return pair;\n}\nfunction getRandomArray(length, max, min) {\n  var randomArray = [];\n\n  do {\n    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);\n  } while (randomArray.length < length);\n\n  return randomArray;\n} // console.log(getRandomArray(10, 29, 3))\n\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nfunction getAverageMark(student) {\n  var Mark = Object.values(student.subjects);\n  var allMark = Mark[0].concat(Mark[1]).concat(Mark[2]);\n  var result = allMark.reduce(function (acum, marks) {\n    return acum + marks;\n  });\n  return +(result / allMark.length).toFixed(2);\n}\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nfunction getMyTaxes(salary) {\n  return this.tax * salary;\n}\nfunction bar() {\n  var priceApples = 15.678;\n  var roundingApples = Math.floor(priceApples);\n  return roundingApples;\n}\nfunction randomColor() {\n  var quantityColor = 16777216;\n  return \"#\".concat(Math.floor(Math.random() * quantityColor).toString(16));\n}\nfunction generateBlocks() {\n  var bigSquare = document.querySelector('.bigSquare');\n  var bigSquareSize = 50;\n  var heightWidth = 5;\n  bigSquare.style.width = \"\".concat(bigSquareSize * heightWidth, \"px\");\n  bigSquare.style.display = 'flex';\n  bigSquare.style.flexWrap = 'wrap';\n  bigSquare.innerHTML = \"\";\n\n  for (var i = 0; i < heightWidth * heightWidth; i++) {\n    var square = document.createElement('div');\n    square.style.width = \"\".concat(bigSquareSize, \"px\");\n    square.style.height = \"\".concat(bigSquareSize, \"px\");\n    square.style.background = randomColor();\n    square.style.borderRadius = \"8px\";\n    bigSquare.append(square);\n  }\n}\nfunction generateBlocksInterval() {\n  setInterval(generateBlocks, 1000);\n}\nfunction openMusic(e) {\n  var audio = new Audio();\n\n  switch (e.code) {\n    case \"KeyA\":\n      audio.src = \"./homemusic10/audioone.mp3\";\n      document.querySelector(\"#button1\").className = 'defoult';\n      setTimeout(function () {\n        document.querySelector(\"#button1\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyS\":\n      audio.src = \"homemusic10/audiotwo.mp3\";\n      document.querySelector(\"#button2\").className = 'button2';\n      setTimeout(function () {\n        document.querySelector(\"#button2\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyD\":\n      audio.src = \"homemusic10/audioseven.mp3\";\n      document.querySelector(\"#button3\").className = 'button3';\n      setTimeout(function () {\n        document.querySelector(\"#button3\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyF\":\n      audio.src = \"homemusic10/audiofour.mp3\";\n      document.querySelector(\"#button4\").className = 'button4';\n      setTimeout(function () {\n        document.querySelector(\"#button4\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyG\":\n      audio.src = \"homemusic10/audiofive.mp3\";\n      document.querySelector(\"#button5\").className = 'button5';\n      setTimeout(function () {\n        document.querySelector(\"#button5\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyH\":\n      audio.src = \"homemusic10/audioseex.mp3\";\n      document.querySelector(\"#button6\").className = 'button6';\n      setTimeout(function () {\n        document.querySelector(\"#button6\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyJ\":\n      audio.src = \"homemusic10/audioseven.mp3\";\n      document.querySelector(\"#button7\").className = 'button7';\n      setTimeout(function () {\n        document.querySelector(\"#button7\").className = \"el\";\n      }, 500);\n      break;\n  }\n\n  audio.play();\n}\n\n//# sourceURL=webpack://project/./src/For_exp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home10_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home10.css */ \"./src/home10.css\");\n/* harmony import */ var _home12_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home12.css */ \"./src/home12.css\");\n/* harmony import */ var _For_exp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./For_exp.js */ \"./src/For_exp.js\");\n// import * as home3 from './home3.js'\n\n\n\nconsole.log((0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.leadsDegree)(2, 6));\n\nconsole.log((0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.getPair)());\n\nconsole.log((0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArray)(10, 29, 3));\n\n\nconsole.log((0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.getAverageMark)(_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.students[0]));\n\n\nconsole.log(_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.getMyTaxes.call(_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.ukraine, 3000));\n\nconsole.log((0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.bar)());\n\n\n\n(0,_For_exp_js__WEBPACK_IMPORTED_MODULE_2__.generateBlocksInterval)();\n\ndocument.onkeydown = function openMusic(e) {\n  var audio = new Audio();\n\n  switch (e.code) {\n    case \"KeyA\":\n      audio.src = \"homemusic10/audioone.mp3\";\n      document.querySelector(\"#button1\").className = 'defoult';\n      setTimeout(function () {\n        document.querySelector(\"#button1\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyS\":\n      audio.src = \"homemusic10/audiotwo.mp3\";\n      document.querySelector(\"#button2\").className = 'button2';\n      setTimeout(function () {\n        document.querySelector(\"#button2\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyD\":\n      audio.src = \"homemusic10/audioseven.mp3\";\n      document.querySelector(\"#button3\").className = 'button3';\n      setTimeout(function () {\n        document.querySelector(\"#button3\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyF\":\n      audio.src = \"homemusic10/audiofour.mp3\";\n      document.querySelector(\"#button4\").className = 'button4';\n      setTimeout(function () {\n        document.querySelector(\"#button4\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyG\":\n      audio.src = \"homemusic10/audiofive.mp3\";\n      document.querySelector(\"#button5\").className = 'button5';\n      setTimeout(function () {\n        document.querySelector(\"#button5\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyH\":\n      audio.src = \"homemusic10/audioseex.mp3\";\n      document.querySelector(\"#button6\").className = 'button6';\n      setTimeout(function () {\n        document.querySelector(\"#button6\").className = \"el\";\n      }, 500);\n      break;\n\n    case \"KeyJ\":\n      audio.src = \"homemusic10/audioseven.mp3\";\n      document.querySelector(\"#button7\").className = 'button7';\n      setTimeout(function () {\n        document.querySelector(\"#button7\").className = \"el\";\n      }, 500);\n      break;\n  }\n\n  audio.play();\n};\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home10.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home10.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* { \\r\\n   box-sizing: border-box;\\r\\n} \\r\\n.container{\\r\\n   \\r\\n   width: 100%;\\r\\n   height: 750px;\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   \\r\\n}\\r\\n.el{color: aliceblue;\\r\\n   font-size: 48px;\\r\\n   /* max-width: 1000px; */\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid  rgb(226, 236, 84);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.3s; \\r\\n   margin-left: 30px\\r\\n} \\r\\nbody { \\r\\n   margin: 0px;\\r\\nbackground-color: rgb(7, 6, 49);\\r\\n}\\r\\n#button1:hover{\\r\\n   color: rgb(244, 248, 5);\\r\\n   border-color: rgb(202, 6, 186);\\r\\n   box-shadow: 0px 0px 35px  rgb(202, 6, 186);\\r\\n}\\r\\n#button2:hover{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(84, 207, 216);\\r\\n   box-shadow: 0px 0px 35px   rgb(84, 207, 216);\\r\\n}\\r\\n#button3:hover{\\r\\n   color: rgb(244, 248, 5);\\r\\n   border-color: rgb(252, 24, 24);\\r\\n   box-shadow: 0px 0px 35px   rgb(252, 24, 24);\\r\\n}\\r\\n#button4:hover{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(211, 92, 12);\\r\\n   box-shadow: 0px 0px 35px rgb(211, 92, 12);\\r\\n}\\r\\n#button5:hover{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgba(63, 1, 145, 0.993);\\r\\n   box-shadow: 0px 0px 35px  rgba(63, 1, 145, 0.993);\\r\\n}\\r\\n#button6:hover{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(15, 240, 15);\\r\\n   box-shadow: 0px 0px 35px  rgb(21, 224, 21);\\r\\n}\\r\\n#button7:hover{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(0, 0, 0);\\r\\n   box-shadow: 0px 0px 35px rgb(0, 0, 0);\\r\\n}\\r\\n.defoult{\\r\\n   color: rgb(244, 248, 5);\\r\\n   border-color: rgb(6, 202, 6);\\r\\n   box-shadow: 0px 0px 35px  rgb(2, 252, 2);\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(2, 252, 2);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button2{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(84, 207, 216);\\r\\n   box-shadow: 0px 0px 35px   rgb(84, 207, 216);\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid  rgb(84, 207, 216);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button3{\\r\\n   color: rgb(244, 248, 5);\\r\\n   border-color: rgb(252, 24, 24);\\r\\n   box-shadow: 0px 0px 35px   rgb(252, 24, 24);\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(252, 24, 24);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button4{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(211, 92, 12);\\r\\n   box-shadow: 0px 0px 35px rgb(211, 92, 12);\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(211, 92, 12);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button5{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgba(63, 1, 145, 0.993);\\r\\n   box-shadow: 0px 0px 35px  rgba(63, 1, 145, 0.993);\\r\\n   width: 150px;\\r\\n   height: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(63, 1, 145, 0.993);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button6{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(196, 255, 2);\\r\\n   box-shadow: 0px 0px 35px  rgb(196, 255, 2);\\r\\n   height: 150px;\\r\\n   width: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(196, 255, 2);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.2s; \\r\\n   margin-left: 30px \\r\\n}\\r\\n.button7{\\r\\n   color:  rgb(244, 248, 5);\\r\\n   border-color: rgb(0, 0, 0);\\r\\n   box-shadow: 0px 0px 35px rgb(0, 0, 0);\\r\\n   height: 150px;\\r\\n   width: 150px;\\r\\n   border-radius: 50%;\\r\\n   border: 6px solid rgb(0, 0, 0);\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   transition: all 0.4s; \\r\\n   margin-left: 30px \\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/home10.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home12.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home12.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fon.jpg */ \"./src/fon.jpg\");\n/* harmony import */ var _wer_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wer.gif */ \"./src/wer.gif\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fon_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_wer_gif__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n\\r\\nbody{\\r\\n\\r\\nbackground-size:100%;\\r\\nbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); \\r\\nbackground-repeat: no-repeat;\\r\\nbackground-attachment: fixed;\\r\\n}\\r\\n\\r\\n.bigSquare{\\r\\n   background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \")\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/home12.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/fon.jpg":
/*!*********************!*\
  !*** ./src/fon.jpg ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6cedc3146ce32fca253878ad7b288b1c.jpg\");\n\n//# sourceURL=webpack://project/./src/fon.jpg?");

/***/ }),

/***/ "./src/wer.gif":
/*!*********************!*\
  !*** ./src/wer.gif ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"01ce6a21fbf5ea2bcdef0ed11178eb46.gif\");\n\n//# sourceURL=webpack://project/./src/wer.gif?");

/***/ }),

/***/ "./src/home10.css":
/*!************************!*\
  !*** ./src/home10.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home10_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home10.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home10.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home10_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home10_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://project/./src/home10.css?");

/***/ }),

/***/ "./src/home12.css":
/*!************************!*\
  !*** ./src/home12.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home12_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home12.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home12.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home12_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home12_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://project/./src/home12.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;