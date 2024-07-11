/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/home/background-home-desktop.jpg */ "./src/assets/images/home/background-home-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/logo.svg */ "./src/assets/images/icons/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-hamburger.svg */ "./src/assets/images/icons/icon-hamburger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-close.svg */ "./src/assets/images/icons/icon-close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
}
body{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh;
}
ul{
    list-style: none;
}
a{
     text-decoration: none;
}
.home-page-header{
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-top:0.5rem;
   }
   /* homepage link style */
.home-page-nav > li > button{
    border: none;
    max-width: 150px;
    padding-block: 1.5rem;
    letter-spacing: 1px;
    background-color: inherit;
    color: white;
    text-align: start;
}
.nav-border{
    width: 100px;
    height: 1px;
    position: absolute;
    left: 30%;
    bottom: 0;
    height: 2px;
    width: 50%;
    border-bottom: 2px solid rgb(255, 255, 255);
    display: none;
   }
.home-page-nav > li >button:hover ~ .nav-border{
    display: block;
}
.home-page-nav > li{
    position: relative;
    display: flex;
    align-items: center;
    
    gap: .5rem;
  
    padding-inline:clamp(1rem,2vw,1.2rem);
    animation: navSlide 1s ease-in-out;
 }
 .home-page-nav{
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
 }
 
.logo{
    width: 1rem;
    aspect-ratio: 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    padding: 2rem;

}
/* style for mobile nav */
.open-nav,.close-nav{
    display: none;
    position: absolute;
    right: 0;
    top:3%;
    width: 2rem;
    background-color: inherit;
    transform: translateX(-10%);
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-position: center;
    
}
.open-nav{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.close-nav{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.open-nav{
    display: block;
}
.hr-line{
    display: none;
    position: relative;
    left: 1rem;
    width: 40%;
    height: 2px;
    background-color: rgb(130, 130, 130);
}
.page-links{
    background-color: hsla(0, 2%, 47%, 0.2);
}
@keyframes navSlide{
    0%{
        opacity: 0.5;
        transform: translateX(20%);
    }
    100%{
        opacity: 1;
        transform: translateX(0%);
    }
}
/* links holder for mobile nav */
[data-nav-links="true"]{
    opacity: 1;
    display: flex;
    justify-content: center;
    color: white;
    border-radius: 0.2rem;
    padding-inline: 1rem;
   }
[data-nav-links="false"]{
    opacity: 0;
    display: none;
}
/* home page main */
main{
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  color: white;
  
}
.explore-btn{
  width: 180px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  border: none;
  position:absolute;
  top:3%;
  left:2.5%;
}

.big-circle{
  position: relative;
  width: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
 
}
.big-circle:hover{
  box-shadow: 0 0 3px rgb(241 210 210 / 50%);
 }
.home-page-section{
  color: white;
  padding: 1.2rem;
}
.intro-text,.intro-par{
  font-size: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.3rem;
  word-spacing: 1px;
  text-align: center;
}
.intro-title{
  padding-block: 2rem;
  font-size: 4rem;
  letter-spacing: 1px;
  text-align: center;
}
.intro-par{
  font-size: 1rem;
  text-align: justify;
}
.star{
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: brown;
}
.star-holder > :nth-child(1){
  position: absolute;
  bottom: 0;
  opacity: 0;
  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #d7dff0);
  animation:  shootingStars 20s cubic-bezier(0.36, 0.55, 0.51, 0.81);
  animation-direction: alternate;
  animation-iteration-count: infinite; 
  animation-fill-mode: forwards;

}
@keyframes shootingStars{
  0% { 
   transform: translate3d(0, 0, 0); 
  }
  10%{
    opacity: 1;
 }
 100% {
   opacity: 0;
   transform: translate3d(90vw, -90vh, 0);
  }
}
/* media query for large screen */
@media (min-width:500px) {
    .home-page-header{
         align-items: center;
    }
    .home-page-nav{
        flex-direction: row;
        align-items: center;
        margin-top: 0;
     }
    .home-page-nav > li{
        flex-direction: row;
        align-items: center;
    }
     .open-nav{
        display: none;
    }
    .hr-line{
        display: block;
    } 
    /* content main home page */
    main{
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      padding: 4rem;
      gap: 1rem;
    }
    .btn-holder{
      align-self: center;
      justify-self: end;
    }
    
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,yDAAuE;IACvE,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;KACK,qBAAqB;AAC1B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,kBAAkB;GACnB;GACA,wBAAwB;AAC3B;IACI,YAAY;IACZ,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,WAAW;IACX,UAAU;IACV,2CAA2C;IAC3C,aAAa;GACd;AACH;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;;IAEnB,UAAU;;IAEV,qCAAqC;IACrC,kCAAkC;CACrC;CACA;IACG,aAAa;IACb,sBAAsB;IACtB,kBAAkB;CACrB;;AAED;IACI,WAAW;IACX,eAAe;IACf,yDAAqD;IACrD,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;;AAEjB;AACA,yBAAyB;AACzB;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,WAAW;IACX,yBAAyB;IACzB,2BAA2B;IAC3B,eAAe;IACf,4BAA4B;IAC5B,2BAA2B;;AAE/B;AACA;IACI,yDAA+D;AACnE;AACA;EACE,yDAA2D;AAC7D;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,WAAW;IACX,oCAAoC;AACxC;AACA;IACI,uCAAuC;AAC3C;AACA;IACI;QACI,YAAY;QACZ,0BAA0B;IAC9B;IACA;QACI,UAAU;QACV,yBAAyB;IAC7B;AACJ;AACA,gCAAgC;AAChC;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;IACrB,oBAAoB;GACrB;AACH;IACI,UAAU;IACV,aAAa;AACjB;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,0BAA0B;EAC1B,qBAAqB;EACrB,YAAY;;AAEd;AACA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,MAAM;EACN,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;;AAEpB;AACA;EACE,0CAA0C;CAC3C;AACD;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,gEAAgE;EAChE,oCAAoC;EACpC,kEAAkE;EAClE,8BAA8B;EAC9B,mCAAmC;EACnC,6BAA6B;;AAE/B;AACA;EACE;GACC,+BAA+B;EAChC;EACA;IACE,UAAU;CACb;CACA;GACE,UAAU;GACV,sCAAsC;EACvC;AACF;AACA,iCAAiC;AACjC;IACI;SACK,mBAAmB;IACxB;IACA;QACI,mBAAmB;QACnB,mBAAmB;QACnB,aAAa;KAChB;IACD;QACI,mBAAmB;QACnB,mBAAmB;IACvB;KACC;QACG,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA,2BAA2B;IAC3B;MACE,8BAA8B;MAC9B,uBAAuB;MACvB,aAAa;MACb,SAAS;IACX;IACA;MACE,kBAAkB;MAClB,iBAAiB;IACnB;;AAEJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    background-image: url(./assets/images/home/background-home-desktop.jpg);\n    background-repeat: no-repeat;\n    width: 100vw;\n    min-height: 100vh;\n}\nul{\n    list-style: none;\n}\na{\n     text-decoration: none;\n}\n.home-page-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: start;\n    padding-top:0.5rem;\n   }\n   /* homepage link style */\n.home-page-nav > li > button{\n    border: none;\n    max-width: 150px;\n    padding-block: 1.5rem;\n    letter-spacing: 1px;\n    background-color: inherit;\n    color: white;\n    text-align: start;\n}\n.nav-border{\n    width: 100px;\n    height: 1px;\n    position: absolute;\n    left: 30%;\n    bottom: 0;\n    height: 2px;\n    width: 50%;\n    border-bottom: 2px solid rgb(255, 255, 255);\n    display: none;\n   }\n.home-page-nav > li >button:hover ~ .nav-border{\n    display: block;\n}\n.home-page-nav > li{\n    position: relative;\n    display: flex;\n    align-items: center;\n    \n    gap: .5rem;\n  \n    padding-inline:clamp(1rem,2vw,1.2rem);\n    animation: navSlide 1s ease-in-out;\n }\n .home-page-nav{\n    display: flex;\n    flex-direction: column;\n    margin-top: 3.5rem;\n }\n \n.logo{\n    width: 1rem;\n    aspect-ratio: 1;\n    background-image: url(./assets/images/icons/logo.svg);\n    background-repeat: no-repeat;\n    background-position: center;\n    border-radius: 50%;\n    padding: 2rem;\n\n}\n/* style for mobile nav */\n.open-nav,.close-nav{\n    display: none;\n    position: absolute;\n    right: 0;\n    top:3%;\n    width: 2rem;\n    background-color: inherit;\n    transform: translateX(-10%);\n    aspect-ratio: 1;\n    background-repeat: no-repeat;\n    background-position: center;\n    \n}\n.open-nav{\n    background-image: url(./assets/images/icons/icon-hamburger.svg);\n}\n.close-nav{\n  background-image: url(./assets/images/icons/icon-close.svg);\n}\n.open-nav{\n    display: block;\n}\n.hr-line{\n    display: none;\n    position: relative;\n    left: 1rem;\n    width: 40%;\n    height: 2px;\n    background-color: rgb(130, 130, 130);\n}\n.page-links{\n    background-color: hsla(0, 2%, 47%, 0.2);\n}\n@keyframes navSlide{\n    0%{\n        opacity: 0.5;\n        transform: translateX(20%);\n    }\n    100%{\n        opacity: 1;\n        transform: translateX(0%);\n    }\n}\n/* links holder for mobile nav */\n[data-nav-links=\"true\"]{\n    opacity: 1;\n    display: flex;\n    justify-content: center;\n    color: white;\n    border-radius: 0.2rem;\n    padding-inline: 1rem;\n   }\n[data-nav-links=\"false\"]{\n    opacity: 0;\n    display: none;\n}\n/* home page main */\nmain{\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  color: white;\n  \n}\n.explore-btn{\n  width: 180px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  margin: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border: none;\n  position:absolute;\n  top:3%;\n  left:2.5%;\n}\n\n.big-circle{\n  position: relative;\n  width: 250px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n \n}\n.big-circle:hover{\n  box-shadow: 0 0 3px rgb(241 210 210 / 50%);\n }\n.home-page-section{\n  color: white;\n  padding: 1.2rem;\n}\n.intro-text,.intro-par{\n  font-size: 1rem;\n  letter-spacing: 1.5px;\n  line-height: 1.3rem;\n  word-spacing: 1px;\n  text-align: center;\n}\n.intro-title{\n  padding-block: 2rem;\n  font-size: 4rem;\n  letter-spacing: 1px;\n  text-align: center;\n}\n.intro-par{\n  font-size: 1rem;\n  text-align: justify;\n}\n.star{\n  width: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: brown;\n}\n.star-holder > :nth-child(1){\n  position: absolute;\n  bottom: 0;\n  opacity: 0;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation:  shootingStars 20s cubic-bezier(0.36, 0.55, 0.51, 0.81);\n  animation-direction: alternate;\n  animation-iteration-count: infinite; \n  animation-fill-mode: forwards;\n\n}\n@keyframes shootingStars{\n  0% { \n   transform: translate3d(0, 0, 0); \n  }\n  10%{\n    opacity: 1;\n }\n 100% {\n   opacity: 0;\n   transform: translate3d(90vw, -90vh, 0);\n  }\n}\n/* media query for large screen */\n@media (min-width:500px) {\n    .home-page-header{\n         align-items: center;\n    }\n    .home-page-nav{\n        flex-direction: row;\n        align-items: center;\n        margin-top: 0;\n     }\n    .home-page-nav > li{\n        flex-direction: row;\n        align-items: center;\n    }\n     .open-nav{\n        display: none;\n    }\n    .hr-line{\n        display: block;\n    } \n    /* content main home page */\n    main{\n      grid-template-columns: 1fr 1fr;\n      justify-content: center;\n      padding: 4rem;\n      gap: 1rem;\n    }\n    .btn-holder{\n      align-self: center;\n      justify-self: end;\n    }\n    \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/home/background-home-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/home/background-home-desktop.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdf3864ecbfdf20e8c3b.jpg";

/***/ }),

/***/ "./src/assets/images/icons/icon-close.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/icon-close.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d47fda63cbd8b3fedbbc.svg";

/***/ }),

/***/ "./src/assets/images/icons/icon-hamburger.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/icon-hamburger.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5273efa7c50e96ef3e51.svg";

/***/ }),

/***/ "./src/assets/images/icons/logo.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/logo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "565f7f2c0534403f11b7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


__webpack_require__(/*! ./style.css */ "./src/style.css");
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const nav = document.querySelector("[data-nav-links]");
const ul = document.querySelector(".desktop-nav");
openMenu.addEventListener('click', () => {
  if (nav.getAttribute("data-nav-links") === "false") {
    nav.setAttribute("data-nav-links", "true");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
});
closeMenu.addEventListener('click', () => {
  if (nav.getAttribute("data-nav-links") === "true") {
    nav.setAttribute("data-nav-links", "false");
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
});
console.log("hey there fam");
//nav.setAttribute("data-nav-links","true");
const mobileScreen = window.matchMedia("(max-width: 500px)");
const largeScreen = window.matchMedia("(min-width:600px)");
largeScreen.addEventListener('change', () => {
  nav.setAttribute("data-nav-links", "true");
  if (largeScreen.matches === true) {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'none';
  }
});
mobileScreen.addEventListener('change', () => {
  console.log(mobileScreen);
  if (mobileScreen.matches === true) {
    openMenu.style.display = "block";
    nav.setAttribute("data-nav-links", "false");
  }
});
if (largeScreen.matches === true) {
  nav.setAttribute("data-nav-links", "true");
} else if (mobileScreen.matches === true) {
  nav.setAttribute("data-nav-links", "false");
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNktBQW1FO0FBQy9HLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMscUpBQXVEO0FBQ25HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFh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QyxVQUFVLENBQUMsbUJBQW1CLENBQUM7QUFHMURDLFdBQVcsQ0FBQ1YsZ0JBQWdCLENBQUMsUUFBUSxFQUFDLE1BQUk7RUFFdENGLEdBQUcsQ0FBQ0ksWUFBWSxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQztFQUN6QyxJQUFHUSxXQUFXLENBQUNDLE9BQU8sS0FBSSxJQUFJLEVBQUM7SUFDaENkLFNBQVMsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUMvQlYsUUFBUSxDQUFDUyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQy9CO0FBRUosQ0FBQyxDQUFDO0FBRUZHLFlBQVksQ0FBQ1AsZ0JBQWdCLENBQUMsUUFBUSxFQUFDLE1BQUk7RUFHeENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLENBQUM7RUFDekIsSUFBR0EsWUFBWSxDQUFDSSxPQUFPLEtBQUssSUFBSSxFQUFFO0lBQ2pDakIsUUFBUSxDQUFDUyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBRWhDTixHQUFHLENBQUNJLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxPQUFPLENBQUM7RUFFM0M7QUFJSCxDQUFDLENBQUM7QUFDRixJQUFHUSxXQUFXLENBQUNDLE9BQU8sS0FBSyxJQUFJLEVBQUM7RUFDNUJiLEdBQUcsQ0FBQ0ksWUFBWSxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQztBQUM3QyxDQUFDLE1BQ0ksSUFBR0ssWUFBWSxDQUFDSSxPQUFPLEtBQUssSUFBSSxFQUFDO0VBQ2xDYixHQUFHLENBQUNJLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxPQUFPLENBQUM7QUFFOUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1oYW1idXJnZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24tY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuYXtcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhvbWUtcGFnZS1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbiAgIH1cbiAgIC8qIGhvbWVwYWdlIGxpbmsgc3R5bGUgKi9cbi5ob21lLXBhZ2UtbmF2ID4gbGkgPiBidXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZy1ibG9jazogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4ubmF2LWJvcmRlcntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG4uaG9tZS1wYWdlLW5hdiA+IGxpID5idXR0b246aG92ZXIgfiAubmF2LWJvcmRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5ob21lLXBhZ2UtbmF2ID4gbGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBnYXA6IC41cmVtO1xuICBcbiAgICBwYWRkaW5nLWlubGluZTpjbGFtcCgxcmVtLDJ2dywxLjJyZW0pO1xuICAgIGFuaW1hdGlvbjogbmF2U2xpZGUgMXMgZWFzZS1pbi1vdXQ7XG4gfVxuIC5ob21lLXBhZ2UtbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gfVxuIFxuLmxvZ297XG4gICAgd2lkdGg6IDFyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMnJlbTtcblxufVxuLyogc3R5bGUgZm9yIG1vYmlsZSBuYXYgKi9cbi5vcGVuLW5hdiwuY2xvc2UtbmF2e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDozJTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgXG59XG4ub3Blbi1uYXZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuLmNsb3NlLW5hdntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuLm9wZW4tbmF2e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhyLWxpbmV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDEzMCwgMTMwKTtcbn1cbi5wYWdlLWxpbmtze1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcbn1cbkBrZXlmcmFtZXMgbmF2U2xpZGV7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuLyogbGlua3MgaG9sZGVyIGZvciBtb2JpbGUgbmF2ICovXG5bZGF0YS1uYXYtbGlua3M9XCJ0cnVlXCJde1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICAgfVxuW2RhdGEtbmF2LWxpbmtzPVwiZmFsc2VcIl17XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLyogaG9tZSBwYWdlIG1haW4gKi9cbm1haW57XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG59XG4uZXhwbG9yZS1idG57XG4gIHdpZHRoOiAxODBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MyU7XG4gIGxlZnQ6Mi41JTtcbn1cblxuLmJpZy1jaXJjbGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiBcbn1cbi5iaWctY2lyY2xlOmhvdmVye1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigyNDEgMjEwIDIxMCAvIDUwJSk7XG4gfVxuLmhvbWUtcGFnZS1zZWN0aW9ue1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuMnJlbTtcbn1cbi5pbnRyby10ZXh0LC5pbnRyby1wYXJ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICB3b3JkLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmludHJvLXRpdGxle1xuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xuICBmb250LXNpemU6IDRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnRyby1wYXJ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zdGFye1xuICB3aWR0aDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuLnN0YXItaG9sZGVyID4gOm50aC1jaGlsZCgxKXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZWYwZjUsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcbiAgYW5pbWF0aW9uOiAgc2hvb3RpbmdTdGFycyAyMHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNTUsIDAuNTEsIDAuODEpO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cbkBrZXlmcmFtZXMgc2hvb3RpbmdTdGFyc3tcbiAgMCUgeyBcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IFxuICB9XG4gIDEwJXtcbiAgICBvcGFjaXR5OiAxO1xuIH1cbiAxMDAlIHtcbiAgIG9wYWNpdHk6IDA7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwdncsIC05MHZoLCAwKTtcbiAgfVxufVxuLyogbWVkaWEgcXVlcnkgZm9yIGxhcmdlIHNjcmVlbiAqL1xuQG1lZGlhIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAuaG9tZS1wYWdlLWhlYWRlcntcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtbmF2e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICB9XG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaXtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgIC5vcGVuLW5hdntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhyLWxpbmV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH0gXG4gICAgLyogY29udGVudCBtYWluIGhvbWUgcGFnZSAqL1xuICAgIG1haW57XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICAgIC5idG4taG9sZGVye1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgfVxuICAgIFxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5REFBdUU7SUFDdkUsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0tBQ0sscUJBQXFCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixrQkFBa0I7R0FDbkI7R0FDQSx3QkFBd0I7QUFDM0I7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsYUFBYTtHQUNkO0FBQ0g7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsVUFBVTs7SUFFVixxQ0FBcUM7SUFDckMsa0NBQWtDO0NBQ3JDO0NBQ0E7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseURBQXFEO0lBQ3JELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0EseUJBQXlCO0FBQ3pCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0kseURBQStEO0FBQ25FO0FBQ0E7RUFDRSx5REFBMkQ7QUFDN0Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0EsZ0NBQWdDO0FBQ2hDO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7QUFDSDtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0EsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsMENBQTBDO0NBQzNDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdFQUFnRTtFQUNoRSxvQ0FBb0M7RUFDcEMsa0VBQWtFO0VBQ2xFLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsNkJBQTZCOztBQUUvQjtBQUNBO0VBQ0U7R0FDQywrQkFBK0I7RUFDaEM7RUFDQTtJQUNFLFVBQVU7Q0FDYjtDQUNBO0dBQ0UsVUFBVTtHQUNWLHNDQUFzQztFQUN2QztBQUNGO0FBQ0EsaUNBQWlDO0FBQ2pDO0lBQ0k7U0FDSyxtQkFBbUI7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsYUFBYTtLQUNoQjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtLQUNDO1FBQ0csYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBLDJCQUEyQjtJQUMzQjtNQUNFLDhCQUE4QjtNQUM5Qix1QkFBdUI7TUFDdkIsYUFBYTtNQUNiLFNBQVM7SUFDWDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG51bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYXtcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhvbWUtcGFnZS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDowLjVyZW07XFxuICAgfVxcbiAgIC8qIGhvbWVwYWdlIGxpbmsgc3R5bGUgKi9cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLm5hdi1ib3JkZXJ7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgIH1cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID5idXR0b246aG92ZXIgfiAubmF2LWJvcmRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdhcDogLjVyZW07XFxuICBcXG4gICAgcGFkZGluZy1pbmxpbmU6Y2xhbXAoMXJlbSwydncsMS4ycmVtKTtcXG4gICAgYW5pbWF0aW9uOiBuYXZTbGlkZSAxcyBlYXNlLWluLW91dDtcXG4gfVxcbiAuaG9tZS1wYWdlLW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiB9XFxuIFxcbi5sb2dve1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxufVxcbi8qIHN0eWxlIGZvciBtb2JpbGUgbmF2ICovXFxuLm9wZW4tbmF2LC5jbG9zZS1uYXZ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDozJTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4ub3Blbi1uYXZ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1oYW1idXJnZXIuc3ZnKTtcXG59XFxuLmNsb3NlLW5hdntcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmcpO1xcbn1cXG4ub3Blbi1uYXZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaHItbGluZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xcbn1cXG4ucGFnZS1saW5rc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAyJSwgNDclLCAwLjIpO1xcbn1cXG5Aa2V5ZnJhbWVzIG5hdlNsaWRle1xcbiAgICAwJXtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG4vKiBsaW5rcyBob2xkZXIgZm9yIG1vYmlsZSBuYXYgKi9cXG5bZGF0YS1uYXYtbGlua3M9XFxcInRydWVcXFwiXXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICB9XFxuW2RhdGEtbmF2LWxpbmtzPVxcXCJmYWxzZVxcXCJde1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBob21lIHBhZ2UgbWFpbiAqL1xcbm1haW57XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBcXG59XFxuLmV4cGxvcmUtYnRue1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAxLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjMlO1xcbiAgbGVmdDoyLjUlO1xcbn1cXG5cXG4uYmlnLWNpcmNsZXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gXFxufVxcbi5iaWctY2lyY2xlOmhvdmVye1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMjQxIDIxMCAyMTAgLyA1MCUpO1xcbiB9XFxuLmhvbWUtcGFnZS1zZWN0aW9ue1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbn1cXG4uaW50cm8tdGV4dCwuaW50cm8tcGFye1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW50cm8tdGl0bGV7XFxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmludHJvLXBhcntcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5zdGFye1xcbiAgd2lkdGg6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuLnN0YXItaG9sZGVyID4gOm50aC1jaGlsZCgxKXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWVmMGY1LCByZ2JhKDAsIDAsIDI1NSwgMCkpO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xcbiAgYW5pbWF0aW9uOiAgc2hvb3RpbmdTdGFycyAyMHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNTUsIDAuNTEsIDAuODEpO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxufVxcbkBrZXlmcmFtZXMgc2hvb3RpbmdTdGFyc3tcXG4gIDAlIHsgXFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgXFxuICB9XFxuICAxMCV7XFxuICAgIG9wYWNpdHk6IDE7XFxuIH1cXG4gMTAwJSB7XFxuICAgb3BhY2l0eTogMDtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwdncsIC05MHZoLCAwKTtcXG4gIH1cXG59XFxuLyogbWVkaWEgcXVlcnkgZm9yIGxhcmdlIHNjcmVlbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOjUwMHB4KSB7XFxuICAgIC5ob21lLXBhZ2UtaGVhZGVye1xcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmhvbWUtcGFnZS1uYXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgLm9wZW4tbmF2e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaHItbGluZXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9IFxcbiAgICAvKiBjb250ZW50IG1haW4gaG9tZSBwYWdlICovXFxuICAgIG1haW57XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDRyZW07XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICAgIC5idG4taG9sZGVye1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtb3Blbi1tZW51XVwiKTtcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tZW51XVwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtbGlua3NdXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2t0b3AtbmF2XCIpO1xuXG5cblxuXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihuYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIikgPT09IFwiZmFsc2VcIil7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwidHJ1ZVwiKTtcbiAgICAgICBcbiAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgIH1cblxufSk7XG5jbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYobmF2LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIpID09PSBcInRydWVcIil7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwiZmFsc2VcIik7XG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbn0pO1xuY29uc29sZS5sb2coXCJoZXkgdGhlcmUgZmFtXCIpO1xuLy9uYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG5jb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbmNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjYwMHB4KVwiKTtcblxuXG5sYXJnZVNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCgpPT57XG4gIFxuICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwidHJ1ZVwiKTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PXRydWUpe1xuICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbn0pO1xuXG5tb2JpbGVTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoKT0+e1xuXG5cbiAgIGNvbnNvbGUubG9nKG1vYmlsZVNjcmVlbik7XG4gICBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSApe1xuICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgXG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgIFxuICAgfVxuICAgXG4gICBcbiAgICBcbn0pO1xuaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJ0cnVlXCIpO1xufVxuZWxzZSBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcblxufVxuXG5cblxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJvcGVuTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlTWVudSIsIm5hdiIsInVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJtb2JpbGVTY3JlZW4iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibGFyZ2VTY3JlZW4iLCJtYXRjaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==