module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=18)}([function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["components/Page"]},function(t,n,e){"use strict";function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return o}))},,,,,,,,,function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["components/Switch"]},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,n){t.exports=flarum.core.compat["utils/Stream"]},,function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(1),a=e.n(r),i=e(2),u=e.n(i),c=e(3),s=e(12),d=e.n(s),p=e(13),l=e.n(p),f=e(14),b=e.n(f),y=e(15),h=e.n(y),g=e(16),x=e.n(g),v=function(t){function n(){return t.apply(this,arguments)||this}Object(c.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.Fod=x()("1"===app.data.settings.dem13n_fod)},e.className=function(){return"FoDSettingsModal Modal--small"},e.title=function(){return app.translator.trans("dem13n.admin.quad_theme.title")},e.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m(l.a,{state:this.Fod(),onchange:this.Fod},app.translator.trans("dem13n.admin.quad_theme.fod"))),m("div",{className:"Form-group"},m(b.a,{className:"Button Button--primary",type:"submit",loading:this.loading},app.translator.trans("dem13n.admin.quad_theme.submit_button")))))},e.onsubmit=function(t){t.preventDefault(),this.loading||(this.loading=!0,h()({dem13n_fod:this.Fod()}).then((function(){return window.location.reload()})))},n}(d.a);a.a.initializers.add("dem13n-quad-theme",(function(t){t.extensionSettings["dem13n-quad-theme"]=function(){return t.modal.show(v)},Object(o.extend)(u.a.prototype,"oninit",(function(){1==t.forum.attribute("darkMode")&&$("body").addClass("night-mode")}))}))}]);
//# sourceMappingURL=admin.js.map