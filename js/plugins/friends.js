const friendsjs={requestAPI:(o,s,i)=>{let l=5;!function a(){return new Promise((n,e)=>{let t=0,r=setTimeout(()=>{0===t&&(t=2,r=null,e("请求超时"),0==l&&i())},5e3);fetch(o).then(function(e){if(2!==t&&(clearTimeout(r),n(e),r=null,t=1),e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){l=0,s(e)}).catch(function(e){0<l?(--l,setTimeout(()=>{a()},5e3)):i()})})}()},layout:r=>{const a=$(r.el)[0];$(a).append('<div class="loading-wrap"><svg class="loading" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709"><path d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z" p-id="2710"></path></svg><p></p></div>'),friendsjs.requestAPI(r.api,function(e){$(a).find(".loading-wrap").remove();const n=e.content;n.forEach((e,n)=>{var t='<div class="user-card">';t+='<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer"',t+=' href="'+e.url+'">',t+='<img src="'+(e.avatar||r.avatar)+'" onerror="javascript:this.src=\''+r.avatar+"';\">",t+='<div class="name"><span>'+e.title+"</span></div>",t+="</a>",t+="</div>",$(a).find(".group-body").append(t)})},function(){$(a).find(".loading-wrap svg").remove(),$(a).find(".loading-wrap p").text("加载失败，请稍后重试。")})}};$(function(){for(var e=document.getElementsByClassName("friendsjs-wrap"),n=0;n<e.length;n++){const a=e[n];var t,r=a.getAttribute("api");null!=r&&((t=new Object).el=a,t.api=r,t.class=a.getAttribute("class"),t.avatar="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/avatar/round/3442075.svg",friendsjs.layout(t))}});