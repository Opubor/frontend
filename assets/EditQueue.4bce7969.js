import{u as b,r as n,b as o,i as v,j as r,a as i,f as m}from"./index.c55d850e.js";import{R as P}from"./ReceptionistSidebar.095af997.js";import{B}from"./ButtonPreloader.a83113e0.js";import"./react-confirm-alert.faa211aa.js";import{B as E}from"./Button.cc2bd9c0.js";import{S as L}from"./Select.8fb5bdaa.js";import{F as j}from"./FormLayout.9b4e0445.js";import"./index.esm.b63de3f8.js";import"./index.esm.59588f6b.js";import"./index.esm.1e62d156.js";import"./Forbidden.6616ff59.js";function A(){const c=b(),[d,l]=n.exports.useState([]),[p,h]=n.exports.useState([]),[f,g]=n.exports.useState(!1),[a,s]=n.exports.useState({name:""});function S(e){s(t=>({...t,[e.target.name]:e.target.value}))}n.exports.useEffect(()=>{o.get("/patient").then(e=>{l(e.data)}),o.get(`/queue/?edit=${u}`).then(e=>{var t;s(e.data),h((t=e.data)==null?void 0:t.name)})},[]);let x=v().search;const u=new URLSearchParams(x).get("edit");return r(P,{children:r(j,{formName:"Edit Queue",children:i("form",{onSubmit:e=>{e.preventDefault(),g(!0),o.put(`/queue/${u}`,{name:a==null?void 0:a.name}).then(t=>{c("/receptionist/queue",{replace:!0}),m.success(t.data)}).catch(t=>{m.error(t.response.data)})},children:[" ",i(L,{label:"Patient",name:"name",type:"text",onChange:S,children:[r("option",{value:a==null?void 0:a.name,children:p}),d.map((e,t)=>r("option",{value:e==null?void 0:e.name,children:e==null?void 0:e.name},t))]}),r(E,{children:f?r(B,{}):"Edit Queue"})]})})})}export{A as default};
