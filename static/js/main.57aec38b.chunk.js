(this["webpackJsonpstars-war-react"]=this["webpackJsonpstars-war-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),o=(n(14),n(1)),u=(n(15),n(2)),s=n.n(u),i=n(4),m=n(6),d=function(e){var t=e.person;return r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,"Gender - ",t.gender),r.a.createElement("p",null,"Birth year - ",t.birth_year))},p=n(5),v=n.n(p),E=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/?page=".concat(n));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e,t,n=Object(a.useState)(1),l=Object(o.a)(n,2),c=l[0],u=l[1],s=Object(m.a)(["getPeople",c],E),i=s.resolvedData,p=s.latestData,f=s.status;return r.a.createElement("div",null,r.a.createElement("h3",null,"People"),"loading"===f&&r.a.createElement("div",{className:"loading"}," Loading Data ....."),"error"===f&&r.a.createElement("div",{className:"error"}," Error Fetching Data ....."),"success"===f&&0===(null===i||void 0===i||null===(e=i.results)||void 0===e?void 0:e.length)&&r.a.createElement("div",{className:"error"}," No Data Found ....."),"success"===f&&(null===i||void 0===i||null===(t=i.results)||void 0===t?void 0:t.length)>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn-actions"},r.a.createElement("button",{onClick:function(){return u((function(e){return Math.max(e-1,1)}))},disabled:1===c},"Prev"),function(e){return Array.from(Array(e).keys()).map((function(e){return e+1})).map((function(e){return r.a.createElement("button",{key:e,className:v()(["page-num",{active:c===e}]),onClick:function(){return u(e)}}," ",e," ")}))}(function(e){return e&&e.count&&e.results.length>0?Math.ceil(e.count/e.results.length):0}(i)),r.a.createElement("button",{onClick:function(){return u((function(e){return p&&p.next?e+1:e}))},disabled:!p||!p.next},"Next")),r.a.createElement("div",{className:"data-list"},i.results.map((function(e){return r.a.createElement(d,{key:e.name,person:e})})))))},h=function(e){var t=e.planet;return r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,"Population - ",t.population),r.a.createElement("p",null,"Terrain - ",t.terrain))},g=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/?page=".concat(n));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e,t,n=Object(a.useState)(1),l=Object(o.a)(n,2),c=l[0],u=l[1],s=Object(m.a)(["getPlants",c],g),i=s.resolvedData,d=s.latestData,p=s.status;return r.a.createElement("div",null,r.a.createElement("h3",null,"Planets"),p,"loading"===p&&r.a.createElement("div",{className:"loading"}," Loading Data ....."),"error"===p&&r.a.createElement("div",{className:"error"}," Error Fetching Data ....."),"success"===p&&0===(null===i||void 0===i||null===(e=i.results)||void 0===e?void 0:e.length)&&r.a.createElement("div",{className:"error"}," No Data Found ....."),"success"===p&&(null===i||void 0===i||null===(t=i.results)||void 0===t?void 0:t.length)>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn-actions"},r.a.createElement("button",{onClick:function(){return u((function(e){return Math.max(e-1,1)}))},disabled:1===c},"Prev"),function(e){return Array.from(Array(e).keys()).map((function(e){return r.a.createElement("button",{key:e+1,className:v()(["page-num",{active:c===e+1}]),onClick:function(){return u(e+1)}}," ",e+1," ")}))}(function(e){return e&&e.count&&e.results.length>0?Math.ceil(e.count/e.results.length):0}(i)),r.a.createElement("button",{onClick:function(){return u((function(e){return d&&d.next?e+1:e}))},disabled:!d||!d.next},"Next")),r.a.createElement("div",{className:"data-list"},i.results.map((function(e){return r.a.createElement(h,{key:e.name,planet:e})})))))},N=function(e){var t=e.setPage;return r.a.createElement("nav",{className:"list-option"},r.a.createElement("button",{onClick:function(){return t("planets")}},"Planets"),r.a.createElement("button",{onClick:function(){return t("people")}},"People"))},k=n(8);var y=function(){var e=Object(a.useState)("planets"),t=Object(o.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h2",{className:"title"},"Stars War Info"),r.a.createElement(N,{setPage:l}),r.a.createElement("div",{className:"content"},"planets"===n?r.a.createElement(b,null):r.a.createElement(f,null)))),r.a.createElement(k.ReactQueryDevtools,{initialIsOpen:!1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.57aec38b.chunk.js.map