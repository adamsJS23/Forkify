// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
/************************************************************************ */ /*********************CONTROLLER, -APPLICATION LOGIC*************************/ /************************************************************************ */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelJs = require("./model.js"); //Import everything and rename it
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchResultViewJs = require("./views/searchResultView.js");
var _searchResultViewJsDefault = parcelHelpers.interopDefault(_searchResultViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _servingsViewJs = require("./views/servingsView.js");
var _servingsViewJsDefault = parcelHelpers.interopDefault(_servingsViewJs);
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
if (module.hot) module.hot.accept();
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>
/************************************************** */ /***********CONTROL RECIPE LOADING***************** */ /************************************************** */ async function controlRecipes() {
    try {
        const id = window.location.hash.slice(1);
        // Checking if there is no id when the application is loaded
        if (!id) {
            // When the page is loaded for the first time we render this message to the user:
            // Start by searching for a recipe or an ingredient. Have fun!
            (0, _recipeViewJsDefault.default).renderMessage();
            return;
        }
        (0, _recipeViewJsDefault.default).renderSpinner();
        // Loading recipe data
        await _modelJs.loadRecipe(id);
        // Rendering the recipe in the the recipe view
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
        console.error(err);
    }
}
/************************************************** */ /***********CONTROL SEARCH RESULT***************** */ /************************************************** */ async function controlSearchResult() {
    try {
        // Get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        (0, _searchResultViewJsDefault.default).renderSpinner();
        // Loading search result
        await _modelJs.loadSearchResult(query);
        if (_modelJs.state.search.results.length === 0) throw new Error();
        //  Reset page propertie to 1 when make a new search
        _modelJs.state.search.page = 1;
        // Render Search result
        // SearchResultView.render(model.state.search.results); Here we used to passed all the results in one go
        // The code line below will render the frist ten result
        (0, _searchResultViewJsDefault.default).render(_modelJs.getSearchResult());
        // Rendering for the first time pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        (0, _searchResultViewJsDefault.default).renderError();
    }
}
/************************************************** */ /***********CONTROL PAGINATION***************** */ /************************************************** */ function controlPagination(goToPage) {
    // Rendering new search result
    (0, _searchResultViewJsDefault.default).render(_modelJs.getSearchResult(goToPage));
    // Rendering new pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
}
/************************************************** */ /***********CONTROL SERVINGS***************** */ /************************************************** */ function controlServings(newServings) {
    _modelJs.getservings(newServings);
    (0, _servingsViewJsDefault.default).render(_modelJs.state.recipe);
}
function init() {
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResult);
    (0, _paginationViewJsDefault.default).addHandlerPagination(controlPagination);
    (0, _servingsViewJsDefault.default).addHandlerServings(controlServings);
}
init();

},{"url:../img/icons.svg":"loVOp","./model.js":"Y4A21","./views/recipeView.js":"l60JC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/searchResultView.js":"jcmmR","./views/searchView.js":"9OQAM","./views/paginationView.js":"6z7bi","./views/servingsView.js":"0343m"}],"loVOp":[function(require,module,exports) {
module.exports = require("dd164bdab3275bef").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"dd164bdab3275bef":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"Y4A21":[function(require,module,exports) {
/************************************************************************ */ /*********************MODEL, -STATE-BUSINESS LOGIC- HTTP LIBRARY**********/ /************************************************************************ */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
/**********************LODING RECIPE BUSINESS LOGIC************************ */ parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
/************************SEARCH FOR A RECIPE BUSINESS LOGIC******************** */ parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
/*********************PAGINATION BUSINESS LOGIC******************************* */ parcelHelpers.export(exports, "getSearchResult", ()=>getSearchResult);
/*********************PAGINATION BUSINESS LOGIC******************************* */ parcelHelpers.export(exports, "getservings", ()=>getservings);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultPerPage: (0, _configJs.RESULT_PER_PAGE),
        page: 1
    },
    servingsValue: "",
    bookmarks: []
};
async function loadRecipe(id) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}/${id}?`);
        console.log(data);
        const { recipe  } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            cookingTime: recipe.cooking_time,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            ingredients: recipe.ingredients,
            image: recipe.image_url
        };
    } catch (err) {
        throw err;
    }
}
async function loadSearchResult(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}?search=${query}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
    } catch (err) {
        throw err;
    }
}
function getSearchResult(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultPerPage; //0
    const end = page * state.search.resultPerPage; //10
    return state.search.results.slice(start, end);
}
function getservings(newServings) {
    const newIngQuanity = state.recipe.ingredients.map((ing)=>{
        quantity = ing.quantity ? (ing.quantity * newServings / state.recipe.servings).toFixed(2) : "";
        unit = ing.unit;
        description = ing.description;
        return {
            unit,
            quantity,
            description
        };
    });
    state.recipe.servings = newServings;
    state.recipe.ingredients = newIngQuanity;
}

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RESULT_PER_PAGE", ()=>RESULT_PER_PAGE);
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes`;
const TIMEOUT_SEC = 10;
const RESULT_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
async function getJSON(url) {
    try {
        // const response = await fetch(url);
        const response = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message}, ${response.status}`);
        return data;
    } catch (err) {
        throw err;
    }
}

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
/************************************************************************ */ /**********VIEW, - RENDERING THE RECIPE FROM THE API TO THE ***************/ /***********************BY USING CLASSES******************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
// import { Fraction } from 'fractional';
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try an other one!";
    _message = "Start by searching for a recipe or an ingredient. Have fun!";
    _generateMarkup() {
        return `<figure class="recipe__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
                                    <h1 class="recipe__title">
                                      <span>${this._data.title}</span>
                                    </h1>
                                  </figure>
  
                                  <div class="recipe__details">
                                    <div class="recipe__info">
                                      <svg class="recipe__info-icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
                                      </svg>
                                      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                                      <span class="recipe__info-text">minutes</span>
                                    </div>
                                    <div class="recipe__info">
                                      <svg class="recipe__info-icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
                                      </svg>
                                      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                                      <span class="recipe__info-text">servings</span>
  
                                      <div class="recipe__info-buttons">
                                        <button class="btn--tiny btn--decrease-servings">
                                          <svg>
                                            <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                                          </svg>
                                        </button>
                                        <button class="btn--tiny btn--increase-servings">
                                          <svg>
                                            <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
  
                                    <div class="recipe__user-generated">
                                      
                                    </div>
                                    <button class="btn--round">
                                      <svg class="">
                                        <use href="${0, _iconsSvgDefault.default}#icon-bookmark"></use>
                                      </svg>
                                    </button>
                                  </div>
  
                                  <div class="recipe__ingredients">
                                    <h2 class="heading--2">Recipe ingredients</h2>
                                    <ul class="recipe__ingredient-list">
                                                    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
                                    </ul>
                                  </div>
  
                                  <div class="recipe__directions">
                                    <h2 class="heading--2">How to cook it</h2>
                                    <p class="recipe__directions-text">
                                      This recipe was carefully designed and tested by
                                      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                                      directions at their website.
                                    </p>
                                    <a
                                      class="btn--small recipe__btn"
                                      href="${this._data.sourceUrl}"
                                    >
                                      <span>Directions</span>
                                      <svg class="search__icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                                      </svg>
                                    </a>
                      </div>`;
    }
    _generateMarkupIngredient(ingredient) {
        let { unit , quantity , description  } = ingredient;
        return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${quantity ? quantity : ""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${unit ? unit : ""}</span>
              ${description}
            </div>
          </li>`;
    }
    // Listening for the hashchange and load event to load a recipe
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((event)=>{
            window.addEventListener(event, handler);
        });
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp","./View.js":"5cUXS"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        this._data = data;
        const markUp = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markUp = `<div class="spinner">
                      <svg>
                        <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
                      </svg>
                    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    renderError(message = this._errorMessage) {
        this._clear();
        const markUp = `<div class="error">
                    <div>
                        <svg>
                          <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                        </svg>
                      </div>
                      <p>${message}</p>
                  </div>`;
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    renderMessage(message = this._message) {
        this._clear();
        const markUp = `<div class="message">
                    <div>
                      <svg>
                        <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                      </svg>
                    </div>
                    <p>${message}</p>
                  </div>`;
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcmmR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class SearchResultView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "We could not found any recipe for your query. Please try again! :)";
    _message = "";
    render(data) {
        this._data = data;
        console.log(this._data);
        const markUp = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    _generateMarkup() {
        return this._data.map(this._generatePreview).join("");
    }
    _generatePreview(recipe) {
        return `<li class="preview">
                <a class="preview__link" href="#${recipe.id}">
                  <figure class="preview__fig">
                    <img src="${recipe.image}" alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${recipe.title}</h4>
                    <p class="preview__publisher">${recipe.publisher}</p>

                  </div>
                </a>
              </li>
            `;
    }
}
exports.default = new SearchResultView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector(".search");
    getQuery() {
        const query = this._parentElement.querySelector(".search__field").value;
        this._clear();
        return query;
    }
    _clear() {
        this._parentElement.querySelector(".search__field").value = "";
        this._parentElement.querySelector(".search__field").blur();
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PaginationView extends (0, _viewJsDefault.default) {
    // search: { query: '', results: [], resultPerPage: RESULT_PER_PAGE, page: 1 },
    _parentElement = document.querySelector(".pagination");
    _generateMarkup() {
        const pageNumber = Math.ceil(this._data.results.length / this._data.resultPerPage);
        const currPage = this._data.page;
        console.log(pageNumber);
        console.log(currPage);
        // We are on Page1 and there are others pages
        if (currPage === 1 && pageNumber > 1) return `<button class="btn--inline pagination__btn--next" data-curr-page='${currPage + 1}'>
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>`;
        // We are not on page1 and there other pages
        if (currPage > 1 && currPage < pageNumber) return `<button class="btn--inline pagination__btn--prev" data-curr-page='${currPage - 1}'>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>
              <button class="btn--inline pagination__btn--next" data-curr-page='${currPage + 1}'>
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>`;
        // We are on the last page and there other pages
        if (currPage === pageNumber && pageNumber > 1) return `<button class="btn--inline pagination__btn--prev" data-curr-page='${currPage - 1}'>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>
              `;
        // Page number is 1 and there not other pages
        if (pageNumber === 1) return ``;
    }
    addHandlerPagination(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const { currPage  } = btn.dataset;
            handler(+currPage);
        });
    }
}
exports.default = new PaginationView();

},{"url:../../img/icons.svg":"loVOp","./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0343m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ServingsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _generateMarkup() {
        return `<figure class="recipe__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
                                    <h1 class="recipe__title">
                                      <span>${this._data.title}</span>
                                    </h1>
                                  </figure>
  
                                  <div class="recipe__details">
                                    <div class="recipe__info">
                                      <svg class="recipe__info-icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
                                      </svg>
                                      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                                      <span class="recipe__info-text">minutes</span>
                                    </div>
                                    <div class="recipe__info">
                                      <svg class="recipe__info-icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
                                      </svg>
                                      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                                      <span class="recipe__info-text">servings</span>
  
                                      <div class="recipe__info-buttons">
                                        <button class="btn--tiny btn--decrease-servings">
                                          <svg>
                                            <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                                          </svg>
                                        </button>
                                        <button class="btn--tiny btn--increase-servings">
                                          <svg>
                                            <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
  
                                    <div class="recipe__user-generated">
                                      
                                    </div>
                                    <button class="btn--round">
                                      <svg class="">
                                        <use href="${0, _iconsSvgDefault.default}#icon-bookmark"></use>
                                      </svg>
                                    </button>
                                  </div>
  
                                  <div class="recipe__ingredients">
                                    <h2 class="heading--2">Recipe ingredients</h2>
                                    <ul class="recipe__ingredient-list">
                                                    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
                                    </ul>
                                  </div>
  
                                  <div class="recipe__directions">
                                    <h2 class="heading--2">How to cook it</h2>
                                    <p class="recipe__directions-text">
                                      This recipe was carefully designed and tested by
                                      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                                      directions at their website.
                                    </p>
                                    <a
                                      class="btn--small recipe__btn"
                                      href="${this._data.sourceUrl}"
                                    >
                                      <span>Directions</span>
                                      <svg class="search__icon">
                                        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                                      </svg>
                                    </a>
                      </div>`;
    }
    _generateMarkupIngredient(ingredient) {
        let { unit , quantity , description  } = ingredient;
        return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${quantity ? quantity : ""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${unit ? unit : ""}</span>
              ${description}
            </div>
          </li>`;
    }
    addHandlerServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--tiny");
            if (!btn) return;
            let newServings = +document.querySelector(".recipe__info-data--people").textContent;
            btn.classList.contains("btn--increase-servings") ? newServings++ : newServings--;
            handler(newServings);
        });
    }
}
exports.default = new ServingsView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
