(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[9141],{518334:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a,j:()=>h});var o=r(913580),i=r(949179),n=r(218672),s=function(){this.dataProjection=null,this.defaultFeatureProjection=null};s.prototype.getReadOptions=function(t,e){var r;return e&&(r={dataProjection:e.dataProjection?e.dataProjection:this.readProjection(t),featureProjection:e.featureProjection}),this.adaptOptions(r)},s.prototype.adaptOptions=function(t){return(0,o.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},s.prototype.getLastExtent=function(){return null},s.prototype.getType=function(){return(0,i.O3)()},s.prototype.readFeature=function(t,e){return(0,i.O3)()},s.prototype.readFeatures=function(t,e){return(0,i.O3)()},s.prototype.readGeometry=function(t,e){return(0,i.O3)()},s.prototype.readProjection=function(t){return(0,i.O3)()},s.prototype.writeFeature=function(t,e){return(0,i.O3)()},s.prototype.writeFeatures=function(t,e){return(0,i.O3)()},s.prototype.writeGeometry=function(t,e){return(0,i.O3)()};const a=s;function h(t,e,r){var o,i=r?(0,n.U2)(r.featureProjection):null,s=r?(0,n.U2)(r.dataProjection):null;if(o=i&&s&&!(0,n.OP)(i,s)?Array.isArray(t)?(0,n.$A)(t,s,i):(e?t.clone():t).transform(e?i:s,e?s:i):t,e&&r&&void 0!==r.decimals&&!Array.isArray(o)){var a=Math.pow(10,r.decimals);o===t&&(o=t.clone()),o.applyTransform((function(t){for(var e=0,r=t.length;e<r;++e)t[e]=Math.round(t[e]*a)/a;return t}))}return o}},169141:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var o=r(438906),i=r(623068),n=r(518334),s=r(598968),a=r(798090),h=r(944538),u=r(525642),l=r(552329),d=r(513987),c=r(752043),p=r(640353),f=r(913580),y=r(218672),g=r(28795);function C(t,e){if(!t)return null;var r;switch(t.type){case g.Z.POINT:r=function(t){return new c.Z(t.coordinates)}(t);break;case g.Z.LINE_STRING:r=function(t){return new h.Z(t.coordinates)}(t);break;case g.Z.POLYGON:r=function(t){return new p.ZP(t.coordinates)}(t);break;case g.Z.MULTI_POINT:r=function(t){return new l.Z(t.coordinates)}(t);break;case g.Z.MULTI_LINE_STRING:r=function(t){return new u.Z(t.coordinates)}(t);break;case g.Z.MULTI_POLYGON:r=function(t){return new d.Z(t.coordinates)}(t);break;case g.Z.GEOMETRY_COLLECTION:r=function(t,e){var r=t.geometries.map((function(t){return C(t,undefined)}));return new a.default(r)}(t);break;default:throw new Error("Unsupported GeoJSON type: "+t.type)}return(0,n.j)(r,!1,e)}function _(t,e){var r,o=(t=(0,n.j)(t,!0,e)).getType();switch(o){case g.Z.POINT:r=function(t,e){return{type:"Point",coordinates:t.getCoordinates()}}(t);break;case g.Z.LINE_STRING:r=function(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}(t);break;case g.Z.POLYGON:r=function(t,e){var r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}(t,e);break;case g.Z.MULTI_POINT:r=function(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}(t);break;case g.Z.MULTI_LINE_STRING:r=function(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}(t);break;case g.Z.MULTI_POLYGON:r=function(t,e){var r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}(t,e);break;case g.Z.GEOMETRY_COLLECTION:r=function(t,e){return{type:"GeometryCollection",geometries:t.getGeometriesArray().map((function(t){var r=(0,f.f0)({},e);return delete r.featureProjection,_(t,r)}))}}(t,e);break;case g.Z.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}const v=function(t){function e(e){var r=e||{};t.call(this),this.dataProjection=(0,y.U2)(r.dataProjection?r.dataProjection:"EPSG:4326"),r.featureProjection&&(this.defaultFeatureProjection=(0,y.U2)(r.featureProjection)),this.geometryName_=r.geometryName,this.extractGeometryName_=r.extractGeometryName}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFeatureFromObject=function(t,e){var r,o=C((r="Feature"===t.type?t:{type:"Feature",geometry:t,properties:null}).geometry,e),n=new i.Z;return this.geometryName_?n.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&n.setGeometryName(r.geometry_name),n.setGeometry(o),"id"in r&&n.setId(r.id),r.properties&&n.setProperties(r.properties),n},e.prototype.readFeaturesFromObject=function(t,e){var r=null;if("FeatureCollection"===t.type){r=[];for(var o=t.features,i=0,n=o.length;i<n;++i)r.push(this.readFeatureFromObject(o[i],e))}else r=[this.readFeatureFromObject(t,e)];return r},e.prototype.readGeometryFromObject=function(t,e){return C(t,e)},e.prototype.readProjectionFromObject=function(t){var e,r=t.crs;return r?"name"==r.type?e=(0,y.U2)(r.properties.name):(0,o.h)(!1,36):e=this.dataProjection,e},e.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var r={type:"Feature",geometry:null,properties:null},o=t.getId();void 0!==o&&(r.id=o);var i=t.getGeometry();i&&(r.geometry=_(i,e));var n=t.getProperties();return delete n[t.getGeometryName()],(0,f.xb)(n)||(r.properties=n),r},e.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);for(var r=[],o=0,i=t.length;o<i;++o)r.push(this.writeFeatureObject(t[o],e));return{type:"FeatureCollection",features:r}},e.prototype.writeGeometryObject=function(t,e){return _(t,this.adaptOptions(e))},e}(s.Z)},598968:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var o=r(949179),i=r(518334),n=r(934007);function s(t){return"string"==typeof t?JSON.parse(t)||null:null!==t?t:null}const a=function(t){function e(){t.call(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getType=function(){return n.Z.JSON},e.prototype.readFeature=function(t,e){return this.readFeatureFromObject(s(t),this.getReadOptions(t,e))},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(s(t),this.getReadOptions(t,e))},e.prototype.readFeatureFromObject=function(t,e){return(0,o.O3)()},e.prototype.readFeaturesFromObject=function(t,e){return(0,o.O3)()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(s(t),this.getReadOptions(t,e))},e.prototype.readGeometryFromObject=function(t,e){return(0,o.O3)()},e.prototype.readProjection=function(t){return this.readProjectionFromObject(s(t))},e.prototype.readProjectionFromObject=function(t){return(0,o.O3)()},e.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},e.prototype.writeFeatureObject=function(t,e){return(0,o.O3)()},e.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},e.prototype.writeFeaturesObject=function(t,e){return(0,o.O3)()},e.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},e.prototype.writeGeometryObject=function(t,e){return(0,o.O3)()},e}(i.Z)},944538:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var o=r(179682),i=r(421915),n=r(303696),s=r(28795),a=r(432538),h=r(583729),u=r(438667),l=r(686204),d=r(321422),c=r(260897),p=r(804027),f=r(95173),y=r(862418);const g=function(t){function e(e,r){t.call(this),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===r||Array.isArray(e[0])?this.setCoordinates(e,r):this.setFlatCoordinates(r,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendCoordinate=function(t){this.flatCoordinates?(0,o.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,i.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,r,o))},e.prototype.forEachSegment=function(t){return(0,f.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinateAtM=function(t,e){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM)return null;var r=void 0!==e&&e;return(0,d.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r)},e.prototype.getCoordinates=function(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinateAt=function(t,e){return(0,d.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e)},e.prototype.getLength=function(){return(0,p.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[];return r.length=(0,y.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r,0),new e(r,n.Z.XY)},e.prototype.getType=function(){return s.Z.LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,c.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,u.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},525642:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var o=r(179682),i=r(421915),n=r(303696),s=r(28795),a=r(944538),h=r(432538),u=r(583729),l=r(438667),d=r(686204),c=r(321422),p=r(260897),f=r(862418);const y=function(t){function e(e,r,i){if(t.call(this),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,r);else if(void 0!==r&&i)this.setFlatCoordinates(r,e),this.ends_=i;else{for(var n=this.getLayout(),s=e,a=[],h=[],u=0,l=s.length;u<l;++u){var d=s[u];0===u&&(n=d.getLayout()),(0,o.l7)(a,d.getFlatCoordinates()),h.push(a.length)}this.setFlatCoordinates(n,a),this.ends_=h}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendLineString=function(t){this.flatCoordinates?(0,o.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,i.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,u.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,u.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,r,o))},e.prototype.getCoordinateAtM=function(t,e,r){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM||0===this.flatCoordinates.length)return null;var o=void 0!==e&&e,i=void 0!==r&&r;return(0,c.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,o,i)},e.prototype.getCoordinates=function(){return(0,d.o1)(this.flatCoordinates,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new a.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,r=this.layout,o=[],i=0,n=0,s=e.length;n<s;++n){var h=e[n],u=new a.Z(t.slice(i,h),r);o.push(u),i=h}return o},e.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,r=0,i=this.ends_,n=this.stride,s=0,a=i.length;s<a;++s){var h=i[s],u=(0,c.WW)(e,r,h,n,.5);(0,o.l7)(t,u),r=h}return t},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],o=[];return r.length=(0,f.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,r,0,o),new e(r,n.Z.XY,o)},e.prototype.getType=function(){return s.Z.MULTI_LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,p.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var r=(0,l._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===r.length?0:r[r.length-1],this.changed()},e}(h.ZP)},552329:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var o=r(179682),i=r(421915),n=r(28795),s=r(752043),a=r(432538),h=r(438667),u=r(686204),l=r(921882);const d=function(t){function e(e,r){t.call(this),r&&!Array.isArray(e[0])?this.setFlatCoordinates(r,e):this.setCoordinates(e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPoint=function(t){this.flatCoordinates?(0,o.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,r,o){if(o<(0,i.qf)(this.getExtent(),t,e))return o;for(var n=this.flatCoordinates,s=this.stride,a=0,h=n.length;a<h;a+=s){var u=(0,l.bI)(t,e,n[a],n[a+1]);if(u<o){o=u;for(var d=0;d<s;++d)r[d]=n[a+d];r.length=s}}return o},e.prototype.getCoordinates=function(){return(0,u.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new s.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,r=this.stride,o=[],i=0,n=t.length;i<n;i+=r){var a=new s.Z(t.slice(i,i+r),e);o.push(a)}return o},e.prototype.getType=function(){return n.Z.MULTI_POINT},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,r=this.stride,o=0,n=e.length;o<n;o+=r){var s=e[o],a=e[o+1];if((0,i.jE)(t,s,a))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,h.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},513987:(t,e,r)=>{"use strict";r.d(e,{Z:()=>m});var o=r(179682),i=r(421915),n=r(303696),s=r(28795),a=r(552329),h=r(640353),u=r(432538),l=r(832562),d=r(192526),c=r(583729),p=r(430197),f=r(438667),y=r(686204),g=r(538529),C=r(260897),_=r(680793),v=r(862418);const m=function(t){function e(e,r,i){if(t.call(this),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(e[0])){for(var n=this.getLayout(),s=e,a=[],h=[],u=0,l=s.length;u<l;++u){var d=s[u];0===u&&(n=d.getLayout());for(var c=a.length,p=d.getEnds(),f=0,y=p.length;f<y;++f)p[f]+=c;(0,o.l7)(a,d.getFlatCoordinates()),h.push(p)}r=n,e=a,i=h}void 0!==r&&i?(this.setFlatCoordinates(r,e),this.endss_=i):this.setCoordinates(e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var r=this.flatCoordinates.length;(0,o.l7)(this.flatCoordinates,t.getFlatCoordinates());for(var i=0,n=(e=t.getEnds().slice()).length;i<n;++i)e[i]+=r}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,r=new Array(t),o=0;o<t;++o)r[o]=this.endss_[o].slice();return new e(this.flatCoordinates.slice(),this.layout,r)},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,i.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,c.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,c.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,r,o))},e.prototype.containsXY=function(t,e){return(0,p.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return(0,l.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,_.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,y.ug)(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=(0,d.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,g.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new a.Z(this.getFlatInteriorPoints().slice(),n.Z.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,_.$v)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,_.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],o=[];return r.length=(0,v.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),r,0,o),new e(r,n.Z.XY,o)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var r=this.endss_[t-1];e=r[r.length-1]}var o=this.endss_[t].slice(),i=o[o.length-1];if(0!==e)for(var n=0,s=o.length;n<s;++n)o[n]-=e;return new h.ZP(this.flatCoordinates.slice(e,i),this.layout,o)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,r=this.endss_,o=[],i=0,n=0,s=r.length;n<s;++n){var a=r[n].slice(),u=a[a.length-1];if(0!==i)for(var l=0,d=a.length;l<d;++l)a[l]-=i;var c=new h.ZP(e.slice(i,u),t,a);o.push(c),i=u}return o},e.prototype.getType=function(){return s.Z.MULTI_POLYGON},e.prototype.intersectsExtent=function(t){return(0,C.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var r=(0,f.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===r.length)this.flatCoordinates.length=0;else{var o=r[r.length-1];this.flatCoordinates.length=0===o.length?0:o[o.length-1]}this.changed()},e}(u.ZP)},192526:(t,e,r)=>{"use strict";r.d(e,{E:()=>i});var o=r(421915);function i(t,e,r,i){for(var n=[],s=(0,o.lJ)(),a=0,h=r.length;a<h;++a){var u=r[a];s=(0,o.GN)(t,e,u[0],i),n.push((s[0]+s[2])/2,(s[1]+s[3])/2),e=u[u.length-1]}return n}},321422:(t,e,r)=>{"use strict";r.d(e,{WW:()=>n,iJ:()=>s,dG:()=>a});var o=r(179682),i=r(921882);function n(t,e,r,n,s,a){var h=NaN,u=NaN,l=(r-e)/n;if(1===l)h=t[e],u=t[e+1];else if(2==l)h=(1-s)*t[e]+s*t[e+n],u=(1-s)*t[e+1]+s*t[e+n+1];else if(0!==l){for(var d=t[e],c=t[e+1],p=0,f=[0],y=e+n;y<r;y+=n){var g=t[y],C=t[y+1];p+=Math.sqrt((g-d)*(g-d)+(C-c)*(C-c)),f.push(p),d=g,c=C}var _=s*p,v=(0,o.ry)(f,_);if(v<0){var m=(_-f[-v-2])/(f[-v-1]-f[-v-2]),O=e+(-v-2)*n;h=(0,i.t7)(t[O],t[O+n],m),u=(0,i.t7)(t[O+1],t[O+n+1],m)}else h=t[e+v*n],u=t[e+v*n+1]}return a?(a[0]=h,a[1]=u,a):[h,u]}function s(t,e,r,o,n,s){if(r==e)return null;var a;if(n<t[e+o-1])return s?((a=t.slice(e,e+o))[o-1]=n,a):null;if(t[r-1]<n)return s?((a=t.slice(r-o,r))[o-1]=n,a):null;if(n==t[e+o-1])return t.slice(e,e+o);for(var h=e/o,u=r/o;h<u;){var l=h+u>>1;n<t[(l+1)*o-1]?u=l:h=l+1}var d=t[h*o-1];if(n==d)return t.slice((h-1)*o,(h-1)*o+o);var c=(n-d)/(t[(h+1)*o-1]-d);a=[];for(var p=0;p<o-1;++p)a.push((0,i.t7)(t[(h-1)*o+p],t[h*o+p],c));return a.push(n),a}function a(t,e,r,o,i,n,a){if(a)return s(t,e,r[r.length-1],o,i,n);var h;if(i<t[o-1])return n?((h=t.slice(0,o))[o-1]=i,h):null;if(t[t.length-1]<i)return n?((h=t.slice(t.length-o))[o-1]=i,h):null;for(var u=0,l=r.length;u<l;++u){var d=r[u];if(e!=d){if(i<t[e+o-1])return null;if(i<=t[d-1])return s(t,e,d,o,i,!1);e=d}}return null}}}]);