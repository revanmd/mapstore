(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7846],{226460:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>R});var l=t(727418),n=t.n(l),i=t(171703),o=t(124852),a=t.n(o),p=t(23888),s=t(45697),g=t.n(s),u=t(630294),c=t(401811),h=t(804504),f=t(234228);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class d extends a().Component{constructor(){super(...arguments),m(this,"display",(()=>{let e=this.generateRegex();return this.props.originalUrl||f.ZP.getConfigProp("originalUrl")||location.href.match(e)})),m(this,"openFull",(e=>{e&&window.open(e,"_blank")})),m(this,"generateRegex",(()=>new RegExp(this.props.urlRegex))),m(this,"generateUrl",(()=>{let e=this.props.originalUrl||f.ZP.getConfigProp("originalUrl");if(e)return e;let r=this.generateRegex();return location.href.match(r)?location.href.replace(r,this.props.urlReplaceString):null}))}render(){return this.display()?a().createElement(c.Z,{placement:"left",overlay:a().createElement(u.Tooltip,{id:"gofull-tooltip"},a().createElement(h.Z,{msgId:this.props.tooltip}))},a().createElement(p.Z,{className:"square-button",bsStyle:"primary",onClick:()=>this.openFull(this.generateUrl())},a().createElement(u.Glyphicon,{glyph:this.props.glyph}))):null}}m(d,"propTypes",{glyph:g().string,tooltip:g().string,urlRegex:g().string,urlReplaceString:g().string,originalUrl:g().string}),m(d,"defaultProps",{glyph:"share",tooltip:"fullscreen.viewLargerMap",urlRegex:"^(.*?)embedded.html.*?#\\/(\\d?)",urlReplaceString:"$1#/viewer/leaflet/$2"});const y=d,b=(0,i.connect)((()=>({})))(y),R={GoFullPlugin:n()(b,{Toolbar:{name:"gofull",position:1,toolStyle:"primary",tooltip:"fullscreen.viewLargerMap",tool:!0,priority:1}}),reducers:{}}}}]);