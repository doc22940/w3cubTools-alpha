("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[79],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var r,o=n("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),i&&s(n,i),t}();t.default=f},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||u||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},ExD4:function(e){e.exports=JSON.parse('{"gray":["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],"red":["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],"pink":["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],"grape":["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],"violet":["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],"indigo":["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],"blue":["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],"cyan":["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],"teal":["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],"green":["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],"lime":["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],"yellow":["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],"orange":["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]}')},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var o=String(n),i=t+o;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),i&&s(t,i),e}();t.default=a},Z3Yn:function(e,t,n){"use strict";t.a=function(e){var t=function(e){var t=document.createElement("pre");return t.style.position="fixed",t.style.fontSize="0px",t.textContent=e,t}(e);document.body.appendChild(t);var n=getSelection();n.removeAllRanges();var r=document.createRange();return r.selectNodeContents(t),n.addRange(r),document.execCommand("copy"),n.removeAllRanges(),document.body.removeChild(t),!0}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,n("8oxB"))},cS65:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/open-color",function(){var e=n("mgwy");return{page:e.default||e}}])},mgwy:function(e,t,n){"use strict";n.r(t);var r=n("doui"),o=n("pLtp"),i=n.n(o),s=n("MX0m"),a=n.n(s),c=n("q1tI"),l=n.n(c),u=n("ExD4"),f=n("Z3Yn");var p=i()(u),h=function(e){var t=e.color,n=e.i,o=e.co,i=function(e){var t=Object(c.useState)(!1),n=Object(r.default)(t,2),o=n[0],i=n[1];return[o,function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(t){var n=Object(f.a)(e);i(n)}else i(t)}]}(o),s=Object(r.default)(i,2),u=s[0],p=s[1];return Object(c.useEffect)(function(){u&&setTimeout(function(){p(!1)},800)},[u]),l.a.createElement("div",{id:"".concat(t,"-").concat(n),className:"jsx-3673154919 color-chip"},l.a.createElement("div",{onClick:function(){p(!0)},style:{backgroundColor:o},className:"jsx-3673154919 "+"color-chip-bg bg-".concat(t,"-").concat(n)},u&&l.a.createElement("div",{className:"jsx-3673154919 copy-text"},o)),l.a.createElement("div",{className:"jsx-3673154919 color-name"},"".concat(t," ").concat(n)),l.a.createElement("input",{type:"text",readOnly:!0,value:o,className:"jsx-3673154919 color-hex"}),l.a.createElement(a.a,{id:"3673154919"},[".color-chip.jsx-3673154919{margin-bottom:40px;line-height:1.25;position:relative;min-height:1px;padding-right:2px;padding-left:2px;float:left;width:10%;}",'.color-chip.jsx-3673154919 input[type="text"].jsx-3673154919{border:none;font-family:"Roboto Mono",monospace;background-color:transparent;}',".color-name.jsx-3673154919{padding:14px 3px 2px;text-transform:uppercase;text-align:left;font-size:14px;font-weight:500;}",".color-hex.jsx-3673154919{padding:2px 3px;width:100%;font-size:14px;color:#868e96;line-height:1.3;}",".color-chip-bg.jsx-3673154919{height:80px;border-radius:2px;position:relative;cursor:pointer;}",".color-chip-bg.jsx-3673154919 span.jsx-3673154919{position:absolute;top:0;left:0;margin:10px;font-size:12px;text-transform:uppercase;}","@-webkit-keyframes copyText-jsx-3673154919{0%{opacity:0;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}30%{opacity:0.5;}70%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);opacity:0.3;}100%{opacity:0;}}","@keyframes copyText-jsx-3673154919{0%{opacity:0;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}30%{opacity:0.5;}70%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);opacity:0.3;}100%{opacity:0;}}",".copy-text.jsx-3673154919{text-aligin:center;-webkit-animation:copyText-jsx-3673154919 0.8s;animation:copyText-jsx-3673154919 0.8s;opacity:0;}"]))};t.default=function(){return l.a.createElement("div",{className:"jsx-1121016200 color-box"},l.a.createElement("div",{className:"jsx-1121016200 shortcut-wrap"},l.a.createElement("ul",{className:"jsx-1121016200 shortcut-menus"},p.map(function(e){return l.a.createElement("li",{key:e,className:"jsx-1121016200"},l.a.createElement("a",{href:"#".concat(e),className:"jsx-1121016200 "+"shortcut ".concat(e)},l.a.createElement("span",{style:{backgroundColor:u[e][7]},className:"jsx-1121016200 "+"list-color list-color-".concat(e)}),e))}))),l.a.createElement("section",{className:"jsx-1121016200 color-wrap"},p.map(function(e){return l.a.createElement("section",{key:e,id:e,className:"jsx-1121016200 color-group"},l.a.createElement("h3",{className:"jsx-1121016200 color-title"},e),l.a.createElement("div",{className:"jsx-1121016200 color-chips-wrap"},l.a.createElement("div",{className:"jsx-1121016200 color-chips clearfix"},u[e].map(function(t,n){return l.a.createElement(h,{key:t,co:t,i:n,color:e})}))))})),l.a.createElement(a.a,{id:"1121016200"},[".color-box.jsx-1121016200{padding:0 30px;color:#495057;}",".shortcut-wrap.jsx-1121016200{padding:20px 0;}",".shortcut-wrap.jsx-1121016200 .shortcut-menus.jsx-1121016200{list-style:none;margin-top:0;margin-bottom:0;padding:0;height:110px;-webkit-column-count:5;column-count:5;}",".shortcut-wrap.jsx-1121016200 .shortcut-menus.jsx-1121016200 li.jsx-1121016200+li.jsx-1121016200{margin-top:0.25em;}",".shortcut-wrap.jsx-1121016200 a.shortcut.jsx-1121016200{display:block;padding:6px 0;width:100%;font-size:12px;color:#868e96;font-weight:400;text-transform:uppercase;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;line-height:18px;-webkit-text-decoration:none;text-decoration:none;}",".shortcut-wrap.jsx-1121016200 a.shortcut.jsx-1121016200 .list-color.jsx-1121016200{display:inline-block;margin-top:-2px;margin-right:10px;width:12px;height:12px;border-radius:3px;vertical-align:middle;}",".color-group.jsx-1121016200{padding-top:20px;}",".color-title.jsx-1121016200{margin:0 0 15px;font-size:24px;text-transform:capitalize;font-weight:700;line-height:1.5;}",".color-title.jsx-1121016200 span.jsx-1121016200{margin-right:0.5em;}",".color-chips.jsx-1121016200{text-align:center;}"]))}}},[["cS65",1,0]]]);