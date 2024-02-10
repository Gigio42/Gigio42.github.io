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
})({"assets/vendor/typed.js/typed.umd.js":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, s) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = s() : "function" == typeof define && define.amd ? define(s) : (t || self).Typed = s();
}(this, function () {
  function t() {
    return t = Object.assign ? Object.assign.bind() : function (t) {
      for (var s = 1; s < arguments.length; s++) {
        var e = arguments[s];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t;
    }, t.apply(this, arguments);
  }
  var s = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: Infinity,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function onBegin(t) {},
      onComplete: function onComplete(t) {},
      preStringTyped: function preStringTyped(t, s) {},
      onStringTyped: function onStringTyped(t, s) {},
      onLastStringBackspaced: function onLastStringBackspaced(t) {},
      onTypingPaused: function onTypingPaused(t, s) {},
      onTypingResumed: function onTypingResumed(t, s) {},
      onReset: function onReset(t) {},
      onStop: function onStop(t, s) {},
      onStart: function onStart(t, s) {},
      onDestroy: function onDestroy(t) {}
    },
    e = new ( /*#__PURE__*/function () {
      function e() {}
      var n = e.prototype;
      return n.load = function (e, n, i) {
        if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (t) {
          return t.trim();
        }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
          e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
          var r = Array.prototype.slice.apply(e.stringsElement.children),
            o = r.length;
          if (o) for (var a = 0; a < o; a += 1) e.strings.push(r[a].innerHTML.trim());
        }
        for (var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings) e.sequence[u] = u;
        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
          status: !1,
          typewrite: !0,
          curString: "",
          curStrPos: 0
        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e));
      }, n.getCurrentElContent = function (t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
      }, n.appendCursorAnimationCss = function (t) {
        var s = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + s + "]")) {
          var e = document.createElement("style");
          e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e);
        }
      }, n.appendFadeOutAnimationCss = function (t) {
        var s = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + s + "]")) {
          var e = document.createElement("style");
          e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e);
        }
      }, e;
    }())(),
    n = new ( /*#__PURE__*/function () {
      function t() {}
      var s = t.prototype;
      return s.typeHtmlChars = function (t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if ("<" === n || "&" === n) {
          var i;
          for (i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length););
          s++;
        }
        return s;
      }, s.backSpaceHtmlChars = function (t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if (">" === n || ";" === n) {
          var i;
          for (i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0););
          s--;
        }
        return s;
      }, t;
    }())(); /*#__PURE__*/
  return function () {
    function t(t, s) {
      e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return s.toggle = function () {
      this.pause.status ? this.start() : this.stop();
    }, s.stop = function () {
      this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
    }, s.start = function () {
      this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s.destroy = function () {
      this.reset(!1), this.options.onDestroy(this);
    }, s.reset = function (t) {
      void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s.begin = function () {
      var t = this;
      this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
        0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
      }, this.startDelay);
    }, s.typewrite = function (t, s) {
      var e = this;
      this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
      var i = this.humanizer(this.typeSpeed),
        r = 1;
      !0 !== this.pause.status ? this.timeout = setTimeout(function () {
        s = n.typeHtmlChars(t, s, e);
        var i = 0,
          o = t.substring(s);
        if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
          var a = 1;
          a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
        }
        if ("`" === o.charAt(0)) {
          for (; "`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)););
          var u = t.substring(0, s),
            p = t.substring(u.length + 1, s + r),
            c = t.substring(s + r + 1);
          t = u + p + c, r--;
        }
        e.timeout = setTimeout(function () {
          e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
        }, i);
      }, i) : this.setPauseStatus(t, s, !0);
    }, s.keepTyping = function (t, s, e) {
      0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
      var n = t.substring(0, s += e);
      this.replaceText(n), this.typewrite(t, s);
    }, s.doneTyping = function (t, s) {
      var e = this;
      this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
        e.backspace(t, s);
      }, this.backDelay));
    }, s.backspace = function (t, s) {
      var e = this;
      if (!0 !== this.pause.status) {
        if (this.fadeOut) return this.initFadeOut();
        this.toggleBlinking(!1);
        var i = this.humanizer(this.backSpeed);
        this.timeout = setTimeout(function () {
          s = n.backSpaceHtmlChars(t, s, e);
          var i = t.substring(0, s);
          if (e.replaceText(i), e.smartBackspace) {
            var r = e.strings[e.arrayPos + 1];
            e.stopNum = r && i === r.substring(0, s) ? s : 0;
          }
          s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
        }, i);
      } else this.setPauseStatus(t, s, !1);
    }, s.complete = function () {
      this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
    }, s.setPauseStatus = function (t, s, e) {
      this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
    }, s.toggleBlinking = function (t) {
      this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s.humanizer = function (t) {
      return Math.round(Math.random() * t / 2) + t;
    }, s.shuffleStringsIfNeeded = function () {
      this.shuffle && (this.sequence = this.sequence.sort(function () {
        return Math.random() - .5;
      }));
    }, s.initFadeOut = function () {
      var t = this;
      return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
        t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
      }, this.fadeOutDelay);
    }, s.replaceText = function (t) {
      this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
    }, s.bindFocusEvents = function () {
      var t = this;
      this.isInput && (this.el.addEventListener("focus", function (s) {
        t.stop();
      }), this.el.addEventListener("blur", function (s) {
        t.el.value && 0 !== t.el.value.length || t.start();
      }));
    }, s.insertCursor = function () {
      this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t;
  }();
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
},{}]},{},["../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/vendor/typed.js/typed.umd.js"], null)
//# sourceMappingURL=/typed.umd.4b43c124.js.map