import{p as z,m as le,w as te,c as se,n as ne,o as oe,x as ie}from"./element-plus-7Zm_tKr4.js";import{d as S,r as y,w as G,ab as H,o as m,c as k,e,S as t,a as s,Q as re,bh as ue,O as J,u as r,b as P,X as K,W as ce,n as U,A as de,$ as B,a0 as $}from"./@vue-B-Waonw5.js";import{b as pe,u as me}from"./vue-router-BZRm6vnl.js";import{L as he,_ as ve,__tla as fe}from"./index-CtKwNZNZ.js";import{_ as _e,a as ge,b as we,c as Ce,W as be,__tla as ye}from"./WebFooter-8omUefdi.js";import{_ as Le,__tla as Ae}from"./Page.vuevuetypescriptsetuptruenamePagelang-VDOfSc7u.js";import{b as xe,a as Se,__tla as ke}from"./index-DuzwVpQO.js";import{s as V}from"./pinia-B53-1xNw.js";import"./lodash-es-C8dV3xF8.js";import"./async-validator-BTg-XjMW.js";import"./@vueuse-B6zKQeaq.js";import"./@element-plus-CVGZooO-.js";import"./@sxzz-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./Iframe.vuevuetypestyleindex0lang-DiVIRjl3.js";import"./normalize.css-l0sNRNKZ.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";import"./nprogress-DEB_vomH.js";import"./@intlify-CSL1aoo-.js";import"./axios-Cm0UX6qg.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-BbldGY7s.js";import"./vue-DPI5l5yA.js";import"./vue-demi-Dq6ymT-8.js";let Y,Pe=Promise.all([(()=>{try{return fe}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let I,M,O,T,Z,F,N,Q,W,j,q,D,E;I="data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.37754%2016.9795L12.7498%209.43027C14.7163%207.41663%2017.9428%207.37837%2019.9564%209.34482C19.9852%209.37297%2020.0137%209.40145%2020.0418%209.43027L20.1221%209.51243C22.1049%2011.5429%2022.1049%2014.7847%2020.1221%2016.8152L12.7498%2024.3644C10.7834%2026.378%207.55686%2026.4163%205.54322%2024.4498C5.5144%2024.4217%205.48592%2024.3932%205.45777%2024.3644L5.37754%2024.2822C3.39468%2022.2518%203.39468%2019.0099%205.37754%2016.9795Z'%20fill='%2312D2AC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.0479%209.43034L27.3399%2016.8974C29.3674%2018.9735%2029.3674%2022.2883%2027.3399%2024.3644C25.3735%2026.3781%2022.147%2026.4163%2020.1333%2024.4499C20.1045%2024.4217%2020.076%2024.3933%2020.0479%2024.3644L12.7558%2016.8974C10.7284%2014.8213%2010.7284%2011.5065%2012.7558%209.43034C14.7223%207.4167%2017.9488%207.37844%2019.9624%209.34489C19.9912%209.37304%2020.0197%209.40152%2020.0479%209.43034Z'%20fill='%23307AF2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.1321%209.52163L23.6851%2013.1599L16.3931%2020.627L9.10103%2013.1599L12.6541%209.52163C14.6707%207.45664%2017.9794%207.4174%2020.0444%209.434C20.074%209.46286%2020.1032%209.49207%2020.1321%209.52163Z'%20fill='%230057FE'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='26'%20height='19'%20fill='white'%20transform='translate(3.5%207)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",M={class:"side-nav"},O=s("div",{class:"web-logo"},[s("img",{src:I,alt:""})],-1),T={class:"nav"},Z=["onClick"],F={class:"nav-content"},N={class:"nav-title"},Q=S({name:"SideNav"}),W=S({...Q,props:{menus:{type:Object,required:!0}},emits:["navChange"],setup(L,{emit:A}){const o=L,f=A,h=y([]),u=y(0),c=y(),v=pe(),x=()=>{const n=o.menus.findIndex(l=>v.meta.allPath?v.meta.allPath.find(a=>l.path==a.path&&l):-1);return u.value=n,c.value&&(c.value.style.top=`${h.value[n].offsetTop}px`),n},_=()=>{U(()=>{f("navChange",o.menus[x()],-1)})};_();const d=n=>l=>{l&&(h.value[n]=l)},g=(n,l)=>{u.value!=l&&U(()=>{u.value=l,c.value&&(c.value.style.top=`${h.value[l].offsetTop}px`),f("navChange",n,l)})};return G(()=>v.fullPath,()=>{_()}),(n,l)=>{const a=H("SvgIcon"),w=z;return m(),k("div",M,[O,e(w,{class:"nav-scrollbar"},{default:t(()=>[s("ul",T,[(m(!0),k(re,null,ue(L.menus,(i,p)=>{var C,b;return m(),k("li",{class:J(["nav-item",p==r(u)?"nav-item-active":""]),key:p,onClick:R=>g(i,p),ref_for:!0,ref:d(p)},[s("div",F,[(C=i.meta)!=null&&C.icon?(m(),P(a,{key:0,class:"nav-icon",name:((b=i.meta)==null?void 0:b.icon)??""},null,8,["name"])):K("",!0),s("div",N,ce(i.meta?i.meta.title:"\u9ED8\u8BA4\u83DC\u5355"),1)])],10,Z)}),128)),s("div",{ref_key:"navItemActiveRef",ref:c,class:"nav-item-round"},null,512)])]),_:1})])}}}),j={class:"aside-menu"},q={class:"head-left"},D={class:"head-right"},E={class:"layout-main"},Y=S({__name:"double",setup(L){const A=xe(),o=Se(),{collapse:f,device:h,showAside:u,showBreadcrumb:c,layoutType:v}=V(o),x=de(()=>!d.value||d.value.length<1?"width-none":f.value?"web-aside-collapse":"web-aside-not-collapse"),{menus:_}=V(A),d=y([]),g=me(),n=(a,w)=>{a.children&&a.children.length>0?(d.value=a.children,w!=-1&&g.push({path:a.children[0].path})):(d.value=[],g.push({path:a.path}))};G(()=>h.value,a=>{a=="pc"?o.updateSettings({collapse:!1,showAside:!0,showAsidePane:!1,showBreadcrumb:!0}):a=="ipad"?o.updateSettings({collapse:!0,showAside:!0,showAsidePane:!1,showBreadcrumb:!0}):a=="mobile"&&o.updateSettings({collapse:!1,showAside:!1,showBreadcrumb:!1})});const l=()=>{o.setOpenSetting()};return(a,w)=>{const i=le,p=te,C=H("Setting"),b=se,R=ne,ee=oe,ae=ie,X=z;return m(),P(X,{class:"layout-container"},{default:t(()=>[B(e(i,{style:{"background-color":"var(--el-popup-modal-bg-color)"},width:"70px"},{default:t(()=>[r(v)=="double"?(m(),P(W,{key:0,menus:r(_),onNavChange:n},null,8,["menus"])):K("",!0)]),_:1},512),[[$,r(u)]]),B(e(i,{class:J(["layout-aside",r(x)])},{default:t(()=>[e(he),s("div",j,[e(p,null,{default:t(()=>[e(ve,{menus:r(d)},null,8,["menus"])]),_:1})])]),_:1},8,["class"]),[[$,r(u)]]),e(X,{class:"layout-wrap"},{default:t(()=>[e(R,{class:"layout-header"},{default:t(()=>[s("div",q,[e(_e),B(e(ge,null,null,512),[[$,r(c)]])]),s("div",D,[e(we),s("div",{class:"setting-btn head-btn",onClick:l},[e(b,null,{default:t(()=>[e(C)]),_:1})])])]),_:1}),e(Ce),s("div",E,[e(p,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(Le)]),_:1}),e(ae,{class:"layout-footer"},{default:t(()=>[e(be)]),_:1})]),_:1})])]),_:1})]),_:1})}}})});export{Pe as __tla,Y as default};