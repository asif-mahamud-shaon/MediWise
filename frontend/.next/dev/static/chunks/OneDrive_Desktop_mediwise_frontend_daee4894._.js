(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mediwise$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/mediwise/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_mediwise_frontend_daee4894._.js.map