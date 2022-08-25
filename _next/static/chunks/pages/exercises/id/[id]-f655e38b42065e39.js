(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{9798:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(7896),o=t(2784),i=t(1461),c=t(6277),a=t(9075),l=t(7342),u=t(3853),s=t(5992),d=t(5672);function p(e){return(0,d.Z)("MuiSvgIcon",e)}(0,t(9222).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=t(2322);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${(0,l.Z)(t.color)}`],n[`fontSize${(0,l.Z)(t.fontSize)}`]]}})((({theme:e,ownerState:n})=>{var t,r,o,i,c,a,l,u,s,d,p,f,h,m,v,b,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(o=e.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(c=e.typography)||null==(a=c.pxToRem)?void 0:a.call(c,20))||"1.25rem",medium:(null==(l=e.typography)||null==(u=l.pxToRem)?void 0:u.call(l,24))||"1.5rem",large:(null==(s=e.typography)||null==(d=s.pxToRem)?void 0:d.call(s,35))||"2.1875"}[n.fontSize],color:null!=(p=null==(f=(e.vars||e).palette)||null==(h=f[n.color])?void 0:h.main)?p:{action:null==(m=(e.vars||e).palette)||null==(v=m.action)?void 0:v.active,disabled:null==(b=(e.vars||e).palette)||null==(y=b.action)?void 0:y.disabled,inherit:void 0}[n.color]}})),v=o.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:s,color:d="inherit",component:v="svg",fontSize:b="medium",htmlColor:y,inheritViewBox:x=!1,titleAccess:g,viewBox:Z="0 0 24 24"}=t,j=(0,i.Z)(t,h),w=(0,r.Z)({},t,{color:d,component:v,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:Z}),S={};x||(S.viewBox=Z);const k=(e=>{const{color:n,fontSize:t,classes:r}=e,o={root:["root","inherit"!==n&&`color${(0,l.Z)(n)}`,`fontSize${(0,l.Z)(t)}`]};return(0,a.Z)(o,p,r)})(w);return(0,f.jsxs)(m,(0,r.Z)({as:v,className:(0,c.Z)(k.root,s),ownerState:w,focusable:"false",color:y,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:n},S,j,{children:[o,g?(0,f.jsx)("title",{children:g}):null]}))}));v.muiName="SvgIcon";var b=v;function y(e,n){const t=(t,o)=>(0,f.jsx)(b,(0,r.Z)({"data-testid":`${n}Icon`,ref:o},t,{children:e}));return t.muiName=b.muiName,o.memo(o.forwardRef(t))}},961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercises/id/[id]",function(){return t(2521)}])},7072:function(e,n,t){"use strict";var r=t(2322),o=t(3927),i=t(2197);t(2784);n.Z=function(e){var n=e.title,t=e.children;return(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:2},children:[(0,r.jsx)(i.Z,{variant:"h4",children:n}),t&&(0,r.jsx)(o.Z,{direction:"row",spacing:2,children:t})]})}},2521:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(4776),o=t.n(r),i=t(2322),c=t(1461),a=t(7896),l=t(2784),u=t(9075),s=t(7591),d=t(6277),p=t(7342),f=t(5992),h=t(9570),m=t(433),v=t(2572),b=t(5672),y=t(9222);function x(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,y.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,f.ZP)(v.Z)((({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),j=(0,f.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var w=l.forwardRef((function(e,n){const{autoFocus:t,checked:r,checkedIcon:o,className:l,defaultChecked:s,disabled:f,disableFocusRipple:v=!1,edge:b=!1,icon:y,id:w,inputProps:S,inputRef:k,name:I,onBlur:z,onChange:E,onFocus:C,readOnly:P,required:_,tabIndex:O,type:B,value:R}=e,F=(0,c.Z)(e,g),[$,M]=(0,h.Z)({controlled:r,default:Boolean(s),name:"SwitchBase",state:"checked"}),N=(0,m.Z)();let A=f;N&&"undefined"===typeof A&&(A=N.disabled);const T="checkbox"===B||"radio"===B,H=(0,a.Z)({},e,{checked:$,disabled:A,disableFocusRipple:v,edge:b}),V=(e=>{const{classes:n,checked:t,disabled:r,edge:o}=e,i={root:["root",t&&"checked",r&&"disabled",o&&`edge${(0,p.Z)(o)}`],input:["input"]};return(0,u.Z)(i,x,n)})(H);return(0,i.jsxs)(Z,(0,a.Z)({component:"span",className:(0,d.Z)(V.root,l),centerRipple:!0,focusRipple:!v,disabled:A,tabIndex:null,role:void 0,onFocus:e=>{C&&C(e),N&&N.onFocus&&N.onFocus(e)},onBlur:e=>{z&&z(e),N&&N.onBlur&&N.onBlur(e)},ownerState:H,ref:n},F,{children:[(0,i.jsx)(j,(0,a.Z)({autoFocus:t,checked:r,defaultChecked:s,className:V.input,disabled:A,id:T&&w,name:I,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;M(n),E&&E(e,n)},readOnly:P,ref:k,required:_,ownerState:H,tabIndex:O,type:B},"checkbox"===B&&void 0===R?{}:{value:R},S)),$?o:y]}))})),S=t(9798),k=(0,S.Z)((0,i.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),I=(0,S.Z)((0,i.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),z=(0,S.Z)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),E=t(3853);function C(e){return(0,b.Z)("MuiCheckbox",e)}var P=(0,y.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const _=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],O=(0,f.ZP)(w,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n[`color${(0,p.Z)(t.color)}`]]}})((({theme:e,ownerState:n})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===n.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${P.checked}, &.${P.indeterminate}`]:{color:(e.vars||e).palette[n.color].main},[`&.${P.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),B=(0,i.jsx)(I,{}),R=(0,i.jsx)(k,{}),F=(0,i.jsx)(z,{});var $=l.forwardRef((function(e,n){var t,r;const o=(0,E.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=B,color:d="primary",icon:f=R,indeterminate:h=!1,indeterminateIcon:m=F,inputProps:v,size:b="medium"}=o,y=(0,c.Z)(o,_),x=h?m:f,g=h?m:s,Z=(0,a.Z)({},o,{color:d,indeterminate:h,size:b}),j=(e=>{const{classes:n,indeterminate:t,color:r}=e,o={root:["root",t&&"indeterminate",`color${(0,p.Z)(r)}`]},i=(0,u.Z)(o,C,n);return(0,a.Z)({},n,i)})(Z);return(0,i.jsx)(O,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":h},v),icon:l.cloneElement(x,{fontSize:null!=(t=x.props.fontSize)?t:b}),checkedIcon:l.cloneElement(g,{fontSize:null!=(r=g.props.fontSize)?r:b}),ownerState:Z,ref:n},y,{classes:j}))})),M=t(7550),N=t(2048),A=t(3927),T=t(9506),H=t(7527),V=t(7612),q=t(8903),G=t(4380),D=t(2056),L=t(7072),W=t(5632),U=t(558),X=t(794),Y=t(3379),J=t(6890),K=t(8233);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ee(e,n,t,r,o,i,c){try{var a=e[i](c),l=a.value}catch(u){return void t(u)}a.done?n(l):Promise.resolve(l).then(r,o)}function ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ne(e,n,t[n])}))}return e}function re(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(l){a=!0,o=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function ie(){var e=oe(["\nquery FindExerciseById($input: ExerciseByIdInput!) {\n    findExerciseById(input: $input) {\n        _id\n        name\n        nameEs\n        video\n        muscleGroup\n        photo\n        types\n    }\n}"]);return ie=function(){return e},e}function ce(){var e=oe(["\n    mutation updateExercise($input: ExerciseCreateInput!) {\n        updateExercise(input: $input) {\n            _id\n        }\n    }\n"]);return ce=function(){return e},e}var ae=(0,U.Ps)(ie()),le=(0,U.Ps)(ce()),ue={PaperProps:{style:{maxHeight:224,width:250}}},se=function(){var e=(0,W.useRouter)().query.id,n=(0,X.a)(ae,{variables:{input:{id:e}}}),t=n.loading,r=(n.error,n.data),c=(n.refetch,re((0,Y.D)(le),2)),a=c[0],u=c[1],s=(0,l.useState)(),d=s[0],p=s[1];(0,l.useEffect)((function(){t||p(r.findExerciseById)}),[t]);var f=function(e,n){p((function(t){if(t)return te({},t,ne({},e,n))}))},h=function(){var e,n=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({variables:{input:te({},d)}});case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){ee(i,r,o,c,a,"next",e)}function a(e){ee(i,r,o,c,a,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return t?(0,i.jsx)(J.Z,{}):(0,i.jsxs)(M.Z,{children:[(0,i.jsx)(L.Z,{title:"Ejercicio",children:(0,i.jsx)(N.Z,{variant:"contained",onClick:h,disabled:t||u.loading,children:"Guardar"})}),d&&(0,i.jsxs)(A.Z,{spacing:4,alignItems:"center",children:[(0,i.jsxs)(T.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(H.Z,{htmlFor:"component-outlined",children:"Ejercicio EN"}),(0,i.jsx)(V.Z,{value:d.name,onChange:function(e){return f("name",e.target.value)},label:"Ejercicio EN"})]}),(0,i.jsxs)(T.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(H.Z,{htmlFor:"component-outlined",children:"Ejercicio ES"}),(0,i.jsx)(V.Z,{value:d.nameEs,onChange:function(e){return f("nameEs",e.target.value)},label:"Ejercicio ES"})]}),(0,i.jsxs)(T.Z,{fullWidth:!0,children:[(0,i.jsx)(H.Z,{id:"muscle-group",children:"Muscle Group"}),(0,i.jsx)(q.Z,{labelId:"muscle-group",id:"demo-simple-select",value:d.muscleGroup,label:"Muscle Group",onChange:function(e){return f("muscleGroup",e.target.value)},children:K.De.map((function(e){return(0,i.jsx)(G.Z,{value:e,children:e},e)}))})]}),(0,i.jsxs)(T.Z,{fullWidth:!0,children:[(0,i.jsx)(H.Z,{id:"demo-multiple-checkbox-label",children:"Types"}),(0,i.jsx)(q.Z,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:d.types||[],onChange:function(e){var n=e.target.value,t="string"===typeof n?n.split(","):n;p((function(e){if(e)return te({},e,{types:t})}))},input:(0,i.jsx)(V.Z,{label:"Types"}),renderValue:function(e){return e.join(", ")},MenuProps:ue,children:K.my.map((function(e){var n;return(0,i.jsxs)(G.Z,{value:e,children:[(0,i.jsx)($,{checked:(null===(n=d.types)||void 0===n?void 0:n.indexOf(e))>-1}),(0,i.jsx)(D.Z,{primary:e})]},e)}))})]}),d.photo&&(0,i.jsx)("img",{alt:"photo",src:d.photo,style:{width:"100%",maxHeight:300,objectFit:"contain"}}),(null===d||void 0===d?void 0:d.video)&&(0,i.jsxs)("video",{style:{width:"100%",maxHeight:300,objectFit:"contain"},controls:!0,loop:!0,children:[(0,i.jsx)("source",{src:d.video,type:"video/mp4"}),"Your browser does not support the video tag."]})]})]})}},6890:function(e,n,t){"use strict";var r=t(2322),o=t(3927),i=t(2841);n.Z=function(){return(0,r.jsx)(o.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,r.jsx)(i.Z,{})})}},8233:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{De:function(){return d},my:function(){return p}});var i=["quadriceps","hamstrings","calves","abductors","adductor"],c=["biceps","triceps","forearms"],a=["upper_abs","lower_abs","side_abs"],l=["trapezius","latissimus","lower_back"],u=["front_delt","side_delt","rear_delt"],s=["other"],d=o(["upper_chest","middle_chest","lower_chest"]).concat(o(l),o(c),o(u),o(a),o(i),o(s)),p=["bodyweight","boxing","calisthenics","cross_exercise","functional","home_workout","olympic_weightlifting","plyometrics","powerlifting","strength","stretching","yoga"]}},function(e){e.O(0,[867,647,903,774,888,179],(function(){return n=961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);