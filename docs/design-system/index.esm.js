export{i as initialize}from"./p-e61b7b4c.js";import{c as t}from"./p-e9e8f915.js";export{s as setIconSettings}from"./p-e9e8f915.js";import"./p-c721c866.js";const r={library:{},engine:void 0,init(t,r){this.library=t,r&&(this.engine=new r.Liquid({strictFilters:!0,strictVariables:!0}))},async parseLiquidAsync(t){try{return this.engine.parseAndRender(t,this.library)}catch(t){return t.message}},parseLiquid(t){try{return this.engine.parseAndRenderSync(t,this.library)}catch(t){return t.message}},parse(t){return this.engine?this.parseLiquid(t):t},async parseAsync(t){return this.engine?this.parseLiquidAsync(t):t}};function e(r,s){return t(r,s).format()}function n(t,r){const s=new AbortController;return{perform:async()=>{const{data:e}=await t.request(Object.assign(Object.assign({},r),{signal:s.signal}));return e},abort:()=>s.abort()}}class o{constructor(){this.promise=new Promise(((t,r)=>{this.resolve=t,this.reject=r}))}}function c(t){const r=new o,s=setTimeout((()=>r.resolve()),1e3);return{abort:()=>{r.reject(new Error("AbortError")),clearTimeout(s)},perform:async()=>(await r.promise,t)}}export{o as Deferred,n as createControlledRequest,c as createMockedRequest,e as formatCurrency,r as liquidParser}