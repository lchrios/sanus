(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[27],{1520:function(e,t,s){"use strict";var a=s(14),c=s(11),i=s(0),n=s(29),l=s(1377),r=s(589),d=s(1340),j=s(1309),o=s(1356),b=s(1300),m=s(605),x=s(5),h=s(52),O=(s(79),s(350)),p=s(1);const u=Object(m.a)((e=>{e.palette;let t=Object(c.a)(e,["palette"]);return{close:{padding:t.spacing(.5)},sidenav:{zIndex:91,marginTop:-345,paddingTop:74,paddingBottom:600,[t.breakpoints.down("sm")]:{marginTop:-50}}}})),g=[{title:"sesiones",icon:"date_range",route:"sessions"},{title:"Buscar",icon:"search",route:"browse"}];t.a=({therapist:e,loading:t,url:s})=>{const c=Object(h.a)().user,m=u(),f=Object(i.useState)(!1),v=Object(a.a)(f,2);v[0],v[1];const N=Object(i.useState)(!1),y=Object(a.a)(N,2);y[0],y[1];return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:Object(x.default)("flex-column text-white items-center overflow-hidden",m.sidenav),children:[t?Object(p.jsx)(O.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{className:"h-84 w-84",src:s}),Object(p.jsx)("p",{className:"",children:c.displayName||c.email}),Object(p.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-6",children:[Object(p.jsxs)("div",{className:"flex-grow",children:[Object(p.jsx)("p",{className:"uppercase mb-1",children:"Edad"}),Object(p.jsx)("h4",{className:"font-medium",children:c.age})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"uppercase mb-1",children:"Telefono"}),Object(p.jsx)("a",{className:"font-medium h5",children:c.phone})]}),Object(p.jsx)("div",{})]})]}),Object(p.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(p.jsxs)(r.a,{container:!0,spacing:3,children:[Object(p.jsx)(d.a,{onClick:()=>n.a.push("/"+c.uid+"/home"),children:Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(j.a,{className:"bg-secondary w-104 h-104 flex justify-center items-center",children:Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(o.a,{children:"home"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"pt-4",children:"Home"})]})})})}),g.map(((e,t)=>Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{onClick:()=>{n.a.push("/".concat(c.uid,"/").concat(e.route))},children:Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(j.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(p.jsxs)("div",{className:"text-muted text-center",children:[Object(p.jsx)(o.a,{children:e.icon}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"pt-4",children:e.title})]})})})})},t)))]}),Object(p.jsx)("div",{className:"py-4"}),t?Object(p.jsx)(r.a,{container:!0,direction:"column",alignItems:"center",children:Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(b.a,{})})}):Object(p.jsx)("div",{className:"flex items-center justify-center text-primary",style:{display:void 0!==e?"block":"none"},children:Object(p.jsxs)(d.a,{onClick:()=>{},children:[Object(p.jsx)(o.a,{children:"sentiment_very_satisfied"}),Object(p.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Iniciar terapia"})]})}),Object(p.jsx)("div",{className:"py-2"})]})]})})}},2195:function(e,t,s){"use strict";s.r(t);var a=s(14),c=s(11),i=s(0),n=s(112),l=s(5),r=s(1295),d=s(1375),j=s(607),o=s(1356),b=s(1340),m=s(1309),x=s(254),h=s(1296),O=s(605),p=s(1520),u=s(52),g=s(29),f=s(1767),v=s(589),N=s(1300),y=s(441),w=s(442),k=s(53),S=s(1679),B=s.n(S),z=s(79),C=s(1);var R=({toggleSidenav:e})=>{const t=Object(k.a)(),s=Object(i.useState)(),c=Object(a.a)(s,2),n=c[0],l=c[1],d=Object(i.useState)(),b=Object(a.a)(d,2),m=(b[0],b[1]),x=Object(i.useState)(!0),h=Object(a.a)(x,2),O=h[0],p=h[1],g=Object(r.a)(t.breakpoints.down("sm"));var S=Object(u.a)().user;Object(i.useEffect)((()=>{z.a.get("/u/"+S.uid+"/s").then((e=>{l(e.data.data),m(e.data.id),p(!1)}))}),[]);const R=[{name:"status",label:"Estado de la sesi\xf3n",options:{filter:!0,customBodyRenderLite:e=>{if(!n[e].payed)return Object(C.jsx)("small",{className:"capitalize text-white bg-error border-radius-4 px-2 py-2px",children:"No pagada"});switch(n[e].state){case 1:return Object(C.jsx)("small",{className:"capitalize text-white bg-green border-radius-4 px-2 py-2px",children:"Completada"});case 0:return Object(C.jsx)("small",{className:"capitalize bg-secondary border-radius-4 px-2 py-2px",children:"Pendiente"});case-1:return Object(C.jsx)("small",{className:"capitalize text-white bg-error border-radius-4 px-2 py-2px",children:"Perdida"});default:return Object(C.jsx)("small",{className:"capitalize text-white bg-error border-radius-4 px-2 py-2px",children:"Error"})}}}},{name:"customerName",label:"Terapeuta",options:{filter:!0,customBodyRenderLite:e=>Object(C.jsx)("span",{className:"ellipsis",children:n[e].ther_name})}},{name:"date",label:"Hora",options:{filter:!0,customBodyRenderLite:e=>Object(C.jsx)("span",{className:"ellipsis pr-5",children:new Date(new Date(n[e].start).getTime()+6e4*(new Date).getTimezoneOffset()).toTimeString()})}},{name:"date",label:"Fecha",options:{filter:!0,customBodyRenderLite:e=>Object(C.jsx)("span",{className:"ellipsis pr-5",children:new Date(n[e].start).toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})}},{name:"tipo_pago",label:"Pagado con",options:{filter:!0,customBodyRenderLite:e=>Object(C.jsx)("img",{className:"overflow-hidden",style:{width:"50px"},src:"card"===n[e].pay_type?"/assets/images/payment-methods/visa.png":"/assets/images/payment-methods/oxxo.png",alt:"master card"})}},{name:"total",label:"Costo de la sesi\xf3n",options:{filter:!0,sort:!0,hint:"El costo de la sesi\xf3n se muesta en pesos mexicanos (MXN)",customBodyRenderLite:e=>Object(C.jsxs)("span",{className:"full-width",children:["$",n[e].cost/100]})}},{name:"action",label:"Ayuda",options:{filter:!0,customBodyRenderLite:e=>Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("div",{className:"flex-grow"}),Object(C.jsx)(f.a,{title:"Dudas y aclaraciones",children:Object(C.jsx)(j.a,{children:Object(C.jsx)(o.a,{color:"error",fontSize:"small",children:"priority_high"})})})]})}}];return Object(C.jsx)("div",{className:"m-sm-30",children:O?Object(C.jsx)(v.a,{container:!0,direction:"column",alignItems:"center",children:Object(C.jsx)(v.a,{item:!0,children:Object(C.jsx)(N.a,{color:"secondary"})})}):Object(C.jsxs)("div",{className:"overflow-auto",children:[Object(C.jsx)("div",{className:"flex justify-end menu-button",children:Object(C.jsx)(j.a,{onClick:e,children:Object(C.jsx)(o.a,{className:g?"":"hidden",children:"menu"})})}),Object(C.jsx)("div",{className:"min-w-300",children:Object(C.jsx)(B.a,{title:"Mis sesiones",data:n,columns:R,options:{filterType:"textField",responsive:"vertical",selectableRows:"none",filter:!0,download:!1,print:!1,viewColumns:!0,elevation:3,pagination:!0,rowsPerPageOptions:[10,20,40,80,100],onRowsDelete:e=>console.log(e),customSearchRender:(e,t,s,a)=>Object(C.jsx)(y.a,{appear:!0,in:!0,timeout:300,children:Object(C.jsx)(w.a,{variant:"outlined",size:"small",fullWidth:!0,onChange:({target:{value:e}})=>t(e),InputProps:{style:{paddingRight:0},startAdornment:Object(C.jsx)(o.a,{className:"mr-2",fontSize:"small",children:"search"}),endAdornment:Object(C.jsx)(j.a,{onClick:s,children:Object(C.jsx)(o.a,{fontSize:"small",children:"clear"})})}})})}})})]})})},T=s(366);const L=Object(O.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:0}}}}));t.default=Object(h.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(a.a)(e,2),s=t[0],c=t[1],h=Object(u.a)().user,O=Object(x.a)(),f=L(),v=Object(r.a)(O.breakpoints.down("sm")),N=()=>{c(!s)};return Object(i.useEffect)((()=>{c(!1)}),[v]),v?Object(C.jsx)("div",{className:"relative",children:Object(C.jsxs)(n.n,{children:[Object(C.jsxs)(n.m,{className:"mt-4 overflow-hidden",width:"300px",open:s,toggleSidenav:N,children:[Object(C.jsx)("div",{className:Object(l.default)("bg-primary text-right",f.headerBG),children:Object(C.jsx)(d.a,{smUp:!0,children:Object(C.jsx)(j.a,{onClick:N,children:Object(C.jsx)(o.a,{className:"text-white mt-2",children:"clear"})})})}),Object(C.jsx)(p.a,{})]}),Object(C.jsxs)(n.o,{children:[Object(C.jsx)("div",{className:Object(l.default)("bg-primary",f.headerBG)}),Object(C.jsx)(R,{toggleSidenav:N})]})]})}):Object(C.jsx)(i.Fragment,{children:Object(C.jsxs)("div",{className:"m-sm-30",children:[Object(C.jsx)("div",{className:"mb-sm-30"}),Object(C.jsx)("div",{children:Object(C.jsx)(b.a,{className:"x-center",color:"secondary",variant:"contained",onClick:()=>g.a.push("/"+h.uid+"/home"),children:"Volver al escritorio"})}),Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"Tus sesiones"})}),Object(C.jsx)("div",{children:Object(C.jsx)(m.a,{children:Object(C.jsx)(T.a,{children:Object(C.jsx)(R,{})})})})]})})}))}}]);