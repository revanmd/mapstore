(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5085,2619],{221389:(e,t,o)=>{"use strict";o.d(t,{Z:()=>S});var r=o(45697),a=o.n(r),n=o(124852),i=o.n(n),s=o(610928),p=o.n(s),l=o(414293),d=o.n(l),c=o(845243),h=o.n(c),u=(o(921787),o(451172),o(835516));function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}h().Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){const t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),o=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),r=new(h().Marker)(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),a=this._map.latLngToContainerPoint(r.getLatLng());return Math.min(t.distanceTo(a),o.distanceTo(a))}return 1/0};const y=o(727418),{reproject:m,reprojectBbox:w,calculateCircleCoordinates:g,reprojectGeoJson:P}=o(351546),{pointToLayer:v}=o(247012),L=Math.PI/180,C=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===o||void 0===e)return{center:t,projection:o,radius:e};const r=m({x:t.lng,y:t.lat},o,"EPSG:4326");if(void 0===e)return{center:r,projection:o,radius:e};const a=m([t.lng+e,t.lat],o,"EPSG:4326"),n=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),i=n*Math.cos(L*r.y)*40075017/360;return{center:r,projection:"EPSG:4326",radius:i}};class M extends i().Component{constructor(){super(...arguments),f(this,"onDrawStart",(()=>{this.drawing=!0})),f(this,"onDrawCreated",(e=>{this.drawing=!1;const t=e.layer;let o,r=t.toGeoJSON();"marker"===e.layerType?o=h().latLngBounds(r.geometry.coordinates,r.geometry.coordinates):(t._map||(t._map=this.props.map,t._renderer=this.props.map.getRenderer(t),t._project()),o=t.getBounds());let a=(e=>[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()])(o),n=o.getCenter();n=[n.lng,n.lat];let i=r.geometry.coordinates,s="EPSG:4326",p=r.geometry.type,l=t.getRadius?t.getRadius():0;if("circle"===e.layerType){r.projection="EPSG:4326",s="EPSG:3857",a=w(a,"EPSG:4326",s);const e=((e,t,o)=>{if("EPSG:4326"===o)return{center:t,srs:o,radius:e};const r=e/40075017*360/Math.cos(L*t[1]),a=m(t,"EPSG:4326",o);if(r){const e=m([t[0]+r,t[1]],"EPSG:4326",o);return{center:a,srs:o,radius:Math.sqrt(Math.pow(a.x-e.x,2)+Math.pow(a.y-e.y,2))}}return{center:a,srs:o,radius:e}})(t._mRadius,n,s);n=e.center,l=e.radius,i=g(n,l,100),r.radius=t.getRadius?t.getRadius():0,n=[n.x,n.y],p="Polygon"}this.drawLayer.addData(r);let d={type:p,extent:a,center:n,coordinates:i,radius:l,projection:s};this.props.options&&this.props.options.stopAfterDrawing&&this.props.onChangeDrawingStatus("stop",this.props.drawMethod,this.props.drawOwner);const c=this.convertFeaturesToGeoJson(e.layer,this.props);this.props.onEndDrawing(d,this.props.drawOwner),this.props.onGeometryChanged([c],this.props.drawOwner,this.props.options&&this.props.options.stopAfterDrawing?"enterEditMode":"")})),f(this,"onUpdateGeom",((e,t)=>{const o=this.convertFeaturesToGeoJson(e,t);t.onGeometryChanged([o],t.drawOwner)})),f(this,"addLayer",(e=>{this.clean();const t=h().geoJson(null,{pointToLayer:function(e,t){const{center:o,radius:r}=C(e.radius,t,e.projection);return h().circle(o,r||5)},style:t=>e.style&&e.style[t.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}});this.props.map.addLayer(t),e.features&&e.features.length>0&&t.addData(this.convertFeaturesPolygonToPoint(e.features,this.props.drawMethod)),this.drawLayer=t})),f(this,"addGeojsonLayer",(e=>{let{features:t,projection:o,style:r}=e;this.clean();let a=h().geoJson(t,{style:e=>e.style||r,pointToLayer:(e,t)=>{let a=m({x:t.lng,y:t.lat},o,"EPSG:4326");return v(h().latLng(a.y,a.x),e,r)}});this.drawLayer=a.addTo(this.props.map)})),f(this,"replaceFeatures",(e=>{this.drawLayer?(this.drawLayer.clearLayers(),"Circle"===this.props.drawMethod?(this.drawLayer.options.pointToLayer=(e,t)=>{const{center:o,radius:r}=C(e.radius,t,e.projection);return h().circle(o,r||5)},this.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):this.drawLayer.options.pointToLayer=(t,o)=>{let r=m({x:o.lng,y:o.lat},e.options&&e.options.featureProjection||"EPSG:4326","EPSG:4326");return v(h().latLng(r.y,r.x),t,e.style)},this.drawLayer.addData(this.convertFeaturesPolygonToPoint(e.features,this.props.drawMethod))):this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style})})),f(this,"endDrawing",(e=>{this.replaceFeatures(e);const t=p()(e.features);"Circle"!==this.props.drawMethod||!t||d()(t.center)||d()(t.radius)?t&&this.props.onEndDrawing(t,this.props.drawOwner):this.props.onEndDrawing({...t,coordinates:g(t.center,t.radius,100)},this.props.drawOwner)})),f(this,"addDrawInteraction",(e=>{this.removeAllInteractions(),"Point"===e.drawMethod||"MultiPoint"===e.drawMethod?this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style}):this.addLayer(e),this.props.map.on("draw:created",this.onDrawCreated,this),this.props.map.on("draw:drawstart",this.onDrawStart,this),"LineString"===e.drawMethod||"Bearing"===e.drawMethod||"MultiLineString"===e.drawMethod?this.drawControl=new(h().Draw.Polyline)(this.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===e.drawMethod||"MultiPolygon"===e.drawMethod?this.drawControl=new(h().Draw.Polygon)(this.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===e.drawMethod?this.drawControl=new(h().Draw.Rectangle)(this.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===e.drawMethod?this.drawControl=new(h().Draw.Circle)(this.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==e.drawMethod&&"MultiPoint"!==e.drawMethod||(this.drawControl=new(h().Draw.Marker)(this.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),this.props.map.doubleClickZoom&&this.props.map.doubleClickZoom.disable(),this.drawControl.enable()})),f(this,"addDrawOrEditInteractions",(e=>{let t=[];e.features.map((e=>{let o;e&&e.geometry&&e.geometry.type&&!(0,u.isSimpleGeomType)(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(o=e.geometry.geometries.map((t=>t.coordinates.map(((o,r)=>({type:"Feature",properties:{...e.properties},id:t.type+r,geometry:{coordinates:o,type:(0,u.getSimpleGeomType)(t.type)}}))))),t.push({type:"FeatureCollection",features:o})):(o=e.geometry.coordinates.map(((t,o)=>({type:"Feature",properties:{...e.properties},id:e.geometry.type+o,geometry:{coordinates:t,type:(0,u.getSimpleGeomType)(e.geometry.type)}}))),t.push({type:"FeatureCollection",features:o})))}));const o=y({},e,{features:t.length>0?t:[{}]});this.drawLayer?(this.drawLayer.clearLayers(),this.drawLayer.addData(this.convertFeaturesPolygonToPoint(o.features,o.drawMethod))):this.addGeojsonLayer({features:e.features&&e.options.featureProjection&&"EPSG:4326"!==e.options.featureProjection?e.features.map((t=>P(t,e.options.featureProjection,"EPSG:4326"))):e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style}),e.options.editEnabled&&this.addEditInteraction(o),e.options.drawEnabled&&this.addDrawInteraction(o)})),f(this,"addEditInteraction",(e=>{this.clean(),this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:y({},e.style,{poly:{icon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(h().DivIcon)({iconSize:new(h().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});let t=this.drawLayer.getLayers();setTimeout((()=>{t.forEach((t=>{t.getLayers&&t.getLayers()&&t.getLayers().length?t.getLayers().forEach((t=>{t.on("edit",(t=>this.onUpdateGeom(t.target,e))),t.on("moveend",(t=>this.onUpdateGeom(t.target,e))),t.editing&&t.editing.enable()})):(t.on("edit",(t=>this.onUpdateGeom(t.target,e))),t.on("moveend",(t=>this.onUpdateGeom(t.target,e))),t.editing&&t.editing.enable())}))}),0),this.editControl=new(h().Control.Draw)({edit:{featureGroup:this.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),this.props.map.doubleClickZoom&&this.props.map.doubleClickZoom.disable()})),f(this,"removeAllInteractions",(()=>{this.removeEditInteraction(),this.removeDrawInteraction()})),f(this,"removeDrawInteraction",(()=>{null!==this.drawControl&&void 0!==this.drawControl&&(this.props.options&&this.props.options.stopAfterDrawing&&(this.drawControl.setOptions({repeatMode:!1}),this.props.onDrawStopped()),this.drawControl.disable(),this.drawControl=null,this.props.map.off("draw:created",this.onDrawCreated,this),this.props.map.off("draw:drawstart",this.onDrawStart,this),this.props.map.doubleClickZoom&&this.props.map.doubleClickZoom.enable())})),f(this,"removeEditInteraction",(()=>{this.drawLayer&&(this.drawLayer.getLayers().forEach((e=>{e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((e=>{e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),this.editControl=null),this.props.map.doubleClickZoom&&this.props.map.doubleClickZoom.enable()})),f(this,"cleanAndStop",(()=>{this.removeAllInteractions(),this.drawLayer&&(this.drawLayer.clearLayers(),this.props.map.removeLayer(this.drawLayer),this.drawLayer=null)})),f(this,"clean",(()=>{this.removeEditInteraction(),this.removeDrawInteraction(),this.drawLayer&&(this.drawLayer.clearLayers(),this.props.map.removeLayer(this.drawLayer),this.drawLayer=null)})),f(this,"convertFeaturesPolygonToPoint",((e,t)=>"Circle"===t?e.map((e=>{const{center:t,projection:o,radius:r}=void 0!==e.center&&void 0!==e.radius?C(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e;return{...e,coordinates:t?[t.x,t.y]:e.coordinates,center:t||e.center,projection:o||e.projection,radius:void 0!==r?r:e.radius,type:"Point"}})):e)),f(this,"convertFeaturesToGeoJson",((e,t)=>{let o;if((0,u.isSimpleGeomType)(t.drawMethod))o=e.toGeoJSON().geometry;else{if("GeometryCollection"===t.drawMethod)return{type:"GeometryCollection",geometries:this.drawLayer.getLayers().map((e=>e.toGeoJSON())).map((e=>"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((e=>e.geometry.coordinates))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}))};let e=this.drawLayer.getLayers().map((e=>e.toGeoJSON()));o={type:t.drawMethod,coordinates:e.reduce(((e,t)=>e.concat([t.geometry.coordinates])),[])}}return y({},e.toGeoJSON(),{geometry:o})}))}UNSAFE_componentWillReceiveProps(e){let t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(h().drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}render(){return null}}f(M,"displayName","DrawSupport"),f(M,"propTypes",{map:a().object,drawOwner:a().string,drawStatus:a().string,drawMethod:a().string,options:a().object,features:a().array,onChangeDrawingStatus:a().func,onGeometryChanged:a().func,onDrawStopped:a().func,onEndDrawing:a().func,messages:a().object,style:a().object}),f(M,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:()=>{},onGeometryChanged:()=>{},onDrawStopped:()=>{},onEndDrawing:()=>{},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}});const S=M},795141:(e,t,o)=>{"use strict";o.d(t,{Z:()=>w});var r=o(124852),a=o.n(r),n=o(180307),i=o.n(n),s=o(45697),p=o.n(s),l=o(845243),d=o.n(l),c=o(747037),h=o.n(c),u=o(39600),f=o(492619);function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const m=(e,t)=>{let o=new MutationObserver((()=>{e.update()}));e.once("remove",(()=>{o&&o.disconnect(),o=null})),o.observe(t,{attributes:!0,childList:!0,subtree:!0})};class w extends a().Component{constructor(){var e;super(...arguments),e=this,y(this,"updatePopup",(()=>{(this._popups||[]).map((e=>{let{popup:t}=e;return t.update()}))})),y(this,"popupClose",(function(){let{target:{options:{id:t}={}}={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&e.props.onPopupClose(t)})),y(this,"preparePopups",(()=>{const{popups:t=[],map:o}=this.props,r=this.props.map.getSize();return(this._popups||[]).forEach((e=>{let{popup:t}=e;t.off("remove",this.popupClose),t&&this.props.map.removeLayer(t)})),this._popups=t.map((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=.9*r.x,n=.9*r.y,{id:i,position:{coordinates:s},component:p,content:l,className:c,maxWidth:h=a,maxHeight:f=n,autoPan:y=!0,offset:w=[0,7]}=t,g=h>a?a:h,P=f>n?n:f,v=u.fH(i,c);v.setAttribute("style",`max-width: ${g}px; max-height: ${P}px`),u.R3(v,l);const L=d().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:y,autoPanPadding:d().point(70,70),maxWidth:g,maxHeight:P,className:"ms-leaflet-popup",offset:w}).setContent(v);return L.once("remove",e.popupClose),p&&m(L,v),L.setLatLng(s),o.addLayer(L),{popup:L,...t}})),this._popups})),y(this,"stopPropagationOnMouseMove",(e=>{e.stopPropagation()})),y(this,"fireMouseOutEvent",(()=>{this.props.map.fireEvent("mouseout")}))}UNSAFE_componentWillMount(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}componentDidMount(){this.props.map&&this.props.map.on("resize",this.updatePopup)}shouldComponentUpdate(e){let{popups:t}=e;return t!==this.props.popups}componentWillUnmount(){(this._popups||[]).forEach((e=>{var t,o;let{popup:r}=e;r.off("remove",this.popupClose),r&&(null===(t=this.props.map)||void 0===t||null===(o=t.removeLayer)||void 0===o||o.call(t,r))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}renderPopups(){return this.preparePopups().filter((e=>{let{component:t}=e;return!!t})).map((e=>{let{popup:t,props:o={},component:r,id:n}=e;const s=t.getContent(),p=h()(r)&&f.default[r]||r,l=a().isValidElement(p)&&p||a().createElement(p,o);return s?i().createPortal(l,s,n):null}))}render(){return a().createElement("div",null,this.renderPopups())}}y(w,"propTypes",{map:p().object,popups:p().arrayOf(p().object),onPopupClose:p().func}),y(w,"defaultProps",{popups:[],onPopupClose:()=>{}})},492619:(e,t,o)=>{"use strict";o.r(t),o.d(t,{IDENTIFY_POPUP:()=>C,default:()=>M});var r=o(124852),a=o.n(r),n=o(554155),i=o(306637),s=o(867076),p=o(171703),l=o(22222),d=o(975872),c=o(917450),h=o(765963),u=o(701469),f=o.n(u),y=o(352353),m=o.n(y),w=o(105198),g=o(274363);const P=(0,s.compose)((0,p.connect)((0,l.P1)(d.Qf,(e=>({index:e}))),{setIndex:c.oO}),(0,s.defaultProps)({index:0,responses:[]})),v=(0,l.P1)([d.q7,d.o9,d.OK,d.us,d.x0,g.hp,d.vR],((e,t,o,r,a,n,i)=>({responses:e,validResponses:t,requests:o,format:r,showEmptyMessageGFI:a,missingResponses:(o||[]).length-(e||[]).length,renderValidOnly:n,loaded:i}))),L=(0,s.compose)((0,p.connect)(v),(0,s.defaultProps)({responses:[],container:e=>{let{index:t,children:o}=e;return a().createElement(a().Fragment,null,f()(o)&&o[t]||o)},header:w.Z}),P,i.Yy,i.mI,(0,n.Z)((e=>{let{loaded:t}=e;return m()(t)})))(h.Z),C="identify",M={identify:L}},39600:(e,t,o)=>{"use strict";o.d(t,{fH:()=>n,FP:()=>i,R3:()=>s});var r=o(455877),a=o.n(r);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup";const o=document.createElement("div");return o.setAttribute("id",e+"-map-popup"),o.setAttribute("class",t),o},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},s=(e,t)=>{if(!t)return e;if(t instanceof Node){const o=document.createDocumentFragment();o.appendChild(t),e.appendChild(o)}else i(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},823493:(e,t,o)=>{var r=o(23279),a=o(513218);e.exports=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),r(e,t,{leading:n,maxWait:t,trailing:i})}}}]);