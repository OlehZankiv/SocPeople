(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[7],{229:function(e,r,t){"use strict";t.d(r,"b",(function(){return a})),t.d(r,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required!"},n=function(e){return function(r){if(r&&r.length>e)return"Max length is ".concat(e," symbols")}}},230:function(e,r,t){"use strict";t.d(r,"c",(function(){return s})),t.d(r,"b",(function(){return m})),t.d(r,"a",(function(){return p}));var a=t(239),n=t(0),i=t.n(n),o=t(231),c=t.n(o),l=t(112),u=function(e){var r=e.hasError,t=e.meta,n=e.classStyle,o=Object(a.a)(e,["hasError","meta","classStyle"]);return i.a.createElement("div",{className:c.a[n]},o.children,r&&i.a.createElement("span",{className:c.a.errorInfo},t.error))},s=function(e){var r=e.input,t=e.meta,n=Object(a.a)(e,["input","meta"]),o=t.error&&t.touched;return i.a.createElement(u,{hasError:o,meta:t,classStyle:"textAreaWrapper"},i.a.createElement("textarea",Object.assign({},r,n,{className:o?c.a.errorField:""})))},m=function(e){var r=e.input,t=e.meta,n=Object(a.a)(e,["input","meta"]),o=t.error&&t.touched;return i.a.createElement(u,{hasError:o,meta:t,classStyle:"inputWrapper"},i.a.createElement("input",Object.assign({},r,n,{className:o?c.a.errorField:""})))},p=function(e,r,t,a,n,o,u){return i.a.createElement("div",{className:c.a[e]},i.a.createElement(l.a,{type:r,name:t,placeholder:a,validate:n,component:o}),u&&i.a.createElement("label",null,u))}},231:function(e,r,t){e.exports={errorField:"Field_errorField__2KsUJ",errorInfo:"Field_errorInfo__3IhA1",textAreaWrapper:"Field_textAreaWrapper__21fgV",inputWrapper:"Field_inputWrapper__3M01m",passInput:"Field_passInput__kA2Lo",rememberMe:"Field_rememberMe__3S1-H"}},306:function(e,r,t){e.exports={loginFormWrapper:"Login_loginFormWrapper__2j982",loginForm:"Login_loginForm__2dEQW",errorWrapper:"Login_errorWrapper__2yyJR"}},313:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),i=t(25),o=t(20),c=t(4),l=t(306),u=t.n(l),s=t(113),m=t(230),p=t(229),d=t(18),b=Object(s.a)({form:"login"})((function(e){var r=e.handleSubmit,t=e.error;return n.a.createElement("form",{className:u.a.loginForm,onSubmit:r},t&&n.a.createElement("div",{className:u.a.errorWrapper},t),Object(m.a)("emailInput","email","email","e-mail",p.b,m.b),Object(m.a)("passInput","password","password","password",p.b,m.b),Object(m.a)("rememberMe","checkbox","rememberMe",null,null,"input","remember me?"),n.a.createElement("div",null,n.a.createElement("button",null,"LOGIN")))})),f=function(e){var r=e.isAuth,t=e.userLogin;return r?n.a.createElement(d.a,{to:"/profile"}):n.a.createElement("div",{className:u.a.loginFormWrapper},n.a.createElement("h1",null,"LOGIN"),n.a.createElement(b,{onSubmit:function(e){var r=Object(c.a)({},e),a=r.email,n=r.password,i=r.rememberMe;t(a,n,i)}}))};r.default=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{userLogin:i.c})((function(e){var r=e.isAuth,t=e.userLogin;return n.a.createElement(f,{isAuth:r,userLogin:t})}))}}]);
//# sourceMappingURL=7.f1631af1.chunk.js.map