const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-18-C6n3_vzD.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./index-BtM5VmRH.js"])))=>i.map(i=>d[i]);
import{_ as bt}from"./iframe-B-cBJhuc.js";import{_ as Ut}from"./chunk-H6MOWX77-DTQOW814.js";import{r as F,R as K}from"./index-CBqU2yxZ.js";import{g as Ft}from"./_commonjsHelpers-BosuxZz1.js";import{r as kt}from"./index-BtM5VmRH.js";import"../sb-preview/runtime.js";var Ne={exports:{}};const jt="2.0.0",ut=256,Gt=Number.MAX_SAFE_INTEGER||9007199254740991,Mt=16,Xt=ut-6,Vt=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var oe={MAX_LENGTH:ut,MAX_SAFE_COMPONENT_LENGTH:Mt,MAX_SAFE_BUILD_LENGTH:Xt,MAX_SAFE_INTEGER:Gt,RELEASE_TYPES:Vt,SEMVER_SPEC_VERSION:jt,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Ee={};const xt=typeof process=="object"&&Ee&&Ee.NODE_DEBUG&&/\bsemver\b/i.test(Ee.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var ae=xt;(function(e,r){const{MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=oe,s=ae;r=e.exports={};const l=r.re=[],c=r.safeRe=[],o=r.src=[],a=r.t={};let f=0;const p="[a-zA-Z0-9-]",L=[["\\s",1],["\\d",i],[p,n]],m=k=>{for(const[_,j]of L)k=k.split(`${_}*`).join(`${_}{0,${j}}`).split(`${_}+`).join(`${_}{1,${j}}`);return k},d=(k,_,j)=>{const S=m(_),G=f++;s(k,G,_),a[k]=G,o[G]=_,l[G]=new RegExp(_,j?"g":void 0),c[G]=new RegExp(S,j?"g":void 0)};d("NUMERICIDENTIFIER","0|[1-9]\\d*"),d("NUMERICIDENTIFIERLOOSE","\\d+"),d("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),d("MAINVERSION",`(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),d("MAINVERSIONLOOSE",`(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`),d("PRERELEASEIDENTIFIER",`(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),d("PRERELEASEIDENTIFIERLOOSE",`(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),d("PRERELEASE",`(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),d("PRERELEASELOOSE",`(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),d("BUILDIDENTIFIER",`${p}+`),d("BUILD",`(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),d("FULLPLAIN",`v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),d("FULL",`^${o[a.FULLPLAIN]}$`),d("LOOSEPLAIN",`[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),d("LOOSE",`^${o[a.LOOSEPLAIN]}$`),d("GTLT","((?:<|>)?=?)"),d("XRANGEIDENTIFIERLOOSE",`${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),d("XRANGEIDENTIFIER",`${o[a.NUMERICIDENTIFIER]}|x|X|\\*`),d("XRANGEPLAIN",`[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?)?)?`),d("XRANGEPLAINLOOSE",`[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`),d("XRANGE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),d("XRANGELOOSE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),d("COERCEPLAIN",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`),d("COERCE",`${o[a.COERCEPLAIN]}(?:$|[^\\d])`),d("COERCEFULL",o[a.COERCEPLAIN]+`(?:${o[a.PRERELEASE]})?(?:${o[a.BUILD]})?(?:$|[^\\d])`),d("COERCERTL",o[a.COERCE],!0),d("COERCERTLFULL",o[a.COERCEFULL],!0),d("LONETILDE","(?:~>?)"),d("TILDETRIM",`(\\s*)${o[a.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",d("TILDE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),d("TILDELOOSE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),d("LONECARET","(?:\\^)"),d("CARETTRIM",`(\\s*)${o[a.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",d("CARET",`^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),d("CARETLOOSE",`^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),d("COMPARATORLOOSE",`^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),d("COMPARATOR",`^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),d("COMPARATORTRIM",`(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",d("HYPHENRANGE",`^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),d("HYPHENRANGELOOSE",`^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),d("STAR","(<|>)?=?\\s*\\*"),d("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),d("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Ne,Ne.exports);var z=Ne.exports;const Yt=Object.freeze({loose:!0}),Wt=Object.freeze({}),Ht=e=>e?typeof e!="object"?Yt:e:Wt;var Oe=Ht;const je=/^[0-9]+$/,ft=(e,r)=>{const t=je.test(e),n=je.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n?-1:n&&!t?1:e<r?-1:1},Bt=(e,r)=>ft(r,e);var ht={compareIdentifiers:ft,rcompareIdentifiers:Bt};const Q=ae,{MAX_LENGTH:Ge,MAX_SAFE_INTEGER:ee}=oe,{safeRe:Me,t:Xe}=z,Kt=Oe,{compareIdentifiers:X}=ht;let qt=class U{constructor(r,t){if(t=Kt(t),r instanceof U){if(r.loose===!!t.loose&&r.includePrerelease===!!t.includePrerelease)return r;r=r.version}else if(typeof r!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof r}".`);if(r.length>Ge)throw new TypeError(`version is longer than ${Ge} characters`);Q("SemVer",r,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const n=r.trim().match(t.loose?Me[Xe.LOOSE]:Me[Xe.FULL]);if(!n)throw new TypeError(`Invalid Version: ${r}`);if(this.raw=r,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>ee||this.major<0)throw new TypeError("Invalid major version");if(this.minor>ee||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>ee||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){const s=+i;if(s>=0&&s<ee)return s}return i}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(r){if(Q("SemVer.compare",this.version,this.options,r),!(r instanceof U)){if(typeof r=="string"&&r===this.version)return 0;r=new U(r,this.options)}return r.version===this.version?0:this.compareMain(r)||this.comparePre(r)}compareMain(r){return r instanceof U||(r=new U(r,this.options)),X(this.major,r.major)||X(this.minor,r.minor)||X(this.patch,r.patch)}comparePre(r){if(r instanceof U||(r=new U(r,this.options)),this.prerelease.length&&!r.prerelease.length)return-1;if(!this.prerelease.length&&r.prerelease.length)return 1;if(!this.prerelease.length&&!r.prerelease.length)return 0;let t=0;do{const n=this.prerelease[t],i=r.prerelease[t];if(Q("prerelease compare",t,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return X(n,i)}while(++t)}compareBuild(r){r instanceof U||(r=new U(r,this.options));let t=0;do{const n=this.build[t],i=r.build[t];if(Q("build compare",t,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return X(n,i)}while(++t)}inc(r,t,n){switch(r){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,n),this.inc("pre",t,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t,n),this.inc("pre",t,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const i=Number(n)?1:0;if(!t&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[i];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(t===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(i)}}if(t){let s=[t,i];n===!1&&(s=[t]),X(this.prerelease[0],t)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${r}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var y=qt;const Ve=y,zt=(e,r,t=!1)=>{if(e instanceof Ve)return e;try{return new Ve(e,r)}catch(n){if(!t)return null;throw n}};var V=zt;const Zt=V,Jt=(e,r)=>{const t=Zt(e,r);return t?t.version:null};var Qt=Jt;const er=V,tr=(e,r)=>{const t=er(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null};var rr=tr;const xe=y,nr=(e,r,t,n,i)=>{typeof t=="string"&&(i=n,n=t,t=void 0);try{return new xe(e instanceof xe?e.version:e,t).inc(r,n,i).version}catch{return null}};var sr=nr;const Ye=V,ir=(e,r)=>{const t=Ye(e,null,!0),n=Ye(r,null,!0),i=t.compare(n);if(i===0)return null;const s=i>0,l=s?t:n,c=s?n:t,o=!!l.prerelease.length;if(!!c.prerelease.length&&!o)return!c.patch&&!c.minor?"major":l.patch?"patch":l.minor?"minor":"major";const f=o?"pre":"";return t.major!==n.major?f+"major":t.minor!==n.minor?f+"minor":t.patch!==n.patch?f+"patch":"prerelease"};var or=ir;const ar=y,lr=(e,r)=>new ar(e,r).major;var cr=lr;const ur=y,fr=(e,r)=>new ur(e,r).minor;var hr=fr;const pr=y,Er=(e,r)=>new pr(e,r).patch;var mr=Er;const dr=V,$r=(e,r)=>{const t=dr(e,r);return t&&t.prerelease.length?t.prerelease:null};var Rr=$r;const We=y,vr=(e,r,t)=>new We(e,t).compare(new We(r,t));var P=vr;const Ir=P,gr=(e,r,t)=>Ir(r,e,t);var Lr=gr;const wr=P,Nr=(e,r)=>wr(e,r,!0);var Tr=Nr;const He=y,Or=(e,r,t)=>{const n=new He(e,t),i=new He(r,t);return n.compare(i)||n.compareBuild(i)};var Se=Or;const Sr=Se,yr=(e,r)=>e.sort((t,n)=>Sr(t,n,r));var Ar=yr;const Cr=Se,Dr=(e,r)=>e.sort((t,n)=>Cr(n,t,r));var _r=Dr;const Pr=P,br=(e,r,t)=>Pr(e,r,t)>0;var le=br;const Ur=P,Fr=(e,r,t)=>Ur(e,r,t)<0;var ye=Fr;const kr=P,jr=(e,r,t)=>kr(e,r,t)===0;var pt=jr;const Gr=P,Mr=(e,r,t)=>Gr(e,r,t)!==0;var Et=Mr;const Xr=P,Vr=(e,r,t)=>Xr(e,r,t)>=0;var Ae=Vr;const xr=P,Yr=(e,r,t)=>xr(e,r,t)<=0;var Ce=Yr;const Wr=pt,Hr=Et,Br=le,Kr=Ae,qr=ye,zr=Ce,Zr=(e,r,t,n)=>{switch(r){case"===":return typeof e=="object"&&(e=e.version),typeof t=="object"&&(t=t.version),e===t;case"!==":return typeof e=="object"&&(e=e.version),typeof t=="object"&&(t=t.version),e!==t;case"":case"=":case"==":return Wr(e,t,n);case"!=":return Hr(e,t,n);case">":return Br(e,t,n);case">=":return Kr(e,t,n);case"<":return qr(e,t,n);case"<=":return zr(e,t,n);default:throw new TypeError(`Invalid operator: ${r}`)}};var mt=Zr;const Jr=y,Qr=V,{safeRe:te,t:re}=z,en=(e,r)=>{if(e instanceof Jr)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;r=r||{};let t=null;if(!r.rtl)t=e.match(r.includePrerelease?te[re.COERCEFULL]:te[re.COERCE]);else{const o=r.includePrerelease?te[re.COERCERTLFULL]:te[re.COERCERTL];let a;for(;(a=o.exec(e))&&(!t||t.index+t[0].length!==e.length);)(!t||a.index+a[0].length!==t.index+t[0].length)&&(t=a),o.lastIndex=a.index+a[1].length+a[2].length;o.lastIndex=-1}if(t===null)return null;const n=t[2],i=t[3]||"0",s=t[4]||"0",l=r.includePrerelease&&t[5]?`-${t[5]}`:"",c=r.includePrerelease&&t[6]?`+${t[6]}`:"";return Qr(`${n}.${i}.${s}${l}${c}`,r)};var tn=en;class rn{constructor(){this.max=1e3,this.map=new Map}get(r){const t=this.map.get(r);if(t!==void 0)return this.map.delete(r),this.map.set(r,t),t}delete(r){return this.map.has(r)?(this.map.delete(r),!0):!1}set(r,t){if(!this.delete(r)&&t!==void 0){if(this.map.size>=this.max){const i=this.map.keys().next().value;this.delete(i)}this.map.set(r,t)}return this}}var nn=rn,me,Be;function b(){if(Be)return me;Be=1;class e{constructor(u,v){if(v=n(v),u instanceof e)return u.loose===!!v.loose&&u.includePrerelease===!!v.includePrerelease?u:new e(u.raw,v);if(u instanceof i)return this.raw=u.value,this.set=[[u]],this.format(),this;if(this.options=v,this.loose=!!v.loose,this.includePrerelease=!!v.includePrerelease,this.raw=u.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map($=>this.parseRange($.trim())).filter($=>$.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const $=this.set[0];if(this.set=this.set.filter(R=>!d(R[0])),this.set.length===0)this.set=[$];else if(this.set.length>1){for(const R of this.set)if(R.length===1&&k(R[0])){this.set=[R];break}}}this.format()}format(){return this.range=this.set.map(u=>u.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(u){const $=((this.options.includePrerelease&&L)|(this.options.loose&&m))+":"+u,R=t.get($);if(R)return R;const E=this.options.loose,I=E?c[o.HYPHENRANGELOOSE]:c[o.HYPHENRANGE];u=u.replace(I,_t(this.options.includePrerelease)),s("hyphen replace",u),u=u.replace(c[o.COMPARATORTRIM],a),s("comparator trim",u),u=u.replace(c[o.TILDETRIM],f),s("tilde trim",u),u=u.replace(c[o.CARETTRIM],p),s("caret trim",u);let w=u.split(" ").map(T=>j(T,this.options)).join(" ").split(/\s+/).map(T=>Dt(T,this.options));E&&(w=w.filter(T=>(s("loose invalid filter",T,this.options),!!T.match(c[o.COMPARATORLOOSE])))),s("range list",w);const g=new Map,N=w.map(T=>new i(T,this.options));for(const T of N){if(d(T))return[T];g.set(T.value,T)}g.size>1&&g.has("")&&g.delete("");const C=[...g.values()];return t.set($,C),C}intersects(u,v){if(!(u instanceof e))throw new TypeError("a Range is required");return this.set.some($=>_($,v)&&u.set.some(R=>_(R,v)&&$.every(E=>R.every(I=>E.intersects(I,v)))))}test(u){if(!u)return!1;if(typeof u=="string")try{u=new l(u,this.options)}catch{return!1}for(let v=0;v<this.set.length;v++)if(Pt(this.set[v],u,this.options))return!0;return!1}}me=e;const r=nn,t=new r,n=Oe,i=ce(),s=ae,l=y,{safeRe:c,t:o,comparatorTrimReplace:a,tildeTrimReplace:f,caretTrimReplace:p}=z,{FLAG_INCLUDE_PRERELEASE:L,FLAG_LOOSE:m}=oe,d=h=>h.value==="<0.0.0-0",k=h=>h.value==="",_=(h,u)=>{let v=!0;const $=h.slice();let R=$.pop();for(;v&&$.length;)v=$.every(E=>R.intersects(E,u)),R=$.pop();return v},j=(h,u)=>(s("comp",h,u),h=Ot(h,u),s("caret",h),h=G(h,u),s("tildes",h),h=yt(h,u),s("xrange",h),h=Ct(h,u),s("stars",h),h),S=h=>!h||h.toLowerCase()==="x"||h==="*",G=(h,u)=>h.trim().split(/\s+/).map(v=>Tt(v,u)).join(" "),Tt=(h,u)=>{const v=u.loose?c[o.TILDELOOSE]:c[o.TILDE];return h.replace(v,($,R,E,I,w)=>{s("tilde",h,$,R,E,I,w);let g;return S(R)?g="":S(E)?g=`>=${R}.0.0 <${+R+1}.0.0-0`:S(I)?g=`>=${R}.${E}.0 <${R}.${+E+1}.0-0`:w?(s("replaceTilde pr",w),g=`>=${R}.${E}.${I}-${w} <${R}.${+E+1}.0-0`):g=`>=${R}.${E}.${I} <${R}.${+E+1}.0-0`,s("tilde return",g),g})},Ot=(h,u)=>h.trim().split(/\s+/).map(v=>St(v,u)).join(" "),St=(h,u)=>{s("caret",h,u);const v=u.loose?c[o.CARETLOOSE]:c[o.CARET],$=u.includePrerelease?"-0":"";return h.replace(v,(R,E,I,w,g)=>{s("caret",h,R,E,I,w,g);let N;return S(E)?N="":S(I)?N=`>=${E}.0.0${$} <${+E+1}.0.0-0`:S(w)?E==="0"?N=`>=${E}.${I}.0${$} <${E}.${+I+1}.0-0`:N=`>=${E}.${I}.0${$} <${+E+1}.0.0-0`:g?(s("replaceCaret pr",g),E==="0"?I==="0"?N=`>=${E}.${I}.${w}-${g} <${E}.${I}.${+w+1}-0`:N=`>=${E}.${I}.${w}-${g} <${E}.${+I+1}.0-0`:N=`>=${E}.${I}.${w}-${g} <${+E+1}.0.0-0`):(s("no pr"),E==="0"?I==="0"?N=`>=${E}.${I}.${w}${$} <${E}.${I}.${+w+1}-0`:N=`>=${E}.${I}.${w}${$} <${E}.${+I+1}.0-0`:N=`>=${E}.${I}.${w} <${+E+1}.0.0-0`),s("caret return",N),N})},yt=(h,u)=>(s("replaceXRanges",h,u),h.split(/\s+/).map(v=>At(v,u)).join(" ")),At=(h,u)=>{h=h.trim();const v=u.loose?c[o.XRANGELOOSE]:c[o.XRANGE];return h.replace(v,($,R,E,I,w,g)=>{s("xRange",h,$,R,E,I,w,g);const N=S(E),C=N||S(I),T=C||S(w),W=T;return R==="="&&W&&(R=""),g=u.includePrerelease?"-0":"",N?R===">"||R==="<"?$="<0.0.0-0":$="*":R&&W?(C&&(I=0),w=0,R===">"?(R=">=",C?(E=+E+1,I=0,w=0):(I=+I+1,w=0)):R==="<="&&(R="<",C?E=+E+1:I=+I+1),R==="<"&&(g="-0"),$=`${R+E}.${I}.${w}${g}`):C?$=`>=${E}.0.0${g} <${+E+1}.0.0-0`:T&&($=`>=${E}.${I}.0${g} <${E}.${+I+1}.0-0`),s("xRange return",$),$})},Ct=(h,u)=>(s("replaceStars",h,u),h.trim().replace(c[o.STAR],"")),Dt=(h,u)=>(s("replaceGTE0",h,u),h.trim().replace(c[u.includePrerelease?o.GTE0PRE:o.GTE0],"")),_t=h=>(u,v,$,R,E,I,w,g,N,C,T,W)=>(S($)?v="":S(R)?v=`>=${$}.0.0${h?"-0":""}`:S(E)?v=`>=${$}.${R}.0${h?"-0":""}`:I?v=`>=${v}`:v=`>=${v}${h?"-0":""}`,S(N)?g="":S(C)?g=`<${+N+1}.0.0-0`:S(T)?g=`<${N}.${+C+1}.0-0`:W?g=`<=${N}.${C}.${T}-${W}`:h?g=`<${N}.${C}.${+T+1}-0`:g=`<=${g}`,`${v} ${g}`.trim()),Pt=(h,u,v)=>{for(let $=0;$<h.length;$++)if(!h[$].test(u))return!1;if(u.prerelease.length&&!v.includePrerelease){for(let $=0;$<h.length;$++)if(s(h[$].semver),h[$].semver!==i.ANY&&h[$].semver.prerelease.length>0){const R=h[$].semver;if(R.major===u.major&&R.minor===u.minor&&R.patch===u.patch)return!0}return!1}return!0};return me}var de,Ke;function ce(){if(Ke)return de;Ke=1;const e=Symbol("SemVer ANY");class r{static get ANY(){return e}constructor(f,p){if(p=t(p),f instanceof r){if(f.loose===!!p.loose)return f;f=f.value}f=f.trim().split(/\s+/).join(" "),l("comparator",f,p),this.options=p,this.loose=!!p.loose,this.parse(f),this.semver===e?this.value="":this.value=this.operator+this.semver.version,l("comp",this)}parse(f){const p=this.options.loose?n[i.COMPARATORLOOSE]:n[i.COMPARATOR],L=f.match(p);if(!L)throw new TypeError(`Invalid comparator: ${f}`);this.operator=L[1]!==void 0?L[1]:"",this.operator==="="&&(this.operator=""),L[2]?this.semver=new c(L[2],this.options.loose):this.semver=e}toString(){return this.value}test(f){if(l("Comparator.test",f,this.options.loose),this.semver===e||f===e)return!0;if(typeof f=="string")try{f=new c(f,this.options)}catch{return!1}return s(f,this.operator,this.semver,this.options)}intersects(f,p){if(!(f instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new o(f.value,p).test(this.value):f.operator===""?f.value===""?!0:new o(this.value,p).test(f.semver):(p=t(p),p.includePrerelease&&(this.value==="<0.0.0-0"||f.value==="<0.0.0-0")||!p.includePrerelease&&(this.value.startsWith("<0.0.0")||f.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&f.operator.startsWith(">")||this.operator.startsWith("<")&&f.operator.startsWith("<")||this.semver.version===f.semver.version&&this.operator.includes("=")&&f.operator.includes("=")||s(this.semver,"<",f.semver,p)&&this.operator.startsWith(">")&&f.operator.startsWith("<")||s(this.semver,">",f.semver,p)&&this.operator.startsWith("<")&&f.operator.startsWith(">")))}}de=r;const t=Oe,{safeRe:n,t:i}=z,s=mt,l=ae,c=y,o=b();return de}const sn=b(),on=(e,r,t)=>{try{r=new sn(r,t)}catch{return!1}return r.test(e)};var ue=on;const an=b(),ln=(e,r)=>new an(e,r).set.map(t=>t.map(n=>n.value).join(" ").trim().split(" "));var cn=ln;const un=y,fn=b(),hn=(e,r,t)=>{let n=null,i=null,s=null;try{s=new fn(r,t)}catch{return null}return e.forEach(l=>{s.test(l)&&(!n||i.compare(l)===-1)&&(n=l,i=new un(n,t))}),n};var pn=hn;const En=y,mn=b(),dn=(e,r,t)=>{let n=null,i=null,s=null;try{s=new mn(r,t)}catch{return null}return e.forEach(l=>{s.test(l)&&(!n||i.compare(l)===1)&&(n=l,i=new En(n,t))}),n};var $n=dn;const $e=y,Rn=b(),qe=le,vn=(e,r)=>{e=new Rn(e,r);let t=new $e("0.0.0");if(e.test(t)||(t=new $e("0.0.0-0"),e.test(t)))return t;t=null;for(let n=0;n<e.set.length;++n){const i=e.set[n];let s=null;i.forEach(l=>{const c=new $e(l.semver.version);switch(l.operator){case">":c.prerelease.length===0?c.patch++:c.prerelease.push(0),c.raw=c.format();case"":case">=":(!s||qe(c,s))&&(s=c);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${l.operator}`)}}),s&&(!t||qe(t,s))&&(t=s)}return t&&e.test(t)?t:null};var In=vn;const gn=b(),Ln=(e,r)=>{try{return new gn(e,r).range||"*"}catch{return null}};var wn=Ln;const Nn=y,dt=ce(),{ANY:Tn}=dt,On=b(),Sn=ue,ze=le,Ze=ye,yn=Ce,An=Ae,Cn=(e,r,t,n)=>{e=new Nn(e,n),r=new On(r,n);let i,s,l,c,o;switch(t){case">":i=ze,s=yn,l=Ze,c=">",o=">=";break;case"<":i=Ze,s=An,l=ze,c="<",o="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Sn(e,r,n))return!1;for(let a=0;a<r.set.length;++a){const f=r.set[a];let p=null,L=null;if(f.forEach(m=>{m.semver===Tn&&(m=new dt(">=0.0.0")),p=p||m,L=L||m,i(m.semver,p.semver,n)?p=m:l(m.semver,L.semver,n)&&(L=m)}),p.operator===c||p.operator===o||(!L.operator||L.operator===c)&&s(e,L.semver))return!1;if(L.operator===o&&l(e,L.semver))return!1}return!0};var De=Cn;const Dn=De,_n=(e,r,t)=>Dn(e,r,">",t);var Pn=_n;const bn=De,Un=(e,r,t)=>bn(e,r,"<",t);var Fn=Un;const Je=b(),kn=(e,r,t)=>(e=new Je(e,t),r=new Je(r,t),e.intersects(r,t));var jn=kn;const Gn=ue,Mn=P;var Xn=(e,r,t)=>{const n=[];let i=null,s=null;const l=e.sort((f,p)=>Mn(f,p,t));for(const f of l)Gn(f,r,t)?(s=f,i||(i=f)):(s&&n.push([i,s]),s=null,i=null);i&&n.push([i,null]);const c=[];for(const[f,p]of n)f===p?c.push(f):!p&&f===l[0]?c.push("*"):p?f===l[0]?c.push(`<=${p}`):c.push(`${f} - ${p}`):c.push(`>=${f}`);const o=c.join(" || "),a=typeof r.raw=="string"?r.raw:String(r);return o.length<a.length?o:r};const Qe=b(),_e=ce(),{ANY:Re}=_e,H=ue,Pe=P,Vn=(e,r,t={})=>{if(e===r)return!0;e=new Qe(e,t),r=new Qe(r,t);let n=!1;e:for(const i of e.set){for(const s of r.set){const l=Yn(i,s,t);if(n=n||l!==null,l)continue e}if(n)return!1}return!0},xn=[new _e(">=0.0.0-0")],et=[new _e(">=0.0.0")],Yn=(e,r,t)=>{if(e===r)return!0;if(e.length===1&&e[0].semver===Re){if(r.length===1&&r[0].semver===Re)return!0;t.includePrerelease?e=xn:e=et}if(r.length===1&&r[0].semver===Re){if(t.includePrerelease)return!0;r=et}const n=new Set;let i,s;for(const m of e)m.operator===">"||m.operator===">="?i=tt(i,m,t):m.operator==="<"||m.operator==="<="?s=rt(s,m,t):n.add(m.semver);if(n.size>1)return null;let l;if(i&&s){if(l=Pe(i.semver,s.semver,t),l>0)return null;if(l===0&&(i.operator!==">="||s.operator!=="<="))return null}for(const m of n){if(i&&!H(m,String(i),t)||s&&!H(m,String(s),t))return null;for(const d of r)if(!H(m,String(d),t))return!1;return!0}let c,o,a,f,p=s&&!t.includePrerelease&&s.semver.prerelease.length?s.semver:!1,L=i&&!t.includePrerelease&&i.semver.prerelease.length?i.semver:!1;p&&p.prerelease.length===1&&s.operator==="<"&&p.prerelease[0]===0&&(p=!1);for(const m of r){if(f=f||m.operator===">"||m.operator===">=",a=a||m.operator==="<"||m.operator==="<=",i){if(L&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===L.major&&m.semver.minor===L.minor&&m.semver.patch===L.patch&&(L=!1),m.operator===">"||m.operator===">="){if(c=tt(i,m,t),c===m&&c!==i)return!1}else if(i.operator===">="&&!H(i.semver,String(m),t))return!1}if(s){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator==="<"||m.operator==="<="){if(o=rt(s,m,t),o===m&&o!==s)return!1}else if(s.operator==="<="&&!H(s.semver,String(m),t))return!1}if(!m.operator&&(s||i)&&l!==0)return!1}return!(i&&a&&!s&&l!==0||s&&f&&!i&&l!==0||L||p)},tt=(e,r,t)=>{if(!e)return r;const n=Pe(e.semver,r.semver,t);return n>0?e:n<0||r.operator===">"&&e.operator===">="?r:e},rt=(e,r,t)=>{if(!e)return r;const n=Pe(e.semver,r.semver,t);return n<0?e:n>0||r.operator==="<"&&e.operator==="<="?r:e};var Wn=Vn;const ve=z,nt=oe,Hn=y,st=ht,Bn=V,Kn=Qt,qn=rr,zn=sr,Zn=or,Jn=cr,Qn=hr,es=mr,ts=Rr,rs=P,ns=Lr,ss=Tr,is=Se,os=Ar,as=_r,ls=le,cs=ye,us=pt,fs=Et,hs=Ae,ps=Ce,Es=mt,ms=tn,ds=ce(),$s=b(),Rs=ue,vs=cn,Is=pn,gs=$n,Ls=In,ws=wn,Ns=De,Ts=Pn,Os=Fn,Ss=jn,ys=Xn,As=Wn;var Cs={parse:Bn,valid:Kn,clean:qn,inc:zn,diff:Zn,major:Jn,minor:Qn,patch:es,prerelease:ts,compare:rs,rcompare:ns,compareLoose:ss,compareBuild:is,sort:os,rsort:as,gt:ls,lt:cs,eq:us,neq:fs,gte:hs,lte:ps,cmp:Es,coerce:ms,Comparator:ds,Range:$s,satisfies:Rs,toComparators:vs,maxSatisfying:Is,minSatisfying:gs,minVersion:Ls,validRange:ws,outside:Ns,gtr:Ts,ltr:Os,intersects:Ss,simplifyRange:ys,subset:As,SemVer:Hn,re:ve.re,src:ve.src,tokens:ve.t,SEMVER_SPEC_VERSION:nt.SEMVER_SPEC_VERSION,RELEASE_TYPES:nt.RELEASE_TYPES,compareIdentifiers:st.compareIdentifiers,rcompareIdentifiers:st.rcompareIdentifiers};const it=Ft(Cs);var O={};/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=F,be=kt;function $t(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function ot(e){if($t(e)!==e)throw Error("Unable to find node on an unmounted component.")}function Ds(e){var r=e.alternate;if(!r){if(r=$t(e),r===null)throw Error("Unable to find node on an unmounted component.");return r!==e?null:e}for(var t=e,n=r;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return ot(i),e;if(s===n)return ot(i),r;s=s.sibling}throw Error("Unable to find node on an unmounted component.")}if(t.return!==n.return)t=i,n=s;else{for(var l=!1,c=i.child;c;){if(c===t){l=!0,t=i,n=s;break}if(c===n){l=!0,n=i,t=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===t){l=!0,t=s,n=i;break}if(c===n){l=!0,n=s,t=i;break}c=c.sibling}if(!l)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(t.alternate!==n)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(t.tag!==3)throw Error("Unable to find node on an unmounted component.");return t.stateNode.current===t?e:r}var A=Object.assign;function Ie(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ne(){return!0}function at(){return!1}function D(e){function r(t,n,i,s,l){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ne:at,this.isPropagationStopped=at,this}return A(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ne)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ne)},persist:function(){},isPersistent:ne}),r}var Y={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=D(Y),Z=A({},Y,{view:0,detail:0});D(Z);var ge,Le,B,fe=A({},Z,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ue,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==B&&(B&&e.type==="mousemove"?(ge=e.screenX-B.screenX,Le=e.screenY-B.screenY):Le=ge=0,B=e),ge)},movementY:function(e){return"movementY"in e?e.movementY:Le}});D(fe);var Ps=A({},fe,{dataTransfer:0});D(Ps);var bs=A({},Z,{relatedTarget:0});D(bs);var Us=A({},Y,{animationName:0,elapsedTime:0,pseudoElement:0});D(Us);var Fs=A({},Y,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}});D(Fs);var ks=A({},Y,{data:0});D(ks);var js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gs={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ms={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xs(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Ms[e])?!!r[e]:!1}function Ue(){return Xs}var Vs=A({},Z,{key:function(e){if(e.key){var r=js[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ie(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gs[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ue,charCode:function(e){return e.type==="keypress"?Ie(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ie(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}});D(Vs);var xs=A({},fe,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});D(xs);var Ys=A({},Z,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ue});D(Ys);var Ws=A({},Y,{propertyName:0,elapsedTime:0,pseudoElement:0});D(Ws);var Hs=A({},fe,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0});D(Hs);function Bs(e,r,t,n,i,s,l,c,o){var a=Array.prototype.slice.call(arguments,3);try{r.apply(t,a)}catch(f){this.onError(f)}}var q=!1,se=null,ie=!1,Te=null,Ks={onError:function(e){q=!0,se=e}};function qs(e,r,t,n,i,s,l,c,o){q=!1,se=null,Bs.apply(Ks,arguments)}function zs(e,r,t,n,i,s,l,c,o){if(qs.apply(this,arguments),q){if(q){var a=se;q=!1,se=null}else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");ie||(ie=!0,Te=a)}}var Fe=Array.isArray,J=be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,Zs=J[0],Js=J[1],Qs=J[2],ei=J[3],ti=J[4],ri=x.unstable_act;function ni(){}function si(e,r){if(!e)return[];if(e=Ds(e),!e)return[];for(var t=e,n=[];;){if(t.tag===5||t.tag===6||t.tag===1||t.tag===0){var i=t.stateNode;r(i)&&n.push(i)}if(t.child)t.child.return=t,t=t.child;else{if(t===e)return n;for(;!t.sibling;){if(!t.return||t.return===e)return n;t=t.return}t.sibling.return=t.return,t=t.sibling}}}function M(e,r){if(e&&!e._reactInternals){var t=String(e);throw e=Fe(e)?"an array":e&&e.nodeType===1&&e.tagName?"a DOM node":t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t,Error(r+"(...): the first argument must be a React class instance. Instead received: "+(e+"."))}}function he(e){return!(!e||e.nodeType!==1||!e.tagName)}function ke(e){return he(e)?!1:e!=null&&typeof e.render=="function"&&typeof e.setState=="function"}function Rt(e,r){return ke(e)?e._reactInternals.type===r:!1}function pe(e,r){return M(e,"findAllInRenderedTree"),e?si(e._reactInternals,r):[]}function vt(e,r){return M(e,"scryRenderedDOMComponentsWithClass"),pe(e,function(t){if(he(t)){var n=t.className;typeof n!="string"&&(n=t.getAttribute("class")||"");var i=n.split(/\s+/);if(!Fe(r)){if(r===void 0)throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");r=r.split(/\s+/)}return r.every(function(s){return i.indexOf(s)!==-1})}return!1})}function It(e,r){return M(e,"scryRenderedDOMComponentsWithTag"),pe(e,function(t){return he(t)&&t.tagName.toUpperCase()===r.toUpperCase()})}function gt(e,r){return M(e,"scryRenderedComponentsWithType"),pe(e,function(t){return Rt(t,r)})}function lt(e,r,t){var n=e.type||"unknown-event";e.currentTarget=Js(t),zs(n,r,void 0,e),e.currentTarget=null}function Lt(e,r,t){for(var n=[];e;){n.push(e);do e=e.return;while(e&&e.tag!==5);e=e||null}for(e=n.length;0<e--;)r(n[e],"captured",t);for(e=0;e<n.length;e++)r(n[e],"bubbled",t)}function wt(e,r){var t=e.stateNode;if(!t)return null;var n=Qs(t);if(!n)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error("Expected `"+r+"` listener to be a function, instead got a value of `"+typeof t+"` type.");return t}function ii(e,r,t){e&&t&&t._reactName&&(r=wt(e,t._reactName))&&(t._dispatchListeners==null&&(t._dispatchListeners=[]),t._dispatchInstances==null&&(t._dispatchInstances=[]),t._dispatchListeners.push(r),t._dispatchInstances.push(e))}function oi(e,r,t){var n=t._reactName;r==="captured"&&(n+="Capture"),(r=wt(e,n))&&(t._dispatchListeners==null&&(t._dispatchListeners=[]),t._dispatchInstances==null&&(t._dispatchInstances=[]),t._dispatchListeners.push(r),t._dispatchInstances.push(e))}var Nt={},ai=new Set(["mouseEnter","mouseLeave","pointerEnter","pointerLeave"]);function li(e){return function(r,t){if(x.isValidElement(r))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");if(ke(r))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");var n="on"+e[0].toUpperCase()+e.slice(1),i=new ni;i.target=r,i.type=e.toLowerCase();var s=Zs(r),l=new _s(n,i.type,s,i,r);l.persist(),A(l,t),ai.has(e)?l&&l._reactName&&ii(l._targetInst,null,l):l&&l._reactName&&Lt(l._targetInst,oi,l),be.unstable_batchedUpdates(function(){if(ei(r),l){var c=l._dispatchListeners,o=l._dispatchInstances;if(Fe(c))for(var a=0;a<c.length&&!l.isPropagationStopped();a++)lt(l,c[a],o[a]);else c&&lt(l,c,o);l._dispatchListeners=null,l._dispatchInstances=null,l.isPersistent()||l.constructor.release(l)}if(ie)throw c=Te,ie=!1,Te=null,c}),ti()}}"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(e){Nt[e]=li(e)});O.Simulate=Nt;O.act=ri;O.findAllInRenderedTree=pe;O.findRenderedComponentWithType=function(e,r){if(M(e,"findRenderedComponentWithType"),e=gt(e,r),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for componentType:"+r);return e[0]};O.findRenderedDOMComponentWithClass=function(e,r){if(M(e,"findRenderedDOMComponentWithClass"),e=vt(e,r),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for class:"+r);return e[0]};O.findRenderedDOMComponentWithTag=function(e,r){if(M(e,"findRenderedDOMComponentWithTag"),e=It(e,r),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for tag:"+r);return e[0]};O.isCompositeComponent=ke;O.isCompositeComponentWithType=Rt;O.isDOMComponent=he;O.isDOMComponentElement=function(e){return!!(e&&x.isValidElement(e)&&e.tagName)};O.isElement=function(e){return x.isValidElement(e)};O.isElementOfType=function(e,r){return x.isValidElement(e)&&e.type===r};O.mockComponent=function(e,r){return r=r||e.mockTagName||"div",e.prototype.render.mockImplementation(function(){return x.createElement(r,null,this.props.children)}),this};O.nativeTouchData=function(e,r){return{touches:[{pageX:e,pageY:r}]}};O.renderIntoDocument=function(e){var r=document.createElement("div");return be.render(e,r)};O.scryRenderedComponentsWithType=gt;O.scryRenderedDOMComponentsWithClass=vt;O.scryRenderedDOMComponentsWithTag=It;O.traverseTwoPhase=Lt;const{global:ci}=__STORYBOOK_MODULE_GLOBAL__;var ui={};Ut(ui,{decorators:()=>$i,mount:()=>mi,parameters:()=>di,render:()=>fi,renderToCanvas:()=>Ei});var fi=(e,r)=>{let{id:t,component:n}=r;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return K.createElement(n,{...e})};function hi(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var{FRAMEWORK_OPTIONS:we}=ci,pi=class extends F.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:r}=this.props;e||r()}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:r}},ct=we!=null&&we.strictMode?F.StrictMode:F.Fragment;async function Ei({storyContext:e,unboundStoryFn:r,showMain:t,showException:n,forceRemount:i},s){var p,L;let{renderElement:l,unmountElement:c}=await bt(()=>import("./react-18-C6n3_vzD.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),o=r,a=hi()?K.createElement(o,{...e}):K.createElement(pi,{showMain:t,showException:n},K.createElement(o,{...e})),f=ct?K.createElement(ct,null,a):a;return i&&c(s),await l(f,s,(L=(p=e==null?void 0:e.parameters)==null?void 0:p.react)==null?void 0:L.rootOptions),()=>c(s)}var mi=e=>async r=>(r!=null&&(e.originalStoryFn=()=>r),await e.renderToCanvas(),e.canvas),di={renderer:"react"},$i=[(e,r)=>{var i,s;if(!((s=(i=r.parameters)==null?void 0:i.react)!=null&&s.rsc))return F.createElement(e,null);let t=it.major(F.version),n=it.minor(F.version);if(t<18||t===18&&n<3)throw new Error("React Server Components require React >= 18.3");return F.createElement(F.Suspense,null,F.createElement(e,null))}];export{$i as decorators,mi as mount,di as parameters,fi as render,Ei as renderToCanvas};
