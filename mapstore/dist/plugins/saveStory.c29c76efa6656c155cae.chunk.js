(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[8989],{996991:(e,o,r)=>{"use strict";r.r(o),r.d(o,{GeoStorySave:()=>w,GeoStorySaveAs:()=>P});var t=r(124852),n=r.n(t),s=r(630294),a=r(171703),c=r(867076),l=r(828878),i=r(22222),p=r(219002),u=r(804504),y=r(626365),S=r(130609),d=r(468181),v=r(796205),g=r(510644),m=r(400043),h=r(152543);(0,c.setObservableConfig)(l.Z);const E=(0,c.compose)((0,a.connect)((0,i.P1)(v.Kg,g.np,v.E2,v.vO,((e,o,r,t)=>({data:e,user:o,loading:r,errors:t}))),{onSave:p.mY,clearGeostorySaveError:p.tl,onClose:()=>(0,p.g5)(m.ZX.SHOW_SAVE,!1)}),(0,c.withHandlers)({onClose:function(){let{onClose:e=(()=>{}),clearGeostorySaveError:o=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return()=>{e(),o()}}}),(0,c.withProps)({category:"GEOSTORY"}),y.Z)(S.Z),w=(0,h.rx)("GeoStorySave",{component:(0,c.compose)((0,a.connect)((0,i.P1)(v.P_,v.rt,((e,o)=>({show:"save"===e,resource:o})))),(0,c.withProps)((e=>{let{resource:o}=e;return{isNewResource:!(null!=o&&o.id)}})))(E),reducers:{geostory:d.Z},containers:{BurgerMenu:{name:"geoStorySave",selector:(0,i.P1)(g.jl,v.rt,(function(e){let{canEdit:o,id:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{style:e&&r&&o?{}:{display:"none"}}})),position:1,text:n().createElement(u.Z,{msgId:"save"}),icon:n().createElement(s.Glyphicon,{glyph:"floppy-open"}),action:p.g5.bind(null,m.ZX.SHOW_SAVE,"save"),priority:1,doNotHide:!0}}}),P=(0,h.rx)("GeoStorySaveAs",{component:(0,c.compose)((0,a.connect)((0,i.P1)(v.P_,(e=>({show:"saveAs"===e})))),(0,c.withProps)({isNewResource:!0}))(E),reducers:{geostory:d.Z},containers:{BurgerMenu:{name:"geoStorySaveAs",selector:(0,i.P1)(g.jl,v.rt,(e=>({style:e?{}:{display:"none"}}))),position:2,text:n().createElement(u.Z,{msgId:"saveAs"}),icon:n().createElement(s.Glyphicon,{glyph:"floppy-open"}),action:p.g5.bind(null,m.ZX.SHOW_SAVE,"saveAs"),priority:1,doNotHide:!0}}})}}]);