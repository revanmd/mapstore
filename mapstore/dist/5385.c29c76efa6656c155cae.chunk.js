(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5385],{420273:(e,r,t)=>{var o=t(989049);function n(e,r,t){var o=!1;r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&(r=r.slice(0,r.length-1));for(var n=0,i=r.length-1;n<r.length;i=n++){var a=r[n][0],u=r[n][1],s=r[i][0],f=r[i][1];if(e[1]*(a-s)+u*(s-e[0])+f*(e[0]-a)==0&&(a-e[0])*(s-e[0])<=0&&(u-e[1])*(f-e[1])<=0)return!t;u>e[1]!=f>e[1]&&e[0]<(s-a)*(e[1]-u)/(f-u)+a&&(o=!o)}return o}e.exports=function(e,r){var t=o.getCoord(e),i=r.geometry.coordinates;"Polygon"===r.geometry.type&&(i=[i]);for(var a=0,u=!1;a<i.length&&!u;a++)if(n(t,i[a][0])){for(var s=!1,f=1;f<i[a].length&&!s;)n(t,i[a][f],!0)&&(s=!0),f++;s||(u=!0)}return u}},989049:e=>{function r(e){if(!e)throw new Error("obj is required");var r;if(e.length?r=e:e.coordinates?r=e.coordinates:e.geometry&&e.geometry.coordinates&&(r=e.geometry.coordinates),r)return t(r),r;throw new Error("No valid coordinates")}function t(e){if(e.length>1&&"number"==typeof e[0]&&"number"==typeof e[1])return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}function o(e){if(!e)throw new Error("geojson is required");if(void 0!==e.geometry)return e.geometry;if(e.coordinates||e.geometries)return e;throw new Error("geojson must be a valid Feature or Geometry Object")}e.exports={geojsonType:function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)},collectionOf:function(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<e.features.length;o++){var n=e.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}},featureOf:function(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)},getCoord:function(e){if(!e)throw new Error("obj is required");var t=r(e);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:r,containsNumber:t,getGeom:o,getGeomType:function(e){if(!e)throw new Error("geojson is required");var r=o(e);if(r)return r.type}}},235385:(e,r,t)=>{var o=t(555962).featureCollection,n=t(610172),i=t(740551),a=t(420273),u=t(749655);function s(e,r,t,o,n,i){if(Math.sqrt((n-t)*(n-t)+(i-o)*(i-o))===Math.sqrt((e-t)*(e-t)+(r-o)*(r-o))+Math.sqrt((n-e)*(n-e)+(i-r)*(i-r)))return!0}e.exports=function(e){"FeatureCollection"!==e.type&&("Feature"!==e.type&&(e={type:"Feature",geometry:e,properties:{}}),e=o([e]));for(var r=n(e),t=!1,f=0;!t&&f<e.features.length;){var c,l=e.features[f].geometry,g=!1;if("Point"===l.type)r.geometry.coordinates[0]===l.coordinates[0]&&r.geometry.coordinates[1]===l.coordinates[1]&&(t=!0);else if("MultiPoint"===l.type){var w=!1;for(c=0;!w&&c<l.coordinates.length;)r.geometry.coordinates[0]===l.coordinates[c][0]&&r.geometry.coordinates[1]===l.coordinates[c][1]&&(t=!0,w=!0),c++}else if("LineString"===l.type)for(c=0;!g&&c<l.coordinates.length-1;)s(r.geometry.coordinates[0],r.geometry.coordinates[1],l.coordinates[c][0],l.coordinates[c][1],l.coordinates[c+1][0],l.coordinates[c+1][1])&&(g=!0,t=!0),c++;else if("MultiLineString"===l.type)for(var y=0;y<l.coordinates.length;){g=!1,c=0;for(var d=l.coordinates[y];!g&&c<d.length-1;)s(r.geometry.coordinates[0],r.geometry.coordinates[1],d[c][0],d[c][1],d[c+1][0],d[c+1][1])&&(g=!0,t=!0),c++;y++}else"Polygon"!==l.type&&"MultiPolygon"!==l.type||a(r,{type:"Feature",geometry:l,properties:{}})&&(t=!0);f++}if(t)return r;var h,m=o([]);for(f=0;f<e.features.length;f++)m.features=m.features.concat(u(e.features[f]).features);var p=1/0;for(f=0;f<m.features.length;f++){var v=i(r,m.features[f],"miles");v<p&&(p=v,h=m.features[f])}return h}},123742:(e,r,t)=>{var o=t(863245).coordEach;e.exports=function(e){var r=[1/0,1/0,-1/0,-1/0];return o(e,(function(e){r[0]>e[0]&&(r[0]=e[0]),r[1]>e[1]&&(r[1]=e[1]),r[2]<e[0]&&(r[2]=e[0]),r[3]<e[1]&&(r[3]=e[1])})),r}},610172:(e,r,t)=>{var o=t(123742),n=t(555962).point;e.exports=function(e,r){var t=o(e),i=(t[0]+t[2])/2,a=(t[1]+t[3])/2;return n([i,a],r)}},740551:(e,r,t)=>{var o=t(698200).getCoord,n=t(555962).radiansToDistance;e.exports=function(e,r,t){var i=Math.PI/180,a=o(e),u=o(r),s=i*(u[1]-a[1]),f=i*(u[0]-a[0]),c=i*a[1],l=i*u[1],g=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(f/2),2)*Math.cos(c)*Math.cos(l);return n(2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g)),t)}},749655:(e,r,t)=>{var o=t(863245),n=t(555962),i=n.point,a=o.coordEach,u=o.featureEach,s=n.featureCollection;e.exports=function(e){var r=[];return"FeatureCollection"===e.type?u(e,(function(e){a(e,(function(t){r.push(i(t,e.properties))}))})):a(e,(function(t){r.push(i(t,e.properties))})),s(r)}},555962:e=>{function r(e,r,t,o){if(void 0===e)throw new Error("geometry is required");if(r&&r.constructor!==Object)throw new Error("properties must be an Object");if(t&&4!==t.length)throw new Error("bbox must be an Array of 4 numbers");if(o&&-1===["string","number"].indexOf(typeof o))throw new Error("id must be a number or a string");var n={type:"Feature"};return o&&(n.id=o),t&&(n.bbox=t),n.properties=r||{},n.geometry=e,n}function t(e,t,o,n){if(!e)throw new Error("No coordinates passed");if(void 0===e.length)throw new Error("Coordinates must be an array");if(e.length<2)throw new Error("Coordinates must be at least 2 numbers long");if(!w(e[0])||!w(e[1]))throw new Error("Coordinates must contain numbers");return r({type:"Point",coordinates:e},t,o,n)}function o(e,t,o,n){if(!e)throw new Error("No coordinates passed");for(var i=0;i<e.length;i++){var a=e[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var u=0;u<a[a.length-1].length;u++){if(0===i&&0===u&&!w(a[0][0])||!w(a[0][1]))throw new Error("Coordinates must contain numbers");if(a[a.length-1][u]!==a[0][u])throw new Error("First and last Position are not equivalent.")}}return r({type:"Polygon",coordinates:e},t,o,n)}function n(e,t,o,n){if(!e)throw new Error("No coordinates passed");if(e.length<2)throw new Error("Coordinates must be an array of two or more positions");if(!w(e[0][1])||!w(e[0][1]))throw new Error("Coordinates must contain numbers");return r({type:"LineString",coordinates:e},t,o,n)}function i(e,t,o,n){if(!e)throw new Error("No coordinates passed");return r({type:"MultiLineString",coordinates:e},t,o,n)}function a(e,t,o,n){if(!e)throw new Error("No coordinates passed");return r({type:"MultiPoint",coordinates:e},t,o,n)}function u(e,t,o,n){if(!e)throw new Error("No coordinates passed");return r({type:"MultiPolygon",coordinates:e},t,o,n)}var s={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,centimeters:6373e5,centimetres:6373e5,kilometers:6373,kilometres:6373,feet:20908792.65},f={kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,centimetres:1e4,millimeter:1e6,acres:247105e-9,miles:386e-9,yards:1.195990046,feet:10.763910417,inches:1550.003100006};function c(e,r){if(null==e)throw new Error("radians is required");var t=s[r||"kilometers"];if(!t)throw new Error("units is invalid");return e*t}function l(e,r){if(null==e)throw new Error("distance is required");var t=s[r||"kilometers"];if(!t)throw new Error("units is invalid");return e/t}function g(e){if(null==e)throw new Error("radians is required");return e%(2*Math.PI)*180/Math.PI}function w(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)}e.exports={feature:r,geometry:function(e,r,s){if(!e)throw new Error("type is required");if(!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(s&&4!==s.length)throw new Error("bbox must be an Array of 4 numbers");var f;switch(e){case"Point":f=t(r).geometry;break;case"LineString":f=n(r).geometry;break;case"Polygon":f=o(r).geometry;break;case"MultiPoint":f=a(r).geometry;break;case"MultiLineString":f=i(r).geometry;break;case"MultiPolygon":f=u(r).geometry;break;default:throw new Error(e+" is invalid")}return s&&(f.bbox=s),f},featureCollection:function(e,r,t){if(!e)throw new Error("No features passed");if(!Array.isArray(e))throw new Error("features must be an Array");if(r&&4!==r.length)throw new Error("bbox must be an Array of 4 numbers");if(t&&-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string");var o={type:"FeatureCollection"};return t&&(o.id=t),r&&(o.bbox=r),o.features=e,o},geometryCollection:function(e,t,o,n){if(!e)throw new Error("geometries is required");if(!Array.isArray(e))throw new Error("geometries must be an Array");return r({type:"GeometryCollection",geometries:e},t,o,n)},point:t,multiPoint:a,lineString:n,multiLineString:i,polygon:o,multiPolygon:u,radiansToDistance:c,distanceToRadians:l,distanceToDegrees:function(e,r){return g(l(e,r))},radians2degrees:g,degrees2radians:function(e){if(null==e)throw new Error("degrees is required");return e%360*Math.PI/180},bearingToAngle:function(e){if(null==e)throw new Error("bearing is required");var r=e%360;return r<0&&(r+=360),r},convertDistance:function(e,r,t){if(null==e)throw new Error("distance is required");if(!(e>=0))throw new Error("distance must be a positive number");return c(l(e,r),t||"kilometers")},convertArea:function(e,r,t){if(null==e)throw new Error("area is required");if(!(e>=0))throw new Error("area must be a positive number");var o=f[r||"meters"];if(!o)throw new Error("invalid original units");var n=f[t||"kilometers"];if(!n)throw new Error("invalid final units");return e/o*n},round:function(e,r){if(null==e||isNaN(e))throw new Error("num is required");if(r&&!(r>=0))throw new Error("precision must be a positive number");var t=Math.pow(10,r||0);return Math.round(e*t)/t},isNumber:w}},698200:e=>{function r(e){if(!e)throw new Error("obj is required");var r;if(e.length?r=e:e.coordinates?r=e.coordinates:e.geometry&&e.geometry.coordinates&&(r=e.geometry.coordinates),r)return t(r),r;throw new Error("No valid coordinates")}function t(e){if(e.length>1&&"number"==typeof e[0]&&"number"==typeof e[1])return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}function o(e){if(!e)throw new Error("geojson is required");if(void 0!==e.geometry)return e.geometry;if(e.coordinates||e.geometries)return e;throw new Error("geojson must be a valid Feature or Geometry Object")}e.exports={geojsonType:function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)},collectionOf:function(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<e.features.length;o++){var n=e.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}},featureOf:function(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)},getCoord:function(e){if(!e)throw new Error("obj is required");var t=r(e);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:r,containsNumber:t,getGeom:o,getGeomType:function(e){if(!e)throw new Error("geojson is required");var r=o(e);if(r)return r.type}}},863245:(e,r,t)=>{"use strict";function o(e,r,t){if(null!==e){var n,i,a,u,s,f,c,l,g,w,y=0,d=0,h=e.type,m="FeatureCollection"===h,p="Feature"===h,v=m?e.features.length:1;for(n=0;n<v;n++)for(c=(w=!!(g=m?e.features[n].geometry:p?e.geometry:e)&&"GeometryCollection"===g.type)?g.geometries.length:1,i=0;i<c;i++){var E=0;if(null!==(f=w?g.geometries[i]:g)){l=f.coordinates;var b=f.type;switch(y=!t||"Polygon"!==b&&"MultiPolygon"!==b?0:1,b){case null:break;case"Point":r(l,d,n,E),d++,E++;break;case"LineString":case"MultiPoint":for(a=0;a<l.length;a++)r(l[a],d,n,E),d++,"MultiPoint"===b&&E++;"LineString"===b&&E++;break;case"Polygon":case"MultiLineString":for(a=0;a<l.length;a++){for(u=0;u<l[a].length-y;u++)r(l[a][u],d,n,E),d++;"MultiLineString"===b&&E++}"Polygon"===b&&E++;break;case"MultiPolygon":for(a=0;a<l.length;a++){for(u=0;u<l[a].length;u++)for(s=0;s<l[a][u].length-y;s++)r(l[a][u][s],d,n,E),d++;E++}break;case"GeometryCollection":for(a=0;a<f.geometries.length;a++)o(f.geometries[a],r,t);break;default:throw new Error("Unknown Geometry Type")}}}}}function n(e,r,t,n){var i=t;return o(e,(function(e,o,n,a){i=0===o&&void 0===t?e:r(i,e,o,n,a)}),n),i}function i(e,r){var t;switch(e.type){case"FeatureCollection":for(t=0;t<e.features.length;t++)r(e.features[t].properties,t);break;case"Feature":r(e.properties,0)}}function a(e,r,t){var o=t;return i(e,(function(e,n){o=0===n&&void 0===t?e:r(o,e,n)})),o}function u(e,r){if("Feature"===e.type)r(e,0);else if("FeatureCollection"===e.type)for(var t=0;t<e.features.length;t++)r(e.features[t],t)}function s(e,r,t){var o=t;return u(e,(function(e,n){o=0===n&&void 0===t?e:r(o,e,n)})),o}function f(e){var r=[];return o(e,(function(e){r.push(e)})),r}function c(e,r){var t,o,n,i,a,u,s,f,c=0,l="FeatureCollection"===e.type,g="Feature"===e.type,w=l?e.features.length:1;for(t=0;t<w;t++){for(u=l?e.features[t].geometry:g?e.geometry:e,f=l?e.features[t].properties:g?e.properties:{},a=(s=!!u&&"GeometryCollection"===u.type)?u.geometries.length:1,n=0;n<a;n++)if(null!==(i=s?u.geometries[n]:u))switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":r(i,c,f);break;case"GeometryCollection":for(o=0;o<i.geometries.length;o++)r(i.geometries[o],c,f);break;default:throw new Error("Unknown Geometry Type")}else r(null,c,f);c++}}function l(e,r,t){var o=t;return c(e,(function(e,n,i){o=0===n&&void 0===t?e:r(o,e,n,i)})),o}function g(e,r){c(e,(function(e,t,o){var n,i=null===e?null:e.type;switch(i){case null:case"Point":case"LineString":case"Polygon":return void r(h(e,o),t,0)}switch(i){case"MultiPoint":n="Point";break;case"MultiLineString":n="LineString";break;case"MultiPolygon":n="Polygon"}e.coordinates.forEach((function(e,i){r(h({type:n,coordinates:e},o),t,i)}))}))}function w(e,r,t){var o=t;return g(e,(function(e,n,i){o=0===n&&0===i&&void 0===t?e:r(o,e,n,i)})),o}function y(e,r){g(e,(function(e,t,o){var i=0;if(e.geometry){var a=e.geometry.type;"Point"!==a&&"MultiPoint"!==a&&n(e,(function(n,a){var u=m([n,a],e.properties);return r(u,t,o,i),i++,a}))}}))}function d(e,r,t){var o=t,n=!1;return y(e,(function(e,i,a,u){o=!1===n&&void 0===t?e:r(o,e,i,a,u),n=!0})),o}function h(e,r){if(void 0===e)throw new Error("No geometry passed");return{type:"Feature",properties:r||{},geometry:e}}function m(e,r){if(!e)throw new Error("No coordinates passed");if(e.length<2)throw new Error("Coordinates must be an array of two or more positions");return{type:"Feature",properties:r||{},geometry:{type:"LineString",coordinates:e}}}function p(e,r){if(!e)throw new Error("geojson is required");var t=e.geometry?e.geometry.type:e.type;if(!t)throw new Error("invalid geojson");if("FeatureCollection"===t)throw new Error("FeatureCollection is not supported");if("GeometryCollection"===t)throw new Error("GeometryCollection is not supported");var o=e.geometry?e.geometry.coordinates:e.coordinates;if(!o)throw new Error("geojson must contain coordinates");switch(t){case"LineString":return void r(o,0,0);case"Polygon":case"MultiLineString":for(var n=0,i=0;i<o.length;i++)"MultiLineString"===t&&(n=i),r(o[i],i,n);return;case"MultiPolygon":for(var a=0;a<o.length;a++)for(var u=0;u<o[a].length;u++)r(o[a][u],u,a);return;default:throw new Error(t+" geometry not supported")}}function v(e,r,t){var o=t;return p(e,(function(e,n,i){o=0===n&&void 0===t?e:r(o,e,n,i)})),o}t.r(r),t.d(r,{coordEach:()=>o,coordReduce:()=>n,propEach:()=>i,propReduce:()=>a,featureEach:()=>u,featureReduce:()=>s,coordAll:()=>f,geomEach:()=>c,geomReduce:()=>l,flattenEach:()=>g,flattenReduce:()=>w,segmentEach:()=>y,segmentReduce:()=>d,feature:()=>h,lineString:()=>m,lineEach:()=>p,lineReduce:()=>v})}}]);