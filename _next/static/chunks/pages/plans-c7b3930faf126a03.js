(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4171:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plans",function(){return r(248)}])},4719:function(e,n,r){"use strict";r.d(n,{EB:function(){return s},bG:function(){return u},zQ:function(){return i},ze:function(){return t}});var s=["legs","arms","chest","abs","gluteus","back","shoulder"],t=[{id:"1",muscleGroup:"chest",name:"Press de banca",video:"4T9UQ4FBVXI",photo:"/samples/exercises/benchpress.jpg"},{id:"2",muscleGroup:"legs",name:"sentadilla con barra baja",video:"QhVC_AnZYYM",photo:"/samples/exercises/squat.jpg"},{id:"3",muscleGroup:"legs",name:"leg press",video:"Gk8cCEQh-CE",photo:"/samples/exercises/legpress.jpg"},{id:"4",muscleGroup:"legs",name:"squat",video:"pn8mqlG0nkE",photo:"/samples/exercises/squat2.jpg"}],i=function(e){return Promise.resolve(t.find((function(n){return n.id===e})))},u=function(e){return Promise.resolve(t.filter((function(n){return n.muscleGroup===e})))}},4384:function(e,n,r){"use strict";r.d(n,{j:function(){return u},p:function(){return i}});var s=r(4719),t=[{id:"1",name:"Principiante 01",days:[{name:"D\xeda 1 - Legs",exercises:[{exercise:s.ze[0],sets:"3",reps:"10"},{exercise:s.ze[1],sets:"3",reps:"10"},{exercise:s.ze[2],sets:"3",reps:"10"}]},{name:"D\xeda 2 - Pecho",exercises:[{exercise:s.ze[0],sets:"3",reps:"10"}]}]},{id:"2",name:"Principiante 02",days:[{name:"D\xeda 1",exercises:[{exercise:s.ze[0],sets:"3",reps:"10"}]}]}],i=function(){return Promise.resolve(t)},u=function(e){return Promise.resolve(t.find((function(n){return n.id===e})))}},4345:function(e,n,r){"use strict";var s=r(5893);n.Z=function(e){return(0,s.jsx)("h1",{style:{marginTop:0},children:e.title})}},248:function(e,n,r){"use strict";r.r(n);var s=r(4051),t=r.n(s),i=r(5893),u=r(4345),c=r(7357),o=r(8462),a=r(8619),p=r(9334),f=r(7294),l=r(4384),d=r(1163);function m(e,n,r,s,t,i,u){try{var c=e[i](u),o=c.value}catch(a){return void r(a)}c.done?n(o):Promise.resolve(o).then(s,t)}n.default=function(){var e=(0,f.useState)([]),n=e[0],r=e[1],s=(0,d.useRouter)();(0,f.useEffect)((function(){(0,l.p)().then(r)}),[]);var h=function(){var e,n=(e=t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.push("/plans/"+n);case 2:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(s,t){var i=e.apply(n,r);function u(e){m(i,s,t,u,c,"next",e)}function c(e){m(i,s,t,u,c,"throw",e)}u(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(u.Z,{title:"Planes de entrenamiento"}),(0,i.jsx)(o.Z,{children:n.map((function(e){return(0,i.jsx)(a.Z,{onClick:function(){return h(e.id)},children:(0,i.jsx)(p.Z,{primary:e.name})},e.id)}))})]})}},1163:function(e,n,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],(function(){return n=4171,e(e.s=n);var n}));var n=e.O();_N_E=n}]);