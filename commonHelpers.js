import{i as c,S as d}from"./assets/vendor-f3806725.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="42496728-577636fc2b585ecd9d4373a90",f="https://pixabay.com/api/";function y(o){const r=`${f}?key=${m}&q=${o}`;return fetch(r).then(s=>{if(!s.ok)throw new Error("image error!");return s.json()})}function g(o,r){o.length===0&&c.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),r.innerHTML=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:u})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${i}">
                        <img class="gallery-image" src="${s}" alt="${e}" />
                    </a>
                    <div class="parameters">
                        <div class="params">
                            <p class="options">Likes</p>
                            <p class="quantity">${t}</p>
                        </div>
                        <div class="params">
                            <p class="options">Views</p>
                            <p class="quantity">${a}</p>
                        </div>
                        <div class="params">
                            <p class="options">Comments</p>
                            <p class="quantity">${p}</p>
                        </div>
                        <div class="params">
                            <p class="options">Downloads</p>
                            <p class="quantity">${u}</p>
                        </div>
                    </div>
                </li>`).join("")}const n=document.querySelector(".input"),h=document.querySelector(".gallery"),v=document.querySelector(".form"),l=document.querySelector(".loader");v.addEventListener("submit",b);function b(o){o.preventDefault();const r=n.value;l.style.display="block",y(r).then(s=>{const i=s.hits;g(i,h),new d(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}).on("error.simplelightbox",function(t){console.log(t)})}).catch(s=>{c.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})}).finally(()=>{l.style.display="none",n.value=""})}
//# sourceMappingURL=commonHelpers.js.map
