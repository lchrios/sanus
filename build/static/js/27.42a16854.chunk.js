(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[27],{1626:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var c=t(1350),a=t(1344),l=(t(0),t(1));const i=()=>Object(l.jsx)(c.a,{container:!0,direction:"column",alignItems:"center",children:Object(l.jsx)(c.a,{item:!0,children:Object(l.jsx)(a.a,{color:"secondary"})})})},2157:function(e,s,t){"use strict";t.r(s);var c=t(14),a=t(11),l=t(0),i=t(1298),n=t(1327),r=t(441),d=t(1340),j=t(1345),m=t(1350),o=t(1944),b=t(34),x=t(356),h=t(4),O=t(51),u=(t(22),t(114)),N=t(1626),g=t(2040),p=t(1);const v=Object(x.a)((e=>{e.palette;return{cart:{minWidth:900,overflowX:"scroll"},button:{margin:Object(a.a)(e,["palette"]).spacing(1)}}})),f=[{t:"Peligros del abuso de la PC"},{t:"La decoracion: un reflejo de nuestra mente"},{t:"El metro y la m\xfasica: efecto sobre las personas"},{t:"Sonoroterapia: terapia con sonidos calmantes"}];s.default=()=>{const e=Object(l.useState)(),s=Object(c.a)(e,2),t=s[0],a=s[1],x=Object(l.useState)(f),k=Object(c.a)(x,2),w=(k[0],k[1],Object(l.useState)(!0)),y=Object(c.a)(w,2),C=y[0],E=y[1],S=Object(l.useState)(),z=Object(c.a)(S,2),B=(z[0],z[1],Object(O.a)().user),I=v();return Object(l.useEffect)((()=>{u.a.get("/t/"+B.uid+"/b").then((e=>{console.log(e.data),a(e.data),E(!1)})).then((()=>console.log("Blogs descargados")))}),[]),Object(p.jsxs)(i.a,{elevation:3,className:Object(h.default)("m-sm-30",I.cart),children:[Object(p.jsxs)("div",{className:"py-4 px-4",children:[Object(p.jsx)(n.a,{variant:"contained",color:"secondary",className:"mb-4 x-center",onClick:()=>b.a.push("/"+B.uid+"/dashboard"),children:"Volver al escritorio"}),Object(p.jsxs)("div",{className:"flex items-center mb-4 px-4",children:[Object(p.jsx)(r.a,{variant:"outlined",placeholder:"Buscar por t\xedtulo",className:"flex-grow",size:"small"}),Object(p.jsxs)(n.a,{className:"mx-3",variant:"contained",color:"primary",onClick:()=>{},children:[Object(p.jsx)(d.a,{className:"mr-3",children:"search"}),"Buscar"]}),Object(p.jsxs)(n.a,{className:"mx-3",variant:"contained",color:"secondary",onClick:()=>{b.a.push("/"+B.uid+"/newblog")},children:[Object(p.jsx)(d.a,{className:"mr-3",children:"note_add"}),"Escribir nueva entrada"]})]}),Object(p.jsx)(j.a,{}),Object(p.jsx)("div",{className:"py-2"}),Object(p.jsxs)(m.a,{container:!0,children:[Object(p.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3}),Object(p.jsx)(m.a,{item:!0,lg:4,md:4,sm:4,xs:4,children:Object(p.jsx)("h6",{className:"m-0",children:"Contenido"})}),Object(p.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:Object(p.jsx)("h6",{className:"m-0",children:"Likes"})}),Object(p.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:Object(p.jsx)("h6",{className:"m-0",children:"Comentarios"})}),Object(p.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:Object(p.jsx)("h6",{className:"m-0",children:"Editar"})})]})]}),Object(p.jsx)(j.a,{}),C?Object(p.jsx)(N.a,{}):t.data.map(((e,s)=>Object(p.jsx)("div",{className:"py-4 px-4",children:Object(p.jsxs)(m.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(m.a,{item:!0,lg:3,md:3,sm:3,xs:3,children:Object(p.jsx)("div",{className:"flex items-center",children:Object(p.jsx)("div",{className:"px-4",children:Object(p.jsx)("img",{className:"border-radius-4 w-full",height:"200",width:"200",src:e.img,alt:e.title})})})}),Object(p.jsxs)(m.a,{item:!0,lg:4,md:4,sm:4,xs:4,children:[Object(p.jsx)("h6",{className:"m-0",children:e.title}),Object(g.a)(e.content),Object(p.jsx)("p",{id:"cont".concat(s),className:"mt-2 m-0 text-muted"})]}),Object(p.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:Object(p.jsx)("h6",{className:"m-0",children:e.likes.length})}),Object(p.jsx)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:Object(p.jsx)("h6",{className:"m-0",children:e.comments.length})}),Object(p.jsxs)(m.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center",children:[Object(p.jsx)(o.a,{size:"small",color:"secondary","aria-label":"Edit",onClick:()=>{console.log("/"+B.uid+"/editblog?bid="+e.id),b.a.push("/"+B.uid+"/editblog?bid="+e.id)},className:I.button,children:Object(p.jsx)(d.a,{children:"edit_icon"})}),Object(p.jsx)(o.a,{size:"small",color:"error","aria-label":"Delete",onClick:()=>{u.a.delete("/b/"+e.id),window.location.reload()},className:I.button,children:Object(p.jsx)(d.a,{children:"delete"})})]})]})},t.id[s]))),Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{className:"mb-12"})})]})}}}]);