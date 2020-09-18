(this.webpackJsonpbagofholding=this.webpackJsonpbagofholding||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(4),c=t.n(r),s=(t(10),t(1)),o=t(2),m=t.n(o),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.trim().replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase()},d=function(){var e=Object(l.useState)(i("deliciousCamelKebab")),a=Object(s.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{className:"container pb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card bg-secondary text-white text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title display-4"},"@bagofholding/camel-to-kebab"),n.a.createElement("p",{className:"card-text"},"Enter a ",n.a.createElement("kbd",null,"camelCase")," string to get"," ",n.a.createElement("kbd",null,"camel-kebabs")),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 offset-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",placeholder:"e.g deliciousCamelKebab",onChange:function(e){var a,t;return r(i(null!==(a=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==a?a:""))},defaultValue:"deliciousCamelKebab"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("h2",null,n.a.createElement("span",{className:m()({badge:!0,"badge-success":t&&""!==t,"badge-danger":!t||""===t})},t&&""!==t?t:"...")))))))))))},u=function(e,a){var t=!1;return(/^(f|ht)tps?:\/\//i.test(e.toLowerCase())||/^mailto:([^?]*)/.test(e.toLowerCase())||a&&a(e))&&(t=!0),t},g=function(){var e=Object(l.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),o=Object(s.a)(c,2),i=o[0],d=o[1];return n.a.createElement("div",{className:"container pb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card bg-secondary text-white text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title display-4"},"@bagofholding/is-external"),n.a.createElement("p",{className:"card-text"},"Enter a string below to find out if it is an external link."),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 offset-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",placeholder:"e.g https://github.com",value:t,onChange:function(e){return r(e.target.value||"")}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("h2",null,n.a.createElement("span",{className:m()({badge:!0,"badge-success":u(t),"badge-danger":!u(t)})},"".concat(u(t)?"":"Not ","External")))))))),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title"},"Custom Conditional"),n.a.createElement("p",{className:"card-text"},"An optional second parameter can be passed a function. The return response is then used in the is-external check."),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 offset-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",placeholder:"e.g. /outside-router/pdf",value:i,onChange:function(e){return d(e.target.value||"")}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("h2",null,n.a.createElement("span",{className:m()({badge:!0,"badge-success":u(i,(function(e){return e.toLowerCase().includes("/pdf")})),"badge-danger":!u(i,(function(e){return e.toLowerCase().includes("/pdf")}))})},"".concat(u(t)?"":"Not ","External"))))))))))))},E=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+e()+"-"+e()+"_"+e()+"-"+e()+"_"+e()+e()+e()},f=function(){var e=Object(l.useState)(E()),a=Object(s.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{className:"container pb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card bg-secondary text-white text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title display-4"},"@bagofholding/guid"),n.a.createElement("p",{className:"card-text"},"Quickly generate a GUID string for short term ops, e.g. queued"," ","job IDs"),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 offset-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",placeholder:"e.g https://github.com",value:t,disabled:!0,readOnly:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){return r(E())}},"New GUID"))))))))))},N=function(){return"undefined"!==typeof window&&window.document},b=function(){return n.a.createElement("div",{className:"container pb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card bg-secondary text-white text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title display-4"},"@bagofholding/is-client"),n.a.createElement("p",{className:"card-text"},"Detects if the script is being running client (browser) side. This one is going to be difficult to demo."),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("h3",null,"Are you using a browser right now?"),n.a.createElement("h2",null,n.a.createElement("span",{className:m()({badge:!0,"badge-success":N(),"badge-danger":!N()})},N()?"Yes!":"No! Wait, how did you do that?")))))))))))},v=function(){var e=Object(l.useState)("This is an I\xf1t\xebrn\xe2ti\xf4n\xe0liz\xe6ti\xf8n place! For Internationalization people!"),a=Object(s.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{className:"container pb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card bg-secondary text-white text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title display-4"},"@bagofholding/strip-chars-url-safe"),n.a.createElement("p",{className:"card-text"},"Converts a string to a URL safe string for filenames or slugs."),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 offset-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",value:t,onChange:function(e){return r(e.target.value||"")}})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("h2",null,n.a.createElement("span",{className:"badge badge-dark text-wrap"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).toLowerCase().replace(/[ ]/gi,"-").replace(/[^a-z0-9-]/gi,"").replace(/-{2,}/g,"-").replace(/(^-)|(-$)/g,"")}(t))))))))))},p=(t(11),function(){return n.a.createElement("div",{className:"container app"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"jumbotron bg-secondary text-white text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 offset-lg-3"},n.a.createElement("h1",{className:"display-4"},"Bag Of Holding"))),n.a.createElement("p",{className:"lead"},"A magical grab bag of useful tools for the discerning developer"),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,"On this page you will find interactive examples. Please consult the documentation for further details and a tutorial."),n.a.createElement("ul",{className:"list-inline"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{className:"btn btn-dark btn-lg",href:"https://github.com/PenguinOfWar/bagofholding",target:"_blank",rel:"noopener noreferrer",role:"button"},"Documentation")),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{className:"btn btn-dark btn-lg",href:"https://github.com/PenguinOfWar/bagofholding/issues",target:"_blank",rel:"noopener noreferrer",role:"button"},"Support")))))),n.a.createElement("div",{className:"row"},n.a.createElement(d,null)),n.a.createElement("div",{className:"row"},n.a.createElement(g,null)),n.a.createElement("div",{className:"row"},n.a.createElement(f,null)),n.a.createElement("div",{className:"row"},n.a.createElement(b,null)),n.a.createElement("div",{className:"row"},n.a.createElement(v,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0ab8e1ee.chunk.js.map