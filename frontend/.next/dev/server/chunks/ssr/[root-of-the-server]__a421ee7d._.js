module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/mediwise/frontend/context/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
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
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
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
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultLanguageContext);
const LanguageProvider = ({ children })=>{
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Update document lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial lang attribute
        if (typeof document !== 'undefined' && language) {
            document.documentElement.lang = language;
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    // Always return context - it has safe defaults if provider not mounted
    return context;
};
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultLanguageContext);
const LanguageProvider = ({ children })=>{
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Update document lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial lang attribute
        if (typeof document !== 'undefined' && language) {
            document.documentElement.lang = language;
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mediwise/frontend/context/LanguageContext.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    // Always return context - it has safe defaults if provider not mounted
    return context;
};
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a421ee7d._.js.map