"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[727],{8882:function(n,t,r){r.d(t,{Z:function(){return v}});var e,c,o,u=r(168),i=r(6444),a=i.ZP.ul(e||(e=(0,u.Z)(["\n  margin-top: 15px;\n"]))),s=r(1087),f=i.ZP.li(c||(c=(0,u.Z)(["\n  margin-bottom: 5px;\n  :nth-child(2n + 1) {\n    background-color: rgb(245, 251, 252);\n  }\n"]))),p=(0,i.ZP)(s.rU)(o||(o=(0,u.Z)(["\n  font-size: 15px;\n"]))),h=r(7689),l=r(184);var d=function(n){var t=n.originalTitle,r=n.movieId,e=(0,h.TH)();return(0,l.jsx)(f,{children:(0,l.jsx)(p,{to:"/moviedetails/".concat(r),state:{from:e},children:t})})};var v=function(n){var t=n.arrayFilms;return(0,l.jsx)(a,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.original_title;return(0,l.jsx)(d,{originalTitle:r,movieId:"".concat(t)},t)}))})}},727:function(n,t,r){r.r(t);var e=r(3433),c=r(9439),o=r(2791),u=r(8882),i=r(4635),a=r(184);t.default=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],s=t[1];return(0,o.useEffect)((function(){(0,i.XT)().then((function(n){s((0,e.Z)(n.results))}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginBottom:"15px"},children:"Trending today"}),(0,a.jsx)(u.Z,{arrayFilms:r})]})}},4635:function(n,t,r){r.d(t,{HI:function(){return h},HS:function(){return s},Jh:function(){return d},Tn:function(){return m},XT:function(){return f},z1:function(){return x}});var e=r(5861),c=r(7757),o=r.n(c),u="api_key=01e602e077bffb2dd10fabcf093ebced",i="https://api.themoviedb.org/3/",a="trending/movie/day",s="https://image.tmdb.org/t/p/w300";function f(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(a,"?").concat(u)).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?").concat(u,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?").concat(u,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?").concat(u,"&language=en-US&page=1")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?").concat(u,"&query=").concat(t)).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5861:function(n,t,r){function e(n,t,r,e,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void r(s)}i.done?t(a):Promise.resolve(a).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,o){var u=n.apply(t,r);function i(n){e(u,c,o,i,a,"next",n)}function a(n){e(u,c,o,i,a,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=727.32ea68b7.chunk.js.map