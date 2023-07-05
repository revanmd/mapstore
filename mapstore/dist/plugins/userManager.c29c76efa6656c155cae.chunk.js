(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[3124],{457654:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Y});var r=s(92742),n=s.n(r),a=s(727418),l=s.n(a),o=s(45697),i=s.n(o),u=s(124852),p=s.n(u),c=s(630294),d=s(171703),h=s(331325),m=s(804504),g=s(778081),y=s(16246),b=s(161538),E=s(23888);function f(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s(354033);class v extends p().Component{constructor(){super(...arguments),f(this,"renderStatus",(()=>p().createElement("div",{key:"status",className:"user-status",style:{position:"absolute",bottom:0,left:"10px",margin:"10px 10px 0 10px"}},p().createElement("div",null,p().createElement("strong",null,p().createElement(m.Z,{msgId:"users.statusTitle"}))),this.props.user.enabled?p().createElement(c.Glyphicon,{glyph:"ok-sign"}):p().createElement(c.Glyphicon,{glyph:"minus-sign"})))),f(this,"renderGroups",(()=>p().createElement("div",{key:"groups",className:"groups-container",style:this.props.innerItemStyle},p().createElement("div",null,p().createElement("strong",null,p().createElement(m.Z,{msgId:"users.groupTitle"}))),p().createElement("div",{className:"groups-list"},this.props.user&&this.props.user.groups?this.props.user.groups.filter((function(){let{groupName:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e})).map((function(){let{id:e,groupName:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p().createElement("div",{className:"group-item",key:"group-"+e},t)})):null)))),f(this,"renderRole",(()=>p().createElement("div",{key:"role",className:"role-containter",style:this.props.innerItemStyle},p().createElement("div",null,p().createElement("strong",null,p().createElement(m.Z,{msgId:"users.roleTitle"}))),this.props.user.role))),f(this,"renderAvatar",(()=>p().createElement("div",{key:"avatar",className:"avatar-containter",style:this.props.avatarStyle},p().createElement(E.Z,{bsStyle:"primary",type:"button",className:"square-button"},p().createElement(c.Glyphicon,{glyph:"user"}))))),f(this,"renderName",(()=>p().createElement("div",{key:"name",style:this.props.nameStyle},this.props.user.name))),f(this,"renderHeader",(()=>p().createElement("div",{style:this.props.headerStyle},this.props.user.name)))}render(){return p().createElement(b.Z,{className:"user-thumb",style:this.props.style,titleStyle:this.props.titleStyle,header:this.renderHeader(),actions:this.props.actions},p().createElement("div",{className:"user-data-container"},this.renderAvatar(),p().createElement("div",{className:"user-card-info-container"},this.renderName(),p().createElement("div",{className:"user-card-rolegroups-container"},this.renderRole(),this.renderGroups()))),this.renderStatus())}}f(v,"propTypes",{style:i().object,user:i().object,titleStyle:i().object,headerStyle:i().object,innerItemStyle:i().object,avatarStyle:i().object,nameStyle:i().object,actions:i().array}),f(v,"defaultProps",{style:{position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"repeat-x"},titleStyle:{display:"flex"},headerStyle:{flexGrow:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:0},innerItemStyle:{},avatarStyle:{margin:"10px"},nameStyle:{borderBottom:"1px solid #ddd",fontSize:18,fontWeight:"bold",overflow:"auto",wordWrap:"break-word",minHeight:"1.5em"}});const S=v;var w=s(630998),C=s.n(w);function x(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class P extends p().Component{constructor(){super(...arguments),x(this,"renderError",(()=>this.props.deleteError?p().createElement(c.Alert,{bsStyle:"danger"},p().createElement(m.Z,{msgId:"users.errorDelete"}),this.props.deleteError.statusText):null)),x(this,"renderConfirmButtonContent",(()=>"deleting"===this.props.deleteStatus?p().createElement(m.Z,{msgId:"users.deleting"}):p().createElement(m.Z,{msgId:"users.delete"})))}render(){return this.props.user?p().createElement(y.Z,{show:!!this.props.user,onClose:()=>this.props.deleteUser(this.props.deleteId,"cancelled"),onConfirm:()=>{this.props.deleteUser(this.props.deleteId,"delete")},confirmButtonContent:this.renderConfirmButtonContent(),confirmButtonDisabled:"deleting"===this.props.deleteStatus},p().createElement("div",null,p().createElement(m.Z,{msgId:"users.confirmDeleteUser"})),p().createElement("div",{style:{margin:"10px 0"}},p().createElement(S,{user:this.props.user})),p().createElement("div",null,this.renderError())):null}}x(P,"propTypes",{user:i().object,deleteUser:i().func,deleteId:i().number,deleteError:i().object,deleteStatus:i().string}),x(P,"defaultProps",{deleteUser:()=>{}});const k=(0,d.connect)((e=>{let t=e&&e.users;if(!t)return{};let s=t&&t.users,r=t.deletingUser&&t.deletingUser.id;if(s&&r){return{user:s[C()(s,(e=>e.id===r))],deleteId:r,deleteError:t.deletingUser.error,deleteStatus:t.deletingUser.status}}return{deleteId:r}}),{deleteUser:h.h8})(P);var U=s(12838),I=s(36549),T=s(590504),N=s(743129);function Z(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class G extends p().Component{constructor(){super(...arguments),Z(this,"onChange",(e=>{null!==e&&this.props.onUserGroupsChange("groups",e.map((e=>{let t=C()(this.props.groups,(t=>t.id===e.value));return t>=0?this.props.groups[t]:null})).filter((e=>e)))})),Z(this,"getDefaultGroups",(()=>this.props.groups.filter((e=>"everyone"===e.groupName)))),Z(this,"getOptions",(()=>this.props.groups.map((e=>({label:e.groupName,value:e.id,clearableValue:"everyone"!==e.groupName}))))),Z(this,"renderGroupsSelector",(()=>p().createElement(N.ZP,{key:"groupSelector",clearable:!1,isLoading:0===this.props.groups.length,name:"user-groups-selector",multi:!0,value:(this.props.user&&this.props.user.groups?this.props.user.groups:this.getDefaultGroups()).map((e=>e.id)),options:this.getOptions(),onChange:this.onChange,style:{marginTop:"10px"}})))}render(){return this.props.groups?p().createElement("div",{style:{marginTop:"10px"},key:"groups-page"},p().createElement("span",null,p().createElement(m.Z,{msgId:"users.selectedGroups"})),this.renderGroupsSelector()):null}}Z(G,"propTypes",{groups:i().array,onUserGroupsChange:i().func,user:i().object}),Z(G,"defaultProps",{groups:[],onUserGroupsChange:()=>{},user:{}});const j=G;var F=s(472986),M=s.n(F),O=s(94841);function R(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s(380623);const A=(0,I.Z)(c.Glyphicon);class B extends p().Component{constructor(){super(...arguments),R(this,"state",{key:1}),R(this,"getAttributeValue",(e=>{let t=this.props.user&&this.props.user.attribute;if(t){let s=C()(t,(t=>t.name===e));return t[s]&&t[s].value}return null})),R(this,"getPwStyle",(()=>{if(!this.props.user||!this.props.user.newPassword)return null;let e=this.props.user.newPassword;return this.isMainPasswordValid(e).valid?"success":"error"})),R(this,"getPwValidationMeta",(()=>{if(!this.props.user||!this.props.user.newPassword)return{valid:!0,message:"user.passwordMessage",args:null};let e=this.props.user.newPassword;return this.isMainPasswordValid(e)})),R(this,"renderPasswordFields",(()=>{const e=this.getPwValidationMeta(),t=e.message,s=e.args;return p().createElement("div",null,p().createElement(c.FormGroup,{validationState:this.getPwStyle()},p().createElement(c.ControlLabel,null,p().createElement(m.Z,{msgId:"user.password"})," ",p().createElement("span",{style:{fontWeight:"bold"}},"*"),p().createElement(A,{tooltipId:t,args:s,tooltipPosition:"right",glyph:"info-sign",style:{position:"relative",marginLeft:"10px",display:"inline-block",width:24},helpText:"Password must contain at least 6 characters"})),p().createElement(c.FormControl,{ref:"newPassword",inputRef:e=>{this.newPasswordField=e},key:"newPassword",type:"password",name:"newPassword",autoComplete:"new-password",style:this.props.inputStyle,onChange:this.handleChange})),p().createElement(c.FormGroup,{validationState:this.isValidPassword()?"success":"error"},p().createElement(c.ControlLabel,null,p().createElement(m.Z,{msgId:"user.retypePwd"})," ",p().createElement("span",{style:{fontWeight:"bold"}},"*")),p().createElement(c.FormControl,{ref:"confirmPassword",inputRef:e=>{this.confirmPasswordField=e},key:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",style:this.props.inputStyle,onChange:this.handleChange})))})),R(this,"renderGeneral",(()=>p().createElement("div",{style:{clear:"both",marginTop:"10px"}},p().createElement(c.FormGroup,null,p().createElement(c.ControlLabel,null,p().createElement(m.Z,{msgId:"user.username"})," ",p().createElement("span",{style:{fontWeight:"bold"}},"*")),p().createElement(c.FormControl,{ref:"name",key:"name",type:"text",name:"name",readOnly:this.props.user&&this.props.user.id,style:this.props.inputStyle,onChange:this.handleChange,value:this.props.user&&this.props.user.name||""})),this.props.hidePasswordFields?null:this.renderPasswordFields(),p().createElement("select",{name:"role",style:this.props.inputStyle,onChange:this.handleChange,value:this.props.user&&this.props.user.role||""},p().createElement("option",{value:"ADMIN"},"ADMIN"),p().createElement("option",{value:"USER"},"USER")),p().createElement(c.FormGroup,null,p().createElement(c.ControlLabel,{style:{float:"left",marginRight:"10px"}},p().createElement(m.Z,{msgId:"users.enabled"})),p().createElement(c.Checkbox,{defaultChecked:this.props.user&&void 0!==this.props.user.enabled&&this.props.user.enabled,type:"checkbox",key:"enabled"+(this.props.user?this.props.user.enabled:"missing"),name:"enabled",onClick:e=>{this.props.onChange("enabled",!!e.target.checked)}})),p().createElement("div",{style:{fontStyle:"italic"}},p().createElement(m.Z,{msgId:"users.requiredFiedsMessage"}))))),R(this,"renderAttributes",(()=>this.props.attributes.map(((e,t)=>p().createElement(c.FormGroup,{key:"form-n-"+t,style:{marginTop:"10px"}},p().createElement(c.ControlLabel,null,e.name),p().createElement(c.FormControl,{ref:"attribute."+e.name,key:"attribute."+e.name,name:"attribute."+e.name,type:"text",style:this.props.inputStyle,onChange:this.handleChange,value:this.getAttributeValue(e.name)||""})))))),R(this,"renderSaveButtonContent",(()=>{let e=this.props.user&&this.props.user.status,t=this.props.user&&this.props.user.id?p().createElement(m.Z,{key:"text",msgId:"users.saveUser"}):p().createElement(m.Z,{key:"text",msgId:"users.createUser"}),s={error:t,success:t,modified:t,save:p().createElement(m.Z,{key:"text",msgId:"users.saveUser"}),saving:p().createElement(m.Z,{key:"text",msgId:"users.savingUser"}),saved:p().createElement(m.Z,{key:"text",msgId:"users.userSaved"}),creating:p().createElement(m.Z,{key:"text",msgId:"users.creatingUser"}),created:p().createElement(m.Z,{key:"text",msgId:"users.userCreated"})}[e]||t;return[this.isSaving()?p().createElement(M(),{key:"saving-spinner",spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}):null,s]})),R(this,"renderButtons",(()=>{let e=p().createElement(O.C,{status:this.props.user&&this.props.user.status,onClick:this.close});return[p().createElement(E.Z,{key:"save",bsSize:this.props.buttonSize,bsStyle:this.isSaved()?"success":"primary",onClick:()=>this.props.onSave(this.props.user),disabled:!this.isValid()||this.isSaving()},this.renderSaveButtonContent()),e]})),R(this,"renderGroups",(()=>p().createElement(j,{onUserGroupsChange:this.props.onChange,user:this.props.user,groups:this.props.groups}))),R(this,"renderError",(()=>{if(this.props.user&&"error"===this.props.user.status){let e=this.props.user&&this.props.user.lastError;return p().createElement(c.Alert,{key:"error",bsStyle:"warning"},p().createElement(m.Z,{msgId:"users.errorSaving"}),e&&e.statusText)}return null})),R(this,"close",(()=>{this.props.onClose(),this.newPasswordField.value="",this.confirmPasswordField.value=""})),R(this,"isMainPasswordValid",(e=>{const t={valid:!0,message:"user.passwordMessage",args:null};let s=e||this.props.user.newPassword||"";return""===s&&this.props.user&&this.props.user.id?t:s.length<this.props.minPasswordSize?{valid:!1,message:"user.passwordMinlenght",args:this.props.minPasswordSize}:t})),R(this,"isSaving",(()=>this.props.user&&"saving"===this.props.user.status)),R(this,"isSaved",(()=>this.props.user&&("saved"===this.props.user.status||"created"===this.props.user.status))),R(this,"isValid",(()=>{let e=this.props.user;return e&&e.name&&"modified"===e.status&&this.isValidPassword()})),R(this,"isValidPassword",(()=>{let e=this.props.user;return e&&this.isMainPasswordValid(e.newPassword).valid&&e.confirmPassword===e.newPassword})),R(this,"handleChange",(e=>{this.props.onChange(e.target.name,e.target.value)}))}render(){return p().createElement(T.Z,{modal:!0,draggable:!1,maskLoading:this.props.user&&("loading"===this.props.user.status||"saving"===this.props.user.status),id:"mapstore-user-dialog",className:"user-edit-dialog",style:l()({},this.props.style,{display:this.props.show?"block":"none"})},p().createElement("span",{role:"header"},p().createElement("span",{className:"user-panel-title"},this.props.user&&this.props.user.name||p().createElement(m.Z,{msgId:"users.newUser"})),p().createElement("button",{onClick:this.close,className:"login-panel-close close"},this.props.closeGlyph?p().createElement(c.Glyphicon,{glyph:this.props.closeGlyph}):p().createElement("span",null,p().createElement(c.Glyphicon,{glyph:"1-close"})))),p().createElement("div",{role:"body"},p().createElement(c.Tabs,{justified:!0,defaultActiveKey:1,onSelect:e=>{this.setState({key:e})},key:"tab-panel",id:"userDetails-tabs"},p().createElement(c.Tab,{eventKey:1,title:p().createElement(A,{tooltipId:"user.generalInformation",glyph:"user",style:{display:"block",padding:8}})},this.renderGeneral()),p().createElement(c.Tab,{eventKey:2,title:p().createElement(A,{tooltipId:"user.attributes",glyph:"info-sign",style:{display:"block",padding:8}})},this.renderAttributes()),p().createElement(c.Tab,{eventKey:3,title:p().createElement(A,{tooltipId:"groups",glyph:"1-group",style:{display:"block",padding:8}})},this.renderGroups()))),p().createElement("div",{role:"footer"},this.renderError(),this.renderButtons()))}}R(B,"propTypes",{user:i().object,groups:i().array,groupsStatus:i().string,show:i().bool,onClose:i().func,onChange:i().func,onSave:i().func,modal:i().bool,closeGlyph:i().string,style:i().object,buttonSize:i().string,inputStyle:i().object,attributes:i().array,minPasswordSize:i().number,hidePasswordFields:i().bool,buttonTooltip:i().oneOfType([i().string,i().element])}),R(B,"defaultProps",{user:{},onClose:()=>{},onChange:()=>{},onSave:()=>{},options:{},useModal:!0,closeGlyph:"",style:{},buttonSize:"small",includeCloseButton:!0,attributes:[{name:"email"},{name:"company"},{name:"notes"}],inputStyle:{height:"32px",width:"260px",marginTop:"3px",marginBottom:"20px",padding:"5px",border:"1px solid #078AA3"},minPasswordSize:6,hidePasswordFields:!1});const z=B,V=(0,d.connect)((e=>{const t=e&&e.users;return{modal:!0,show:t&&!!t.currentUser,user:t&&t.currentUser,groups:t&&t.groups,hidePasswordFields:t&&t.currentUser&&e.security&&e.security.user&&e.security.user.id===t.currentUser.id}}),(e=>(0,U.DE)({onChange:h.Sh.bind(null),onClose:h.uz.bind(null,null),onSave:h.JR.bind(null)},e)))(z);var D=s(719648);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},L.apply(this,arguments)}function W(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class K extends p().Component{constructor(){super(...arguments),W(this,"renderLoading",(()=>this.props.loading?p().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},p().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},p().createElement(m.Z,{msgId:"loading"}),p().createElement(M(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null)),W(this,"renderUsers",(e=>e.map((e=>{let t=[{onClick:()=>{this.props.onEdit(e)},glyph:"wrench",tooltip:(0,D.S$)(this.context.messages,"users.editUser")}];return e&&"GUEST"===e.role?t=[]:e.id!==this.props.myUserId&&t.push({onClick:()=>{this.props.onDelete(e&&e.id)},glyph:"remove-circle",tooltip:(0,D.S$)(this.context.messages,"users.deleteUser")}),p().createElement(c.Col,L({key:"user-"+e.id},this.props.colProps),p().createElement(S,{user:e,actions:t}))}))))}componentDidMount(){this.props.loadUsers()}render(){return p().createElement(c.Grid,{style:{position:"relative"},fluid:this.props.fluid},this.renderLoading(),p().createElement(c.Row,{key:"users"},this.renderUsers(this.props.users||[])),this.props.bottom)}}W(K,"propTypes",{loadUsers:i().func,onEdit:i().func,onDelete:i().func,myUserId:i().number,fluid:i().bool,users:i().array,loading:i().bool,bottom:i().node,colProps:i().object}),W(K,"contextTypes",{messages:i().object}),W(K,"defaultProps",{loadUsers:()=>{},onEdit:()=>{},onDelete:()=>{},fluid:!0,colProps:{xs:12,sm:6,md:4,lg:3,style:{marginBottom:"20px"}}});const H=K;var q=s(706558);const J=(0,d.connect)((e=>{if(!e.users)return{};let{start:t,limit:s,users:r,status:n,totalCount:a,searchText:l}=e.users,o=0;return r&&a&&(o=Math.ceil(t/s)),{page:o,pageSize:s,items:r,total:a,searchText:l,loading:"loading"===n}}),{onSelect:h.Rf},((e,t)=>({...e,onSelect:s=>{let r=e.pageSize*s,n=e.pageSize;t.onSelect(e.searchText,{params:{start:r,limit:n}})}})))(q.Z),Q=(0,d.connect)((e=>{const t=e&&e.users;return{users:t&&t.users,loading:t&&"loading"===t.status,stateProps:t&&t.stateProps,start:t&&t.start,limit:t&&t.limit,myUserId:e&&e.security&&e.security.user&&e.security.user.id}}),(e=>(0,U.DE)({loadUsers:h.Rf,onEdit:h.uz,onDelete:h.h8},e)),((e,t,s)=>l()({},e,t,s,{bottom:p().createElement(J,null),loadUsers:()=>{t.loadUsers(e&&e.searchText,{params:{start:e&&e.start||0,limit:e&&e.limit||12}})}})),{pure:!1})(H);function $(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class X extends p().Component{constructor(){super(...arguments),$(this,"onNew",(()=>{this.props.onNewUser()}))}render(){return p().createElement("div",null,p().createElement(g.Z,{className:this.props.className,splitTools:this.props.splitTools,isSearchClickable:this.props.isSearchClickable,hideOnBlur:this.props.hideOnBlur,placeholderMsgId:this.props.placeholderMsgId,onSearch:this.props.onSearch,onSearchReset:this.props.onSearchReset,onSearchTextChange:this.props.onSearchTextChange,typeAhead:this.props.typeAhead,searchText:this.props.searchText}),p().createElement(c.Grid,{style:{marginBottom:"10px"},fluid:!0},p().createElement("h1",{className:"usermanager-title"},p().createElement(m.Z,{msgId:"users.users"})),p().createElement(E.Z,{style:{marginRight:"10px"},bsStyle:"success",onClick:this.onNew}," ",p().createElement("span",null,p().createElement(c.Glyphicon,{glyph:"1-user-add"}),p().createElement(m.Z,{msgId:"users.newUser"})))),p().createElement(Q,null),p().createElement(V,null),p().createElement(k,null))}}$(X,"propTypes",{onNewUser:i().func,splitTools:i().bool,isSearchClickable:i().bool,className:i().string,hideOnBlur:i().bool,placeholderMsgId:i().string,typeAhead:i().bool,searchText:i().string,onSearch:i().func,onSearchReset:i().func,onSearchTextChange:i().func,start:i().number,limit:i().number}),$(X,"defaultProps",{className:"user-search",hideOnBlur:!1,isSearchClickable:!0,splitTools:!1,placeholderMsgId:"users.searchUsers",typeAhead:!1,searchText:"",start:0,limit:20,onSearch:()=>{},onSearchReset:()=>{},onSearchTextChange:()=>{},onNewUser:()=>{}});const Y={UserManagerPlugin:l()((0,d.connect)((e=>{let t=e&&e.users;return{start:t&&t.start,limit:t&&t.limit,searchText:t&&t.searchText&&n()(t.searchText,"*")||""}}),{onNewUser:h.uz.bind(null,{role:"USER",enabled:!0}),onSearchTextChange:h.uc,onSearch:h.Rf},((e,t,s)=>({...e,...t,...s,onSearchReset:s=>{let r=e.limit,n=s&&""!==s?"*"+s+"*":"*";t.onSearch(n,{params:{start:0,limit:r}})},onSearch:s=>{let r=e.limit,n=s&&""!==s?"*"+s+"*":"*";t.onSearch(n,{params:{start:0,limit:r}})}})))(X),{hide:!0,Manager:{id:"usermanager",name:"usermanager",position:1,priority:1,title:p().createElement(m.Z,{msgId:"users.manageUsers"}),glyph:"1-user-mod"}}),reducers:{users:s(272692).Z}}},272692:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(331325),n=s(956039),a=s(727418),l=s.n(a),o=s(630998),i=s.n(o);const u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{start:0,limit:12},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.Zd:return l()({},e,{searchText:t.searchText,status:t.status,users:"loading"===t.status?e.users:t.users,start:t.start,limit:t.limit,totalCount:"loading"===t.status?e.totalCount:t.totalCount});case r.XS:return l()({},e,{searchText:t.text});case r.Kt:{let s=t.status?{status:t.status,...t.user}:t.user;return e.currentUser&&t.user&&e.currentUser.id===t.user.id?l()({},e,{currentUser:l()({},e.currentUser,{status:t.status,...t.user})}):"loading"!==t.status&&"new"!==t.status&&t.status?e:l()({},e,{currentUser:s})}case r.Fu:{let s=t.key,r=e.currentUser;if(0===s.indexOf("attribute")){let e=(r.attribute||[]).concat(),n=s.split(".")[1],a=i()(e,(e=>e.name===n));a>=0?e[a]={name:n,value:t.newValue}:e.push({name:n,value:t.newValue}),r=l()({},r,{attribute:e})}else r=l()({},r,{[s]:t.newValue});return l()({},e,{currentUser:l()({},{...r,status:"modified"})})}case r.QN:{let s=e.currentUser;return l()({},e,{currentUser:l()({},{...s,...t.user,status:t.status,lastError:t.error})})}case r._x:return"deleted"===t.status||"cancelled"===t.status?l()({},e,{deletingUser:null}):l()({},e,{deletingUser:{id:t.id,status:t.status,error:t.error}});case r.BJ:return l()({},e,{groups:t.groups,groupsStatus:t.status,groupsError:t.error});case n.W6:return t.status===n.Ym?l()({},e,{groups:null,groupsStatus:null,groupsError:null}):e;case n.Nw:return t.status===n.TQ?l()({},e,{groups:null,groupsStatus:null,groupsError:null}):e;default:return e}}}}]);