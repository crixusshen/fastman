/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fastman"] = factory();
	else
		root["fastman"] = factory();
})(this, function() {
return webpackJsonpfastman([3],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : 为连接器的具体实现添加额外的方法(供实现类继承的基类)
 * 类扩展工具
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    // http-client

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        /**
         * 为不同的连接器实现类增加通用方法
         *
         * @param {function} 连接器的实现
         * @param {Client} [target] 当包括其他的连接器时使用
         * @returns {Client} 拥有额外方法的连接器
         */
        return function client(impl, target) {

            if (target) {

                /**
                 * @returns {Client} 目标连接器
                 */
                impl.skip = function skip() {
                    return target;
                };
            }

            /**
             * 为连接器增加拦截器的功能
             *
             * @param {Interceptor} 拦截器
             * @param [config] 拦截器相关配置
             * @returns {Client} 新的连接器
             */
            impl.addInterceptor = function addInterceptor(interceptor, config) {
                // 构造完interceptor对拦截方法进行调用
                return interceptor(impl, config);
            };

            return impl;
        };
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : XMLHttpRequest具体实现类
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define, global) {
    'use strict';

    // http-xhr

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var when, UrlBuilder, normalizeHeaderName, responsePromise, client, headerSplitRE;

        // when = require('when');
        when = __webpack_require__(6);
        client = __webpack_require__(12);
        UrlBuilder = __webpack_require__(129);
        normalizeHeaderName = __webpack_require__(25);
        responsePromise = __webpack_require__(18);

        // '\r\n'
        headerSplitRE = /[\r|\n]+/;

        function parseHeaders(raw) {
            // Set-Cookie将被移除
            var headers = {};

            if (!raw) {
                return headers;
            }

            raw.trim().split(headerSplitRE).forEach(function (header) {
                var boundary, name, value;
                boundary = header.indexOf(':');
                name = normalizeHeaderName(header.substring(0, boundary).trim());
                value = header.substring(boundary + 1).trim();
                if (headers[name]) {
                    if (Array.isArray(headers[name])) {
                        headers[name].push(value);
                    } else {
                        headers[name] = [headers[name], value];
                    }
                } else {
                    headers[name] = value;
                }
            });

            return headers;
        }

        function safeMixin(target, source) {
            Object.keys(source || {}).forEach(function (prop) {
                if (source.hasOwnProperty(prop) && prop in target) {
                    try {
                        target[prop] = source[prop];
                    } catch (e) {}
                }
            });

            return target;
        }

        return client(function xhr(request) {
            return responsePromise.promise(function (resolve, reject) {

                var client, method, url, headers, entity, headerName, response, XMLHttpRequest;

                request = typeof request === 'string' ? { path: request } : request || {};
                response = { request: request };

                if (request.canceled) {
                    response.error = 'precanceled';
                    reject(response);
                    return;
                }

                XMLHttpRequest = request.engine || global.XMLHttpRequest;
                if (!XMLHttpRequest) {
                    reject({ request: request, error: 'xhr-not-available' });
                    return;
                }

                entity = request.entity;
                request.method = request.method || (entity ? 'POST' : 'GET');
                method = request.method;
                url = new UrlBuilder(request.path || '', request.params).build();

                try {
                    client = response.raw = new XMLHttpRequest();

                    safeMixin(client, request.mixin);
                    client.open(method, url, true);
                    safeMixin(client, request.mixin);

                    // 解决携带跨域cookie
                    if (request.xhrFields) {
                        if (request.xhrFields.withCredentials) {
                            var withCredentials = request.xhrFields.withCredentials;
                            if (typeof withCredentials === 'string' && withCredentials.toLowerCase() === 'true') {
                                client.withCredentials = true;
                            } else if (typeof withCredentials === 'boolean' && withCredentials) {
                                client.withCredentials = true;
                            }
                        }
                    }

                    headers = request.headers;
                    for (headerName in headers) {
                        if (headerName === 'Content-Type' && headers[headerName] === 'multipart/form-data') {
                            continue;
                        }

                        client.setRequestHeader(headerName, headers[headerName]);
                    }

                    request.canceled = false;
                    request.cancel = function cancel() {
                        request.canceled = true;
                        client.abort();
                        //reject(response);
                    };

                    client.onreadystatechange = function () /* e */{
                        if (request.canceled) {
                            return;
                        }
                        if (client.readyState === (XMLHttpRequest.DONE || 4)) {
                            response.status = {
                                code: client.status,
                                text: client.statusText
                            };
                            response.headers = parseHeaders(client.getAllResponseHeaders());
                            response.entity = client.responseText;

                            if (response.status.code > 0) {
                                resolve(response);
                            } else {
                                setTimeout(function () {
                                    resolve(response);
                                }, 0);
                            }
                        }
                    };

                    try {
                        client.onerror = function (e) {
                            response.error = 'loaderror';
                            reject(response);
                        };
                    } catch (e) {
                        // IE 6不支持onerror，直接跳过
                    }

                    client.send(entity);
                } catch (e) {
                    response.error = 'loaderror';
                    reject(response);
                }
            });
        });
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0), typeof window !== 'undefined' ? window : void 0
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 :
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    var undef;

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var mixin, origin, urlRE, absoluteUrlRE, fullyQualifiedUrlRE;

        mixin = __webpack_require__(24);

        urlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i;
        absoluteUrlRE = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i;
        fullyQualifiedUrlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i;

        function buildUrl(template, params) {
            // internal builder to convert template with params.
            var url, name, queryStringParams, re;

            url = template;
            queryStringParams = {};

            if (params) {
                for (name in params) {
                    /*jshint forin:false */
                    re = new RegExp('\\{' + name + '\\}');
                    if (re.test(url)) {
                        url = url.replace(re, encodeURIComponent(params[name]), 'g');
                    } else {
                        queryStringParams[name] = params[name];
                    }
                }
                for (name in queryStringParams) {
                    url += url.indexOf('?') === -1 ? '?' : '&';
                    url += encodeURIComponent(name);
                    if (queryStringParams[name] !== null && queryStringParams[name] !== undefined) {
                        url += '=';
                        url += encodeURIComponent(queryStringParams[name]);
                    }
                }
            }
            return url;
        }

        function startsWith(str, test) {
            return str.indexOf(test) === 0;
        }

        function UrlBuilder(template, params) {
            if (!(this instanceof UrlBuilder)) {
                // invoke as a constructor
                return new UrlBuilder(template, params);
            }

            if (template instanceof UrlBuilder) {
                this._template = template.template;
                this._params = mixin({}, this._params, params);
            } else {
                this._template = (template || '').toString();
                this._params = params || {};
            }
        }

        UrlBuilder.prototype = {

            append: function append(template, params) {
                // TODO consider query strings and fragments
                return new UrlBuilder(this._template + template, mixin({}, this._params, params));
            },

            fullyQualify: function fullyQualify() {
                if (!location) {
                    return this;
                }
                if (this.isFullyQualified()) {
                    return this;
                }

                var template = this._template;

                if (startsWith(template, '//')) {
                    template = origin.protocol + template;
                } else if (startsWith(template, '/')) {
                    template = origin.origin + template;
                } else if (!this.isAbsolute()) {
                    template = origin.origin + origin.pathname.substring(0, origin.pathname.lastIndexOf('/') + 1);
                }

                if (template.indexOf('/', 8) === -1) {
                    // default the pathname to '/'
                    template = template + '/';
                }

                return new UrlBuilder(template, this._params);
            },

            isAbsolute: function isAbsolute() {
                return absoluteUrlRE.test(this.build());
            },

            isFullyQualified: function isFullyQualified() {
                return fullyQualifiedUrlRE.test(this.build());
            },

            isCrossOrigin: function isCrossOrigin() {
                if (!origin) {
                    return true;
                }
                var url = this.parts();
                return url.protocol !== origin.protocol || url.hostname !== origin.hostname || url.port !== origin.port;
            },

            parts: function parts() {
                /*jshint maxcomplexity:20 */
                var url, parts;
                url = this.fullyQualify().build().match(urlRE);
                parts = {
                    href: url[0],
                    protocol: url[1],
                    host: url[3] || '',
                    hostname: url[4] || '',
                    port: url[6],
                    pathname: url[7] || '',
                    search: url[8] || '',
                    hash: url[9] || ''
                };
                parts.origin = parts.protocol + '//' + parts.host;
                parts.port = parts.port || (parts.protocol === 'https:' ? '443' : parts.protocol === 'http:' ? '80' : '');
                return parts;
            },

            build: function build(params) {
                return buildUrl(this._template, mixin({}, this._params, params));
            },

            toString: function toString() {
                return this.build();
            }

        };

        origin = location ? new UrlBuilder(location.href).parts() : undef;

        return UrlBuilder;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : MIME转化基类
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/11
 * 修改日期 : 16/3/11
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    var undef;

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        /**
         * 对MIME TYPE进行转化
         *
         * @param {string} MIME TYPE
         * @return {{
        *   {string} [raw] 原始MIME TYPE
        *   {string} [type] 子类型
        *   {string} [suffix] MIME前缀
        *   {Object} [params] 键值对属性对
        * }}
         */
        function parse(mime) {
            var params, type;

            params = mime.split(';');
            type = params[0].trim().split('+');

            return {
                raw: mime,
                type: type[0],
                suffix: type[1] ? '+' + type[1] : '',
                params: params.slice(1).reduce(function (params, pair) {
                    pair = pair.split('=');
                    params[pair[0].trim()] = pair[1] ? pair[1].trim() : undef;
                    return params;
                }, {})
            };
        }

        return {
            parse: parse
        };
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : Promise构建器，内部resolver是一个异步的方法体
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var when = __webpack_require__(6),
            normalizeHeaderName = __webpack_require__(25);

        function property(promise, name) {
            return promise.then(function (value) {
                return value && value[name];
            }, function (value) {
                return when.reject(value && value[name]);
            });
        }

        function entity() {
            /*jshint validthis:true */
            return property(this, 'entity');
        }

        function status() {
            /*jshint validthis:true */
            return property(property(this, 'status'), 'code');
        }

        function headers() {
            /*jshint validthis:true */
            return property(this, 'headers');
        }

        function header(headerName) {
            /*jshint validthis:true */
            headerName = normalizeHeaderName(headerName);
            return property(this.headers(), headerName);
        }

        function follow(rels) {
            /*jshint validthis:true */
            rels = [].concat(rels);
            return make(when.reduce(rels, function (response, rel) {
                if (typeof rel === 'string') {
                    rel = { rel: rel };
                }
                if (typeof response.entity.clientFor !== 'function') {
                    throw new Error('Hypermedia response expected');
                }
                var client = response.entity.clientFor(rel.rel);
                return client({ params: rel.params });
            }, this));
        }

        function make(promise) {
            promise.status = status;
            promise.headers = headers;
            promise.header = header;
            promise.entity = entity;
            promise.follow = follow;
            return promise;
        }

        function responsePromise() {
            // 2016-04-03 原来依赖于when.js的语法。目前when由自己来实现
            //return make(when.apply(when, arguments));

            var args = arguments;
            return when.promise(function (resolved, rejected) {
                try {
                    var res = args[0];
                    resolved(res);
                } catch (ex) {
                    rejected(ex);
                }
            }).then(args[1]).otherwise(args[2]);
        }

        responsePromise.make = make;
        responsePromise.reject = function (val) {
            return make(when.reject(val));
        };
        responsePromise.promise = function (func) {
            return make(when.promise(func));
        };

        return responsePromise;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : 连接器的实现抽象层：默认支持XMLHttpRequest
 * 以后还可以扩展不同的实现，例如jsonp、node
 * @Client
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
  'use strict';

  var undef;

  // http-default
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    /**
     * HTTP request
     *
     * @field {string} [method='GET'] HTTP method, commonly GET, POST, PUT, DELETE or HEAD
     * @field {string|UrlBuilder} [path=''] path template with optional path variables
     * @field {Object} [params] parameters for the path template and query string
     * @field {Object} [headers] custom HTTP headers to send, in addition to the clients default headers
     * @field [entity] the HTTP entity, common for POST or PUT requests
     * @field {boolean} [canceled] true if the request has been canceled, set by the client
     * @field {Function} [cancel] cancels the request if invoked, provided by the client
     * @field {Client} [originator] the client that first handled this request, provided by the interceptor
     *
     * @class Request
     */

    /**
     * HTTP response
     *
     * @field {Object} [request] the request object as received by the root client
     * @field {Object} [raw] the underlying request object, like XmlHttpRequest in a browser
     * @field {number} [status.code] status code of the response (i.e. 200, 404)
     * @field {string} [status.text] status phrase of the response
     * @field {Object] [headers] response headers hash of normalized name, value pairs
     * @field [entity] the response body
     *
     * @class Response
     */

    /**
     * HTTP client
     *
     * @field {function} 为默认连接器的function添加拦截器
     *
     * @param {Request} HTTP请求
     * @returns {ResponsePromise<Response>} 一个promise处理HTTP响应
     *
     * @class Client
     */

    /**
     * 对请求器进行promise，使逻辑异步
     * Extended when.js
     *
     * @method entity promise for the HTTP entity
     * @method status promise for the HTTP status code
     * @method headers promise for the HTTP response headers
     * @method header promise for a specific HTTP response header
     *
     * @class ResponsePromise
     * @extends Promise
     */

    var client, target, platformDefault;

    // 所有连接器的基类
    client = __webpack_require__(12);

    /**
     * 做一次默认连接器的请求
     * @param {Request} HTTP请求
     * @returns {Promise<Response>} 一个promise处理HTTP响应
     */
    function defaultClient() {
      // target是一个默认连接器的实现类
      return target.apply(undef, arguments);
    }

    /**
     * 改变默认连接器
     * @param {Client} 新的默认连接器
     */
    defaultClient.setDefaultClient = function setDefaultClient(client) {
      target = client;
    };

    /**
     * 获取当前默认连接器的引用
     * @returns {Client} 默认连接器
     */
    defaultClient.getDefaultClient = function getDefaultClient() {
      return target;
    };

    /**
     * 重置默认连接器
     */
    defaultClient.resetDefaultClient = function resetDefaultClient() {
      target = platformDefault;
    };

    /**
     * 设置当前平台的默认连接器
     */
    defaultClient.setPlatformDefaultClient = function setPlatformDefaultClient(client) {
      if (platformDefault) {
        throw new Error('Unable to redefine platformDefaultClient');
      }
      target = platformDefault = client;
    };

    return client(defaultClient);
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 :
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var empty = {};

        function mixin(dest /*, sources... */) {
            var i, l, source, name;

            if (!dest) {
                dest = {};
            }
            for (i = 1, l = arguments.length; i < l; i += 1) {
                source = arguments[i];
                for (name in source) {
                    if (!(name in dest) || dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name])) {
                        dest[name] = source[name];
                    }
                }
            }

            return dest; // Object
        }

        return mixin;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 :
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/9
 * 修改日期 : 16/3/9
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        function normalizeHeaderName(name) {
            return name.toLowerCase().split('-').map(function (chunk) {
                return chunk.charAt(0).toUpperCase() + chunk.slice(1);
            }).join('-');
        }

        return normalizeHeaderName;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : HTTP错误码抛出异常模块
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/8
 * 修改日期 : 16/4/8
 * 版权所有 : 东方证券股份有限公司
 **/

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var interceptor, when;

        interceptor = __webpack_require__(9);
        when = __webpack_require__(6);

        return interceptor({
            init: function init(config) {
                config.code = config.code || 400;
                return config;
            },
            response: function response(_response, config) {
                //interceptor.check(response);
                if (_response.status && _response.status.code >= config.code) {
                    return when.reject({ response: _response, error: 'httperror' });
                }
                return _response;
            }
        });
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : mime处理器，通过不同的mime进行格式转换
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/10
 * 修改日期 : 16/3/10
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var interceptor, mime, registry, noopConverter, when;

        interceptor = __webpack_require__(9);
        mime = __webpack_require__(17);
        registry = __webpack_require__(36);
        when = __webpack_require__(6);

        noopConverter = {
            read: function read(obj) {
                return obj;
            },
            write: function write(obj) {
                return obj;
            }
        };

        return interceptor({
            init: function init(config) {
                config.registry = config.registry || registry;
                return config;
            },
            request: function request(_request, config) {
                var type, headers;

                headers = _request.headers || (_request.headers = {});
                type = mime.parse(headers['Content-Type'] = headers['Content-Type'] || config.mime || 'text/plain');
                headers.Accept = headers.Accept || config.accept || type.raw + ', application/json;q=0.8, text/plain;q=0.5, */*;q=0.2';

                if (!('entity' in _request)) {
                    return _request;
                }

                return config.registry.lookup(type).otherwise(function () {
                    // 转化器失败
                    if (config.permissive) {
                        return noopConverter;
                    }
                    throw 'mime-unknown';
                }).then(function (converter) {
                    var client = config.client || _request.originator;

                    return when.attempt(converter.write, _request.entity, { client: client, request: _request, mime: type, registry: config.registry }).otherwise(function () {
                        throw 'mime-serialization';
                    }).then(function (entity) {
                        _request.entity = entity;
                        return _request;
                    });
                });
            },
            response: function response(_response, config) {
                if (!(_response.headers && _response.headers['Content-Type'] && _response.entity)) {
                    return _response;
                }

                var type = mime.parse(_response.headers['Content-Type']);

                return config.registry.lookup(type).otherwise(function () {
                    return noopConverter;
                }).then(function (converter) {
                    var client = config.client || _response.request && _response.request.originator;

                    return when.attempt(converter.read, _response.entity, { client: client, response: _response, mime: type, registry: config.registry }).otherwise(function (e) {
                        _response.error = 'mime-deserialization';
                        _response.cause = e;
                        throw _response;
                    }).then(function (entity) {
                        _response.entity = entity;
                        return _response;
                    });
                });
            }
        });
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : 超时模块
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/8
 * 修改日期 : 16/4/8
 * 版权所有 : 东方证券股份有限公司
 **/

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var interceptor = __webpack_require__(9);
        var when = __webpack_require__(6);

        return interceptor({
            init: function init(config) {
                // 默认超时模式没有设置为0
                config.timeout = config.timeout || 0;
                // 默认短暂链接为false
                config.transient = !!config.transient;
                return config;
            },
            request: function request(_request, config) {
                // 构建timeout, transient和abortTrigger属性，其中abortTrigger是一个可能被放弃执行的xhr钩子
                var timeout, abortTrigger, transient;
                timeout = 'timeout' in _request ? _request.timeout : config.timeout;
                transient = 'transient' in _request ? _request.transient : config.transient;
                // 如果超时属性设置为负整数，则直接返回request
                if (timeout <= 0) {
                    return _request;
                }

                // 构建超时（允许放弃请求）xhr钩子延时对象
                var self = this;
                abortTrigger = when.promise(function (resolve, reject) {
                    self.timeout = setTimeout(function () {
                        // 一旦xhr超时则将request返回给reject并标识是一个超时原因
                        reject({ request: _request, error: 'timeout' });
                        // 断开连接
                        if (_request.cancel) {
                            _request.cancel();
                            if (transient) {
                                _request.canceled = false;
                            }
                        } else if (!transient) {
                            _request.canceled = true;
                        }
                    }, timeout);
                });

                return new interceptor.ComplexRequest({ request: _request, abort: abortTrigger });
            },
            response: function response(_response) {
                // 一旦有服务端响应，清除包装类中已定义的超时器
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    delete this.timeout;
                }
                return _response;
            }
        });
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : MIME发现者，设计源自于dubbo中的服务发现者
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/11
 * 修改日期 : 16/3/11
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var mime, when, registry;

        mime = __webpack_require__(17);
        when = __webpack_require__(6);

        function Registry(mimes) {

            /**
             * 从MIME TYPE中查找转换器
             *
             * @param {string} MIME TYPE
             * @return 一个promise类型的转化器
             */
            this.lookup = function (type) {
                var parsed;

                parsed = typeof type === 'string' ? mime.parse(type) : type;

                if (mimes[parsed.raw]) {
                    return mimes[parsed.raw];
                }
                if (mimes[parsed.type + parsed.suffix]) {
                    return mimes[parsed.type + parsed.suffix];
                }
                if (mimes[parsed.type]) {
                    return mimes[parsed.type];
                }
                if (mimes[parsed.suffix]) {
                    return mimes[parsed.suffix];
                }

                // MIME类型解析失败才会执行reject
                return when.reject(new Error('Unable to locate converter for mime "' + parsed.raw + '"'));
            };

            /**
             * 针对MIME TYPE注册一个自定义转化器,并@extends Promise
             *
             * @param {string} MIME TYPE
             * @param [Converter] 转化器实例
             * @return 返回一个promise类型的Converter实例
             *
             */
            this.register = function (type, converter) {
                // 2016-04-03 原来使用when.js的写法，目前自己来实现
                //mimes[type] = when(converter);
                mimes[type] = when.resolve(converter);
                return mimes[type];
            };
        }

        registry = new Registry({});

        // serializers
        registry.register('application/json', __webpack_require__(37));

        return registry;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * 文件用途说明 : JSON转化器/序列化和反序列化
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/11
 * 修改日期 : 16/3/11
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        /**
         * JSON转化器
         *
         * @param {function} [reviver=undefined] 自定义JSON.parse
         * @param {function|Array} [replacer=undefined] 自定义JSON.stringify
         */
        function createConverter(reviver, replacer) {
            return {

                read: function read(str) {
                    return JSON.parse(str, reviver);
                },

                write: function write(obj) {
                    return JSON.stringify(obj, replacer);
                },

                extend: createConverter

            };
        }

        return createConverter();
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 文件用途说明 : 拦截器基类
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/3/10
 * 修改日期 : 16/3/10
 * 版权所有 : 东方证券股份有限公司
 **/
(function (define) {
    'use strict';

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var defaultClient, responsePromise, client, when, mixin;

        defaultClient = __webpack_require__(23);
        responsePromise = __webpack_require__(18);
        client = __webpack_require__(12);
        when = __webpack_require__(6);
        mixin = __webpack_require__(24);

        /**
         * 增加拦截器特性的连接器
         *
         * @param {Client} [target] 连接器实例
         * @param {Object} [config] 连接器的配置
         * @returns {Client} 具有拦截器功能的连接器实例
         *
         * @class Interceptor
         */

        function defaultInitHandler(config) {
            return config;
        }

        function defaultRequestHandler(request /*, config, meta */) {
            return request;
        }

        function defaultResponseHandler(response /*, config, meta */) {
            return response;
        }

        //function race(promisesOrValues) {
        //    return when.promise(function (resolve, reject) {
        //        promisesOrValues.forEach(function (promiseOrValue) {
        //            when(promiseOrValue, resolve, reject);
        //        });
        //    });
        //}

        /**
         * 深复制
         * @param properties 需要复制的属性
         * @returns {ComplexRequest}
         * @constructor
         */
        function ComplexRequest(properties) {
            if (!(this instanceof ComplexRequest)) {
                return new ComplexRequest(properties);
            }
            mixin(this, properties);
        }

        /**
         * 拦截器基类
         *
         * @param {Function} [handlers.init] 初始化
         * @param {Function} [handlers.request] 请求前
         * @param {Function} [handlers.response] 响应前
         * @param {Function} [handlers.success] 成功响应
         * @param {Function} [handlers.error] 发生异常时
         * @param {Function} [handlers.client] 连接器
         *
         * @returns {Interceptor}
         */
        function interceptor(handlers) {

            var initHandler, requestHandler, successResponseHandler, errorResponseHandler;

            handlers = handlers || {};

            // 为每一分拦截器副本wrap对应的触发方法，如果没有则采用默认方法
            initHandler = handlers.init || defaultInitHandler;
            requestHandler = handlers.request || defaultRequestHandler;
            successResponseHandler = handlers.success || handlers.response || defaultResponseHandler;
            errorResponseHandler = handlers.error || function () {
                // 2016-04-03 去除when.js的实现，替换成自己实现的方式
                //return when((handlers.response || defaultResponseHandler).apply(this, arguments), when.reject, when.reject);
                return when.reject((handlers.response || defaultResponseHandler).apply(this, arguments));
            };

            // 拦截器构造函数
            return function (target, config) {

                // 拦截器处理代码块
                if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
                    config = target;
                }
                if (typeof target !== 'function') {
                    target = handlers.client || defaultClient;
                }

                // 拦截器初始化方法调用
                config = initHandler(config || {});

                // 拦截器interceptor构造器:开始递归执行所分配的拦截器,执行顺序与声明顺序相反，即后声明先拦截
                function interceptedClient(request) {
                    var context, meta;
                    context = {};
                    meta = { 'arguments': Array.prototype.slice.call(arguments), client: interceptedClient };
                    request = typeof request === 'string' ? { path: request } : request || {};
                    request.originator = request.originator || interceptedClient;
                    return responsePromise(requestHandler.call(context, request, config, meta), function (request) {
                        var response, abort, next;
                        next = target;
                        // 如果是复杂类型请求则需要开展竞争模式
                        if (request instanceof ComplexRequest) {
                            // 一个被延时的超时defer
                            abort = request.abort;
                            next = request.client || next;
                            response = request.response;
                            request = request.request;
                        }

                        response = response || when.resolve(request).then(function (request) {
                            return when.resolve(next(request)).then(function (response) {
                                return successResponseHandler.call(context, response, config, meta);
                            }, function (response) {
                                return errorResponseHandler.call(context, response, config, meta);
                            });
                        });
                        return abort ? when.race([response, abort]) : response;
                    }, function (error) {
                        //return when.reject({ request: request, error: error });
                        return when.reject(error);
                    });
                }

                return client(interceptedClient, target);
            };
        }

        interceptor.ComplexRequest = ComplexRequest;

        interceptor.check = function (response) {
            if (response.error) {
                return when.reject(response);
            }
        };

        return interceptor;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interceptor = exports.timeoutHandler = exports.errorcodeHandler = exports.mimeHandler = exports.httpClient = undefined;

var _default = __webpack_require__(23);

var _default2 = _interopRequireDefault(_default);

var _xhr = __webpack_require__(128);

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /**
//  * 文件用途说明 : HTTP入口文件，默认设置了HTTP连接器实例
//  *
//  * 项目名称 : dfzq-obboot-mobi
//  * 作者姓名 : crixusshen
//  * 创建日期 : 16/3/9
//  * 修改日期 : 16/3/9
//  * 版权所有 : 东方证券股份有限公司
//  **/
var mimeHandler = __webpack_require__(34);
var errorcodeHandler = __webpack_require__(33);
var timeoutHandler = __webpack_require__(35);
var interceptor = __webpack_require__(9);

var httpClient = function httpClient(_) {
    _default2.default.setPlatformDefaultClient(_xhr2.default);
    return _default2.default;
};

exports.httpClient = httpClient;
exports.mimeHandler = mimeHandler;
exports.errorcodeHandler = errorcodeHandler;
exports.timeoutHandler = timeoutHandler;
exports.interceptor = interceptor;

/***/ })

},[216]);
});