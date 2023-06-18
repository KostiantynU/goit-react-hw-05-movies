"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[831],{8882:function(n,t,r){r.d(t,{Z:function(){return v}});var e,c,o,u=r(168),i=r(6444),a=i.ZP.ul(e||(e=(0,u.Z)(["\n  margin-top: 15px;\n"]))),s=r(1087),f=i.ZP.li(c||(c=(0,u.Z)(["\n  margin-bottom: 5px;\n  :nth-child(2n + 1) {\n    background-color: rgb(245, 251, 252);\n  }\n"]))),p=(0,i.ZP)(s.rU)(o||(o=(0,u.Z)(["\n  font-size: 15px;\n"]))),h=r(7689),l=r(184);var d=function(n){var t=n.originalTitle,r=n.movieId,e=(0,h.TH)();return(0,l.jsx)(f,{children:(0,l.jsx)(p,{to:"/moviedetails/".concat(r),state:{from:e},children:t})})};var v=function(n){var t=n.arrayFilms;return(0,l.jsx)(a,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.original_title;return(0,l.jsx)(d,{originalTitle:r,movieId:"".concat(t)},t)}))})}},5831:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,c,o,u=r(3433),i=r(9439),a=r(2791),s=r(1087),f=r(168),p=r(6444),h=p.ZP.form(e||(e=(0,f.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),l=p.ZP.input(c||(c=(0,f.Z)(["\n  width: 40vw;\n  padding: 5px 10px;\n  background-color: rgb(232, 247, 250);\n  border-radius: 4px;\n  border: 1px solid rgb(73, 203, 230);\n  &:focus-within {\n    outline: none;\n  }\n"]))),d=p.ZP.button(o||(o=(0,f.Z)(["\n  padding: 10px 15px;\n  border-radius: 4px;\n  border: none;\n  background: rgb(73, 203, 230);\n  &:hover,\n  &:focus {\n    background: rgb(165, 235, 250);\n    color: rgb(6, 76, 92);\n  }\n"]))),v=r(184);var g,m=function(n){var t=n.handleSubmit;return n.onChange,n.value,(0,v.jsxs)(h,{onSubmit:function(n){return t(n)},children:[(0,v.jsx)(l,{type:"text",name:"search"}),(0,v.jsx)(d,{type:"submit",children:"Search"})]})},x=r(8882),b=r(4635),y=p.ZP.h2(g||(g=(0,f.Z)(["\n  margin: 0.5em;\n"])));var Z=function(){var n,t=(0,s.lr)(),r=(0,i.Z)(t,2),e=r[0],c=r[1],o=(0,a.useState)([]),f=(0,i.Z)(o,2),p=f[0],h=f[1],l=null!==(n=e.get("query"))&&void 0!==n?n:"";return(0,a.useEffect)((function(){l&&(0,b.z1)(l).then((function(n){return h((0,u.Z)(n.results))}))}),[l]),(0,v.jsxs)("div",{children:[(0,v.jsx)(y,{children:"Movie search"}),(0,v.jsx)(m,{handleSubmit:function(n){n.preventDefault();var t=n.target.elements.search.value;c(""!==t?{query:t}:{}),n.target.reset()},value:l}),0!==p.length?(0,v.jsx)(x.Z,{arrayFilms:p}):(0,v.jsx)("p",{style:{margin:"0.5em"},children:"There are no results or you have not entered anything!"})]})}},4635:function(n,t,r){r.d(t,{HI:function(){return h},HS:function(){return s},Jh:function(){return d},Tn:function(){return g},XT:function(){return f},z1:function(){return x}});var e=r(5861),c=r(7757),o=r.n(c),u="api_key=01e602e077bffb2dd10fabcf093ebced",i="https://api.themoviedb.org/3/",a="trending/movie/day",s="https://image.tmdb.org/t/p/w300";function f(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(a,"?").concat(u)).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?").concat(u,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?").concat(u,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?").concat(u,"&language=en-US&page=1")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?").concat(u,"&query=").concat(t)).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5861:function(n,t,r){function e(n,t,r,e,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void r(s)}i.done?t(a):Promise.resolve(a).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,o){var u=n.apply(t,r);function i(n){e(u,c,o,i,a,"next",n)}function a(n){e(u,c,o,i,a,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=831.643dfc89.chunk.js.map