(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[221],{940711:(e,t,a)=>{"use strict";a.d(t,{b:()=>c});var s=a(727418),r=a.n(s);const n=e=>null===e?[]:e.map((e=>({properties:{...e},id:e.osm_id,type:"Feature",bbox:e.boundingbox.map((e=>parseFloat(e))).reduce(((e,t,a)=>(e[(e=>{switch(e){case 0:return 1;case 1:return 3;case 2:return 0;case 3:return 2;default:return-1}})(a)]=t,e)),[]),geometry:e.geojson||{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}})));var o=a(348660),l=a(487758);const i=e=>{let{searchText:t,staticFilter:a,blacklist:s,item:r,queriableAttributes:n,predicate:l}=e;const i=(0,o.generateTemplateString)(a||"")(r);let p,u=t.split(" ").filter((e=>e)).filter((e=>s.indexOf(e.toLowerCase())<0));return 0===u.length&&(u=t?[t]:[]),u.length>0&&(p="(".concat(u.map((e=>n.map((t=>`${t} ${l} '%${e.replace("'","''")}%'`)).join(" OR "))).join(") AND (")).concat(")")),p=p?p.concat(i):i||null,p};let p={nominatim:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{returnFullData:!1};return a(61427).Z.geocode(e,t).then((e=>t.returnFullData?e:n(e.data)))},wfs:(e,t)=>{let{url:a,typeName:s,queriableAttributes:n=[],outputFormat:o="application/json",predicate:p="ILIKE",staticFilter:u="",blacklist:c=[],item:m,fromTextToFilter:g=i,returnFullData:d=!1,...h}=t;const w=g({searchText:e,staticFilter:u,blacklist:c,item:m,queriableAttributes:n,predicate:p});return l.DH(a,r()({maxFeatures:10,typeName:s,outputFormat:o,cql_filter:w},h)).then((e=>d?e:e.features))}};const u={setService:(e,t)=>{p[e]=t},getService:e=>p[e]?p[e]:null},c={Services:p,Utils:u}},208232:(e,t,a)=>{"use strict";a.d(t,{Q:()=>c});var s=a(701469),r=a.n(s),n=a(124852),o=a.n(n),l=a(867076),i=a(828878),p=a(727437);(0,l.setObservableConfig)(i.Z);const u=(0,l.mapPropsStreamWithConfig)(i.Z)((e=>e.take(1).switchMap((t=>t.autocompleteStreamFactory(e))).combineLatest(e,((e,t)=>({data:r()(e&&e.fetchedData&&e.fetchedData.values)?e.fetchedData.values.map((e=>({label:e,value:e}))):[],valuesCount:e&&e.fetchedData&&e.fetchedData.size,currentPage:t&&t.currentPage,maxFeatures:t&&t.maxFeatures,select:t&&t.select,focus:t&&t.focus,loadNextPage:t&&t.loadNextPage,loadPrevPage:t&&t.loadPrevPage,toggle:t&&t.toggle,change:t.change,open:t.open,selected:t&&t.selected,value:t.value,busy:e.busy,dropUp:t.dropUp,attribute:t.column&&t.column.key,changeAttribute:t.changeAttribute})))))((e=>{let{open:t,toggle:a,select:s,focus:r,change:n,value:l,valuesCount:i,loadNextPage:u,loadPrevPage:c,maxFeatures:m,currentPage:g,busy:d,data:h,loading:w=!1,dropUp:f=!1,attribute:b,changeAttribute:v}=e;const y=Math.ceil(i/m);return o().createElement(p.Z,{pagination:{firstPage:1===g,lastPage:g===y,paginated:!0,loadPrevPage:c,loadNextPage:u},busy:d,dropUp:f,data:h,attribute:b,open:t,onFocus:r,onToggle:a,onChange:n,onSelect:s,onChangeAttribute:v,selectedValue:l,loading:w})})),c=(0,l.compose)((0,l.withStateHandlers)((e=>({delayDebounce:0,performFetch:!1,open:!1,openOnFocus:e.openOnFocus,currentPage:1,maxFeatures:5,url:e.url,typeName:e.typeName,value:e.value,attribute:e.column&&e.column.key,autocompleteStreamFactory:e.autocompleteStreamFactory,onChange:e.onChange})),{select:e=>()=>({...e,selected:!0}),change:e=>t=>{if(e.selected&&e.changingPage)return{...e,delayDebounce:e.selected?0:500,selected:!1,changingPage:!1,performFetch:!(e.selected&&!e.changingPage),value:e.value,currentPage:e.changingPage?e.currentPage:1};const a="string"==typeof t?t:t.value;return e.onChange&&e.onChange(a),{...e,delayDebounce:e.selected?0:500,selected:!1,changingPage:!1,performFetch:!(e.selected&&!e.changingPage),value:a,currentPage:e.changingPage?e.currentPage:1}},focus:e=>t=>t&&0===t.length&&""===e.value?{...e,delayDebounce:0,currentPage:1,performFetch:!0,isToggled:!1,...e.openOnFocus?{open:!0}:{}}:e,toggle:e=>()=>({...e,open:!!e.changingPage||!e.open}),loadNextPage:e=>()=>({...e,currentPage:e.currentPage+1,performFetch:!0,changingPage:!0,delayDebounce:0,value:e.value}),loadPrevPage:e=>()=>({...e,currentPage:e.currentPage-1,performFetch:!0,changingPage:!0,delayDebounce:0,value:e.value}),changeAttribute:e=>t=>({...e,attribute:t})}))(u)},317723:(e,t,a)=>{"use strict";a.d(t,{Z:()=>N});var s=a(124852),r=a.n(s),n=a(45697),o=a.n(n),l=a(630294),i=a(147814),p=a(281763),u=a.n(p),c=a(414293),m=a.n(c),g=a(509886),d=a.n(g),h=a(200020),w=a(727418),f=a.n(w),b=a(804504),v=a(556382),y=a(208232),P=a(234228),x=a(209756),C=a(455877),F=a.n(C);function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}d()();class I extends r().Component{constructor(){var e;super(...arguments),e=this,D(this,"renderFieldByClassification",((e,t,a,s)=>{let n;if(m()(e.unique))n=m()(e.min)?r().createElement(r().Fragment,null,r().createElement(l.FormControl,{value:e.label,type:"text",onChange:e=>this.updateRaster(t,e.target.value)}),r().createElement(h.NumberPicker,{format:"- ###.###",value:e.quantity,onChange:e=>this.updateRaster(t,e,"number")})):r().createElement(r().Fragment,null,r().createElement(h.NumberPicker,{format:"- ###.###",value:e.min,onChange:e=>this.updateMin(t,e)}),r().createElement(h.NumberPicker,{format:"- ###.###",value:e.max,precision:3,onChange:e=>this.updateMax(t,e)}));else if(u()(e.unique))n=r().createElement(h.NumberPicker,{format:"- ###.###",value:e.unique,onChange:e=>this.updateUnique(t,e,"number")});else if(a&&s){const{dropUpAutoComplete:a,classificationAttribute:o,layer:l}=s;n=r().createElement(y.Q,{dropUp:a,openOnFocus:!1,autocompleteEnabled:!0,column:{key:o},onChange:e=>this.updateUnique(t,e),dataType:"string",typeName:l.name,url:P.ZP.getParsedUrl(l.url,{outputFormat:"json"}),value:e.unique,filter:"contains",autocompleteStreamFactory:v.Vd})}else n=r().createElement(l.FormControl,{value:e.unique,type:"text",onChange:e=>this.updateUnique(t,e.target.value)});return n})),D(this,"renderClasses",(()=>this.props.classification.map(((e,t,a)=>r().createElement(l.FormGroup,{key:e.id??t},r().createElement(i.Z,{key:e.color,color:e.color,disableAlpha:!0,format:"hex",onChangeColor:e=>this.updateColor(t,e)}),this.renderFieldByClassification(e,t,this.props.uniqueValuesClasses,this.props.autoCompleteOptions),this.props.customLabels&&r().createElement(l.FormControl,{value:e.title,type:"text",onChange:e=>this.updateCustomLabel(t,e.target.value)}),r().createElement(l.DropdownButton,{style:{flex:0},className:"square-button-md no-border add-rule",noCaret:!0,pullRight:!0,title:r().createElement(l.Glyphicon,{glyph:"option-vertical"}),dropup:this.props.dropUpMenu},[{labelId:"styleeditor.addRuleBefore",glyph:"add-row-before",value:"before"},{labelId:"styleeditor.addRuleAfter",glyph:"add-row-after",value:"after"},...this.props.allowEmpty||t?[{labelId:"styleeditor.remove",glyph:"trash",value:"remove"}]:[]].map((e=>r().createElement(l.MenuItem,{key:e.value,onClick:()=>this.updateClassification(t,e.value,a,this.props.customLabels)},r().createElement(r().Fragment,null,r().createElement(l.Glyphicon,{glyph:e.glyph}),r().createElement(b.Z,{msgId:e.labelId}))))))))))),D(this,"updateColor",((e,t)=>{if(t){const a=this.props.classification.map(((a,s)=>s===e?f()({},a,{color:t}):a));this.props.onUpdateClasses(a,"color")}})),D(this,"updateUnique",(function(t,a){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";const r=e.props.classification.map(((e,r)=>r===t?f()({},e,{unique:m()(a)?"number"===s?0:"":a}):e));e.props.onUpdateClasses(r,"interval")})),D(this,"updateRaster",(function(t,a){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";const r="number"===s?"quantity":"label",n=e.props.classification.map(((e,s)=>s===t?f()({},e,{[r]:a}):e));e.props.onUpdateClasses(n,"interval")})),D(this,"updateMin",((e,t)=>{if(!isNaN(t)){const a=this.props.classification.map(((a,s)=>s===e?f()({},a,{min:t}):a));this.props.onUpdateClasses(a,"interval")}})),D(this,"updateMax",((e,t)=>{if(!isNaN(t)){const a=this.props.classification.map(((a,s)=>s===e?f()({},a,{max:t}):s===e+1?f()({},a,{min:t}):a));this.props.onUpdateClasses(a,"interval")}})),D(this,"updateClassification",((e,t,a,s)=>{let r,n,o=0,l=[...this.props.classification];const i=l[e],p=a.map((e=>e.color));if("before"===t){const t=0===e;r=t?0:e,n={min:t?m()(i.min)?i.min:0:i.min,max:i.min}}else"after"===t?(r=e===l.length-1?l.length:e+1,n={min:i.max,max:i.max}):(r=e,o=1);let c=[r,o];if("remove"!==t){const e=this.props.usePresetColors?(0,x.TM)(p):"#ffffff";let t;if(m()(i.unique))t=m()(i.quantity)?{...i,id:F().v1(),...n,color:e,title:s?"":` >= ${n.min} AND <${n.max}`}:{...i,id:F().v1(),color:e,label:"0",quantity:0};else{const a=u()(i.unique)?0:"";t={...i,id:F().v1(),color:e,title:a,unique:a}}c=c.concat(t)}l.splice(...c),this.props.onUpdateClasses(l,"interval")})),D(this,"updateCustomLabel",((e,t)=>{if(void 0!==t){const a=this.props.classification.map(((a,s)=>s===e?f()({},a,{title:t}):a));this.props.onUpdateClasses(a,"title")}}))}render(){return r().createElement("div",{className:"thema-classes-editor "+this.props.className},this.renderClasses())}}D(I,"propTypes",{classification:o().array,onUpdateClasses:o().func,className:o().string,allowEmpty:o().bool,customLabels:o().bool,uniqueValuesClasses:o().bool,autoCompleteOptions:o().object,dropUpMenu:o().bool,usePresetColors:o().bool}),D(I,"defaultProps",{classification:[],onUpdateClasses:()=>{},className:"",allowEmpty:!0,customLabels:!1,uniqueValuesClasses:!1,dropUpMenu:!1});const N=I},894449:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var s=a(124852),r=a.n(s),n=a(45697),o=a.n(n),l=a(209756),i=a(743129),p=a(313311),u=a.n(p),c=a(701469),m=a.n(c),g=a(804504);const d=e=>{let{ramp:t,name:a,label:s}=e;const n=1/t.length;let o="linear-gradient(to right";return o="global.colors.custom"===a&&m()(t[0])?(t[0]||[]).reduce(((e,a,s)=>{const r=100/t[0].length;return`${e}, ${a} ${Math.ceil(r*s)}%, ${a} ${Math.ceil(r*(s+1))}%`}),o):(t||[]).reduce(((e,a,s)=>`${e}, ${a} ${s/t.length*100}%, ${a} ${100*(s/t.length+n)}%`),o),r().createElement("div",{style:{backgroundImage:`${o})`,width:"100%",display:"inline-block",verticalAlign:"middle",padding:"0 2px"}},r().createElement("span",{style:{color:"#000000",backgroundColor:"rgba(255, 255, 255, 0.75)",padding:"0 4px"}},r().createElement(g.Z,{msgId:s||a,msgParams:{number:t.length}})))};function h(e){let{value:t,samples:a,onChange:s,items:n,rampFunction:o,disabled:p}=e;const c=n.map((e=>{let{options:t={},...s}=e;return{...s,options:t,ramp:s.ramp?[s.ramp]:o?o(s,t):((0,l.qH)(t.base,t.range,a+1,t.options)||["#AAA"]).splice(1)}})),m=u()(c,(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e===t||e.name===(t&&t.name)}));return r().createElement(i.ZP,{valueKey:"name",className:"color-ramp-selector",clearable:!1,value:m,options:c,disabled:p,valueRenderer:d,optionRenderer:d,onChange:e=>{e&&s(e)}})}h.propTypes={value:o().oneOfType([o().string,o().object]),samples:o().number,onChange:o().func,items:o().array,rampFunction:o().func,disabled:o().bool},h.defaultProps={samples:5,onChange:()=>{},items:[{name:"global.colors.blue",schema:"sequencial",options:{base:190,range:20}},{name:"global.colors.red",schema:"sequencial",options:{base:10,range:4}},{name:"global.colors.green",schema:"sequencial",options:{base:120,range:4}},{name:"global.colors.brown",schema:"sequencial",options:{base:30,range:4,s:1,v:.5}},{name:"global.colors.purple",schema:"sequencial",options:{base:300,range:4}},{name:"global.colors.random",schema:"qualitative",options:{base:190,range:340,options:{base:10,range:360,s:.67,v:.67}}}],disabled:!1};const w=h},556382:(e,t,a)=>{"use strict";a.d(t,{Vd:()=>y,Vj:()=>P});var s=a(472500),r=a.n(s),n=a(666654),o=a.n(n),l=a(91175),i=a.n(l),p=a(414293),u=a.n(p),c=a(727418),m=a.n(c),g=a(49977),d=a.n(g),h=a(940711),w=a(470509),f=a.n(w),b=a(69090);const v=e=>{let{searchText:t="",queriableAttributes:a=[],predicate:s="ILIKE"}=e;const r=i()(a);let n=`strToLowerCase(${r}) ${s} '%${t.toLowerCase()}%'`;return u()(r)?"":"("+n+")"},y=e=>e.distinctUntilChanged((function(e){let{value:t,currentPage:a,attribute:s}=e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!(r.value!==t||r.currentPage!==a||r.attribute!==s)})).throttle((e=>d().Observable.timer(e.delayDebounce||0))).merge(e.debounce((e=>d().Observable.timer(e.delayDebounce||0)))).distinctUntilChanged().switchMap((e=>{if(e.performFetch){const t=(0,b.getWpsPayload)({attribute:e.attribute,layerName:e.typeName,maxFeatures:e.maxFeatures,startIndex:(e.currentPage-1)*e.maxFeatures,value:e.value});return d().Observable.fromPromise(f().post(e.url,t,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}}).then((e=>({fetchedData:e.data,busy:!1})))).catch((()=>d().Observable.of({fetchedData:{values:[],size:0},busy:!1}))).startWith({busy:!0})}return d().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({}),P=e=>d().Observable.merge(e.distinctUntilChanged((function(){let{value:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{value:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e===t})).debounce((e=>d().Observable.timer(e.delayDebounce||0))),e.distinctUntilChanged((function(){let{filterProps:e,currentPage:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{filterProps:a,currentPage:s}=arguments.length>1?arguments[1]:void 0;return e===a&&t===s}))).switchMap((e=>{if(e.performFetch){let t=r().parse(e.url,!0),a="";(o()(t.pathname,"wfs")||o()(t.pathname,"wms")||o()(t.pathname,"ows")||o()(t.pathname,"wps"))&&(a=t.pathname.replace(/(wms|ows|wps|wfs)$/,"wfs")),t.query&&t.query.service&&delete t.query.service;const s=r().format(m()({},t,{search:null,pathname:a}));let n=m()({},{url:s,typeName:e.filterProps&&e.filterProps.typeName||"",predicate:e.filterProps&&e.filterProps.predicate||"ILIKE",blacklist:e.filterProps&&e.filterProps.blacklist||[],maxFeatures:e.filterProps&&e.filterProps.maxFeatures||3,queriableAttributes:e.filterProps&&e.filterProps.queriableAttributes||[],returnFullData:!0,startIndex:((e.currentPage||1)-1)*(e.filterProps&&e.filterProps.maxFeatures||3),outputFormat:"application/json",staticFilter:"",fromTextToFilter:v,item:{},timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"},srsName:e.filterProps&&e.filterProps.srsName||"EPSG:4326",...t.query});return d().Observable.fromPromise(h.b.Utils.getService("wfs")(e.value,n).then((t=>({fetchedData:{values:t.features.map((e=>e.properties)),size:t.totalFeatures,features:t.features,crs:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},busy:!1})))).catch((()=>d().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1}))).startWith({busy:!0})}return d().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({})},69090:(e,t,a)=>{const{isFilterValid:s,toOGCFilterParts:r}=a(191332),n=a(883796),{and:o}=n({});e.exports={getWpsPayload:e=>{let{layerName:t,layerFilter:a,attribute:n,maxFeatures:l,startIndex:i,value:p}=e;const u=p?'<ogc:PropertyIsLike matchCase="false" wildCard="*" singleChar="." escapeChar="!">   <ogc:PropertyName>'+n+"</ogc:PropertyName>   <ogc:Literal>*"+p+"*</ogc:Literal></ogc:PropertyIsLike>":"",c=a&&!a.disabled&&s(a)?r(a,"1.1.0","ogc"):[];return'<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">  <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier>  <wps:DataInputs>    <wps:Input>      <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier>      <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title>      <wps:Data />      <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST">        <wps:Body>         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">           <wfs:Query typeName="'+t+'">'+(u.length>0||c.length>0?'<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">'+o(...c,u)+"</ogc:Filter>":"")+'             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">               <ogc:SortProperty>                 <ogc:PropertyName>'+n+'</ogc:PropertyName>               </ogc:SortProperty>             </ogc:SortBy>           </wfs:Query>         </wfs:GetFeature>       </wps:Body>     </wps:Reference>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>     <wps:Data>       <wps:LiteralData>'+n+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>     <wps:Data>       <wps:LiteralData>'+l+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>     <wps:Data>       <wps:LiteralData>'+i+'</wps:LiteralData>     </wps:Data>   </wps:Input> </wps:DataInputs> <wps:ResponseForm>   <wps:RawDataOutput mimeType="application/json">     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>   </wps:RawDataOutput> </wps:ResponseForm></wps:Execute>'}}}}]);