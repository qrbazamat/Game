(this["webpackJsonpreact-first-app"]=this["webpackJsonpreact-first-app"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r.n(s),n=r(7),c=r.n(n),i=r(2),u=r(3),l=r(5),d=r(4),j=r(8),h=r(0);var o=function(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})};function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(j.a)(t[r],3),a=s[0],n=s[1],c=s[2];if(e[a]&&e[a]===e[n]&&e[a]===e[c])return e[a]}return null}var v=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var s;return Object(i.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(u.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(h.jsx)(o,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=b(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"status",children:e}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component),x=(r(14),function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(v,{})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{}),Object(h.jsx)("ol",{})]})]})}}]),r}(a.a.Component));var O=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{})})};c.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e02c8560.chunk.js.map