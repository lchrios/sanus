<<<<<<< HEAD:build/static/js/25.d394d4a7.chunk.js
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[25],{2150:function(e,t){},2189:function(e,t,c){"use strict";c.r(t);var s=c(14),a=c(0),l=c(112),r=c(11),j=c(1376),n=c(608),i=c(1357),d=c(1342),b=c(1344),x=c(442),h=c(5),m=c(1);const O=Object(x.a)((e=>{e.palette,Object(r.a)(e,["palette"]);return{topbar:{borderTopRightRadius:4,borderTopLeftRadius:4}}}));var o=({toggleSidenav:e,handleMasterCheckbox:t,masterCheckbox:c})=>{const s=O();return Object(m.jsxs)("div",{className:Object(h.default)("py-1 mx-1 flex items-center relative bg-primary",s.topbar),children:[Object(m.jsx)(j.a,{smUp:!0,children:Object(m.jsx)(n.a,{className:"text-white",onClick:e,children:Object(m.jsx)(i.a,{children:"short_text"})})}),Object(m.jsx)(d.a,{className:"text-white ml-4",control:Object(m.jsx)(b.a,{checked:c,onChange:t,color:"secondary"}),label:"All"}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"delete"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"folder_special"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"archive"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"error"})})]})},u=c(22),p=c.n(u);var N=c(1296),f=c(1341),v=c(53),g=c(2054),k=c(2055),w=c(2056),C=c(2126),y=c.n(C),S=c(1378),M=c(1436),T=c(2164),E=c(129);var L=({messageList:e,handleCheckboxSelection:t})=>{const c=Object(a.useState)(!1),r=Object(s.a)(c,2),j=r[0],d=r[1];return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"mx-1 mb-1",children:e.map(((e,c)=>Object(m.jsxs)(g.a,{expanded:j===c,elevation:3,children:[Object(m.jsx)(w.a,{className:"p-0 pl-2 pr-6",children:Object(m.jsxs)("div",{className:"flex items-center w-full px-2",children:[j!==c&&Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(b.a,{checked:e.selected,onChange:e=>t(e,c),color:"secondary"}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{children:"star_border"})})]}),Object(m.jsxs)("div",{className:"flex flex-grow items-center justify-between h-full",onClick:()=>(e=>{d(e!==j&&e)})(c),children:[j===c&&Object(m.jsxs)("div",{className:"flex items-center ml-3",children:[Object(m.jsx)(S.a,{src:e.sender.photo}),Object(m.jsxs)("div",{className:"ml-2",children:[Object(m.jsx)("h5",{className:"mb-0 ml-1 font-normal",children:e.sender.name}),Object(m.jsx)("small",{className:"text-muted",children:Object(T.a)(new Date(e.date).getTime(),"MMMM dd, yyyy")})]})]}),j!==c&&Object(m.jsx)("h5",{className:"mb-0 ml-1 text-14 text-muted font-normal",children:e.sender.name}),Object(m.jsx)("p",{className:"m-0",children:e.subject}),Object(m.jsxs)("small",{className:"text-muted",children:[Object(E.c)(new Date(e.date))," ","ago"]})]}),Object(m.jsxs)(l.k,{menuButton:Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{children:"more_vert"})}),children:[Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"reply"})," Responder"]}),Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"archive"})," "," Guardar"]}),Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"delete"})," Borrar"]})]})]})}),Object(m.jsx)(k.a,{children:Object(m.jsx)("div",{children:y()(e.message)})})]},e.id)))})})},R=c(52),_=c(29),I=c(40);t.default=()=>{const e=Object(R.a)().user,t=Object(a.useState)(!0),c=Object(s.a)(t,2),r=c[0],j=c[1],n=Object(a.useState)(!1),i=Object(s.a)(n,2),d=i[0],b=i[1],x=Object(a.useState)(!1),h=Object(s.a)(x,2),O=h[0],u=h[1],g=Object(a.useState)([]),k=Object(s.a)(g,2),w=k[0],C=k[1],y=Object(v.a)(),S=Object(N.a)(y.breakpoints.down("sm"));Object(a.useEffect)((()=>{S&&b(!1)}),[S]),Object(a.useEffect)((()=>{p.a.get("/api/inbox/all").then((({data:e})=>{r&&C(e)}))}),[r]),Object(a.useEffect)((()=>()=>j(!1)),[]);var M="/"+e.uid+"/dashboard";return Object(m.jsx)("div",{className:"flex m-sm-30",children:Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(l.n,{children:Object(m.jsxs)(l.o,{children:[Object(m.jsx)("div",{className:"mb-10",children:Object(m.jsx)(I.b,{to:M,children:Object(m.jsx)(f.a,{variant:"contained",color:"secondary",className:"x-center",onClick:()=>{console.log("HICISTE CLICK PUTO"),_.a.push(M)},children:"Volver al escritorio"})})}),Object(m.jsx)(o,{masterCheckbox:O,handleMasterCheckbox:e=>{let t=w,c=e.target.checked;c?t.map((e=>(e.selected=!0,e))):t.map((e=>(e.selected=!1,e))),C(t),u(c)},toggleSidenav:()=>{b(!d)}}),Object(m.jsx)(L,{handleCheckboxSelection:(e,t)=>{e.persist();let c=w;c[t].selected=e.target.checked,C([...c])},messageList:w})]})})})})}}}]);
=======
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[25],{2149:function(e,t){},2188:function(e,t,c){"use strict";c.r(t);var s=c(14),a=c(0),l=c(112),r=c(11),j=c(1375),n=c(607),i=c(1356),d=c(1341),b=c(1343),x=c(605),h=c(5),m=c(1);const O=Object(x.a)((e=>{e.palette,Object(r.a)(e,["palette"]);return{topbar:{borderTopRightRadius:4,borderTopLeftRadius:4}}}));var o=({toggleSidenav:e,handleMasterCheckbox:t,masterCheckbox:c})=>{const s=O();return Object(m.jsxs)("div",{className:Object(h.default)("py-1 mx-1 flex items-center relative bg-primary",s.topbar),children:[Object(m.jsx)(j.a,{smUp:!0,children:Object(m.jsx)(n.a,{className:"text-white",onClick:e,children:Object(m.jsx)(i.a,{children:"short_text"})})}),Object(m.jsx)(d.a,{className:"text-white ml-4",control:Object(m.jsx)(b.a,{checked:c,onChange:t,color:"secondary"}),label:"All"}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"delete"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"folder_special"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"archive"})}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{className:"text-white",children:"error"})})]})},u=c(22),p=c.n(u);var N=c(1295),f=c(1340),v=c(53),g=c(2053),k=c(2054),w=c(2055),C=c(2125),y=c.n(C),S=c(1377),M=c(1435),T=c(2163),E=c(129);var L=({messageList:e,handleCheckboxSelection:t})=>{const c=Object(a.useState)(!1),r=Object(s.a)(c,2),j=r[0],d=r[1];return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"mx-1 mb-1",children:e.map(((e,c)=>Object(m.jsxs)(g.a,{expanded:j===c,elevation:3,children:[Object(m.jsx)(w.a,{className:"p-0 pl-2 pr-6",children:Object(m.jsxs)("div",{className:"flex items-center w-full px-2",children:[j!==c&&Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(b.a,{checked:e.selected,onChange:e=>t(e,c),color:"secondary"}),Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{children:"star_border"})})]}),Object(m.jsxs)("div",{className:"flex flex-grow items-center justify-between h-full",onClick:()=>(e=>{d(e!==j&&e)})(c),children:[j===c&&Object(m.jsxs)("div",{className:"flex items-center ml-3",children:[Object(m.jsx)(S.a,{src:e.sender.photo}),Object(m.jsxs)("div",{className:"ml-2",children:[Object(m.jsx)("h5",{className:"mb-0 ml-1 font-normal",children:e.sender.name}),Object(m.jsx)("small",{className:"text-muted",children:Object(T.a)(new Date(e.date).getTime(),"MMMM dd, yyyy")})]})]}),j!==c&&Object(m.jsx)("h5",{className:"mb-0 ml-1 text-14 text-muted font-normal",children:e.sender.name}),Object(m.jsx)("p",{className:"m-0",children:e.subject}),Object(m.jsxs)("small",{className:"text-muted",children:[Object(E.c)(new Date(e.date))," ","ago"]})]}),Object(m.jsxs)(l.k,{menuButton:Object(m.jsx)(n.a,{children:Object(m.jsx)(i.a,{children:"more_vert"})}),children:[Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"reply"})," Responder"]}),Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"archive"})," "," Guardar"]}),Object(m.jsxs)(M.a,{className:"flex items-center",children:[Object(m.jsx)(i.a,{className:"mr-4",children:"delete"})," Borrar"]})]})]})}),Object(m.jsx)(k.a,{children:Object(m.jsx)("div",{children:y()(e.message)})})]},e.id)))})})},R=c(52),_=c(29),I=c(40);t.default=()=>{const e=Object(R.a)().user,t=Object(a.useState)(!0),c=Object(s.a)(t,2),r=c[0],j=c[1],n=Object(a.useState)(!1),i=Object(s.a)(n,2),d=i[0],b=i[1],x=Object(a.useState)(!1),h=Object(s.a)(x,2),O=h[0],u=h[1],g=Object(a.useState)([]),k=Object(s.a)(g,2),w=k[0],C=k[1],y=Object(v.a)(),S=Object(N.a)(y.breakpoints.down("sm"));Object(a.useEffect)((()=>{S&&b(!1)}),[S]),Object(a.useEffect)((()=>{p.a.get("/api/inbox/all").then((({data:e})=>{r&&C(e)}))}),[r]),Object(a.useEffect)((()=>()=>j(!1)),[]);var M="/"+e.uid+"/dashboard";return Object(m.jsx)("div",{className:"flex m-sm-30",children:Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(l.n,{children:Object(m.jsxs)(l.o,{children:[Object(m.jsx)("div",{className:"mb-10",children:Object(m.jsx)(I.b,{to:M,children:Object(m.jsx)(f.a,{variant:"contained",color:"secondary",className:"x-center",onClick:()=>{console.log("HICISTE CLICK PUTO"),_.a.push(M)},children:"Volver al escritorio"})})}),Object(m.jsx)(o,{masterCheckbox:O,handleMasterCheckbox:e=>{let t=w,c=e.target.checked;c?t.map((e=>(e.selected=!0,e))):t.map((e=>(e.selected=!1,e))),C(t),u(c)},toggleSidenav:()=>{b(!d)}}),Object(m.jsx)(L,{handleCheckboxSelection:(e,t)=>{e.persist();let c=w;c[t].selected=e.target.checked,C([...c])},messageList:w})]})})})})}}}]);
>>>>>>> c5097de0ae959b06eef1952a885325a1561e650f:build/static/js/25.26eb7c16.chunk.js
