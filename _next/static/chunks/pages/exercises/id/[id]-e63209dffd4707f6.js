(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{5694:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(1461),o=t(7896),i=t(2784),u=t(9075),c=t(5992),a=t(3853),s=t(2197),l=t(5672);function d(e){return(0,l.Z)("MuiDialogContentText",e)}(0,t(9222).Z)("MuiDialogContentText",["root"]);var f=t(2322);const p=["children"],h=(0,c.ZP)(s.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,n)=>n.root})({});var v=i.forwardRef((function(e,n){const t=(0,a.Z)({props:e,name:"MuiDialogContentText"}),i=(0,r.Z)(t,p),c=(e=>{const{classes:n}=e,t=(0,u.Z)({root:["root"]},d,n);return(0,o.Z)({},n,t)})(i);return(0,f.jsx)(h,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:i},t,{classes:c}))}))},5936:function(e,n,t){"use strict";var r=t(7896),o=t(1461),i=t(2784),u=t(6277),c=t(9075),a=t(2197),s=t(5992),l=t(3853),d=t(6670),f=t(8346),p=t(2322);const h=["className","id"],v=(0,s.ZP)(a.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),x=i.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiDialogTitle"}),{className:a,id:s}=t,x=(0,o.Z)(t,h),m=t,y=(e=>{const{classes:n}=e;return(0,c.Z)({root:["root"]},d.a,n)})(m),{titleId:j=s}=i.useContext(f.Z);return(0,p.jsx)(v,(0,r.Z)({component:"h2",className:(0,u.Z)(y.root,a),ownerState:m,ref:n,variant:"h6",id:j},x))}));n.Z=x},961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercises/id/[id]",function(){return t(2887)}])},7072:function(e,n,t){"use strict";var r=t(2322),o=t(3927),i=t(2197);t(2784);n.Z=function(e){var n=e.title,t=e.children;return(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:2},children:[(0,r.jsx)(i.Z,{variant:"h4",children:n}),t&&(0,r.jsx)(o.Z,{direction:"row",spacing:2,children:t})]})}},2887:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var r=t(4776),o=t.n(r),i=t(2322),u=t(7550),c=t(2048),a=t(3927),s=t(9506),l=t(7527),d=t(7612),f=t(7072),p=t(5632),h=t(2784),v=t(558),x=t(794),m=t(3379),y=t(6890),j=t(5801),b=t(9089),Z=t(5936),g=t(6060),w=t(5694),E=t(107),O=t(5971),C=t(5678);function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n,t,r,o,i,u){try{var c=e[i](u),a=c.value}catch(s){return void t(s)}c.done?n(a):Promise.resolve(a).then(r,o)}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(){var e,n,t=(e=["\nmutation Mutation($input: ExerciseByIdInput!) {\n    deleteExerciseById(input: $input) {\n        id\n    }\n}"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return _=function(){return t},t}var k=(0,v.Ps)(_()),A=function(e){var n=e.id,t=(0,p.useRouter)(),r=P(h.useState(!1),2),u=r[0],a=r[1],s=P((0,m.D)(k),2),l=s[0],d=s[1],f=(d.data,d.loading),v=d.error,x=function(){a(!1)},y=function(){var e,r=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({variables:{input:{id:n}}});case 3:return x(),e.next=6,t.push("/exercises");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){S(i,r,o,u,c,"next",e)}function c(e){S(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{color:"secondary",component:"span",onClick:function(){a(!0)},children:(0,i.jsx)(C.ZkW,{})}),(0,i.jsxs)(b.Z,{open:u,onClose:x,children:[(0,i.jsx)(Z.Z,{id:"alert-dialog-title",children:"Eleminar"}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(w.Z,{id:"alert-dialog-description",children:"\xbfRealmente quieres borrar el ejercicio?"}),v&&(0,i.jsx)(E.Z,{severity:"warning",children:v.message})]}),(0,i.jsxs)(O.Z,{children:[(0,i.jsx)(c.Z,{onClick:x,disabled:f,children:"No"}),(0,i.jsx)(c.Z,{onClick:y,disabled:f,autoFocus:!0,children:"S\xed"})]})]})]})};function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n,t,r,o,i,u){try{var c=e[i](u),a=c.value}catch(s){return void t(s)}c.done?n(a):Promise.resolve(a).then(r,o)}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function $(){var e=R(["\nquery FindExerciseById($input: ExerciseByIdInput!) {\n    findExerciseById(input: $input) {\n        _id\n        name\n        nameEs\n        video\n        muscleGroup\n        photo\n    }\n}"]);return $=function(){return e},e}function B(){var e=R(["\n    mutation updateExercise($input: ExerciseCreateInput!) {\n        updateExercise(input: $input) {\n            _id\n        }\n    }\n"]);return B=function(){return e},e}var G=(0,v.Ps)($()),z=(0,v.Ps)(B()),W=function(){var e=(0,p.useRouter)().query.id,n=(0,x.a)(G,{variables:{input:{id:e}}}),t=n.loading,r=(n.error,n.data),v=(n.refetch,D((0,m.D)(z),2)),j=v[0],b=v[1],Z=(0,h.useState)(),g=Z[0],w=Z[1];(0,h.useEffect)((function(){t||w(r.findExerciseById)}),[t]);var E=function(e,n){w((function(t){if(t)return T({},t,F({},e,n))}))},O=function(){var e,n=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j({variables:{input:T({},g)}});case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){N(i,r,o,u,c,"next",e)}function c(e){N(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(){return n.apply(this,arguments)}}();return t?(0,i.jsx)(y.Z,{}):(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(f.Z,{title:"Ejercicio",children:[(0,i.jsx)(A,{id:e}),(0,i.jsx)(c.Z,{variant:"contained",onClick:O,disabled:t||b.loading,children:"Guardar"})]}),g&&(0,i.jsxs)(a.Z,{spacing:4,alignItems:"center",children:[(0,i.jsxs)(s.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(l.Z,{htmlFor:"component-outlined",children:"Ejercicio EN"}),(0,i.jsx)(d.Z,{value:g.name,onChange:function(e){return E("name",e.target.value)},label:"Ejercicio EN"})]}),(0,i.jsxs)(s.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(l.Z,{htmlFor:"component-outlined",children:"Ejercicio ES"}),(0,i.jsx)(d.Z,{value:g.nameEs,onChange:function(e){return E("nameEs",e.target.value)},label:"Ejercicio ES"})]}),(0,i.jsxs)(s.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(l.Z,{htmlFor:"component-outlined",children:"Muscle Group"}),(0,i.jsx)(d.Z,{value:g.muscleGroup,onChange:function(e){return E("muscleGroup",e.target.value)},label:"Muscle Group"})]}),g.photo&&(0,i.jsx)("img",{alt:"photo",src:g.photo,style:{width:"100%",maxHeight:300,objectFit:"contain"}}),(null===g||void 0===g?void 0:g.video)&&(0,i.jsxs)("video",{style:{width:"100%",maxHeight:300,objectFit:"contain"},controls:!0,loop:!0,children:[(0,i.jsx)("source",{src:g.video,type:"video/mp4"}),"Your browser does not support the video tag."]})]})]})}},6890:function(e,n,t){"use strict";var r=t(2322),o=t(3927),i=t(2841);n.Z=function(){return(0,r.jsx)(o.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,r.jsx)(i.Z,{})})}}},function(e){e.O(0,[107,867,647,870,774,888,179],(function(){return n=961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);