import{r as n,l as f,b as r,j as e,F as A,a}from"./index.c55d850e.js";import"./react-confirm-alert.faa211aa.js";import{S as T}from"./SearchInput.d601d567.js";import{T as j,a as O,b as d,c as s,d as t}from"./Thead.0469f9f5.js";function E(){n.exports.useContext(f);const[o,c]=n.exports.useState(""),[h,l]=n.exports.useState(""),[v,g]=n.exports.useState(""),[p,b]=n.exports.useState(""),[x,u]=n.exports.useState(""),[S,B]=n.exports.useState(""),[N,m]=n.exports.useState(""),[P,_]=n.exports.useState("");return n.exports.useEffect(()=>{r.get("/a_positive").then(i=>{c(i.data)}),r.get("/a_negative").then(i=>{l(i.data)}),r.get("/b_positive").then(i=>{g(i.data)}),r.get("/b_negative").then(i=>{b(i.data)}),r.get("/o_positive").then(i=>{u(i.data)}),r.get("/o_negative").then(i=>{B(i.data)}),r.get("/ab_positive").then(i=>{m(i.data)}),r.get("/ab_negative").then(i=>{_(i.data)})},[]),e(A,{children:a("div",{children:[e("div",{children:e(T,{})}),a(j,{children:[a(O,{children:[e(d,{children:"#"}),e(d,{children:"Blood Group"}),e(d,{children:"No. Of Bags"})]}),a(s,{children:[e(t,{children:"1"}),e(t,{children:"A+"}),e(t,{children:o})]}),a(s,{children:[e(t,{children:"2"}),e(t,{children:"A-"}),e(t,{children:h})]}),a(s,{children:[e(t,{children:"3"}),e(t,{children:"B+"}),e(t,{children:v})]}),a(s,{children:[e(t,{children:"4"}),e(t,{children:"B-"}),e(t,{children:p})]}),a(s,{children:[e(t,{children:"5"}),e(t,{children:"O+"}),e(t,{children:x})]}),a(s,{children:[e(t,{children:"6"}),e(t,{children:"O-"}),e(t,{children:S})]}),a(s,{children:[e(t,{children:"7"}),e(t,{children:"AB+"}),e(t,{children:N})]}),a(s,{children:[e(t,{children:"8"}),e(t,{children:"AB-"}),e(t,{children:P})]})]})]})})}export{E as B};
