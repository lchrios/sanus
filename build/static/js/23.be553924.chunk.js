(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[23],{1517:function(e,t,c){"use strict";var s=c(14),a=c(11),i=c(0),n=c.n(i),l=c(32),r=c(1377),d=c(591),j=c(1340),o=c(1309),b=c(1356),m=c(1300),h=c(442),x=c(5),O=c(52),u=c(1);const p=Object(h.a)((e=>{e.palette;let t=Object(a.a)(e,["palette"]);return{close:{padding:t.spacing(.5)},sidenav:{zIndex:91,marginTop:-345,paddingTop:150,paddingBottom:150,[t.breakpoints.down("md")]:{marginTop:-50}}}})),v=[{title:"sesiones",icon:"date_range",route:"sessions"},{title:"Buscar",icon:"search",route:"browse"}];t.a=({therapist:e,loading:t})=>{const c=Object(O.a)().user,a=p(),i=n.a.useState(!1),h=Object(s.a)(i,2);h[0],h[1];const N=n.a.useState(!1),f=Object(s.a)(N,2);f[0],f[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:Object(x.default)("flex-column items-center overflow-hidden",a.sidenav),children:[Object(u.jsx)(r.a,{className:"h-84 w-84",src:""}),Object(u.jsx)("p",{className:"",children:c.displayName||c.email}),Object(u.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-6",children:[Object(u.jsxs)("div",{className:"flex-grow",children:[Object(u.jsx)("p",{className:"uppercase mb-1",children:"Edad"}),Object(u.jsx)("h4",{className:"font-medium",children:c.age})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"uppercase mb-1",children:"Telefono"}),Object(u.jsx)("a",{className:"font-medium h5",children:c.phone})]}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(u.jsxs)(d.a,{container:!0,spacing:3,children:[Object(u.jsx)(j.a,{onClick:()=>l.a.push("/"+c.uid+"/home"),children:Object(u.jsx)(d.a,{item:!0,children:Object(u.jsx)(o.a,{className:"bg-secondary w-104 h-104 flex justify-center items-center",children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)(b.a,{children:"home"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"pt-4",children:"Home"})]})})})}),v.map(((e,t)=>Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{onClick:()=>{l.a.push("/".concat(c.uid,"/").concat(e.route))},children:Object(u.jsx)(d.a,{item:!0,children:Object(u.jsx)(o.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(u.jsxs)("div",{className:"text-muted text-center",children:[Object(u.jsx)(b.a,{children:e.icon}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"pt-4",children:e.title})]})})})})},t)))]}),Object(u.jsx)("div",{className:"py-4"}),t?Object(u.jsx)(d.a,{container:!0,direction:"column",alignItems:"center",children:Object(u.jsx)(d.a,{item:!0,children:Object(u.jsx)(m.a,{})})}):Object(u.jsx)("div",{className:"flex items-center justify-center text-primary",style:{display:void 0!==e?"block":"none"},children:Object(u.jsxs)(j.a,{onClick:()=>{},children:[Object(u.jsx)(b.a,{children:"sentiment_very_satisfied"}),Object(u.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Iniciar terapia"})]})}),Object(u.jsx)("div",{className:"py-2"})]})]})})}},2189:function(e,t,c){"use strict";c.r(t);var s=c(14),a=c(11),i=c(0),n=c(1295),l=c(1375),r=c(608),d=c(1356),j=c(1340),o=c(255),b=c(1296),m=c(5),h=c(442),x=c(112),O=c(1673),u=c.n(O),p=c(1377),v=c(443),N=c(444),f=c(32),g=c(52),y=c(90),w=c(1);var k=({toggleSidenav:e})=>{const t=Object(i.useState)([]),c=Object(s.a)(t,2),a=c[0],n=c[1],l=Object(i.useState)([]),j=Object(s.a)(l,2),o=j[0],b=j[1],m=Object(i.useState)(),h=Object(s.a)(m,2),x=h[0],O=h[1],f=Object(g.a)().user;Object(i.useEffect)((()=>{y.a.get("/t").then((e=>{n(e.data.data),b(e.data.id)})),y.a.get("/u/".concat(f.uid,"/t")).then((e=>{200===e.status&&void 0!==e.data.id&&O(e.data.id)}))}),[]);const k=[{name:"name",label:"Nombre",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsxs)("div",{className:"flex items-center",children:[Object(w.jsx)(p.a,{className:"w-48 h-48",src:null===t||void 0===t?void 0:t.img}),Object(w.jsxs)("div",{className:"ml-3",children:[Object(w.jsx)("h5",{className:"my-0 text-15",children:null===t||void 0===t?void 0:t.name}),Object(w.jsx)("small",{className:"text-muted",children:null===t||void 0===t?void 0:t.email})]})]})}}},{name:"address",label:"Consultorio",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"ellipsis",children:(null===t||void 0===t?void 0:t.address)||"Sin direccion"})}}},{name:"exp",label:"Experiencia",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"",children:null===t||void 0===t?void 0:t.exp})}}},{name:"ced",label:"Cedula",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"ellipsis",children:null===t||void 0===t?void 0:t.cedula})}}},{name:"action",label:"Seleccionar terapeuta ",options:{filter:!1,customBodyRenderLite:e=>Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)("div",{className:""}),Object(w.jsx)(r.a,{onClick:()=>{y.a.post("/u/".concat(f.uid,"/t/").concat(o[e])).then((t=>{console.log("Terapeutas reasignados",o[e]),O(o[e])})).catch((e=>{console.error(e)}))},children:Object(w.jsx)(d.a,{children:x===o[e]?"check_circle":"control_point"})})]})}}];return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"m-sm-30",children:Object(w.jsxs)("div",{className:"overflow-auto",children:[Object(w.jsx)("div",{className:"hide-on-pc flex justify-end menu-button",children:Object(w.jsx)(r.a,{onClick:e,children:Object(w.jsx)(d.a,{className:"",children:"menu"})})}),Object(w.jsx)("div",{className:"min-w-300",children:Object(w.jsx)(u.a,{title:"Todos los terapeutas",data:a,columns:k,options:{filterType:"textField",responsive:"simple",selectableRows:"none",filter:!1,download:!1,print:!1,pagination:!1,viewColumns:!1,elevation:0,rowsPerPageOptions:[10,20,40,80,100],customSearchRender:(e,t,c,s)=>Object(w.jsx)(v.a,{appear:!0,in:!0,timeout:300,children:Object(w.jsx)(N.a,{variant:"outlined",size:"small",fullWidth:!0,onChange:({target:{value:e}})=>t(e),InputProps:{style:{paddingRight:0},startAdornment:Object(w.jsx)(d.a,{className:"mr-2",fontSize:"large",children:"search"}),endAdornment:Object(w.jsx)(r.a,{onClick:c,children:Object(w.jsx)(d.a,{fontSize:"small",children:"clear"})})}})})}})})]})})})},S=c(1517);const C=Object(h.a)((e=>{e.palette,Object(a.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:0}}}}));t.default=Object(b.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(s.a)(e,2),c=t[0],a=t[1],b=Object(g.a)().user,h=Object(o.a)(),O=C(),u=Object(n.a)(h.breakpoints.down("sm")),p=()=>{a(!c)};return Object(i.useEffect)((()=>{a(!1)}),[u]),u?Object(w.jsx)("div",{className:"relative ",children:Object(w.jsxs)(x.n,{children:[Object(w.jsxs)(x.m,{width:"300px",open:c,toggleSidenav:p,children:[Object(w.jsx)("div",{className:Object(m.default)("bg-primary text-right",O.headerBG),children:Object(w.jsx)(l.a,{smUp:!0,children:Object(w.jsx)(r.a,{onClick:p,children:Object(w.jsx)(d.a,{className:"text-white mt-2",children:"clear"})})})}),Object(w.jsx)(S.a,{})]}),Object(w.jsxs)(x.o,{children:[Object(w.jsx)("div",{className:Object(m.default)("bg-primary",O.headerBG)}),Object(w.jsx)(k,{toggleSidenav:p})]})]})}):Object(w.jsx)(i.Fragment,{children:Object(w.jsxs)("div",{className:"m-sm-30",children:[Object(w.jsx)("div",{className:"mb-sm-30"}),Object(w.jsx)("div",{children:Object(w.jsx)(j.a,{className:"x-center",color:"secondary",variant:"contained",onClick:()=>f.a.push("/"+b.uid+"/home"),children:"Volver al escritorio"})}),Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Encuentra a tu terapeuta favorito"})}),Object(w.jsx)(k,{})]})})}))}}]);