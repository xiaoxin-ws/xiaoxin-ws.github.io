import{a as z,u as xe,d as Oe,_ as re,b as Be,__tla as Se}from"./index-LGr-cOql.js";import{a as _,Y as L,r as T,m,y as O,A as x,n as B,u as W,M as ce,G as I,ak as Le,w as a,c as e,al as Ie,a8 as P,a7 as me,z as f,a5 as V,a9 as Pe,am as Re,an as ze,t as D,P as v,E as We,g as Ve,ao as De,ap as fe,aq as he,ar as ge,ag as Fe,H as Me,x as pe,as as He,at as Ne}from"./vendor-WKIjn7CI.js";let ve,_e,be,we,ke,Ce,Te,Ue=Promise.all([(()=>{try{return Se}catch{}})()]).then(async()=>{let F,M,H,N,U,X,j,q,E,G,Y,$,J,K,Q,Z,ee,ae;F=_({name:"CollapsedBtn"}),be=_({...F,setup(w){const s=z(),{collapse:t,showAsidePane:l,device:u}=L(s),i=()=>{u.value=="mobile"?s.updateSettings({showAsidePane:!l.value}):s.updateSettings({collapse:!t.value})};return(k,b)=>{const r=T("SvgIcon");return m(),O("div",{class:"web-collapse head-btn",onClick:i},[x(t)?(m(),B(r,{key:0,size:"14",name:"svg_icon-menu-unfold-outlined"})):(m(),B(r,{key:1,size:"14",name:"svg_icon-menu-fold-outlined"}))])}}}),M=["onClick"],H=_({name:"Breadcrumb"}),we=_({...H,setup(w){const s=W(),t=ce();let l=I();const u=I(!0);return Le(()=>{(()=>{if(u.value=!1,t.path&&t.path.indexOf("/redirect")>=0||!t.name)return!1;if(t.meta.allPath){l.value=window.$lodash.cloneDeep(t.meta.allPath),l.value.shift();const i=setTimeout(()=>{u.value=!0,clearTimeout(i)},600)}})()}),(i,k)=>{const b=Re,r=ze;return m(),B(r,{class:"web-breadcrumb"},{default:a(()=>[e(Ie,{name:"slide-right",tag:"div",mode:"out-in"},{default:a(()=>[(m(!0),O(P,null,me(x(l),(d,y)=>{var h;return m(),O(P,{key:"breadcrumb"+y},[!((h=d.meta)!=null&&h.notBread)&&x(u)?(m(),B(b,{key:0},{default:a(()=>{var C;return[f("span",{class:"breadcrumb-text",onClick:S=>((n,o)=>{o!=l.value.length-1&&s.push({path:n})})(d==null?void 0:d.path,y)},V((C=d.meta)==null?void 0:C.title),9,M)]}),_:2},1024)):Pe("",!0)],64)}),128))]),_:1})]),_:1})}}}),N={class:"web-avatar"},U=["src"],X={class:"user-name"},j=f("a",{target:"_blank",href:"https://github.com/xiaoxin-ws"},"github",-1),q=f("a",{target:"_blank",href:"https://gitee.com/xiaoxin-ws"},"gitee",-1),E=_({name:"Avatar"}),ke=_({...E,setup(w){const s=xe(),{avatar:t,username:l}=L(s),u=W(),i=D(()=>l.value.length>6?l.value.substring(0,6)+"...":l.value),k=()=>{We({title:"\u9000\u51FA\u767B\u5F55",message:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u561B\uFF1F",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(b,r,d)=>{b==="confirm"?(r.confirmButtonLoading=!0,r.confirmButtonText="Loading...",d(),s.loginOut().then(()=>{s.access_token="",s.refresh_token="",u.replace({path:"/login"}).then(()=>{Ve.success({message:"\u6CE8\u9500\u6210\u529F",duration:2e3}),s.clearUserStore()}).finally(()=>{r.confirmButtonLoading=!1})}).catch(()=>{r.confirmButtonLoading=!1})):d()}})};return(b,r)=>{const d=De,y=T("SvgIcon"),h=fe,C=he,S=ge;return m(),B(S,{trigger:"hover",position:"bl"},{dropdown:a(()=>[e(C,null,{default:a(()=>[e(h,null,{default:a(()=>[j]),_:1}),e(h,null,{default:a(()=>[q]),_:1}),e(h,{divided:"",onClick:k},{default:a(()=>[v("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1})]),default:a(()=>[f("div",N,[e(d,{size:28},{default:a(()=>[f("img",{alt:"avatar",src:x(t)?x(t):""},null,8,U)]),_:1}),f("span",X,[v(V(x(i))+" ",1),e(y,{name:"el_ArrowDown",size:"12"})])])]),_:1})}}}),G={class:"tags-view"},Y={class:"tag-label"},$={class:"tag-title"},J={class:"tags-option"},K={class:"tags-option-item"},Q=_({name:"WebTags"}),Ce=_({...Q,setup(w){const s=W(),t=ce(),l=Oe(),{tags:u}=L(l),i=I(),k=({paneName:n})=>{if(t.name==n)return;const o=u.value.find(A=>A.name===n);o&&s.push({path:o.path})};u.value.length<1&&(i.value=t.name,(()=>{if(t.path&&t.path.indexOf("/redirect")>=0||!t.name)return!1;l.addOne(t)})()),i.value=t.name,Fe(()=>t.fullPath,()=>{i.value=t.name},{deep:!0});const b=n=>{n?l.delRight(n,t)&&s.push({path:n.path}):l.delRight(t)},r=n=>{n?l.delLeft(n,t)&&s.push({path:n.path}):l.delLeft(t)},d=I(!1),y=()=>{d.value||(d.value=!0,l.delPageOne(t),s.replace({path:"/redirect"+t.path}).finally(()=>{const n=setTimeout(()=>{d.value=!1,clearTimeout(n)},1e3)}))},h=n=>{if(u.value.length<2)return;n||(n=t.name);const o=u.value.findIndex(p=>p.name==n),A=u.value[o],g=u.value.length-1;o!=-1&&A&&(l.delOne(A),t.name==A.name&&(g==o?s.push(u.value[o-1].path):s.push(u.value[o].path)))},C=()=>{if(u.value.length<2)return;l.clearAll();const n=setTimeout(()=>{s.push({path:"/"}),clearTimeout(n)},200)},S=n=>{n?(l.delOther(n),n.name!=t.name&&s.push({path:n.path})):l.delOther(t)};return(n,o)=>{const A=T("Close"),g=pe,p=fe,le=T("DArrowLeft"),ne=T("DArrowRight"),se=T("Operation"),ue=T("Minus"),oe=he,ie=ge,ye=He,Ae=Ne,de=T("SvgIcon");return m(),O("div",G,[e(Ae,{ref:"tabsViewRef",modelValue:x(i),"onUpdate:modelValue":o[0]||(o[0]=c=>Me(i)?i.value=c:null),type:"card",onTabClick:k,onTabRemove:h,class:"demo-tabs"},{default:a(()=>[(m(!0),O(P,null,me(x(u),c=>(m(),B(ye,{key:"tags"+c.name,name:c.name},{label:a(()=>[e(ie,{trigger:"contextmenu",id:c.name,ref_for:!0,ref:"dropdownRef"},{dropdown:a(()=>[e(oe,null,{default:a(()=>[e(p,{class:"tags-menu-item",onClick:R=>h(c.name)},{default:a(()=>[e(g,null,{default:a(()=>[e(A)]),_:1}),v("\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875 ")]),_:2},1032,["onClick"]),e(p,{class:"tags-menu-item",onClick:R=>b(c)},{default:a(()=>[e(g,null,{default:a(()=>[e(le)]),_:1}),v("\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875 ")]),_:2},1032,["onClick"]),e(p,{class:"tags-menu-item",onClick:R=>r(c)},{default:a(()=>[e(g,null,{default:a(()=>[e(ne)]),_:1}),v("\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875 ")]),_:2},1032,["onClick"]),e(p,{class:"tags-menu-item",onClick:R=>S(c)},{default:a(()=>[e(g,null,{default:a(()=>[e(se)]),_:1}),v("\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875 ")]),_:2},1032,["onClick"]),e(p,{class:"tags-menu-item",onClick:C},{default:a(()=>[e(g,null,{default:a(()=>[e(ue)]),_:1}),v("\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875 ")]),_:1})]),_:2},1024)]),default:a(()=>[f("span",Y,[f("span",$,V(c.meta.title),1)])]),_:2},1032,["id"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),f("div",J,[e(ie,{trigger:"hover",ref:"dropdownRef22"},{dropdown:a(()=>[e(oe,null,{default:a(()=>[e(p,{class:"tags-menu-item",onClick:o[1]||(o[1]=c=>h(null))},{default:a(()=>[e(g,null,{default:a(()=>[e(A)]),_:1}),v("\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875 ")]),_:1}),e(p,{class:"tags-menu-item",onClick:o[2]||(o[2]=c=>b(null))},{default:a(()=>[e(g,null,{default:a(()=>[e(le)]),_:1}),v("\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875 ")]),_:1}),e(p,{class:"tags-menu-item",onClick:o[3]||(o[3]=c=>r(null))},{default:a(()=>[e(g,null,{default:a(()=>[e(ne)]),_:1}),v("\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875 ")]),_:1}),e(p,{class:"tags-menu-item",onClick:o[4]||(o[4]=c=>S(null))},{default:a(()=>[e(g,null,{default:a(()=>[e(se)]),_:1}),v("\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875 ")]),_:1}),e(p,{class:"tags-menu-item",onClick:C},{default:a(()=>[e(g,null,{default:a(()=>[e(ue)]),_:1}),v("\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875 ")]),_:1})]),_:1})]),default:a(()=>[f("div",K,[e(de,{class:"dropdown-label",name:"el_menu"})])]),_:1},512),f("div",{class:"tags-option-item",onClick:y},[e(de,{name:"svg_icon-RefreshFilled"})])])])}}}),Z=_({name:"WebFooter"}),ee=f("div",null,"\u7248\u6743\u58F0\u660E",-1),ae=f("div",null,"\u672C\u9879\u76EE\u7531\u4F5C\u8005:XIAOXIN-WS\u5F00\u53D1\u5B8C\u6210,\u91C7\u7528MIT\u534F\u8BAE\u8FDB\u884C\u5F00\u6E90\u3002",-1);let te;_e=re(Z,[["render",function(w,s,t,l,u,i){return m(),O(P,null,[ee,ae],64)}]]),te=_({name:"OpenSettingBtn"}),ve=re(_({...te,setup(w){const s=z(),t=()=>{s.setOpenSetting()};return(l,u)=>{const i=T("Setting"),k=pe;return m(),O("div",{class:"setting-btn head-btn",onClick:t},[e(k,{size:"14"},{default:a(()=>[e(i)]),_:1})])}}}),[["__scopeId","data-v-bd91ffa0"]]),Te=function(w){const s=Be(),t=z(),{menus:l}=L(s),{collapse:u,showFooter:i,showAside:k,showBreadcrumb:b,layoutType:r,showTags:d,showAsideLogo:y}=L(t),h=D(()=>r.value=="double"&&(w&&(!w.value||w.value.length<1)||u.value)?"width-none":u.value?"web-aside-collapse":"web-aside-not-collapse"),C=D(()=>d.value?"web-have-tags":"web-no-have-tags");return{collapse:u,showFooter:i,showAside:k,showBreadcrumb:b,layoutType:r,showTags:d,menus:l,getWebAsideWidth:h,getMainHeight:C,showAsideLogo:y}}});export{ve as O,_e as W,be as _,Ue as __tla,we as a,ke as b,Ce as c,Te as u};
