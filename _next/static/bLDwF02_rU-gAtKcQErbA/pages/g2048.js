("object"!==typeof self?self:this.webpackJsonp="object"!==typeof self?self:this.webpackJsonp||[]).push([[19],{ClXt:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),n=i.n(a),r=i("0iUn"),s=i("sLSF"),o=i("MI3g"),l=i("a7VT"),c=i("AT/M"),u=i("Tit0"),h=i("vYYK"),d=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"heading"},n.a.createElement("h1",{className:"title"},"2048"),n.a.createElement("div",{className:"scores-container"},n.a.createElement("div",{className:"score-container"},this.props.score),n.a.createElement("span",null,"\xa0"),n.a.createElement("div",{className:"best-container"},this.props.best)))}}]),t}(a.Component);function v(){return n.a.createElement("div",{className:"above-game"},n.a.createElement("p",{className:"game-intro"},"Join the numbers and get to the ",n.a.createElement("strong",null,"2048 tile!")),n.a.createElement("a",{className:"restart-button"},"New Game"))}var p=i("TSYQ"),f=i.n(p),m=function(e){function t(e){var i;return Object(r.default)(this,t),(i=Object(o.default)(this,Object(l.default)(t).call(this,e))).state={previousPosition:null,mergedFrom:null,isNew:!0},i}return Object(u.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){var e=f()("tile","tile-"+this.props.value,["tile-position",this.props.x+1,this.props.y+1].join("-"),{"tile-new":this.state.isNew});return n.a.createElement("div",{className:e}," ",n.a.createElement("div",{className:"tile-inner"}," ",this.props.value))}},{key:"componentDidUpdate",value:function(e){e.x===this.props.x&&e.y===this.props.y||this.setState({previosuPosition:{x:this.props.x,y:this.props.y},isNew:!1})}}]),t}(n.a.Component),g=0,y=function(){function e(t,i){Object(r.default)(this,e),Object(h.a)(this,"previousPosition",void 0),Object(h.a)(this,"x",void 0),Object(h.a)(this,"y",void 0),Object(h.a)(this,"value",void 0),Object(h.a)(this,"mergedFrom",void 0),Object(h.a)(this,"prog",void 0),this.x=t.x,this.y=t.y,this.value=i||2,this.previousPosition=null,this.mergedFrom=null,this.prog=g++}return Object(s.default)(e,[{key:"savePosition",value:function(){this.previousPosition={x:this.x,y:this.y}}},{key:"updatePosition",value:function(e){this.x=e.x,this.y=e.y}},{key:"serialize",value:function(){return{position:{x:this.x,y:this.y},value:this.value}}}]),e}(),b=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"getChildren",value:function(){var e=[];return this.props.tiles.forEach(function(t){e.push(n.a.createElement(m,{x:t.x,y:t.y,value:t.value,key:t.prog}))}),e}},{key:"render",value:function(){return n.a.createElement("div",{className:"tile-container"},this.getChildren())}}]),t}(n.a.Component);var O,j=function(){return n.a.createElement("div",{className:"grid-cell"})},x=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"getChildren",value:function(){for(var e=[],t=0;t<this.props.size;t++)e.push(n.a.createElement(j,{key:t}));return e}},{key:"render",value:function(){return n.a.createElement("div",{className:"grid-row"},this.getChildren())}}]),t}(a.Component),k=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"getChildren",value:function(){for(var e=[],t=0;t<this.props.size;t++)e.push(n.a.createElement(x,{size:this.props.size,key:t}));return e}},{key:"render",value:function(){return n.a.createElement("div",{className:"grid-container"},this.getChildren())}}]),t}(a.Component),w=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){var e=f()("game-message",{"game-won":this.props.won,"game-over":this.props.over}),t=this.props.won?"You win!":"Game over!";return n.a.createElement("div",{className:"game-container"},n.a.createElement("div",{className:e},n.a.createElement("p",null,t),n.a.createElement("div",{className:"lower"},n.a.createElement("a",{className:"keep-playing-button"},"Keep going"),n.a.createElement("a",{className:"retry-button"},"Try again"))),n.a.createElement(k,{size:this.props.size}),n.a.createElement(b,{size:this.props.size,tiles:this.props.tiles}))}}]),t}(a.Component),E=i("9Jkg"),T=i.n(E),S={_data:{},setItem:function(e,t){return this._data[e]=String(t)},getItem:function(e){return this._data.hasOwnProperty(e)?this._data[e]:void 0},removeItem:function(e){return delete this._data[e]},clear:function(){return this._data={}}},P=function(){function e(){Object(r.default)(this,e),Object(h.a)(this,"bestScoreKey",void 0),Object(h.a)(this,"gameStateKey",void 0),Object(h.a)(this,"storage",void 0),this.bestScoreKey="bestScore",this.gameStateKey="gameState";var t=this.localStorageSupported();this.storage=t?window.localStorage:S}return Object(s.default)(e,[{key:"localStorageSupported",value:function(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(t){return!1}}},{key:"getBestScore",value:function(){return this.storage.getItem(this.bestScoreKey)||0}},{key:"setBestScore",value:function(e){this.storage.setItem(this.bestScoreKey,e)}},{key:"getGameState",value:function(){var e=this.storage.getItem(this.gameStateKey);return e?JSON.parse(e):null}},{key:"setGameState",value:function(e){this.storage.setItem(this.gameStateKey,T()(e))}},{key:"clearGameState",value:function(){this.storage.removeItem(this.gameStateKey)}}]),e}(),C=function(){function e(){Object(r.default)(this,e),Object(h.a)(this,"events",void 0),Object(h.a)(this,"eventTouchstart",void 0),Object(h.a)(this,"eventTouchmove",void 0),Object(h.a)(this,"eventTouchend",void 0),this.events={},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.listen()}return Object(s.default)(e,[{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"emit",value:function(e,t){var i=this.events[e];i&&i.forEach(function(e){e(t)})}},{key:"listen",value:function(){var e,t,i=this,a={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3};document.addEventListener("keydown",function(e){var t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,n=a[e.which];t||void 0!==n&&(e.preventDefault(),i.emit("move",n)),t||82!==e.which||i.restart.call(i,e)}),this.bindButtonPress(".retry-button",this.restart),this.bindButtonPress(".restart-button",this.restart),this.bindButtonPress(".keep-playing-button",this.keepPlaying);var n=document.getElementsByClassName("game-container")[0];n.addEventListener(this.eventTouchstart,function(i){!window.navigator.msPointerEnabled&&i.touches.length>1||i.targetTouches.length>1||(window.navigator.msPointerEnabled?(e=i.pageX,t=i.pageY):(e=i.touches[0].clientY,t=i.touches[0].clientY),i.preventDefault())}),n.addEventListener(this.eventTouchmove,function(e){e.preventDefault()}),n.addEventListener(this.eventTouchend,function(a){if(!(!window.navigator.msPointerEnabled&&a.touches.length>0||a.targetTouches.length>0)){var n,r;window.navigator.msPointerEnabled?(n=a.pageX,r=a.pageY):(n=a.changedTouches[0].clientY,r=a.changedTouches[0].clientY);var s=n-e,o=Math.abs(s),l=r-t,c=Math.abs(l);Math.max(o,c)>10&&i.emit("move",o>c?s>0?1:3:l>0?2:0)}})}},{key:"restart",value:function(e){e.preventDefault(),this.emit("restart")}},{key:"keepPlaying",value:function(e){e.preventDefault(),this.emit("keepPlaying")}},{key:"bindButtonPress",value:function(e,t){var i=document.querySelector(e);i&&(i.addEventListener("click",t.bind(this)),i.addEventListener(this.eventTouchend,t.bind(this)))}}]),e}();function z(e,t){this.size=e,this.cells=t?this.fromState(t):this.empty()}z.prototype.empty=function(){for(var e=[],t=0;t<this.size;t++)for(var i=e[t]=[],a=0;a<this.size;a++)i.push(null);return e},z.prototype.fromState=function(e){for(var t=[],i=0;i<this.size;i++)for(var a=t[i]=[],n=0;n<this.size;n++){var r=e[i][n];a.push(r?new y(r.position,r.value):null)}return t},z.prototype.randomAvailableCell=function(){var e=this.availableCells();if(e.length)return e[Math.floor(Math.random()*e.length)]},z.prototype.availableCells=function(){var e=[];return this.eachCell(function(t,i,a){a||e.push({x:t,y:i})}),e},z.prototype.eachCell=function(e){for(var t=0;t<this.size;t++)for(var i=0;i<this.size;i++)e(t,i,this.cells[t][i])},z.prototype.cellsAvailable=function(){return!!this.availableCells().length},z.prototype.cellAvailable=function(e){return!this.cellOccupied(e)},z.prototype.cellOccupied=function(e){return!!this.cellContent(e)},z.prototype.cellContent=function(e){return this.withinBounds(e)?this.cells[e.x][e.y]:null},z.prototype.insertTile=function(e){this.cells[e.x][e.y]=e},z.prototype.removeTile=function(e){this.cells[e.x][e.y]=null},z.prototype.withinBounds=function(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size},z.prototype.toString=function(){for(var e=[],t=0;t<this.size;t++){for(var i=0;i<this.size;i++)e.push(this.cells[i][t]?this.cells[i][t].value:"\xb7");e.push("\n")}return e.join("")},z.prototype.serialize=function(){for(var e=[],t=0;t<this.size;t++)for(var i=e[t]=[],a=0;a<this.size;a++)i.push(this.cells[t][a]?this.cells[t][a].serialize():null);return{size:this.size,cells:e}},O=new P;var N=function(e){function t(e){var i;return Object(r.default)(this,t),i=Object(o.default)(this,Object(l.default)(t).call(this,e)),Object(h.a)(Object(c.default)(i),"inputManager",void 0),Object(h.a)(Object(c.default)(i),"won",void 0),Object(h.a)(Object(c.default)(i),"over",void 0),Object(h.a)(Object(c.default)(i),"grid",void 0),Object(h.a)(Object(c.default)(i),"score",void 0),Object(h.a)(Object(c.default)(i),"keepPlaying",void 0),i.move=i.move.bind(Object(c.default)(i)),i.restart=i.restart.bind(Object(c.default)(i)),i.keepPlayingfn=i.keepPlayingfn.bind(Object(c.default)(i)),i}return Object(u.default)(t,e),Object(s.default)(t,[{key:"componentWillMount",value:function(){this.setup()}},{key:"componentDidMount",value:function(){this.inputManager=new C,this.inputManager.on("move",this.move),this.inputManager.on("restart",this.restart),this.inputManager.on("keepPlaying",this.keepPlayingfn)}},{key:"render",value:function(){return n.a.createElement("div",{className:"g-container"},n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{score:this.state.score,best:this.state.best}),n.a.createElement(v,null),n.a.createElement(w,{size:this.props.size,tiles:this.state.tiles,won:this.state.won,over:this.state.over})))}},{key:"getRandomTiles",value:function(){for(var e=[],t=0;t<this.props.startTiles;t++)e.push(this.getRandomTile());return e}},{key:"getRandomTile",value:function(){var e=Math.random()<.9?2:4,t=this.grid.randomAvailableCell(),i=new y(t,e);return this.grid.insertTile(i),{value:e,x:t.x,y:t.y,prog:i.prog}}},{key:"continueGame",value:function(){this.won=!1,this.over=!1}},{key:"restart",value:function(){O.clearGameState(),this.continueGame(),this.setup()}},{key:"keepPlayingfn",value:function(){this.keepPlaying=!0,this.continueGame()}},{key:"isGameTerminated",value:function(){return this.over||this.won&&!this.keepPlaying}},{key:"setup",value:function(){var e=O.getGameState();e?(this.grid=new z(e.grid.size,e.grid.cells),this.score=e.score,this.over=e.over,this.won=e.won,this.keepPlaying=e.keepPlaying):(this.grid=new z(this.props.size),this.score=0,this.over=!1,this.won=!1,this.keepPlaying=!1),this.setState({score:this.score,best:O.getBestScore(),tiles:this.getRandomTiles(),over:this.over,won:this.won})}},{key:"addStartTiles",value:function(){for(var e=0;e<this.startTiles;e++)this.addRandomTile()}},{key:"addRandomTile",value:function(){if(this.grid.cellsAvailable()){var e=Math.random()<.9?2:4,t=new y(this.grid.randomAvailableCell(),e);this.grid.insertTile(t)}}},{key:"actuate",value:function(){this.over?O.clearGameState():O.setGameState(this.serialize());var e=[];this.grid.cells.forEach(function(t){t.forEach(function(t){t&&e.push({x:t.x,y:t.y,value:t.value,prog:t.prog})})}),O.getBestScore()<this.score?(O.setBestScore(this.score),this.setState({score:this.score,best:this.score,tiles:e,won:this.won,over:this.over})):this.setState({score:this.score,tiles:e,won:this.won,over:this.over})}},{key:"serialize",value:function(){return{grid:this.grid.serialize(),score:this.score,over:this.over,won:this.won,keepPlaying:this.keepPlaying}}},{key:"prepareTiles",value:function(){this.grid.eachCell(function(e,t,i){i&&(i.mergedFrom=null,i.savePosition())})}},{key:"moveTile",value:function(e,t){this.grid.cells[e.x][e.y]=null,this.grid.cells[t.x][t.y]=e,e.updatePosition(t)}},{key:"move",value:function(e){var t=this;if(!this.isGameTerminated()){var i,a,n=this.getVector(e),r=this.buildTraversals(n),s=!1;this.prepareTiles(),r.x.forEach(function(e){r.y.forEach(function(r){if(i={x:e,y:r},a=t.grid.cellContent(i)){var o=t.findFarthestPosition(i,n),l=t.grid.cellContent(o.next);if(l&&l.value===a.value&&!l.mergedFrom){var c=new y(o.next,2*a.value);c.mergedFrom=[a,l],t.grid.insertTile(c),t.grid.removeTile(a),a.updatePosition(o.next),t.score+=c.value,2048===c.value&&(t.won=!0)}else t.moveTile(a,o.farthest);t.positionsEqual(i,a)||(s=!0)}})}),s&&(this.addRandomTile(),this.movesAvailable()||(this.over=!0),this.actuate())}}},{key:"getVector",value:function(e){return{0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}}[e]}},{key:"buildTraversals",value:function(e){for(var t={x:[],y:[]},i=0;i<this.props.size;i++)t.x.push(i),t.y.push(i);return 1===e.x&&(t.x=t.x.reverse()),1===e.y&&(t.y=t.y.reverse()),t}},{key:"findFarthestPosition",value:function(e,t){var i;do{e={x:(i=e).x+t.x,y:i.y+t.y}}while(this.grid.withinBounds(e)&&this.grid.cellAvailable(e));return{farthest:i,next:e}}},{key:"movesAvailable",value:function(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()}},{key:"tileMatchesAvailable",value:function(){for(var e,t=0;t<this.props.size;t++)for(var i=0;i<this.props.size;i++)if(e=this.grid.cellContent({x:t,y:i}))for(var a=0;a<4;a++){var n=this.getVector(a),r={x:t+n.x,y:i+n.y},s=this.grid.cellContent(r);if(s&&s.value===e.value)return!0}return!1}},{key:"positionsEqual",value:function(e,t){return e.x===t.x&&e.y===t.y}}]),t}(a.Component),M=i("Edbx");i("pxCo"),t.default=function(){return n.a.createElement(M.a,{flexDirection:"column",layoutHeight:"auto"},n.a.createElement(N,{size:"4",startTiles:"2"}))}},Edbx:function(e,t,i){"use strict";var a=i("kOwS"),n=i("zrwo"),r=i("doui"),s=i("Ar1z"),o=i("PKMu"),l=i("jUWi"),c=i("q1tI"),u=i("nOHt"),h=i("9xZJ");t.a=c.memo(function(e){var t=e.transformer,i=e.resultRender,d=e.flexDirection,v=void 0===d?"row":d,p=e.layoutHeight,f=void 0===p?"500px":p,m=e.defaultValue,g=e.children,y=Object(c.useState)(m),b=Object(r.default)(y,2),O=b[0],j=b[1],x=Object(c.useState)(""),k=Object(r.default)(x,2),w=k[0],E=k[1],T=Object(c.useState)(""),S=Object(r.default)(T,2),P=S[0],C=(S[1],Object(u.useRouter)(),{display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:f}),z={display:"flex",flexDirection:"column",flex:"1",flexWrap:"wrap",height:"100%"},N={display:"flex",flexDirection:"row",flex:"0 0 5%",flexWrap:"wrap",height:"100%",padding:"10px"},M={},D={},I={};"column"==v?(M=Object(n.a)({},C,{flexDirection:"column"}),I=Object(n.a)({},z,{flexDirection:"column"}),D=Object(n.a)({},N,{flexDirection:"row"})):(M=Object(n.a)({},C,{flexDirection:"row"}),I=Object(n.a)({},z,{flexDirection:"column"}),D=Object(n.a)({},N,{flexDirection:"column"}));var K=i?{border:"2px solid #ccc"}:{},G=Object(n.a)({},I);return c.createElement(c.Fragment,null,c.createElement(s.a,M,!g&&c.createElement(c.Fragment,null,c.createElement(s.a,I,c.createElement(o.a,{height:"100%",id:"textarea-1",placeholder:"Input content",value:O,onChange:function(e){return j(e.target.value)}})),c.createElement(s.a,D,t({value:O,result:w,setValue:j,setResult:E})),c.createElement(s.a,Object(a.a)({},G,{style:K}),i&&i({value:O,result:w,setValue:j,setResult:E}),!i&&c.createElement(o.a,{height:"100%",id:"textarea-2",placeholder:"Your results",value:w,onChange:function(e){return E(e.target.value)}}))),g&&g),c.createElement("div",{className:"clearfix"}),c.createElement(h.a,null),P&&c.createElement(l.a,{paddingY:15,paddingX:20,left:240,right:0,position:"absolute",intent:"danger",bottom:0,title:P,backgroundColor:"#FAE2E2",zIndex:3}))})},PKMu:function(e,t,i){"use strict";var a=i("zUWB"),n=i("X82s"),r=i("NDry"),s=i("sLOm"),o=i("UCZM"),l=i("UHGV"),c=i("fYJG"),u=i("Ot2J"),h=i("7KPZ"),d=i("q1tI"),v=i.n(d),p=i("17x9"),f=i.n(p),m=i("TSYQ"),g=i.n(m),y=i("raqX"),b=i("9/s7"),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,i=e.theme,a=e.className,s=e.css,o=e.width,l=e.height,c=e.disabled,u=e.required,h=e.isInvalid,d=e.appearance,p=e.placeholder,f=e.spellCheck,m=e.grammarly,b=Object(r.a)(e,["theme","className","css","width","height","disabled","required","isInvalid","appearance","placeholder","spellCheck","grammarly"]),O=i.getTextareaClassName(d);return v.a.createElement(y.a,Object(n.a)({is:"textarea",className:g()(O,a),size:400,width:o,height:l,required:u,disabled:c,placeholder:p,paddingLeft:Math.round(l/3.2),paddingRight:Math.round(l/3.2),borderRadius:3,spellCheck:f,"aria-invalid":h,"data-gramm_editor":m},c?{color:"muted"}:{},{css:s},t.styles,b))}}]),t}(d.PureComponent);O.displayName="Textarea",Object(h.a)(O,"propTypes",Object(a.a)({},y.a.propTypes,{required:f.a.bool,disabled:f.a.bool,isInvalid:f.a.bool,spellCheck:f.a.bool,grammarly:f.a.bool,placeholder:f.a.string,appearance:f.a.string,width:f.a.oneOfType([f.a.string,f.a.number]),theme:f.a.object.isRequired,className:f.a.string})),Object(h.a)(O,"defaultProps",{appearance:"default",width:"100%",disabled:!1,isInvalid:!1,spellCheck:!0,grammarly:!1}),Object(h.a)(O,"styles",{minHeight:80,paddingX:10,paddingY:8}),t.a=Object(b.a)(O)},mQXF:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g2048",function(){var e=i("ClXt");return{page:e.default||e}}])}},[["mQXF",1,0,3]]]);