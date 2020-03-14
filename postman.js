!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([3],{12:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){return function(t,e){return e&&(t.skip=function(){return e}),t.addInterceptor=function(e,n){return e(t,n)},t}}.call(e,n,e,t))&&(t.exports=r)}(n(0))},143:function(t,e,n){"use strict";var r;!function(i,o){void 0!==(r=function(t){function e(t){var e={};return t?(t.trim().split(a).forEach(function(t){var n,r,i;n=t.indexOf(":"),r=u(t.substring(0,n).trim()),i=t.substring(n+1).trim(),e[r]?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i}),e):e}function r(t,e){return Object.keys(e||{}).forEach(function(n){if(e.hasOwnProperty(n)&&n in t)try{t[n]=e[n]}catch(t){}}),t}var i,u,s,c,a;return n(6),c=n(12),i=n(144),u=n(26),s=n(19),a=/[\r|\n]+/,c(function(t){return s.promise(function(n,u){var s,c,a,f,l,p,d,h;if(t="string"==typeof t?{path:t}:t||{},d={request:t},t.canceled)return d.error="precanceled",void u(d);if(!(h=t.engine||o.XMLHttpRequest))return void u({request:t,error:"xhr-not-available"});l=t.entity,t.method=t.method||(l?"POST":"GET"),c=t.method,a=new i(t.path||"",t.params).build();try{if("withCredentials"in(s=new h)){if(d.raw=s,r(s,t.mixin),s.open(c,a,!0),r(s,t.mixin),t.xhrFields&&t.xhrFields.withCredentials){var m=t.xhrFields.withCredentials;"string"==typeof m&&"true"===m.toLowerCase()?s.withCredentials=!0:"boolean"==typeof m&&m&&(s.withCredentials=!0)}f=t.headers;for(p in f)"Content-Type"===p&&"multipart/form-data"===f[p]||s.setRequestHeader(p,f[p]);t.canceled=!1,t.cancel=function(){t.canceled=!0,s.abort()},s.onreadystatechange=function(){t.canceled||s.readyState===(h.DONE||4)&&(d.status={code:s.status,text:s.statusText},d.headers=e(s.getAllResponseHeaders()),d.entity=s.responseText,d.status.code>0?n(d):setTimeout(function(){n(d)},0))};try{s.onerror=function(t){d.error="loaderror",u(d)}}catch(t){}s.send(l)}else if("undefined"!=typeof XDomainRequest){var y=l;y instanceof Object&&(y=JSON.stringify(y));var v=new XDomainRequest;v.open(t.method,a),v.timeout=4e4,v.onload=function(){try{var e={request:t,status:{code:200,text:"OK"},headers:{"Content-Type":v.contentType||"application/json"},entity:v.responseText};n(e)}catch(t){var e={errpr:"loaderror"};u(e)}},v.onprogress=function(){},v.ontimeout=function(){u({errpr:"biztimeouterror"})},v.onerror=function(){u({errpr:"loaderror"})},setTimeout(function(){v.send(y)},0)}else{var d={errpr:"nocors"};u(d)}}catch(t){d.error="loaderror",u(d)}})})}.call(e,n,e,t))&&(t.exports=r)}(n(0),"undefined"!=typeof window?window:void 0)},144:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t,e){var n,r,i,o;if(n=t,i={},e){for(r in e)o=new RegExp("\\{"+r+"\\}"),o.test(n)?n=n.replace(o,encodeURIComponent(e[r]),"g"):i[r]=e[r];for(r in i)n+=-1===n.indexOf("?")?"?":"&",n+=encodeURIComponent(r),null!==i[r]&&void 0!==i[r]&&(n+="=",n+=encodeURIComponent(i[r]))}return n}function r(t,e){return 0===t.indexOf(e)}function i(t,e){if(!(this instanceof i))return new i(t,e);t instanceof i?(this._template=t.template,this._params=o({},this._params,e)):(this._template=(t||"").toString(),this._params=e||{})}var o,u,s,c,a;return o=n(25),s=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i,c=/^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i,a=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i,i.prototype={append:function(t,e){return new i(this._template+t,o({},this._params,e))},fullyQualify:function(){if(!location)return this;if(this.isFullyQualified())return this;var t=this._template;return r(t,"//")?t=u.protocol+t:r(t,"/")?t=u.origin+t:this.isAbsolute()||(t=u.origin+u.pathname.substring(0,u.pathname.lastIndexOf("/")+1)),-1===t.indexOf("/",8)&&(t+="/"),new i(t,this._params)},isAbsolute:function(){return c.test(this.build())},isFullyQualified:function(){return a.test(this.build())},isCrossOrigin:function(){if(!u)return!0;var t=this.parts();return t.protocol!==u.protocol||t.hostname!==u.hostname||t.port!==u.port},parts:function(){var t,e;return t=this.fullyQualify().build().match(s),e={href:t[0],protocol:t[1],host:t[3]||"",hostname:t[4]||"",port:t[6],pathname:t[7]||"",search:t[8]||"",hash:t[9]||""},e.origin=e.protocol+"//"+e.host,e.port=e.port||("https:"===e.protocol?"443":"http:"===e.protocol?"80":""),e},build:function(t){return e(this._template,o({},this._params,t))},toString:function(){return this.build()}},u=location?new i(location.href).parts():void 0,i}.call(e,n,e,t))&&(t.exports=r)}(n(0))},18:function(t,e,n){"use strict";var r;!function(i){var o;void 0!==(r=function(t){function e(t){var e,n;return e=t.split(";"),n=e[0].trim().split("+"),{raw:t,type:n[0],suffix:n[1]?"+"+n[1]:"",params:e.slice(1).reduce(function(t,e){return e=e.split("="),t[e[0].trim()]=e[1]?e[1].trim():o,t},{})}}return{parse:e}}.call(e,n,e,t))&&(t.exports=r)}(n(0))},19:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t,e){return t.then(function(t){return t&&t[e]},function(t){return f.reject(t&&t[e])})}function r(){return e(this,"entity")}function i(){return e(e(this,"status"),"code")}function o(){return e(this,"headers")}function u(t){return t=l(t),e(this.headers(),t)}function s(t){return t=[].concat(t),c(f.reduce(t,function(t,e){if("string"==typeof e&&(e={rel:e}),"function"!=typeof t.entity.clientFor)throw new Error("Hypermedia response expected");return t.entity.clientFor(e.rel)({params:e.params})},this))}function c(t){return t.status=i,t.headers=o,t.header=u,t.entity=r,t.follow=s,t}function a(){var t=arguments;return f.promise(function(e,n){try{e(t[0])}catch(t){n(t)}}).then(t[1]).otherwise(t[2])}var f=n(6),l=n(26);return a.make=c,a.reject=function(t){return c(f.reject(t))},a.promise=function(t){return c(f.promise(t))},a}.call(e,n,e,t))&&(t.exports=r)}(n(0))},218:function(t,e,n){t.exports=n(91)},24:function(t,e,n){"use strict";var r;!function(i){var o;void 0!==(r=function(t){function e(){return i.apply(o,arguments)}var r,i,u;return r=n(12),e.setDefaultClient=function(t){i=t},e.getDefaultClient=function(){return i},e.resetDefaultClient=function(){i=u},e.setPlatformDefaultClient=function(t){if(u)throw new Error("Unable to redefine platformDefaultClient");i=u=t},r(e)}.call(e,n,e,t))&&(t.exports=r)}(n(0))},25:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t){var e,r,i,o;for(t||(t={}),e=1,r=arguments.length;e<r;e+=1){i=arguments[e];for(o in i)o in t&&(t[o]===i[o]||o in n&&n[o]===i[o])||(t[o]=i[o])}return t}var n={};return e}.call(e,n,e,t))&&(t.exports=r)}(n(0))},26:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t){return t.toLowerCase().split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join("-")}return e}.call(e,n,e,t))&&(t.exports=r)}(n(0))},35:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){var e,r;return e=n(9),r=n(6),e({init:function(t){return t.code=t.code||400,t},response:function(t,e){return t.status&&t.status.code>=e.code?r.reject({response:t,error:"httperror"}):t}})}.call(e,n,e,t))&&(t.exports=r)}(n(0))},36:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){var e,r,i,o,u;return e=n(9),r=n(18),i=n(38),u=n(6),o={read:function(t){return t},write:function(t){return t}},e({init:function(t){return t.registry=t.registry||i,t},request:function(t,e){var n,i;return i=t.headers||(t.headers={}),n=r.parse(i["Content-Type"]=i["Content-Type"]||e.mime||"text/plain"),i.Accept=i.Accept||e.accept||n.raw+", application/json;q=0.8, text/plain;q=0.5, */*;q=0.2","entity"in t?e.registry.lookup(n).otherwise(function(){if(e.permissive)return o;throw"mime-unknown"}).then(function(r){var i=e.client||t.originator;return u.attempt(r.write,t.entity,{client:i,request:t,mime:n,registry:e.registry}).otherwise(function(){throw"mime-serialization"}).then(function(e){return t.entity=e,t})}):t},response:function(t,e){if(!(t.headers&&t.headers["Content-Type"]&&t.entity))return t;var n=r.parse(t.headers["Content-Type"]);return e.registry.lookup(n).otherwise(function(){return o}).then(function(r){var i=e.client||t.request&&t.request.originator;return u.attempt(r.read,t.entity,{client:i,response:t,mime:n,registry:e.registry}).otherwise(function(e){throw t.error="mime-deserialization",t.cause=e,t}).then(function(e){return t.entity=e,t})})}})}.call(e,n,e,t))&&(t.exports=r)}(n(0))},37:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){var e=n(9),r=n(6);return e({init:function(t){return t.timeout=t.timeout||0,t.transient=!!t.transient,t},request:function(t,n){var i,o,u;if(i="timeout"in t?t.timeout:n.timeout,u="transient"in t?t.transient:n.transient,i<=0)return t;var s=this;return o=r.promise(function(e,n){s.timeout=setTimeout(function(){n({request:t,error:"timeout"}),t.cancel?(t.cancel(),u&&(t.canceled=!1)):u||(t.canceled=!0)},i)}),new e.ComplexRequest({request:t,abort:o})},response:function(t){return this.timeout&&(clearTimeout(this.timeout),delete this.timeout),t}})}.call(e,n,e,t))&&(t.exports=r)}(n(0))},38:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t){this.lookup=function(e){var n;return n="string"==typeof e?r.parse(e):e,t[n.raw]?t[n.raw]:t[n.type+n.suffix]?t[n.type+n.suffix]:t[n.type]?t[n.type]:t[n.suffix]?t[n.suffix]:i.reject(new Error('Unable to locate converter for mime "'+n.raw+'"'))},this.register=function(e,n){return t[e]=i.resolve(n),t[e]}}var r,i,o;return r=n(18),i=n(6),o=new e({}),o.register("application/json",n(39)),o}.call(e,n,e,t))&&(t.exports=r)}(n(0))},39:function(t,e,n){"use strict";var r;!function(i){void 0!==(r=function(t){function e(t,n){return{read:function(e){return JSON.parse(e,t)},write:function(t){return JSON.stringify(t,n)},extend:e}}return e()}.call(e,n,e,t))&&(t.exports=r)}(n(0))},9:function(t,e,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(o){void 0!==(r=function(t){function e(t){return t}function r(t){return t}function o(t){return t}function u(t){if(!(this instanceof u))return new u(t);p(this,t)}function s(t){var n,s,p,d;return t=t||{},n=t.init||e,s=t.request||r,p=t.success||t.response||o,d=t.error||function(){return l.reject((t.response||o).apply(this,arguments))},function(e,r){function o(t){var n,i;return n={},i={arguments:Array.prototype.slice.call(arguments),client:o},t="string"==typeof t?{path:t}:t||{},t.originator=t.originator||o,a(s.call(n,t,r,i),function(t){var o,s,c;return c=e,t instanceof u&&(s=t.abort,c=t.client||c,o=t.response,t=t.request),o=o||l.resolve(t).then(function(t){return l.resolve(c(t)).then(function(t){return p.call(n,t,r,i)},function(t){return d.call(n,t,r,i)})}),s?l.race([o,s]):o},function(t){return l.reject(t)})}return"object"===(void 0===e?"undefined":i(e))&&(r=e),"function"!=typeof e&&(e=t.client||c),r=n(r||{}),f(o,e)}}var c,a,f,l,p;return c=n(24),a=n(19),f=n(12),l=n(6),p=n(25),s.ComplexRequest=u,s.check=function(t){if(t.error)return l.reject(t)},s}.call(e,n,e,t))&&(t.exports=r)}(n(0))},91:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.interceptor=e.timeoutHandler=e.errorcodeHandler=e.mimeHandler=e.httpClient=void 0;var i=n(24),o=r(i),u=n(143),s=r(u),c=n(36),a=n(35),f=n(37),l=n(9),p=function(t){return o.default.setPlatformDefaultClient(s.default),o.default};e.httpClient=p,e.mimeHandler=c,e.errorcodeHandler=a,e.timeoutHandler=f,e.interceptor=l}},[218])});