(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[9502,2784],{29217:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(949179),n=i(66575),r=i(173381);const s=function(t){function e(e,i,o,n){t.call(this),this.extent=e,this.pixelRatio_=o,this.resolution=i,this.state=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.changed=function(){this.dispatchEvent(r.Z.CHANGE)},e.prototype.getExtent=function(){return this.extent},e.prototype.getImage=function(){return(0,o.O3)()},e.prototype.getPixelRatio=function(){return this.pixelRatio_},e.prototype.getResolution=function(){return this.resolution},e.prototype.getState=function(){return this.state},e.prototype.load=function(){(0,o.O3)()},e}(n.Z)},540188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},19473:(t,e,i)=>{"use strict";i.d(e,{T:()=>n,Z:()=>r});var o=function(t,e,i,o){this.minX=t,this.maxX=e,this.minY=i,this.maxY=o};function n(t,e,i,n,r){return void 0!==r?(r.minX=t,r.maxX=e,r.minY=i,r.maxY=n,r):new o(t,e,i,n)}o.prototype.contains=function(t){return this.containsXY(t[1],t[2])},o.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},o.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},o.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},o.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},o.prototype.getHeight=function(){return this.maxY-this.minY+1},o.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},o.prototype.getWidth=function(){return this.maxX-this.minX+1},o.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY};const r=o},859900:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4,ABORT:5}},286320:(t,e,i)=>{"use strict";function o(t){return Math.pow(t,3)}function n(t){return 1-o(1-t)}function r(t){return 3*t*t-2*t*t*t}function s(t){return t}i.d(e,{YQ:()=>o,Vv:()=>n,rd:()=>r,GE:()=>s})},804027:(t,e,i)=>{"use strict";function o(t,e,i,o){for(var n=t[e],r=t[e+1],s=0,u=e+o;u<i;u+=o){var a=t[u],c=t[u+1];s+=Math.sqrt((a-n)*(a-n)+(c-r)*(c-r)),n=a,r=c}return s}i.d(e,{W:()=>o})},878181:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={IMAGE:"image",HYBRID:"hybrid",VECTOR:"vector"}},435211:(t,e,i)=>{"use strict";i.d(e,{m:()=>o,j:()=>n});var o=.5,n=!0},450596:(t,e,i)=>{"use strict";function o(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]+2*e,i[1]=t[1]+2*e,i}function n(t){return t[0]>0&&t[1]>0}function r(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function s(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:e[0]=e[1]=t,e)}i.d(e,{f3:()=>o,py:()=>n,bA:()=>r,Pq:()=>s})},315565:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(898185),n=i(378288),r=function(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new o.default({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:n.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding};r.prototype.clone=function(){return new r({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0})},r.prototype.getOverflow=function(){return this.overflow_},r.prototype.getFont=function(){return this.font_},r.prototype.getMaxAngle=function(){return this.maxAngle_},r.prototype.getPlacement=function(){return this.placement_},r.prototype.getOffsetX=function(){return this.offsetX_},r.prototype.getOffsetY=function(){return this.offsetY_},r.prototype.getFill=function(){return this.fill_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getStroke=function(){return this.stroke_},r.prototype.getText=function(){return this.text_},r.prototype.getTextAlign=function(){return this.textAlign_},r.prototype.getTextBaseline=function(){return this.textBaseline_},r.prototype.getBackgroundFill=function(){return this.backgroundFill_},r.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},r.prototype.getPadding=function(){return this.padding_},r.prototype.setOverflow=function(t){this.overflow_=t},r.prototype.setFont=function(t){this.font_=t},r.prototype.setMaxAngle=function(t){this.maxAngle_=t},r.prototype.setOffsetX=function(t){this.offsetX_=t},r.prototype.setOffsetY=function(t){this.offsetY_=t},r.prototype.setPlacement=function(t){this.placement_=t},r.prototype.setFill=function(t){this.fill_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setStroke=function(t){this.stroke_=t},r.prototype.setText=function(t){this.text_=t},r.prototype.setTextAlign=function(t){this.textAlign_=t},r.prototype.setTextBaseline=function(t){this.textBaseline_=t},r.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},r.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},r.prototype.setPadding=function(t){this.padding_=t};const s=r},378288:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={POINT:"point",LINE:"line"}},810508:(t,e,i)=>{"use strict";i.d(e,{e:()=>o,S:()=>n});var o=42,n=256}}]);