(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7127],{517127:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var i=t(253772),s=t.n(i);const o=class{constructor(){let{drawIcons:e,getImageIdFromSymbolizer:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._parser=new(s()),this._drawIcons=e||(()=>Promise.resolve(null)),this._getImageIdFromSymbolizer=r||(e=>e.symbolizerId)}readStyle(e){return e?this._parser.readStyle(e):Promise.reject("No style provided")}writeStyle(e){var r=this;return e?this._drawIcons(e).then((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const i={...e,rules:((null==e?void 0:e.rules)||[]).map((e=>({...e,symbolizers:((null==e?void 0:e.symbolizers)||[]).map((e=>{if("Icon"===e.kind){const{image:i,width:s,height:o}=t.find((t=>{let{id:i}=t;return i===r._getImageIdFromSymbolizer(e)}))||{};if(i&&s&&o){const r=s>o?s:o,t=e.size/r;return{...e,size:t}}}return"Fill"===e.kind||"Mark"===e.kind?{...e,opacity:e.fillOpacity}:e}))})))};return r._parser.writeStyle(i)})):Promise.reject("No style provided")}}}}]);