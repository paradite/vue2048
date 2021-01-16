(function(e){function t(t){for(var n,a,c=t[0],u=t[1],l=t[2],h=0,f=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/2048/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"363b":function(e,t,r){"use strict";r("f3af")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"app"},i=Object(n["f"])("div",{class:"header"},[Object(n["e"])(" 2048 game with an auto solver"),Object(n["f"])("br"),Object(n["e"])(" by "),Object(n["f"])("a",{href:"https://github.com/paradite/2048"},"@paradite")],-1),a={class:"buttons"},c={class:"info"},u={class:"scores"},l=Object(n["e"])(" High Scores "),s=Object(n["f"])("br",null,null,-1),h={key:0};function f(e,t,r,f,v,d){var b=Object(n["j"])("GameBoard");return Object(n["h"])(),Object(n["c"])("div",o,[i,Object(n["f"])(b,{game:v.game,cells:v.cells},null,8,["game","cells"]),Object(n["f"])("div",a,[Object(n["f"])("div",{class:["button button-primary",{active:v.game.isAuto}],onClick:t[1]||(t[1]=function(){return d.handleAuto&&d.handleAuto.apply(d,arguments)})}," Magic ",2),Object(n["f"])("div",{class:"button button-primary",onClick:t[2]||(t[2]=function(){return d.restart&&d.restart.apply(d,arguments)})}," Restart ")]),Object(n["f"])("div",c,"Move count: "+Object(n["k"])(v.game.moveCount),1),Object(n["f"])("div",u,[l,s,0===v.game.scores.length?(Object(n["h"])(),Object(n["c"])("span",h," (empty)")):Object(n["d"])("",!0),(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(v.game.scores,(function(e,t){return Object(n["h"])(),Object(n["c"])("div",{key:t,class:"score"}," [moves: "+Object(n["k"])(e[0])+", max: "+Object(n["k"])(e[1])+"] ",1)})),128))])])}var v=r("ade3"),d={class:"bg"},b=Object(n["f"])("div",null,null,-1);function g(e,t,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",{class:"board",style:{width:a.totalSize+"px",height:a.totalSize+"px",padding:i.marginSize+"px"}},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(r.cells,(function(e){var t;return Object(n["h"])(),Object(n["c"])("div",{key:e.id,class:["cell",(t={},Object(v["a"])(t,"cell-".concat(e.number),!0),Object(v["a"])(t,"fade-in",e&&e.count===r.game.moveCount),t)],id:e.id,style:{left:i.cellSize*e.col+i.marginSize*(e.col+1)+"px",top:i.cellSize*e.row+i.marginSize*(e.row+1)+"px"}},Object(n["k"])(e.number),15,["id"])})),128)),Object(n["f"])("div",d,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(r.game.rows,(function(e,t){return Object(n["h"])(),Object(n["c"])("div",{key:t,class:"row",style:{width:a.totalSize+"px",height:i.cellSize+"px",marginBottom:t===r.game.rows.length-1?0:i.marginSize+"px"}},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(e,(function(t,r){return Object(n["h"])(),Object(n["c"])("div",{key:r,class:"cell-bg",style:{width:i.cellSize+"px",height:i.cellSize+"px",marginRight:r===e.length-1?0:i.marginSize+"px"}},null,4)})),128))],4)})),128))]),b],4)}r("99af");var m=r("3835"),w=r("d4ec"),p=r("bee2"),O=r("cd3f"),j=r.n(O),y=(r("b64b"),{ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown"}),A=[y.ArrowLeft,y.ArrowRight,y.ArrowUp,y.ArrowDown],k=function(e,t){if(t){console.log("----");for(var r=0;r<e.length;r++){for(var n="",o=e[r],i=0;i<o.length;i++)o[i]&&o[i].number>=10?n+=o[i].number+" ":o[i]?n+=o[i].number+"  ":n+=".  ";console.log(n)}}},S=r("2909");function C(){var e=Math.random();return e<.25?y.ArrowDown:e<.5?y.ArrowUp:e<.75?y.ArrowLeft:y.ArrowRight}function x(e,t){for(var r=e.length*e[0].length,n=0,o=C(),i=[],a=[[y.ArrowDown],[y.ArrowUp],[y.ArrowLeft],[y.ArrowRight]],c=1;c<t;c++){for(var u=[],l=0;l<a.length;l++)for(var s=a[l],h=0;h<A.length;h++){var f=A[h];u.push([].concat(Object(S["a"])(s),[f]))}a=u}for(var v=0;v<a.length;v++){for(var d=a[v],b=e,g=0;g<d.length;g++){var m=d[g];b=E.getNextState(b,m),E.squeeze(b,m)}var w=E.getFilledCount(b),p=E.getMax(b);w<r?(r=w,n=p,i=[d[0]]):w===r&&p>n?(n=p,i=[d[0]]):w===r&&p===n&&i.push(d[0])}var O=Math.floor(Math.random()*i.length);return o=i[O]?i[O]:o,o}var z=r("ec26"),R=function(){function e(t,r,n,o){Object(w["a"])(this,e),this.row=t,this.col=r,this.number=n,this.count=o,this.id=Object(z["a"])()}return Object(p["a"])(e,[{key:"is",value:function(e){return this.number===e}},{key:"add",value:function(e){this.number=this.number+e}},{key:"updatePos",value:function(e,t){this.row=e,this.col=t}}]),e}(),P=2048,M=!1,E=function(){function e(){Object(w["a"])(this,e),this.rows=[],this.cells=[],this.restart(),this.moved={},this.moveCount=0,this.scores=[],this.isAuto=!1,this.autoInterval=null}return Object(p["a"])(e,[{key:"resetRows",value:function(){this.rows=new Array(4);for(var e=0;e<this.rows.length;e++)this.rows[e]=new Array(4);this.addRandomNumbers(2,this.rows),this.updateCells()}},{key:"restart",value:function(){this.moveCount=0,this.resetRows()}},{key:"updateCells",value:function(){var t=[];e.runForEachCell((function(e,r,n){n&&t.push(n)}),this.rows),t.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),this.cells=t}},{key:"checkWin",value:function(){var t=this,r=!1;if(e.runForEachCell((function(n,o,i){i&&i.number===e.winNumber&&(t.scores.push([t.moveCount,e.winNumber]),r=!0,console.log("score, moves filled",t.moveCount,t.moveCount,e.getFilledCount(t.rows)))}),this.rows),r)return this.restart(),!0}},{key:"checkLose",value:function(){var t=this.rows.length*this.rows[0].length,r=0;if(e.runForEachCell((function(e,t,n){n&&r++}),this.rows),t===r)return this.scores.push([this.moveCount,e.getMax(this.rows)]),console.log("score, moves filled",0,this.moveCount,e.getFilledCount(this.rows)),this.restart(),!0}},{key:"addRandomNumbers",value:function(t,r){for(var n=0;n<t;n++){var o=e.getRandomPosition(),i=e.getRandomPosition(),a=3;while(r[o][i]&&a)o=e.getRandomPosition(),i=e.getRandomPosition(),a--;if(r[o][i])return;var c=e.getRandomNumber();e.addNumberToPosition(c,o,i,this.moveCount,r)}}},{key:"handleEvent",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e.isValidKey(t)){n&&this.moveCount++;var o=e.getNextState(this.rows,t,r);e.squeeze(o,t),this.rows=o,this.updateCells();var i=this.checkWin();if(!i&&(i=this.checkLose(),!i))return this.addRandomNumbers(1,o),k(o,M),this.rows=o,this.updateCells(),this.cells}}},{key:"autoSolve",value:function(){var e=x(this.rows,3);return this.handleEvent(e)}}],[{key:"getNextState",value:function(t,r){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=j()(t),i=0;i<o.length;i++)for(var a=o[i],c=0;c<a.length;c++)if(!n["".concat(i,"-").concat(c)]){var u=a[c];if(u){var l=u.number,s=e.getMoveDestination(o,i,c,l,r,n);if(s){var h=Object(m["a"])(s,2),f=h[0],v=h[1];if(f===i&&v===c)continue;n["".concat(f,"-").concat(v)]=!0;var d=a[c];o[f][v]?(o[f][v].is(l)||console.error("cell ".concat(u," from ").concat(i,",").concat(c," moved to ").concat(f,",").concat(v," with ").concat(o[f][v])),d.add(o[f][v].number,d),d.updatePos(f,v),o[f][v]=d,a[c]=void 0):(d.updatePos(f,v),o[f][v]=d,a[c]=void 0)}}}return o}},{key:"runForEachCell",value:function(e,t){for(var r=0;r<t.length;r++)for(var n=t[r],o=0;o<n.length;o++){var i=n[o];e(r,o,i)}}},{key:"isValidKey",value:function(e){return e===y.ArrowUp||e===y.ArrowDown||e===y.ArrowLeft||e===y.ArrowRight}},{key:"addNumberToPosition",value:function(e,t,r,n,o){var i=new R(t,r,e,n);o[t][r]=i}},{key:"getRandomPosition",value:function(){var e=Math.random();return e<.25?0:e<.5?1:e<.75?2:3}},{key:"getRandomNumber",value:function(){return 2}},{key:"getFilledCount",value:function(t){var r=0;return e.runForEachCell((function(e,t,n){n&&r++}),t),r}},{key:"squeeze",value:function(t,r){for(var n=!1,o=0;o<t.length;o++)for(var i=t[o],a=0;a<i.length;a++){var c=i[a];if(c){var u=e.getSqueezeDestination(t,o,a,r);if(u){var l=Object(m["a"])(u,2),s=l[0],h=l[1];if(s===o&&h===a)continue;n=!0;var f=i[a];t[s][h]?(console.error("something wrong r c",s,h),console.error("rows[r][c]",t[s][h])):(f.updatePos(s,h),t[s][h]=f,i[a]=void 0)}}}n&&e.squeeze(t,r)}},{key:"getSqueezeDestination",value:function(e,t,r,n){switch(n){case y.ArrowUp:if(0===t)return[t,r];for(var o=t-1;o>=0;o--)if(e[o][r])return[o+1,r];return[0,r];case y.ArrowDown:if(t===e.length-1)return[t,r];for(var i=t+1;i<=e.length-1;i++)if(e[i][r])return[i-1,r];return[e.length-1,r];case y.ArrowLeft:if(0===r)return[t,r];for(var a=r-1;a>=0;a--)if(e[t][a])return[t,a+1];return[t,0];case y.ArrowRight:if(r===e[0].length-1)return[t,r];for(var c=r+1;c<=e[0].length-1;c++)if(e[t][c])return[t,c-1];return[t,e[0].length-1];default:break}}},{key:"getMax",value:function(t){var r=0;return e.runForEachCell((function(e,t,n){n&&n.number>r&&(r=n.number)}),t),r}}]),e}();Object(v["a"])(E,"winNumber",P),Object(v["a"])(E,"getMoveDestination",(function(e,t,r,n,o,i){switch(o){case y.ArrowUp:if(0===t)return[t,r];for(var a=t-1;a>=0;a--)if(i["".concat(a,"-").concat(r)]){if(e[a][r])return[a+1,r]}else if(e[a][r])return e[a][r].is(n)?[a,r]:[a+1,r];return[t,r];case y.ArrowDown:if(t===e.length-1)return[t,r];for(var c=t+1;c<=e.length-1;c++)if(i["".concat(c,"-").concat(r)]){if(e[c][r])return[c-1,r]}else if(e[c][r])return e[c][r].is(n)?[c,r]:[c-1,r];return[t,r];case y.ArrowLeft:if(0===r)return[t,r];for(var u=r-1;u>=0;u--)if(i["".concat(t,"-").concat(u)]){if(e[t][u])return[t,u+1]}else if(e[t][u])return e[t][u].is(n)?[t,u]:[t,u+1];return[t,r];case y.ArrowRight:if(r===e[0].length-1)return[t,r];for(var l=r+1;l<=e[0].length-1;l++)if(i["".concat(t,"-").concat(l)]){if(e[t][l])return[t,l-1]}else if(e[t][l])return e[t][l].is(n)?[t,l]:[t,l-1];return[t,r];default:break}}));var D={name:"GameBoard",data:function(){var e=80,t=10;return{cellSize:e,marginSize:t}},computed:{totalSize:function(){return 4*this.cellSize+3*this.marginSize}},props:{game:E,cells:Array,rows:Array}};r("978d");D.render=g;var L=D,N=new E,F=50,U={name:"App",components:{GameBoard:L},mounted:function(){var e=this;window.onkeyup=function(t){e.cells=N.handleEvent(t.code)},document.addEventListener("touchstart",o,!1),document.addEventListener("touchmove",i,!1);var t=null,r=null;function n(e){return e.touches||e.originalEvent.touches}function o(e){var o=n(e)[0];t=o.clientX,r=o.clientY}function i(e){if(t&&r){var n=e.touches[0].clientX,o=e.touches[0].clientY,i=t-n,a=r-o;Math.abs(i)>Math.abs(a)?this.cells=i>0?N.handleEvent(y.ArrowLeft):N.handleEvent(y.ArrowRight):this.cells=a>0?N.handleEvent(y.ArrowUp):N.handleEvent(y.ArrowDown),t=null,r=null}}},data:function(){return{game:N,cells:N.cells,isAuto:!1,autoInterval:null}},methods:{restart:function(){N.restart(),this.cells=N.cells},handleAuto:function(){var e=this;this.isAuto=!this.isAuto,this.autoInterval&&clearInterval(this.autoInterval),this.isAuto&&(this.cells=N.autoSolve(),this.autoInterval=setInterval((function(){e.cells=N.autoSolve()}),F))}}};r("363b");U.render=f;var I=U,q=Object(n["b"])({render:function(){return Object(n["g"])(I)}});q.mount("#app")},"978d":function(e,t,r){"use strict";r("e411")},e411:function(e,t,r){},f3af:function(e,t,r){}});
//# sourceMappingURL=app.0cf4acb8.js.map