webpackHotUpdate("static/development/pages/youtube-downloader.js",{

/***/ "./pages/youtube-downloader.tsx":
/*!**************************************!*\
  !*** ./pages/youtube-downloader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WriteCharactor/WriteCharactorSearch */ "./components/WriteCharactor/WriteCharactorSearch.tsx");



var _jsxFileName = "/Users/terry/transform/pages/youtube-downloader.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      _char = _useState2[0],
      setChar = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      content = _useState6[0],
      setContent = _useState6[1];

  var onSearch =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
      var fetchingUrl, res, value;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchingUrl = "https://ytinfo.benjaminlowry.com/".concat(slug);
              _context.next = 3;
              return fetch(fetchingUrl);

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              value = _context.sent;
              setChar(slug);

              if (value && value.formats) {
                setTitle(value.player_response.videoDetails.title);
                setContent(value.formats);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var formatUrl = function formatUrl(url, title) {
    url = url.replace(/\/[^\/]+\.googlevideo\.com/, "/redirector.googlevideo.com") // .replace('&cms_redirect=yes', '')
    .replace('&redirect_counter=1', ''); // .replace('&gir=yes', '').replace('gir%2C', '');

    url = url + "&title=".concat(title);
    return url;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [_char]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: ix,
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: formatUrl(item.url, title),
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, " "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, " "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, item.container));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1586328328",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3RcbiAgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgUGFuZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicVwiO1xuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCJmb3JtaWtcIjtcbiBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly95dGluZm8uYmVuamFtaW5sb3dyeS5jb20vJHtzbHVnfWBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hpbmdVcmwpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlcy5qc29uKCkgYXMgYW55O1xuICAgICAgICBzZXRDaGFyKHNsdWcpO1xuICAgICAgICBpZih2YWx1ZSAmJlxuICAgICAgICAgICAgdmFsdWUuZm9ybWF0cykge1xuICAgICAgICAgICAgc2V0VGl0bGUodmFsdWUucGxheWVyX3Jlc3BvbnNlLnZpZGVvRGV0YWlscy50aXRsZSk7XG4gICAgICAgICAgICBzZXRDb250ZW50KHZhbHVlLmZvcm1hdHMgYXMgQXJyYXk8b2JqZWN0Pik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZm9ybWF0VXJsID0gKHVybCwgdGl0bGUpPT4ge1xuICAgICAgICB1cmwgID0gdXJsLnJlcGxhY2UoL1xcL1teXFwvXStcXC5nb29nbGV2aWRlb1xcLmNvbS8sIFwiL3JlZGlyZWN0b3IuZ29vZ2xldmlkZW8uY29tXCIpXG4gICAgICAgIC8vIC5yZXBsYWNlKCcmY21zX3JlZGlyZWN0PXllcycsICcnKVxuICAgICAgICAucmVwbGFjZSgnJnJlZGlyZWN0X2NvdW50ZXI9MScsICcnKVxuICAgICAgICAvLyAucmVwbGFjZSgnJmdpcj15ZXMnLCAnJykucmVwbGFjZSgnZ2lyJTJDJywgJycpO1xuICAgICAgICB1cmwgPSB1cmwgKyBgJnRpdGxlPSR7dGl0bGV9YDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICB9LCBbY2hhcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgbWFyZ2luPVwiYXV0b1wiPlxuICAgICAgICA8V3JpdGVDaGFyYWN0b3JTZWFyY2hcbiAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpeH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Zm9ybWF0VXJsKGl0ZW0udXJsLCB0aXRsZSl9ID5kb3dubG9hZDwvYT48c3Bhbj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnJlc29sdXRpb259PC9zcGFuPjxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uY29udGFpbmVyfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xuICB9XG4gICJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.71853d106b2d15ae7202.hot-update.js.map