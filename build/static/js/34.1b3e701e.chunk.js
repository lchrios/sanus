(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[34],{2137:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(14),n=a(0),i=a(113),l=a(1350),o=a(1327),r=a(1340),j=a(356),b=a(53),d=a(56),m=a(4),u=(a(22),a(48)),O=a(42),g=a(133),h=a(1);const x=Object(j.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));t.default=()=>{const e=x(),t=Object(n.useState)({}),a=Object(s.a)(t,2),j=a[0],p=a[1],v=Object(b.a)().user;Object(n.useEffect)((()=>{g.a.get("/b/"+y).then((e=>{p(e.data)})).then((()=>{console.log(j)}))}),[]);var f=Object(h.jsx)("div",{className:"image-container",children:"Seleccione una imagen para la vista previa"});(null===j||void 0===j?void 0:j.img)&&(f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]}));const N=Object(O.h)().search,y=new URLSearchParams(N).get("bid");return Object(h.jsxs)("div",{className:"m-sm-30",children:[Object(h.jsx)("div",{className:"mb-sm-30",children:Object(h.jsx)(i.a,{routeSegments:[{name:"Blogs",path:"/"+v.uid+"/myblogs"},{name:"Nueva entrada"}]})}),Object(h.jsx)(d.ValidatorForm,{onSubmit:()=>{console.log(j),g.a.put("/b/"+y,{blogdata:Object(c.a)({},j)}),u.a.push("/"+v.uid+"/myblogs")},children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(d.TextValidator,{className:"mb-4 w-full",label:"Titulo de la nueva entrada",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{title:e.target.value}))},value:null===j||void 0===j?void 0:j.title,type:"text",name:"title"})}),Object(h.jsx)(l.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(h.jsx)(i.t,{content:null===j||void 0===j?void 0:j.content,handleContentChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{content:e}))},placeholder:"Escribe aqu\xed..."})}),Object(h.jsxs)(l.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(h.jsx)("input",{accept:"image/*",className:e.input,id:"text-button-file",onChange:e=>{p(Object(c.a)(Object(c.a)({},j),{},{imgBlob:e.target.files[0]}));let t=new FileReader;t.onloadend=()=>{console.log(j),p(Object(c.a)(Object(c.a)({},j),{},{img:t.result}))},t.readAsDataURL(e.target.files[0]),f=Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("img",{src:j.img,alt:"icon",width:"200"})," "]})},type:"file"}),Object(h.jsxs)("label",{htmlFor:"text-button-file",children:[Object(h.jsxs)(o.a,{component:"span",size:"large",color:"secondary",variant:"contained",className:e.button,children:[Object(h.jsx)(r.a,{children:"upload"}),"Upload"]}),f]})]}),Object(h.jsx)(l.a,{item:!0,flex:!0,lg:6,md:6,sm:12,xs:12,children:Object(h.jsxs)(o.a,{className:Object(m.default)("uppercase ml-auto",e.button),size:"large",color:"primary",variant:"contained",type:"submit",children:[Object(h.jsx)(r.a,{children:"send"}),Object(h.jsx)("span",{className:"pl-8 capitalize",children:"Publicar"})]})})]})})]})}}}]);