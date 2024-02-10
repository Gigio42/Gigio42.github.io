// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/vendor/purecounter/purecounter_vanilla.js":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.5.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.PureCounter = t() : e.PureCounter = t();
}(self, function () {
  return e = {
    638: function _(e) {
      function t(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e;
      }
      function r(e) {
        return function (e) {
          if (Array.isArray(e)) return n(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
          }
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = {};
        for (var n in e) if (t == {} || t.hasOwnProperty(n)) {
          var o = c(e[n]);
          r[n] = o, n.match(/duration|pulse/) && (r[n] = "boolean" != typeof o ? 1e3 * o : o);
        }
        return Object.assign({}, t, r);
      }
      function i(e, t) {
        var r = (t.end - t.start) / (t.duration / t.delay),
          n = "inc";
        t.start > t.end && (n = "dec", r *= -1);
        var o = c(t.start);
        e.innerHTML = u(o, t), !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
        var i = setInterval(function () {
          var a = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
            return e = c(e), t = c(t), parseFloat("inc" === r ? e + t : e - t);
          }(o, r, n);
          e.innerHTML = u(a, t), ((o = a) >= t.end && "inc" == n || o <= t.end && "dec" == n) && (e.innerHTML = u(t.end, t), t.pulse && (e.setAttribute("data-purecounter-duration", 0), setTimeout(function () {
            e.setAttribute("data-purecounter-duration", t.duration / 1e3);
          }, t.pulse)), clearInterval(i));
        }, t.delay);
      }
      function a(e, t) {
        return Math.pow(e, t);
      }
      function u(e, t) {
        var r = {
            minimumFractionDigits: t.decimals,
            maximumFractionDigits: t.decimals
          },
          n = "string" == typeof t.formater ? t.formater : void 0;
        return e = function (e, t) {
          if (t.filesizing || t.currency) {
            e = Math.abs(Number(e));
            var r = 1e3,
              n = t.currency && "string" == typeof t.currency ? t.currency : "",
              o = t.decimals || 1,
              i = ["", "K", "M", "B", "T"],
              u = "";
            t.filesizing && (r = 1024, i = ["bytes", "KB", "MB", "GB", "TB"]);
            for (var c = 4; c >= 0; c--) if (0 === c && (u = "".concat(e.toFixed(o), " ").concat(i[c])), e >= a(r, c)) {
              u = "".concat((e / a(r, c)).toFixed(o), " ").concat(i[c]);
              break;
            }
            return n + u;
          }
          return parseFloat(e);
        }(e, t), function (e, t) {
          if (t.formater) {
            var r = t.separator ? "string" == typeof t.separator ? t.separator : "," : "";
            return "en-US" !== t.formater && !0 === t.separator ? e : (n = r, e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, function (e, t, r, o, i) {
              var a = "",
                u = "";
              if (void 0 !== t ? (a = t.replace(new RegExp(/,/gi, "gi"), n), u = ",") : void 0 !== r ? a = r.replace(new RegExp(/\./gi, "gi"), n) : void 0 !== o && (a = o.replace(new RegExp(/ /gi, "gi"), n)), void 0 !== i) {
                var c = "," !== u && "," !== n ? "," : ".";
                a += void 0 !== i ? i.replace(new RegExp(/\.|,/gi, "gi"), c) : "";
              }
              return a;
            }));
          }
          var n;
          return e;
        }(e = t.formater ? e.toLocaleString(n, r) : parseInt(e).toString(), t);
      }
      function c(e) {
        return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e;
      }
      function f(e) {
        for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, r += e.offsetLeft;
        return t >= window.pageYOffset && r >= window.pageXOffset && t + o <= window.pageYOffset + window.innerHeight && r + n <= window.pageXOffset + window.innerWidth;
      }
      function s() {
        return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
      }
      e.exports = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = {
            start: 0,
            end: 100,
            duration: 2e3,
            delay: 10,
            once: !0,
            pulse: !1,
            decimals: 0,
            legacy: !0,
            filesizing: !1,
            currency: !1,
            separator: !1,
            formater: "us-US",
            selector: ".purecounter"
          },
          a = o(e, n);
        function d() {
          var e = document.querySelectorAll(a.selector);
          if (0 !== e.length) if (s()) {
            var t = new IntersectionObserver(p.bind(this), {
              root: null,
              rootMargin: "20px",
              threshold: .5
            });
            e.forEach(function (e) {
              t.observe(e);
            });
          } else window.addEventListener && (l(e), window.addEventListener("scroll", function (t) {
            l(e);
          }, {
            passive: !0
          }));
        }
        function l(e) {
          e.forEach(function (e) {
            !0 === v(e).legacy && f(e) && p([e]);
          });
        }
        function p(e, t) {
          e.forEach(function (e) {
            var r = e.target || e,
              n = v(r);
            if (n.duration <= 0) return r.innerHTML = u(n.end, n);
            if (!t && !f(e) || t && e.intersectionRatio < .5) {
              var o = n.start > n.end ? n.end : n.start;
              return r.innerHTML = u(o, n);
            }
            setTimeout(function () {
              return i(r, n);
            }, n.delay);
          });
        }
        function v(e) {
          var n = a,
            i = [].filter.call(e.attributes, function (e) {
              return /^data-purecounter-/.test(e.name);
            });
          return o(0 != i.length ? Object.assign.apply(Object, [{}].concat(r(i.map(function (e) {
            var r = e.name,
              n = e.value;
            return t({}, r.replace("data-purecounter-", "").toLowerCase(), c(n));
          })))) : {}, n);
        }
        d();
      };
    }
  }, t = {}, r = function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = t[n] = {
      exports: {}
    };
    return e[n](i, i.exports, r), i.exports;
  }(638), r;
  var e, t, r;
});
},{}],"../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50612" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/vendor/purecounter/purecounter_vanilla.js"], null)
//# sourceMappingURL=/purecounter_vanilla.6894738f.js.map