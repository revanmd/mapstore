(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[2251],{768977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var l=n(45697),s=n.n(l),r=n(124852),o=n.n(r),i=n(630294),a=n(222777);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u extends o().Component{render(){const{cardComponent:e,items:t,colProps:n,onItemClick:l,size:s}=this.props,r=e||a.Z;return o().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},o().createElement(i.Row,{className:"items-list"},t.map(((e,t)=>o().createElement(i.Col,c({key:e.id||t},n),o().createElement(r,c({onClick:function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return l(e,...n)},size:s},e)))))))}}d(u,"propTypes",{size:s().string,onItemClick:s().func,colProps:s().object,items:s().array,cardComponent:s().oneOfType([s().string,s().func]),className:s().string}),d(u,"defaultProps",{size:"",onItemClick:()=>{},colProps:{xs:12},className:"",items:[]});const p=u},141832:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var l=n(124852),s=n.n(l),r=n(732833),o=n(756435),i=n(867076),a=n(630294),c=n(23888);const d={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}},u=e=>{let{position:t="right",onClose:n,bsStyle:l="default",title:r="",fullscreen:o=!1,showFullscreen:i=!1,glyph:u="info-sign",additionalRows:p,onFullscreen:m=(()=>{})}=e;const h=n?s().createElement(c.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:n,bsStyle:l},s().createElement(a.Glyphicon,{glyph:"1-close"})):null,f=i?s().createElement(c.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:l,onClick:()=>m(!o)},s().createElement(a.Glyphicon,{glyph:d[t]&&d[t][o]||"resize-full"})):s().createElement("div",{key:"ms-header-glyph",className:"square-button bg-"+l,style:{display:"flex"}},s().createElement(a.Glyphicon,{glyph:u,className:"default"===l?"text-primary":""})),g="left"===t?[h,f]:[f,h];return s().createElement(a.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+l},s().createElement(a.Row,null,s().createElement(a.Col,{xs:2},g[0]),s().createElement(a.Col,{xs:8},s().createElement("h4",null,r)),s().createElement(a.Col,{xs:2},g[1])),p)},p=(0,i.withState)("fullscreen","onFullscreen",!1)((e=>{let{fluid:t,className:n="",fullscreen:l=!1,position:i,open:a,size:c=550,style:d={},zIndex:p=1030,onClose:m,bsStyle:h,title:f,showFullscreen:g=!1,glyph:y,header:E,footer:b,children:v,onFullscreen:x=(()=>{}),fixed:C=!1,resizable:k=!1,hideHeader:Z}=e;return s().createElement("div",{className:"ms-side-panel "+(C?"":"ms-absolute-dock ")+(k?"":"react-dock-no-resize ")+n},s().createElement(r.default,{fluid:t||l,position:i,dimMode:"none",isVisible:a,size:l?1:c,dockStyle:d,zIndex:p},s().createElement(o.Z,{header:!Z&&a&&s().createElement(u,{position:i,onClose:m,bsStyle:h,title:f,fullscreen:l,showFullscreen:g,glyph:y,additionalRows:E,onFullscreen:x}),footer:a&&b},a&&v)))}))},688472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var l=n(124852),s=n.n(l),r=n(867076),o=n(756435),i=n(141832),a=n(283604);const c=(0,r.renameProps)({open:"show"})((e=>{let{children:t,header:n,...l}=e;return s().createElement(a.Z,l,s().createElement(o.Z,{header:s().createElement("div",{className:"ms-header"},n)},t))})),d=(0,r.branch)((e=>{let{dock:t}=e;return!t}),(()=>e=>s().createElement(c,e)))(i.Z)},908316:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var l=n(124852),s=n.n(l),r=n(294184),o=n.n(r);const i=e=>{let{id:t,children:n,dockStyle:l,className:r,style:i={}}=e;const a={width:`calc(100% - ${((null==l?void 0:l.right)??0)+((null==l?void 0:l.left)??0)}px)`,transform:`translateX(-${(null==l?void 0:l.right)??0}px)`,pointerEvents:"none"};return s().createElement("div",{id:t,className:o()({...r?{[r]:!0}:{},"dock-container":!0}),style:{...a,...i}},n)};var a=n(496259),c=n(688472);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}const u=e=>{let{children:t,containerClassName:n,containerId:l,containerStyle:r,dock:o=!0,siblings:u,size:p,...m}=e;return s().createElement(i,{dockStyle:r,id:l,className:n},s().createElement(a.Z,null,(e=>{let{width:n}=e;return s().createElement(s().Fragment,null,s().createElement(c.Z,d({dock:o,size:p/n>1?n:p},m),t),u)})))}},246213:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var l={};n.r(l),n.d(l,{openUserExtensionsEpic:()=>q});var s=n(124852),r=n.n(s),o=n(45697),i=n.n(o),a=n(171703),c=n(22222),d=n(227361),u=n.n(d),p=n(630294),m=n(804504),h=n(867076),f=n(744291),g=n(27908),y=n(756435),E=n(768977),b=n(603754),v=n(8204),x=n(141919),C=n(486234),k=n(313311),Z=n.n(k),w=n(478718),S=n.n(w),N=n(49977),z=n.n(N),P=n(554155),I=n(834650);const O=(0,C.Z)("filterPlaceholder")(b.Z),F=(0,x.Z)((e=>{let{filteredItems:t,filterText:n}=e;return n&&0===t.length}),{glyph:"filter",title:r().createElement(m.Z,{msgId:"userExtensions.emptyTitle"}),description:r().createElement(m.Z,{msgId:"userExtensions.emptyDescription"})})((e=>{let{filteredItems:t,onSelect:n}=e;return r().createElement(E.Z,{className:"user-extensions",size:"sm",items:t.map((e=>({preview:r().createElement("div",{style:{position:"relative",width:"100%",height:"100%",backgroundColor:e.active?"transparent":"#ddd",display:"flex"}},r().createElement(p.Glyphicon,{glyph:e.glyph||"plug",style:{fontSize:26,margin:"auto",color:"#ffffff"}})),title:e.title||e.name,description:e.description,selected:e.active,loading:e.loading,onClick:()=>n(e),tools:r().createElement(v.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:e.active?"plug":"unplug",bsStyle:e.active?"primary":"default",tooltipId:e.active?"userExtensions.removeExtension":"userExtensions.addExtension",onClick:t=>{t.stopPropagation(),n(e)}}]})})))})})),j=(0,h.compose)((0,a.connect)((0,c.P1)(g.hZ,(e=>({extensions:e}))),{onSelect:e=>(0,f.s)(e.name,{active:!e.active})}),(0,h.compose)((0,h.mapPropsStream)((e=>e.combineLatest(z().Observable.defer((()=>(0,I.Z)(undefined))).map((e=>({pluginsConfig:e,loading:!1}))).catch((e=>z().Observable.of({loading:!1,pluginsLoadError:e}))).startWith({loading:!0}),((e,t)=>({...e,...t}))))),(0,h.withPropsOnChange)(["pluginsConfig","extensions"],(e=>{let{extensions:t=[],pluginsConfig:n={plugins:[]}}=e;return{extensions:t.map((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=S()(Z()(n.plugins,{name:e.name}),["title","description","glyph"])||{};return{...e,...t}}))}})),(0,P.Z)()),(0,C.Z)("extensions","title"),(0,C.Z)("extensions","description"),(0,h.withState)("filterText","onFilter"))((e=>{let{filterText:t,onFilter:n,extensions:l=[],onSelect:s=(()=>{})}=e;const o=l.filter((e=>!t||t&&((e,t)=>["name","title","description"].map((e=>t[e])).map((function(){return-1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().indexOf(e.toLowerCase())})).reduce(((e,t)=>e||t),!1))(t,e)));return r().createElement(y.Z,{header:r().createElement("div",{style:{padding:"8px 15px"}},r().createElement(O,{filterPlaceholder:"userExtensions.filterPlaceholder",filterText:t,onFilter:n}))},r().createElement(F,{filterText:t,filteredItems:o,onSelect:s}))}));var T=n(152543),G=n(687753),M=n(917450);const q=(e,t)=>e.ofType(G.At,G.kM).filter((e=>{return"userExtensions"===e.control&&(n=t.getState(),u()(n,"controls.userExtensions.enabled"));var n})).switchMap((()=>N.Observable.of((0,M.g)(),(0,M.aN)())));var L=n(350126),R=n(908316);function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class H extends r().Component{render(){let{active:e,onClose:t,dockStyle:n,size:l}=this.props;return r().createElement(R.Z,{containerStyle:this.props.dockStyle,containerId:"user-extensions-container",containerClassName:"dock-container",open:e,size:l,position:"right",bsStyle:"primary",title:r().createElement(m.Z,{msgId:"userExtensions.title"}),onClose:()=>t(),glyph:"plug",style:n},r().createElement(j,null))}}X(H,"propTypes",{active:i().bool,onClose:i().func,dockStyle:i().object,size:i().number}),X(H,"defaultProps",{active:!1,onClose:()=>{},dockStyle:{},size:550});const A=(0,a.connect)((0,c.P1)((e=>u()(e,"controls.userExtensions.enabled")),(e=>(0,L.ic)(e,{height:!0,right:!0},!0)),((e,t)=>({active:e,dockStyle:t}))),{onClose:G.Xi.bind(null,"userExtensions","enabled")})(H),D=(0,T.rx)("UserExtensions",{component:A,containers:{BurgerMenu:{name:"userExtensions",position:999,text:r().createElement(m.Z,{msgId:"userExtensions.title"}),icon:r().createElement(p.Glyphicon,{glyph:"plug"}),action:G.Xg.bind(null,"userExtensions","enabled",!0,!0),priority:2,doNotHide:!0},SidebarMenu:{name:"userExtensions",position:999,tooltip:"userExtensions.title",icon:r().createElement(p.Glyphicon,{glyph:"plug"}),text:r().createElement(m.Z,{msgId:"userExtensions.title"}),action:G.Xg.bind(null,"userExtensions","enabled",!0,!0),priority:1,doNotHide:!0,toggle:!0}},epics:l})}}]);