const t="dynamic-framework";let e;let n;let s=false;let l=false;let o=false;let c=false;let i=null;let f=false;const r=(t,e="")=>{{return()=>{}}};const u=(t,e)=>{{return()=>{}}};const a="{visibility:hidden}.hydrated{visibility:inherit}";const d="http://www.w3.org/1999/xlink";const m={};const $=t=>{t=typeof t;return t==="object"||t==="function"};function h(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const b=(t,e,...n)=>{let s=null;let l=null;let o=null;let c=false;let i=false;const f=[];const r=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(c=typeof t!=="function"&&!$(s)){s=String(s)}if(c&&i){f[f.length-1].t+=s}else{f.push(c?p(null,s):s)}i=c}}};r(n);if(e){if(e.key){l=e.key}if(e.name){o=e.name}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}if(typeof t==="function"){return t(e===null?{}:e,f,v)}const u=p(t,null);u.l=e;if(f.length>0){u.o=f}{u.i=l}{u.u=o}return u};const p=(t,e)=>{const n={m:0,$:t,t:e,h:null,o:null};{n.l=null}{n.i=null}{n.u=null}return n};const y={};const w=t=>t&&t.$===y;const v={forEach:(t,e)=>t.map(k).forEach(e),map:(t,e)=>t.map(k).map(e).map(g)};const k=t=>({vattrs:t.l,vchildren:t.o,vkey:t.i,vname:t.u,vtag:t.$,vtext:t.t});const g=t=>{if(typeof t.vtag==="function"){const e=Object.assign({},t.vattrs);if(t.vkey){e.key=t.vkey}if(t.vname){e.name=t.vname}return b(t.vtag,e,...t.vchildren||[])}const e=p(t.vtag,t.vtext);e.l=t.vattrs;e.o=t.vchildren;e.i=t.vkey;e.u=t.vname;return e};const j=(t,e)=>{if(t!=null&&!$(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&2){return parseFloat(t)}if(e&1){return String(t)}return t}return t};const O=t=>ht(t).p;const x=(t,e,n)=>{const s=O(t);return{emit:t=>M(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const M=(t,e,n)=>{const s=Ot.ce(e,n);t.dispatchEvent(s);return s};const P=(t,e,n,s,l,o)=>{if(n!==s){let c=yt(t,e);let i=e.toLowerCase();if(e==="class"){const e=t.classList;const l=R(n);const o=R(s);e.remove(...l.filter((t=>t&&!o.includes(t))));e.add(...o.filter((t=>t&&!l.includes(t))))}else if(e==="style"){{for(const e in n){if(!s||s[e]==null){if(e.includes("-")){t.style.removeProperty(e)}else{t.style[e]=""}}}}for(const e in s){if(!n||s[e]!==n[e]){if(e.includes("-")){t.style.setProperty(e,s[e])}else{t.style[e]=s[e]}}}}else if(e==="key");else if(e==="ref"){if(s){s(t)}}else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(yt(gt,i)){e=i.slice(2)}else{e=i[2]+e.slice(3)}if(n){Ot.rel(t,e,n,false)}if(s){Ot.ael(t,e,s,false)}}else{const f=$(s);if((c||f&&s!==null)&&!l){try{if(!t.tagName.includes("-")){const l=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=l){t[e]=l}}else{t[e]=s}}catch(t){}}let r=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){e=i;r=true}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){if(r){t.removeAttributeNS(d,e)}else{t.removeAttribute(e)}}}else if((!c||o&4||l)&&!f){s=s===true?"":s;if(r){t.setAttributeNS(d,e,s)}else{t.setAttribute(e,s)}}}}};const C=/\s/;const R=t=>!t?[]:t.split(C);const T=(t,e,n,s)=>{const l=e.h.nodeType===11&&e.h.host?e.h.host:e.h;const o=t&&t.l||m;const c=e.l||m;{for(s in o){if(!(s in c)){P(l,s,o[s],undefined,n,e.m)}}}for(s in c){P(l,s,o[s],c[s],n,e.m)}};const E=(t,l,i,f)=>{const r=l.o[i];let u=0;let a;let d;let m;if(!s){o=true;if(r.$==="slot"){r.m|=r.o?2:1}}if(r.t!==null){a=r.h=jt.createTextNode(r.t)}else if(r.m&1){a=r.h=jt.createTextNode("")}else{a=r.h=jt.createElement(r.m&2?"slot-fb":r.$);{T(null,r,c)}if(r.o){for(u=0;u<r.o.length;++u){d=E(t,r,u);if(d){a.appendChild(d)}}}}{a["s-hn"]=n;if(r.m&(2|1)){a["s-sr"]=true;a["s-cr"]=e;a["s-sn"]=r.u||"";m=t&&t.o&&t.o[i];if(m&&m.$===r.$&&t.h){L(t.h,false)}}}return a};const L=(t,e)=>{Ot.m|=1;const s=t.childNodes;for(let t=s.length-1;t>=0;t--){const l=s[t];if(l["s-hn"]!==n&&l["s-ol"]){W(l).insertBefore(l,S(l));l["s-ol"].remove();l["s-ol"]=undefined;o=true}if(e){L(l,e)}}Ot.m&=~1};const N=(t,e,n,s,l,o)=>{let c=t["s-cr"]&&t["s-cr"].parentNode||t;let i;for(;l<=o;++l){if(s[l]){i=E(null,n,l);if(i){s[l].h=i;c.insertBefore(i,S(e))}}}};const U=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.h;_(e);if(t){{l=true;if(t["s-ol"]){t["s-ol"].remove()}else{L(t,true)}}t.remove()}}}};const A=(t,e,n,s)=>{let l=0;let o=0;let c=0;let i=0;let f=e.length-1;let r=e[0];let u=e[f];let a=s.length-1;let d=s[0];let m=s[a];let $;let h;while(l<=f&&o<=a){if(r==null){r=e[++l]}else if(u==null){u=e[--f]}else if(d==null){d=s[++o]}else if(m==null){m=s[--a]}else if(F(r,d)){q(r,d);r=e[++l];d=s[++o]}else if(F(u,m)){q(u,m);u=e[--f];m=s[--a]}else if(F(r,m)){if(r.$==="slot"||m.$==="slot"){L(r.h.parentNode,false)}q(r,m);t.insertBefore(r.h,u.h.nextSibling);r=e[++l];m=s[--a]}else if(F(u,d)){if(r.$==="slot"||m.$==="slot"){L(u.h.parentNode,false)}q(u,d);t.insertBefore(u.h,r.h);u=e[--f];d=s[++o]}else{c=-1;{for(i=l;i<=f;++i){if(e[i]&&e[i].i!==null&&e[i].i===d.i){c=i;break}}}if(c>=0){h=e[c];if(h.$!==d.$){$=E(e&&e[o],n,c)}else{q(h,d);e[c]=undefined;$=h.h}d=s[++o]}else{$=E(e&&e[o],n,o);d=s[++o]}if($){{W(r.h).insertBefore($,S(r.h))}}}}if(l>f){N(t,s[a+1]==null?null:s[a+1].h,n,s,o,a)}else if(o>a){U(e,l,f)}};const F=(t,e)=>{if(t.$===e.$){if(t.$==="slot"){return t.u===e.u}{return t.i===e.i}}return false};const S=t=>t&&t["s-ol"]||t;const W=t=>(t["s-ol"]?t["s-ol"]:t).parentNode;const q=(t,e)=>{const n=e.h=t.h;const s=t.o;const l=e.o;const o=e.$;const i=e.t;let f;if(i===null){{if(o==="slot");else{T(t,e,c)}}if(s!==null&&l!==null){A(n,s,e,l)}else if(l!==null){if(t.t!==null){n.textContent=""}N(n,null,e,l,0,l.length-1)}else if(s!==null){U(s,0,s.length-1)}}else if(f=n["s-cr"]){f.parentNode.textContent=i}else if(t.t!==i){n.data=i}};const D=t=>{const e=t.childNodes;let n;let s;let l;let o;let c;let i;for(s=0,l=e.length;s<l;s++){n=e[s];if(n.nodeType===1){if(n["s-sr"]){c=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){i=e[o].nodeType;if(e[o]["s-hn"]!==n["s-hn"]||c!==""){if(i===1&&c===e[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&e[o].textContent.trim()!==""){n.hidden=true;break}}}}D(n)}}};const H=[];const I=t=>{let e;let n;let s;let o;let c;let i;let f=0;const r=t.childNodes;const u=r.length;for(;f<u;f++){e=r[f];if(e["s-sr"]&&(n=e["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;o=e["s-sn"];for(i=s.length-1;i>=0;i--){n=s[i];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]){if(V(n,o)){c=H.find((t=>t.v===n));l=true;n["s-sn"]=n["s-sn"]||o;if(c){c.k=e}else{H.push({k:e,v:n})}if(n["s-sr"]){H.map((t=>{if(V(t.v,n["s-sn"])){c=H.find((t=>t.v===n));if(c&&!t.k){t.k=c.k}}}))}}else if(!H.some((t=>t.v===n))){H.push({v:n})}}}}if(e.nodeType===1){I(e)}}};const V=(t,e)=>{if(t.nodeType===1){if(t.getAttribute("slot")===null&&e===""){return true}if(t.getAttribute("slot")===e){return true}return false}if(t["s-sn"]===e){return true}return e===""};const _=t=>{{t.l&&t.l.ref&&t.l.ref(null);t.o&&t.o.map(_)}};const z=(t,c)=>{const i=t.p;const f=t.g;const r=t.j||p(null,null);const u=w(c)?c:b(null,null,c);n=i.tagName;u.$=null;u.m|=4;t.j=u;u.h=r.h=i;{e=i["s-cr"];s=(f.m&1)!==0;l=false}q(r,u);{Ot.m|=1;if(o){I(u.h);let t;let e;let n;let s;let l;let o;let c=0;for(;c<H.length;c++){t=H[c];e=t.v;if(!e["s-ol"]){n=jt.createTextNode("");n["s-nr"]=e;e.parentNode.insertBefore(e["s-ol"]=n,e)}}for(c=0;c<H.length;c++){t=H[c];e=t.v;if(t.k){s=t.k.parentNode;l=t.k.nextSibling;n=e["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===e["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==e.parentNode||e.nextSibling!==l){if(e!==l){if(!e["s-hn"]&&e["s-ol"]){e["s-hn"]=e["s-ol"].parentNode.nodeName}s.insertBefore(e,l)}}}else{if(e.nodeType===1){e.hidden=true}}}}if(l){D(u.h)}Ot.m&=~1;H.length=0}};const B=(t,e)=>{if(e&&!t.O&&e["s-p"]){e["s-p"].push(new Promise((e=>t.O=e)))}};const G=(t,e)=>{{t.m|=16}if(t.m&4){t.m|=512;return}B(t,t.M);const n=()=>J(t,e);return Nt(n)};const J=(t,e)=>{const n=r("scheduleUpdate",t.g.P);const s=t.C;let l;if(e){{l=nt(s,"componentWillLoad")}}n();return K(l,(()=>Q(t,s)))};const K=(t,e)=>t instanceof Promise?t.then(e):e();const Q=async(t,e,n)=>{var s;const l=t.p;const o=r("update",t.g.P);const c=l["s-rc"];const i=r("render",t.g.P);{X(t,e)}if(c){c.map((t=>t()));l["s-rc"]=undefined}i();o();{const e=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>Z(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.m|=4;e.length=0}}};const X=(t,e,n)=>{try{i=e;e=e.render();{t.m&=~16}{t.m|=2}{{{z(t,e)}}}}catch(e){wt(e,t.p)}i=null;return null};const Y=()=>i;const Z=t=>{const e=t.g.P;const n=t.p;const s=r("postUpdate",e);const l=t.C;const o=t.M;if(!(t.m&64)){t.m|=64;{st(n)}{nt(l,"componentDidLoad")}s();{t.R(n);if(!o){et()}}}else{s()}{t.T(n)}{if(t.O){t.O();t.O=undefined}if(t.m&512){Lt((()=>G(t,false)))}t.m&=~(4|512)}};const tt=t=>{{const e=ht(t);const n=e.p.isConnected;if(n&&(e.m&(2|16))===2){G(e,false)}return n}};const et=e=>{{st(jt.documentElement)}Lt((()=>M(gt,"appload",{detail:{namespace:t}})))};const nt=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){wt(t)}}return undefined};const st=t=>t.classList.add("hydrated");const lt=(t,e)=>ht(t).L.get(e);const ot=(t,e,n,s)=>{const l=ht(t);const o=l.p;const c=l.L.get(e);const i=l.m;const f=l.C;n=j(n,s.N[e][0]);const r=Number.isNaN(c)&&Number.isNaN(n);const u=n!==c&&!r;if((!(i&8)||c===undefined)&&u){l.L.set(e,n);if(f){if(s.U&&i&128){const t=s.U[e];if(t){t.map((t=>{try{f[t](n,c,e)}catch(t){wt(t,o)}}))}}if((i&(2|16))===2){G(l,false)}}}};const ct=(t,e,n)=>{if(e.N){if(t.watchers){e.U=t.watchers}const s=Object.entries(e.N);const l=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,t,{get(){return lt(this,t)},set(n){ot(this,t,n,e)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,t,{value(...e){const n=ht(this);return n.A.then((()=>n.C[t](...e)))}})}}));if(n&1){const e=new Map;l.attributeChangedCallback=function(t,n,s){Ot.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n)){s=this[n];delete this[n]}else if(l.hasOwnProperty(n)&&typeof this[n]==="number"&&this[n]==s){return}this[n]=s===null&&typeof this[n]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,n])=>{const s=n[1]||t;e.set(s,t);return s}))}}return t};const it=async(t,e,n,s,l)=>{if((e.m&32)===0){e.m|=32;{l=kt(n);if(l.then){const t=u();l=await l;t()}if(!l.isProxied){{n.U=l.watchers}ct(l,n,2);l.isProxied=true}const t=r("createInstance",n.P);{e.m|=8}try{new l(e)}catch(t){wt(t)}{e.m&=~8}{e.m|=128}t();ft(e.C)}}const o=e.M;const c=()=>G(e,true);if(o&&o["s-rc"]){o["s-rc"].push(c)}else{c()}};const ft=t=>{{nt(t,"connectedCallback")}};const rt=t=>{if((Ot.m&1)===0){const e=ht(t);const n=e.g;const s=r("connectedCallback",n.P);if(!(e.m&1)){e.m|=1;{if(n.m&(4|8)){ut(t)}}{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){B(e,e.M=n);break}}}if(n.N){Object.entries(n.N).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{it(t,e,n)}}else{ft(e.C)}s()}};const ut=t=>{const e=t["s-cr"]=jt.createComment("");e["s-cn"]=true;t.insertBefore(e,t.firstChild)};const at=t=>{if((Ot.m&1)===0){ht(t)}};const dt=(t,e={})=>{var n;const s=r();const l=[];const o=e.exclude||[];const c=gt.customElements;const i=jt.head;const f=i.querySelector("meta[charset]");const u=jt.createElement("style");const d=[];let m;let $=true;Object.assign(Ot,e);Ot.F=new URL(e.resourcesUrl||"./",jt.baseURI).href;t.map((t=>{t[1].map((e=>{const n={m:e[0],P:e[1],N:e[2],S:e[3]};{n.N=e[2]}{n.U={}}const s=n.P;const i=class extends HTMLElement{constructor(t){super(t);t=this;pt(t,n)}connectedCallback(){if(m){clearTimeout(m);m=null}if($){d.push(this)}else{Ot.jmp((()=>rt(this)))}}disconnectedCallback(){Ot.jmp((()=>at(this)))}componentOnReady(){return ht(this).W}};n.q=t[0];if(!o.includes(s)&&!c.get(s)){l.push(s);c.define(s,ct(i,n,1))}}))}));{u.innerHTML=l+a;u.setAttribute("data-styles","");const t=(n=Ot.D)!==null&&n!==void 0?n:h(jt);if(t!=null){u.setAttribute("nonce",t)}i.insertBefore(u,f?f.nextSibling:i.firstChild)}$=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{Ot.jmp((()=>m=setTimeout(et,30)))}}s()};const mt=t=>Ot.D=t;const $t=new WeakMap;const ht=t=>$t.get(t);const bt=(t,e)=>$t.set(e.C=t,e);const pt=(t,e)=>{const n={m:0,p:t,g:e,L:new Map};{n.A=new Promise((t=>n.T=t))}{n.W=new Promise((t=>n.R=t));t["s-p"]=[];t["s-rc"]=[]}return $t.set(t,n)};const yt=(t,e)=>e in t;const wt=(t,e)=>(0,console.error)(t,e);const vt=new Map;const kt=(t,e,n)=>{const s=t.P.replace(/-/g,"_");const l=t.q;const o=vt.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((t=>{{vt.set(l,t)}return t[s]}),wt)};const gt=typeof window!=="undefined"?window:{};const jt=gt.document||{head:{}};const Ot={m:0,F:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const xt=t=>{Object.assign(Ot,t)};const Mt=t=>Promise.resolve(t);const Pt=[];const Ct=[];const Rt=(t,e)=>n=>{t.push(n);if(!f){f=true;if(e&&Ot.m&4){Lt(Et)}else{Ot.raf(Et)}}};const Tt=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){wt(t)}}t.length=0};const Et=()=>{Tt(Pt);{Tt(Ct);if(f=Pt.length>0){Ot.raf(Et)}}};const Lt=t=>Mt().then(t);const Nt=Rt(Ct,true);export{xt as a,dt as b,x as c,O as d,tt as f,Y as g,b as h,Mt as p,bt as r,mt as s};
//# sourceMappingURL=p-bde3ed36.js.map