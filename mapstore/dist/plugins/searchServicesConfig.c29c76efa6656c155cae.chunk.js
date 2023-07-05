(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7108],{102187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(45697),s=r.n(n),o=r(124852),a=r.n(o),i=r(294184),l=r.n(i);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class h extends a().Component{constructor(){super(...arguments),p(this,"state",{is:"active"}),p(this,"onClick",(()=>this.props.onClick?this.props.onClick.bind(this):()=>{})),p(this,"onDisable",(()=>this.props.onDisable?this.props.onDisable.bind(this):()=>{})),p(this,"onConfirm",(()=>this.props.onConfirm?this.props.onConfirm():this.props.confirming&&this.props.confirming.onClick?this.props.confirming.onClick():()=>{})),p(this,"isDisabled",(()=>"disabled"===this.state.is)),p(this,"isConfirming",(()=>"confirming"===this.state.is)),p(this,"isActive",(()=>!this.isConfirming()&&!this.isDisabled())),p(this,"handleClick",(()=>this.isConfirming()&&this.props.disableAfterConfirmed?(this.onConfirm(),this.onDisable(),void this.setState({is:"disabled"})):this.isConfirming()?(this.onConfirm(),void this.setState({is:"active"})):(this.onClick(),void this.setState({is:"confirming"})))),p(this,"handleBlur",(()=>{this.setState({is:"active"})}))}render(){const{children:e,buttonProps:t,confirming:r,disabled:n}=this.props;let{text:s,style:o,className:i="btn btn-sm btn-danger"}=this.props;const p=this.isDisabled(),h=this.isConfirming();return p&&(s=n&&n.text||"Loading...",i=n&&n.className||"btn btn-sm btn-secondary",o=n&&n.style||{}),h&&(s=r&&r.text||"Confirm?",i=r&&r.className||"btn btn-sm btn-warning",o=r&&r.style||{}),a().createElement("button",c({className:l()("confirm-button",i),style:o,onClick:this.handleClick,onBlur:this.handleBlur,disabled:p},t),e,e?" ":"",s)}}p(h,"propTypes",{disableAfterConfirmed:s().bool,resetOnBlur:s().bool,onConfirm:s().func,onDisable:s().func,onClick:s().func,text:s().oneOfType([s().string,s().node]),className:s().string,style:s().object,confirming:s().shape({text:s().oneOfType([s().string,s().node]),className:s().string,style:s().object,onClick:s().func}),disabled:s().shape({text:s().oneOfType([s().string,s().node]),className:s().string,style:s().object}),children:s().node,buttonProps:s().object}),p(h,"defaultProps",{resetOnBlur:!0});const m=h},151500:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var n=r(124852),s=r.n(n),o=r(171703),a=r(22222),i=r(630294),l=r(102187),c=r(590504),p=r(466737),h=r(488400),m=r(227361),u=r.n(m),d=r(618446),g=r.n(d),v=r(687753);const b="SET_SEARCH_CONFIG_PROP",f="RESET_SEARCH_CONFIG",y="UPDATE_SERVICE";var C=r(804504),E=r(45697),x=r.n(E);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class _ extends s().Component{constructor(){super(...arguments),P(this,"getOptions",(()=>0===this.props.services.length?s().createElement("div",{className:"search-service-name"},s().createElement(C.Z,{msgId:"search.serviceslistempty"})):this.props.services.map(((e,t)=>s().createElement("div",{className:"search-service-item",key:t},s().createElement("span",{className:"search-service-name"},e.name),s().createElement(l.Z,{className:"list-remove-btn",onConfirm:()=>this.remove(t),text:s().createElement(i.Glyphicon,{glyph:"remove-circle"}),confirming:{className:"text-warning list-remove-btn",text:s().createElement(C.Z,{msgId:"search.confirmremove"})}}),s().createElement(i.Glyphicon,{onClick:()=>this.edit(e,t),glyph:"pencil"})))))),P(this,"edit",((e,t)=>{this.props.onPropertyChange("init_service_values",e),this.props.onPropertyChange("service",e),this.props.onPropertyChange("editIdx",t),this.props.onPropertyChange("page",1)})),P(this,"toggleOverride",(()=>{const{services:e,override:t}=this.props;this.props.onPropertyChange("textSearchConfig",{services:e,override:!t})})),P(this,"remove",(e=>{const{services:t,override:r}=this.props,n=t.filter(((t,r)=>r!==e));this.props.onPropertyChange("textSearchConfig",{services:n,override:r})}))}render(){const{override:e}=this.props;return s().createElement("form",null,s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.serviceslistlabel"})),s().createElement("div",{className:"services-list"},this.getOptions())),s().createElement(i.Checkbox,{checked:e,onChange:this.toggleOverride},s().createElement(C.Z,{msgId:"search.overriedservice"})))}}P(_,"propTypes",{services:x().array,override:x().bool,service:x().object,onPropertyChange:x().func}),P(_,"contextTypes",{messages:x().object}),P(_,"defaultProps",{services:[],override:!1,onPropertyChange:()=>{}});const S={Element:_,validate:function(){return!0}};var I=r(727418),N=r.n(I);function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Z extends s().Component{constructor(){super(...arguments),k(this,"updateProp",((e,t)=>{let r=t.target.value;"queriableAttributes"===e&&(r=r.split(","));const n=N()({},this.props.service.options,{[e]:r});this.props.onPropertyChange("service",N()({},this.props.service,{options:n}))})),k(this,"updateName",(e=>{const t=e.target.value;this.props.onPropertyChange("service",N()({},this.props.service,{name:t}))})),k(this,"updateMaxFeatures",(e=>{const t=N()({},this.props.service.options,{maxFeatures:parseFloat(e[0],10)});this.props.onPropertyChange("service",N()({},this.props.service,{options:t}))}))}render(){const{service:e}=this.props,{options:t={}}=e;return s().createElement("form",null,s().createElement("span",{className:"wfs-required-props-title"},s().createElement(C.Z,{msgId:"search.s_wfs_props_label"})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_name"})),s().createElement(i.FormControl,{value:e.name,key:"name",type:"text",onChange:this.updateName})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_url"})),s().createElement(i.FormControl,{value:t.url,key:"url",type:"text",onChange:this.updateProp.bind(null,"url")})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_layer"})),s().createElement(i.FormControl,{value:t.typeName,key:"typeName",type:"text",onChange:this.updateProp.bind(null,"typeName")})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_attributes"})),s().createElement(i.FormControl,{value:([t.queriableAttributes]||0).join(","),key:"queriableAttributes",type:"text",onChange:this.updateProp.bind(null,"queriableAttributes")})))}}k(Z,"propTypes",{service:x().object,onPropertyChange:x().func}),k(Z,"defaultProps",{service:{},onPropertyChange:()=>{}});const F={Element:Z,validate:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={},name:r=""}=e,{url:n="",typeName:s="",queriableAttributes:o=""}=t;return r.length>0&&n.length>0&&s.length>0&&o.length>0}};var O=r(185552),j=r.n(O),L=r(743129),T=r(719648);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class D extends s().Component{constructor(){super(...arguments),G(this,"updateProp",((e,t,r)=>{const n=u()(r,t||"target.value");this.props.onPropertyChange("service",N()({},this.props.service,{[e]:n}))})),G(this,"updatePriority",(e=>{this.props.onPropertyChange("service",N()({},this.props.service,{priority:parseFloat(e[0],10)}))})),G(this,"updateLaunchInfoPanel",(e=>{let t=e&&e.value?e.value:"";"no_info"===t&&(t=void 0),this.props.onPropertyChange("service",{...this.props.service,launchInfoPanel:t,openFeatureInfoButtonEnabled:!1,forceSearchLayerVisibility:!1})}))}render(){const{service:e}=this.props,t=this.props.launchInfoPanelOptions||[{label:(0,T.S$)(this.context.messages,"search.s_launch_info_panel.no_info"),value:"no_info"},{label:(0,T.S$)(this.context.messages,"search.s_launch_info_panel.all_layers"),value:"all_layers"},{label:(0,T.S$)(this.context.messages,"search.s_launch_info_panel.single_layer"),value:"single_layer"}],r=(null==e?void 0:e.launchInfoPanel)||this.props.launchInfoPanelDefault;return s().createElement("form",null,s().createElement("span",{className:"wfs-required-props-title"},s().createElement(C.Z,{msgId:"search.s_result_props_label"})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_title"})),s().createElement(i.FormControl,{value:e.displayName,key:"displayName",type:"text",placeholder:'e.g. "${properties.name}"',onChange:this.updateProp.bind(null,"displayName",null)})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_description"})),s().createElement(i.FormControl,{value:e.subTitle,key:"subTitle",type:"text",onChange:this.updateProp.bind(null,"subTitle",null)})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_priority"}),s().createElement(i.Label,{key:"priority-label",className:"slider-label"},parseInt(e.priority||1,10))),s().createElement(j(),{key:"priority",start:[e.priority||1],step:1,range:{min:1,max:10},onSlide:this.updatePriority}),s().createElement("span",{className:"priority-info"},s().createElement(C.Z,{msgId:"search.s_priority_info"}))),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_launch_info_panel.label"})),s().createElement(L.ZP,w({options:t,clearable:!1,value:r,onChange:this.updateLaunchInfoPanel},this.props.launchInfoPanelSelectOptions)),"single_layer"===r?s().createElement(i.FormGroup,null,s().createElement(i.Checkbox,{checked:(null==e?void 0:e.openFeatureInfoButtonEnabled)??!1,onChange:this.updateProp.bind(null,"openFeatureInfoButtonEnabled","target.checked")},s().createElement(C.Z,{msgId:"search.s_launch_info_panel.openFeatureInfoButtonCheckbox"})),s().createElement(i.Checkbox,{checked:(null==e?void 0:e.forceSearchLayerVisibility)??!1,onChange:this.updateProp.bind(null,"forceSearchLayerVisibility","target.checked")},s().createElement(C.Z,{msgId:"search.s_launch_info_panel.forceSearchLayerVisibility"}))):null,s().createElement("span",{className:"priority-info with-top-margin"},s().createElement(C.Z,{msgId:`search.s_launch_info_panel.${r}_description`}))))}}G(D,"propTypes",{service:x().object,launchInfoPanelOptions:x().array,launchInfoPanelDefault:x().string,launchInfoPanelSelectOptions:x().object,onPropertyChange:x().func}),G(D,"contextTypes",{messages:x().object}),G(D,"defaultProps",{service:{},launchInfoPanelDefault:"no_info",launchInfoPanelSelectOptions:{},onPropertyChange:()=>{}});const B={Element:D,validate:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.displayName&&e.displayName.length>0}};function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class A extends s().Component{constructor(){super(...arguments),q(this,"updateProp",((e,t)=>{const r=t.target.value,n=N()({},this.props.service.options,{[e]:r});this.props.onPropertyChange("service",N()({},this.props.service,{options:n}))})),q(this,"updateSliderProps",((e,t)=>{const r={...this.props.service.options,[e]:parseInt(t[0],10)};this.props.onPropertyChange("service",{...this.props.service,options:r})}))}render(){const{service:e}=this.props,{options:t={}}=e;return s().createElement("form",null,s().createElement("span",{className:"wfs-required-props-title"},s().createElement(C.Z,{msgId:"search.s_wfs_opt_props_label"})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_sort"})),s().createElement(i.FormControl,{value:t.sortBy,key:"sortBy",type:"text",onChange:this.updateProp.bind(null,"sortBy")})),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_max_features"})),s().createElement(j(),{key:"maxFeatures",start:[t.maxFeatures||1],range:{min:1,max:50},onSlide:this.updateSliderProps.bind(null,"maxFeatures")}),s().createElement(i.Label,{key:"maxFeatures-label",className:"slider-label"},t.maxFeatures||1)),s().createElement(i.FormGroup,null,s().createElement(i.ControlLabel,null,s().createElement(C.Z,{msgId:"search.s_max_zoom"})),s().createElement(j(),{key:"maxZoomLevel",start:[t.maxZoomLevel||21],range:{min:1,max:35},onSlide:this.updateSliderProps.bind(null,"maxZoomLevel")}),s().createElement(i.Label,{key:"maxZoomLevel-label",className:"slider-label"},t.maxZoomLevel||21)))}}q(A,"propTypes",{service:x().object,onPropertyChange:x().func}),q(A,"defaultProps",{service:{},onPropertyChange:()=>{}});const R={Element:A,validate:function(){return!0}};var V=r(23888),$=r(36549),H=r(152543),z=r(926854);function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const M=(0,$.Z)(V.Z);class U extends s().Component{constructor(){super(...arguments),X(this,"canProceed",(()=>{const{page:e,pages:t,service:r}=this.props;return t[e].validate(r)})),X(this,"isDirty",(()=>{const{service:e,initServiceValues:t}=this.props;return!g()(e,t)})),X(this,"renderFooter",(()=>{const{page:e,pages:t}=this.props;return 0===e?s().createElement("span",{role:"footer"},s().createElement(M,{onClick:this.addService,bsStyle:"primary"},s().createElement(h.Z,{msgId:"search.addbtn"}))):e===t.length-1?s().createElement("span",{role:"footer"},s().createElement(M,{onClick:this.prev,bsStyle:"primary"},s().createElement(h.Z,{msgId:"search.prevbtn"})),s().createElement(M,{disabled:!this.canProceed(),onClick:this.update,bsStyle:"success"},s().createElement(h.Z,{msgId:"search.savebtn"}))):s().createElement("span",{role:"footer"},1===e&&this.isDirty()?s().createElement(l.Z,{onConfirm:this.prev,bsStyle:"primary",confirming:{text:s().createElement(h.Z,{msgId:"search.cancelconfirm"})},text:s().createElement(h.Z,{msgId:"search.cancelbtn"})}):s().createElement(M,{onClick:this.prev,bsStyle:"primary"},s().createElement(h.Z,{msgId:1===e?"search.cancelbtn":"search.prevbtn"})),s().createElement(M,{disabled:!this.canProceed(),onClick:this.next,bsStyle:"primary"},s().createElement(h.Z,{msgId:"search.nextbtn"})))})),X(this,"onClose",(()=>{this.props.toggleControl("searchservicesconfig"),this.props.restServiceConfig(0)})),X(this,"addService",(()=>{const{newService:e}=this.props;this.props.onPropertyChange("init_service_values",e),this.props.onPropertyChange("service",e),this.props.onPropertyChange("page",1)})),X(this,"prev",(()=>{const{page:e}=this.props;e>1?this.props.onPropertyChange("page",e-1):1===e&&this.props.restServiceConfig(0)})),X(this,"next",(()=>{const{page:e,pages:t}=this.props;e<t.length-1&&this.props.onPropertyChange("page",e+1)})),X(this,"update",(()=>{const{service:e,editIdx:t}=this.props;this.props.updateService(e,t)}))}render(){const{enabled:e,pages:t,page:r,id:n,panelStyle:o,panelClassName:a,titleText:m,closeGlyph:u,onPropertyChange:d,service:g,textSearchConfig:v={},containerClassName:b}=this.props,f=t&&t[r]||null;return e?s().createElement(p.Z,null,s().createElement(c.Z,{id:n,style:{...o,display:e?"block":"none"},containerClassName:b,className:a,draggable:!1,modal:!0},s().createElement("span",{role:"header"},s().createElement("span",null,m),this.isDirty()?s().createElement(l.Z,{className:"close",confirming:{text:s().createElement(h.Z,{msgId:"search.cancelconfirm"}),className:"btn btn-sm btn-warning services-config-editor-confirm-close"},onConfirm:this.onClose,bsStyle:"primary",text:s().createElement(i.Glyphicon,{glyph:u})}):s().createElement("button",{onClick:this.onClose,className:"close"},u?s().createElement(i.Glyphicon,{glyph:u}):s().createElement("span",null,"×"))),s().createElement("div",{role:"body",className:"services-config-editor"},s().createElement(f.Element,{services:v.services,override:v.override,onPropertyChange:d,service:g})),this.renderFooter())):null}}X(U,"propTypes",{id:x().string,enabled:x().bool,panelStyle:x().object,panelClassName:x().string,containerClassName:x().string,closeGlyph:x().string,titleText:x().oneOfType([x().string,x().element]),toggleControl:x().func,pages:x().arrayOf(x().shape({Element:x().func.isRequired,validate:x().func.isRequired})),page:x().number,service:x().object,initServiceValues:x().object,onPropertyChange:x().func,newService:x().object.isRequired,updateService:x().func,restServiceConfig:x().func,textSearchConfig:x().object,editIdx:x().number}),X(U,"defaultProps",{id:"search-services-config-editor",enabled:!1,panelStyle:{minWidth:"400px",zIndex:2e3,position:"absolute",top:"100px",minHeight:"300px",left:"calc(50% - 150px)",backgroundColor:"white"},panelClassName:"toolbar-panel",containerClassName:"",closeGlyph:"1-close",titleText:s().createElement(h.Z,{msgId:"search.configpaneltitle"}),closePanel:()=>{},onPropertyChange:()=>{},page:0,newService:{type:"wfs",name:"",displayName:"",subTitle:"",priority:1,options:{url:"",typeName:"",queriableAttributes:"",sortBy:"",maxFeatures:5,srsName:"EPSG:4326"}}});const W=(0,o.connect)((e=>{let{controls:t={},searchconfig:r={}}=e;return{enabled:t.searchservicesconfig&&t.searchservicesconfig.enabled||!1,pages:[S,F,B,R],page:r&&r.page||0,service:r&&r.service,initServiceValues:r&&r.init_service_values,textSearchConfig:r&&r.textSearchConfig,editIdx:r&&r.editIdx}}),{toggleControl:v.Xi,onPropertyChange:function(e,t){return{type:b,property:e,value:t}},restServiceConfig:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:f,page:e}},updateService:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{type:y,service:e,idx:t}}})(U),J=(0,o.connect)((0,a.P1)([e=>e.search||null,e=>{var t,r;return(null==e||null===(t=e.controls)||void 0===t||null===(r=t.searchservicesconfig)||void 0===r?void 0:r.enabled)||!1}],((e,t)=>({activeTool:u()(e,"activeSearchTool","addressSearch"),enabled:t}))),{onToggleControl:v.Xi})((function(e){let{activeTool:t,enabled:r,onToggleControl:n}=e;return"addressSearch"===t?s().createElement(M,{bsStyle:"default",pullRight:!0,className:"square-button-md no-border",tooltipId:"search.searchservicesbutton",tooltipPosition:"bottom",onClick:()=>{r||n("searchservicesconfig")}},s().createElement(i.Glyphicon,{glyph:"cog"})):null})),K=(0,H.rx)("SearchServicesConfig",{component:W,containers:{Search:{name:"SearchServicesConfigButton",target:"button",component:J}},reducers:{searchconfig:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return N()({},e,{[t.property]:t.value});case z.ok:{const r=t.config.map.text_search_config||t.config.map.text_serch_config;return N()({},e,{textSearchConfig:r})}case v.l:case f:return N()({},e,{service:void 0,page:t.page,init_service_values:void 0,editIdx:void 0});case y:{let r=(e.textSearchConfig&&e.textSearchConfig.services||[]).slice();const n=N()({},t.service,{priority:parseInt(t.service.priority,10)});return-1!==t.idx?r[t.idx]=n:r.push(n),N()({},e,{service:void 0,page:0,init_service_values:void 0,editIdx:void 0,textSearchConfig:{services:r,override:e.textSearchConfig&&e.textSearchConfig.override||!1}})}default:return e}}}})},488400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(171703),s=r(804504);const o=(0,n.connect)((e=>({locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]})))(s.Z)}}]);