(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[24],{1519:function(e,t,s){"use strict";var a=s(14),c=s(11),i=s(0),n=s.n(i),l=s(38),r=s(1376),d=s(591),j=s(1340),o=s(1309),m=s(1356),b=s(1300),h=s(441),x=s(5),O=s(51),p=s(1);const u=Object(h.a)((e=>{e.palette;let t=Object(c.a)(e,["palette"]);return{close:{padding:t.spacing(.5)},sidenav:{zIndex:91,marginTop:-345,paddingTop:74,[t.breakpoints.down("sm")]:{marginTop:-410}}}})),N=[{title:"sesiones",icon:"date_range",route:"sessions"},{title:"Buscar",icon:"search",route:"browse"}];t.a=({therapist:e,loading:t})=>{const s=Object(O.a)().user,c=u(),i=n.a.useState(!1),h=Object(a.a)(i,2);h[0],h[1];const f=n.a.useState(!1),v=Object(a.a)(f,2);v[0],v[1];return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:Object(x.default)("flex-column items-center",c.sidenav),children:[Object(p.jsx)(r.a,{className:"h-84 w-84 mb-5",src:""}),Object(p.jsx)("p",{className:"text-white",children:s.displayName||s.email}),Object(p.jsx)("div",{className:"py-3"}),Object(p.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-11",children:[Object(p.jsxs)("div",{className:"flex-grow",children:[Object(p.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Edad"}),Object(p.jsx)("h4",{className:"font-medium text-white",children:s.age})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Telefono"}),Object(p.jsx)("a",{className:"font-medium text-white h5",children:s.phone})]}),Object(p.jsx)("div",{})]}),Object(p.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(p.jsxs)(d.a,{container:!0,spacing:3,children:[Object(p.jsx)(j.a,{onClick:()=>l.a.push("/"+s.uid+"/home"),children:Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(o.a,{className:"bg-secondary w-104 h-104 flex justify-center items-center",children:Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(m.a,{children:"home"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"pt-4",children:"Home"})]})})})}),N.map(((e,t)=>Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{onClick:()=>{l.a.push("/".concat(s.uid,"/").concat(e.route))},children:Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(o.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(p.jsxs)("div",{className:"text-muted text-center",children:[Object(p.jsx)(m.a,{children:e.icon}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"pt-4",children:e.title})]})})})})},t)))]}),Object(p.jsx)("div",{className:"py-4"}),t?Object(p.jsx)(d.a,{container:!0,direction:"column",alignItems:"center",children:Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(b.a,{})})}):Object(p.jsx)("div",{className:"flex items-center justify-center text-primary",style:{display:void 0!==e?"block":"none"},children:Object(p.jsxs)(j.a,{onClick:()=>{},children:[Object(p.jsx)(m.a,{children:"sentiment_very_satisfied"}),Object(p.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Iniciar terapia"})]})}),Object(p.jsx)("div",{className:"py-2"})]})]})})}},2189:function(e,t,s){"use strict";s.r(t);var a=s(14),c=s(11),i=s(0),n=s(112),l=s(5),r=s(1295),d=s(1374),j=s(608),o=s(1356),m=s(1340),b=s(1309),h=s(253),x=s(1296),O=s(441),p=s(1519),u=s(51),N=s(38),f=s(1758),v=s(591),g=s(1300),y=s(442),w=s(443),k=s(1674),B=s.n(k),S=(s(22),s(97)),R=s(1);const C=[{_id:"lkfjdfjdsjdslgkfjdskjfds",date:new Date,customerName:"Ben Schieldman",productName:"Bit Bass Headphone",method:"PayPal",total:15.25,status:"tomada"},{_id:"fkjjirewoigkjdhvkcxyhuig",date:new Date,customerName:"Joyce Watson",productName:"Comlion Watch",method:"Tarjeta de cr\xe9dito",total:75.25,status:"perdida"},{_id:"fdskjkljicuviosduisjd",date:new Date,customerName:"Kayle Brown",productName:"Beats Headphone",method:"Dep\xf3sito",total:45.25,status:"pendiente"},{_id:"fdskfjdsuoiucrwevbgd",date:new Date,customerName:"Ven Helsing",productName:"BMW Bumper",method:"Dep\xf3sito",total:2145.25,status:"tomada"}];var T=({toggleSidenav:e})=>{const t=Object(i.useState)(C),s=Object(a.a)(t,2),c=s[0],n=s[1],l=Object(i.useState)(),r=Object(a.a)(l,2),d=r[0],m=r[1],b=Object(i.useState)(!0),h=Object(a.a)(b,2),x=h[0],O=h[1];var p=Object(u.a)().user;Object(i.useEffect)((()=>{S.a.get("/u/"+p.uid+"/s").then((e=>{n(e.data.data),console.log(e.data.id),m(e.data.id),O(!1)}))}),[]);const N=[{name:"_id",label:"ID de la Sesi\xf3n",options:{customBodyRenderLite:e=>Object(R.jsx)("span",{className:"ellipsis",children:d[e]})}},{name:"customerName",label:"Terapeuta",options:{filter:!0,customBodyRenderLite:e=>Object(R.jsx)("span",{className:"ellipsis",children:c[e].thername})}},{name:"productName",label:"Tipo de sesi\xf3n",options:{filter:!0,customBodyRenderLite:e=>Object(R.jsx)("span",{className:"ellipsis",children:c[e].tipo})}},{name:"date",label:"Fecha",options:{filter:!0,customBodyRenderLite:e=>Object(R.jsx)("span",{className:"ellipsis",children:c[e].start})}},{name:"status",label:"Estado de la sesi\xf3n",options:{filter:!0,customBodyRenderLite:e=>{let t=c[e].state;switch(t){case 1:return Object(R.jsx)("small",{className:"capitalize text-white bg-green border-radius-4 px-2 py-2px",children:t});case 0:return Object(R.jsx)("small",{className:"capitalize bg-secondary border-radius-4 px-2 py-2px",children:t});case-1:return Object(R.jsx)("small",{className:"capitalize text-white bg-error border-radius-4 px-2 py-2px",children:t})}}}},{name:"method",label:"M\xe9todo de pago",options:{filter:!0,customBodyRenderLite:e=>Object(R.jsx)("span",{className:"",children:c[e].pay_met})}},{name:"total",label:"Costo de la sesi\xf3n",options:{filter:!0,customBodyRenderLite:e=>Object(R.jsxs)("span",{children:["$",c[e].cost]})}},{name:"action",label:" ",options:{filter:!1,customBodyRenderLite:e=>Object(R.jsxs)("div",{className:"flex items-center",children:[Object(R.jsx)("div",{className:"flex-grow"}),Object(R.jsx)(f.a,{title:"Dudas y aclaraciones",children:Object(R.jsx)(j.a,{children:Object(R.jsx)(o.a,{color:"error",fontSize:"small",children:"priority_high"})})})]})}}];return Object(R.jsx)("div",{className:"m-sm-30",children:x?Object(R.jsx)(v.a,{container:!0,direction:"column",alignItems:"center",children:Object(R.jsx)(v.a,{item:!0,children:Object(R.jsx)(g.a,{color:"secondary"})})}):Object(R.jsxs)("div",{className:"overflow-auto",children:[Object(R.jsx)("div",{className:"hide-on-pc flex justify-end menu-button",children:Object(R.jsx)(j.a,{onClick:e,children:Object(R.jsx)(o.a,{className:"",children:"menu"})})}),Object(R.jsx)("div",{className:"min-w-300",children:Object(R.jsx)(B.a,{title:"Mis sesiones",data:c,columns:N,options:{filterType:"textField",responsive:"vertical",selectableRows:"none",filter:!1,download:!1,print:!1,viewColumns:!1,elevation:0,pagination:!1,rowsPerPageOptions:[10,20,40,80,100],onRowsDelete:e=>console.log(e),customSearchRender:(e,t,s,a)=>Object(R.jsx)(y.a,{appear:!0,in:!0,timeout:300,children:Object(R.jsx)(w.a,{variant:"outlined",size:"small",fullWidth:!0,onChange:({target:{value:e}})=>t(e),InputProps:{style:{paddingRight:0},startAdornment:Object(R.jsx)(o.a,{className:"mr-2",fontSize:"small",children:"search"}),endAdornment:Object(R.jsx)(j.a,{onClick:s,children:Object(R.jsx)(o.a,{fontSize:"small",children:"clear"})})}})})}})})]})})},_=s(366);const D=Object(O.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:0}}}}));t.default=Object(x.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(a.a)(e,2),s=t[0],c=t[1],x=Object(u.a)().user,O=Object(h.a)(),f=D(),v=Object(r.a)(O.breakpoints.down("sm")),g=()=>{c(!s)};return Object(i.useEffect)((()=>{c(!1)}),[v]),v?Object(R.jsx)("div",{className:"relative ",children:Object(R.jsxs)(n.n,{children:[Object(R.jsxs)(n.m,{width:"300px",open:s,toggleSidenav:g,children:[Object(R.jsx)("div",{className:Object(l.default)("bg-primary text-right",f.headerBG),children:Object(R.jsx)(d.a,{smUp:!0,children:Object(R.jsx)(j.a,{onClick:g,children:Object(R.jsx)(o.a,{className:"text-white mt-2",children:"clear"})})})}),Object(R.jsx)(p.a,{})]}),Object(R.jsxs)(n.o,{children:[Object(R.jsx)("div",{className:Object(l.default)("bg-primary",f.headerBG)}),Object(R.jsx)(T,{toggleSidenav:g})]})]})}):Object(R.jsx)(i.Fragment,{children:Object(R.jsxs)("div",{className:"m-sm-30",children:[Object(R.jsx)("div",{className:"mb-sm-30"}),Object(R.jsx)("div",{children:Object(R.jsx)(m.a,{className:"x-center",color:"secondary",variant:"contained",onClick:()=>N.a.push("/"+x.uid+"/home"),children:"Volver al escritorio"})}),Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Tus sesiones"})}),Object(R.jsx)("div",{children:Object(R.jsx)(b.a,{children:Object(R.jsx)(_.a,{children:Object(R.jsx)(T,{})})})})]})})}))}}]);