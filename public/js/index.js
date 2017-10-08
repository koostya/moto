/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./tabs/index.js ***!
  \***********************/
/***/ (function(module, exports) {

eval("var tabs = document.querySelectorAll('.tabs .navigation > .item'),\r\n\ttabs_items = document.querySelectorAll('.tabs .products > .section');\r\n\r\nfor(var i = 0; i < tabs.length; i++) {\r\n\ttabs[i].addEventListener('click', openTab(i), false);\r\n}\r\n\r\nfunction openTab(index) {\r\n\treturn function() {\r\n\t\tfor(var i = 0; i < tabs_items.length; i++) {\r\n\t\t\ttabs_items[i].classList.remove('active_tab');\r\n\t\t\ttabs[i].classList.remove('active');\r\n\t\t}\r\n\t\ttabs_items[index].classList.add('active_tab');\r\n\t\ttabs[index].classList.add('active');\r\n\t}\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RhYnMvaW5kZXguanM/Njg5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzIC5uYXZpZ2F0aW9uID4gLml0ZW0nKSxcclxuXHR0YWJzX2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMgLnByb2R1Y3RzID4gLnNlY3Rpb24nKTtcclxuXHJcbmZvcih2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0dGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYWIoaSksIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblRhYihpbmRleCkge1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0YWJzX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRhYnNfaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3RhYicpO1xyXG5cdFx0XHR0YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0dGFic19pdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3RhYicpO1xyXG5cdFx0dGFic1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0fVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90YWJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ../scss/style.scss ***!
  \**************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zY3NzL3N0eWxlLnNjc3M/NDI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../scss/style.scss */ 1);\r\n\r\n__webpack_require__(/*! ./tabs/index.js */ 0);\r\n\r\nconsole.log('ok_main');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzI2NDUiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc2Nzcy9zdHlsZS5zY3NzJyk7XHJcblxyXG5yZXF1aXJlKCcuL3RhYnMvaW5kZXguanMnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdva19tYWluJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);