import{b as h,T as S,o,c as b,w as l,z as d,A as R,U as da,B as i,a as e,J as A,V as ca,W as ma,x as O,X as L,Y as D,r as W,L as X,Z as N,_ as pa,u as F,F as E,t as j,$ as ga,a0 as fa,a1 as fe,a2 as J,a3 as B,a4 as ha,a5 as he,a6 as _e,a7 as K,a8 as Y,i as _a,j as va,a9 as ba,aa as ka,ab as ya,ac as q,ad as wa,ae as Ca,af as xa,ag as Va,ah as Oa,ai as Sa,aj as Ia,ak as Ta,al as La,am as Wa,an as Ba,ao as za}from"./vendor-aDZpGBEG.js";import{a as P,_ as Z,b as Aa,u as qa,c as Pa,__tla as Ua}from"./index-DP-ot5QA.js";import{_ as Ra,__tla as $a}from"./Page.vue_vue_type_style_index_0_lang-B3kEzayu.js";import"./Iframe.vue_vue_type_style_index_0_lang-DoQZWrf2.js";let ve,Da=Promise.all([(()=>{try{return Ua}catch{}})(),(()=>{try{return $a}catch{}})()]).then(async()=>{const be={class:"settings-drawer-content"},ke={class:"setting-item"},ye=i("div",{class:"setting-title"},"\u6697\u9ED1\u6A21\u5F0F",-1),we={class:"setting-item"},Ce=i("div",{class:"setting-title"},"\u83DC\u5355\u6298\u53E0",-1),xe={class:"setting-item"},Ve=i("div",{class:"setting-title"},"\u7070\u8272\u6A21\u5F0F",-1),Oe={class:"setting-item"},Se=i("div",{class:"setting-title"},"\u8272\u5F31\u6A21\u5F0F",-1),Ie=h({name:"WebSetting"}),Te=h({...Ie,setup(r){const t=P(),{openSetting:n,isDark:s,collapse:u,isGrey:m,isInvert:p}=S(t),g=(v,c)=>{t.setIsDark(v)},a=(v,c)=>{t.setCollapsed(v)},f=(v,c)=>{t.setIsGrey(v)},k=(v,c)=>{t.setIsInvert(v)},y=()=>{},w=()=>{t.setOpenSetting()};return(v,c)=>{const C=ca,_=ma,V=da;return o(),b(V,{class:"settings-drawer",size:"300",modelValue:d(n),"onUpdate:modelValue":c[4]||(c[4]=x=>R(n)?n.value=x:null),onOk:y,onCancel:w,mask:!0,"popup-container":"#parentNode",unmountOnClose:"",title:"\u4E3B\u9898\u7F16\u8F91"},{default:l(()=>[i("div",be,[e(C,{orientation:"center"},{default:l(()=>[A("\u754C\u9762\u8BBE\u7F6E")]),_:1}),i("div",ke,[ye,e(_,{modelValue:d(s),"onUpdate:modelValue":c[0]||(c[0]=x=>R(s)?s.value=x:null),onChange:g},null,8,["modelValue"])]),i("div",we,[Ce,e(_,{modelValue:d(u),"onUpdate:modelValue":c[1]||(c[1]=x=>R(u)?u.value=x:null),onChange:a},null,8,["modelValue"])]),i("div",xe,[Ve,e(_,{modelValue:d(m),"onUpdate:modelValue":c[2]||(c[2]=x=>R(m)?m.value=x:null),onChange:f},null,8,["modelValue"])]),i("div",Oe,[Se,e(_,{modelValue:d(p),"onUpdate:modelValue":c[3]||(c[3]=x=>R(p)?p.value=x:null),onChange:k},null,8,["modelValue"])])])]),_:1},8,["modelValue"])}}}),Le=h({name:"WebFooter"}),We=i("div",null,"\u7248\u6743\u58F0\u660E",-1),Be=i("div",null,"\u672C\u9879\u76EE\u7531\u4F5C\u8005:XIAOXIN-WS\u5F00\u53D1\u5B8C\u6210,\u91C7\u7528MIT\u534F\u8BAE\u8FDB\u884C\u5F00\u6E90\u3002",-1);function ze(r,t,n,s,u,m){return o(),O(L,null,[We,Be],64)}const Ae=Z(Le,[["render",ze]]),qe=["xlink:href"],Pe=h({name:"SvgIcon"}),Ue=h({...Pe,props:{name:{type:String,required:!0},className:{type:String,default:""},color:{type:String,default:""},size:{type:String,default:""}},setup(r){const t=r,n=D(()=>{if(t.name.startsWith("svg_"))return`#${t.name.substring(4,t.name.length)}`;if(t.name.startsWith("el_"))return t.name.substring(3,t.name.length)}),s=D(()=>t.className?"svg-icon "+t.className:"svg-icon");return(u,m)=>{const p=X,g=W("WarningFilled");return r.name.startsWith("svg_")?(o(),b(p,{key:0,color:r.color,size:r.size,class:"web-icon"},{default:l(()=>[(o(),O("svg",{"aria-hidden":"true",class:N(d(s))},[i("use",{"xlink:href":d(n)},null,8,qe)],2))]),_:1},8,["color","size"])):r.name.startsWith("el_")?(o(),b(p,{key:1,color:r.color,size:r.size,class:"web-icon"},{default:l(()=>[(o(),b(pa(d(n)),{class:N(d(s))},null,8,["class"]))]),_:1},8,["color","size"])):(o(),b(p,{key:2},{default:l(()=>[e(g)]),_:1}))}}}),$=Z(Ue,[["__scopeId","data-v-d8989c8e"]]),Re={class:"tags-view"},$e={class:"tag-label"},De={class:"tag-title"},Ne={class:"tags-option"},Fe={class:"tags-option-item"},je=h({name:"WebTags"}),Ge=h({...je,setup(r){const t=F(),n=E(),s=Aa(),{tags:u}=S(s),m=j(),p=({paneName:C})=>{if(n.name==C)return;const _=u.value.find(V=>V.name===C);t.push({path:_.path})},g=()=>{if(n.path&&n.path.indexOf("/redirect")>=0||!n.name)return!1;s.addOne(n)};u.value.length<1&&(m.value=n.name,g()),m.value=n.name,ga(()=>n.fullPath,()=>{m.value=n.name},{deep:!0});const a=()=>{s.delRight(n)},f=()=>{s.delLeft(n)},k=j(!1),y=()=>{k.value||(k.value=!0,s.delPageOne(n.name),t.replace({path:"/redirect"+n.path}).finally(()=>{const C=setTimeout(()=>{k.value=!1,clearTimeout(C)},1e3)}))},w=C=>{if(u.value.length<2)return;C||(C=n.name);const _=u.value.findIndex(I=>I.name==C),V=u.value.find(I=>I.name==C),x=u.value.length-1;_==-1||!V||(s.delOne(V),n.name==V.name&&(x==_?t.push(u.value[_-1].path):t.push(u.value[_].path)))},v=()=>{u.value.length<2||(s.clearAll(),t.push({path:"/dashboard"}))},c=()=>{s.delOther(n)};return(C,_)=>{const V=ha,x=fa,I=$,G=W("Close"),z=X,T=he,M=W("DArrowLeft"),na=W("DArrowRight"),sa=W("Operation"),ua=W("Minus"),ia=_e,oa=fe;return o(),O("div",Re,[e(x,{ref:"tabsViewRef",modelValue:d(m),"onUpdate:modelValue":_[0]||(_[0]=U=>R(m)?m.value=U:null),type:"card",onTabClick:p,onTabRemove:w,class:"demo-tabs"},{default:l(()=>[(o(!0),O(L,null,J(d(u),(U,ra)=>(o(),b(V,{key:"tags"+U.name+ra,name:U.name},{label:l(()=>[i("span",$e,[i("span",De,B(U.meta.title),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),i("div",Ne,[e(oa,{trigger:"click",ref:"dropdownRef22"},{dropdown:l(()=>[e(ia,null,{default:l(()=>[e(T,{class:"tags-menu-item",onClick:_[1]||(_[1]=U=>w(null))},{default:l(()=>[e(z,null,{default:l(()=>[e(G)]),_:1}),A("\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875 ")]),_:1}),e(T,{class:"tags-menu-item",onClick:a},{default:l(()=>[e(z,null,{default:l(()=>[e(M)]),_:1}),A("\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875 ")]),_:1}),e(T,{class:"tags-menu-item",onClick:f},{default:l(()=>[e(z,null,{default:l(()=>[e(na)]),_:1}),A("\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875 ")]),_:1}),e(T,{class:"tags-menu-item",onClick:c},{default:l(()=>[e(z,null,{default:l(()=>[e(sa)]),_:1}),A("\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875 ")]),_:1}),e(T,{class:"tags-menu-item",onClick:v},{default:l(()=>[e(z,null,{default:l(()=>[e(ua)]),_:1}),A("\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875 ")]),_:1})]),_:1})]),default:l(()=>[i("div",Fe,[e(I,{class:"dropdown-label",name:"el_menu"})])]),_:1},512),i("div",{class:"tags-option-item",onClick:y},[e(I,{name:"svg_icon-RefreshFilled"})])])])}}}),Me={class:"web-avatar"},Xe=["src"],Ee={class:"avatar-down"},Je=i("a",{target:"_blank",href:"https://github.com/xiaoxin-ws"},"github",-1),Ke=i("a",{target:"_blank",href:"https://gitee.com/xiaoxin-ws"},"gitee",-1),Ye=h({name:"Avatar"}),Ze=h({...Ye,setup(r){const t=qa(),n=P(),{device:s}=S(n),{avatar:u,username:m}=S(t),p=F(),g=()=>{_a({title:"\u9000\u51FA\u767B\u5F55",message:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u561B\uFF1F",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(a,f,k)=>{a==="confirm"?(f.confirmButtonLoading=!0,f.confirmButtonText="Loading...",k(),t.loginOut().then(()=>{t.access_token="",t.refresh_token="",p.replace({path:"/login"}).then(()=>{va.success({message:"\u6CE8\u9500\u6210\u529F",duration:2e3}),t.clearUserStore()}).finally(()=>{f.confirmButtonLoading=!1})}).catch(()=>{f.confirmButtonLoading=!1})):k()}})};return(a,f)=>{const k=ba,y=$,w=he,v=_e,c=fe;return o(),b(c,{trigger:"click",position:"bl"},{dropdown:l(()=>[e(v,null,{default:l(()=>[e(w,null,{default:l(()=>[Je]),_:1}),e(w,null,{default:l(()=>[Ke]),_:1}),e(w,{divided:"",onClick:g},{default:l(()=>[A("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1})]),default:l(()=>[i("div",Me,[e(k,{size:28,class:N(d(s)==="mobile"?"phone":"other")},{default:l(()=>[i("img",{alt:"avatar",src:d(u)?d(u):""},null,8,Xe)]),_:1},8,["class"]),K(i("div",Ee,[e(y,{name:"svg_DownOutlined"})],512),[[Y,d(s)==="mobile"]]),K(i("span",{class:"user-name"},B(d(m)),513),[[Y,d(s)!=="mobile"]])])]),_:1})}}}),He=["onClick"],Qe=h({name:"Breadcrumb"}),ea=h({...Qe,setup(r){const t=F(),n=E();let s=j();const u=j(!0),m=()=>{if(u.value=!1,n.path&&n.path.indexOf("/redirect")>=0||!n.name)return!1;s.value=n.meta.allPath,s.value.shift();const g=setTimeout(()=>{u.value=!0,clearTimeout(g)},200)},p=(g,a)=>{a!=s.value.length-1&&t.push({path:g})};return ka(()=>{m()}),(g,a)=>{const f=Ca,k=ya;return o(),b(k,{class:"web-breadcrumb"},{default:l(()=>[e(wa,{name:"slide-right",tag:"div",mode:"out-in"},{default:l(()=>[(o(!0),O(L,null,J(d(s),(y,w)=>{var v;return o(),O(L,{key:"breadcrumb"+w},[!((v=y.meta)!=null&&v.notBread)&&d(u)?(o(),b(f,{key:0},{default:l(()=>{var c;return[i("span",{onClick:C=>p(y==null?void 0:y.path,w)},B((c=y.meta)==null?void 0:c.title),9,He)]}),_:2},1024)):q("",!0)],64)}),128))]),_:1})]),_:1})}}}),aa=h({name:"CollapsedBtn"}),ta=h({...aa,setup(r){const t=P(),{collapse:n,showAsidePane:s,device:u}=S(t),m=()=>{u.value=="mobile"?t.updateSettings({showAsidePane:!s.value}):t.updateSettings({collapse:!n.value})};return(p,g)=>{const a=$;return o(),O("div",{class:"web-collapse head-btn",onClick:m},[d(n)?(o(),b(a,{key:0,name:"svg_icon-menu-unfold-outlined"})):(o(),b(a,{key:1,name:"svg_icon-menu-fold-outlined"}))])}}});function la(r){return r?r.indexOf("http://")!==-1||r.indexOf("https://")!==-1:!1}let H,Q,ee,ae,te,le,ne,se,ue,ie,oe,re,de,ce,me,pe,ge;H=h({name:"WebLink"}),Q=h({...H,props:{icon:{type:String,required:!0},title:{type:String,required:!0},url:{type:String,required:!0}},setup(r){const t=P(),{collapse:n}=S(t),s=r,u=()=>{la(s.url)&&window.open(s.url,"_blank")};return(m,p)=>{const g=$,a=xa;return d(n)?(o(),b(a,{key:0,class:"box-item",effect:"dark",content:`${r.title}`,placement:"right"},{default:l(()=>[i("div",{class:"el-menu-item",onClick:u},[e(g,{name:r.icon},null,8,["name"]),i("span",null,B(r.title),1)])]),_:1},8,["content"])):(o(),O("div",{key:1,class:"el-menu-item",onClick:u},[e(g,{name:r.icon},null,8,["name"]),i("span",null,B(r.title),1)]))}}}),ee={class:""},ae=h({name:"MenuItem"}),te=h({...ae,props:{menus:{type:Object,required:!0}},setup(r){return(t,n)=>{const s=$,u=Va,m=Q,p=W("MenuItem",!0),g=Oa;return o(!0),O(L,null,J(r.menus,(a,f)=>{var k,y,w,v,c,C,_,V;return o(),O(L,{key:a.path},[(!a.children||a.children.length<1)&&a.meta&&!a.meta.hidden?(o(),O(L,{key:0},[(k=a.meta)!=null&&k.isOutLink?q("",!0):(o(),b(u,{key:0,index:a.path},{title:l(()=>[i("span",ee,B(a.meta?a.meta.title:"\u9ED8\u8BA4\u83DC\u5355"),1)]),default:l(()=>[a.meta&&a.meta.icon?(o(),b(s,{key:0,name:a.meta.icon},null,8,["name"])):q("",!0)]),_:2},1032,["index"])),(y=a.meta)!=null&&y.icon&&((w=a.meta)!=null&&w.title)&&((v=a.meta)!=null&&v.isOutLink)?(o(),b(m,{key:1,icon:(c=a.meta)==null?void 0:c.icon,url:a.path,title:(C=a.meta)==null?void 0:C.title},null,8,["icon","url","title"])):q("",!0)],64)):a.children&&a.children.length>0?(o(),O(L,{key:1},[(_=a.meta)!=null&&_.hidden?(o(),b(p,{key:0,menus:a.children},null,8,["menus"])):(V=a.meta)!=null&&V.hidden?q("",!0):(o(),b(g,{key:a.path+f,index:a.path+f,"show-timeout":150,"hide-timeout":150,"popper-offset":2,"popper-class":"web-menu-popper"},{title:l(()=>[a.meta&&a.meta.icon?(o(),b(s,{key:0,name:a.meta.icon},null,8,["name"])):q("",!0),i("span",null,B(a.meta?a.meta.title:"\u9ED8\u8BA4\u83DC\u5355"),1)]),default:l(()=>[e(p,{menus:a.children},null,8,["menus"])]),_:2},1032,["index"]))],64)):q("",!0)],64)}),128)}}}),le=h({name:"WebMenu"}),ne=h({...le,setup(r){const t=P(),n=Pa(),{menus:s}=S(n),{collapse:u,device:m}=S(t),p=F(),g=E(),a=f=>{g.path!=f&&(m.value=="mobile"&&t.updateSettings({showAsidePane:!1}),p.push(f))};return(f,k)=>{const y=te,w=Sa;return o(),b(w,{"default-active":f.$route.path,"collapse-transition":!1,collapse:d(u),router:!1,"unique-opened":!0,class:"web-menu-container",onSelect:a},{default:l(()=>[e(y,{menus:d(s)},null,8,["menus"])]),_:1},8,["default-active","collapse"])}}}),se=""+new URL("../png/logo-CPmPqqKk.png",import.meta.url).href,ue={class:"layout-logo"},ie=["src"],oe=h({name:"Logo"}),re=h({...oe,setup(r){const t=P(),{collapse:n}=S(t),s="\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",u=D(()=>s.substring(0,6));return(m,p)=>(o(),O("div",ue,[i("img",{class:"logo-img",src:d(se),alt:"",srcset:""},null,8,ie),K(i("div",{class:"logo-title"},B(d(u)),513),[[Y,!d(n)]])]))}}),de=Z(re,[["__scopeId","data-v-c9abce93"]]),ce={class:"aside-menu"},me={class:"head-left"},pe={class:"head-right"},ge={class:"layout-main"},ve=h({__name:"index",setup(r){const t=P(),{collapse:n}=S(t),s=D(()=>n.value?"web-aside-collapse":"web-aside-not-collapse"),u=()=>{t.setOpenSetting()};return(m,p)=>{const g=de,a=ne,f=Ia,k=Ta,y=ta,w=ea,v=Ze,c=W("Setting"),C=X,_=La,V=Ge,x=Ra,I=Wa,G=Ae,z=Ba,T=za,M=Te;return o(),b(T,{class:"layout-container"},{default:l(()=>[e(k,{class:N(["layout-aside",d(s)])},{default:l(()=>[e(g),i("div",ce,[e(f,null,{default:l(()=>[e(a)]),_:1})])]),_:1},8,["class"]),e(T,{class:"layout-wrap"},{default:l(()=>[e(_,{class:"layout-header"},{default:l(()=>[i("div",me,[e(y),e(w)]),i("div",pe,[e(v),i("div",{class:"setting-btn head-btn",onClick:u},[e(C,null,{default:l(()=>[e(c)]),_:1})])])]),_:1}),e(V),i("div",ge,[e(f,null,{default:l(()=>[e(I,null,{default:l(()=>[e(x)]),_:1}),e(z,{class:"layout-footer"},{default:l(()=>[e(G)]),_:1})]),_:1})])]),_:1}),e(M)]),_:1})}}})});export{Da as __tla,ve as default};