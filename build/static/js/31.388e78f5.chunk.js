(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[31],{2185:function(e,t,a){"use strict";a.r(t);var s=a(14),c=a(11),i=a(0),n=a.n(i),r=a(1295),l=a(1375),j=a(607),o=a(1356),d=a(1296),m=a(53),b=a(112),h=a(605),x=a(5),O=a(589),p=a(1300),u=a(1309),g=a(1377),N=a(1483),f=a(1484),v=a(1468),y=a(1442),w=a(1340),C=a(29),k=a(40),S=a(2176),z=a(79),T=a(52),L=a(1363),_=a(1360),I=a(1);const D=Object(h.a)((e=>({button:{margin:e.spacing(0)}})));var R=({open:e,closeDone:t,session:a,sid:c,img:n})=>{const r=D(),l=Object(i.useState)(!1),d=Object(s.a)(l,2);d[0],d[1];return Object(I.jsxs)(L.a,{onClose:t,open:e,maxWidth:"sm",fullWidth:!1,children:[Object(I.jsxs)("div",{className:"flex justify-between items-center pl-4 pr-2 py-2 bg-primary",children:[Object(I.jsx)("h4",{className:"m-0 text-white",children:"Confirmar sesi\xf3n completada"}),Object(I.jsx)(j.a,{onClick:t,children:Object(I.jsx)(o.a,{className:"text-white",children:"clear"})})]}),Object(I.jsxs)("div",{className:"p-4",children:[Object(I.jsxs)(O.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(I.jsx)(O.a,{item:!0,lg:2,md:2,sm:2,xs:12,children:Object(I.jsx)(g.a,{src:n,className:"ml-3 h-56 w-56"})}),Object(I.jsx)(O.a,{item:!0,lg:10,md:10,sm:10,xs:12,children:Object(I.jsxs)(O.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(I.jsxs)(O.a,{item:!0,lg:7,md:7,sm:7,xs:12,children:[Object(I.jsx)("h4",{className:"m-1 text-gray",children:a.user_name}),Object(I.jsx)(_.a,{}),Object(I.jsx)("h4",{className:"m-1 text-muted",children:a.user_email})]}),Object(I.jsx)(O.a,{item:!0,lg:5,md:5,sm:5,xs:12,children:Object(I.jsx)(u.a,{elevation:2,className:"bg-primary",variant:"outlined",children:Object(I.jsx)("h4",{className:"m-2 text-white text-center",children:a.tipo})})})]})}),Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{elevation:10,className:"bg-primary",children:Object(I.jsx)("h4",{className:"m-2 text-white text-center",children:new Date(a.start).toLocaleTimeString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})})}),Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,className:"alignCenter",children:Object(I.jsx)(w.a,{variant:"contained",color:"secondary",size:"large",fullWidth:!0,className:r.button,startIcon:Object(I.jsx)(S.a,{}),children:"Confirmar sesi\xf3n"})})]}),Object(I.jsx)(_.a,{}),Object(I.jsx)("h6",{className:"mt-4 text-error",children:"Al hacer click est\xe1 confirmando que la sesi\xf3n se llev\xf3 a cabo exitosamente. "})]})]})};Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const H=Object(h.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)}}}));new Date,(new Date).addHours(1),(new Date).addHours(3);var A=({sessions:e,users:t})=>{const a=H(),c=Object(i.useState)(!1),n=Object(s.a)(c,2),r=n[0],l=n[1],j={weekday:"long",year:"numeric",month:"long",day:"numeric"},d=e=>{let a=t.id.indexOf(e);return a<=-1?console.log("No se tiene registro del usuario xd"):(console.log("Se encontr\xf3 un registro del usuario. Pasando imagen..."),t.url[a])},m=e=>{l(!1)};return Object(I.jsx)(O.a,{container:!0,spacing:2,direction:"column",children:e.data.map(((t,s)=>Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsxs)(u.a,{className:"p-5 ml-5 mr-5",elevation:12,children:[Object(I.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(I.jsx)(g.a,{className:"h-56 w-56",src:d(t.user)}),Object(I.jsx)("div",{children:Object(I.jsx)(I.Fragment,{children:r&&Object(I.jsx)(R,{closeDone:m,open:r,session:t,sid:e.id[s],img:d(t.user)})})})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h5",{className:"m-0 capitalize",children:null===t||void 0===t?void 0:t.user_name}),Object(I.jsxs)(O.a,{item:!0,children:[Object(I.jsx)("h4",{className:"text-muted mt-2",children:"Fecha pactada:"}),Object(I.jsx)("p",{className:"text-muted",children:new Date(null===t||void 0===t?void 0:t.start).toLocaleTimeString("es-ES",j)})]}),Object(I.jsx)("div",{className:"mb-4",children:Object(I.jsxs)(k.b,{className:"flex mb-1 items-center",to:"/",children:[Object(I.jsx)(b.g,{fontSize:"small",className:Object(x.default)("text-14",a.google)}),Object(I.jsx)("span",{className:"ml-2",children:null===t||void 0===t?void 0:t.user_email})]})}),Object(I.jsxs)("div",{className:"flex flex-wrap ",children:[Object(I.jsx)(w.a,{variant:"contained",size:"small",onClick:()=>{(e=>{0===e&&l(!0)})(s)},startIcon:0==s?Object(I.jsx)(S.a,{}):Object(I.jsx)(o.a,{children:"face"}),className:Object(x.default)("bg-light-primary hover-bg-primary text-primary px-5",a.button),children:0==s?"Marcar como completada":"Contactar paciente"}),Object(I.jsx)(w.a,{size:"small",variant:"contained",startIcon:1==s?Object(I.jsx)(o.a,{children:"watch_later"}):Object(I.jsx)(o.a,{children:"visibility"}),className:Object(x.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",a.button),children:1==s?"Posponer sesi\xf3n":"Ver perfil de usuario"})]})]})]})},s)))})},B=a(350),E=a(2069),P=a(1697);var V=({users:e})=>e.data.map(((t,a)=>Object(I.jsxs)(O.a,{item:!0,className:"flex items-center mb-4 ml-2 mt-3",children:[t.answered?Object(I.jsx)(P.a,{className:"primary",children:Object(I.jsx)("h4",{className:Object(x.default)("m-0 font-normal","Hombre"===t.gender?"text-primary":"text-error"),children:t.name.slice(0,2)})}):Object(I.jsx)(E.a,{badgeContent:"Nuevo",color:"secondary",children:Object(I.jsx)(P.a,{className:"primary",children:Object(I.jsx)("h4",{className:"text-secondary m-0 font-normal",children:t.name.slice(0,2)})})}),Object(I.jsxs)("div",{className:"ml-4",children:[Object(I.jsx)("h5",{className:"m-0 mb-1 font-medium",children:t.name}),Object(I.jsx)("h6",{className:Object(x.default)("m-0 font-normal",t.answered?"Hombre"===t.gender?"text-primary":"text-error":"text-secondary"),children:t.email}),Object(I.jsx)("p",{className:"m-0 text-muted",children:t.age})]})]},e.id[a])));Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const G=Object(h.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(c.a)(e,["palette"]).spacing(1)}}})),F=[{name:"Jorge Rodriguez",location:"Guadalajara, Jalisco",time:new Date,num:1},{name:"Matha Benitez",location:"Monterrey, Nuevo Leon",time:(new Date).addHours(1),num:3},{name:"Carlos Martinez",location:"Aguascalientes, Aguascalientes",time:(new Date).addHours(3),num:2}];var U=()=>{const e=G(),t=Object(T.a)().user,a=Object(i.useState)(F),c=Object(s.a)(a,2);c[0],c[1];return Object(I.jsx)(O.a,{container:!0,spacing:3,direction:"column",children:Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{className:"p-5",children:Object(I.jsxs)("div",{className:"flex-column  items-center   mb-4",children:[Object(I.jsx)(o.a,{className:"w-56 mb-2 ml-2",children:"sentiment_dissatisfied"}),Object(I.jsx)("h3",{className:" capitalize pb-2",children:"Actualmente no tienes ninguna cita agendada"}),Object(I.jsx)("h5",{className:"text-muted",children:"Abre tus horarios para que los usuarios puedan seleccionar alguno de los disponibles"}),Object(I.jsx)("div",{className:" ",children:Object(I.jsx)(w.a,{variant:"contained",startIcon:Object(I.jsx)(o.a,{children:"watch_later"}),className:Object(x.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",e.button),onClick:()=>C.a.push("/"+t.uid+"/schedule"),children:"Abrir horarios"})})]})})})})};const q=Object(h.a)((e=>{let t=e.palette,a=Object(c.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"},showAllPatients:{margin:a.spacing(1)}}}));var M=()=>{const e=q();return Object(I.jsxs)("div",{children:[Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(P.a,{className:"relative mt--14",size:"medium",color:"primary",children:Object(I.jsx)(o.a,{children:"trending_up"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada m\xe1s popular"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(_.a,{className:"mb-4"}),Object(I.jsx)("h4",{className:"m-0 font-medium capitalize",children:"T\xe9cnicas de relajaci\xf3n"}),Object(I.jsx)("div",{className:e.cardGrayBox,children:Object(I.jsx)("img",{className:"h-full w-full border-radius-4",src:"/assets/images/photo-1.jpg",alt:"random"})}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(I.jsx)("div",{className:"py-7"}),Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(P.a,{className:Object(x.default)("relative mt--14",e.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(I.jsx)(o.a,{children:"date_range"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"\xdaltima entrada"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(_.a,{}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(I.jsx)("div",{className:"py-7"}),Object(I.jsxs)(u.a,{className:"overflow-unset flex py-4",children:[Object(I.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(I.jsx)(P.a,{className:Object(x.default)("relative mt--14",e.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(I.jsx)(o.a,{children:"star_outline"})}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"favorite"})}),Object(I.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(I.jsx)(j.a,{size:"small",children:Object(I.jsx)(o.a,{children:"chat"})}),Object(I.jsx)("p",{className:"m-0",children:"65"})]}),Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(I.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada con mas likes"}),Object(I.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(I.jsx)(_.a,{}),Object(I.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]})]})};const J=Object(h.a)((e=>{let t=e.palette,a=Object(c.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"},showAllPatients:{margin:a.spacing(1)}}}));var K=({toggleSidenav:e,loading:t,users:a,blogs:c,sessions:n,charge:r})=>{const l=J(),d=Object(i.useState)([{title:"Pacientes",amount:"Cargando...",icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:"Cargando...",icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:"Cargando...",icon:"offline_pin",route:"/tid:/completedApp"}]),m=Object(s.a)(d,2),b=m[0],h=m[1];return Object(i.useEffect)((()=>{t||(()=>{let e=0;n.data.forEach((t=>{"completada"===t.state&&(e+=1)})),h([{title:"Pacientes",amount:a.id.length,icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:n.data.length,icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:e,icon:"offline_pin",route:"/tid:/completedApp"}])})()}),[t]),Object(I.jsx)(i.Fragment,{children:Object(I.jsxs)("div",{className:l.profileContent,children:[Object(I.jsx)("div",{className:"flex justify-end menu-button",children:Object(I.jsx)(j.a,{onClick:e,children:Object(I.jsx)(o.a,{className:"text-white",children:"menu"})})}),Object(I.jsx)("div",{className:l.headerCardHolder,children:t?Object(I.jsx)(O.a,{container:!0,direction:"column",alignItems:"center",children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(p.a,{color:"secondary"})})}):Object(I.jsx)(O.a,{container:!0,spacing:3,children:b.map((e=>Object(I.jsx)(O.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(I.jsxs)(u.a,{className:"bg-gray bg-default flex items-center justify-between p-2",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("span",{className:"text-light-white uppercase",children:e.title}),Object(I.jsx)("h4",{className:"font-normal text-white m-0 pt-2",children:e.amount})]}),Object(I.jsx)("div",{className:"w-56 h-36",children:Object(I.jsx)(j.a,{onClick:()=>C.a.push(e.route),children:Object(I.jsx)(o.a,{className:"text-white",children:e.icon})})})]})},e.title)))})}),Object(I.jsx)("div",{className:"py-8"}),Object(I.jsxs)(O.a,{container:!0,spacing:3,children:[Object(I.jsxs)(O.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(I.jsx)(u.a,{className:"pb-4",children:t?Object(I.jsx)("div",{className:"mt-10 mb-10",children:Object(I.jsx)(B.a,{color:"primary",size:32})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h4",{className:"text-32 px-4 pt-4 pb-0",children:"Tus pr\xf3ximas citas"}),0===n.data.length?Object(I.jsx)(U,{}):Object(I.jsx)(A,{sessions:n,users:a})]})}),Object(I.jsx)("div",{className:"py-6"}),Object(I.jsx)(M,{})]}),Object(I.jsx)(O.a,{item:!0,lg:4,md:4,sm:12,xs:12,container:!0,spacing:1,children:Object(I.jsx)(O.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(I.jsx)(u.a,{className:"p-4 h-full",children:t?Object(I.jsx)("div",{className:"mt-10 mb-10",children:Object(I.jsx)(B.a,{})}):Object(I.jsx)(I.Fragment,{children:0!==(null===a||void 0===a?void 0:a.id.length)?Object(I.jsxs)("div",{children:[Object(I.jsxs)("h4",{className:"font-medium text-muted",children:[Object(I.jsx)(o.a,{children:"group"})," Pacientes"]}),Object(I.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:Object(I.jsx)(O.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"stretch",children:Object(I.jsx)(V,{users:a})})})]}):Object(I.jsx)(I.Fragment,{children:r?Object(I.jsx)("div",{className:"mt-12",children:Object(I.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(I.jsx)(g.a,{className:"w-84 h-84",src:""}),Object(I.jsx)("h5",{className:"mt-4 mb-2",children:"No tienes pacientes"}),Object(I.jsx)("small",{className:"text-muted",children:"Por ahora est\xe1 tranquilo."}),Object(I.jsx)("small",{className:"text-muted",children:"Espera a que alguien agende."})]})}):Object(I.jsxs)("div",{className:"mt-12",children:[Object(I.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(I.jsx)(g.a,{className:"w-84 h-84",src:""}),Object(I.jsx)("h5",{className:"mt-4 mb-2",children:"No tienes pacientes, conecta tu cuenta a stripe."}),Object(I.jsx)("small",{className:"text-muted",children:"Un usuario podr\xe1 verte, hasta que conectes tu cuenta con stripe"})]}),Object(I.jsx)(N.a,{className:"mb-6",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(v.a,{children:Object(I.jsx)(y.a,{children:Object(I.jsx)(w.a,{onClick:()=>{console.log("Conecta con stripe... :D")},variant:"contained",color:"primary",className:"x-center",children:"Conecta con stripe"})})})})})]})})})})})})]}),Object(I.jsx)("div",{className:"py-2"})]})})},W=a(1625),$=a(1624),Q=a(1679),X=a(335),Y=a(6),Z=a(1470),ee=a.n(Z),te=a(1437),ae=a.n(te),se=a(1306),ce=a(588);const ie={error:ee.a},ne=Object(h.a)((e=>({error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})));function re(e){const t=ne(),a=e.className,s=e.message,i=e.onClose,n=e.variant,r=Object(c.a)(e,["className","message","onClose","variant"]),l=ie[n];return Object(I.jsx)(se.a,Object(Y.a)({className:Object(x.default)(t[n],a),"aria-describedby":"client-snackbar",message:Object(I.jsxs)("span",{id:"client-snackbar",className:t.message,children:[Object(I.jsx)(l,{className:Object(x.default)(t.icon,t.iconVariant)}),s]}),action:[Object(I.jsx)(j.a,{"aria-label":"Close",color:"inherit",onClick:i,children:Object(I.jsx)(ae.a,{className:t.icon})},"close")]},r))}const le=Object(h.a)((e=>({margin:{margin:e.spacing(0)}})));function je(){const e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(i.useState)({open:!1,Transition:ce.a,vertial:"top",horizontal:"center"})),c=Object(s.a)(a,2),n=c[0],r=(c[1],Object(T.a)().user,le());n.vertical,n.horizontal,n.open;return Object(I.jsx)("div",{className:"my-4",children:Object(I.jsx)(re,{anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"error",className:r.margin,TransitionComponent:n.Transition,message:Object(I.jsx)("span",{id:"message-id",children:"No has completado tu informaci\xf3n para recibir pagos, presiona el bot\xf3n 'conectar con stripe'"})})})}const oe={error:ee.a},de=Object(h.a)((e=>({error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})));function me(e){const t=de(),a=e.className,s=e.message,i=e.onClose,n=e.variant,r=Object(c.a)(e,["className","message","onClose","variant"]),l=oe[n];return Object(I.jsx)(se.a,Object(Y.a)({className:Object(x.default)(t[n],a),"aria-describedby":"client-snackbar",message:Object(I.jsxs)("span",{id:"client-snackbar",className:t.message,children:[Object(I.jsx)(l,{className:Object(x.default)(t.icon,t.iconVariant)}),s]}),action:[Object(I.jsx)(j.a,{"aria-label":"Close",color:"inherit",onClick:i,children:Object(I.jsx)(ae.a,{className:t.icon})},"close")]},r))}const be=Object(h.a)((e=>({margin:{margin:e.spacing(0)}})));function he(){const e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(i.useState)({open:!1,Transition:ce.a,vertial:"top",horizontal:"center"})),c=Object(s.a)(a,2),n=c[0],r=(c[1],Object(T.a)().user,be());n.vertical,n.horizontal,n.open;return Object(I.jsx)("div",{children:Object(I.jsx)(me,{anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"error",open:n.open,className:r.margin,TransitionComponent:n.Transition,message:Object(I.jsx)("span",{id:"message-id",children:'No has completado tu horario. Da click en "Horario" para empezar a realizarlo'})})})}const xe=Object(h.a)((e=>{let t=e.palette;Object(c.a)(e,["palette"]);return{stripeConnect:{background:t.primary.main,display:"inline-block",height:38,textDecoration:"none",width:180,borderRadius:4,mozBorderRadius:4,webkitBorderRadius:4,userSelect:"none",mozUserSelect:"none",webkitUserSelect:"none",msUserSelect:"none",webkitfontSmoothing:"antialiased"}}})),Oe=Object(h.a)((e=>{e.palette;return{sidenav:{marginTop:-345,paddingTop:74,[Object(c.a)(e,["palette"]).breakpoints.down("sm")]:{marginTop:-410}}}})),pe=[{title:"Horarios",icon:"event",route:"schedule"},{title:"Pacientes",icon:"group",route:"patients"},{title:"Mis blogs",icon:"article",route:"myblogs"},{title:"Nuevo blog",icon:"edit",route:"newblog"},{title:"Configuraci\xf3n",icon:"settings",route:"settings"}];var ue=({url:e,loading:t,therapist:a,charge:c})=>{const r=Oe(),l=(xe(),Object(i.useState)(!0)),j=Object(s.a)(l,2),d=j[0],m=j[1],b=Object(T.a)().user,h=n.a.useState(!1),p=Object(s.a)(h,2),N=p[0],f=p[1];function v(){f(!1)}const y=n.a.useState(!1),k=Object(s.a)(y,2);k[0],k[1];return Object(i.useEffect)((()=>{z.a.get("/t/".concat(b.uid,"/schedule")).then((e=>{e.data.schedule&&m(0!==e.data.schedule.length)}))}),[]),Object(I.jsxs)("div",{children:[Object(I.jsxs)(L.a,{onClose:v,"aria-labelledby":"customized-dialog-title",open:N,children:[Object(I.jsx)(Q.a,{id:"customized-dialog-title",onClose:v,children:"Notas de mis sesiones"}),Object(I.jsx)($.a,{dividers:!0,children:Object(I.jsx)(w.a,{variant:"contained",color:"primary",className:"x-center",size:"large",onClick:()=>C.a.push("/:pid/notes"),children:Object(I.jsx)(X.a,{gutterBottom:!0,children:"Crear nota"})})}),Object(I.jsx)(W.a,{children:Object(I.jsxs)(w.a,{onClick:v,className:"bg-error",variant:"outlined",size:"small",children:[Object(I.jsx)(o.a,{children:"clear"}),"Cerrar"]})})]}),Object(I.jsxs)("div",{className:Object(x.default)("flex-column items-center",r.sidenav),children:[Object(I.jsx)(g.a,{className:"h-84 w-84 mb-5",src:e}),Object(I.jsx)("p",{className:"text-white",children:b.email}),Object(I.jsx)("div",{className:"py-3"}),Object(I.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-11",children:[Object(I.jsxs)("div",{className:"flex-grow",children:[Object(I.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Ingresos"}),Object(I.jsx)("h4",{className:"font-medium text-white",children:"$ 20,495"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Calificaci\xf3n"}),Object(I.jsxs)("h4",{className:"font-medium text-white",children:[Object(I.jsx)(o.a,{children:"star_rate"})," 4.75"]})]}),Object(I.jsx)("div",{})]}),Object(I.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(I.jsxs)(O.a,{container:!0,spacing:3,children:[Object(I.jsx)(w.a,{children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104 bg-primary flex justify-center items-center",children:Object(I.jsxs)("div",{className:"text-light-white text-center",children:[Object(I.jsx)(o.a,{children:"sentiment_very_satisfied"}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:"Escritorio"})]})})})}),Object(I.jsx)(w.a,{onClick:function(){f(!0)},children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104  flex justify-center items-center",children:Object(I.jsxs)("div",{className:"text-light text-center",children:[Object(I.jsx)(o.a,{children:"content_paste"}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:"Notas"})]})})})}),pe.map(((e,t)=>Object(I.jsx)(w.a,{onClick:()=>C.a.push("/"+b.uid+"/"+e.route),children:Object(I.jsx)(O.a,{item:!0,children:Object(I.jsx)(u.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(I.jsxs)("div",{className:"text-light text-center",children:[Object(I.jsx)(o.a,{children:e.icon}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"pt-4",children:e.title})]})})})},t)))]}),Object(I.jsx)("div",{className:"py-4"}),Object(I.jsx)(u.a,{className:"flex items-center justify-center text-primary",children:Object(I.jsxs)(w.a,{className:r.socialButton,children:[Object(I.jsx)(o.a,{children:"exit_to_app"}),Object(I.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Comenzar la pr\xf3xima sesi\xf3n"})]})}),Object(I.jsx)(u.a,{className:"flex items-center mt-2 justify-center text-primary",children:c?null:Object(I.jsx)(w.a,{fullWidth:!0,onClick:function(){console.log("Conectando con stripe, charge es:",c),z.a.post("/t/".concat(b.uid,"/connect"),{email:b.email}).then((e=>{console.log(e,"handleClick conect"),window.location.href=e.data.url}))},children:Object(I.jsx)("h5",{children:"Conectar con stripe"})})}),Object(I.jsx)("div",{className:"py-2"})]})]}),c?null:Object(I.jsx)(je,{}),d?null:Object(I.jsx)(he,{})]})};const ge=Object(h.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:400}}}}));t.default=Object(d.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(T.a)().user,d=Object(i.useState)(),h=Object(s.a)(d,2),O=h[0],p=h[1],u=Object(m.a)(),g=ge(),N=Object(r.a)(u.breakpoints.down("sm")),f=Object(i.useState)(!0),v=Object(s.a)(f,2),y=v[0],w=v[1],C=Object(i.useState)(),k=Object(s.a)(C,2),S=k[0],L=k[1],_=Object(i.useState)(),D=Object(s.a)(_,2),R=D[0],H=D[1],A=Object(i.useState)(),B=Object(s.a)(A,2),E=B[0],P=B[1],V=Object(i.useState)(),G=Object(s.a)(V,2),F=G[0],U=(G[1],Object(i.useState)()),q=Object(s.a)(U,2),M=q[0],J=q[1],W=Object(i.useState)(4),$=Object(s.a)(W,2),Q=$[0],X=$[1],Y=()=>{c(!a)},Z=()=>{X((e=>e-1))};return Object(i.useEffect)((()=>{c(!N)}),[N]),Object(i.useEffect)((()=>{console.log(Q),0===Q&&w(!1)}),[Q]),Object(i.useEffect)((()=>{z.a.get("/t/".concat(n.uid,"/u")).then((e=>{console.log("OK: Usuarios obtenidos"),H(e.data),Z()})),z.a.get("/t/".concat(n.uid,"/s/uncompleted")).then((e=>{console.log("OK: Sesiones obtenidas"),L(e.data),Z()})),z.a.get("/t/".concat(n.uid,"/b")).then((e=>{console.log("OK: Blogs obtenidos"),P(e.data),Z()})),z.a.get("/t/".concat(n.uid,"/image")).then((e=>{console.log("OK: Imagen obtenida"),J(e.data.url),Z()})),z.a.get("/t/".concat(n.uid,"/reAuth")).then((e=>{console.log(e,"TherapistHomereAuth"),p(e.data.charges_enabled)}))}),[]),Object(I.jsx)("div",{className:"relative",children:Object(I.jsxs)(b.n,{children:[Object(I.jsxs)(b.m,{width:"300px",open:a,toggleSidenav:Y,children:[Object(I.jsx)("div",{className:Object(x.default)("bg-primary text-right",g.headerBG),children:Object(I.jsx)(l.a,{smUp:!0,children:Object(I.jsx)(j.a,{onClick:Y,children:Object(I.jsx)(o.a,{className:"text-white",children:"clear"})})})}),Object(I.jsx)(ue,{charge:O,url:M,therapist:F,loading:y})]}),Object(I.jsxs)(b.o,{open:a,children:[Object(I.jsx)("div",{className:Object(x.default)("bg-primary",g.headerBG)}),Object(I.jsx)(K,{charge:O,toggleSidenav:Y,loading:y,users:R,blogs:E,sessions:S})]})]})})}))}}]);