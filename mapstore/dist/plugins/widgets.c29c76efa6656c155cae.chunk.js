(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5795],{495020:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>v});var s=o(124852),n=o.n(s),r=o(45697),i=o.n(r),l=o(171703),a=o(22222),c=o(867076),u=o(152543),d=o(274363),p=o(952273),h=o(492838),g=o(725211),m=o(748928),f=o(906351),w=o(424707),P=o(350126);function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const x=(0,c.compose)((0,l.connect)((0,a.P1)(d.J9,p.E5,p.p,p.Jb,p.h9,(e=>(0,P.ic)(e,{right:!0})),((e,t,o,s,n,r)=>({id:e,widgets:t,layouts:o,maximized:s,dependencies:n,mapLayout:r}))),{editWidget:h.uT,updateWidgetProperty:h.Ij,exportCSV:h.sD,toggleCollapse:h.f,toggleMaximize:h.Pt,exportImage:h.Rb,deleteWidget:h.E9,onLayoutChange:h.c_}),(0,c.compose)((0,f.Gv)({debounceTime:20,closest:!0,querySelector:".fill"}),(0,f.ZY)({overrideWidthProvider:!1}),(0,c.withProps)((function(){let{width:e,height:t,maximized:o,mapLayout:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(null==s?void 0:s.right)??0,r=t-120,i=4,l=Math.floor(r/i-20),a=null!=o&&o.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:1330}:{},c=null!=o&&o.widget?{width:e,useDefaultWidthProvider:!1,rowHeight:t-50,breakpoints:{xxs:0},cols:{xxs:1}}:{},u=e&&e>800?e-(500+n+55):e-n-55,d=e?{width:u-1}:{};return{rowHeight:l,className:"on-map",breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},...d,useDefaultWidthProvider:!1,style:{left:e&&e>800?"500px":"0",marginTop:52,bottom:65,height:Math.floor((t-100)/(l+10))*(l+10),width:u+"px",position:"absolute",zIndex:50,...a},...c}}))),(0,c.compose)((0,c.defaultProps)({toolsOptions:{showPin:"user.role===ADMIN",seeHidden:"user.role===ADMIN",showHide:!1,showCollapse:!0,showMaximize:!0}}),(0,g.Z)("toolsOptions",{asObject:!0}),(0,c.compose)((0,l.connect)((0,a.P1)(p.Xu,(e=>({tray:e})))),(0,c.withPropsOnChange)(["toolsOptions","tray"],(e=>{let{toolsOptions:t,tray:o}=e;return{toolsOptions:t?{...t,showCollapse:t.showCollapse&&o}:t}}))),(0,c.withPropsOnChange)(["widgets","toolsOptions"],(e=>{let{widgets:t=[],toolsOptions:o={}}=e;return{widgets:t.filter((e=>{let{hide:t}=e;return!t||o.seeHidden}))}}))))(w.Z);class I extends n().Component{render(){return this.props.enabled?n().createElement(x,this.props):null}}b(I,"propTypes",{enabled:i().bool}),b(I,"defaultProps",{enabled:!0});const O=(0,m.Z)(I),v=(0,u.rx)("WidgetsPlugin",{component:O,containers:{TOC:{doNotHide:!0,name:"Widgets"}},reducers:{widgets:o(890827).Z},epics:o(660834).ZP})},748928:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var s=o(22222),n=o(171703),r=o(350126),i=o(101092);const l=(0,n.connect)((0,s.P1)(r.Jz,r.VM,i.c0,((e,t,o)=>({enabled:!e&&!t&&!o}))))},725211:(e,t,o)=>{"use strict";o.d(t,{Z:()=>x});var s=o(867076),n=o(171703),r=o(22222),i=o(274363),l=o(510644),a=o(227361),c=o.n(a),u=o(984596),d=o.n(u),p=o(66604),h=o.n(p),g=o(747037),m=o.n(g),f=o(701469),w=o.n(f);const P=e=>{let{accessInfo:t,postProcessValue:o,reduceFun:s}=e;return e=>{let n=d()(e),r=s;return n.length>1&&"__OR__"===n[0]&&(r=(e,t)=>e||t,n=n.slice(1)),n.map((e=>{let n=e;if(w()(n))return P({accessInfo:t,postProcessValue:o,reduceFun:s})(n);let r=!1;n&&m()(n)&&n.startsWith("!")&&(r=!0,n=n.substr(1));const i=e=>r?!e:e,l=m()(n)&&n.split(":");if(l&&l[0]){const e=l[0].split(/\!\=\=?/),s=l[0].split(/\=\=?\=?/);return e.length>1?i(o(c()(t,e[0]),n)!==e[1]):s.length>1?i(o(c()(t,s[0]),n)===s[1]):i(o(c()(t,l[0]),n))}return n})).reduce(r||((e,t)=>e&&t))}},b=function(e){let{asObject:t=!1,postProcessValue:o=(e=>e),reduceFun:n,accessInfo:r="accessInfo"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.withPropsOnChange)([e,r],(function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t?{[e]:h()(s[e],P({accessInfo:s[r],postProcessValue:o,reduceFun:n}))}:{[e]:P({accessInfo:s[r],postProcessValue:o,reduceFun:n})(s[e])}}))},x=function(){return(0,s.compose)((0,n.connect)((0,r.P1)(i.J9,i._H,l.np,((e,t,o)=>({accessInfo:{mapId:e,mapInfo:t,user:o}})))),b(...arguments))}}}]);