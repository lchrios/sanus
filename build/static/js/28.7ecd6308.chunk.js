<<<<<<< HEAD:build/static/js/29.f21beee1.chunk.js
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[29],{1696:function(e,a,t){"use strict";var s=t(7),c=t(2),i=t(0),r=(t(4),t(5)),l=t(9),o=t(592),n=t(12),d=i.forwardRef((function(e,a){var t=e.children,l=e.classes,d=e.className,m=e.color,b=void 0===m?"default":m,j=e.component,h=void 0===j?"button":j,x=e.disabled,u=void 0!==x&&x,g=e.disableFocusRipple,p=void 0!==g&&g,O=e.focusVisibleClassName,N=e.size,v=void 0===N?"large":N,y=e.variant,f=void 0===y?"round":y,k=Object(s.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(o.a,Object(c.a)({className:Object(r.default)(l.root,d,"round"!==f&&l.extended,"large"!==v&&l["size".concat(Object(n.a)(v))],u&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[b]),component:h,disabled:u,focusRipple:!p,focusVisibleClassName:Object(r.default)(l.focusVisible,O),ref:a},k),i.createElement("span",{className:l.label},t))}));a.a=Object(l.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},2178:function(e,a,t){"use strict";t.r(a);var s=t(14),c=t(11),i=t(0),r=t(1309),l=t(1340),o=t(442),n=t(1356),d=t(1360),m=t(589),b=t(1696),j=t(29),h=t(605),x=t(5),u=t(52),g=(t(22),t(79)),p=t(350),O=t(1598),N=t(1);const v=Object(h.a)((e=>{let a=e.palette;return{cart:{minWidth:900,overflowX:"scroll"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)},cardLoading:{minWidth:200,borderRadius:12,margin:"1rem"},delete:{background:a.error.main,color:a.error.contrastText}}})),y=[{t:"Peligros del abuso de la PC"},{t:"La decoracion: un reflejo de nuestra mente"},{t:"El metro y la m\xfasica: efecto sobre las personas"},{t:"Sonoroterapia: terapia con sonidos calmantes"}];a.default=()=>{const e=Object(i.useState)(),a=Object(s.a)(e,2),t=a[0],c=a[1],h=Object(i.useState)(y),f=Object(s.a)(h,2),k=(f[0],f[1],Object(i.useState)(!0)),w=Object(s.a)(k,2),C=w[0],z=w[1],S=Object(i.useState)(),R=Object(s.a)(S,2),V=(R[0],R[1],Object(u.a)().user),E=v();return Object(i.useEffect)((()=>{g.a.get("/t/"+V.uid+"/b").then((e=>{console.log(e.data),c(e.data),z(!1)})).then((()=>console.log("Blogs descargados")))}),[]),Object(N.jsxs)(r.a,{elevation:3,className:Object(x.default)("m-sm-30",E.cart),children:[Object(N.jsxs)("div",{className:"py-4 px-4",children:[Object(N.jsx)(l.a,{variant:"contained",color:"secondary",className:"mb-4 x-center",onClick:()=>j.a.push("/"+V.uid+"/dashboard"),children:"Volver al escritorio"}),Object(N.jsxs)("div",{className:"flex items-center mb-4 px-4",children:[Object(N.jsx)(o.a,{variant:"outlined",placeholder:"Buscar por t\xedtulo",className:"flex-grow",size:"small"}),Object(N.jsxs)(l.a,{className:"mx-3",variant:"contained",color:"primary",onClick:()=>{},children:[Object(N.jsx)(n.a,{className:"mr-3",children:"search"}),"Buscar"]}),Object(N.jsxs)(l.a,{className:"mx-3",variant:"contained",color:"secondary",onClick:()=>{j.a.push("/"+V.uid+"/newblog")},children:[Object(N.jsx)(n.a,{className:"mr-3",children:"note_add"}),"Escribir nueva entrada"]})]}),Object(N.jsx)(d.a,{}),Object(N.jsx)("div",{className:"py-2"}),Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3}),Object(N.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,children:Object(N.jsx)("h6",{className:"m-0",children:"Contenido"})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Likes"})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Comentarios"})}),Object(N.jsx)(m.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Editar"})})]})]}),Object(N.jsx)(d.a,{}),C?Object(N.jsx)(p.a,{}):Object(N.jsx)(N.Fragment,{children:0===t.id.length?Object(N.jsx)("h3",{align:"center",className:"m-5",children:"No hay blogs a mostrar..."}):Object(N.jsx)(N.Fragment,{children:t.data.map(((e,a)=>Object(N.jsx)("div",{className:"py-4 px-4",children:Object(N.jsxs)(m.a,{container:!0,alignItems:"center",children:[Object(N.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3,children:Object(N.jsx)("div",{className:"flex items-center",children:Object(N.jsx)("div",{className:"px-4",children:Object(N.jsx)("img",{className:"border-radius-4 w-full",height:"200",width:"200",src:"/src/assets/images/blog/terapia2.jpg",alt:e.title})})})}),Object(N.jsxs)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,children:[Object(N.jsx)("h6",{className:"m-0",children:e.title}),Object(O.a)(e.content),Object(N.jsx)("p",{id:"cont".concat(a),className:"mt-2 m-0 text-muted"})]}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:e.likes.length})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:e.comments.length})}),Object(N.jsxs)(m.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center",children:[Object(N.jsx)(b.a,{size:"small",color:"primary","aria-label":"View",onClick:()=>{j.a.push("/blog/"+t.id[a])},className:E.button,children:Object(N.jsx)(n.a,{children:"play_circle_outline"})}),Object(N.jsx)(b.a,{size:"small",color:"secondary","aria-label":"Edit",onClick:()=>{console.log("/"+V.uid+"/editblog?bid="+t.id[a]),j.a.push("/"+V.uid+"/editblog?bid="+t.id[a])},className:E.button,children:Object(N.jsx)(n.a,{children:"edit_icon"})}),Object(N.jsx)(b.a,{size:"small",color:"error","aria-label":"Delete",onClick:()=>{g.a.delete("/b/"+t.id[a]).then((()=>{window.location.reload()}))},className:Object(x.default)(E.button,E.delete),children:Object(N.jsx)(n.a,{children:"delete"})})]})]})},t.id[a])))})}),Object(N.jsx)("div",{children:Object(N.jsx)(d.a,{className:"mb-12"})})]})}}}]);
=======
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[28],{1698:function(e,a,t){"use strict";var s=t(7),c=t(2),i=t(0),r=(t(4),t(5)),l=t(9),o=t(592),n=t(12),d=i.forwardRef((function(e,a){var t=e.children,l=e.classes,d=e.className,m=e.color,b=void 0===m?"default":m,j=e.component,h=void 0===j?"button":j,x=e.disabled,u=void 0!==x&&x,g=e.disableFocusRipple,p=void 0!==g&&g,O=e.focusVisibleClassName,N=e.size,v=void 0===N?"large":N,y=e.variant,f=void 0===y?"round":y,k=Object(s.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(o.a,Object(c.a)({className:Object(r.default)(l.root,d,"round"!==f&&l.extended,"large"!==v&&l["size".concat(Object(n.a)(v))],u&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[b]),component:h,disabled:u,focusRipple:!p,focusVisibleClassName:Object(r.default)(l.focusVisible,O),ref:a},k),i.createElement("span",{className:l.label},t))}));a.a=Object(l.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},2178:function(e,a,t){"use strict";t.r(a);var s=t(14),c=t(11),i=t(0),r=t(1309),l=t(1340),o=t(442),n=t(1356),d=t(1360),m=t(589),b=t(1698),j=t(29),h=t(605),x=t(5),u=t(52),g=(t(22),t(79)),p=t(350),O=t(1600),N=t(1);const v=Object(h.a)((e=>{let a=e.palette;return{cart:{minWidth:900,overflowX:"scroll"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)},cardLoading:{minWidth:200,borderRadius:12,margin:"1rem"},delete:{background:a.error.main,color:a.error.contrastText}}})),y=[{t:"Peligros del abuso de la PC"},{t:"La decoracion: un reflejo de nuestra mente"},{t:"El metro y la m\xfasica: efecto sobre las personas"},{t:"Sonoroterapia: terapia con sonidos calmantes"}];a.default=()=>{const e=Object(i.useState)(),a=Object(s.a)(e,2),t=a[0],c=a[1],h=Object(i.useState)(y),f=Object(s.a)(h,2),k=(f[0],f[1],Object(i.useState)(!0)),w=Object(s.a)(k,2),C=w[0],z=w[1],S=Object(i.useState)(),R=Object(s.a)(S,2),V=(R[0],R[1],Object(u.a)().user),E=v();return Object(i.useEffect)((()=>{g.a.get("/t/"+V.uid+"/b").then((e=>{console.log(e.data),c(e.data),z(!1)})).then((()=>console.log("Blogs descargados")))}),[]),Object(N.jsxs)(r.a,{elevation:3,className:Object(x.default)("m-sm-30",E.cart),children:[Object(N.jsxs)("div",{className:"py-4 px-4",children:[Object(N.jsx)(l.a,{variant:"contained",color:"secondary",className:"mb-4 x-center",onClick:()=>j.a.push("/"+V.uid+"/dashboard"),children:"Volver al escritorio"}),Object(N.jsxs)("div",{className:"flex items-center mb-4 px-4",children:[Object(N.jsx)(o.a,{variant:"outlined",placeholder:"Buscar por t\xedtulo",className:"flex-grow",size:"small"}),Object(N.jsxs)(l.a,{className:"mx-3",variant:"contained",color:"primary",onClick:()=>{},children:[Object(N.jsx)(n.a,{className:"mr-3",children:"search"}),"Buscar"]}),Object(N.jsxs)(l.a,{className:"mx-3",variant:"contained",color:"secondary",onClick:()=>{j.a.push("/"+V.uid+"/newblog")},children:[Object(N.jsx)(n.a,{className:"mr-3",children:"note_add"}),"Escribir nueva entrada"]})]}),Object(N.jsx)(d.a,{}),Object(N.jsx)("div",{className:"py-2"}),Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3}),Object(N.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,children:Object(N.jsx)("h6",{className:"m-0",children:"Contenido"})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Likes"})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Comentarios"})}),Object(N.jsx)(m.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:"Editar"})})]})]}),Object(N.jsx)(d.a,{}),C?Object(N.jsx)(p.a,{}):Object(N.jsx)(N.Fragment,{children:0===t.id.length?Object(N.jsx)("h3",{align:"center",className:"m-5",children:"No hay blogs a mostrar..."}):Object(N.jsx)(N.Fragment,{children:t.data.map(((e,a)=>Object(N.jsx)("div",{className:"py-4 px-4",children:Object(N.jsxs)(m.a,{container:!0,alignItems:"center",children:[Object(N.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3,children:Object(N.jsx)("div",{className:"flex items-center",children:Object(N.jsx)("div",{className:"px-4",children:Object(N.jsx)("img",{className:"border-radius-4 w-full",height:"200",width:"200",src:"/src/assets/images/blog/terapia2.jpg",alt:e.title})})})}),Object(N.jsxs)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,children:[Object(N.jsx)("h6",{className:"m-0",children:e.title}),Object(O.a)(e.content),Object(N.jsx)("p",{id:"cont".concat(a),className:"mt-2 m-0 text-muted"})]}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:e.likes.length})}),Object(N.jsx)(m.a,{item:!0,lg:1,md:1,sm:1,xs:1,className:"text-center",children:Object(N.jsx)("h6",{className:"m-0",children:e.comments.length})}),Object(N.jsxs)(m.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center",children:[Object(N.jsx)(b.a,{size:"small",color:"primary","aria-label":"View",onClick:()=>{j.a.push("/blog/"+t.id[a])},className:E.button,children:Object(N.jsx)(n.a,{children:"play_circle_outline"})}),Object(N.jsx)(b.a,{size:"small",color:"secondary","aria-label":"Edit",onClick:()=>{console.log("/"+V.uid+"/editblog?bid="+t.id[a]),j.a.push("/"+V.uid+"/editblog?bid="+t.id[a])},className:E.button,children:Object(N.jsx)(n.a,{children:"edit_icon"})}),Object(N.jsx)(b.a,{size:"small",color:"error","aria-label":"Delete",onClick:()=>{g.a.delete("/b/"+t.id[a]).then((()=>{window.location.reload()}))},className:Object(x.default)(E.button,E.delete),children:Object(N.jsx)(n.a,{children:"delete"})})]})]})},t.id[a])))})}),Object(N.jsx)("div",{children:Object(N.jsx)(d.a,{className:"mb-12"})})]})}}}]);
>>>>>>> d4d15506fbb0354fffab29ad83932d9dca1231cf:build/static/js/28.7ecd6308.chunk.js
