const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};u();const a=document.querySelector("#bmore"),m=document.querySelector("#bmenu"),f=document.querySelector(".links"),p=document.querySelector(".more .menu");m.addEventListener("click",n=>{n.preventDefault(),f.classList.toggle("show")});a.addEventListener("click",n=>{n.preventDefault(),p.classList.toggle("show")});const i=[{id:"PyMlV5_HRWk"},{id:"XCbMVbeKlCg"},{id:"Fmdb-KmlzD8"},{id:"lOthvD1rMbQ"},{id:"nXDk86lQhto"}];document.querySelector("#slider");const y=document.querySelector("#current"),h=document.querySelector("#videos-container"),g=document.querySelector("#next"),v=document.querySelector("#prev");let e=0;g.addEventListener("click",n=>{let r=e;e=e+1<i.length?e+1:e,e!==r&&l(i[e].id)});v.addEventListener("click",n=>{let r=e;e=e-1>=0?e-1:e,e!==r&&l(i[e].id)});l(i[e].id);b();function l(n){y.innerHTML=`<iframe width="100%" height="720" src="https://www.youtube.com/embed/${n}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}function b(){const n=i.map((r,c)=>`
    <div class="item">
      <a href="#" data-id="${c}">
        <img src="https://i3.ytimg.com/vi/${r.id}/mqdefault.jpg" />
      </a>
    </div>`);h.innerHTML=n.join(""),document.querySelectorAll(".item a").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),e=+r.getAttribute("data-id"),l(i[e].id)})})}
