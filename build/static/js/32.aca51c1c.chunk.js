<<<<<<< HEAD:build/static/js/32.e1609cf1.chunk.js
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[32],{2177:function(e,t,a){"use strict";a.r(t);var i=a(6),c=a(14),s=a(0),n=a(112),l=a(1341),o=a(591),r=a(1357),d=(a(48),a(442)),b=a(52),j=a(26),m=a(5),p=a(29),g=a(90),h=a(1);const O=Object(d.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));t.default=()=>{const e=O(),t=Object(s.useState)({title:"",img:"",imgFile:"",content:'<h1>Iknelia | Crea tu propio post</h1><p><a href="http://localhost:3000/dashboard/analytics" target="_blank">en Iknelia</a><p>'}),a=Object(c.a)(t,2),d=a[0],u=a[1],x=Object(b.a)().user;var f=Object(h.jsx)("div",{className:"image-container",children:"Seleccione una imagen para la vista previa"});d.img&&(f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:d.img,alt:"icon",width:"200"})," "]}));return Object(h.jsxs)("div",{className:"m-sm-30",children:[Object(h.jsx)("div",{className:"mb-sm-30",children:Object(h.jsx)(l.a,{variant:"contained",color:"secondary",onClick:()=>p.a.push("/"+x.uid+"/dashboard"),children:"Volver al escritorio"})}),Object(h.jsx)(j.ValidatorForm,{children:Object(h.jsxs)(o.a,{flex:!0,justify:"flex-end",container:!0,spacing:1,children:[Object(h.jsx)(o.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(j.TextValidator,{className:"mb-4 w-full",label:"Titulo de la nueva entrada",onChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{title:e.target.value}))},type:"text",name:"title"})}),Object(h.jsx)(o.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(n.t,{content:d.content,handleContentChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{content:e}))},placeholder:"Escribe aqu\xed..."})}),Object(h.jsxs)(o.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(h.jsx)("input",{accept:"image/*",className:e.input,id:"text-button-file",onChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{imgFile:e.target.files[0]}));let t=new FileReader;t.onloadend=()=>{u(Object(i.a)(Object(i.a)({},d),{},{imgBLOB:t.result}))},t.readAsDataURL(e.target.files[0]),f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:d.img,alt:"icon",width:"200"})," "]})},type:"file"}),Object(h.jsxs)("label",{htmlFor:"text-button-file",children:[Object(h.jsxs)(l.a,{component:"span",size:"large",color:"secondary",variant:"contained",className:e.button,children:[Object(h.jsx)(r.a,{children:"upload"}),"Upload"]}),f]})]}),Object(h.jsx)(o.a,{item:!0,flex:!0,lg:6,md:6,sm:12,xs:12,children:Object(h.jsxs)(l.a,{className:Object(m.default)("uppercase ml-auto",e.button),size:"large",color:"primary",variant:"contained",type:"submit",onClick:()=>{(()=>{var e={title:d.title,content:d.content,date:(new Date).toISOString(),author:x.uid,likes:[],comments:[],img:["https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F1.jpg?alt=media&token=514d6471-8353-421c-9b8e-f9d51216eaf4","https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F2.jpg?alt=media&token=b62b18d7-c8f4-434e-9b47-3dd5b87769e7","https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F3.jpg?alt=media&token=763f7190-0993-4f72-a20f-cbc0a1130cbf"][Math.floor(Math.random()*Math.random()*100%3)]};g.a.post("/t/".concat(x.uid,"/b"),{blogdata:Object(i.a)({},e)}).then((()=>{p.a.push("/"+x.uid+"/myblogs")}))})()},children:[Object(h.jsx)(r.a,{children:"send"}),Object(h.jsx)("span",{className:"pl-8 capitalize",children:"Publicar"})]})})]})})]})}}}]);
=======
(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[32],{2176:function(e,t,a){"use strict";a.r(t);var i=a(6),c=a(14),s=a(0),n=a(112),l=a(1340),o=a(589),r=a(1356),d=(a(51),a(605)),b=a(52),j=a(26),m=a(5),p=a(29),g=a(90),h=a(1);const O=Object(d.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));t.default=()=>{const e=O(),t=Object(s.useState)({title:"",img:"",imgFile:"",content:'<h1>Iknelia | Crea tu propio post</h1><p><a href="http://localhost:3000/dashboard/analytics" target="_blank">en Iknelia</a><p>'}),a=Object(c.a)(t,2),d=a[0],u=a[1],x=Object(b.a)().user;var f=Object(h.jsx)("div",{className:"image-container",children:"Seleccione una imagen para la vista previa"});d.img&&(f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:d.img,alt:"icon",width:"200"})," "]}));return Object(h.jsxs)("div",{className:"m-sm-30",children:[Object(h.jsx)("div",{className:"mb-sm-30",children:Object(h.jsx)(l.a,{variant:"contained",color:"secondary",onClick:()=>p.a.push("/"+x.uid+"/dashboard"),children:"Volver al escritorio"})}),Object(h.jsx)(j.ValidatorForm,{children:Object(h.jsxs)(o.a,{flex:!0,justify:"flex-end",container:!0,spacing:1,children:[Object(h.jsx)(o.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(j.TextValidator,{className:"mb-4 w-full",label:"Titulo de la nueva entrada",onChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{title:e.target.value}))},type:"text",name:"title"})}),Object(h.jsx)(o.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(n.t,{content:d.content,handleContentChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{content:e}))},placeholder:"Escribe aqu\xed..."})}),Object(h.jsxs)(o.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(h.jsx)("input",{accept:"image/*",className:e.input,id:"text-button-file",onChange:e=>{u(Object(i.a)(Object(i.a)({},d),{},{imgFile:e.target.files[0]}));let t=new FileReader;t.onloadend=()=>{u(Object(i.a)(Object(i.a)({},d),{},{imgBLOB:t.result}))},t.readAsDataURL(e.target.files[0]),f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:d.img,alt:"icon",width:"200"})," "]})},type:"file"}),Object(h.jsxs)("label",{htmlFor:"text-button-file",children:[Object(h.jsxs)(l.a,{component:"span",size:"large",color:"secondary",variant:"contained",className:e.button,children:[Object(h.jsx)(r.a,{children:"upload"}),"Upload"]}),f]})]}),Object(h.jsx)(o.a,{item:!0,flex:!0,lg:6,md:6,sm:12,xs:12,children:Object(h.jsxs)(l.a,{className:Object(m.default)("uppercase ml-auto",e.button),size:"large",color:"primary",variant:"contained",type:"submit",onClick:()=>{(()=>{var e={title:d.title,content:d.content,date:(new Date).toISOString(),author:x.uid,likes:[],comments:[],img:["https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F1.jpg?alt=media&token=514d6471-8353-421c-9b8e-f9d51216eaf4","https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F2.jpg?alt=media&token=b62b18d7-c8f4-434e-9b47-3dd5b87769e7","https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F3.jpg?alt=media&token=763f7190-0993-4f72-a20f-cbc0a1130cbf"][Math.floor(Math.random()*Math.random()*100%3)]};g.a.post("/t/".concat(x.uid,"/b"),{blogdata:Object(i.a)({},e)}).then((()=>{p.a.push("/"+x.uid+"/myblogs")}))})()},children:[Object(h.jsx)(r.a,{children:"send"}),Object(h.jsx)("span",{className:"pl-8 capitalize",children:"Publicar"})]})})]})})]})}}}]);
>>>>>>> c5097de0ae959b06eef1952a885325a1561e650f:build/static/js/32.aca51c1c.chunk.js
