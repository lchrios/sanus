<<<<<<< HEAD:build/static/js/36.3ddbf140.chunk.js
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[36],{2176:function(e,t,a){"use strict";a.r(t);var c=a(6),s=a(14),i=a(0),n=a(112),l=a(589),o=a(1340),r=a(1356),j=a(605),b=a(52),d=a(26),m=a(5),u=a(29),O=a(38),g=a(79),h=a(1);const x=Object(j.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));t.default=()=>{const e=x(),t=Object(i.useState)(),a=Object(s.a)(t,2),j=a[0],p=a[1],v=Object(i.useState)(!0),f=Object(s.a)(v,2),N=(f[0],f[1]),y=Object(b.a)().user,w=Object(O.h)().search,S=new URLSearchParams(w).get("bid");Object(i.useEffect)((()=>{g.a.get("/b/"+S).then((e=>{p(e.data),N(!1)}))}),[]);var k=Object(h.jsx)("div",{className:"image-container",children:"Seleccione una imagen para la vista previa"});(null===j||void 0===j?void 0:j.img)&&(k=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]}));return Object(h.jsxs)("div",{className:"m-sm-30",children:[Object(h.jsx)("div",{className:"mb-sm-30",children:Object(h.jsx)(n.a,{routeSegments:[{name:"Blogs",path:"/"+y.uid+"/myblogs"},{name:"Nueva entrada"}]})}),Object(h.jsx)(d.ValidatorForm,{onSubmit:()=>{console.log(j),g.a.put("/b/"+S,{blogdata:Object(c.a)({},j)}).then((e=>{console.log(e.data),u.a.push("/"+y.uid+"/myblogs")})).catch((e=>{console.error(e)}))},children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(d.TextValidator,{className:"mb-4 w-full",label:"Titulo de la nueva entrada",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{title:e.target.value}))},value:null===j||void 0===j?void 0:j.title,type:"text",name:"title"})}),Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(n.t,{content:null===j||void 0===j?void 0:j.content,handleContentChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{content:e}))},placeholder:"Escribe aqu\xed..."})}),Object(h.jsxs)(l.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(h.jsx)("input",{accept:"image/*",className:e.input,id:"text-button-file",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{imgBlob:e.target.files[0]}));let t=new FileReader;t.onloadend=()=>{console.log(j),p(Object(c.a)(Object(c.a)({},j),{},{img:t.result}))},t.readAsDataURL(e.target.files[0]),k=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]})},type:"file"}),Object(h.jsxs)("label",{htmlFor:"text-button-file",children:[Object(h.jsxs)(o.a,{component:"span",size:"large",color:"secondary",variant:"contained",className:e.button,children:[Object(h.jsx)(r.a,{children:"upload"}),"Upload"]}),k]})]}),Object(h.jsx)(l.a,{item:!0,flex:!0,lg:6,md:6,sm:12,xs:12,children:Object(h.jsxs)(o.a,{className:Object(m.default)("uppercase ml-auto",e.button),size:"large",color:"primary",variant:"contained",type:"submit",children:[Object(h.jsx)(r.a,{children:"send"}),Object(h.jsx)("span",{className:"pl-8 capitalize",children:"Publicar"})]})})]})})]})}}}]);
=======
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[35],{2176:function(e,t,a){"use strict";a.r(t);var c=a(6),s=a(14),i=a(0),n=a(112),l=a(589),o=a(1340),r=a(1356),j=a(605),b=a(52),d=a(26),m=a(5),u=a(29),O=a(38),g=a(79),h=a(1);const x=Object(j.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));t.default=()=>{const e=x(),t=Object(i.useState)(),a=Object(s.a)(t,2),j=a[0],p=a[1],v=Object(i.useState)(!0),f=Object(s.a)(v,2),N=(f[0],f[1]),y=Object(b.a)().user,w=Object(O.h)().search,S=new URLSearchParams(w).get("bid");Object(i.useEffect)((()=>{g.a.get("/b/"+S).then((e=>{p(e.data),N(!1)}))}),[]);var k=Object(h.jsx)("div",{className:"image-container",children:"Seleccione una imagen para la vista previa"});(null===j||void 0===j?void 0:j.img)&&(k=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]}));return Object(h.jsxs)("div",{className:"m-sm-30",children:[Object(h.jsx)("div",{className:"mb-sm-30",children:Object(h.jsx)(n.a,{routeSegments:[{name:"Blogs",path:"/"+y.uid+"/myblogs"},{name:"Nueva entrada"}]})}),Object(h.jsx)(d.ValidatorForm,{onSubmit:()=>{console.log(j),g.a.put("/b/"+S,{blogdata:Object(c.a)({},j)}).then((e=>{console.log(e.data),u.a.push("/"+y.uid+"/myblogs")})).catch((e=>{console.error(e)}))},children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(d.TextValidator,{className:"mb-4 w-full",label:"Titulo de la nueva entrada",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{title:e.target.value}))},value:null===j||void 0===j?void 0:j.title,type:"text",name:"title"})}),Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(n.t,{content:null===j||void 0===j?void 0:j.content,handleContentChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{content:e}))},placeholder:"Escribe aqu\xed..."})}),Object(h.jsxs)(l.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(h.jsx)("input",{accept:"image/*",className:e.input,id:"text-button-file",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{imgBlob:e.target.files[0]}));let t=new FileReader;t.onloadend=()=>{console.log(j),p(Object(c.a)(Object(c.a)({},j),{},{img:t.result}))},t.readAsDataURL(e.target.files[0]),k=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]})},type:"file"}),Object(h.jsxs)("label",{htmlFor:"text-button-file",children:[Object(h.jsxs)(o.a,{component:"span",size:"large",color:"secondary",variant:"contained",className:e.button,children:[Object(h.jsx)(r.a,{children:"upload"}),"Upload"]}),k]})]}),Object(h.jsx)(l.a,{item:!0,flex:!0,lg:6,md:6,sm:12,xs:12,children:Object(h.jsxs)(o.a,{className:Object(m.default)("uppercase ml-auto",e.button),size:"large",color:"primary",variant:"contained",type:"submit",children:[Object(h.jsx)(r.a,{children:"send"}),Object(h.jsx)("span",{className:"pl-8 capitalize",children:"Publicar"})]})})]})})]})}}}]);
>>>>>>> d4d15506fbb0354fffab29ad83932d9dca1231cf:build/static/js/35.852b6b47.chunk.js
