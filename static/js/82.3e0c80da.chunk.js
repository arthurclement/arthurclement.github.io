/*! For license information please see 82.3e0c80da.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpokemon_search_react=self.webpackChunkpokemon_search_react||[]).push([[82],{82:(e,t,o)=>{o.r(t),o.d(t,{startInputShims:()=>b});var n=o(286),i=o(721),r=o(384),s=o(440);const a=new WeakMap,d=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];a.has(e)!==o&&(o?l(e,t,n,i):c(e,t))},l=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),a.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(s,"px,").concat(o,"px,0) scale(0)")},c=(e,t)=>{const o=a.get(e);o&&(a.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},u="input, textarea, [no-blur], [contenteditable]",v=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,n-o)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-a)}},m="$ionPaddingTimer",w=(e,t,o)=>{const n=e[m];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e[m]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},f=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&w(t,0,o)}),{once:!0})};let h=0;const p="data-ionic-skip-scroll-assist",y=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},g=async function(e,t,o,n,s,a){let l=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];if(!o&&!n)return;const u=((e,t,o,n)=>{var i;const r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),o,n)})(e,o||n,s,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0);if(o&&Math.abs(u.scrollAmount)<4)return y(t),void(a&&null!==o&&(w(o,h),f(t,o,(()=>h=0))));if(d(e,t,!0,u.inputSafeY,l),y(t),(0,r.r)((()=>e.click())),a&&o&&(h=u.scrollPadding,w(o,h)),"undefined"!==typeof window){let n;const r=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),o&&await(0,i.c)(o,0,u.scrollAmount,u.scrollDuration),d(e,t,!1,u.inputSafeY),y(t),a&&f(t,o,(()=>h=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(o){const e=await(0,i.g)(o),a=e.scrollHeight-e.clientHeight;if(c&&u.scrollAmount>a-e.scrollTop)return"password"===t.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(n=setTimeout(r,1e3))}r()}},b=async(e,t)=>{if(void 0===n.d)return;const o="ios"===t,a="android"===t,l=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",o),m=e.getBoolean("inputBlurring",!1),w=e.getBoolean("scrollPadding",!0),f=Array.from(n.d.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,y=new WeakMap,b=await s.K.getResizeMode(),E=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),u=(0,i.a)(e),m=u?null:e.closest("ion-footer");if(!o)return;if(u&&v&&!h.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const n=o=>{var n;(n=t)===n.getRootNode().activeElement&&d(e,t,o)},i=()=>d(e,t,!1),s=()=>n(!0),a=()=>n(!1);return(0,r.a)(o,"ionScrollStart",s),(0,r.a)(o,"ionScrollEnd",a),t.addEventListener("blur",i),()=>{(0,r.b)(o,"ionScrollStart",s),(0,r.b)(o,"ionScrollEnd",a),t.removeEventListener("blur",i)}})(e,o,u);h.set(e,t)}if(!("date"===o.type||"datetime-local"===o.type)&&(u||m)&&c&&!y.has(e)){const t=function(e,t,o,i,r,a,d){let l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const c=a&&(void 0===d||d.mode===s.a.None);let u=!1;const v=void 0!==n.w?n.w.innerHeight:0,m=n=>{!1!==u?g(e,t,o,i,n.detail.keyboardHeight,c,l,v,!1):u=!0},w=()=>{u=!1,null===n.w||void 0===n.w||n.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w)},f=async()=>{t.hasAttribute(p)?t.removeAttribute(p):(g(e,t,o,i,r,c,l,v),null===n.w||void 0===n.w||n.w.addEventListener("ionKeyboardDidShow",m),e.addEventListener("focusout",w))};return e.addEventListener("focusin",f),()=>{e.removeEventListener("focusin",f),null===n.w||void 0===n.w||n.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w)}}(e,o,u,m,l,w,b,a);y.set(e,t)}};m&&(()=>{let e=!0,t=!1;const o=document,n=()=>{t=!0},i=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(u))return;const r=n.target;r!==i&&(r.matches(u)||r.closest(u)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};(0,r.a)(o,"ionScrollStart",n),o.addEventListener("focusin",i,!0),o.addEventListener("touchend",s,!1)})();for(const n of f)E(n);n.d.addEventListener("ionInputDidLoad",(e=>{E(e.detail)})),n.d.addEventListener("ionInputDidUnload",(e=>{(e=>{if(v){const t=h.get(e);t&&t(),h.delete(e)}if(c){const t=y.get(e);t&&t(),y.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=82.3e0c80da.chunk.js.map