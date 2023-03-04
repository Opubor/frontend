import{r as d,l as C,u as m,i as y,b as g,j as n,a as i,f as h}from"./index.c55d850e.js";import{B as A}from"./ButtonPreloader.a83113e0.js";import"./react-confirm-alert.faa211aa.js";import{B as O}from"./Button.cc2bd9c0.js";import{I as o}from"./Input.fda17e4a.js";import{S as r}from"./Select.8fb5bdaa.js";import{F as S}from"./FormLayout.9b4e0445.js";function G({url:c}){const{user:s}=d.exports.useContext(C),b=m(),[v,B]=d.exports.useState(!1),[e,p]=d.exports.useState({staffname:`${s==null?void 0:s.name}`,name:"",email:"",address:"",phone:"",gender:"",age:"",bloodgroup:"",bags:"",lastdonationdate:""});function l(t){p(a=>({...a,[t.target.name]:t.target.value}))}let x=y().search;const u=new URLSearchParams(x).get("edit");return d.exports.useEffect(()=>{g.get(`/blooddonor/?edit=${u}`).then(t=>{p(t.data)})},[]),n(S,{formName:"EDIT BLOOD DONOR",children:i("form",{onSubmit:t=>{t.preventDefault(),B(!0),g.put(`/blooddonor/${u}`,{name:e==null?void 0:e.name,email:e==null?void 0:e.email,address:e==null?void 0:e.address,phone:e==null?void 0:e.phone,gender:e==null?void 0:e.gender,age:e==null?void 0:e.age,bloodgroup:e==null?void 0:e.bloodgroup,bags:e==null?void 0:e.bags,lastdonationdate:e==null?void 0:e.lastdonationdate,staffname:e==null?void 0:e.staffname}).then(a=>{b(`${c}`,{replace:!0}),h.success(a.data)}).catch(a=>h.error(a.response.data))},children:[n(o,{label:"Name",type:"text",name:"name",value:e==null?void 0:e.name,onChange:l}),n(o,{label:"Email",type:"email",name:"email",value:e==null?void 0:e.email,onChange:l}),n(o,{label:"Address",type:"text",name:"address",value:e==null?void 0:e.address,onChange:l}),n(o,{label:"Phone",type:"text",name:"phone",value:e==null?void 0:e.phone,onChange:l}),i(r,{label:"Gender",name:"gender",type:"text",onChange:l,children:[n("option",{value:e==null?void 0:e.gender,children:e==null?void 0:e.gender}),n("option",{value:"Male",children:"Male"}),n("option",{value:"Female",children:"Female"})]}),n(o,{label:"Age",type:"text",name:"age",value:e==null?void 0:e.age,onChange:l}),i(r,{label:"Blood Group",type:"text",name:"bloodgroup",onChange:l,children:[n("option",{value:e==null?void 0:e.bloodgroup,children:e==null?void 0:e.bloodgroup}),n("option",{value:"A+",children:"A+"}),n("option",{value:"A-",children:"A-"}),n("option",{value:"B+",children:"B+"}),n("option",{value:"B-",children:"B-"}),n("option",{value:"O+",children:"O+"}),n("option",{value:"O-",children:"O-"}),n("option",{value:"AB+",children:"AB+"}),n("option",{value:"AB-",children:"AB-"})]}),n(o,{label:"No. Of Bags",type:"text",name:"bags",value:e==null?void 0:e.bags,onChange:l}),n(o,{label:"Last Donation Date",type:"date",name:"lastdonationdate",value:e==null?void 0:e.lastdonationdate,onChange:l}),n(O,{children:v?n(A,{}):"Edit Blood Donor"})]})})}export{G as E};
