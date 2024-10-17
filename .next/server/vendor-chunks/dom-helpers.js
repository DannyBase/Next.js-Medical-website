"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dom-helpers";
exports.ids = ["vendor-chunks/dom-helpers"];
exports.modules = {

/***/ "(ssr)/./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addClass)\n/* harmony export */ });\n/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ \"(ssr)/./node_modules/dom-helpers/esm/hasClass.js\");\n\n/**\n * Adds a CSS class to a given element.\n * \n * @param element the element\n * @param className the CSS class name\n */\n\nfunction addClass(element, className) {\n  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, className)) if (typeof element.className === 'string') element.className = element.className + \" \" + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + \" \" + className);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZENsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLDBEQUEwRCxVQUFVLHFEQUFRLHlIQUF5SDtBQUNyTSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0LWFwcC1kaXIvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZENsYXNzLmpzPzA2YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xuLyoqXG4gKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyBcIiBcIiArIGNsYXNzTmFtZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/addClass.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hasClass)\n/* harmony export */ });\n/**\n * Checks if a given element has a CSS class.\n * \n * @param element the element\n * @param className the CSS class name\n */\nfunction hasClass(element, className) {\n  if (element.classList) return !!className && element.classList.contains(className);\n  return (\" \" + (element.className.baseVal || element.className) + \" \").indexOf(\" \" + className + \" \") !== -1;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2hhc0NsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0LWFwcC1kaXIvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2hhc0NsYXNzLmpzPzczMjciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBlbGVtZW50IGhhcyBhIENTUyBjbGFzcy5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/hasClass.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeClass)\n/* harmony export */ });\nfunction replaceClassName(origClass, classToRemove) {\n  return origClass.replace(new RegExp(\"(^|\\\\s)\" + classToRemove + \"(?:\\\\s|$)\", 'g'), '$1').replace(/\\s+/g, ' ').replace(/^\\s*|\\s*$/g, '');\n}\n/**\n * Removes a CSS class from a given element.\n * \n * @param element the element\n * @param className the CSS class name\n */\n\n\nfunction removeClass(element, className) {\n  if (element.classList) {\n    element.classList.remove(className);\n  } else if (typeof element.className === 'string') {\n    element.className = replaceClassName(element.className, className);\n  } else {\n    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUNsYXNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydC1hcHAtZGlyLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qcz9hNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjbGFzc1RvUmVtb3ZlICsgXCIoPzpcXFxcc3wkKVwiLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGEgQ1NTIGNsYXNzIGZyb20gYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudFxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgQ1NTIGNsYXNzIG5hbWVcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dom-helpers/esm/removeClass.js\n");

/***/ })

};
;