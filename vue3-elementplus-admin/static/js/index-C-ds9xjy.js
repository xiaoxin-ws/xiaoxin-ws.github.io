const __vite__fileDeps=["./index-D-GkaG5E.js","./element-plus-DrflnUoy.js","./@vue-B-Waonw5.js","./lodash-es-C8dV3xF8.js","./async-validator-BTg-XjMW.js","./@vueuse-BCtRRPf6.js","./@element-plus-CVGZooO-.js","./@sxzz-CsO2-mKt.js","./@ctrl-r5W6hzzQ.js","./pinia-B53-1xNw.js","./vue-demi-Dq6ymT-8.js","./vue-router-BZRm6vnl.js","./index-YHrQbYPZ.js","./401-DyyPBFD0.js","./normalize.css-l0sNRNKZ.js","./pinia-plugin-persistedstate-Bts6f1YT.js","./nprogress-DEB_vomH.js","./@intlify-CSL1aoo-.js","./axios-Cm0UX6qg.js","./js-cookie-Cz0CWeBA.js","./vue-i18n-BbldGY7s.js","./vue-DPI5l5yA.js","./vue-color-kit-D0HP_CLW.js","./index-CP5Ysvz0.js","./sm-crypto-HirUZ8Wy.js","./jsbn-dWep3C2S.js","./404-DNYvUGoA.js","./index-BLFhVAEH.js","./Page-Di4ndW4F.js","./Page.vuevuetypescriptsetuptruenamePagelang-Cf2Ikygc.js","./Iframe.vuevuetypestyleindex0lang-CWVP8ZYk.js","./Iframe-DV1QeWCN.js","./index-HHju1G2J.js","./index-BdlpwgqQ.js","./index-BEUxSrE5.js","./index-RYi2Xpob.js","./index-DAxMKUNM.js","./index-CLLi7POd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as T,aa as st,e as q,F as nt,B as ot,k as it,ab as Ae,o as d,b as y,S as R,A as De,c as rt,a as at,u as A,O as Me,T as ct,aE as lt}from"./@vue-B-Waonw5.js";import"./normalize.css-l0sNRNKZ.js";import{E as mt,a as W,b as ht,c as dt}from"./element-plus-DrflnUoy.js";import{d as w,c as ut}from"./pinia-B53-1xNw.js";import{s as pt}from"./pinia-plugin-persistedstate-Bts6f1YT.js";import{c as ft,a as _t,u as gt}from"./vue-router-BZRm6vnl.js";import{N as D}from"./nprogress-DEB_vomH.js";import{a as G}from"./axios-Cm0UX6qg.js";import{a as Z}from"./js-cookie-Cz0CWeBA.js";import{l as kt}from"./lodash-es-C8dV3xF8.js";import{v as yt}from"./vue-i18n-BbldGY7s.js";import{s as wt}from"./vue-color-kit-D0HP_CLW.js";import{I as v}from"./@element-plus-CVGZooO-.js";import"./async-validator-BTg-XjMW.js";import"./@vueuse-BCtRRPf6.js";import"./@sxzz-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./vue-demi-Dq6ymT-8.js";import"./@intlify-CSL1aoo-.js";import"./vue-DPI5l5yA.js";let J,Q,M,x,a,z,xe,h,vt=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})(),w({id:"app",state:()=>({}),getters:{},actions:{}});let X,Y,V,C,ee,te,B,u,se,ne,oe,ie,re,ae,ce,b,le,me,E,N;X="modulepreload",Y=function(e,t){return new URL(e,t).href},V={},a=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(t.map(c=>{if(c=Y(c,s),c in V)return;V[c]=!0;const g=c.endsWith(".css"),tt=g?'[rel="stylesheet"]':"";if(s)for(let k=o.length-1;k>=0;k--){const S=o[k];if(S.href===c&&(!g||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${tt}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":X,g||(m.as="script",m.crossOrigin=""),m.href=c,r&&m.setAttribute("nonce",r),document.head.appendChild(m),g)return new Promise((k,S)=>{m.addEventListener("load",k),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},C=[{path:"/redirect",component:()=>a(()=>import("./index-D-GkaG5E.js").then(async e=>(await e.__tla,e)).then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),name:"Redirect",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},children:[{path:"/redirect/:path(.*)",name:"Redirect",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./index-YHrQbYPZ.js"),__vite__mapDeps([12,11,2]),import.meta.url),children:[]}]},{path:"/401",name:"401",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./401-DyyPBFD0.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([13,2,14,1,3,4,5,6,7,8,9,10,15,11,16,17,18,19,20,21,22]),import.meta.url),children:[]},{path:"/login",name:"Login",meta:{title:"\u767B\u5F55",is_bread:1,is_cache:1,is_full_screen:0,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./index-CP5Ysvz0.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([23,1,2,3,4,5,6,7,8,24,25,17,11,14,9,10,15,16,18,19,20,21,22]),import.meta.url),children:[]},{path:"/",name:"Layout",component:()=>a(()=>import("./index-D-GkaG5E.js").then(async e=>(await e.__tla,e)).then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),meta:{},redirect:"/dashboard",children:[]},{path:"/:pathMatch(.*)*",meta:{is_bread:1,is_cache:1,is_full_screen:1,is_link:1,is_tag:1,is_show:1,is_tag_fixed:1},component:()=>a(()=>import("./404-DNYvUGoA.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([26,2,14,1,3,4,5,6,7,8,9,10,15,11,16,17,18,19,20,21,22]),import.meta.url),children:[]}],ee={path:"/about",name:"About",meta:{title:"\u5173\u4E8E",icon:"icon-tiktok-color",sort:3},component:()=>a(()=>import("./index-BLFhVAEH.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8]),import.meta.url)},te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),B=(e,t)=>e in t,u=(e,t)=>()=>new Promise(s=>{e().then(n=>{let o="";t?o=t:o=(n.default.name||"admin")+"$"+Date.now();const i=T({name:o,render:function(){return st("div",{class:"layout-component"},[q(n.default)])}});s(i)})}),se=e=>Array.prototype.isPrototypeOf(e)&&e.length===0,ne=()=>{const e=document.getElementById("loader-wrapper");e&&(e.style.display="none")},oe=()=>a(()=>import("./Page-Di4ndW4F.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([28,29,2,30,9,10,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),ie={path:"/docs",name:"Docs",meta:{title:"\u6587\u6863",icon:"icon-tiktok-color",sort:2},component:oe,children:[{path:"/docs/element",name:"ElementPlus",meta:{title:"Element Plus Ui",icon:"icon-tiktok-color",sort:5,is_link:0,link:"https://element-plus.org/zh-CN/"},component:u(()=>a(()=>import("./Iframe-DV1QeWCN.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([31,30,9,10,2,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),"ElementPlus")},{path:"/docs/vue3_docs",name:"Vue3Docs",meta:{title:"Vue3 Docs",sort:3,icon:"icon-tiktok-color",is_link:0,link:"https://cn.vuejs.org/"},component:u(()=>a(()=>import("./Iframe-DV1QeWCN.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([31,30,9,10,2,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),"Vue3Docs")},{path:"/docs/vite",name:"ViteDocs",meta:{title:"Vite Docs",sort:4,icon:"icon-tiktok-color",is_link:0,link:"https://vitejs.cn/vite3-cn/"},component:u(()=>a(()=>import("./Iframe-DV1QeWCN.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([31,30,9,10,2,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),"ViteDocs")},{path:"/docs/node",name:"NodeDocs",meta:{title:"Node Docs",sort:4,icon:"icon-tiktok-color",is_link:0,link:"https://nodejs.org/en"},component:u(()=>a(()=>import("./Iframe-DV1QeWCN.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([31,30,9,10,2,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),"NodeDocs")}]},re=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),ae={path:"/dashboard",name:"Dashboard",meta:{title:"\u9996\u9875",icon:"icon-tiktok-color",sort:-1},component:()=>a(()=>import("./index-HHju1G2J.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8]),import.meta.url)},ce=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),b=()=>a(()=>import("./Page-Di4ndW4F.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([28,29,2,30,9,10,14,1,3,4,5,6,7,8,15,11,16,17,18,19,20,21,22]),import.meta.url),le={path:"/menus",component:b,name:"Menus",meta:{title:"\u83DC\u5355",icon:"icon-tiktok-color"},children:[{path:"/menus/menu2",component:()=>a(()=>import("./index-BdlpwgqQ.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu2",meta:{title:"menu2",icon:"icon-tiktok-color"}},{path:"/menus/menu1",component:b,name:"Menu1",meta:{title:"menu1",icon:"icon-tiktok-color"},children:[{path:"/menus/menu1/menu1-1",component:()=>a(()=>import("./index-BEUxSrE5.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-1",meta:{title:"menu1-1",icon:"icon-tiktok-color"}},{path:"/menus/menu1/menu1-2",component:b,redirect:"/menus/menu1/menu1-2/menu1-2-1",name:"Menu1-2",meta:{title:"menu1-2",icon:"icon-tiktok-color"},children:[{path:"/menus/menu1/menu1-2/menu1-2-1",component:()=>a(()=>import("./index-RYi2Xpob.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-2-1",meta:{title:"menu1-2-1",icon:"icon-tiktok-color"}},{path:"/menus/menu1/menu1-2/menu1-2-2",component:()=>a(()=>import("./index-DAxMKUNM.js"),__vite__mapDeps([36,1,2,3,4,5,6,7,8]),import.meta.url),name:"Menu1-2-2",meta:{title:"menu1-2-2",icon:"icon-tiktok-color"}}]},{path:"/menus/menu1/menu1-3",component:()=>a(()=>import("./index-CLLi7POd.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([37,1,2,3,4,5,6,7,8,14,9,10,15,11,16,17,18,19,20,21,22]),import.meta.url),name:"Menu1-3",meta:{title:"menu1-3",icon:"icon-tiktok-color"}}]}]},me=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),E=[],N=Object.assign({"../modules/about.ts":te,"../modules/docs.ts":re,"../modules/home.ts":ce,"../modules/other.ts":me}),Object.keys(N).forEach(e=>{E.push(N[e].default)}),D.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const ze=["/login"];function Ve(e){const t=h(),s=x();e.beforeEach(async(n,o,i)=>{var r,c;if(D.start(),document.title="\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"+((r=n.meta)!=null&&r.title?"-"+((c=n.meta)==null?void 0:c.title):""),n.path==="/login")return t.isLogin?i(o.fullPath):i();if(ze.includes(n.path))return i();if(!t.isLogin)return i({path:"/login",query:{redirect:n.fullPath}});if(t.roles.length<1)return await t.getInfo(),await s.getRoutes(),i({path:n.fullPath,replace:!0,query:n.query,hash:n.hash});i()}),e.afterEach(async()=>{D.done(),ne()})}const Ce=e=>({path:e.path,name:e.name,meta:window.$lodash.cloneDeep(e.meta)}),he=(e,t)=>{var n;if(e.matched&&e.matched.length>1)for(let o=0;o<e.matched.length;o++){const i=e.matched[o];t.add(i),((n=i.components)==null?void 0:n.default.name)=="Page"&&(e.matched.splice(o,1),he(e,t))}t.add(e.matched[e.matched.length-1]);const s=[...t].map(o=>Ce(o));e.meta.allPath=s};function Be(e){e.afterEach(t=>{const s=z();t.name!=="Redirect"&&s.addOne(t),he(t,new Set)})}function Ne(e){e.onError(t=>{console.log(t),D.done()})}function je(e){Ne(e),Ve(e),Be(e)}const p=ft({history:_t(),routes:[...C],strict:!0,scrollBehavior:()=>({left:0,top:0})});function $e(e){e.use(p),je(p)}function de(e){return e.sort((t,s)=>{var n,o;return Number((n=t.meta)==null?void 0:n.sort)-Number((o=s.meta)==null?void 0:o.sort)}).map(t=>(t.children&&de(t.children),t))}function Ke(){return[]}function ue(e){const t=[];return e.forEach(s=>{var o,i,r;const n=window.$lodash.cloneDeep(s);s.children&&s.children.length>0&&(n.children=ue(s.children)),((o=s.meta)==null?void 0:o.is_full_screen)==0?p.addRoute(n):p.addRoute("Layout",n),!((i=s.meta)!=null&&i.is_show)||((r=s.meta)==null?void 0:r.is_show)==0?t.push(n):n.children&&n.children.length>0&&t.push(...n.children)}),t}let I,pe,j,O,l;x=w({id:"permission",state:()=>({menus:[],constantRoutes:[],asyncRoutes:[]}),getters:{},actions:{initConstantRoutes(){this.constantRoutes.length<1&&(this.constantRoutes=window.$lodash.cloneDeep(C))},initAsyncRoutes(){this.asyncRoutes.length<1&&(this.asyncRoutes=window.$lodash.cloneDeep(E))},initMenu(){this.initAsyncRoutes(),this.initConstantRoutes()},async getRoutes(){this.initMenu(),await h().getUserMenu();const e=Ke(),t=ue(E).concat(e);this.menus=de(t)},clearPermissionStore(){this.asyncRoutes.forEach(e=>{e.name&&gt().removeRoute(e.name)}),this.menus=[],this.asyncRoutes=[],this.$reset()}}}),I=[],pe=function(e,t,s,n){const o=n||"";for(let i=0;i<e.length;i++)if(e[i].url===t.url&&e[i].method===t.method){s(o);return}e.push({url:t.url,method:t.method})},j=function(e,t){for(let s=0;s<e.length;s++)if(e[s].url===t.url&&e[s].method===t.method){e.splice(s,1);break}},O="https://mock.apifox.com/m1/4327342-3970465-default/api",l=G.create({baseURL:O,timeout:8e3,headers:{}}),l.interceptors.request.use(e=>{let t;e.cancelToken=new G.CancelToken(function(n){t=n}),pe(I,e,t,`${e.url} \u8BF7\u6C42\u88AB\u4E2D\u65AD`);const s=h().access_token;return e.headers&&s&&(e.headers.Authorization="Bearer "+s),e},e=>(console.error(e),Promise.reject(e)));let $=!1,K=[];l.interceptors.response.use(e=>{const t=setTimeout(()=>{j(I,e.config),clearTimeout(t)},100),s=h(),n=e.data;if(n.code||(n.code=200),n.code==401){if(console.log(e.config.url),e.config.url=="/admin/authorize/refresh")return mt({title:"\u9000\u51FA\u767B\u5F55",message:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u561B\uFF1F",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(i,r,c)=>{i==="confirm"?(r.confirmButtonLoading=!0,r.confirmButtonText="Loading...",c(),s.loginOut().then(()=>{s.access_token="",s.refresh_token="",p.replace({path:"/login"}).then(()=>{W.success({message:"\u6CE8\u9500\u6210\u529F",duration:2e3}),s.clearUserStore()}).finally(()=>{r.confirmButtonLoading=!1})}).catch(()=>{r.confirmButtonLoading=!1})):c()}}),Promise.reject(n);const o=e.config;return $?new Promise(i=>{K.push(r=>{o.baseURL=O,o.headers&&s.isLogin&&r&&(o.headers.Authorization="Bearer "+r),i(l(o))})}):($=!0,s.refresh().then(()=>{const i=h(),r=i.access_token;return o.headers&&i.isLogin&&r&&(o.headers.Authorization="Bearer "+r),o.baseURL=O,K.forEach(c=>c(r)),K=[],l(o)}).catch(i=>{console.error("refreshToken error =>",i)}).finally(()=>{$=!1}))}else return n.code!=200?(W.error({message:n.message||"Error",duration:4*1e3}),Promise.reject(new Error(n.message||"Error"))):n},e=>{var t,s;if(G.isCancel(e))console.log(e.message);else{const n=setTimeout(()=>{j(I,e.config),clearTimeout(n)},100)}return console.log(e,e.message),W.error({message:((s=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:s.message)||(e==null?void 0:e.message)||"\u9519\u8BEF\u4E86",duration:4*1e3}),Promise.reject(e)});const He=e=>l.get("/authorize/captcha",{params:e}),Fe=e=>l.post("/authorize/login",e),Ue=()=>l.get("/authorize/info"),qe=()=>l.get("/authorize/menu"),We=e=>l.post("/authorize/logout",e),Ge=e=>l.post("/authorize/refresh",e),H="token";function fe(e){return Z.get(e||H)}function P(e,t){return Z.set(t||H,e)}function _e(e){return Z.remove(e||H)}let L,f,_,ge,ke,F;L="ADMIN_",xe=L+"README_INFO",f=L+"ACCESS_TOKEN",_=L+"REFRESH_TOKEN",h=w({id:"user",state:()=>({key:"",access_token:fe(f)||"",refresh_token:fe(_)||"",avatar:"",username:"",userInfo:{},roles:[],perms:[]}),getters:{isLogin(e){return!!e.access_token}},actions:{async getVerify(){const e=await He({key:this.key});return this.key=e.data.key,e.data},refresh(){const e=this;return new Promise((t,s)=>{Ge({refresh_token:e.refresh_token,access_token:e.access_token}).then(n=>{e.access_token=n.data.access_token,e.refresh_token=n.data.refresh_token,P(e.access_token,f),P(e.refresh_token,_),t(e.access_token)}).catch(n=>{s(n)})})},login(e){e.key=this.key;const t=this;return new Promise((s,n)=>{Fe(e).then(o=>{t.access_token=o.data.access_token,t.refresh_token=o.data.refresh_token,P(t.access_token,f),P(t.refresh_token,_),s(o)}).catch(o=>{n(o)})})},async getInfo(){this.key="";const e=await Ue();return e!=null&&e.data&&se(e.data.roles)||(this.userInfo=e.data,this.avatar=e.data.avatar,this.username=e.data.username,this.roles=e.data.roles,this.perms=e.data.perms||[]),e},async getUserMenu(){const{data:e}=await qe();return e},loginOut(){const e=this;return new Promise((t,s)=>{We({refresh_token:e.refresh_token,access_token:e.access_token}).then(n=>{t(n)}).catch(n=>{s(n)})})},clearUserStore(){_e(f),_e(_),z().clearAll(),x().clearPermissionStore(),this.access_token="",this.refresh_token="",this.avatar="",this.username="",this.roles=[],this.perms=[],this.$reset()}}}),ge=(e,t)=>{if(t==0)return{r:e.r,g:e.g,b:e.b,a:e.a,hex:`#${e.r.toString(16)}${e.g.toString(16)}${e.b.toString(16)}`};let s=parseInt(e.r),n=parseInt(e.g),o=parseInt(e.b);return s+=Math.round(t*(255-s)),n+=Math.round(t*(255-n)),o+=Math.round(t*(255-o)),{r:s,g:n,b:o,a:e.a,hex:`#${s.toString(16)}${n.toString(16)}${o.toString(16)}`}},ke=e=>{const t=[];for(let s=0;s<=9;s++){const n=ge(e,Number((s/10).toFixed(2)));t.push(n),s==0?document.documentElement.style.setProperty("--el-color-primary",n.hex):s==1?document.documentElement.style.setProperty("--el-color-primary-dark-2",n.hex):document.documentElement.style.setProperty("--el-color-primary-light-"+s,n.hex)}return t},M=w({id:"setting",state:()=>({openSetting:!1,layoutType:"defaults",isDark:!1,isGrey:!1,isInvert:!1,collapse:!1,showBreadcrumb:!0,showAside:!0,showAsidePane:!1,showFooter:!0,showTags:!0,device:"",locale:"",size:"",theme:null}),getters:{},actions:{initSetting(){this.theme&&this.setTheme(this.theme),this.setLayoutType(this.layoutType),this.setIsDark(this.isDark),this.setIsGrey(this.isGrey),this.setIsInvert(this.isInvert)},updateSettings(e){this.$patch(e)},setOpenSetting(){this.openSetting=!this.openSetting},setCollapsed(e){this.collapse=e},setLayoutType(e){this.layoutType=e},setIsDark(e){this.isDark=e,this.isDark?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},updateFilter(){let e="";this.isGrey?e+="grayscale(1) ":e+="grayscale(0) ",this.isInvert?e+="invert(80%)":e+="invert(0)",e=e.trim(),document.body.style.filter=e},setIsGrey(e){this.isGrey=e,this.updateFilter()},setIsInvert(e){this.isInvert=e,this.updateFilter()},setShowFooter(e){this.showFooter=e},setShowTags(e){this.showTags=e},setTheme(e){this.theme=e,ke(this.theme)}},persist:{key:"piniaStore",storage:localStorage}}),z=w({id:"keeptag",state:()=>({tags:[],keeps:[],iframes:[],routerPath:[]}),getters:{getKeeps(){return this.keeps},getTags(){return this.tags},getIframes(){return this.iframes}},actions:{setRouterPath(e){this.routerPath=e},setKeeps(e){this.keeps=e},addOneKeeps(e){const t=e.matched[e.matched.length-1].components.default.name;!this.keeps.includes(t)&&t&&t!="component"&&this.keeps.push(t)},delLeftKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(t+1,-1)},delRightKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(0,t-1)},delOneKeeps(e){const t=this.keeps.indexOf(e);t>-1&&this.keeps.splice(t,1)},setTags(e){this.tags=e},addOneTags(e){this.tags.some(t=>t.name==e.name)||this.tags.push({meta:e.meta,path:e.path,name:e.name})},delLeftTags(e){const t=this.tags.findIndex(n=>n.name==e);let s=null;return t>-1&&(s=this.tags.splice(t+1,this.tags.length-1)),s},delRightTags(e){const t=this.tags.findIndex(n=>n.name==e);let s=null;return t>-1&&(s=this.tags.splice(0,t)),s},delOneTags(e){const t=this.tags.findIndex(s=>s.name==e.name);this.tags.splice(t,1)},setIframes(e){this.iframes=e},delLeftIframes(e){const t=this.iframes.findIndex(s=>s.name==e);t>-1&&this.iframes.splice(t+1,-1)},delRightIframes(e){const t=this.iframes.findIndex(s=>s.name==e);t>-1&&this.iframes.splice(0,t-1)},delOneIframes(e){const t=this.iframes.findIndex(s=>s.name==e.name);this.iframes.splice(t,1)},addOneIframes(e){e.meta.link&&(this.iframes.some(t=>t.name==e.name)||this.iframes.push({meta:e.meta,path:e.path,name:e.name}))},addOne(e){var t,s,n,o;(t=e.meta)!=null&&t.is_cache||this.addOneKeeps(e),(s=e.meta)!=null&&s.is_tag||this.addOneTags(e),!((n=e.meta)!=null&&n.is_link)&&((o=e.meta)!=null&&o.link)&&this.addOneIframes(e)},delOne(e){this.delOneTags(e),this.delOneKeeps(e.name),this.delOneIframes(e)},delKeepAndIframe(e){for(let t=0;t<e.length;t++){const s=e[t],n=this.keeps.findIndex(i=>i==s.name);n>-1&&this.keeps.splice(n,1);const o=this.iframes.findIndex(i=>i.name==s.name);o>-1&&this.iframes.splice(o,1)}},delLeft(e){const t=this.delLeftTags(e.name);t&&this.delKeepAndIframe(t)},delRight(e){const t=this.delRightTags(e.name);t&&this.delKeepAndIframe(t)},delPageOne(e){this.delOneKeeps(e.name),this.delOneIframes(e)},delOther(e){this.tags.splice(0,this.tags.length),this.addOneTags(e),this.keeps.splice(0,this.keeps.length),this.addOneKeeps(e),this.iframes.splice(0,this.iframes.length),this.addOneIframes(e)},clearAll(){this.tags.splice(0,this.tags.length),this.keeps.splice(0,this.keeps.length),this.iframes.splice(0,this.iframes.length),this.$reset()}}}),F=ut(),F.use(pt);const Ze=e=>{e.use(F)};function Je(){const e=M(),t=()=>document.body.getBoundingClientRect().width,s=r=>r<768,n=r=>r>768&&r<992,o=r=>r>1200,i=()=>{if(!document.hidden){const r=t();s(r)&&e.device!="mobile"?(e.updateSettings({device:"mobile"}),console.log(e.device)):n(r)&&e.device!="ipad"?(e.updateSettings({device:"ipad"}),console.log(e.device)):o(r)&&e.device!="pc"&&(e.updateSettings({device:"pc"}),console.log(e.device))}};nt(()=>{i(),window.addEventListener("resize",i)}),ot(()=>{window.removeEventListener("resize",i)}),it(()=>{i()})}let ye,U,we,ve,be,Ee,Ie,Oe,Pe,Le,Se,Te,Re;ye=T({__name:"App",setup(e){return Je(),M().initSetting(),(t,s)=>{const n=Ae("router-view"),o=ht;return d(),y(o,null,{default:R(()=>[q(n)]),_:1})}}}),U=e=>{const t=h(),s=t.roles;for(const i of s)if(i.role_code=="*")return!0;const n=t.perms;let o=!1;for(const i of e)if(n.includes(i)){o=!0;break}return o},we={mounted(e,t){U(t.value)||e.parentNode&&e.parentNode.removeChild(e)}},ve=()=>{window.$lodash=kt,window.$hasPerm=U},J={set(e,t){window.localStorage.setItem(e,JSON.stringify(t))},get(e){const t=window.localStorage.getItem(e);return JSON.parse(t)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},be={setting:{},login:{verify:"\u9A8C\u8BC1\u7801",login:"\u767B\u5F55",remember:"\u8BB0\u4F4F\u5BC6\u7801",forgetPassword:"\u5FD8\u8BB0\u5BC6\u7801?",usernamePlaceholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",verifyPlaceholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",passwordPlaceholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Ee={setting:{},login:{login:"Sign in",remember:"Remember Password",forgetPassword:"Forget password?",usernamePlaceholder:"Please input username",passwordPlaceholder:"Please input password"}},Ie={"zh-CN":be,en:Ee},Oe=yt.createI18n({globalInjection:!0,locale:J.get("lang")||"zh-CN",fallbackLocale:"en",messages:Ie,legacy:!1}),Pe=e=>{e.use(Oe)},Le=["xlink:href"],Se=T({name:"SvgIcon"}),Te=T({...Se,props:{name:{type:String,required:!0},className:{type:String,default:""},color:{type:String,default:""},size:{type:String,default:""}},setup(e){const t=e,s=De(()=>{if(t.name.startsWith("svg_"))return`#${t.name.substring(4,t.name.length)}`;if(t.name.startsWith("el_"))return t.name.substring(3,t.name.length)}),n=De(()=>t.className?"svg-icon "+t.className:"svg-icon");return(o,i)=>{const r=dt,c=Ae("WarningFilled");return e.name.startsWith("svg_")?(d(),y(r,{key:0,color:e.color,size:e.size,class:"web-icon"},{default:R(()=>[(d(),rt("svg",{"aria-hidden":"true",class:Me(A(n))},[at("use",{"xlink:href":A(s)},null,8,Le)],2))]),_:1},8,["color","size"])):e.name.startsWith("el_")?(d(),y(r,{key:1,color:e.color,size:e.size,class:"web-icon"},{default:R(()=>[(d(),y(ct(A(s)),{class:Me(A(n))},null,8,["class"]))]),_:1},8,["color","size"])):(d(),y(r,{key:2},{default:R(()=>[q(c)]),_:1}))}}}),Q=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s},Re=Q(Te,[["__scopeId","data-v-d8989c8e"]]);function Qe(e){e.component("SvgIcon",Re),e.component("ColorPicker",wt)}if(typeof window<"u"){let e=function(){var t=document.body,s=document.getElementById("__svg__icons__dom__");s||(s=document.createElementNS("http://www.w3.org/2000/svg","svg"),s.style.position="absolute",s.style.width="0",s.style.height="0",s.id="__svg__icons__dom__",s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),s.innerHTML='<symbol  aria-hidden="true" class="iconify iconify--majesticons" viewBox="0 0 24 24" id="icon-arrows-collapse-full-line"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15h-4m0 0v4m0-4 4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4 4-4M5 15h4m0 0v4m0-4-4 4" /></symbol><symbol  aria-hidden="true" class="iconify iconify--majesticons" viewBox="0 0 24 24" id="icon-arrows-expand-full"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19h4m0 0v-4m0 4-4-4M9 5H5m0 0v4m0-4 4 4m6-4h4m0 0v4m0-4-4 4M9 19H5m0 0v-4m0 4 4-4" /></symbol><symbol  viewBox="0 0 512 512" id="icon-CloseCircleOutline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320 192 192M192 320l128-128" /></symbol><symbol  aria-hidden="true" class="iconify iconify--ant-design" viewBox="0 0 1024 1024" id="icon-DownOutlined"><path fill="currentColor" d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></symbol><symbol viewBox="0 0 1024 1024" id="icon-menu-fold-outlined"><path fill="currentColor" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9 271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z" /></symbol><symbol viewBox="0 0 1024 1024" id="icon-menu-unfold-outlined"><path fill="currentColor" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1 298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-RefreshFilled"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor" /></symbol><symbol  aria-hidden="true" class="iconify iconify--logos" viewBox="0 0 256 198" id="icon-vue"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" /><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" /><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" /></symbol>',t.insertBefore(s,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const Xe=e=>{for(const t in v)t=="default"&&B(t,v)?e.component("ElIcon",v[t]):B(t,v)&&e.component(t,v[t])};function Ye(e){e.directive("perm",we)}function et(e){ve(),Qe(e),Ye(e),Pe(e),Xe(e)}(()=>{const e=lt(ye);et(e),Ze(e),$e(e),e.mount("#app")})()})();export{J as L,Q as _,vt as __tla,M as a,x as b,a as c,z as d,xe as l,h as u};
