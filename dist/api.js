module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(18);
__webpack_require__(19);
// 导出模块
module.exports = util;
// 创建最后总和
var createNewidSumLast = 0;
// 创建最后时间
var createNewidTimeLast = 0;
// 创建请求id
Object.assign(util, {
  createNewPid: function createNewid(is10) {
    var r;
    if (createNewidTimeLast !== util.time()) {
      createNewidTimeLast = util.time();
      createNewidSumLast = 0;
    }
    r = createNewidTimeLast.toString() + (++createNewidSumLast).toString();
    // 使用36进制
    if (!is10) {
      r = parseInt(r, 10).toString(36);
    }
    return r;
  },
  // 生成guid
  createGuid: function createGuid(s) {
    return (s || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
});

// 生成请求id
Object.assign(util, {
  // 生成请求id
  createRequestId: function createRequestId() {
    var pid, rid, ridLen, ridT, ridNew, i;
    // 获取16进制的 pid
    pid = Number(util.createNewPid(true)).toString(16);
    // 种子
    rid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    ridNew = '';
    for (i = rid.length - 1; i >= 0; i--) {
      ridT = rid[i];
      if (ridT === 'x') {
        ridLen = pid.length;
        ridT = pid ? pid.charAt(ridLen - 1) : 'x';
        pid = pid.substr(0, ridLen - 1);
      }
      ridNew = ridT + ridNew;
    }
    rid = util.createGuid(ridNew);
    i = ridNew = ridT = ridLen = pid = void 0;
    return rid;
  }
});

// 时间工具
Object.assign(util, {
  // 获取当前时间开始
  now: function now() {
    return new Date().getTime();
  },
  // 获取php的时间戳
  time: function time() {
    return parseInt(util.now() / 1000);
  }
});

// 基本判断
Object.assign(util, {
  // 判断是一个方法
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  },
  // 判断是否为一个数组
  isArray: function isArray() {
    return Array.isArray.apply(this, arguments);
  },
  isNumber: function isNumber(obj) {
    return (typeof obj === 'string' || typeof obj === 'number') && !util.isArray(obj) && obj - parseFloat(obj) >= 0;
  },
  // 判断是否一个标准的global
  isGlobal: function isGlobal(obj) {
    return obj !== void 0 && obj === obj.global;
  },
  // 类似php里面的inArray
  inArray: function inArray(a, b) {
    if (!util.isArray(b)) {
      return false;
    }
    for (var i in b) {
      if (b[i] === a) {
        return true;
      }
    }
    return false;
  }
});

// 基本工具
Object.assign(util, {
  // 克隆
  clone: function clone(myObj) {
    var i, myNewObj;
    if (!(myObj && (typeof myObj === 'undefined' ? 'undefined' : _typeof(myObj)) === 'object')) {
      return myObj;
    }
    if (myObj === null || myObj === undefined) {
      return myObj;
    }
    myNewObj = '';
    if (Array.isArray(myObj)) {
      myNewObj = [];
      for (i = 0; i < myObj.length; i++) {
        myNewObj.push(myObj[i]);
      }
    } else if ((typeof myObj === 'undefined' ? 'undefined' : _typeof(myObj)) === 'object') {
      myNewObj = {};
      if (myObj.constructor && myObj.constructor !== Object) {
        myNewObj = myObj;
        // 防止克隆ie下克隆  Element 出问题
      } else if (myObj.innerHTML !== undefined && myObj.innerText !== undefined && myObj.tagName !== undefined && myObj.tabIndex !== undefined) {
        myNewObj = myObj;
      } else {
        for (i in myObj) {
          myNewObj[i] = clone(myObj[i]);
        }
      }
    }
    return myNewObj;
  },
  // 复制对象，通过制定key
  copyObjByKey: function copyObjByKey(oldObj, newObj, keys) {
    keys = keys || [];
    keys.forEach(function (key) {
      oldObj[key] = newObj[key] || oldObj[key];
    });
  },
  // 设置错误id
  setErrorId: function setErrorId(errorId, error) {
    error.errorId = errorId;
    error.error_id = errorId;
    return error;
  },
  // 参数强转数组
  argsToArray: function argsToArray(args) {
    return Array.prototype.slice.call(args);
  }
});

// nextTick
Object.assign(util, {
  nextTick: __webpack_require__(13)
});

// urlEncode 编码
Object.assign(util, {
  // 编码对照数组表
  kEscapedMap: {
    '!': '%21',
    '\'': '%27',
    '(': '%28',
    ')': '%29',
    '*': '%2A'
  },
  // 编码
  urlEncode: function urlEncode(string, encodingSlash) {
    var result = encodeURIComponent(string);
    result = result.replace(/[!'()*]/g, function ($1) {
      return util.kEscapedMap[$1];
    });
    if (encodingSlash === false) {
      result = result.replace(/%2F/gi, '/');
    }
    return result;
  },
  // path编码
  urlEncodeExceptSlash: function urlEncodeExceptSlash(value) {
    return util.urlEncode(value, false);
  }
});
// 对象序列化
Object.assign(util, {
  // 编码
  buildParams: function buildParams(data, isQuery) {
    var r = util._buildParamsToArray(data, '').join('&');
    if (isQuery) {
      r = r.replace(/%20/gi, '+');
    }
    return r;
  },

  _buildParamsToArray: function _buildParamsToArray(data, prefix) {
    var r = [];
    var i, key, keyt, value;
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      // 数组
      if (util.isArray(data)) {
        for (i = 0; i < data.length; i++) {
          // 值
          value = data[i];
          if (value === void 0) continue;
          // 键
          keyt = util._buildParamsAddPrefix(i, prefix, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object');
          // 递归处理对象和数组
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            // 插入数组
            r.push.apply(r, util._buildParamsToArray(value, keyt));
          } else {
            // 插入数组
            r.push(util.urlEncode(keyt) + '=' + util.urlEncode(value));
          }
        }
      } else {
        for (key in data) {
          if (!Object.hasOwnProperty.call(data, key)) {
            continue;
          }
          // 值
          value = data[key];
          if (value === void 0) continue;
          // 键
          keyt = util._buildParamsAddPrefix(key, prefix);
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            // 插入数组
            r.push.apply(r, util._buildParamsToArray(value, keyt));
          } else {
            // 插入数组
            r.push(util.urlEncode(keyt) + '=' + util.urlEncode(value));
          }
        }
      }
    }
    return r;
  },
  _buildParamsAddPrefix: function _buildParamsAddPrefix(key, prefix, isNotArray) {
    if (prefix) {
      return prefix + '[' + (isNotArray !== false ? key : '') + ']';
    } else {
      return key;
    }
  }
});

function util() {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 导出模块

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = ddvRestFulApi;
// 工具
var util = __webpack_require__(0);
var url = __webpack_require__(5);
var request = __webpack_require__(2);
var sign = __webpack_require__(4);
var EventEmitter = __webpack_require__(9);
Object.assign(ddvRestFulApi, EventEmitter.prototype, new EventEmitter());
// 方法
function ddvRestFulApi(path, req, res) {
  var promise = new Promise(function (resolve, reject) {
    new Promise(function (resolve, reject) {
      // 下一进程运行
      util.nextTick(function () {
        // 这个直接提交，因为该操作仅仅是为了延迟
        resolve();
        // 回收
        resolve = reject = void 0;
      });
    }).then(function () {
      // 初始化接口
      return apiPromiseInit(promise, path, req, res);
    }).then(function () {
      // 回收资源
      path = req = res = void 0;
      // api接口运行
      return apiPromiseRun(promise);
    }).then(function (_request) {
      return new Promise(function (resolve, reject) {
        var r = null;
        var e = null;
        var res = _request.serverRes;
        try {
          r = JSON.parse(res.body);
        } catch (e1) {
          e = e1;
          e.body = res.body;
          console.log(e.body);
        }
        if (e) {
          e.statusCode = res.statusCode;
          e.error_id = res.status;
          e.message = res.status || 'Unknow Error';
          e.body = res.body;
          reject(e);
        } else if (r) {
          if (r.state) {
            r.statusCode = r.statusCode || r.code || res.statusCode;
            r.error_id = r.error_id || res.status;
            r.message = r.message || r.msg || res.status || 'Unknow Error';
            r.body = res.body;
            resolve(r);
          } else {
            e = new Error(r.message || r.msg || res.status || 'Unknow Error');
            e.statusCode = r.statusCode || r.code || res.statusCode;
            e.error_id = r.error_id || res.status;
            e.message = r.message || r.msg || res.status || 'Unknow Error';
            e.body = res.body;
            reject(e);
          }
        }
        _request.destroy();
        _request = resolve = reject = r = e = res = void 0;
      });
    }).then(function (res) {
      util.nextTick(function () {
        util.isFunction(promise.destroy) && promise.destroy();
        // 回收资源
        promise = void 0;
      });
      return res;
    })
    // 绑定回调
    .then(resolve, reject);
    // 回收
    resolve = reject = void 0;
  });
  return apiPromiseBaseInit(promise);
}
function apiPromiseRun(promise) {
  return sign(promise.options).then(function (options) {
    return request(options);
  }).catch(function (e) {
    if (parseInt(promise.options.serverRes.statusCode) === 403) {
      promise.options.isSessionInit = true;
      // 重新运行一次
      return apiPromiseRun(promise);
    } else {
      // 还是原路抛出错误
      return Promise.reject(e);
    }
  });
}
function apiPromiseInit(promise, path, req, res) {
  var options = promise.options;
  return new Promise(function (resolve, reject) {
    if ((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object') {
      promise.path(path.path);
      promise.sendData(path.data);
      promise.headers(path.headers);
      promise.method(path.method);
      resolve();
    } else if (typeof path === 'string') {
      promise.path(path || '/');
      resolve();
    } else {
      var e = new Error('method type error');
      e.error_id = 'UNKNOW_ERROR';
      reject(e);
    }
  }).then(function () {
    // 设定请求对象
    if (req && req.req && req.res) {
      promise.context(req);
    } else {
      promise.req(req);
      promise.res(res);
    }
  }).then(function () {
    options.serverRes = Object.create(null);
    options.serverRes.statusCode = 0;
    options.serverRes.status = 'UNKNOW_ERROR';
    options.serverRes.body = '';
  }).then(function () {
    options.method = options.method || 'GET';
    options.queryObject = options.queryObject || Object.create(null);
    if (_typeof(options.query) === 'object') {
      options.query = '';
      Object.assign(options.queryObject, options.query);
    }
    options.path = options.path || '/';
    options.path = (options.path.charAt(0) === '/' ? '' : '/') + options.path;
    options.query = (url('query', options.path) || '').toString();
    options.path = url('path', options.path) || '/';
    options.baseUrl = options.baseUrl || ddvRestFulApi.baseUrl || '';
    options.isServerNode = options.req && options.res && true || false;

    options.host = url('hostname', options.baseUrl);
    options.port = url('port', options.baseUrl);
    options.protocol = url('protocol', options.baseUrl);
    options.request_id = options.request_id || util.createRequestId();
  }).then(function removeUndefinedValue() {
    var key;
    for (key in options.queryObject) {
      if (options.queryObject[key] === void 0) {
        delete options.queryObject[key];
      }
    }
    for (key in options.data) {
      if (options.data[key] === void 0) {
        delete options.data[key];
      }
    }
    for (key in options.headers) {
      if (options.headers[key] === void 0) {
        delete options.headers[key];
      }
    }
  }).then(function buildParamsRun() {
    var str;
    if (options.queryObject) {
      str = util.buildParams(options.queryObject, true);
      if (str) {
        options.query += (options.query.length > 0 ? '&' : '') + str;
      }
    }
    if (options.method === 'GET') {
      str = util.buildParams(options.data, true);
      if (str) {
        options.query += (options.query.length > 0 ? '&' : '') + str;
      }
    } else {
      options.body = util.buildParams(options.data);
    }
    options = void 0;
  });
}

function apiPromiseBaseInit(promise) {
  // 基本参数
  Object.assign(promise, {
    options: {
      path: '/',
      method: 'GET',
      headers: Object.create(null),
      data: Object.create(null),
      query: Object.create(null),
      req: null,
      res: null
    }
  });
  // 基本方法
  Object.assign(promise, {
    headers: function headers(headers) {
      this.options.headers = this.options.headers || Object.create(null);
      Object.assign(this.options.headers, headers || Object.create(null));
      return this;
    },
    path: function path(path) {
      this.options.path = (path || '/').toString();
      return this;
    },
    method: function method(method) {
      this.options.method = (method || this.options.method || 'GET').toString().toUpperCase();
      return this;
    },
    // 发送别名
    send: function sendData(data) {
      this.options.data = this.options.data || Object.create(null);
      Object.assign(this.options.data, data || Object.create(null));
      return this;
    },
    query: function query(data) {
      this.options.query = this.options.query || Object.create(null);
      Object.assign(this.options.query, data || Object.create(null));
      return this;
    },
    req: function req(req) {
      this.options.req = req || this.options.req || null;
    },
    res: function res(res) {
      this.options.res = res || this.options.res || null;
    },
    context: function context(context) {
      if (context.req && context.res) {
        this.req(context.req);
        this.res(context.res);
      } else if (context.requests && context.response) {
        this.req(context.requests);
        this.res(context.response);
      }
    },
    // 销毁
    destroy: function destroy() {
      util.nextTick.call(this, function () {
        var key;
        for (key in this) {
          if (!Object.hasOwnProperty.call(this, key)) continue;
          delete this[key];
        }
        key = void 0;
      });
    }
  });
  // 基本方法
  Object.assign(promise, {
    // 发送别名
    sendData: promise.send,
    // 成功别名
    success: promise.then,
    // 错误别名
    error: promise.catch,
    // 失败别名
    fail: promise.catch
  });
  return promise;
}

// 继承使用 Promise 的继承
ddvRestFulApi.prototype = Promise.prototype;
// 默认导出支持 - 允许在 TypeScript 中使用默认导入语法
ddvRestFulApi['default'] = ddvRestFulApi;
// 复制 Promise 的一些方法
'all race reject resolve'.split(' ').forEach(function (key) {
  ddvRestFulApi[key] = function () {
    return Promise[key].apply(Promise, arguments);
  };
});
// 支持五大请求
'get post put patch del delete'.split(' ').forEach(function (key) {
  if (!key) {
    key = 'get';
  }
  ddvRestFulApi[key] = function ddvRestFulApiMethod() {
    key = key === 'del' ? 'delete' : key;
    return ddvRestFulApi.apply(ddvRestFulApi, arguments).method(key.toUpperCase());
  };
});

Object.assign(ddvRestFulApi, {
  // 默认安装一下方法
  utilInitKey: 'api get post put del delete data'.split(' '),
  // 安装模块
  util: function apiUtil(util) {
    // 扩展请求接口
    ddvRestFulApi.utilInitKey.forEach(function (key) {
      util[key] = key === 'api' ? ddvRestFulApi : ddvRestFulApi[key];
    });
    // 承诺
    util.Promise = util.Promise || Promise;
  },
  // 设置baseUrl
  setBaseUrl: function setBaseUrl(baseUrl) {
    ddvRestFulApi.baseUrl = baseUrl;
  }

});

__webpack_require__(11);
// 对外扩张接口
__webpack_require__(10);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function runRequest(o) {
  return ajax(o).then(function (serverRes) {
    Object.assign(o.serverRes, serverRes);
    var e;
    if (o.serverRes.statusCode >= '200' && o.serverRes.statusCode < '300') {
      return o;
    } else {
      o.serverRes.message = o.serverRes.message || o.serverRes.msg || o.serverRes.status || 'Unknow Error';
      e = new Error(o.serverRes.message);
      e.statusCode = o.serverRes.statusCode;
      e.error_id = e.error_id || o.serverRes.error_id || o.serverRes.status;
      e.message = o.serverRes.message || o.serverRes.status || 'Unknow Error';
      e.body = o.serverRes.body;
      throw e;
    }
  }).catch(function (e) {
    Object.assign(o.serverRes, e);
    return Promise.reject(e);
  });
};
var ajax = __webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global localStorage sessionStorage VS_COOKIEDM */
// 导出 session 模块
module.exports = session;
// 工具
var util = __webpack_require__(0);
// api模块
var api = __webpack_require__(1);
// url模块
var url = __webpack_require__(5);
// 签名模块
var sign = __webpack_require__(4);
// 请求模块
var request = __webpack_require__(2);
// 编码加密模块
var cryptoJsCore = __webpack_require__(7);
// 编码base64模块
var cryptoJsBase64 = __webpack_require__(8);
// var cryptoJsUtf8 =
__webpack_require__(15);
var getSessionTrueCbs = [];
var getSessionInitCbs = [];
var _getSessionTrueDataCbsIng = false;
var _getSessionInitCbsIng = false;
// 对外api接口模块
Object.assign(session, {
  // 设置是否使用长存储
  setLongStorage: function setLongStorage(isUseLong) {
    session.isLongStorage = Boolean(isUseLong);
  },
  // 设置是否使用长存储
  setSessionInitTrySum: function setSessionInitTrySum(sum) {
    session.initTrySum = sum || session.initTrySum;
  },
  // 设置初始化session的path
  setSessionInitPath: function setSessionInitPath(path) {
    session.sessionInitPath = path || session.sessionInitPath;
  }
});
// 对外 cookie 编码 接口模块
Object.assign(session, {
  // 解码
  unescape: function (_unescape) {
    function unescape(_x) {
      return _unescape.apply(this, arguments);
    }

    unescape.toString = function () {
      return _unescape.toString();
    };

    return unescape;
  }(function (str) {
    return unescape(str || '');
  }),
  // 编码
  escape: function (_escape) {
    function escape(_x2) {
      return _escape.apply(this, arguments);
    }

    escape.toString = function () {
      return _escape.toString();
    };

    return escape;
  }(function (str) {
    return escape(str || '');
  })
});
Object.assign(session, {
  // 会话初始化
  init: function init(o) {
    o = o || Object.create(null);
    return new Promise(function (resolve, reject) {
      var isRun = false;
      // 处理回调
      if (o.isServerNode) {
        o.req._getSessionInitCbs = o.req._getSessionInitCbs || [];
        // 服务端-处理同一请求多次初始化会话的问题，同一回调
        o.req._getSessionInitCbs.push([resolve, reject, o]);
        o.req._getSessionInitCbs.push([function () {
          if (this && this.req) {
            this.req._getSessionInitCbsIng = false;
          }
        }.bind(o), function () {
          if (this && this.req) {
            this.req._getSessionInitCbsIng = false;
          }
        }.bind(o), o]);
        if (o.req._getSessionInitCbsIng !== true) {
          isRun = true;
          o.req._getSessionInitCbsIng = true;
        }
      } else if (session.isClientWindow) {
        // 浏览器-处理同一请求多次初始化会话的问题，同一回调
        getSessionInitCbs.push([resolve, reject, o]);
        getSessionInitCbs.push([function () {
          _getSessionInitCbsIng = false;
        }, function () {
          _getSessionInitCbsIng = false;
        }, o]);
        if (_getSessionInitCbsIng !== true) {
          isRun = true;
          _getSessionInitCbsIng = true;
        }
      } else {
        reject(new Error('Neither a browser nor req and res'));
      }
      if (isRun) {
        session._initRun(o).then(function () {
          // 批量回调成功
          var cbt;
          if (o && o.req && o.req._getSessionInitCbs) {
            while (cbt = o.req._getSessionInitCbs.shift()) {
              if (cbt && cbt[0] && cbt[2] && util.isFunction(cbt[0])) {
                cbt[0](cbt[2]);
              }
              cbt = void 0;
            }
          } else if (session.isClientWindow && getSessionInitCbs) {
            while (cbt = getSessionInitCbs.shift()) {
              if (cbt && cbt[0] && cbt[2] && util.isFunction(cbt[0])) {
                cbt[0](cbt[2]);
              }
              cbt = void 0;
            }
          }
          o = void 0;
        }).catch(function (e) {
          // 批量回调异常
          var cbt;
          if (o && o.req && o.req._getSessionInitCbs) {
            while (cbt = o.req._getSessionInitCbs.shift()) {
              if (cbt && cbt[1] && util.isFunction(cbt[1])) {
                cbt[1](e);
              }
              cbt = void 0;
            }
          } else if (session.isClientWindow && getSessionInitCbs) {
            while (cbt = getSessionInitCbs.shift()) {
              if (cbt && cbt[1] && util.isFunction(cbt[1])) {
                cbt[1](e);
              }
              cbt = void 0;
            }
          }
          e = o = void 0;
        });
      }
      resolve = reject = isRun = void 0;
    });
  },
  _initRun: function _initRun(o) {
    // 初始化基本参数
    session._initRunBaseInit(o);
    //
    return new Promise(function (resolve, reject) {
      var initTrySum = session.initTrySum || o.initTrySum;
      if (o.initTryNum >= initTrySum) {
        reject(new Error('Session initialization failed, exceeding maximum attempted test'));
        return;
      } else if (o.initTryNum >= 2) {
        console.log('清理尝试');
      } else {
        resolve(o);
      }
      o = void 0;
    }).then(function (o) {
      return session.getData(o);
    }).then(function (o) {
      // 检测设备唯一识别号
      if (o.sessionData && o.sessionData.session_card) {
        return o;
      } else {
        return session.createCard(o);
      }
    }).then(function (o) {
      o.request_id = o.request_id || util.createRequestId();

      // 授权字符串
      var authorization = 'session-init-v1';
      authorization += '/' + o.request_id;
      authorization += '/' + (o.sessionData.session_id || '0');
      authorization += '/' + o.sessionData.session_card;
      authorization += '/' + sign.getUTCServerTime(o.sessionData.difference_time || 0) + '/' + '1800';
      var signingKey = sign.HmacSHA256(authorization, o.sessionData.session_key || 'session_key');
      // 生成加密key
      authorization += '/' + util.createGuid();
      authorization += '/' + sign.HmacSHA256(authorization, signingKey);

      o.headers = o.headers || Object.create(null);
      o.headers.Authorization = authorization;

      signingKey = authorization = void 0;
      return o;
    }).then(function (o) {
      // 请求方式
      o.method = o.method || 'GET';
      o.path = o.path || session.sessionInitPath || '/session/init';
      o.serverRes = Object.create(null);
      o.serverRes.statusCode = 0;
      o.serverRes.status = 'UNKNOW_ERROR';
      o.serverRes.body = '';
      // 返回一个请求
      return request(o);
    }).then(function (o) {
      return new Promise(function (resolve, reject) {
        var r = null;
        var e = null;
        var res = o.serverRes;
        try {
          r = JSON.parse(res.body);
        } catch (e1) {
          e = e1;
        }
        if (e) {
          e.statusCode = res.statusCode;
          e.error_id = res.status;
          e.message = res.status || 'Unknow Error';
          reject(e);
        } else if (r) {
          if (r.state) {
            r.statusCode = r.statusCode || r.code || res.statusCode;
            r.error_id = r.error_id || res.status;
            r.message = r.message || r.msg || res.status || 'Unknow Error';
            o._serverResObj = r;
            resolve(o);
          } else {
            e = new Error(r.message || r.msg || res.status || 'Unknow Error');
            e.statusCode = r.statusCode || r.code || res.statusCode;
            e.error_id = r.error_id || res.status;
            e.message = r.message || r.msg || res.status || 'Unknow Error';
            reject(e);
          }
        }
        o.destroy();
        o = resolve = reject = r = e = res = void 0;
      });
    }).then(function (o) {
      return new Promise(function (resolve, reject) {
        var res = o._serverResObj;

        if (res.type !== 'update') {
          // 如果不需要更新就跳过
          resolve(o);
          return;
        }
        var sessionData = res.session_data;
        // 服务器时间
        sessionData.server_time = sessionData.server_time || util.time();
        // 本地时间
        sessionData.local_time = util.time();
        // 服务器时间减去本地时间
        sessionData.difference_time = sessionData.server_time - sessionData.local_time;
        // 到期时间

        if (sessionData.expires_time !== undefined && sessionData.expires_time !== null) {
          sessionData.expires_time += sessionData.difference_time;
        } else {
          sessionData.expires_time = util.time() + 60 * 60 * 24 * 7;
        }
        // 获取会话数据
        session.setData(o, JSON.stringify(sessionData)).then(resolve).catch(reject);
      });
    });
  },
  createCard: function createCard(o) {
    return new Promise(function (resolve, reject) {
      o.sessionData = o.sessionData || Object.create(null);
      o.sessionData.session_card = 'ed9a-d251b2e6-48c3-9c08-e426-ed15398ac305-73624bb2';
      resolve(o);
      // reject('ed9a-d251b2e6-48c3-9c08-e426-ed15398ac305-73624bb2');
    });
  },
  _initRunBaseInit: function _initRunBaseInit(o) {
    // 默认0次参数
    o.initTryNum = o.initTryNum || 0;
    // 默认0次参数
    o.initTrySum = o.initTrySum || session.initTrySum || 3;
    // url
    o.baseUrl = o.baseUrl || api.baseUrl || '';
    o.req = o.req || null;
    o.res = o.res || null;
    // 是否在node服务器运行
    o.isServerNode = o.isServerNode !== void 0 ? o.isServerNode : Boolean(o.req && o.res);
    // 获取基本信息
    o.host = o.host || url('hostname', o.baseUrl);
    o.port = o.port || url('port', o.baseUrl);
    o.protocol = o.protocol || url('protocol', o.baseUrl);
  },
  // 获取正确的会话数据
  getTrueData: function getTrueData(o) {
    return new Promise(function (resolve, reject) {
      var isRun = false;
      // 处理回调
      if (o.isServerNode) {
        o.req._getSessionTrueDataCbs = o.req._getSessionTrueDataCbs || [];
        // 服务端-处理同一请求多次初始化会话的问题，同一回调
        o.req._getSessionTrueDataCbs.push([resolve, reject, o]);
        o.req._getSessionTrueDataCbs.push([function () {
          if (this && this.req) {
            this.req._getSessionTrueDataCbsIng = false;
          }
        }.bind(o), function () {
          if (this && this.req) {
            this.req._getSessionTrueDataCbsIng = false;
          }
        }.bind(o), o]);
        if (o.req._getSessionTrueDataCbsIng !== true) {
          isRun = true;
          o.req._getSessionTrueDataCbsIng = true;
        }
      } else if (session.isClientWindow) {
        // 浏览器-处理同一请求多次初始化会话的问题，同一回调
        getSessionTrueCbs.push([resolve, reject, o]);
        getSessionTrueCbs.push([function () {
          _getSessionTrueDataCbsIng = false;
        }, function () {
          _getSessionTrueDataCbsIng = false;
        }, o]);
        if (_getSessionTrueDataCbsIng !== true) {
          isRun = true;
          _getSessionTrueDataCbsIng = true;
        }
      } else {
        reject(new Error('Neither a browser nor req and res'));
      }
      if (isRun) {
        session._getTrueDataRun(o);
      }
      resolve = reject = o = isRun = void 0;
    });
  },
  // 获取正确的会话数据-开始运行
  _getTrueDataRun: function _getTrueDataRun(o) {
    var sessionO = {
      req: o.req || null,
      res: o.res || null,
      host: o.host,
      port: o.port,
      baseUrl: o.baseUrl,
      protocol: o.protocol,
      isServerNode: o.isServerNode,
      cookieName: o.cookieName,
      cookieNameEnCode: o.cookieNameEnCode,
      isSessionInit: o.isSessionInit,
      isSessionDataPass: o.isSessionDataPass,
      sessionData: o.sessionData,
      sessionDataStr: o.sessionDataStr,
      sessionDataOldStr: o.sessionDataOldStr
    };
    var keys = Object.keys(sessionO);
    session.getData(sessionO).then(function (o) {
      // 检测会话是否过期
      return new Promise(function (resolve, reject) {
        var isSessionDataPass = true;
        // o.isSessionInit 是否强制
        isSessionDataPass = isSessionDataPass && !o.isSessionInit;
        // 基本需要的数据检测
        isSessionDataPass = isSessionDataPass && o.sessionData && o.sessionData.session_id && o.sessionData.session_key && o.sessionData.session_card;
        // 检测事件
        isSessionDataPass = isSessionDataPass && o.sessionData.expires_time && util.time() < o.sessionData.expires_time - 5;
        // 为了保证没有问题，提前5秒钟过期
        if (isSessionDataPass) {
          // 下一步
          resolve(o);
          // 回收
          resolve = reject = o = void 0;
        } else {
          // 重新初始化
          o.isSessionInit = undefined;
          session.init({
            req: o.req || null,
            res: o.res || null,
            host: o.host,
            port: o.port,
            baseUrl: o.baseUrl,
            protocol: o.protocol,
            isServerNode: o.isServerNode
          }).then(function () {
            if (typeof resolve === 'function') {
              session.getData(o).then(resolve).catch(reject);
            }
            resolve = reject = o = void 0;
          }).catch(function (e) {
            if (typeof reject === 'function') {
              reject(e);
            }
            resolve = reject = o = void 0;
          });
        }
      });
    }).then(function () {
      // 批量回调成功
      var cbt;
      if (sessionO.req && sessionO.req._getSessionTrueDataCbs) {
        while (cbt = sessionO.req._getSessionTrueDataCbs.shift()) {
          if (cbt && cbt[0] && cbt[2] && util.isFunction(cbt[0])) {
            util.copyObjByKey(cbt[2], sessionO, keys);
            cbt[0](cbt[2]);
          }
          cbt = void 0;
        }
      } else if (session.isClientWindow && getSessionTrueCbs) {
        while (cbt = getSessionTrueCbs.shift()) {
          if (cbt && cbt[0] && cbt[2] && util.isFunction(cbt[0])) {
            util.copyObjByKey(cbt[2], sessionO, keys);
            cbt[0](cbt[2]);
          }
          cbt = void 0;
        }
      }
      sessionO = void 0;
    }).catch(function (e) {
      // 批量回调异常
      var cbt;
      if (sessionO.req && sessionO.req._getSessionTrueDataCbs) {
        while (cbt = sessionO.req._getSessionTrueDataCbs.shift()) {
          if (cbt && cbt[1] && util.isFunction(cbt[1])) {
            cbt[1](e);
          }
          cbt = void 0;
        }
      } else if (session.isClientWindow && getSessionTrueCbs) {
        while (cbt = getSessionTrueCbs.shift()) {
          if (cbt && cbt[1] && util.isFunction(cbt[1])) {
            cbt[1](e);
          }
          cbt = void 0;
        }
      }
      e = sessionO = void 0;
    });
    o = void 0;
  },
  setData: function setData(o, sessionData) {
    return new Promise(function (resolve, reject) {
      if (!o.cookieName) {
        // 根据host和port生成cookieName
        o.cookieName = o.host + (o.port ? ':' + o.port : '');
      }
      // 编码cookieName
      o.cookieNameEnCode = session._cookieNameEnCode(o.cookieName);
      if (o.isServerNode) {
        // 服务器模式
        session._setDataNode(o, sessionData, resolve, reject);
      } else if (session.isClientWindow) {
        // 客户端
        session._setDataClient(o, sessionData, resolve, reject);
      } else {
        // 不确定是什么浏览器
        reject(new Error('Neither a browser nor req and res'));
      }
      resolve = reject = o = void 0;
    });
  },
  getData: function getData(o) {
    return new Promise(function (resolve, reject) {
      if (!o.cookieName) {
        // 根据host和port生成cookieName
        o.cookieName = o.host + (o.port ? ':' + o.port : '');
      }
      // 编码cookieName
      o.cookieNameEnCode = session._cookieNameEnCode(o.cookieName);
      if (o.isServerNode) {
        // 服务器模式
        session._getDataNode(o, resolve, reject);
      } else if (session.isClientWindow) {
        // 客户端
        session._getDataClient(o, resolve, reject);
      } else {
        // 不确定是什么浏览器
        reject(new Error('Neither a browser nor req and res'));
      }
      resolve = reject = o = void 0;
    }).then(function (o) {
      // 反序列化会话数据
      return new Promise(function (resolve, reject) {
        if (o.sessionDataStr && typeof o.sessionDataStr === 'string') {
          try {
            o.sessionData = JSON.parse(o.sessionDataStr);
          } catch (e) {
            o.sessionData = o.sessionData || Object.create(null);
          }
        } else {
          o.sessionData = o.sessionData || Object.create(null);
        }
        // 清理
        delete o.sessionDataStr;
        // 序列化用于后期比对
        o.sessionDataOldStr = session.arrayToStr(o.sessionData);
        // 回调下一步
        resolve(o);
      });
    });
  },
  // node服务端获取
  _getDataNode: function _getDataNode(o, resolve, reject) {
    var cookiename;
    try {
      cookiename = o.cookieNameEnCode;
      o.sessionDataStr = o.res && o.res.cookieDdvRestfulApiStr || session._getCookiesServer(cookiename, o.req) || o.sessionDataStr;
      // 本地存储模块
      if (util.isFunction(resolve)) {
        resolve(o);
      }
    } catch (e) {
      if (util.isFunction(reject)) {
        reject(e);
      }
    }
    resolve = reject = o = void 0;
  },
  // 客户端获取
  _setDataNode: function _setDataNode(o, data, resolve, reject) {
    if (!(o && o.res)) {
      reject(new Error('Your browser does not support cookies and localStorage'));
      return;
    }
    if (!o.cookieNameEnCode) {
      reject(new Error('Deceased cookie surname'));
      return;
    }
    var cookiename = o.cookieNameEnCode;
    o.res.cookieDdvRestfulApiStr = data;
    try {
      // 本地存储模块
      if (session.isLongStorage) {
        session._setCookiesServer(o.req, o.res, cookiename, data);
      } else {
        session._setCookiesServer(o.req, o.res, cookiename, data, session.getExpiresDate('365', '12', '60'));
      }

      if (util.isFunction(resolve)) {
        resolve(o);
      }
    } catch (e) {
      if (util.isFunction(reject)) {
        reject(e);
      }
    }
    resolve = reject = data = o = void 0;
  },
  // 设置cookies
  _getCookiesServer: function _getCookiesServer(key, req) {
    if (req) {
      return req.cookies && req.cookies[key] || session._getCookiesByStr(key, req.headers && req.headers.cookie || '') || '';
    } else {
      return '';
    }
  },
  // 设置cookies
  _setCookiesServer: function _setCookiesServer(req, res, key, value, expires, path, domain, isSecure) {
    var t;
    if (!res) {
      return;
    }
    if (util.isFunction(res.cookie)) {
      t = { domain: domain || '', path: path || '/', secure: Boolean(isSecure) };
      if (t.domain) {
        delete t.domain;
      }
      if (t.secure) {
        delete t.secure;
      }
      if (expires) {
        t.expires = new Date(expires);
      }
      res.cookie(key, value, t);
    } else {
      t = '';
      t += key.toString().trim() + '=';
      t += session.escape(value);
      t += expires ? '; expires=' + expires : '';
      t += typeof path === 'string' && path !== '' ? '; path=' + path : '; path=/';
      t += typeof domain === 'string' && domain !== '' ? '; domain=' + domain : '';
      t += isSecure ? '; secure' : '';
      if (req.headers && req.headers.cookie) {
        req.headers.cookie = t;
      }
      // 强制一个数组
      res.cookiesSetArray = res.cookiesSetArray || [];
      // 加入输出数组
      res.cookiesSetArray.push(t);
      // 设置输出头
      res.setHeader('Set-Cookie', res.cookiesSetArray);
    }
    t = void 0;
  },
  // 客户端获取
  _getDataClient: function _getDataClient(o, resolve, reject) {
    var cookiename, data;
    if (!(session.isLocalCookie || session.isLocalStorage || session.isSessionStorage)) {
      reject(new Error('Your browser does not support cookies and localStorage'));
      return;
    }
    try {
      cookiename = o.cookieNameEnCode;
      data = session._getCookiesClient(cookiename) || null;
      // 本地存储模块
      if (!data) {
        try {
          if (session.isLongStorage) {
            // 长期存储模式
            data = localStorage.getItem(cookiename) || null;
            session._setCookiesClient(cookiename, data);
          } else {
            // 会话形式
            data = sessionStorage.getItem(cookiename) || null;
            session._setCookiesClient(cookiename, data, session.getExpiresDate('365', '12', '60'));
          }
        } catch (e) {
          data = null;
        }
      }
      o.sessionDataStr = data || o.sessionDataStr;
      if (typeof resolve === 'function') {
        resolve(o);
      }
    } catch (e) {
      if (typeof reject === 'function') {
        reject(e);
      }
    }
    resolve = reject = data = o = void 0;
  },
  // 客户端获取
  _setDataClient: function _setDataClient(o, data, resolve, reject) {
    var cookiename;
    if (!(session.isLocalCookie || session.isLocalStorage || session.isSessionStorage)) {
      reject(new Error('Your browser does not support cookies and localStorage'));
      return;
    }
    try {
      cookiename = o.cookieNameEnCode;
      // 本地存储模块
      if (session.isLongStorage) {
        // 长期存储模式
        if (session.isLocalStorage) {
          localStorage.setItem(cookiename, data);
        }
        session._setCookiesClient(cookiename, data);
      } else {
        // 会话形式
        if (session.isSessionStorage) {
          sessionStorage.setItem(cookiename, data);
        }
        session._setCookiesClient(cookiename, data, session.getExpiresDate('365', '12', '60'));
      }

      if (util.isFunction(resolve)) {
        resolve(o);
      }
    } catch (e) {
      if (util.isFunction(reject)) {
        reject(e);
      }
    }
    resolve = reject = data = o = void 0;
  },
  // 客户端读取
  _getCookiesClient: function _getCookiesClient(key) {
    if (session.isLocalCookie) {
      return session._getCookiesByStr(key, document.cookie);
    } else {
      return '';
    }
  },
  // 客户端存储
  _setCookiesClient: function _setCookiesClient(key, value, expires, path, domain, isSecure) {
    var t;
    key = (key || '').toString().trim();
    try {
      if (VS_COOKIEDM !== undefined && VS_COOKIEDM !== null && !domain) {
        domain = VS_COOKIEDM;
      }
    } catch (e) {}
    t = '';
    t += key.toString().trim() + '=';
    t += session.escape(value);
    t += expires ? '; expires=' + expires : '';
    t += typeof path === 'string' && path !== '' ? '; path=' + path : '; path=/';
    t += typeof domain === 'string' && domain !== '' ? '; domain=' + domain : '';
    t += isSecure ? '; secure' : '';
    document.cookie = t;
    t = void 0;
  },
  _cookieNameEnCode: function _cookieNameEnCode(name) {
    name = cryptoJsCore.enc.Utf8.parse((name || 'sid').toString() || '').toString(cryptoJsBase64);
    name = name.replace(/_/g, '____').replace(/\+/g, '___').replace(/\//g, '__').replace(/=/g, '_');
    return name;
  },
  // 数组序列化
  _getCookiesByStr: function _getCookiesByStr(key, str) {
    var value = '';
    ((str || '').split(';') || []).forEach(function (t, i) {
      var a = (t || '').split('=') || [];
      if ((a[0] || '').toString().trim() === key) {
        value = session.unescape((a[1] || '').toString().trim());
      }
      a = t = i = void 0;
    });
    return value;
  },
  // 数组序列化
  arrayToStr: function arrayToStr(obj) {
    var a = [];
    var name;
    for (name in obj) {
      if (!Object.hasOwnProperty.call(obj, name)) {
        continue;
      }
      a.push(name + '=' + obj[name]);
    }
    name = void 0;
    a.sort();
    obj = void 0;
    a = a.join(';');
    return a;
  },
  // 获取GMT格式的过期时间
  getExpiresDate: function getExpiresDate(days, hours, minutes, seconds) {
    var ExpiresDate = new Date();
    if (util.isNumber(days) && util.isNumber(hours) && util.isNumber(minutes)) {
      ExpiresDate.setDate(ExpiresDate.getDate() + parseInt(days));
      ExpiresDate.setHours(ExpiresDate.getHours() + parseInt(hours));
      ExpiresDate.setMinutes(ExpiresDate.getMinutes() + parseInt(minutes));
      if (util.isNumber(seconds)) {
        ExpiresDate.setSeconds(ExpiresDate.getSeconds() + parseInt(seconds));
      }
    }
    return ExpiresDate.toGMTString();
  }
});

// 局部变量-是否为客户端窗口
session.isClientWindow = typeof window !== 'undefined' && window.window === window && typeof window.document !== 'undefined';
// 局部变量-本地cookie是否为客户端窗口支持
session.isLocalCookie = false;
// 局部变量-本地存储是否为客户端窗口支持
session.isLocalStorage = false;
// 局部变量-本地会话存储是否为客户端窗口支持
session.isSessionStorage = false;
session.isLongStorage = false;
session.sessionInitPath = '/session/init';
if (session.isClientWindow) {
  try {
    session.isLocalCookie = 'cookie' in window.document;
  } catch (e) {}
  try {
    session.isLocalStorage = 'localStorage' in window;
  } catch (e) {}
  try {
    session.isSessionStorage = 'sessionStorage' in window;
  } catch (e) {}
}

function session() {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 导出签名模块
// 工具

var util = __webpack_require__(0);
var sign = module.exports = Object.assign(function sign(o) {
  return sign._signRun(o);
}, {
  headersPrefix: 'x-ddv-',
  excludeHeaderKeys: ['host', 'content-length', 'content-type', 'content-md5'],
  // 设置headersPrefix
  setHeadersPrefix: function setHeadersPrefix(prefix) {
    sign.headersPrefix = prefix;
  },
  // 签名头
  _signRun: function _signRun(o) {
    return new Promise(function signInit(resolve, reject) {
      // base初始化
      sign._signRunBaseInit(o);
      // 初始化GET参数
      sign._signRunQueryInit(o);
      // 格式化头信息
      sign._signRunHeadersFormat(o);
      // 签名头排序
      sign._signRunHeadersSort(o);
      // 提交下一步
      resolve(o);
      o = void 0;
    }).then(function (o) {
      // 获取校验过的session数据
      return session.getTrueData(o);
    }).then(function (o) {
      // 会话id
      var sessionId = o.sessionData.session_id;
      // 会话秘钥
      var sessionKey = o.sessionData.session_key || 'session_key';
      // 设备识别号
      var sessionCard = o.sessionData.session_card;
      // 时间差
      var differenceTime = o.sessionData.difference_time;

      // 授权字符串
      o.Authorization = 'app-auth-v2' + '/' + o.request_id + '/' + sessionId + '/' + sessionCard + '/' + sign.getUTCServerTime(differenceTime) + '/' + '1800';
      // 生成临时秘钥-用于加密的key-防止丢失正式key
      var signingKey = sign.HmacSHA256(o.Authorization, sessionKey);

      // 拼接内容
      var canonicalRequest = o.method + o.n + util.urlEncodeExceptSlash(o.path) + o.n + o.query + o.n + o.authCanonicalHeadersStr;
      // 使用signKey和标准请求串完成签名
      var sessionSign = sign.HmacSHA256(canonicalRequest, signingKey);
      // 组成最终签名串
      o.Authorization += '/' + o.authHeadersStr + '/' + sessionSign;
      // 进入下一步
      return o;
    }).then(function (o) {
      if (!o.headers) {
        o.headers = Object.create(null);
      }
      o.headers['Authorization'] = o.Authorization;
      // 回收数据
      delete o.authHeadersStr;
      delete o.authCanonicalHeadersStr;
      return o;
    });
  },
  // 签名头排序
  _signRunHeadersSort: function _signRunHeadersSort(o) {
    // 要签名的头的key的一个数组
    o.authHeadersStr = [];
    // 签名的头
    o.authCanonicalHeadersStr = [];

    o.headersPrefix = o.headersPrefix || sign.headersPrefix;
    o.headersPrefixLen = o.headersPrefix.length;
    var keyLower, key, value;
    var headersOld = o.headers;
    for (key in headersOld) {
      if (!Object.hasOwnProperty.call(headersOld, key)) {
        continue;
      }
      // 取得key对应的value
      value = headersOld[key];
      // 小写的key
      keyLower = key.toLowerCase();
      // 判断一下
      if (sign.excludeHeaderKeys.indexOf(keyLower) > -1 || keyLower.substr(0, o.headersPrefixLen) === o.headersPrefix) {
        o.authCanonicalHeadersStr.push(util.urlEncode(keyLower) + ':' + util.urlEncode(value));
        o.authHeadersStr.push(keyLower);
      }
    }

    // 排序
    o.authCanonicalHeadersStr.sort();
    // 用\n拼接
    o.authCanonicalHeadersStr = o.authCanonicalHeadersStr.join(o.n);
    // 用;拼接
    o.authHeadersStr = o.authHeadersStr.join(';');
  },
  // 格式化头信息
  _signRunHeadersFormat: function _signRunHeadersFormat(o) {
    // 克隆
    var headersTemp = Object.create(null);
    var headersOld = o.headers;
    var value = '';
    var key = '';
    // 遍历头
    for (key in headersOld) {
      // 去左右空格
      key = sign._trim(key);
      value = sign._trim(headersOld[key]);
      switch (key.toLowerCase()) {
        case 'authorization':
          continue;
        case 'host':
          key = 'Host';
          break;
        case 'content-length':
          key = 'Content-Length';
          break;
        case 'content-type':
          key = 'Content-Type';
          break;
        case 'content-md5':
          key = 'Content-Md5';
          break;
      }
      if (value) {
        headersTemp[key] = value;
      }
    }
    // 把处理后的赋值回给
    o.headers = headersTemp;
    // 释放内存
    headersTemp = headersOld = key = value = void 0;
    // 强制有host头
    o.headers.Host = o.headers.Host ? o.headers.Host : o.host;

    if (o.body && o.body.length > 0) {
      o.headers['Content-Length'] = o.headers['Content-Length'] ? o.headers['Content-Length'] : o.body.length;
      o.headers['Content-Type'] = o.headers['Content-Type'] ? o.headers['Content-Type'] : 'application/x-www-form-urlencoded; charset=UTF-8';
      o.headers['Content-Md5'] = sign.md5Base64(o.body);
    }
  },
  // 初始化GET参数
  _signRunQueryInit: function _signRunQueryInit(o) {
    // 签名数组
    var queryArray = [];
    if (o.query && o.query.length > 0) {
      o.query.split('&').forEach(function (t) {
        if (!t) {
          return;
        }
        var key, value, i;
        // 找到第一个等号的首次出现位置
        i = t.indexOf('=');
        // 取得key
        key = t.substr(0, i);
        // 取得value
        value = t.substr(i + 1);
        // 先去左右空格再编码
        key = sign._trim(key);
        value = sign._trim(value);
        // 插入新数组
        queryArray.push(key + '=' + value);
      });
    }
    // 排序
    queryArray.sort();
    // 用&拼接
    o.query = queryArray.join('&');
    // 回收内存
    queryArray = void 0;
  },
  // base初始化
  _signRunBaseInit: function _signRunBaseInit(o) {
    // 默认换行
    o.n = o.n || '\n';
    // 请求id
    o.request_id = o.request_id || util.createRequestId();
    // 请求方式
    o.method = (o.method || 'GET').toString().toUpperCase();
    // 强制是字符串
    o.query = o.query || '';
    // get请求
    if (o.method.toLowerCase() === 'GET') {
      // 如果有请求体
      if (o.body) {
        // 拼接到query中
        o.query += o.query ? '&' : '';
        // 清空请求体
        o.body = '';
      }
    } else {
      o.body = o.body || '';
    }
  },
  getUTCServerTime: function getUTCServerTime(differenceTime) {
    var d;
    d = new Date();
    d = new Date(parseInt(d.getTime() + (parseInt(differenceTime) || 0) * 1000) + 60 * d.getTimezoneOffset());
    return d.getUTCFullYear() + '-' + sign._replenish(d.getUTCMonth() + 1, 2) + '-' + sign._replenish(d.getUTCDate(), 2) + 'T' + sign._replenish(d.getUTCHours(), 2) + ':' + sign._replenish(d.getUTCMinutes(), 2) + ':' + sign._replenish(d.getUTCSeconds(), 2) + 'Z';
  },
  _replenish: function _replenish(text, total, rstr) {
    text = text.toString();
    var rstrlen = total - text.length || 0;
    var rstri = 0;
    var r = text;
    switch (arguments.length) {
      case 3:
        break;
      case 2:
        rstr = '0';
        break;
      default:
        return r;
    }
    for (rstri = 0; rstri < rstrlen; rstri++) {
      r = rstr.toString() + r.toString();
    }
    return r;
  },
  _trim: function _trim(str) {
    return str.toString().trim();
  },
  md5Hex: function md5Hex(str, isToString) {
    str = str || '';
    if (isToString !== false) {
      str = str.toString();
    }
    return cryptoJsCore.MD5(str).toString(cryptoJsHex);
  },
  md5Base64: function md5Base64(str, isToString) {
    str = str || '';
    if (isToString !== false) {
      str = str.toString();
    }
    return cryptoJsCore.MD5(str).toString(cryptoJsBase64);
  },
  HmacSHA256: function HmacSHA256(str, key, isToString) {
    str = str || '';
    if (isToString !== false) {
      str = str.toString();
    }
    return cryptoJsCore.HmacSHA256(str, key).toString(cryptoJsHex);
  }
});
// 引入签名会话模块
// 引入请求模块
var session = __webpack_require__(3);
var cryptoJsCore = __webpack_require__(7);
// var cryptoJsMd5 =
__webpack_require__(17);
// var cryptoJsHmacSha256 =
__webpack_require__(16);
var cryptoJsBase64 = __webpack_require__(8);
var cryptoJsHex = __webpack_require__(14);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  function _t() {
    return new RegExp(/(.*?)\.?([^.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz|so)$/);
  }

  function _d(s) {
    return decodeURIComponent(s.replace(/\+/g, ' '));
  }

  function _i(arg, str) {
    var sptr = arg.charAt(0);
    var split = str.split(sptr);

    if (sptr === arg) {
      return split;
    }

    arg = parseInt(arg.substring(1), 10);

    return split[arg < 0 ? split.length + arg : arg - 1];
  }

  function _f(arg, str) {
    var sptr = arg.charAt(0);
    var split = str.split('&');
    var field = [];
    var params = {};
    var tmp = [];
    var arg2 = arg.substring(1);

    for (var i = 0, ii = split.length; i < ii; i++) {
      field = split[i].match(/(.*?)=(.*)/);

      // TODO: regex should be able to handle this.
      if (!field) {
        field = [split[i], split[i], ''];
      }

      if (field[1].replace(/\s/g, '') !== '') {
        field[2] = _d(field[2] || '');

        // If we have a match just return it right away.
        if (arg2 === field[1]) {
          return field[2];
        }

        // Check for array pattern.
        tmp = field[1].match(/(.*)\[([0-9]+)]/);

        if (tmp) {
          params[tmp[1]] = params[tmp[1]] || [];

          params[tmp[1]][tmp[2]] = field[2];
        } else {
          params[field[1]] = field[2];
        }
      }
    }

    if (sptr === arg) {
      return params;
    }

    return params[arg2];
  }

  return function (arg, url) {
    var _l = {};
    var tmp;

    if (arg === 'tld?') {
      return _t();
    }

    url = url || (typeof window !== 'undefined' && window.location || '').toString();

    if (!arg) {
      return url;
    }

    arg = arg.toString();

    if (tmp = url.match(/^mailto:([^/].+)/)) {
      _l.protocol = 'mailto';
      _l.email = tmp[1];
    } else {
      // Ignore Hashbangs.
      if (tmp = url.match(/(.*?)\/#!(.*)/)) {
        url = tmp[1] + tmp[2];
      }

      // Hash.
      if (tmp = url.match(/(.*?)#(.*)/)) {
        _l.hash = tmp[2];
        url = tmp[1];
      }

      // Return hash parts.
      if (_l.hash && arg.match(/^#/)) {
        return _f(arg, _l.hash);
      }

      // Query
      if (tmp = url.match(/(.*?)\?(.*)/)) {
        _l.query = tmp[2];
        url = tmp[1];
      }

      // Return query parts.
      if (_l.query && arg.match(/^\?/)) {
        return _f(arg, _l.query);
      }

      // Protocol.
      if (tmp = url.match(/(.*?):?\/\/(.*)/)) {
        _l.protocol = tmp[1].toLowerCase();
        url = tmp[2];
      }

      // Path.
      if (tmp = url.match(/(.*?)(\/.*)/)) {
        _l.path = tmp[2];
        url = tmp[1];
      }

      // Clean up path.
      _l.path = (_l.path || '').replace(/^([^/])/, '/$1').replace(/\/$/, '');

      // Return path parts.
      if (arg.match(/^[-0-9]+$/)) {
        arg = arg.replace(/^([^/])/, '/$1');
      }
      if (arg.match(/^\//)) {
        return _i(arg, _l.path.substring(1));
      }

      // File.
      tmp = _i('/-1', _l.path.substring(1));

      if (tmp && (tmp = tmp.match(/(.*?)\.(.*)/))) {
        _l.file = tmp[0];
        _l.filename = tmp[1];
        _l.fileext = tmp[2];
      }

      // Port.
      if (tmp = url.match(/(.*):([0-9]+)$/)) {
        _l.port = tmp[2];
        url = tmp[1];
      }

      // Auth.
      if (tmp = url.match(/(.*?)@(.*)/)) {
        _l.auth = tmp[1];
        url = tmp[2];
      }

      // User and pass.
      if (_l.auth) {
        tmp = _l.auth.match(/(.*):(.*)/);

        _l.user = tmp ? tmp[1] : _l.auth;
        _l.pass = tmp ? tmp[2] : undefined;
      }

      // Hostname.
      _l.hostname = url.toLowerCase();

      // Return hostname parts.
      if (arg.charAt(0) === '.') {
        return _i(arg, _l.hostname);
      }

      // Domain, tld and sub domain.
      if (_t()) {
        tmp = _l.hostname.match(_t());

        if (tmp) {
          _l.tld = tmp[3];
          _l.domain = tmp[2] ? tmp[2] + '.' + tmp[3] : undefined;
          _l.sub = tmp[1] || undefined;
        }
      }

      // Set port and protocol defaults if not set.
      _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
      _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
      _l.protocol = _l.protocol + ':';
    }

    // Return arg.
    if (arg in _l) {
      return _l[arg];
    }

    // Return everything.
    if (arg === '{}') {
      return _l;
    }

    // Default to undefined for no match.
    return undefined;
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = __webpack_require__(21);
var https = __webpack_require__(22);
var session = __webpack_require__(3);
var isWindow = typeof window !== 'undefined' && window.window === window;
// 发送请求
module.exports = function ajax(o) {
  return isWindow ? ajaxbyWindow(o) : ajaxbyNode(o);
};
function ajaxbyWindow(o) {
  return new Promise(function (resolve, reject) {
    var url = parseUrl({
      protocol: o.protocol || 'http:',
      host: o.host,
      port: o.port || '80',
      path: o.path || '/',
      query: o.query || ''
    });
    var xhr;

    // 创建 - 非IE6 - 第一步
    if (typeof window !== 'undefined' && window.XMLHttpRequest) {
      xhr = new window.XMLHttpRequest();
    } else {
      // IE6及其以下版本浏览器
      xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    // 接收 - 第三步
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var status = xhr.status;
        var statusText = xhr.statusText;
        if (status >= 200 && status < 300) {
          var serverRes = {};
          serverRes.headers = {};
          serverRes.rawHeaders = [];
          serverRes.body = xhr.response;
          serverRes.statusCode = xhr.status;
          serverRes.statusMessage = xhr.statusText;
          serverRes.status = xhr.statusText;

          var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
          headers.forEach(function (header) {
            var matches = header.match(/^([^:]+):\s*(.*)/);
            if (matches) {
              var key = matches[1].toLowerCase();
              if (key === 'set-cookie') {
                if (serverRes.headers[key] === undefined) {
                  serverRes.headers[key] = [];
                }
                serverRes.headers[key].push(matches[2]);
              } else if (serverRes.headers[key] !== undefined) {
                serverRes.headers[key] += ', ' + matches[2];
              } else {
                serverRes.headers[key] = matches[2];
              }
              serverRes.rawHeaders.push(matches[1], matches[2]);
            }
          });
          resolve(serverRes);
        } else {
          var e = new Error(statusText);
          e.statusCode = xhr.status;
          e.statusMessage = xhr.statusText;
          e.status = xhr.statusText;
          reject(e);
        }
      }
    };
    // 连接 和 发送 - 第二步
    xhr.open((o.method || 'GET').toUpperCase(), url, true);
    // 设置表单提交时的内容类型
    var key, value, headers;
    headers = o.headers;
    for (key in headers) {
      if (key.toLowerCase() === 'host' || key.toLowerCase() === 'content-length') {
        continue;
      }
      value = headers[key];
      if (Array.isArray(value)) {
        value.forEach(function (vt) {
          xhr.setRequestHeader(key, vt);
        });
      } else {
        xhr.setRequestHeader(key, headers[key]);
      }
      value = Array.isArray(value) ? value.join(' ') : value;
    }
    xhr.send(o.body || null);
  });
}
function ajaxbyNode(o) {
  return new Promise(function (resolve, reject) {
    var opt, req;
    if (!(o.isServerNode || session.isClientWindow)) {
      // 不是浏览器和node服务器
      reject(new Error('Neither a browser nor req and res'));
      return;
    }
    opt = {
      method: o.method || 'GET',
      protocol: o.protocol || 'http:',
      host: o.host,
      port: o.port || '80',
      path: o.path || '/',
      headers: o.headers
    };
    if (o.query) {
      opt.path += '?' + o.query;
    }
    // 发送请求
    req = (opt.protocol === 'http:' ? http : https).request(opt, function (response) {
      var serverRes = {};
      serverRes.body = '';
      response.on('data', function (data) {
        serverRes.body += data;
      }).on('end', function () {
        serverRes.statusCode = response.statusCode || 200;
        serverRes.status = response.statusMessage.toString() || 'UNKNOW_ERROR';
        serverRes.rawHeaders = response.rawHeaders || [];
        serverRes.headers = response.headers || Object.create(null);
        resolve(serverRes);
      });
    });
    if (o.body) {
      req.write(o.body);
    }
    req.on('error', function (e) {
      reject(e);
    });
    req.end();
    opt = req = void 0;
  });
}
function parseUrl(obj) {
  var r = '';
  r += obj.protocol || 'http:';
  r += '//' + (obj.host || '');
  r += obj.port ? obj.protocol === 'http:' && obj.port === '80' || obj.protocol === 'https:' && obj.port === '443' ? '' : ':' + obj.port : '';
  obj.pathquery = obj.pathquery || (obj.path || '/') + (obj.query ? '?' + obj.query : '');
  r += obj.pathquery;
  return r;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/core");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/enc-base64");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(20);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(1);
api.url = __webpack_require__(5);
api.ajax = __webpack_require__(6);
api.sign = __webpack_require__(4);
api.session = __webpack_require__(3);
api.request = __webpack_require__(2);
api.nextTick = __webpack_require__(0).nextTick;
api.Promise = Promise;
// 设置headersPrefix
api.setHeadersPrefix = api.sign.setHeadersPrefix;
// 设置是否使用长存储
api.setLongStorage = api.session.setLongStorage;
// 设置是否使用长存储
api.setSessionInitTrySum = api.session.setSessionInitTrySum;
// 设置初始化session的path
api.setSessionInitPath = api.session.setSessionInitPath;

if (typeof window !== 'undefined' && window.window === window) {
  window.ddvRestFulApi = api;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var api = __webpack_require__(1);
var util = __webpack_require__(0);

api.data = function tryGetData(context, promiseFnRun, _dataOld) {
  if (util.isFunction(context) || context && util.isFunction(context.then)) {
    promiseFnRun = context;
    context = void 0;
  }
  var promiseFnReload = void 0;
  var self = this;
  var data = Object && Object.create ? Object.create(null) : {};
  return new Promise(function tryGetDataRun(resolve, reject) {
    var _promise;
    if (util.isFunction(promiseFnRun)) {
      _promise = promiseFnRun.call(self, data, function (inputData) {
        if (data && inputData && (typeof inputData === 'undefined' ? 'undefined' : _typeof(inputData)) === 'object') {
          Object.assign(data, inputData);
        }
      }, context);
      promiseFnReload = promiseFnRun;
    } else if (promiseFnRun && util.isFunction(promiseFnRun.then)) {
      _promise = promiseFnRun;
    }
    self = promiseFnRun = void 0;
    // 必须是Promise实例化的对象
    if (_promise && util.isFunction(_promise.then)) {
      _promise.then(function resData(res) {
        // 如果没有return数据就返回一个data
        res = res === void 0 ? data : res;
        data = void 0;
        return res;
      }).catch(function (e) {
        // 如果请求出现了异常
        return api.dataErrorEmit({ context: context, error: e }).then(function (res) {
          if (res && res.isReload === true) {
            if (promiseFnReload) {
              // 重新发送整个请求
              return api.data(context, promiseFnReload, _dataOld);
            } else {
              var e = new Error('Please resubmit or try again');
              e.error_id = 'UNKNOW_ERROR';
              throw e;
            }
          } else if (res && res.res !== void 0) {
            // 返回指定结果
            return res.res;
          }
        });
      }).then(resolve).catch(reject);
    } else {
      var e = new Error('Your argument must be a Promise, or a method, and this method returns Promise after the call');
      e.error_id = 'UNKNOW_ERROR';
      reject(e);
    }
    _promise = void 0;
  });
};
api._onDataServerErrorFn = null;
api.onDataServerError = function onDataServerError(fn) {
  api._onDataServerErrorFn = fn;
};
api._onDataClientErrorFn = null;
api.onDataClientError = function onDataClientError(fn) {
  api._onDataClientErrorFn = fn;
};
api.dataErrorEmit = function dataErrorEmit(input) {
  var context, error;
  context = input && input.context || context;
  error = input && input.error || error;
  var _promise = new Promise(function checkOnDataErrorArr(resolve, reject) {
    reject(error);
    resolve = reject = void 0;
  });
  if (context && context.isServer) {
    // 有上下文 并且是服务器端
    if (util.isFunction(api._onDataServerErrorFn)) {
      _promise = _promise.catch(function onCatch(e) {
        e = api._onDataServerErrorFn(e, context);
        context = void 0;
        return e;
      });
    }
  } else {
    // 否则统一客户端方法处理
    if (util.isFunction(api._onDataClientErrorFn)) {
      _promise = _promise.catch(function onCatch(e) {
        e = api._onDataClientErrorFn(e, context);
        context = void 0;
        return e;
      });
    }
  }
  return _promise;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 导出模块

module.exports = nextTick;
// 工具
var util = __webpack_require__(0);
// 下一进程队列
var nextTickQueue = [];
// 系统下一进程运行
var nextTickSys = function () {
  var fnc;
  if (typeof process !== 'undefined' && util.isFunction(process.nextTick)) {
    fnc = process.nextTick;
  } else {
    'r webkitR mozR msR oR'.split(' ').forEach(function (prefixes) {
      if (util.isFunction(fnc)) {
        return false;
      }
      fnc = window[prefixes + 'equestAnimationFrame'];
    });
    fnc = fnc && fnc.bind && fnc.bind(window) || window.setImmediate;
    if (!util.isFunction(fnc)) {
      if (typeof window === 'undefined' || window.ActiveXObject || !window.postMessage) {
        fnc = function fnc(f) {
          setTimeout(f, 0);
        };
      } else {
        window.addEventListener('message', function () {
          var i = 0;
          while (i < nextTickQueue.length) {
            try {
              nextTickQueue[i++]();
            } catch (e) {
              nextTickQueue.splice(0, i);
              window.postMessage('nextTick!', '*');
              throw e;
            }
          }
          nextTickQueue.length = 0;
        }, true);
        fnc = function fnc(fn) {
          if (!nextTickQueue.length) {
            window.postMessage('nextTick!', '*');
          }
          nextTickQueue.push(fn);
        };
      }
    }
  }
  return fnc;
}();
// 下一进程访问
function nextTick(fn) {
  var self = this;
  nextTickSys(function () {
    if (util.isFunction(fn)) {
      fn.call(self);
    }
    self = fn = void 0;
  });
  setTimeout(function () {
    if (util.isFunction(fn)) {
      fn.call(self);
    }
    self = fn = void 0;
  }, 0);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/enc-hex");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/enc-utf8");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/hmac-sha256");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("es5-shim");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("es6-shim");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })
/******/ ]);
//# sourceMappingURL=api.js.map