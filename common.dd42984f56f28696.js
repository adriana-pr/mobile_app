"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9573:(O,v,r)=>{r.d(v,{c:()=>o});var h=r(8813),d=r(9951),a=r(6535);const o=(e,s)=>{let t,n;const _=(c,w,M)=>{if(typeof document>"u")return;const p=document.elementFromPoint(c,w);p&&s(p)?p!==t&&(i(),g(p,M)):i()},g=(c,w)=>{t=c,n||(n=t);const M=t;(0,h.w)(()=>M.classList.add("ion-activated")),w()},i=(c=!1)=>{if(!t)return;const w=t;(0,h.w)(()=>w.classList.remove("ion-activated")),c&&n!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>_(c.currentX,c.currentY,d.a),onMove:c=>_(c.currentX,c.currentY,d.b),onEnd:()=>{i(!0),(0,d.h)(),n=void 0}})}},1836:(O,v,r)=>{r.d(v,{g:()=>d});var h=r(1848);const d=()=>{if(void 0!==h.w)return h.w.Capacitor}},983:(O,v,r)=>{r.d(v,{c:()=>h,i:()=>d});const h=(a,o,e)=>"function"==typeof e?e(a,o):"string"==typeof e?a[e]===o[e]:Array.isArray(o)?o.includes(a):a===o,d=(a,o,e)=>void 0!==a&&(Array.isArray(a)?a.some(s=>h(s,o,e)):h(a,o,e))},4510:(O,v,r)=>{r.d(v,{g:()=>h});const h=(s,t,n,_,g)=>a(s[1],t[1],n[1],_[1],g).map(i=>d(s[0],t[0],n[0],_[0],i)),d=(s,t,n,_,g)=>g*(3*t*Math.pow(g-1,2)+g*(-3*n*g+3*n+_*g))-s*Math.pow(g-1,3),a=(s,t,n,_,g)=>e((_-=g)-3*(n-=g)+3*(t-=g)-(s-=g),3*n-6*t+3*s,3*t-3*s,s).filter(c=>c>=0&&c<=1),e=(s,t,n,_)=>{if(0===s)return((s,t,n)=>{const _=t*t-4*s*n;return _<0?[]:[(-t+Math.sqrt(_))/(2*s),(-t-Math.sqrt(_))/(2*s)]})(t,n,_);const g=(3*(n/=s)-(t/=s)*t)/3,i=(2*t*t*t-9*t*n+27*(_/=s))/27;if(0===g)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-g),-Math.sqrt(-g)];const c=Math.pow(i/2,2)+Math.pow(g/3,3);if(0===c)return[Math.pow(i/2,.5)-t/3];if(c>0)return[Math.pow(-i/2+Math.sqrt(c),1/3)-Math.pow(i/2+Math.sqrt(c),1/3)-t/3];const w=Math.sqrt(Math.pow(-g/3,3)),M=Math.acos(-i/(2*Math.sqrt(Math.pow(-g/3,3)))),p=2*Math.pow(w,1/3);return[p*Math.cos(M/3)-t/3,p*Math.cos((M+2*Math.PI)/3)-t/3,p*Math.cos((M+4*Math.PI)/3)-t/3]}},4162:(O,v,r)=>{r.d(v,{i:()=>h});const h=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(O,v,r)=>{r.r(v),r.d(v,{startFocusVisible:()=>o});const h="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=e=>{let s=[],t=!0;const n=e?e.shadowRoot:document,_=e||document.body,g=E=>{s.forEach(l=>l.classList.remove(h)),E.forEach(l=>l.classList.add(h)),s=E},i=()=>{t=!1,g([])},c=E=>{t=a.includes(E.key),t||g([])},w=E=>{if(t&&void 0!==E.composedPath){const l=E.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));g(l)}},M=()=>{n.activeElement===_&&g([])};return n.addEventListener("keydown",c),n.addEventListener("focusin",w),n.addEventListener("focusout",M),n.addEventListener("touchstart",i,{passive:!0}),n.addEventListener("mousedown",i),{destroy:()=>{n.removeEventListener("keydown",c),n.removeEventListener("focusin",w),n.removeEventListener("focusout",M),n.removeEventListener("touchstart",i),n.removeEventListener("mousedown",i)},setFocus:g}}},9749:(O,v,r)=>{r.d(v,{c:()=>d});var h=r(512);const d=s=>{const t=s;let n;return{hasLegacyControl:()=>{if(void 0===n){const g=void 0!==t.label||a(t),i=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,h.h)(t);n=!0===t.legacy||!g&&!i&&null!==c}return n}}},a=s=>!!(o.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||e.includes(s.tagName)&&""!==s.textContent),o=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(O,v,r)=>{r.d(v,{I:()=>d,a:()=>t,b:()=>n,c:()=>s,d:()=>g,h:()=>_});var h=r(1836),d=function(i){return i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT",i}(d||{});const o={getEngine(){const i=window.TapticEngine;if(i)return i;const c=(0,h.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,h.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,h.g)(),impact(i){const c=this.getEngine();if(!c)return;const w=this.isCapacitor()?i.style:i.style.toLowerCase();c.impact({style:w})},notification(i){const c=this.getEngine();if(!c)return;const w=this.isCapacitor()?i.type:i.type.toLowerCase();c.notification({type:w})},selection(){const i=this.isCapacitor()?d.Light:"light";this.impact({style:i})},selectionStart(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionStart():i.gestureSelectionStart())},selectionChanged(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionChanged():i.gestureSelectionChanged())},selectionEnd(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionEnd():i.gestureSelectionEnd())}},e=()=>o.available(),s=()=>{e()&&o.selection()},t=()=>{e()&&o.selectionStart()},n=()=>{e()&&o.selectionChanged()},_=()=>{e()&&o.selectionEnd()},g=i=>{e()&&o.impact(i)}},7946:(O,v,r)=>{r.d(v,{I:()=>s,a:()=>g,b:()=>e,c:()=>w,d:()=>p,f:()=>i,g:()=>_,i:()=>n,p:()=>M,r:()=>E,s:()=>c});var h=r(5861),d=r(512),a=r(2400);const e="ion-content",s=".ion-content-scroll-host",t=`${e}, ${s}`,n=l=>"ION-CONTENT"===l.tagName,_=function(){var l=(0,h.Z)(function*(u){return n(u)?(yield new Promise(f=>(0,d.c)(u,f)),u.getScrollElement()):u});return function(f){return l.apply(this,arguments)}}(),g=l=>l.querySelector(s)||l.querySelector(t),i=l=>l.closest(t),c=(l,u)=>n(l)?l.scrollToTop(u):Promise.resolve(l.scrollTo({top:0,left:0,behavior:u>0?"smooth":"auto"})),w=(l,u,f,C)=>n(l)?l.scrollByPoint(u,f,C):Promise.resolve(l.scrollBy({top:f,left:u,behavior:C>0?"smooth":"auto"})),M=l=>(0,a.b)(l,e),p=l=>{if(n(l)){const f=l.scrollY;return l.scrollY=!1,f}return l.style.setProperty("overflow","hidden"),!0},E=(l,u)=>{n(l)?l.scrollY=u:l.style.removeProperty("overflow")}},1076:(O,v,r)=>{r.d(v,{a:()=>h,b:()=>w,c:()=>t,d:()=>M,e:()=>P,f:()=>s,g:()=>p,h:()=>a,i:()=>d,j:()=>C,k:()=>y,l:()=>n,m:()=>i,n:()=>E,o:()=>g,p:()=>e,q:()=>o,r:()=>f,s:()=>m,t:()=>c,u:()=>l,v:()=>u,w:()=>_});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(O,v,r)=>{r.d(v,{c:()=>o,g:()=>e});var h=r(1848),d=r(512),a=r(2400);const o=(t,n,_)=>{let g,i;if(void 0!==h.w&&"MutationObserver"in h.w){const p=Array.isArray(n)?n:[n];g=new MutationObserver(E=>{for(const l of E)for(const u of l.addedNodes)if(u.nodeType===Node.ELEMENT_NODE&&p.includes(u.slot))return _(),void(0,d.r)(()=>c(u))}),g.observe(t,{childList:!0})}const c=p=>{var E;i&&(i.disconnect(),i=void 0),i=new MutationObserver(l=>{_();for(const u of l)for(const f of u.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===n&&M()}),i.observe(null!==(E=p.parentElement)&&void 0!==E?E:p,{subtree:!0,childList:!0})},M=()=>{i&&(i.disconnect(),i=void 0)};return{destroy:()=>{g&&(g.disconnect(),g=void 0),M()}}},e=(t,n,_)=>{const g=null==t?0:t.toString().length,i=s(g,n);if(void 0===_)return i;try{return _(g,n)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),i}},s=(t,n)=>`${t} / ${n}`},6591:(O,v,r)=>{r.r(v),r.d(v,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>y,keyboardDidClose:()=>l,keyboardDidOpen:()=>p,keyboardDidResize:()=>E,resetKeyboardAssist:()=>g,setKeyboardClose:()=>M,setKeyboardOpen:()=>w,startKeyboardAssist:()=>i,trackViewportChanges:()=>C});var h=r(3920);r(1836),r(1848);const o="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},_=!1;const g=()=>{t={},n={},_=!1},i=m=>{if(h.K.getEngine())c(m);else{if(!m.visualViewport)return;n=y(m.visualViewport),m.visualViewport.onresize=()=>{C(m),p()||E(m)?w(m):l(m)&&M(m)}}},c=m=>{m.addEventListener("keyboardDidShow",P=>w(m,P)),m.addEventListener("keyboardDidHide",()=>M(m))},w=(m,P)=>{u(m,P),_=!0},M=m=>{f(m),_=!1},p=()=>!_&&t.width===n.width&&(t.height-n.height)*n.scale>150,E=m=>_&&!l(m),l=m=>_&&n.height===m.innerHeight,u=(m,P)=>{const D=new CustomEvent(o,{detail:{keyboardHeight:P?P.keyboardHeight:m.innerHeight-n.height}});m.dispatchEvent(D)},f=m=>{const P=new CustomEvent(e);m.dispatchEvent(P)},C=m=>{t=Object.assign({},n),n=y(m.visualViewport)},y=m=>({width:Math.round(m.width),height:Math.round(m.height),offsetTop:m.offsetTop,offsetLeft:m.offsetLeft,pageTop:m.pageTop,pageLeft:m.pageLeft,scale:m.scale})},3920:(O,v,r)=>{r.d(v,{K:()=>o,a:()=>a});var h=r(1836),d=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(d||{}),a=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(a||{});const o={getEngine(){const e=(0,h.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(s=>{if(s.code!==d.Unimplemented)throw s}):Promise.resolve(void 0)}}},9252:(O,v,r)=>{r.d(v,{c:()=>s});var h=r(5861),d=r(1848),a=r(3920);const o=t=>{if(void 0===d.d||t===a.a.None||void 0===t)return null;const n=d.d.querySelector("ion-app");return null!=n?n:d.d.body},e=t=>{const n=o(t);return null===n?0:n.clientHeight},s=function(){var t=(0,h.Z)(function*(n){let _,g,i,c;const w=function(){var u=(0,h.Z)(function*(){const f=yield a.K.getResizeMode(),C=void 0===f?void 0:f.mode;_=()=>{void 0===c&&(c=e(C)),i=!0,M(i,C)},g=()=>{i=!1,M(i,C)},null==d.w||d.w.addEventListener("keyboardWillShow",_),null==d.w||d.w.addEventListener("keyboardWillHide",g)});return function(){return u.apply(this,arguments)}}(),M=(u,f)=>{n&&n(u,p(f))},p=u=>{if(0===c||c===e(u))return;const f=o(u);return null!==f?new Promise(C=>{const m=new ResizeObserver(()=>{f.clientHeight===c&&(m.disconnect(),C())});m.observe(f)}):void 0};return yield w(),{init:w,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",_),null==d.w||d.w.removeEventListener("keyboardWillHide",g),_=g=void 0},isKeyboardVisible:()=>i}});return function(_){return t.apply(this,arguments)}}()},9229:(O,v,r)=>{r.d(v,{c:()=>d});var h=r(5861);const d=()=>{let a;return{lock:function(){var e=(0,h.Z)(function*(){const s=a;let t;return a=new Promise(n=>t=n),void 0!==s&&(yield s),t});return function(){return e.apply(this,arguments)}}()}}},4793:(O,v,r)=>{r.d(v,{c:()=>a});var h=r(1848),d=r(512);const a=(o,e,s)=>{let t;const n=()=>!(void 0===e()||void 0!==o.label||null===s()),g=()=>{const c=e();if(void 0===c)return;if(!n())return void c.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===c.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const M=t=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(g(),M.disconnect(),t=void 0)},{threshold:.01,root:o});M.observe(c)}else c.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{n()&&(0,d.r)(()=>{g()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},2217:(O,v,r)=>{r.d(v,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(a,o,e)=>{const s=a*o/e-a+"ms",t=2*Math.PI*o/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,o,e)=>{const s=o/e,t=a*s-a+"ms",n=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,o,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*o+(o<e/2?180:-180)}deg)`,"animation-delay":a*o/e-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,o,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*o+(o<e/2?180:-180)}deg)`,"animation-delay":a*o/e-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,o,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/e-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,o,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/e-a+"ms"}})}}},3049:(O,v,r)=>{r.r(v),r.d(v,{createSwipeBackGesture:()=>e});var h=r(512),d=r(4162),a=r(6535);r(2019);const e=(s,t,n,_,g)=>{const i=s.ownerDocument.defaultView;let c=(0,d.i)(s);const M=f=>c?-f.deltaX:f.deltaX;return(0,a.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(c=(0,d.i)(s),(f=>{const{startX:y}=f;return c?y>=i.innerWidth-50:y<=50})(f)&&t()),onStart:n,onMove:f=>{const y=M(f)/i.innerWidth;_(y)},onEnd:f=>{const C=M(f),y=i.innerWidth,m=C/y,P=(f=>c?-f.velocityX:f.velocityX)(f),D=P>=0&&(P>.2||C>y/2),L=(D?1-m:m)*y;let A=0;if(L>5){const b=L/Math.abs(P);A=Math.min(b,540)}g(D,m<=0?.01:(0,h.l)(0,m,.9999),A)}})}},6806:(O,v,r)=>{r.d(v,{w:()=>h});const h=(o,e,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{s(d(n,e))});return t.observe(o,{childList:!0,subtree:!0}),t},d=(o,e)=>{let s;return o.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)s=a(t.addedNodes[n],e)||s}),s},a=(o,e)=>{if(1!==o.nodeType)return;const s=o;return(s.tagName===e.toUpperCase()?[s]:Array.from(s.querySelectorAll(e))).find(n=>n.value===s.value)}},6513:(O,v,r)=>{r.r(v),r.d(v,{HomeDetailsPage:()=>i,HomeDetailsPageModule:()=>M});var h=r(6814),d=r(95),a=r(9810),o=r(1837),e=r(9212),s=r(6955),t=r(2333);function n(p,E){if(1&p&&(e.TgZ(0,"ion-title"),e._uU(1),e.qZA()),2&p){const l=e.oxw();e.xp6(),e.Oqu(l.recipe.name)}}function _(p,E){1&p&&e._UZ(0,"ion-icon",6)}function g(p,E){if(1&p){const l=e.EpF();e.TgZ(0,"ion-content",7),e._UZ(1,"ion-action-sheet",8),e.TgZ(2,"ion-alert",9),e.NdJ("didDismiss",function(){e.CHM(l);const f=e.oxw();return e.KtG(f.setOpen(!1))}),e.qZA(),e.TgZ(3,"div",10)(4,"img",11),e.NdJ("error",function(){e.CHM(l);const f=e.oxw();return e.KtG(f.replaceImageOnError(f.recipe))}),e.qZA()(),e.TgZ(5,"div",12)(6,"div",13)(7,"div",14),e._UZ(8,"img",15),e.TgZ(9,"h3"),e._uU(10,"\u0406\u043d\u0433\u0440\u0456\u0434\u0456\u0454\u043d\u0442\u0438:"),e.qZA()(),e.TgZ(11,"p"),e._uU(12),e.qZA()(),e.TgZ(13,"div",16)(14,"div",14),e._UZ(15,"img",17),e.TgZ(16,"h3"),e._uU(17,"\u041f\u0440\u0438\u0433\u043e\u0442\u0443\u0432\u0430\u043d\u043d\u044f:"),e.qZA()(),e.TgZ(18,"p"),e._uU(19),e.qZA()()()()}if(2&p){const l=e.oxw();e.Q6J("fullscreen",!0),e.xp6(),e.Q6J("buttons",l.actionSheetButtonsRecipe),e.xp6(),e.s9C("header",l.messageAlert),e.Q6J("isOpen",l.isAlertOpen)("buttons",l.alertButtons),e.xp6(2),e.s9C("src",l.recipe.image_url,e.LSH),e.s9C("alt",l.recipe.name),e.xp6(8),e.Oqu(l.recipe.ingredients),e.xp6(7),e.Oqu(l.recipe.preparation)}}let i=(()=>{var p;class E{constructor(u,f,C,y,m){this.route=u,this.service=f,this.router=C,this.alertController=y,this.getToken=m,this.deleteData={id_recipe:"",token:""},this.menu=!1,this.notFound=!1,this.messageAlert="",this.isAlertOpen=!1,this.alertButtons=[{cssClass:"alert-button-confirm",text:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",handler:()=>{this.router.navigate([""]).then(P=>{this.router.navigate(["myRecipes"])})}}],this.actionSheetButtonsRecipe=[{text:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0446\u0435\u043f\u0442",role:"edit",handler:()=>{this.router.navigate(["/recipe-edit",this.id,{category:this.categoryId}])}},{text:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0440\u0435\u0446\u0435\u043f\u0442",cssClass:"alert-button-delete",role:"delete",handler:()=>{this.presentConfirmationAlert()}},{text:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",role:"cancel",handler:()=>{}}]}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.service.getRecipe(this.id).subscribe(u=>{this.recipe=u})}ionViewWillEnter(){this.categoryId=this.route.snapshot.paramMap.get("secondId"),this.menu=null!=this.categoryId}presentConfirmationAlert(){this.alertController.create({header:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456?",message:"\u0426\u044f \u0434\u0456\u044f \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0441\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u0430.",cssClass:"alert",buttons:[{text:"\u041d\u0456",role:"cancel",cssClass:"cancel alert-button-confirm ",handler:()=>{}},{text:"\u0422\u0430\u043a",cssClass:"delete alert-button-confirm ",handler:()=>{this.deleteCategory()}}]}).then(f=>f.present())}deleteCategory(){this.token=this.getToken.getLogin(),[this.deleteData.id_recipe,this.deleteData.token]=[this.id,JSON.parse(this.token)],this.service.deleteRecipe(this.deleteData).subscribe(u=>{"success"==u.message&&(this.messageAlert="\u0420\u0435\u0446\u0435\u043f\u0442 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e!",this.setOpen(!0))})}setOpen(u){this.isAlertOpen=u}replaceImageOnError(u){u.image_url="/assets/icon/recipe_1889972.png"}}return(p=E).\u0275fac=function(u){return new(u||p)(e.Y36(o.gz),e.Y36(s.v),e.Y36(o.F0),e.Y36(a.Br),e.Y36(t.e))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-home-details"]],decls:7,vars:4,consts:[[3,"translucent"],[4,"ngIf"],["slot","start"],["text","","defaultHref","/home"],["id","open-action-sheet-recipe","slot","end","name","ellipsis-horizontal-outline",4,"ngIf"],[3,"fullscreen",4,"ngIf"],["id","open-action-sheet-recipe","slot","end","name","ellipsis-horizontal-outline"],[3,"fullscreen"],["trigger","open-action-sheet-recipe",1,"my-custom-class",3,"buttons"],["subHeader","","message","",1,"alert",3,"isOpen","header","buttons","didDismiss"],[1,"img"],[3,"src","alt","error"],[1,"text-content"],[1,"ingredients"],[1,"flex-container"],["src","https://i.imgur.com/jmuLSf3.png","alt","ingredients image"],[1,"preparation"],["src","https://i.imgur.com/XWS5fSg.png","alt","ingredients image"]],template:function(u,f){1&u&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar"),e.YNc(2,n,2,1,"ion-title",1),e.TgZ(3,"ion-buttons",2),e._UZ(4,"ion-back-button",3),e.qZA(),e.YNc(5,_,1,0,"ion-icon",4),e.qZA()(),e.YNc(6,g,20,9,"ion-content",5)),2&u&&(e.Q6J("translucent",!0),e.xp6(2),e.Q6J("ngIf",f.recipe),e.xp6(3),e.Q6J("ngIf",f.menu),e.xp6(),e.Q6J("ngIf",f.recipe))},dependencies:[h.O5,a.uo,a.Ge,a.Sm,a.W2,a.Gu,a.gu,a.wd,a.sr,a.oU],styles:["ion-title[_ngcontent-%COMP%], ion-back-button[_ngcontent-%COMP%]{color:#333}ion-title[_ngcontent-%COMP%]{font-size:20px}ion-icon[_ngcontent-%COMP%]{font-size:30px;color:#333;padding-right:10px}ion-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0 0 15px 15px}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{padding:0 10px 10px}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#536c2d;font-size:24px}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .preparation[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]{display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .ingredients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .preparation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .preparation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;margin:0 8px 0 5px}"]}),E})();const c=[{path:"",component:i}];let w=(()=>{var p;class E{}return(p=E).\u0275fac=function(u){return new(u||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[o.Bz.forChild(c),o.Bz]}),E})(),M=(()=>{var p;class E{}return(p=E).\u0275fac=function(u){return new(u||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[h.ez,d.u5,a.Pc,w]}),E})()},3245:(O,v,r)=>{r.d(v,{G:()=>a});var h=r(9212),d=r(9862);let a=(()=>{var o;class e{constructor(t){this.http=t,this.url="http://localhost:8888/serverPHP"}setCategories(t){localStorage.setItem("categories",JSON.stringify(t))}getCategoriesFromLocalStorage(){return this.data=localStorage.getItem("categories"),JSON.parse(this.data)}removeCategories(){localStorage.removeItem("categories")}getCategories(t){return this.http.post(`${this.url}/getCategories.php`,t)}insertCategory(t){return this.http.post(`${this.url}/insertCategory.php`,t)}getCategory(t){return this.http.post(`${this.url}/getCategory.php`,t)}uptadeCategory(t){return this.http.post(`${this.url}/updateCategory.php`,t)}deleteCategory(t){return this.http.post(`${this.url}/deleteCategory.php`,t)}}return(o=e).\u0275fac=function(t){return new(t||o)(h.LFG(d.eN))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),e})()},6955:(O,v,r)=>{r.d(v,{v:()=>a});var h=r(9212),d=r(9862);let a=(()=>{var o;class e{constructor(t){this.http=t,this.url="http://localhost:8888/serverPHP"}getRecipes(t){return this.http.post(`${this.url}/getRecipes.php`,t)}getRecipe(t){return this.http.post(`${this.url}/getRecipe.php`,t)}insertRecipe(t){return this.http.post(`${this.url}/insertRecipe.php`,t)}getRecipesFromCategory(t){return this.http.post(`${this.url}/getRecipesFromCategory.php`,t)}uptadeRecipe(t){return this.http.post(`${this.url}/updateRecipe.php`,t)}deleteRecipe(t){return this.http.post(`${this.url}/deleteRecipe.php`,t)}}return(o=e).\u0275fac=function(t){return new(t||o)(h.LFG(d.eN))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),e})()}}]);