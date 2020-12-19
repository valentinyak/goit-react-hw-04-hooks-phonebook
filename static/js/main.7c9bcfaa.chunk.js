(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(8),i=n.n(o),u=(n(16),n(10)),s=n(7),l=n(2),j=n.n(l);n(25);function b(e){var t=e.addContact;return Object(c.jsxs)("form",{children:[Object(c.jsxs)("label",{children:["Insert contact name",Object(c.jsx)("input",{type:"text",name:"nameInput"})]}),Object(c.jsxs)("label",{children:["Insert contact number",Object(c.jsx)("input",{type:"text",name:"phoneInput"})]}),Object(c.jsx)("button",{type:"submit",onClick:t,children:"Add contact"})]})}var d=n(9),m=n.n(d);function f(e){var t=e.contact,n=e.onClick,a=t.name,r=t.number,o=t.id;return Object(c.jsxs)("span",{children:[a,": ",r," ",Object(c.jsx)("button",{className:m.a.deletBtn,id:o,onClick:n,children:"delete"})]})}function p(e){var t=e.contacts,n=e.onClick;return Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(f,{contact:e,onClick:n})},e.id)}))})}function O(e){var t=e.onChange;return Object(c.jsxs)("label",{children:["Find contact",Object(c.jsx)("input",{type:"text",name:"filterInput",onChange:t})]})}function h(){var e=Object(a.useState)([{id:j.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:j.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:j.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:j.a.generate(),name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],d=i[1],m=Object(a.useRef)(1),f=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e?(1===m.current&&r(e),JSON.stringify(n)===localStorage.getItem("contacts")||localStorage.setItem("contacts",JSON.stringify(n))):n&&localStorage.setItem("contacts",JSON.stringify(n)),m.current+=1}),[n]);var h=function(e){var t=e.target.form,n=t.nameInput,c=t.phoneInput;n.value="",c.value=""};var g=function(e){return n.find((function(t){return t.name===e.target.form.nameInput.value}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(b,{addContact:function(e){var t=e.target.form,n=t.nameInput,c=t.phoneInput;e.preventDefault(),g(e)?alert("".concat(n.value," is already in contacts")):(r((function(e){var t=[{id:j.a.generate(),name:n.value,number:c.value}];return[].concat(Object(u.a)(e),t)})),setTimeout((function(){h(e)})))}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(O,{onChange:function(e){d(e.currentTarget.value)}}),Object(c.jsx)(p,{contacts:f,onClick:function(e){r(n.filter((function(t){return t.id!==e.target.id})))}})]})}i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={deletBtn:"ContactItem_deletBtn__20PMm"}}},[[26,1,2]]]);
//# sourceMappingURL=main.7c9bcfaa.chunk.js.map