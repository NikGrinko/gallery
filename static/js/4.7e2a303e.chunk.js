(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[4],{64:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(11);a.a=function(e){var a=e.titleToHeader,t=e.pathToBack,l=e.childToHeaderButton;return r.a.createElement("div",{className:"header"},r.a.createElement(c.b,{to:t,className:"button button--gallery"},l),r.a.createElement("h1",{className:"header-title"},a))}},65:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(11),n=t(64),i=t(12),m=t(17);a.default=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.gallery})),t=a.albums,l=a.cover;return r.a.createElement("div",{className:"gallery"},r.a.createElement("div",{className:"container"},r.a.createElement(n.a,{pathToBack:"/",childToHeaderButton:"\u0412\u044b\u0439\u0442\u0438",titleToHeader:"\u0412\u0430\u0448\u0438 \u0430\u043b\u044c\u0431\u043e\u043c\u044b"}),r.a.createElement("ul",{className:"gallery__list"},t.map((function(a,t){return r.a.createElement("li",{onClick:function(){return t={id:a.id,name:a.title},void e(Object(m.c)(t));var t},key:a.id},r.a.createElement(c.b,{to:"/gallery/album".concat(a.id),className:"gallery__list-item"},r.a.createElement("div",{className:"item-avatar"},r.a.createElement("img",{src:l[t].url,alt:"album avatar"})),r.a.createElement("div",{className:"item-name"},a.title),r.a.createElement("div",{className:"item-count"},"50 \u0444\u043e\u0442\u043e")))})))))}}}]);
//# sourceMappingURL=4.7e2a303e.chunk.js.map