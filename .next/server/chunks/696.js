exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 4703:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "FooterLight_container__NxJwj",
	"footerflexbot": "FooterLight_footerflexbot__E1bSQ",
	"foothead": "FooterLight_foothead__pDblP",
	"footmain": "FooterLight_footmain__U2_Rt",
	"builtwithlovefooter": "FooterLight_builtwithlovefooter__vmHEU",
	"sitescontainer": "FooterLight_sitescontainer__GcFzN",
	"linksheader": "FooterLight_linksheader__coMtn",
	"links": "FooterLight_links__wlytJ",
	"contactusheader": "FooterLight_contactusheader__tBwxV",
	"standardform": "FooterLight_standardform__6MNRr",
	"bigformtextarea": "FooterLight_bigformtextarea__2YP0N",
	"submitbutton": "FooterLight_submitbutton__Aq_oE",
	"thanks": "FooterLight_thanks__rVha3",
	"modalclosingbutton": "FooterLight_modalclosingbutton__DhP_l"
};


/***/ }),

/***/ 3165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4703);
/* harmony import */ var _styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);





function Footer() {
    const handleContact = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const topic = e.target.textareamessage.value;
        let templateParams = {
            to_name: 'Clean Westchester',
            from_name: `${name}`,
            from_email: `${email}`,
            message_html: `${topic}`
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_3___default().send('service_w1vc585', 'template_hco3bnq', templateParams, 'DLR9gjPJNQpeu41ES').then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            console.log("test");
        }, function(error) {
            console.log('FAILED...', error);
        });
        e.target.email.style.display = "none";
        e.target.name.style.display = "none";
        e.target.textareamessage.style.display = "none";
        e.target.submit.style.display = "none";
        document.getElementById("contactus").style.display = "none";
        document.getElementById("thanks").showModal();
    };
    const closeModal = ()=>{
        document.getElementById("thanks").close();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().footerflexbot),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    classname: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().footsectionone),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().foothead),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                children: "Clean Westchester"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().footmain),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                children: "Clean Westchester is a student founded and run organization that focuses on making Westchester a cleaner place for everyone. We are always looking for opportunities to expand and to teach in classes, so please reach out!"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().builtwithlovefooter),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("center", {
                                children: [
                                    "Built with ❤️ by Aaron Anidjar",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " Aaron Anidjar | Rick Yang "
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().sitescontainer),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/koalascode",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().siteslink),
                                        src: "/githublogo.png",
                                        width: 30,
                                        height: 30,
                                        alt: "github logo"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://www.youtube.com/channel/UCWXDVtw6EhVyX-2zL0KmtKw",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().siteslink),
                                        src: "/ytlogo.png",
                                        width: 30,
                                        height: 30,
                                        alt: "youtube logo"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "mailto:cleanwestchester@gmail.com",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().siteslink),
                                        src: "/gmaillogo.png",
                                        width: 50,
                                        height: 30,
                                        alt: "gmail logo"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().linksheader),
                            children: "Links"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/articles",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
                                children: "Articles"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/aboutus",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
                                children: "About Us"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/contactus",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/wallofheroes",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),
                                children: "Wall of Heroes"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactusheader),
                            id: "contactus",
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleContact,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    placeholder: "Email Address...",
                                    id: "email",
                                    required: true,
                                    className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().standardform)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: "Name...",
                                    id: "name",
                                    required: true,
                                    className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().standardform)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    placeholder: "Enter your comment, query, or concern...",
                                    id: "textareamessage",
                                    cols: "36",
                                    rows: "5",
                                    required: true,
                                    className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigformtextarea)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "submit",
                                    value: "Submit",
                                    id: "submit",
                                    className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitbutton)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dialog", {
                            className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().thanks),
                            id: "thanks",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: closeModal,
                                    id: "modalclosingbutton",
                                    className: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalclosingbutton),
                                    children: "x"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    classname: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalhead),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Thanks for Sending Us a Message"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    classname: (_styles_FooterLight_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalmain),
                                    children: "We'll Get Back to You As Soon as Possibe!"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ })

};
;