(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultContext",
    ()=>DefaultContext,
    "IconContext",
    ()=>IconContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(DefaultContext);
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/lib/iconBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenIcon",
    ()=>GenIcon,
    "IconBase",
    ()=>IconBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)");
var _excluded = [
    "attr",
    "size",
    "title"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(IconBase, _extends({
            attr: _objectSpread({}, data.attr)
        }, props), Tree2Element(data.child));
}
function IconBase(props) {
    var elem = (conf)=>{
        var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
            className: className,
            style: _objectSpread(_objectSpread({
                color: props.color || conf.color
            }, conf.style), props.style),
            height: computedSize,
            width: computedSize,
            xmlns: "http://www.w3.org/2000/svg"
        }), title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title), props.children);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"] !== undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"].Consumer, null, (conf)=>elem(conf)) : elem(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultContext"]);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// THIS FILE IS AUTO GENERATED
__turbopack_context__.s([
    "FiActivity",
    ()=>FiActivity,
    "FiAirplay",
    ()=>FiAirplay,
    "FiAlertCircle",
    ()=>FiAlertCircle,
    "FiAlertOctagon",
    ()=>FiAlertOctagon,
    "FiAlertTriangle",
    ()=>FiAlertTriangle,
    "FiAlignCenter",
    ()=>FiAlignCenter,
    "FiAlignJustify",
    ()=>FiAlignJustify,
    "FiAlignLeft",
    ()=>FiAlignLeft,
    "FiAlignRight",
    ()=>FiAlignRight,
    "FiAnchor",
    ()=>FiAnchor,
    "FiAperture",
    ()=>FiAperture,
    "FiArchive",
    ()=>FiArchive,
    "FiArrowDown",
    ()=>FiArrowDown,
    "FiArrowDownCircle",
    ()=>FiArrowDownCircle,
    "FiArrowDownLeft",
    ()=>FiArrowDownLeft,
    "FiArrowDownRight",
    ()=>FiArrowDownRight,
    "FiArrowLeft",
    ()=>FiArrowLeft,
    "FiArrowLeftCircle",
    ()=>FiArrowLeftCircle,
    "FiArrowRight",
    ()=>FiArrowRight,
    "FiArrowRightCircle",
    ()=>FiArrowRightCircle,
    "FiArrowUp",
    ()=>FiArrowUp,
    "FiArrowUpCircle",
    ()=>FiArrowUpCircle,
    "FiArrowUpLeft",
    ()=>FiArrowUpLeft,
    "FiArrowUpRight",
    ()=>FiArrowUpRight,
    "FiAtSign",
    ()=>FiAtSign,
    "FiAward",
    ()=>FiAward,
    "FiBarChart",
    ()=>FiBarChart,
    "FiBarChart2",
    ()=>FiBarChart2,
    "FiBattery",
    ()=>FiBattery,
    "FiBatteryCharging",
    ()=>FiBatteryCharging,
    "FiBell",
    ()=>FiBell,
    "FiBellOff",
    ()=>FiBellOff,
    "FiBluetooth",
    ()=>FiBluetooth,
    "FiBold",
    ()=>FiBold,
    "FiBook",
    ()=>FiBook,
    "FiBookOpen",
    ()=>FiBookOpen,
    "FiBookmark",
    ()=>FiBookmark,
    "FiBox",
    ()=>FiBox,
    "FiBriefcase",
    ()=>FiBriefcase,
    "FiCalendar",
    ()=>FiCalendar,
    "FiCamera",
    ()=>FiCamera,
    "FiCameraOff",
    ()=>FiCameraOff,
    "FiCast",
    ()=>FiCast,
    "FiCheck",
    ()=>FiCheck,
    "FiCheckCircle",
    ()=>FiCheckCircle,
    "FiCheckSquare",
    ()=>FiCheckSquare,
    "FiChevronDown",
    ()=>FiChevronDown,
    "FiChevronLeft",
    ()=>FiChevronLeft,
    "FiChevronRight",
    ()=>FiChevronRight,
    "FiChevronUp",
    ()=>FiChevronUp,
    "FiChevronsDown",
    ()=>FiChevronsDown,
    "FiChevronsLeft",
    ()=>FiChevronsLeft,
    "FiChevronsRight",
    ()=>FiChevronsRight,
    "FiChevronsUp",
    ()=>FiChevronsUp,
    "FiChrome",
    ()=>FiChrome,
    "FiCircle",
    ()=>FiCircle,
    "FiClipboard",
    ()=>FiClipboard,
    "FiClock",
    ()=>FiClock,
    "FiCloud",
    ()=>FiCloud,
    "FiCloudDrizzle",
    ()=>FiCloudDrizzle,
    "FiCloudLightning",
    ()=>FiCloudLightning,
    "FiCloudOff",
    ()=>FiCloudOff,
    "FiCloudRain",
    ()=>FiCloudRain,
    "FiCloudSnow",
    ()=>FiCloudSnow,
    "FiCode",
    ()=>FiCode,
    "FiCodepen",
    ()=>FiCodepen,
    "FiCodesandbox",
    ()=>FiCodesandbox,
    "FiCoffee",
    ()=>FiCoffee,
    "FiColumns",
    ()=>FiColumns,
    "FiCommand",
    ()=>FiCommand,
    "FiCompass",
    ()=>FiCompass,
    "FiCopy",
    ()=>FiCopy,
    "FiCornerDownLeft",
    ()=>FiCornerDownLeft,
    "FiCornerDownRight",
    ()=>FiCornerDownRight,
    "FiCornerLeftDown",
    ()=>FiCornerLeftDown,
    "FiCornerLeftUp",
    ()=>FiCornerLeftUp,
    "FiCornerRightDown",
    ()=>FiCornerRightDown,
    "FiCornerRightUp",
    ()=>FiCornerRightUp,
    "FiCornerUpLeft",
    ()=>FiCornerUpLeft,
    "FiCornerUpRight",
    ()=>FiCornerUpRight,
    "FiCpu",
    ()=>FiCpu,
    "FiCreditCard",
    ()=>FiCreditCard,
    "FiCrop",
    ()=>FiCrop,
    "FiCrosshair",
    ()=>FiCrosshair,
    "FiDatabase",
    ()=>FiDatabase,
    "FiDelete",
    ()=>FiDelete,
    "FiDisc",
    ()=>FiDisc,
    "FiDivide",
    ()=>FiDivide,
    "FiDivideCircle",
    ()=>FiDivideCircle,
    "FiDivideSquare",
    ()=>FiDivideSquare,
    "FiDollarSign",
    ()=>FiDollarSign,
    "FiDownload",
    ()=>FiDownload,
    "FiDownloadCloud",
    ()=>FiDownloadCloud,
    "FiDribbble",
    ()=>FiDribbble,
    "FiDroplet",
    ()=>FiDroplet,
    "FiEdit",
    ()=>FiEdit,
    "FiEdit2",
    ()=>FiEdit2,
    "FiEdit3",
    ()=>FiEdit3,
    "FiExternalLink",
    ()=>FiExternalLink,
    "FiEye",
    ()=>FiEye,
    "FiEyeOff",
    ()=>FiEyeOff,
    "FiFacebook",
    ()=>FiFacebook,
    "FiFastForward",
    ()=>FiFastForward,
    "FiFeather",
    ()=>FiFeather,
    "FiFigma",
    ()=>FiFigma,
    "FiFile",
    ()=>FiFile,
    "FiFileMinus",
    ()=>FiFileMinus,
    "FiFilePlus",
    ()=>FiFilePlus,
    "FiFileText",
    ()=>FiFileText,
    "FiFilm",
    ()=>FiFilm,
    "FiFilter",
    ()=>FiFilter,
    "FiFlag",
    ()=>FiFlag,
    "FiFolder",
    ()=>FiFolder,
    "FiFolderMinus",
    ()=>FiFolderMinus,
    "FiFolderPlus",
    ()=>FiFolderPlus,
    "FiFramer",
    ()=>FiFramer,
    "FiFrown",
    ()=>FiFrown,
    "FiGift",
    ()=>FiGift,
    "FiGitBranch",
    ()=>FiGitBranch,
    "FiGitCommit",
    ()=>FiGitCommit,
    "FiGitMerge",
    ()=>FiGitMerge,
    "FiGitPullRequest",
    ()=>FiGitPullRequest,
    "FiGithub",
    ()=>FiGithub,
    "FiGitlab",
    ()=>FiGitlab,
    "FiGlobe",
    ()=>FiGlobe,
    "FiGrid",
    ()=>FiGrid,
    "FiHardDrive",
    ()=>FiHardDrive,
    "FiHash",
    ()=>FiHash,
    "FiHeadphones",
    ()=>FiHeadphones,
    "FiHeart",
    ()=>FiHeart,
    "FiHelpCircle",
    ()=>FiHelpCircle,
    "FiHexagon",
    ()=>FiHexagon,
    "FiHome",
    ()=>FiHome,
    "FiImage",
    ()=>FiImage,
    "FiInbox",
    ()=>FiInbox,
    "FiInfo",
    ()=>FiInfo,
    "FiInstagram",
    ()=>FiInstagram,
    "FiItalic",
    ()=>FiItalic,
    "FiKey",
    ()=>FiKey,
    "FiLayers",
    ()=>FiLayers,
    "FiLayout",
    ()=>FiLayout,
    "FiLifeBuoy",
    ()=>FiLifeBuoy,
    "FiLink",
    ()=>FiLink,
    "FiLink2",
    ()=>FiLink2,
    "FiLinkedin",
    ()=>FiLinkedin,
    "FiList",
    ()=>FiList,
    "FiLoader",
    ()=>FiLoader,
    "FiLock",
    ()=>FiLock,
    "FiLogIn",
    ()=>FiLogIn,
    "FiLogOut",
    ()=>FiLogOut,
    "FiMail",
    ()=>FiMail,
    "FiMap",
    ()=>FiMap,
    "FiMapPin",
    ()=>FiMapPin,
    "FiMaximize",
    ()=>FiMaximize,
    "FiMaximize2",
    ()=>FiMaximize2,
    "FiMeh",
    ()=>FiMeh,
    "FiMenu",
    ()=>FiMenu,
    "FiMessageCircle",
    ()=>FiMessageCircle,
    "FiMessageSquare",
    ()=>FiMessageSquare,
    "FiMic",
    ()=>FiMic,
    "FiMicOff",
    ()=>FiMicOff,
    "FiMinimize",
    ()=>FiMinimize,
    "FiMinimize2",
    ()=>FiMinimize2,
    "FiMinus",
    ()=>FiMinus,
    "FiMinusCircle",
    ()=>FiMinusCircle,
    "FiMinusSquare",
    ()=>FiMinusSquare,
    "FiMonitor",
    ()=>FiMonitor,
    "FiMoon",
    ()=>FiMoon,
    "FiMoreHorizontal",
    ()=>FiMoreHorizontal,
    "FiMoreVertical",
    ()=>FiMoreVertical,
    "FiMousePointer",
    ()=>FiMousePointer,
    "FiMove",
    ()=>FiMove,
    "FiMusic",
    ()=>FiMusic,
    "FiNavigation",
    ()=>FiNavigation,
    "FiNavigation2",
    ()=>FiNavigation2,
    "FiOctagon",
    ()=>FiOctagon,
    "FiPackage",
    ()=>FiPackage,
    "FiPaperclip",
    ()=>FiPaperclip,
    "FiPause",
    ()=>FiPause,
    "FiPauseCircle",
    ()=>FiPauseCircle,
    "FiPenTool",
    ()=>FiPenTool,
    "FiPercent",
    ()=>FiPercent,
    "FiPhone",
    ()=>FiPhone,
    "FiPhoneCall",
    ()=>FiPhoneCall,
    "FiPhoneForwarded",
    ()=>FiPhoneForwarded,
    "FiPhoneIncoming",
    ()=>FiPhoneIncoming,
    "FiPhoneMissed",
    ()=>FiPhoneMissed,
    "FiPhoneOff",
    ()=>FiPhoneOff,
    "FiPhoneOutgoing",
    ()=>FiPhoneOutgoing,
    "FiPieChart",
    ()=>FiPieChart,
    "FiPlay",
    ()=>FiPlay,
    "FiPlayCircle",
    ()=>FiPlayCircle,
    "FiPlus",
    ()=>FiPlus,
    "FiPlusCircle",
    ()=>FiPlusCircle,
    "FiPlusSquare",
    ()=>FiPlusSquare,
    "FiPocket",
    ()=>FiPocket,
    "FiPower",
    ()=>FiPower,
    "FiPrinter",
    ()=>FiPrinter,
    "FiRadio",
    ()=>FiRadio,
    "FiRefreshCcw",
    ()=>FiRefreshCcw,
    "FiRefreshCw",
    ()=>FiRefreshCw,
    "FiRepeat",
    ()=>FiRepeat,
    "FiRewind",
    ()=>FiRewind,
    "FiRotateCcw",
    ()=>FiRotateCcw,
    "FiRotateCw",
    ()=>FiRotateCw,
    "FiRss",
    ()=>FiRss,
    "FiSave",
    ()=>FiSave,
    "FiScissors",
    ()=>FiScissors,
    "FiSearch",
    ()=>FiSearch,
    "FiSend",
    ()=>FiSend,
    "FiServer",
    ()=>FiServer,
    "FiSettings",
    ()=>FiSettings,
    "FiShare",
    ()=>FiShare,
    "FiShare2",
    ()=>FiShare2,
    "FiShield",
    ()=>FiShield,
    "FiShieldOff",
    ()=>FiShieldOff,
    "FiShoppingBag",
    ()=>FiShoppingBag,
    "FiShoppingCart",
    ()=>FiShoppingCart,
    "FiShuffle",
    ()=>FiShuffle,
    "FiSidebar",
    ()=>FiSidebar,
    "FiSkipBack",
    ()=>FiSkipBack,
    "FiSkipForward",
    ()=>FiSkipForward,
    "FiSlack",
    ()=>FiSlack,
    "FiSlash",
    ()=>FiSlash,
    "FiSliders",
    ()=>FiSliders,
    "FiSmartphone",
    ()=>FiSmartphone,
    "FiSmile",
    ()=>FiSmile,
    "FiSpeaker",
    ()=>FiSpeaker,
    "FiSquare",
    ()=>FiSquare,
    "FiStar",
    ()=>FiStar,
    "FiStopCircle",
    ()=>FiStopCircle,
    "FiSun",
    ()=>FiSun,
    "FiSunrise",
    ()=>FiSunrise,
    "FiSunset",
    ()=>FiSunset,
    "FiTable",
    ()=>FiTable,
    "FiTablet",
    ()=>FiTablet,
    "FiTag",
    ()=>FiTag,
    "FiTarget",
    ()=>FiTarget,
    "FiTerminal",
    ()=>FiTerminal,
    "FiThermometer",
    ()=>FiThermometer,
    "FiThumbsDown",
    ()=>FiThumbsDown,
    "FiThumbsUp",
    ()=>FiThumbsUp,
    "FiToggleLeft",
    ()=>FiToggleLeft,
    "FiToggleRight",
    ()=>FiToggleRight,
    "FiTool",
    ()=>FiTool,
    "FiTrash",
    ()=>FiTrash,
    "FiTrash2",
    ()=>FiTrash2,
    "FiTrello",
    ()=>FiTrello,
    "FiTrendingDown",
    ()=>FiTrendingDown,
    "FiTrendingUp",
    ()=>FiTrendingUp,
    "FiTriangle",
    ()=>FiTriangle,
    "FiTruck",
    ()=>FiTruck,
    "FiTv",
    ()=>FiTv,
    "FiTwitch",
    ()=>FiTwitch,
    "FiTwitter",
    ()=>FiTwitter,
    "FiType",
    ()=>FiType,
    "FiUmbrella",
    ()=>FiUmbrella,
    "FiUnderline",
    ()=>FiUnderline,
    "FiUnlock",
    ()=>FiUnlock,
    "FiUpload",
    ()=>FiUpload,
    "FiUploadCloud",
    ()=>FiUploadCloud,
    "FiUser",
    ()=>FiUser,
    "FiUserCheck",
    ()=>FiUserCheck,
    "FiUserMinus",
    ()=>FiUserMinus,
    "FiUserPlus",
    ()=>FiUserPlus,
    "FiUserX",
    ()=>FiUserX,
    "FiUsers",
    ()=>FiUsers,
    "FiVideo",
    ()=>FiVideo,
    "FiVideoOff",
    ()=>FiVideoOff,
    "FiVoicemail",
    ()=>FiVoicemail,
    "FiVolume",
    ()=>FiVolume,
    "FiVolume1",
    ()=>FiVolume1,
    "FiVolume2",
    ()=>FiVolume2,
    "FiVolumeX",
    ()=>FiVolumeX,
    "FiWatch",
    ()=>FiWatch,
    "FiWifi",
    ()=>FiWifi,
    "FiWifiOff",
    ()=>FiWifiOff,
    "FiWind",
    ()=>FiWind,
    "FiX",
    ()=>FiX,
    "FiXCircle",
    ()=>FiXCircle,
    "FiXOctagon",
    ()=>FiXOctagon,
    "FiXSquare",
    ()=>FiXSquare,
    "FiYoutube",
    ()=>FiYoutube,
    "FiZap",
    ()=>FiZap,
    "FiZapOff",
    ()=>FiZapOff,
    "FiZoomIn",
    ()=>FiZoomIn,
    "FiZoomOut",
    ()=>FiZoomOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/lib/iconBase.mjs [app-client] (ecmascript)");
;
function FiActivity(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 12 18 12 15 21 9 3 6 12 2 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAirplay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 15 17 21 7 21 12 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertTriangle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "12",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12.01",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignCenter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "10",
                    "x2": "6",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "18",
                    "x2": "6",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignJustify(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "10",
                    "x2": "3",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "10",
                    "x2": "3",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "10",
                    "x2": "7",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "7",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAnchor(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12H2a10 10 0 0 0 20 0h-3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAperture(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.31",
                    "y1": "8",
                    "x2": "20.05",
                    "y2": "17.94"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9.69",
                    "y1": "8",
                    "x2": "21.17",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7.38",
                    "y1": "12",
                    "x2": "13.12",
                    "y2": "2.06"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9.69",
                    "y1": "16",
                    "x2": "3.95",
                    "y2": "6.06"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.31",
                    "y1": "16",
                    "x2": "2.83",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.62",
                    "y1": "12",
                    "x2": "10.88",
                    "y2": "21.94"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 8 21 21 3 21 3 8"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "3",
                    "width": "22",
                    "height": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "12",
                    "x2": "14",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 12 12 16 16 12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "7",
                    "x2": "7",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 17 7 17 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "7",
                    "x2": "17",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 7 17 17 7 17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "5",
                    "x2": "12",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 12 12 19 5 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowLeftCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 8 8 12 12 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "12",
                    "x2": "8",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "12",
                    "x2": "5",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 19 5 12 12 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowRightCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 16 16 12 12 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 5 19 12 12 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 12 12 8 8 12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "17",
                    "x2": "7",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 17 7 7 17 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "17",
                    "x2": "17",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 7 17 7 17 17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "5 12 12 5 19 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAtSign(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "8",
                    "r": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBarChart2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "20",
                    "x2": "18",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "20",
                    "x2": "6",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBarChart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "20",
                    "x2": "18",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "20",
                    "x2": "6",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBatteryCharging(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "13",
                    "x2": "23",
                    "y2": "11"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "11 6 7 12 13 12 9 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBattery(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "6",
                    "width": "18",
                    "height": "12",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "13",
                    "x2": "23",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBellOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.73 21a2 2 0 0 1-3.46 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18.63 13A17.89 17.89 0 0 1 18 8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8a6 6 0 0 0-9.33-5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13.73 21a2 2 0 0 1-3.46 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBluetooth(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBold(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBook(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "4",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "2",
                    "x2": "16",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "2",
                    "x2": "8",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "10",
                    "x2": "21",
                    "y2": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCameraOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "13",
                    "r": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCast(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "20",
                    "x2": "2.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 4 12 14.01 9 11.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheckSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 11 12 14 22 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 6 9 17 4 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 9 12 15 18 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 18 9 12 15 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 18 15 12 9 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "18 15 12 9 6 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 13 12 18 17 13"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 6 12 11 17 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "11 17 6 12 11 7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "18 17 13 12 18 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 17 18 12 13 7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 17 11 12 6 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 11 12 6 7 11"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 18 12 13 7 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChrome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21.17",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3.95",
                    "y1": "6.06",
                    "x2": "8.54",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10.88",
                    "y1": "21.94",
                    "x2": "15.46",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "8",
                    "y": "2",
                    "width": "8",
                    "height": "4",
                    "rx": "1",
                    "ry": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 6 12 12 16 14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudDrizzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "19",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "13",
                    "x2": "8",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "19",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "16",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudLightning(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 11 9 17 15 17 11 23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudRain(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "13",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudSnow(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "16",
                    "x2": "8.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "20",
                    "x2": "8.01",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12.01",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "16",
                    "x2": "16.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "20",
                    "x2": "16.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 18 22 12 16 6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 6 2 12 8 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCodepen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "15.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 8.5 12 15.5 2 8.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 15.5 12 8.5 22 15.5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "8.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCodesandbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7.5 4.21 12 6.81 16.5 4.21"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7.5 19.79 7.5 14.6 3 12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 12 16.5 14.6 16.5 19.79"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCoffee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8h1a4 4 0 0 1 0 8h-1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "1",
                    "x2": "6",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "1",
                    "x2": "10",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "1",
                    "x2": "14",
                    "y2": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiColumns(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCommand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCompass(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "13",
                    "height": "13",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerDownLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 10 4 15 9 20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 4v7a4 4 0 0 1-4 4H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerDownRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 10 20 15 15 20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4v7a4 4 0 0 0 4 4h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerLeftDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 15 9 20 4 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 4h-7a4 4 0 0 0-4 4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerLeftUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 9 9 4 4 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 20h-7a4 4 0 0 1-4-4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerRightDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 15 15 20 20 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4h7a4 4 0 0 1 4 4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerRightUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 9 15 4 20 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 20h7a4 4 0 0 0 4-4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerUpLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 14 4 9 9 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 20v-7a4 4 0 0 0-4-4H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerUpRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 14 20 9 15 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 20v-7a4 4 0 0 1 4-4h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCpu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "4",
                    "width": "16",
                    "height": "16",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "6",
                    "height": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "1",
                    "x2": "9",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "1",
                    "x2": "15",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "20",
                    "x2": "9",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "20",
                    "x2": "15",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "9",
                    "x2": "23",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "14",
                    "x2": "23",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "9",
                    "x2": "4",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "14",
                    "x2": "4",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "4",
                    "width": "22",
                    "height": "16",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "10",
                    "x2": "23",
                    "y2": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCrop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6.13 1L6 16a2 2 0 0 0 2 2h15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1 6.13L16 6a2 2 0 0 1 2 2v15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCrosshair(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "12",
                    "x2": "18",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "12",
                    "x2": "2",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "6",
                    "x2": "12",
                    "y2": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "ellipse",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "rx": "9",
                    "ry": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDelete(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "9",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "18",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDisc(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivideCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivideSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivide(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "6",
                    "r": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "18",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDollarSign(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "1",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDownloadCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 17 12 21 16 17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "12",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 10 12 15 17 10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDribbble(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDroplet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 20h9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 3 21 3 21 9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "14",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFacebook(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "13 19 22 12 13 5 13 19"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "2 19 11 12 2 5 2 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFeather(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "8",
                    "x2": "2",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.5",
                    "y1": "15",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFigma(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFileMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "15",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilePlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "15",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFileText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "8",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "17",
                    "x2": "8",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 9 9 9 8 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 2 13 9 20 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "20",
                    "rx": "2.18",
                    "ry": "2.18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "2",
                    "x2": "7",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "2",
                    "x2": "17",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "7",
                    "x2": "7",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "17",
                    "x2": "7",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "17",
                    "x2": "22",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "7",
                    "x2": "22",
                    "y2": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "22",
                    "x2": "4",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolderMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "14",
                    "x2": "15",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolderPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "11",
                    "x2": "12",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "14",
                    "x2": "15",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFramer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFrown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 16s-1.5-2-4-2-4 2-4 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 12 20 22 4 22 4 12"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitBranch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "3",
                    "x2": "6",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 9a9 9 0 0 1-9 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitCommit(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1.05",
                    "y1": "12",
                    "x2": "7",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.01",
                    "y1": "12",
                    "x2": "22.96",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitMerge(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 21V9a9 9 0 0 0 9 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitPullRequest(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13 6h3a2 2 0 0 1 2 2v7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "9",
                    "x2": "6",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGithub(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitlab(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "3",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "14",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "14",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHardDrive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "12",
                    "x2": "2",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "16",
                    "x2": "6.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "16",
                    "x2": "10.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "9",
                    "x2": "20",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "15",
                    "x2": "20",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "3",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "3",
                    "x2": "14",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHeadphones(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 18v-6a9 9 0 0 1 18 0v6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHelpCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12.01",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHexagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 22 9 12 15 12 15 22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiImage(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "8.5",
                    "r": "1.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 15 16 10 5 21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 12 16 12 14 15 10 15 8 12 2 12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInfo(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12.01",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInstagram(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "20",
                    "rx": "5",
                    "ry": "5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.5",
                    "y1": "6.5",
                    "x2": "17.51",
                    "y2": "6.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiItalic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "4",
                    "x2": "10",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "20",
                    "x2": "5",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "4",
                    "x2": "9",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLayers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 2 7 12 12 22 7 12 2"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 17 12 22 22 17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 12 12 17 22 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLayout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "9",
                    "x2": "21",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "21",
                    "x2": "9",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLifeBuoy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "9.17",
                    "y2": "9.17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "14.83",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "9.17",
                    "x2": "19.07",
                    "y2": "4.93"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "9.17",
                    "x2": "18.36",
                    "y2": "5.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "19.07",
                    "x2": "9.17",
                    "y2": "14.83"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLink2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLinkedin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "9",
                    "width": "4",
                    "height": "12"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "4",
                    "cy": "4",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "21",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "18",
                    "x2": "21",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "3.01",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "12",
                    "x2": "3.01",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "18",
                    "x2": "3.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLoader(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "7.76",
                    "y2": "7.76"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.24",
                    "y1": "16.24",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "6",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "19.07",
                    "x2": "7.76",
                    "y2": "16.24"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.24",
                    "y1": "7.76",
                    "x2": "19.07",
                    "y2": "4.93"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "11",
                    "width": "18",
                    "height": "11",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M7 11V7a5 5 0 0 1 10 0v4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLogIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 17 15 12 10 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "12",
                    "x2": "3",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLogOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 17 21 12 16 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "12",
                    "x2": "9",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22,6 12,13 2,6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMapPin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "10",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "2",
                    "x2": "8",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "6",
                    "x2": "16",
                    "y2": "22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMaximize2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 3 21 3 21 9"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 21 3 21 3 15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "3",
                    "x2": "14",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "21",
                    "x2": "10",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMaximize(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMeh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "15",
                    "x2": "16",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "12",
                    "x2": "21",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "18",
                    "x2": "21",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMessageCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMessageSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMicOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "23",
                    "x2": "16",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 10v2a7 7 0 0 1-14 0v-2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "23",
                    "x2": "16",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinimize2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 14 10 14 10 20"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 10 14 10 14 4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "10",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "21",
                    "x2": "10",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinimize(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinusSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMonitor(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "3",
                    "width": "20",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "21",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoreHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "19",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoreVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "19",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMousePointer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13 13l6 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "5 9 2 12 5 15"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 5 12 2 15 5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 19 12 22 9 19"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 9 22 12 19 15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMusic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 18V5l12-2v13"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "16",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiNavigation2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 19 21 12 17 5 21 12 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiNavigation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "3 11 22 2 13 21 11 13 3 11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPackage(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "16.5",
                    "y1": "9.4",
                    "x2": "7.5",
                    "y2": "4.21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPaperclip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPauseCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "15",
                    "x2": "10",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "15",
                    "x2": "14",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "6",
                    "y": "4",
                    "width": "4",
                    "height": "16"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "4",
                    "width": "4",
                    "height": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPenTool(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 19l7-7 3 3-7 7-3-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 2l7.586 7.586"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPercent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "5",
                    "x2": "5",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6.5",
                    "cy": "6.5",
                    "r": "2.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "17.5",
                    "cy": "17.5",
                    "r": "2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneForwarded(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 1 23 5 19 9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "5",
                    "x2": "23",
                    "y2": "5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 2 16 8 22 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "16",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneMissed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "17",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "1",
                    "x2": "23",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "1",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 7 23 1 17 1"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "8",
                    "x2": "23",
                    "y2": "1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPieChart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21.21 15.89A10 10 0 1 1 8 2.83"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 12A10 10 0 0 0 12 2v10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlayCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "10 8 16 12 10 16 10 8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "5 3 19 12 5 21 5 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlusSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "5",
                    "x2": "12",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPocket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 10 12 14 16 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPower(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18.36 6.64a9 9 0 1 1-12.73 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 9 6 2 18 2 18 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "6",
                    "y": "14",
                    "width": "12",
                    "height": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRadio(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRefreshCcw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 4 1 10 7 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 20 23 14 17 14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRefreshCw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 4 23 10 17 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 20 1 14 7 14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRepeat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 1 21 5 17 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 11V9a4 4 0 0 1 4-4h14"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 23 3 19 7 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 13v2a4 4 0 0 1-4 4H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 19 2 12 11 5 11 19"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 19 13 12 22 5 22 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRotateCcw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 4 1 10 7 10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRotateCw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 4 23 10 17 10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 11a9 9 0 0 1 9 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a16 16 0 0 1 16 16"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5",
                    "cy": "19",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 21 17 13 7 13 7 21"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 3 7 8 15 8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "4",
                    "x2": "8.12",
                    "y2": "15.88"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.47",
                    "y1": "14.48",
                    "x2": "20",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8.12",
                    "y1": "8.12",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSend(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "2",
                    "x2": "11",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 2 15 22 11 13 2 9 22 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "8",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "14",
                    "width": "20",
                    "height": "8",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "6",
                    "x2": "6.01",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "18",
                    "x2": "6.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSettings(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShare2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "5",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "19",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8.59",
                    "y1": "13.51",
                    "x2": "15.42",
                    "y2": "17.49"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15.41",
                    "y1": "6.51",
                    "x2": "8.59",
                    "y2": "10.49"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 6 12 2 8 6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShieldOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShield(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 10a4 4 0 0 1-8 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "9",
                    "cy": "21",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "20",
                    "cy": "21",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShuffle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 3 21 3 21 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "20",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 16 21 21 16 21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "15",
                    "x2": "21",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "4",
                    "x2": "9",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSidebar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "3",
                    "x2": "9",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSkipBack(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "19 20 9 12 19 4 19 20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "19",
                    "x2": "5",
                    "y2": "5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSkipForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "5 4 15 12 5 20 5 4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "5",
                    "x2": "19",
                    "y2": "19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSlack(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSlash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSliders(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "21",
                    "x2": "4",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "10",
                    "x2": "4",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "21",
                    "x2": "20",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "12",
                    "x2": "20",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "14",
                    "x2": "7",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "8",
                    "x2": "15",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "16",
                    "x2": "23",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSmartphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "5",
                    "y": "2",
                    "width": "14",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSmile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8 14s1.5 2 4 2 4-2 4-2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSpeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "2",
                    "width": "16",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "14",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "6",
                    "x2": "12.01",
                    "y2": "6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiStopCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "6",
                    "height": "6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "1",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "4.22",
                    "x2": "5.64",
                    "y2": "5.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "18.36",
                    "x2": "19.78",
                    "y2": "19.78"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "12",
                    "x2": "3",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "12",
                    "x2": "23",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "19.78",
                    "x2": "5.64",
                    "y2": "18.36"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "5.64",
                    "x2": "19.78",
                    "y2": "4.22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSunrise(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 18a5 5 0 0 0-10 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "10.22",
                    "x2": "5.64",
                    "y2": "11.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "23",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "11.64",
                    "x2": "19.78",
                    "y2": "10.22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "22",
                    "x2": "1",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 6 12 2 16 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSunset(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 18a5 5 0 0 0-10 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "12",
                    "y2": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "10.22",
                    "x2": "5.64",
                    "y2": "11.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "23",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "11.64",
                    "x2": "19.78",
                    "y2": "10.22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "22",
                    "x2": "1",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 5 12 9 8 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "2",
                    "width": "16",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "7",
                    "x2": "7.01",
                    "y2": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTarget(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "6"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 17 10 11 4 5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "20",
                    "y2": "19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThermometer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThumbsDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThumbsUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiToggleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "22",
                    "height": "14",
                    "rx": "7",
                    "ry": "7"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiToggleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "22",
                    "height": "14",
                    "rx": "7",
                    "ry": "7"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "16",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTool(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrash2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "3 6 5 6 21 6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "11",
                    "x2": "10",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "11",
                    "x2": "14",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "3 6 5 6 21 6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrello(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "7",
                    "y": "7",
                    "width": "3",
                    "height": "9"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "7",
                    "width": "3",
                    "height": "5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 18 13.5 8.5 8.5 13.5 1 6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 18 23 18 23 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 6 13.5 15.5 8.5 10.5 1 18"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 6 23 6 23 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTriangle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "3",
                    "width": "15",
                    "height": "13"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "16 8 20 8 23 11 23 16 16 16 16 8"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5.5",
                    "cy": "18.5",
                    "r": "2.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18.5",
                    "cy": "18.5",
                    "r": "2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTv(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "15",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 2 12 7 7 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTwitch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTwitter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiType(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 7 4 4 20 4 20 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "20",
                    "x2": "15",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "4",
                    "x2": "12",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUmbrella(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUnderline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "21",
                    "x2": "20",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUnlock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "11",
                    "width": "18",
                    "height": "11",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M7 11V7a5 5 0 0 1 9.9-1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUploadCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 16 12 12 8 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "12",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 16 12 12 8 16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 8 12 3 7 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "3",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 11 19 13 23 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "11",
                    "x2": "17",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "8",
                    "x2": "20",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "11",
                    "x2": "17",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "8",
                    "x2": "23",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "8",
                    "x2": "18",
                    "y2": "13"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "9",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M23 21v-2a4 4 0 0 0-3-3.87"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 3.13a4 4 0 0 1 0 7.75"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVideoOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVideo(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "23 7 16 12 23 17 23 7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "15",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVoicemail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "5.5",
                    "cy": "11.5",
                    "r": "4.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18.5",
                    "cy": "11.5",
                    "r": "4.5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5.5",
                    "y1": "16",
                    "x2": "18.5",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15.54 8.46a5 5 0 0 1 0 7.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolumeX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "9",
                    "x2": "17",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "9",
                    "x2": "23",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 9 12 12 13.5 13.5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWifiOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M10.71 5.05A16 16 0 0 1 22.58 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.53 16.11a6 6 0 0 1 6.95 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.55a11 11 0 0 1 14.08 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1.42 9a16 16 0 0 1 21.16 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.53 16.11a6 6 0 0 1 6.95 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "6",
                    "x2": "6",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "6",
                    "x2": "18",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiYoutube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZapOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "12.41 6.75 13 2 10.57 4.92"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "18.57 12.91 21 10 15.66 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 8 3 14 12 14 11 22 16 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "11",
                    "y1": "8",
                    "x2": "11",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "11",
                    "x2": "14",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "11",
                    "x2": "14",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constants.js [app-client] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/isDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/isValid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/isDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/isValid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QRCodeCanvas",
    ()=>QRCodeCanvas,
    "QRCodeSVG",
    ()=>QRCodeSVG
]);
// src/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)){
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
;
// src/third-party/qrcodegen/index.ts
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var qrcodegen;
((qrcodegen2)=>{
    const _QrCode = class _QrCode {
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code with the given version number,
        // error correction level, data codeword bytes, and mask number.
        // This is a low-level API that most users should not use directly.
        // A mid-level API is the encodeSegments() function.
        constructor(version, errorCorrectionLevel, dataCodewords, msk){
            this.version = version;
            this.errorCorrectionLevel = errorCorrectionLevel;
            // The modules of this QR Code (false = light, true = dark).
            // Immutable after constructor finishes. Accessed through getModule().
            this.modules = [];
            // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
            this.isFunction = [];
            if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
            if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
            this.size = version * 4 + 17;
            let row = [];
            for(let i = 0; i < this.size; i++)row.push(false);
            for(let i = 0; i < this.size; i++){
                this.modules.push(row.slice());
                this.isFunction.push(row.slice());
            }
            this.drawFunctionPatterns();
            const allCodewords = this.addEccAndInterleave(dataCodewords);
            this.drawCodewords(allCodewords);
            if (msk == -1) {
                let minPenalty = 1e9;
                for(let i = 0; i < 8; i++){
                    this.applyMask(i);
                    this.drawFormatBits(i);
                    const penalty = this.getPenaltyScore();
                    if (penalty < minPenalty) {
                        msk = i;
                        minPenalty = penalty;
                    }
                    this.applyMask(i);
                }
            }
            assert(0 <= msk && msk <= 7);
            this.mask = msk;
            this.applyMask(msk);
            this.drawFormatBits(msk);
            this.isFunction = [];
        }
        /*-- Static factory functions (high level) --*/ // Returns a QR Code representing the given Unicode text string at the given error correction level.
        // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
        // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
        // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
        // ecl argument if it can be done without increasing the version.
        static encodeText(text, ecl) {
            const segs = qrcodegen2.QrSegment.makeSegments(text);
            return _QrCode.encodeSegments(segs, ecl);
        }
        // Returns a QR Code representing the given binary data at the given error correction level.
        // This function always encodes using the binary segment mode, not any text mode. The maximum number of
        // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
        // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
        static encodeBinary(data, ecl) {
            const seg = qrcodegen2.QrSegment.makeBytes(data);
            return _QrCode.encodeSegments([
                seg
            ], ecl);
        }
        /*-- Static factory functions (mid level) --*/ // Returns a QR Code representing the given segments with the given encoding parameters.
        // The smallest possible QR Code version within the given range is automatically
        // chosen for the output. Iff boostEcl is true, then the ECC level of the result
        // may be higher than the ecl argument if it can be done without increasing the
        // version. The mask number is either between 0 to 7 (inclusive) to force that
        // mask, or -1 to automatically choose an appropriate mask (which may be slow).
        // This function allows the user to create a custom sequence of segments that switches
        // between modes (such as alphanumeric and byte) to encode text in less space.
        // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
        static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
            if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
            let version;
            let dataUsedBits;
            for(version = minVersion;; version++){
                const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
                const usedBits = QrSegment.getTotalBits(segs, version);
                if (usedBits <= dataCapacityBits2) {
                    dataUsedBits = usedBits;
                    break;
                }
                if (version >= maxVersion) throw new RangeError("Data too long");
            }
            for (const newEcl of [
                _QrCode.Ecc.MEDIUM,
                _QrCode.Ecc.QUARTILE,
                _QrCode.Ecc.HIGH
            ]){
                if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
            }
            let bb = [];
            for (const seg of segs){
                appendBits(seg.mode.modeBits, 4, bb);
                appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
                for (const b of seg.getData())bb.push(b);
            }
            assert(bb.length == dataUsedBits);
            const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
            assert(bb.length <= dataCapacityBits);
            appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
            appendBits(0, (8 - bb.length % 8) % 8, bb);
            assert(bb.length % 8 == 0);
            for(let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)appendBits(padByte, 8, bb);
            let dataCodewords = [];
            while(dataCodewords.length * 8 < bb.length)dataCodewords.push(0);
            bb.forEach((b, i)=>dataCodewords[i >>> 3] |= b << 7 - (i & 7));
            return new _QrCode(version, ecl, dataCodewords, mask);
        }
        /*-- Accessor methods --*/ // Returns the color of the module (pixel) at the given coordinates, which is false
        // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
        // If the given coordinates are out of bounds, then false (light) is returned.
        getModule(x, y) {
            return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
        }
        // Modified to expose modules for easy access
        getModules() {
            return this.modules;
        }
        /*-- Private helper methods for constructor: Drawing function modules --*/ // Reads this object's version field, and draws and marks all function modules.
        drawFunctionPatterns() {
            for(let i = 0; i < this.size; i++){
                this.setFunctionModule(6, i, i % 2 == 0);
                this.setFunctionModule(i, 6, i % 2 == 0);
            }
            this.drawFinderPattern(3, 3);
            this.drawFinderPattern(this.size - 4, 3);
            this.drawFinderPattern(3, this.size - 4);
            const alignPatPos = this.getAlignmentPatternPositions();
            const numAlign = alignPatPos.length;
            for(let i = 0; i < numAlign; i++){
                for(let j = 0; j < numAlign; j++){
                    if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0)) this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
                }
            }
            this.drawFormatBits(0);
            this.drawVersion();
        }
        // Draws two copies of the format bits (with its own error correction code)
        // based on the given mask and this object's error correction level field.
        drawFormatBits(mask) {
            const data = this.errorCorrectionLevel.formatBits << 3 | mask;
            let rem = data;
            for(let i = 0; i < 10; i++)rem = rem << 1 ^ (rem >>> 9) * 1335;
            const bits = (data << 10 | rem) ^ 21522;
            assert(bits >>> 15 == 0);
            for(let i = 0; i <= 5; i++)this.setFunctionModule(8, i, getBit(bits, i));
            this.setFunctionModule(8, 7, getBit(bits, 6));
            this.setFunctionModule(8, 8, getBit(bits, 7));
            this.setFunctionModule(7, 8, getBit(bits, 8));
            for(let i = 9; i < 15; i++)this.setFunctionModule(14 - i, 8, getBit(bits, i));
            for(let i = 0; i < 8; i++)this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
            for(let i = 8; i < 15; i++)this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
            this.setFunctionModule(8, this.size - 8, true);
        }
        // Draws two copies of the version bits (with its own error correction code),
        // based on this object's version field, iff 7 <= version <= 40.
        drawVersion() {
            if (this.version < 7) return;
            let rem = this.version;
            for(let i = 0; i < 12; i++)rem = rem << 1 ^ (rem >>> 11) * 7973;
            const bits = this.version << 12 | rem;
            assert(bits >>> 18 == 0);
            for(let i = 0; i < 18; i++){
                const color = getBit(bits, i);
                const a = this.size - 11 + i % 3;
                const b = Math.floor(i / 3);
                this.setFunctionModule(a, b, color);
                this.setFunctionModule(b, a, color);
            }
        }
        // Draws a 9*9 finder pattern including the border separator,
        // with the center module at (x, y). Modules can be out of bounds.
        drawFinderPattern(x, y) {
            for(let dy = -4; dy <= 4; dy++){
                for(let dx = -4; dx <= 4; dx++){
                    const dist = Math.max(Math.abs(dx), Math.abs(dy));
                    const xx = x + dx;
                    const yy = y + dy;
                    if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size) this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
                }
            }
        }
        // Draws a 5*5 alignment pattern, with the center module
        // at (x, y). All modules must be in bounds.
        drawAlignmentPattern(x, y) {
            for(let dy = -2; dy <= 2; dy++){
                for(let dx = -2; dx <= 2; dx++)this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
            }
        }
        // Sets the color of a module and marks it as a function module.
        // Only used by the constructor. Coordinates must be in bounds.
        setFunctionModule(x, y, isDark) {
            this.modules[y][x] = isDark;
            this.isFunction[y][x] = true;
        }
        /*-- Private helper methods for constructor: Codewords and masking --*/ // Returns a new byte string representing the given data with the appropriate error correction
        // codewords appended to it, based on this object's version and error correction level.
        addEccAndInterleave(data) {
            const ver = this.version;
            const ecl = this.errorCorrectionLevel;
            if (data.length != _QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
            const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
            const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
            const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
            const numShortBlocks = numBlocks - rawCodewords % numBlocks;
            const shortBlockLen = Math.floor(rawCodewords / numBlocks);
            let blocks = [];
            const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
            for(let i = 0, k = 0; i < numBlocks; i++){
                let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
                k += dat.length;
                const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
                if (i < numShortBlocks) dat.push(0);
                blocks.push(dat.concat(ecc));
            }
            let result = [];
            for(let i = 0; i < blocks[0].length; i++){
                blocks.forEach((block, j)=>{
                    if (i != shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
                });
            }
            assert(result.length == rawCodewords);
            return result;
        }
        // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
        // data area of this QR Code. Function modules need to be marked off before this is called.
        drawCodewords(data) {
            if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            let i = 0;
            for(let right = this.size - 1; right >= 1; right -= 2){
                if (right == 6) right = 5;
                for(let vert = 0; vert < this.size; vert++){
                    for(let j = 0; j < 2; j++){
                        const x = right - j;
                        const upward = (right + 1 & 2) == 0;
                        const y = upward ? this.size - 1 - vert : vert;
                        if (!this.isFunction[y][x] && i < data.length * 8) {
                            this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                            i++;
                        }
                    }
                }
            }
            assert(i == data.length * 8);
        }
        // XORs the codeword modules in this QR Code with the given mask pattern.
        // The function modules must be marked and the codeword bits must be drawn
        // before masking. Due to the arithmetic of XOR, calling applyMask() with
        // the same mask value a second time will undo the mask. A final well-formed
        // QR Code needs exactly one (not zero, two, etc.) mask applied.
        applyMask(mask) {
            if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
            for(let y = 0; y < this.size; y++){
                for(let x = 0; x < this.size; x++){
                    let invert;
                    switch(mask){
                        case 0:
                            invert = (x + y) % 2 == 0;
                            break;
                        case 1:
                            invert = y % 2 == 0;
                            break;
                        case 2:
                            invert = x % 3 == 0;
                            break;
                        case 3:
                            invert = (x + y) % 3 == 0;
                            break;
                        case 4:
                            invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                            break;
                        case 5:
                            invert = x * y % 2 + x * y % 3 == 0;
                            break;
                        case 6:
                            invert = (x * y % 2 + x * y % 3) % 2 == 0;
                            break;
                        case 7:
                            invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable");
                    }
                    if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
                }
            }
        }
        // Calculates and returns the penalty score based on state of this QR Code's current modules.
        // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
        getPenaltyScore() {
            let result = 0;
            for(let y = 0; y < this.size; y++){
                let runColor = false;
                let runX = 0;
                let runHistory = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let x = 0; x < this.size; x++){
                    if (this.modules[y][x] == runColor) {
                        runX++;
                        if (runX == 5) result += _QrCode.PENALTY_N1;
                        else if (runX > 5) result++;
                    } else {
                        this.finderPenaltyAddHistory(runX, runHistory);
                        if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runX = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
            }
            for(let x = 0; x < this.size; x++){
                let runColor = false;
                let runY = 0;
                let runHistory = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let y = 0; y < this.size; y++){
                    if (this.modules[y][x] == runColor) {
                        runY++;
                        if (runY == 5) result += _QrCode.PENALTY_N1;
                        else if (runY > 5) result++;
                    } else {
                        this.finderPenaltyAddHistory(runY, runHistory);
                        if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runY = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
            }
            for(let y = 0; y < this.size - 1; y++){
                for(let x = 0; x < this.size - 1; x++){
                    const color = this.modules[y][x];
                    if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1]) result += _QrCode.PENALTY_N2;
                }
            }
            let dark = 0;
            for (const row of this.modules)dark = row.reduce((sum, color)=>sum + (color ? 1 : 0), dark);
            const total = this.size * this.size;
            const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
            assert(0 <= k && k <= 9);
            result += k * _QrCode.PENALTY_N4;
            assert(0 <= result && result <= 2568888);
            return result;
        }
        /*-- Private helper functions --*/ // Returns an ascending list of positions of alignment patterns for this version number.
        // Each position is in the range [0,177), and are used on both the x and y axes.
        // This could be implemented as lookup table of 40 variable-length lists of integers.
        getAlignmentPatternPositions() {
            if (this.version == 1) return [];
            else {
                const numAlign = Math.floor(this.version / 7) + 2;
                const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
                let result = [
                    6
                ];
                for(let pos = this.size - 7; result.length < numAlign; pos -= step)result.splice(1, 0, pos);
                return result;
            }
        }
        // Returns the number of data bits that can be stored in a QR Code of the given version number, after
        // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
        // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
        static getNumRawDataModules(ver) {
            if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
            let result = (16 * ver + 128) * ver + 64;
            if (ver >= 2) {
                const numAlign = Math.floor(ver / 7) + 2;
                result -= (25 * numAlign - 10) * numAlign - 55;
                if (ver >= 7) result -= 36;
            }
            assert(208 <= result && result <= 29648);
            return result;
        }
        // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
        // QR Code of the given version number and error correction level, with remainder bits discarded.
        // This stateless pure function could be implemented as a (40*4)-cell lookup table.
        static getNumDataCodewords(ver, ecl) {
            return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        }
        // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
        // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
        static reedSolomonComputeDivisor(degree) {
            if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
            let result = [];
            for(let i = 0; i < degree - 1; i++)result.push(0);
            result.push(1);
            let root = 1;
            for(let i = 0; i < degree; i++){
                for(let j = 0; j < result.length; j++){
                    result[j] = _QrCode.reedSolomonMultiply(result[j], root);
                    if (j + 1 < result.length) result[j] ^= result[j + 1];
                }
                root = _QrCode.reedSolomonMultiply(root, 2);
            }
            return result;
        }
        // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
        static reedSolomonComputeRemainder(data, divisor) {
            let result = divisor.map((_)=>0);
            for (const b of data){
                const factor = b ^ result.shift();
                result.push(0);
                divisor.forEach((coef, i)=>result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
            }
            return result;
        }
        // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
        // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
        static reedSolomonMultiply(x, y) {
            if (x >>> 8 != 0 || y >>> 8 != 0) throw new RangeError("Byte out of range");
            let z = 0;
            for(let i = 7; i >= 0; i--){
                z = z << 1 ^ (z >>> 7) * 285;
                z ^= (y >>> i & 1) * x;
            }
            assert(z >>> 8 == 0);
            return z;
        }
        // Can only be called immediately after a light run is added, and
        // returns either 0, 1, or 2. A helper function for getPenaltyScore().
        finderPenaltyCountPatterns(runHistory) {
            const n = runHistory[1];
            assert(n <= this.size * 3);
            const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
            return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
        }
        // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
        finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
            if (currentRunColor) {
                this.finderPenaltyAddHistory(currentRunLength, runHistory);
                currentRunLength = 0;
            }
            currentRunLength += this.size;
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            return this.finderPenaltyCountPatterns(runHistory);
        }
        // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
        finderPenaltyAddHistory(currentRunLength, runHistory) {
            if (runHistory[0] == 0) currentRunLength += this.size;
            runHistory.pop();
            runHistory.unshift(currentRunLength);
        }
    };
    /*-- Constants and tables --*/ // The minimum version number supported in the QR Code Model 2 standard.
    _QrCode.MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    _QrCode.MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    _QrCode.PENALTY_N1 = 3;
    _QrCode.PENALTY_N2 = 3;
    _QrCode.PENALTY_N3 = 40;
    _QrCode.PENALTY_N4 = 10;
    _QrCode.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            7,
            10,
            15,
            20,
            26,
            18,
            20,
            24,
            30,
            18,
            20,
            24,
            26,
            30,
            22,
            24,
            28,
            30,
            28,
            28,
            28,
            28,
            30,
            30,
            26,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Low
        [
            -1,
            10,
            16,
            26,
            18,
            24,
            16,
            18,
            22,
            22,
            26,
            30,
            22,
            22,
            24,
            24,
            28,
            28,
            26,
            26,
            26,
            26,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28
        ],
        // Medium
        [
            -1,
            13,
            22,
            18,
            26,
            18,
            24,
            18,
            22,
            20,
            24,
            28,
            26,
            24,
            20,
            30,
            24,
            28,
            28,
            26,
            30,
            28,
            30,
            30,
            30,
            30,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Quartile
        [
            -1,
            17,
            28,
            22,
            16,
            22,
            28,
            26,
            26,
            24,
            28,
            24,
            28,
            22,
            24,
            24,
            30,
            28,
            28,
            26,
            28,
            30,
            24,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ]
    ];
    _QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            4,
            4,
            4,
            4,
            4,
            6,
            6,
            6,
            6,
            7,
            8,
            8,
            9,
            9,
            10,
            12,
            12,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            19,
            20,
            21,
            22,
            24,
            25
        ],
        // Low
        [
            -1,
            1,
            1,
            1,
            2,
            2,
            4,
            4,
            4,
            5,
            5,
            5,
            8,
            9,
            9,
            10,
            10,
            11,
            13,
            14,
            16,
            17,
            17,
            18,
            20,
            21,
            23,
            25,
            26,
            28,
            29,
            31,
            33,
            35,
            37,
            38,
            40,
            43,
            45,
            47,
            49
        ],
        // Medium
        [
            -1,
            1,
            1,
            2,
            2,
            4,
            4,
            6,
            6,
            8,
            8,
            8,
            10,
            12,
            16,
            12,
            17,
            16,
            18,
            21,
            20,
            23,
            23,
            25,
            27,
            29,
            34,
            34,
            35,
            38,
            40,
            43,
            45,
            48,
            51,
            53,
            56,
            59,
            62,
            65,
            68
        ],
        // Quartile
        [
            -1,
            1,
            1,
            2,
            4,
            4,
            4,
            5,
            6,
            8,
            8,
            11,
            11,
            16,
            16,
            18,
            16,
            19,
            21,
            25,
            25,
            25,
            34,
            30,
            32,
            35,
            37,
            40,
            42,
            45,
            48,
            51,
            54,
            57,
            60,
            63,
            66,
            70,
            74,
            77,
            81
        ]
    ];
    let QrCode = _QrCode;
    qrcodegen2.QrCode = _QrCode;
    function appendBits(val, len, bb) {
        if (len < 0 || len > 31 || val >>> len != 0) throw new RangeError("Value out of range");
        for(let i = len - 1; i >= 0; i--)bb.push(val >>> i & 1);
    }
    function getBit(x, i) {
        return (x >>> i & 1) != 0;
    }
    function assert(cond) {
        if (!cond) throw new Error("Assertion error");
    }
    const _QrSegment = class _QrSegment {
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code segment with the given attributes and data.
        // The character count (numChars) must agree with the mode and the bit buffer length,
        // but the constraint isn't checked. The given bit buffer is cloned and stored.
        constructor(mode, numChars, bitData){
            this.mode = mode;
            this.numChars = numChars;
            this.bitData = bitData;
            if (numChars < 0) throw new RangeError("Invalid argument");
            this.bitData = bitData.slice();
        }
        /*-- Static factory functions (mid level) --*/ // Returns a segment representing the given binary data encoded in
        // byte mode. All input byte arrays are acceptable. Any text string
        // can be converted to UTF-8 bytes and encoded as a byte mode segment.
        static makeBytes(data) {
            let bb = [];
            for (const b of data)appendBits(b, 8, bb);
            return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
        }
        // Returns a segment representing the given string of decimal digits encoded in numeric mode.
        static makeNumeric(digits) {
            if (!_QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
            let bb = [];
            for(let i = 0; i < digits.length;){
                const n = Math.min(digits.length - i, 3);
                appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
                i += n;
            }
            return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
        }
        // Returns a segment representing the given text string encoded in alphanumeric mode.
        // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
        // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static makeAlphanumeric(text) {
            if (!_QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let bb = [];
            let i;
            for(i = 0; i + 2 <= text.length; i += 2){
                let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
                temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
                appendBits(temp, 11, bb);
            }
            if (i < text.length) appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
            return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
        }
        // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
        // The result may use various segment modes and switch modes to optimize the length of the bit stream.
        static makeSegments(text) {
            if (text == "") return [];
            else if (_QrSegment.isNumeric(text)) return [
                _QrSegment.makeNumeric(text)
            ];
            else if (_QrSegment.isAlphanumeric(text)) return [
                _QrSegment.makeAlphanumeric(text)
            ];
            else return [
                _QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))
            ];
        }
        // Returns a segment representing an Extended Channel Interpretation
        // (ECI) designator with the given assignment value.
        static makeEci(assignVal) {
            let bb = [];
            if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
            else if (assignVal < 1 << 7) appendBits(assignVal, 8, bb);
            else if (assignVal < 1 << 14) {
                appendBits(2, 2, bb);
                appendBits(assignVal, 14, bb);
            } else if (assignVal < 1e6) {
                appendBits(6, 3, bb);
                appendBits(assignVal, 21, bb);
            } else throw new RangeError("ECI assignment value out of range");
            return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
        }
        // Tests whether the given string can be encoded as a segment in numeric mode.
        // A string is encodable iff each character is in the range 0 to 9.
        static isNumeric(text) {
            return _QrSegment.NUMERIC_REGEX.test(text);
        }
        // Tests whether the given string can be encoded as a segment in alphanumeric mode.
        // A string is encodable iff each character is in the following set: 0 to 9, A to Z
        // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static isAlphanumeric(text) {
            return _QrSegment.ALPHANUMERIC_REGEX.test(text);
        }
        /*-- Methods --*/ // Returns a new copy of the data bits of this segment.
        getData() {
            return this.bitData.slice();
        }
        // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
        // the given version. The result is infinity if a segment has too many characters to fit its length field.
        static getTotalBits(segs, version) {
            let result = 0;
            for (const seg of segs){
                const ccbits = seg.mode.numCharCountBits(version);
                if (seg.numChars >= 1 << ccbits) return Infinity;
                result += 4 + ccbits + seg.bitData.length;
            }
            return result;
        }
        // Returns a new array of bytes representing the given string encoded in UTF-8.
        static toUtf8ByteArray(str) {
            str = encodeURI(str);
            let result = [];
            for(let i = 0; i < str.length; i++){
                if (str.charAt(i) != "%") result.push(str.charCodeAt(i));
                else {
                    result.push(parseInt(str.substring(i + 1, i + 3), 16));
                    i += 2;
                }
            }
            return result;
        }
    };
    /*-- Constants --*/ // Describes precisely all strings that are encodable in numeric mode.
    _QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    _QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    _QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let QrSegment = _QrSegment;
    qrcodegen2.QrSegment = _QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2)=>{
    let QrCode;
    ((QrCode2)=>{
        const _Ecc = class _Ecc {
            // The QR Code can tolerate about 30% erroneous codewords
            /*-- Constructor and fields --*/ constructor(ordinal, formatBits){
                this.ordinal = ordinal;
                this.formatBits = formatBits;
            }
        };
        /*-- Constants --*/ _Ecc.LOW = new _Ecc(0, 1);
        // The QR Code can tolerate about  7% erroneous codewords
        _Ecc.MEDIUM = new _Ecc(1, 0);
        // The QR Code can tolerate about 15% erroneous codewords
        _Ecc.QUARTILE = new _Ecc(2, 3);
        // The QR Code can tolerate about 25% erroneous codewords
        _Ecc.HIGH = new _Ecc(3, 2);
        let Ecc = _Ecc;
        QrCode2.Ecc = _Ecc;
    })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2)=>{
    let QrSegment;
    ((QrSegment2)=>{
        const _Mode = class _Mode {
            /*-- Constructor and fields --*/ constructor(modeBits, numBitsCharCount){
                this.modeBits = modeBits;
                this.numBitsCharCount = numBitsCharCount;
            }
            /*-- Method --*/ // (Package-private) Returns the bit width of the character count field for a segment in
            // this mode in a QR Code at the given version number. The result is in the range [0, 16].
            numCharCountBits(ver) {
                return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
            }
        };
        /*-- Constants --*/ _Mode.NUMERIC = new _Mode(1, [
            10,
            12,
            14
        ]);
        _Mode.ALPHANUMERIC = new _Mode(2, [
            9,
            11,
            13
        ]);
        _Mode.BYTE = new _Mode(4, [
            8,
            16,
            16
        ]);
        _Mode.KANJI = new _Mode(8, [
            8,
            10,
            12
        ]);
        _Mode.ECI = new _Mode(7, [
            0,
            0,
            0
        ]);
        let Mode = _Mode;
        QrSegment2.Mode = _Mode;
    })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
// src/index.tsx
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var ERROR_LEVEL_MAP = {
    L: qrcodegen_default.QrCode.Ecc.LOW,
    M: qrcodegen_default.QrCode.Ecc.MEDIUM,
    Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
    H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
    const ops = [];
    modules.forEach(function(row, y) {
        let start = null;
        row.forEach(function(cell, x) {
            if (!cell && start !== null) {
                ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
                start = null;
                return;
            }
            if (x === row.length - 1) {
                if (!cell) {
                    return;
                }
                if (start === null) {
                    ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
                } else {
                    ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
                }
                return;
            }
            if (cell && start === null) {
                start = x;
            }
        });
    });
    return ops.join("");
}
function excavateModules(modules, excavation) {
    return modules.slice().map((row, y)=>{
        if (y < excavation.y || y >= excavation.y + excavation.h) {
            return row;
        }
        return row.map((cell, x)=>{
            if (x < excavation.x || x >= excavation.x + excavation.w) {
                return cell;
            }
            return false;
        });
    });
}
function getImageSettings(cells, size, margin, imageSettings) {
    if (imageSettings == null) {
        return null;
    }
    const numCells = cells.length + margin * 2;
    const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
    const scale = numCells / size;
    const w = (imageSettings.width || defaultSize) * scale;
    const h = (imageSettings.height || defaultSize) * scale;
    const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
    const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
    const opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
    let excavation = null;
    if (imageSettings.excavate) {
        let floorX = Math.floor(x);
        let floorY = Math.floor(y);
        let ceilW = Math.ceil(w + x - floorX);
        let ceilH = Math.ceil(h + y - floorY);
        excavation = {
            x: floorX,
            y: floorY,
            w: ceilW,
            h: ceilH
        };
    }
    const crossOrigin = imageSettings.crossOrigin;
    return {
        x,
        y,
        h,
        w,
        excavation,
        opacity,
        crossOrigin
    };
}
function getMarginSize(includeMargin, marginSize) {
    if (marginSize != null) {
        return Math.max(Math.floor(marginSize), 0);
    }
    return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
function useQRCode({ value, level, minVersion, includeMargin, marginSize, imageSettings, size, boostLevel }) {
    let qrcode = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useQRCode.useMemo[qrcode]": ()=>{
            const values = Array.isArray(value) ? value : [
                value
            ];
            const segments = values.reduce({
                "useQRCode.useMemo[qrcode].segments": (accum, v)=>{
                    accum.push(...qrcodegen_default.QrSegment.makeSegments(v));
                    return accum;
                }
            }["useQRCode.useMemo[qrcode].segments"], []);
            return qrcodegen_default.QrCode.encodeSegments(segments, ERROR_LEVEL_MAP[level], minVersion, void 0, void 0, boostLevel);
        }
    }["useQRCode.useMemo[qrcode]"], [
        value,
        level,
        minVersion,
        boostLevel
    ]);
    const { cells, margin, numCells, calculatedImageSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useQRCode.useMemo": ()=>{
            let cells2 = qrcode.getModules();
            const margin2 = getMarginSize(includeMargin, marginSize);
            const numCells2 = cells2.length + margin2 * 2;
            const calculatedImageSettings2 = getImageSettings(cells2, size, margin2, imageSettings);
            return {
                cells: cells2,
                margin: margin2,
                numCells: numCells2,
                calculatedImageSettings: calculatedImageSettings2
            };
        }
    }["useQRCode.useMemo"], [
        qrcode,
        size,
        imageSettings,
        includeMargin,
        marginSize
    ]);
    return {
        qrcode,
        margin,
        cells,
        numCells,
        calculatedImageSettings
    };
}
var SUPPORTS_PATH2D = function() {
    try {
        new Path2D().addPath(new Path2D());
    } catch (e) {
        return false;
    }
    return true;
}();
var QRCodeCanvas = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function QRCodeCanvas2(props, forwardedRef) {
    const _a = props, { value, size = DEFAULT_SIZE, level = DEFAULT_LEVEL, bgColor = DEFAULT_BGCOLOR, fgColor = DEFAULT_FGCOLOR, includeMargin = DEFAULT_INCLUDEMARGIN, minVersion = DEFAULT_MINVERSION, boostLevel, marginSize, imageSettings } = _a, extraProps = __objRest(_a, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "marginSize",
        "imageSettings"
    ]);
    const _b = extraProps, { style } = _b, otherProps = __objRest(_b, [
        "style"
    ]);
    const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
    const _canvas = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const _image = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const setCanvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "QRCodeCanvas.QRCodeCanvas2.useCallback[setCanvasRef]": (node)=>{
            _canvas.current = node;
            if (typeof forwardedRef === "function") {
                forwardedRef(node);
            } else if (forwardedRef) {
                forwardedRef.current = node;
            }
        }
    }["QRCodeCanvas.QRCodeCanvas2.useCallback[setCanvasRef]"], [
        forwardedRef
    ]);
    const [isImgLoaded, setIsImageLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
        value,
        level,
        minVersion,
        boostLevel,
        includeMargin,
        marginSize,
        imageSettings,
        size
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "QRCodeCanvas.QRCodeCanvas2.useEffect": ()=>{
            if (_canvas.current != null) {
                const canvas = _canvas.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                let cellsToDraw = cells;
                const image = _image.current;
                const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
                if (haveImageToRender) {
                    if (calculatedImageSettings.excavation != null) {
                        cellsToDraw = excavateModules(cells, calculatedImageSettings.excavation);
                    }
                }
                const pixelRatio = window.devicePixelRatio || 1;
                canvas.height = canvas.width = size * pixelRatio;
                const scale = size / numCells * pixelRatio;
                ctx.scale(scale, scale);
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, numCells, numCells);
                ctx.fillStyle = fgColor;
                if (SUPPORTS_PATH2D) {
                    ctx.fill(new Path2D(generatePath(cellsToDraw, margin)));
                } else {
                    cells.forEach({
                        "QRCodeCanvas.QRCodeCanvas2.useEffect": function(row, rdx) {
                            row.forEach({
                                "QRCodeCanvas.QRCodeCanvas2.useEffect": function(cell, cdx) {
                                    if (cell) {
                                        ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
                                    }
                                }
                            }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
                        }
                    }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
                }
                if (calculatedImageSettings) {
                    ctx.globalAlpha = calculatedImageSettings.opacity;
                }
                if (haveImageToRender) {
                    ctx.drawImage(image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
                }
            }
        }
    }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "QRCodeCanvas.QRCodeCanvas2.useEffect": ()=>{
            setIsImageLoaded(false);
        }
    }["QRCodeCanvas.QRCodeCanvas2.useEffect"], [
        imgSrc
    ]);
    const canvasStyle = __spreadValues({
        height: size,
        width: size
    }, style);
    let img = null;
    if (imgSrc != null) {
        img = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: imgSrc,
            key: imgSrc,
            style: {
                display: "none"
            },
            onLoad: ()=>{
                setIsImageLoaded(true);
            },
            ref: _image,
            crossOrigin: calculatedImageSettings == null ? void 0 : calculatedImageSettings.crossOrigin
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("canvas", __spreadValues({
        style: canvasStyle,
        height: size,
        width: size,
        ref: setCanvasRef,
        role: "img"
    }, otherProps)), img);
});
QRCodeCanvas.displayName = "QRCodeCanvas";
var QRCodeSVG = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function QRCodeSVG2(props, forwardedRef) {
    const _a = props, { value, size = DEFAULT_SIZE, level = DEFAULT_LEVEL, bgColor = DEFAULT_BGCOLOR, fgColor = DEFAULT_FGCOLOR, includeMargin = DEFAULT_INCLUDEMARGIN, minVersion = DEFAULT_MINVERSION, boostLevel, title, marginSize, imageSettings } = _a, otherProps = __objRest(_a, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "title",
        "marginSize",
        "imageSettings"
    ]);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
        value,
        level,
        minVersion,
        boostLevel,
        includeMargin,
        marginSize,
        imageSettings,
        size
    });
    let cellsToDraw = cells;
    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
            cellsToDraw = excavateModules(cells, calculatedImageSettings.excavation);
        }
        image = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("image", {
            href: imageSettings.src,
            height: calculatedImageSettings.h,
            width: calculatedImageSettings.w,
            x: calculatedImageSettings.x + margin,
            y: calculatedImageSettings.y + margin,
            preserveAspectRatio: "none",
            opacity: calculatedImageSettings.opacity,
            crossOrigin: calculatedImageSettings.crossOrigin
        });
    }
    const fgPath = generatePath(cellsToDraw, margin);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", __spreadValues({
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        ref: forwardedRef,
        role: "img"
    }, otherProps), !!title && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: bgColor,
        d: `M0,0 h${numCells}v${numCells}H0z`,
        shapeRendering: "crispEdges"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: fgColor,
        d: fgPath,
        shapeRendering: "crispEdges"
    }), image);
});
QRCodeSVG.displayName = "QRCodeSVG";
;
}),
]);

//# sourceMappingURL=2d254_9af8c4f2._.js.map