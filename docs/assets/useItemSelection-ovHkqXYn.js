import{r as s}from"./index-CBqU2yxZ.js";function I({getItemIdentifier:l,previousSelected:r=[]}={}){const t=s.useCallback(e=>String(l?l(e):e.id),[l]),[c,o]=s.useState(()=>new Map(r.map(e=>[t(e),e]))),u=s.useMemo(()=>Array.from(c.values()),[c]),p=s.useCallback(e=>{o(new Map(e.map(a=>[t(a),a])))},[t]),d=s.useCallback(e=>c.has(t(e)),[t,c]),i=s.useCallback(e=>{const a=t(e);o(M=>{const n=new Map(M);return n.has(a)?n.delete(a):n.set(a,e),n})},[t]),m=s.useCallback(()=>o(new Map),[]);return{selectedItems:u,isSelectedItem:d,toggleSelectedItem:i,resetSelectedItems:m,setSelectedItems:p}}export{I as u};