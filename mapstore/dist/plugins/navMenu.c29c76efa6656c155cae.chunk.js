(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[821],{336343:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E});var n=o(124852),l=o.n(n),r=o(45697),i=o.n(r),s=o(173379),p=o.n(s),a=o(727418),m=o.n(a),c=o(36549),h=o(747037),d=o.n(h),u=o(395659),b=o.n(u),k=o(623560),g=o.n(k),f=o(630294),I=o(496259),y=o(59787);function w(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const v=(0,c.Z)(f.NavItem);class C extends l().Component{constructor(){super(...arguments),w(this,"getLinks",(e=>this.props.items&&[...this.props.items,...this.props.links||[]].filter((e=>e.href||e.linkId||e.tool||!e.hide)).map((e=>e.tool&&g()(e.tool)&&e.tool(e.cfg)||e)).sort(((e,t)=>e.position-t.position)).map(((t,o)=>e>this.props.minWidth&&!t.logo?this.renderLabeledItem(t,o):this.renderIconedItem(t,o)))||[])),w(this,"renderLabeledItem",((e,t)=>e.labelComponent?e.labelComponent:l().createElement(f.NavItem,{key:t,target:"_blank",href:d()(e.href)&&!e.linkId&&e.href||"",onClick:d()(e.linkId)?()=>(0,y.m)(b()(e.linkId,"#")):()=>{}},e.label))),w(this,"renderIconedItem",((e,t)=>e.iconComponent?e.iconComponent:l().createElement(v,{key:t,target:"_blank",tooltip:e.label,tooltipPosition:"bottom",href:d()(e.href)&&!e.linkId&&e.href||"",onClick:d()(e.linkId)?()=>(0,y.m)(b()(e.linkId,"#")):()=>{}},e.glyph&&l().createElement(f.Glyphicon,{glyph:e.glyph})||e.img)))}render(){return l().createElement(I.Z,null,(e=>{let{width:t}=e;return l().createElement(f.Nav,this.props.navProps,this.getLinks(t))}))}}w(C,"propTypes",{src:i().string,link:i().string,label:i().node,style:i().object,items:i().array,links:i().array,navProps:i().object,minWidth:i().number}),w(C,"defaultProps",{src:p(),link:"https://www.geosolutionsgroup.com/",label:"GeoSolutions",style:{position:"absolute",width:"124px",left:0,bottom:0},navProps:{pullLeft:!0},minWidth:768});const E={NavMenuPlugin:m()(C,{OmniBar:{position:5,tool:e=>l().createElement(C,e),priority:1}})}},59787:(e,t,o)=>{"use strict";o.d(t,{m:()=>n});const n=e=>{const t=document.getElementById(e);t&&t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"start"})}},173379:(e,t,o)=>{e.exports=o.p+"web/client/product/assets/img/mapstorelogo.png"}}]);