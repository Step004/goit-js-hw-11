import{i as u,S as m}from"./assets/vendor-f3806725.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="42496728-577636fc2b585ecd9d4373a90",g="https://pixabay.com/api/";function h(s){const r=`${g}?key=${y}&q=${s}`;return fetch(r).then(o=>{if(!o.ok)throw new Error("image error!");return o.json()})}function v(s,r){s.length===0&&u.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),r.innerHTML=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${i}">
                        <img class="gallery-image" src="${o}" alt="${e}" />
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
                            <p class="quantity">${d}</p>
                        </div>
                        <div class="params">
                            <p class="options">Downloads</p>
                            <p class="quantity">${f}</p>
                        </div>
                    </div>
                </li>`).join("")}function L(s,r){s.innerHTML="",r&&r.refresh()}const l=document.querySelector(".input"),c=document.querySelector(".gallery"),b=document.querySelector(".form"),p=document.querySelector(".loader");let n;b.addEventListener("submit",q);function q(s){s.preventDefault();const r=l.value;p.style.display="block",L(c,n),h(r).then(o=>{const i=o.hits;v(i,c),n=new m(".gallery a",{background:"rgba(46, 47, 66, 0.8)",captionDelay:250,captionsData:"alt"}),n.on("error.simplelightbox",function(e){console.log(e)})}).catch(o=>{u.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})}).finally(()=>{p.style.display="none",l.value=""})}
//# sourceMappingURL=commonHelpers.js.map
