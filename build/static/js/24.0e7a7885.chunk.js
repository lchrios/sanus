(this.webpackJsonpsanus=this.webpackJsonpsanus||[]).push([[24],{1719:function(e,t,a){"use strict";var c=a(12),n=(a(0),a(609)),r=a(55),i=a(1364),s=a(2191),o=a(1561),l=a(5),d=a(67),b=a(1),j=Object(n.a)((function(e){e.palette,Object(c.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}}));t.a=function(){var e=j(),t=Object(r.a)(),a=Object(d.a)().settings,c=a.themes[a.footer.theme]||t;return Object(b.jsx)(i.a,{theme:c,children:Object(b.jsx)(s.a,{color:"primary",position:"fixed",className:e.appbar,children:Object(b.jsx)(o.a,{className:Object(l.default)("flex items-center",e.footer),children:Object(b.jsxs)("div",{className:"flex items-center container w-full",children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsxs)("p",{className:"m-0",children:["Desarrollado por"," ",Object(b.jsx)("a",{href:"https://github.com/lchrios/iknelia",children:"ChriVias Soft"})]})]})})})})}},1720:function(e,t,a){"use strict";a(0);var c=a(1364),n=a(55),r=a(67),i=a(1);t.a=function(e){var t=e.children,a=Object(n.a)(),s=Object(r.a)().settings,o=s.themes[s.layout1Settings.leftSidebar.theme]||a;return Object(i.jsx)(c.a,{theme:o,children:t})}},1721:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(40),n=a(2),r=a(0),i=a.n(r);function s(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?i.a.createElement(c.d,a,e.map((function(e,a){return i.a.createElement(c.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(n.a)({},a,{},t,{route:e})):i.a.createElement(e.component,Object(n.a)({},a,t,{route:e}))}})}))):null}},1723:function(e,t,a){"use strict";var c=a(0),n=a(11),r=a(12),i=a(611),s=a(1363),o=a(1715),l=a(609),d=a(5),b=a(67),j=a(1),m=Object(l.a)((function(e){e.palette,Object(r.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}})),u=function(){var e,t=m(),a=Object(b.a)(),c=a.settings,r=a.updateSettings,l=function(){r({secondarySidebar:{open:!c.secondarySidebar.open}})};return Object(j.jsxs)("div",{className:Object(d.default)((e={},Object(n.a)(e,t.toggle,!0),Object(n.a)(e,"open",c.secondarySidebar.open),e)),children:[c.secondarySidebar.open&&Object(j.jsx)(i.a,{onClick:l,size:"small","aria-label":"toggle",children:Object(j.jsx)(s.a,{children:"close"})}),!c.secondarySidebar.open&&Object(j.jsx)(o.a,{color:"primary","aria-label":"expand",className:"",onClick:l,children:Object(j.jsx)(s.a,{children:"settings"})})]})},h=a(6),p=a(15),x=a(1786),O=a(1830),f=a(1347),g=a(1316),v=a(2193),y=a(362),w=a.n(y),S=a(2088),N=a(9),k=Object(N.a)((function(e){return{badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}}}))(S.a),C=a(1364),z=Object(l.a)((function(e){var t=e.palette;Object(r.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}})),I=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}],D=function(e){var t,a=Object(c.useState)(!1),r=Object(p.a)(a,2),o=r[0],l=r[1],m=Object(c.useState)(0),u=Object(p.a)(m,2),y=u[0],S=u[1],N=z(),D=Object(b.a)(),_=D.settings,L=D.updateSettings,R=function(){l(!o)},T=function(e){S(e)},P=Object(h.a)({},_.themes[_.activeTheme]);return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(x.a,{title:"Theme Settings",placement:"left",children:Object(j.jsx)("span",{className:Object(d.default)((t={},Object(n.a)(t,N.label,!0),Object(n.a)(t,"open",o),t)),onClick:R,children:"DEMOS"})}),Object(j.jsx)(C.a,{theme:P,children:Object(j.jsx)(O.a,{anchor:"right",open:o,variant:"temporary",onClose:R,ModalProps:{keepMounted:!0},children:Object(j.jsxs)("div",{className:Object(d.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",N.maxCustomizer),children:[Object(j.jsxs)("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6",children:[Object(j.jsx)(s.a,{color:"primary",children:"settings"}),Object(j.jsx)("h5",{className:"mb-0 ml-2",children:"Theme Settings"}),Object(j.jsx)(i.a,{onClick:R,className:N.customizerCloseButton,children:Object(j.jsx)(s.a,{children:"close"})})]}),Object(j.jsxs)("div",{className:"px-6 mb-4 flex",children:[Object(j.jsx)(f.a,{variant:"outlined",color:0===y?"secondary":"primary",onClick:function(){return T(0)},className:"mr-4",children:"Demos"}),Object(j.jsx)(f.a,{variant:"outlined",color:1===y?"secondary":"primary",onClick:function(){return T(1)},children:"Settings"})]}),Object(j.jsxs)(w.a,{options:{suppressScrollX:!0},className:"px-4",children:[0===y&&Object(j.jsxs)("div",{className:"mb-8 mx-2",children:[Object(j.jsx)("div",{className:"text-muted",children:"Layouts"}),Object(j.jsx)("div",{className:"flex-column",children:I.map((function(e){return Object(j.jsx)(k,{color:"secondary",className:Object(d.default)("w-full my-3 max-h-152 cursor-pointer",N.layoutBox),badgeContent:"Pro",invisible:!e.isPro,children:Object(j.jsxs)(g.a,{className:"relative",onClick:function(){return L(e.options)},elevation:4,children:[Object(j.jsx)("div",{className:"layout-name hidden",children:Object(j.jsx)(f.a,{variant:"contained",color:"secondary",children:e.name})}),Object(j.jsx)("img",{className:"w-full",src:e.thumbnail,alt:e.name})]})},e.name)}))})]}),1===y&&Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:N.helpText,children:["We used React context API to control layout. Check out the"," ",Object(j.jsx)(v.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},_=a(235),L=a(99),R=a(40),T=a(54),P=Object(l.a)((function(e){e.palette,Object(r.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}})),B=!1;var M=function(e){var t=e.container,a=Object(c.useState)(0),n=Object(p.a)(a,2),r=n[0],o=n[1],l=Object(c.useState)(!1),m=Object(p.a)(l,2),u=m[0],h=m[1],x=P(),g=Object(_.b)(),v=Object(R.g)(),y=Object(T.a)().user,w=Object(_.c)((function(e){return e.ecommerce})).cartList,N=Object(b.a)().settings;B||(g(Object(L.j)(y.id)),B=!0);var k=function(){h(!u)};return Object(c.useEffect)((function(){var e=0;w.forEach((function(t){e+=t.price*t.amount})),o(e)}),[w]),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(i.a,{onClick:k,children:Object(j.jsx)(S.a,{color:"secondary",badgeContent:w.length,children:Object(j.jsx)(s.a,{children:"shopping_cart"})})}),Object(j.jsx)(C.a,{theme:N.themes[N.activeTheme],children:Object(j.jsx)(O.a,{container:t,variant:"temporary",anchor:"right",open:u,onClose:k,ModalProps:{keepMounted:!0},children:Object(j.jsxs)("div",{className:Object(d.default)("flex-column h-full",x.miniCart),children:[Object(j.jsxs)("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4",children:[Object(j.jsx)(s.a,{color:"primary",children:"shopping_cart"}),Object(j.jsx)("h5",{className:"ml-2 my-0 font-medium",children:"Cart"})]}),Object(j.jsx)("div",{className:"flex-grow overflow-auto",children:w.map((function(e){return Object(j.jsxs)("div",{className:"mini-cart__item flex items-center py-2 px-2",children:[Object(j.jsxs)("div",{className:"flex flex-column mr-1",children:[Object(j.jsx)(i.a,{size:"small",onClick:function(){return g(Object(L.k)(y.id,e.id,e.amount+1))},children:Object(j.jsx)(s.a,{className:"cursor-pointer",children:"keyboard_arrow_up"})}),Object(j.jsx)(i.a,{disabled:!(e.amount-1),size:"small",onClick:function(){return g(Object(L.k)(y.id,e.id,e.amount-1))},children:Object(j.jsx)(s.a,{className:"cursor-pointer",children:"keyboard_arrow_down"})})]}),Object(j.jsx)("div",{className:"mr-2",children:Object(j.jsx)("img",{className:"w-48",src:e.imgUrl,alt:e.title})}),Object(j.jsxs)("div",{className:"mr-2 text-center flex-grow flex-column",children:[Object(j.jsx)("h6",{className:"m-0 mb-1 ellipsis w-120",children:e.title}),Object(j.jsxs)("small",{className:"text-muted",children:["$",e.price," x ",e.amount]})]}),Object(j.jsx)(i.a,{size:"small",onClick:function(){return g(Object(L.i)(y.userId,e.id))},children:Object(j.jsx)(s.a,{fontSize:"small",children:"clear"})})]},e.id)}))}),Object(j.jsxs)(f.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:function(){r>0&&(v.push("/ecommerce/checkout"),h(!1))},children:["Checkout ($",r.toFixed(2),")"]})]})})})]})},E=a(114),H=Object(l.a)((function(e){var t=e.palette;return{root:{position:"fixed",height:"100vh",width:function(e){return e.width},right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(r.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:function(e){return e.width}},".matx-customizer":{right:function(e){return e.width}}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:function(e){return"calc(100% - ".concat(e.width,")")}}}}}})),W=function(){var e=H({width:"50px"});return Object(j.jsxs)("div",{className:Object(d.default)("secondary-sidebar",e.root),children:[Object(j.jsx)("span",{className:"m-auto"}),Object(j.jsx)(D,{}),Object(j.jsx)(M,{}),Object(j.jsx)(E.c,{icon:Object(j.jsx)(i.a,{className:"my-3",size:"small",children:Object(j.jsx)(s.a,{children:"comments"})}),children:Object(j.jsx)(E.d,{})}),Object(j.jsx)("span",{className:"m-auto"})]})},F=function(e){var t=e.theme,a=(e.classes,e.children);e.open;return Object(j.jsx)(C.a,{theme:t,children:a})};t.a=function(){var e=Object(b.a)().settings,t=e.themes[e.secondarySidebar.theme];return Object(j.jsxs)(F,{theme:t,children:[e.secondarySidebar.open&&Object(j.jsx)(W,{}),Object(j.jsx)(u,{})]})}},1727:function(e,t,a){"use strict";var c=a(6),n=a(12),r=a(0),i=a.n(r),s=a(609),o=a(55),l=a(11),d=a(362),b=a.n(d),j=a(363),m=a(114),u=a(5),h=a(67),p=a(611),x=a(1363),O=a(1),f=Object(s.a)((function(e){e.palette;var t=Object(n.a)(e,["palette"]);return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:Object(l.a)({position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1},t.breakpoints.up("lg"),{display:"none"})}})),g=function(e){var t=e.children,a=f(),n=Object(h.a)(),i=n.settings,s=n.updateSettings;return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsxs)(b.a,{options:{suppressScrollX:!0},className:Object(u.default)("relative px-4",a.scrollable),children:[t,Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{children:"clear"})}),Object(O.jsx)(m.s,{items:j.a})]}),Object(O.jsx)("div",{onClick:function(){return function(e){var t=i.activeLayout+"Settings",a=i[t];s(Object(c.a)(Object(c.a)({},i),{},Object(l.a)({},t,Object(c.a)(Object(c.a)({},a),{},{leftSidebar:Object(c.a)(Object(c.a)({},a.leftSidebar),e)}))))}({mode:"close"})},className:a.sidenavMobileOverlay})]})},v=a(371),y=a(1382),w=a(2194),S=a(131),N=Object(s.a)((function(e){var t=e.palette,a=Object(n.a)(e,["palette"]);return{sidenav:function(e){var c=e.width,n=e.primaryRGB,r=e.bgImgURL;return{position:"fixed",top:0,left:0,height:"100vh",width:c,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(n,", 0.96), rgba(").concat(n,", 0.96)), url(").concat(r,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}},hideOnCompact:{display:"none"},userInfo:{}}})),k=function(){var e=Object(o.a)(),t=Object(h.a)(),a=t.settings,n=t.updateSettings,r=a.layout1Settings.leftSidebar,i=r.mode,s=Object(S.b)(e.palette.primary.main),l=N(Object(c.a)(Object(c.a)({},r),{},{width:function(){switch(i){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}}(),primaryRGB:s}));return Object(O.jsx)("div",{className:l.sidenav,children:Object(O.jsxs)("div",{className:"flex-column relative h-full",children:[Object(O.jsx)(v.b,{children:Object(O.jsx)(y.a,{smDown:!0,children:Object(O.jsx)(w.a,{onChange:function(){var e;e={mode:"compact"===i?"full":"compact"},n({layout1Settings:{leftSidebar:Object(c.a)({},e)}})},checked:"full"!==r.mode,color:"secondary",size:"small"})})}),Object(O.jsx)(g,{})]})})};t.a=i.a.memo(k)},2218:function(e,t,a){"use strict";a.r(t);var c=a(11),n=a(12),r=a(0),i=a.n(r),s=a(1364),o=a(1302),l=a(362),d=a.n(l),b=a(1721),j=a(6),m=a(611),u=a(1363),h=a(1382),p=a(1384),x=a(1453),O=a(114),f=a(42),g=a(609),v=a(55),y=a(5),w=a(54),S=a(67),N=a(1),k=Object(g.a)((function(e){var t,a=e.palette,r=Object(n.a)(e,["palette"]);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":(t={backgroundColor:a.primary.main,height:80,paddingLeft:18,paddingRight:20},Object(c.a)(t,r.breakpoints.down("sm"),{paddingLeft:16,paddingRight:16}),Object(c.a)(t,r.breakpoints.down("xs"),{paddingLeft:14,paddingRight:16}),t),"& .fixed":{boxShadow:r.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),C=function(){var e,t,a=Object(v.a)(),c=k(),n=Object(S.a)(),r=n.settings,i=n.updateSettings,s=Object(w.a)(),l=s.logout,d=s.user,b=Object(o.a)(a.breakpoints.down("md")),g=null===r||void 0===r||null===(e=r.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed;return Object(N.jsx)("div",{className:c.topbar,children:Object(N.jsx)("div",{className:Object(y.default)({"topbar-hold":!0,fixed:g}),children:Object(N.jsxs)("div",{className:"flex justify-between items-center h-full",children:[Object(N.jsx)("div",{className:"flex",children:Object(N.jsx)(m.a,{onClick:function(){var e,t,a=r.layout1Settings;e=b?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",t={mode:e},i({layout1Settings:{leftSidebar:Object(j.a)({},t)}})},className:"hide-on-pc",children:Object(N.jsx)(u.a,{children:"menu"})})}),Object(N.jsx)("div",{className:"flex items-center",children:Object(N.jsxs)(O.k,{menuButton:Object(N.jsxs)("div",{className:c.userMenu,children:[Object(N.jsx)(h.a,{xsDown:!0,children:Object(N.jsxs)("span",{children:["Hi ",Object(N.jsx)("strong",{children:d.name})]})}),Object(N.jsx)(p.a,{className:"cursor-pointer",src:d.avatar})]}),children:[Object(N.jsx)(x.a,{children:Object(N.jsxs)(f.b,{className:c.menuItem,to:"/",children:[Object(N.jsx)(u.a,{children:" home "}),Object(N.jsx)("span",{className:"pl-4",children:" Home "})]})}),Object(N.jsx)(x.a,{children:Object(N.jsxs)(f.b,{className:c.menuItem,to:"/page-layouts/user-profile",children:[Object(N.jsx)(u.a,{children:" person "}),Object(N.jsx)("span",{className:"pl-4",children:" Profile "})]})}),Object(N.jsxs)(x.a,{className:c.menuItem,children:[Object(N.jsx)(u.a,{children:" settings "}),Object(N.jsx)("span",{className:"pl-4",children:" Settings "})]}),Object(N.jsxs)(x.a,{onClick:l,className:c.menuItem,children:[Object(N.jsx)(u.a,{children:" power_settings_new "}),Object(N.jsx)("span",{className:"pl-4",children:" Logout "})]})]})})]})})})},z=i.a.memo(C),I=a(1727),D=a(1719),_=a(1723),L=a(202),R=a(1720),T=Object(g.a)((function(e){e.palette;var t=Object(n.a)(e,["palette"]);return{contentWrap:function(e){var a=e.width,n=e.secondarySidebar;return Object(c.a)({verticalAlign:"top",marginLeft:a,transition:"all 0.3s ease"},t.breakpoints.up("sm"),{marginRight:n.open?50:0})},topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}})),P=function(){var e=Object(S.a)(),t=e.settings,a=e.updateSettings,c=t.layout1Settings,n=t.secondarySidebar,i=c.leftSidebar,l=i.mode,j=i.show,m=Object(r.useContext)(L.a).routes,u=function(){switch(l){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}}(),h=T({width:u,secondarySidebar:n}),p=Object(v.a)(),x=Object(o.a)(p.breakpoints.down("md")),f=Object(r.useRef)({isMdScreen:x,settings:t}),g=t.themes[c.topbar.theme],w="theme-".concat(p.palette.type," flex");return Object(r.useEffect)((function(){var e=f.current.settings,t=e.layout1Settings.leftSidebar.mode;e.layout1Settings.leftSidebar.show&&a({layout1Settings:{leftSidebar:{mode:x?"close":t}}})}),[x]),Object(N.jsxs)("div",{className:Object(y.default)("bg-default",w),children:[j&&"close"!==l&&Object(N.jsx)(R.a,{children:Object(N.jsx)(I.a,{})}),Object(N.jsxs)("div",{className:Object(y.default)("flex-grow flex-column relative overflow-hidden h-full-screen",h.contentWrap),children:[c.topbar.show&&c.topbar.fixed&&Object(N.jsx)(s.a,{theme:g,children:Object(N.jsx)(z,{fixed:!0,className:"elevation-z8"})}),t.perfectScrollbar&&Object(N.jsxs)(d.a,{className:"flex-grow flex-column relative h-full",children:[c.topbar.show&&!c.topbar.fixed&&Object(N.jsx)(s.a,{theme:g,children:Object(N.jsx)(z,{})}),Object(N.jsx)("div",{className:"relative flex-grow",children:Object(N.jsx)(O.p,{children:Object(b.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(N.jsx)(D.a,{})]}),!t.perfectScrollbar&&Object(N.jsxs)("div",{className:"flex-grow flex-column relative h-full scroll-y",children:[c.topbar.show&&!c.topbar.fixed&&Object(N.jsx)(s.a,{theme:g,children:Object(N.jsx)(z,{})}),Object(N.jsx)("div",{className:"relative flex-grow",children:Object(N.jsx)(O.p,{children:Object(b.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(N.jsx)(D.a,{})]}),t.footer.show&&t.footer.fixed&&Object(N.jsx)(D.a,{})]}),t.secondarySidebar.show&&Object(N.jsx)(_.a,{})]})};t.default=i.a.memo(P)}}]);