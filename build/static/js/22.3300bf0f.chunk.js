(this.webpackJsonpsanus=this.webpackJsonpsanus||[]).push([[22],{1392:function(e,t,a){"use strict";var c=a(0),r=c.createContext();t.a=r},1410:function(e,t,a){"use strict";var c=a(0),r=c.createContext();t.a=r},1447:function(e,t,a){"use strict";var c=a(7),r=a(2),i=a(0),n=(a(4),a(5)),l=a(9),o=a(13),s=a(25),d=a(1410),p=a(1392),j=i.forwardRef((function(e,t){var a,l,s=e.align,j=void 0===s?"inherit":s,b=e.classes,u=e.className,h=e.component,m=e.padding,f=e.scope,O=e.size,g=e.sortDirection,x=e.variant,v=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=i.useContext(d.a),N=i.useContext(p.a),w=N&&"head"===N.variant;h?(l=h,a=w?"columnheader":"cell"):l=w?"th":"td";var k=f;!k&&w&&(k="col");var C=m||(y&&y.padding?y.padding:"default"),R=O||(y&&y.size?y.size:"medium"),z=x||N&&N.variant,E=null;return g&&(E="asc"===g?"ascending":"descending"),i.createElement(l,Object(r.a)({ref:t,className:Object(n.default)(b.root,b[z],u,"inherit"!==j&&b["align".concat(Object(o.a)(j))],"default"!==C&&b["padding".concat(Object(o.a)(C))],"medium"!==R&&b["size".concat(Object(o.a)(R))],"head"===z&&y&&y.stickyHeader&&b.stickyHeader),"aria-sort":E,role:a,scope:k},v))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(j)},1475:function(e,t,a){"use strict";var c=a(2),r=a(7),i=a(0),n=(a(4),a(5)),l=a(9),o=a(1392),s=a(25),d=i.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,j=void 0!==p&&p,b=e.selected,u=void 0!==b&&b,h=Object(r.a)(e,["classes","className","component","hover","selected"]),m=i.useContext(o.a);return i.createElement(d,Object(c.a)({ref:t,className:Object(n.default)(a.root,l,m&&{head:a.head,footer:a.footer}[m.variant],j&&a.hover,u&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1488:function(e,t,a){"use strict";var c=a(7),r=a(2),i=a(0),n=(a(4),a(5)),l=a(9),o=a(1410),s="table",d=i.forwardRef((function(e,t){var a=e.classes,l=e.className,d=e.component,p=void 0===d?s:d,j=e.padding,b=void 0===j?"default":j,u=e.size,h=void 0===u?"medium":u,m=e.stickyHeader,f=void 0!==m&&m,O=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=i.useMemo((function(){return{padding:b,size:h,stickyHeader:f}}),[b,h,f]);return i.createElement(o.a.Provider,{value:g},i.createElement(p,Object(r.a)({role:p===s?null:"table",ref:t,className:Object(n.default)(a.root,l,f&&a.stickyHeader)},O)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1489:function(e,t,a){"use strict";var c=a(2),r=a(7),i=a(0),n=(a(4),a(5)),l=a(9),o=a(1392),s={variant:"body"},d="tbody",p=i.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.component,j=void 0===p?d:p,b=Object(r.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(j,Object(c.a)({className:Object(n.default)(a.root,l),ref:t,role:j===d?null:"rowgroup"},b)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},1832:function(e,t,a){"use strict";var c=a(2),r=a(7),i=a(0),n=(a(4),a(5)),l=a(9),o=a(1392),s={variant:"head"},d="thead",p=i.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.component,j=void 0===p?d:p,b=Object(r.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(j,Object(c.a)({className:Object(n.default)(a.root,l),ref:t,role:j===d?null:"rowgroup"},b)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},2217:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var c=a(0),r=a(15),i=a(12),n=a(1316),l=a(1384),o=a(1367),s=a(1488),d=a(1475),p=a(1447),j=a(1489),b=a(1363),u=a(611),h=a(1832),m=a(609),f=a(5),O=a(54),g=a(446),x=a(1),v=Object(m.a)((function(e){e.palette,Object(i.a)(e,["palette"]);return{productTable:{"& thead":{"& th:first-child":{paddingLeft:16}},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}})),y=[{title:"Tel\xe9fono",value:"+1 439 327 546"},{title:"Direcci\xf3n",value:"USA"},{title:"C\xe9dula profesional",value:"Street Tailwood, No. 17"},{title:"Zoom URL",value:"https://zoom.us/j/8510547499?pwd=SDdRaktUMnVRenJzTWUyVE9LZ004dz09"}],N=function(){Object(O.a)();var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];Object(c.useState)({email:"",phone:"",zoom:"","c\xe9dula":"",adress:""});var m=v();return Object(x.jsxs)(n.a,{className:"pt-6",elevation:3,children:[Object(x.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(x.jsx)(l.a,{className:"w-84 h-84",src:"/assets/images/faces/10.jpg"}),Object(x.jsx)("h5",{className:"mt-4 mb-2",children:"Ben Peterson"}),Object(x.jsx)("small",{className:"text-muted",children:"CEO, Brack Ltd."})]}),Object(x.jsx)(o.a,{}),Object(x.jsxs)(s.a,{className:Object(f.default)("whitespace-pre min-w-750",m.productTable),children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(p.a,{children:"T\xedtulo"}),Object(x.jsx)(p.a,{children:"Informaci\xf3n"}),Object(x.jsx)(p.a,{children:"Editar"}),Object(x.jsx)(p.a,{children:"Borrar"})]})}),Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(d.a,{children:[Object(x.jsx)(p.a,{className:"pl-4",children:"Email"}),Object(x.jsxs)(p.a,{children:[Object(x.jsx)("div",{children:"ui-lib@example.com"}),Object(x.jsx)("small",{className:"px-1 py-2px bg-light-green text-green border-radius-4",children:"EMAIL VERIFIED"})]}),a?Object(x.jsx)("form",{children:Object(x.jsx)(g.a,{})}):null,Object(x.jsx)(p.a,{children:Object(x.jsx)(u.a,{onClick:function(){i(!0)},children:Object(x.jsx)(b.a,{children:"edit"})})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.a,{children:"delete"})})})]}),y.map((function(e,t){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(p.a,{className:"pl-4",children:e.title}),Object(x.jsx)(p.a,{children:e.value}),Object(x.jsx)(p.a,{children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.a,{children:"edit"})})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.a,{children:"delete"})})})]},t)}))]})]})]})};function w(){return Object(x.jsx)(N,{})}}}]);