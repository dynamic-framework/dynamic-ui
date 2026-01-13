import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as Da}from"./blocks-ClRMKwQS.js";import{s as Y,c as x,a as Ze,b as Aa,d as Ca,e as E,f as wa,g as Xe,p as je,h as ka,i as ea,j as ye,k as Sa,l as La,m as Oa,n as Ba,o as Ra,q as Ta,u as Ia,r as M,t as Ea,v as _a,w as aa,x as Ma,L as z,y as F,D as za,z as he,A as ta,B as Va,C as Ne,E as ee,T as $a,F as Ua,S as Ka,G as sa,H as Wa,I as ra,J as Fa,K as ae,M as Ga,N as Ja,O as ia,P as qa,Q as Ya,R as Ha,U as Qa,V as Za,W as Xa,X as et,Y as at,Z as tt,_ as st,$ as rt,a0 as it,a1 as lt,a2 as nt,a3 as la,a4 as ct,a5 as ot,a6 as dt,a7 as na,a8 as mt,a9 as ut,aa as ht,ab as Te,ac as pt,ad as gt,ae as de,af as xt,ag as vt,ah as ft,ai as bt,aj as jt,ak as yt,al as Nt,am as Ie,an as Pt,ao as Dt,ap as At,aq as J,ar as ca,as as oa,at as da,au as pe,av as Ct,aw as ge,ax as wt,ay as kt}from"./PieChart-CCQnIoJj.js";import{r as n}from"./iframe-Cl_txTfb.js";import{c as G}from"./clsx-B-dksMZM.js";import St from"./Template-DSgnDpb2.js";import{D as v}from"./DBox-CHZYh1bV.js";import{D as $}from"./DButton-CTkJ8HhW.js";import{D as b}from"./DIcon-BO44rzzU.js";import{D as m}from"./DLayout-BYt0sVIX.js";import{D as T}from"./DProgress-BfgXNblI.js";import{D as _}from"./DAvatar-C2xG_zfZ.js";import{D as Lt}from"./DBadge-BhvMYw0b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6-901_q.js";import"./index-RkBx1vKB.js";import"./index-Sf7Foi2E.js";import"./index-BGeANs1w.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-BEnFo-Yd.js";import"./DContext-BXwjNPLo.js";var Ot=["points","className","baseLinePoints","connectNulls"];function V(){return V=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},V.apply(null,arguments)}function Bt(a,t){if(a==null)return{};var s,r,i=Rt(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function Rt(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var Ee=a=>a&&a.x===+a.x&&a.y===+a.y,Tt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=[[]];return t.forEach(r=>{Ee(r)?s[s.length-1].push(r):s[s.length-1].length>0&&s.push([])}),Ee(t[0])&&s[s.length-1].push(t[0]),s[s.length-1].length<=0&&(s=s.slice(0,-1)),s},W=(a,t)=>{var s=Tt(a);t&&(s=[s.reduce((i,l)=>[...i,...l],[])]);var r=s.map(i=>i.reduce((l,c,d)=>"".concat(l).concat(d===0?"M":"L").concat(c.x,",").concat(c.y),"")).join("");return s.length===1?"".concat(r,"Z"):r},It=(a,t,s)=>{var r=W(a,s);return"".concat(r.slice(-1)==="Z"?r.slice(0,-1):r,"L").concat(W(Array.from(t).reverse(),s).slice(1))},Et=a=>{var{points:t,className:s,baseLinePoints:r,connectNulls:i}=a,l=Bt(a,Ot);if(!t||!t.length)return null;var c=G("recharts-polygon",s);if(r&&r.length){var d=l.stroke&&l.stroke!=="none",o=It(t,r,i);return n.createElement("g",{className:c},n.createElement("path",V({},Y(l),{fill:o.slice(-1)==="Z"?l.fill:"none",stroke:"none",d:o})),d?n.createElement("path",V({},Y(l),{fill:"none",d:W(t,i)})):null,d?n.createElement("path",V({},Y(l),{fill:"none",d:W(r,i)})):null)}var u=W(t,i);return n.createElement("path",V({},Y(l),{fill:u.slice(-1)==="Z"?l.fill:"none",className:c,d:u}))},Pe=(a,t,s)=>{switch(t){case"angleAxis":return ye(a,s);case"radiusAxis":return ea(a,s);default:throw new Error("Unexpected axis type: ".concat(t))}},De=(a,t,s)=>{switch(t){case"angleAxis":return La(a,s);case"radiusAxis":return Sa(a,s);default:throw new Error("Unexpected axis type: ".concat(t))}},q=x([Pe,Ze,Aa,De],Ca),ma=x([E,Oa,Ba,je],Ra),ua=x([E,Pe,Ze,q,wa,De,Xe,ma,je],ka),_t=x([E,Pe,q,De,Xe,ma,je],Ta),Mt=["children"];function I(){return I=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},I.apply(null,arguments)}function _e(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function B(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(s),!0).forEach(function(r){re(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):_e(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function re(a,t,s){return(t=zt(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function zt(a){var t=Vt(a,"string");return typeof t=="symbol"?t:t+""}function Vt(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function $t(a,t){if(a==null)return{};var s,r,i=Ut(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function Ut(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var Me=1e-5,Kt=Math.cos(ee(45)),ha="angleAxis";function Wt(a){var t=Ia(),s=n.useMemo(()=>{var{children:l}=a,c=$t(a,Mt);return c},[a]),r=M(l=>ye(l,s.id)),i=s===r;return n.useEffect(()=>(t(Ea(s)),()=>{t(_a(s))}),[t,s]),i?a.children:null}var Ft=(a,t)=>{var{cx:s,cy:r,radius:i,orientation:l,tickSize:c}=t,d=c||8,o=he(s,r,i,a.coordinate),u=he(s,r,i+(l==="inner"?-1:1)*d,a.coordinate);return{x1:o.x,y1:o.y,x2:u.x,y2:u.y}},Gt=(a,t)=>{var s=Math.cos(ee(-a.coordinate));return s>Me?t==="outer"?"start":"end":s<-Me?t==="outer"?"end":"start":"middle"},Jt=a=>{var t=Math.cos(ee(-a.coordinate)),s=Math.sin(ee(-a.coordinate));return Math.abs(t)<=Kt?s>0?"start":"end":"middle"},qt=a=>{var{cx:t,cy:s,radius:r,axisLineType:i,axisLine:l,ticks:c}=a;if(!l)return null;var d=B(B({},F(a)),{},{fill:"none"},F(l));if(i==="circle")return n.createElement(za,I({className:"recharts-polar-angle-axis-line"},d,{cx:t,cy:s,r}));var o=c.map(u=>he(t,s,r,u.coordinate));return n.createElement(Et,I({className:"recharts-polar-angle-axis-line"},d,{points:o}))},Yt=a=>{var{tick:t,tickProps:s,value:r}=a;return t?n.isValidElement(t)?n.cloneElement(t,s):typeof t=="function"?t(s):n.createElement($a,I({},s,{className:"recharts-polar-angle-axis-tick-value"}),r):null},Ht=a=>{var{tick:t,tickLine:s,tickFormatter:r,stroke:i,ticks:l}=a,c=F(a),d=ta(t),o=B(B({},c),{},{fill:"none"},F(s)),u=l.map((h,g)=>{var N=Ft(h,a),f=Gt(h,a.orientation),k=Jt(h),O=B(B(B({},c),{},{textAnchor:f,verticalAnchor:k,stroke:"none",fill:i},d),{},{index:g,payload:h,x:N.x2,y:N.y2});return n.createElement(z,I({className:G("recharts-polar-angle-axis-tick",Va(t)),key:"tick-".concat(h.coordinate)},Ne(a,h,g)),s&&n.createElement("line",I({className:"recharts-polar-angle-axis-tick-line"},o,N)),n.createElement(Yt,{tick:t,tickProps:O,value:r?r(h.value,g):h.value}))});return n.createElement(z,{className:"recharts-polar-angle-axis-ticks"},u)},Qt=a=>{var{angleAxisId:t}=a,s=M(aa),r=M(d=>q(d,"angleAxis",t)),i=Ma(),l=M(d=>ua(d,"angleAxis",t,i));if(s==null||!l||!l.length)return null;var c=B(B(B({},a),{},{scale:r},s),{},{radius:s.outerRadius});return n.createElement(z,{className:G("recharts-polar-angle-axis",ha,c.className)},n.createElement(qt,I({},c,{ticks:l})),n.createElement(Ht,I({},c,{ticks:l})))};class ie extends n.PureComponent{render(){return this.props.radius<=0?null:n.createElement(Wt,{id:this.props.angleAxisId,scale:this.props.scale,type:this.props.type,dataKey:this.props.dataKey,unit:void 0,name:this.props.name,allowDuplicatedCategory:!1,allowDataOverflow:!1,reversed:this.props.reversed,includeHidden:!1,allowDecimals:this.props.allowDecimals,tickCount:this.props.tickCount,ticks:this.props.ticks,tick:this.props.tick,domain:this.props.domain},n.createElement(Qt,this.props))}}re(ie,"displayName","PolarAngleAxis");re(ie,"axisType",ha);re(ie,"defaultProps",Ua);function xe(){return xe=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},xe.apply(null,arguments)}function ze(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function me(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(s),!0).forEach(function(r){Zt(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):ze(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function Zt(a,t,s){return(t=Xt(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function Xt(a){var t=es(a,"string");return typeof t=="symbol"?t:t+""}function es(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function pa(a){return typeof a=="string"?parseInt(a,10):a}function as(a,t){var s="".concat(t.cx||a.cx),r=Number(s),i="".concat(t.cy||a.cy),l=Number(i);return me(me(me({},t),a),{},{cx:r,cy:l})}function ga(a){return n.createElement(Ka,xe({shapeType:"sector",propTransformer:as},a))}function Ve(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function te(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Ve(Object(s),!0).forEach(function(r){ts(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):Ve(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function ts(a,t,s){return(t=ss(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function ss(a){var t=rs(a,"string");return typeof t=="symbol"?t:t+""}function rs(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var is=(a,t)=>ea(a,t),ls=(a,t)=>q(a,"radiusAxis",t),le=x([is,ls],(a,t)=>{if(!(a==null||t==null))return te(te({},a),{},{scale:t})}),Ae=(a,t,s,r)=>_t(a,"radiusAxis",t,r),ns=(a,t,s)=>ye(a,s),cs=(a,t,s)=>q(a,"angleAxis",s),ne=x([ns,cs],(a,t)=>{if(!(a==null||t==null))return te(te({},a),{},{scale:t})}),Ce=(a,t,s,r)=>ua(a,"angleAxis",s,r),os=(a,t,s,r)=>r,we=x([ra,os],(a,t)=>{if(a.some(s=>s.type==="radialBar"&&t.dataKey===s.dataKey&&t.stackId===s.stackId))return t}),xa=x([E,le,Ae,ne,Ce],(a,t,s,r,i)=>Fa(a,"radiusAxis")?ae(t,s,!1):ae(r,i,!1)),ds=x([ne,le,E],(a,t,s)=>{var r=s==="radial"?a:t;if(!(r==null||r.scale==null))return Ga({numericAxis:r})}),ms=(a,t,s,r,i)=>i,us=(a,t,s,r,i)=>s,hs=(a,t,s,r,i)=>t,va=(a,t,s,r,i)=>r.maxBarSize,ps=x([E,ra,us,hs],(a,t,s,r)=>t.filter(i=>a==="centric"?i.angleAxisId===s:i.radiusAxisId===r).filter(i=>i.hide===!1).filter(i=>i.type==="radialBar")),gs=()=>{},xs=x([ps,Qa,gs],Za),vs=x([E,ia,ne,Ce,le,Ae,va],(a,t,s,r,i,l,c)=>{var d,o,u=at(c)?t:c;if(a==="centric"){var h,g;return(h=(g=ae(s,r,!0))!==null&&g!==void 0?g:u)!==null&&h!==void 0?h:0}return(d=(o=ae(i,l,!0))!==null&&o!==void 0?o:u)!==null&&d!==void 0?d:0}),fs=x([xs,ia,qa,Ya,vs,xa,va],Ha),bs=x([fs,we],(a,t)=>{if(!(a==null||t==null)){var s=a.find(r=>r.stackId===t.stackId&&t.dataKey!=null&&r.dataKeys.includes(t.dataKey));if(s!=null)return s.position}}),fa=x([rt],a=>a.filter(t=>t.type==="radialBar").filter(it)),js=x([fa,sa,tt],st),$e=x([js,fa,Xa],et),ys=(a,t,s)=>{var r=E(a);return r==="centric"?$e(a,"radiusAxis",t):$e(a,"angleAxis",s)},Ns=x([ys,we],Ja),Ps=x([ne,Ce,le,Ae,Wa,we,xa,E,ds,aa,ms,bs,Ns],(a,t,s,r,i,l,c,d,o,u,h,g,N)=>{var{chartData:f,dataStartIndex:k,dataEndIndex:O}=i;if(l==null||s==null||a==null||f==null||c==null||g==null||d!=="centric"&&d!=="radial"||r==null)return[];var{dataKey:S,minPointSize:P}=l,{cx:p,cy:C,startAngle:D,endAngle:L}=u,y=f.slice(k,O+1),A=d==="centric"?s:a,w=N?A.scale.domain():null;return zs({angleAxis:a,angleAxisTicks:t,bandSize:c,baseValue:o,cells:h,cx:p,cy:C,dataKey:S,dataStartIndex:k,displayedData:y,endAngle:L,layout:d,minPointSize:P,pos:g,radiusAxis:s,radiusAxisTicks:r,stackedData:N,stackedDomain:w,startAngle:D})}),Ds=x([sa,(a,t)=>t],(a,t)=>{var{chartData:s,dataStartIndex:r,dataEndIndex:i}=a;if(s==null)return[];var l=s.slice(r,i+1);return l.length===0?[]:l.map(c=>({type:t,value:c.name,color:c.fill,payload:c}))}),As=["shape","activeShape","cornerRadius","id"],Cs=["onMouseEnter","onClick","onMouseLeave"],ws=["value","background"];function U(){return U=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},U.apply(null,arguments)}function Ue(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function j(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(s),!0).forEach(function(r){ke(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):Ue(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function ke(a,t,s){return(t=ks(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function ks(a){var t=Ss(a,"string");return typeof t=="symbol"?t:t+""}function Ss(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function ve(a,t){if(a==null)return{};var s,r,i=Ls(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function Ls(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var fe=[];function Os(a){var{showLabels:t,sectors:s,children:r}=a,i=s.map(l=>({value:l.value,payload:l.payload,parentViewBox:void 0,clockWise:!1,viewBox:{cx:l.cx,cy:l.cy,innerRadius:l.innerRadius,outerRadius:l.outerRadius,startAngle:l.startAngle,endAngle:l.endAngle,clockWise:!1},fill:l.fill}));return n.createElement(yt,{value:t?i:null},r)}function Bs(a){var{sectors:t,allOtherRadialBarProps:s,showLabels:r}=a,{shape:i,activeShape:l,cornerRadius:c,id:d}=s,o=ve(s,As),u=F(o),h=M(xt),{onMouseEnter:g,onClick:N,onMouseLeave:f}=s,k=ve(s,Cs),O=vt(g,s.dataKey),S=ft(f),P=bt(N,s.dataKey);return t==null?null:n.createElement(Os,{showLabels:r,sectors:t},t.map((p,C)=>{var D=l&&h===String(C),L=O(p,C),y=S(p,C),A=P(p,C),w=j(j(j(j({},u),{},{cornerRadius:pa(c)},p),Ne(k,p,C)),{},{onMouseEnter:L,onMouseLeave:y,onClick:A,className:"recharts-radial-bar-sector ".concat(p.className),forceCornerRadius:o.forceCornerRadius,cornerIsExternal:o.cornerIsExternal,isActive:D,option:D?l:i});return n.createElement(ga,U({key:"sector-".concat(p.cx,"-").concat(p.cy,"-").concat(p.innerRadius,"-").concat(p.outerRadius,"-").concat(p.startAngle,"-").concat(p.endAngle,"-").concat(C)},w))}),n.createElement(jt,{label:s.label}),s.children)}function Rs(a){var{props:t,previousSectorsRef:s}=a,{data:r,isAnimationActive:i,animationBegin:l,animationDuration:c,animationEasing:d,onAnimationEnd:o,onAnimationStart:u}=t,h=pt(t,"recharts-radialbar-"),g=s.current,[N,f]=n.useState(!1),k=n.useCallback(()=>{typeof o=="function"&&o(),f(!1)},[o]),O=n.useCallback(()=>{typeof u=="function"&&u(),f(!0)},[u]);return n.createElement(gt,{animationId:h,begin:l,duration:c,isActive:i,easing:d,onAnimationStart:O,onAnimationEnd:k,key:h},S=>{var P=S===1?r:(r??fe).map((p,C)=>{var D=g&&g[C];if(D){var L=de(D.startAngle,p.startAngle),y=de(D.endAngle,p.endAngle);return j(j({},p),{},{startAngle:L(S),endAngle:y(S)})}var{endAngle:A,startAngle:w}=p,R=de(w,A);return j(j({},p),{},{endAngle:R(S)})});return S>0&&(s.current=P??null),n.createElement(z,null,n.createElement(Bs,{sectors:P??fe,allOtherRadialBarProps:t,showLabels:!N}))})}function Ts(a){var t=n.useRef(null);return n.createElement(Rs,{props:a,previousSectorsRef:t})}function Is(a){var t=M(s=>Ds(s,a.legendType));return n.createElement(ct,{legendPayload:t??[]})}function Es(a){var{dataKey:t,data:s,stroke:r,strokeWidth:i,name:l,hide:c,fill:d,tooltipType:o}=a;return{dataDefinedOnItem:s,positions:void 0,settings:{stroke:r,strokeWidth:i,fill:d,nameKey:void 0,dataKey:t,name:mt(l,t),hide:c,type:o,color:d,unit:""}}}class _s extends n.PureComponent{renderBackground(t){if(t==null)return null;var{cornerRadius:s}=this.props,r=ta(this.props.background);return t.map((i,l)=>{var{value:c,background:d}=i,o=ve(i,ws);if(!d)return null;var u=j(j(j(j(j({cornerRadius:pa(s)},o),{},{fill:"#eee"},d),r),Ne(this.props,i,l)),{},{index:l,className:G("recharts-radial-bar-background-sector",r==null?void 0:r.className),option:d,isActive:!1});return n.createElement(ga,U({key:"background-".concat(o.cx,"-").concat(o.cy,"-").concat(o.innerRadius,"-").concat(o.outerRadius,"-").concat(o.startAngle,"-").concat(o.endAngle,"-").concat(l)},u))})}render(){var{hide:t,data:s,className:r,background:i}=this.props;if(t)return null;var l=G("recharts-area",r);return n.createElement(z,{className:l},i&&n.createElement(z,{className:"recharts-radial-bar-background"},this.renderBackground(s)),n.createElement(z,{className:"recharts-radial-bar-sectors"},n.createElement(Ts,this.props)))}}function Ms(a){var t,s=ot(a.children,na),r={data:void 0,hide:!1,id:a.id,dataKey:a.dataKey,minPointSize:a.minPointSize,stackId:la(a.stackId),maxBarSize:a.maxBarSize,barSize:a.barSize,type:"radialBar",angleAxisId:a.angleAxisId,radiusAxisId:a.radiusAxisId},i=(t=M(l=>Ps(l,a.radiusAxisId,a.angleAxisId,r,s)))!==null&&t!==void 0?t:fe;return n.createElement(n.Fragment,null,n.createElement(dt,{fn:Es,args:j(j({},a),{},{data:i})}),n.createElement(_s,U({},a,{data:i})))}var X={angleAxisId:0,radiusAxisId:0,minPointSize:0,hide:!1,legendType:"rect",data:[],isAnimationActive:!Nt.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease",forceCornerRadius:!1,cornerIsExternal:!1};function zs(a){var{displayedData:t,stackedData:s,dataStartIndex:r,stackedDomain:i,dataKey:l,baseValue:c,layout:d,radiusAxis:o,radiusAxisTicks:u,bandSize:h,pos:g,angleAxis:N,minPointSize:f,cx:k,cy:O,angleAxisTicks:S,cells:P,startAngle:p,endAngle:C}=a;return(t??[]).map((D,L)=>{var y,A,w,R,K,Re;if(s?y=ut(s[r+L],i):(y=ht(D,l),Array.isArray(y)||(y=[c,y])),d==="radial"){A=Te({axis:o,ticks:u,bandSize:h,offset:g.offset,entry:D,index:L}),K=N.scale(y[1]),R=N.scale(y[0]),w=(A??0)+g.size;var ce=K-R;if(Math.abs(f)>0&&Math.abs(ce)<Math.abs(f)){var Na=Ie(ce||f)*(Math.abs(f)-Math.abs(ce));K+=Na}Re={background:{cx:k,cy:O,innerRadius:A,outerRadius:w,startAngle:p,endAngle:C}}}else{A=o.scale(y[0]),w=o.scale(y[1]),R=Te({axis:N,ticks:S,bandSize:h,offset:g.offset,entry:D,index:L}),K=(R??0)+g.size;var oe=w-A;if(Math.abs(f)>0&&Math.abs(oe)<Math.abs(f)){var Pa=Ie(oe||f)*(Math.abs(f)-Math.abs(oe));w+=Pa}}return j(j(j({},D),Re),{},{payload:D,value:s?y:y[1],cx:k,cy:O,innerRadius:A,outerRadius:w,startAngle:R,endAngle:K},P&&P[L]&&P[L].props)})}class Se extends n.PureComponent{render(){return n.createElement(lt,{id:this.props.id,type:"radialBar"},t=>{var s,r,i;return n.createElement(n.Fragment,null,n.createElement(nt,{type:"radialBar",id:t,data:void 0,dataKey:this.props.dataKey,hide:(s=this.props.hide)!==null&&s!==void 0?s:X.hide,angleAxisId:(r=this.props.angleAxisId)!==null&&r!==void 0?r:X.angleAxisId,radiusAxisId:(i=this.props.radiusAxisId)!==null&&i!==void 0?i:X.radiusAxisId,stackId:la(this.props.stackId),barSize:this.props.barSize,minPointSize:this.props.minPointSize,maxBarSize:this.props.maxBarSize}),n.createElement(Is,this.props),n.createElement(Ms,U({},this.props,{id:t})))})}}ke(Se,"displayName","RadialBar");ke(Se,"defaultProps",X);var Vs=["axis","item"],$s={layout:"radial",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},be=n.forwardRef((a,t)=>{var s=Pt(a,$s);return n.createElement(Dt,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Vs,tooltipPayloadSearcher:At,categoricalChartProps:s,ref:t})});function ba({data:a,lineColor:t="#2962FF"}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsx(ca,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:e.jsx(oa,{type:"monotone",dataKey:"value",stroke:t,strokeWidth:2,dot:!1,activeDot:!1,isAnimationActive:!1})})})}try{MinimalLineChart.displayName="MinimalLineChart",MinimalLineChart.__docgenInfo={description:"",displayName:"MinimalLineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ time: string; value: number; }[]"}},lineColor:{defaultValue:{value:"#2962FF"},description:"",name:"lineColor",required:!1,type:{name:"string | undefined"}}}}}catch{}function Le({data:a,lineConfigs:t}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(ca,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(da,{strokeDasharray:"3 3",horizontal:!0,vertical:!1}),t.map((s,r)=>e.jsx(oa,{type:"monotone",dataKey:s.dataKey,stroke:s.color,strokeWidth:2,dot:!1,activeDot:!1,isAnimationActive:!1},r))]})})}try{MultiLineChart.displayName="MultiLineChart",MultiLineChart.__docgenInfo={description:"",displayName:"MultiLineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown[]"}},lineConfigs:{defaultValue:null,description:"",name:"lineConfigs",required:!0,type:{name:"{ dataKey: string; color: string; }[]"}}}}}catch{}function ja({data:a}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsx(pe,{margin:{top:0,right:0,left:0,bottom:0},children:e.jsx(Ct,{data:a,cx:"50%",cy:"50%",outerRadius:80,fill:"#8884d8",dataKey:"value",nameKey:"name",paddingAngle:5,cornerRadius:5,labelLine:!1,label:!1,children:a.map((t,s)=>e.jsx(na,{fill:t.color},`cell-${s}`))})})})}try{pe.displayName="PieChart",pe.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ name: string; value: number; color: string; }[]"}}}}}catch{}function Us({data:a,barColor:t="#0d6efd"}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(ge,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(da,{strokeDasharray:"3 3"}),e.jsx(wt,{dataKey:"name"}),e.jsx(kt,{dataKey:"value",fill:t,radius:[5,5,0,0]})]})})}try{ge.displayName="BarChart",ge.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ name: string; value: number; }[]"}},barColor:{defaultValue:{value:"#0d6efd"},description:"",name:"barColor",required:!1,type:{name:"string | undefined"}}}}}catch{}function Ks({value:a,color:t="#0d6efd"}){const s=[{name:"Progress",value:a,fill:t}];return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(be,{innerRadius:"70%",outerRadius:"90%",data:s,startAngle:90,endAngle:-270,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(ie,{type:"number",domain:[0,100],angleAxisId:0,tick:!1}),e.jsx(Se,{background:!0,dataKey:"value"}),e.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",className:"h5",fill:"#343a40",children:`${a}%`})]})})}try{be.displayName="RadialBarChart",be.__docgenInfo={description:"",displayName:"RadialBarChart",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#0d6efd"},description:"",name:"color",required:!1,type:{name:"string | undefined"}}}}}catch{}function Ws(a){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .sbdocs-content {
            max-width: unset;
          }
        `}),e.jsx(Da,{...a})]})}const gr={title:"Patterns/Dashboard View",component:v,parameters:{layout:"fullscreen",docs:{page:St,container:Ws,description:{component:"A dashboard-like view demonstrating the use of various components and Bootstrap grid utilities for a clean and modern layout."}}},tags:["autodocs"]},se=[{id:0,title:"Total Sales",value:"$12,000",icon:"DollarSign",color:"text-primary",percentage:5.2},{id:0,title:"Breakdown",value:"$12,000",icon:"DollarSign",color:"text-primary",percentage:5.2},{id:1,title:"Branding",value:"$19,500",icon:"UserRoundCheck",color:"text-primary",percentage:4.2},{id:1,title:"Marketing",value:"$3,500",icon:"DiamondPercent",color:"text-danger",percentage:2.2}],Fs=()=>{const a=[];let t=100,s=120;for(let r=0;r<30;r++)a.push({time:`2023-01-${r+1<10?`0${r+1}`:r+1}`,value1:t+Math.random()*20-10,value2:s+Math.random()*15-7}),t=a[r].value1,s=a[r].value2;return a},ue=()=>{const a=[];let t=Math.random()*50+50;for(let s=0;s<10;s++)a.push({time:`2023-01-${s+1<10?`0${s+1}`:s+1}`,value:t+Math.random()*10-5}),t=a[s].value;return a},Oe=Fs(),Be=[{dataKey:"value1",color:"#0d6efd"},{dataKey:"value2",color:"#198754"}],ya=[{id:1,title:"Project Alpha",description:"Product Launch - My Projects",chartData:ue(),chartColor:"#0d6efd"},{id:2,title:"Project Beta",description:"Marketing Campaign - New Initiatives",chartData:ue(),chartColor:"#198754"},{id:3,title:"Project Gamma",description:"Website Redesign - Internal Tools",chartData:ue(),chartColor:"#ffc107"}],Gs=[{id:1,name:"Team Alpha",color:"#0d6efd",description:"Product Launch - My Projects"},{id:2,name:"Team Beta",color:"#198754",description:"Marketing Campaign - New Initiatives"},{id:3,name:"Team Gamma",color:"#ffc107",description:"Website Redesign - Internal Tools"}],H={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx($,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(v,{className:"grid gap-0 mb-4 p-0",children:se.map(({id:a,title:t,value:s,percentage:r,icon:i,color:l},c)=>e.jsxs("div",{className:`g-col-12 g-col-md-6 g-col-lg-3 p-8 ${se.length-1!==c?"border-end":""}`,children:[e.jsxs("div",{className:"d-flex gap-2 align-items-center mb-2",children:[e.jsx(b,{className:"text-gray-400",icon:i,size:"1rem"}),e.jsx("span",{className:"text-muted",children:t})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{children:e.jsx("div",{className:"fs-4 fw-bold",children:s})}),e.jsxs("p",{className:`${l} mb-0`,children:[r,"%"]})]})]},a))}),e.jsxs(m,{className:"mb-4",gap:4,children:[e.jsx(m.Pane,{cols:"12",colsLg:8,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-8",children:[e.jsxs("div",{className:"mb-0 d-flex align-items-start gap-2 w-100",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),e.jsxs("div",{children:[e.jsx("h5",{children:"Sales Performance"}),e.jsx("small",{className:"text-muted",children:"Last 30 days"})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsxs("select",{className:"form-select form-select-sm",style:{minWidth:"150px"},children:[e.jsx("option",{children:"Today"}),e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"This Year"})]}),e.jsx($,{style:{whiteSpace:"nowrap"},size:"sm",variant:"outline",text:"View Report"})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(Le,{data:Oe,lineConfigs:Be})})]})}),e.jsx(m.Pane,{cols:"12",colsLg:4,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Task Progress"]}),e.jsx("div",{className:"list-group list-group-flush",children:ya.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.title}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",style:{width:"100px",height:"30px"},children:e.jsx(ba,{data:a.chartData,lineColor:a.chartColor})})]},a.id))})]})})]}),e.jsxs(m,{gap:4,children:[e.jsx(m.Pane,{cols:"12",colsLg:6,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:"12",colsLg:6,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"User Retention Cohorts"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h4",{className:"display-3 line-height-1",children:"40%"}),e.jsx(b,{icon:"TrendingUp",hasCircle:!0,size:"1rem",color:"success"})]}),e.jsx("p",{children:"After 30 days"}),e.jsx("small",{className:"text-muted",children:"Oct - Nov"})]}),e.jsx("div",{className:"g-col-12 g-col-lg-6",style:{height:"100px"},children:e.jsx("div",{style:{height:"200px"},children:e.jsx(ja,{data:[{name:"Category A",value:400,color:"#e35d6a"},{name:"Category B",value:300,color:"#a370f7"},{name:"Category C",value:300,color:"#3dd5f3"},{name:"Category D",value:200,color:"#8c68cd"}]})})})]})]})})]})]})},Q={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx($,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(m,{gap:4,className:"mb-4",children:se.map(({id:a,percentage:t,value:s})=>e.jsxs(v,{className:"g-col-12 g-col-md-6 g-col-lg-3 p-8 text-center",children:[e.jsx("div",{style:{height:100},children:e.jsx(Ks,{value:t,color:"var(--bs-primary-500)"})}),e.jsx("div",{className:"fs-4 fw-bold",children:s}),e.jsx("small",{className:"text-muted m-0",children:"Last 30 days"})]},a))}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:"8",children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-8",children:[e.jsxs("div",{className:"mb-0 d-flex align-items-start gap-2 w-100",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),e.jsxs("div",{children:[e.jsx("h5",{children:"Sales Performance"}),e.jsx("small",{className:"text-muted",children:"Last 30 days"})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsxs("select",{className:"form-select form-select-sm",style:{minWidth:"150px"},children:[e.jsx("option",{children:"Today"}),e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"This Year"})]}),e.jsx($,{style:{whiteSpace:"nowrap"},size:"sm",variant:"outline",text:"View Report"})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(Le,{data:Oe,lineConfigs:Be})})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"Users",size:".75rem"}),"Task Progress"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsx("div",{className:"list-group list-group-flush",children:ya.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.title}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",style:{width:"100px",height:"30px"},children:e.jsx(ba,{data:a.chartData,lineColor:a.chartColor})})]},a.id))})]})})]}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:"4",children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsx("div",{className:"d-flex",children:e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"Users",size:".75rem"}),"Teams"]})}),e.jsx("div",{className:"list-group list-group-flush",children:Gs.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.name}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",children:e.jsxs("div",{className:"d-avatar-group",children:[e.jsx(_,{name:"AB",image:"https://www.sarahdeanephotography.co.uk/wp-content/uploads/2021/01/MENS-GROOMING-FOR-PHOTO-SHOOT-IN-STUDIO-FOR-ONLINE-PROFILES-AND-PORTRAITURE-IN-NEWCASTLE-7.jpg",size:"sm",useNameAsInitials:!0}),e.jsx(_,{name:"AB",image:"https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2A.jpg",size:"sm",useNameAsInitials:!0}),e.jsx(_,{name:"AB",image:"https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png",size:"sm",useNameAsInitials:!0}),e.jsx(_,{name:"AB",image:"https://us.images.westend61.de/0001485597pw/medium-shot-portrait-of-young-beautiful-woman-wearing-a-beige-dress-posing-in-a-field-full-of-flowers-and-surrounded-by-trees-she-is-with-her-hand-in-her-face-ADSF17772.jpg",size:"sm",useNameAsInitials:!0})]})})]},a.id))})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(v,{className:"p-8 g-col-12 g-col-lg-4 text-white overflow-hidden",style:{background:"#21457f"},children:[e.jsx("small",{className:"text-uppercase",children:"Newspapper"}),e.jsx("h4",{className:"mb-4",children:"Gets news on your phone"}),e.jsx("p",{className:"",children:"Priceless and optimal sign"}),e.jsx($,{text:"Subscribe",color:"light"}),e.jsx("div",{children:e.jsx("img",{alt:"placeholder",style:{marginTop:"-3rem",marginBottom:"-2rem",marginRight:"-2rem",float:"right",width:"100%",display:"block"},src:"https://img.freepik.com/free-vector/hand-drawn-w-colours-illustration_23-2149852395.jpg?t=st=1761342724~exp=1761346324~hmac=7ae6cc17547356bb03c37c5ff6039be6514e0c8feb50c975486113aa4b40e9ef&w=2000"})})]})})]})]})},Js=[{name:"Alpha",value:75},{name:"Beta",value:40},{name:"Gamma",value:90},{name:"Delta",value:60},{name:"Gamma",value:90},{name:"Delta",value:60}],Z={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx($,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(m,{gap:4,className:"mb-4",children:se.map(({id:a,title:t,value:s,percentage:r,icon:i,color:l})=>e.jsxs(m.Pane,{cols:12,colsLg:3,colsMd:6,className:"p-8 bg-primary-50 rounded-3",children:[e.jsxs("div",{className:"d-flex gap-2 align-items-center mb-2",children:[e.jsx(b,{hasCircle:!0,color:"primary",icon:i,size:"1rem"}),e.jsx("span",{className:"text-muted",children:t})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"fs-4 fw-bold",children:s}),e.jsxs("p",{className:`${l} mb-0`,children:[r,"%"]})]})]},a))}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:12,colsLg:8,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between gap-8 align-items-center mb-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-muted mb-0",children:"Total portfolio"}),e.jsx("h3",{className:"display-6 mb-0",children:"$123,456"}),e.jsxs("p",{className:"text-muted mb-0",children:["You gained",e.jsx("strong",{children:"$40.000 last 6 months"}),". Thats the best results in last 2 years"]})]}),e.jsxs("ul",{className:"nav nav-pills nav-fill gap-1 p-1 small bg-primary-50 rounded-5",id:"pillNav2",role:"tablist",style:{"--bs-nav-link-color":"var(--bs-gray-500)","--bs-nav-pills-link-active-color":"#fff","--bs-nav-pills-link-active-bg":"var(--bs-primary)"},children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active rounded-5",id:"home-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"true",children:"24h"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"profile-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"7d"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"6m"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"1y"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"Max"})})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(Le,{data:Oe,lineConfigs:Be})}),e.jsx("div",{className:"d-flex justify-content-end align-items-center mt-8",children:e.jsx(Lt,{color:"success",text:"Increase 10%",iconStart:"ArrowUp"})})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(v,{className:"mb-8 p-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"BarChart3",size:".75rem"}),"Return on investment"]}),e.jsx("div",{className:"text-muted ms-auto",children:"Last 6m."})]}),e.jsx("h3",{className:"display-6 mb-0",children:"$123,456"}),e.jsx("p",{className:"text-muted mb-8",children:"Oct 2024 - Apr 2025"}),e.jsx("div",{style:{height:"200px"},children:e.jsx(Us,{data:Js,barColor:"#0d6efd"})})]})})]}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:12,colsLg:6,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:6,children:e.jsxs(v,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(b,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"User Retention Cohorts"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h4",{className:"display-3 line-height-1",children:"40%"}),e.jsx(b,{icon:"TrendingUp",hasCircle:!0,size:"1rem",color:"success"})]}),e.jsx("p",{children:"After 30 days"}),e.jsx("small",{className:"text-muted",children:"Oct - Nov"})]}),e.jsx("div",{className:"g-col-12 g-col-lg-6",style:{height:"100px"},children:e.jsx("div",{style:{height:"200px"},children:e.jsx(ja,{data:[{name:"Category A",value:400,color:"#e35d6a"},{name:"Category B",value:300,color:"#a370f7"},{name:"Category C",value:300,color:"#3dd5f3"},{name:"Category D",value:200,color:"#8c68cd"}]})})})]})]})})]}),e.jsxs(m,{gap:4,children:[e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(v,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Quick Stats"}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{children:"Revenue"}),e.jsx("span",{className:"fw-bold",children:"+15%"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{children:"New Customers"}),e.jsx("span",{className:"fw-bold",children:"+250"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("span",{children:"Support Tickets"}),e.jsx("span",{className:"fw-bold",children:"5 Open"})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(v,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Recent Notifications"}),e.jsxs("ul",{className:"list-unstyled mb-0",children:[e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(b,{hasCircle:!0,color:"info",icon:"Bell",size:"1rem",className:"me-2"}),e.jsx("span",{children:"New feature deployed!"}),e.jsx("small",{className:"ms-auto text-muted",children:"5 min ago"})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(b,{hasCircle:!0,color:"info",size:"1rem",icon:"AlertTriangle",className:" me-2"}),e.jsx("span",{children:"Server overload warning."}),e.jsx("small",{className:"ms-auto text-muted",children:"1 hour ago"})]}),e.jsxs("li",{className:"d-flex align-items-center",children:[e.jsx(b,{hasCircle:!0,size:"1rem",color:"info",icon:"CircleCheck",className:"me-2"}),e.jsx("span",{children:"Report generated successfully."}),e.jsx("small",{className:"ms-auto text-muted",children:"Yesterday"})]})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(v,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Team Activity"}),e.jsxs("ul",{className:"list-unstyled mb-0",children:[e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(_,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(_,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(_,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]})]})]})})]})]})};var Ke,We,Fe;H.parameters={...H.parameters,docs:{...(Ke=H.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8">
        <Story />
      </div>],
  render: () => <>
      <div className="d-flex justify-content-between align-items-end mb-8">
        <div>
          <h2 className="mb-0 fw-normal h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="text-muted mb-0">Today is May 12, 2023</p>
        </div>
        <DButton text="Refresh Data" iconStart="RotateCw" variant="link" />
      </div>

      <DBox className="grid gap-0 mb-4 p-0">
        {SUMMARY.map(({
        id,
        title,
        value,
        percentage,
        icon,
        color
      }, index) => <div key={id} className={\`g-col-12 g-col-md-6 g-col-lg-3 p-8 \${SUMMARY.length - 1 !== index ? 'border-end' : ''}\`}>
            <div className="d-flex gap-2 align-items-center mb-2">
              <DIcon className="text-gray-400" icon={icon} size="1rem" />
              <span className="text-muted">{title}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fs-4 fw-bold">{value}</div>
              </div>
              <p className={\`\${color} mb-0\`}>
                {percentage}
                %
              </p>
            </div>
          </div>)}
      </DBox>

      <DLayout className="mb-4" gap={4}>
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="12" colsLg={8}>
          <DBox className="mb-8 h-100">
            <div className="d-flex justify-content-between align-items-center mb-8">
              <div className="mb-0 d-flex align-items-start gap-2 w-100">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select form-select-sm" style={{
                minWidth: '150px'
              }}>
                  <option>Today</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
                <DButton style={{
                whiteSpace: 'nowrap'
              }} size="sm" variant="outline" text="View Report" />
              </div>
            </div>
            <div style={{
            height: '200px'
          }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="12" colsLg={4}>
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Task Progress
            </h5>
            <div className="list-group list-group-flush">
              {tasks.map(task => <div key={task.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{task.title}</h6>
                    <small className="text-muted">{task.description}</small>
                  </div>
                  <div className="ms-auto" style={{
                width: '100px',
                height: '30px'
              }}>
                    <DMinimalLineChart data={task.chartData} lineColor={task.chartColor} />
                  </div>
                </div>)}
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4}>
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="12" colsLg={6}>
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="12" colsLg={6}>
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="grid gap-4 p-4">
              <div className="g-col-12 g-col-lg-6">
                <div className="d-flex align-items-center gap-2">
                  <h4 className="display-3 line-height-1">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="text-muted">Oct - Nov</small>
              </div>
              <div className="g-col-12 g-col-lg-6" style={{
              height: '100px'
            }}>
                <div style={{
                height: '200px'
              }}>
                  <DPieChart data={[{
                  name: 'Category A',
                  value: 400,
                  color: '#e35d6a'
                }, {
                  name: 'Category B',
                  value: 300,
                  color: '#a370f7'
                }, {
                  name: 'Category C',
                  value: 300,
                  color: '#3dd5f3'
                }, {
                  name: 'Category D',
                  value: 200,
                  color: '#8c68cd'
                }]} />
                </div>
              </div>
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>
    </>
}`,...(Fe=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Ge,Je,qe;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8">
        <Story />
      </div>],
  render: () => <>
      <div className="d-flex justify-content-between align-items-end mb-8">
        <div>
          <h2 className="mb-0 fw-normal h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="text-muted mb-0">Today is May 12, 2023</p>
        </div>
        <DButton text="Refresh Data" iconStart="RotateCw" variant="link" />
      </div>

      <DLayout gap={4} className="mb-4">
        {SUMMARY.map(({
        id,
        percentage,
        value
      }) => <DBox key={id} className="g-col-12 g-col-md-6 g-col-lg-3 p-8 text-center">
            <div style={{
          height: 100
        }}>
              <DRadialBarChart value={percentage} color="var(--bs-primary-500)" />
            </div>
            <div className="fs-4 fw-bold">{value}</div>
            <small className="text-muted m-0">Last 30 days</small>
          </DBox>)}
      </DLayout>

      <DLayout gap={4} className="mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="8">
          <DBox className="mb-8 h-100">
            <div className="d-flex justify-content-between align-items-center mb-8">
              <div className="mb-0 d-flex align-items-start gap-2 w-100">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select form-select-sm" style={{
                minWidth: '150px'
              }}>
                  <option>Today</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
                <DButton style={{
                whiteSpace: 'nowrap'
              }} size="sm" variant="outline" text="View Report" />
              </div>
            </div>
            <div style={{
            height: '200px'
          }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="4">
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Task Progress
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="list-group list-group-flush">
              {tasks.map(task => <div key={task.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{task.title}</h6>
                    <small className="text-muted">{task.description}</small>
                  </div>
                  <div className="ms-auto" style={{
                width: '100px',
                height: '30px'
              }}>
                    <DMinimalLineChart data={task.chartData} lineColor={task.chartColor} />
                  </div>
                </div>)}
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4} className="mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="4">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="4">
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Teams
              </h5>
            </div>
            <div className="list-group list-group-flush">
              {teams.map(team => <div key={team.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{team.name}</h6>
                    <small className="text-muted">{team.description}</small>
                  </div>
                  <div className="ms-auto">
                    <div className="d-avatar-group">
                      <DAvatar name="AB" image="https://www.sarahdeanephotography.co.uk/wp-content/uploads/2021/01/MENS-GROOMING-FOR-PHOTO-SHOOT-IN-STUDIO-FOR-ONLINE-PROFILES-AND-PORTRAITURE-IN-NEWCASTLE-7.jpg" size="sm" useNameAsInitials />
                      <DAvatar name="AB" image="https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2A.jpg" size="sm" useNameAsInitials />
                      <DAvatar name="AB" image="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png" size="sm" useNameAsInitials />
                      <DAvatar name="AB" image="https://us.images.westend61.de/0001485597pw/medium-shot-portrait-of-young-beautiful-woman-wearing-a-beige-dress-posing-in-a-field-full-of-flowers-and-surrounded-by-trees-she-is-with-her-hand-in-her-face-ADSF17772.jpg" size="sm" useNameAsInitials />
                    </div>
                  </div>
                </div>)}
            </div>
          </DBox>
        </DLayout.Pane>

        <DLayout.Pane cols="4">
          <DBox className="p-8 g-col-12 g-col-lg-4 text-white overflow-hidden" style={{
          background: '#21457f'
        }}>
            <small className="text-uppercase">Newspapper</small>
            <h4 className="mb-4">Gets news on your phone</h4>
            <p className="">Priceless and optimal sign</p>
            <DButton text="Subscribe" color="light" />
            <div>
              <img alt="placeholder" style={{
              marginTop: '-3rem',
              marginBottom: '-2rem',
              marginRight: '-2rem',
              float: 'right',
              width: '100%',
              display: 'block'
            }} src="https://img.freepik.com/free-vector/hand-drawn-w-colours-illustration_23-2149852395.jpg?t=st=1761342724~exp=1761346324~hmac=7ae6cc17547356bb03c37c5ff6039be6514e0c8feb50c975486113aa4b40e9ef&w=2000" />
            </div>
          </DBox>
        </DLayout.Pane>

      </DLayout>
    </>
}`,...(qe=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:qe.source}}};var Ye,He,Qe;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8">
        <Story />
      </div>],
  render: () => <>
      <div className="d-flex justify-content-between align-items-end mb-8">
        <div>
          <h2 className="mb-0 fw-normal h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="text-muted mb-0">Today is May 12, 2023</p>
        </div>
        <DButton text="Refresh Data" iconStart="RotateCw" variant="link" />
      </div>

      <DLayout gap={4} className="mb-4">
        {SUMMARY.map(({
        id,
        title,
        value,
        percentage,
        icon,
        color
      }) => <DLayout.Pane key={id} cols={12} colsLg={3} colsMd={6} className="p-8 bg-primary-50 rounded-3">
            <div className="d-flex gap-2 align-items-center mb-2">
              <DIcon hasCircle color="primary" icon={icon} size="1rem" />
              <span className="text-muted">{title}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="fs-4 fw-bold">{value}</div>
              <p className={\`\${color} mb-0\`}>
                {percentage}
                %
              </p>
            </div>
          </DLayout.Pane>)}
      </DLayout>

      <DLayout gap={4} className="mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols={12} colsLg={8}>
          <DBox className="mb-8 h-100">
            <div className="d-flex justify-content-between gap-8 align-items-center mb-8">
              <div className="flex-1">
                <p className="text-muted mb-0">Total portfolio</p>
                <h3 className="display-6 mb-0">$123,456</h3>
                <p className="text-muted mb-0">
                  You gained
                  <strong>$40.000 last 6 months</strong>
                  . Thats the best results in last 2 years
                </p>
              </div>
              <ul className="nav nav-pills nav-fill gap-1 p-1 small bg-primary-50 rounded-5" id="pillNav2" role="tablist" style={{
              '--bs-nav-link-color': 'var(--bs-gray-500)',
              '--bs-nav-pills-link-active-color': '#fff',
              '--bs-nav-pills-link-active-bg': 'var(--bs-primary)'
            } as CSSProperties}>
                <li className="nav-item" role="presentation">
                  <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">24h</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">7d</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">6m</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">1y</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Max</button>
                </li>
              </ul>
            </div>
            <div style={{
            height: '200px'
          }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
            <div className="d-flex justify-content-end align-items-center mt-8">
              <DBadge color="success" text="Increase 10%" iconStart="ArrowUp" />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="mb-8 p-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="BarChart3" size=".75rem" />
                Return on investment
              </h5>
              <div className="text-muted ms-auto">Last 6m.</div>
            </div>
            <h3 className="display-6 mb-0">$123,456</h3>
            <p className="text-muted mb-8">Oct 2024 - Apr 2025</p>
            <div style={{
            height: '200px'
          }}>
              <DBarChart data={taskProgressData} barColor="#0d6efd" />
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4} className="mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols={12} colsLg={6}>
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols={12} colsLg={6}>
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="grid gap-4 p-4">
              <div className="g-col-12 g-col-lg-6">
                <div className="d-flex align-items-center gap-2">
                  <h4 className="display-3 line-height-1">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="text-muted">Oct - Nov</small>
              </div>
              <div className="g-col-12 g-col-lg-6" style={{
              height: '100px'
            }}>
                <div style={{
                height: '200px'
              }}>
                  <DPieChart data={[{
                  name: 'Category A',
                  value: 400,
                  color: '#e35d6a'
                }, {
                  name: 'Category B',
                  value: 300,
                  color: '#a370f7'
                }, {
                  name: 'Category C',
                  value: 300,
                  color: '#3dd5f3'
                }, {
                  name: 'Category D',
                  value: 200,
                  color: '#8c68cd'
                }]} />
                </div>
              </div>
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      <DLayout gap={4}>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="h-100">
            <h5 className="mb-3">Quick Stats</h5>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Revenue</span>
              <span className="fw-bold">+15%</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>New Customers</span>
              <span className="fw-bold">+250</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Support Tickets</span>
              <span className="fw-bold">5 Open</span>
            </div>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="h-100">
            <h5 className="mb-3">Recent Notifications</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2">
                <DIcon hasCircle color="info" icon="Bell" size="1rem" className="me-2" />
                <span>New feature deployed!</span>
                <small className="ms-auto text-muted">5 min ago</small>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DIcon hasCircle color="info" size="1rem" icon="AlertTriangle" className=" me-2" />
                <span>Server overload warning.</span>
                <small className="ms-auto text-muted">1 hour ago</small>
              </li>
              <li className="d-flex align-items-center">
                <DIcon hasCircle size="1rem" color="info" icon="CircleCheck" className="me-2" />
                <span>Report generated successfully.</span>
                <small className="ms-auto text-muted">Yesterday</small>
              </li>
            </ul>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="h-100">
            <h5 className="mb-3">Team Activity</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
            </ul>
          </DBox>
        </DLayout.Pane>
      </DLayout>
    </>
}`,...(Qe=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};const xr=["Dashboard","Dashboard2","Dashboard3"];export{H as Dashboard,Q as Dashboard2,Z as Dashboard3,xr as __namedExportsOrder,gr as default};
