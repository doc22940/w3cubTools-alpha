("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[158],{Edbx:function(e,a,t){"use strict";var r=t("kOwS"),l=t("zrwo"),n=t("doui"),i=t("Ar1z"),c=t("PKMu"),s=t("jUWi"),o=t("q1tI"),u=t("nOHt"),d=t("9xZJ");a.a=o.memo(function(e){var a=e.transformer,t=e.resultRender,p=e.flexDirection,m=void 0===p?"row":p,h=e.layoutHeight,g=void 0===h?"500px":h,b=e.defaultValue,f=e.children,x=Object(o.useState)(b),y=Object(n.default)(x,2),w=y[0],E=y[1],A=Object(o.useState)(""),j=Object(n.default)(A,2),O=j[0],v=j[1],D=Object(o.useState)(""),R=Object(n.default)(D,2),C=R[0],k=(R[1],Object(u.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:g}),N={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},P={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},I={},H={},V={};"column"==m?(I=Object(l.a)({},k,{flexDirection:"column"}),V=Object(l.a)({},N,{flexDirection:"column"}),H=Object(l.a)({},P,{flexDirection:"row"})):(I=Object(l.a)({},k,{flexDirection:"row"}),V=Object(l.a)({},N,{flexDirection:"column"}),H=Object(l.a)({},P,{flexDirection:"column"}));var G=t?{border:"2px solid #ccc"}:{},T=Object(l.a)({},V);return o.createElement(o.Fragment,null,o.createElement(i.a,I,!f&&o.createElement(o.Fragment,null,o.createElement(i.a,V,o.createElement(c.a,{height:"100%",id:"textarea-1",placeholder:"Input content",value:w,onChange:function(e){return E(e.target.value)}})),o.createElement(i.a,H,a({value:w,result:O,setValue:E,setResult:v})),o.createElement(i.a,Object(r.a)({},T,{style:G}),t&&t({value:w,result:O,setValue:E,setResult:v}),!t&&o.createElement(c.a,{height:"100%",id:"textarea-2",placeholder:"Your results",value:O,onChange:function(e){return v(e.target.value)}}))),f&&f),o.createElement("div",{className:"clearfix"}),o.createElement(d.a,null),C&&o.createElement(s.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:C,backgroundColor:"#FAE2E2",zIndex:3}))})},PKMu:function(e,a,t){"use strict";var r=t("zUWB"),l=t("X82s"),n=t("NDry"),i=t("sLOm"),c=t("UCZM"),s=t("UHGV"),o=t("fYJG"),u=t("Ot2J"),d=t("7KPZ"),p=t("q1tI"),m=t.n(p),h=t("17x9"),g=t.n(h),b=t("TSYQ"),f=t.n(b),x=t("raqX"),y=t("9/s7"),w=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.theme,r=e.className,i=e.css,c=e.width,s=e.height,o=e.disabled,u=e.required,d=e.isInvalid,p=e.appearance,h=e.placeholder,g=e.spellCheck,b=e.grammarly,y=Object(n.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),w=t.getTextareaClassName(p);return m.a.createElement(x.a,Object(l.a)({is:"textarea",className:f()(w,r),size:400,width:c,height:s,required:u,disabled:o,placeholder:h,paddingLeft:Math.round(s/3.2),paddingRight:Math.round(s/3.2),borderRadius:3,spellCheck:g,"aria-invalid":d,"data-gramm_editor":b},o?{color:"muted"}:{},{css:i},a.styles,y))}}]),a}(p.PureComponent);w.displayName="Textarea",Object(d.a)(w,"propTypes",Object(r.a)({},x.a.propTypes,{required:g.a.bool,disabled:g.a.bool,isInvalid:g.a.bool,spellCheck:g.a.bool,grammarly:g.a.bool,placeholder:g.a.string,appearance:g.a.string,width:g.a.oneOfType([g.a.string,g.a.number]),theme:g.a.object.isRequired,className:g.a.string})),Object(d.a)(w,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(d.a)(w,"styles",{minHeight:80,paddingX:10,paddingY:8}),a.a=Object(y.a)(w)},arDy:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64-to-image",function(){var e=t("mm1m");return{page:e.default||e}}])},mm1m:function(e,a,t){"use strict";t.r(a);var r=t("Edbx"),l=t("q1tI"),n=t("Cino");a.default=function(){return l.createElement(r.a,{layoutHeight:"700px",flexDirection:"row",transformer:function(e){var a=e.value,t=e.setResult,r=e.result,i=e.setValue;return l.createElement(l.Fragment,null,l.createElement(n.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){var e=a.trim();"data"!=e.substring(0,4)&&(e="data:image/png;base64,"+e),t(e)}},"Generate Image"),l.createElement(n.a,{marginRight:10,height:40,margin:"5px",intent:"danger",appearance:"primary",display:"block",whiteSpace:"nowrap",onClick:function(){t(""),i("")}},"Empty All"),l.createElement(n.a,{marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",onClick:function(){var e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAIAAABuYg/PAAACgUlEQVR4nOyWvUvzXhTHb5pEiIkYFHRRCAhu1RjRiG+Db4iujoKL4OLg6j/g6NylYzsH+ke0paVpS+jSNl3aUkrp+1JIkx/8ApfjTZOHLg7P0zud870n53PuvSc3YRzHQb81Qr9GWsAWsH8XxkDn+/u72WxC5f39XZIk7Eaj0XK57N4DjuNQFPX19UXTtDtr2/bn5+d0OsXxW1tbHx8fs2GTySSRSEBlb28PwiKRyHA4hAHPz8/hcNi1TdPUNA3Ovr6+QvfHNt7c3BALLxaL2DZNczAYEAH5fB7buq4Ts0TCHzBFUdbX16GSy+VgLoqiAmCwMoTQxsbG/v6+L4ym6aurK6g0Go12u+3NOxMGK3OXFQqFfGEIodvbW0JJJpMBsHq93mq1EEKj0aharcKpu7s7IpiEnZ6e8jwPFfckxuNxpVLxwvDuZbNZ+LVaXV09Pj7+A4xlWaKiVCrlZrRt21V4nhcEAQe4u0d0x8PDA34lfGFuHHRrtVqv14N7GP5/EEtPp9PwqcfHR2/mGbCzszNRFKGSyWTg4auqenR0hF3DMPr9vmEYWNnc3IQBQTCapon3Q9f1QqGAXVmWYU9blhWPxy3Lwoq3y3xh3mhN0/DFwTDMwcGBLMuwrWOxGIz39mEQTFXV5eVl7Ha7XWzv7u5yHCcIws7ODhY7nQ62RVFUFGUOGMdxl5eXfnW4xsxTQQhdX1+zLDsHDCF0f38/U8dVy7I814NBsPPzc2+BjuMcHh4SVDh4nj85OZkbtrKygncMD0mS8E29vb29trZGBFxcXCwtLfnlZPwmEEIvLy/ERwAvyx1vb2+lUgkqT09PAQmpxe/3AraA/V2w/wIAAP//kdDhyy4UpR4AAAAASUVORK5CYII=".trim();i(e),"data"!=e.substring(0,4)&&(e="data:image/png;base64,"+e),t(e)}},"Get Example"),l.createElement(n.a,{is:"a",marginRight:10,height:40,margin:"5px",display:"block",whiteSpace:"nowrap",download:"image.jpg",href:r},"Download Image"))},defaultValue:"",resultRender:function(e){var a=e.result;return a?l.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},l.createElement("img",{src:a,className:""})):null}})}}},[["arDy",1,0]]]);