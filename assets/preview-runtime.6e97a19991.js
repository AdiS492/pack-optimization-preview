(function(){"use strict";const l=document.querySelector("base"),o=new URL(l?l.href:"./",window.location.href),p=o.pathname.replace(/\/$/,""),n="cascade-preview-role",i=[{id:"buyer",name:"Buyer",detail:"Build carts and place orders"},{id:"approver",name:"Approver",detail:"Review pending orders and reports"},{id:"administrator",name:"Administrator",detail:"Explore the complete demo"}];function a(e){return new URL(String(e||"").replace(/^\/+/,""),o).href}window.__CASCADE_PREVIEW__=Object.freeze({baseUrl:o.href,basename:p,route:a});const u={dashboard:"Dashboard.html","order-pad":"index.html",orders:"index.html",history:"history.html","order-history":"history.html",reports:"report.html",help:"help.html",pending:"pending.html","out-of-stock":"outofstock.html"},s=decodeURIComponent(window.location.pathname);if(s.startsWith(o.pathname)){const e=s.slice(o.pathname.length).replace(/^\/+|\/+$/g,""),t=u[e.toLowerCase()];if(t){window.location.replace(a(t)+window.location.search+window.location.hash);return}}function w(){try{return window.localStorage.getItem(n)}catch{return null}}function g(e){try{window.localStorage.setItem(n,e)}catch{}}function m(){try{window.localStorage.removeItem(n)}catch{}}function h(){const e=w();return i.find(t=>t.id===e)||null}function d(e){e&&(document.documentElement.dataset.previewRole=e.id,document.querySelectorAll(".profile-button").forEach(t=>{t.textContent=`HI, ${e.name.toUpperCase()}`}))}function f(){if(document.getElementById("cascadePreviewStyles"))return;const e=document.createElement("style");e.id="cascadePreviewStyles",e.textContent=`
      .preview-login { position: fixed; inset: 0; z-index: 2147483647; display: grid; place-items: center; padding: 24px; background: radial-gradient(circle at 20% 10%, rgba(88, 196, 154, .22), transparent 38%), linear-gradient(145deg, #071b20, #10333a 58%, #0d262d); font-family: Arial, sans-serif; color: #102c32; }
      .preview-login__card { width: min(560px, 100%); padding: 34px; border: 1px solid rgba(255,255,255,.35); border-radius: 24px; background: rgba(255,255,255,.97); box-shadow: 0 30px 90px rgba(0,0,0,.35); }
      .preview-login__eyebrow { margin: 0 0 8px; color: #137a63; font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
      .preview-login h1 { margin: 0; font-size: clamp(28px, 5vw, 40px); line-height: 1.05; }
      .preview-login__intro { margin: 12px 0 24px; color: #567078; line-height: 1.55; }
      .preview-login__roles { display: grid; gap: 10px; }
      .preview-login__role { display: flex; align-items: center; justify-content: space-between; gap: 18px; width: 100%; padding: 16px 18px; border: 1px solid #d8e5e2; border-radius: 14px; background: #f8fbfa; color: #102c32; text-align: left; cursor: pointer; transition: transform .15s ease, border-color .15s ease, background .15s ease; }
      .preview-login__role:hover, .preview-login__role:focus-visible { transform: translateY(-1px); border-color: #38a986; background: #effaf6; outline: none; }
      .preview-login__role strong, .preview-login__role span { display: block; }
      .preview-login__role span { margin-top: 3px; color: #637b80; font-size: 13px; }
      .preview-login__arrow { color: #168267; font-size: 22px; }
      .preview-login__note { margin: 20px 0 0; color: #71868a; font-size: 12px; text-align: center; }
    `,document.head.appendChild(e)}function v(){f();const e=document.createElement("div");e.className="preview-login",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","previewLoginTitle"),e.innerHTML=`
      <section class="preview-login__card">
        <p class="preview-login__eyebrow">CASCADE Plus \xB7 Live demo</p>
        <h1 id="previewLoginTitle">Choose how to explore</h1>
        <p class="preview-login__intro">This standalone preview uses sample data. Pick a role to enter instantly\u2014no password or account required.</p>
        <div class="preview-login__roles">
          ${i.map(t=>`
            <button class="preview-login__role" type="button" data-preview-role="${t.id}">
              <span><strong>${t.name}</strong><span>${t.detail}</span></span>
              <b class="preview-login__arrow" aria-hidden="true">&#8594;</b>
            </button>
          `).join("")}
        </div>
        <p class="preview-login__note">Demo actions stay in this browser and do not contact a backend.</p>
      </section>
    `,document.body.appendChild(e),document.body.style.overflow="hidden",e.querySelectorAll("[data-preview-role]").forEach(t=>{t.addEventListener("click",()=>{const r=i.find(b=>b.id===t.dataset.previewRole);r&&(g(r.id),d(r),e.remove(),document.body.style.overflow="",window.dispatchEvent(new CustomEvent("cascade:preview-login",{detail:{role:r.id}})))})}),e.querySelector("[data-preview-role]").focus()}document.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest(".account-menu-item");!t||!/log\s*out/i.test(t.textContent)||(e.preventDefault(),e.stopImmediatePropagation(),m(),window.location.href=a("index.html"))},!0);function c(){const e=h();e?d(e):v()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c,{once:!0}):c()})();
