(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{6447:function(e,n,t){"use strict";var i=t(3366),r=t(7462),o=t(7294),s=t(5408),c=t(8700),a=t(9707),l=t(9766),u=t(1496),d=t(4502),m=t(5893);const p=["component","direction","spacing","divider","children"];function h(e,n){const t=o.Children.toArray(e).filter(Boolean);return t.reduce(((e,i,r)=>(e.push(i),r<t.length-1&&e.push(o.cloneElement(n,{key:`separator-${r}`})),e)),[])}const f=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,r.Z)({display:"flex"},(0,s.k9)({theme:n},(0,s.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const i=(0,c.hB)(n),r=Object.keys(n.breakpoints.values).reduce(((n,t)=>(null==e.spacing[t]&&null==e.direction[t]||(n[t]=!0),n)),{}),o=(0,s.P$)({values:e.direction,base:r}),a=(0,s.P$)({values:e.spacing,base:r}),u=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=t?o[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,c.NA)(i,n)}};var r};t=(0,l.Z)(t,(0,s.k9)({theme:n},a,u))}return t})),g=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiStack"}),o=(0,a.Z)(t),{component:s="div",direction:c="column",spacing:l=0,divider:u,children:g}=o,v=(0,i.Z)(o,p),x={direction:c,spacing:l};return(0,m.jsx)(f,(0,r.Z)({as:s,ownerState:x,ref:n},v,{children:u?h(g,u):g}))}));n.Z=g},5037:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients/[userId]/training",function(){return t(3527)}])},1670:function(e,n,t){"use strict";t.d(n,{Z:function(){return r},m:function(){return o}});var i=[{id:"1",name:"Javier",email:"javier@gmail.com",photo:"/samples/clients/javier.jpg"},{id:"2",name:"Marco",email:"marco@gmail.com",photo:"/samples/clients/marco.jpg"},{id:"3",name:"Maria",email:"maria@gmail.com",photo:"/samples/clients/maria.jpg"},{id:"4",name:"Mia",email:"mia@gmail.com",photo:"/samples/clients/mia.jpg"}],r=function(){return Promise.resolve(i)},o=function(e){return Promise.resolve(i.find((function(n){return n.id===e})))}},4345:function(e,n,t){"use strict";var i=t(5893);n.Z=function(e){return(0,i.jsx)("h1",{style:{marginTop:0},children:e.title})}},8836:function(e,n,t){"use strict";var i=t(5893),r=t(6447),o=t(7357),s=t(5861),c=t(1519),a=t(8462),l=t(7212),u=t(8619),d=t(9953),m=t(7294),p=t(1664),h=t.n(p),f=t(1163),g=t(1670),v={id:"asd",name:"asd",photo:"asd",email:"asdad"};n.Z=function(e){var n=(0,f.useRouter)(),t=n.query.userId,p=n.pathname,x=(0,m.useState)(""),j=x[0],Z=x[1],k=(0,m.useState)(v),b=k[0],w=k[1];(0,m.useEffect)((function(){(0,g.m)(t+"").then((function(e){return w(e||v)}))}),[t]),(0,m.useEffect)((function(){Z(p.split("/")[3])}),[p]);var _=[{name:"Entrenamiento",link:"/clients/".concat(t,"/training"),section:"training"},{name:"Contacto",link:"/clients/".concat(t,"/contact"),section:"contact"}];return(0,i.jsxs)(r.Z,{direction:"row",spacing:{xs:1,sm:2,md:4},children:[(0,i.jsxs)(o.Z,{sx:{backgroundColor:"#DCDCDC",padding:2,borderRadius:1},children:[(0,i.jsx)(o.Z,{sx:{textAlign:"center"},children:(0,i.jsx)("img",{height:80,width:80,alt:b.name,src:b.photo,style:{objectFit:"cover",borderRadius:20}})}),(0,i.jsx)(s.Z,{sx:{textAlign:"center",fontWeight:"bold",mb:2},children:b.name}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(a.Z,{children:_.map((function(e){return(0,i.jsx)(l.ZP,{disablePadding:!0,children:(0,i.jsx)(h(),{href:e.link,children:(0,i.jsx)(u.Z,{selected:j===e.section,children:(0,i.jsx)(d.Z,{primary:e.name})})})},e.link)}))})]}),(0,i.jsx)(o.Z,{sx:{width:"100%"},children:e.children})]})}},3527:function(e,n,t){"use strict";t.r(n);var i=t(5893),r=t(8836),o=t(4345);n.default=function(){return(0,i.jsx)(r.Z,{children:(0,i.jsx)(o.Z,{title:"Entrenamiento"})})}},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],(function(){return n=5037,e(e.s=n);var n}));var n=e.O();_N_E=n}]);