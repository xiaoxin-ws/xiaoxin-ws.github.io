import{a as I,Y as K,G as f,M as Q,ag as U,r as V,m as v,y as j,c as a,w as t,z as s,a8 as X,a7 as a2,B as P,A as l,n as z,a9 as E,a5 as e2,aj as G,a2 as R,u as l2,ad as p,ae as g,$ as t2,af as s2,a0 as n2,a1 as u2,ai as i2}from"./vendor-WKIjn7CI.js";import{a as r2,__tla as c2}from"./index-LGr-cOql.js";import{L as o2,_ as d2,__tla as v2}from"./index-DkhD0Ucm.js";import{u as h2,_ as m2,a as _2,b as f2,O as p2,c as g2,W as y2,__tla as C2}from"./mixin-B76ifPNs.js";import{_ as w2,__tla as L2}from"./Page.vue_vue_type_script_setup_true_name_Page_lang-B2sUp_Az.js";import{__tla as b2}from"./WebIframe.vue_vue_type_style_index_0_lang-BAG1sgps.js";let Y,x2=Promise.all([(()=>{try{return c2}catch{}})(),(()=>{try{return v2}catch{}})(),(()=>{try{return C2}catch{}})(),(()=>{try{return L2}catch{}})(),(()=>{try{return b2}catch{}})()]).then(async()=>{let B,F,H,N,O,S,W,Z,q,D;B=s("div",{class:"web-logo"},[s("img",{src:"data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.37754%2016.9795L12.7498%209.43027C14.7163%207.41663%2017.9428%207.37837%2019.9564%209.34482C19.9852%209.37297%2020.0137%209.40145%2020.0418%209.43027L20.1221%209.51243C22.1049%2011.5429%2022.1049%2014.7847%2020.1221%2016.8152L12.7498%2024.3644C10.7834%2026.378%207.55686%2026.4163%205.54322%2024.4498C5.5144%2024.4217%205.48592%2024.3932%205.45777%2024.3644L5.37754%2024.2822C3.39468%2022.2518%203.39468%2019.0099%205.37754%2016.9795Z'%20fill='%2312D2AC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.0479%209.43034L27.3399%2016.8974C29.3674%2018.9735%2029.3674%2022.2883%2027.3399%2024.3644C25.3735%2026.3781%2022.147%2026.4163%2020.1333%2024.4499C20.1045%2024.4217%2020.076%2024.3933%2020.0479%2024.3644L12.7558%2016.8974C10.7284%2014.8213%2010.7284%2011.5065%2012.7558%209.43034C14.7223%207.4167%2017.9488%207.37844%2019.9624%209.34489C19.9912%209.37304%2020.0197%209.40152%2020.0479%209.43034Z'%20fill='%23307AF2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.1321%209.52163L23.6851%2013.1599L16.3931%2020.627L9.10103%2013.1599L12.6541%209.52163C14.6707%207.45664%2017.9794%207.4174%2020.0444%209.434C20.074%209.46286%2020.1032%209.49207%2020.1321%209.52163Z'%20fill='%230057FE'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='26'%20height='19'%20fill='white'%20transform='translate(3.5%207)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",alt:""})],-1),F={class:"nav"},H=["onClick"],N={class:"nav-content"},O={class:"nav-title"},S=I({name:"SideNav"}),W=I({...S,props:{menus:{type:Object,required:!0}},emits:["navChange"],setup(M,{emit:r}){const h=M,y=r,C=r2(),{isSideNavHorizontal:T}=K(C),m=f([]),c=f(0),i=f(),_=Q(),w=()=>{G(()=>{y("navChange",h.menus[(()=>{const n=h.menus.findIndex(e=>_.meta.allPath?_.meta.allPath.find(o=>e.path==o.path&&e):-1);return c.value=n,i.value&&(i.value.style.top=`${m.value[n].offsetTop}px`),n})()],-1)})};w();const L=n=>e=>{e&&(m.value[n]=e)};return U(()=>_.fullPath,()=>{w()}),(n,e)=>{const o=V("SvgIcon"),b=R;return v(),j("div",{class:P(["side-nav",l(T)?"horizontal":""])},[B,a(b,{class:"nav-scrollbar"},{default:t(()=>[s("ul",F,[(v(!0),j(X,null,a2(M.menus,(u,d)=>{var x,k;return v(),j("li",{class:P(["nav-item",d==l(c)?"nav-item-active":""]),key:d,onClick:$=>((J,A)=>{c.value!=A&&G(()=>{c.value=A,i.value&&(i.value.style.top=`${m.value[A].offsetTop}px`),y("navChange",J,A)})})(u,d),ref_for:!0,ref:L(d)},[s("div",N,[(x=u.meta)!=null&&x.icon?(v(),z(o,{key:0,class:"nav-icon",name:((k=u.meta)==null?void 0:k.icon)??""},null,8,["name"])):E("",!0),s("div",O,e2(u.meta?u.meta.title:"\u9ED8\u8BA4\u83DC\u5355"),1)])],10,H)}),128)),s("div",{ref_key:"navItemActiveRef",ref:i,class:"nav-item-round"},null,512)])]),_:1})],2)}}}),Z={class:"aside-menu"},q={class:"head-left"},D={class:"head-right"},Y=I({__name:"double",setup(M){const r=f([]),h=f({}),{showFooter:y,showAside:C,showBreadcrumb:T,layoutType:m,showTags:c,getWebAsideWidth:i,getMainHeight:_,menus:w}=h2(r),L=l2(),n=(e,o)=>{h.value=e,e.children&&e.children.length>0?(r.value=e.children,o!=-1&&L.push({path:e.children[0].path})):(r.value=[],L.push({path:e.path}))};return(e,o)=>{const b=t2,u=s2,d=n2,x=u2,k=i2,$=R;return v(),z($,{class:"layout-container"},{default:t(()=>[p(a(b,{class:"layout-side-nav-wrap"},{default:t(()=>[l(m)=="double"?(v(),z(W,{key:0,menus:l(w),onNavChange:n},null,8,["menus"])):E("",!0)]),_:1},512),[[g,l(C)]]),p(a(b,{class:P(["layout-aside",l(i)])},{default:t(()=>[a(o2,{"menu-row":l(h)},null,8,["menu-row"]),s("div",Z,[a(u,null,{default:t(()=>[a(d2,{menus:l(r)},null,8,["menus"])]),_:1})])]),_:1},8,["class"]),[[g,l(C)]]),a($,{class:"layout-wrap"},{default:t(()=>[a(d,{class:"layout-header"},{default:t(()=>[s("div",q,[a(m2),p(a(_2,null,null,512),[[g,l(T)]])]),s("div",D,[a(f2),a(p2)])]),_:1}),p(a(g2,null,null,512),[[g,l(c)]]),s("div",{class:P(["layout-main",l(_)])},[a(u,null,{default:t(()=>[a(x,null,{default:t(()=>[a(w2)]),_:1}),p(a(k,{class:"layout-footer"},{default:t(()=>[a(y2)]),_:1},512),[[g,l(y)]])]),_:1})],2)]),_:1})]),_:1})}}})});export{x2 as __tla,Y as default};