(this["webpackJsonpreact-cars"]=this["webpackJsonpreact-cars"]||[]).push([[0],{10:function(e,t,a){e.exports={form:"form_form__2spKE",h:"form_h__2Zn03",input:"form_input__2csiQ",button:"form_button__1TAUc",maxError:"form_maxError__2jYbo",emptyError:"form_emptyError__1YtUu",bannedSymbolsError:"form_bannedSymbolsError__49GvZ"}},13:function(e,t,a){e.exports={nav:"nav_nav__1f-Av",link:"nav_link__1Y6f5",active:"nav_active__1Wztr"}},16:function(e,t,a){e.exports={wrapper:"vinCode_wrapper__21sGQ",item:"vinCode_item__SL_WN",message:"vinCode_message__2mJvN",name:"vinCode_name__9F8Hm"}},20:function(e,t,a){e.exports={header:"header_header__351ec",logo:"header_logo__3_0zh",h:"header_h__3tKb4"}},25:function(e,t,a){e.exports={wrapper:"variableInfo_wrapper__33OQw",name:"variableInfo_name__389k6",description:"variableInfo_description__3WGmm"}},26:function(e,t,a){e.exports={item:"vinVariables_item__HeviH"}},28:function(e,t,a){e.exports={wrapper:"history_wrapper__3JhPj",historyItem:"history_historyItem__2d6nW",data:"history_data__2Ch15",recent:"history_recent__2UYW_"}},29:function(e,t,a){e.exports={footer:"footer_footer__2G90P",contacts:"footer_contacts__1qFxQ"}},39:function(e,t,a){e.exports={app:"app_app__1Fw2N"}},43:function(e,t,a){e.exports={content:"content_content__1_bQq"}},44:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(38),s=a.n(r),c=a(11),i=a(39),o=a.n(i),u=a(15),l=a.n(u),j=a(8),b=a(23),d=a(40),m=a(9),h=a(2),p=a(24),f=a.n(p),v=function(e){var t="https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/".concat(e,"?format=json");return f.a.get(t).then((function(e){var t=e.data.SearchCriteria;return{data:e.data.Results.filter((function(e){return null!=e.Value&&""!=e.Value})),message:e.data.Message,vin:t}}))},O=function(){return f.a.get("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json").then((function(e){return e.data.Results}))},_=a.p+"static/media/reaload4.dbd59916.svg",g=a(0),x=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_})})},y=a(25),N=a.n(y),S=function(e){var t=e.target;return t?Object(g.jsxs)("div",{className:N.a.wrapper,children:[Object(g.jsx)("div",{className:N.a.name,children:t.Name}),Object(g.jsx)("span",{dangerouslySetInnerHTML:{__html:t.Description}})]}):Object(g.jsx)(x,{})},D=a(26),I=a.n(D),w=function(e){return e.list?Object(g.jsx)("div",{className:I.a.wrapper,children:e.list.map((function(e){return Object(g.jsxs)("div",{className:I.a.item,children:[Object(g.jsx)(c.b,{to:"/variables/".concat(e.ID),children:Object(g.jsxs)("span",{children:[e.Name,":"]})}),Object(g.jsx)("span",{dangerouslySetInnerHTML:{__html:e.Description}})]},e.ID.toString())}))}):Object(g.jsx)(x,{})},C=a(43),E=a.n(C),k=a(28),J=a.n(k),L=function(e){return Object(g.jsx)("div",{className:J.a.wrapper,children:e.historyData.vinData&&e.historyData.vinKeys?Object(g.jsx)("div",{children:e.historyData.vinKeys.map((function(t,a){return Object(g.jsx)("div",{className:J.a.historyItem,onClick:function(){return e.getStorageData(a)},children:t.split(":")[1]},t.toString())}))}):Object(g.jsx)("div",{children:"No history"})})},K=a(10),B=a.n(K),M=function(e){return Object(g.jsxs)("form",{className:B.a.form,children:[Object(g.jsx)("h4",{className:B.a.h,children:"Enter VIN code"}),Object(g.jsx)("input",{placeholder:"Your vin",className:B.a.input,value:e.value,onChange:function(t){return e.input.onChange(t)},onBlur:function(t){return e.input.onBlur(t)}}),Object(g.jsx)("button",{className:B.a.button,onClick:function(t){t.preventDefault(),e.getData(e.input.value)},children:"Check"}),e.input.isDirty&&e.input.isEmpty&&Object(g.jsx)("div",{className:B.a.emptyError,children:"Can't be empty"}),e.input.isMaxLength&&Object(g.jsx)("div",{className:B.a.maxError,children:"Not more than 17"}),e.input.hasBannedSymbols&&Object(g.jsx)("div",{className:B.a.bannedSymbolsError,children:"Only letters and numbers!"}),Object(g.jsx)(L,{getStorageData:e.getStorageData,historyData:e.historyData})]})},V=a(16),H=a.n(V),Q=function(e){return Object(g.jsxs)("div",{className:H.a.wrapper,children:[e.message&&Object(g.jsx)("div",{className:H.a.message,children:e.message}),e.data&&e.data.map((function(e,t){return Object(g.jsxs)("div",{className:H.a.item,children:[Object(g.jsxs)("div",{className:H.a.name,children:[e.Variable,":"]})," ",Object(g.jsx)("div",{children:e.Value})]},t.toString())}))]})},W=a(44),Y=a.n(W),F=function(e){return Object(g.jsxs)("div",{className:Y.a.wrapper,children:[Object(g.jsx)(M,{onChange:function(t){return e.onInputChange(t)},input:e.input,getData:e.getData,getStorageData:e.getStorageData,historyData:e.historyData}),e.state.isLoading&&Object(g.jsx)(x,{}),Object(g.jsx)(Q,{data:e.state.data,message:e.state.message})]})},G=function(e,t){var a=Object(n.useState)(""),r=Object(m.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],l=o[1],b=function(e,t){var a=Object(n.useState)(!0),r=Object(m.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),u=o[0],l=o[1],j=Object(n.useState)(!1),b=Object(m.a)(j,2),d=b[0],h=b[1];return Object(n.useEffect)((function(){for(var a in t)switch(a){case"isEmpty":c(!e);break;case"maxLength":e.length>t[a]?l(!0):l(!1);break;case"hasBannedSymbols":!e.length||/^[a-zA-Z0-9]+$/.test(e)?h(!1):h(!0)}}),[e]),{isMaxLength:u,isEmpty:s,hasBannedSymbols:d}}(s,t);return Object(j.a)({value:s,onChange:function(e){c(e.target.value)},onBlur:function(){l(!0)},isDirty:u},b)},z=function(){var e=Object(n.useState)({vinKeys:null,vinData:null}),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({list:null,data:null,message:null,isLoading:null}),c=Object(m.a)(s,2),i=c[0],o=c[1],u=G(0,{isEmpty:!0,maxLength:17,hasBannedSymbols:!1}),p=function(e,t){var a,n=JSON.parse(localStorage.getItem("vinKeys"))||[],s=JSON.parse(localStorage.getItem("vinData"))||[],c=Object(d.a)(n);try{for(c.s();!(a=c.n()).done;){if(a.value===t)return}}catch(i){c.e(i)}finally{c.f()}n.length>4?(n.pop(),s.pop(),n.unshift(t),s.unshift(e)):(n.unshift(t),s.unshift(e)),localStorage.setItem("vinKeys",JSON.stringify(n)),localStorage.setItem("vinData",JSON.stringify(s)),r({vinKeys:n,vinData:s})},f=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.isEmpty){e.next=2;break}return e.abrupt("return");case 2:if(!u.isMaxLength){e.next=4;break}return e.abrupt("return");case 4:if(!u.hasBannedSymbols){e.next=6;break}return e.abrupt("return");case 6:return o(Object(j.a)(Object(j.a)({},i),{},{isLoading:!0})),e.next=9,v(t).then((function(e){o(Object(j.a)(Object(j.a)({},i),{},{data:e.data,message:e.message,isLoading:!1})),p(e.data,e.vin)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=JSON.parse(localStorage.getItem("vinData")).find((function(t,a){return a===e}));o(Object(j.a)(Object(j.a)({},i),{},{data:t,message:null}))},x=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,o(Object(j.a)(Object(j.a)({},i),{},{list:t}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("vinKeys"))||[],t=JSON.parse(localStorage.getItem("vinData"))||[],a=JSON.parse(localStorage.getItem("vinMessages"))||[];r({vinData:t,vinKeys:e,vinMessages:a})}(),x()}),[]),Object(g.jsxs)("main",{className:E.a.content,children:[Object(g.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(F,{state:i,historyData:a,getStorageData:_,getData:f,input:u,onInputChange:u.onChange})}}),Object(g.jsx)(h.a,{exact:!0,path:"/variables/:id",render:function(e){return Object(g.jsx)(S,Object(j.a)(Object(j.a)({},e),{},{target:(i.list||[]).find((function(t){return"".concat(t.ID)===e.match.params.id}))}))}}),Object(g.jsx)(h.a,{exact:!0,path:"/variables",render:function(){return Object(g.jsx)(w,{list:i.list})}})]})},A=a(29),T=a.n(A),U=function(e){return Object(g.jsx)("footer",{className:T.a.footer,children:Object(g.jsx)("div",{className:T.a.contacts,children:Object(g.jsx)("a",{target:"_blank",href:"https://github.com/ivannwebdev",children:"Contacts"})})})},Z=a(20),q=a.n(Z),P=a.p+"static/media/logo3.7f4b3712.png",R=function(e){return Object(g.jsxs)("header",{className:q.a.header,children:[Object(g.jsx)("h3",{className:q.a.h,children:"VIN decoding"}),Object(g.jsx)("img",{className:q.a.logo,src:P,alt:""})]})},$=a(13),X=a.n($),ee=function(e){return Object(g.jsxs)("nav",{className:X.a.nav,children:[Object(g.jsx)(c.b,{exact:!0,className:X.a.link,activeClassName:X.a.active,to:"/",children:"Fom"}),Object(g.jsx)(c.b,{exact:!0,className:X.a.link,activeClassName:X.a.active,to:"/variables/",children:"Variables"})]})},te=function(){return Object(g.jsxs)("div",{className:o.a.app,children:[Object(g.jsx)(R,{}),Object(g.jsx)(ee,{}),Object(g.jsx)(z,{}),Object(g.jsx)(U,{})]})};s.a.render(Object(g.jsx)(c.a,{children:Object(g.jsx)(te,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.fd8aefeb.chunk.js.map