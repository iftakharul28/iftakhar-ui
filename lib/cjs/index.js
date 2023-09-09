"use strict";var e=require("react"),t=require("react-dom");function l(e){let t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){for(const a of e)if(a){const e=l(a);e&&(t&&(t+=" "),t+=e)}}else for(const l in e)e[l]&&(t&&(t+=" "),t+=l);return t}const a=(...e)=>{let t="";for(const a of e)if(a){const e=l(a);e&&(t&&(t+=" "),t+=e)}return t},n=t=>e.createElement("svg",{className:a("h-4 w-4 transition-transform duration-200",t.className),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"6 9 12 15 18 9"})),s=e.createContext(void 0),r=t=>{const[l,a]=e.useState("");return e.useEffect((()=>{a((null==t?void 0:t.defaultValue)?null==t?void 0:t.defaultValue:"1")}),[]),e.createElement(s.Provider,{value:{activeTab:l,setActiveTab:a}},e.createElement("div",{className:t.className},null==t?void 0:t.children))};r.Item=t=>{const{activeTab:l}=e.useContext(s)||{};return e.createElement("div",{className:a(null==t?void 0:t.className,(null==t?void 0:t.value)===l&&(null==t?void 0:t.activeClass)?null==t?void 0:t.activeClass:""),"aria-label":null==t?void 0:t.value},null==t?void 0:t.children)},r.Trigger=t=>{const{activeTab:l,setActiveTab:r}=e.useContext(s)||{};return e.createElement("div",{className:a(null==t?void 0:t.className,(null==t?void 0:t.value)===l&&(null==t?void 0:t.activeClass)?null==t?void 0:t.activeClass:void 0),onClick:()=>{r&&r(null==t?void 0:t.value)}},null==t?void 0:t.children,e.createElement(n,{className:a((null==t?void 0:t.value)===l?"rotate-180":"")}))},r.Content=t=>{const{activeTab:l}=e.useContext(s)||{};return e.createElement("div",{className:a(null==t?void 0:t.className,(null==t?void 0:t.value)===l&&(null==t?void 0:t.activeClass)?null==t?void 0:t.activeClass:""),style:{display:l===(null==t?void 0:t.value)?"block":"none"}},null==t?void 0:t.children)};const i=t=>"link"===t.type?e.createElement("a",{className:t.className,href:t.href},t.children):e.createElement("button",Object.assign({},t),t.children),o=t=>{let l=null,a=null;return e.Children.forEach(t.children,(t=>{if(t&&e.isValidElement(t))if(l||t.type!==c)a||t.type!==m||(a=t);else{const{condition:e}=t.props;Boolean(e)&&(l=t)}})),l||a||null},c=e=>e.condition?e.children:null,m=e=>e.children;o.Case=c,o.Default=m;const d=t=>e.createElement("input",Object.assign({},t)),u=t=>e.createElement("label",{htmlFor:t.htmlFor,className:t.className},t.children),p=t=>e.createElement("textarea",Object.assign({},t));d.Label=u,d.TextArea=p;const v=function(e){return e.data.length?e.data.map(((t,l)=>e.renderItem(t,l))):null},f=()=>e.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"close",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}));let E=null;const b=t=>{const{title:l,maskClosable:n=!1,okButton:s,cancelButton:r,className:o,children:c}=t;return e.createElement("div",{className:"modal-wrapper"},e.createElement("div",{className:a("modal-content",o||"")},e.createElement(i,{onClick:null==r?void 0:r.onClick,type:"button",className:"modal-close-icon"},t.closeIcon?t.closeIcon:e.createElement(f,null)),l?e.createElement("div",{className:"modal-header"},l):null,e.createElement("div",{className:"modal-body"},c),e.createElement("div",{className:"modal-actions"},e.createElement(i,{type:null==r?void 0:r.type,className:a("model-btn model-btn-default",null==r?void 0:r.className),onClick:null==r?void 0:r.onClick,disabled:null==r?void 0:r.disabled},null==r?void 0:r.children),e.createElement(i,{type:null==s?void 0:s.type,className:a("model-btn model-btn-primary",null==s?void 0:s.className),onClick:null==s?void 0:s.onClick,disabled:null==s?void 0:s.disabled},null==s?void 0:s.children))),n?e.createElement(i,{onClick:null==r?void 0:r.onClick,type:"button",className:"modal-mask"}):e.createElement("div",{className:"modal-mask"}))},h=({children:t,value:l,onChange:a,showSearch:n,onSearch:s,filterOption:r})=>{const[i,o]=e.useState(""),[c,m]=e.useState(e.Children.toArray(t)),d=r?c:t;return e.createElement("div",null,e.createElement("select",{value:l||"",onChange:e=>{const t=e.target.value;a(t)}},d),n&&e.createElement("input",{type:"text",value:i,onChange:l=>{const a=l.target.value;if(o(a),n&&s&&(s(a),r)){const l=e.Children.toArray(t).filter((e=>e.props.children.toLowerCase().includes(a.toLowerCase())));m(l)}}}))},N=({value:t,children:l})=>e.createElement("option",{value:t},l);function g(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l}h.Option=N,"function"==typeof SuppressedError&&SuppressedError;const x=t=>t.closed?null:e.createElement("div",{className:a(t.className)},t.children),C=e.createContext({collapsed:!1,rtl:!1,toggled:!1}),y=t=>{var{children:l,className:n,width:s,collapsedWidth:r,collapsed:i,rtl:o,toggled:c,image:m,breakPoint:d,onToggle:u,style:p={},ref:v}=t,f=g(t,["children","className","width","collapsedWidth","collapsed","rtl","toggled","image","breakPoint","onToggle","style","ref"]);const[E,b]=e.useState({collapsed:void 0!==i&&i,rtl:void 0!==o&&o,toggled:void 0!==c&&c}),h=v||e.createRef(),N=()=>{const e=E.toggled;b(Object.assign(Object.assign({},E),{toggled:!e})),u&&u(!e)},x=i?r?{width:r,minWidth:r}:{}:s?{width:s,minWidth:s}:{};return e.useEffect((()=>{b(Object.assign(Object.assign({},E),{collapsed:i,rtl:o,toggled:c}))}),[i,o,c]),e.createElement(C.Provider,{value:E},e.createElement("div",Object.assign({ref:h,className:a("ui-sidebar",n,d,{collapsed:i,rtl:o,toggled:c}),style:Object.assign(Object.assign({},x),p)},f),e.createElement("div",{className:"ui-sidebar-inner"},m?e.createElement("img",{src:m,alt:"sidebar background",className:"sidebar-bg"}):null,e.createElement("div",{className:"ui-sidebar-layout"},l)),e.createElement("div",{className:"overlay",onClick:N,onKeyPress:N,role:"button",tabIndex:0,"aria-label":"overlay"})))};y.Menu=t=>{var{children:l,className:n,iconShape:s,popperArrow:r=!1,subMenuBullets:i=!1,innerSubMenuArrows:o=!0,ref:c}=t,m=g(t,["children","className","iconShape","popperArrow","subMenuBullets","innerSubMenuArrows","ref"]);const d=c||e.createRef();return e.createElement("nav",Object.assign({ref:d,className:a("ui-menu",n,{[`shaped ${s}`]:["square","round","circle"].indexOf(null!=s?s:"")>=0,"submenu-bullets":i,"inner-submenu-arrows":o})},m),e.createElement("ul",null,e.Children.toArray(l).filter(Boolean).map(((t,l)=>e.cloneElement(t,{key:l,firstchild:1,popperarrow:!0===r?1:0})))))},y.MenuItem=t=>{var{children:l,className:n,icon:s,active:r,prefix:i,suffix:o,firstchild:c,popperarrow:m}=t,d=g(t,["children","className","icon","active","prefix","suffix","firstchild","popperarrow"]);const u=d.ref||e.createRef();return e.createElement("li",Object.assign({ref:u,className:a("ui-menu-item",n,{active:r})},d),e.createElement("div",{className:"ui-inner-item",tabIndex:0,role:"button"},s?e.createElement("span",{className:"ui-icon-wrapper"},e.createElement("span",{className:"ui-icon"},s)):null,i?e.createElement("span",{className:"prefix-wrapper"},i):null,e.createElement("span",{className:"ui-item-content"},l),o?e.createElement("span",{className:"suffix-wrapper"},o):null))},y.SubMenu=t=>{var{children:l,className:n,icon:s,title:r,defaultOpen:i=!1,open:o,prefix:c,suffix:m,firstchild:d,popperarrow:u,onOpenChange:p,ref:v}=t,f=g(t,["children","className","icon","title","defaultOpen","open","prefix","suffix","firstchild","popperarrow","onOpenChange","ref"]);const{collapsed:E}=e.useContext(C)||{},[b,h]=e.useState(!i),N=()=>{p&&p(b),h(!b)},y=v||e.createRef();return e.createElement("li",Object.assign({ref:y,className:a("ui-menu-item ui-sub-menu",n,{open:void 0===o?!b:o})},f),e.createElement("div",{className:"ui-inner-item",onClick:N,onKeyPress:N,role:"button",tabIndex:0},s?e.createElement("span",{className:"ui-icon-wrapper"},e.createElement("span",{className:"ui-icon"},s)):null,c?e.createElement("span",{className:"prefix-wrapper"},c):null,e.createElement("span",{className:"ui-item-content"},r),m?e.createElement("span",{className:"suffix-wrapper"},m):null,e.createElement("span",{className:"ui-arrow-wrapper"},e.createElement("span",{className:"ui-arrow"}))),d&&E?e.createElement("div",{className:a("ui-inner-list-item popper-element",{"has-arrow":u})},e.createElement("div",{className:"popper-inner"},e.createElement("ul",null,l)),u?e.createElement("div",{className:"popper-arrow","data-popper-arrow":!0}):null):e.createElement("div",null,e.createElement(x,{closed:void 0===o?b:!o,className:"ui-inner-list-item"},e.createElement("ul",null,l))))},y.Content=t=>{var{children:l,className:n}=t,s=g(t,["children","className"]);const r=s.ref||e.createRef();return e.createElement("div",Object.assign({ref:r,className:a("ui-sidebar-content",n)},s),l)},y.Header=t=>{var{children:l,className:n}=t,s=g(t,["children","className"]);const r=s.ref||e.createRef();return e.createElement("div",Object.assign({ref:r,className:a("ui-sidebar-header",n)},s),l)},y.Footer=t=>{var{children:l,className:n}=t,s=g(t,["children","className"]);const r=s.ref||e.createRef();return e.createElement("div",Object.assign({ref:r,className:a("ui-sidebar-footer",n)},s),l)};const w=e.createContext(void 0),T=t=>{const[l,a]=e.useState("");return e.useEffect((()=>{a((null==t?void 0:t.defaultValue)?null==t?void 0:t.defaultValue:"1")}),[]),e.createElement(w.Provider,{value:{activeTab:l,setActiveTab:a}},e.createElement("div",{className:null==t?void 0:t.className},null==t?void 0:t.children))};T.List=t=>e.createElement("div",{className:null==t?void 0:t.className},null==t?void 0:t.children),T.Trigger=t=>{const{activeTab:l,setActiveTab:n}=e.useContext(w)||{};return e.createElement(i,{type:"button",className:a(null==t?void 0:t.className,(null==t?void 0:t.value)===l&&(null==t?void 0:t.activeClass)?null==t?void 0:t.activeClass:""),onClick:()=>{n&&n(null==t?void 0:t.value)}},null==t?void 0:t.children)},T.Content=t=>{const{activeTab:l}=e.useContext(w)||{};return e.createElement("div",{className:t.className,style:{display:l===(null==t?void 0:t.value)?"block":"none"}},null==t?void 0:t.children)};const O=function(t){const{showHeader:l=!0}=t;return e.createElement(e.Fragment,null,null==t?void 0:t.title,t.dataSource.length?e.createElement("table",{className:t.className},l?e.createElement("thead",null,e.createElement("tr",null,t.columns.map(((t,l)=>e.createElement("th",{key:`columnId-${l}`},t.title))))):null,e.createElement("tbody",null,t.dataSource.map(((l,a)=>e.createElement("tr",{key:`rowId-${a}`},t.columns.map(((t,n)=>e.createElement("td",{key:n,className:t.className,width:t.width,colSpan:t.colSpan},t.render(l,a))))))))):null)},k=t=>e.createElement("div",{className:a("timeline-item",`timeline-item-${t.position?t.position:"left"}`,t.className?t.className:"")},t.label?e.createElement("div",{className:"timeline-item-label"},t.label):null,e.createElement("div",{className:"timeline-item-tail"}),t.dot?t.dot:e.createElement("div",{className:a("timeline-item-head",`timeline-item-head-${t.color?t.color:"gray"}`)}),e.createElement("div",{className:"timeline-item-content"},t.children)),S=t=>e.createElement("div",{className:null==t?void 0:t.className},null==t?void 0:t.children);S.Item=k;const j=t=>e.createElement("div",null,t.msg),A=t=>{e.createElement("div",{className:"toast-container",style:{left:0}},e.createElement("div",{className:"toast-content"},e.createElement("div",{className:"toast-title"},t.msg),t.description?e.createElement("div",{className:"toast-description"},t.description):null,e.createElement(i,{className:"toast-button",type:"button"},"Undo")))},P={success:j,error:A},I=e.createContext(void 0),L=({children:t})=>{const[l,a]=e.useState(!1);return e.createElement(I.Provider,{value:{isVisible:l,showTooltip:()=>{a(!0)},hideTooltip:()=>{a(!1)}}},t)},M=({asChild:t,children:l,className:a})=>{const{showTooltip:n,hideTooltip:s}=e.useContext(I);return e.createElement("div",{className:a,onMouseEnter:()=>{t&&n()},onMouseLeave:()=>{t&&s()}},l)},B=({children:t})=>{const{isVisible:l}=e.useContext(I);return l?e.createElement("div",{className:"TooltipPortal"},t):null},R=({children:t,sideOffset:l})=>e.createElement("div",{className:"TooltipContent",style:{marginLeft:l}},t);L.TooltipTrigger=M,L.TooltipPortal=B,L.TooltipContent=R,exports.Accordion=r,exports.Button=i,exports.Case=c,exports.Clsx=a,exports.Default=m,exports.Error=A,exports.Input=d,exports.Label=u,exports.List=v,exports.Modal=l=>{if("undefined"!=typeof window)return!E&&l.visible&&(E=document.createElement("div"),document.body.appendChild(E)),l.visible?t.createPortal(e.createElement(b,Object.assign({},l,{visible:l.visible})),E):null},exports.Option=N,exports.Pagination=({current:t,pageSize:l,total:n,onChange:s,pageRange:r=7,activeClass:o,className:c,prevClass:m,nextClass:d,prevIcon:u,nextIcon:p,onlyNumber:v=!1})=>{const f=Math.ceil(n/l);let E=t-Math.floor(r/2);E<1&&(E=1);let b=E+r-1;b>f&&(b=f,E=b-r+1,E<1&&(E=1));return e.createElement("ul",{className:"pagination"},v?null:e.createElement("li",{className:a("pagination-prev",m||"")},e.createElement(i,{className:"pagination-item-button",type:"button",onClick:()=>{t>1&&s(t-1)},disabled:1===t},u||"Previous")),Array.from({length:b-E+1},((e,t)=>E+t)).map((l=>e.createElement("li",{key:`page-${l}`,className:a("pagination-item",c||"",l===t?`pagination-item-active ${o||""}`:"")},e.createElement(i,{className:"pagination-item-button",type:"button",onClick:()=>s(l)},l)))),v?null:e.createElement("li",{className:a("pagination-next",d||"")},e.createElement(i,{className:"pagination-item-button",type:"button",onClick:()=>{t<f&&s(t+1)},disabled:t===f},p||"Next")))},exports.Select=h,exports.Sidebar=y,exports.SidebarContext=C,exports.Success=j,exports.Switch=o,exports.Table=O,exports.Tabs=T,exports.TextArea=p,exports.Timeline=S,exports.TimelineItem=k,exports.Toast=P,exports.TooltipContent=R,exports.TooltipPortal=B,exports.TooltipProvider=L,exports.TooltipTrigger=M;
//# sourceMappingURL=index.js.map