(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[21],{1438:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"i",(function(){return p})),a.d(t,"g",(function(){return x})),a.d(t,"a",(function(){return O})),a.d(t,"h",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"f",(function(){return v})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return w}));var n,i,r,o,l,s,c,d,b,m=a(351),h=a(348),j=a(40);const u=h.default.nav(n||(n=Object(m.a)(["\n background: ",";\n height:80px;\n margin-top: -80px;\n display:flex;\n justify-content:center;\n align-items: center;\n font-size: 1rem;\n position: sticky;\n top: 0;\n z-index:10;\n\n @media screen and (max-width:960px) {\n     transition: 0.8s all ease;\n }\n"])),(({scrollNav:e})=>e?"#00009C":"transparent")),p=h.default.div(i||(i=Object(m.a)(["\n \n display: flex; \n justify-content:space-between;\n height:80px;\n z-index:1;\n width:100%;\n padding:0 24px;\n max-width:1100px;\n"]))),x=Object(h.default)(j.b)(r||(r=Object(m.a)(["\n color:white;\n\n justify-self: flex-start;\n cursor:pointer;\n font-family: 'Dancing Script', cursive;\n font-size:36px;\n display:flex;\n align-items:center;\n margin-left:24px;\n font-weight:bold;\n text-decoration:none;\n \n"]))),O=h.default.div(o||(o=Object(m.a)(["\ndisplay:none;\n\n @media screen and (max-width: 960px) {\n     color:white;\n     display:block;\n     position:absolute;\n     top:0;\n     right:0;\n     transform: translate(-100%, 60%);\n     font-size:1.8rem;\n     cursor:pointer;\n\n }\n"]))),f=h.default.ul(l||(l=Object(m.a)(["\ncolor:white;\ndisplay:flex;\nalign-items:center;\nlist-style:none;\ntext-align:center;\nmargin-right:-22px;\n\n \n\n @media screen and (max-width:960px) {\n     display:none;\n }\n"]))),g=h.default.li(s||(s=Object(m.a)(["\n height:80px;\n"]))),v=Object(h.default)(j.b)(c||(c=Object(m.a)(["\ncolor:white;\ndisplay:flex;\nalign-items:center;\ntext-decoration:none;\npadding:0 1rem;\nheight: 100%;\ncursor: pointer;\n\n    &:active {\n     border-bottom:3px solid #01bf71\n }\n"]))),y=h.default.nav(d||(d=Object(m.a)(["\ndisplay:flex;\nalign-items:center;\n\n@media screen and (max-widhth: 960px) {\ndisplay:none;\n};\n"]))),w=Object(h.default)(j.b)(b||(b=Object(m.a)(["\nborder-radius: 50px;\nbackground: #01bf71;\nwhite-space:nowrap;\npadding: 10px 22px;\ncolor: #010606;\nfont-size: 16px;\noutline:none;\nborder:none;\ncursor:pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration:none;\n\n&:hover {\n    transition: all 0.2s ease-in-out;\n    background: white;\n    color: #010606;\n};\n"])))},1696:function(e,t,a){"use strict";var n=a(11),i=(a(0),a(442)),r=a(53),o=a(1357),l=a(2169),s=a(1552),c=a(5),d=a(65),b=a(1);const m=Object(i.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}}));t.a=()=>{const e=m(),t=Object(r.a)(),a=Object(d.a)().settings,n=a.themes[a.footer.theme]||t;return Object(b.jsx)(o.a,{theme:n,children:Object(b.jsx)(l.a,{color:"primary",position:"fixed",className:e.appbar,children:Object(b.jsx)(s.a,{className:Object(c.default)("flex items-center",e.footer),children:Object(b.jsxs)("div",{className:"flex items-center container w-full",children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsxs)("p",{className:"m-0",children:["Desarrollado por"," ",Object(b.jsx)("a",{href:"https://github.com/lchrios/iknelia",children:"ChriVias Soft"})]})]})})})})}},1697:function(e,t,a){"use strict";a(0);var n=a(1357),i=a(53),r=a(65),o=a(1);t.a=({children:e})=>{const t=Object(i.a)(),a=Object(r.a)().settings,l=a.themes[a.layout1Settings.leftSidebar.theme]||t;return Object(o.jsx)(n.a,{theme:l,children:e})}},1698:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(38),i=a(2),r=a(0),o=a.n(r);function l(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?o.a.createElement(n.d,a,e.map((function(e,a){return o.a.createElement(n.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(i.a)({},a,{},t,{route:e})):o.a.createElement(e.component,Object(i.a)({},a,t,{route:e}))}})}))):null}},1700:function(e,t,a){"use strict";var n=a(0),i=a(11),r=a(608),o=a(1356),l=a(1691),s=a(442),c=a(5),d=a(65),b=a(1);const m=Object(s.a)((e=>{e.palette,Object(i.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}}));var h=()=>{const e=m(),t=Object(d.a)(),a=t.settings,n=t.updateSettings,i=()=>{n({secondarySidebar:{open:!a.secondarySidebar.open}})};return Object(b.jsxs)("div",{className:Object(c.default)({[e.toggle]:!0,open:a.secondarySidebar.open}),children:[a.secondarySidebar.open&&Object(b.jsx)(r.a,{onClick:i,size:"small","aria-label":"toggle",children:Object(b.jsx)(o.a,{children:"close"})}),!a.secondarySidebar.open&&Object(b.jsx)(l.a,{color:"primary","aria-label":"expand",className:"",onClick:i,children:Object(b.jsx)(o.a,{children:"settings"})})]})},j=a(6),u=a(14),p=a(1759),x=a(1802),O=a(1340),f=a(1309),g=a(2171),v=a(359),y=a.n(v),w=a(2048),S=a(9);var k=Object(S.a)((e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}})))(w.a),z=a(1357);const N=Object(s.a)((e=>{let t=e.palette;Object(i.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}})),C=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}];var I=e=>{const t=Object(n.useState)(!1),a=Object(u.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),h=m[0],v=m[1],w=N(),S=Object(d.a)(),I=S.settings,D=S.updateSettings,T=()=>{l(!i)},_=e=>{v(e)};let L=Object(j.a)({},I.themes[I.activeTheme]);return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(p.a,{title:"Theme Settings",placement:"left",children:Object(b.jsx)("span",{className:Object(c.default)({[w.label]:!0,open:i}),onClick:T,children:"DEMOS"})}),Object(b.jsx)(z.a,{theme:L,children:Object(b.jsx)(x.a,{anchor:"right",open:i,variant:"temporary",onClose:T,ModalProps:{keepMounted:!0},children:Object(b.jsxs)("div",{className:Object(c.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",w.maxCustomizer),children:[Object(b.jsxs)("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6",children:[Object(b.jsx)(o.a,{color:"primary",children:"settings"}),Object(b.jsx)("h5",{className:"mb-0 ml-2",children:"Theme Settings"}),Object(b.jsx)(r.a,{onClick:T,className:w.customizerCloseButton,children:Object(b.jsx)(o.a,{children:"close"})})]}),Object(b.jsxs)("div",{className:"px-6 mb-4 flex",children:[Object(b.jsx)(O.a,{variant:"outlined",color:0===h?"secondary":"primary",onClick:()=>_(0),className:"mr-4",children:"Demos"}),Object(b.jsx)(O.a,{variant:"outlined",color:1===h?"secondary":"primary",onClick:()=>_(1),children:"Settings"})]}),Object(b.jsxs)(y.a,{options:{suppressScrollX:!0},className:"px-4",children:[0===h&&Object(b.jsxs)("div",{className:"mb-8 mx-2",children:[Object(b.jsx)("div",{className:"text-muted",children:"Layouts"}),Object(b.jsx)("div",{className:"flex-column",children:C.map((e=>Object(b.jsx)(k,{color:"secondary",className:Object(c.default)("w-full my-3 max-h-152 cursor-pointer",w.layoutBox),badgeContent:"Pro",invisible:!e.isPro,children:Object(b.jsxs)(f.a,{className:"relative",onClick:()=>D(e.options),elevation:4,children:[Object(b.jsx)("div",{className:"layout-name hidden",children:Object(b.jsx)(O.a,{variant:"contained",color:"secondary",children:e.name})}),Object(b.jsx)("img",{className:"w-full",src:e.thumbnail,alt:e.name})]})},e.name)))})]}),1===h&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:w.helpText,children:["We used React context API to control layout. Check out the"," ",Object(b.jsx)(g.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},D=a(231),T=a(97),_=a(38),L=a(52);const B=Object(s.a)((e=>{e.palette,Object(i.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}}));let P=!1;var R=function({container:e}){const t=Object(n.useState)(0),a=Object(u.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),h=m[0],j=m[1],p=B(),f=Object(D.b)(),g=Object(_.g)(),v=Object(L.a)().user,y=Object(D.c)((e=>e.ecommerce)).cartList,S=Object(d.a)().settings;P||(f(Object(T.j)(v.id)),P=!0);const k=()=>{j(!h)};return Object(n.useEffect)((()=>{let e=0;y.forEach((t=>{e+=t.price*t.amount})),l(e)}),[y]),Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(r.a,{onClick:k,children:Object(b.jsx)(w.a,{color:"secondary",badgeContent:y.length,children:Object(b.jsx)(o.a,{children:"shopping_cart"})})}),Object(b.jsx)(z.a,{theme:S.themes[S.activeTheme],children:Object(b.jsx)(x.a,{container:e,variant:"temporary",anchor:"right",open:h,onClose:k,ModalProps:{keepMounted:!0},children:Object(b.jsxs)("div",{className:Object(c.default)("flex-column h-full",p.miniCart),children:[Object(b.jsxs)("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4",children:[Object(b.jsx)(o.a,{color:"primary",children:"shopping_cart"}),Object(b.jsx)("h5",{className:"ml-2 my-0 font-medium",children:"Cart"})]}),Object(b.jsx)("div",{className:"flex-grow overflow-auto",children:y.map((e=>Object(b.jsxs)("div",{className:"mini-cart__item flex items-center py-2 px-2",children:[Object(b.jsxs)("div",{className:"flex flex-column mr-1",children:[Object(b.jsx)(r.a,{size:"small",onClick:()=>f(Object(T.k)(v.id,e.id,e.amount+1)),children:Object(b.jsx)(o.a,{className:"cursor-pointer",children:"keyboard_arrow_up"})}),Object(b.jsx)(r.a,{disabled:!(e.amount-1),size:"small",onClick:()=>f(Object(T.k)(v.id,e.id,e.amount-1)),children:Object(b.jsx)(o.a,{className:"cursor-pointer",children:"keyboard_arrow_down"})})]}),Object(b.jsx)("div",{className:"mr-2",children:Object(b.jsx)("img",{className:"w-48",src:e.imgUrl,alt:e.title})}),Object(b.jsxs)("div",{className:"mr-2 text-center flex-grow flex-column",children:[Object(b.jsx)("h6",{className:"m-0 mb-1 ellipsis w-120",children:e.title}),Object(b.jsxs)("small",{className:"text-muted",children:["$",e.price," x ",e.amount]})]}),Object(b.jsx)(r.a,{size:"small",onClick:()=>f(Object(T.i)(v.userId,e.id)),children:Object(b.jsx)(o.a,{fontSize:"small",children:"clear"})})]},e.id)))}),Object(b.jsxs)(O.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:()=>{i>0&&(g.push("/ecommerce/checkout"),j(!1))},children:["Checkout ($",i.toFixed(2),")"]})]})})})]})},M=a(112);const W=Object(s.a)((e=>{let t=e.palette;return{root:{position:"fixed",height:"100vh",width:e=>e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(i.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}}));var E=()=>{const e=W({width:"50px"});return Object(b.jsxs)("div",{className:Object(c.default)("secondary-sidebar",e.root),children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsx)(I,{}),Object(b.jsx)(R,{}),Object(b.jsx)(M.c,{icon:Object(b.jsx)(r.a,{className:"my-3",size:"small",children:Object(b.jsx)(o.a,{children:"comments"})}),children:Object(b.jsx)(M.d,{})}),Object(b.jsx)("span",{className:"m-auto"})]})};var F=({theme:e,classes:t,children:a,open:n})=>Object(b.jsx)(z.a,{theme:e,children:a});t.a=()=>{const e=Object(d.a)().settings,t=e.themes[e.secondarySidebar.theme];return Object(b.jsxs)(F,{theme:t,children:[e.secondarySidebar.open&&Object(b.jsx)(E,{}),Object(b.jsx)(h,{})]})}},1703:function(e,t,a){"use strict";var n=a(6),i=a(11),r=a(0),o=a.n(r),l=a(442),s=a(53),c=a(359),d=a.n(c),b=a(360),m=a(112),h=a(5),j=a(65),u=a(608),p=a(1356),x=a(1);const O=Object(l.a)((e=>{e.palette;return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[Object(i.a)(e,["palette"]).breakpoints.up("lg")]:{display:"none"}}}}));var f=({children:e})=>{const t=O(),a=Object(j.a)(),i=a.settings,o=a.updateSettings;return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsxs)(d.a,{options:{suppressScrollX:!0},className:Object(h.default)("relative px-4",t.scrollable),children:[e,Object(x.jsx)(u.a,{children:Object(x.jsx)(p.a,{children:"clear"})}),Object(x.jsx)(m.s,{items:b.a})]}),Object(x.jsx)("div",{onClick:()=>(e=>{let t=i.activeLayout+"Settings",a=i[t];o(Object(n.a)(Object(n.a)({},i),{},{[t]:Object(n.a)(Object(n.a)({},a),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.leftSidebar),e)})}))})({mode:"close"}),className:t.sidenavMobileOverlay})]})},g=a(368),v=a(1375),y=a(2172),w=a(129);const S=Object(l.a)((e=>{let t=e.palette,a=Object(i.a)(e,["palette"]);return{sidenav:({width:e,primaryRGB:n,bgImgURL:i})=>({position:"fixed",top:0,left:0,height:"100vh",width:e,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(n,", 0.96), rgba(").concat(n,", 0.96)), url(").concat(i,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}),hideOnCompact:{display:"none"},userInfo:{}}})),k=()=>{const e=Object(s.a)(),t=Object(j.a)(),a=t.settings,i=t.updateSettings,r=a.layout1Settings.leftSidebar,o=r.mode,l=Object(w.b)(e.palette.primary.main),c=S(Object(n.a)(Object(n.a)({},r),{},{width:(()=>{switch(o){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}})(),primaryRGB:l}));return Object(x.jsx)("div",{className:c.sidenav,children:Object(x.jsxs)("div",{className:"flex-column relative h-full",children:[Object(x.jsx)(g.b,{children:Object(x.jsx)(v.a,{smDown:!0,children:Object(x.jsx)(y.a,{onChange:()=>{var e;e={mode:"compact"===o?"full":"compact"},i({layout1Settings:{leftSidebar:Object(n.a)({},e)}})},checked:"full"!==r.mode,color:"secondary",size:"small"})})}),Object(x.jsx)(f,{})]})})};t.a=o.a.memo(k)},2188:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1357),r=a(1375),o=a(198),l=a(1696),s=a(11),c=a(112),d=a(360),b=a(442),m=a(5),h=a(1);const j=Object(b.a)((e=>{let t=e.palette;Object(s.a)(e,["palette"]);return{root:{"&, & .horizontal-nav ul ul":{background:t.primary.main},"& .horizontal-nav a, & .horizontal-nav label":{color:t.primary.contrastText},"& .horizontal-nav ul li ul li:hover, & .horizontal-nav ul li ul li.open":{background:t.primary.dark}}}}));var u=()=>{const e=j();return Object(h.jsx)("div",{className:Object(m.default)("navbar",e.root),children:Object(h.jsx)("div",{className:"pl-6",children:Object(h.jsx)(c.h,{navigation:d.a,max:6})})})},p=a(6),x=a(1377),O=a(1435),f=a(1356),g=a(608),v=a(40),y=a(65),w=a(52),S=a(32),k=a(1438);const z=Object(b.a)((e=>{let t=e.palette,a=Object(s.a)(e,["palette"]);return{root:{backgroundColor:t.primary.main,borderColor:t.divider,display:"table",height:"var(--topbar-height)",borderBottom:"1px solid transparent",paddingTop:"1rem",paddingBottom:"1rem",zIndex:98,paddingLeft:"1.75rem",[a.breakpoints.down("sm")]:{paddingLeft:"1rem"}},brandText:{color:t.primary.contrastText},menuItem:{minWidth:185,display:"flex",alignItems:"center"}}}));var N=()=>{const e=z(),t=Object(y.a)(),a=t.settings,n=t.updateSettings,i=Object(w.a)(),o=i.logout,l=i.user;return Object(h.jsx)("div",{className:Object(m.default)("relative w-full",e.root),children:Object(h.jsxs)("div",{className:"flex justify-between items-center h-full",children:[Object(h.jsx)("div",{className:"flex items-center h-full",children:Object(h.jsx)(k.g,{to:"/home",children:"Iknelia"})}),Object(h.jsx)("div",{className:"mx-auto"}),Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsxs)(c.r,{offsetTop:"64px",children:[Object(h.jsx)("span",{className:"pl-1",children:Object(h.jsx)("h3",{className:e.brandText,children:l.name})}),Object(h.jsxs)(c.k,{menuButton:Object(h.jsx)(x.a,{className:"cursor-pointer mx-2",src:l.img}),children:[Object(h.jsxs)(O.a,{className:e.menuItem,children:[Object(h.jsx)(f.a,{children:" home "}),Object(h.jsx)("span",{className:"pl-4",children:" Home "})]}),Object(h.jsx)(O.a,{children:Object(h.jsxs)(v.b,{className:e.menuItem,to:"/page-layouts/user-profile",children:[Object(h.jsx)(f.a,{children:" person "}),Object(h.jsx)("span",{className:"pl-4",children:" Profile "})]})}),Object(h.jsxs)(O.a,{className:e.menuItem,children:[Object(h.jsx)(f.a,{children:" settings "}),Object(h.jsx)("span",{className:"pl-4",children:" Settings "})]}),Object(h.jsxs)(O.a,{onClick:()=>{o().then((()=>{S.a.push("/home")}))},className:e.menuItem,children:[Object(h.jsx)(f.a,{children:" power_settings_new "}),Object(h.jsx)("span",{className:"pl-4",children:" Logout "})]})]})]}),Object(h.jsx)(r.a,{mdUp:!0,children:Object(h.jsx)(g.a,{className:"text-white",onClick:()=>{let e="close"===a.layout2Settings.leftSidebar.mode?"mobile":"close";var t;t={mode:e},n({layout2Settings:{leftSidebar:Object(p.a)({},t)}})},children:Object(h.jsx)(f.a,{children:"menu"})})})]})]})})},C=a(359),I=a.n(C),D=a(1700),T=a(1698),_=a(254);const L=Object(b.a)((e=>{e.palette,Object(s.a)(e,["palette"]);return{"@global":{".layout2":{transition:"all 0.15s ease"},".layout2.sidenav-close .sidenav":{left:"-var(--sidenav-width)"},".layout2 .navbar":{position:"relative",height:"var(--navbar-height)",boxShadow:"var(--elevation-z8)",zIndex:"98"},".horizontal-nav ul":{padding:"0",margin:"0",listStyle:"none",position:"relative"},".horizontal-nav ul.menu":{float:"left",paddingRight:"45px",marginLeft:"-20px",zIndex:"99"},".horizontal-nav ul.menu > li":{float:"left"},".horizontal-nav ul.menu > li > div > a, .horizontal-nav ul.menu > li > div > div":{borderBottom:"2px solid",height:"48px",boxSizing:"border-box",borderColor:"transparent",margin:"0 6px"},".horizontal-nav ul li":{position:"relative",margin:"0px",display:"inline-block"},".horizontal-nav ul li ul a":{padding:"8px 20px",height:"48px"},".horizontal-nav a, .horizontal-nav label":{display:"flex",flexDirection:"row",alignItems:"center",padding:"13px 20px",height:"var(--navbar-height)",fontSize:"0.875rem",textDecoration:"none",boxSizing:"border-box"},".horizontal-nav a .material-icons, .horizontal-nav label .material-icons":{fontSize:"14px",margin:"0 4px"},".horizontal-nav ul ul":{opacity:"0",visibility:"hidden",position:"absolute",left:"20px",boxShadow:"var(--elevation-z8)",top:"var(--navbar-height)",transform:"translateY(-10px)",transition:"all 0.3s ease-in-out",zIndex:"-1"},".horizontal-nav ul li:hover > div > div > ul, .horizontal-nav ul li:hover > div > ul, .horizontal-nav li:hover > ul":{opacity:"1",visibility:"visible",transform:"translateY(0)"},".horizontal-nav ul ul li":{width:"170px",float:"none",display:"list-item",position:"relative"},".horizontal-nav ul ul ul":{top:"0",left:"170px"},".horizontal-nav ul ul ul li":{position:"relative",top:"0"},".horizontal-nav li > a:after":{content:'"arrow_drop_down"',fontFamily:'"Material Icons"',fontWeight:"normal",fontStyle:"normal",fontSize:"14px",lineHeight:"1",marginLeft:"auto",letterSpacing:"normal",textTransform:"none",display:"inline-block",whiteSpace:"nowrap",wordWrap:"normal",direction:"ltr",W:"antialiased",fallbacks:[{W:'"liga"'}]},".horizontal-nav li > a:only-child:after":{content:'" "'}}}}));var B=a(1697),P=a(1703);t.default=()=>{L();const e=Object(_.a)(),t=Object(n.useContext)(o.a).routes,a=Object(y.a)().settings;let s=a.layout2Settings,c=a.themes[s.topbar.theme],d=a.themes[s.navbar.theme];const b=s.leftSidebar,j=b.mode,p=b.show;let x={[a.activeLayout]:!0,"bg-default text-primary":!0,["sidenav-".concat(s.leftSidebar.mode)]:!0,["layout-".concat(s.mode," theme-").concat(e.palette.type)]:!0};return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsxs)("div",{className:Object(m.default)(x,"flex-grow flex-column relative overflow-hidden h-full-screen"),children:[s.topbar.show&&Object(h.jsx)(i.a,{theme:c,children:Object(h.jsx)(N,{})}),Object(h.jsx)(r.a,{smDown:!0,children:s.navbar.show&&Object(h.jsx)(i.a,{theme:d,children:Object(h.jsx)(u,{})})}),p&&"close"!==j&&Object(h.jsx)(B.a,{children:Object(h.jsx)(P.a,{})}),a.perfectScrollbar&&Object(h.jsxs)(I.a,{options:{suppressScrollX:!0},className:"flex-column flex-grow relative",children:[Object(h.jsx)("div",{className:"flex-grow relative p-0",children:Object(T.a)(t)}),a.footer.show&&!a.footer.fixed&&Object(h.jsx)(l.a,{})]}),!a.perfectScrollbar&&Object(h.jsxs)("div",{options:{suppressScrollX:!0},className:"flex-column flex-grow relative scroll-y p-0",children:[Object(h.jsx)("div",{className:"flex-grow relative p-0",children:Object(T.a)(t)}),a.footer.show&&!a.footer.fixed&&Object(h.jsx)(l.a,{})]}),a.footer.show&&a.footer.fixed&&Object(h.jsx)(l.a,{})]}),a.secondarySidebar.show&&Object(h.jsx)(D.a,{})]})}}}]);