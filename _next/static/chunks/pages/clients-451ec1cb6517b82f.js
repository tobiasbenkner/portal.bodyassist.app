(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{4717:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return t(4903)}])},7072:function(n,e,t){"use strict";var r=t(2322),i=t(2197);e.Z=function(n){return(0,r.jsx)(i.Z,{variant:"h4",style:{marginTop:0},children:n.title})}},4903:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return W},default:function(){return X}});var r=t(2322),i=t(9097),a=t.n(i),c=t(2784),o=t(7550),u=t(3927),l=t(1075),s=t(2096),f=t(5213),d=t(4905),h=t(7671),m=t(2197),p=t(7072),v=t(558),j=t(794),x=t(6890),b=t(4776),g=t.n(b),y=t(2048),Z=t(3091),w=t(5936),C=t(6060),_=t(5694),O=t(107),P=t(6537),S=t(5971),k=t(3379),A=t(5632);function E(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function N(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(l){return void t(l)}o.done?e(u):Promise.resolve(u).then(r,i)}function I(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){I(n,e,t[e])}))}return n}function T(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a=[],c=!0,o=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);c=!0);}catch(u){o=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return E(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(){var n,e,t=(n=["\nmutation Mutation($input: CreateClientInput!) {\n    createClient(input: $input) {\n        _id\n        email\n        name\n    }\n}"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return F=function(){return t},t}var $={email:"",name:""},D=(0,v.Ps)(F()),G=function(){var n=(0,A.useRouter)(),e=T(c.useState($),2),t=e[0],i=e[1],a=T(c.useState(!1),2),o=a[0],u=a[1],l=T((0,k.D)(D),2),s=l[0],f=l[1],d=(f.data,f.loading),h=f.error,m=function(){u(!1)},p=function(){var e,r=(e=g().mark((function e(){var r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s({variables:{input:{email:t.email,name:t.name}}});case 3:return r=e.sent,m(),e.next=7,n.replace("/clients/"+r.data.createClient._id+"/training");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(n){N(a,r,i,c,o,"next",n)}function o(n){N(a,r,i,c,o,"throw",n)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{variant:"contained",onClick:function(){u(!0),i($)},children:"A\xf1adir"}),(0,r.jsxs)(Z.Z,{open:o,onClose:m,children:[(0,r.jsx)(w.Z,{children:"A\xf1adir un entrenador"}),(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(_.Z,{sx:{mb:2},children:"Un nuevo cliente puede conectarse a la aplicaci\xf3n y ver su plan de entrenamiento."}),h&&(0,r.jsx)(O.Z,{severity:"warning",children:h.message}),(0,r.jsx)(P.Z,{autoFocus:!0,margin:"dense",id:"name",label:"Correo Electr\xf3nicos",type:"text",fullWidth:!0,variant:"outlined",value:t.email,onChange:function(n){return i((function(e){return z({},e,{email:n.target.value})}))},disabled:d}),(0,r.jsx)(P.Z,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,variant:"outlined",value:t.name,onChange:function(n){return i((function(e){return z({},e,{name:n.target.value})}))},disabled:d})]}),(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(y.Z,{onClick:m,disabled:d,children:"Cancelar"}),(0,r.jsx)(y.Z,{onClick:p,disabled:d,children:"Guardar"})]})]})]})};function M(){var n,e,t=(n=["\nquery ListClients {\n  listClients {\n    _id\n    name\n    email\n    role\n  }\n}"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return M=function(){return t},t}var U=(0,v.Ps)(M()),W=!0,X=function(){var n=(0,j.a)(U),e=n.loading,t=(n.error,n.data);n.refetch;return e?(0,r.jsx)(x.Z,{}):(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(p.Z,{title:"Clientes"}),(0,r.jsx)(G,{})]}),(0,r.jsx)(l.ZP,{container:!0,spacing:2,children:t.listClients.map((function(n){return(0,r.jsx)(l.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,xl:1,children:(0,r.jsx)(a(),{href:"/clients/".concat(n._id,"/training"),children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(d.Z,{component:"img",height:"140",image:n.photo,alt:"green iguana"}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h6",component:"div",children:n.name})})]})})})},n._id)}))})]})}},6890:function(n,e,t){"use strict";var r=t(2322),i=t(3927),a=t(2841);e.Z=function(){return(0,r.jsx)(i.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,r.jsx)(a.Z,{})})}}},function(n){n.O(0,[253,694,537,634,93,774,888,179],(function(){return e=4717,n(n.s=e);var e}));var e=n.O();_N_E=e}]);