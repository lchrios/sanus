(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[29],{2183:function(e,t,s){"use strict";s.r(t);var a=s(14),c=s(11),i=s(0),n=s.n(i),l=s(1295),r=s(1375),j=s(608),d=s(1356),m=s(1296),o=s(53),b=s(112),x=s(442),h=s(5),O=s(591),p=s(1300),u=s(1309),g=s(1691),N=s(1360),f=s(1377),v=s(1545),y=s(1546),w=s(1479),z=s(1465),C=s(1340),S=s(32),k=s(1435),_=s(40),L=(s(2174),s(90)),T=s(52),I=s(1);Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const B=Object(x.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)}}}));new Date,(new Date).addHours(1),(new Date).addHours(3);var A=({sessions:e})=>{const t=B();Object(T.a)().user;return Object(I.jsx)(O.a,{container:!0,spacing:3,direction:"column",children:e.data.map(((e,s)=>Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsxs)(u.a,{className:"p-5",children:[Object(I.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(I.jsx)(f.a,{className:"h-56 w-56",src:null===e||void 0===e?void 0:e.img}),Object(I.jsx)("div",{children:Object(I.jsxs)(b.k,{menuButton:Object(I.jsx)(d.a,{className:"cursor-pointer",children:"more_horiz"}),children:[Object(I.jsxs)(k.a,{children:[Object(I.jsx)(d.a,{fontSize:"small",children:" done "}),Object(I.jsx)("span",{className:"pl-4",children:" Marcar como terminado "})]}),Object(I.jsxs)(k.a,{children:[Object(I.jsx)(d.a,{fontSize:"small",children:" account_circle "}),Object(I.jsx)("span",{className:"pl-4",children:" Ver paciente "})]})]})})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h5",{className:"m-0 capitalize",children:null===e||void 0===e?void 0:e.user_name}),Object(I.jsxs)(O.a,{item:!0,children:[Object(I.jsx)("h4",{className:"text-muted mt-2",children:"Fecha pactada:"}),Object(I.jsx)("p",{className:"text-muted",children:null===e||void 0===e?void 0:e.start})]}),Object(I.jsx)("div",{className:"mb-4",children:Object(I.jsxs)(_.b,{className:"flex mb-1 items-center",to:"/",children:[Object(I.jsx)(b.g,{fontSize:"small",className:Object(h.default)("text-14",t.google)}),Object(I.jsx)("span",{className:"ml-2",children:null===e||void 0===e?void 0:e.user_email})]})}),Object(I.jsxs)("div",{className:"flex flex-wrap ",children:[Object(I.jsx)(C.a,{variant:"contained",size:"small",startIcon:Object(I.jsx)(d.a,{children:"face"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5",t.button),children:"Contactar paciente"}),Object(I.jsx)(C.a,{size:"small",variant:"contained",startIcon:Object(I.jsx)(d.a,{children:"visibility"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",t.button),children:"Ver perfil de usuario"})]})]})]})},s)))})},D=s(356),H=s(2048);var E=({users:e})=>e.data.map(((t,s)=>Object(I.jsxs)(O.a,{item:!0,className:"flex items-center mb-4",children:[t.answered?Object(I.jsx)(g.a,{className:"primary",children:Object(I.jsx)("h4",{className:"text-error m-0 font-normal",children:t.name.slice(0,2)})}):Object(I.jsx)(H.a,{badgeContent:"Nuevo",color:"secondary",children:Object(I.jsx)(g.a,{className:"primary",children:Object(I.jsx)("h4",{className:"text-primary m-0 font-normal",children:t.name.slice(0,2)})})}),Object(I.jsxs)("div",{className:"ml-4",children:[Object(I.jsx)("h5",{className:"m-0 mb-1 font-medium",children:t.name}),Object(I.jsx)("p",{className:"m-0 text-muted",children:t.age})]})]},e.id[s])));Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const G=Object(x.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)}}})),P=[{name:"Jorge Rodriguez",location:"Guadalajara, Jalisco",time:new Date,num:1},{name:"Matha Benitez",location:"Monterrey, Nuevo Leon",time:(new Date).addHours(1),num:3},{name:"Carlos Martinez",location:"Aguascalientes, Aguascalientes",time:(new Date).addHours(3),num:2}];var F=()=>{const e=G(),t=Object(T.a)().user,s=Object(i.useState)(P),c=Object(a.a)(s,2);c[0],c[1];return Object(I.jsx)(O.a,{container:!0,spacing:3,direction:"column",children:Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{className:"p-5",children:Object(I.jsxs)("div",{className:"flex-column  items-center   mb-4",children:[Object(I.jsx)(d.a,{className:"w-56 mb-2 ml-2",children:"sentiment_dissatisfied"}),Object(I.jsx)("h3",{className:" capitalize pb-2",children:"Actualmente no tienes ninguna cita agendada"}),Object(I.jsx)("h5",{className:"text-muted",children:"Abre tus horarios para que los usuarios puedan seleccionar alguno de los disponibles"}),Object(I.jsx)("div",{className:" ",children:Object(I.jsx)(C.a,{variant:"contained",startIcon:Object(I.jsx)(d.a,{children:"watch_later"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",e.button),onClick:()=>S.a.push("/"+t.uid+"/schedule"),children:"Abrir horarios"})})]})})})})};const M=Object(x.a)((e=>{let t=e.palette,s=Object(c.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"},showAllPatients:{margin:s.spacing(1)}}})),R=[];var V=({toggleSidenav:e,loading:t,users:s,blogs:c,sessions:n})=>{const l=M(),r=Object(i.useState)([{title:"Pacientes",amount:"Cargando...",icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:"Cargando...",icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:"Cargando...",icon:"offline_pin",route:"/tid:/completedApp"}]),m=Object(a.a)(r,2),o=m[0],b=m[1];return Object(i.useEffect)((()=>{t||(()=>{let e=0;n.data.forEach((t=>{"completada"===t.state&&(e+=1)})),b([{title:"Pacientes",amount:s.id.length,icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:n.data.length,icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:e,icon:"offline_pin",route:"/tid:/completedApp"}])})()}),[t]),Object(I.jsx)(i.Fragment,{children:Object(I.jsxs)("div",{className:l.profileContent,children:[Object(I.jsx)("div",{className:"flex justify-end menu-button",children:Object(I.jsx)(j.a,{onClick:e,children:Object(I.jsx)(d.a,{className:"text-white",children:"menu"})})}),Object(I.jsx)("div",{className:l.headerCardHolder,children:t?Object(I.jsx)(O.a,{container:!0,direction:"column",alignItems:"center",children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(p.a,{color:"secondary"})})}):Object(I.jsx)(O.a,{container:!0,spacing:6,children:o.map((e=>Object(I.jsx)(O.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(I.jsxs)(u.a,{className:"h-96 bg-gray bg-default flex items-center justify-between p-4",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("span",{className:"text-light-white uppercase",children:e.title}),Object(I.jsx)("h4",{className:"font-normal text-white m-0 pt-2",children:e.amount})]}),Object(I.jsx)("div",{className:"w-56 h-36",children:Object(I.jsx)(j.a,{onClick:()=>S.a.push(e.route),children:Object(I.jsx)(d.a,{className:"text-white",children:e.icon})})})]})},e.title)))})}),Object(I.jsx)("div",{className:"py-8"}),Object(I.jsxs)(O.a,{container:!0,spacing:3,children:[Object(I.jsxs)(O.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(I.jsx)(u.a,{className:"pb-4",children:t?Object(I.jsx)("div",{className:"mt-10 mb-10",children:Object(I.jsx)(D.a,{color:"primary",size:32})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h4",{className:"text-32 px-4 pt-4 pb-0",children:"Tus pr\xf3ximas citas"}),0===n.data.length?Object(I.jsx)(F,{}):Object(I.jsx)(A,{sessions:n})]})}),Object(I.jsx)("div",{className:"py-6"}),Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(g.a,{className:"relative mt--14",size:"medium",color:"primary",children:Object(I.jsx)(d.a,{children:"trending_up"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada m\xe1s popular"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(N.a,{className:"mb-4"}),Object(I.jsx)("h4",{className:"m-0 font-medium capitalize",children:"T\xe9cnicas de relajaci\xf3n"}),Object(I.jsx)("div",{className:l.cardGrayBox,children:Object(I.jsx)("img",{className:"h-full w-full border-radius-4",src:"/assets/images/photo-1.jpg",alt:"random"})}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(I.jsx)("div",{className:"py-7"}),Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(g.a,{className:Object(h.default)("relative mt--14",l.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(I.jsx)(d.a,{children:"date_range"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"\xdaltima entrada"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(N.a,{}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(I.jsx)("div",{className:"py-7"}),Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(g.a,{className:Object(h.default)("relative mt--14",l.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(I.jsx)(d.a,{children:"star_outline"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(d.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada con mas likes"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(N.a,{}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]})]}),Object(I.jsxs)(O.a,{item:!0,lg:4,md:4,sm:12,xs:12,container:!0,spacing:1,children:[Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{className:"p-4 h-full",children:t?Object(I.jsx)("div",{className:"mt-10 mb-10",children:Object(I.jsx)(D.a,{})}):Object(I.jsx)(I.Fragment,{children:0!==(null===s||void 0===s?void 0:s.length)?Object(I.jsxs)("div",{children:[Object(I.jsxs)("h4",{className:"font-medium text-muted",children:[Object(I.jsx)(d.a,{children:"group"})," Pacientes"]}),Object(I.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:Object(I.jsx)(O.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"stretch",children:Object(I.jsx)(E,{users:s})})})]}):Object(I.jsxs)("div",{className:"mt-12",children:[Object(I.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(I.jsx)(f.a,{className:"w-84 h-84",src:""}),Object(I.jsx)("h5",{className:"mt-4 mb-2",children:"A\xfan no atiendes a ning\xfan paciente"}),Object(I.jsx)("small",{className:"text-muted",children:"Promociona tu perfil"})]}),Object(I.jsx)(v.a,{className:"mb-6",children:Object(I.jsx)(y.a,{children:Object(I.jsx)(w.a,{children:Object(I.jsx)(z.a,{children:Object(I.jsx)(C.a,{onClick:()=>{console.log("Conecta con stripe... :D")},variant:"contained",color:"primary",className:"x-center",children:"Conecta con stripe"})})})})})]})})})}),Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{children:R.map(((e,t)=>Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)("div",{className:"py-4 px-6 flex flex-wrap items-center justify-between",children:Object(I.jsxs)("div",{className:"flex flex-wrap items-center",children:[Object(I.jsx)("div",{className:"flex justify-center items-center bg-gray w-64 h-52 border-radius-4",children:Object(I.jsx)("img",{className:"w-36 overflow-hidden",src:e.img,alt:"master card"})}),Object(I.jsxs)("div",{className:"ml-4",children:[Object(I.jsx)("h5",{className:"mb-1 font-medium",children:e.type}),Object(I.jsx)("span",{className:"text-muted",children:e.product})]})]})}),t!==R.length-1&&Object(I.jsx)(N.a,{})]},t)))})})]}),Object(I.jsx)(O.a,{item:!0,lg:8,md:8,sm:12,xs:12}),Object(I.jsx)(O.a,{item:!0,lg:4,md:4,sm:12,xs:12})]}),Object(I.jsx)("div",{className:"py-2"})]})})},J=s(1363),U=s(1618),q=s(1617),$=s(1672),K=s(336);const Q=Object(x.a)((e=>{e.palette;return{sidenav:{marginTop:-345,paddingTop:74,[Object(c.a)(e,["palette"]).breakpoints.down("sm")]:{marginTop:-410}}}})),W=[{title:"Comentarios",icon:"comment",route:"comments"},{title:"Calendario",icon:"event",route:"schedule"},{title:"Pacientes",icon:"group",route:"patients"},{title:"Mis blogs",icon:"article",route:"myblogs"},{title:"Nuevo blog",icon:"edit",route:"newblog"},{title:"Configuraci\xf3n",icon:"settings",route:"dashboard"}];var X=()=>{const e=Q(),t=Object(T.a)().user,s=n.a.useState(!1),c=Object(a.a)(s,2),i=c[0],l=c[1];function r(){l(!1)}const j=n.a.useState(!1),m=Object(a.a)(j,2);m[0],m[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)(J.a,{onClose:r,"aria-labelledby":"customized-dialog-title",open:i,children:[Object(I.jsx)($.a,{id:"customized-dialog-title",onClose:r,children:"Notas de mis sesiones"}),Object(I.jsx)(q.a,{dividers:!0,children:Object(I.jsx)(C.a,{variant:"contained",color:"primary",className:"x-center",size:"large",onClick:()=>S.a.push("/:pid/notes"),children:Object(I.jsx)(K.a,{gutterBottom:!0,children:"Crear nota"})})}),Object(I.jsx)(U.a,{children:Object(I.jsxs)(C.a,{onClick:r,className:"bg-error",variant:"outlined",size:"small",children:[Object(I.jsx)(d.a,{children:"clear"}),"Cerrar"]})})]}),Object(I.jsxs)("div",{className:Object(h.default)("flex-column items-center",e.sidenav),children:[Object(I.jsx)(f.a,{className:"h-84 w-84 mb-5",src:"/assets/images/face-7.jpg"}),Object(I.jsx)("p",{className:"text-white",children:t.name}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-11",children:[Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Ingresos"}),Object(I.jsx)("h4",{className:"font-medium text-white",children:"$ 20,495"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Calificaci\xf3n"}),Object(I.jsxs)("h4",{className:"font-medium text-white",children:[Object(I.jsx)(d.a,{children:"star_rate"})," 4.75"]})]}),Object(I.jsx)("div",{})]}),Object(I.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(I.jsxs)(O.a,{container:!0,spacing:3,children:[Object(I.jsx)(C.a,{children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104 bg-primary flex justify-center items-center",children:Object(I.jsxs)("div",{className:"text-light-white text-center",children:[Object(I.jsx)(d.a,{children:"sentiment_very_satisfied"}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:"Escritorio"})]})})})}),Object(I.jsx)(C.a,{onClick:function(){l(!0)},children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104  flex justify-center items-center",children:Object(I.jsxs)("div",{className:"text-light text-center",children:[Object(I.jsx)(d.a,{children:"content_paste"}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:"Notas"})]})})})}),W.map(((e,s)=>Object(I.jsx)(C.a,{onClick:()=>S.a.push("/"+t.uid+"/"+e.route),children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(I.jsxs)("div",{className:"text-light text-center",children:[Object(I.jsx)(d.a,{children:e.icon}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:e.title})]})})})},s)))]}),Object(I.jsx)("div",{className:"py-4"}),Object(I.jsx)(u.a,{className:"flex items-center justify-center text-primary",children:Object(I.jsxs)(C.a,{className:e.socialButton,children:[Object(I.jsx)(d.a,{children:"exit_to_app"}),Object(I.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Comenzar la pr\xf3xima sesi\xf3n"})]})}),Object(I.jsx)("div",{className:"py-2"})]})]})]})};const Y=Object(x.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:400}}}}));t.default=Object(m.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(T.a)().user,m=Object(o.a)(),x=Y(),O=Object(l.a)(m.breakpoints.down("sm")),p=Object(i.useState)(!0),u=Object(a.a)(p,2),g=u[0],N=u[1],f=Object(i.useState)(),v=Object(a.a)(f,2),y=v[0],w=v[1],z=Object(i.useState)(),C=Object(a.a)(z,2),S=C[0],k=C[1],_=Object(i.useState)(),B=Object(a.a)(_,2),A=B[0],D=B[1],H=()=>{c(!s)};return Object(i.useEffect)((()=>{c(!O)}),[O]),Object(i.useEffect)((()=>{L.a.get("/t/".concat(n.uid,"/u")).then((e=>{console.log("Usuarios obtenidos"),k(e.data),L.a.get("/t/".concat(n.uid,"/s")).then((e=>{console.log("Sesiones obtenidas"),w(e.data),L.a.get("/t/".concat(n.uid,"/b")).then((e=>{console.log("Blogs obtenidos"),D(e.data),N(!1)}))}))}))}),[]),Object(I.jsx)("div",{className:"relative",children:Object(I.jsxs)(b.n,{children:[Object(I.jsxs)(b.m,{width:"300px",open:s,toggleSidenav:H,children:[Object(I.jsx)("div",{className:Object(h.default)("bg-primary text-right",x.headerBG),children:Object(I.jsx)(r.a,{smUp:!0,children:Object(I.jsx)(j.a,{onClick:H,children:Object(I.jsx)(d.a,{className:"text-white",children:"clear"})})})}),Object(I.jsx)(X,{})]}),Object(I.jsxs)(b.o,{open:s,children:[Object(I.jsx)("div",{className:Object(h.default)("bg-primary",x.headerBG)}),Object(I.jsx)(V,{toggleSidenav:H,loading:g,users:S,blogs:A,sessions:y})]})]})})}))}}]);