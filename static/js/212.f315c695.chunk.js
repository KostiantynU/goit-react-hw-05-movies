"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[212],{1212:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,c,u,o,a=r(9439),i=r(2791),s=r(7689),f=r(4635),h=r(5243),p=r(168),l=r(6444),d=l.ZP.ul(e||(e=(0,p.Z)(["\n  margin-left: 20px;\n"]))),v=l.ZP.li(c||(c=(0,p.Z)(["\n  :nth-child(2n) {\n    background-color: rgb(245, 251, 252);\n  }\n"]))),g=l.ZP.h4(u||(u=(0,p.Z)(["\n  margin: 20px;\n"]))),m=l.ZP.p(o||(o=(0,p.Z)(["\n  margin: 10px;\n"]))),x=r(184);var w=function(n){var t=n.author,r=n.content;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(v,{children:[(0,x.jsx)(g,{children:t}),(0,x.jsx)(m,{children:r})]})})},Z=r(6983);var b=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1],c=(0,i.useState)(!1),u=(0,a.Z)(c,2),o=u[0],p=u[1],l=(0,s.UO)().movieId;return(0,i.useEffect)((function(){p(!0),(0,f.Tn)(l).then((function(n){return e(n.results)})).finally(p(!1))}),[l]),(0,x.jsxs)(x.Fragment,{children:[o&&(0,x.jsx)(h.RL,{height:"100",width:"100",radius:"48",color:"rgb(73, 203, 230)",ariaLabel:"watch-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0}),r.length>0?(0,x.jsx)(Z.N,{children:(0,x.jsx)(d,{children:null===r||void 0===r?void 0:r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,x.jsx)(w,{author:r,content:e},t)}))})}):(0,x.jsx)("div",{children:"We dont have any reviews on this movie"})]})}},6983:function(n,t,r){r.d(t,{I:function(){return l},N:function(){return g}});var e,c,u,o,a=r(168),i=r(6444),s=r(7845),f=r(184),h=(0,i.F4)(e||(e=(0,a.Z)(["",""])),s.ci),p=i.ZP.div(c||(c=(0,a.Z)(["\n  animation: ease 1s ",";\n"])),h);function l(n){var t=n.children;return(0,f.jsx)(p,{children:t})}var d=(0,i.F4)(u||(u=(0,a.Z)(["",""])),s.go),v=i.ZP.div(o||(o=(0,a.Z)(["\n  animation: ease 1s ",";\n"])),d);function g(n){var t=n.children;return(0,f.jsx)(v,{children:t})}},4635:function(n,t,r){r.d(t,{HI:function(){return p},HS:function(){return s},Jh:function(){return d},Tn:function(){return g},XT:function(){return f},z1:function(){return x}});var e=r(5861),c=r(7757),u=r.n(c),o="api_key=01e602e077bffb2dd10fabcf093ebced",a="https://api.themoviedb.org/3/",i="trending/movie/day",s="https://image.tmdb.org/t/p/w300";function f(){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a).concat(i,"?").concat(o)).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?").concat(o,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?").concat(o,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?").concat(o,"&language=en-US&page=1")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?").concat(o,"&query=").concat(t)).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=212.f315c695.chunk.js.map