import{g as C}from"./_commonjsHelpers-BosuxZz1.js";import{aq as j,ar as O,as as A}from"./index-D83KeUA8.js";var L=j,M=function(){return L.Date.now()},B=M,F=/\s/;function R(e){for(var r=e.length;r--&&F.test(e.charAt(r)););return r}var D=R,q=D,H=/^\s+/;function P(e){return e&&e.slice(0,q(e)+1).replace(H,"")}var U=P,X=U,y=O,w=A,_=NaN,z=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;function Q(e){if(typeof e=="number")return e;if(w(e))return _;if(y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=X(e);var i=G.test(e);return i||J.test(e)?K(e.slice(2),i?2:8):z.test(e)?_:+e}var V=Q,Y=O,T=B,$=V,Z="Expected a function",ee=Math.max,ne=Math.min;function re(e,r,i){var o,u,l,s,t,f,d=0,I=!1,m=!1,b=!0;if(typeof e!="function")throw new TypeError(Z);r=$(r)||0,Y(i)&&(I=!!i.leading,m="maxWait"in i,l=m?ee($(i.maxWait)||0,r):l,b="trailing"in i?!!i.trailing:b);function g(n){var a=o,c=u;return o=u=void 0,d=n,s=e.apply(c,a),s}function S(n){return d=n,t=setTimeout(v,r),I?g(n):s}function k(n){var a=n-f,c=n-d,E=r-a;return m?ne(E,l-c):E}function h(n){var a=n-f,c=n-d;return f===void 0||a>=r||a<0||m&&c>=l}function v(){var n=T();if(h(n))return p(n);t=setTimeout(v,k(n))}function p(n){return t=void 0,b&&o?g(n):(o=u=void 0,s)}function N(){t!==void 0&&clearTimeout(t),d=0,o=f=u=t=void 0}function W(){return t===void 0?s:p(T())}function x(){var n=T(),a=h(n);if(o=arguments,u=this,f=n,a){if(t===void 0)return S(f);if(m)return clearTimeout(t),t=setTimeout(v,r),g(f)}return t===void 0&&(t=setTimeout(v,r)),s}return x.cancel=N,x.flush=W,x}var te=re;const fe=C(te);export{te as a,fe as d,V as t};
