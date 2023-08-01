"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var i={},t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,a,i,c,e=e&&e.prototype instanceof d?e:d,e=Object.create(e.prototype),n=new b(n||[]);return e._invoke=(o=t,a=r,i=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return _()}for(i.method=t,i.arg=e;;){var r=i.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}n=u(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;n=n.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}(r,i);if(r){if(r===s)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c="executing";r=u(o,a,i);if("normal"===r.type){if(c=i.done?"completed":"suspendedYield",r.arg===s)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(c="completed",i.method="throw",i.arg=r.arg)}}),e}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var s={};function d(){}function f(){}function p(){}var e={},h=(a(e,n,function(){return this}),Object.getPrototypeOf),h=h&&h(h(L([]))),m=(h&&h!==t&&l.call(h,n)&&(e=h),p.prototype=d.prototype=Object.create(e));function y(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function g(i,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var a,t=u(i[t],i,r);if("throw"!==t.type)return(r=(a=t.arg).value)&&"object"==_typeof(r)&&l.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function v(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(v,this),this.reset(!0)}function L(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:_}}function _(){return{value:void 0,done:!0}}return a(m,"constructor",f.prototype=p),a(p,"constructor",f),f.displayName=a(p,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},i.awrap=function(t){return{__await:t}},y(g.prototype),a(g.prototype,r,function(){return this}),i.AsyncIterator=g,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new g(c(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},y(m),a(m,o,"Generator"),a(m,n,function(){return this}),a(m,"toString",function(){return"[object Generator]"}),i.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},i}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=c.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}document.addEventListener("DOMContentLoaded",function(){(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator)return t.prev=1,t.next=4,navigator.serviceWorker.register("/sw.js");t.next=11;break;case 4:(e=t.sent).installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Registration failed with ".concat(t.t0));case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(){return t.apply(this,arguments)}})()(),window.addEventListener("scroll",function(){var t=document.querySelector(".top-btn");300<document.body.scrollTop||300<document.documentElement.scrollTop?t.classList.add("show"):t.classList.remove("show")}),document.querySelector(".top-btn").addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),document.addEventListener("scroll",function(){var t=document.getElementById("site-header");100<window.pageYOffset?t.classList.add("change--bg"):t.classList.remove("change--bg")});function t(t){t.matches&&("rtl"===document.dir?(document.querySelector("figure.change-aos").setAttribute("data-aos","fade-left"),document.querySelector(".post.change-aos").setAttribute("data-aos","fade-right")):(document.querySelector("figure.change-aos").setAttribute("data-aos","fade-right"),document.querySelector(".post.change-aos").setAttribute("data-aos","fade-left")))}document.querySelector(".toggle-menu").addEventListener("click",function(){function e(t){r.classList.contains("show")?9===t.keyCode&&(t.shiftKey?document.activeElement===o&&(t.preventDefault(),a.focus()):document.activeElement===a&&(t.preventDefault(),o.focus())):document.removeEventListener("keydown",e)}var t=document.querySelector(".toggle-menu"),r=document.querySelector(".fullscreen-menu"),n=document.getElementById("site-header"),o=document.querySelector(".site-logo a"),a=document.querySelector(".theme-btn"),i=document.documentElement.lang;t.classList.toggle("open"),r.classList.toggle("show"),document.body.classList.toggle("disable--scrolling"),100<window.pageYOffset&&n.classList.toggle("change--bg"),(300<document.body.scrollTop||300<document.documentElement.scrollTop)&&document.querySelector(".top-btn").classList.toggle("show"),t.classList.contains("open")?(t.setAttribute("aria-expanded","true"),"ar"===i?t.setAttribute("aria-label","اغلق القائمة"):t.setAttribute("aria-label","close menu")):(t.setAttribute("aria-expanded","false"),"ar"===i?t.setAttribute("aria-label","افتح القائمة"):t.setAttribute("aria-label","open menu"));document.addEventListener("keydown",e)});var e=document.getElementById("theme-btn"),r=("true"===window.localStorage.getItem("darkTheme")&&(document.body.classList.add("dark-theme"),e.checked=!0,e.setAttribute("aria-checked","true")),e.addEventListener("change",function(){document.body.classList.toggle("dark-theme"),"true"===window.localStorage.getItem("darkTheme")?(window.localStorage.setItem("darkTheme","false"),e.setAttribute("aria-checked","false")):(window.localStorage.setItem("darkTheme","true"),e.setAttribute("aria-checked","true"))}),AOS.init({duration:600,easing:"ease-in-sine",offset:200}),window.matchMedia("(min-width: 768px)")),i=(t(r),r.addEventListener("change",t),"rtl"===document.dir&&(Splide.defaults={direction:"rtl",i18n:{prev:"السابق",next:"التالي"}}),new Splide("#articles__slider",{perPage:3,gap:"2rem",pagination:!1,lazyLoad:"nearby",breakpoints:{1200:{perPage:2},768:{perPage:1}}}).mount(),new Splide("#clients__slider",{width:"80%",perPage:6,gap:"2rem",pagination:!1,lazyLoad:"nearby",breakpoints:{992:{perPage:3},576:{width:"90%",perPage:2}}}).mount(),new Splide("#blog__slider",{perPage:3,gap:"2rem",pagination:!1,lazyLoad:"nearby",breakpoints:{992:{perPage:2},576:{perPage:1}}}).mount(),new Splide("#reviews__slider",{autoplay:!0,type:"loop",pagination:!1,interval:3e3,lazyLoad:"nearby",classes:{arrow:"splide__arrow sr--only"}}).mount(),window.addEventListener("scroll",function(){var t=document.querySelector(".numbers"),e=_toConsumableArray(document.querySelectorAll(".numbers .counter"));e.forEach(function(n){!function(t){t=t.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(t)?n.innerText=0:function t(){var e=+n.getAttribute("data-target"),r=+n.innerText;r<e?(n.innerText=(r+e/50).toLocaleString(),setTimeout(t,100)):n.innerText=e.toLocaleString()}()})}),new Splide("#portfolio__slider",{perPage:3,padding:{right:"10rem"},lazyLoad:"nearby",classes:{arrow:"splide__arrow sr--only"},breakpoints:{856:{perPage:2,padding:{right:0,left:0}},438:{perPage:1}}})),n=function(){var t=document.createDocumentFragment(),r=document.documentElement.lang,e=document.querySelector(".portfolio__slider .splide__track"),n=_toConsumableArray(document.querySelectorAll(".projects .tag.active")),o=n.map(function(t){return t.dataset.value}),a=document.createElement("ul");[{src:"./images/portfolio-1.webp",alt:"Portfolio 1",arAlt:"سابقة الأعمال 1",dataTag:"travel mystery"},{src:"./images/portfolio-2.webp",alt:"Portfolio 2",arAlt:"سابقة الأعمال 2",dataTag:"art"},{src:"./images/portfolio-3.webp",alt:"Portfolio 3",arAlt:"سابقة الأعمال 3",dataTag:"illusion"},{src:"./images/portfolio-4.webp",alt:"Portfolio 4",arAlt:"سابقة الأعمال 4",dataTag:"mystery"},{src:"./images/portfolio-5.webp",alt:"Portfolio 5",arAlt:"سابقة الأعمال 5",dataTag:"art paintings"}].forEach(function(e){var t=o.some(function(t){return e.dataTag.includes(t)});0!==n.length&&!t||(t='<li class="splide__slide" data-tag="'.concat(e.dataTag,'">\n                    <a href="#" title="').concat("ar"===r?"الذهاب إلى ".concat(e.arAlt):"Go To ".concat(e.alt),'" target="_blank" rel="nofollow">\n                        <img src="').concat("ar"===r?"../".concat(e.src):e.src,'" alt="').concat("ar"===r?e.arAlt:e.alt,'" loading="lazy">\n                    </a>\n                </li>'),a.insertAdjacentHTML("beforeend",t))}),a.classList.add("splide__list"),t.appendChild(a),e.appendChild(t),i.mount()};n();document.querySelector(".projects .tags").addEventListener("click",function(t){t=t.target;"BUTTON"===t.nodeName&&(t.parentElement.classList.toggle("active"),i.destroy(),document.querySelector(".portfolio__slider .splide__list").remove(),n())})});
//# sourceMappingURL=main.js.map
