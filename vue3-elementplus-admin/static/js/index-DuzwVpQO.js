const __vite__fileDeps=["./index-CtKwNZNZ.js","./element-plus-7Zm_tKr4.js","./@vue-B-Waonw5.js","./lodash-es-C8dV3xF8.js","./async-validator-BTg-XjMW.js","./@vueuse-B6zKQeaq.js","./@element-plus-CVGZooO-.js","./@sxzz-CsO2-mKt.js","./@ctrl-r5W6hzzQ.js","./pinia-B53-1xNw.js","./vue-demi-Dq6ymT-8.js","./vue-router-BZRm6vnl.js","./index-YHrQbYPZ.js","./401-CMhrIIvB.js","./normalize.css-l0sNRNKZ.js","./pinia-plugin-persistedstate-Bts6f1YT.js","./nprogress-DEB_vomH.js","./@intlify-CSL1aoo-.js","./axios-Cm0UX6qg.js","./js-cookie-Cz0CWeBA.js","./vue-i18n-BbldGY7s.js","./vue-DPI5l5yA.js","./index-BYCq-IfH.js","./sm-crypto-HirUZ8Wy.js","./jsbn-dWep3C2S.js","./404-0shkZYHW.js","./index-CzjQPLgj.js","./Page-D6ImCxdG.js","./Page.vuevuetypescriptsetuptruenamePagelang-VDOfSc7u.js","./Iframe.vuevuetypestyleindex0lang-DiVIRjl3.js","./Iframe-Dktl2SLB.js","./index-DOHlhvhV.js","./index-CRKyf_st.js","./index-BMvL8Mrw.js","./index-UJL1R1i-.js","./index-Cxs62AGu.js","./index-CaWonGFE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as T,aa as et,e as q,F as tt,B as st,k as nt,ab as Te,o as h,b as y,S,A as Se,c as ot,a as it,u as A,O as Ae,T as rt,aE as at}from"./@vue-B-Waonw5.js";import"./normalize.css-l0sNRNKZ.js";import{E as ct,a as G,b as lt,c as mt}from"./element-plus-7Zm_tKr4.js";import{d as w,c as dt}from"./pinia-B53-1xNw.js";import{s as ht}from"./pinia-plugin-persistedstate-Bts6f1YT.js";import{c as ut,a as pt,u as ft}from"./vue-router-BZRm6vnl.js";import{N as D}from"./nprogress-DEB_vomH.js";import{a as W}from"./axios-Cm0UX6qg.js";import{a as Z}from"./js-cookie-Cz0CWeBA.js";import{l as _t}from"./lodash-es-C8dV3xF8.js";import{v as gt}from"./vue-i18n-BbldGY7s.js";import{I as v}from"./@element-plus-CVGZooO-.js";import"./async-validator-BTg-XjMW.js";import"./@vueuse-B6zKQeaq.js";import"./@sxzz-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./vue-demi-Dq6ymT-8.js";import"./@intlify-CSL1aoo-.js";import"./vue-DPI5l5yA.js";let J,Q,z,M,a,x,De,d,kt=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})(),w({id:"app",state:()=>({}),getters:{},actions:{}});let X,Y,V,B,ee,te,C,u,se,ne,oe,ie,re,ae,ce,E,le,me,b,N;X="modulepreload",Y=function(e,t){return new URL(e,t).href},V={},a=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(t.map(c=>{if(c=Y(c,s),c in V)return;V[c]=!0;const g=c.endsWith(".css"),Ye=g?'[rel="stylesheet"]':"";if(s)for(let k=o.length-1;k>=0;k--){const R=o[k];if(R.href===c&&(!g||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${Ye}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":X,g||(m.as="script",m.crossOrigin=""),m.href=c,r&&m.setAttribute("nonce",r),document.head.appendChild(m),g)return new Promise((k,R)=>{m.addEventListener("load",k),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},B=[{path:"/redirect",component:()=>a(()=>import("./index-CtKwNZNZ.js").then(async e=>(await e.__tla,e)).then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),name:"Redirect",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},children:[{path:"/redirect/:path(.*)",name:"Redirect",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./index-YHrQbYPZ.js"),__vite__mapDeps([12,11,2]),import.meta.url),children:[]}]},{path:"/401",name:"401",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./401-CMhrIIvB.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([13,2,14,1,3,4,5,6,7,8,9,10,15,11,16,17,18,19,20,21]),import.meta.url),children:[]},{path:"/login",name:"Login",meta:{title:"\u767B\u5F55",is_bread:1,is_cache:1,is_full_screen:0,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./index-BYCq-IfH.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([22,1,2,3,4,5,6,7,8,23,24,17,11,14,9,10,15,16,18,19,20,21]),import.meta.url),children:[]},{path:"/",name:"Layout",component:()=>a(()=>import("./index-CtKwNZNZ.js").then(async e=>(await e.__tla,e)).then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),meta:{},redirect:"/dashboard",children:[]},{path:"/:pathMatch(.*)*",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./404-0shkZYHW.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([25,2,14,1,3,4,5,6,7,8,9,10,15,11,16,17,18,19,20,21]),import.meta.url),children:[]}],ee={path:"/about",name:"About",meta:{title:"\u5173\u4E8E",icon:"icon-tiktok-color",sort:3},component:()=>a(()=>import("./index-CzjQPLgj.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8]),import.meta.url)},te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),C=(e,t)=>e in t,u=(e,t)=>()=>new Promise(s=>{e().then(n=>{let o="";t?o=t:o=(n.default.name||"admin")+"$"+Date.now();const i=T({name:o,render:function(){return et("div",{class:"layout-component"},[q(n.default)])}});s(i)})}),se=e=>Array.prototype.isPrototypeOf(e)&&e.length===0,ne=()=>{const e=document.getElementById("loader-wrapper");e&&(e.style.display="none")},oe=()=>a(()=>import("./Page-D6ImCxdG.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([27,28,2,29,9,10,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21]),import.meta.url),ie={path:"/docs",name:"Docs",meta:{title:"\u6587\u6863",icon:"icon-tiktok-color",sort:2},component:oe,children:[{path:"/docs/element",name:"ElementPlus",meta:{title:"Element Plus Ui",icon:"icon-tiktok-color",sort:5,is_link:0,link:"https://element-plus.org/zh-CN/"},component:u(()=>a(()=>import("./Iframe-Dktl2SLB.js"),__vite__mapDeps([30,29,2]),import.meta.url),"ElementPlus")},{path:"/docs/vue3_docs",name:"Vue3Docs",meta:{title:"Vue3 Docs",sort:3,icon:"icon-tiktok-color",is_link:0,link:"https://cn.vuejs.org/"},component:u(()=>a(()=>import("./Iframe-Dktl2SLB.js"),__vite__mapDeps([30,29,2]),import.meta.url),"Vue3Docs")},{path:"/docs/vite",name:"ViteDocs",meta:{title:"Vite Docs",sort:4,icon:"icon-tiktok-color",is_link:0,link:"https://vitejs.cn/vite3-cn/"},component:u(()=>a(()=>import("./Iframe-Dktl2SLB.js"),__vite__mapDeps([30,29,2]),import.meta.url),"ViteDocs")},{path:"/docs/node",name:"NodeDocs",meta:{title:"Node Docs",sort:4,icon:"icon-tiktok-color",is_link:0,link:"https://nodejs.org/en"},component:u(()=>a(()=>import("./Iframe-Dktl2SLB.js"),__vite__mapDeps([30,29,2]),import.meta.url),"NodeDocs")}]},re=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),ae={path:"/dashboard",name:"Dashboard",meta:{title:"\u9996\u9875",icon:"icon-tiktok-color",sort:-1},component:()=>a(()=>import("./index-DOHlhvhV.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8]),import.meta.url)},ce=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),E=()=>a(()=>import("./Page-D6ImCxdG.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([27,28,2,29,9,10,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21]),import.meta.url),le={path:"/menus",component:E,name:"Menus",meta:{title:"\u83DC\u5355",icon:"icon-tiktok-color"},children:[{path:"/menus/menu2",component:()=>a(()=>import("./index-CRKyf_st.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu2",meta:{title:"menu2",icon:"icon-tiktok-color"}},{path:"/menus/menu1",component:E,name:"Menu1",meta:{title:"menu1",icon:"icon-tiktok-color"},children:[{path:"/menus/menu1/menu1-1",component:()=>a(()=>import("./index-BMvL8Mrw.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-1",meta:{title:"menu1-1",icon:"icon-tiktok-color"}},{path:"/menus/menu1/menu1-2",component:E,redirect:"/menus/menu1/menu1-2/menu1-2-1",name:"Menu1-2",meta:{title:"menu1-2",icon:"icon-tiktok-color"},children:[{path:"/menus/menu1/menu1-2/menu1-2-1",component:()=>a(()=>import("./index-UJL1R1i-.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-2-1",meta:{title:"menu1-2-1",icon:"icon-tiktok-color"}},{path:"/menus/menu1/menu1-2/menu1-2-2",component:()=>a(()=>import("./index-Cxs62AGu.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-2-2",meta:{title:"menu1-2-2",icon:"icon-tiktok-color"}}]},{path:"/menus/menu1/menu1-3",component:()=>a(()=>import("./index-CaWonGFE.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([36,1,2,3,4,5,6,7,8,14,9,10,15,11,16,17,18,19,20,21]),import.meta.url),name:"Menu1-3",meta:{title:"menu1-3",icon:"icon-tiktok-color"}}]}]},me=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),b=[],N=Object.assign({"../modules/about.ts":te,"../modules/docs.ts":re,"../modules/home.ts":ce,"../modules/other.ts":me}),Object.keys(N).forEach(e=>{b.push(N[e].default)}),D.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const ze=["/login"];function Me(e){const t=d(),s=M();e.beforeEach(async(n,o,i)=>{var r,c;if(D.start(),document.title="\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"+((r=n.meta)!=null&&r.title?"-"+((c=n.meta)==null?void 0:c.title):""),n.path==="/login")return t.isLogin?i(o.fullPath):i();if(ze.includes(n.path))return i();if(!t.isLogin)return i({path:"/login",query:{redirect:n.fullPath}});if(t.roles.length<1)return await t.getInfo(),await s.getRoutes(),i({path:n.fullPath,replace:!0,query:n.query,hash:n.hash});i()}),e.afterEach(async()=>{D.done(),ne()})}const xe=e=>({path:e.path,name:e.name,meta:window.$lodash.cloneDeep(e.meta)}),de=(e,t)=>{var n;if(e.matched&&e.matched.length>1)for(let o=0;o<e.matched.length;o++){const i=e.matched[o];t.add(i),((n=i.components)==null?void 0:n.default.name)=="Page"&&(e.matched.splice(o,1),de(e,t))}t.add(e.matched[e.matched.length-1]);const s=[...t].map(o=>xe(o));e.meta.allPath=s};function Ve(e){e.afterEach(t=>{const s=x();t.name!=="Redirect"&&s.addOne(t),de(t,new Set)})}function Be(e){e.onError(t=>{console.log(t),D.done()})}function Ce(e){Be(e),Me(e),Ve(e)}const p=ut({history:pt(),routes:[...B],strict:!0,scrollBehavior:()=>({left:0,top:0})});function Ne(e){e.use(p),Ce(p)}function he(e){return e.sort((t,s)=>{var n,o;return Number((n=t.meta)==null?void 0:n.sort)-Number((o=s.meta)==null?void 0:o.sort)}).map(t=>(t.children&&he(t.children),t))}function je(){return[]}function ue(e){const t=[];return e.forEach(s=>{var o,i,r;const n=window.$lodash.cloneDeep(s);s.children&&s.children.length>0&&(n.children=ue(s.children)),((o=s.meta)==null?void 0:o.is_full_screen)==0?p.addRoute(n):p.addRoute("Layout",n),!((i=s.meta)!=null&&i.is_show)||((r=s.meta)==null?void 0:r.is_show)==0?t.push(n):n.children&&n.children.length>0&&t.push(...n.children)}),t}let O,pe,j,I,l;M=w({id:"permission",state:()=>({menus:[],constantRoutes:[],asyncRoutes:[]}),getters:{},actions:{initConstantRoutes(){this.constantRoutes.length<1&&(this.constantRoutes=window.$lodash.cloneDeep(B))},initAsyncRoutes(){this.asyncRoutes.length<1&&(this.asyncRoutes=window.$lodash.cloneDeep(b))},initMenu(){this.initAsyncRoutes(),this.initConstantRoutes()},async getRoutes(){this.initMenu(),await d().getUserMenu();const e=je(),t=ue(b).concat(e);this.menus=he(t)},clearPermissionStore(){this.asyncRoutes.forEach(e=>{e.name&&ft().removeRoute(e.name)}),this.menus=[],this.asyncRoutes=[],this.$reset()}}}),O=[],pe=function(e,t,s,n){const o=n||"";for(let i=0;i<e.length;i++)if(e[i].url===t.url&&e[i].method===t.method){s(o);return}e.push({url:t.url,method:t.method})},j=function(e,t){for(let s=0;s<e.length;s++)if(e[s].url===t.url&&e[s].method===t.method){e.splice(s,1);break}},I="https://mock.apifox.com/m1/4327342-3970465-default/api",l=W.create({baseURL:I,timeout:8e3,headers:{}}),l.interceptors.request.use(e=>{let t;e.cancelToken=new W.CancelToken(function(n){t=n}),pe(O,e,t,`${e.url} \u8BF7\u6C42\u88AB\u4E2D\u65AD`);const s=d().access_token;return e.headers&&s&&(e.headers.Authorization="Bearer "+s),e},e=>(console.error(e),Promise.reject(e)));let K=!1,$=[];l.interceptors.response.use(e=>{const t=setTimeout(()=>{j(O,e.config),clearTimeout(t)},100),s=d(),n=e.data;if(n.code||(n.code=200),n.code==401){if(console.log(e.config.url),e.config.url=="/admin/authorize/refresh")return ct({title:"\u9000\u51FA\u767B\u5F55",message:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u561B\uFF1F",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(i,r,c)=>{i==="confirm"?(r.confirmButtonLoading=!0,r.confirmButtonText="Loading...",c(),s.loginOut().then(()=>{s.access_token="",s.refresh_token="",p.replace({path:"/login"}).then(()=>{G.success({message:"\u6CE8\u9500\u6210\u529F",duration:2e3}),s.clearUserStore()}).finally(()=>{r.confirmButtonLoading=!1})}).catch(()=>{r.confirmButtonLoading=!1})):c()}}),Promise.reject(n);const o=e.config;return K?new Promise(i=>{$.push(r=>{o.baseURL=I,o.headers&&s.isLogin&&r&&(o.headers.Authorization="Bearer "+r),i(l(o))})}):(K=!0,s.refresh().then(()=>{const i=d(),r=i.access_token;return o.headers&&i.isLogin&&r&&(o.headers.Authorization="Bearer "+r),o.baseURL=I,$.forEach(c=>c(r)),$=[],l(o)}).catch(i=>{console.error("refreshToken error =>",i)}).finally(()=>{K=!1}))}else return n.code!=200?(G.error({message:n.message||"Error",duration:4*1e3}),Promise.reject(new Error(n.message||"Error"))):n},e=>{var t,s;if(W.isCancel(e))console.log(e.message);else{const n=setTimeout(()=>{j(O,e.config),clearTimeout(n)},100)}return console.log(e,e.message),G.error({message:((s=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:s.message)||(e==null?void 0:e.message)||"\u9519\u8BEF\u4E86",duration:4*1e3}),Promise.reject(e)});const Ke=e=>l.get("/authorize/captcha",{params:e}),$e=e=>l.post("/authorize/login",e),He=()=>l.get("/authorize/info"),Ue=()=>l.get("/authorize/menu"),Fe=e=>l.post("/authorize/logout",e),qe=e=>l.post("/authorize/refresh",e),H="token";function fe(e){return Z.get(e||H)}function L(e,t){return Z.set(t||H,e)}function _e(e){return Z.remove(e||H)}let P,f,_,U;P="ADMIN_",De=P+"README_INFO",f=P+"ACCESS_TOKEN",_=P+"REFRESH_TOKEN",d=w({id:"user",state:()=>({key:"",access_token:fe(f)||"",refresh_token:fe(_)||"",avatar:"",username:"",userInfo:{},roles:[],perms:[]}),getters:{isLogin(e){return!!e.access_token}},actions:{async getVerify(){const e=await Ke({key:this.key});return this.key=e.data.key,e.data},refresh(){const e=this;return new Promise((t,s)=>{qe({refresh_token:e.refresh_token,access_token:e.access_token}).then(n=>{e.access_token=n.data.access_token,e.refresh_token=n.data.refresh_token,L(e.access_token,f),L(e.refresh_token,_),t(e.access_token)}).catch(n=>{s(n)})})},login(e){e.key=this.key;const t=this;return new Promise((s,n)=>{$e(e).then(o=>{t.access_token=o.data.access_token,t.refresh_token=o.data.refresh_token,L(t.access_token,f),L(t.refresh_token,_),s(o)}).catch(o=>{n(o)})})},async getInfo(){this.key="";const e=await He();return e!=null&&e.data&&se(e.data.roles)||(this.userInfo=e.data,this.avatar=e.data.avatar,this.username=e.data.username,this.roles=e.data.roles,this.perms=e.data.perms||[]),e},async getUserMenu(){const{data:e}=await Ue();return e},loginOut(){const e=this;return new Promise((t,s)=>{Fe({refresh_token:e.refresh_token,access_token:e.access_token}).then(n=>{t(n)}).catch(n=>{s(n)})})},clearUserStore(){_e(f),_e(_),x().clearAll(),M().clearPermissionStore(),this.access_token="",this.refresh_token="",this.avatar="",this.username="",this.roles=[],this.perms=[],this.$reset()}}}),z=w({id:"setting",state:()=>({openSetting:!1,layoutType:"defaults",isDark:!1,isGrey:!1,isInvert:!1,collapse:!1,showBreadcrumb:!0,showAside:!0,showAsidePane:!1,device:"",locale:"",size:"",theme:""}),getters:{},actions:{initSetting(){this.setLayoutType(this.layoutType),this.setIsDark(this.isDark),this.setIsGrey(this.isGrey),this.setIsInvert(this.isInvert)},updateSettings(e){this.$patch(e)},setOpenSetting(){this.openSetting=!this.openSetting},setCollapsed(e){this.collapse=e},setLayoutType(e){this.layoutType=e},setIsDark(e){this.isDark=e,this.isDark?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},updateFilter(){let e="";this.isGrey?e+="grayscale(1) ":e+="grayscale(0) ",this.isInvert?e+="invert(80%)":e+="invert(0)",e=e.trim(),document.body.style.filter=e},setIsGrey(e){this.isGrey=e,this.updateFilter()},setIsInvert(e){this.isInvert=e,this.updateFilter()}},persist:{key:"piniaStore",storage:localStorage}}),x=w({id:"keeptag",state:()=>({tags:[],keeps:[],iframes:[],routerPath:[]}),getters:{getKeeps(){return this.keeps},getTags(){return this.tags},getIframes(){return this.iframes}},actions:{setRouterPath(e){this.routerPath=e},setKeeps(e){this.keeps=e},addOneKeeps(e){const t=e.matched[e.matched.length-1].components.default.name;!this.keeps.includes(t)&&t&&t!="component"&&this.keeps.push(t)},delLeftKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(t+1,-1)},delRightKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(0,t-1)},delOneKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(t,1)},setTags(e){this.tags=e},addOneTags(e){this.tags.some(t=>t.name==e.name)||this.tags.push({meta:e.meta,path:e.path,name:e.name})},delLeftTags(e){const t=this.tags.findIndex(n=>n.name==e);let s=null;return t>-1&&(s=this.tags.splice(t+1,this.tags.length-1)),s},delRightTags(e){const t=this.tags.findIndex(n=>n.name==e);let s=null;return t>-1&&(s=this.tags.splice(0,t)),s},delOneTags(e){const t=this.tags.findIndex(s=>s.name==e.name);this.tags.splice(t,1)},setIframes(e){this.iframes=e},delLeftIframes(e){const t=this.iframes.findIndex(s=>s.name==e);t>-1&&this.iframes.splice(t+1,-1)},delRightIframes(e){const t=this.iframes.findIndex(s=>s.name==e);t>-1&&this.iframes.splice(0,t-1)},delOneIframes(e){const t=this.iframes.findIndex(s=>s.name==e.name);this.iframes.splice(t,1)},addOneIframes(e){e.meta.link&&(this.iframes.some(t=>t.name==e.name)||this.iframes.push({meta:e.meta,path:e.path,name:e.name}))},addOne(e){var t,s,n,o;(t=e.meta)!=null&&t.is_cache||this.addOneKeeps(e),(s=e.meta)!=null&&s.is_tag||this.addOneTags(e),!((n=e.meta)!=null&&n.is_link)&&((o=e.meta)!=null&&o.link)&&this.addOneIframes(e)},delOne(e){this.delOneTags(e),this.delOneKeeps(e.name),this.delOneIframes(e)},delKeepAndIframe(e){for(let t=0;t<e.length;t++){const s=e[t],n=this.keeps.findIndex(i=>i==s.name);n>-1&&this.keeps.splice(n,1);const o=this.iframes.findIndex(i=>i.name==s.name);o>-1&&this.iframes.splice(o,1)}},delLeft(e){const t=this.delLeftTags(e.name);t&&this.delKeepAndIframe(t)},delRight(e){const t=this.delRightTags(e.name);t&&this.delKeepAndIframe(t)},delPageOne(e){this.delOneKeeps(e.name),this.delOneIframes(e)},delOther(e){this.tags.splice(0,this.tags.length),this.addOneTags(e),this.keeps.splice(0,this.keeps.length),this.addOneKeeps(e),this.iframes.splice(0,this.iframes.length),this.addOneIframes(e)},clearAll(){this.tags.splice(0,this.tags.length),this.keeps.splice(0,this.keeps.length),this.iframes.splice(0,this.iframes.length),this.$reset()}}}),U=dt(),U.use(ht);const Ge=e=>{e.use(U)};function We(){const e=z(),t=()=>document.body.getBoundingClientRect().width,s=r=>r<768,n=r=>r>768&&r<992,o=r=>r>1200,i=()=>{if(!document.hidden){const r=t();s(r)&&e.device!="mobile"?(e.updateSettings({device:"mobile"}),console.log(e.device)):n(r)&&e.device!="ipad"?(e.updateSettings({device:"ipad"}),console.log(e.device)):o(r)&&e.device!="pc"&&(e.updateSettings({device:"pc"}),console.log(e.device))}};tt(()=>{window.addEventListener("resize",i)}),st(()=>{window.removeEventListener("resize",i)}),nt(()=>{i()})}let ge,F,ke,ye,we,ve,Ee,be,Oe,Ie,Le,Pe,Re;ge=T({__name:"App",setup(e){return We(),z().initSetting(),(t,s)=>{const n=Te("router-view"),o=lt;return h(),y(o,null,{default:S(()=>[q(n)]),_:1})}}}),F=e=>{const t=d(),s=t.roles;for(const i of s)if(i.role_code=="*")return!0;const n=t.perms;let o=!1;for(const i of e)if(n.includes(i)){o=!0;break}return o},ke={mounted(e,t){F(t.value)||e.parentNode&&e.parentNode.removeChild(e)}},ye=()=>{window.$lodash=_t,window.$hasPerm=F},J={set(e,t){window.localStorage.setItem(e,JSON.stringify(t))},get(e){const t=window.localStorage.getItem(e);return JSON.parse(t)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},we={setting:{},login:{verify:"\u9A8C\u8BC1\u7801",login:"\u767B\u5F55",remember:"\u8BB0\u4F4F\u5BC6\u7801",forgetPassword:"\u5FD8\u8BB0\u5BC6\u7801?",usernamePlaceholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",verifyPlaceholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",passwordPlaceholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},ve={setting:{},login:{login:"Sign in",remember:"Remember Password",forgetPassword:"Forget password?",usernamePlaceholder:"Please input username",passwordPlaceholder:"Please input password"}},Ee={"zh-CN":we,en:ve},be=gt.createI18n({globalInjection:!0,locale:J.get("lang")||"zh-CN",fallbackLocale:"en",messages:Ee,legacy:!1}),Oe=e=>{e.use(be)},Ie=["xlink:href"],Le=T({name:"SvgIcon"}),Pe=T({...Le,props:{name:{type:String,required:!0},className:{type:String,default:""},color:{type:String,default:""},size:{type:String,default:""}},setup(e){const t=e,s=Se(()=>{if(t.name.startsWith("svg_"))return`#${t.name.substring(4,t.name.length)}`;if(t.name.startsWith("el_"))return t.name.substring(3,t.name.length)}),n=Se(()=>t.className?"svg-icon "+t.className:"svg-icon");return(o,i)=>{const r=mt,c=Te("WarningFilled");return e.name.startsWith("svg_")?(h(),y(r,{key:0,color:e.color,size:e.size,class:"web-icon"},{default:S(()=>[(h(),ot("svg",{"aria-hidden":"true",class:Ae(A(n))},[it("use",{"xlink:href":A(s)},null,8,Ie)],2))]),_:1},8,["color","size"])):e.name.startsWith("el_")?(h(),y(r,{key:1,color:e.color,size:e.size,class:"web-icon"},{default:S(()=>[(h(),y(rt(A(s)),{class:Ae(A(n))},null,8,["class"]))]),_:1},8,["color","size"])):(h(),y(r,{key:2},{default:S(()=>[q(c)]),_:1}))}}}),Q=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s},Re=Q(Pe,[["__scopeId","data-v-d8989c8e"]]);function Ze(e){e.component("SvgIcon",Re)}if(typeof window<"u"){let e=function(){var t=document.body,s=document.getElementById("__svg__icons__dom__");s||(s=document.createElementNS("http://www.w3.org/2000/svg","svg"),s.style.position="absolute",s.style.width="0",s.style.height="0",s.id="__svg__icons__dom__",s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),s.innerHTML='<symbol  aria-hidden="true" class="iconify iconify--majesticons" viewBox="0 0 24 24" id="icon-arrows-collapse-full-line"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15h-4m0 0v4m0-4 4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4 4-4M5 15h4m0 0v4m0-4-4 4" /></symbol><symbol  aria-hidden="true" class="iconify iconify--majesticons" viewBox="0 0 24 24" id="icon-arrows-expand-full"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19h4m0 0v-4m0 4-4-4M9 5H5m0 0v4m0-4 4 4m6-4h4m0 0v4m0-4-4 4M9 19H5m0 0v-4m0 4 4-4" /></symbol><symbol  viewBox="0 0 512 512" id="icon-CloseCircleOutline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320 192 192M192 320l128-128" /></symbol><symbol  aria-hidden="true" class="iconify iconify--ant-design" viewBox="0 0 1024 1024" id="icon-DownOutlined"><path fill="currentColor" d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></symbol><symbol viewBox="0 0 1024 1024" id="icon-menu-fold-outlined"><path fill="currentColor" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9 271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z" /></symbol><symbol viewBox="0 0 1024 1024" id="icon-menu-unfold-outlined"><path fill="currentColor" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1 298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-RefreshFilled"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor" /></symbol><symbol  aria-hidden="true" class="iconify iconify--logos" viewBox="0 0 256 198" id="icon-vue"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" /><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" /><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" /></symbol>',t.insertBefore(s,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const Je=e=>{for(const t in v)t=="default"&&C(t,v)?e.component("ElIcon",v[t]):C(t,v)&&e.component(t,v[t])};function Qe(e){e.directive("perm",ke)}function Xe(e){ye(),Ze(e),Qe(e),Oe(e),Je(e)}(()=>{const e=at(ge);Xe(e),Ge(e),Ne(e),e.mount("#app")})()})();export{J as L,Q as _,kt as __tla,z as a,M as b,a as c,x as d,De as l,d as u};