(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[2699],{752550:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>P});var n=o(893379),i=o.n(n),s=o(16858);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var p=o(727418),r=o.n(p),l=o(124852),a=o.n(l),c=o(630294),m=o(171703),h=o(22222),g=o(859518),u=o(45697),f=o.n(u),x=o(23888),y=o(401811),b=o(835516),d=o(234228);function z(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class E extends a().Component{constructor(){super(...arguments),z(this,"addTooltip",(t=>{let e=a().createElement(c.Tooltip,{id:"locate-tooltip"},this.props.tooltip);return a().createElement(y.Z,{placement:this.props.tooltipPlace,key:"overlay-trigger."+this.props.id,overlay:e},t)})),z(this,"zoomToMaxExtent",(()=>{var t=this.props.mapConfig.maxExtent,e=this.props.mapConfig.size,o=1,n=this.props.mapConfig.center,i=this.props.mapConfig.projection||"EPSG:3857";t&&"[object Array]"===Object.prototype.toString.call(t)&&(o=(0,b.getZoomForExtent)(t,e,0,21),0===(n=(0,b.getCenterForExtent)(t,i)).x&&0===n.y||(n=(0,d.qg)(n,"EPSG:4326")));let s=(0,b.getBbox)(n,o,e);this.props.changeMapView(n,o,s,this.props.mapConfig.size,null,this.props.mapConfig.projection)})),z(this,"zoomToInitialExtent",(()=>{var t=this.props.mapInitialConfig;let e=(0,b.getBbox)(t.center,t.zoom,this.props.mapConfig.size);this.props.changeMapView(t.center,t.zoom,e,this.props.mapConfig.size,null,this.props.mapConfig.projection)}))}render(){return this.addTooltip(a().createElement(x.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:()=>this.props.useInitialExtent?this.zoomToInitialExtent():this.zoomToMaxExtent(),className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?a().createElement(c.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}z(E,"propTypes",{id:f().string,image:f().string,glyphicon:f().string,text:f().string,btnSize:f().oneOf(["large","small","xsmall"]),mapConfig:f().object,mapInitialConfig:f().object,changeMapView:f().func,btnType:f().oneOf(["normal","image"]),help:f().oneOfType([f().string,f().element]),tooltip:f().element,tooltipPlace:f().string,className:f().string,useInitialExtent:f().bool,bsStyle:f().string,style:f().object}),z(E,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const C=E;var T=o(804504),v=o(274363);function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},j.apply(this,arguments)}const I=(0,h.P1)([v.Od,t=>t.mapInitialConfig],((t,e)=>({mapConfig:t,mapInitialConfig:e}))),S=(0,m.connect)(I,{changeMapView:g.o6})(C);class O extends a().Component{render(){return a().createElement(S,j({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}const P={ZoomAllPlugin:r()(O,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:a().createElement(c.Glyphicon,{glyph:"resize-full"}),help:a().createElement(T.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},16858:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(923645),i=o.n(n)()((function(t){return t[1]}));i.push([t.id,".ms2 #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""]);const s=i}}]);