"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/(home)/previous/page",{

/***/ "(app-pages-browser)/./components/MeetingCard.tsx":
/*!************************************!*\
  !*** ./components/MeetingCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\n\n// import { avatarImages } from \"@/constants\";\n\nconst MeetingCard = (param)=>{\n    let { icon, title, date, isPreviousMeeting, buttonIcon1, handleClick, link, buttonText } = param;\n    _s();\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"flex flex-col gap-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-normal\",\n                                children: date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex justify-center relative\", {}),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex w-full max-sm:hidden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    !isPreviousMeeting && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: handleClick,\n                                className: \"rounded bg-blue-1 px-6\",\n                                children: [\n                                    \"\\xa0 \",\n                                    buttonText\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>{\n                                    navigator.clipboard.writeText(link);\n                                    toast({\n                                        title: \"Link Copied\"\n                                    });\n                                },\n                                className: \"bg-dark-4 px-6\",\n                                children: \"\\xa0 Copy Link\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\dev\\\\Meeting-App\\\\HaMeetz\\\\components\\\\MeetingCard.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MeetingCard, \"XbQoRqPDPo6PJEzRId7w4FMisDk=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = MeetingCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetingCard);\nvar _c;\n$RefreshReg$(_c, \"MeetingCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVldGluZ0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxrQ0FBa0M7QUFFRDtBQUNJO0FBQ3JDLDhDQUE4QztBQUNKO0FBYTFDLE1BQU1HLGNBQWM7UUFBQyxFQUNuQkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsaUJBQWlCLEVBQ2pCQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsSUFBSSxFQUNKQyxVQUFVLEVBQ087O0lBQ2pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdWLHVEQUFRQTtJQUUxQixxQkFDRSw4REFBQ1c7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBUUQsV0FBVTswQkFFakIsNEVBQUNFO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFzQlQ7Ozs7OzswQ0FDcEMsOERBQUNhO2dDQUFFSixXQUFVOzBDQUF5QlI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVDLDhEQUFDUztnQkFBUUQsV0FBV2QsOENBQUVBLENBQUMsZ0NBQWdDLENBQUM7O2tDQUN0RCw4REFBQ2dCO3dCQUFJRixXQUFVOzs7Ozs7b0JBY2QsQ0FBQ1AsbUNBQ0EsOERBQUNTO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ2IsOENBQU1BO2dDQUFDa0IsU0FBU1Y7Z0NBQWFLLFdBQVU7O29DQUdoQztvQ0FDRUg7Ozs7Ozs7MENBRVYsOERBQUNWLDhDQUFNQTtnQ0FDTGtCLFNBQVM7b0NBQ1BDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDWjtvQ0FDOUJFLE1BQU07d0NBQ0pQLE9BQU87b0NBQ1Q7Z0NBQ0Y7Z0NBQ0FTLFdBQVU7MENBT0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQjtHQXBFTVg7O1FBVWNELG1EQUFRQTs7O0tBVnRCQztBQXNFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lZXRpbmdDYXJkLnRzeD9jYzk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi91aS9idXR0b25cIjtcclxuLy8gaW1wb3J0IHsgYXZhdGFySW1hZ2VzIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIi4vdWkvdXNlLXRvYXN0XCI7XHJcblxyXG5pbnRlcmZhY2UgTWVldGluZ0NhcmRQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIGlzUHJldmlvdXNNZWV0aW5nPzogYm9vbGVhbjtcclxuICBidXR0b25JY29uMT86IHN0cmluZztcclxuICBidXR0b25UZXh0Pzogc3RyaW5nO1xyXG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTWVldGluZ0NhcmQgPSAoe1xyXG4gIGljb24sXHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBpc1ByZXZpb3VzTWVldGluZyxcclxuICBidXR0b25JY29uMSxcclxuICBoYW5kbGVDbGljayxcclxuICBsaW5rLFxyXG4gIGJ1dHRvblRleHQsXHJcbn06IE1lZXRpbmdDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1bMjU4cHhdIHctZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1bMTRweF0gYmctZGFyay0xIHB4LTUgcHktOCB4bDptYXgtdy1bNTY4cHhdXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTVcIj5cclxuICAgICAgICB7LyogPEltYWdlIHNyYz17aWNvbn0gYWx0PVwidXBjb21pbmdcIiB3aWR0aD17Mjh9IGhlaWdodD17Mjh9IC8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbFwiPntkYXRlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Y24oXCJmbGV4IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCIsIHt9KX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBtYXgtc206aGlkZGVuXCI+XHJcbiAgICAgICAgICB7LyogUmVtb3ZlIGF2YXRhciBpbWFnZXMgKi99XHJcbiAgICAgICAgICB7Lyoge2F2YXRhckltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICBhbHQ9XCJhdHRlbmRlZXNcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJyb3VuZGVkLWZ1bGxcIiwgeyBhYnNvbHV0ZTogaW5kZXggPiAwIH0pfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogMCwgbGVmdDogaW5kZXggKiAyOCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshaXNQcmV2aW91c01lZXRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctYmx1ZS0xIHB4LTZcIj5cclxuICAgICAgICAgICAgICB7Lyoge2J1dHRvbkljb24xICYmIChcclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2J1dHRvbkljb24xfSBhbHQ9XCJmZWF0dXJlXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICZuYnNwOyB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGluayBDb3BpZWRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyay00IHB4LTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ljb25zL2NvcHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImZlYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAmbmJzcDsgQ29weSBMaW5rXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0aW5nQ2FyZDtcclxuIl0sIm5hbWVzIjpbImNuIiwiQnV0dG9uIiwidXNlVG9hc3QiLCJNZWV0aW5nQ2FyZCIsImljb24iLCJ0aXRsZSIsImRhdGUiLCJpc1ByZXZpb3VzTWVldGluZyIsImJ1dHRvbkljb24xIiwiaGFuZGxlQ2xpY2siLCJsaW5rIiwiYnV0dG9uVGV4dCIsInRvYXN0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJkaXYiLCJoMSIsInAiLCJvbkNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MeetingCard.tsx\n"));

/***/ })

});