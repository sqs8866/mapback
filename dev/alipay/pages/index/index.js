"use strict";
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/locationUtil */ "./src/utils/locationUtil.ts");
/* harmony import */ var _MapController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapController */ "./src/pages/index/MapController/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);













var Index = /*#__PURE__*/function (_Component) {
  (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);
  var _super = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Index);
  function Index(props) {
    var _this;
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Index);
    _this = _super.call(this, props);
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "mapControllerRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());
    _this.state = {};
    return _this;
  }
  (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getNowLocation();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "getNowLocation",
    value: function () {
      var _getNowLocation = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee2() {
        var position;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentPosition();
            case 2:
              position = _context2.sent;
              console.log('zzzzzz', position);
              if (this.mapControllerRef.current) {
                this.mapControllerRef.current.startAddressChanged(position);
              }
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getNowLocation() {
        return _getNowLocation.apply(this, arguments);
      }
      return getNowLocation;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MapController__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: this.mapControllerRef
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/api/actions.ts":
/*!****************************!*\
  !*** ./src/api/actions.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mGpsLocation": function() { return /* binding */ mGpsLocation; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.ts");

var mGpsLocation = function mGpsLocation(params) {
  Object.assign(params, {
    apiUrl: 'gps/location',
    gpsType: 'baidu'
  });
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__.getOpen)(params);
};

/***/ }),

/***/ "./src/api/request.ts":
/*!****************************!*\
  !*** ./src/api/request.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOpen": function() { return /* binding */ getOpen; }
/* harmony export */ });
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/md5 */ "./src/lib/md5.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/utils */ "./src/utils/utils.ts");




var getSig = function getSig(params) {
  var joinedStr = '';
  Object.keys(params).sort().forEach(function (key) {
    if (params[key] == null) params[key] = '';
    joinedStr += key + params[key];
  });
  return (0,_lib_md5__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__.number + joinedStr + _utils_utils__WEBPACK_IMPORTED_MODULE_1__.number).slice(0, 30);
};
var getParams = function getParams(options) {
  delete options.apiUrl;
  options.sig = getSig(options);
  return options;
};
var request = function request(model) {
  var reqUrl = model.apiUrl;
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: reqUrl,
      data: getParams(model),
      method: 'GET',
      success: function success(res) {
        if (res.statusCode * 1 != 200) {
          reject(res);
          return;
        }
        resolve(res.data);
      },
      fail: function fail(err) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.queryError)('网络错误请重试');
        reject(err);
      }
    });
  });
};
var getOpen = function getOpen(params) {
  return request((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, params), {}, {
    apiUrl: 'https://fangfang.d.kuaimazhixing.com/frontapi/' + params.apiUrl
  }));
};

/***/ }),

/***/ "./src/lib/GPS.js":
/*!************************!*\
  !*** ./src/lib/GPS.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GPS": function() { return /* binding */ GPS; }
/* harmony export */ });
/**
 * Created by rain on 15/1/29.
 */
var GPS = {
  PI: 3.14159265358979324,
  x_pi: 3.14159265358979324 * 3000.0 / 180.0,
  delta: function delta(lat, lon) {
    // Krasovsky 1940
    //
    // a = 6378245.0, 1/f = 298.3
    // b = a * (1 - f)
    // ee = (a^2 - b^2) / a^2;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var dLat = this.transformLat(lon - 105.0, lat - 35.0);
    var dLon = this.transformLon(lon - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * this.PI;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * this.PI);
    dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * this.PI);
    return {
      'lat': dLat,
      'lon': dLon
    };
  },
  //WGS-84 to GCJ-02
  gcj_encrypt: function gcj_encrypt(wgsLat, wgsLon) {
    if (this.outOfChina(wgsLat, wgsLon)) return {
      'lat': wgsLat,
      'lon': wgsLon
    };
    var d = this.delta(wgsLat, wgsLon);
    return {
      'lat': wgsLat + d.lat,
      'lon': wgsLon + d.lon
    };
  },
  //GCJ-02 to WGS-84
  gcj_decrypt: function gcj_decrypt(gcjLat, gcjLon) {
    if (this.outOfChina(gcjLat, gcjLon)) return {
      'lat': gcjLat,
      'lon': gcjLon
    };
    var d = this.delta(gcjLat, gcjLon);
    return {
      'lat': gcjLat - d.lat,
      'lon': gcjLon - d.lon
    };
  },
  //GCJ-02 to WGS-84 exactly
  gcj_decrypt_exact: function gcj_decrypt_exact(gcjLat, gcjLon) {
    var initDelta = 0.01;
    var threshold = 0.000000001;
    var dLat = initDelta,
      dLon = initDelta;
    var mLat = gcjLat - dLat,
      mLon = gcjLon - dLon;
    var pLat = gcjLat + dLat,
      pLon = gcjLon + dLon;
    var wgsLat,
      wgsLon,
      i = 0;
    while (1) {
      wgsLat = (mLat + pLat) / 2;
      wgsLon = (mLon + pLon) / 2;
      var tmp = this.gcj_encrypt(wgsLat, wgsLon);
      dLat = tmp.lat - gcjLat;
      dLon = tmp.lon - gcjLon;
      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break;
      if (dLat > 0) pLat = wgsLat;else mLat = wgsLat;
      if (dLon > 0) pLon = wgsLon;else mLon = wgsLon;
      if (++i > 10000) break;
    }
    return {
      'lat': wgsLat,
      'lon': wgsLon
    };
  },
  //GCJ-02 to BD-09
  //tengxun=>baidu
  bd_encrypt: function bd_encrypt(gcjLat, gcjLon) {
    var x = gcjLon,
      y = gcjLat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
    var bdLon = z * Math.cos(theta) + 0.0065;
    var bdLat = z * Math.sin(theta) + 0.006;
    return {
      'lat': bdLat,
      'lon': bdLon
    };
  },
  //BD-09 to GCJ-02
  //baidu=>tengxun
  bd_decrypt: function bd_decrypt(bdLat, bdLon) {
    var x = bdLon - 0.0065,
      y = bdLat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
    var gcjLon = z * Math.cos(theta);
    var gcjLat = z * Math.sin(theta);
    return {
      'lat': gcjLat,
      'lon': gcjLon
    };
  },
  distance: function distance(latA, logA, latB, logB) {
    var earthR = 6371000;
    var x = Math.cos(latA * Math.PI / 180) * Math.cos(latB * Math.PI / 180) * Math.cos((logA - logB) * Math.PI / 180);
    var y = Math.sin(latA * Math.PI / 180) * Math.sin(latB * Math.PI / 180);
    var s = x + y;
    if (s > 1) s = 1;
    if (s < -1) s = -1;
    var alpha = Math.acos(s);
    var distance = alpha * earthR;
    return distance;
  },
  outOfChina: function outOfChina(lat, lon) {
    if (lon < 72.004 || lon > 137.8347) return true;
    if (lat < 0.8293 || lat > 55.8271) return true;
    return false;
  },
  transformLat: function transformLat(x, y) {
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;
    return ret;
  },
  transformLon: function transformLon(x, y) {
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;
    return ret;
  },
  //两个点的角度
  getRotateByGps: function getRotateByGps(x, y) {
    var a = x.lat * Math.PI / 180;
    var b = x.lng * Math.PI / 180;
    var c = y.lat * Math.PI / 180;
    var d = y.lng * Math.PI / 180;
    var y = Math.sin(d - b) * Math.cos(c);
    var x = Math.cos(a) * Math.sin(c) - Math.sin(a) * Math.cos(c) * Math.cos(d - b);
    var z = Math.atan2(y, x) * 180 / Math.PI;
    return parseFloat((z + 360.0) % 360.0);
  }
};

/***/ }),

/***/ "./src/lib/md5.js":
/*!************************!*\
  !*** ./src/lib/md5.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bit_rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function binl_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5_ff(a, b, c, d, x[i], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5_ii(a, b, c, d, x[i], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return [a, b, c, d];
}
/*
 * Convert an array of little-endian words to a string
 */

function binl2rstr(input) {
  var i;
  var output = "";
  var length32 = input.length * 32;
  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
  }
  return output;
}
/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }
  var length8 = input.length * 8;
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }
  return output;
}
/*
 * Calculate the MD5 of a raw string
 */

function rstr_md5(s) {
  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}
/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */

function rstr_hmac_md5(key, data) {
  var i;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = undefined;
  if (bkey.length > 16) {
    bkey = binl_md5(bkey, key.length * 8);
  }
  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }
  hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}
/*
 * Convert a raw string to a hex string
 */

function rstr2hex(input) {
  var hex_tab = "0123456789abcdef";
  var output = "";
  var x;
  var i;
  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hex_tab.charAt(x >>> 4 & 0x0f) + hex_tab.charAt(x & 0x0f);
  }
  return output;
}
/*
 * Encode a string as utf-8
 */

function str2rstr_utf8(input) {
  return unescape(encodeURIComponent(input));
}
/*
 * Take string arguments and return either raw or hex encoded strings
 */

function raw_md5(s) {
  return rstr_md5(str2rstr_utf8(s));
}
function hex_md5(s) {
  return rstr2hex(raw_md5(s));
}
function raw_hmac_md5(k, d) {
  return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
}
function hex_hmac_md5(k, d) {
  return rstr2hex(raw_hmac_md5(k, d));
}
function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hex_md5(string);
    }
    return raw_md5(string);
  }
  if (!raw) {
    return hex_hmac_md5(key, string);
  }
  return raw_hmac_md5(key, string);
}
/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./src/pages/index/MapController/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/index/MapController/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapController; }
/* harmony export */ });
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js");
/* harmony import */ var _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/locationUtil */ "./src/utils/locationUtil.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);














var MapController = /*#__PURE__*/function (_Component) {
  (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(MapController, _Component);
  var _super = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(MapController);
  function MapController(props) {
    var _this;
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MapController);
    _this = _super.call(this, props);
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "env", "alipay");
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "regionChangeTime", 0);
    /**
    * 滑动地图
    * */
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "regionchange", _this.debounce(function (e) {
      console.log('++++++++regionchange+++++');
      console.log(e);
      if (e.type === 'begin') {
        if (_this.env == 'alipay') {
          _this.regionChangeTime = Number(e.timeStamp);
        }
        return;
      }
      if (e.type === 'end') {
        if (e.causedBy === 'update') return;
        if (_this.env == 'alipay' && Number(e.timeStamp) - _this.regionChangeTime <= 100) {
          _this.regionChangeTime = Number(e.timeStamp);
          return;
        }
        var cLoc;
        switch (_this.env) {
          case 'weapp':
          case 'tt':
            cLoc = e.detail.centerLocation;
            break;
          case 'alipay':
            cLoc = {
              latitude: Number(e.latitude),
              longitude: Number(e.longitude)
            };
            break;
        }
        _this.mapChangeFun(cLoc.latitude, cLoc.longitude);
      }
    }, 500));
    _this.state = {
      mapInfo: {
        latitude: 39.908823,
        longitude: 116.39747
      },
      calloutAddress: '正在获取您的位置...'
    };
    return _this;
  }
  //地图区域变化事件
  (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(MapController, [{
    key: "mapChangeFun",
    value: function () {
      var _mapChangeFun = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee(lat, lon) {
        var position;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getBDAddressMsg(lat, lon);
            case 2:
              position = _context.sent;
              this.startAddressChanged(position);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function mapChangeFun(_x, _x2) {
        return _mapChangeFun.apply(this, arguments);
      }
      return mapChangeFun;
    }() // eslint-disable-next-line react/sort-comp
  }, {
    key: "startAddressChanged",
    value: function () {
      var _startAddressChanged = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee2(pos) {
        var loc, cityId;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (pos && pos.loc) {
                loc = pos.loc, cityId = pos.cityId;
                this.setState({
                  mapInfo: loc,
                  calloutAddress: loc.name
                });
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function startAddressChanged(_x3) {
        return _startAddressChanged.apply(this, arguments);
      }
      return startAddressChanged;
    }()
  }, {
    key: "debounce",
    value: function debounce(fn) {
      var _this2 = this;
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var timer = null;
      return function (event) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.call(_this2, event);
        }, delay);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        mapInfo = _this$state.mapInfo,
        calloutAddress = _this$state.calloutAddress;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Map, {
          id: "map",
          style: {
            width: '100%',
            height: '100vh'
          },
          scale: 14,
          latitude: mapInfo.latitude,
          longitude: mapInfo.longitude,
          showLocation: true,
          onRegionChange: this.regionchange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "index-icon-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            className: "index-icon-img",
            src: __webpack_require__(/*! ../../../res/center-location.png */ "./src/res/center-location.png")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "index-callout",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "index-callout-center",
            children: calloutAddress
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            className: "index-arrow-right",
            src: __webpack_require__(/*! ../../../res/map-arrow2.png */ "./src/res/map-arrow2.png")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "index-arrow-down"
          })]
        })]
      });
    }
  }]);
  return MapController;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/utils/locationUtil.ts":
/*!***********************************!*\
  !*** ./src/utils/locationUtil.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/actions */ "./src/api/actions.ts");
/* harmony import */ var _lib_GPS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/GPS */ "./src/lib/GPS.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");








var lastLoc;
var LocationClass = /*#__PURE__*/function () {
  function LocationClass() {
    (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, LocationClass);
  }
  (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(LocationClass, [{
    key: "getLocation",
    value:
    //获取地理位置
    function getLocation() {
      var _this = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve) {
        return _this.getLocationCom(resolve, params);
      });
    }
  }, {
    key: "getLocationCom",
    value: function getLocationCom(resolve, params) {
      var _this2 = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getLocation({
        type: "gcj02",
        success: function () {
          var _success = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee(resLoc) {
            var baseData;
            return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  lastLoc = resLoc;
                  _context.next = 3;
                  return _this2.getBDAddressMsg(resLoc.latitude, resLoc.longitude);
                case 3:
                  baseData = _context.sent;
                  if (baseData) {
                    resolve(baseData);
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }(),
        fail: function () {
          var _fail = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2(res) {
            return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.log('rr');
                  resolve(_this2.getAuthor());
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function fail(_x2) {
            return _fail.apply(this, arguments);
          }
          return fail;
        }()
      });
    }
    //经纬度转换成地理位置信息
  }, {
    key: "getBDAddressMsg",
    value: function () {
      var _getBDAddressMsg = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3(lat, lon, bd) {
        var coord, json, _json$location$street, name, component, loc, _json$location$gps, latitude, longitude;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              coord = bd ? {
                lat: lat,
                lon: lon
              } : _lib_GPS__WEBPACK_IMPORTED_MODULE_2__.GPS.bd_encrypt(lat, lon);
              _context3.prev = 1;
              _context3.next = 4;
              return this.getCityInfo(coord);
            case 4:
              json = _context3.sent;
              if (!(json.code != "0")) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return");
            case 7:
              if (bd) {
                coord = _lib_GPS__WEBPACK_IMPORTED_MODULE_2__.GPS.bd_decrypt(lat, lon);
              }
              _json$location$street = json.location.street, name = _json$location$street.name, component = _json$location$street.component;
              loc = {
                //腾讯坐标
                latitude: bd ? coord.lat : lat,
                longitude: bd ? coord.lon : lon,
                name: name,
                cityName: component.city,
                district: component.district
              };
              _json$location$gps = json.location.gps, latitude = _json$location$gps.latitude, longitude = _json$location$gps.longitude;
              return _context3.abrupt("return", {
                cityId: component.cityId,
                loc: loc,
                latitude: latitude,
                //百度坐标
                longitude: longitude,
                formattedAddress: component.formattedAddress
              });
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              (0,_utils__WEBPACK_IMPORTED_MODULE_3__.showModal)({
                content: "定位信息转换失败!请重新获取定位信息"
              });
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[1, 14]]);
      }));
      function getBDAddressMsg(_x3, _x4, _x5) {
        return _getBDAddressMsg.apply(this, arguments);
      }
      return getBDAddressMsg;
    }() //获取当前位置，并替换strore中存的值
  }, {
    key: "getCurrentPosition",
    value: function () {
      var _getCurrentPosition = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee4(params) {
        var data, loc, cityId, latitude, longitude;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.getLocation(params);
            case 2:
              data = _context4.sent;
              if (data) {
                loc = data.loc, cityId = data.cityId, latitude = data.latitude, longitude = data.longitude; // store.dispatch(
                //   updateGlobalData({
                //     nowLocBD: {
                //       name: loc.name,
                //       cityName: loc.cityName,
                //       cityId,
                //       latitude,
                //       longitude,
                //     },
                //   })
                // );
              }
              return _context4.abrupt("return", data);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getCurrentPosition(_x6) {
        return _getCurrentPosition.apply(this, arguments);
      }
      return getCurrentPosition;
    }()
  }, {
    key: "getCityInfo",
    value: function () {
      var _getCityInfo = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee5(coord) {
        var json;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0,_api_actions__WEBPACK_IMPORTED_MODULE_1__.mGpsLocation)({
                latitude: coord.lat,
                longitude: coord.lon
              });
            case 2:
              json = _context5.sent;
              if (json.code != "0") {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.queryError)(json.message);
              }
              return _context5.abrupt("return", json);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getCityInfo(_x7) {
        return _getCityInfo.apply(this, arguments);
      }
      return getCityInfo;
    }()
  }, {
    key: "getAuthor",
    value: function () {
      var _getAuthor = (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee6() {
        var opend;
        return (0,D_aWork_mapback_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.getLocationOpened();
            case 2:
              opend = _context6.sent;
              if (!opend) {
                _context6.next = 5;
                break;
              }
              return _context6.abrupt("return", Promise.resolve(1));
            case 5:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: "温馨提醒",
                content: "需要获取您的地理位置才能使用小程序",
                cancelText: "取消",
                confirmText: "开启定位",
                complete: function complete(res) {
                  if (res.confirm) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().openSetting();
                  }
                  return Promise.resolve(0);
                }
              });
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getAuthor() {
        return _getAuthor.apply(this, arguments);
      }
      return getAuthor;
    }()
  }, {
    key: "getLocationOpened",
    value: function getLocationOpened() {
      return new Promise(function (resolve) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
          withSubscriptions: false,
          complete: function complete(res) {
            //支付宝是location
            resolve(res.authSetting["location"] || res.authSetting["scope.userLocation"] || res.authSetting["scope.userLocationBackground"]);
          }
        });
      });
    }
  }, {
    key: "mGetNearbypois",
    value: function mGetNearbypois(obj) {
      console.log(obj);
      var list = {
        '北京市': [{
          address: "北京市东城区前门东路大江胡同120号",
          lng: "116.40600321905312",
          name: "台湾文化商务区",
          lat: "39.90127579107043"
        }, {
          address: "北京市东城区前门大街",
          lng: "116.40458389634735",
          name: "前门",
          lat: "39.90552392262052"
        }, {
          address: "北京市东城区西河沿219号",
          lng: "116.40778186396287",
          name: "永福219号",
          lat: "39.90545473693707"
        }, {
          address: "北京市东城区长巷二条1号",
          lng: "116.40777288090777",
          name: "长巷二条2号四合院",
          lat: "39.9047213643627"
        }, {
          address: "北京市东城区前门大街甲2号",
          lng: "116.4067577956815",
          name: "中国铁道博物馆-正阳门馆",
          lat: "39.906215775581735"
        }, {
          address: "北京市东城区西打磨厂街228号",
          lng: "116.40784474534857",
          name: "METAL HANDS(前门店)",
          lat: "39.904894330305545"
        }, {
          address: "北京市东城区崇文门西河沿街253号",
          lng: "116.4064164395877",
          name: "前门(地铁站)",
          lat: "39.905337121113554"
        }],
        '上海市': [{
          address: "威海路333弄1-38号",
          lng: "121.4718713798024",
          name: "中凯城市之光",
          lat: "31.232795176271356"
        }, {
          address: "上海市静安区延安中路470弄2号",
          lng: "121.47313799057146",
          name: "延安中路大型公共绿地",
          lat: "31.23085758899761"
        }, {
          address: "上海市静安区成都北路199号",
          lng: "121.47317392279186",
          name: "恒利国际大厦",
          lat: "31.233173425679293"
        }, {
          address: "上海市静安区延安东路立交桥与延安中路交叉路口往北约110米",
          lng: "121.47296731252456",
          name: "延安公园",
          lat: "31.231050577577133"
        }, {
          address: "大沽路368弄,大沽路398弄,威海路333弄",
          lng: "121.47326375334285",
          name: "中凯城市之光(一至三期)",
          lat: "31.231915161527073"
        }, {
          address: "上海市静安区成都北路129号",
          lng: "121.47366799082235",
          name: "清美鲜食(成都北路店)",
          lat: "31.23219306181424"
        }, {
          address: "上海市静安区成都北路333号",
          lng: "121.47289544808376",
          name: "上海招商局广场",
          lat: "31.234068867161838"
        }, {
          address: "上海市静安区老成都北路7弄30号",
          lng: "121.47335358389385",
          name: "中国共产党第二次全国代表大会会址纪念馆",
          lat: "31.230340377641525"
        }, {
          address: "上海市静安区成都北路165号",
          lng: "121.47344341444484",
          name: "上海市静安区南京西路街道社区卫生服务中心",
          lat: "31.2326330689141"
        }, {
          address: "上海市静安区大沽路346号206室",
          lng: "121.47372188915294",
          name: "南京西路街道社区党群服务中心",
          lat: "31.231876564199673"
        }],
        '杭州市': [{
          address: "浙江省杭州市西湖区文三路90号",
          lng: "120.15250312813247",
          name: "东部软件园",
          lat: "30.284741528047"
        }, {
          address: "浙江省杭州市西湖区朝晖街道中山北园",
          lng: "120.15490160384411",
          name: "小公园(莫干山路)",
          lat: "30.287470283973374"
        }, {
          address: "浙江省杭州市西湖区马塍路36-9号",
          lng: "120.15330262003636",
          name: "西湖区马塍路开立方咖啡(崇文公寓店)",
          lat: "30.287540450971857"
        }, {
          address: "浙江省杭州市西湖区西溪街道马塍路36-5号",
          lng: "120.15332058614655",
          name: "茅台酱香万家共享(马塍路店)",
          lat: "30.287462487637086"
        }, {
          address: "杭州市西湖区莫干山路245号",
          lng: "120.1551531293869",
          name: "邮电新村",
          lat: "30.28658149760478"
        }, {
          address: "浙江省杭州市西湖区马塍路36号",
          lng: "120.15360804390974",
          name: "西湖区西溪环卫所",
          lat: "30.28799263707933"
        }, {
          address: "杭州市西湖区莫干山路339号",
          lng: "120.15456923080542",
          name: "建工新村",
          lat: "30.28839024726183"
        }, {
          address: "杭州市西湖区马塍路36号",
          lng: "120.15224261953458",
          name: "崇文公寓",
          lat: "30.287057077287383"
        }, {
          address: "浙江省杭州市西湖区马塍路36号",
          lng: "120.15314092504455",
          name: "火炬高新科技园",
          lat: "30.288039414832348"
        }],
        '成都市': [{
          address: "成都市青羊区文翁路98号",
          lng: "104.06719314092445",
          name: "成都图书馆",
          lat: "30.658921402701353"
        }, {
          address: "成都市青羊区文庙后街63号",
          lng: "104.06580076738398",
          name: "文庙后街63号院",
          lat: "30.659100028669368"
        }, {
          address: "成都市青羊区文庙前街93号",
          lng: "104.06435449551292",
          name: "成都石室中学(文庙校区)",
          lat: "30.65981452920717"
        }, {
          address: "四川省成都市青羊区文庙前街93号",
          lng: "104.0648575465985",
          name: "成都石室中学-成都四中",
          lat: "30.65840882198544"
        }, {
          address: "文庙后街82号",
          lng: "104.06585466571457",
          name: "文庙后街82号院",
          lat: "30.66005528362151"
        }, {
          address: "四川省成都市青羊区文翁路139号-附4",
          lng: "104.06658229317766",
          name: "力迅领筑大厦",
          lat: "30.659698034918268"
        }, {
          address: "四川省成都市青羊区文翁路139号-附3号",
          lng: "104.06660025928785",
          name: "优可云端超市(人民公园店)",
          lat: "30.65976016522334"
        }, {
          address: "四川省成都市青羊区文庙后街63号附3号",
          lng: "104.06598042848597",
          name: "意峰广告印务",
          lat: "30.659154393028235"
        }, {
          address: "四川省成都市青羊区陕西街239号",
          lng: "104.06649246262666",
          name: "山水S酒店(天府广场店)",
          lat: "30.660466894604248"
        }, {
          address: "四川省成都市青羊区文庙后街80号",
          lng: "104.06566602155748",
          name: "中国信通院成渝信息通信研究院",
          lat: "30.659705801208617"
        }]
      };
      return list[obj.cityName || obj.name];
    }
  }]);
  return LocationClass;
}();
/* harmony default export */ __webpack_exports__["default"] = (new LocationClass());

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "number": function() { return /* binding */ number; },
/* harmony export */   "queryError": function() { return /* binding */ queryError; },
/* harmony export */   "showModal": function() { return /* binding */ showModal; }
/* harmony export */ });
/* unused harmony exports loading, getQueryString */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var showQueryError = false;
var queryError = function queryError(str, back) {
  if (showQueryError) {
    return;
  }
  showQueryError = true;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
    content: str || '网络错误请重试',
    showCancel: false,
    complete: function complete() {
      showQueryError = false;
      if (back) _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateBack({
        delta: 1
      });
    }
  });
};
var showModal = function showModal(tips) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
    title: tips.title || '提示',
    content: tips.content || '',
    showCancel: tips.cancel || false,
    complete: function complete(info) {
      if (tips.callBack) {
        tips.callBack(info);
      }
    }
  });
};
var loading = {
  show: function show(title) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
      title: title || "加载中",
      icon: "loading",
      mask: true,
      duration: 1000
    });
  },
  hide: function hide() {
    try {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideToast();
    } catch (error) {
      console.log('loading还是报错');
    }
  }
};
var getQueryString = function getQueryString(name, arg) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = arg.match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};
var number = '00590e77-dfab-4e5f-b6bc-0319eac00238';

/***/ }),

/***/ "./src/res/center-location.png":
/*!*************************************!*\
  !*** ./src/res/center-location.png ***!
  \*************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABGCAMAAACJ3iZ1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcSYqMiYqMiYqMiYqMiYqMjIyQGNjYyYqMikuNiYqMiYqMyYqMicrMyYqMicqMiktNCYqMv////v7+05RV8nKy6Kkp5WXm5KUmCktNaSmqSgsNKWnqtbw2fgAAAARdFJOUwCoemzd8wkC/Rm+l+ZHy2ItxA2/EwAAAWlJREFUSMftldl6gyAQhZF9cRuNJmn7/s9ZNIkCEZyL3LXnEv9vjrMwEBLJsMpyIbitmCFZGcohEKfHrKQCEgkq37mmhgPVTcpRDYfSNLatIKsqtC9wngx8oSi25aHLoH5mJGs4US0xxovW1KU4B4XEBXyEbDFg6ychPbvM0zRf0lNDWHxwv46D13j7TmuZNOU6PHVL22Nj3/EFjrG7JdGswtewaY4+cBJXcdrBKa4kHoytf/LWLS6ZFl8emin4PW12j2thT5JsMuJ+ehwGdMsi0YjBXZeLwwX0IQUuIElHsnCxHcZ4vYi2xFkVrNDCDWsNbp1VyS5Vmf906m3lunIeQcwD90odbntbyjd6PpJB4tmnpo+aKfr8k9SFYEcKsuFuKGmfJGGK4D5JrMxtm5/LE/CVT3fGEbUWk6tT8PGX7Jxbb6U2CHCppcVwSzodCpQAEgUSDeof/BtgA9CgQH8X6s+CDa8PrH8B6hFdx6Qb0QMAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/res/map-arrow2.png":
/*!********************************!*\
  !*** ./src/res/map-arrow2.png ***!
  \********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAK9JREFUWAntlsEJhDAQRWWvFqGdpBybWbAJ+3DtYe9ahOeNb8CBgBhPG5flD3wmZAJ5PCJYVSoZkAEZuDYQY6zJ0/r16S+fAOJBXsRqIj8B1QHyMSJKUKePADsydWonHchUaiO3lqmcnXSGqZ54Dems+BqKQNadZqG3xSH8Qi4PxGFm1o3PincuD0QwB/Myc1Cyb8hMxoz9Mb6J1Uzu+7Qd0iDIaN331GVABmTgXwxss5VoFnaBpT8AAAAASUVORK5CYII=";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i) ? i : String(i);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map