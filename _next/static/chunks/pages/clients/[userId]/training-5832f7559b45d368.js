(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{1819:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients/[userId]/training",function(){return t(2261)}])},7072:function(e,n,t){"use strict";var r=t(2322),i=t(2197);n.Z=function(e){return(0,r.jsx)(i.Z,{variant:"h4",style:{marginTop:0},children:e.title})}},6552:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(2322),i=t(7550),a=t(107),o=t(3927),s=t(5744),c=t(5801),u=t(6961),l=t(216),d=t(6537),f=t(2048),p=(t(2784),t(9506)),v=t(7527),m=t(7612),h=function(e){var n=e.label,t=e.value,i=e.setter,a=e.field;return(0,r.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(v.Z,{htmlFor:"component-outlined",children:n}),(0,r.jsx)(m.Z,{value:t,onChange:function(e){return n=e.target.value,void i(a,n);var n},label:n})]})},b=t(5678),y=function(e){var n=e.label,t=e.value,i=e.setter,a=e.field;return(0,r.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(v.Z,{htmlFor:"component-outlined",children:n}),(0,r.jsx)(m.Z,{value:t,onChange:function(e){return function(e){var n=e.replace(/[^0-9.]/g,"");i(a,n)}(e.target.value)},label:n,inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})]})},g=function(e){return JSON.parse(JSON.stringify(e))},x=t(6765),j=t.n(x),Z=t(558),w=t(794),O=t(6890);function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(){var e,n,t=(e=["\n    query Query {\n        listAllExercises {\n            _id\n            name\n            muscleGroup\n        }\n    }"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return P=function(){return t},t}var I=(0,Z.Ps)(P()),k=function(e){var n=e.state,t=e.setState,p=(0,w.a)(I),v=p.loading,m=p.error,x=p.data,Z=(p.refetch,function(e,n){t((function(t){if(t){var r=JSON.parse(JSON.stringify(t));return j()(r,e,n),r}}))});return v?(0,r.jsx)(O.Z,{}):(0,r.jsxs)(i.Z,{children:[m&&(0,r.jsx)(a.Z,{children:m.message}),n&&(0,r.jsxs)(o.Z,{spacing:2,children:[(0,r.jsx)(h,{label:"Plan",value:n.name,field:"name",setter:Z}),n.days.map((function(e,n){return(0,r.jsxs)(s.Z,{elevation:3,sx:{p:2,mb:2},children:[(0,r.jsx)(o.Z,{alignItems:"end",sx:{mb:1},children:(0,r.jsx)(c.Z,{onClick:function(){return e=n,void t((function(n){var t=g(n);return t.days.splice(e,1),t}));var e},size:"small",children:(0,r.jsx)(b.ZkW,{})})}),(0,r.jsx)(h,{label:"D\xeda",value:e.name,field:"days[".concat(n,"].name"),setter:Z}),(0,r.jsx)(u.Z,{sx:{mb:1,mt:1}}),e.exercises.map((function(e,i){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(l.Z,{id:"auto-day-"+n+"-exercise-"+i,disablePortal:!0,options:x.listAllExercises,getOptionLabel:function(e){return e.name||""},isOptionEqualToValue:function(e,n){return e._id===n._id},groupBy:function(e){return e.muscleGroup},fullWidth:!0,onChange:function(e,r){return function(e,n,r){console.log(e,n,r),t((function(t){var i=JSON.parse(JSON.stringify(t));return i.days[n].exercises[r].exerciseId=e?e._id:null,i}))}(r,n,i)},value:x.listAllExercises.find((function(n){return e.exerciseId===n._id}))||null,renderInput:function(e){return(0,r.jsx)(d.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}({},e,{label:"Ejercicio"}))}}),(0,r.jsxs)(o.Z,{direction:"row",children:[(0,r.jsx)(y,{label:"sets",value:e.sets,field:"days[".concat(n,"].exercises[").concat(i,"].sets"),setter:Z}),(0,r.jsx)(y,{label:"reps",value:e.reps,field:"days[".concat(n,"].exercises[").concat(i,"].reps"),setter:Z})]}),(0,r.jsx)(c.Z,{onClick:function(){return e=n,r=i,void t((function(n){var t=g(n);return t.days[e].exercises.splice(r,1),t}));var e,r},size:"small",children:(0,r.jsx)(b.ZkW,{})})]}),(0,r.jsx)(u.Z,{sx:{mb:1,mt:1}})]},"day-"+n+"-exercise-"+i)})),(0,r.jsx)(f.Z,{variant:"outlined",onClick:function(){return function(e){t((function(n){var t=g(n);return t.days[e].exercises.push({exerciseId:"",sets:"",reps:""}),t}))}(n)},children:"A\xf1adir ejercicio"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},"day-"+n)})),(0,r.jsx)(f.Z,{variant:"outlined",onClick:function(){t((function(e){var n=g(e);return n.days.push({name:"",exercises:[]}),n}))},children:"A\xf1adir d\xeda"})]})]})}},9250:function(e,n,t){"use strict";var r=t(4776),i=t.n(r),a=t(2322),o=t(3927),s=t(7550),c=t(2197),u=t(6961),l=t(422),d=t(5873),f=t(4117),p=t(2056),v=t(2784),m=t(5632);function h(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,i)}n.Z=function(e){var n=(0,m.useRouter)(),t=n.query.userId,r=n.pathname,b=(0,v.useState)(""),y=b[0],g=b[1],x=[{name:"Entrenamiento",link:"/clients/".concat(t,"/training"),section:"training"},{name:"Contacto",link:"/clients/".concat(t,"/contact"),section:"contact"}];(0,v.useEffect)((function(){g(r.split("/")[3])}),[r]);var j=function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.replace(t);case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){h(a,r,i,o,s,"next",e)}function s(e){h(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,a.jsxs)(o.Z,{direction:"row",spacing:{xs:1,sm:2,md:4},children:[(0,a.jsxs)(s.Z,{sx:{backgroundColor:"#DCDCDC",padding:2,borderRadius:1},children:[(0,a.jsx)(s.Z,{sx:{textAlign:"center"},children:(0,a.jsx)("img",{height:80,width:80,alt:e.client.name,src:e.client.photo,style:{objectFit:"cover",borderRadius:20}})}),(0,a.jsx)(c.Z,{sx:{textAlign:"center",fontWeight:"bold",mb:2},children:e.client.name}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(l.Z,{children:x.map((function(e){return(0,a.jsx)(d.ZP,{disablePadding:!0,children:(0,a.jsx)(f.Z,{selected:y===e.section,onClick:function(){return j(e.link)},children:(0,a.jsx)(p.Z,{primary:e.name})})},e.link)}))})]}),(0,a.jsx)(s.Z,{sx:{width:"100%"},children:e.children})]})}},5287:function(e,n,t){"use strict";t.d(n,{f:function(){return r}});var r=function(e){return{id:e._id||"",name:e.name,days:e.days.map((function(e){return{name:e.name,exercises:e.exercises.map((function(e){return{reps:e.reps,sets:e.sets,exerciseId:e.exercise._id}}))}}))}}},2261:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ve}});var r=t(4776),i=t.n(r),a=t(2322),o=t(9250),s=t(7072),c=t(6552),u=t(2784),l=t(5632),d=t(2048),f=t(9330),p=t(7550),v=t(2197),m=t(2841),h=t(9506),b=t(7527),y=t(2887),g=t(1461),x=t(7896),j=t(6277),Z=t(9075),w=t(7591),O=t(5992),C=t(3853),P=t(602),I=t(8270),k=t(5691),S=t(8659),$=t(4215),_=t(3552),E=t(8066),A=t(5672);function M(e){return(0,A.Z)("MuiMenuItem",e)}var T=(0,t(9222).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);const F=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],B=(0,O.ZP)(I.Z,{shouldForwardProp:e=>(0,O.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.dense&&n.dense,t.divider&&n.divider,!t.disableGutters&&n.gutters]}})((({theme:e,ownerState:n})=>(0,x.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${T.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${T.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${T.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${T.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${T.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.Z.inset}`]:{marginLeft:52},[`& .${E.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${E.Z.inset}`]:{paddingLeft:36},[`& .${_.Z.root}`]:{minWidth:36}},!n.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},n.dense&&(0,x.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_.Z.root} svg`]:{fontSize:"1.25rem"}}))));var N=u.forwardRef((function(e,n){const t=(0,C.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:i="li",dense:o=!1,divider:s=!1,disableGutters:c=!1,focusVisibleClassName:l,role:d="menuitem",tabIndex:f}=t,p=(0,g.Z)(t,F),v=u.useContext(P.Z),m={dense:o||v.dense||!1,disableGutters:c},h=u.useRef(null);(0,k.Z)((()=>{r&&h.current&&h.current.focus()}),[r]);const b=(0,x.Z)({},t,{dense:m.dense,divider:s,disableGutters:c}),y=(e=>{const{disabled:n,dense:t,divider:r,disableGutters:i,selected:a,classes:o}=e,s={root:["root",t&&"dense",n&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},c=(0,Z.Z)(s,M,o);return(0,x.Z)({},o,c)})(t),w=(0,S.Z)(h,n);let O;return t.disabled||(O=void 0!==f?f:-1),(0,a.jsx)(P.Z.Provider,{value:m,children:(0,a.jsx)(B,(0,x.Z)({ref:w,role:d,tabIndex:O,component:i,focusVisibleClassName:(0,j.Z)(y.focusVisible,l)},p,{ownerState:b,classes:y}))})})),D=t(3927),R=t(558),q=t(3842),z=t(5287);function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function V(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,i)}function W(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){V(a,r,i,o,s,"next",e)}function s(e){V(a,r,i,o,s,"throw",e)}o(void 0)}))}}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return G(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function U(){var e=L(["\nquery ListAllTrainingplans {\n    listAllTrainingplans {\n        _id\n        name\n    }\n}"]);return U=function(){return e},e}function Q(){var e=L(["\nquery Query($input: TrainingsplanByIdInput!) {\n    findTrainingPlanById(input: $input) {\n        _id\n        name\n        days {\n            name\n            exercises {\n                exercise {\n                    _id\n                }\n                sets\n                reps\n            }\n        }\n    }\n}"]);return Q=function(){return e},e}var H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},X=(0,R.Ps)(U()),K=(0,R.Ps)(Q()),Y=function(e){var n,t=e.setPlan,r=J((0,q.t)(X),2),o=r[0],s=r[1],c=J((0,q.t)(K),2),l=c[0],g=c[1],x=(0,u.useState)(!1),j=x[0],Z=x[1],w=(0,u.useState)(""),O=w[0],C=w[1],P=function(){var e=W(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(!0),s.data){e.next=4;break}return e.next=4,o();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){Z(!1),C("")},k=function(){var e=W(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({variables:{input:{id:O}}});case 2:n=e.sent,r=(0,z.f)(n.data.findTrainingPlanById),t(r),I();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{onClick:P,variant:"outlined",children:"Carga Plan"}),(0,a.jsx)(f.Z,{open:j,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(p.Z,{sx:H,children:[(0,a.jsx)(v.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{mb:2},children:"Elige un plan"}),s.loading?(0,a.jsx)(m.Z,{}):(0,a.jsxs)(h.Z,{fullWidth:!0,sx:{mb:2},children:[(0,a.jsx)(b.Z,{children:"Plans"}),(0,a.jsx)(y.Z,{value:O,label:"Plans",onChange:function(e){return n=e.target.value,void C(n);var n},children:null===(n=s.data)||void 0===n?void 0:n.listAllTrainingplans.map((function(e){return(0,a.jsx)(N,{value:e._id,children:e.name},"plan-".concat(e._id))}))})]}),(0,a.jsxs)(D.Z,{direction:"row",spacing:2,justifyContent:"end",children:[(0,a.jsx)(d.Z,{onClick:I,disabled:s.loading||g.loading,children:"cancelar"}),(0,a.jsx)(d.Z,{variant:"contained",onClick:k,disabled:s.loading||g.loading,children:"carga"})]})]})})]})},ee=t(794),ne=t(3379),te=t(6890),re=t(107);function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ae(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,i)}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){oe(e,n,t[n])}))}return e}function ce(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function le(){var e=ue(["\n    query FindClientById($input: FindUserByIdInput!) {\n        findClientById(input: $input) {\n            _id\n            name\n            email\n            trainingplan {\n                name\n                days {\n                    name\n                    exercises {\n                        exercise {\n                            _id\n                        }\n                        reps\n                        sets\n                    }\n                }\n            }\n        }\n    }\n"]);return le=function(){return e},e}function de(){var e=ue(["\nmutation Mutation($input: TrainingsplanInput!) {\n    upsertTrainingplanWithUser(input: $input) {\n        _id\n        name\n        userId\n    }\n}"]);return de=function(){return e},e}var fe=(0,R.Ps)(le()),pe=(0,R.Ps)(de()),ve=function(){var e=(0,l.useRouter)().query.userId,n=(0,u.useState)(),t=n[0],r=n[1],f=(0,ee.a)(fe,{variables:{input:{id:e}}}),p=f.loading,v=(f.error,f.data),m=(f.refetch,ce((0,ne.D)(pe),2)),h=m[0],b=m[1];if((0,u.useEffect)((function(){if(!p){var e=v.findClientById.trainingplan;r(e?(0,z.f)(e):{name:"",days:[]})}}),[p]),p)return(0,a.jsx)(te.Z,{});var y=function(){var n,r=(n=i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=se({},t,{userId:e}),n.next=3,h({variables:{input:se({},r)}});case 3:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(e){ae(a,r,i,o,s,"next",e)}function s(e){ae(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,a.jsxs)(o.Z,{client:v.findClientById,children:[(0,a.jsxs)(D.Z,{sx:{mb:2},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,a.jsx)(s.Z,{title:"Entrenamiento"}),(0,a.jsxs)(D.Z,{direction:"row",spacing:2,children:[(0,a.jsx)(Y,{setPlan:r}),(0,a.jsx)(d.Z,{variant:"contained",onClick:y,disabled:p||b.loading,children:"Save"})]})]}),b.error&&(0,a.jsx)(re.Z,{severity:"warning",sx:{mb:2},children:b.error.message}),(0,a.jsx)(c.Z,{state:t,setState:r})]})}},6890:function(e,n,t){"use strict";var r=t(2322),i=t(3927),a=t(2841);n.Z=function(){return(0,r.jsx)(i.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,r.jsx)(a.Z,{})})}},3842:function(e,n,t){"use strict";t.d(n,{t:function(){return u}});var r=t(5163),i=t(2784),a=t(8769),o=t(794),s=t(6675),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function u(e,n){var t=(0,o.A)((0,s.x)(n&&n.client),e),u=(0,i.useRef)(),l=u.current?(0,a.J)(n,u.current):n,d=t.useQuery((0,r.pi)((0,r.pi)({},l),{skip:!u.current})),f=d.observable.options.initialFetchPolicy||t.getDefaultFetchPolicy(),p=Object.assign(d,{called:!!u.current}),v=(0,i.useMemo)((function(){for(var e={},n=function(n){var r=p[n];e[n]=function(){return u.current||(u.current=Object.create(null),t.forceUpdate()),r.apply(this,arguments)}},r=0,i=c;r<i.length;r++){n(i[r])}return e}),[]);return Object.assign(p,v),[(0,i.useCallback)((function(e){u.current=e?(0,r.pi)((0,r.pi)({},e),{fetchPolicy:e.fetchPolicy||f}):{fetchPolicy:f};var n=t.asyncUpdate().then((function(e){return Object.assign(e,v)}));return n.catch((function(){})),n}),[]),p]}},3379:function(e,n,t){"use strict";t.d(n,{D:function(){return l}});var r=t(5163),i=t(2784),a=t(8769),o=t(8229),s=t(7274),c=t(5832),u=t(6675);function l(e,n){var t=(0,u.x)(null===n||void 0===n?void 0:n.client);(0,s.Vp)(e,s.n_.Mutation);var l=(0,i.useState)({called:!1,loading:!1,client:t}),d=l[0],f=l[1],p=(0,i.useRef)({result:d,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(p.current,{client:t,options:n,mutation:e});var v=(0,i.useCallback)((function(e){void 0===e&&(e={});var n=p.current,t=n.client,i=n.options,s=n.mutation,u=(0,r.pi)((0,r.pi)({},i),{mutation:s});p.current.result.loading||u.ignoreResults||f(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var l=++p.current.mutationId,d=(0,a.J)(u,e);return t.mutate(d).then((function(n){var r,i,a,s=n.data,u=n.errors,v=u&&u.length>0?new c.c({graphQLErrors:u}):void 0;if(l===p.current.mutationId&&!d.ignoreResults){var m={called:!0,loading:!1,data:s,error:v,client:t};p.current.isMounted&&!(0,o.D)(p.current.result,m)&&f(p.current.result=m)}return null===(i=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===i||i.call(r,n.data),null===(a=e.onCompleted)||void 0===a||a.call(e,n.data),n})).catch((function(n){var r,i,a,s;if(l===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:n,data:void 0,called:!0,client:t};(0,o.D)(p.current.result,c)||f(p.current.result=c)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||d.onError)return null===(a=null===(i=p.current.options)||void 0===i?void 0:i.onError)||void 0===a||a.call(i,n),null===(s=e.onError)||void 0===s||s.call(e,n),{data:void 0,errors:n};throw n}))}),[]),m=(0,i.useCallback)((function(){f({called:!1,loading:!1,client:t})}),[]);return(0,i.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[v,(0,r.pi)({reset:m},d)]}}},function(e){e.O(0,[253,694,537,880,774,888,179],(function(){return n=1819,e(e.s=n);var n}));var n=e.O();_N_E=n}]);