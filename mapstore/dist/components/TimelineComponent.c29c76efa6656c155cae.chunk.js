(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[4328],{875990:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_});var n=s(124852),i=s.n(n),o=s(45697),m=s.n(o),a=s(730381),r=s.n(a),l=s(816307),c=s.n(l),h=(s(414880),s(291966)),d=s.n(h),p=s(170735),u=s.n(p),g=s(3674),f=s.n(g),$=s(225325),y=s.n($),T=s(371843),I=s.n(T),b=s(966073),v=s.n(b),O=s(957557),D=s.n(O),C=s(328583),w=s.n(C),k=s(399790);function E(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}c().timeline.components.items.BackgroundItem.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("div"),this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-item-overflow",this.dom.box.appendChild(this.dom.frame),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.frame.appendChild(this.dom.content),this.dom.box["timeline-item"]=this,this.dirty=!0)};const x=()=>{},S=["currentTimeTick","click","contextmenu","doubleClick","groupDragged","changed","rangechange","rangechanged","select","drop","timechange","timechanged","mouseOver","mouseMove","mouseleave","itemover","itemout","mouseDown","mouseUp"],j={},A={};v()(S,(e=>(j[e]=m().func,A[`${e}Handler`]=x,[j,A])));const M={items:m().array,rangeItems:m().array,groups:m().array,options:m().object,selectionOptions:m().object,selection:m().array,customTimes:m().shape({datetime:m().instanceOf(Date),id:m().string}),animate:m().oneOfType([m().bool,m().object]),currentTime:m().oneOfType([m().string,m().instanceOf(Date),m().number])};class U extends i().Component{constructor(e){super(e),E(this,"setAllItems",(e=>{this.$el.setItems([...e||[],...this.props.rangeItems||[]])})),E(this,"setItems",(e=>{(e.length||0)+(this.props.rangeItems&&this.props.rangeItems.length||0)>0?this.$el.initialFitDone?this.setAllItems(e):(this.setAllItems(e),this.$el.emit("changed")):this.$el.initialRangeChangeDone&&this.setAllItems(e)})),this.state={customTimes:[]}}componentDidMount(){const{container:e}=this.refs;this.$el=new(c().Timeline)(e,void 0,this.props.options),S.forEach((e=>this.$el.on(e,this.props[`${e}Handler`]))),this.init()}shouldComponentUpdate(e){const{items:t,groups:s,options:n,selection:i,customTimes:o,readOnly:m,rangeItems:a}=this.props,r=t!==e.items,l=s!==e.groups,c=n!==e.options,h=o!==e.customTimes,d=i!==e.selection,p=m!==e.readOnly,u=a!==e.rangeItems;return r||l||c||h||d||p||u}componentDidUpdate(e){this.init(e)}componentWillUnmount(){this.$el.destroy()}render(){return i().createElement("div",{ref:"container",className:this.props.readOnly?"read-only-timeline":"",onMouseOut:this.props.onMouseOutHandler})}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:t,rangeItems:s,groups:n,options:i,selection:o,selectionOptions:m={},customTimes:a,animate:l=!0,currentTime:h,timelineLayers:p}=this.props;let g=i;l&&(g=D()(i,"start","end"),i.start&&i.end?this.$el.setWindow(i.start,i.end,{animation:l}):this.$el.setWindow(r()().subtract(1,"month"),r()().add(1,"month"),{animation:l})),this.$el.setOptions(g);const $=(0,k.$Z)(n,p);if($.length>0){const e=new(c().DataSet);e.add($),this.$el.setGroups(e)}if(t&&t!==e.items)this.setItems(t);else if(s!==e.rangeItems){const n=this.$el&&this.$el.itemsData&&this.$el.itemsData.getDataSet();if(n){const t=I()(s||[],e.rangeItems||[],"id"),i=u()(s||[],e.rangeItems||[],"id"),o=u()(e.rangeItems||[],s||[],"id");t.map((e=>n.update(e))),i.map((e=>n.add(e))),o.map((e=>{let{id:t}=e;return n.remove(t)}))}else this.setItems(t)}this.$el.setSelection(o,m),h&&this.$el.setCurrentTime(h);const T=f()(this.state.customTimes),b=f()(a),O=d()(b,T),C=d()(T,b),w=y()(T,b);v()(C,(e=>this.$el.removeCustomTime(e))),v()(O,(e=>{const t=a[e];this.$el.addCustomTime(t,e)})),v()(w,(e=>{const t=a[e];this.$el.setCustomTime(t,e)})),this.setState({customTimes:a}),(this.props.readOnly!==e.readOnly||this.props.readOnly&&O.length>0)&&v()(this.$el.customTimes,(t=>{this.props.readOnly?t.hammer.off("panstart panmove panend"):!0===e.readOnly&&(t.hammer.on("panstart",t._onDragStart.bind(t)),t.hammer.on("panmove",t._onDrag.bind(t)),t.hammer.on("panend",t._onDragEnd.bind(t)))}))}}E(U,"propTypes",w()(M,j)),E(U,"defaultProps",w()({items:[],groups:[],options:{},selection:[],customTimes:{}},A));const _=U}}]);