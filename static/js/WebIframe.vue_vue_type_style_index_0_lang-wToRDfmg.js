import{a as h,__tla as g}from"./index-DtEwAVCG.js";import{a as i,H as n,Z as v,ah as y,m as _,n as x,z as w,B as b}from"./vendor-hd0mcwR6.js";let m,I=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{let o,s;o=["id","src","height"],s=i({name:"WebIframe"}),m=i({...s,props:{src:{type:String,default:"http://www.cc.xx"},iframeId:{type:String,required:!0}},setup(r){const d=r,a=n(!1),l=n("100%"),p=n(null),f=h(),{showTags:c}=v(f),u=()=>{const t=document.querySelector(":root");let e=null;t&&(e=getComputedStyle(t).getPropertyValue("--web-base-height"),e=parseInt(e.split("px")[0])),e&&(c.value?l.value=document.documentElement.clientHeight-e-32+"px":l.value=document.documentElement.clientHeight-e+"px")};return y(()=>c.value,()=>{u()}),u(),_(()=>{const t=("#"+d.iframeId).replace(/\//g,"\\/"),e=document.querySelector(t);e!=null&&e.attachEvent?(a.value=!0,e.attachEvent("onload",function(){a.value=!1})):(a.value=!0,e.onload=function(){a.value=!1})}),(t,e)=>(x(),w("iframe",{id:r.iframeId,ref_key:"iframeRef",ref:p,class:"iframe-box",src:r.src,frameborder:"no",width:"100%",height:b(l)},null,8,o))}})});export{m as _,I as __tla};