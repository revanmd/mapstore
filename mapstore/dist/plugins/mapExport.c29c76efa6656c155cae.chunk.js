(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7412],{826747:(e,t,o)=>{"use strict";o.d(t,{Z:()=>E});var r=o(124852),a=o.n(r),n=o(493220),l=o.n(n),p=o(227361),m=o.n(p),s=o(630294),c=o(23888),i=o(867517),d=o(804504);const E=e=>{let{show:t=!1,formats:o={},selectedFormat:r,exportButtonLabel:n=a().createElement(d.Z,{msgId:"mapExport.exportPanel.exportButtonLabel"}),exportPanelTitle:p=a().createElement(i.Z,{msgId:"mapExport.exportPanel.title"}),onSelect:E=(()=>{}),onExport:u=(()=>{}),onClose:x=(()=>{})}=e;return t&&a().createElement("div",{className:"export-panel"},a().createElement(c.Z,{style:{border:"none",background:"transparent",color:"white",fontSize:35,top:0,right:0,position:"absolute"},onClick:()=>x()},a().createElement(s.Glyphicon,{glyph:"1-close"})),a().createElement("div",{style:{margin:"auto",maxWidth:550}},a().createElement("div",null,a().createElement("div",{className:"export-panel-heading-icon"},a().createElement(s.Glyphicon,{glyph:"upload"})),a().createElement("div",null,p),a().createElement("br",null),a().createElement("div",{className:"export-panel-formats-container"},l()(o).map((e=>{let[t,{label:o,glyph:n}]=e;return a().createElement(c.Z,{key:t,bsStyle:"default",className:r===t?"format-selected":"",onClick:()=>E(t)},a().createElement("div",null,a().createElement(s.Glyphicon,{style:{marginRight:"4px"},glyph:n}),o))}))),a().createElement("br",null),a().createElement(c.Z,{bsStyle:"primary",onClick:()=>u(r)},n),a().createElement("br",null),a().createElement("br",null),m()(o,`${r}.description`,null),m()(o,`${r}.note`)&&a().createElement(a().Fragment,null,a().createElement("hr",null),m()(o,`${r}.note`)))))}},370162:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var r={};o.r(r),o.d(r,{exportMapContext:()=>j});var a=o(124852),n=o.n(a),l=o(630294),p=o(478718),m=o.n(p),s=o(227361),c=o.n(s),i=o(171703),d=o(867076),E=o(22222),u=o(804504),x=o(867517),g=o(687753);const b="EXPORT::EXPORT_MAP",f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mapstore2";return{type:b,format:e}};var h=o(119008),y=o(826747),w=o(49977),v=o.n(w),Z=o(604788),C=o.n(Z),k=o(835516),I=o(943650),O=o(501797),M=o(685476),S=o(521923),F=o(274363),N=o(612912),P=o(4143),B=o(945395),X=o(425589),G=o(719648),T=o(57677);function L(e,t){this.title=e,this.message=t}const R=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=k.default.saveMapConfiguration((0,F.Od)(e),(0,N.l2)(e),(0,N.Bt)(e),(0,P.Mz)(e),(0,T.I)(e),(0,T._)(e),(0,B.UC)(e));return t?{...o,map:{...o.map,bbox:(0,F.Od)(e).bbox}}:o},$={mapstore2:e=>v().Observable.of([JSON.stringify(R(e)),"map.json","application/json"]),wmc:e=>{const t=R(e,!0),o=c()(t,"map.layers",[]).filter((e=>!!e.url&&"wms"===e.type));if(0===o.length)throw new L("mapExport.errorTitle","mapExport.wmcNoLayersError");return v().Observable.forkJoin(...o.map((e=>(0,I.kB)(e).catch((()=>v().Observable.of(null)))))).switchMap((e=>v().Observable.of([(0,O.Y)((0,S.t8)("map.layers",C()(o,e).map((e=>{let[t,o]=e;return{...t,capabilities:o}})),t),{}),"context.wmc","application/xml"])))}},j=function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(b).switchMap((e=>{let{format:o}=e;return $[o](t()).do((e=>(0,M.LR)(...e))).map((()=>(0,g.Xg)("export","enabled",!1)))})).catch(((e,t)=>v().Observable.of((0,X.d)({...e instanceof L?e:(0,G.e$)(e),autoDismiss:6,position:"tc"})).concat(t)))};var z=o(152543);const H=["mapstore2","wmc"],J=(0,h.Yq)("export"),Y=(0,d.compose)((0,i.connect)((0,E.zB)({enabled:J}),{onClose:()=>(0,g.Xi)("export"),onExport:f}),(0,d.defaultProps)({formats:{mapstore2:{label:n().createElement(u.Z,{msgId:"mapExport.formats.mapstore2.label"}),description:n().createElement(x.Z,{msgId:"mapExport.formats.mapstore2.description"}),glyph:"ext-json"},wmc:{label:n().createElement(u.Z,{msgId:"mapExport.formats.wmc.label"}),description:n().createElement(x.Z,{msgId:"mapExport.formats.wmc.description"}),note:n().createElement(x.Z,{msgId:"mapExport.formats.wmc.note"}),glyph:"ext-wmc"}}}),(0,d.withState)("format","setFormat","mapstore2"))((e=>{let{enabled:t,format:o,formats:r,enabledFormats:a=H,setFormat:l=(()=>{}),onExport:p=(()=>{}),onClose:s=(()=>{})}=e;return n().createElement(y.Z,{show:t,formats:m()(r,...a),selectedFormat:o,onSelect:l,onExport:p,onClose:s})})),_=(0,z.rx)("MapExport",{component:Y,containers:{SidebarMenu:e=>{const t=c()(e,"cfg.enabledFormats",H);return{name:"export",position:4,tooltip:"mapExport.tooltip",text:n().createElement(u.Z,{msgId:"mapExport.title"}),icon:n().createElement(l.Glyphicon,{glyph:"download"}),action:t.length>1?()=>(0,g.Xi)("export"):()=>f(t[0]||"mapstore2"),priority:1,toggle:!0,doNotHide:!0}},BurgerMenu:e=>{const t=c()(e,"cfg.enabledFormats",H);return{name:"export",position:4,tooltip:"mapExport.tooltip",text:n().createElement(u.Z,{msgId:"mapExport.title"}),icon:n().createElement(l.Glyphicon,{glyph:"download"}),action:t.length>1?()=>(0,g.Xi)("export"):()=>f(t[0]||"mapstore2"),priority:2,toggle:!0,doNotHide:!0}}},epics:r})}}]);