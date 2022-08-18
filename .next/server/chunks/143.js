exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 704:
/***/ ((module) => {

// Exports
module.exports = {
	"mainlinkscontainer": "MinimalLightModeNav_mainlinkscontainer__xX1iR",
	"sitelinks": "MinimalLightModeNav_sitelinks__XnmnN",
	"hamburgerbutton": "MinimalLightModeNav_hamburgerbutton__v8BCm",
	"bar": "MinimalLightModeNav_bar__EvCH8",
	"scalehamburger": "MinimalLightModeNav_scalehamburger__sk1RN",
	"hamburgercontained": "MinimalLightModeNav_hamburgercontained__4NpMp",
	"FadeIn": "MinimalLightModeNav_FadeIn___o13_",
	"menubtn": "MinimalLightModeNav_menubtn__BI36T",
	"menubtnburger": "MinimalLightModeNav_menubtnburger__TksR7",
	"navpop": "MinimalLightModeNav_navpop__DdRE9",
	"bigpagelink": "MinimalLightModeNav_bigpagelink__D12iI"
};


/***/ }),

/***/ 3143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MinLightNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(704);
/* harmony import */ var _styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3__);





function MinLightNav() {
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: menuStatus , 1: setMenuStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const toggleMenu = ()=>{
        menuStatus === undefined ? setMenuStatus("open") : null;
        menuStatus === "open" ? setMenuStatus("closed") : null;
        menuStatus === "closed" ? setMenuStatus("open") : null;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const menuBtn = document.getElementById("menubtn");
        menuStatus === "open" ? menuBtn.classList.add("open") : null;
        menuStatus !== "open" ? menuBtn.classList.remove("open") : null;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (menuStatus === "open") {
            count === undefined ? setCount("on") : null;
            count === "off" ? setCount("on") : null;
        }
        if (menuStatus === "closed") {
            count === "on" ? setCount("off") : null;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainheader),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgercontained),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().menubtn),
                    id: "menubtn",
                    onClick: toggleMenu,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().menubtnburger)
                    })
                })
            }),
            count === "on" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainlinkscontainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sitelinks),
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/aboutus",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sitelinks),
                            children: "About Us"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/articles",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sitelinks),
                            children: "Articles"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/contactus",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sitelinks),
                            children: " Contact Us"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/wallofheroes",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_MinimalLightModeNav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sitelinks),
                            children: "Wall of Heroes"
                        })
                    })
                ]
            }) : null
        ]
    });
};


/***/ })

};
;