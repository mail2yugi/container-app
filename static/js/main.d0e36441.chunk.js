(this.webpackJsonpcontainer=this.webpackJsonpcontainer||[]).push([[0],{22:function(t,n,e){},24:function(t,n,e){},33:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e.n(c),i=e(14),s=e.n(i),a=(e(22),e(16)),r=e(17),j=e(3),d=e(1);function u(t){var n=t.name,e=t.host,o=t.history;return Object(c.useEffect)((function(){var t="micro-frontend-script-".concat(n),c=function(){window["render".concat(n)]("".concat(n,"-container"),o)};if(!document.getElementById(t))return console.log(e),fetch("".concat(e,"/asset-manifest.json")).then((function(t){return t.json()})).then((function(n){var e=document.createElement("script");e.id=t,e.crossOrigin="",e.src="https://mail2yugi.github.io".concat(n.files["main.js"]),e.onload=function(){c()},document.head.appendChild(e)})),function(){window["unmount".concat(n)]&&window["unmount".concat(n)]("".concat(n,"-container"))};c()})),Object(d.jsx)("main",{id:"".concat(n,"-container")})}u.defaultProps={document:document,window:window};var h=u,l=(e(24),Object({NODE_ENV:"production",PUBLIC_URL:"/container-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CATS_HOST:"https://mail2yugi.github.io/cats",REACT_APP_DOGS_HOST:"https://mail2yugi.github.io/dogs-app"})),O=l.REACT_APP_DOGS_HOST,b=l.REACT_APP_CATS_HOST;function m(){return Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsx)("h1",{className:"banner-title",children:"\ud83d\ude3b Cats and Dogs \ud83d\udc15"}),Object(d.jsx)("h4",{children:"Random pics of cats and dogs"})]})}function f(t){var n=t.history;return Object(d.jsx)(h,{history:n,host:O,name:"Dogs"})}function x(t){var n=t.history;return Object(d.jsx)(h,{history:n,host:b,name:"Cats"})}function g(t){var n=t.history;return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(h,{history:n,host:b,name:"Cats"})})]})}function p(t){var n=t.history,e=Object(c.useState)(""),o=Object(a.a)(e,2),i=o[0],s=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("input",{placeholder:"Insert a greeting",defaultValue:i,onChange:function(t){return s(t.target.value)}}),Object(d.jsx)("button",{onClick:function(){n.push("/cat/".concat(i))},children:"Greet to a Cat"})]}),Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"cat",children:Object(d.jsx)(x,{})}),Object(d.jsx)("div",{className:"dog",children:Object(d.jsx)(f,{})})]})})]})}var v=function(){return Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a.Fragment,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(j.a,{exact:!0,path:"/cat/:greeting",component:g})]})})})},_=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,s=n.getTTFB;e(t),c(t),o(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),_()}},[[33,1,2]]]);
//# sourceMappingURL=main.d0e36441.chunk.js.map