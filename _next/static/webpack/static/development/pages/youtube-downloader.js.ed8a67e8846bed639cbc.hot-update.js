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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      res = _useState8[0],
      setRes = _useState8[1];

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
                setRes(value);
                setTitle(value.player_response.videoDetails.title);
                setContent(value.formats.filter(function (item) {
                  return item.container == 'mp4';
                }));
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
    url = url.replace(/\/[^\/]+\.googlevideo\.com/, "/redirector.googlevideo.com").replace('&cms_redirect=yes', '').replace('&redirect_counter=1', ''); // .replace('&gir=yes', '').replace('gir%2C', '');

    url = url + "&title=".concat(title);
    return url;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [_char]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
    width: "800px",
    minHeight: "600px",
    height: "100%",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: '100px'
    },
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_WriteCharactor_WriteCharactorSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "char": _char,
    style: {
      borderRadius: '50px'
    },
    height: 60,
    fontSize: '30px',
    onSearch: onSearch,
    placeholder: "Paste the link eg. https://www.youtube.com/watch?v=vl08L2oUvfI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, _char && res.player_response && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, res.player_response.videoDetails.title), _char && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-1586328328" + " " + "mimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    style: {
      width: "30%"
    },
    className: "jsx-1586328328" + " " + "separateColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Extension"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Content-Type(Mime-Type)"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Download")), content.map(function (item, ix) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      key: ix,
      style: {
        cursor: "pointer"
      },
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, item.container), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, item.resolution), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: formatUrl(item.url, title),
      target: "_blank",
      className: "jsx-1586328328",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "download")));
  }), !content.length && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    colSpan: 2,
    style: {
      fontSize: "30px",
      padding: "100px"
    },
    className: "jsx-1586328328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "No Results"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1586328328",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRm9CIiwiZmlsZSI6Ii9Vc2Vycy90ZXJyeS90cmFuc2Zvcm0vcGFnZXMveW91dHViZS1kb3dubG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3RcbiAgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgUGFuZSB9IGZyb20gXCJldmVyZ3JlZW4tdWlcIjtcbiAgaW1wb3J0IFdyaXRlQ2hhcmFjdG9yU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9Xcml0ZUNoYXJhY3Rvci9Xcml0ZUNoYXJhY3RvclNlYXJjaFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicVwiO1xuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCJmb3JtaWtcIjtcbiBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3JlcyAsc2V0UmVzXSA9IHVzZVN0YXRlKHt9IGFzIGFueSk7XG4gICAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyBzbHVnID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hpbmdVcmwgPSBgaHR0cHM6Ly95dGluZm8uYmVuamFtaW5sb3dyeS5jb20vJHtzbHVnfWBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hpbmdVcmwpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlcy5qc29uKCkgYXMgYW55O1xuICAgICAgICBzZXRDaGFyKHNsdWcpO1xuICAgICAgICBpZih2YWx1ZSAmJlxuICAgICAgICAgICAgdmFsdWUuZm9ybWF0cykge1xuICAgICAgICAgICAgc2V0UmVzKHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpdGxlKHZhbHVlLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMudGl0bGUpO1xuICAgICAgICAgICAgc2V0Q29udGVudCh2YWx1ZS5mb3JtYXRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY29udGFpbmVyID09ICdtcDQnKSBhcyBBcnJheTxvYmplY3Q+KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmb3JtYXRVcmwgPSAodXJsLCB0aXRsZSk9PiB7XG4gICAgICAgIHVybCAgPSB1cmwucmVwbGFjZSgvXFwvW15cXC9dK1xcLmdvb2dsZXZpZGVvXFwuY29tLywgXCIvcmVkaXJlY3Rvci5nb29nbGV2aWRlby5jb21cIilcbiAgICAgICAgLnJlcGxhY2UoJyZjbXNfcmVkaXJlY3Q9eWVzJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCcmcmVkaXJlY3RfY291bnRlcj0xJywgJycpXG4gICAgICAgIC8vIC5yZXBsYWNlKCcmZ2lyPXllcycsICcnKS5yZXBsYWNlKCdnaXIlMkMnLCAnJyk7XG4gICAgICAgIHVybCA9IHVybCArIGAmdGl0bGU9JHt0aXRsZX1gO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIH0sIFtjaGFyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgd2lkdGg9XCI4MDBweFwiIG1pbkhlaWdodD1cIjYwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cImF1dG9cIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzEwMHB4J319PlxuICAgICAgICAgICAgPFdyaXRlQ2hhcmFjdG9yU2VhcmNoXG4gICAgICAgICAgICBjaGFyPXtjaGFyfVxuICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MHB4J319XG4gICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgZm9udFNpemU9eyczMHB4J31cbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgdGhlIGxpbmsgZWcuIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dmwwOEwyb1V2ZklcIlxuICAgICAgICAgICAgPjwvV3JpdGVDaGFyYWN0b3JTZWFyY2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7Y2hhciAmJiByZXMucGxheWVyX3Jlc3BvbnNlICYmIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT57cmVzLnBsYXllcl9yZXNwb25zZS52aWRlb0RldGFpbHMudGl0bGV9PC9oMj59XG5cbiAgICAgICAge2NoYXIgJiYgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbWVzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VwYXJhdGVDb2xvclwiIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19PlxuICAgICAgICAgICAgICBFeHRlbnNpb25cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGg+Q29udGVudC1UeXBlKE1pbWUtVHlwZSk8L3RoPlxuICAgICAgICAgICAgPHRoPkRvd25sb2FkPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSwgaXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17aXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmNvbnRhaW5lcn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmVzb2x1dGlvbn1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPXtmb3JtYXRVcmwoaXRlbS51cmwsIHRpdGxlKX0gdGFyZ2V0PVwiX2JsYW5rXCIgPmRvd25sb2FkPC9hPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIHshY29udGVudC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgTm8gUmVzdWx0c1xuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFuZT5cbiAgICApO1xuICB9XG4gICJdfQ== */\n/*@ sourceURL=/Users/terry/transform/pages/youtube-downloader.tsx */"));
});

/***/ })

})
//# sourceMappingURL=youtube-downloader.js.ed8a67e8846bed639cbc.hot-update.js.map