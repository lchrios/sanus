(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[23],{1907:function(e,t,a){"use strict";var s=a(14),c=a(11),i=a(0),r=a(597),n=a(2039),l=a(1340),o=a(1630),d=a(1327),b=a(1341),j=a(238),m=a(97),h=a(356),u=a(4),p=a(43),x=a(66),O=a(51),g=a(1);const f=Object(h.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}}));let v=!1;t.a=function({container:e}){const t=Object(i.useState)(0),a=Object(s.a)(t,2),c=a[0],h=a[1],y=Object(i.useState)(!1),w=Object(s.a)(y,2),S=w[0],N=w[1],k=f(),C=Object(j.b)(),z=Object(p.g)(),_=Object(O.a)().user,I=Object(j.c)((e=>e.ecommerce)).cartList,D=Object(x.a)().settings;v||(C(Object(m.j)(_.id)),v=!0);const L=()=>{N(!S)};return Object(i.useEffect)((()=>{let e=0;I.forEach((t=>{e+=t.price*t.amount})),h(e)}),[I]),Object(g.jsxs)(i.Fragment,{children:[Object(g.jsx)(r.a,{onClick:L,children:Object(g.jsx)(n.a,{color:"secondary",badgeContent:I.length,children:Object(g.jsx)(l.a,{children:"shopping_cart"})})}),Object(g.jsx)(b.a,{theme:D.themes[D.activeTheme],children:Object(g.jsx)(o.a,{container:e,variant:"temporary",anchor:"right",open:S,onClose:L,ModalProps:{keepMounted:!0},children:Object(g.jsxs)("div",{className:Object(u.default)("flex-column h-full",k.miniCart),children:[Object(g.jsxs)("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4",children:[Object(g.jsx)(l.a,{color:"primary",children:"shopping_cart"}),Object(g.jsx)("h5",{className:"ml-2 my-0 font-medium",children:"Cart"})]}),Object(g.jsx)("div",{className:"flex-grow overflow-auto",children:I.map((e=>Object(g.jsxs)("div",{className:"mini-cart__item flex items-center py-2 px-2",children:[Object(g.jsxs)("div",{className:"flex flex-column mr-1",children:[Object(g.jsx)(r.a,{size:"small",onClick:()=>C(Object(m.k)(_.id,e.id,e.amount+1)),children:Object(g.jsx)(l.a,{className:"cursor-pointer",children:"keyboard_arrow_up"})}),Object(g.jsx)(r.a,{disabled:!(e.amount-1),size:"small",onClick:()=>C(Object(m.k)(_.id,e.id,e.amount-1)),children:Object(g.jsx)(l.a,{className:"cursor-pointer",children:"keyboard_arrow_down"})})]}),Object(g.jsx)("div",{className:"mr-2",children:Object(g.jsx)("img",{className:"w-48",src:e.imgUrl,alt:e.title})}),Object(g.jsxs)("div",{className:"mr-2 text-center flex-grow flex-column",children:[Object(g.jsx)("h6",{className:"m-0 mb-1 ellipsis w-120",children:e.title}),Object(g.jsxs)("small",{className:"text-muted",children:["$",e.price," x ",e.amount]})]}),Object(g.jsx)(r.a,{size:"small",onClick:()=>C(Object(m.i)(_.userId,e.id)),children:Object(g.jsx)(l.a,{fontSize:"small",children:"clear"})})]},e.id)))}),Object(g.jsxs)(d.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:()=>{c>0&&(z.push("/ecommerce/checkout"),N(!1))},children:["Checkout ($",c.toFixed(2),")"]})]})})})]})}},1956:function(e,t,a){"use strict";var s=a(11),c=(a(0),a(356)),i=a(53),r=a(1341),n=a(2151),l=a(1493),o=a(4),d=a(66),b=a(1);const j=Object(c.a)((e=>{e.palette,Object(s.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}}));t.a=()=>{const e=j(),t=Object(i.a)(),a=Object(d.a)().settings,s=a.themes[a.footer.theme]||t;return Object(b.jsx)(r.a,{theme:s,children:Object(b.jsx)(n.a,{color:"primary",position:"fixed",className:e.appbar,children:Object(b.jsx)(l.a,{className:Object(o.default)("flex items-center",e.footer),children:Object(b.jsxs)("div",{className:"flex items-center container w-full",children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsxs)("p",{className:"m-0",children:["Desarrollado por"," ",Object(b.jsx)("a",{href:"https://github.com/lchrios/iknelia",children:"ChriVias Soft"})]})]})})})})}},1957:function(e,t,a){"use strict";a(0);var s=a(1341),c=a(53),i=a(66),r=a(1);t.a=({children:e})=>{const t=Object(c.a)(),a=Object(i.a)().settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return Object(r.jsx)(s.a,{theme:n,children:e})}},1958:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(43),c=a(2),i=a(0),r=a.n(i);function n(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?r.a.createElement(s.d,a,e.map((function(e,a){return r.a.createElement(s.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(c.a)({},a,{},t,{route:e})):r.a.createElement(e.component,Object(c.a)({},a,t,{route:e}))}})}))):null}},1962:function(e,t,a){"use strict";var s=a(0),c=a(11),i=a(597),r=a(1340),n=a(1944),l=a(356),o=a(4),d=a(66),b=a(1);const j=Object(l.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}}));var m=()=>{const e=j(),t=Object(d.a)(),a=t.settings,s=t.updateSettings,c=()=>{s({secondarySidebar:{open:!a.secondarySidebar.open}})};return Object(b.jsxs)("div",{className:Object(o.default)({[e.toggle]:!0,open:a.secondarySidebar.open}),children:[a.secondarySidebar.open&&Object(b.jsx)(i.a,{onClick:c,size:"small","aria-label":"toggle",children:Object(b.jsx)(r.a,{children:"close"})}),!a.secondarySidebar.open&&Object(b.jsx)(n.a,{color:"primary","aria-label":"expand",className:"",onClick:c,children:Object(b.jsx)(r.a,{children:"settings"})})]})},h=a(5),u=a(14),p=a(1627),x=a(1630),O=a(1327),g=a(1298),f=a(2153),v=a(354),y=a.n(v),w=a(2039),S=a(9);var N=Object(S.a)((e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}})))(w.a),k=a(1341);const C=Object(l.a)((e=>{let t=e.palette;Object(c.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}})),z=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}];var _=e=>{const t=Object(s.useState)(!1),a=Object(u.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)(0),j=Object(u.a)(l,2),m=j[0],v=j[1],w=C(),S=Object(d.a)(),_=S.settings,I=S.updateSettings,D=()=>{n(!c)},L=e=>{v(e)};let R=Object(h.a)({},_.themes[_.activeTheme]);return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(p.a,{title:"Theme Settings",placement:"left",children:Object(b.jsx)("span",{className:Object(o.default)({[w.label]:!0,open:c}),onClick:D,children:"DEMOS"})}),Object(b.jsx)(k.a,{theme:R,children:Object(b.jsx)(x.a,{anchor:"right",open:c,variant:"temporary",onClose:D,ModalProps:{keepMounted:!0},children:Object(b.jsxs)("div",{className:Object(o.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",w.maxCustomizer),children:[Object(b.jsxs)("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6",children:[Object(b.jsx)(r.a,{color:"primary",children:"settings"}),Object(b.jsx)("h5",{className:"mb-0 ml-2",children:"Theme Settings"}),Object(b.jsx)(i.a,{onClick:D,className:w.customizerCloseButton,children:Object(b.jsx)(r.a,{children:"close"})})]}),Object(b.jsxs)("div",{className:"px-6 mb-4 flex",children:[Object(b.jsx)(O.a,{variant:"outlined",color:0===m?"secondary":"primary",onClick:()=>L(0),className:"mr-4",children:"Demos"}),Object(b.jsx)(O.a,{variant:"outlined",color:1===m?"secondary":"primary",onClick:()=>L(1),children:"Settings"})]}),Object(b.jsxs)(y.a,{options:{suppressScrollX:!0},className:"px-4",children:[0===m&&Object(b.jsxs)("div",{className:"mb-8 mx-2",children:[Object(b.jsx)("div",{className:"text-muted",children:"Layouts"}),Object(b.jsx)("div",{className:"flex-column",children:z.map((e=>Object(b.jsx)(N,{color:"secondary",className:Object(o.default)("w-full my-3 max-h-152 cursor-pointer",w.layoutBox),badgeContent:"Pro",invisible:!e.isPro,children:Object(b.jsxs)(g.a,{className:"relative",onClick:()=>I(e.options),elevation:4,children:[Object(b.jsx)("div",{className:"layout-name hidden",children:Object(b.jsx)(O.a,{variant:"contained",color:"secondary",children:e.name})}),Object(b.jsx)("img",{className:"w-full",src:e.thumbnail,alt:e.name})]})},e.name)))})]}),1===m&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:w.helpText,children:["We used React context API to control layout. Check out the"," ",Object(b.jsx)(f.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},I=a(1907),D=a(113);const L=Object(l.a)((e=>{let t=e.palette;return{root:{position:"fixed",height:"100vh",width:e=>e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(c.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}}));var R=()=>{const e=L({width:"50px"});return Object(b.jsxs)("div",{className:Object(o.default)("secondary-sidebar",e.root),children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsx)(_,{}),Object(b.jsx)(I.a,{}),Object(b.jsx)(D.c,{icon:Object(b.jsx)(i.a,{className:"my-3",size:"small",children:Object(b.jsx)(r.a,{children:"comments"})}),children:Object(b.jsx)(D.d,{})}),Object(b.jsx)("span",{className:"m-auto"})]})};var T=({theme:e,classes:t,children:a,open:s})=>Object(b.jsx)(k.a,{theme:e,children:a});t.a=()=>{const e=Object(d.a)().settings,t=e.themes[e.secondarySidebar.theme];return Object(b.jsxs)(T,{theme:t,children:[e.secondarySidebar.open&&Object(b.jsx)(R,{}),Object(b.jsx)(m,{})]})}},1965:function(e,t,a){"use strict";var s=a(5),c=a(11),i=a(0),r=a.n(i),n=a(356),l=a(53),o=a(354),d=a.n(o),b=a(364),j=a(113),m=a(4),h=a(66),u=a(597),p=a(1340),x=a(1);const O=Object(n.a)((e=>{e.palette;return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[Object(c.a)(e,["palette"]).breakpoints.up("lg")]:{display:"none"}}}}));var g=({children:e})=>{const t=O(),a=Object(h.a)(),c=a.settings,r=a.updateSettings;return Object(x.jsxs)(i.Fragment,{children:[Object(x.jsxs)(d.a,{options:{suppressScrollX:!0},className:Object(m.default)("relative px-4",t.scrollable),children:[e,Object(x.jsx)(u.a,{children:Object(x.jsx)(p.a,{children:"clear"})}),Object(x.jsx)(j.s,{items:b.a})]}),Object(x.jsx)("div",{onClick:()=>(e=>{let t=c.activeLayout+"Settings",a=c[t];r(Object(s.a)(Object(s.a)({},c),{},{[t]:Object(s.a)(Object(s.a)({},a),{},{leftSidebar:Object(s.a)(Object(s.a)({},a.leftSidebar),e)})}))})({mode:"close"}),className:t.sidenavMobileOverlay})]})},f=a(368),v=a(1359),y=a(2154),w=a(129);const S=Object(n.a)((e=>{let t=e.palette,a=Object(c.a)(e,["palette"]);return{sidenav:({width:e,primaryRGB:s,bgImgURL:c})=>({position:"fixed",top:0,left:0,height:"100vh",width:e,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(s,", 0.96), rgba(").concat(s,", 0.96)), url(").concat(c,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}),hideOnCompact:{display:"none"},userInfo:{}}})),N=()=>{const e=Object(l.a)(),t=Object(h.a)(),a=t.settings,c=t.updateSettings,i=a.layout1Settings.leftSidebar,r=i.mode,n=Object(w.b)(e.palette.primary.main),o=S(Object(s.a)(Object(s.a)({},i),{},{width:(()=>{switch(r){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}})(),primaryRGB:n}));return Object(x.jsx)("div",{className:o.sidenav,children:Object(x.jsxs)("div",{className:"flex-column relative h-full",children:[Object(x.jsx)(f.b,{children:Object(x.jsx)(v.a,{smDown:!0,children:Object(x.jsx)(y.a,{onChange:()=>{var e;e={mode:"compact"===r?"full":"compact"},c({layout1Settings:{leftSidebar:Object(s.a)({},e)}})},checked:"full"!==i.mode,color:"secondary",size:"small"})})}),Object(x.jsx)(g,{})]})})};t.a=r.a.memo(N)},2167:function(e,t,a){"use strict";a.r(t);var s=a(11),c=a(0),i=a.n(c),r=a(1341),n=a(1285),l=a(354),o=a.n(l),d=a(1958),b=a(5),j=a(597),m=a(1340),h=a(1359),u=a(1361),p=a(1492),x=a(113),O=(a(14),a(2039),a(1630),a(1298),a(1327),a(28)),g=(a(129),a(356)),f=a(4),v=a(66),y=(a(49),a(73),a(22),a(1));Object(g.a)((e=>{e.palette,Object(s.a)(e,["palette"]);return{notification:{width:"var(--sidenav-width)","& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}}));a(1907);var w=a(53),S=a(51);const N=Object(g.a)((e=>{let t=e.palette,a=Object(s.a)(e,["palette"]);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":{backgroundColor:t.primary.main,height:80,paddingLeft:18,paddingRight:20,[a.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[a.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}},"& .fixed":{boxShadow:a.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),k=()=>{var e,t;const a=Object(w.a)(),s=N(),c=Object(v.a)(),i=c.settings,r=c.updateSettings,l=Object(S.a)(),o=l.logout,d=l.user,g=Object(n.a)(a.breakpoints.down("md")),k=null===i||void 0===i||null===(e=i.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed;return Object(y.jsx)("div",{className:s.topbar,children:Object(y.jsx)("div",{className:Object(f.default)({"topbar-hold":!0,fixed:k}),children:Object(y.jsxs)("div",{className:"flex justify-between items-center h-full",children:[Object(y.jsx)("div",{className:"flex",children:Object(y.jsx)(j.a,{onClick:()=>{let e,t=i.layout1Settings;var a;e=g?"close"===t.leftSidebar.mode?"mobile":"close":"full"===t.leftSidebar.mode?"close":"full",a={mode:e},r({layout1Settings:{leftSidebar:Object(b.a)({},a)}})},className:"hide-on-pc",children:Object(y.jsx)(m.a,{children:"menu"})})}),Object(y.jsx)("div",{className:"flex items-center",children:Object(y.jsxs)(x.k,{menuButton:Object(y.jsxs)("div",{className:s.userMenu,children:[Object(y.jsx)(h.a,{xsDown:!0,children:Object(y.jsxs)("span",{children:["Hi ",Object(y.jsx)("strong",{children:d.name})]})}),Object(y.jsx)(u.a,{className:"cursor-pointer",src:d.avatar})]}),children:[Object(y.jsx)(p.a,{children:Object(y.jsxs)(O.b,{className:s.menuItem,to:"/",children:[Object(y.jsx)(m.a,{children:" home "}),Object(y.jsx)("span",{className:"pl-4",children:" Home "})]})}),Object(y.jsx)(p.a,{children:Object(y.jsxs)(O.b,{className:s.menuItem,to:"/page-layouts/user-profile",children:[Object(y.jsx)(m.a,{children:" person "}),Object(y.jsx)("span",{className:"pl-4",children:" Profile "})]})}),Object(y.jsxs)(p.a,{className:s.menuItem,children:[Object(y.jsx)(m.a,{children:" settings "}),Object(y.jsx)("span",{className:"pl-4",children:" Settings "})]}),Object(y.jsxs)(p.a,{onClick:o,className:s.menuItem,children:[Object(y.jsx)(m.a,{children:" power_settings_new "}),Object(y.jsx)("span",{className:"pl-4",children:" Logout "})]})]})})]})})})};var C=i.a.memo(k),z=a(1965),_=a(1956),I=a(1962),D=a(206),L=a(1957);const R=Object(g.a)((e=>{e.palette;let t=Object(s.a)(e,["palette"]);return{contentWrap:({width:e,secondarySidebar:a})=>({verticalAlign:"top",marginLeft:e,transition:"all 0.3s ease",[t.breakpoints.up("sm")]:{marginRight:a.open?50:0}}),topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}})),T=()=>{const e=Object(v.a)(),t=e.settings,a=e.updateSettings,s=t.layout1Settings,i=t.secondarySidebar,l=s.leftSidebar,b=l.mode,j=l.show,m=Object(c.useContext)(D.a).routes,h=(()=>{switch(b){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}})();let u=R({width:h,secondarySidebar:i});const p=Object(w.a)(),O=Object(n.a)(p.breakpoints.down("md")),g=Object(c.useRef)({isMdScreen:O,settings:t}),S=t.themes[s.topbar.theme],N="theme-".concat(p.palette.type," flex");return Object(c.useEffect)((()=>{let e=g.current.settings,t=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){a({layout1Settings:{leftSidebar:{mode:O?"close":t}}})}}),[O]),Object(y.jsxs)("div",{className:Object(f.default)("bg-default",N),children:[j&&"close"!==b&&Object(y.jsx)(L.a,{children:Object(y.jsx)(z.a,{})}),Object(y.jsxs)("div",{className:Object(f.default)("flex-grow flex-column relative overflow-hidden h-full-screen",u.contentWrap),children:[s.topbar.show&&s.topbar.fixed&&Object(y.jsx)(r.a,{theme:S,children:Object(y.jsx)(C,{fixed:!0,className:"elevation-z8"})}),t.perfectScrollbar&&Object(y.jsxs)(o.a,{className:"flex-grow flex-column relative h-full",children:[s.topbar.show&&!s.topbar.fixed&&Object(y.jsx)(r.a,{theme:S,children:Object(y.jsx)(C,{})}),Object(y.jsx)("div",{className:"relative flex-grow",children:Object(y.jsx)(x.p,{children:Object(d.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(y.jsx)(_.a,{})]}),!t.perfectScrollbar&&Object(y.jsxs)("div",{className:"flex-grow flex-column relative h-full scroll-y",children:[s.topbar.show&&!s.topbar.fixed&&Object(y.jsx)(r.a,{theme:S,children:Object(y.jsx)(C,{})}),Object(y.jsx)("div",{className:"relative flex-grow",children:Object(y.jsx)(x.p,{children:Object(d.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(y.jsx)(_.a,{})]}),t.footer.show&&t.footer.fixed&&Object(y.jsx)(_.a,{})]}),t.secondarySidebar.show&&Object(y.jsx)(I.a,{})]})};t.default=i.a.memo(T)}}]);