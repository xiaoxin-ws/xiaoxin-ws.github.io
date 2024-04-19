import{d as v,o as c,b as h,e as a,_ as F,X as C,A as _,W as j,$ as M,bE as P,r as x,K as T,Q as I,bh as z,ab as f,H as D}from"./@vue-B-Waonw5.js";/*!
* vue-color-kit v1.0.6
* (c) 2023 
* @license MIT
*/function b(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=K(e):/rgb/.test(e)?t=N(e):typeof e=="string"?t=N(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r,g:o,b:l,a:i}=t,{h:s,s:n,v:u}=X(t);return{r,g:o,b:l,a:i===void 0?1:i,h:s,s:n,v:u}}function w(e){const t=document.createElement("canvas"),r=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,r.fillStyle="#ffffff",r.fillRect(0,0,o,o),r.fillStyle="#ccd5db",r.fillRect(0,0,e,e),r.fillRect(e,e,e,e),t}function H(e,t,r,o,l,i){const s=e==="l",n=t.createLinearGradient(0,0,s?r:0,s?0:o);n.addColorStop(.01,l),n.addColorStop(.99,i),t.fillStyle=n,t.fillRect(0,0,r,o)}function W({r:e,g:t,b:r},o){const l=s=>("0"+Number(s).toString(16)).slice(-2),i=`#${l(e)}${l(t)}${l(r)}`;return o?i.toUpperCase():i}function K(e){e=e.slice(1);const t=r=>parseInt(r,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function N(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function X({r:e,g:t,b:r}){e=e/255,t=t/255,r=r/255;const o=Math.max(e,t,r),l=Math.min(e,t,r),i=o-l;let s=0;o===l?s=0:o===e?t>=r?s=60*(t-r)/i:s=60*(t-r)/i+360:o===t?s=60*(r-e)/i+120:o===r&&(s=60*(e-t)/i+240),s=Math.floor(s);let n=parseFloat((o===0?0:1-l/o).toFixed(2)),u=parseFloat(o.toFixed(2));return{h:s,s:n,v:u}}var $=v({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,r=e.getContext("2d");e.width=t,e.height=t,r.fillStyle=this.color,r.fillRect(0,0,t,t),H("l",r,t,t,"#FFFFFF","rgba(255,255,255,0)"),H("p",r,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:r}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),l=s=>{let n=s.clientX-r,u=s.clientY-t;n<0&&(n=0),u<0&&(u=0),n>this.size&&(n=this.size),u>this.size&&(u=this.size),this.slideSaturationStyle={left:n-5+"px",top:u-5+"px"};const d=o.getImageData(Math.min(n,this.size-1),Math.min(u,this.size-1),1,1),[p,g,m]=d.data;this.$emit("selectSaturation",{r:p,g,b:m})};l(e);const i=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",i)}}});const Y={ref:"canvasSaturation"};function G(e,t,r,o,l,i){return c(),h("div",{class:"saturation",onMousedown:t[1]||(t[1]=F((...s)=>e.selectSaturation&&e.selectSaturation(...s),["prevent","stop"]))},[a("canvas",Y,null,512),a("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}$.render=G,$.__file="src/color/Saturation.vue";var A=v({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,r=this.height,o=e.getContext("2d");e.width=t,e.height=r;const l=o.createLinearGradient(0,0,0,r);l.addColorStop(0,"#FF0000"),l.addColorStop(.17*1,"#FF00FF"),l.addColorStop(.17*2,"#0000FF"),l.addColorStop(.17*3,"#00FFFF"),l.addColorStop(.17*4,"#00FF00"),l.addColorStop(.17*5,"#FFFF00"),l.addColorStop(1,"#FF0000"),o.fillStyle=l,o.fillRect(0,0,t,r)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),r=e.target.getContext("2d"),o=i=>{let s=i.clientY-t;s<0&&(s=0),s>this.height&&(s=this.height),this.slideHueStyle={top:s-2+"px"};const n=r.getImageData(0,Math.min(s,this.height-1),1,1),[u,d,p]=n.data;this.$emit("selectHue",{r:u,g:d,b:p})};o(e);const l=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}}});const U={ref:"canvasHue"};function J(e,t,r,o,l,i){return c(),h("div",{class:"hue",onMousedown:t[1]||(t[1]=F((...s)=>e.selectHue&&e.selectHue(...s),["prevent","stop"]))},[a("canvas",U,null,512),a("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}A.render=J,A.__file="src/color/Hue.vue";var B=v({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,r=this.height,o=this.alphaSize,l=w(o),i=e.getContext("2d");e.width=t,e.height=r,i.fillStyle=i.createPattern(l,"repeat"),i.fillRect(0,0,t,r),H("p",i,t,r,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),r=l=>{let i=l.clientY-t;i<0&&(i=0),i>this.height&&(i=this.height);let s=parseFloat((i/this.height).toFixed(2));this.$emit("selectAlpha",s)};r(e);const o=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)}}});const V={ref:"canvasAlpha"};function Q(e,t,r,o,l,i){return c(),h("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=F((...s)=>e.selectAlpha&&e.selectAlpha(...s),["prevent","stop"]))},[a("canvas",V,null,512),a("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}B.render=Q,B.__file="src/color/Alpha.vue";var E=v({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,r=this.height,o=this.alphaSize,l=w(o),i=e.getContext("2d");e.width=t,e.height=r,i.fillStyle=i.createPattern(l,"repeat"),i.fillRect(0,0,t,r),i.fillStyle=this.color,i.fillRect(0,0,t,r)}}});function q(e,t,r,o,l,i){return c(),h("canvas")}E.render=q,E.__file="src/color/Preview.vue";var L=v({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:r}=e,{top:o,left:l,width:i,height:s}=this.suckerCanvas.getBoundingClientRect(),n=t-l,u=r-o,d=this.suckerCanvas.getContext("2d").getImageData(Math.min(n,i-1),Math.min(u,s-1),1,1);let[p,g,m,k]=d.data;k=parseFloat((k/255).toFixed(2));const S=this.suckerPreview.style;Object.assign(S,{position:"absolute",left:t+20+"px",top:r-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${p}, ${g}, ${m}, ${k})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&r>=this.suckerArea[1]&&t<=this.suckerArea[2]&&r<=this.suckerArea[3]?S.display="":S.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:r,clientY:o}=t,{top:l,left:i,width:s,height:n}=e.getBoundingClientRect(),u=r-i,d=o-l,p=e.getContext("2d").getImageData(Math.min(u,s-1),Math.min(d,n-1),1,1);let[g,m,k,S]=p.data;S=parseFloat((S/255).toFixed(2)),this.$emit("selectSucker",{r:g,g:m,b:k,a:S})}))}}});const Z=a("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),ee={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},te=a("g",{fill:"none","fill-rule":"evenodd"},[a("g",{transform:"translate(1 1)","stroke-width":"4"},[a("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),a("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[a("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function re(e,t,r,o,l,i){return c(),h("div",null,[e.isSucking?C("v-if",!0):(c(),h("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...s)=>e.openSucker&&e.openSucker(...s))},[Z],2)),e.isSucking?(c(),h("svg",ee,[te])):C("v-if",!0)])}L.render=re,L.__file="src/color/Sucker.vue";var O=v({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor","inputFocus","inputBlur"],setup(e,{emit:t}){return{modelColor:_({get(){return e.color||""},set(r){t("inputColor",r)}}),handleFocus:r=>{t("inputFocus",r)},handleBlur:r=>{t("inputBlur",r)}}}});const se={class:"color-type"},oe={class:"name"};function ie(e,t,r,o,l,i){return c(),h("div",se,[a("span",oe,j(e.name),1),M(a("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.modelColor=s),class:"value",onFocus:t[2]||(t[2]=(...s)=>e.handleFocus&&e.handleFocus(...s)),onBlur:t[3]||(t[3]=(...s)=>e.handleBlur&&e.handleBlur(...s))},null,544),[[P,e.modelColor]])])}O.render=ie,O.__file="src/color/Box.vue";var R=v({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const r=x(),o=x([]),l=x();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),l.value=w(4).toDataURL(),T(()=>{i(r.value)});function i(n){if(!n)return;const u=o.value||[],d=u.indexOf(n);d>=0&&u.splice(d,1),u.length>=8&&(u.length=7),u.unshift(n),o.value=u||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(u))}function s(n){t("selectColor",n)}return{setColorsHistory:i,colorsHistory:o,color:r,imgAlphaBase64:l,selectColor:s}}});const le={class:"colors"},ne={key:0,class:"colors history"};function ae(e,t,r,o,l,i){return c(),h("div",null,[a("ul",le,[(c(!0),h(I,null,z(e.colorsDefault,s=>(c(),h("li",{key:s,class:"item",onClick:n=>e.selectColor(s)},[a("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),a("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(c(),h("ul",ne,[(c(!0),h(I,null,z(e.colorsHistory,s=>(c(),h("li",{key:s,class:"item",onClick:n=>e.selectColor(s)},[a("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),a("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))])):C("v-if",!0)])}R.render=ae,R.__file="src/color/Colors.vue";var y=v({components:{Saturation:$,Hue:A,Alpha:B,Preview:E,Sucker:L,Box:O,Colors:R},emits:["changeColor","openSucker","inputFocus","inputBlur"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return W(this.rgba,!0)}},created(){Object.assign(this,b(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:r,b:o,h:l,s:i,v:s}=b(e);Object.assign(this,{r:t,g:r,b:o,h:l,s:i,v:s}),this.setText()},handleFocus(e){this.$emit("inputFocus",e)},handleBlur(e){this.$emit("inputBlur",e)},selectHue(e){const{r:t,g:r,b:o,h:l,s:i,v:s}=b(e);Object.assign(this,{r:t,g:r,b:o,h:l,s:i,v:s}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:r,b:o,a:l,h:i,s,v:n}=b(e);Object.assign(this,{r:t,g:r,b:o,a:l,h:i,s,v:n}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:r,b:o,a:l,h:i,s,v:n}=b(e);Object.assign(this,{r:t,g:r,b:o,a:l,h:i,s,v:n}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:r,b:o,a:l,h:i,s,v:n}=b(e);Object.assign(this,{r:t,g:r,b:o,a:l,h:i,s,v:n}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:r,b:o,a:l,h:i,s,v:n}=b(e);Object.assign(this,{r:t,g:r,b:o,a:l,h:i,s,v:n}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const ue={class:"color-set"};function ce(e,t,r,o,l,i){const s=f("Saturation"),n=f("Hue"),u=f("Alpha"),d=f("Preview"),p=f("Sucker"),g=f("Box"),m=f("Colors");return c(),h("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[a("div",ue,[a(s,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),a(n,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),a(u,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),a("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[a(d,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?C("v-if",!0):(c(),h(p,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),a(g,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex,onInputFocus:e.handleFocus,onInputBlur:e.handleBlur},null,8,["color","onInputColor","onInputFocus","onInputBlur"]),a(g,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba,onInputFocus:e.handleFocus,onInputBlur:e.handleBlur},null,8,["color","onInputColor","onInputFocus","onInputBlur"]),a(m,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),C(" custom options "),D(e.$slots,"default")],6)}y.render=ce,y.__file="src/color/ColorPicker.vue",y.install=e=>{e.component(y.name,y)};export{y as s};