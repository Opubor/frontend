import{r as o,l as O,b as v,j as t,a,F as T}from"./index.c55d850e.js";import{D as S}from"./DeleteButton.3f04aad9.js";import{E as y}from"./EditButton.a9b543b8.js";import{S as A}from"./SearchInput.d601d567.js";import{f as C}from"./index.esm.b63de3f8.js";import"./react-confirm-alert.faa211aa.js";import{O as E,a as M}from"./OptionsTh.51a89229.js";import{T as N,a as j,b as h,c as R,d as l}from"./Thead.0469f9f5.js";import{I as $}from"./IndexNo.59fc62c3.js";import{V as i}from"./ViewButton.055de0bb.js";import{T as B}from"./TotalNo.2473c2cd.js";import{R as I}from"./ReactPagination.58cc128c.js";import{R as u}from"./index.esm.069163f1.js";import{P as V}from"./PharmacistSidebar.272b0d65.js";import"./ButtonPreloader.a83113e0.js";import"./index.esm.59588f6b.js";import"./Forbidden.6616ff59.js";function ae(){const[d,g]=o.exports.useState([]),[f,c]=o.exports.useState(1),{user:s}=o.exports.useContext(O);o.exports.useEffect(()=>{v.get("/prescription").then(e=>{g(e.data)})},[]);const r=e=>{v.get(`/prescription?q=${e}`).then(n=>{g(n.data),c(1)})},m=10,x=f*m,D=x-m,F=d.slice(D,x),_=Math.ceil(d.length/m),w=e=>{c(e.selected+1)};return t(V,{children:a("div",{className:"p-8 bg-gray-100",children:[a("div",{className:"flex justify-between items-center",children:[t(A,{onSearch:r}),a("div",{className:"items-center flex flex-col lg:flex-row",children:[t(B,{totalnumber:d==null?void 0:d.length}),t(I,{pageCount:_,handlePageClick:w})]})]}),a(N,{children:[a(j,{children:[t($,{children:"#"}),t(h,{children:"Patient"}),t(h,{children:"Date"}),t(h,{children:"Drugs Amount"}),t(h,{children:"Doctor"}),t(E,{children:"Options"})]}),F.map((e,n)=>{var P,b;return a(R,{children:[t(l,{children:n+1*(f*m-9)}),t(l,{children:(P=e==null?void 0:e.patients[0])==null?void 0:P.name}),t(l,{children:e==null?void 0:e.date}),a(l,{children:["\u20A6",e==null?void 0:e.drugamount]}),t(l,{children:(b=e==null?void 0:e.doctor[0])==null?void 0:b.name}),a(M,{children:[t(i,{style:"bg-green-600 hover:bg-green-900",viewFunction:`/pharmacist/add_amount?edit=${e==null?void 0:e._id}`,children:e!=null&&e.drugamount?"Update Amount":a(T,{children:[t(u,{}),"Add Amount"]})}),a(i,{style:"bg-indigo-800 hover:bg-indigo-400",viewFunction:`/pharmacist/view_medications?edit=${e==null?void 0:e._id}`,children:[t(u,{}),"View Medication"]}),(s==null?void 0:s._id)===(e==null?void 0:e.doctorid)&&a(T,{children:[a(y,{editFunction:`/doctor/edit_prescription?edit=${e==null?void 0:e._id}`,children:["Edit",t(u,{})]}),a(S,{deleteFunction:()=>{handleDelete(e==null?void 0:e._id)},children:["Delete",t(C,{})]})]})]})]},n)})]})]})})}export{ae as default};
