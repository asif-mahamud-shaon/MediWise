(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/mediwise/frontend/components/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Loading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Loading.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/Loading.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loading;
const __TURBOPACK__default__export__ = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/utils/doctorName.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formats doctor name with appropriate prefix
 * - Removes any existing "Dr." or "Prof. Dr." prefix
 * - Adds "Prof. Dr." if doctor is a professor (checks qualification)
 * - Otherwise adds "Dr." prefix
 */ __turbopack_context__.s([
    "formatDoctorName",
    ()=>formatDoctorName,
    "formatDoctorNameBengali",
    ()=>formatDoctorNameBengali
]);
function formatDoctorName(name, qualification) {
    if (!name) return '';
    // Remove any existing prefixes (case-insensitive)
    let cleanName = name.replace(/^(prof\.?\s*)?dr\.?\s*/i, '').replace(/^dr\.?\s*/i, '').trim();
    // Check if doctor is a professor (check qualification for "professor" or "prof")
    const isProfessor = qualification && (qualification.toLowerCase().includes('professor') || qualification.toLowerCase().includes('prof.') || qualification.toLowerCase().includes('prof '));
    // Add appropriate prefix
    if (isProfessor) {
        return `Prof. Dr. ${cleanName}`;
    } else {
        return `Dr. ${cleanName}`;
    }
}
function formatDoctorNameBengali(name, qualification) {
    if (!name) return '';
    // Remove any existing prefixes (case-insensitive)
    let cleanName = name.replace(/^(প্রফেসর\s*)?ডাঃ\s*/i, '').replace(/^ডাঃ\s*/i, '').replace(/^(prof\.?\s*)?dr\.?\s*/i, '').replace(/^dr\.?\s*/i, '').trim();
    // Check if doctor is a professor (check qualification for "professor" or "prof")
    const isProfessor = qualification && (qualification.toLowerCase().includes('professor') || qualification.toLowerCase().includes('prof.') || qualification.toLowerCase().includes('prof ') || qualification.toLowerCase().includes('প্রফেসর'));
    // Add appropriate prefix
    if (isProfessor) {
        return `প্রফেসর ডাঃ ${cleanName}`;
    } else {
        return `ডাঃ ${cleanName}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/utils/doctorName.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DoctorSidebar = ({ user, logout, qualification })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getInitials = (name)=>{
        return name?.split(' ')?.map((n)=>n[0])?.join('')?.toUpperCase()?.slice(0, 2) || 'D';
    };
    const menu = [
        {
            href: '/doctor/dashboard',
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"]
        },
        {
            href: '/doctor/appointments',
            label: 'Appointments',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"]
        },
        {
            href: '/doctor/prescriptions',
            label: 'Prescriptions',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"]
        },
        {
            href: '/doctor/patients',
            label: 'Patients',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"]
        },
        {
            href: '/doctor/chat',
            label: 'Chats',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"]
        },
        {
            href: '/doctor/blogs',
            label: 'My Blogs',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBook"]
        },
        {
            href: '/doctor/profile',
            label: 'My Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"]
        }
    ];
    // Close mobile menu when route changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorSidebar.useEffect": ()=>{
            setMobileMenuOpen(false);
        }
    }["DoctorSidebar.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                className: "lg:hidden fixed top-4 left-4 z-50 p-2 bg-teal-600 text-white rounded-lg shadow-lg",
                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                    className: "text-2xl"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                    className: "text-2xl"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40",
                onClick: ()=>setMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${sidebarCollapsed ? 'w-16' : 'w-64'} 
        bg-teal-600 text-white transition-all duration-300 
        fixed left-0 top-0 h-full z-40 lg:z-20
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 h-full flex flex-col overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSidebarCollapsed(!sidebarCollapsed),
                            className: "hidden lg:flex w-full items-center justify-center p-2 hover:bg-teal-700 rounded-lg transition-colors mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                className: `text-xl transform transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(false),
                            className: "lg:hidden w-full flex items-center justify-end p-2 hover:bg-teal-700 rounded-lg transition-colors mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "MediWise Logo",
                                        className: "w-10 h-10 object-contain",
                                        onError: (e)=>{
                                            const target = e.target;
                                            target.style.display = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold",
                                        children: "MediWise"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "MediWise Logo",
                                className: "w-10 h-10 object-contain",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 pb-6 border-b border-teal-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-sm font-semibold",
                                        children: getInitials(user?.name || 'D')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold truncate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDoctorName"])(user?.name || '', qualification)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-teal-200 capitalize",
                                                children: "Doctor"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-1 flex-1",
                            children: menu.map((item)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-teal-700 text-white font-semibold' : 'text-teal-100 hover:bg-teal-700 hover:text-white'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "text-xl shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 39
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 135,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto pt-4 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: logout,
                                className: "w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-teal-100 hover:bg-teal-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                        className: "text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        children: "LOGOUT"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto pt-4 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: logout,
                                className: "w-full flex items-center justify-center p-3 rounded-lg text-teal-100 hover:bg-teal-700 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(DoctorSidebar, "yXgr6rfeXECLCQl6ivLKJjaY60I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DoctorSidebar;
const __TURBOPACK__default__export__ = DoctorSidebar;
var _c;
__turbopack_context__.k.register(_c, "DoctorSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AdsPanel({ position, departmentId }) {
    _s();
    const [ads, setAds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentAdIndex, setCurrentAdIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPanel.useEffect": ()=>{
            fetchAds();
        }
    }["AdsPanel.useEffect"], [
        departmentId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPanel.useEffect": ()=>{
            if (ads.length > 1) {
                // Rotate ads every 4-6 seconds (random between 4-6)
                intervalRef.current = setInterval({
                    "AdsPanel.useEffect": ()=>{
                        setCurrentAdIndex({
                            "AdsPanel.useEffect": (prev)=>(prev + 1) % ads.length
                        }["AdsPanel.useEffect"]);
                    }
                }["AdsPanel.useEffect"], Math.random() * 2000 + 4000); // 4000-6000ms
            }
            return ({
                "AdsPanel.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
            })["AdsPanel.useEffect"];
        }
    }["AdsPanel.useEffect"], [
        ads.length
    ]);
    const fetchAds = async ()=>{
        try {
            const deptParam = departmentId ? `&departmentId=${departmentId}` : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/ads?limit=50&targetAudience=doctor${deptParam}`);
            console.log('Ads API response:', response.data);
            if (response.data && response.data.success !== false) {
                const fetchedAds = response.data.ads || [];
                console.log(`Fetched ${fetchedAds.length} total ads for ${position} side`);
                // Filter ads based on position: left = new medicines, right = old medicines
                let filteredAds = [];
                if (position === 'left') {
                    // Left side: Show new medicines (isNewMedicine = true)
                    filteredAds = fetchedAds.filter((ad)=>ad.isNewMedicine === true || ad.isNewMedicine === 'true');
                    console.log(`Left side: ${filteredAds.length} new medicine ads out of ${fetchedAds.length} total`);
                } else {
                    // Right side: Show old medicines (isNewMedicine = false)
                    filteredAds = fetchedAds.filter((ad)=>ad.isNewMedicine === false || ad.isNewMedicine === 'false' || ad.isNewMedicine === null || ad.isNewMedicine === undefined);
                    console.log(`Right side: ${filteredAds.length} old medicine ads out of ${fetchedAds.length} total`);
                }
                // If no ads match the position filter, use all ads
                if (filteredAds.length === 0 && fetchedAds.length > 0) {
                    console.log(`No ${position} ads found, showing all ${fetchedAds.length} ads`);
                    setAds(fetchedAds);
                } else {
                    setAds(filteredAds);
                }
            } else {
                console.log('No ads returned or API error');
                setAds([]);
            }
        } catch (error) {
            console.error('Error fetching ads:', error);
            // Set empty array on error to prevent UI issues
            setAds([]);
        }
    };
    const handleAdClick = async (ad)=>{
        if (ad.link) {
            window.open(ad.link, '_blank');
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/ads/${ad.id}/click`);
        } catch (error) {
            console.error('Error tracking ad click:', error);
        }
    };
    if (ads.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center text-gray-400 text-sm",
            children: "No ads available"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    }
    const currentAd = ads[currentAdIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col items-center justify-center p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>handleAdClick(currentAd),
                className: "w-full max-w-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 cursor-pointer hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600",
                children: [
                    currentAd.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-2.5 shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: currentAd.imageUrl,
                            alt: currentAd.medicineName || currentAd.title,
                            className: "w-full h-48 object-contain drop-shadow-lg"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-extrabold text-gray-900 dark:text-gray-100 text-xl leading-tight text-center mb-3 tracking-tight",
                                children: currentAd.medicineName || currentAd.title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            currentAd.indications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800 dark:text-blue-300 font-semibold text-center",
                                    children: [
                                        "For: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: currentAd.indications
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                                            lineNumber: 125,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            currentAd.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 text-left font-medium",
                                children: currentAd.description
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    currentAd.isNewMedicine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-full font-bold shadow-lg",
                            children: "✨ New Medicine"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            ads.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4",
                children: ads.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentAdIndex ? 'bg-teal-600 shadow-lg scale-125' : 'bg-gray-300 dark:bg-gray-600'}`
                    }, index, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(AdsPanel, "dF/udJJCgurOLNhGaF8oMpVrIkU=");
_c = AdsPanel;
var _c;
__turbopack_context__.k.register(_c, "AdsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorPrescriptionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/context/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$DoctorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/components/DoctorSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/utils/doctorName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$AdsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/components/AdsPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function DoctorPrescriptionsPage() {
    _s();
    const { user, loading: authLoading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [prescriptions, setPrescriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [problem, setProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [problems, setProblems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSuggestions, setLoadingSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Convert number to Roman numeral (lowercase)
    const toRomanNumeral = (num)=>{
        const romanNumerals = [
            'i',
            'ii',
            'iii',
            'iv',
            'v',
            'vi',
            'vii',
            'viii',
            'ix',
            'x'
        ];
        if (num <= romanNumerals.length) {
            return romanNumerals[num - 1];
        }
        // Fallback for numbers beyond x
        return String(num);
    };
    const [prescriptionForm, setPrescriptionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patientEmail: '',
        diagnosis: '',
        medicines: '',
        tests: '',
        rules: '',
        instructions: '',
        advice: '',
        followUp: ''
    });
    const [doctorProfile, setDoctorProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [patientInfo, setPatientInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingPatient, setLoadingPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPreviewModal, setShowPreviewModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTemplateModal, setShowTemplateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [templateName, setTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingTemplates, setLoadingTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTemplate, setEditingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorPrescriptionsPage.useEffect": ()=>{
            if (!authLoading && (!user || user.role !== 'doctor')) {
                router.push('/login');
            }
        }
    }["DoctorPrescriptionsPage.useEffect"], [
        user,
        authLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorPrescriptionsPage.useEffect": ()=>{
            if (user && user.role === 'doctor') {
                fetchPrescriptions();
                fetchDoctorProfile();
                fetchTemplates();
            }
        }
    }["DoctorPrescriptionsPage.useEffect"], [
        user
    ]);
    // Fetch patient info when email changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorPrescriptionsPage.useEffect": ()=>{
            if (prescriptionForm.patientEmail && showCreateModal) {
                const debounceTimer = setTimeout({
                    "DoctorPrescriptionsPage.useEffect.debounceTimer": ()=>{
                        fetchPatientInfo(prescriptionForm.patientEmail);
                    }
                }["DoctorPrescriptionsPage.useEffect.debounceTimer"], 500);
                return ({
                    "DoctorPrescriptionsPage.useEffect": ()=>clearTimeout(debounceTimer)
                })["DoctorPrescriptionsPage.useEffect"];
            } else {
                setPatientInfo(null);
            }
        }
    }["DoctorPrescriptionsPage.useEffect"], [
        prescriptionForm.patientEmail,
        showCreateModal
    ]);
    // Check for patientEmail in query params and pre-fill form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorPrescriptionsPage.useEffect": ()=>{
            const patientEmail = searchParams.get('patientEmail');
            if (patientEmail) {
                setPrescriptionForm({
                    "DoctorPrescriptionsPage.useEffect": (prev)=>({
                            ...prev,
                            patientEmail: decodeURIComponent(patientEmail)
                        })
                }["DoctorPrescriptionsPage.useEffect"]);
                setShowCreateModal(true);
                // Clean up URL
                router.replace('/doctor/prescriptions', {
                    scroll: false
                });
            }
        }
    }["DoctorPrescriptionsPage.useEffect"], [
        searchParams,
        router
    ]);
    const fetchPrescriptions = async ()=>{
        try {
            setLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/prescriptions?limit=100');
            setPrescriptions(response.data.prescriptions || []);
        } catch (error) {
            console.error('Error fetching prescriptions:', error);
        } finally{
            setLoading(false);
        }
    };
    const fetchDoctorProfile = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/doctors/profile/me');
            setDoctorProfile(response.data.doctor);
        } catch (error) {
            console.error('Error fetching doctor profile:', error);
        }
    };
    const fetchPatientInfo = async (email)=>{
        if (!email || !email.includes('@')) {
            setPatientInfo(null);
            return;
        }
        try {
            setLoadingPatient(true);
            let patient = null;
            // Try to search for patient using the new search endpoint
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/search/patient?email=${encodeURIComponent(email)}`);
                if (response.data.user) {
                    patient = response.data.user;
                }
            } catch (searchError) {
                // If search endpoint fails (404 or other), try finding from prescriptions
                if (searchError.response?.status !== 404) {
                    console.error('Error searching for patient:', searchError);
                }
                try {
                    const presResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/prescriptions?limit=100`);
                    const prescriptions = presResponse.data.prescriptions || [];
                    const foundPrescription = prescriptions.find((p)=>p.patient?.email === email);
                    if (foundPrescription?.patient) {
                        patient = foundPrescription.patient;
                    }
                } catch (presError) {
                    console.error('Error fetching patient from prescriptions:', presError);
                }
            }
            if (patient) {
                // Calculate age
                let age = '';
                if (patient.dateOfBirth) {
                    const birthDate = new Date(patient.dateOfBirth);
                    const today = new Date();
                    let years = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
                        years--;
                    }
                    age = `${years} years`;
                }
                setPatientInfo({
                    ...patient,
                    age
                });
            } else {
                setPatientInfo(null);
            }
        } catch (error) {
            console.error('Error fetching patient info:', error);
            setPatientInfo(null);
        } finally{
            setLoadingPatient(false);
        }
    };
    const addProblem = ()=>{
        if (!problem.trim()) {
            showNotification('Please enter a problem description first', 'error');
            return;
        }
        setProblems((prev)=>[
                ...prev,
                problem.trim()
            ]);
        setProblem('');
    };
    const removeProblem = (index)=>{
        setProblems((prev)=>prev.filter((_, i)=>i !== index));
    };
    const fetchAISuggestions = async ()=>{
        // Combine all problems for suggestion
        const allProblems = problems.length > 0 ? problems.join('; ') + (problem.trim() ? `; ${problem.trim()}` : '') : problem.trim();
        if (!allProblems.trim()) {
            showNotification('Please add at least one problem description', 'error');
            return;
        }
        try {
            setLoadingSuggestions(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/prescriptions/ai-suggestions', {
                problem: allProblems
            });
            setSuggestions(response.data.suggestions);
        // No success notification - suggestions will show directly
        } catch (error) {
            console.error('Error fetching AI suggestions:', error);
            showNotification(error.response?.data?.message || 'Failed to generate AI suggestions', 'error');
        } finally{
            setLoadingSuggestions(false);
        }
    };
    const acceptSuggestion = (field, value)=>{
        setPrescriptionForm((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleCreatePrescription = async (e)=>{
        if (e) e.preventDefault();
        try {
            const medicinesArray = prescriptionForm.medicines.split('\n').map((m)=>m.trim()).filter((m)=>m.length > 0).map((m)=>{
                const parts = m.split('-').map((p)=>p.trim());
                return {
                    name: parts[0] || m,
                    dosage: parts[1] || '',
                    frequency: parts[2] || ''
                };
            });
            const testsArray = prescriptionForm.tests.split('\n').map((t)=>t.trim()).filter((t)=>t.length > 0).map((t)=>({
                    name: t,
                    description: ''
                }));
            const rulesArray = prescriptionForm.rules.split('\n').map((r)=>r.trim()).filter((r)=>r.length > 0).map((r)=>({
                    title: r,
                    description: ''
                }));
            // Combine instructions and followUp into instructions
            const combinedInstructions = [
                prescriptionForm.instructions,
                prescriptionForm.followUp && `Follow-up:\n${prescriptionForm.followUp}`
            ].filter(Boolean).join('\n\n');
            // Use advice for rules if rules is empty
            const finalRules = rulesArray.length > 0 ? rulesArray : prescriptionForm.advice ? prescriptionForm.advice.split('\n').filter((a)=>a.trim()).map((a)=>({
                    title: a.trim(),
                    description: ''
                })) : [];
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/prescriptions', {
                patientEmail: prescriptionForm.patientEmail,
                diagnosis: prescriptionForm.diagnosis,
                medicines: medicinesArray,
                tests: testsArray,
                rules: finalRules,
                instructions: combinedInstructions || prescriptionForm.instructions
            });
            showNotification('Prescription created successfully', 'success');
            setShowCreateModal(false);
            setPrescriptionForm({
                patientEmail: '',
                diagnosis: '',
                medicines: '',
                tests: '',
                rules: '',
                instructions: '',
                advice: '',
                followUp: ''
            });
            setProblem('');
            setProblems([]);
            setSuggestions(null);
            setEditingTemplate(null);
            setTemplateName('');
            fetchPrescriptions();
        } catch (error) {
            showNotification(error.response?.data?.message || 'Failed to create prescription', 'error');
        }
    };
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().slice(0, 2);
    };
    // Template functions
    const fetchTemplates = async ()=>{
        try {
            setLoadingTemplates(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/templates');
            setTemplates(response.data.templates || []);
        } catch (error) {
            console.error('Error fetching templates:', error);
        } finally{
            setLoadingTemplates(false);
        }
    };
    const handleSaveTemplate = async ()=>{
        try {
            if (!templateName.trim()) {
                showNotification('Please enter a template name', 'error');
                return;
            }
            if (editingTemplate) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/templates/${editingTemplate.id}`, {
                    name: templateName,
                    diagnosis: prescriptionForm.diagnosis,
                    medicines: prescriptionForm.medicines,
                    tests: prescriptionForm.tests,
                    rules: prescriptionForm.rules,
                    instructions: prescriptionForm.instructions,
                    advice: prescriptionForm.advice,
                    followUp: prescriptionForm.followUp
                });
                showNotification('Template updated successfully', 'success');
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/templates', {
                    name: templateName,
                    diagnosis: prescriptionForm.diagnosis,
                    medicines: prescriptionForm.medicines,
                    tests: prescriptionForm.tests,
                    rules: prescriptionForm.rules,
                    instructions: prescriptionForm.instructions,
                    advice: prescriptionForm.advice,
                    followUp: prescriptionForm.followUp
                });
                showNotification('Template saved successfully', 'success');
            }
            setShowTemplateModal(false);
            setTemplateName('');
            setEditingTemplate(null);
            fetchTemplates();
        } catch (error) {
            showNotification(error.response?.data?.message || 'Failed to save template', 'error');
        }
    };
    const handleLoadTemplate = (template)=>{
        setPrescriptionForm({
            patientEmail: prescriptionForm.patientEmail,
            diagnosis: template.diagnosis || '',
            medicines: template.medicines || '',
            tests: template.tests || '',
            rules: template.rules || '',
            instructions: template.instructions || '',
            advice: template.advice || '',
            followUp: template.followUp || ''
        });
        setShowTemplateModal(false);
        setEditingTemplate(template);
        setTemplateName(template.name);
        showNotification('Template loaded. You can edit it now.', 'success');
    };
    const handleEditTemplate = (template)=>{
        setEditingTemplate(template);
        setTemplateName(template.name);
        setPrescriptionForm({
            patientEmail: prescriptionForm.patientEmail,
            diagnosis: template.diagnosis || '',
            medicines: template.medicines || '',
            tests: template.tests || '',
            rules: template.rules || '',
            instructions: template.instructions || '',
            advice: template.advice || '',
            followUp: template.followUp || ''
        });
        setShowTemplateModal(false);
        setShowCreateModal(true);
    };
    const handleDeleteTemplate = async (templateId)=>{
        if (!confirm('Are you sure you want to delete this template?')) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/templates/${templateId}`);
            showNotification('Template deleted successfully', 'success');
            fetchTemplates();
        } catch (error) {
            showNotification(error.response?.data?.message || 'Failed to delete template', 'error');
        }
    };
    // Print function with professional styling - exact same layout as form
    const handlePrint = ()=>{
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;
        const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Prescription - ${patientInfo?.name || 'Patient'}</title>
          <style>
            @media print {
              @page {
                margin: 15mm;
                size: A4;
              }
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Times New Roman', serif;
              font-size: 11pt;
              line-height: 1.6;
              color: #000;
              background: #fff;
              padding: 20px;
              max-width: 100%;
              position: relative;
              overflow: visible;
            }
            /* Professional Watermark Background - Clean and Visible */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              font-size: 100pt;
              font-weight: 700;
              color: rgba(0, 102, 102, 0.18);
              z-index: 0;
              pointer-events: none;
              white-space: nowrap;
              font-family: 'Times New Roman', serif;
              letter-spacing: 6px;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              opacity: 0.18 !important;
              display: block !important;
              text-shadow: none;
              line-height: 1;
            }
            body::before {
              content: 'MediWise';
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              font-size: 100pt;
              font-weight: 700;
              color: rgba(0, 102, 102, 0.18);
              z-index: 0;
              pointer-events: none;
              white-space: nowrap;
              font-family: 'Times New Roman', serif;
              letter-spacing: 6px;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              opacity: 0.18 !important;
              text-shadow: none;
              line-height: 1;
            }
            .container {
              position: relative;
              z-index: 1;
              max-width: 100%;
            }
            .header {
              border-bottom: 3px solid #000;
              padding-bottom: 15px;
              margin-bottom: 15px;
            }
            .header-top {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            .doctor-info-left {
              flex: 1;
            }
            .logo-container {
              width: 180px;
              height: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
            }
            .logo-image {
              max-width: 100%;
              height: auto;
              object-fit: contain;
            }
            .doctor-name {
              font-size: 22pt;
              font-weight: bold;
              color: #006666;
              margin-bottom: 8px;
            }
            .doctor-name-bengali {
              font-size: 20pt;
              font-weight: bold;
              color: #006666;
              margin-bottom: 8px;
            }
            .doctor-details {
              font-size: 10pt;
              margin-bottom: 3px;
            }
            .doctor-details-bengali {
              font-size: 10pt;
              margin-bottom: 3px;
              color: #333;
            }
            .bilingual-section {
              margin-bottom: 10px;
            }
            .date-time {
              text-align: right;
              font-size: 10pt;
              font-weight: bold;
            }
            .patient-section {
              border-top: 2px solid #000;
              padding-top: 12px;
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            .patient-info-left {
              flex: 1;
            }
            .patient-label {
              font-size: 10pt;
              font-weight: bold;
              margin-bottom: 3px;
            }
            .patient-input {
              font-size: 10pt;
              padding: 5px;
              border: 2px solid #000;
              width: 100%;
              max-width: 300px;
            }
            .patient-info-right {
              text-align: right;
            }
            .patient-name {
              font-size: 12pt;
              font-weight: bold;
              margin-bottom: 3px;
            }
            .patient-details {
              font-size: 10pt;
            }
            .two-column-layout {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              margin-top: 15px;
              position: relative;
            }
            .two-column-layout::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 0;
              bottom: 0;
              width: 3px;
              background-color: #0066cc;
              transform: translateX(-50%);
              z-index: 1;
            }
            .left-column, .right-column {
              display: flex;
              flex-direction: column;
              gap: 25px;
              position: relative;
              z-index: 2;
              background: white;
            }
            .section {
              padding-bottom: 0;
              margin-bottom: 0;
            }
            .section-title {
              font-size: 12pt;
              font-weight: bold;
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              gap: 5px;
            }
            .section-content {
              font-size: 10pt;
              white-space: pre-wrap;
              line-height: 1.8;
              min-height: 40px;
              padding: 0;
              border: none;
              font-family: inherit;
            }
            .medicines-content {
              font-family: 'Courier New', monospace;
              font-size: 10pt;
            }
            .footer {
              margin-top: 40px;
              border-top: 2px solid #000;
              padding-top: 20px;
              font-size: 10pt;
              text-align: center;
            }
            .footer-content {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }
            .footer-logo {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 14pt;
              flex-shrink: 0;
            }
            .footer-info {
              flex: 1;
              line-height: 1.8;
              text-align: center;
            }
            .footer-info bengali {
              font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;
            }
            .company-name {
              font-weight: bold;
              font-size: 12pt;
              margin-bottom: 8px;
              color: #006666;
              text-align: center;
            }
            .footer-text {
              font-size: 9pt;
              line-height: 1.6;
              margin-bottom: 5px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              flex-wrap: wrap;
            }
            .hotline {
              font-weight: bold;
              color: #006666;
              margin-top: 8px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              flex-wrap: wrap;
            }
            @media print {
              .watermark {
                display: block !important;
                opacity: 0.18 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                visibility: visible !important;
              }
              body::before {
                display: block !important;
                opacity: 0.18 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                visibility: visible !important;
              }
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              @page {
                margin: 15mm;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <!-- Professional Watermark - Clean and Visible -->
          <div class="watermark" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 100pt; font-weight: 700; color: rgba(0, 102, 102, 0.18); z-index: 0; pointer-events: none; white-space: nowrap; font-family: 'Times New Roman', serif; letter-spacing: 6px; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; opacity: 0.18 !important; display: block !important; visibility: visible !important; text-shadow: none; line-height: 1;">MediWise</div>
          <div class="container">
            <!-- Header Section -->
            <div class="header">
              <div class="header-top">
                <div class="doctor-info-left">
                  <div class="doctor-name">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDoctorName"])(doctorProfile?.user?.name || user?.name || 'Name', doctorProfile?.qualification)}</div>
                  ${doctorProfile?.qualification ? `<div class="doctor-details">${doctorProfile.qualification}</div>` : ''}
                  ${doctorProfile?.specialization ? `<div class="doctor-details">${doctorProfile.specialization}</div>` : ''}
                  ${doctorProfile?.department?.name ? `<div class="doctor-details">${doctorProfile.department.name}</div>` : ''}
                  ${Array.isArray(doctorProfile?.previousJobs) && doctorProfile.previousJobs.length > 0 ? `
                    <div class="doctor-details">${doctorProfile.previousJobs.map((job)=>typeof job === 'string' ? job : job.title || job.position || job).join(', ')}</div>
                  ` : ''}
                </div>
                <div class="logo-container">
                  <img src="/logo.png" alt="MediWise Logo" class="logo-image" onerror="this.style.display='none';" />
                </div>
              </div>
              <div style="border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                  ${(()=>{
            const fullName = patientInfo?.name || '';
            const namePart = fullName ? `Patient: ${fullName}` : '';
            const age = patientInfo?.age ? `    Age: ${patientInfo.age}` : '';
            const weight = patientInfo?.weight ? `Weight: ${patientInfo.weight}kg` : '';
            return [
                namePart,
                age,
                weight
            ].filter(Boolean).join(' ');
        })()}
                </div>
                <div class="date-time">
                  ${(()=>{
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const monthNames = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];
            const month = monthNames[date.getMonth()];
            const year = date.getFullYear();
            const dateOnly = `${day} ${month}, ${year}`;
            const timeOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'h:mm a');
            return `Date: ${dateOnly} Time: ${timeOnly}`;
        })()}
                </div>
              </div>
            </div>
            

            <!-- Two Column Layout - Same as Form -->
            <div class="two-column-layout">
              <!-- Left Column -->
              <div class="left-column">
                ${prescriptionForm.diagnosis ? `
                <div class="section">
                  <div class="section-title">Diagnosis</div>
                  <div class="section-content">${prescriptionForm.diagnosis}</div>
                </div>
                ` : ''}
                
                ${prescriptionForm.tests ? `
                <div class="section">
                  <div class="section-title">Investigation</div>
                  <div class="section-content">${prescriptionForm.tests}</div>
                </div>
                ` : ''}

                ${prescriptionForm.followUp || prescriptionForm.instructions ? `
                <div class="section">
                  <div class="section-title">Follow up</div>
                  <div class="section-content">${prescriptionForm.followUp || prescriptionForm.instructions}</div>
                </div>
                ` : ''}
              </div>

              <!-- Right Column -->
              <div class="right-column">
                ${prescriptionForm.medicines ? `
                <div class="section">
                  <div class="section-title">Medicine</div>
                  <div class="section-content medicines-content">${prescriptionForm.medicines}</div>
                </div>
                ` : ''}

                ${prescriptionForm.advice || prescriptionForm.rules ? `
                <div class="section">
                  <div class="section-title">Advice</div>
                  <div class="section-content">${prescriptionForm.advice || prescriptionForm.rules}</div>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Footer with Company Information -->
            <div class="footer">
              <div class="footer-info">
                <div class="company-name">MediWise</div>
                <div class="footer-text" style="font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;">
                  <span>চেম্বার: মেডিওয়াইজ কনসালটেশন সেন্টার</span>
                  <span>/</span>
                  <span>Chamber: MediWise Consultation Center</span>
                </div>
                <div class="hotline" style="font-family: 'Noto Sans Bengali', 'Kalpurush', 'Siyam Rupali', sans-serif;">
                  <span>সিরিয়ালের জন্য হটলাইন</span>
                  <span>/</span>
                  <span>Hotline for Serial: <strong>+8809658303665</strong></span>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(()=>{
            printWindow.print();
        }, 250);
    };
    if (authLoading || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
            lineNumber: 832,
            columnNumber: 12
        }, this);
    }
    if (!user || user.role !== 'doctor') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$DoctorSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user,
                logout: logout,
                qualification: doctorProfile?.qualification
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                lineNumber: 841,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full lg:ml-64 flex-1 p-4 sm:p-6 lg:p-8 transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2",
                                        children: "Prescriptions"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                        children: "Manage patient prescriptions"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 846,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                lineNumber: 844,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowTemplateModal(true);
                                            setEditingTemplate(null);
                                            setTemplateName('');
                                        },
                                        className: "px-4 py-2 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors font-medium flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 857,
                                                columnNumber: 15
                                            }, this),
                                            "Templates"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreateModal(true),
                                        className: "px-6 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors font-medium",
                                        children: "+ New Prescription"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 860,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                lineNumber: 848,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: prescriptions.map((prescription)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 dark:text-gray-100",
                                                    children: prescription.patient?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                    children: prescription.patient?.email
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 876,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 15
                                    }, this),
                                    prescription.diagnosis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: "Diagnosis:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 883,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: prescription.diagnosis
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 882,
                                        columnNumber: 17
                                    }, this),
                                    prescription.medicines && Array.isArray(prescription.medicines) && prescription.medicines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: "Medicines:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 list-disc list-inside",
                                                children: prescription.medicines.map((med, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: typeof med === 'string' ? med : med.name || med
                                                    }, idx, false, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 888,
                                        columnNumber: 17
                                    }, this),
                                    prescription.instructions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: "Instructions:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 899,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: prescription.instructions
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 900,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(prescription.prescriptionDate || prescription.createdAt), 'MMM dd, yyyy')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 903,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, prescription.id, true, {
                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                lineNumber: 871,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 869,
                        columnNumber: 9
                    }, this),
                    prescriptions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400 text-lg",
                            children: "No prescriptions yet"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                            lineNumber: 912,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 911,
                        columnNumber: 11
                    }, this),
                    showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto",
                        onClick: (e)=>{
                            if (e.target === e.currentTarget) {
                                setShowCreateModal(false);
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 shadow-2xl w-full max-w-[95vw] my-auto flex flex-col lg:flex-row transform transition-all animate-slideUp rounded-lg overflow-hidden",
                            style: {
                                minHeight: '70vh',
                                maxHeight: '100vh'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex w-72 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 flex-col items-center justify-center border-r-2 border-gray-200 dark:border-gray-700 shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex flex-col items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$AdsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            position: "left",
                                            departmentId: doctorProfile?.departmentId
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 930,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 929,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 928,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col overflow-hidden min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 sm:p-4 lg:p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDoctorName"])(doctorProfile?.user?.name || user?.name || 'Name', doctorProfile?.qualification)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 944,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            doctorProfile?.qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-base text-gray-800 dark:text-gray-200 font-medium mb-1",
                                                                                children: doctorProfile.qualification
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 948,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            doctorProfile?.specialization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-700 dark:text-gray-300 mb-1",
                                                                                children: doctorProfile.specialization
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 953,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            doctorProfile?.department?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                                children: doctorProfile.department.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 958,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            Array.isArray(doctorProfile?.previousJobs) && doctorProfile.previousJobs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                                children: doctorProfile.previousJobs.map((job)=>typeof job === 'string' ? job : job.title || job.position || job).join(', ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 963,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-l border-gray-300 dark:border-gray-600 pl-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDoctorNameBengali"])(doctorProfile?.user?.name || user?.name || 'নাম', doctorProfile?.qualification)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 973,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            doctorProfile?.qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-base text-gray-800 dark:text-gray-200 font-medium mb-1",
                                                                                children: doctorProfile?.qualificationBn || doctorProfile.qualification
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 978,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            doctorProfile?.specialization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-700 dark:text-gray-300 mb-1",
                                                                                children: doctorProfile?.specializationBn || doctorProfile.specialization
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 984,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            doctorProfile?.department?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                                children: doctorProfile.department.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 990,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            Array.isArray(doctorProfile?.previousJobs) && doctorProfile.previousJobs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                                children: Array.isArray(doctorProfile?.previousJobsBn) && doctorProfile.previousJobsBn.length > 0 ? doctorProfile.previousJobsBn.map((job)=>typeof job === 'string' ? job : job.title || job.position || job).join(', ') : doctorProfile.previousJobs.map((job)=>typeof job === 'string' ? job : job.title || job.position || job).join(', ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 996,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base font-semibold text-gray-800 dark:text-gray-200 mb-1",
                                                                    children: [
                                                                        "Date: ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'dd MMMM, yyyy')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base font-semibold text-gray-800 dark:text-gray-200",
                                                                    children: [
                                                                        "Time: ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'h:mm a')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t-2 border-gray-400 dark:border-gray-500 pt-3 mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 mr-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",
                                                                        children: [
                                                                            "Patient Email ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-red-500",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1027,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1026,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        value: prescriptionForm.patientEmail,
                                                                        onChange: (e)=>setPrescriptionForm({
                                                                                ...prescriptionForm,
                                                                                patientEmail: e.target.value
                                                                            }),
                                                                        required: true,
                                                                        className: "w-full max-w-sm px-3 py-1.5 border-2 border-gray-400 dark:border-gray-500 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm",
                                                                        placeholder: "patient@example.com"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1029,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 21
                                                            }, this),
                                                            patientInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base font-semibold text-gray-800 dark:text-gray-200",
                                                                        children: [
                                                                            "Patient: ",
                                                                            patientInfo.name || 'N/A'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    patientInfo.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                                        children: [
                                                                            "Age: ",
                                                                            patientInfo.age,
                                                                            " ",
                                                                            patientInfo.weight ? `years | Weight: ${patientInfo.weight}` : 'years'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1044,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1039,
                                                                columnNumber: 23
                                                            }, this),
                                                            loadingPatient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500 italic",
                                                                    children: "Loading..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1052,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 937,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-y-auto flex-1 p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800",
                                            style: {
                                                maxHeight: 'calc(85vh - 250px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleCreatePrescription,
                                                className: "space-y-4 sm:space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-5 p-3 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-800 dark:text-gray-200 mb-2",
                                                                children: "📝 Patient Problem / Notes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1064,
                                                                columnNumber: 21
                                                            }, this),
                                                            problems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 space-y-2",
                                                                children: problems.map((prob, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-semibold text-blue-600 dark:text-blue-400 shrink-0 pt-1",
                                                                                children: [
                                                                                    index + 1,
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1073,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex-1 text-xs text-gray-700 dark:text-gray-300",
                                                                                children: prob
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1076,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeProblem(index),
                                                                                className: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiXCircle"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1082,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1077,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1072,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1070,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: problem,
                                                                onChange: (e)=>setProblem(e.target.value),
                                                                onKeyDown: (e)=>{
                                                                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                                                                        e.preventDefault();
                                                                        addProblem();
                                                                    }
                                                                },
                                                                rows: 3,
                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm resize-none",
                                                                placeholder: "Describe the patient's symptoms, complaints, or medical issues here... (Ctrl+Enter to add)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1090,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center gap-2 flex-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: addProblem,
                                                                        disabled: !problem.trim(),
                                                                        className: "px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1111,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Add Problem"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: fetchAISuggestions,
                                                                        disabled: problems.length === 0 && !problem.trim() || loadingSuggestions,
                                                                        className: "px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {
                                                                                className: loadingSuggestions ? 'animate-spin' : ''
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1120,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            loadingSuggestions ? 'Generating...' : '✨ Get AI Suggestions'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1114,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    suggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSuggestions(null),
                                                                        className: "px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300",
                                                                        children: "Clear"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1124,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 21
                                                            }, this),
                                                            problems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-gray-600 dark:text-gray-400",
                                                                children: [
                                                                    problems.length,
                                                                    ' problem(s) added. Click "Get AI Suggestions" to generate suggestions for all problems.'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1063,
                                                        columnNumber: 19
                                                    }, this),
                                                    suggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-5 p-4 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-gray-800 dark:text-gray-100 text-base mb-3 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {
                                                                        className: "text-purple-600 dark:text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1144,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "AI-Powered Suggestions"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2.5 mb-3",
                                                                children: [
                                                                    suggestions.diagnosis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",
                                                                                children: "Diagnosis:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1150,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                                                                children: suggestions.diagnosis
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1151,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1149,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    suggestions.medicines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",
                                                                                children: "Medicines:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1156,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                                                                children: Array.isArray(suggestions.medicines) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "list-none space-y-1.5",
                                                                                    children: suggestions.medicines.map((medicine, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "flex items-start gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-semibold text-purple-600 dark:text-purple-400 shrink-0",
                                                                                                    children: [
                                                                                                        toRomanNumeral(index + 1),
                                                                                                        "."
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1162,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "flex-1",
                                                                                                    children: medicine
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1165,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, index, true, {
                                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                            lineNumber: 1161,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1159,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "whitespace-pre-wrap font-mono",
                                                                                    children: suggestions.medicines
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1170,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1157,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1155,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    suggestions.tests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",
                                                                                children: "Tests:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1177,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                                                                children: Array.isArray(suggestions.tests) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "list-none space-y-1.5",
                                                                                    children: suggestions.tests.map((test, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "flex items-start gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-semibold text-purple-600 dark:text-purple-400 shrink-0",
                                                                                                    children: [
                                                                                                        toRomanNumeral(index + 1),
                                                                                                        "."
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1183,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "flex-1",
                                                                                                    children: test
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1186,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, index, true, {
                                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                            lineNumber: 1182,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1180,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "whitespace-pre-wrap",
                                                                                    children: suggestions.tests
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1191,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1178,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1176,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    suggestions.rules && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",
                                                                                children: "Rules:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1198,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                                                                children: Array.isArray(suggestions.rules) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "list-none space-y-1.5",
                                                                                    children: suggestions.rules.map((rule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "flex items-start gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-semibold text-purple-600 dark:text-purple-400 shrink-0",
                                                                                                    children: [
                                                                                                        toRomanNumeral(index + 1),
                                                                                                        "."
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1204,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "flex-1",
                                                                                                    children: rule
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                                    lineNumber: 1207,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, index, true, {
                                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                            lineNumber: 1203,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1201,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "whitespace-pre-wrap",
                                                                                    children: suggestions.rules
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                    lineNumber: 1212,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1199,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1197,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    suggestions.instructions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-200 mb-1",
                                                                                children: "Instructions:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1219,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                                className: "text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed",
                                                                                children: suggestions.instructions
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1220,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1218,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1147,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3 pt-3 border-t-2 border-purple-300 dark:border-purple-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSuggestions(null),
                                                                        className: "flex-1 px-4 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1225,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            if (suggestions.diagnosis) {
                                                                                setPrescriptionForm((prev)=>({
                                                                                        ...prev,
                                                                                        diagnosis: suggestions.diagnosis
                                                                                    }));
                                                                            }
                                                                            if (suggestions.medicines) {
                                                                                const medicinesText = Array.isArray(suggestions.medicines) ? suggestions.medicines.map((med, idx)=>`${toRomanNumeral(idx + 1)}. ${med}`).join('\n') : suggestions.medicines;
                                                                                setPrescriptionForm((prev)=>({
                                                                                        ...prev,
                                                                                        medicines: medicinesText
                                                                                    }));
                                                                            }
                                                                            if (suggestions.tests) {
                                                                                const testsText = Array.isArray(suggestions.tests) ? suggestions.tests.map((test, idx)=>`${toRomanNumeral(idx + 1)}. ${test}`).join('\n') : suggestions.tests;
                                                                                setPrescriptionForm((prev)=>({
                                                                                        ...prev,
                                                                                        tests: testsText
                                                                                    }));
                                                                            }
                                                                            if (suggestions.rules) {
                                                                                const rulesText = Array.isArray(suggestions.rules) ? suggestions.rules.map((rule, idx)=>`${toRomanNumeral(idx + 1)}. ${rule}`).join('\n') : suggestions.rules;
                                                                                setPrescriptionForm((prev)=>({
                                                                                        ...prev,
                                                                                        rules: rulesText,
                                                                                        advice: rulesText
                                                                                    }));
                                                                            }
                                                                            if (suggestions.instructions) {
                                                                                setPrescriptionForm((prev)=>({
                                                                                        ...prev,
                                                                                        instructions: suggestions.instructions,
                                                                                        followUp: suggestions.instructions
                                                                                    }));
                                                                            }
                                                                            setSuggestions(null);
                                                                        },
                                                                        className: "flex-1 px-4 py-2 bg-linear-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 text-sm font-semibold shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                                className: "inline mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1263,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Approve & Fill"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1232,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1224,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-b-2 border-gray-400 dark:border-gray-500 pb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",
                                                                                children: [
                                                                                    "Diagnosis",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit2"], {
                                                                                        className: "text-sm text-gray-500 cursor-pointer hover:text-teal-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                        lineNumber: 1278,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1276,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: prescriptionForm.diagnosis,
                                                                                onChange: (e)=>setPrescriptionForm({
                                                                                        ...prescriptionForm,
                                                                                        diagnosis: e.target.value
                                                                                    }),
                                                                                rows: 3,
                                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",
                                                                                placeholder: "Enter diagnosis (one per line)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1280,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1275,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-b-2 border-gray-400 dark:border-gray-500 pb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",
                                                                                children: [
                                                                                    "Investigation",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit2"], {
                                                                                        className: "text-sm text-gray-500 cursor-pointer hover:text-teal-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                        lineNumber: 1293,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1291,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: prescriptionForm.tests,
                                                                                onChange: (e)=>setPrescriptionForm({
                                                                                        ...prescriptionForm,
                                                                                        tests: e.target.value
                                                                                    }),
                                                                                rows: 3,
                                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",
                                                                                placeholder: "Enter lab tests/investigations (one per line)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1295,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1290,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1273,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-b-2 border-gray-400 dark:border-gray-500 pb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",
                                                                                children: [
                                                                                    "Medicine",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit2"], {
                                                                                        className: "text-sm text-gray-500 cursor-pointer hover:text-teal-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                        lineNumber: 1311,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1309,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: prescriptionForm.medicines,
                                                                                onChange: (e)=>setPrescriptionForm({
                                                                                        ...prescriptionForm,
                                                                                        medicines: e.target.value
                                                                                    }),
                                                                                rows: 8,
                                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none",
                                                                                placeholder: "Medicine Name - Dosage - Frequency Example: Paracetamol - 500mg - 2 times daily"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1313,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1308,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-b-2 border-gray-400 dark:border-gray-500 pb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",
                                                                                children: [
                                                                                    "Advice",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                                                        className: "text-sm text-gray-500 cursor-pointer hover:text-teal-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                        lineNumber: 1326,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1324,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: prescriptionForm.advice || prescriptionForm.rules,
                                                                                onChange: (e)=>{
                                                                                    setPrescriptionForm({
                                                                                        ...prescriptionForm,
                                                                                        advice: e.target.value,
                                                                                        rules: e.target.value
                                                                                    });
                                                                                },
                                                                                rows: 4,
                                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",
                                                                                placeholder: "Enter advice/guidelines (one per line)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1328,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1323,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-b-2 border-gray-400 dark:border-gray-500 pb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100 mb-2",
                                                                                children: [
                                                                                    "Follow up",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                                                                        className: "text-sm text-gray-500 cursor-pointer hover:text-teal-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                        lineNumber: 1343,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1341,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: prescriptionForm.followUp || prescriptionForm.instructions,
                                                                                onChange: (e)=>{
                                                                                    setPrescriptionForm({
                                                                                        ...prescriptionForm,
                                                                                        followUp: e.target.value,
                                                                                        instructions: e.target.value
                                                                                    });
                                                                                },
                                                                                rows: 3,
                                                                                className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none font-medium",
                                                                                placeholder: "Enter follow-up instructions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                                lineNumber: 1345,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1340,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1306,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-5 border-t-2 border-gray-400 dark:border-gray-500 mt-6 sm:mt-8 shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                onClick: handleCreatePrescription,
                                                                className: "px-5 py-2.5 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 font-bold transition-colors flex items-center gap-2 text-sm shadow-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                        className: "text-base"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1365,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Save & Send"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowPreviewModal(true),
                                                                className: "px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                                        className: "text-base"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1373,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Preview"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1368,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    if (editingTemplate) {
                                                                        // If editing, keep the template name
                                                                        setTemplateName(editingTemplate.name);
                                                                    } else {
                                                                        setTemplateName('');
                                                                        setEditingTemplate(null);
                                                                    }
                                                                    setShowTemplateModal(true);
                                                                },
                                                                className: "px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors text-sm flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {
                                                                        className: "text-base"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1390,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    editingTemplate ? 'Update Template' : 'Save as Template'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1376,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handlePrint,
                                                                className: "px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPrinter"], {
                                                                        className: "text-base"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1398,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Print"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1393,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setShowCreateModal(false);
                                                                    setPrescriptionForm({
                                                                        patientEmail: '',
                                                                        diagnosis: '',
                                                                        medicines: '',
                                                                        tests: '',
                                                                        rules: '',
                                                                        instructions: '',
                                                                        advice: '',
                                                                        followUp: ''
                                                                    });
                                                                    setProblem('');
                                                                    setProblems([]);
                                                                    setSuggestions(null);
                                                                    setEditingTemplate(null);
                                                                    setTemplateName('');
                                                                },
                                                                className: "px-5 py-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 text-sm ml-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                        className: "text-base"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1414,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Cancel"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1401,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 935,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-72 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 flex flex-col items-center justify-center border-l-2 border-gray-200 dark:border-gray-700 shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex flex-col items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$components$2f$AdsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            position: "right",
                                            departmentId: doctorProfile?.departmentId
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 1424,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1423,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                            lineNumber: 926,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 918,
                        columnNumber: 11
                    }, this),
                    showPreviewModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",
                        onClick: (e)=>{
                            if (e.target === e.currentTarget) {
                                setShowPreviewModal(false);
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",
                            style: {
                                maxHeight: '90vh'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: "Prescription Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1445,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowPreviewModal(false),
                                                className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                    className: "text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1450,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 1444,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1443,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-y-auto p-6 bg-white dark:bg-gray-800",
                                    style: {
                                        maxHeight: 'calc(90vh - 100px)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prescription-preview",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b-3 border-black pb-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold text-teal-600 mb-2",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$utils$2f$doctorName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDoctorName"])(doctorProfile?.user?.name || user?.name || 'Name', doctorProfile?.qualification)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1460,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    doctorProfile?.qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-700 dark:text-gray-300 mb-1",
                                                                        children: doctorProfile.qualification
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1464,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    doctorProfile?.specialization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-700 dark:text-gray-300 mb-1",
                                                                        children: doctorProfile.specialization
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1467,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    doctorProfile?.department?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                        children: doctorProfile.department.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1470,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    Array.isArray(doctorProfile?.previousJobs) && doctorProfile.previousJobs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                                        children: doctorProfile.previousJobs.map((job)=>typeof job === 'string' ? job : job.title || job.position || job).join(', ')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1473,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1459,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-48 h-auto flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/logo.png",
                                                                    alt: "MediWise Logo",
                                                                    className: "max-w-full h-auto object-contain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1483,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1482,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1457,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t-2 border-black dark:border-gray-600 pt-3 mt-3 flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 text-sm text-black dark:text-gray-300",
                                                                children: (()=>{
                                                                    const fullName = patientInfo?.name || '';
                                                                    const namePart = fullName ? `Patient: ${fullName}` : '';
                                                                    const age = patientInfo?.age ? `    Age: ${patientInfo.age}` : '';
                                                                    const weight = patientInfo?.weight ? `Weight: ${patientInfo.weight}kg` : '';
                                                                    return [
                                                                        namePart,
                                                                        age,
                                                                        weight
                                                                    ].filter(Boolean).join(' ');
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1489,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold text-black dark:text-gray-300",
                                                                children: (()=>{
                                                                    const date = new Date();
                                                                    const day = String(date.getDate()).padStart(2, '0');
                                                                    const monthNames = [
                                                                        'Jan',
                                                                        'Feb',
                                                                        'Mar',
                                                                        'Apr',
                                                                        'May',
                                                                        'Jun',
                                                                        'Jul',
                                                                        'Aug',
                                                                        'Sep',
                                                                        'Oct',
                                                                        'Nov',
                                                                        'Dec'
                                                                    ];
                                                                    const month = monthNames[date.getMonth()];
                                                                    const year = date.getFullYear();
                                                                    const dateOnly = `${day} ${month}, ${year}`;
                                                                    const timeOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'h:mm a');
                                                                    return `Date: ${dateOnly} Time: ${timeOnly}`;
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1499,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1488,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1456,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-10 mt-4 relative",
                                                style: {
                                                    borderLeft: '3px solid #0066cc',
                                                    paddingLeft: '20px',
                                                    marginLeft: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            prescriptionForm.diagnosis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",
                                                                        children: "Diagnosis"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1520,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm whitespace-pre-wrap pl-2",
                                                                        children: prescriptionForm.diagnosis
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1521,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1519,
                                                                columnNumber: 25
                                                            }, this),
                                                            prescriptionForm.tests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",
                                                                        children: "Investigation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1526,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm whitespace-pre-wrap pl-2",
                                                                        children: prescriptionForm.tests
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1527,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1525,
                                                                columnNumber: 25
                                                            }, this),
                                                            (prescriptionForm.followUp || prescriptionForm.instructions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",
                                                                        children: "Follow Up"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1532,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm whitespace-pre-wrap pl-2",
                                                                        children: prescriptionForm.followUp || prescriptionForm.instructions
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1533,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1531,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1517,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            prescriptionForm.medicines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",
                                                                        children: "Medicine"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1542,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-mono whitespace-pre-wrap pl-2",
                                                                        children: prescriptionForm.medicines
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1543,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1541,
                                                                columnNumber: 25
                                                            }, this),
                                                            (prescriptionForm.advice || prescriptionForm.rules) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-base border-b-2 border-gray-400 dark:border-gray-500 pb-1 mb-2 uppercase",
                                                                        children: "Advice"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1548,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm whitespace-pre-wrap pl-2",
                                                                        children: prescriptionForm.advice || prescriptionForm.rules
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                        lineNumber: 1549,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                lineNumber: 1547,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                        lineNumber: 1539,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1515,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 border-t-2 border-gray-400 dark:border-gray-500 pt-4 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg text-teal-600 mb-2",
                                                            children: "MediWise"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1557,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-700 dark:text-gray-300 mb-1 flex justify-center items-center gap-1 flex-wrap",
                                                            style: {
                                                                fontFamily: 'Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "চেম্বার: মেডিওয়াইজ কনসালটেশন সেন্টার"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1559,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "/"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1560,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Chamber: MediWise Consultation Center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1561,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1558,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-teal-600 mt-2 flex justify-center items-center gap-1 flex-wrap",
                                                            style: {
                                                                fontFamily: 'Noto Sans Bengali, Kalpurush, Siyam Rupali, sans-serif'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "সিরিয়ালের জন্য হটলাইন"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1564,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "/"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1565,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Hotline for Serial: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "+8809658303665"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1566,
                                                                            columnNumber: 51
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1566,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1563,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1556,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1555,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 1455,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrint,
                                            className: "px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPrinter"], {}, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1577,
                                                    columnNumber: 19
                                                }, this),
                                                "Print"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1573,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowPreviewModal(false),
                                            className: "px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1580,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1572,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                            lineNumber: 1442,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 1434,
                        columnNumber: 11
                    }, this),
                    showTemplateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto",
                        onClick: (e)=>{
                            if (e.target === e.currentTarget) {
                                setShowTemplateModal(false);
                                setTemplateName('');
                                setEditingTemplate(null);
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl my-auto rounded-lg overflow-hidden",
                            style: {
                                maxHeight: '90vh'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: editingTemplate ? 'Edit Template' : 'Save as Template'
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1606,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowTemplateModal(false);
                                                    setTemplateName('');
                                                    setEditingTemplate(null);
                                                },
                                                className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                    className: "text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1617,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1609,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                        lineNumber: 1605,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-y-auto p-6 bg-white dark:bg-gray-800",
                                    style: {
                                        maxHeight: 'calc(90vh - 200px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                    children: [
                                                        "Template Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1624,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1623,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: templateName,
                                                    onChange: (e)=>setTemplateName(e.target.value),
                                                    className: "w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100",
                                                    placeholder: "Enter template name (e.g., Common Cold, Fever, etc.)"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1626,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1622,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-2",
                                                children: "This will save the current prescription form as a reusable template."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                lineNumber: 1635,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1634,
                                            columnNumber: 17
                                        }, this),
                                        templates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3",
                                                    children: "Your Templates"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1641,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 max-h-60 overflow-y-auto",
                                                    children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-gray-800 dark:text-gray-100",
                                                                            children: template.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1649,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(template.updatedAt), 'MMM dd, yyyy')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1650,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1648,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleLoadTemplate(template),
                                                                            className: "px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",
                                                                            children: "Load"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1655,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleEditTemplate(template),
                                                                            className: "px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600",
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1661,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteTemplate(template.id),
                                                                            className: "px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",
                                                                            children: "Delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                            lineNumber: 1667,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                                    lineNumber: 1654,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, template.id, true, {
                                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1642,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1640,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1621,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-t-2 border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-900 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowTemplateModal(false);
                                                setTemplateName('');
                                                setEditingTemplate(null);
                                            },
                                            className: "px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1681,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveTemplate,
                                            className: "px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {}, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                                    lineNumber: 1695,
                                                    columnNumber: 19
                                                }, this),
                                                editingTemplate ? 'Update Template' : 'Save Template'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                            lineNumber: 1691,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                                    lineNumber: 1680,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                            lineNumber: 1603,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                        lineNumber: 1593,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
                lineNumber: 842,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/app/doctor/prescriptions/page.tsx",
        lineNumber: 840,
        columnNumber: 5
    }, this);
}
_s(DoctorPrescriptionsPage, "/a//eSfnKDnP+Zf+g/9nmlX3ruo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DoctorPrescriptionsPage;
var _c;
__turbopack_context__.k.register(_c, "DoctorPrescriptionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_mediwise_frontend_79067014._.js.map