!function(c){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],i=0,s=[];i<r.length;i++)n=r[i],u[n]&&s.push(u[n][0]),u[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(f&&f(e);s.length;)s.shift()();return d.push.apply(d,a||[]),l()}function l(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==u[a]&&(r=!1)}r&&(d.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},u={6:0},d=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=c,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/opt/atlassian/pipelines/agent/build/src/application/media";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=r;d.push([278,0]),l()}({278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(279),n(288),n(35);var r=n(2),o=n(292),a=n(34),i=n(12),s=n(87),c=n(293),l=n(113);r.ww.gr=new o.Session({defaultAvatar:r.randomAvatar(),recaptcha:!navigator.userAgent.match(/Ghost Inspector/gi),recaptchaSitekey:RE_CAPTCHA_KEY_INVISIBLE,errorCodes:c.default}),r.ww.randomAvatarMethod=r.randomAvatar,r.ww.showcase=a.Showcase,r.ww.statcounter=l.default,r.ww.Lazyload=s.default,r.ww.imageLoaded=function(e){e.classList.add("show")},window.performance&&document.addEventListener&&window.addEventListener&&document.addEventListener("DOMContentLoaded",function(){i.default("send","timing","performance","DOMContentLoaded",Math.round(performance.now()))}),r.detectIE()&&(window.onload=function(){document.body.classList.add("ie")})},279:function(e,t,n){n(280).polyfill(),n(281).polyfill(),n(90),n(282),n(283),n(284),n(285),n(286),n(287)},282:function(e,t){"function"!=typeof Object.assign&&(Object.assign=function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n})},283:function(e,t){!function(){var n={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var r=!(!t||void 0===t.bubbles)&&t.bubbles,o=!(!t||void 0===t.cancelable)&&t.cancelable;return n.initEvent(e,r,o),n}return(n=document.createEventObject()).type=e,n.bubbles=!(!t||void 0===t.bubbles)&&t.bubbles,n.cancelable=!(!t||void 0===t.cancelable)&&t.cancelable,n},e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var i=this,e=arguments[0],t=arguments[1];if(i===window&&e in n)throw new Error("In IE8 the event: "+e+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");i._events||(i._events={}),i._events[e]||(i._events[e]=function(e){var t,n=i._events[e.type].list,r=n.slice(),o=-1,a=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=i,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||i,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++o<a&&!e.cancelImmediate;)o in r&&-1!==s(n,t=r[o])&&"function"==typeof t&&t.call(i,e)},i._events[e].list=[],i.attachEvent&&i.attachEvent("on"+e,i._events[e])),i._events[e].list.push(t)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0],r=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=s(t._events[n].list,r))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var n=this,r=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(n||window).detachEvent("on"+r,o)};this.attachEvent("on"+r,o)}this.fireEvent("on"+r,t)}catch(e){for(t.target=n;"_events"in(t.currentTarget=n)&&"function"==typeof n._events[r]&&n._events[r].call(n,t),"function"==typeof n["on"+r]&&n["on"+r].call(n,t),(n=9===n.nodeType?n.parentWindow:n.parentNode)&&!t.cancelBubble;);}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}function s(e,t){for(var n=-1,r=e.length;++n<r;)if(n in e&&e[n]===t)return n;return-1}}()},284:function(e,t){var n;Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&(n=Object.getOwnPropertyDescriptor(Element.prototype,"innerText"),Object.defineProperty(Element.prototype,"textContent",{get:function(){return n.get.call(this)},set:function(e){return n.set.call(this,e)}}))},285:function(e,t){!function(){if("Element"in this||!Element.prototype){var e,t=document.createElement("span");if("classList"in t){if("DOMTokenList"in this){if(t.classList.add("a","b"),!t.classList.contains("b"))for(var n=["add","remove"],r=function(e,t){var n=e[t];e[t]=function(){for(var e=arguments.length-1;0<=e;e--){var t=arguments[e];n.call(this,t)}}},o=n.length-1;0<=o;o--){var a=n[o];r(DOMTokenList.prototype,a)}if(t.classList.toggle("c",!1),t.classList.contains("c")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 0<arguments.length&&this.contains(e)===t?t:i.call(this,e)}}}}else{var s=function(e,t){for(var n=e.length-1;0<=n&&e[n]!=t;n--);return n};(e=function(e){this.element=e}).prototype.contains=function(e){var t=this.element.className.split(/\s+/);return-1!=s(t,e)},e.prototype.add=function(){for(var e=this.element.className.split(/\s+/),t=arguments.length-1;0<=t;t--){var n=arguments[t];-1==s(e,n)&&e.push(n)}this.element.className=e.join(" ")},e.prototype.remove=function(e){for(var t=this.element.className.split(/\s+/),n=arguments.length-1;0<=n;n--){var r=s(t,e);-1!=r&&t.splice(r,1)}this.element.className=t.join(" ")},e.prototype.item=function(e){return this.element.className.split(/\s+/)[e]},e.prototype.toggle=function(e,t){var n=this.contains(e);return n===t?t:(n?this.remove(e):this.add(e),!n)},e.prototype.length=0,Object.defineProperty?(Object.defineProperty(Element.prototype,"classList",{get:function(){return new e(this)}}),Object.defineProperty(e.prototype,"length",function(){return this.element.className.split(/\s+/).length})):Element.prototype.__defineGetter__&&Element.prototype.__defineGetter__("classList",function(){return new e(this)})}}}()},286:function(e,t){!function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}()},287:function(e,t){!self.document||"insertAdjacentHTML"in document.createElementNS("http://www.w3.org/1999/xhtml","_")||(HTMLElement.prototype.insertAdjacentHTML=function(e,t){"use strict";var n,r,o,a=this,i=a.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","_"),s=a.parentNode;switch(i.innerHTML=t,e.toLowerCase()){case"beforebegin":for(;n=i.firstChild;)s.insertBefore(n,a);break;case"afterbegin":for(r=a.firstChild;n=i.lastChild;)r=a.insertBefore(n,r);break;case"beforeend":for(;n=i.firstChild;)a.appendChild(n);break;case"afterend":for(o=a.nextSibling;n=i.lastChild;)o=s.insertBefore(n,o)}}),!self.document||"insertAdjacentElement"in document.createElementNS("http://www.w3.org/1999/xhtml","_")||(HTMLElement.prototype.insertAdjacentElement=function(e,t){"use strict";var n,r,o,a=this,i=a.parentNode;switch(e.toLowerCase()){case"beforebegin":for(;n=t.firstChild;)i.insertBefore(n,a);break;case"afterbegin":for(r=a.firstChild;n=t.lastChild;)r=a.insertBefore(n,r);break;case"beforeend":for(;n=t.firstChild;)a.appendChild(n);break;case"afterend":for(o=a.nextSibling;n=t.lastChild;)o=i.insertBefore(n,o)}return t})},288:function(e,t,n){"use strict";var l=this&&this.__awaiter||function(a,i,s,c){return new(s||(s=Promise))(function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((c=c.apply(a,i||[])).next())})},u=this&&this.__generator||function(n,r){var o,a,i,e,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,a=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0});var d=n(9);n(3);var a=n(22),r=n(289),o=n(290),f=n(92),i=n(128);function s(){window.gr_google=o.default.getInstance(),window.gr_facebook=r.default.getInstance(),window.gr_twitter=i.default.getInstance();var e=[].slice.call(this.getElementsByTagName("form"));gr.addEventListeners(),gr.addEventListener("gr:login",c),this.removeEventListener("show",s),e.forEach(function(e){return e.reset()}),function(){var c=this;["login","register"].forEach(function(s){for(var e=function(o){["google","facebook","twitter"].forEach(function(i){for(var e=function(a){"function"==typeof window["gr_"+i]&&"function"==typeof window["gr_"+i].connect?a.addEventListener("click",function(o){return l(c,void 0,void 0,function(){var t,n,r;return u(this,function(e){switch(e.label){case 0:o.preventDefault(),t=document.getElementById("tab-"+s),a.classList.add("button--loading"),t&&t.classList.add("disabled"),e.label=1;case 1:return e.trys.push([1,3,4,5]),[4,window["gr_"+i].connect()];case 2:return e.sent(),[3,5];case 3:return"string"!=typeof(n=e.sent())?[2]:(r=document.createElement("p"),a.nextElementSibling&&a.nextElementSibling.className.match(/error/i)||a.insertAdjacentElement("afterend",r),r.classList.add("error"),r.innerHTML=d.default(n),r.style.display="block",[3,5]);case 4:return a.classList.remove("button--loading"),t&&t.classList.remove("disabled"),[7];case 5:return[2]}})})}):a.classList.add("hide")},t=0,n=a.qq(".button--"+i,o.parentElement||o);t<n.length;t++){var r=n[t];e(r)}})},t=0,n=a.qq(".gr-auth__"+s+"-form");t<n.length;t++){var r=n[t];e(r)}})}()}function c(){gr.removeEventListeners(),gr.removeEventListener("gr:login",c),delete window.gr_facebook,delete window.gr_google,delete window.gr_twitter,["facebook-jssdk","google-jssdk"].forEach(function(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})}i.default.register=function(c){return l(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return u(this,function(e){return t=document.getElementById("gr-auth__register-form"),n=document.getElementById("modal-login"),r=document.getElementById("register-submit"),o=document.getElementById("tab-register"),t&&n&&r&&o&&(a=o.querySelector('input[name="avatar"]'),i=o.querySelector('input[name="username"]'),s=o.querySelector('input[name="twitter_id"]'),f.default.show(o.id),a&&i&&s&&(a.value=c.get(a.name)||"",i.value=c.get(i.name)||"",s.value=c.get(s.name)||"")),[2]})})},document.addEventListener("DOMContentLoaded",function(){var e=a.q("#modal-login");e&&e.addEventListener("show",s)})},292:function(module,exports,__webpack_require__){"use strict";var __extends=this&&this.__extends||(Bd=function(e,t){return(Bd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}Bd(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Bd,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(a,i,s,c){return new(s||(s=Promise))(function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((c=c.apply(a,i||[])).next())})},__generator=this&&this.__generator||function(n,r){var o,a,i,e,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,a=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(i=0<(i=s.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){s.label=t[1];break}if(6===t[0]&&s.label<i[1]){s.label=i[1],i=t;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(t);break}i[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0});var event_1=__webpack_require__(31),dom_1=__webpack_require__(1),BobjollView_1=__webpack_require__(23),twitter_1=__webpack_require__(128),delay_1=__webpack_require__(21),messageTemplate=__webpack_require__(102)("./element."+BobjollView_1.default.ext),Session=function(r){function s(e){var t=this;return s.instance||(t=r.call(this)||this,s.instance=t,(s.settings=__assign({},s.defaultSettings,e)).errorCodes&&(s.errorCodes=s.settings.errorCodes),t.initialize()),s.instance}return __extends(s,r),s.prototype.addEventListener=function(e,t,n){void 0===n&&(n=!0),r.prototype.addEventListener.call(this,e,t,n)},s.prototype.initialize=function(){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*gr_session2\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"));this.user=parseUser(e)},s.formHandlerStart=function(e){var t=dom_1.q('[type="submit"]',e);t&&t.classList.add("button--loading"),e.classList.add("disabled")},s.formHandlerEnd=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=dom_1.q('[type="submit"]',e),a=s.recaptchaWidgets[t];e.classList.remove("disabled"),o&&o.classList.remove("button--loading"),s.settings.recaptcha&&void 0!==a&&grecaptcha.reset(a),n[0]&&n[0]instanceof Event&&n[0].preventDefault()},s.prototype.loginHandler=function(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return t=new FormData(n),s.formHandlerStart(n),[4,s.instance.loginAndRegisterHandler("login",t).then(function(e){hideMessage(n),e&&(s.instance.user=e,s.instance.updateUI(),s.instance.triggerLogin(e))}).catch(function(e){showMessage(n,e,"error"),s.instance.triggerError("login")})];case 1:return e.sent(),s.formHandlerEnd.apply(s,[n,"login"].concat(r)),[2]}})})},s.prototype.registerHandler=function(o){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return __awaiter(this,void 0,void 0,function(){var t,n,r=this;return __generator(this,function(e){switch(e.label){case 0:return t=new FormData(o),dom_1.q('[type="submit"]',o),n=!o.dataset.reload||"true"===o.dataset.reload,s.formHandlerStart(o),[4,s.instance.loginAndRegisterHandler("register",t).then(function(){return __awaiter(r,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return hideMessage(o),s.instance.triggerRegister(t),n?(window.location.reload(),[2]):[4,s.instance.registerCompleteHandler(t)];case 1:return e.sent(),[2]}})})}).catch(function(e){showMessage(o,e,"error"),s.instance.triggerError("register")})];case 1:return e.sent(),s.formHandlerEnd.apply(s,[o,"register"].concat(a)),[2]}})})},s.prototype.registerCompleteHandler=function(n){var r=document.getElementById("gr-auth__login-form");if(-1!=["google_id","twitter_id","facebook_id"].filter(function(e){return!!n.get(e)&&"0"!=n.get(e)}).indexOf("twitter_id"))return(new FormData).append("twitter_id",n.get("twitter_id")||""),twitter_1.default.auth("login",n);if(r){var e=s.recaptchaWidgets.login;new FormData(r);return["username","password"].forEach(function(e){var t=dom_1.q('input[name="'+e+'"]',r);t&&(t.value=(n.get(e)||"").toString())}),grecaptcha.execute(e),delay_1.default(250)}},s.prototype.forgotPasswordHandler=function(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return t=new FormData(n),s.formHandlerStart(n),[4,s.instance.forgotPasswordRequestHandler(t).then(function(e){hideMessage(n),showMessage(n,{message:e.message},e.status||"success")}).catch(function(e){showMessage(n,e,"error"),s.instance.triggerError("login")})];case 1:return e.sent(),s.formHandlerEnd.apply(s,[n,"forgot-password"].concat(r)),[2]}})})},s.prototype.forgotPasswordRequestHandler=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.addEventListener("load",function(){try{var e=JSON.parse(r.response);200!==r.status&&n({message:e.data.message||e.data.errors,error_code:e.data.error_code||"E_UNKNOW"}),t({message:e.data.message,status:e.data.status?"success":"error"})}catch(e){console.error("Error reading response (json):",r.response),n("Error reading response (json):"+r.response)}}),r.open("POST","/profile/request/login/lost_password"),r.setRequestHeader("X-Requested-With","xmlhttprequest"),r.send(e)})},s.prototype.logoutHandler=function(){return new Promise(function(t,n){var r=new XMLHttpRequest;r.addEventListener("load",function(){try{if(200===r.status){var e=JSON.parse(r.response);e.data.status?n("Failed logout: "+e.data.message):t(e)}}catch(e){throw n("Error reading response: "+r.response),e}}),r.open("DELETE","/profile/request/login"),r.setRequestHeader("X-Requested-With","xmlhttprequest"),r.send()})},s.prototype.loginAndRegisterHandler=function(e,o){return new Promise(function(t,n){var r=new XMLHttpRequest;r.addEventListener("load",function(){try{if(200===r.status){var e=JSON.parse(r.response);e.data.status?e.data.userdata?t(e.data.userdata):t():n({message:e.data.message||e.data.errors,error_code:e.data.error_code||"E_UNKNOW"})}else n("Error in user login ("+r.status+"): "+r.response)}catch(e){console.error("Error reading response (json):",r.response),n("Error reading response (json):"+r.response)}}),r.open("POST","login"==e?"/profile/request/login":"/profile/request/login/register"),r.setRequestHeader("X-Requested-With","xmlhttprequest"),r.send(o)})},s.dashToCamelCase=function(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})},s.loadRecaptcha=function(){var e,t=document.getElementsByTagName("script")[0];return(e=document.createElement("script")).id="recaptcha-sdk",e.src="//www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit",t.parentNode&&t.parentNode.insertBefore(e,t),new Promise(function(e,t){window.recaptchaLoaded=e,setTimeout(function(){return t("Failed loading recaptcha!")},1e4)})},s.prototype.addEventListeners=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return s.settings.recaptcha?[4,s.loadRecaptcha()]:[3,2];case 1:e.sent(),e.label=2;case 2:return s.defaultFormNames.forEach(function(o){var e=".gr-auth__"+o+"-form",a=s.dashToCamelCase(o)+"Handler",i=t[a];e&&i&&dom_1.qq(e).forEach(function(t,e){if(s.handlers[a]=function(e){e instanceof Event&&e.preventDefault(),s.recaptachaDisableHanlder?s.recaptachaDisableHanlder=!1:i(t,e)},s.settings.recaptcha){var n=dom_1.q('[type="submit"]',t),r="gr-auth__"+a+"-submit-"+e;n&&(n.id=r,s.recaptchaWidgets[o]=grecaptcha.render(r,{sitekey:s.settings.recaptchaSitekey,callback:s.handlers[a]}))}else t.addEventListener("submit",s.handlers[a])})}),[2]}})})},s.prototype.removeEventListeners=function(){},s.prototype.triggerError=function(e){return this.dispatchEvent(event_1.KEvent.fromType("gr:"+e+"-error"))},s.prototype.triggerLogin=function(e){return this.dispatchEvent(new KEventLogin(e))},s.prototype.triggerRegister=function(e){return this.dispatchEvent(new KEventRegister(e))},s.prototype.triggerLogout=function(e){return this.dispatchEvent(new KEventLogout(e))},s.prototype.updateUI=function(){var t=this,n=this.user;n&&(dom_1.qq(".gr-auth__name").forEach(function(e){return e.innerHTML=n.login}),dom_1.qq(".gr-auth__email").forEach(function(e){return e.innerHTML=n.email}),dom_1.qq(".gr-auth__avatar").forEach(function(e){e instanceof HTMLImageElement&&(e.src=n.avatar,e.alt=n.login,e.onerror=function(){return e.src=s.settings.defaultAvatar})})),dom_1.qq(".gr-auth").forEach(function(e){e.classList.remove("gr-auth--logged","gr-auth--not-logged","gr-auth--premium","gr-auth--not-premium"),t.isLogged()?e.classList.add("gr-auth--logged"):e.classList.add("gr-auth--not-logged"),t.isPremium()?e.classList.add("gr-auth--premium"):e.classList.add("gr-auth--not-premium")}),dom_1.qq(".gr-auth__logout-button").forEach(function(e){"__clickToLogout"in e||(e.__clickToLogout=!0,e.addEventListener("click",function(e){t.logoutHandler().then(function(e){t.user=null,t.updateUI(),t.triggerLogout(e)}).catch(function(e){return console.error(e)}),e.preventDefault()}))})},s.prototype.updateUser=function(){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*gr_session2\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"));this.user=parseUser(e)},s.prototype.isLogged=function(){return!!this.user},s.prototype.isPremium=function(){return this.user&&this.user.premium},s.defaultFormNames=["login","register","forgot-password"],s.defaultSettings={recaptcha:!0},s.handlers={loginHandler:null,registerHandler:null,forgotPasswordHandler:null},s.recaptchaWidgets={login:null,register:null,"forgot-password":null},s.recaptachaDisableHanlder=!1,s}(event_1.KEventTarget);exports.Session=Session;var KEventLogin=function(n){function e(e){var t=n.call(this)||this;return t.type="gr:login",t.extra={user:e},t}return __extends(e,n),e}(event_1.KEvent),KEventRegister=function(n){function e(e){var t=n.call(this)||this;return t.type="gr:register",t}return __extends(e,n),e}(event_1.KEvent),KEventLogout=function(n){function e(e){var t=n.call(this)||this;return t.type="gr:logout",t.extra=e,t}return __extends(e,n),e}(event_1.KEvent);function showMessage(r,e,o){var t=dom_1.q(".message",r),n=e.message;if(dom_1.qq(".notification--error",r).forEach(function(e){e.parentElement&&e.parentElement.removeChild(e)}),Session.errorCodes&&e.error_code){var a=dom_1.qq(".message--field",r);a&&a.forEach(function(e){e.parentElement&&e.parentElement.removeChild(e)});try{if("string"==typeof e.error_code&&Session.errorCodes[e.error_code]&&(n=Session.errorCodes[e.error_code]),Array.isArray(e.error_code))return void e.error_code.forEach(function(e){var t=dom_1.q('input[name="'+e.field+'"]',r);if(t){var n=t.parent(".group");if(Session.errorCodes[e.code])(n||t).insertAdjacentHTML("afterend",BobjollView_1.default.render(messageTemplate,{class:"notification--"+o+" notification--static animation--fade-in",html:""+Session.errorCodes[e.code]}))}})}catch(i){}}if(t){if(n instanceof Array)t.innerHTML=n.map(function(e){return BobjollView_1.default.render(messageTemplate,{class:"notification--"+o+" notification--static animation--fade-in",html:e})}).join("");else if("string"==typeof n)t.innerHTML=BobjollView_1.default.render(messageTemplate,{class:"notification--"+o+" notification--static animation--fade-in",html:n});else{var i=[];for(var s in n){i=i.concat(n[s]);var c=dom_1.q("input[name="+s+"]",r)||document.getElementById(s);if(c){var l=c.parent(".group");l&&1===dom_1.qq("input",l).length?l.classList.add("error"):c.classList.add("error")}}t.innerHTML=i.map(function(e){var t="string"==typeof e?e:e.getPathValue("messages");return BobjollView_1.default.render(messageTemplate,{class:"notification--"+o+" notification--static animation--fade-in",html:t})}).join("")}t&&(t.classList.add(o),t.style.display="block")}}function hideMessage(e){var t=dom_1.q(".message",e);if(t){t.innerHTML="",t.style.display="none",t.classList.remove("error","success");for(var n=0,r=dom_1.qq("input",e);n<r.length;n++){r[n].classList.remove("error","success")}}}function phpToJson(phpStr){var jsonStr=phpStr.replace(/.*({.*?}).*/,"$1").replace(/([{;])s:\d+:"/g,'$1"').replace(/([{;])i:(\d+);/g,"$1$2;").replace(/([{;])N;/g,"$1null;").replace(/;(.*?);/g,":$1,");return jsonStr?eval("("+jsonStr+")"):null}function parseUser(e){var t=phpToJson(e);return t&&"id"in t&&"login"in t&&"email"in t&&"avatar"in t&&"premium"in t&&"cc_will_expire"in t?(t.premium="1"==t.premium,t.cc_will_expire="1"==t.cc_will_expire,t):null}exports.KEventLogout=KEventLogout,exports.showMessage=showMessage,exports.hideMessage=hideMessage},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);n(3);var o=n(29).sprintf;t.default={E_UNKNOW:r.default("Something has gone wrong, but the system can not determine the exact cause, please try again later."),E_CHECK_RECAPTCHA:r.default("The recaptcha has not been verified. Are you a robot?"),E_USER_NOT_FOUND:o(r.default("Account doesn't exist. Enter a different account or %sregister now.%s"),'<button type="button" class="medium tabs__link underline" data-tab="tab-register">',"</button>"),E_LOGIN_ATTEMPTS_REACHED:r.default("Maximum number of attempts reached, please try again later."),E_EMPTY_IDENTITY:r.default("The username is empty, please enter your username."),E_BANNED_ACCOUNT:o(r.default("The account has been banned. You can contact %ssupport%s if you think this is a mistake."),'<a href="'+SUPPORT_URL+'">',"</a>"),E_DISABLED_ACCOUNT:o(r.default("The account has been disabled. You can contact %ssupport%s if you think this is a mistake."),'<a href="'+SUPPORT_URL+'">',"</a>"),E_EMPTY_PASSWORD:r.default("The password is empty, please enter your password."),E_WRONG_PASSWORD:o(r.default("Sorry, that password isn't right. We can help you %srecover your password.%s"),'<button type="button" class="medium tabs__link underline" data-tab="tab-forgot-password">',"</button>"),E_MAIL_EXISTS:r.default("Another user with this email already exists."),E_USERNAME_EXISTS:r.default("Another user with this username exists."),E_TWITTERID_EXISTS:r.default("The twitter account has already been registered."),E_GOOGLEID_EXISTS:r.default("The google account has already been registered."),E_FACEBOOKID_EXISTS:r.default("The facebook account has already been registered."),E_VALIDATION_RULEUNDEFINED:r.default("The validation rule applied does not exist."),E_VALIDATION_ISDOMAIN:r.default("The value does not meet the domain format."),E_VALIDATION_ISVALIDIDNUMBER:r.default("The value does not meet the valid ID format."),E_VALIDATION_ISENDING:r.default("The value must end with the defined format."),E_VALIDATION_ISSTARTING:r.default("The value must start with the defined format."),E_VALIDATION_ISNUMERIC:r.default("The value must be numeric."),E_VALIDATION_ISURL:r.default("The value must comply with the URL format."),E_VALIDATION_ISEMAIL:r.default("The value must comply with the email format."),E_VALIDATION_ISSOCIAL:r.default('The value must contain only alphanumeric characters, periods ".", Hyphens "-, _" or positive sign "+".'),E_VALIDATION_ISSOCIAL2:r.default("The value must be a valid social network url."),E_VALIDATION_ISUSERNAME:r.default('The value must contain only alphanumeric characters, periods "." And hyphens "-, _"'),E_VALIDATION_ISDIFFERENT:r.default("The value must be different."),E_VALIDATION_ISDIFFERENT_PASSWORD:r.default("The password must be different from the previous one."),E_VALIDATION_ISEQUAL:r.default("The value does not match."),E_VALIDATION_ISEQUAL_PASSWORD:r.default("Passwords must match."),E_VALIDATION_ISSECURE:r.default("The value must be considered safe. It must include at least: 1 number, 1 capital letter, 1 symbol, and a length between 8 and 30."),E_VALIDATION_ISALPHALOGIN:r.default('The value must contain only alphanumeric values and underscore "_".'),E_VALIDATION_ISALPHA:r.default("The value must contain only alphanumeric values."),E_VALIDATION_ISMAX:r.default("The value exceeds the maximum size allowed."),E_VALIDATION_ISMIN:r.default("The value does not reach the minimum size allowed."),E_VALIDATION_ISREQUIRED:r.default("The field is mandatory."),E_VALIDATION_ISBETWEEN:r.default("The field must be between a maximum and a minimum value.")}}});
//# sourceMappingURL=global.a185aab38f72d78adda0.js.map