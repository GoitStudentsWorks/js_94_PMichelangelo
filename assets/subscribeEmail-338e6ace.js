import{a as i,b as v}from"./vendor-466561f8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();async function M(){const e="https://food-boutique.b.goit.study/api",t="products/categories";try{return(await i.get(`${e}/${t}`)).data}catch(o){console.error(o.message)}}async function J(){const e="https://food-boutique.b.goit.study/api",t="products/discount";try{return(await i.get(`${e}/${t}`)).data}catch(o){console.error(o.message)}}async function W(){const e="https://food-boutique.b.goit.study/api",t="products";try{return(await i.get(`${e}/${t}`)).data}catch(o){console.error(o.message)}}async function P(e){const t="https://food-boutique.b.goit.study/api",o="products";try{return(await i.get(`${t}/${o}/${e}`)).data}catch(a){console.error(a.message)}}async function F(e,t,o,a){const n=await M(),s="https://food-boutique.b.goit.study/api",r="products";if(t!=null&&n.includes(o)){const c=new URLSearchParams({page:e,limit:a,keyword:t,category:o});try{return(await i.get(`${s}/${r}?${c}`)).data}catch(l){console.error(l.message)}}if(t!=null){const c=new URLSearchParams({page:e,limit:a,keyword:t});try{return(await i.get(`${s}/${r}?${c}`)).data}catch(l){console.error(l.message)}}else if(n.includes(o))try{const c=new URLSearchParams({page:e,limit:a,category:o});return(await i.get(`${s}/${r}?${c}`)).data}catch(c){console.error(c.message)}else try{const c=new URLSearchParams({page:e,limit:a});return(await i.get(`${s}/${r}?${c}`)).data}catch(c){console.error(c.message)}}function Z(){let e;return window.innerWidth>=1440?e=9:window.innerWidth>=768?e=8:e=6,e}const f="/js_94_PMichelangelo/assets/icons-0a0825a5.svg";function E(){const e=JSON.parse(localStorage.getItem("cartData"))||[];document.querySelectorAll(".header-counter, .cart-counter").forEach(o=>{o?o.textContent=e.length.toString():console.error("Element with class 'header-counter' not found.")})}document.addEventListener("DOMContentLoaded",()=>{E()});const $="/js_94_PMichelangelo/assets/modal-email-mob-73cb03df.png",k="/js_94_PMichelangelo/assets/modal-email-mob-2x-700b42d6.png",C="/js_94_PMichelangelo/assets/modal-email-tab-afd72827.png",q="/js_94_PMichelangelo/assets/modal-email-tab-2x-354ceea1.png",_="/js_94_PMichelangelo/assets/modal-email-tab-afd72827.png",D="/js_94_PMichelangelo/assets/modal-email-tab-2x-354ceea1.png",O="/js_94_PMichelangelo/assets/cardPageModalImg-47702e30.png";function w(e){return(JSON.parse(localStorage.getItem("cartData"))||[]).includes(e)}let g=!1;async function Y(e){try{let n=function(u){document.querySelector(".modal-container").contains(u.target)||s()},s=function(){a.close(),d(),document.removeEventListener("click",n),c.removeEventListener("click",s),g=!1},r=function(u){u.key==="Escape"&&(a.close(),d(),document.removeEventListener("keydown",r))};const t=await P(e),o=document.createElement("div");o.innerHTML=`<div class="modal-container" data-id="${t._id}">
    <div class="modal-img-info-container">
        <div class="modal-img-container">
            <img class="modal-img" src="${t.img}" alt="${t.name}" loading="lazy" />
        </div>
        <div class="modal-name-container">
            <h3 class="modal-name">${t.name}</h3>
            <div class="modal-info-container">
                <p class="modal-info">Category: <span class="modal-span-info">${t.category.replace("_"," ").replace("_"," ")}</span></p>
                <p class="modal-info">Size: <span class="modal-span-info">${t.size.replace("oz","g")}</span></p>
                <p class="modal-info">Popularity: <span class="modal-span-info">${t.popularity}</span></p>
            </div>
            <p class="modal-desc">${t.desc}</p>
        </div>
    </div>
    <div class="modal-price-container">
        <p class="modal-price">$${t.price}</p>
        <button type="button" class="modal-button js-btn" title='add item' aria-label="add item">
            <span class="modal-button-text">Add to</span>
            <svg class="modal-button-icon" width="18" height="18">
                <use href="${f}#icon-shoping-cart"></use>
            </svg>
        </button>
        <button class='close-modal'> <svg class="close-modal-icon" width="10" height="10">
          <use href="${f}#icon-close-btn"></use>
        </svg></button>
    </div>
</div>`;const a=v.create(o);g||(a.show(),y(),g=!0),document.addEventListener("click",n),document.addEventListener("keydown",r);const c=document.querySelector(".close-modal-icon");c.addEventListener("click",s);const l=document.querySelector(".modal-button");l.addEventListener("click",u=>{const b=u.target.closest(".modal-container"),p=u.target.closest(".modal-button");if(b&&p){const L=b.getAttribute("data-id");g=!1;const m=p.querySelector(".modal-button-text");w(t._id)&&(m.textContent="Remove from"),m.textContent==="Add to"?(A(L),m.textContent="Remove from",p.classList.add("added-to-cart")):m.textContent==="Remove from"&&(R(L),m.textContent="Add to",p.classList.remove("added-to-cart")),N(L)}});const x=w(t._id),S=l.querySelector(".modal-button-text");x?(S.textContent="Remove from",l.classList.add("added-to-cart")):(S.textContent="Add to",l.classList.remove("added-to-cart"))}catch(t){console.error("Error fetching product:",t)}}function I(){try{let t=function(s){s.key==="Escape"&&(e.close(),d(),document.removeEventListener("keydown",t))},o=function(){e.close(),d(),document.removeEventListener("click",a),n.removeEventListener("click",o)},a=function(s){document.querySelector(".footer-modal").contains(s.target)||o()};const e=v.create(`<div class="footer-modal">
       <button class='close-footer-modal'> <svg class="icon-close-footer" width="10" height="10" title='close' aria-label="close">
          <use href="${f}#icon-close-btn"></use>
        </svg></button>
        <div class='footer-modal-content'><h3 class='footer-modal-title'>Thanks for subscribing for <span class='span'>new</span> products</h3>
        <p class='footer-modal-text'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
        <picture class='footer-modal-img'>
      <source
        srcset="
          ${$}     1x,
          ${k}  2x
        "
        media="(min-width: 375px) and (max-width: 767px)"
      />
      <source
        srcset="
          ${C}     1x,
          ${q}  2x
        "
        media="(min-width: 768px) and (max-width: 1439px)"
      />
      <source
        srcset="
          ${_}    1x,
          ${D}  2x
        "
        media="(min-width: 1440px)"
      />
      <img src="${$}" alt="vegetables" />
    </picture>
    </div>`);e.show(),y(),document.addEventListener("keydown",t);const n=document.querySelector(".close-footer-modal");n.addEventListener("click",o),document.addEventListener("click",a)}catch(e){console.error(e)}}function j(){try{let t=function(s){s.key==="Escape"&&(e.close(),d(),document.removeEventListener("keydown",t))},o=function(){e.close(),d(),document.removeEventListener("click",a),n.removeEventListener("click",o)},a=function(s){document.querySelector(".footer-modal-err").contains(s.target)||o()};const e=v.create(`<div class="footer-modal-err">
       <button class='close-footer-modal'> <svg class="icon-close-footer" width="10" height="10" title='close' aria-label="close">
          <use href="${f}#icon-close-btn"></use>
        </svg></button>
        <div class='footer-modal-content-err'><h3 class='footer-modal-err-title'>This <span>email address</span> has already been entered</h3>
        <p class='footer-modal-err-text'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
    </div>`);e.show(),y(),document.addEventListener("keydown",t);const n=document.querySelector(".close-footer-modal");n.addEventListener("click",o),document.addEventListener("click",a)}catch(e){console.error(e)}}function G(){try{let t=function(s){s.key==="Escape"&&(e.close(),d())},o=function(){e.close(),d(),document.removeEventListener("click",a),n.removeEventListener("click",o)},a=function(s){document.querySelector(".card-page-modal").contains(s.target)||o()};const e=v.create(`<div class="card-page-modal">
       <button class='close-footer-modal'> <svg class="icon-close-cardPage" width="18" height="18 "  title='close' aria-label="close">
          <use href="${f}#icon-close-btn"></use>
        </svg></button>
        <div class='card-page-modal-content'>
        <img src="${O}" alt="Order success" class='img img-order'/>
        <h3 class='card-page-modal-title'>Order success</h3>
        <p class='card-page-modal-text'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
    </div>`);e.show(),y(),document.addEventListener("keydown",t);const n=document.querySelector(".close-footer-modal");n.addEventListener("click",o),document.addEventListener("click",a)}catch(e){console.error(e)}}function y(){document.body.style.overflow="hidden"}function d(){document.body.style.overflow=""}function H(){!localStorage.getItem("cartData")&&localStorage.setItem("cartData",JSON.stringify([]))}function A(e){const t=JSON.parse(localStorage.getItem("cartData"))||[];t.push(e),localStorage.setItem("cartData",JSON.stringify(t)),E()}function R(e){const o=JSON.parse(localStorage.getItem("cartData")).filter(a=>a!=e);localStorage.setItem("cartData",JSON.stringify(o)),E()}function N(e){document.querySelector(`.js-card[data-id='${e}']`);const t=document.querySelectorAll(`.js-btn[data-id='${e}']`);Array.from(t).forEach(a=>{w(e)?a.classList.add("added"):a.classList.remove("added")})}let h;function K(e){e.preventDefault(),h=document.querySelector(".footer-input"),T(h.value)?U(h.value):alert("Please enter the correct email!")}function T(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}function U(e){const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};i.post(t,o).then(a=>{I()}).catch(a=>{a.message.includes("409")&&j()}).finally(a=>{h.value=""})}export{H as a,K as b,N as c,Y as d,A as e,W as f,P as g,J as h,f as i,F as j,Z as k,M as l,G as o,R as r,E as u};
//# sourceMappingURL=subscribeEmail-338e6ace.js.map
