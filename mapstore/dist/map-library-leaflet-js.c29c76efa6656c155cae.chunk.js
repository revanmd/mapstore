(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7161,2183],{904759:(t,e,i)=>{"use strict";i.r(e);var r=i(845243),a=i.n(r),n=i(926447),o=i.n(n),s=(i(371851),i(727418)),l=i.n(s);a().BingLayer.prototype.loadMetadata=function(){if(this.metaRequested)return;this.metaRequested=!0;const t=this,e="_bing_metadata_"+a().Util.stamp(this);window[e]=function(i){t.meta=i,window[e]=void 0;const r=document.getElementById(e);return r.parentNode.removeChild(r),i.errorDetails?(t.fire("load",{layer:t}),t.onError(i)):(t.initMetadata(i),null)};const i="file:"===document.location.protocol?"https":document.location.protocol.slice(0,-1),r=i+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+i,n=document.createElement("script");n.type="text/javascript",n.src=r,n.id=e,document.getElementsByTagName("head")[0].appendChild(n)},a().BingLayer.prototype.onError=function(t){return this.options.onError?this.options.onError(t):null},o().registerType("bing",{create:t=>{var e=t.apiKey;let i={subdomains:[0,1,2,3],type:t.name,attribution:"Bing",culture:"",onError:t.onError,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23};return t.zoomOffset&&(i=l()({},i,{zoomOffset:t.zoomOffset})),new(a().BingLayer)(e,i)},isValid:t=>!t.meta||!t.meta.statusCode||200===t.meta.statusCode})},685410:(t,e,i)=>{var r=i(845243);t.exports=r.TileLayer.extend({initialize:function(t){r.TileLayer.prototype.initialize.call(this,this.url,t)}})},974177:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(845243),o=i.n(n);i(514767),a().registerType("google",(t=>{return(null===(e=window)||void 0===e||null===(i=e.google)||void 0===i?void 0:i.maps)?o().gridLayer.googleMutant({type:t.name.toLowerCase(),maxNativeZoom:t.maxNativeZoom||18,maxZoom:t.maxZoom||20}):null;var e,i}))},476747:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(471305),o=i.n(n),s=i(727418),l=i.n(s);i(522729),a().registerType("graticule",{create:t=>{const e=l()({interval:20,showOriginLabel:!0,redraw:"move"},t);return o()?new(o())(e):null},isValid:()=>!!o()})},106782:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(789285),o=i.n(n);a().registerType("mapquest",{create:t=>o()?o().mapLayer({maxZoom:23,...t}):(t&&t.onError&&t.onError(),!1),isValid:()=>!!o()})},265610:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(845243),o=i.n(n);a().registerType("osm",(t=>o().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoomOffset:t.zoomOffset||0,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23})))},799985:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(845243),o=i.n(n);a().registerType("tms",(t=>o().tileLayer(`${t.tileMapUrl}/{z}/{x}/{y}.${t.extension}`,{hideErrors:t.hideErrors||!0,tms:!0})))},99370:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(845243),o=i.n(n),s=i(470326);a().registerType("tileprovider",(t=>{let[e,i]=s.Z.getLayerConfig(t.provider,{maxZoom:23,...t});return o().tileLayer(e,i)}))},58655:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(618446),o=i.n(n),s=i(414293),l=i.n(s),m=i(845243),u=i.n(m),d=i(119950);const c=(t,e)=>{t.eachLayer&&t.eachLayer((t=>{t.setOpacity&&t.setOpacity(e),c(t,e)}))},p=t=>{var e,i;return(null==t||null===(e=t.style)||void 0===e?void 0:e.body)&&(null==t||null===(i=t.style)||void 0===i?void 0:i.format)},y=t=>{const e=function(t){const{hideLoading:e}=t,i=u().geoJson([],{pointToLayer:"marker"!==t.styleName?function(e,i){return u().circleMarker(i,e.style||t.style)}:null,hideLoading:e});return i.setOpacity=t=>{c(i,t)},i.on("layeradd",(e=>{let{layer:r}=e;i.setOpacity(l()(i.opacity)?t.opacity:i.opacity,r)})),i}(t);return e.opacity=l()(t.opacity)?1:t.opacity,e._msLegacyGeoJSON=!0,e},h=t=>{const{hideLoading:e}=t,i=u().geoJson(t.features,{hideLoading:e});return(0,d.getStyle)((0,d.applyDefaultStyleToLayer)(t),"leaflet").then((e=>{const{style:r,pointToLayer:a=(()=>null),filter:n=(()=>!0)}=e&&e({opacity:t.opacity})||{};i.clearLayers(),i.options.pointToLayer=a,i.options.filter=n,i.addData(t.features),i.setStyle(r)})),i};a().registerType("vector",{create:t=>p(t)?h(t):y(t),update:(t,e,i)=>t._msLegacyGeoJSON?((t,e,i)=>(e.opacity!==i.opacity&&(t.opacity=e.opacity),o()(e.style,i.style)?null:p(e)?h(e):y(e)))(t,e,i):((t,e,i)=>(o()(i.style,e.style)&&e.opacity===i.opacity||(0,d.getStyle)((0,d.applyDefaultStyleToLayer)(e),"leaflet").then((i=>{const{style:r,pointToLayer:a=(()=>null),filter:n=(()=>!0)}=i&&i({opacity:e.opacity})||{};t.clearLayers(),t.options.pointToLayer=a,t.options.filter=n,t.addData(e.features),t.setStyle(r)})),null))(t,e,i),render:()=>null})},216130:(t,e,i)=>{"use strict";var r=i(618446),a=i.n(r),n=i(845243),o=i.n(n),s=i(351546),l=i(926447),m=i.n(l),u=i(676794),d=i(487758),c=i(988594),p=i(119950);const y=(t,e)=>{(0,p.layerToGeoStylerStyle)(e).then((i=>{(0,p.getStyle)((0,p.applyDefaultStyleToLayer)({...e,style:i}),"leaflet").then((i=>{const{style:r,pointToLayer:a=(()=>null),filter:n=(()=>!0)}=i&&i({opacity:e.opacity})||{};t.clearLayers(),t.options.pointToLayer=a,t.options.filter=n,t.addData(t._msFeatures),t.setStyle(r)}))}))},h=(t,e)=>{t.fireEvent("loading");const i=(0,u.v)(e),r=()=>{t.fireEvent("loadError")};return(0,d.Bm)(e.url,e.name,{outputFormat:"application/json",maxFeatures:1e3,srsname:(0,s.normalizeSRS)("EPSG:4326"),...i}).then((i=>(200===i.status?(t.clearLayers(),t._msFeatures={...i.data},t.addData(i.data),t.fireEvent("load"),y(t,e)):(console.error(i),r(new Error("status code of response:"+i.status))),t))).catch((t=>{r()}))};m().registerType("wfs",{create:t=>{const e=new(o().GeoJSON)([],{});return h(e,t),e},update:(t,e,i)=>((0,c.Es)(i,e)&&h(t,e),a()(e.style,i.style)&&e.styleName===i.styleName&&e.opacity===i.opacity||y(t,e),null),render:()=>null})},742728:(t,e,i)=>{"use strict";i.r(e);var r=i(124852),a=i.n(r),n=i(804504),o=i(926447),s=i.n(o),l=i(676794),m=i(508808),u=i.n(m),d=i(845243),c=i.n(d),p=i(727418),y=i.n(p),h=i(701469),g=i.n(h),f=i(414293),v=i.n(f),S=i(555363),x=i(642165),L=i(399790),T=i(40649);i(312787),c().NonTiledLayer.WMSCustom=c().NonTiledLayer.WMS.extend({initialize:function(t,e){this._wmsUrl=t;let i=c().extend({},this.defaultWmsParams);for(let t in e)this.options.hasOwnProperty(t)||"CRS"===t.toUpperCase()||"maxNativeZoom"===t||(i[t]=e[t]);this.wmsParams=i,c().setOptions(this,e)},removeParams:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.forEach((t=>delete this.wmsParams[t])),e||this.redraw(),this}}),c().nonTiledLayer.wmsCustom=function(t,e){return new(c().NonTiledLayer.WMSCustom)(t,e)},c().TileLayer.MultipleUrlWMS=c().TileLayer.WMS.extend({initialize:function(t,e){this._url=t[0],this._urls=t,this._urlsIndex=0;let i=c().extend({},this.defaultWmsParams),r=e.tileSize||this.options.tileSize;e.detectRetina&&c().Browser.retina?i.width=i.height=2*r:i.width=i.height=r;for(let t in e)this.options.hasOwnProperty(t)||"CRS"===t.toUpperCase()||"maxNativeZoom"===t||(i[t]=e[t]);this.wmsParams=i,c().setOptions(this,e)},getTileUrl:function(t){let e=this._map,i=this.options.tileSize,r=t.multiplyBy(i),a=r.add([i,i]),n=this._crs.project(e.unproject(r,t.z)),o=this._crs.project(e.unproject(a,t.z)),s=this._wmsVersion>=1.3&&this._crs===c().CRS.EPSG4326?[o.y,n.x,n.y,o.x].join(","):[n.x,o.y,o.x,n.y].join(",");this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);const l=c().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t)});return l+c().Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+s},removeParams:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.forEach((t=>delete this.wmsParams[t])),e||this.redraw(),this}}),c().tileLayer.multipleUrlWMS=function(t,e){return new(c().TileLayer.MultipleUrlWMS)(t,e)},c().TileLayer.ElevationWMS=c().TileLayer.MultipleUrlWMS.extend({initialize:function(t,e,i,r){this._tiles={},this._nodata=i,this._littleendian=r,c().TileLayer.MultipleUrlWMS.prototype.initialize.apply(this,arguments)},_addTile:function(t){const e=this.getTileUrl(t);(0,x.qR)(e,t,this._tileCoordsToKey(t))},getElevation:function(t,e){try{const i=this._getTileFromCoords(t),r=(0,x.yQ)(this._tileCoordsToKey(i),this._getTileRelativePixel(i,e),this.getTileSize().x,this._nodata,this._littleendian);return r.available?r.value:a().createElement(n.Z,{msgId:r.message})}catch(t){return a().createElement(n.Z,{msgId:"elevationLoadingError"})}},_getTileFromCoords:function(t){var e=this._map.project(t).divideBy(256).floor();return y()(e,{z:this._tileZoom})},_getTileRelativePixel:function(t,e){var i=Math.floor(e.x-this._getTilePos(t).x-this._map._getMapPanePos().x),r=Math.min(this.getTileSize().x-1,Math.floor(e.y-this._getTilePos(t).y-this._map._getMapPanePos().y));return new(c().Point)(i,r)},_removeTile:function(){},_abortLoading:function(){}}),c().tileLayer.elevationWMS=function(t,e,i,r){return new(c().TileLayer.ElevationWMS)(t,e,i,r)};const w=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce(((e,i)=>v()(t[i])?e:y()(e,{[i]:t[i]})),{})};function M(t){var e=void 0!==t.opacity?t.opacity:1;const i=(0,l.v)(t),r=y()({},t.baseParams,{attribution:t.credits&&(0,L.go)(t.credits),layers:t.name,styles:t.style||"",format:((0,T.z)(t.format)?"image/png":t.format)||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e,zIndex:t.zIndex,version:t.version||"1.3.0",tileSize:t.tileSize||256,maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},y()(t._v_?{_v_:t._v_}:{},i||{}));return(0,S.addAuthenticationToSLD)(r,t)}function _(t){return t.map((t=>t.split("?")[0]))}s().registerType("wms",{create:t=>{const e=_(g()(t.url)?t.url:[t.url]),i=w(M(t)||{});return e.forEach((e=>(0,S.addAuthenticationParameter)(e,i,t.securityToken))),t.useForElevation?c().tileLayer.elevationWMS(e,i,t.nodata||-9999,t.littleendian||!1):t.singleTile?c().nonTiledLayer.wmsCustom(e[0],i):c().tileLayer.multipleUrlWMS(e,i)},update:function(t,e,i){if(i.singleTile!==e.singleTile||i.tileSize!==e.tileSize||i.securityToken!==e.securityToken&&e.visibility){let t;const i=_(g()(e.url)?e.url:[e.url]),r=M(e)||{};return i.forEach((t=>(0,S.addAuthenticationParameter)(t,r,e.securityToken))),t=e.singleTile?c().nonTiledLayer.wmsCustom(i[0],r):c().tileLayer.multipleUrlWMS(i,r),t}let r=y()({},u().filterWMSParamOptions(M(i)),(0,S.addAuthenticationToSLD)(i.params||{},i)),a=y()({},u().filterWMSParamOptions(M(e)),(0,S.addAuthenticationToSLD)(e.params||{},e)),n=Object.keys(a).filter((t=>a[t]!==r[t])),o=Object.keys(r).filter((t=>r[t]!==a[t])),s={};return o.length>0&&t.removeParams(o,n.length>0),n.length>0&&(s=n.reduce(((t,e)=>y()({},t,{[e]:a[e]})),s),t.setParams(w(y()(s,s.params,(0,S.addAuthenticationToSLD)(e.params||{},e))))),null}})},929887:(t,e,i)=>{"use strict";i.r(e);var r=i(926447),a=i.n(r),n=i(351546),o=i(845243),s=i.n(o),l=i(727418),m=i.n(l),u=i(555363),d=i(399790),c=i(276570),p=i(835516),y=i(91175),h=i.n(y),g=i(281763),f=i.n(g);const v=s().TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.3.0",layer:"",style:"",tileMatrixSet:"",format:"image/jpeg"},initialize:function(t,e,i){this._url=t[0],this._urls=t,this._urlsIndex=0;let r=s().extend({},this.defaultWmtsParams),a=e.tileSize||this.options.tileSize;e.detectRetina&&s().Browser.retina?r.width=r.height=2*a:r.width=r.height=a;for(let t in e)this.options.hasOwnProperty(t)||"crs"===t||(r[t]=e[t]);this.wmtsParams=r,this.matrixIds=i.matrixIds&&this.getMatrix(i.matrixIds,i)||this.getDefaultMatrix(i),this.matrixSet=i.matrixSet&&i.matrixSet.TileMatrix||[],this.ignoreErrors=i.ignoreErrors||!1,s().setOptions(this,e)},getWMTSParams:(t,e,i,r,a)=>{const o=(0,p.getScales)()[i],s=h()(t.map(((e,i)=>{if(i===t.length-1)return null;const r=parseFloat(e.ScaleDenominator),a=parseFloat(t[i+1].ScaleDenominator);return r>=o&&a<o?o-a>(r-a)/2?{id:i,data:e}:{id:i+1,data:t[i+1]}:null})).filter((t=>t))),l=s&&f()(s.id)&&s.id+""||0===t.length&&i||null;if(!e[l])return null;const m=e[l].identifier,u=s.data&&s.data.TopLeftCorner&&(0,n.parseString)(s.data.TopLeftCorner)||e[l].topLeftCorner,d=u.lng||u.x,c=u.lat||u.y,y=Math.round((r.x-d)/a),g=-Math.round((r.y-c)/a),v=s.data&&s.data.MatrixWidth&&s.data.MatrixHeight&&{cols:{min:0,max:s.data.MatrixWidth-1},rows:{min:0,max:s.data.MatrixHeight-1}},S=e[l].ranges||v;return S&&!function(t,e,i){return!(t<i.cols.min||t>i.cols.max||e<i.rows.min||e>i.rows.max)}(y,g,S)?null:{ident:m,tilecol:y,tilerow:g}},getTileUrl:function(t){let e=this._map,i=e.options.crs,r=this.options.tileSize,a=t.multiplyBy(r);a.x+=1,a.y-=1;let n=a.add([r,r]),o=i.project(e.unproject(a,t.z)),l=i.project(e.unproject(n,t.z)).x-o.x;const m=this.getWMTSParams([...this.matrixSet],[...this.matrixIds],t.z,o,l);if(!m)return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);const u=s().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t),TileRow:m.tilerow,TileCol:m.tilecol,TileMatrixSet:this.options.tileMatrixSet,TileMatrix:m.ident,Style:this.options.style});return"RESTful"===this.options.requestEncoding?u:u+s().Util.getParamString(this.wmtsParams,u,!0)+"&tilematrix="+m.ident+"&tilerow="+m.tilerow+"&tilecol="+m.tilecol},getMatrix:function(t,e){return t.map((t=>({identifier:t.identifier,topLeftCorner:new(s().LatLng)(e.originY,e.originX),ranges:t.ranges||null})))},getDefaultMatrix:function(t){var e=new Array(22);for(let i=0;i<22;i++)e[i]={identifier:t.tileMatrixPrefix+i,topLeftCorner:new(s().LatLng)(t.originY,t.originX)};return e},onError:function(){return!this.ignoreErrors}});var S=i(701469),x=i.n(S),L=i(40649);s().tileLayer.wmts=function(t,e,i){return new v(t,e,i)};const T=t=>{const e=function(t){return t.map((t=>t.split("?")[0]))}(x()(t.url)?t.url:[t.url]),i=function(t){const e=(0,n.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),i=t.credits&&(0,d.go)(t.credits)||"",r=c.C2(t.tileMatrixSet,e,t.allowedSRS,t.matrixIds);return m()({requestEncoding:t.requestEncoding,layer:t.name,style:t.style||"",attribution:i,format:((0,L.z)(t.format)?"image/png":t.format)||"image/png",tileMatrixSet:r,version:t.version||"1.0.0",tileSize:t.tileSize||256,CRS:(0,n.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t.params||{})}(t)||{};e.forEach((e=>(0,u.addAuthenticationParameter)(e,i,t.securityToken)));const r=(0,n.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),{tileMatrixSet:a,matrixIds:o}=c.h7(t,r);return s().tileLayer.wmts(e,i,{tileMatrixPrefix:t.tileMatrixPrefix||i.tileMatrixSet+":"||r+":",originY:t.originY||20037508.3428,originX:t.originX||-20037508.3428,ignoreErrors:t.ignoreErrors||!1,matrixIds:o,matrixSet:a})};a().registerType("wmts",{create:T,update:(t,e,i)=>i.securityToken!==e.securityToken||i.format!==e.format||i.credits!==e.credits?T(e):null})},72183:(t,e,i)=>{t.exports={BingLayer:i(904759),Commons:i(685410),GraticuleLayer:i(476747),GoogleLayer:i(974177),MapQuest:i(106782),OSMLayer:i(265610),TMSLayer:i(799985),TileProviderLayer:i(99370),WFSLayer:i(216130).default,WMSLayer:i(742728),WMTSLayer:i(929887),VectorLayer:i(58655)}},147352:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});const r=()=>(i(72183),{Map:i(728589).Z,Layer:i(580537).Z,Feature:i(574198).Z,MeasurementSupport:i(876504).Z,Overview:i(397969),ScaleBar:i(982935),DrawSupport:i(221389).Z,PopupSupport:i(795141).Z})},789285:t=>{t.exports=window.MQ},642165:(t,e,i)=>{"use strict";i.d(e,{qR:()=>u,yQ:()=>d});var r=i(470509),a=i.n(r),n=i(581399),o=i.n(n),s=i(882702);let l=new(o())(100);const m=function(t,e,i,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,n=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const o=r*t+i;try{const t=e.dataView.getInt16(2*o,n);if(t!==a&&32767!==t&&-32768!==t)return t}catch(t){}return null},u=(t,e,i)=>l.has(i)?null:new s.Promise(((r,n)=>{a().get(t,{responseType:"arraybuffer"}).then((t=>{((t,e,i)=>{l.set(i,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})})(t.data,e,i),r()})).catch((t=>{((t,e,i)=>{l.set(i,{coords:e,current:!0,status:"error: "+t})})(t.message,e,i),n(t)}))})),d=function(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const n=l.get(t);return n&&"success"===n.status?{available:!0,value:m(i,n,e.x,e.y,r,a)}:n&&"loading"===n.status?{available:!1,message:"elevationLoading"}:n&&"error"===n.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},556233:(t,e,i)=>{"use strict";i.d(e,{rp:()=>l,Ov:()=>u,wd:()=>d,L0:()=>c}),i(701469);var r=i(91175),a=i.n(r),n=i(807654),o=i.n(n);function s(t){var e=Math.floor(t),i=60*(t-e),r=Math.floor(i),a=60*(i-r);return e+"° "+r+"' "+Math.floor(a)+"'' "}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,{measureTrueBearing:e=!1,fractionDigits:i=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="";if(e){let e="";t>=0&&t<10?e="00":t>10&&t<100&&(e="0"),r=e+(i>0?t.toFixed(i):Math.floor(t))+"°"}else t>=0&&t<90?r="N "+s(t)+"E":t>90&&t<=180?r="S "+s(180-t)+"E":t>180&&t<270?r="S "+s(t-180)+"W":t>=270&&t<=360&&(r="N "+s(360-t)+"W");return r}const m={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return m[e]&&m[e][i]?t*m[e][i]:t}const d=t=>!o()(parseFloat(t[0]))&&!o()(parseFloat(t[1])),c=function(){let{coordinates:t,type:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t;if("LineString"===e){if(i=t.filter(d),i.length<2)return[]}else if("Polygon"===e){if(i=a()(t).filter(d),i.length<3)return[[]];i=[i.concat([a()(i)])]}return i}},40649:(t,e,i)=>{"use strict";i.d(e,{z:()=>a});const r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],a=t=>-1!==r.indexOf(t)},508808:(t,e,i)=>{var r=i(727418),a={PARAM_OPTIONS:["layers","styles","format","transparent","version","tiled","zindex","_v_","cql_filter","sld"],wmsToLeafletOptions:function(t){var e=void 0!==t.opacity?t.opacity:1;return r({layers:t.name,styles:t.style||"",format:t.format||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e},t.params||{})},getWMSURL:function(t){return t.split("?")[0]},filterWMSParamOptions(t){let e={};return Object.keys(t).forEach((i=>{i&&i.toLowerCase&&a.PARAM_OPTIONS.indexOf(i.toLowerCase())>=0&&(e[i]=t[i])})),e}};t.exports=a},861667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);