(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[22],{1385:function(e,t,a){"use strict";var c=a(0),i=c.createContext();t.a=i},1403:function(e,t,a){"use strict";var c=a(0),i=c.createContext();t.a=i},1440:function(e,t,a){"use strict";var c=a(7),i=a(2),r=a(0),n=(a(4),a(5)),l=a(9),o=a(12),s=a(23),d=a(1403),p=a(1385),j=r.forwardRef((function(e,t){var a,l,s=e.align,j=void 0===s?"inherit":s,b=e.classes,u=e.className,h=e.component,m=e.padding,O=e.scope,g=e.size,x=e.sortDirection,f=e.variant,v=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=r.useContext(d.a),N=r.useContext(p.a),k=N&&"head"===N.variant;h?(l=h,a=k?"columnheader":"cell"):l=k?"th":"td";var w=O;!w&&k&&(w="col");var C=m||(y&&y.padding?y.padding:"default"),R=g||(y&&y.size?y.size:"medium"),z=f||N&&N.variant,E=null;return x&&(E="asc"===x?"ascending":"descending"),r.createElement(l,Object(i.a)({ref:t,className:Object(n.default)(b.root,b[z],u,"inherit"!==j&&b["align".concat(Object(o.a)(j))],"default"!==C&&b["padding".concat(Object(o.a)(C))],"medium"!==R&&b["size".concat(Object(o.a)(R))],"head"===z&&y&&y.stickyHeader&&b.stickyHeader),"aria-sort":E,role:a,scope:w},v))}));t.a=Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(j)},1468:function(e,t,a){"use strict";var c=a(2),i=a(7),r=a(0),n=(a(4),a(5)),l=a(9),o=a(1385),s=a(23),d=r.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,j=void 0!==p&&p,b=e.selected,u=void 0!==b&&b,h=Object(i.a)(e,["classes","className","component","hover","selected"]),m=r.useContext(o.a);return r.createElement(d,Object(c.a)({ref:t,className:Object(n.default)(a.root,l,m&&{head:a.head,footer:a.footer}[m.variant],j&&a.hover,u&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1481:function(e,t,a){"use strict";var c=a(7),i=a(2),r=a(0),n=(a(4),a(5)),l=a(9),o=a(1403),s="table",d=r.forwardRef((function(e,t){var a=e.classes,l=e.className,d=e.component,p=void 0===d?s:d,j=e.padding,b=void 0===j?"default":j,u=e.size,h=void 0===u?"medium":u,m=e.stickyHeader,O=void 0!==m&&m,g=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),x=r.useMemo((function(){return{padding:b,size:h,stickyHeader:O}}),[b,h,O]);return r.createElement(o.a.Provider,{value:x},r.createElement(p,Object(i.a)({role:p===s?null:"table",ref:t,className:Object(n.default)(a.root,l,O&&a.stickyHeader)},g)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1482:function(e,t,a){"use strict";var c=a(2),i=a(7),r=a(0),n=(a(4),a(5)),l=a(9),o=a(1385),s={variant:"body"},d="tbody",p=r.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.component,j=void 0===p?d:p,b=Object(i.a)(e,["classes","className","component"]);return r.createElement(o.a.Provider,{value:s},r.createElement(j,Object(c.a)({className:Object(n.default)(a.root,l),ref:t,role:j===d?null:"rowgroup"},b)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},1813:function(e,t,a){"use strict";var c=a(2),i=a(7),r=a(0),n=(a(4),a(5)),l=a(9),o=a(1385),s={variant:"head"},d="thead",p=r.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.component,j=void 0===p?d:p,b=Object(i.a)(e,["classes","className","component"]);return r.createElement(o.a.Provider,{value:s},r.createElement(j,Object(c.a)({className:Object(n.default)(a.root,l),ref:t,role:j===d?null:"rowgroup"},b)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},2198:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var c=a(0),i=a(14),r=a(11),n=a(1309),l=a(1377),o=a(1360),s=a(1481),d=a(1468),p=a(1440),j=a(1482),b=a(1356),u=a(607),h=a(1813),m=a(605),O=a(5),g=a(52),x=a(442),f=a(1);const v=Object(m.a)((e=>{e.palette,Object(r.a)(e,["palette"]);return{productTable:{"& thead":{"& th:first-child":{paddingLeft:16}},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}})),y=[{title:"Tel\xe9fono",value:"+1 439 327 546"},{title:"Direcci\xf3n",value:"USA"},{title:"C\xe9dula profesional",value:"Street Tailwood, No. 17"},{title:"Zoom URL",value:"https://zoom.us/j/8510547499?pwd=SDdRaktUMnVRenJzTWUyVE9LZ004dz09"}];var N=()=>{Object(g.a)();const e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(c.useState)({email:"",phone:"",zoom:"","c\xe9dula":"",adress:""});const m=v();return Object(f.jsxs)(n.a,{className:"pt-6",elevation:3,children:[Object(f.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(f.jsx)(l.a,{className:"w-84 h-84",src:"/assets/images/faces/10.jpg"}),Object(f.jsx)("h5",{className:"mt-4 mb-2",children:"Ben Peterson"}),Object(f.jsx)("small",{className:"text-muted",children:"CEO, Brack Ltd."})]}),Object(f.jsx)(o.a,{}),Object(f.jsxs)(s.a,{className:Object(O.default)("whitespace-pre min-w-750",m.productTable),children:[Object(f.jsx)(h.a,{children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(p.a,{children:"T\xedtulo"}),Object(f.jsx)(p.a,{children:"Informaci\xf3n"}),Object(f.jsx)(p.a,{children:"Editar"}),Object(f.jsx)(p.a,{children:"Borrar"})]})}),Object(f.jsxs)(j.a,{children:[Object(f.jsxs)(d.a,{children:[Object(f.jsx)(p.a,{className:"pl-4",children:"Email"}),Object(f.jsxs)(p.a,{children:[Object(f.jsx)("div",{children:"ui-lib@example.com"}),Object(f.jsx)("small",{className:"px-1 py-2px bg-light-green text-green border-radius-4",children:"EMAIL VERIFIED"})]}),a?Object(f.jsx)("form",{children:Object(f.jsx)(x.a,{})}):null,Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{onClick:function(){r(!0)},children:Object(f.jsx)(b.a,{children:"edit"})})}),Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(b.a,{children:"delete"})})})]}),y.map(((e,t)=>Object(f.jsxs)(d.a,{children:[Object(f.jsx)(p.a,{className:"pl-4",children:e.title}),Object(f.jsx)(p.a,{children:e.value}),Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(b.a,{children:"edit"})})}),Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(b.a,{children:"delete"})})})]},t)))]})]})]})};function k(){return Object(f.jsx)(N,{})}}}]);