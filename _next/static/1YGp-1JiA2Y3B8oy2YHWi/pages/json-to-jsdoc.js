("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[54],{"HaC/":function(n,t,r){"use strict";r.r(t);var o=r("ln6h"),c=r.n(o),e=r("O40h"),a=r("sN8P"),i=r("q1tI"),u=r("pLtp"),f=r.n(u);function s(n,t){var r=n,o={},c=t.length;return f()(n).forEach(function(t){~t.indexOf(".")||n[t].length<c&&r[t].push("undefined"),n[t].forEach(function(o){"object"!==o&&"object[]"!==o||function(n,t){var r=this,o={},c=0;f()(n).forEach(function(r){~r.indexOf(t)&&r!==t&&(o[r]=n[r])}),f()(o).forEach(function(n){var t=o[n].length;t>c&&(c=t)}),f()(o).forEach(function(n){n.split(".").length<2&&c>o[n].length&&r[n].push("undefined")})}.bind(r,n,t)()})}),f()(r).forEach(function(n){o[n]=h(r[n])}),o}function h(n){for(var t={},r=[],o=0,c=n.length;o<c;++o)t.hasOwnProperty(n[o])||(r.push(n[o]),t[n[o]]=1);return r}function p(n){var t=Object.prototype.toString.call(n).split(" ")[1].slice(0,-1).toLowerCase();return t||(t="*"),t[0].toUpperCase()+t.substr(1)}function l(n,t){var r=this,o=[],c=t?"".concat(t):"";n.forEach(function(n){o.push("".concat(p(n),"[]"))}),t in this||(this[t]=[]),this[t].push(h(o).join("|")),n.forEach(function(n){var t=p(n);"array"===t?l.bind(r,n,c)():"object"===t&&d.bind(r,n,c,!0)()})}function d(n,t){var r=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=t?"".concat(t,"."):"";f()(n).forEach(function(t){var o=n[t],e=p(o),a="".concat(c).concat(t),i=null;"array"===e?l.bind(r,o,a)():"object"===e?d.bind(r,o,a)():(i=e,a in r||(r[a]=[]),r[a].push(i))}),!o&&t&&(t in this||(this[t]=[]),this[t].push("object"))}function b(n){var t={};return n.forEach(function(n){return function(n){var t=typeof n;"array"===t?l.bind(this,n)():"object"===t&&d.bind(this,n)()}.bind(t,n)()}),function(n,t){var r="",o=[];return f()(t).forEach(function(n){o.push(p(t[n]))}),r="/** @typedef {".concat(h(o),"} ").concat("json"," \n"),f()(n).sort().forEach(function(t){r+="* @property {".concat(n[t].join("|"),"} ").concat(t," \n")}),r+="*/"}(s(t,n),n)}function v(n){var t=[];return t.push(JSON.parse(n)),b(t)}t.default=function(){var n=Object(i.useCallback)(function(){var n=Object(e.default)(c.a.mark(function n(t){var r;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.value,n.abrupt("return",v(r));case 2:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),[]);return i.createElement(a.a,{transformer:n,editorTitle:"JSON",editorLanguage:"json",resultTitle:"JSDoc",resultLanguage:"javascript"})}},clR0:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-to-jsdoc",function(){var n=r("HaC/");return{page:n.default||n}}])}},[["clR0",1,0]]]);