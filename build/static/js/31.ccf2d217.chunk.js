(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[31],{2165:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(14),n=a(11),i=(a(1919),a(1920),a(0)),l=a(1327),r=a(1959),j=a(1923),d=a.n(j),o=a(1642),b=a(1627),m=a(597),h=a(1340),O=a(356),x=a(4),u=a(1);const p=Object(O.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{header:{borderTopRightRadius:6,borderTopLeftRadius:6}}})),v={month:{name:"Mensual",icon:"view_module"},week:{name:"Semanal",icon:"view_week"},work_week:{name:"Work week",icon:"view_array"},day:{name:"D\xeda",icon:"view_day"},agenda:{name:"Agenda",icon:"view_agenda"}};var f=({views:e,view:t,label:a,onView:c,onNavigate:s})=>{const n=p();return Object(u.jsxs)("div",{className:Object(x.default)("flex py-1 justify-around bg-primary",n.header),children:[Object(u.jsxs)("div",{className:"flex justify-center",children:[Object(u.jsx)(b.a,{title:"Previous",children:Object(u.jsx)(m.a,{onClick:()=>s(o.navigate.PREVIOUS),children:Object(u.jsx)(h.a,{className:"text-white",children:"chevron_left"})})}),Object(u.jsx)(b.a,{title:"Today",children:Object(u.jsx)(m.a,{onClick:()=>s(o.navigate.TODAY),children:Object(u.jsx)(h.a,{className:"text-white",children:"today"})})}),Object(u.jsx)(b.a,{title:"Next",children:Object(u.jsx)(m.a,{onClick:()=>s(o.navigate.NEXT),children:Object(u.jsx)(h.a,{className:"text-white",children:"chevron_right"})})})]}),Object(u.jsx)("div",{className:"flex items-center",children:Object(u.jsx)("h6",{className:"m-0 text-white",children:a})}),Object(u.jsx)("div",{className:"flex",children:(()=>{if(e.length>1)return e.map((e=>Object(u.jsx)(b.a,{title:v[e].name,children:Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{"aria-label":e,onClick:()=>c(e),disabled:t===e,children:Object(u.jsx)(h.a,{className:"text-white",children:v[e].icon})})})},e)))})()})]})},g=a(27),N=a(113),w=a(114);const y=e=>w.a.post("/s/"+e.id,{sessiondata:Object(c.a)({},e)});var k=a(1348),S=a(1350),C=a(57),T=a(1447),D=a(2145),M=a(1960),E=a(51);var _=({event:e={},open:t,handleClose:a})=>{const n=Object(i.useState)(e),r=Object(s.a)(n,2),j=r[0],d=r[1],o=Object(i.useState)(),b=Object(s.a)(o,2),O=b[0],x=b[1],p=Object(i.useState)(),v=Object(s.a)(p,2),f=v[0],g=v[1],N=Object(E.a)().user,_=e=>{d(Object(c.a)(Object(c.a)({},j),{},{[e.target.name]:e.target.value}))};Object(i.useEffect)((()=>{w.a.get("/u/"+N.uid+"/t").then((e=>{x(e.data.data),g(e.data.data)}))}),[e]);let z=j.title,V=j.start,W=(j.end,j.location),P=j.note;return Object(u.jsxs)(k.a,{onClose:a,open:t,maxWidth:"xs",fullWidth:!0,children:[Object(u.jsxs)("div",{className:"flex justify-between items-center pl-4 pr-2 py-2 bg-primary",children:[Object(u.jsx)("h4",{className:"m-0 text-white",children:"A\xf1adir eventos"}),Object(u.jsx)(m.a,{onClick:a,children:Object(u.jsx)(h.a,{className:"text-white",children:"clear"})})]}),Object(u.jsx)("div",{className:"p-4",children:Object(u.jsxs)(C.ValidatorForm,{onSubmit:()=>{j.id?y(Object(c.a)({},j)).then((()=>{a()})):(e=>(console.log("a\xf1adiendo nuevo evento"),console.log(e),w.a.post("/s/new",{sessiondata:Object(c.a)({},e)})))(Object(c.a)(Object(c.a)({},j),{},{therapist:f,thername:O.name,patient:N.uid,patname:N.name,start:j.start,end:j.end,note:P,tipo:"Terapia adulto",state:"pendiente",pay_met:"PayPal",cost:100*Math.floor(10*Math.random())+10*Math.floor(10*Math.random()),id:""})).then((()=>{a()}))},children:[Object(u.jsx)(C.TextValidator,{className:"mb-6 w-full",label:"Nombre",onChange:_,type:"text",name:"title",value:z||"",validators:["required"],errorMessages:["Este campo es requerido"]}),Object(u.jsx)(S.a,{container:!0,spacing:4,children:Object(u.jsx)(S.a,{item:!0,sm:6,xs:12,children:Object(u.jsx)(T.a,{utils:M.a,children:Object(u.jsx)(D.a,{margin:"none",id:"start-date",label:"Fecha",inputVariant:"standard",type:"text",autoOk:!0,value:V||"",fullWidth:!0,onChange:e=>((e,t)=>{d(Object(c.a)(Object(c.a)({},j),{},{[t]:e}))})(e,"start")})})})}),Object(u.jsx)("div",{className:"py-2"}),Object(u.jsx)(C.TextValidator,{className:"mb-6 w-full",label:"Descripci\xf3n",onChange:_,type:"text",name:"location",value:W||"",validators:["required"],errorMessages:["Este campo es requerido"]}),Object(u.jsx)(C.TextValidator,{className:"mb-9 w-full",label:"Note",onChange:_,type:"text",name:"note",value:P||"",rowsMax:2,multiline:!0,validators:["required"],errorMessages:["Este campo es requerido"]}),Object(u.jsxs)("div",{className:"flex justify-between items-center",children:[Object(u.jsx)(l.a,{variant:"contained",color:"primary",type:"submit",children:"Env\xedar"}),Object(u.jsxs)(l.a,{onClick:()=>{var e;j.id&&(e=j,w.a.delete("/s/"+e)).then((()=>{a()}))},children:[Object(u.jsx)(h.a,{className:"mr-2 align-middle",children:"delete"}),"Borrar"]})]})]})})]})},z=a(1939),V=a.n(z),W=a(1298),P=a(1361),R=a(1492);Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const q=Object(O.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{google:{color:"#ec412c"},twitter:{color:"#039ff5"}}}));var A=({user:e})=>{var t;q();return Object(u.jsx)(S.a,{item:!0,lg:12,md:12,sm:12,xs:12,style:{maxWidth:200},children:Object(u.jsx)(W.a,{className:"bg-primary mb-2 pb-1",children:Object(u.jsx)("div",{className:"p-3",children:Object(u.jsxs)("div",{className:"flex justify-between items-left m-2",children:[Object(u.jsxs)("div",{className:"flex items-center m-2",children:[Object(u.jsx)(P.a,{className:"h-56 w-56",src:e.img}),Object(u.jsxs)("div",{className:"ml-2",children:[Object(u.jsx)("h5",{className:"m-0",children:e.name}),Object(u.jsx)("p",{className:"mb-0 mt-2 text-muted font-normal capitalize",children:null===(t=e.location[1])||void 0===t?void 0:t.toLowerCase()})]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)(N.k,{menuButton:Object(u.jsx)(h.a,{className:"cursor-pointer",children:"more_horiz"}),children:[Object(u.jsxs)(R.a,{children:[Object(u.jsx)(h.a,{fontSize:"small",children:" done "}),Object(u.jsx)("span",{className:"pl-4",children:" Marcar como completada "})]}),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(h.a,{fontSize:"small",children:" account_circle "}),Object(u.jsx)("span",{className:"pl-4",children:" Ver perfil "})]}),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(h.a,{fontSize:"small",children:" edit "}),Object(u.jsx)("span",{className:"pl-4",children:" Editar sesion "})]})]})})]})})})})},B=a(1546),H=a(1547),I=a(34);Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const L=Object(O.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{google:{color:"#ec412c"},twitter:{color:"#039ff5"}}}));var F=()=>{L();const e=Object(E.a)().user;return Object(u.jsx)(S.a,{item:!0,lg:12,md:12,sm:12,xs:12,style:{width:"full"},children:Object(u.jsx)(W.a,{className:"bg-secondary mb-2 pb-2",children:Object(u.jsx)("div",{className:"p-3",children:Object(u.jsx)("div",{className:"items-center m-2",children:Object(u.jsxs)("div",{className:"m-2",children:[Object(u.jsxs)("div",{className:"flex-column items-center pb-2",children:[Object(u.jsx)(P.a,{className:"h-56 w-56"}),Object(u.jsx)("div",{className:"ml-4",children:Object(u.jsx)("h4",{className:"mb-0 mt-2 font-normal capitalize",children:"No tienes ning\xfan paciente"})})]}),Object(u.jsx)(B.a,{className:"mb-4",children:Object(u.jsx)(H.a,{children:Object(u.jsx)(l.a,{onClick:()=>I.a.push("/"+e.uid+"/browse"),variant:"contained",color:"primary",className:"x-center",children:"Promocionar perfil"})})})]})})})})})};const J=Object(O.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{calendar:{"& .rbc-event":{background:"rgba(var(--primary),1) !important"},"& .rbc-selected":{background:"rgba(var(--secondary),1) !important"},"& .rbc-calendar":{height:"auto",flexGrow:1},"& .rbc-header":{padding:"12px 16px !important","& a":{paddingBottom:"8px !important"},"& span":{fontSize:"15px !important",fontWeight:500}}},cart:{minWidth:900}}})),G=Object(r.c)(V.a),U=d()(r.a);let X=Object.keys(r.b).map((e=>r.b[e]));t.default=()=>{const e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],j=t[1],d=Object(i.useState)(null),o=Object(s.a)(d,2),b=o[0],m=o[1],h=Object(i.useState)(!1),O=Object(s.a)(h,2),p=O[0],v=O[1],k=Object(i.useState)(!0),C=Object(s.a)(k,2),T=(C[0],C[1],Object(i.useState)([])),D=Object(s.a)(T,2),M=D[0],z=D[1],V=Object(E.a)().user,P=Object(i.useState)(5),R=Object(s.a)(P,2),q=R[0],B=(R[1],Object(i.useState)(0)),H=Object(s.a)(B,2),L=H[0],Y=(H[1],Object(i.useRef)(null)),K=J(),Q=()=>{var e;(e=V.uid,w.a.get("/u/"+e+"/s")).then((e=>e.data)).then((e=>{var t;e=null===(t=e)||void 0===t?void 0:t.map((e=>Object(c.a)(Object(c.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)}))),j(e)}))},Z=e=>{y(e).then((()=>{Q()}))},$=e=>{let t=e.action,a=Object(n.a)(e,["action"]);"doubleClick"===t&&(m(a),v(!0))};return Object(i.useEffect)((()=>{Q(),w.a.get("/t/"+V.uid+"/u").then((e=>{z(e.data.data)})),w.a.get("/t/"+V.uid+"/s").then((e=>{j(e.data.data)}))}),[]),Object(u.jsxs)("div",{className:"m-sm-30",children:[Object(u.jsx)("div",{className:"mb-sm-30",children:Object(u.jsx)(N.a,{routeSegments:[{name:"Mis citas"}]})}),Object(u.jsx)(W.a,{elevation:3,className:Object(x.default)("m-sm-45"),children:Object(u.jsxs)(S.a,{container:!0,spacing:2,style:{marginLeft:"10px",marginRight:"10px",marginTop:"10px",marginBottom:"10px"},children:[Object(u.jsxs)(S.a,{item:!0,lg:9,md:9,sm:12,xs:12,children:[Object(u.jsxs)(W.a,{className:"bg-ligh bg-default flex items-center justify-between p-4",children:[Object(u.jsx)(l.a,{className:"mb-4",variant:"contained",color:"secondary",onClick:()=>$({action:"doubleClick",start:new Date,end:new Date}),children:"A\xf1adir evento"}),Object(u.jsx)(l.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>I.a.push("/"+V.uid+"/dashboard"),children:"Volver al escritorio"})]}),Object(u.jsxs)("div",{className:Object(x.default)("h-full-screen flex-column",K.calendar),children:[Object(u.jsx)("div",{ref:Y}),Object(u.jsx)(U,{selectable:!0,localizer:G,events:a,onEventDrop:e=>{Z(e)},resizable:!0,onEventResize:Z,defaultView:r.b.MONTH,defaultDate:new Date,startAccessor:"start",endAccessor:"end",views:X,step:60,showMultiDayTimes:!0,components:{toolbar:e=>Y.current?g.createPortal(Object(u.jsx)(f,Object(c.a)({},e)),Y.current):Object(u.jsx)("div",{children:"Header component not found"})},onSelectEvent:e=>{(e=>{m(e),v(!0)})(e)},onSelectSlot:e=>$(e)})]}),p&&Object(u.jsx)(_,{handleClose:()=>{v(!1),Q()},open:p,event:b})]}),Object(u.jsx)(S.a,{item:!0,lg:3,md:3,sm:12,xs:12,direction:"column",justify:"center",alignItems:"",children:Object(u.jsxs)(W.a,{style:{maxWidth:"full"},children:[Object(u.jsxs)("div",{className:"bg-light bg-default p-6 flex flex-wrap mx-0",children:[Object(u.jsx)("h1",{children:"Pr\xf3ximos pacientes"}),Object(u.jsx)("div",{className:"py-1"})]}),Object(u.jsx)(S.a,{container:!0,spacing:1,justify:"space-evenly",alignItems:"stretch",direction:"column",className:"bg-default flex items-center justify-between p-4",children:0==M.length?Object(u.jsx)(F,{}):M.slice(L*q,L*q+q).map((e=>Object(u.jsx)(A,{user:e})))})]})})]})})]})}}}]);