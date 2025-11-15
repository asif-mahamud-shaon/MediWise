(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
function Notification({ message, type = 'info', onClose, duration = 3000 }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            if (duration > 0) {
                const timer = setTimeout({
                    "Notification.useEffect.timer": ()=>{
                        onClose();
                    }
                }["Notification.useEffect.timer"], duration);
                return ({
                    "Notification.useEffect": ()=>clearTimeout(timer)
                })["Notification.useEffect"];
            }
        }
    }["Notification.useEffect"], [
        duration,
        onClose
    ]);
    const getIcon = ()=>{
        switch(type){
            case 'success':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                    className: "text-3xl text-green-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, this);
            case 'error':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                    className: "text-3xl text-red-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                    className: "text-3xl text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            case 'info':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                    className: "text-3xl text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                    className: "text-3xl text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 41,
                    columnNumber: 16
                }, this);
        }
    };
    const getBgColor = ()=>{
        switch(type){
            case 'success':
                return 'bg-green-100';
            case 'error':
                return 'bg-red-100';
            case 'warning':
                return 'bg-yellow-100';
            case 'info':
                return 'bg-blue-100';
            default:
                return 'bg-blue-100';
        }
    };
    const getTitle = ()=>{
        switch(type){
            case 'success':
                return 'Success!';
            case 'error':
                return 'Error';
            case 'warning':
                return 'Warning';
            case 'info':
                return 'Information';
            default:
                return 'Notification';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all animate-in fade-in zoom-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 ${getBgColor()} rounded-full flex items-center justify-center mx-auto mb-4`,
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: getTitle()
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 mb-6 whitespace-pre-line",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-md hover:shadow-lg",
                        children: "OK"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Notification, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Notification;
;
;
function Notification({ message, type = 'info', onClose, duration = 3000 }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            if (duration > 0) {
                const timer = setTimeout({
                    "Notification.useEffect.timer": ()=>{
                        onClose();
                    }
                }["Notification.useEffect.timer"], duration);
                return ({
                    "Notification.useEffect": ()=>clearTimeout(timer)
                })["Notification.useEffect"];
            }
        }
    }["Notification.useEffect"], [
        duration,
        onClose
    ]);
    const getIcon = ()=>{
        switch(type){
            case 'success':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                    className: "text-3xl text-green-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 129,
                    columnNumber: 16
                }, this);
            case 'error':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                    className: "text-3xl text-red-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 131,
                    columnNumber: 16
                }, this);
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                    className: "text-3xl text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 133,
                    columnNumber: 16
                }, this);
            case 'info':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                    className: "text-3xl text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 135,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                    className: "text-3xl text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                    lineNumber: 137,
                    columnNumber: 16
                }, this);
        }
    };
    const getBgColor = ()=>{
        switch(type){
            case 'success':
                return 'bg-green-100';
            case 'error':
                return 'bg-red-100';
            case 'warning':
                return 'bg-yellow-100';
            case 'info':
                return 'bg-blue-100';
            default:
                return 'bg-blue-100';
        }
    };
    const getTitle = ()=>{
        switch(type){
            case 'success':
                return 'Success!';
            case 'error':
                return 'Error';
            case 'warning':
                return 'Warning';
            case 'info':
                return 'Information';
            default:
                return 'Notification';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all animate-in fade-in zoom-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 ${getBgColor()} rounded-full flex items-center justify-center mx-auto mb-4`,
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: getTitle()
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 mb-6 whitespace-pre-line",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-md hover:shadow-lg",
                        children: "OK"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s1(Notification, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = Notification;
var _c, _c1;
__turbopack_context__.k.register(_c, "Notification");
__turbopack_context__.k.register(_c1, "Notification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotification",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/components/Notification.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const NotificationProvider = ({ children })=>{
    _s();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showNotification = (message, type = 'info', duration = 3000)=>{
        setNotification({
            message,
            type,
            duration
        });
    };
    const closeNotification = ()=>{
        setNotification(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            showNotification
        },
        children: [
            children,
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: notification.message,
                type: notification.type,
                duration: notification.duration,
                onClose: closeNotification
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationProvider, "9+u8OnBKu3AKeB7RYrRKq5+Xze8=");
_c = NotificationProvider;
const useNotification = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
_s1(useNotification, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const NotificationProvider = ({ children })=>{
    _s2();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showNotification = (message, type = 'info', duration = 3000)=>{
        setNotification({
            message,
            type,
            duration
        });
    };
    const closeNotification = ()=>{
        setNotification(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            showNotification
        },
        children: [
            children,
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: notification.message,
                type: notification.type,
                duration: notification.duration,
                onClose: closeNotification
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(NotificationProvider, "9+u8OnBKu3AKeB7RYrRKq5+Xze8=");
_c1 = NotificationProvider;
const useNotification = ()=>{
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
_s3(useNotification, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1;
__turbopack_context__.k.register(_c, "NotificationProvider");
__turbopack_context__.k.register(_c1, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            // Load theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setThemeState(savedTheme);
                applyTheme(savedTheme);
            } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = prefersDark ? 'dark' : 'light';
                setThemeState(initialTheme);
                applyTheme(initialTheme);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const applyTheme = (newTheme)=>{
        if (typeof document === 'undefined') return;
        const root = document.documentElement;
        const html = document.querySelector('html');
        // Remove all theme classes first
        root.classList.remove('dark', 'light');
        if (html) {
            html.classList.remove('dark', 'light');
        }
        // Apply the new theme
        if (newTheme === 'dark') {
            root.classList.add('dark');
            if (html) {
                html.classList.add('dark');
            }
        } else {
            root.classList.add('light');
            if (html) {
                html.classList.add('light');
            }
        }
        localStorage.setItem('theme', newTheme);
        // Force a repaint to ensure styles apply
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new Event('themechange'));
        }
    };
    const setTheme = (newTheme)=>{
        setThemeState(newTheme);
        applyTheme(newTheme);
    };
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/ThemeContext.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "8EJlfNZEM7Rz4lnQSGQ4gv329RU=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s2();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            // Load theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setThemeState(savedTheme);
                applyTheme(savedTheme);
            } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = prefersDark ? 'dark' : 'light';
                setThemeState(initialTheme);
                applyTheme(initialTheme);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const applyTheme = (newTheme)=>{
        if (typeof document === 'undefined') return;
        const root = document.documentElement;
        const html = document.querySelector('html');
        // Remove all theme classes first
        root.classList.remove('dark', 'light');
        if (html) {
            html.classList.remove('dark', 'light');
        }
        // Apply the new theme
        if (newTheme === 'dark') {
            root.classList.add('dark');
            if (html) {
                html.classList.add('dark');
            }
        } else {
            root.classList.add('light');
            if (html) {
                html.classList.add('light');
            }
        }
        localStorage.setItem('theme', newTheme);
        // Force a repaint to ensure styles apply
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new Event('themechange'));
        }
    };
    const setTheme = (newTheme)=>{
        setThemeState(newTheme);
        applyTheme(newTheme);
    };
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/ThemeContext.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ThemeProvider, "8EJlfNZEM7Rz4lnQSGQ4gv329RU=");
_c1 = ThemeProvider;
const useTheme = ()=>{
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s3(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1;
__turbopack_context__.k.register(_c, "ThemeProvider");
__turbopack_context__.k.register(_c1, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    'dashboard': {
        en: 'Dashboard',
        bn: 'ড্যাশবোর্ড',
        hi: 'डैशबोर्ड'
    },
    'users': {
        en: 'Users',
        bn: 'ব্যবহারকারী',
        hi: 'उपयोगकर्ता'
    },
    'doctors': {
        en: 'Doctors',
        bn: 'ডাক্তার',
        hi: 'डॉक्टर'
    },
    'appointments': {
        en: 'Appointments',
        bn: 'অ্যাপয়েন্টমেন্ট',
        hi: 'अपॉइंटमेंट'
    },
    'prescriptions': {
        en: 'Prescriptions',
        bn: 'প্রেসক্রিপশন',
        hi: 'नुस्खे'
    },
    'advertisements': {
        en: 'Advertisements',
        bn: 'বিজ্ঞাপন',
        hi: 'विज्ञापन'
    },
    'chats': {
        en: 'Chats',
        bn: 'চ্যাটস',
        hi: 'चैट'
    },
    'welcome_back': {
        en: 'Welcome back',
        bn: 'ফিরে আসার জন্য স্বাগতম',
        hi: 'वापसी पर स्वागत है'
    },
    'total_users': {
        en: 'Total Users',
        bn: 'মোট ব্যবহারকারী',
        hi: 'कुल उपयोगकर्ता'
    },
    'total_doctors': {
        en: 'Total Doctors',
        bn: 'মোট ডাক্তার',
        hi: 'कुल डॉक्टर'
    },
    'total_appointments': {
        en: 'Appointments',
        bn: 'অ্যাপয়েন্টমেন্ট',
        hi: 'अपॉइंटमेंट'
    },
    'pending_doctors': {
        en: 'Pending Doctors',
        bn: 'অপেক্ষমাণ ডাক্তার',
        hi: 'लंबित डॉक्टर'
    },
    'recent_appointments': {
        en: 'Recent Appointments',
        bn: 'সাম্প্রতিক অ্যাপয়েন্টমেন্ট',
        hi: 'हाल के अपॉइंटमेंट'
    },
    'top_doctors': {
        en: 'Top Doctors',
        bn: 'শীর্ষ ডাক্তার',
        hi: 'शीर्ष डॉक्टर'
    },
    'view_all': {
        en: 'View All',
        bn: 'সব দেখুন',
        hi: 'सभी देखें'
    },
    'search_placeholder': {
        en: 'Search for anything here...',
        bn: 'এখানে যেকোনো কিছু খুঁজুন...',
        hi: 'यहाँ कुछ भी खोजें...'
    },
    'profile_settings': {
        en: 'Profile Settings',
        bn: 'প্রোফাইল সেটিংস',
        hi: 'प्रोफ़ाइल सेटिंग'
    },
    'account_settings': {
        en: 'Account Settings',
        bn: 'অ্যাকাউন্ট সেটিংস',
        hi: 'खाता सेटिंग'
    },
    'logout': {
        en: 'Logout',
        bn: 'লগআউট',
        hi: 'लॉगआउट'
    },
    'dark_mode': {
        en: 'Dark Mode',
        bn: 'ডার্ক মোড',
        hi: 'डार्क मोड'
    },
    'toggle_dark_theme': {
        en: 'Toggle dark theme',
        bn: 'ডার্ক থিম টগল করুন',
        hi: 'डार्क थीम टॉगल करें'
    },
    'language': {
        en: 'Language',
        bn: 'ভাষা',
        hi: 'भाषा'
    },
    'choose_language': {
        en: 'Choose your language',
        bn: 'আপনার ভাষা নির্বাচন করুন',
        hi: 'अपनी भाषा चुनें'
    },
    'notification_sound': {
        en: 'Notification Sound',
        bn: 'বিজ্ঞপ্তি শব্দ',
        hi: 'सूचना ध्वनि'
    },
    'enable_sound_alerts': {
        en: 'Enable sound alerts',
        bn: 'শব্দ সতর্কতা সক্রিয় করুন',
        hi: 'ध्वनि अलर्ट सक्षम करें'
    },
    'auto_refresh': {
        en: 'Auto-refresh',
        bn: 'স্বয়ংক্রিয় রিফ্রেশ',
        hi: 'स्वचालित ताज़ा करना'
    },
    'auto_refresh_desc': {
        en: 'Auto-refresh data every 30s',
        bn: 'প্রতি 30 সেকেন্ডে ডেটা স্বয়ংক্রিয় রিফ্রেশ',
        hi: 'हर 30s में डेटा स्वचालित रूप से ताज़ा करें'
    },
    'data_preferences': {
        en: 'Data Preferences',
        bn: 'ডেটা পছন্দ',
        hi: 'डेटा प्राथमिकताएं'
    },
    'save_search_history': {
        en: 'Save search history',
        bn: 'অনুসন্ধান ইতিহাস সংরক্ষণ করুন',
        hi: 'खोज इतिहास सहेजें'
    },
    'enable_analytics': {
        en: 'Enable analytics',
        bn: 'বিশ্লেষণ সক্রিয় করুন',
        hi: 'एनालिटिक्स सक्षम करें'
    },
    'calendar': {
        en: 'Calendar',
        bn: 'ক্যালেন্ডার',
        hi: 'कैलेंडर'
    },
    'today': {
        en: 'Today',
        bn: 'আজ',
        hi: 'आज'
    },
    'calendar_today': {
        en: 'Jumped to today',
        bn: 'আজকের তারিখে যাওয়া হয়েছে',
        hi: 'आज पर कूद गया'
    },
    'dashboard_overview': {
        en: "Here's an overview of your system",
        bn: 'এখানে আপনার সিস্টেমের একটি ওভারভিউ রয়েছে',
        hi: 'यहाँ आपके सिस्टम का एक अवलोकन है'
    },
    'flagged_items': {
        en: 'Flagged items',
        bn: 'চিহ্নিত আইটেম',
        hi: 'चिह्नित आइटम'
    }
};
// Default context value to prevent errors during SSR
const defaultLanguageContext = {
    language: 'en',
    setLanguage: ()=>{},
    t: (key)=>key
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultLanguageContext);
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            setMounted(true);
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLanguage = localStorage.getItem('language');
                if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bn' || savedLanguage === 'hi')) {
                    setLanguageState(savedLanguage);
                } else {
                    const browserLang = navigator.language.split('-')[0];
                    if (browserLang === 'bn' || browserLang === 'hi') {
                        setLanguageState(browserLang);
                    }
                }
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Update document lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Set initial lang attribute
            if (typeof document !== 'undefined' && language) {
                document.documentElement.lang = language;
            }
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const t = (key)=>{
        return translations[key]?.[language] || translations[key]?.['en'] || key;
    };
    // Always provide context value, even during SSR
    const contextValue = {
        language,
        setLanguage,
        t
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "Ku4Z/fw9lQQaw3XMp/7p+LDlXL8=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    // Always return context - it has safe defaults if provider not mounted
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
const translations = {
    'dashboard': {
        en: 'Dashboard',
        bn: 'ড্যাশবোর্ড',
        hi: 'डैशबोर्ड'
    },
    'users': {
        en: 'Users',
        bn: 'ব্যবহারকারী',
        hi: 'उपयोगकर्ता'
    },
    'doctors': {
        en: 'Doctors',
        bn: 'ডাক্তার',
        hi: 'डॉक्टर'
    },
    'appointments': {
        en: 'Appointments',
        bn: 'অ্যাপয়েন্টমেন্ট',
        hi: 'अपॉइंटमेंट'
    },
    'prescriptions': {
        en: 'Prescriptions',
        bn: 'প্রেসক্রিপশন',
        hi: 'नुस्खे'
    },
    'advertisements': {
        en: 'Advertisements',
        bn: 'বিজ্ঞাপন',
        hi: 'विज्ञापन'
    },
    'chats': {
        en: 'Chats',
        bn: 'চ্যাটস',
        hi: 'चैट'
    },
    'welcome_back': {
        en: 'Welcome back',
        bn: 'ফিরে আসার জন্য স্বাগতম',
        hi: 'वापसी पर स्वागत है'
    },
    'total_users': {
        en: 'Total Users',
        bn: 'মোট ব্যবহারকারী',
        hi: 'कुल उपयोगकर्ता'
    },
    'total_doctors': {
        en: 'Total Doctors',
        bn: 'মোট ডাক্তার',
        hi: 'कुल डॉक्टर'
    },
    'total_appointments': {
        en: 'Appointments',
        bn: 'অ্যাপয়েন্টমেন্ট',
        hi: 'अपॉइंटमेंट'
    },
    'pending_doctors': {
        en: 'Pending Doctors',
        bn: 'অপেক্ষমাণ ডাক্তার',
        hi: 'लंबित डॉक्टर'
    },
    'recent_appointments': {
        en: 'Recent Appointments',
        bn: 'সাম্প্রতিক অ্যাপয়েন্টমেন্ট',
        hi: 'हाल के अपॉइंटमेंट'
    },
    'top_doctors': {
        en: 'Top Doctors',
        bn: 'শীর্ষ ডাক্তার',
        hi: 'शीर्ष डॉक्टर'
    },
    'view_all': {
        en: 'View All',
        bn: 'সব দেখুন',
        hi: 'सभी देखें'
    },
    'search_placeholder': {
        en: 'Search for anything here...',
        bn: 'এখানে যেকোনো কিছু খুঁজুন...',
        hi: 'यहाँ कुछ भी खोजें...'
    },
    'profile_settings': {
        en: 'Profile Settings',
        bn: 'প্রোফাইল সেটিংস',
        hi: 'प्रोफ़ाइल सेटिंग'
    },
    'account_settings': {
        en: 'Account Settings',
        bn: 'অ্যাকাউন্ট সেটিংস',
        hi: 'खाता सेटिंग'
    },
    'logout': {
        en: 'Logout',
        bn: 'লগআউট',
        hi: 'लॉगआउट'
    },
    'dark_mode': {
        en: 'Dark Mode',
        bn: 'ডার্ক মোড',
        hi: 'डार्क मोड'
    },
    'toggle_dark_theme': {
        en: 'Toggle dark theme',
        bn: 'ডার্ক থিম টগল করুন',
        hi: 'डार्क थीम टॉगल करें'
    },
    'language': {
        en: 'Language',
        bn: 'ভাষা',
        hi: 'भाषा'
    },
    'choose_language': {
        en: 'Choose your language',
        bn: 'আপনার ভাষা নির্বাচন করুন',
        hi: 'अपनी भाषा चुनें'
    },
    'notification_sound': {
        en: 'Notification Sound',
        bn: 'বিজ্ঞপ্তি শব্দ',
        hi: 'सूचना ध्वनि'
    },
    'enable_sound_alerts': {
        en: 'Enable sound alerts',
        bn: 'শব্দ সতর্কতা সক্রিয় করুন',
        hi: 'ध्वनि अलर्ट सक्षम करें'
    },
    'auto_refresh': {
        en: 'Auto-refresh',
        bn: 'স্বয়ংক্রিয় রিফ্রেশ',
        hi: 'स्वचालित ताज़ा करना'
    },
    'auto_refresh_desc': {
        en: 'Auto-refresh data every 30s',
        bn: 'প্রতি 30 সেকেন্ডে ডেটা স্বয়ংক্রিয় রিফ্রেশ',
        hi: 'हर 30s में डेटा स्वचालित रूप से ताज़ा करें'
    },
    'data_preferences': {
        en: 'Data Preferences',
        bn: 'ডেটা পছন্দ',
        hi: 'डेटा प्राथमिकताएं'
    },
    'save_search_history': {
        en: 'Save search history',
        bn: 'অনুসন্ধান ইতিহাস সংরক্ষণ করুন',
        hi: 'खोज इतिहास सहेजें'
    },
    'enable_analytics': {
        en: 'Enable analytics',
        bn: 'বিশ্লেষণ সক্রিয় করুন',
        hi: 'एनालिटिक्स सक्षम करें'
    },
    'calendar': {
        en: 'Calendar',
        bn: 'ক্যালেন্ডার',
        hi: 'कैलेंडर'
    },
    'today': {
        en: 'Today',
        bn: 'আজ',
        hi: 'आज'
    },
    'calendar_today': {
        en: 'Jumped to today',
        bn: 'আজকের তারিখে যাওয়া হয়েছে',
        hi: 'आज पर कूद गया'
    },
    'dashboard_overview': {
        en: "Here's an overview of your system",
        bn: 'এখানে আপনার সিস্টেমের একটি ওভারভিউ রয়েছে',
        hi: 'यहाँ आपके सिस्टम का एक अवलोकन है'
    },
    'flagged_items': {
        en: 'Flagged items',
        bn: 'চিহ্নিত আইটেম',
        hi: 'चिह्नित आइटम'
    }
};
// Default context value to prevent errors during SSR
const defaultLanguageContext = {
    language: 'en',
    setLanguage: ()=>{},
    t: (key)=>key
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultLanguageContext);
const LanguageProvider = ({ children })=>{
    _s2();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            setMounted(true);
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLanguage = localStorage.getItem('language');
                if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bn' || savedLanguage === 'hi')) {
                    setLanguageState(savedLanguage);
                } else {
                    const browserLang = navigator.language.split('-')[0];
                    if (browserLang === 'bn' || browserLang === 'hi') {
                        setLanguageState(browserLang);
                    }
                }
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Update document lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Set initial lang attribute
            if (typeof document !== 'undefined' && language) {
                document.documentElement.lang = language;
            }
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const t = (key)=>{
        return translations[key]?.[language] || translations[key]?.['en'] || key;
    };
    // Always provide context value, even during SSR
    const contextValue = {
        language,
        setLanguage,
        t
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(LanguageProvider, "Ku4Z/fw9lQQaw3XMp/7p+LDlXL8=");
_c1 = LanguageProvider;
const useLanguage = ()=>{
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    // Always return context - it has safe defaults if provider not mounted
    return context;
};
_s3(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1;
__turbopack_context__.k.register(_c, "LanguageProvider");
__turbopack_context__.k.register(_c1, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_mediwise_frontend_7b02838a._.js.map