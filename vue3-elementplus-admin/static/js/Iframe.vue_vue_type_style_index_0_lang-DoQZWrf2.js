import{b as s,t as n,ar as c,o as f,x as m,a7 as v,a8 as p,z as u,B as a,as as h}from"./vendor-aDZpGBEG.js";const g={class:"loading"},y=a("div",null,null,-1),x=a("div",null,null,-1),I=a("div",null,null,-1),E=a("div",null,null,-1),S=[y,x,I,E],b=["id","src"],_=s({name:"Iframe"}),k=s({..._,props:{src:{type:String,default:"/"},iframeId:{type:String,required:!0}},setup(t){const o=t,l=n(!1),r=n(),d=n(null);return c(()=>{r.value=document.documentElement.clientHeight-80+"px";const i=("#"+o.iframeId).replace(/\//g,"\\/"),e=document.querySelector(i);e!=null&&e.attachEvent?(l.value=!0,e.attachEvent("onload",function(){l.value=!1})):(l.value=!0,e.onload=function(){l.value=!1})}),(i,e)=>(f(),m("div",{style:h("height:"+u(r)),class:"iframe-box"},[v(a("div",g,S,512),[[p,u(l)]]),a("iframe",{id:t.iframeId,ref_key:"iframeRef",ref:d,src:t.src,frameborder:"no",width:"100%",height:"100%"},null,8,b)],4))}});export{k as _};