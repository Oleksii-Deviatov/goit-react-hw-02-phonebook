(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{87:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(29),s=n(56),l=n(50),j=n.n(l),d=n(125),u=n(124),b=n(116),m=n(6);var f=function(e){var t=e.setContacts,n=e.contacts,c=Object(a.useState)(""),r=Object(o.a)(c,2),i=r[0],l=r[1],f=Object(a.useState)(""),O=Object(o.a)(f,2),x=O[0],h=O[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==i&&(n.find((function(e){return e.name.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," already exist")):(t((function(e){return[].concat(Object(s.a)(e),[{id:j()(),name:i,number:x}])})),l(""),h("")))},autoComplete:"off",children:Object(m.jsxs)(d.a,{display:"flex",flexDirection:"column",children:[Object(m.jsx)(u.a,{id:"standard-basic",label:"Name",value:i,onChange:function(e){var t=e.target.value;l(t)},margin:"dense"}),Object(m.jsx)(u.a,{id:"standard-basic",label:"Number",value:x,onChange:function(e){var t=e.target.value;h(t)},margin:"dense"}),Object(m.jsx)(b.a,{variant:"outlined",type:"submit",color:"primary",children:"add contact"})]})})};var O=function(e){var t=e.setFind,n=e.find;return Object(m.jsx)("form",{autoComplete:"off",children:Object(m.jsx)(d.a,{display:"flex",flexDirection:"column",children:Object(m.jsx)(u.a,{id:"standard-basic",label:"find contact by name",value:n,onChange:function(e){var n=e.target.value;t(n)},margin:"dense"})})})},x=n(118),h=n(119),v=n(120),p=n(121),C=n(55),g=n.n(C),y=n(117),w=Object(y.a)({listItem:{"&:not(:last-child)":{marginBottom:10}}});var k=function(e){var t=e.id,n=e.name,a=e.number,c=e.delContact,r=w();return Object(m.jsx)("li",{className:r.listItem,children:Object(m.jsx)(x.a,{variant:"outlined",children:Object(m.jsx)(h.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsxs)(d.a,{display:"flex",justifyContent:"space-between",children:[Object(m.jsxs)("p",{children:[n,": ",a]}),Object(m.jsx)(p.a,{color:"primary",component:"span",onClick:function(){return c(t)},children:Object(m.jsx)(g.a,{})})]})})})})})},S=n(126);var L=function(e){var t=e.contacts,n=e.filterContacts,a=e.delContact;return Object(m.jsx)(S.a,{children:n()?n().map((function(e){var t=e.id,n=e.name,c=e.number;return Object(m.jsx)(k,{id:t,name:n,number:c,delContact:a},t)})):t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(m.jsx)(k,{id:t,name:n,number:c,delContact:a},t)}))})},D=n(122),F=n(123);var I=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],l=i[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(D.a,{maxWidth:"xs",children:[Object(m.jsx)(F.a,{variant:"h2",align:"center",children:"Phonebook"}),Object(m.jsx)(f,{setContacts:c,contacts:n}),Object(m.jsx)(F.a,{variant:"h4",align:"center",children:"Contacts"}),Object(m.jsx)(O,{setFind:l,find:s}),Object(m.jsx)(L,{contacts:n,filterContacts:function(){if(""!==s)return n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}))},delContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})})};n(86);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.69bab744.chunk.js.map