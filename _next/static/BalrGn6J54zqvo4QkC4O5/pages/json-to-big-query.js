("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[197],{"1fYD":function(t,e,r){t.exports=function(){var t=function(){var t=[Object,Function,Array,String,Boolean,Number,Date,RegExp,Error],e=t.length;return function(r){for(var n=0;n<e;n++)if(t[n]===r)return!0;return!1}}(),e=function(){var e={}.toString;return function(n){var i=e.call(n).slice(8,-1);if(null===n||void 0===n)return i.toLowerCase();var o=r(n);return o&&!t(o)?o.name:i}}();function r(t){return null===t||void 0===t?t:t.constructor}function n(t,n){var i=r(n)===String?e:r;return i(t)===n}function i(t,e){return t instanceof e}function o(t,e){if(!n(e,Array))throw"Second argument to .any() should be array";for(var r=0;r<e.length;r++){var i=e[r];if(n(t,i))return!0}return!1}var u=function(t,e){return 1==arguments.length?r(t):n(e,Array)?o(t,e):n(t,e)};return u.instance=i,u.string=e,u.of=r,u.is=n,u.any=o,u.extension=function(t,e){return i(t.prototype,e)},u}()},"49sm":function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},"Aw/l":function(t,e,r){var n=r("1fYD"),i=r("rL1p"),o={boolean:"String",string:"String",number:"Int32",date:"Date",timestamp:"DateTime",object:"Nested",regexp:"String",undefined:"String",null:"String"},u={create:function(t){return["CREATE TABLE ",t," ("].join("")},close:function(t,e){return e?[") ENGINE = MergeTree(",e,", (",t,", ",e,"), 8192);"].join(""):[") ENGINE = Memory;"].join("")},id:function(t,e){return["  ",t,"_id ",e,","].join("")},property:function(t,e){return["  ",t," ",e,","].join("")}};t.exports=function(t,e,r){return"string"!==typeof t&&(e=t,t="generic"),r||(r=null),function t(e,r,a){var s,f,h,p,c=r.tableName,l=r.parentTableName,g=r.parentTableId,y=r.parentTableIdType,d=Object.keys(e),b=[],m=[],w=null,v="string";b.push(u.create(c)),l&&b.push(u.property(l+"_"+g,o[y]));for(var E=0;E<d.length;E++)("id"===d[E].toLowerCase()||d[E].toLowerCase().indexOf("_id")>-1)&&(e[s=d[E]]=e[d[E]],d[E]=s,w=d[E],v=typeof e[d[E]]);w||(w="id",v=y||v,b.push(u.property(w,o[v])));for(E=0;E<d.length;E++)if("date"!=(p=(h=e[f=d[E]])instanceof Date?"date":n.string(h).toLowerCase())||a||(a=f),"undefined"!==p&&(p=i.isTimestamp(h)?"timestamp":p),"function"!==p)if("object"!==p||h.length)if("object"!==p&&"array"!==p)b.push(u.property(f,o[p]));else{if("object"===typeof h[0]){m.push(""),m.push(t(h[0],{parentTableName:c,parentTableId:w,parentTableIdType:v,tableName:c+"_"+f}).join(""));continue}m.push(""),m.push(t({value:typeof h[0]},{parentTableName:c,parentTableId:w,parentTableIdType:v,tableName:c+"_"+f}).join(""))}else m.push(""),m.push(t(h,{parentTableName:c,parentTableId:w,parentTableIdType:v,tableName:c+"_"+f}).join(""));return b[b.length-1]=i.arrayLastItem(b).substr(0,i.arrayLastItem(b).length-1),b.push(u.close(w,a)),b.concat(m)}(e,{tableName:t},r).join("")}},H7XF:function(t,e,r){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){for(var e,r=f(t),n=r[0],u=r[1],a=new o(function(t,e,r){return 3*(e+r)/4-r}(0,n,u)),s=0,h=u>0?n-4:n,p=0;p<h;p+=4)e=i[t.charCodeAt(p)]<<18|i[t.charCodeAt(p+1)]<<12|i[t.charCodeAt(p+2)]<<6|i[t.charCodeAt(p+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=255&e;2===u&&(e=i[t.charCodeAt(p)]<<2|i[t.charCodeAt(p+1)]>>4,a[s++]=255&e);1===u&&(e=i[t.charCodeAt(p)]<<10|i[t.charCodeAt(p+1)]<<4|i[t.charCodeAt(p+2)]>>2,a[s++]=e>>8&255,a[s++]=255&e);return a},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],u=0,a=r-i;u<a;u+=16383)o.push(h(t,u,u+16383>a?a:u+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=u.length;a<s;++a)n[a]=u[a],i[u.charCodeAt(a)]=a;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,r){for(var i,o,u=[],a=e;a<r;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return u.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},IYS3:function(t,e,r){var n=r("rL1p");function i(t){return Array.isArray(t)?"REPEATED":"NULLABLE"}function o(t){if(Array.isArray(t))return o(t[0]);if(t instanceof Date)return"TIMESTAMP";if("object"===typeof t)return"RECORD";if("boolean"===typeof t)return"BOOLEAN";if("string"===typeof t){if(n.isDateString(t))return"DATE";if(n.isTimestamp(t))return"TIMESTAMP"}return isNaN(t)?"STRING":Number.isInteger(parseFloat(t))?"INTEGER":"FLOAT"}t.exports=function(t){return function t(e){return Object.keys(e).map(function(r){var n=e[r],u={name:r,type:o(e[r]),mode:i(e[r])};return"RECORD"===u.type&&(u.fields=t("REPEATED"===u.mode?n[0]:n)),u})}(t)}},JeW5:function(t,e,r){e.generic=r("NekS"),e.mongoose=r("yhns"),e.bigquery=r("IYS3"),e.mysql=r("TQoY"),e.json=r("TR5Q"),e.clickhouse=r("Aw/l")},NekS:function(t,e,r){var n=r("1fYD"),i=r("rL1p");t.exports=function t(e,r){for(var o in r=r||{},e){var u=e[o],a=n.string(u).toLowerCase();"undefined"===a&&(a="null"),"string"===a&&i.isDate(u)&&(a="date"),"object"!==a?r[o]={type:a}:(r[o]=t(e[o]),r[o].type=a)}return r}},O6kJ:function(t,e,r){"use strict";r.r(e);var n=r("ln6h"),i=r.n(n),o=r("9Jkg"),u=r.n(o),a=r("O40h"),s=r("sN8P"),f=r("q1tI"),h=r("JeW5"),p=r.n(h);e.default=function(){var t=Object(f.useCallback)(function(){var t=Object(a.default)(i.a.mark(function t(e){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.value,t.abrupt("return",u()(p.a.bigquery(JSON.parse(r)),null,2));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[]);return f.createElement(s.a,{transformer:t,editorTitle:"JSON",editorLanguage:"json",resultTitle:"Big Query Schema",resultLanguage:"json"})}},TQoY:function(t,e,r){var n=r("1fYD"),i=r("rL1p"),o={boolean:"BOOLEAN",string:"TEXT",number:"INT",date:"DATE",timestamp:"TIMESTAMP",regexp:"TEXT",undefined:"TEXT",null:"TEXT"},u={create:function(t){return["CREATE TABLE ",t," ("].join("")},close:function(){return");"},id:function(t,e){return["  ",t,"_id ",e,","].join("")},property:function(t,e){return["  ",t," ",e,","].join("")},primary:function(t){return["  PRIMARY KEY (",t,"),"].join("")},foreign:function(t,e,r){return["  FOREIGN KEY (",t,") REFERENCES ",e,"(",r,"),"].join("")}};t.exports=function(t,e){return"string"!==typeof t&&(e=t,t="generic"),function t(e,r){var a,s,f,h,p=r.tableName,c=r.parentTableName,l=r.parentTableId,g=r.parentTableIdType,y=Object.keys(e),d=[],b=[],m=null,w="string";d.push(u.create(p)),c&&d.push(u.property(c+"_"+l,o[g]));for(var v=0;v<y.length;v++)("id"===y[v].toLowerCase()||y[v].toLowerCase().indexOf("_id")>-1)&&(e[a=y[v]]=e[y[v]],y[v]=a,m=y[v],w=typeof e[y[v]]);m||(m="id",w=g||w,d.push(u.property(m,o[w])));for(v=0;v<y.length;v++)if("undefined"!==(h=(f=e[s=y[v]])instanceof Date?"date":n.string(f).toLowerCase())&&(h=i.isTimestamp(f)?"timestamp":h),"function"!==h)if("object"!==h||f.length)if("object"!==h&&"array"!==h)d.push(u.property(s,o[h]));else{if("object"===typeof f[0]){b.push(""),b.push(t(f[0],{parentTableName:p,parentTableId:m,parentTableIdType:w,tableName:p+"_"+s}).join("\n"));continue}b.push(""),b.push(t({value:typeof f[0]},{parentTableName:p,parentTableId:m,parentTableIdType:w,tableName:p+"_"+s}).join("\n"))}else b.push(""),b.push(t(f,{parentTableName:p,parentTableId:m,parentTableIdType:w,tableName:p+"_"+s}).join("\n"));return d.push(u.primary(m)),c&&d.push(u.foreign(c+"_id",c,l)),d[d.length-1]=i.arrayLastItem(d).substr(0,i.arrayLastItem(d).length-1),d.push(u.close()),d.concat(b)}(e,{tableName:t}).join("\n")}},TR5Q:function(t,e,r){var n=r("1fYD");function i(t){return"date"===n.string(t).toLowerCase()?"date-time":null}function o(t){var e=n.string(t).toLowerCase();return"date"===e?"string":"regexp"===e?"string":"function"===e?"string":e}function u(t,e,r){var n,i,o;t=Object.keys(t),r=r||[];for(var u=0,a=(e=Object.keys(e)).length;u<a;u++)n=e[u],o=t.indexOf(n),i=r.indexOf(n),-1===o?-1!==i&&r.splice(i,1):-1===i&&r.push(n);return r}function a(t,e,r){var f,h,p;r&&e?e={items:e}:((e=e||{}).type=o(t),e.items=e.items||{},p=e.items.type||null);for(var c=0,l=t.length;c<l;c++){var g=o(t[c]),y=i(t[c]);if(p&&g!==p){e.items.oneOf=[],h=!0;break}p=g,f=y}if(!h&&p?(e.items.type=p,f&&(e.items.format=f)):h&&"object"!==p&&(e.items={oneOf:[{type:p}],required:e.items.required}),"undefined"!==typeof e.items.oneOf||"object"===p)for(var d=0,b=t.length;d<b;d++){var m,w=t[d],v=o(w),E=i(w);if("object"===v?(e.items.properties&&(e.items.required=u(e.items.properties,w,e.items.required)),m=s(w,h?{}:e.items.properties,!0)):"array"===v?m=a(w,h?{}:e.items.properties,!0):((m={}).type=v,E&&(m.format=E)),h){var T=n.string(w).toLowerCase(),A={};m.type||"object"!==T||(A.properties=m,A.type="object",m=A),e.items.oneOf.push(m)}else{if("object"!==e.items.type)continue;e.items.properties=m}}return r?e.items:e}function s(t,e,r){for(var n in r&&e?e={properties:e}:((e=e||{}).type=o(t),e.properties=e.properties||{}),t){var u=t[n],f=o(u),h=i(u);if("object"!==(f="undefined"===f?"null":f))if("array"!==f)if(e.properties[n]){var p=e.properties[n],c=Array.isArray(p.type);c&&p.type.indexOf(f)<0&&p.type.push(f),c||p.type===f||(p.type=[p.type,f])}else e.properties[n]={},e.properties[n].type=f,h&&(e.properties[n].format=h);else e.properties[n]=a(u,e.properties[n]);else e.properties[n]=s(u,e.properties[n])}return r?e.properties:e}t.exports=function(t,e){var r,i={$schema:"http://json-schema.org/draft-04/schema#"};return"string"!==typeof t?(e=t,t=void 0):i.title=t,i.type=n.string(e).toLowerCase(),"object"===i.type&&(r=s(e),i.type=r.type,i.properties=r.properties),"array"===i.type&&(r=a(e),i.type=r.type,i.items=r.items,i.title&&(i.items.title=i.title,i.title+=" Set")),i}},kRKe:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-to-big-query",function(){var t=r("O6kJ");return{page:t.default||t}}])},"kVK+":function(t,e){e.read=function(t,e,r,n,i){var o,u,a=8*i-n-1,s=(1<<a)-1,f=s>>1,h=-7,p=r?i-1:0,c=r?-1:1,l=t[e+p];for(p+=c,o=l&(1<<-h)-1,l>>=-h,h+=a;h>0;o=256*o+t[e+p],p+=c,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[e+p],p+=c,h-=8);if(0===o)o=1-f;else{if(o===s)return u?NaN:1/0*(l?-1:1);u+=Math.pow(2,n),o-=f}return(l?-1:1)*u*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var u,a,s,f=8*o-i-1,h=(1<<f)-1,p=h>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=h):(u=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-u))<1&&(u--,s*=2),(e+=u+p>=1?c/s:c*Math.pow(2,1-p))*s>=2&&(u++,s/=2),u+p>=h?(a=0,u=h):u+p>=1?(a=(e*s-1)*Math.pow(2,i),u+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,i),u=0));i>=8;t[r+l]=255&a,l+=g,a/=256,i-=8);for(u=u<<i|a,f+=i;f>0;t[r+l]=255&u,l+=g,u/=256,f-=8);t[r+l-g]|=128*y}},rL1p:function(t,e){var r=/\d{4}-\d{2}-\d{2}/;e.isNumber=function(t){return"number"===typeof t||"[object Number]"===Object.prototype.toString.call(t)},e.isDate=function(t){return"Invalid Date"!==new Date(t).toString()&&!isNaN(new Date(t))},e.isTimestamp=function(t){return t.length>18&&!isNaN(new Date(t).getTime())},e.isDateString=function(t){return t.match(r)},e.arrayLastItem=function(t){return t[t.length-1]}},tjlA:function(t,e,r){"use strict";(function(t){var n=r("H7XF"),i=r("kVK+"),o=r("49sm");function u(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!s.TYPED_ARRAY_SUPPORT&&!(this instanceof s))return new s(t,e,r);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return f(this,t,e,r)}function f(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=c(t,e);return t}(t,e,r,n):"string"===typeof e?function(t,e,r){"string"===typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(e,r),i=(t=a(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(s.isBuffer(e)){var r=0|l(e.length);return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||(n=e.length)!==n?a(t,0):c(t,e);if("Buffer"===e.type&&o(e.data))return c(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function p(t,e){if(h(e),t=a(t,e<0?0:0|l(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e){var r=e.length<0?0:0|l(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function g(t,e){if(s.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return k(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(n)return k(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function d(t,e,r,n,i){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"===typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){var o,u=1,a=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,a/=2,s/=2,r/=2}function f(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(i){var h=-1;for(o=r;o<a;o++)if(f(t,o)===f(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===s)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(r+s>a&&(r=a-s),o=r;o>=0;o--){for(var p=!0,c=0;c<s;c++)if(f(t,o+c)!==f(e,c)){p=!1;break}if(p)return o}return-1}function m(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[r+u]=a}return u}function w(t,e,r,n){return q(k(e,t.length-r),t,r,n)}function v(t,e,r,n){return q(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function E(t,e,r,n){return v(t,e,r,n)}function T(t,e,r,n){return q(F(e),t,r,n)}function A(t,e,r,n){return q(function(t,e){for(var r,n,i,o=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function R(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function _(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,u,a,s,f=t[i],h=null,p=f>239?4:f>223?3:f>191?2:1;if(i+p<=r)switch(p){case 1:f<128&&(h=f);break;case 2:128===(192&(o=t[i+1]))&&(s=(31&f)<<6|63&o)>127&&(h=s);break;case 3:o=t[i+1],u=t[i+2],128===(192&o)&&128===(192&u)&&(s=(15&f)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:o=t[i+1],u=t[i+2],a=t[i+3],128===(192&o)&&128===(192&u)&&128===(192&a)&&(s=(15&f)<<18|(63&o)<<12|(63&u)<<6|63&a)>65535&&s<1114112&&(h=s)}null===h?(h=65533,p=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=p}return function(t){var e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=S));return r}(n)}e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}(),e.kMaxLength=u(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return f(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return function(t,e,r,n){return h(e),e<=0?a(t,e):void 0!==r?"string"===typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},s.allocUnsafe=function(t){return p(null,t)},s.allocUnsafeSlow=function(t){return p(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!s.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},s.byteLength=g,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return B(this,e,r);case"utf8":case"utf-8":return _(this,e,r);case"ascii":return I(this,e,r);case"latin1":case"binary":return P(this,e,r);case"base64":return R(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),a=Math.min(o,u),f=this.slice(n,i),h=t.slice(e,r),p=0;p<a;++p)if(f[p]!==h[p]){o=f[p],u=h[p];break}return o<u?-1:u<o?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return d(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return d(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return m(this,t,e,r);case"utf8":case"utf-8":return w(this,t,e,r);case"ascii":return v(this,t,e,r);case"latin1":case"binary":return E(this,t,e,r);case"base64":return T(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var S=4096;function I(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function B(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=M(t[o]);return i}function L(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function N(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function j(t,e,r,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function O(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Y(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function U(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,o){return o||U(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function C(t,e,r,n,o){return o||U(t,0,r,8),i.write(t,e,r,n,52,8),r+8}s.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=s.prototype;else{var i=e-t;r=new s(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},s.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||N(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):Y(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);j(this,t,e,r,i-1,-i)}var o=0,u=1,a=0;for(this[e]=255&t;++o<r&&(u*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/u>>0)-a&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);j(this,t,e,r,i-1,-i)}var o=r-1,u=1,a=0;for(this[e+o]=255&t;--o>=0&&(u*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/u>>0)-a&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):Y(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return C(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return C(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},s.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var u=s.isBuffer(t)?t:k(new s(t,n).toString()),a=u.length;for(o=0;o<r-e;++o)this[o+e]=u[o%a]}return this};var x=/[^+\/0-9A-Za-z-_]/g;function M(t){return t<16?"0"+t.toString(16):t.toString(16)}function k(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function F(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(x,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function q(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r("3r9c"))},yhns:function(t,e,r){(function(e){var n=r("1fYD"),i=r("rL1p");function o(t){switch(t){case"array":return"Array";case"buffer":return"Buffer";case"boolean":return"Boolean";case"date":return"Date";case"number":return"Number";case"string":return"String";case"objectid":return"ObjectId";case"null":case"undefined":case"regexp":default:return"Mixed"}}t.exports=function t(r,u){u=u||{};for(var a in r){var s=r[a],f=null,h=null,p=null;if(s instanceof e&&(p="buffer"),null!=s&&"undefined"!==typeof s.toString&&s.toString().match(/^[0-9a-fA-F]{24}$/)&&(p="objectid"),p||(p=n.string(s).toLowerCase()),"string"===p&&i.isDate(s)&&(p="date"),"object"===p)u[a]=t(r[a]);else{if("undefined"===p&&(p="null"),"array"===p&&s.length){f=p,p=void 0;for(var c=0,l=s.length;c<l;c++){if(h=n.string(s[c]).toLowerCase(),p&&h!==p){p="mixed";break}p=h}}u[a]=f&&"array"===f?{type:[o(p)]}:{type:o(p)}}}return u}}).call(this,r("tjlA").Buffer)}},[["kRKe",1,0]]]);