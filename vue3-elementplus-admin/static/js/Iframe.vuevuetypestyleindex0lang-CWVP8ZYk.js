import{a as p,__tla as v}from"./index-C-ds9xjy.js";import{s as _}from"./pinia-B53-1xNw.js";import{d as u,r as l,w as g,k as y,o as x,c as I,a as E,U as S,u as w}from"./@vue-B-Waonw5.js";let m,b=Promise.all([(()=>{try{return v}catch{}})()]).then(async()=>{let n,s;n=["id","src"],s=u({name:"Iframe"}),m=u({...s,props:{src:{type:String,default:"/"},iframeId:{type:String,required:!0}},setup(a){const d=a,t=l(!1),r=l(),f=l(null),h=p(),{showTags:o}=_(h),c=()=>{o.value?r.value=document.documentElement.clientHeight-80+"px":r.value=document.documentElement.clientHeight-48+"px"};return g(()=>o.value,()=>{c()}),y(()=>{c();const i=("#"+d.iframeId).replace(/\//g,"\\/"),e=document.querySelector(i);e!=null&&e.attachEvent?(t.value=!0,e.attachEvent("onload",function(){t.value=!1})):(t.value=!0,e.onload=function(){t.value=!1})}),(i,e)=>(x(),I("div",{style:S("height:"+w(r)),class:"iframe-box"},[E("iframe",{id:a.iframeId,ref_key:"iframeRef",ref:f,src:a.src,frameborder:"no",width:"100%",height:"100%"},null,8,n)],4))}})});export{m as _,b as __tla};