(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[2682],{232062:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o=function(t){function e(e,n,o,i,r){t.call(this,e,n,r),this.originalEvent=o,this.pixel=n.getEventPixel(o),this.coordinate=n.getCoordinateFromPixel(this.pixel),this.dragging=void 0!==i&&i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.preventDefault=function(){t.prototype.preventDefault.call(this),this.originalEvent.preventDefault()},e.prototype.stopPropagation=function(){t.prototype.stopPropagation.call(this),this.originalEvent.stopPropagation()},e}(n(110255).Z)},30006:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(173381);const i={SINGLECLICK:"singleclick",CLICK:o.Z.CLICK,DBLCLICK:o.Z.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},486968:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o=function(t){function e(e,n,o,i,r){t.call(this,e,n,o.originalEvent,i,r),this.pointerEvent=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(n(232062).Z)},110255:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o=function(t){function e(e,n,o){t.call(this,e),this.map=n,this.frameState=void 0!==o?o:null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(n(9520).ZP)},690728:(t,e,n)=>{"use strict";function o(t,e){return t[0]+=e[0],t[1]+=e[1],t}function i(t,e){var n=e.getRadius(),o=e.getCenter(),i=o[0],r=o[1],s=t[0]-i,a=t[1]-r;0===s&&0===a&&(s=1);var u=Math.sqrt(s*s+a*a);return[i+n*s/u,r+n*a/u]}function r(t,e){var n,o,i=t[0],r=t[1],s=e[0],a=e[1],u=s[0],c=s[1],p=a[0],l=a[1],h=p-u,f=l-c,v=0===h&&0===f?0:(h*(i-u)+f*(r-c))/(h*h+f*f||0);return v<=0?(n=u,o=c):v>=1?(n=p,o=l):(n=u+v*h,o=c+v*f),[n,o]}function s(t,e){for(var n=!0,o=t.length-1;o>=0;--o)if(t[o]!=e[o]){n=!1;break}return n}function a(t,e){var n=Math.cos(e),o=Math.sin(e),i=t[0]*n-t[1]*o,r=t[1]*n+t[0]*o;return t[0]=i,t[1]=r,t}function u(t,e){return t[0]*=e,t[1]*=e,t}function c(t,e){var n=t[0]-e[0],o=t[1]-e[1];return n*n+o*o}function p(t,e){return Math.sqrt(c(t,e))}function l(t,e){return c(t,r(t,e))}n.d(e,{IH:()=>o,Ed:()=>i,oL:()=>r,fS:()=>s,U1:()=>a,bA:()=>u,bI:()=>c,TE:()=>p,Bs:()=>l})},286320:(t,e,n)=>{"use strict";function o(t){return Math.pow(t,3)}function i(t){return 1-o(1-t)}function r(t){return 3*t*t-2*t*t*t}function s(t){return t}n.d(e,{YQ:()=>o,Vv:()=>i,rd:()=>r,GE:()=>s})},436403:(t,e,n)=>{"use strict";n.d(e,{Ko:()=>a,aj:()=>u,T_:()=>c,Bx:()=>p,v8:()=>l,Fi:()=>h,MJ:()=>f,Kf:()=>v,rM:()=>d,QC:()=>g,vY:()=>y,TN:()=>_,QL:()=>E,Xp:()=>m});var o=n(30006),i=n(438906),r=n(864011),s=n(591358),a=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},u=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},c=function(t){return t.target.getTargetElement()===document.activeElement},p=r.uX,l=function(t){var e=t.originalEvent;return 0==e.button&&!(s.G$&&s.tK&&e.ctrlKey)},h=r.Dv,f=function(t){return"pointermove"==t.type},v=function(t){return t.type==o.Z.SINGLECLICK},d=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},g=function(t){var e=t.originalEvent;return!e.altKey&&(s.tK?e.metaKey:e.ctrlKey)&&!e.shiftKey},y=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},_=function(t){var e=t.originalEvent.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e},E=function(t){var e=t.pointerEvent;return(0,i.h)(void 0!==e,56),"mouse"==e.pointerType},m=function(t){var e=t.pointerEvent;return(0,i.h)(void 0!==e,56),e.isPrimary&&0===e.button}},804027:(t,e,n)=>{"use strict";function o(t,e,n,o){for(var i=t[e],r=t[e+1],s=0,a=e+o;a<n;a+=o){var u=t[a],c=t[a+1];s+=Math.sqrt((u-i)*(u-i)+(c-r)*(c-r)),i=u,r=c}return s}n.d(e,{W:()=>o})},718369:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(30006),i=n(247588);function r(t){var e=!1;if(t.type==o.Z.DBLCLICK){var n=t.originalEvent,r=t.map,s=t.coordinate,a=n.shiftKey?-this.delta_:this.delta_,u=r.getView();(0,i.FW)(u,a,s,this.duration_),t.preventDefault(),e=!0}return!e}const s=function(t){function e(e){t.call(this,{handleEvent:r});var n=e||{};this.delta_=n.delta?n.delta:1,this.duration_=void 0!==n.duration?n.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(i.ZP)},247588:(t,e,n)=>{"use strict";n.d(e,{Cv:()=>a,U1:()=>u,dl:()=>c,sP:()=>p,FW:()=>l,DQ:()=>h,ZP:()=>f});var o=n(558493),i=n(286320),r=n(173604),s=n(921882);function a(t,e,n){var o=t.getCenter();if(o){var r=t.constrainCenter([o[0]+e[0],o[1]+e[1]]);n?t.animate({duration:n,easing:i.GE,center:r}):t.setCenter(r)}}function u(t,e,n,o){e=t.constrainRotation(e,0),c(t,e,n,o)}function c(t,e,n,o){if(void 0!==e){var r=t.getRotation(),s=t.getCenter();void 0!==r&&s&&o>0?t.animate({rotation:e,anchor:n,duration:o,easing:i.Vv}):t.rotate(e,n)}}function p(t,e,n,o,i){e=t.constrainResolution(e,0,i),h(t,e,n,o)}function l(t,e,n,o){var i=t.getResolution(),r=t.constrainResolution(i,e,0);if(void 0!==r){var a=t.getResolutions();r=(0,s.uZ)(r,t.getMinResolution()||a[a.length-1],t.getMaxResolution()||a[0])}if(n&&void 0!==r&&r!==i){var u=t.getCenter(),c=t.calculateCenterZoom(r,n);c=t.constrainCenter(c),n=[(r*u[0]-i*c[0])/(r-i),(r*u[1]-i*c[1])/(r-i)]}h(t,r,n,o)}function h(t,e,n,o){if(e){var r=t.getResolution(),s=t.getCenter();if(void 0!==r&&s&&e!==r&&o)t.animate({resolution:e,anchor:n,duration:o,easing:i.Vv});else{if(n){var a=t.calculateCenterZoom(e,n);t.setCenter(a)}t.setResolution(e)}}}const f=function(t){function e(e){t.call(this),e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getActive=function(){return this.get(r.Z.ACTIVE)},e.prototype.getMap=function(){return this.map_},e.prototype.handleEvent=function(t){return!0},e.prototype.setActive=function(t){this.set(r.Z.ACTIVE,t)},e.prototype.setMap=function(t){this.map_=t},e}(o.ZP)},938024:(t,e,n)=>{"use strict";n.d(e,{S:()=>s,Z:()=>a});var o=n(30006),i=n(247588),r=n(913580);function s(t){for(var e=t.length,n=0,o=0,i=0;i<e;i++)n+=t[i].clientX,o+=t[i].clientY;return[n/e,o/e]}const a=function(t){function e(e){var n=e||{};t.call(this,n),n.handleDownEvent&&(this.handleDownEvent=n.handleDownEvent),n.handleDragEvent&&(this.handleDragEvent=n.handleDragEvent),n.handleMoveEvent&&(this.handleMoveEvent=n.handleMoveEvent),n.handleUpEvent&&(this.handleUpEvent=n.handleUpEvent),n.stopDown&&(this.stopDown=n.stopDown),this.handlingDownUpSequence=!1,this.trackedPointers_={},this.targetPointers=[]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDownEvent=function(t){return!1},e.prototype.handleDragEvent=function(t){},e.prototype.handleEvent=function(t){if(!t.pointerEvent)return!0;var e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==o.Z.POINTERDRAG)this.handleDragEvent(t);else if(t.type==o.Z.POINTERUP){var n=this.handleUpEvent(t);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(t.type==o.Z.POINTERDOWN){var i=this.handleDownEvent(t);i&&t.preventDefault(),this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==o.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e},e.prototype.handleMoveEvent=function(t){},e.prototype.handleUpEvent=function(t){return!1},e.prototype.stopDown=function(t){return t},e.prototype.updateTrackedPointers_=function(t){if(function(t){var e=t.type;return e===o.Z.POINTERDOWN||e===o.Z.POINTERDRAG||e===o.Z.POINTERUP}(t)){var e=t.pointerEvent,n=e.pointerId.toString();t.type==o.Z.POINTERUP?delete this.trackedPointers_[n]:(t.type==o.Z.POINTERDOWN||n in this.trackedPointers_)&&(this.trackedPointers_[n]=e),this.targetPointers=(0,r.KX)(this.trackedPointers_)}},e}(i.ZP)},173604:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o={ACTIVE:"active"}},634681:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=function(t,e){this.dispatcher=t,this.mapping_=e};o.prototype.getEvents=function(){return Object.keys(this.mapping_)},o.prototype.getHandlerForEvent=function(t){return this.mapping_[t]};const i=o},468338:(t,e,n)=>{"use strict";n.d(e,{yA:()=>i,T2:()=>r,R:()=>l,ZP:()=>h});var o=n(634681),i=1,r="mouse";function s(t){if(!this.isEventSimulatedFromTouch_(t)){i.toString()in this.pointerMap&&this.cancel(t);var e=l(t,this.dispatcher);this.pointerMap[i.toString()]=t,this.dispatcher.down(e,t)}}function a(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.move(e,t)}}function u(t){if(!this.isEventSimulatedFromTouch_(t)){var e=this.pointerMap[i.toString()];if(e&&e.button===t.button){var n=l(t,this.dispatcher);this.dispatcher.up(n,t),this.cleanupMouse()}}}function c(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.enterOver(e,t)}}function p(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.leaveOut(e,t)}}function l(t,e){var n=e.cloneEvent(t,t),o=n.preventDefault;return n.preventDefault=function(){t.preventDefault(),o()},n.pointerId=i,n.isPrimary=!0,n.pointerType=r,n}const h=function(t){function e(e){var n={mousedown:s,mousemove:a,mouseup:u,mouseover:c,mouseout:p};t.call(this,e,n),this.pointerMap=e.pointerMap,this.lastTouches=[]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isEventSimulatedFromTouch_=function(t){for(var e=this.lastTouches,n=t.clientX,o=t.clientY,i=0,r=e.length,s=void 0;i<r&&(s=e[i]);i++){var a=Math.abs(n-s[0]),u=Math.abs(o-s[1]);if(a<=25&&u<=25)return!0}return!1},e.prototype.cancel=function(t){var e=l(t,this.dispatcher);this.dispatcher.cancel(e,t),this.cleanupMouse()},e.prototype.cleanupMouse=function(){delete this.pointerMap[i.toString()]},e}(o.Z)},315565:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var o=n(898185),i=n(378288),r=function(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new o.default({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:i.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding};r.prototype.clone=function(){return new r({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0})},r.prototype.getOverflow=function(){return this.overflow_},r.prototype.getFont=function(){return this.font_},r.prototype.getMaxAngle=function(){return this.maxAngle_},r.prototype.getPlacement=function(){return this.placement_},r.prototype.getOffsetX=function(){return this.offsetX_},r.prototype.getOffsetY=function(){return this.offsetY_},r.prototype.getFill=function(){return this.fill_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getStroke=function(){return this.stroke_},r.prototype.getText=function(){return this.text_},r.prototype.getTextAlign=function(){return this.textAlign_},r.prototype.getTextBaseline=function(){return this.textBaseline_},r.prototype.getBackgroundFill=function(){return this.backgroundFill_},r.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},r.prototype.getPadding=function(){return this.padding_},r.prototype.setOverflow=function(t){this.overflow_=t},r.prototype.setFont=function(t){this.font_=t},r.prototype.setMaxAngle=function(t){this.maxAngle_=t},r.prototype.setOffsetX=function(t){this.offsetX_=t},r.prototype.setOffsetY=function(t){this.offsetY_=t},r.prototype.setPlacement=function(t){this.placement_=t},r.prototype.setFill=function(t){this.fill_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setStroke=function(t){this.stroke_=t},r.prototype.setText=function(t){this.text_=t},r.prototype.setTextAlign=function(t){this.textAlign_=t},r.prototype.setTextBaseline=function(t){this.textBaseline_=t},r.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},r.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},r.prototype.setPadding=function(t){this.padding_=t};const s=r},378288:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o={POINT:"point",LINE:"line"}}}]);