(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{44:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r=o(3366),l=o(7462),n=o(7294),i=o(6010),a=o(4780),s=o(8543),c=o(8216),d=o(4502),u=o(1496),f=o(4867);function h(e){return(0,f.Z)("MuiTab",e)}var p=(0,o(1588).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),b=o(5893);const m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],v=(0,u.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.Z)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${p.iconWrapper}`]:(0,l.Z)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${p.selected}`]:{opacity:1},[`&.${p.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${p.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${p.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${p.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${p.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})));var w=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:f=!1,fullWidth:p,icon:w,iconPosition:x="top",indicator:S,label:g,onChange:Z,onClick:y,onFocus:C,selected:B,selectionFollowsFocus:M,textColor:R="inherit",value:z,wrapped:W=!1}=o,N=(0,r.Z)(o,m),E=(0,l.Z)({},o,{disabled:u,disableFocusRipple:f,selected:B,icon:!!w,iconPosition:x,label:!!g,fullWidth:p,textColor:R,wrapped:W}),T=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:i,selected:s,disabled:d}=e,u={root:["root",n&&i&&"labelIcon",`textColor${(0,c.Z)(o)}`,r&&"fullWidth",l&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,a.Z)(u,h,t)})(E),k=w&&g&&n.isValidElement(w)?n.cloneElement(w,{className:(0,i.Z)(T.iconWrapper,w.props.className)}):w;return(0,b.jsxs)(v,(0,l.Z)({focusRipple:!f,className:(0,i.Z)(T.root,s),ref:t,role:"tab","aria-selected":B,disabled:u,onClick:e=>{!B&&Z&&Z(e,z),y&&y(e)},onFocus:e=>{M&&!B&&Z&&Z(e,z),C&&C(e)},ownerState:E,tabIndex:B?0:-1},N,{children:["top"===x||"start"===x?(0,b.jsxs)(n.Fragment,{children:[k,g]}):(0,b.jsxs)(n.Fragment,{children:[g,k]}),S]}))}))},1703:function(e,t,o){"use strict";o.d(t,{Z:function(){return O}});var r=o(3366),l=o(7462),n=o(7294),i=(o(6607),o(6010)),a=o(4780),s=o(1496),c=o(4502),d=o(2734),u=o(7144);let f;function h(){if(f)return f;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),f="reverse",e.scrollLeft>0?f="default":(e.scrollLeft=1,0===e.scrollLeft&&(f="negative")),document.body.removeChild(e),f}function p(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function b(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var m=o(5340),v=o(5893);const w=["onChange"],x={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var S=o(8169),g=(0,S.Z)((0,v.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Z=(0,S.Z)((0,v.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),y=o(8543),C=o(4867),B=o(1588);function M(e){return(0,C.Z)("MuiTabScrollButton",e)}var R,z,W=(0,B.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const N=["className","direction","orientation","disabled"],E=(0,s.ZP)(y.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,l.Z)({width:40,flexShrink:0,opacity:.8,[`&.${W.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var T=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabScrollButton"}),{className:n,direction:s}=o,u=(0,r.Z)(o,N),f="rtl"===(0,d.Z)().direction,h=(0,l.Z)({isRtl:f},o),p=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,a.Z)(l,M,t)})(h);return(0,v.jsx)(E,(0,l.Z)({component:"div",className:(0,i.Z)(p.root,n),ref:t,role:null,ownerState:h,tabIndex:null},u,{children:"left"===s?R||(R=(0,v.jsx)(g,{fontSize:"small"})):z||(z=(0,v.jsx)(Z,{fontSize:"small"}))}))})),k=o(2068);function P(e){return(0,C.Z)("MuiTabs",e)}var L=(0,B.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),F=o(8038);const $=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],I=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,j=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,A=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},H=(0,s.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${L.scrollButtons}`]:t.scrollButtons},{[`& .${L.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${L.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),X=(0,s.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),D=(0,s.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),Y=(0,s.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),_=(0,s.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,w),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return n.useEffect((()=>{const e=(0,u.Z)((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=(0,m.Z)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,v.jsx)("div",(0,l.Z)({style:x,ref:a},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),V={};var O=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabs"}),s=(0,d.Z)(),f="rtl"===s.direction,{"aria-label":w,"aria-labelledby":x,action:S,centered:g=!1,children:Z,className:y,component:C="div",allowScrollButtonsMobile:B=!1,indicatorColor:M="primary",onChange:R,orientation:z="horizontal",ScrollButtonComponent:W=T,scrollButtons:N="auto",selectionFollowsFocus:E,TabIndicatorProps:L={},TabScrollButtonProps:O={},textColor:q="primary",value:K,variant:G="standard",visibleScrollbar:U=!1}=o,J=(0,r.Z)(o,$),Q="scrollable"===G,ee="vertical"===z,te=ee?"scrollTop":"scrollLeft",oe=ee?"top":"left",re=ee?"bottom":"right",le=ee?"clientHeight":"clientWidth",ne=ee?"height":"width",ie=(0,l.Z)({},o,{component:C,allowScrollButtonsMobile:B,indicatorColor:M,orientation:z,vertical:ee,scrollButtons:N,textColor:q,variant:G,visibleScrollbar:U,fixed:!Q,hideScrollbar:Q&&!U,scrollableX:Q&&!ee,scrollableY:Q&&ee,centered:g&&!Q,scrollButtonsHideMobile:!B}),ae=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,a.Z)(d,P,c)})(ie);const[se,ce]=n.useState(!1),[de,ue]=n.useState(V),[fe,he]=n.useState({start:!1,end:!1}),[pe,be]=n.useState({overflow:"hidden",scrollbarWidth:0}),me=new Map,ve=n.useRef(null),we=n.useRef(null),xe=()=>{const e=ve.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:p(e,s.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==K){const e=we.current.children;if(e.length>0){const t=e[me.get(K)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Se=(0,k.Z)((()=>{const{tabsMeta:e,tabMeta:t}=xe();let o,r=0;if(ee)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const l=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(f?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ne]:t?t[ne]:0};if(isNaN(de[o])||isNaN(de[ne]))ue(l);else{const e=Math.abs(de[o]-l[o]),t=Math.abs(de[ne]-l[ne]);(e>=1||t>=1)&&ue(l)}})),ge=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=(()=>{})){const{ease:n=b,duration:i=300}=r;let a=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void l(new Error("Animation cancelled"));null===a&&(a=r);const d=Math.min(1,(r-a)/i);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(u)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(u)}(te,ve.current,e,{duration:s.transitions.duration.standard}):ve.current[te]=e},Ze=e=>{let t=ve.current[te];ee?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),ge(t)},ye=()=>{const e=ve.current[le];let t=0;const o=Array.from(we.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[le]>e)break;t+=l[le]}return t},Ce=()=>{Ze(-1*ye())},Be=()=>{Ze(ye())},Me=n.useCallback((e=>{be({overflow:null,scrollbarWidth:e})}),[]),Re=(0,k.Z)((e=>{const{tabsMeta:t,tabMeta:o}=xe();if(o&&t)if(o[oe]<t[oe]){const r=t[te]+(o[oe]-t[oe]);ge(r,{animation:e})}else if(o[re]>t[re]){const r=t[te]+(o[re]-t[re]);ge(r,{animation:e})}})),ze=(0,k.Z)((()=>{if(Q&&!1!==N){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:r,clientWidth:l}=ve.current;let n,i;if(ee)n=e>1,i=e<t-o-1;else{const e=p(ve.current,s.direction);n=f?e<r-l-1:e>1,i=f?e>1:e<r-l-1}n===fe.start&&i===fe.end||he({start:n,end:i})}}));n.useEffect((()=>{const e=(0,u.Z)((()=>{Se(),ze()})),t=(0,m.Z)(ve.current);let o;return t.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(o=new ResizeObserver(e),Array.from(we.current.children).forEach((e=>{o.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[Se,ze]);const We=n.useMemo((()=>(0,u.Z)((()=>{ze()}))),[ze]);n.useEffect((()=>()=>{We.clear()}),[We]),n.useEffect((()=>{ce(!0)}),[]),n.useEffect((()=>{Se(),ze()})),n.useEffect((()=>{Re(V!==de)}),[Re,de]),n.useImperativeHandle(S,(()=>({updateIndicator:Se,updateScrollButtons:ze})),[Se,ze]);const Ne=(0,v.jsx)(Y,(0,l.Z)({},L,{className:(0,i.Z)(ae.indicator,L.className),ownerState:ie,style:(0,l.Z)({},de,L.style)}));let Ee=0;const Te=n.Children.map(Z,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Ee:e.props.value;me.set(t,Ee);const o=t===K;return Ee+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===G,indicator:o&&!se&&Ne,selected:o,selectionFollowsFocus:E,onChange:R,textColor:q,value:t},1!==Ee||!1!==K||e.props.tabIndex?{}:{tabIndex:0}))})),ke=(()=>{const e={};e.scrollbarSizeListener=Q?(0,v.jsx)(_,{onChange:Me,className:(0,i.Z)(ae.scrollableX,ae.hideScrollbar)}):null;const t=fe.start||fe.end,o=Q&&("auto"===N&&t||!0===N);return e.scrollButtonStart=o?(0,v.jsx)(W,(0,l.Z)({orientation:z,direction:f?"right":"left",onClick:Ce,disabled:!fe.start},O,{className:(0,i.Z)(ae.scrollButtons,O.className)})):null,e.scrollButtonEnd=o?(0,v.jsx)(W,(0,l.Z)({orientation:z,direction:f?"left":"right",onClick:Be,disabled:!fe.end},O,{className:(0,i.Z)(ae.scrollButtons,O.className)})):null,e})();return(0,v.jsxs)(H,(0,l.Z)({className:(0,i.Z)(ae.root,y),ownerState:ie,ref:t,as:C},J,{children:[ke.scrollButtonStart,ke.scrollbarSizeListener,(0,v.jsxs)(X,{className:ae.scroller,ownerState:ie,style:{overflow:pe.overflow,[ee?"margin"+(f?"Left":"Right"):"marginBottom"]:U?void 0:-pe.scrollbarWidth},ref:ve,onScroll:We,children:[(0,v.jsx)(D,{"aria-label":w,"aria-labelledby":x,"aria-orientation":"vertical"===z?"vertical":null,className:ae.flexContainer,ownerState:ie,onKeyDown:e=>{const t=we.current,o=(0,F.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===z?"ArrowLeft":"ArrowUp",l="horizontal"===z?"ArrowRight":"ArrowDown";switch("horizontal"===z&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),A(t,o,j);break;case l:e.preventDefault(),A(t,o,I);break;case"Home":e.preventDefault(),A(t,null,I);break;case"End":e.preventDefault(),A(t,null,j)}},ref:we,role:"tablist",children:Te}),se&&Ne]}),ke.scrollButtonEnd]}))}))},3023:function(e,t){"use strict";var o=60103,r=60106,l=60107,n=60108,i=60114,a=60109,s=60110,c=60112,d=60113,u=60120,f=60115,h=60116,p=60121,b=60122,m=60117,v=60129,w=60131;if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;o=x("react.element"),r=x("react.portal"),l=x("react.fragment"),n=x("react.strict_mode"),i=x("react.profiler"),a=x("react.provider"),s=x("react.context"),c=x("react.forward_ref"),d=x("react.suspense"),u=x("react.suspense_list"),f=x("react.memo"),h=x("react.lazy"),p=x("react.block"),b=x("react.server.block"),m=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case i:case n:case d:case u:return e;default:switch(e=e&&e.$$typeof){case s:case c:case h:case f:case a:return e;default:return t}}case r:return t}}}},6607:function(e,t,o){"use strict";o(3023)},8169:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r=o(7462),l=o(7294),n=o(3366),i=o(6010),a=o(4780),s=o(8216),c=o(4502),d=o(1496),u=o(4867);function f(e){return(0,u.Z)("MuiSvgIcon",e)}(0,o(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=o(5893);const p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],b=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,s.Z)(o.color)}`],t[`fontSize${(0,s.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var o,r,l,n,i,a,s,c,d,u,f,h,p,b,m,v,w;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(r=o.create)?void 0:r.call(o,"fill",{duration:null==(l=e.transitions)||null==(n=l.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875"}[t.fontSize],color:null!=(f=null==(h=(e.vars||e).palette)||null==(p=h[t.color])?void 0:p.main)?f:{action:null==(b=(e.vars||e).palette)||null==(m=b.action)?void 0:m.active,disabled:null==(v=(e.vars||e).palette)||null==(w=v.action)?void 0:w.disabled,inherit:void 0}[t.color]}})),m=l.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:d,color:u="inherit",component:m="svg",fontSize:v="medium",htmlColor:w,inheritViewBox:x=!1,titleAccess:S,viewBox:g="0 0 24 24"}=o,Z=(0,n.Z)(o,p),y=(0,r.Z)({},o,{color:u,component:m,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:g}),C={};x||(C.viewBox=g);const B=(e=>{const{color:t,fontSize:o,classes:r}=e,l={root:["root","inherit"!==t&&`color${(0,s.Z)(t)}`,`fontSize${(0,s.Z)(o)}`]};return(0,a.Z)(l,f,r)})(y);return(0,h.jsxs)(b,(0,r.Z)({as:m,className:(0,i.Z)(B.root,d),ownerState:y,focusable:"false",color:w,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:t},C,Z,{children:[l,S?(0,h.jsx)("title",{children:S}):null]}))}));m.muiName="SvgIcon";var v=m;function w(e,t){const o=(o,l)=>(0,h.jsx)(v,(0,r.Z)({"data-testid":`${t}Icon`,ref:l},o,{children:e}));return o.muiName=v.muiName,l.memo(l.forwardRef(o))}},8038:function(e,t,o){"use strict";var r=o(7094);t.Z=r.Z},1163:function(e,t,o){e.exports=o(880)}}]);