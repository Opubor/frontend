import{r as i,j as t,b as c,f as u}from"./index.c55d850e.js";import{B as d}from"./ButtonPreloader.a83113e0.js";import{c as f}from"./react-confirm-alert.faa211aa.js";function h({path:o,id:s,record:a,children:l}){const[r,e]=i.exports.useState(!1);return t("button",{className:"bg-red-500 px-2 flex justify-center items-center rounded-full text-sm text-white p-2 hover:bg-red-900",onClick:()=>{e(!0),f({title:"Are you sure you want to delete?",buttons:[{label:"Yes",onClick:()=>c.delete(`/${o}/${s}`).then(n=>{e(!1),a(),u.success(n.data)})},{label:"No",onClick:()=>e(!1)}]})},children:r?t(d,{}):l})}export{h as D};
