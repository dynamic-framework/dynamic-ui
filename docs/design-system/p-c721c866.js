let e,t,l=!1,n=!1,s=!1,o=null,i=!1;const r="http://www.w3.org/1999/xlink",c={},f=e=>"object"==(e=typeof e)||"function"===e,a=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,r=!1;const c=[],a=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?a(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!f(n))&&(n+=""),i&&r?c[c.length-1].t+=n:c.push(i?u(null,n):n),r=i)};if(a(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,d);const $=u(e,null);return $.l=t,c.length>0&&($.o=c),$.i=s,$.u=o,$},u=(e,t)=>({$:0,p:e,t,h:null,o:null,l:null,i:null,u:null}),$={},d={forEach:(e,t)=>e.map(y).forEach(t),map:(e,t)=>e.map(y).map(t).map(p)},y=e=>({vattrs:e.l,vchildren:e.o,vkey:e.i,vname:e.u,vtag:e.p,vtext:e.t}),p=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),a(e.vtag,t,...e.vchildren||[])}const t=u(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.i=e.vkey,t.u=e.vname,t},h=e=>te(e).m,m=(e,t,l)=>{const n=h(e);return{emit:e=>b(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},b=(e,t,l)=>{const n=ue.ce(t,l);return e.dispatchEvent(n),n},w=new WeakMap,k=e=>"sc-"+e.k,g=(e,t,l,n,s,o)=>{if(l!==n){let i=se(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=S(l),o=S(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const a=f(n);if((i||a&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}let u=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,u=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(u?e.removeAttributeNS(r,t):e.removeAttribute(t)):(!i||4&o||s)&&!a&&(n=!0===n?"":n,u?e.setAttributeNS(r,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):se(fe,c)?c.slice(2):c[2]+t.slice(3),l&&ue.rel(e,t,l,!1),n&&ue.ael(e,t,n,!1)}},v=/\s/,S=e=>e?e.split(v):[],j=(e,t,l,n)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.l||c,i=t.l||c;for(n in o)n in i||g(s,n,o[n],void 0,l,t.$);for(n in i)g(s,n,o[n],i[n],l,t.$)},M=(n,o,i)=>{const r=o.o[i];let c,f,a,u=0;if(l||(s=!0,"slot"===r.p&&(r.$|=r.o?2:1)),null!==r.t)c=r.h=ae.createTextNode(r.t);else if(1&r.$)c=r.h=ae.createTextNode("");else if(c=r.h=ae.createElement(2&r.$?"slot-fb":r.p),j(null,r,!1),r.o)for(u=0;u<r.o.length;++u)f=M(n,r,u),f&&c.appendChild(f);return c["s-hn"]=t,3&r.$&&(c["s-sr"]=!0,c["s-cr"]=e,c["s-sn"]=r.u||"",a=n&&n.o&&n.o[i],a&&a.p===r.p&&n.h&&O(n.h,!1)),c},O=(e,l)=>{ue.$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==t&&o["s-ol"]&&(E(o).insertBefore(o,T(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),l&&O(o,l)}ue.$&=-2},C=(e,t,l,n,s,o)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(;s<=o;++s)n[s]&&(i=M(null,l,s),i&&(n[s].h=i,r.insertBefore(i,T(t))))},x=(e,t,l,s,o)=>{for(;t<=l;++t)(s=e[t])&&(o=s.h,A(s),n=!0,o["s-ol"]?o["s-ol"].remove():O(o,!0),o.remove())},R=(e,t)=>e.p===t.p&&("slot"===e.p?e.u===t.u:e.i===t.i),T=e=>e&&e["s-ol"]||e,E=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,L=(e,t)=>{const l=t.h=e.h,n=e.o,s=t.o,o=t.t;let i;null===o?("slot"===t.p||j(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],$=t[a],d=n.length-1,y=n[0],p=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==y)y=n[++r];else if(null==p)p=n[--d];else if(R(u,y))L(u,y),u=t[++i],y=n[++r];else if(R($,p))L($,p),$=t[--a],p=n[--d];else if(R(u,p))"slot"!==u.p&&"slot"!==p.p||O(u.h.parentNode,!1),L(u,p),e.insertBefore(u.h,$.h.nextSibling),u=t[++i],p=n[--d];else if(R($,y))"slot"!==u.p&&"slot"!==p.p||O($.h.parentNode,!1),L($,y),e.insertBefore($.h,u.h),$=t[--a],y=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].i&&t[f].i===y.i){c=f;break}c>=0?(o=t[c],o.p!==y.p?s=M(t&&t[r],l,c):(L(o,y),t[c]=void 0,s=o.h),y=n[++r]):(s=M(t&&t[r],l,r),y=n[++r]),s&&E(u.h).insertBefore(s,T(u.h))}i>a?C(e,null==n[d+1]?null:n[d+1].h,l,n,r,d):r>d&&x(t,i,a)})(l,n,t,s):null!==s?(null!==e.t&&(l.textContent=""),C(l,null,t,s,0,s.length-1)):null!==n&&x(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.t!==o&&(l.data=o)},N=e=>{const t=e.childNodes;let l,n,s,o,i,r;for(n=0,s=t.length;n<s;n++)if(l=t[n],1===l.nodeType){if(l["s-sr"])for(i=l["s-sn"],l.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==l["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){l.hidden=!0;break}N(l)}},P=[],F=e=>{let t,l,s,o,i,r,c=0;const f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(s=l.parentNode.childNodes,o=t["s-sn"],r=s.length-1;r>=0;r--)l=s[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(W(l,o)?(i=P.find((e=>e.g===l)),n=!0,l["s-sn"]=l["s-sn"]||o,i?i.v=t:P.push({v:t,g:l}),l["s-sr"]&&P.map((e=>{W(e.g,l["s-sn"])&&(i=P.find((e=>e.g===l)),i&&!e.v&&(e.v=i.v))}))):P.some((e=>e.g===l))||P.push({g:l}));1===t.nodeType&&F(t)}},W=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,A=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(A)},H=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},U=(e,t)=>{if(e.$|=16,!(4&e.$))return H(e,e.j),ge((()=>q(e,t)));e.$|=512},q=(e,t)=>{const l=e.M;let n;return t&&(n=I(l,"componentWillLoad")),J(n,(()=>D(e,l,t)))},D=async(e,t,l)=>{const n=e.m,s=n["s-rc"];l&&(e=>{const t=e.O;((e,t)=>{let l=k(t);const n=ce.get(l);if(e=11===e.nodeType?e:ae,n)if("string"==typeof n){let t,s=w.get(e=e.head||e);s||w.set(e,s=new Set),s.has(l)||(t=ae.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n])})(e.m.getRootNode(),t)})(e);V(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>z(e);0===t.length?l():(Promise.all(t).then(l),e.$|=4,t.length=0)}},V=(i,r)=>{try{o=r,r=r.render(),i.$&=-17,i.$|=2,((o,i)=>{const r=o.m,c=o.O,f=o.C||u(null,null),d=(e=>e&&e.p===$)(i)?i:a(null,null,i);if(t=r.tagName,d.p=null,d.$|=4,o.C=d,d.h=f.h=r,e=r["s-cr"],l=0!=(1&c.$),n=!1,L(f,d),ue.$|=1,s){let e,t,l,n,s,o;F(d.h);let i=0;for(;i<P.length;i++)e=P[i],t=e.g,t["s-ol"]||(l=ae.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<P.length;i++)if(e=P[i],t=e.g,e.v){for(n=e.v.parentNode,s=e.v.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}n&&N(d.h),ue.$&=-2,P.length=0})(i,r)}catch(e){oe(e,i.m)}return o=null,null},_=()=>o,z=e=>{const t=e.m,l=e.M,n=e.j;64&e.$||(e.$|=64,K(t),I(l,"componentDidLoad"),e.R(t),n||G()),e.S&&(e.S(),e.S=void 0),512&e.$&&ke((()=>U(e,!1))),e.$&=-517},B=e=>{{const t=te(e),l=t.m.isConnected;return l&&2==(18&t.$)&&U(t,!1),l}},G=()=>{K(ae.documentElement),ke((()=>b(fe,"appload",{detail:{namespace:"design-system"}})))},I=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){oe(e)}},J=(e,t)=>e&&e.then?e.then(t):t(),K=e=>e.classList.add("hydrated"),Q=(e,t,l)=>{if(t.T){e.watchers&&(t.L=e.watchers);const n=Object.entries(t.T),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>te(this).N.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=te(e),o=s.m,i=s.N.get(t),r=s.$,c=s.M;if(l=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.T[t][0]),(!(8&r)||void 0===i)&&l!==i&&(!Number.isNaN(i)||!Number.isNaN(l))&&(s.N.set(t,l),c)){if(n.L&&128&r){const e=n.L[t];e&&e.map((e=>{try{c[e](l,i,t)}catch(e){oe(e,o)}}))}2==(18&r)&&U(s,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const t=new Map;s.attributeChangedCallback=function(e,l,n){ue.jmp((()=>{const l=t.get(e);if(this.hasOwnProperty(l))n=this[l],delete this[l];else if(s.hasOwnProperty(l)&&"number"==typeof this[l]&&this[l]==n)return;this[l]=(null!==n||"boolean"!=typeof this[l])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,l])=>{const n=l[1]||e;return t.set(n,e),n}))}}return e},X=e=>{I(e,"connectedCallback")},Y=(e,t={})=>{const l=[],n=t.exclude||[],s=fe.customElements,o=ae.head,i=o.querySelector("meta[charset]"),r=ae.createElement("style"),c=[];let f,a=!0;Object.assign(ue,t),ue.P=new URL(t.resourcesUrl||"./",ae.baseURI).href,e.map((e=>{e[1].map((t=>{const o={$:t[0],k:t[1],T:t[2],F:t[3]};o.T=t[2],o.L={};const i=o.k,r=class extends HTMLElement{constructor(e){super(e),ne(e=this,o)}connectedCallback(){f&&(clearTimeout(f),f=null),a?c.push(this):ue.jmp((()=>(e=>{if(0==(1&ue.$)){const t=te(e),l=t.O,n=()=>{};if(1&t.$)X(t.M);else{t.$|=1,12&l.$&&(e=>{const t=e["s-cr"]=ae.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){H(t,t.j=l);break}}l.T&&Object.entries(l.T).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.$)){{if(t.$|=32,(s=re(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(l.L=s.watchers,Q(s,l,2),s.isProxied=!0);const e=()=>{};t.$|=8;try{new s(t)}catch(e){oe(e)}t.$&=-9,t.$|=128,e(),X(t.M)}if(s.style){let e=s.style;const t=k(l);if(!ce.has(t)){const n=()=>{};((e,t,l)=>{let n=ce.get(e);ye&&l?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,ce.set(e,n)})(t,e,!!(1&l.$)),n()}}}const o=t.j,i=()=>U(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}})(this)))}disconnectedCallback(){ue.jmp((()=>{}))}componentOnReady(){return te(this).W}};o.A=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,Q(r,o,1)))}))})),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),a=!1,c.length?c.map((e=>e.connectedCallback())):ue.jmp((()=>f=setTimeout(G,30)))},Z=(e,t)=>t,ee=new WeakMap,te=e=>ee.get(e),le=(e,t)=>ee.set(t.M=e,t),ne=(e,t)=>{const l={$:0,m:e,O:t,N:new Map};return l.W=new Promise((e=>l.R=e)),e["s-p"]=[],e["s-rc"]=[],ee.set(e,l)},se=(e,t)=>t in e,oe=(e,t)=>(0,console.error)(e,t),ie=new Map,re=e=>{const t=e.k.replace(/-/g,"_"),l=e.A,n=ie.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(ie.set(l,e),e[t])),oe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ce=new Map,fe="undefined"!=typeof window?window:{},ae=fe.document||{head:{}},ue={$:0,P:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},$e=e=>{Object.assign(ue,e)},de=e=>Promise.resolve(e),ye=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),pe=[],he=[],me=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&ue.$?ke(we):ue.raf(we))},be=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){oe(e)}e.length=0},we=()=>{be(pe),be(he),(i=pe.length>0)&&ue.raf(we)},ke=e=>de().then(e),ge=me(he,!0);export{Z as F,$ as H,h as a,Y as b,m as c,B as f,_ as g,a as h,de as p,le as r,$e as s}