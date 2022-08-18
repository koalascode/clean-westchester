(() => {
var exports = {};
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 2967:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ArticleTemplate_container__amghF",
	"allarticle": "ArticleTemplate_allarticle__WxSQG",
	"title": "ArticleTemplate_title__UuSKD",
	"writer": "ArticleTemplate_writer__IJHQD",
	"writeravater": "ArticleTemplate_writeravater__havnw",
	"publisheddate": "ArticleTemplate_publisheddate__bayTw",
	"quote": "ArticleTemplate_quote__p3zbF",
	"articlemain": "ArticleTemplate_articlemain__pc6xv",
	"imagediv": "ArticleTemplate_imagediv__i9hYY",
	"articleimage": "ArticleTemplate_articleimage__zuEna",
	"returnhomebutton": "ArticleTemplate_returnhomebutton__LRbYa",
	"paragraph": "ArticleTemplate_paragraph__Q6iHY"
};


/***/ }),

/***/ 9785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "default": () => (/* binding */ Article),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2967);
/* harmony import */ var _styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







function Article({ allprops , pageprops  }) {
    console.log(allprops);
    const items = pageprops.results.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                x.type === "heading_1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().h1),
                    children: x.heading_1?.rich_text[0]?.plain_text
                }) : null,
                x.type === "heading_2" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().h2),
                    children: x.heading_2?.rich_text[0]?.plain_text
                }) : null,
                x.type === "heading_3" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3),
                    children: x.heading_3?.rich_text[0]?.plain_text
                }) : null,
                x.type === "paragraph" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().paragraph),
                    children: x.paragraph?.rich_text[0]?.plain_text
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: x.type === "bulleted_list_item" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: x?.bulleted_list_item?.rich_text[0]?.plain_text
                    }) : null
                }),
                x.type === "to_do" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: x?.to_do?.rich_text[0].plain_text
                        })
                    ]
                }) : null,
                x.type === "quote" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().quote),
                    children: [
                        '"',
                        x?.quote?.rich_text[0]?.plain_text,
                        '"'
                    ]
                }) : null,
                x.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().imagediv),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().articleimage),
                        src: `${x.image?.external?.url}`,
                        width: 600,
                        height: 400,
                        layout: "raw"
                    })
                }) : null,
                x.type === "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().articlevideo),
                    src: `${x?.video?.external?.url}`,
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true
                }) : null
            ]
        }, `${x?.id}`));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: allprops.properties.Name.title[0].plain_text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/blogicon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/articles",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().returnhomebutton),
                    children: "⬅️ Blog Home"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().allarticle),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: allprops.properties.Name.title[0].plain_text
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().headerinfo),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().writer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().writeravater),
                                        src: allprops.properties.CreatedByPfp.rich_text[0].plain_text,
                                        width: 60,
                                        height: 60
                                    }),
                                    allprops.properties.CreatedBy.people.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: x.name
                                        }))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().publisheddate),
                                children: allprops.properties.DatePublished.date.start
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_ArticleTemplate_module_css__WEBPACK_IMPORTED_MODULE_6___default().articlemain),
                        children: items
                    })
                ]
            })
        ]
    });
};
function Route() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const query = router.query;
    //console.log(query)
    return {
        query
    };
}
async function getServerSideProps({ query  }) {
    const { Client  } = __webpack_require__(891);
    const notion = new Client({
        auth: process.env.NOTION_KEY
    });
    const pageId = query.page;
    const res = await notion.pages.retrieve({
        page_id: pageId
    });
    const response = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 50
    });
    return {
        props: {
            allprops: res,
            pageprops: response
        }
    };
}


/***/ }),

/***/ 891:
/***/ ((module) => {

"use strict";
module.exports = require("@notionhq/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,608], () => (__webpack_exec__(9785)));
module.exports = __webpack_exports__;

})();