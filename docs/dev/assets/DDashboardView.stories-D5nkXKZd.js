import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as Na}from"./blocks-CCBL7Lvn.js";import{D as x}from"./DBox-CwmumsS_.js";import{f as _,c as g,s as Ze,a as Pa,b as Da,d as R,e as Aa,g as Xe,p as je,h as Ca,i as ea,j as ye,k as wa,l as ka,m as Sa,n as Oa,o as Ba,q as La,u as Ta,r as z,t as Ia,v as Ra,w as aa,x as Ea,L as V,y as Ne,D as _a,z as pe,A as Ma,B as Pe,T as za,C as Va,S as $a,E as ta,F as Ua,G as sa,H as Ka,I as X,J as Wa,K as Fa,M as ra,N as Ga,O as Ja,P as qa,Q as Ya,R as Ha,U as Qa,V as Za,W as Xa,X as et,Y as at,Z as tt,_ as st,$ as rt,a0 as it,a1 as ia,a2 as lt,a3 as nt,a4 as ct,a5 as la,a6 as ot,a7 as dt,a8 as mt,a9 as Ie,aa as ut,ab as ht,ac as me,ad as pt,ae as gt,af as xt,ag as vt,ah as ft,ai as bt,aj as Re,ak as jt,al as yt,am as Nt,an as J,ao as na,ap as ca,aq as oa,ar as Pt,as as Dt,at as At,au as Ct,av as wt}from"./PieChart-vUEUnX7K.js";import{r as n}from"./iframe-CppG1Bu4.js";import{c as F}from"./clsx-B-dksMZM.js";import{D as U}from"./DButton-Dn4_6Ut_.js";import{D as f}from"./DIcon-RaII-fCP.js";import{D as m}from"./DLayout-lx-U7S7v.js";import{D as T}from"./DProgress-BryLJ3C9.js";import{D as M}from"./DAvatar-Dlg9GLDl.js";import{D as kt}from"./DBadge-C7h8ha-I.js";import"./index-CgwUC5VX.js";import"./index-DM0dE67Y.js";import"./index-DnZP3Fio.js";import"./config-C3iYXcFk.js";import"./DContext-CwTzY28G.js";var St=["points","className","baseLinePoints","connectNulls"];function $(){return $=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},$.apply(null,arguments)}function Ot(a,t){if(a==null)return{};var s,r,i=Bt(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function Bt(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var Ee=a=>a&&a.x===+a.x&&a.y===+a.y,Lt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=[[]];return t.forEach(r=>{Ee(r)?s[s.length-1].push(r):s[s.length-1].length>0&&s.push([])}),Ee(t[0])&&s[s.length-1].push(t[0]),s[s.length-1].length<=0&&(s=s.slice(0,-1)),s},W=(a,t)=>{var s=Lt(a);t&&(s=[s.reduce((i,l)=>[...i,...l],[])]);var r=s.map(i=>i.reduce((l,c,o)=>"".concat(l).concat(o===0?"M":"L").concat(c.x,",").concat(c.y),"")).join("");return s.length===1?"".concat(r,"Z"):r},Tt=(a,t,s)=>{var r=W(a,s);return"".concat(r.slice(-1)==="Z"?r.slice(0,-1):r,"L").concat(W(t.reverse(),s).slice(1))},It=a=>{var{points:t,className:s,baseLinePoints:r,connectNulls:i}=a,l=Ot(a,St);if(!t||!t.length)return null;var c=F("recharts-polygon",s);if(r&&r.length){var o=l.stroke&&l.stroke!=="none",d=Tt(t,r,i);return n.createElement("g",{className:c},n.createElement("path",$({},_(l,!0),{fill:d.slice(-1)==="Z"?l.fill:"none",stroke:"none",d})),o?n.createElement("path",$({},_(l,!0),{fill:"none",d:W(t,i)})):null,o?n.createElement("path",$({},_(l,!0),{fill:"none",d:W(r,i)})):null)}var u=W(t,i);return n.createElement("path",$({},_(l,!0),{fill:u.slice(-1)==="Z"?l.fill:"none",className:c,d:u}))},De=(a,t,s)=>{switch(t){case"angleAxis":return ye(a,s);case"radiusAxis":return ea(a,s);default:throw new Error("Unexpected axis type: ".concat(t))}},Ae=(a,t,s)=>{switch(t){case"angleAxis":return ka(a,s);case"radiusAxis":return wa(a,s);default:throw new Error("Unexpected axis type: ".concat(t))}},q=g([De,Ze,Pa,Ae],Da),da=g([R,Sa,Oa,je],Ba),ma=g([R,De,Ze,q,Aa,Ae,Xe,da,je],Ca),Rt=g([R,De,q,Ae,Xe,da,je],La),Et=["children"];function I(){return I=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},I.apply(null,arguments)}function _e(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function B(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(s),!0).forEach(function(r){ie(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):_e(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function ie(a,t,s){return(t=_t(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function _t(a){var t=Mt(a,"string");return typeof t=="symbol"?t:t+""}function Mt(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function zt(a,t){if(a==null)return{};var s,r,i=Vt(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function Vt(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var $t=Math.PI/180,Me=1e-5,ua="angleAxis";function Ut(a){var t=Ta(),s=n.useMemo(()=>{var{children:l}=a,c=zt(a,Et);return c},[a]),r=z(l=>ye(l,s.id)),i=s===r;return n.useEffect(()=>(t(Ia(s)),()=>{t(Ra(s))}),[t,s]),i?a.children:null}var Kt=(a,t)=>{var{cx:s,cy:r,radius:i,orientation:l,tickSize:c}=t,o=c||8,d=pe(s,r,i,a.coordinate),u=pe(s,r,i+(l==="inner"?-1:1)*o,a.coordinate);return{x1:d.x,y1:d.y,x2:u.x,y2:u.y}},Wt=(a,t)=>{var s=Math.cos(-a.coordinate*$t);return s>Me?t==="outer"?"start":"end":s<-Me?t==="outer"?"end":"start":"middle"},Ft=a=>{var{cx:t,cy:s,radius:r,axisLineType:i,axisLine:l,ticks:c}=a;if(!l)return null;var o=B(B({},Ne(a)),{},{fill:"none"},_(l,!1));if(i==="circle")return n.createElement(_a,I({className:"recharts-polar-angle-axis-line"},o,{cx:t,cy:s,r}));var d=c.map(u=>pe(t,s,r,u.coordinate));return n.createElement(It,I({className:"recharts-polar-angle-axis-line"},o,{points:d}))},Gt=a=>{var{tick:t,tickProps:s,value:r}=a;return t?n.isValidElement(t)?n.cloneElement(t,s):typeof t=="function"?t(s):n.createElement(za,I({},s,{className:"recharts-polar-angle-axis-tick-value"}),r):null},Jt=a=>{var{tick:t,tickLine:s,tickFormatter:r,stroke:i,ticks:l}=a,c=Ne(a),o=_(t,!1),d=B(B({},c),{},{fill:"none"},_(s,!1)),u=l.map((h,p)=>{var N=Kt(h,a),v=Wt(h,a.orientation),k=B(B(B({},c),{},{textAnchor:v,stroke:"none",fill:i},o),{},{index:p,payload:h,x:N.x2,y:N.y2});return n.createElement(V,I({className:F("recharts-polar-angle-axis-tick",Ma(t)),key:"tick-".concat(h.coordinate)},Pe(a,h,p)),s&&n.createElement("line",I({className:"recharts-polar-angle-axis-tick-line"},d,N)),n.createElement(Gt,{tick:t,tickProps:k,value:r?r(h.value,p):h.value}))});return n.createElement(V,{className:"recharts-polar-angle-axis-ticks"},u)},qt=a=>{var{angleAxisId:t}=a,s=z(aa),r=z(o=>q(o,"angleAxis",t)),i=Ea(),l=z(o=>ma(o,"angleAxis",t,i));if(s==null||!l||!l.length)return null;var c=B(B(B({},a),{},{scale:r},s),{},{radius:s.outerRadius});return n.createElement(V,{className:F("recharts-polar-angle-axis",ua,c.className)},n.createElement(Ft,I({},c,{ticks:l})),n.createElement(Jt,I({},c,{ticks:l})))};class le extends n.PureComponent{render(){return this.props.radius<=0?null:n.createElement(Ut,{id:this.props.angleAxisId,scale:this.props.scale,type:this.props.type,dataKey:this.props.dataKey,unit:void 0,name:this.props.name,allowDuplicatedCategory:!1,allowDataOverflow:!1,reversed:this.props.reversed,includeHidden:!1,allowDecimals:this.props.allowDecimals,tickCount:this.props.tickCount,ticks:this.props.ticks,tick:this.props.tick,domain:this.props.domain},n.createElement(qt,this.props))}}ie(le,"displayName","PolarAngleAxis");ie(le,"axisType",ua);ie(le,"defaultProps",Va);function ge(){return ge=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},ge.apply(null,arguments)}function ze(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function ue(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(s),!0).forEach(function(r){Yt(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):ze(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function Yt(a,t,s){return(t=Ht(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function Ht(a){var t=Qt(a,"string");return typeof t=="symbol"?t:t+""}function Qt(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function ha(a){return typeof a=="string"?parseInt(a,10):a}function Zt(a,t){var s="".concat(t.cx||a.cx),r=Number(s),i="".concat(t.cy||a.cy),l=Number(i);return ue(ue(ue({},t),a),{},{cx:r,cy:l})}function pa(a){return n.createElement($a,ge({shapeType:"sector",propTransformer:Zt},a))}function Ve(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function ee(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Ve(Object(s),!0).forEach(function(r){Xt(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):Ve(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function Xt(a,t,s){return(t=es(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function es(a){var t=as(a,"string");return typeof t=="symbol"?t:t+""}function as(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var ts=(a,t)=>ea(a,t),ss=(a,t)=>q(a,"radiusAxis",t),ne=g([ts,ss],(a,t)=>{if(!(a==null||t==null))return ee(ee({},a),{},{scale:t})}),Ce=(a,t,s,r)=>Rt(a,"radiusAxis",t,r),rs=(a,t,s)=>ye(a,s),is=(a,t,s)=>q(a,"angleAxis",s),ce=g([rs,is],(a,t)=>{if(!(a==null||t==null))return ee(ee({},a),{},{scale:t})}),we=(a,t,s,r)=>ma(a,"angleAxis",s,r),ls=(a,t,s,r)=>r,ke=g([sa,ls],(a,t)=>{if(a.some(s=>s.type==="radialBar"&&t.dataKey===s.dataKey&&t.stackId===s.stackId))return t}),ga=g([R,ne,Ce,ce,we],(a,t,s,r,i)=>Ka(a,"radiusAxis")?X(t,s,!1):X(r,i,!1)),ns=g([ce,ne,R],(a,t,s)=>{var r=s==="radial"?a:t;if(!(r==null||r.scale==null))return Wa({numericAxis:r})}),cs=(a,t,s,r,i)=>i,os=(a,t,s,r,i)=>s,ds=(a,t,s,r,i)=>t,xa=(a,t,s,r,i)=>r.maxBarSize,ms=g([R,sa,os,ds],(a,t,s,r)=>t.filter(i=>a==="centric"?i.angleAxisId===s:i.radiusAxisId===r).filter(i=>i.hide===!1).filter(i=>i.type==="radialBar")),us=()=>{},hs=g([ms,Ya,us],Ha),ps=g([R,ra,ce,we,ne,Ce,xa],(a,t,s,r,i,l,c)=>{var o,d,u=Xa(c)?t:c;if(a==="centric"){var h,p;return(h=(p=X(s,r,!0))!==null&&p!==void 0?p:u)!==null&&h!==void 0?h:0}return(o=(d=X(i,l,!0))!==null&&d!==void 0?d:u)!==null&&o!==void 0?o:0}),gs=g([hs,ra,Ga,Ja,ps,ga,xa],qa),xs=g([gs,ke],(a,t)=>{if(!(a==null||t==null)){var s=a.find(r=>r.stackId===t.stackId&&t.dataKey!=null&&r.dataKeys.includes(t.dataKey));if(s!=null)return s.position}}),va=g([tt],a=>a.filter(t=>t.type==="radialBar").filter(st)),vs=g([va,ta,et],at),$e=g([vs,va,Qa],Za),fs=(a,t,s)=>{var r=R(a);return r==="centric"?$e(a,"radiusAxis",t):$e(a,"angleAxis",s)},bs=g([fs,ke],Fa),js=g([ce,we,ne,Ce,Ua,ke,ga,R,ns,aa,cs,xs,bs],(a,t,s,r,i,l,c,o,d,u,h,p,N)=>{var{chartData:v,dataStartIndex:k,dataEndIndex:E}=i;if(l==null||s==null||a==null||v==null||c==null||p==null||o!=="centric"&&o!=="radial"||r==null)return[];var{dataKey:S,minPointSize:P}=l,{cx:y,cy:C,startAngle:D,endAngle:O}=u,j=v.slice(k,E+1),A=o==="centric"?s:a,w=N?A.scale.domain():null;return Is({angleAxis:a,angleAxisTicks:t,bandSize:c,baseValue:d,cells:h,cx:y,cy:C,dataKey:S,dataStartIndex:k,displayedData:j,endAngle:O,layout:o,minPointSize:P,pos:p,radiusAxis:s,radiusAxisTicks:r,stackedData:N,stackedDomain:w,startAngle:D})}),ys=g([ta,(a,t)=>t],(a,t)=>{var{chartData:s,dataStartIndex:r,dataEndIndex:i}=a;if(s==null)return[];var l=s.slice(r,i+1);return l.length===0?[]:l.map(c=>({type:t,value:c.name,color:c.fill,payload:c}))}),Ns=["shape","activeShape","cornerRadius","id"],Ps=["onMouseEnter","onClick","onMouseLeave"],Ds=["value","background"];function ae(){return ae=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},ae.apply(null,arguments)}function Ue(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.push.apply(s,r)}return s}function b(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(s),!0).forEach(function(r){Se(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):Ue(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function Se(a,t,s){return(t=As(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function As(a){var t=Cs(a,"string");return typeof t=="symbol"?t:t+""}function Cs(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function xe(a,t){if(a==null)return{};var s,r,i=ws(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)s=l[r],t.indexOf(s)===-1&&{}.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function ws(a,t){if(a==null)return{};var s={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;s[r]=a[r]}return s}var ve=[];function fa(a){var{sectors:t,allOtherRadialBarProps:s,showLabels:r}=a,{shape:i,activeShape:l,cornerRadius:c,id:o}=s,d=xe(s,Ns),u=Ne(d),h=z(pt),{onMouseEnter:p,onClick:N,onMouseLeave:v}=s,k=xe(s,Ps),E=gt(p,s.dataKey),S=xt(v),P=vt(N,s.dataKey);return t==null?null:n.createElement(n.Fragment,null,t.map((y,C)=>{var D=l&&h===String(C),O=E(y,C),j=S(y,C),A=P(y,C),w=b(b(b(b({},u),{},{cornerRadius:ha(c)},y),Pe(k,y,C)),{},{onMouseEnter:O,onMouseLeave:j,onClick:A,key:"sector-".concat(C),className:"recharts-radial-bar-sector ".concat(y.className),forceCornerRadius:d.forceCornerRadius,cornerIsExternal:d.cornerIsExternal,isActive:D,option:D?l:i});return n.createElement(pa,w)}),r&&ft.renderCallByParent(s,t))}function ks(a){var{props:t,previousSectorsRef:s}=a,{data:r,isAnimationActive:i,animationBegin:l,animationDuration:c,animationEasing:o,onAnimationEnd:d,onAnimationStart:u}=t,h=ut(t,"recharts-radialbar-"),p=s.current,[N,v]=n.useState(!0),k=n.useCallback(()=>{typeof d=="function"&&d(),v(!1)},[d]),E=n.useCallback(()=>{typeof u=="function"&&u(),v(!0)},[u]);return n.createElement(ht,{begin:l,duration:c,isActive:i,easing:o,onAnimationStart:E,onAnimationEnd:k,key:h},S=>{var P=S===1?r:(r??ve).map((y,C)=>{var D=p&&p[C];if(D){var O=me(D.startAngle,y.startAngle),j=me(D.endAngle,y.endAngle);return b(b({},y),{},{startAngle:O(S),endAngle:j(S)})}var{endAngle:A,startAngle:w}=y,L=me(w,A);return b(b({},y),{},{endAngle:L(S)})});return S>0&&(s.current=P??null),n.createElement(V,null,n.createElement(fa,{sectors:P??ve,allOtherRadialBarProps:t,showLabels:!N}))})}function Ss(a){var{data:t=[],isAnimationActive:s}=a,r=n.useRef(null),i=r.current;return s&&t&&t.length&&(!i||i!==t)?n.createElement(ks,{props:a,previousSectorsRef:r}):n.createElement(fa,{sectors:t,allOtherRadialBarProps:a,showLabels:!0})}function Os(a){var t=z(s=>ys(s,a.legendType));return n.createElement(lt,{legendPayload:t??[]})}function Bs(a){var{dataKey:t,data:s,stroke:r,strokeWidth:i,name:l,hide:c,fill:o,tooltipType:d}=a;return{dataDefinedOnItem:s,positions:void 0,settings:{stroke:r,strokeWidth:i,fill:o,nameKey:void 0,dataKey:t,name:ot(l,t),hide:c,type:d,color:o,unit:""}}}class Ls extends n.PureComponent{renderBackground(t){if(t==null)return null;var{cornerRadius:s}=this.props,r=_(this.props.background,!1);return t.map((i,l)=>{var{value:c,background:o}=i,d=xe(i,Ds);if(!o)return null;var u=b(b(b(b(b({cornerRadius:ha(s)},d),{},{fill:"#eee"},o),r),Pe(this.props,i,l)),{},{index:l,key:"sector-".concat(l),className:F("recharts-radial-bar-background-sector",r==null?void 0:r.className),option:o,isActive:!1});return n.createElement(pa,u)})}render(){var{hide:t,data:s,className:r,background:i}=this.props;if(t)return null;var l=F("recharts-area",r);return n.createElement(V,{className:l},i&&n.createElement(V,{className:"recharts-radial-bar-background"},this.renderBackground(s)),n.createElement(V,{className:"recharts-radial-bar-sectors"},n.createElement(Ss,this.props)))}}function Ts(a){var t,s=nt(a.children,la),r={data:void 0,hide:!1,id:a.id,dataKey:a.dataKey,minPointSize:a.minPointSize,stackId:ia(a.stackId),maxBarSize:a.maxBarSize,barSize:a.barSize,type:"radialBar",angleAxisId:a.angleAxisId,radiusAxisId:a.radiusAxisId},i=(t=z(l=>js(l,a.radiusAxisId,a.angleAxisId,r,s)))!==null&&t!==void 0?t:ve;return n.createElement(n.Fragment,null,n.createElement(ct,{fn:Bs,args:b(b({},a),{},{data:i})}),n.createElement(Ls,ae({},a,{data:i})))}var Z={angleAxisId:0,radiusAxisId:0,minPointSize:0,hide:!1,legendType:"rect",data:[],isAnimationActive:!bt.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease",forceCornerRadius:!1,cornerIsExternal:!1};function Is(a){var{displayedData:t,stackedData:s,dataStartIndex:r,stackedDomain:i,dataKey:l,baseValue:c,layout:o,radiusAxis:d,radiusAxisTicks:u,bandSize:h,pos:p,angleAxis:N,minPointSize:v,cx:k,cy:E,angleAxisTicks:S,cells:P,startAngle:y,endAngle:C}=a;return(t??[]).map((D,O)=>{var j,A,w,L,K,Te;if(s?j=dt(s[r+O],i):(j=mt(D,l),Array.isArray(j)||(j=[c,j])),o==="radial"){A=Ie({axis:d,ticks:u,bandSize:h,offset:p.offset,entry:D,index:O}),K=N.scale(j[1]),L=N.scale(j[0]),w=(A??0)+p.size;var oe=K-L;if(Math.abs(v)>0&&Math.abs(oe)<Math.abs(v)){var ja=Re(oe||v)*(Math.abs(v)-Math.abs(oe));K+=ja}Te={background:{cx:k,cy:E,innerRadius:A,outerRadius:w,startAngle:y,endAngle:C}}}else{A=d.scale(j[0]),w=d.scale(j[1]),L=Ie({axis:N,ticks:S,bandSize:h,offset:p.offset,entry:D,index:O}),K=(L??0)+p.size;var de=w-A;if(Math.abs(v)>0&&Math.abs(de)<Math.abs(v)){var ya=Re(de||v)*(Math.abs(v)-Math.abs(de));w+=ya}}return b(b(b({},D),Te),{},{payload:D,value:s?j:j[1],cx:k,cy:E,innerRadius:A,outerRadius:w,startAngle:L,endAngle:K},P&&P[O]&&P[O].props)})}class Oe extends n.PureComponent{render(){return n.createElement(rt,{id:this.props.id,type:"radialBar"},t=>{var s,r,i;return n.createElement(n.Fragment,null,n.createElement(it,{type:"radialBar",id:t,data:void 0,dataKey:this.props.dataKey,hide:(s=this.props.hide)!==null&&s!==void 0?s:Z.hide,angleAxisId:(r=this.props.angleAxisId)!==null&&r!==void 0?r:Z.angleAxisId,radiusAxisId:(i=this.props.radiusAxisId)!==null&&i!==void 0?i:Z.radiusAxisId,stackId:ia(this.props.stackId),barSize:this.props.barSize,minPointSize:this.props.minPointSize,maxBarSize:this.props.maxBarSize}),n.createElement(Os,this.props),n.createElement(Ts,ae({},this.props,{id:t})))})}}Se(Oe,"displayName","RadialBar");Se(Oe,"defaultProps",Z);var Rs=["axis","item"],Es={layout:"radial",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},_s=n.forwardRef((a,t)=>{var s=jt(a,Es);return n.createElement(yt,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Rs,tooltipPayloadSearcher:Nt,categoricalChartProps:s,ref:t})});function te({data:a,lineColor:t="#2962FF"}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsx(na,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:e.jsx(ca,{type:"monotone",dataKey:"value",stroke:t,strokeWidth:2,dot:!1,activeDot:!1,isAnimationActive:!1})})})}try{te.displayName="DMinimalLineChart",te.__docgenInfo={description:"",displayName:"DMinimalLineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ time: string; value: number; }[]"}},lineColor:{defaultValue:{value:"#2962FF"},description:"",name:"lineColor",required:!1,type:{name:"string | undefined"}}}}}catch{}function G({data:a,lineConfigs:t}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(na,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(oa,{strokeDasharray:"3 3",horizontal:!0,vertical:!1}),t.map((s,r)=>e.jsx(ca,{type:"monotone",dataKey:s.dataKey,stroke:s.color,strokeWidth:2,dot:!1,activeDot:!1,isAnimationActive:!1},r))]})})}try{G.displayName="DMultiLineChart",G.__docgenInfo={description:"",displayName:"DMultiLineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown[]"}},lineConfigs:{defaultValue:null,description:"",name:"lineConfigs",required:!0,type:{name:"{ dataKey: string; color: string; }[]"}}}}}catch{}function se({data:a}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsx(Pt,{margin:{top:0,right:0,left:0,bottom:0},children:e.jsx(Dt,{data:a,cx:"50%",cy:"50%",outerRadius:80,fill:"#8884d8",dataKey:"value",nameKey:"name",paddingAngle:5,cornerRadius:5,labelLine:!1,label:!1,children:a.map((t,s)=>e.jsx(la,{fill:t.color},`cell-${s}`))})})})}try{se.displayName="DPieChart",se.__docgenInfo={description:"",displayName:"DPieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ name: string; value: number; color: string; }[]"}}}}}catch{}function fe({data:a,barColor:t="#0d6efd"}){return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(At,{data:a,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(oa,{strokeDasharray:"3 3"}),e.jsx(Ct,{dataKey:"name"}),e.jsx(wt,{dataKey:"value",fill:t,radius:[5,5,0,0]})]})})}try{fe.displayName="DBarChart",fe.__docgenInfo={description:"",displayName:"DBarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ name: string; value: number; }[]"}},barColor:{defaultValue:{value:"#0d6efd"},description:"",name:"barColor",required:!1,type:{name:"string | undefined"}}}}}catch{}function be({value:a,color:t="#0d6efd"}){const s=[{name:"Progress",value:a,fill:t}];return e.jsx(J,{width:"100%",height:"100%",children:e.jsxs(_s,{innerRadius:"70%",outerRadius:"90%",data:s,startAngle:90,endAngle:-270,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(le,{type:"number",domain:[0,100],angleAxisId:0,tick:!1}),e.jsx(Oe,{background:!0,dataKey:"value"}),e.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",className:"h5",fill:"#343a40",children:`${a}%`})]})})}try{be.displayName="DRadialBarChart",be.__docgenInfo={description:"",displayName:"DRadialBarChart",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#0d6efd"},description:"",name:"color",required:!1,type:{name:"string | undefined"}}}}}catch{}function Ms(a){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .sbdocs-content {
            max-width: unset;
          }
        `}),e.jsx(Na,{...a})]})}const ir={title:"Patterns/Dashboard View",component:x,parameters:{layout:"fullscreen",docs:{container:Ms,description:{component:"A dashboard-like view demonstrating the use of various components and Bootstrap grid utilities for a clean and modern layout."}}},tags:["autodocs"]},re=[{id:0,title:"Total Sales",value:"$12,000",icon:"DollarSign",color:"text-primary",percentage:5.2},{id:0,title:"Breakdown",value:"$12,000",icon:"DollarSign",color:"text-primary",percentage:5.2},{id:1,title:"Branding",value:"$19,500",icon:"UserRoundCheck",color:"text-primary",percentage:4.2},{id:1,title:"Marketing",value:"$3,500",icon:"DiamondPercent",color:"text-danger",percentage:2.2}],zs=()=>{const a=[];let t=100,s=120;for(let r=0;r<30;r++)a.push({time:`2023-01-${r+1<10?`0${r+1}`:r+1}`,value1:t+Math.random()*20-10,value2:s+Math.random()*15-7}),t=a[r].value1,s=a[r].value2;return a},he=()=>{const a=[];let t=Math.random()*50+50;for(let s=0;s<10;s++)a.push({time:`2023-01-${s+1<10?`0${s+1}`:s+1}`,value:t+Math.random()*10-5}),t=a[s].value;return a},Be=zs(),Le=[{dataKey:"value1",color:"#0d6efd"},{dataKey:"value2",color:"#198754"}],ba=[{id:1,title:"Project Alpha",description:"Product Launch - My Projects",chartData:he(),chartColor:"#0d6efd"},{id:2,title:"Project Beta",description:"Marketing Campaign - New Initiatives",chartData:he(),chartColor:"#198754"},{id:3,title:"Project Gamma",description:"Website Redesign - Internal Tools",chartData:he(),chartColor:"#ffc107"}],Vs=[{id:1,name:"Team Alpha",color:"#0d6efd",description:"Product Launch - My Projects"},{id:2,name:"Team Beta",color:"#198754",description:"Marketing Campaign - New Initiatives"},{id:3,name:"Team Gamma",color:"#ffc107",description:"Website Redesign - Internal Tools"}],Y={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx(U,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(x,{className:"grid gap-0 mb-4 p-0",children:re.map(({id:a,title:t,value:s,percentage:r,icon:i,color:l},c)=>e.jsxs("div",{className:`g-col-12 g-col-md-6 g-col-lg-3 p-8 ${re.length-1!==c?"border-end":""}`,children:[e.jsxs("div",{className:"d-flex gap-2 align-items-center mb-2",children:[e.jsx(f,{className:"text-gray-400",icon:i,size:"1rem"}),e.jsx("span",{className:"text-muted",children:t})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{children:e.jsx("div",{className:"fs-4 fw-bold",children:s})}),e.jsxs("p",{className:`${l} mb-0`,children:[r,"%"]})]})]},a))}),e.jsxs(m,{className:"mb-4",gap:4,children:[e.jsx(m.Pane,{cols:"12",colsLg:8,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-8",children:[e.jsxs("div",{className:"mb-0 d-flex align-items-start gap-2 w-100",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),e.jsxs("div",{children:[e.jsx("h5",{children:"Sales Performance"}),e.jsx("small",{className:"text-muted",children:"Last 30 days"})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsxs("select",{className:"form-select form-select-sm",style:{minWidth:"150px"},children:[e.jsx("option",{children:"Today"}),e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"This Year"})]}),e.jsx(U,{style:{whiteSpace:"nowrap"},size:"sm",variant:"outline",text:"View Report"})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(G,{data:Be,lineConfigs:Le})})]})}),e.jsx(m.Pane,{cols:"12",colsLg:4,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Task Progress"]}),e.jsx("div",{className:"list-group list-group-flush",children:ba.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.title}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",style:{width:"100px",height:"30px"},children:e.jsx(te,{data:a.chartData,lineColor:a.chartColor,height:30})})]},a.id))})]})})]}),e.jsxs(m,{gap:4,children:[e.jsx(m.Pane,{cols:"12",colsLg:6,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:"12",colsLg:6,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"User Retention Cohorts"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h4",{className:"display-3 line-height-1",children:"40%"}),e.jsx(f,{icon:"TrendingUp",hasCircle:!0,size:"1rem",color:"success"})]}),e.jsx("p",{children:"After 30 days"}),e.jsx("small",{className:"text-muted",children:"Oct - Nov"})]}),e.jsx("div",{className:"g-col-12 g-col-lg-6",style:{height:"100px"},children:e.jsx("div",{style:{height:"200px"},children:e.jsx(se,{data:[{name:"Category A",value:400,color:"#e35d6a"},{name:"Category B",value:300,color:"#a370f7"},{name:"Category C",value:300,color:"#3dd5f3"},{name:"Category D",value:200,color:"#8c68cd"}]})})})]})]})})]})]})},H={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx(U,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(m,{gap:4,className:"mb-4",children:re.map(({id:a,percentage:t,value:s})=>e.jsxs(x,{className:"g-col-12 g-col-md-6 g-col-lg-3 p-8 text-center",children:[e.jsx("div",{style:{height:100},children:e.jsx(be,{value:t,color:"var(--bs-primary-500)"})}),e.jsx("div",{className:"fs-4 fw-bold",children:s}),e.jsx("small",{className:"text-muted m-0",children:"Last 30 days"})]},a))}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:"8",children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-8",children:[e.jsxs("div",{className:"mb-0 d-flex align-items-start gap-2 w-100",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),e.jsxs("div",{children:[e.jsx("h5",{children:"Sales Performance"}),e.jsx("small",{className:"text-muted",children:"Last 30 days"})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsxs("select",{className:"form-select form-select-sm",style:{minWidth:"150px"},children:[e.jsx("option",{children:"Today"}),e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"This Year"})]}),e.jsx(U,{style:{whiteSpace:"nowrap"},size:"sm",variant:"outline",text:"View Report"})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(G,{data:Be,lineConfigs:Le})})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"Users",size:".75rem"}),"Task Progress"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsx("div",{className:"list-group list-group-flush",children:ba.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.title}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",style:{width:"100px",height:"30px"},children:e.jsx(te,{data:a.chartData,lineColor:a.chartColor,height:30})})]},a.id))})]})})]}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:"4",children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsx("div",{className:"d-flex",children:e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"Users",size:".75rem"}),"Teams"]})}),e.jsx("div",{className:"list-group list-group-flush",children:Vs.map(a=>e.jsxs("div",{className:"list-group-item d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.name}),e.jsx("small",{className:"text-muted",children:a.description})]}),e.jsx("div",{className:"ms-auto",children:e.jsxs("div",{className:"d-avatar-group",children:[e.jsx(M,{name:"AB",image:"https://www.sarahdeanephotography.co.uk/wp-content/uploads/2021/01/MENS-GROOMING-FOR-PHOTO-SHOOT-IN-STUDIO-FOR-ONLINE-PROFILES-AND-PORTRAITURE-IN-NEWCASTLE-7.jpg",size:"sm",useNameAsInitials:!0}),e.jsx(M,{name:"AB",image:"https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2A.jpg",size:"sm",useNameAsInitials:!0}),e.jsx(M,{name:"AB",image:"https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png",size:"sm",useNameAsInitials:!0}),e.jsx(M,{name:"AB",image:"https://us.images.westend61.de/0001485597pw/medium-shot-portrait-of-young-beautiful-woman-wearing-a-beige-dress-posing-in-a-field-full-of-flowers-and-surrounded-by-trees-she-is-with-her-hand-in-her-face-ADSF17772.jpg",size:"sm",useNameAsInitials:!0})]})})]},a.id))})]})}),e.jsx(m.Pane,{cols:"4",children:e.jsxs(x,{className:"p-8 g-col-12 g-col-lg-4 text-white overflow-hidden",style:{background:"#21457f"},children:[e.jsx("small",{className:"text-uppercase",children:"Newspapper"}),e.jsx("h4",{className:"mb-4",children:"Gets news on your phone"}),e.jsx("p",{className:"",children:"Priceless and optimal sign"}),e.jsx(U,{text:"Subscribe",color:"light"}),e.jsx("div",{children:e.jsx("img",{alt:"placeholder",style:{marginTop:"-3rem",marginBottom:"-2rem",marginRight:"-2rem",float:"right",width:"100%",display:"block"},src:"https://img.freepik.com/free-vector/hand-drawn-w-colours-illustration_23-2149852395.jpg?t=st=1761342724~exp=1761346324~hmac=7ae6cc17547356bb03c37c5ff6039be6514e0c8feb50c975486113aa4b40e9ef&w=2000"})})]})})]})]})},$s=[{name:"Alpha",value:75},{name:"Beta",value:40},{name:"Gamma",value:90},{name:"Delta",value:60},{name:"Gamma",value:90},{name:"Delta",value:60}],Q={decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-8",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"mb-0 fw-normal h4",children:["Good morning,"," ",e.jsx("strong",{children:"John"})]}),e.jsx("p",{className:"text-muted mb-0",children:"Today is May 12, 2023"})]}),e.jsx(U,{text:"Refresh Data",iconStart:"RotateCw",variant:"link"})]}),e.jsx(m,{gap:4,className:"mb-4",children:re.map(({id:a,title:t,value:s,percentage:r,icon:i,color:l})=>e.jsxs(m.Pane,{cols:12,colsLg:3,colsMd:6,className:"p-8 bg-primary-50 rounded-3",children:[e.jsxs("div",{className:"d-flex gap-2 align-items-center mb-2",children:[e.jsx(f,{hasCircle:!0,color:"primary",icon:i,size:"1rem"}),e.jsx("span",{className:"text-muted",children:t})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"fs-4 fw-bold",children:s}),e.jsxs("p",{className:`${l} mb-0`,children:[r,"%"]})]})]},a))}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:12,colsLg:8,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex justify-content-between gap-8 align-items-center mb-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-muted mb-0",children:"Total portfolio"}),e.jsx("h3",{className:"display-6 mb-0",children:"$123,456"}),e.jsxs("p",{className:"text-muted mb-0",children:["You gained",e.jsx("strong",{children:"$40.000 last 6 months"}),". Thats the best results in last 2 years"]})]}),e.jsxs("ul",{className:"nav nav-pills nav-fill gap-1 p-1 small bg-primary-50 rounded-5",id:"pillNav2",role:"tablist",style:{"--bs-nav-link-color":"var(--bs-gray-500)","--bs-nav-pills-link-active-color":"#fff","--bs-nav-pills-link-active-bg":"var(--bs-primary)"},children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active rounded-5",id:"home-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"true",children:"24h"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"profile-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"7d"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"6m"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"1y"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link rounded-5",id:"contact-tab2","data-bs-toggle":"tab",type:"button",role:"tab","aria-selected":"false",children:"Max"})})]})]}),e.jsx("div",{style:{height:"200px"},children:e.jsx(G,{data:Be,lineConfigs:Le})}),e.jsx("div",{className:"d-flex justify-content-end align-items-center mt-8",children:e.jsx(kt,{color:"success",text:"Increase 10%",iconStart:"ArrowUp"})})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(x,{className:"mb-8 p-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"BarChart3",size:".75rem"}),"Return on investment"]}),e.jsx("div",{className:"text-muted ms-auto",children:"Last 6m."})]}),e.jsx("h3",{className:"display-6 mb-0",children:"$123,456"}),e.jsx("p",{className:"text-muted mb-8",children:"Oct 2024 - Apr 2025"}),e.jsx("div",{style:{height:"200px"},children:e.jsx(fe,{data:$s,barColor:"#0d6efd"})})]})})]}),e.jsxs(m,{gap:4,className:"mb-4",children:[e.jsx(m.Pane,{cols:12,colsLg:6,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"Top Projects Performance"]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Ticket"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"232"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Project Alpha"}),e.jsx("td",{className:"align-middle",children:e.jsx(T,{currentValue:75,hideCurrentValue:!0,height:5})}),e.jsx("td",{children:"222"})]})]})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:6,children:e.jsxs(x,{className:"mb-8 h-100",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center gap-2",children:[e.jsx(f,{hasCircle:!0,icon:"TrendingUp",size:".75rem"}),"User Retention Cohorts"]}),e.jsx("div",{className:"text-muted ms-auto",children:"1 hour."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("h4",{className:"display-3 line-height-1",children:"40%"}),e.jsx(f,{icon:"TrendingUp",hasCircle:!0,size:"1rem",color:"success"})]}),e.jsx("p",{children:"After 30 days"}),e.jsx("small",{className:"text-muted",children:"Oct - Nov"})]}),e.jsx("div",{className:"g-col-12 g-col-lg-6",style:{height:"100px"},children:e.jsx("div",{style:{height:"200px"},children:e.jsx(se,{data:[{name:"Category A",value:400,color:"#e35d6a"},{name:"Category B",value:300,color:"#a370f7"},{name:"Category C",value:300,color:"#3dd5f3"},{name:"Category D",value:200,color:"#8c68cd"}]})})})]})]})})]}),e.jsxs(m,{gap:4,children:[e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(x,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Quick Stats"}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{children:"Revenue"}),e.jsx("span",{className:"fw-bold",children:"+15%"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{children:"New Customers"}),e.jsx("span",{className:"fw-bold",children:"+250"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("span",{children:"Support Tickets"}),e.jsx("span",{className:"fw-bold",children:"5 Open"})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(x,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Recent Notifications"}),e.jsxs("ul",{className:"list-unstyled mb-0",children:[e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(f,{hasCircle:!0,color:"info",icon:"Bell",size:"1rem",className:"me-2"}),e.jsx("span",{children:"New feature deployed!"}),e.jsx("small",{className:"ms-auto text-muted",children:"5 min ago"})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(f,{hasCircle:!0,color:"info",size:"1rem",icon:"AlertTriangle",className:" me-2"}),e.jsx("span",{children:"Server overload warning."}),e.jsx("small",{className:"ms-auto text-muted",children:"1 hour ago"})]}),e.jsxs("li",{className:"d-flex align-items-center",children:[e.jsx(f,{hasCircle:!0,size:"1rem",color:"info",icon:"CircleCheck",className:"me-2"}),e.jsx("span",{children:"Report generated successfully."}),e.jsx("small",{className:"ms-auto text-muted",children:"Yesterday"})]})]})]})}),e.jsx(m.Pane,{cols:12,colsLg:4,children:e.jsxs(x,{className:"h-100",children:[e.jsx("h5",{className:"mb-3",children:"Team Activity"}),e.jsxs("ul",{className:"list-unstyled mb-0",children:[e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(M,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(M,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]}),e.jsxs("li",{className:"d-flex align-items-center mb-2",children:[e.jsx(M,{image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",name:"JS",size:"sm",className:"me-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:"John Doe completed task #123."}),e.jsx("small",{className:"text-muted",children:"2 hours ago"})]})]})]})]})})]})]})};var Ke,We,Fe;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
                    <DMinimalLineChart data={task.chartData} lineColor={task.chartColor} height={30} />
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
}`,...(Fe=(We=Y.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Ge,Je,qe;H.parameters={...H.parameters,docs:{...(Ge=H.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
                    <DMinimalLineChart data={task.chartData} lineColor={task.chartColor} height={30} />
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
}`,...(qe=(Je=H.parameters)==null?void 0:Je.docs)==null?void 0:qe.source}}};var Ye,He,Qe;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
            }}>
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
}`,...(Qe=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};const lr=["Dashboard","Dashboard2","Dashboard3"];export{Y as Dashboard,H as Dashboard2,Q as Dashboard3,lr as __namedExportsOrder,ir as default};
