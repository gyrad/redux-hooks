(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n(2),o=n(14),l=n.n(o),i=(n(27),function(e){var t=e.id,n=e.count,a=Object(u.b)();return c.a.createElement("div",{className:"Counter"},c.a.createElement("button",{className:"Counter__set-btn",onClick:function(){return a(function(e){return{type:"DECREMENT",payload:e}}(t))}},c.a.createElement("span",null," - ")),c.a.createElement("span",{className:"Counter__number"},"\xa0",n,"\xa0"),c.a.createElement("button",{className:"Counter__set-btn",onClick:function(){return a(function(e){return{type:"INCREMENT",payload:e}}(t))}},c.a.createElement("span",null," + ")),c.a.createElement("div",{className:"Counter__action-btns"},c.a.createElement("button",{className:"vertical-dots-btn"},c.a.createElement("span",null,"\u22ee"),c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){a(function(e){return{type:"RESET_COUNTER",payload:e}}(t)),document.activeElement.blur()}},"Reset Counter"),c.a.createElement("li",{onClick:function(){return a(function(e){return{type:"REMOVE_COUNTER",payload:e}}(t))}},"Delete Counter")))))}),E=(n(28),function(){var e=Object(u.b)(),t=Object(u.c)(function(e){return e.counters}).map(function(e){return c.a.createElement(i,{key:e.id,id:e.id,count:e.count})});return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App__header"},c.a.createElement("h1",null," Counter App"),c.a.createElement("button",{className:"App__add-counter-btn",onClick:function(){e({type:"ADD_COUNTER",payload:l()()})}},"+ Add Counter")),t)}),s=n(4),d=n(15),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COUNTER":return[{id:t.payload,count:0}].concat(Object(d.a)(e));case"INCREMENT":return e.map(function(e){return e.id===t.payload&&(e.count+=1),e});case"DECREMENT":return e.map(function(e){return e.id===t.payload&&(e.count-=1),e});case"REMOVE_COUNTER":return e.filter(function(e){return e.id!==t.payload});case"RESET_COUNTER":return e.map(function(e){return e.id===t.payload&&(e.count=0),e});default:return e}},m=Object(s.b)({counters:p}),_=(n(29),Object(s.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(r.render)(c.a.createElement(u.a,{store:_},c.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.34d4ad8f.chunk.js.map