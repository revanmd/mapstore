(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[6354],{768977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(45697),l=n.n(o),s=n(124852),r=n.n(s),i=n(630294),a=n(222777);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m extends r().Component{render(){const{cardComponent:e,items:t,colProps:n,onItemClick:o,size:l}=this.props,s=e||a.Z;return r().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},r().createElement(i.Row,{className:"items-list"},t.map(((e,t)=>r().createElement(i.Col,c({key:e.id||t},n),r().createElement(s,c({onClick:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return o(e,...n)},size:l},e)))))))}}d(m,"propTypes",{size:l().string,onItemClick:l().func,colProps:l().object,items:l().array,cardComponent:l().oneOfType([l().string,l().func]),className:l().string}),d(m,"defaultProps",{size:"",onItemClick:()=>{},colProps:{xs:12},className:"",items:[]});const g=m},113208:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ge});var o=n(124852),l=n.n(o),s=n(171703),r=n(22222),i=n(796205),a=n(468181),c=n(219002),d=n(45697),m=n.n(d),g=n(400043),p=n(804504),u=n(756435),y=n(8204),b=n(59810),E=n(6760),h=n(548403),v=n.n(h),C=n(313311),S=n.n(C),I=n(227361),f=n.n(I),T=n(630294),$=n(867076),P=n(455877),Z=n.n(P),k=n(222777),N=n(768977),w=n(908194),x=n(208335),U=n(561512),F=n.n(U);const z=(0,$.compose)((0,$.withState)("text","setText",(e=>{let{title:t}=e;return t})))((function(){let{text:e,className:t="ms-story-title-editable",onUpdate:n=(()=>{}),setText:o=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l().createElement(F(),{className:t,html:e,onClick:e=>{e.stopPropagation()},onChange:e=>{o(e.target.value)},onBlur:e=>{n(e.target.innerText)}})}));function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}const B=(0,x.Z)(N.Z),D=(0,w.Z)((e=>l().createElement(k.Z,O({},e,{dragSymbol:l().createElement(T.Glyphicon,{glyph:"menu-hamburger"})})))),G=(e,t)=>n=>{n.stopPropagation(),t(e)},j=function(){let{type:e,src:t,thumbnail:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o={text:"sheet",image:"picture",title:"story-title-section",banner:"story-banner-section",paragraph:"story-paragraph-section",immersive:"story-immersive-section",carousel:"story-carousel-section",media:"story-media-section",map:"1-map",columnleft:"align-left",columnright:"align-right",columncenter:"align-center",webPage:"story-webpage-section",video:"play"},s=n||"image"===e&&t;return s?l().createElement("img",{src:s}):l().createElement(T.Glyphicon,{glyph:o[e]||"picture"})},L=(0,$.compose)((0,s.connect)((0,r.P1)(i.jq,(e=>({resources:e})))),(0,$.withProps)((e=>{let{resources:t,resourceId:n}=e;return(S()(t,{id:n})||{}).data})))(j),R={title:()=>null,paragraph:e=>{let{id:t,contents:n,isCollapsed:o,scrollTo:s,onSort:r,sectionId:i,onUpdate:a}=e;return l().createElement("div",{style:{position:"relative"}},l().createElement(B,{containerId:t,isDraggable:!0,onSort:(e,o,l,s)=>{if(l.containerId===s.containerId){const o=`sections[{ "id": "${t}" }].contents[{"id":"${n[0].id}"}].contents[{"id":"${s.id}"}]`,l=`sections[{ "id": "${t}" }].contents[{"id":"${n[0].id}"}].contents`,i=e,a=Z()();r(o,l,i,a,`sections[{ "id": "${t}" }].contents[{"id":"${n[0].id}"}].contents[{"id":"${a}"}]`)}},cardComponent:D,items:n[0].contents.map((e=>{const c="column"===e.type?`${e.type}${e.align||"center"}`:e.type,d=R[e.type];return{id:e.id,preview:l().createElement(L,{type:c,resourceId:e.resourceId}),tools:l().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:G(e.id,s)}]}),title:l().createElement(z,{title:e.title||v()(e.type),onUpdate:t=>a(`sections[{"id": "${i}"}].contents[{"id": "${n[0].id}"}].contents[{"id": "${e.id}"}]`,{title:t},"merge")}),description:`type: ${e.type}`,body:d&&l().createElement(d,{id:t,onSort:r,scrollTo:s,isCollapsed:o,contents:e.contents})}}))}))},column:e=>{let{sectionId:t,id:n,contents:o,isCollapsed:s,scrollTo:r,onSort:i,onUpdate:a,sectionType:c}=e;return l().createElement("div",{style:{position:"relative"}},l().createElement(B,{containerId:n,isDraggable:!0,onSort:(e,o,l,s)=>{if(l.containerId===s.containerId){const o=`sections[{ "id": "${t}" }].contents[{"id":"${n}"}].contents[{"id":"${s.id}"}]`,l=`sections[{ "id": "${t}" }].contents[{"id":"${n}"}].contents`,r=e,a=Z()();i(o,l,r,a,`sections[{ "id": "${t}" }].contents[{"id":"${n}"}].contents[{"id":"${a}"}]`)}},cardComponent:D,items:o.map((e=>{const o="column"===e.type?`${e.type}${e.align||"center"}`:e.type,d=R[e.type];return{id:e.id,preview:l().createElement(L,{type:o,resourceId:e.resourceId}),tools:l().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",visible:c!==g.ID.CAROUSEL,tooltipId:"geostory.zoomToContent",onClick:G(e.id,r)}]}),title:l().createElement(z,{title:e.title||v()(e.type),onUpdate:o=>a(`sections[{"id": "${t}"}].contents[{"id": "${n}"}].contents[{"id": "${e.id}"}]`,{title:o},"merge")}),description:`type: ${e.type}`,body:!s&&d&&l().createElement(d,{id:n,onSort:i})}}))}))},immersive:e=>{let{id:t,contents:n,isCollapsed:o,scrollTo:s,onUpdate:r,onSort:i,currentPage:a}=e;return l().createElement("div",{style:{position:"relative"}},l().createElement(B,{containerId:t,isDraggable:!0,onSort:(e,n,o,l)=>{if(o.containerId===l.containerId){const n=`sections[{ "id": "${t}" }].contents[{"id":"${l.id}"}]`,o=`sections[{ "id": "${t}" }].contents`,s=e,r=Z()();i(n,o,s,r,`sections[{ "id": "${t}" }].contents[{"id":"${r}"}]`)}},cardComponent:D,items:n.map((e=>{const n="column"===e.type?`${e.type}${e.align||"center"}`:e.type,c=R[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:l().createElement(j,{type:n}),tools:l().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:G(e.id,s)}]}),title:l().createElement(z,{title:e.title||v()(e.type),onUpdate:n=>r(`sections[{"id": "${t}"}].contents[{"id":"${e.id}"}]`,{title:n},"merge")}),description:`type: ${e.type}`,body:c&&l().createElement(c,{id:e.id,sectionId:t,onSort:i,onUpdate:r,scrollTo:s,isCollapsed:o,contents:e.contents})}}))}))},carousel:e=>{let{id:t,contents:n,isCollapsed:o,scrollTo:s,onUpdate:r,onSort:i,currentPage:a}=e;return l().createElement("div",{style:{position:"relative"}},l().createElement(B,{containerId:t,isDraggable:!0,onSort:(e,n,o,l)=>{if(o.containerId===l.containerId){const n=`sections[{ "id": "${t}" }].contents[{"id":"${l.id}"}]`,o=`sections[{ "id": "${t}" }].contents`,s=e,r=Z()();i(n,o,s,r,`sections[{ "id": "${t}" }].contents[{"id":"${r}"}]`)}},cardComponent:D,items:n.map((e=>{var n;const c="column"===e.type?`${e.type}${e.align||"center"}`:e.type,d=R[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:l().createElement(j,{type:c,thumbnail:null==e||null===(n=e.thumbnail)||void 0===n?void 0:n.image}),tools:null,title:l().createElement(z,{key:e.title,title:e.title||v()(e.type),onUpdate:n=>r(`sections[{"id": "${t}"}].contents[{"id":"${e.id}"}]`,{title:n},"merge")}),description:`type: ${e.type}`,body:d&&l().createElement(d,{id:e.id,sectionId:t,onSort:i,onUpdate:r,scrollTo:s,isCollapsed:o,sectionType:g.ID.CAROUSEL,contents:e.contents})}}))}))}},A=e=>{let{scrollTo:t,isCollapsed:n=!1,currentPage:o,onSort:s,onSelect:r,onUpdate:i,selected:a="title_section_id1"}=e;return e=>{let{contents:c,type:d,title:m,id:g}=e;const p=R[d];return{id:g,preview:l().createElement(L,{type:d,resourceId:f()(c[0],"background.resourceId")}),className:o&&o.sectionId===g?"ms-highlight":"",onClick:()=>r(g),selected:g===a,tools:l().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{onClick:G(g,t),glyph:"zoom-to",tooltipId:"geostory.zoomToContent"}]}),title:l().createElement(z,{title:m,onUpdate:e=>i(`sections[{"id": "${g}"}]`,{title:e},"merge")}),description:`type: ${d}`,body:n?null:p&&l().createElement(p,{id:g,sectionId:g,onSort:s,onUpdate:i,onSelect:r,currentPage:o,selected:a,scrollTo:t,isCollapsed:n,contents:c})}}},q=e=>{let{sections:t=[],scrollTo:n,onSelect:o=(()=>{}),isCollapsed:s,currentPage:r,selected:i,onSort:a,onUpdate:c}=e;return l().createElement(B,{isDraggable:!0,onSort:(e,t,n,o)=>{if("story-sections"===n.containerId&&"story-sections"===o.containerId){const t=Z()(),n=`sections[{ "id": "${o.id}" }]`;a(n,"sections",e,t,`sections[{ "id": "${t}" }]`)}},containerId:"story-sections",cardComponent:D,size:"sm",items:t.map(A({currentPage:r,onSelect:o,isCollapsed:s,scrollTo:n,selected:i,onUpdate:c,onSort:a}))})};var M=n(594239),_=n(472704),K=n(228388),V=n.n(K),W=(n(750288),n(486234)),Y=n(739228),H=n(743129);const Q=(0,W.Z)("placeholder")(T.FormControl),X=[{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"}],J=e=>{var t,n,s,r,i,a,c;let{items:d=[],settings:m,storyFonts:u,onToggleSettings:y=(()=>{}),onUpdateSettings:b=(()=>{})}=e;const[E,h]=(0,o.useState)(m.storyTitle),[v,C]=(0,o.useState)(m.expanded||[]),S=u.length>0?u:g.Km;return l().createElement(T.Form,{className:"ms-geostory-settings"},l().createElement("div",null,l().createElement("h4",null,l().createElement(p.Z,{msgId:"geostory.builder.settings.storyTheme"})),l().createElement("hr",null)),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"geostory.builder.settings.theme"}))),l().createElement(Y.Z,{themeStyle:null==m||null===(t=m.theme)||void 0===t?void 0:t.general,placement:"right",disableBackgroundAlpha:!0,disableShadow:!0,onChange:e=>b("theme",{...null==m?void 0:m.theme,general:e})})),l().createElement(T.FormGroup,null,l().createElement("div",{className:"ms-font-select"},l().createElement("div",null,l().createElement(p.Z,{msgId:"geostory.builder.settings.fontFamily"})),l().createElement("div",null,l().createElement(H.ZP,{value:null==m||null===(n=m.theme)||void 0===n||null===(s=n.general)||void 0===s?void 0:s.fontFamily,onChange:e=>{var t;return b("theme",{...null==m?void 0:m.theme,general:{...null==m||null===(t=m.theme)||void 0===t?void 0:t.general,fontFamily:e.value}})},options:(I=S,I.map((e=>({label:e,value:e}))))})))),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"geostory.builder.settings.overlay"}))),l().createElement(Y.Z,{themeStyle:null==m||null===(r=m.theme)||void 0===r?void 0:r.overlay,placement:"right",onChange:e=>b("theme",{...null==m?void 0:m.theme,overlay:e})})),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"Links"}))),l().createElement(Y.Z,{disableBackgroundPicker:!0,disableShadow:!0,themeStyle:null==m||null===(i=m.theme)||void 0===i?void 0:i.link,placement:"right",onChange:e=>b("theme",{...null==m?void 0:m.theme,link:e})})),l().createElement("div",null,l().createElement("h4",null,l().createElement(p.Z,{msgId:"geostory.builder.settings.storyHeader"})),l().createElement("hr",null)),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"geostory.builder.settings.title"})),l().createElement(M.Z,{onChange:()=>y("isTitleEnabled"),className:"ms-geostory-settings-switch",checked:m.isTitleEnabled})),l().createElement(Q,{disabled:!m.isTitleEnabled,value:E,onChange:e=>h(e.target.value),onBlur:e=>b("storyTitle",e.target.value),placeholder:"geostory.builder.settings.titlePlaceholder",style:{marginTop:"10px"}})),l().createElement(T.FormGroup,null,l().createElement("div",{className:"ms-font-select"},l().createElement("div",null,l().createElement(p.Z,{msgId:"geostory.builder.settings.fontSize"})),l().createElement("div",null,l().createElement(H.ZP,{disabled:!m.isTitleEnabled,value:m.storyTitleFontSize,onChange:e=>b("storyTitleFontSize",e.value),options:X,clearable:!1})))),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"geostory.builder.settings.logo"})),l().createElement(M.Z,{onChange:()=>y("isLogoEnabled"),className:"ms-geostory-settings-switch",checked:m.isLogoEnabled})),m.isLogoEnabled&&l().createElement(l().Fragment,null,l().createElement(_.Z,{thumbnail:(null==m||null===(a=m.thumbnail)||void 0===a?void 0:a.data)||(null==m||null===(c=m.thumbnail)||void 0===c?void 0:c.url),onUpdate:(e,t)=>{var n;b("thumbnail",{data:e,url:null==t||null===(n=t[0])||void 0===n?void 0:n.preview}),b("thumbnailErrors",void 0)},onRemove:()=>{b("thumbnail",void 0),b("thumbnailErrors",void 0)},onError:e=>b("thumbnailErrors",e),message:l().createElement(p.Z,{msgId:"geostory.builder.settings.logoPlaceholder"}),thumbnailOptions:{width:300,height:150,type:"image/png",contain:!0}}),m.thumbnailErrors&&m.thumbnailErrors.length>0&&l().createElement(T.Alert,{bsStyle:"danger",className:"text-center"},l().createElement("div",null,l().createElement(p.Z,{msgId:"map.error"})),-1!==m.thumbnailErrors.indexOf("FORMAT")&&l().createElement("div",null,l().createElement(p.Z,{msgId:"map.errorFormat"})),-1!==m.thumbnailErrors.indexOf("SIZE")&&l().createElement("div",null,l().createElement(p.Z,{msgId:"map.errorSize"}))))),l().createElement(T.FormGroup,null,l().createElement("div",{style:{marginBottom:"10px"}},l().createElement(T.ControlLabel,null,l().createElement(p.Z,{msgId:"geostory.builder.settings.navbar"})),l().createElement(M.Z,{onChange:()=>y("isNavbarEnabled"),className:"ms-geostory-settings-switch",checked:m.isNavbarEnabled})),m.isNavbarEnabled&&l().createElement(V(),{showNodeIcon:!1,nativeCheckboxes:!0,nodes:d,checked:m.checked||[],expanded:v,onCheck:e=>b("checked",e),onExpand:e=>C(e)})));var I};function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const te=(0,E.Z)(b.Z);class ne extends l().Component{render(){const{story:e,settings:t,scrollTo:n,setEditing:o,mode:s,isCollapsed:r,isToolbarEnabled:i,isSettingsEnabled:a,isSettingsChanged:c,settingsItems:d,onToggleCardPreview:m,onToggleSettingsPanel:E,onToggleSettings:h,onUpdateSettings:v,currentPage:C,selected:S,onRemove:I,onSort:f,onUpdate:T,onSelect:$,storyFonts:P}=this.props,Z=c?te:b.Z;return l().createElement(u.Z,{className:"ms-geostory-builder",header:l().createElement("div",{className:"text-center ms-geostory-builder-header"},l().createElement(y.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},transitionProps:!1,buttons:[{visible:!a,Element:()=>l().createElement(te,{glyph:"trash",bsStyle:"primary",className:"square-button-md no-border",tooltipId:"geostory.builder.delete",confirmTitle:l().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmTitle"}),disabled:!i||!S,confirmContent:l().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmContent"}),onClick:()=>{I(S&&`sections[{ "id": "${S}" }]`||"")}})},{tooltipId:"geostory.builder.preview",glyph:"preview",visible:!a,disabled:!i,onClick:()=>o(s===g.nl.VIEW)},{tooltipId:"geostory.builder.settings.tooltip",glyph:"cog",id:"geostory-builder-settings-button",visible:!a,onClick:()=>E()},{tooltipId:"geostory.builder."+(r?"expandAll":"collapseAll"),glyph:r?"chevron-left":"chevron-down",bsStyle:"primary",disabled:!i,visible:!a,onClick:()=>m()},{visible:a,Element:()=>l().createElement(Z,{bsStyle:"primary",glyph:"arrow-left",className:"square-button-md no-border",tooltipId:"geostory.builder.settings.back",confirmTitle:l().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmTitle"}),confirmContent:l().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmBody"}),confirmNo:l().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmNo"}),confirmYes:l().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmYes"}),onClick:()=>{E()}})},{tooltipId:"geostory.builder.settings.save",glyph:"floppy-disk",visible:a,onClick:()=>E(!0)}]}))},a&&l().createElement(J,{items:d,settings:t,onToggleSettings:h,onUpdateSettings:v,storyFonts:P}),i&&!a?l().createElement(q,{currentPage:C,scrollTo:n,onSelect:$,selected:S,onUpdate:T,isCollapsed:r,sections:e&&e.sections,onSort:f}):a?null:l().createElement("div",{className:"ms-story-empty-content-parent"},l().createElement("div",{className:"ms-story-empty-content-child"},l().createElement(p.Z,{msgId:"geostory.builder.noContents"}))))}}ee(ne,"propTypes",{currentPage:m().object,settingsItems:m().array,story:m().object,settings:m().object,mode:m().oneOf(g.lg.Modes),onToggleCardPreview:m().func,onToggleSettingsPanel:m().func,onToggleSettings:m().func,onUpdateSettings:m().func,isCollapsed:m().bool,isToolbarEnabled:m().bool,isSettingsEnabled:m().bool,isSettingsChanged:m().bool,scrollTo:m().func,setEditing:m().func,onSort:m().func,onSelect:m().func,onRemove:m().func,onUpdate:m().func,selected:m().string,storyFonts:m().array}),ee(ne,"defaultProps",{mode:g.nl.VIEW,setEditing:()=>{},onToggleCardPreview:()=>{},onToggleSettingsPanel:()=>{},story:{},settings:{},isCollapsed:!0,isToolbarEnabled:!0,isSettingsEnabled:!1,onSort:()=>{}});const oe=ne;var le=n(425589),se=n(152543),re=n(36549),ie=n(805803),ae=n(260817),ce=n(23888);const de=(0,re.Z)(ce.Z),me=(0,s.connect)((0,r.zB)({isEditAllowed:i.pu}),{setEditingMode:c.D_})((e=>{let{isEditAllowed:t,setEditingMode:n=(()=>{}),location:o,history:s}=e;return t?l().createElement(de,{id:"edit-story",className:"square-button-md no-border",onClick:()=>{n(!0);const{pathname:e}=o;if(e.includes("/geostory/shared")){const t=(0,ae.j9)(e.replace("/geostory/shared","/geostory"));s.push(t)}},tooltipId:"geostory.navigation.edit",tooltipPosition:"bottom"},l().createElement(T.Glyphicon,{glyph:"pencil"})):null})),ge=(0,se.rx)("GeoStoryEditor",{component:(0,s.connect)((0,r.zB)({isCollapsed:i.eg,mode:i.eK,story:i.Kg,currentPage:i.PR,settingsItems:i.yL,settings:i.TQ,isSettingsChanged:i.KR,isToolbarEnabled:i.Lu,selected:i.sY,isSettingsEnabled:i.W5,isFocused:i.z7,storyFonts:i.mm}),{setEditingMode:c.D_,onUpdateSettings:c.m7,onToggleCardPreview:c.kB,onToggleSettingsPanel:c.G5,onToggleSettings:c.Xn,onRemove:c.Od,onSelect:c._e,onSort:c.pB,onUpdate:c.Vx,onBasicError:le.d})((e=>{let{currentPage:t,isCollapsed:n,isSettingsChanged:o=!1,isSettingsEnabled:s,isToolbarEnabled:r,isFocused:i=!1,mode:a=g.nl.VIEW,story:c={},settings:d={},settingsItems:m,selected:p,storyFonts:u=[],setEditingMode:y=(()=>{}),onToggleCardPreview:b=(()=>{}),onToggleSettingsPanel:E=(()=>{}),onToggleSettings:h=(()=>{}),onUpdateSettings:v=(()=>{}),onSelect:C=(()=>{}),onRemove:S=(()=>{}),onUpdate:I=(()=>{}),onSort:f=(()=>{})}=e;return a!==g.nl.EDIT||i?null:l().createElement("div",{key:"left-column",className:"ms-geostory-editor",style:{order:-1,width:400,position:"relative"}},l().createElement(oe,{currentPage:t,isCollapsed:n,isSettingsChanged:o,isSettingsEnabled:s,isToolbarEnabled:r,mode:a,scrollTo:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,g.M1)(e,t)},selected:p,settings:d,settingsItems:m,story:c,storyFonts:(0,g._R)(u),setEditing:y,onRemove:S,onSelect:C,onSort:f,onToggleCardPreview:b,onToggleSettings:h,onToggleSettingsPanel:E,onUpdate:I,onUpdateSettings:v}))})),containers:{GeoStoryNavigation:{tool:(0,ie.EN)(me)}},reducers:{geostory:a.Z}})}}]);