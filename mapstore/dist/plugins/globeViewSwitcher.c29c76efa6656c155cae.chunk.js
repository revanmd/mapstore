(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[4469],{170694:(t,e,i)=>{"use strict";i.d(e,{Jz:()=>o,xv:()=>s});const o="TOGGLE_3D";function s(t,e){return{type:o,enable:t,originalMapType:e}}},481063:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var o=i(45697),s=i.n(o),r=i(124852),n=i.n(r),p=i(727418),l=i.n(p);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class c extends n().Component{constructor(){super(...arguments),a(this,"getStyle",(()=>{var t={cursor:this.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return this.props.image?l()(t,{overflow:"hidden"}):l()(t,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),l()(t,this.props.style),t}))}render(){return n().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}a(c,"propTypes",{id:s().string,image:s().string,onClick:s().func,style:s().object,disabled:s().bool,tooltip:s().string,className:s().string}),a(c,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const d=c},495604:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var o=i(124852),s=i.n(o),r=i(45697),n=i.n(r),p=i(630294),l=i(401811),a=i(23888),c=i(481063);function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},d.apply(this,arguments)}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class h extends s().Component{constructor(){super(...arguments),g(this,"onClick",(()=>{this.props.onClick(!this.props.pressed,this.props.options)})),g(this,"renderNormalButton",(()=>s().createElement(a.Z,d({id:this.props.id},this.props.btnConfig,{onClick:this.onClick,bsStyle:this.props.pressed?this.props.pressedStyle:this.props.defaultStyle,style:this.props.style}),this.props.glyphicon?s().createElement(p.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text&&!s().isValidElement(this.props.text)?" ":null,this.props.text,this.props.help))),g(this,"renderImageButton",(()=>s().createElement(c.Z,{id:this.props.id,image:this.props.image,onClick:this.onClick,style:this.props.style}))),g(this,"addTooltip",(t=>s().createElement(l.Z,{placement:this.props.tooltipPlace,key:"overlay-trigger."+this.props.id,overlay:this.props.tooltip},t)))}render(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}g(h,"propTypes",{id:n().string,btnConfig:n().object,options:n().object,text:n().oneOfType([n().string,n().element]),help:n().oneOfType([n().string,n().element]),glyphicon:n().string,pressed:n().bool,onClick:n().func,tooltip:n().element,tooltipPlace:n().string,style:n().object,btnType:n().oneOf(["normal","image"]),image:n().string,pressedStyle:n().string,defaultStyle:n().string}),g(h,"defaultProps",{onClick:()=>{},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const u=h},444146:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>j});var o=i(171703),s=i(727418),r=i.n(s),n=i(49977),p=i.n(n),l=i(170694),a=i(710187),c=i(101092),d=i(345366);const g={updateRouteOn3dSwitch:(t,e)=>t.ofType(l.Jz).switchMap((t=>{const i=(0,c.tH)(e.getState());return p().Observable.from([(0,a.gj)("cesium"!==t.originalMapType?"cesium":i),(0,d.nf)()])}))};var h=i(22222),u=i(124852),y=i.n(u),b=i(45697),m=i.n(b),f=i(495604),v=i(630294),T=i(804504);function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},C.apply(this,arguments)}function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class w extends y().Component{constructor(){super(...arguments),k(this,"getButtonProperties",(()=>["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce(((t,e)=>(t[e]=this.props[e],t)),{})))}render(){return y().createElement(f.Z,C({},this.getButtonProperties(),{pressed:this.props.active,tooltip:y().createElement(v.Tooltip,{id:"globeViewSwitcher-tooltip"},y().createElement(T.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}k(w,"propTypes",{id:m().string,btnConfig:m().object,options:m().object,text:m().oneOfType([m().string,m().element]),help:m().oneOfType([m().string,m().element]),glyphicon:m().string,active:m().bool,onClick:m().func,activeTooltip:m().string,notActiveTooltip:m().string,tooltipPlace:m().string,style:m().object,btnType:m().oneOf(["normal","image"]),image:m().string,pressedStyle:m().string,defaultStyle:m().string}),k(w,"defaultProps",{id:"globeviewswitcher-btn",activeTooltip:"globeswitcher.tooltipDeactivate",notActiveTooltip:"globeswitcher.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"3d",btnConfig:{className:"square-button"}});const O=w;let P=(0,h.P1)([c.$v,c.c0],(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"leaflet",e=arguments.length>1?arguments[1]:void 0;return{active:e,options:{originalMapType:t}}}));const S=(0,o.connect)(P,{onClick:(t,e)=>(0,l.xv)(t,e.originalMapType)})(O),j={GlobeViewSwitcherPlugin:r()(S,{disablePluginIf:"{state('featuregridmode') === 'EDIT'}",Toolbar:{name:"3d",position:10,alwaysVisible:!0,tool:!0,priority:1}}),epics:g}}}]);