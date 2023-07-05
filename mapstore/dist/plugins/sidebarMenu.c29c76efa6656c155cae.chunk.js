(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[8498],{956611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(747037),s=n.n(o),i=n(45697),l=n.n(i),r=n(124852),a=n.n(r),p=n(630294),c=n(719648);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class h extends a().Component{constructor(){super(...arguments),d(this,"onMouseOver",(()=>{const e=s()(this.props.helpText)?this.props.helpText:(0,c.S$)(this.context.messages,this.props.helpText.props.msgId);this.props.changeHelpText(e),this.props.changeHelpwinVisibility(!0)}))}render(){return a().createElement(p.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}d(h,"propTypes",{id:l().string,helpText:l().oneOfType([l().string,l().element]),isVisible:l().bool,changeHelpText:l().func,changeHelpwinVisibility:l().func,className:l().string}),d(h,"contextTypes",{messages:l().object}),d(h,"defaultProps",{helpText:"",isVisible:!1});const u=h},816326:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var o=n(124852),s=n.n(o),i=n(45697),l=n.n(i),r=n(496259),a=n(630294),p=n(171703),c=n(22222),d=n(12838),h=n(638510),u=n(36549),m=n(294184),g=n.n(m),b=n(957557),y=n.n(b);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v.apply(this,arguments)}const f=(0,u.Z)(a.Button),T=e=>{let{children:t,className:n,bsStyle:o="link",tooltipId:i,tooltipPosition:l="left",...r}=e;return s().createElement(f,v({className:g()({"square-button":!0,...n?{[n]:!0}:{}}),bsStyle:o,tooltipId:i,tooltipPosition:l},y()(r,["pluginCfg","help","defaultOptions","items","advancedSettings"])),t)};var S=n(350126),E=n(687753),x=n(152543);const I="SIDEBARMENU:SET_LAST_ACTIVE_ITEM";var C=n(893379),P=n.n(C),N=n(486486);P()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;var j=n(652700),A=n(804504);function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const O=(0,u.Z)(a.DropdownButton);class k extends s().Component{constructor(){var e;super(),e=this,M(this,"getStyle",(e=>{const t=(null==e?void 0:e.dockSize)>0;return{...e,height:t?"auto":"100%",maxHeight:(null==e?void 0:e.height)??null,bottom:t?`calc(${e.dockSize}vh + 30px)`:null}})),M(this,"getPanels",(()=>this.props.items.filter((e=>e.tools)).reduce(((e,t)=>e.concat(t.tools.map(((e,n)=>{var o,s;return{name:t.name+n,panel:e,cfg:(null==t||null===(o=t.cfg)||void 0===o||null===(s=o.toolsCfg)||void 0===s?void 0:s[n])||{}}})))),[]))),M(this,"visibleItems",(e=>this.props.items.reduce(((t,n)=>null!=n&&n.components||!this.targetMatch(e,n.target)||!this.isNotHidden(n,this.props.state)?(null!=n&&n.components&&Array.isArray(n.components)&&n.components.forEach((o=>(this.targetMatch(e,null==o?void 0:o.target)&&this.isNotHidden(null!=o&&o.selector?o:n,this.props.state)&&t.push({plugin:(null==n?void 0:n.plugin)||this.defaultTool,position:null==n?void 0:n.position,cfg:null==n?void 0:n.cfg,name:n.name,help:null==n?void 0:n.help,items:null==n?void 0:n.items,...o}),t))),t):(t.push({...n,target:e}),t)),[]))),M(this,"getItems",((e,t)=>{const n=Math.floor(t/this.props.sidebarWidth)-1,o=e||this.defaultTarget,i=this.visibleItems(o);if(n<i.length){const e=i.sort(((e,t)=>(e.position??0)-(t.position??0)));this.swapLastActiveItem(e,n);const t=e.slice(0,n),o={name:"moreItems",position:9999,icon:s().createElement(a.Glyphicon,{glyph:"option-horizontal"}),tool:()=>this.renderExtraItems(i.slice(n)),priority:1};return t.splice(n,0,o),t}return i.sort(((e,t)=>(e.position??0)-(t.position??0)))})),M(this,"targetMatch",((e,t)=>t===e||!t&&e===this.defaultTarget)),M(this,"getTools",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sidebar",n=arguments.length>1?arguments[1]:void 0;return e.getItems(t,n).sort(((e,t)=>e.position-t.position))})),M(this,"renderExtraItems",(e=>{const t=()=>{},n=e.map((e=>{const n=(0,p.connect)((null==e?void 0:e.selector)??t,((t,n)=>{const o={};return n.action&&(o.onClick=()=>{this.props.setLastActiveItem((null==e?void 0:e.name)??(null==e?void 0:e.toggleProperty)),(0,d.DE)(n.action,t)()}),o}))(a.MenuItem);return s().createElement(n,{action:e.action},null==e?void 0:e.icon,null==e?void 0:e.text)}));return s().createElement(O,{dropup:!0,pullRight:!0,bsStyle:"tray",id:"extra-items",tooltip:s().createElement(A.Z,{msgId:"sidebarMenu.showMoreItems"}),tooltipPosition:"left",title:s().createElement(a.Glyphicon,{glyph:"option-horizontal"})},n)})),M(this,"swapLastActiveItem",((e,t)=>{const n=this.props.lastActiveTool;if(n){const o=e.findIndex((e=>(null==e?void 0:e.name)===n||(null==e?void 0:e.toggleProperty)===n));if(-1!==o&&o>t-1){const n=e[o];e[o]=e[t-1],e[t-2]=n}}})),M(this,"isNotHidden",((e,t)=>{var n,o;return null==e||!e.selector||"none"!==(null===(n=e.selector(t))||void 0===n||null===(o=n.style)||void 0===o?void 0:o.display)})),this.defaultTool=T,this.defaultTarget="sidebar",this.state={lastVisible:!1,hidden:!1}}componentDidMount(){const{onInit:e}=this.props;e()}shouldComponentUpdate(e){var t,n,o,s,i,l,r,a,p,c,d,h;const u=!1===e.isActive,m=(null===(t=e.state.map)||void 0===t||null===(n=t.present)||void 0===n||null===(o=n.size)||void 0===o?void 0:o.height)!==(null===(s=this.props.state.map)||void 0===s||null===(i=s.present)||void 0===i||null===(l=i.size)||void 0===l?void 0:l.height),g=e.style.bottom!==this.props.style.bottom,b=e.items!==this.props.items,y=(null===(r=e.state)||void 0===r||null===(a=r.controls)||void 0===a||null===(p=a.burgermenu)||void 0===p?void 0:p.enabled)!==(null===(c=this.props.state)||void 0===c||null===(d=c.controls)||void 0===d||null===(h=d.burgermenu)||void 0===h?void 0:h.enabled),v=!b&&e.items.reduce(((t,n,o)=>(this.isNotHidden(n,e.state)!==this.isNotHidden(this.props.items[o],this.props.state)&&t.push(n),t)),[]).length>0;return m||b||v||g||y||u}componentDidUpdate(e){const{onInit:t,onDetach:n}=this.props,{hidden:o}=this.state,s=this.visibleItems("sidebar").length;s&&!1===e.isActive&&t(),0!==s||o?s>0&&o&&(t(),this.setState((e=>({...e,hidden:!1})))):(n(),this.setState((e=>({...e,hidden:!0}))))}componentWillUnmount(){const{onDetach:e}=this.props;e()}render(){return!this.state.hidden&&s().createElement("div",{id:"mapstore-sidebar-menu-container",className:"shadow-soft",style:this.getStyle(this.props.style)},s().createElement(r.Z,null,(e=>{let{height:t}=e;return s().createElement(h.Z,{id:this.props.id,className:this.props.className,mapType:this.props.mapType,container:e=>s().createElement(s().Fragment,null,e.children),toolStyle:"tray",activeStyle:"primary",stateSelector:"sidebarMenu",tool:T,tools:this.getTools("sidebar",t),panels:this.getPanels(this.props.items)})})))}}M(k,"propTypes",{className:l().string,style:l().object,items:l().array,id:l().string,mapType:l().string,onInit:l().func,onDetach:l().func,sidebarWidth:l().number,state:l().object,setLastActiveItem:l().func,lastActiveTool:l().oneOfType([l().string,l().bool])}),M(k,"contextTypes",{messages:l().object,router:l().object}),M(k,"defaultProps",{items:[],style:{},id:"mapstore-sidebar-menu",mapType:"openlayers",onInit:()=>{},onDetach:()=>{},eventSelector:"onClick",toolStyle:"default",activeStyle:"primary",stateSelector:"sidebarMenu",tool:T,toolCfg:{},sidebarWidth:40});const w=(0,c.P1)([e=>e,e=>(0,j.T)(e),e=>(0,S.ic)(e,{dockSize:!0,bottom:!0,height:!0}),j.z],((e,t,n,o)=>({style:n,lastActiveTool:t,state:e,isActive:o}))),Z=(0,x.rx)("SidebarMenu",{cfg:{},component:(0,p.connect)(w,{onInit:E.Xg.bind(null,"sidebarMenu","enabled",!0),onDetach:E.Xg.bind(null,"sidebarMenu","enabled",!1),setLastActiveItem:function(e){return{type:I,value:e}}})(k),reducers:{sidebarmenu:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lastActiveItem:null},t=arguments.length>1?arguments[1]:void 0;return t.type===I?{...e,lastActiveItem:t.value}:e}}})},638510:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var o=n(353131),s=n.n(o),i=n(727418),l=n.n(i),r=n(45697),a=n.n(r),p=n(124852),c=n.n(p),d=n(630294),h=n(171703),u=n(12838),m=n(687753),g=n(723813),b=n(956611),y=n(804504),v=n(401811),f=n(23888);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const E=(0,h.connect)((e=>({isVisible:e.controls&&e.controls.help&&e.controls.help.enabled})),{changeHelpText:g.n2,changeHelpwinVisibility:g.SA})(b.Z);class x extends c().Component{constructor(){super(...arguments),S(this,"getToolConfig",(e=>e.tool?{}:this.props.toolCfg)),S(this,"getTool",(e=>{if(e.tool)return!0===e.tool?e.plugin:e.tool;let t=()=>({});const n={};return e.exclusive?(t=t=>({active:t.controls&&t.controls[this.props.stateSelector]&&t.controls[this.props.stateSelector].active===e.name}),n[this.props.eventSelector]=m.Xg.bind(null,this.props.stateSelector,"active",e.name,!0)):e.toggle?(t=t=>({bsStyle:t.controls[e.toggleControl||e.name]&&t.controls[e.toggleControl||e.name][e.toggleProperty||"enabled"]?this.props.activeStyle:this.props.toolStyle,active:t.controls[e.toggleControl||e.name]&&t.controls[e.toggleControl||e.name][e.toggleProperty||"enabled"]||!1}),n[this.props.eventSelector]=m.Xi.bind(null,e.toggleControl||e.name,e.toggleProperty||null)):e.action&&(n[this.props.eventSelector]=s()(e.action,this.context),t=e.selector||t),(0,h.connect)(t,n,((e,t,n)=>this.mergeHandlers({...n,...e},t)))(this.props.tool)})),S(this,"renderTool",((e,t)=>{if(e.element)return e.element;const n=e.help?c().createElement(E,{className:"mapstore-helpbadge",helpText:e.help}):c().createElement("span",null),o=e.tooltip?c().createElement(y.Z,{msgId:e.tooltip}):null,s=this.getTool(e),i=this.getToolConfig(e),l=e.childTools||[];return this.addTooltip(c().createElement(s,T({},i,{pluginCfg:e.cfg,tooltip:o,style:e.style,btnSize:this.props.toolSize,bsStyle:this.props.toolStyle,help:n,key:e.name||"tool"+t,mapType:this.props.mapType},e.cfg,{items:e.items||[]}),e.cfg&&e.cfg.glyph?c().createElement(d.Glyphicon,{glyph:e.cfg.glyph}):e.icon,n," ",e.text,l.length>0&&c().createElement(x,T({},e.innerProps,{mapType:this.props.mapType,tools:l,panels:e.childPanels}))),e)})),S(this,"renderTools",(()=>this.props.tools.map(this.renderTool))),S(this,"renderPanels",(()=>this.props.panels.filter((e=>!e.panel.loadPlugin)).map((e=>{const t=e.panel,n=c().createElement(t,T({key:e.name,mapType:this.props.mapType},e.cfg,e.props||{},{items:e.items||[]})),o=e.title?c().createElement(y.Z,{msgId:e.title}):null;return e.wrap?c().createElement(d.Collapse,{key:"mapToolBar-item-collapse-"+e.name,in:this.props.activePanel===e.name},c().createElement(d.Panel,{header:o,style:this.props.panelStyle,className:this.props.panelClassName},n)):n})))),S(this,"mergeHandlers",((e,t)=>Object.keys(t).reduce(((n,o)=>l()(n,{[o]:e[o]?(0,u.qC)(e[o],t[o]):t[o]})),e))),S(this,"addTooltip",((e,t)=>{if(t.tooltip){let n=c().createElement(d.Tooltip,{id:this.props.id+"-"+t.name+"-tooltip"},c().createElement(y.Z,{msgId:t.tooltip}));return c().createElement(v.Z,{key:this.props.id+"-"+t.name+"-overlay",rootClose:!0,placement:"left",overlay:n},e)}return e}))}render(){const e=this.props.container;return c().createElement("span",{id:this.props.id,style:this.props.containerWrapperStyle},c().createElement(e,{id:this.props.id+"-container",style:this.props.style,className:this.props.className},this.renderTools()),this.renderPanels())}}S(x,"propTypes",{id:a().string.isRequired,container:a().func,containerWrapperStyle:a().object,tool:a().oneOfType([a().object,a().func]),className:a().string,style:a().object,tools:a().array,panels:a().array,mapType:a().string,toolStyle:a().string,activeStyle:a().string,toolSize:a().string,stateSelector:a().string.isRequired,eventSelector:a().string,panelStyle:a().object,panelClassName:a().string,activePanel:a().string,toolCfg:a().object}),S(x,"contextTypes",{messages:a().object,router:a().object}),S(x,"defaultProps",{container:d.Panel,className:"tools-container",style:{},toolStyle:"default",activeStyle:"primary",tools:[],panels:[],tool:f.Z,mapType:"leaflet",eventSelector:"onClick",panelStyle:{},panelClassName:"tools-container-panel",toolSize:null,toolCfg:{}});const I=x},652700:(e,t,n)=>{"use strict";n.d(t,{T:()=>i,z:()=>l});var o=n(227361),s=n.n(o);const i=e=>s()(e,"sidebarmenu.lastActiveItem",!1),l=e=>s()(e,"controls.sidebarMenu.enabled",!1)},486486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(923645),s=n.n(o)()((function(e){return e[1]}));s.push([e.id,"#mapstore-sidebar-menu-container {\n  z-index: 1030;\n  position: absolute;\n  background: inherit;\n  right: 0;\n  top: 0;\n  width: 40px;\n  height: 100%;\n}\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: auto;\n  z-index: 10;\n}\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn-tray,\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn,\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn-group .btn {\n  border-bottom: 0;\n  height: 40px;\n  width: 40px;\n}\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn-tray span:not(.glyphicon),\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn span:not(.glyphicon),\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu > .btn-group .btn span:not(.glyphicon) {\n  display: none;\n}\n#mapstore-sidebar-menu-container #mapstore-sidebar-menu .snapshot-panel {\n  position: absolute;\n  right: 40px;\n  top: 60px;\n  background: #ffffffab;\n}\n",""]);const i=s}}]);