("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[163],{"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var n,a=r("q1tI");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),_=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=o(this,l(t).call(this,e))).prevProps={},r}var r,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,a.Component),r=t,s=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return u.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&i(r.prototype,n),s&&i(r,s),t}();t.default=_},"7Mlj":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),s=r("yVdh"),i=r("Edbx"),o=r("Ar1z");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{flexDirection:"column",layoutHeight:"600px"},a.a.createElement(o.a,{width:"500px",height:"100%",marginX:"auto"},a.a.createElement(s.a,null))))}},"8oxB":function(e,t){var r,n,a=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,c=[],u=!1,_=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):_=-1,c.length&&h())}function h(){if(!u){var e=o(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++_<t;)l&&l[_].run();_=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||u||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},DTc6:function(e,t,r){"use strict";r.d(t,"a",function(){return p});var n=r("0iUn"),a=r("sLSF"),s=r("MI3g"),i=r("a7VT"),o=r("AT/M"),l=r("Tit0"),c=r("MX0m"),u=r.n(c),_=r("q1tI"),d=r.n(_),h=r("i8i4"),f=r.n(h),p=function(e){function t(){var e;return Object(n.default)(this,t),(e=Object(s.default)(this,Object(i.default)(t).call(this))).keyMapping={},e.onClick=e.onClick.bind(Object(o.default)(e)),e}return Object(l.default)(t,e),Object(a.default)(t,[{key:"onClick",value:function(e){var t=e.target;t.classList.remove("clicked"),setTimeout(function(){t.classList.add("clicked")},0),this.props.onClick(t.dataset.value)}},{key:"componentDidMount",value:function(){var e=this,t=f.a.findDOMNode(this).querySelectorAll("button");(t=[].slice.call(t)).forEach(function(t){e.keyMapping[t.dataset.code]=t}),window.onkeydown=function(t){var r,n=(t.shiftKey?"shift+":"")+t.keyCode||t.which;(r=e.keyMapping[n])&&(r.click(),t.stopPropagation(),t.preventDefault())}}},{key:"render",value:function(){return d.a.createElement("div",{className:"jsx-4119502348 button-panel row"},d.a.createElement("div",{className:"jsx-4119502348 s3 column"},d.a.createElement("div",{className:"jsx-4119502348 s1 row"},d.a.createElement("button",{"data-code":"67","data-value":"c",onClick:this.onClick,className:"jsx-4119502348 button s1"},"C"),d.a.createElement("button",{"data-code":"8","data-value":"back",onClick:this.onClick,className:"jsx-4119502348 button s1"},"\u2190"),d.a.createElement("button",{"data-code":"191","data-value":"/",onClick:this.onClick,className:"jsx-4119502348 button s1"},"\xf7")),d.a.createElement("div",{className:"jsx-4119502348 s1 row"},d.a.createElement("button",{"data-code":"55","data-value":"7",onClick:this.onClick,className:"jsx-4119502348 button s1"},"7"),d.a.createElement("button",{"data-code":"56","data-value":"8",onClick:this.onClick,className:"jsx-4119502348 button s1"},"8"),d.a.createElement("button",{"data-code":"57","data-value":"9",onClick:this.onClick,className:"jsx-4119502348 button s1"},"9")),d.a.createElement("div",{className:"jsx-4119502348 s1 row"},d.a.createElement("button",{"data-code":"52","data-value":"4",onClick:this.onClick,className:"jsx-4119502348 button s1"},"4"),d.a.createElement("button",{"data-code":"53","data-value":"5",onClick:this.onClick,className:"jsx-4119502348 button s1"},"5"),d.a.createElement("button",{"data-code":"54","data-value":"6",onClick:this.onClick,className:"jsx-4119502348 button s1"},"6")),d.a.createElement("div",{className:"jsx-4119502348 s1 row"},d.a.createElement("button",{"data-code":"49","data-value":"1",onClick:this.onClick,className:"jsx-4119502348 button s1"},"1"),d.a.createElement("button",{"data-code":"50","data-value":"2",onClick:this.onClick,className:"jsx-4119502348 button s1"},"2"),d.a.createElement("button",{"data-code":"51","data-value":"3",onClick:this.onClick,className:"jsx-4119502348 button s1"},"3")),d.a.createElement("div",{className:"jsx-4119502348 s1 row"},d.a.createElement("button",{"data-code":"48","data-value":"0",onClick:this.onClick,className:"jsx-4119502348 button s2"},"0"),d.a.createElement("button",{"data-code":"190","data-value":".",onClick:this.onClick,className:"jsx-4119502348 button s1"},"."))),d.a.createElement("div",{className:"jsx-4119502348 s1 column"},d.a.createElement("button",{"data-code":"shift+56","data-value":"*",onClick:this.onClick,className:"jsx-4119502348 button s1"},"\xd7"),d.a.createElement("button",{"data-code":"189","data-value":"-",onClick:this.onClick,className:"jsx-4119502348 button s1"},"-"),d.a.createElement("button",{"data-code":"187","data-value":"+",onClick:this.onClick,className:"jsx-4119502348 button s1"},"+"),d.a.createElement("button",{"data-code":"13","data-value":"=",onClick:this.onClick,className:"jsx-4119502348 button s2 button-equal"},"=")),d.a.createElement(u.a,{id:"4119502348"},[".button-panel.jsx-4119502348{-webkit-flex:5;-ms-flex:5;flex:5;margin-right:1px;}",".button-panel.jsx-4119502348 .button.jsx-4119502348{cursor:pointer;position:relative;margin:0;padding:0;border:none;background-color:#fafafa;font-size:30px;line-height:0px;text-align:center;color:#979ca4;overflow:hidden;border:1px solid #e3e7e9;margin-top:-1px;margin-right:-1px;}",'.button-panel.jsx-4119502348 .button.jsx-4119502348:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:40px;height:40px;border-radius:50%;background:#aaa;opacity:0;}',".button-panel.jsx-4119502348 .button.clicked.jsx-4119502348:before{-webkit-animation:react-calculator-click-jsx-4119502348 0.5s ease-out 0s 1 alternate forwards;animation:react-calculator-click-jsx-4119502348 0.5s ease-out 0s 1 alternate forwards;}",".button-panel.jsx-4119502348 .button.button-equal.jsx-4119502348{color:#fff;background-color:#fa722e;}",".button-panel.jsx-4119502348 .button.jsx-4119502348:focus{outline:none;}"]))}}]),t}(d.a.Component)},Edbx:function(e,t,r){"use strict";var n=r("kOwS"),a=r("zrwo"),s=r("doui"),i=r("Ar1z"),o=r("PKMu"),l=r("jUWi"),c=r("q1tI"),u=r("nOHt"),_=r("9xZJ");t.a=c.memo(function(e){var t=e.transformer,r=e.resultRender,d=e.flexDirection,h=void 0===d?"row":d,f=e.layoutHeight,p=void 0===f?"500px":f,m=e.defaultValue,b=e.children,v=Object(c.useState)(m),y=Object(s.default)(v,2),x=y[0],k=y[1],g=Object(c.useState)(""),E=Object(s.default)(g,2),j=E[0],C=E[1],w=Object(c.useState)(""),O=Object(s.default)(w,2),S=O[0],P=(O[1],Object(u.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:p}),T={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},M={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},R={},D={},I={};"column"==h?(R=Object(a.a)({},P,{flexDirection:"column"}),I=Object(a.a)({},T,{flexDirection:"column"}),D=Object(a.a)({},M,{flexDirection:"row"})):(R=Object(a.a)({},P,{flexDirection:"row"}),I=Object(a.a)({},T,{flexDirection:"column"}),D=Object(a.a)({},M,{flexDirection:"column"}));var B=r?{border:"2px solid #ccc"}:{},A=Object(a.a)({},I);return c.createElement(c.Fragment,null,c.createElement(i.a,R,!b&&c.createElement(c.Fragment,null,c.createElement(i.a,I,c.createElement(o.a,{height:"100%",id:"textarea-1",placeholder:"Input content",value:x,onChange:function(e){return k(e.target.value)}})),c.createElement(i.a,D,t({value:x,result:j,setValue:k,setResult:C})),c.createElement(i.a,Object(n.a)({},A,{style:B}),r&&r({value:x,result:j,setValue:k,setResult:C}),!r&&c.createElement(o.a,{height:"100%",id:"textarea-2",placeholder:"Your results",value:j,onChange:function(e){return C(e.target.value)}}))),b&&b),c.createElement("div",{className:"clearfix"}),c.createElement(_.a,null),S&&c.createElement(l.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:S,backgroundColor:"#FAE2E2",zIndex:3}))})},MX0m:function(e,t,r){e.exports=r("3niX")},PKMu:function(e,t,r){"use strict";var n=r("zUWB"),a=r("X82s"),s=r("NDry"),i=r("sLOm"),o=r("UCZM"),l=r("UHGV"),c=r("fYJG"),u=r("Ot2J"),_=r("7KPZ"),d=r("q1tI"),h=r.n(d),f=r("17x9"),p=r.n(f),m=r("TSYQ"),b=r.n(m),v=r("raqX"),y=r("9/s7"),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,r=e.theme,n=e.className,i=e.css,o=e.width,l=e.height,c=e.disabled,u=e.required,_=e.isInvalid,d=e.appearance,f=e.placeholder,p=e.spellCheck,m=e.grammarly,y=Object(s.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),x=r.getTextareaClassName(d);return h.a.createElement(v.a,Object(a.a)({is:"textarea",className:b()(x,n),size:400,width:o,height:l,required:u,disabled:c,placeholder:f,paddingLeft:Math.round(l/3.2),paddingRight:Math.round(l/3.2),borderRadius:3,spellCheck:p,"aria-invalid":_,"data-gramm_editor":m},c?{color:"muted"}:{},{css:i},t.styles,y))}}]),t}(d.PureComponent);x.displayName="Textarea",Object(_.a)(x,"propTypes",Object(n.a)({},v.a.propTypes,{required:p.a.bool,disabled:p.a.bool,isInvalid:p.a.bool,spellCheck:p.a.bool,grammarly:p.a.bool,placeholder:p.a.string,appearance:p.a.string,width:p.a.oneOfType([p.a.string,p.a.number]),theme:p.a.object.isRequired,className:p.a.string})),Object(_.a)(x,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(_.a)(x,"styles",{minHeight:80,paddingX:10,paddingY:8}),t.a=Object(y.a)(x)},Rd9E:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r("0iUn"),a=r("sLSF"),s=r("MI3g"),i=r("a7VT"),o=r("Tit0"),l=r("vYYK"),c=r("MX0m"),u=r.n(c),_=r("q1tI"),d=r.n(_),h=[{reg:/\*/g,dest:"\xd7"},{reg:/\//g,dest:"\xf7"}],f=function(e){function t(){return Object(n.default)(this,t),Object(s.default)(this,Object(i.default)(t).call(this))}return Object(o.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){var e=this.props.exp;return h.forEach(function(t){e.cur=e.cur.replace(t.reg,t.dest),e.last=e.last.replace(t.reg,t.dest)}),d.a.createElement("div",{className:"jsx-3853217785 result-panel"},d.a.createElement("div",{className:"jsx-3853217785 last-row"},e.last),d.a.createElement("div",{className:"jsx-3853217785 cur-row"},e.cur),d.a.createElement(u.a,{id:"3853217785"},[".result-panel.jsx-3853217785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:40px;-webkit-flex:2;-ms-flex:2;flex:2;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#e3e7e9;text-align:right;padding:0px 30px;line-height:80px;border:1px solid #e3e7e9;border-right:0;border-bottom:0;}",".result-panel.jsx-3853217785 .last-row.jsx-3853217785{-webkit-flex:1;-ms-flex:1;flex:1;color:#969ba3;font-size:30px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;overflow:auto;max-width:100%;}",".result-panel.jsx-3853217785 .cur-row.jsx-3853217785{-webkit-flex:1;-ms-flex:1;flex:1;color:#46494d;font-size:40px;overflow:auto;max-width:100%;}"]))}}]),t}(d.a.Component);Object(l.a)(f,"defaultProps",{exp:0})},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r("9kyW")),a=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s,o=t.isBrowser,l=void 0===o?"undefined"!==typeof window:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new a.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,s;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,a=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=a.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=s,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var a=String(r),s=t+a;return e[s]||(e[s]="jsx-".concat((0,n.default)("".concat(t,"-").concat(a)))),e[s]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var a=r+n;return t[a]||(t[a]=n.replace(e,r)),t[a]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,a=e.id;if(n){var s=this.computeId(a,n);return{styleId:s,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(s,e)}):[this.computeSelector(s,r)]}}return{styleId:this.computeId(a),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&i(t.prototype,r),s&&i(t,s),e}();t.default=o},Z1hz:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator",function(){var e=r("7Mlj");return{page:e.default||e}}])},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,s=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,l=void 0===o?n:o,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(a(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#".concat(s,"-deleted-rule____{}"),i("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var _=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=_?_.getAttribute("content"):null}var t,s,o;return t=e,(s=[{key:"setOptimizeForSpeed",value:function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(i(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];i(a,"old rule at index `".concat(e,"` not found")),a.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&i(a(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),o&&r(t,o),e}();function i(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=s}).call(this,r("8oxB"))},yVdh:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Calculator});var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("0iUn"),_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("sLSF"),_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("MI3g"),_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a7VT"),_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("AT/M"),_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("Tit0"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("MX0m"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_ResultPanel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("Rd9E"),_ButtonPanel__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("DTc6"),Calculator=function(_React$Component){function Calculator(){var e;return Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this,Calculator),(e=Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this,Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Calculator).call(this))).state={last:"",cur:"0"},e.onButtonClick=e.onButtonClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(e)),e}return Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(Calculator,_React$Component),Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Calculator,[{key:"onButtonClick",value:function onButtonClick(type){var cur,lastLetter;switch(type){case"c":this.setState({last:"",cur:"0"});break;case"back":this.setState({cur:"0"===this.state.cur?this.state.cur:this.state.cur.slice(0,-1)||"0"});break;case"=":try{this.setState({last:this.state.cur+"=",cur:eval(this.state.cur)+""})}catch(e){this.setState({last:this.state.cur+"=",cur:"NaN"})}break;case"+":case"-":case"*":case"/":cur=this.state.cur,lastLetter=cur.slice(-1),"+"===lastLetter||"-"===lastLetter||"*"===lastLetter||"/"===lastLetter?this.setState({cur:cur.slice(0,-1)+type}):this.setState({cur:this.state.cur+type});break;case".":cur=this.state.cur,lastLetter=cur.slice(-1),"."!==lastLetter&&this.setState({cur:this.state.cur+type});break;default:this.setState({cur:"0"===this.state.cur?type:this.state.cur+type})}}},{key:"render",value:function(){var e={cur:this.state.cur,last:this.state.last};return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"jsx-1742351173 react-calculator"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ResultPanel__WEBPACK_IMPORTED_MODULE_8__.a,{exp:e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ButtonPanel__WEBPACK_IMPORTED_MODULE_9__.a,{onClick:this.onButtonClick}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,{id:"1742351173"},[".react-calculator.jsx-1742351173{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-shadow:-2px -2px 2px #efefef,5px 5px 5px #ccc;}"]))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)}},[["Z1hz",1,0]]]);