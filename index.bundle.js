/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-component.js":
/*!******************************!*\
  !*** ./src/dom-component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.chooseBgImage = chooseBgImage;
exports.chooseTechnoImage = chooseTechnoImage;
exports.destinationPlanet = destinationPlanet;
exports.fourthPage = fourthPage;
exports.homePageSection = homePageSection;
exports.navBtnFocus = navBtnFocus;
exports.personImage = personImage;
exports.personInfo = personInfo;
exports.planetImage = planetImage;
exports.secondPage = secondPage;
exports.sliderBtnFocus = sliderBtnFocus;
exports.tabFocus = tabFocus;
exports.technoInfo = technoInfo;
exports.thirdPage = thirdPage;
var _data = _interopRequireDefault(__webpack_require__(/*! ./data.json */ "./src/data.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function importAll(r) {
  return r.keys().map(r);
}
const body = document.body;
//const Homeimages = importAll(require.context('./assets/images/home', true, /\.(png|jpe?g|svg)$/));

//document.addEventListener('DOMContentLoaded', () => {
//body.style.backgroundImage = `url("${images[0].default}")`;
//});
//body.style.backgroundImage = `url("${crew}")`;

// Usage:

//function to draw homepage content
function homePageSection(ele) {
  const template = ` 
  <section class="home-page-section">
    <div class="intro-text">SO YOU WANT TO TRAVEL TO</div>
    <h1 class="intro-title">SPACE</h1>
    <p class="intro-par">Let's face it;if you want to go to space,you might as well
      genuinely go to outer space and not hover kind of on the
      edge of it.Well sit back, and relax because we will give you
      a truly out of this world experience.
    </p>
    <div class="star-holder">
     <div class="star"></div>
    </div>
   </section>
    <div class="btn-holder">
    <div class="big-circle">
      <button  aria-label="explore" class="explore-btn" data-explore-btn >EXPLORE</button>
    </div>
    </div>
`;
  ele.textContent = '';
  ele.innerHTML = template;
}
//function choose planet image
function planetImage(ele, number) {
  const mobileScreen = window.matchMedia("(max-width: 500px)");
  const largeScreen = window.matchMedia("(min-width:501px)");
  //webp for small screen and png for large screen
  //image stored in this order europa,mars,moon,titan 
  const planetImagesTab = importAll(__webpack_require__("./src/assets/images/destination sync \\.(webp)$"));
  const planetLargeImage = importAll(__webpack_require__("./src/assets/images/destination sync \\.(png)$"));
  if (mobileScreen.matches === true) {
    ele.style.backgroundImage = `url("${planetImagesTab[number].default}")`;
  } else if (largeScreen.matches === true) {
    ele.style.backgroundImage = `url("${planetLargeImage[number].default}")`;
  }
}
//function destination page (second page)
function secondPage(ele) {
  const template = `
  <section class="planet-info-holder">
   <section class="current-page-info">
    <div class="current-page">
     <span class="link-number" aria-hidden="true">01</span>
     <div class="link-name">PICK YOUR DESTINATION</div>
    </div>
   </section>
   <div class="planet-image">
    <div class="planet"></div>
   </div>
  </section>
  <section class="planet-nav-holder">
  <nav class="planets-btn-holder">
    <button class="planet-name-nav" data-nav="0">MOON</button>
    <button class="planet-name-nav" data-nav="1">MARS</button>
    <button class="planet-name-nav" data-nav="2">EUROPA</button>
    <button class="planet-name-nav" data-nav="3">TITAN</button>
   </nav>
  <article class="about-planet" aria-live="polite"></article>

</section>
 `;
  ele.textContent = "";
  ele.innerHTML = template;
}
function destinationPlanet(ele, number) {
  const template = ` 
  <h1 class="planet-name">${_data.default.destinations[number].name}</h1>
  <p class="planet-par">${_data.default.destinations[number].description}</p>
  <hr>
  <div class="planet-info">
    <div class="distance-info">
      <div>AVG DISTANCE</div>
      <div class="planet-distance">${_data.default.destinations[number].distance}</div>
    </div>
    <div class="travel-info">
      <div>EST. TRAVEL TIME</div>
      <div class="travel-time">${_data.default.destinations[number].travel}</div>
    </div>
  </div>
  `;
  ele.textContent = '';
  ele.innerHTML = template;
}
function thirdPage(ele) {
  const template = ` 
 
  <section class="crew-info-holder">
     <section class="current-page-info">
      <div class="current-page">
       <span class="link-number" aria-hidden="true">02</span>
       <div class="link-name">MEET YOUR CREW</div>
      </div>
      <section class="crew-image-holder">
      <div class="crew-image" data-crew-image></div>
   </section>

     </section>
     <div class="person-info"  aria-live="polite">
       <article class="person-detail-info" data-crew-bio></article>
       <div class="slider-btn-holder" data-slider-btn>
        <button aria-label="crew-member" class="slider-btn"  data-crew="0" ></button>
        <button aria-label="crew-member" class="slider-btn"  data-crew="1" ></button>
        <button aria-label="crew-member" class="slider-btn"  data-crew="2" ></button>
        <button aria-label="crew-member" class="slider-btn"  data-crew="3"></button>
      </div>
     </div>

   </section>`;
  ele.innerHTML = template;
}
//function to get info about the person
function personInfo(ele, number) {
  const bioTemplate = `
    <div class="person-job">${_data.default.crew[number].role}</div>
    <h1 class="crew-name">${_data.default.crew[number].name}</h1>
    <p class="crew-bio" data-crew-info>${_data.default.crew[number].bio}</p>
  `;
  ele.innerHTML = bioTemplate;
}
//image order to match json data about person info
const personImageOrder = [1, 2, 3, 0];
function personImage(ele, number) {
  const mobileScreen = window.matchMedia("(max-width: 500px)");
  const largeScreen = window.matchMedia("(min-width:501px)");
  const tabImages = importAll(__webpack_require__("./src/assets/images/crew sync recursive \\.(webp)$"));
  const largeImages = importAll(__webpack_require__("./src/assets/images/crew sync recursive \\.(png)$"));
  //convert num to match json data
  number = personImageOrder[number];
  console.log(largeImages);
  if (mobileScreen.matches === true) {
    ele.style.backgroundImage = `url("${tabImages[number].default}")`;
  }
  if (largeScreen.matches === true) {
    ele.style.backgroundImage = `url("${largeImages[number].default}")`;
  }
}
//function to draw fourth page
function fourthPage(ele) {
  const template = `  
    <section class="techno-page">
    <section class="current-page-info">
    <div class="current-page">
      <span class="link-number" aria-hidden="true">02</span>
      <div class="link-name">SPACE LAUNCH 101</div>
    </div>
    <div class="techno-image-holder" data-techno-holder>
    <div class="techno-image" data-techno-image></div>
  </div>
    </section>
    <section class="technology-info-holder">
     <nav class="techno-btn-holder" data-techno-btns>
        <button  aria-label="technology-used" class="techno-btn" data-technology="0">1</button>
        <button  aria-label="technology-used" class="techno-btn" data-technology="1">2</button>
        <button  aria-label="technology-used" class="techno-btn" data-technology="2">3</button>
      </nav>
     <div class="title">THE TECHNOLOGY...</div>
      <article class="techno-par"  aria-live="polite" data-techno-info ></article>
    </section>
    </section
  `;
  ele.textContent = '';
  ele.innerHTML = template;
}
//function to pick image for technology page based on screen
//order to mach json and image order,0 rep launch,1 rep spaceport, 2 rep space capsule
const imageOrder = [0, 2, 1];
function chooseTechnoImage(ele, number) {
  const largeScreen = window.matchMedia("(min-width:900px)");
  const largeImages = importAll(__webpack_require__("./src/assets/images/technology/portrait-bg sync \\.(jpg)$"));
  const tabImages = importAll(__webpack_require__("./src/assets/images/technology/landscape-bg sync \\.(jpg)$"));
  number = imageOrder[number];
  if (largeScreen.matches === true) {
    ele.style.backgroundImage = `url("${largeImages[number].default}")`;
  } else if (largeScreen.matches === false) {
    ele.style.backgroundImage = `url("${tabImages[number].default}")`;
  }
}
//function to update paragraph about the technology used
function technoInfo(ele, number) {
  const template = ` 
    <h1 class="techno-name">${_data.default.technology[number].name}</h1>
    <p class="techno-info">${_data.default.technology[number].description}</p>
    `;
  ele.textContent = '';
  ele.innerHTML = template;
}

//function to pick background image based on the screen size and page name (navigation used as page name)
function chooseBgImage(ele, number) {
  const largeScreen = window.matchMedia("(min-width:900px)");
  const tabScreen = window.matchMedia("(min-width:500px)");
  const mobileScreen = window.matchMedia("(max-width:500px)");
  pickBg(number);

  //function to pick background image based on screen size
  function pickBg(number) {
    const homeImages = importAll(__webpack_require__("./src/assets/images/home sync \\.(png%7Cjpe?g%7Csvg)$"));
    const destinationImages = importAll(__webpack_require__("./src/assets/images/destination-bg sync \\.(png%7Cjpe?g%7Csvg)$"));
    const crewImages = importAll(__webpack_require__("./src/assets/images/crew-bg sync \\.(png%7Cjpe?g%7Csvg)$"));
    const technoImages = importAll(__webpack_require__("./src/assets/images/techno-bg sync \\.(png%7Cjpe?g%7Csvg)$"));
    const imagesTab = [homeImages, destinationImages, crewImages, technoImages];
    //images stored in desktop, mobile, tab(0,1,2) order
    if (mobileScreen.matches === true) {
      ele.style.backgroundImage = `url("${imagesTab[number][1].default}")`;
    } else if (largeScreen.matches === true) {
      ele.style.backgroundImage = `url("${imagesTab[number][0].default}")`;
    } else if (tabScreen.matches === true) {
      ele.style.backgroundImage = `url("${imagesTab[number][2].default}")`;
    }
  }
}
//function to add focus style for nav
function navBtnFocus(number) {
  const ul = document.querySelector('.home-page-nav');
  const tabScreen = window.matchMedia("(min-width:500px)");
  const allNav = [...ul.children];
  allNav.forEach(nav => {
    if (allNav.indexOf(nav) !== number) {
      nav.classList.remove('nav-mobile-focus');
      nav.classList.remove('nav-tab-focus');
    } else if (tabScreen.matches === true) {
      nav.classList.add('nav-tab-focus');
    } else if (tabScreen.matches === false) {
      nav.classList.add('nav-mobile-focus');
    }
  });
}
//function to add style for slider buttons page three
function sliderBtnFocus(number) {
  const sliderBtn = document.querySelectorAll('.slider-btn');
  const btnArray = [...sliderBtn];
  btnArray[number].focus();
  btnArray.forEach(slider => {
    if (btnArray.indexOf(slider) !== number) {
      slider.classList.remove("slider-btn-clicked");
    } else {
      slider.classList.add("slider-btn-clicked");
    }
  });
}
//function to add focus style for page four buttons
function tabFocus(number) {
  const btns = document.querySelectorAll(".techno-btn");
  const btnArray = [...btns];
  btnArray[number].focus();
  btnArray.forEach(btn => {
    if (btnArray.indexOf(btn) !== number) {
      btn.classList.remove("techno-btn-clicked");
    } else {
      btn.classList.add("techno-btn-clicked");
    }
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktop.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktop.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (min-width:900px) {
    .home-page-section{
      width: 50%;
      grid-area: left;
      justify-self: start;
      padding-left: 3rem;
      padding-top: 5rem;
    }
    .btn-holder{
      grid-area: right;
    }
    .big-circle{
     right: 70%;
    }
    .home-page-header{
      padding: 1rem;
      align-items: center;
    }
    .intro-title{
      font-size: 5rem;
    }
    .home-page-nav{
      margin-left: 0;
      padding-inline: clamp(0.3rem,1vw,0.5rem);
      gap: 1rem;
    }
    .home-page-nav > li{
      padding: 0;
      flex-direction: row;
      align-items: center;
      gap:0.5rem;
      padding-inline: clamp(1rem,1vw,1.5rem);
     }
    .home-page-nav > li > span{
      display: block;
     }
    .open-nav{
      display: none;
    }
    .hr-line{
      display: block;
      z-index: 20;
    } 
    /* content main home page */
    main{
      display: grid;
      grid-template-areas:"left right";
      align-content: center;
    }
    .btn-holder{
      grid-area: right;
      align-self: end;
      justify-self: left;
    }
    /* destination or second page */
    .planet-info-holder{
      grid-area: left;
      display: flex;
      flex-direction: column;
      gap:2rem;
    }
    .planet-nav-holder{
      grid-area: right;
      padding-top: 2rem;
    }
    .planet-image{
      flex-grow: 1.5;
      height: 45vh;
    }
    .planet-info{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
    /* third page */
    /* third and fourth image holder same style */
    .crew-image-holder,.techno-image-holder{
      grid-area: right;
      width: 0;
      height: 0; 
    }
    .crew-image{
      position: absolute;
      height: 80%;
      width: 40%;
      right: 0;
      bottom: -5%;
      z-index: -10;
    }
    .techno-image {
      position: absolute;
      height: 70%;
      right: 1%;
      width: 40%;
      bottom: 10%;
      z-index: -10;
    }
    .crew-info-holder{
      grid-area: left;
      justify-self: start;
      width: 50%;
      padding-left: 2rem;
     }
    .person-info{
      padding: 0;
    }
    .person-detail-info{
      grid-area: top;
      text-align: start;
      height: 300px;
      align-content: end;
    }
    .slider-btn-holder{
      grid-area: bottom;
      justify-self: start;
      margin-top: 1.5rem;
    }
    /* fourth page style */
    .current-page{
      justify-content: start;
      padding: 1.5rem;
      gap: 1.5rem;
    }
    .techno-page{
        padding: 1.5rem;
    }
      .techno-image{
      grid-area: right;
    }
    .technology-info-holder{
      width: 60%;
      padding-top: 2rem;
      display: grid;
      grid-template-areas: "nav title" 
                            "nav  article";
    }
    .techno-btn-holder{
      grid-area: nav;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-right: 1rem;
      align-self: start;
      margin-top: 1rem;
    }
    .title{
      grid-area: title;
      text-align: start;
      padding:0.5rem ;
    }
    .techno-par{
      grid-area: article;
      text-align: start;
      }
    .techno-info{
      width: 90%;
      letter-spacing: 2px;
      line-height:1.5rem;
      height: 300px;
    }
}`, "",{"version":3,"sources":["webpack://./src/desktop.css"],"names":[],"mappings":"AAAA;IACI;MACE,UAAU;MACV,eAAe;MACf,mBAAmB;MACnB,kBAAkB;MAClB,iBAAiB;IACnB;IACA;MACE,gBAAgB;IAClB;IACA;KACC,UAAU;IACX;IACA;MACE,aAAa;MACb,mBAAmB;IACrB;IACA;MACE,eAAe;IACjB;IACA;MACE,cAAc;MACd,wCAAwC;MACxC,SAAS;IACX;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,mBAAmB;MACnB,UAAU;MACV,sCAAsC;KACvC;IACD;MACE,cAAc;KACf;IACD;MACE,aAAa;IACf;IACA;MACE,cAAc;MACd,WAAW;IACb;IACA,2BAA2B;IAC3B;MACE,aAAa;MACb,gCAAgC;MAChC,qBAAqB;IACvB;IACA;MACE,gBAAgB;MAChB,eAAe;MACf,kBAAkB;IACpB;IACA,+BAA+B;IAC/B;MACE,eAAe;MACf,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;MACE,gBAAgB;MAChB,iBAAiB;IACnB;IACA;MACE,cAAc;MACd,YAAY;IACd;IACA;MACE,aAAa;MACb,8BAA8B;MAC9B,eAAe;IACjB;;IAEA,eAAe;IACf,6CAA6C;IAC7C;MACE,gBAAgB;MAChB,QAAQ;MACR,SAAS;IACX;IACA;MACE,kBAAkB;MAClB,WAAW;MACX,UAAU;MACV,QAAQ;MACR,WAAW;MACX,YAAY;IACd;IACA;MACE,kBAAkB;MAClB,WAAW;MACX,SAAS;MACT,UAAU;MACV,WAAW;MACX,YAAY;IACd;IACA;MACE,eAAe;MACf,mBAAmB;MACnB,UAAU;MACV,kBAAkB;KACnB;IACD;MACE,UAAU;IACZ;IACA;MACE,cAAc;MACd,iBAAiB;MACjB,aAAa;MACb,kBAAkB;IACpB;IACA;MACE,iBAAiB;MACjB,mBAAmB;MACnB,kBAAkB;IACpB;IACA,sBAAsB;IACtB;MACE,sBAAsB;MACtB,eAAe;MACf,WAAW;IACb;IACA;QACI,eAAe;IACnB;MACE;MACA,gBAAgB;IAClB;IACA;MACE,UAAU;MACV,iBAAiB;MACjB,aAAa;MACb;0CACoC;IACtC;IACA;MACE,cAAc;MACd,aAAa;MACb,sBAAsB;MACtB,SAAS;MACT,mBAAmB;MACnB,iBAAiB;MACjB,gBAAgB;IAClB;IACA;MACE,gBAAgB;MAChB,iBAAiB;MACjB,eAAe;IACjB;IACA;MACE,kBAAkB;MAClB,iBAAiB;MACjB;IACF;MACE,UAAU;MACV,mBAAmB;MACnB,kBAAkB;MAClB,aAAa;IACf;AACJ","sourcesContent":["@media (min-width:900px) {\n    .home-page-section{\n      width: 50%;\n      grid-area: left;\n      justify-self: start;\n      padding-left: 3rem;\n      padding-top: 5rem;\n    }\n    .btn-holder{\n      grid-area: right;\n    }\n    .big-circle{\n     right: 70%;\n    }\n    .home-page-header{\n      padding: 1rem;\n      align-items: center;\n    }\n    .intro-title{\n      font-size: 5rem;\n    }\n    .home-page-nav{\n      margin-left: 0;\n      padding-inline: clamp(0.3rem,1vw,0.5rem);\n      gap: 1rem;\n    }\n    .home-page-nav > li{\n      padding: 0;\n      flex-direction: row;\n      align-items: center;\n      gap:0.5rem;\n      padding-inline: clamp(1rem,1vw,1.5rem);\n     }\n    .home-page-nav > li > span{\n      display: block;\n     }\n    .open-nav{\n      display: none;\n    }\n    .hr-line{\n      display: block;\n      z-index: 20;\n    } \n    /* content main home page */\n    main{\n      display: grid;\n      grid-template-areas:\"left right\";\n      align-content: center;\n    }\n    .btn-holder{\n      grid-area: right;\n      align-self: end;\n      justify-self: left;\n    }\n    /* destination or second page */\n    .planet-info-holder{\n      grid-area: left;\n      display: flex;\n      flex-direction: column;\n      gap:2rem;\n    }\n    .planet-nav-holder{\n      grid-area: right;\n      padding-top: 2rem;\n    }\n    .planet-image{\n      flex-grow: 1.5;\n      height: 45vh;\n    }\n    .planet-info{\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n    }\n    \n    /* third page */\n    /* third and fourth image holder same style */\n    .crew-image-holder,.techno-image-holder{\n      grid-area: right;\n      width: 0;\n      height: 0; \n    }\n    .crew-image{\n      position: absolute;\n      height: 80%;\n      width: 40%;\n      right: 0;\n      bottom: -5%;\n      z-index: -10;\n    }\n    .techno-image {\n      position: absolute;\n      height: 70%;\n      right: 1%;\n      width: 40%;\n      bottom: 10%;\n      z-index: -10;\n    }\n    .crew-info-holder{\n      grid-area: left;\n      justify-self: start;\n      width: 50%;\n      padding-left: 2rem;\n     }\n    .person-info{\n      padding: 0;\n    }\n    .person-detail-info{\n      grid-area: top;\n      text-align: start;\n      height: 300px;\n      align-content: end;\n    }\n    .slider-btn-holder{\n      grid-area: bottom;\n      justify-self: start;\n      margin-top: 1.5rem;\n    }\n    /* fourth page style */\n    .current-page{\n      justify-content: start;\n      padding: 1.5rem;\n      gap: 1.5rem;\n    }\n    .techno-page{\n        padding: 1.5rem;\n    }\n      .techno-image{\n      grid-area: right;\n    }\n    .technology-info-holder{\n      width: 60%;\n      padding-top: 2rem;\n      display: grid;\n      grid-template-areas: \"nav title\" \n                            \"nav  article\";\n    }\n    .techno-btn-holder{\n      grid-area: nav;\n      display: flex;\n      flex-direction: column;\n      gap: 2rem;\n      padding-right: 1rem;\n      align-self: start;\n      margin-top: 1rem;\n    }\n    .title{\n      grid-area: title;\n      text-align: start;\n      padding:0.5rem ;\n    }\n    .techno-par{\n      grid-area: article;\n      text-align: start;\n      }\n    .techno-info{\n      width: 90%;\n      letter-spacing: 2px;\n      line-height:1.5rem;\n      height: 300px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/bellefair-v14-latin-regular.woff2 */ "./src/assets/fonts/bellefair-v14-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/barlow-condensed-v12-latin-regular.woff2 */ "./src/assets/fonts/barlow-condensed-v12-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/logo.svg */ "./src/assets/images/icons/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-hamburger.svg */ "./src/assets/images/icons/icon-hamburger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-close.svg */ "./src/assets/images/icons/icon-close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* bellefair-regular - latin */
@font-face {
  font-display: swap; 
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
}
/* barlow-condensed-regular - latin */
@font-face {
  font-display: swap;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2'); 
}
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #060717;
  background-size: cover; 
  background-repeat: no-repeat;
  width: 100vw;
  transition: background-image 200ms ease-in-out;
  overflow-x: hidden;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
 button{
  cursor: pointer;
} 
main{
  font-family: 'Barlow Condensed', 'Bellefair',monospace;
}
.home-page-header{
  display: flex;
  align-items: start;
  justify-content: space-between;
 }
   /* homepage link style */
.home-page-nav > li > button{
  border: none;
  padding-block: 1rem;
  font-size:1.2rem;
  background-color: inherit;
  color: white;
  text-align: start;
  font-family: 'Barlow Condensed';
}
.home-page-nav > li > span{
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Barlow Condensed';
}
.home-page-nav > li{
  position: relative;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  width: 100%;
  animation: navSlide 1s ease-in-out;
 }
.nav-mobile-focus{
   border-right: 2px solid rgb(255, 255, 255) ;
 }
.home-page-nav > :nth-child(1){
  margin-top: 2rem;
 }

.home-page-nav{
  display: flex;
  flex-direction: column;
  gap:0.2rem;
  position: absolute;
  right: 0;
  background-color: hsla(0, 2%, 47%, 0.2);
  padding: 1rem;
  width: 60%;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 10;
}
.mobile-btn{
  position: absolute;
  right: 0;
  top: 1%;
  z-index: 1000;
 }
.logo{
  width: 0.7rem;
  aspect-ratio: 1;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  padding: 1.5rem;
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
  border: none;
  }
.open-nav{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.close-nav{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.open-nav{
  display: block;
}
.hr-line{
  display: none;
  position: relative;
  left: 1rem;
  width: 50%;
  height: 2px;
  background-color: rgb(130, 130, 130);
  z-index: 1;
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
  color: white;
  border-radius: 0.2rem;
    
}
[data-nav-links="false"]{
  opacity: 0;
  display: none;
}
/* home page main */
main{
  display: grid;
  grid-template-areas: "main";
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
  background-color: #d7dff0;
  }

.big-circle{
  position: relative;
  width: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
 }
.big-circle:hover{
  background-color:hsla(0, 2%, 47%, 0.2);
  backdrop-filter: blur(2px);
}
.home-page-section{
  color: white;
  padding-inline: 1rem;
}
.intro-text,.intro-par{
  font-size: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.3rem;
  word-spacing: 1px;
  text-align: center;
  font-family: 'Barlow Condensed';
}
.intro-title{
  padding-block: 0.5rem;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  font-family: 'Bellefair';
}
.intro-par{
  font-size: 1rem;
  text-align: justify;
  width: 100%;
}
.star{
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  }
.star{
  position: absolute;
  bottom: 0;
  opacity: 0;
  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #d7dff0);
  animation:  shootingStars 40s cubic-bezier(0.36, 0.55, 0.51, 0.81);
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
/* second page (destination) style */
.current-page{
  display: flex;
  justify-content: center;
  gap:0.5rem;
  padding:1rem ;
  font-family: 'Barlow Condensed'
}
.link-name,.link-number{
  font-family: 'Barlow Condensed';
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 1.5rem;
 }
.link-number{
  display: none;
  color: #4e4949;
}
.planet-info-holder,.planet-nav-holder{
  display: grid;
  grid-template-columns: 1fr;
}
/* nav buttons  */
.planets-btn-holder{
  justify-self: center;
  align-content: center;
}
.planet-name-nav{
  border: none;
  background-color: inherit;
  color: white;
  padding: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Barlow Condensed'
 }
.planet-name-nav::after{
  display: block;
  content: '';
  margin-top: 0.5rem;
  border-bottom: solid 3px rgb(255, 255, 255);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.planet-name-nav:hover::after{
  transform: scaleX(1);
 }
 .planet-name-nav:focus::after{
  transform: scaleX(1);
 }
 .planet-name{
  font-size: 3rem;
  font-family: 'Bellefair';
  font-weight: 500;
  text-align: center;
 }
 .planet-par{
  letter-spacing: 2px;
  line-height: 1.3rem;
  max-width: 500px;
  text-align: center;
  padding: 1rem;
 }
 .about-planet{
  text-align: justify;
  padding: 0.3rem;
 }
 .planet-info-holder{
  text-align: left;
 }
 .distance-info,.travel-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
 }
 .planet-distance,.travel-time{
  font-size: 2rem;
 }
 .planet-image{
  width: 100%;
  height: 40vh;
  padding: 1rem;
}
.planet{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: rotatePlanet 50s ease-in-out infinite forwards; 
}
 @keyframes rotatePlanet{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
 /* third page style */
 .crew-name{
  padding-bottom: 0.4rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: 'Bellefair';
  letter-spacing: 2px;
  word-spacing: 2px;
  word-wrap: break-word;
 }
.person-info{
  display: grid;
  grid-template-areas: 
  "top"
  "bottom";
  padding: 1rem;
 }
.person-detail-info{
  text-align: center;
}
.crew-bio{
  line-height: 1.2rem;
  letter-spacing: 2px;
  word-wrap: break-word;
  height: 150px;
}
.slider-btn-holder{
  grid-area: top;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding:1rem;
}
.slider-btn{
  padding: 0.5rem;
  border: none;
  aspect-ratio: 1;
  background-color: rgb(95, 92, 92);
  border-radius: 50%;
 }
.slider-btn:focus ,.slider-btn-clicked,.slider-btn:hover{
  background-color: white;
 }
.person-job{
  text-transform: uppercase;
  font-family: 'Bellefair';
  font-size: 1.3rem;
  color: #969191;
 }
 /* forth and third page image holder,image has same style */
.crew-image-holder,.techno-image-holder{
  width: 100%;
  height: 30vh;
 }  
 .crew-image,.techno-image{
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1s ease-in;
}
.techno-image{
  background-size: cover;
  }
 /*fourth page style */
.technology-info-holder{
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.5rem;
  padding: 1rem;
}
 .techno-name{
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-family: 'Bellefair';
  padding-top: 0.5rem;
 }
.techno-btn-holder{
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 0.3rem;

 }
 .techno-btn{
  border: none;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: #d7dff0;
  border: 2px solid rgb(66, 65, 65);
  background-color: inherit;
}
.techno-btn:hover{
  border: 2px solid rgb(255, 255, 255);
}
.techno-btn-clicked, .techno-btn:focus{
  background-color: white;
  color: black;
}
/* media query for tablet screen */
@media (min-width:501px) {
  /* first page */
  .home-page-nav{
    height: fit-content;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    margin-top: 0;
    padding: 0;
    width: 100%;
    gap:0.5rem;
   }
  .home-nav-btn::after {
    content: "";
    position:absolute;
    top: 0;
    left: 0;
    transform: scale(0);
    height: 100%;
    width:100%;
    border-radius: 0.2rem;
    background-color: rgb(0, 0, 0);
    transform-origin: right;
    transition:transform 400ms ease-in-out;
    z-index: -1;
   }
   .home-nav-btn:hover::after{
    transform: scale(1);
    transform-origin: left;
  } 
  .home-page-nav > li {
    padding-inline: clamp(0.3rem,2vw,0.5rem);
    }
  .home-page-nav > li:nth-child(1){
    margin-top: 0;
  }
  .home-page-nav > li > span{
    display: none;
  }
  .nav-tab-focus{
    border-bottom: 4px solid  rgb(255, 255, 255); 
  } 
  .home-page-section{
    padding-block: 1rem;
  }
 .intro-title{
    font-size: 4rem;
    padding-block: 1rem;
  }
  /* second page for tab */
  .current-page{
    padding: 0.3rem;
  }
  .link-number{
    display: block;
   font-weight: 700;
  }
  .slider-btn-holder{
    grid-area: bottom;
  }
  .crew-image-holder{
    width: 0;
    height: 0;
  }
  .crew-image{
    position: absolute;
    bottom: -20%;
    height: 50%;
  }
  .person-info{
    padding: 0.3rem;
  }
  /* third page */
 }
  @media(prefers-reduced-motion){
    /* stop shooting star movement */
  .star{
    display:none
  }
  .planet{
    animation: stopRotate 3s infinite ; 
  } 
}
/* stop rotation fo planet if reduced */
 @keyframes stopRotate{
  to{
    transform: rotate(0deg);
  }
  from{
    transform: rotate(0deg);
  }
 }
 

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,4DAA4E;AAC9E;AACA,qCAAqC;AACrC;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;EAChB,4DAAmF;AACrF;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;EACZ,8CAA8C;EAC9C,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;AACvB;CACC;EACC,eAAe;AACjB;AACA;EACE,sDAAsD;AACxD;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;CAC/B;GACE,wBAAwB;AAC3B;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,kCAAkC;CACnC;AACD;GACG,2CAA2C;CAC7C;AACD;EACE,gBAAgB;CACjB;;AAED;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,uCAAuC;EACvC,aAAa;EACb,UAAU;EACV,aAAa;EACb,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,aAAa;CACd;AACD;EACE,aAAa;EACb,eAAe;EACf,yDAAqD;EACrD,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;AACjB;AACA,yBAAyB;AACzB;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW;EACX,yBAAyB;EACzB,2BAA2B;EAC3B,eAAe;EACf,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;EACZ;AACF;EACE,yDAA+D;AACjE;AACA;EACE,yDAA2D;AAC7D;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,oCAAoC;EACpC,UAAU;AACZ;;AAEA;IACI;MACE,YAAY;MACZ,0BAA0B;IAC5B;IACA;MACE,UAAU;MACV,yBAAyB;IAC3B;AACJ;AACA,gCAAgC;AAChC;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,qBAAqB;;AAEvB;AACA;EACE,UAAU;EACV,aAAa;AACf;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;EACrB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,MAAM;EACN,SAAS;EACT,yBAAyB;EACzB;;AAEF;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,sCAAsC;EACtC,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;AACjC;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB;AACF;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,gEAAgE;EAChE,oCAAoC;EACpC,kEAAkE;EAClE,8BAA8B;EAC9B,mCAAmC;EACnC,6BAA6B;AAC/B;AACA;EACE;GACC,+BAA+B;EAChC;EACA;IACE,UAAU;CACb;CACA;GACE,UAAU;GACV,sCAAsC;EACvC;AACF;AACA,oCAAoC;AACpC;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb;AACF;AACA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,0BAA0B;AAC5B;AACA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB;CACD;AACD;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,2CAA2C;EAC3C,oBAAoB;EACpB,uCAAuC;AACzC;AACA;EACE,oBAAoB;CACrB;CACA;EACC,oBAAoB;CACrB;CACA;EACC,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;CACnB;CACA;EACC,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;EACxB,yDAAyD;AAC3D;CACC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;CACC,qBAAqB;CACrB;EACC,sBAAsB;EACtB,yBAAyB;EACzB,eAAe;EACf,wBAAwB;EACxB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,aAAa;EACb;;UAEQ;EACR,aAAa;CACd;AACD;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,cAAc;EACd,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;EACzB,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;CACf;CACA,2DAA2D;AAC5D;EACE,WAAW;EACX,YAAY;CACb;CACA;EACC,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,sBAAsB;EACtB;CACD,qBAAqB;AACtB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;AACf;CACC;EACC,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,sBAAsB;;CAEvB;CACA;EACC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iCAAiC;EACjC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA,kCAAkC;AAClC;EACE,eAAe;EACf;IACE,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,UAAU;IACV,WAAW;IACX,UAAU;GACX;EACD;IACE,WAAW;IACX,iBAAiB;IACjB,MAAM;IACN,OAAO;IACP,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,8BAA8B;IAC9B,uBAAuB;IACvB,sCAAsC;IACtC,WAAW;GACZ;GACA;IACC,mBAAmB;IACnB,sBAAsB;EACxB;EACA;IACE,wCAAwC;IACxC;EACF;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;CACD;IACG,eAAe;IACf,mBAAmB;EACrB;EACA,wBAAwB;EACxB;IACE,eAAe;EACjB;EACA;IACE,cAAc;GACf,gBAAgB;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,QAAQ;IACR,SAAS;EACX;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA,eAAe;CAChB;EACC;IACE,gCAAgC;EAClC;IACE;EACF;EACA;IACE,kCAAkC;EACpC;AACF;AACA,uCAAuC;CACtC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;CACD","sourcesContent":["/* bellefair-regular - latin */\n@font-face {\n  font-display: swap; \n  font-family: 'Bellefair';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/bellefair-v14-latin-regular.woff2') format('woff2');\n}\n/* barlow-condensed-regular - latin */\n@font-face {\n  font-display: swap;\n  font-family: 'Barlow Condensed';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/barlow-condensed-v12-latin-regular.woff2') format('woff2'); \n}\n*{\n  margin: 0;\n  padding: 0;\n}\nbody{\n  background-color: #060717;\n  background-size: cover; \n  background-repeat: no-repeat;\n  width: 100vw;\n  transition: background-image 200ms ease-in-out;\n  overflow-x: hidden;\n}\nul{\n  list-style: none;\n}\na{\n  text-decoration: none;\n}\n button{\n  cursor: pointer;\n} \nmain{\n  font-family: 'Barlow Condensed', 'Bellefair',monospace;\n}\n.home-page-header{\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n }\n   /* homepage link style */\n.home-page-nav > li > button{\n  border: none;\n  padding-block: 1rem;\n  font-size:1.2rem;\n  background-color: inherit;\n  color: white;\n  text-align: start;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li > span{\n  font-size: 1.2rem;\n  font-weight: 700;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li{\n  position: relative;\n  display: flex;\n  gap: 0.2rem;\n  align-items: center;\n  width: 100%;\n  animation: navSlide 1s ease-in-out;\n }\n.nav-mobile-focus{\n   border-right: 2px solid rgb(255, 255, 255) ;\n }\n.home-page-nav > :nth-child(1){\n  margin-top: 2rem;\n }\n\n.home-page-nav{\n  display: flex;\n  flex-direction: column;\n  gap:0.2rem;\n  position: absolute;\n  right: 0;\n  background-color: hsla(0, 2%, 47%, 0.2);\n  padding: 1rem;\n  width: 60%;\n  height: 100vh;\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.mobile-btn{\n  position: absolute;\n  right: 0;\n  top: 1%;\n  z-index: 1000;\n }\n.logo{\n  width: 0.7rem;\n  aspect-ratio: 1;\n  background-image: url(./assets/images/icons/logo.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  padding: 1.5rem;\n}\n/* style for mobile nav */\n.open-nav,.close-nav{\n  display: none;\n  position: absolute;\n  right: 0;\n  top:3%;\n  width: 2rem;\n  background-color: inherit;\n  transform: translateX(-10%);\n  aspect-ratio: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n  }\n.open-nav{\n  background-image: url(./assets/images/icons/icon-hamburger.svg);\n}\n.close-nav{\n  background-image: url(./assets/images/icons/icon-close.svg);\n}\n.open-nav{\n  display: block;\n}\n.hr-line{\n  display: none;\n  position: relative;\n  left: 1rem;\n  width: 50%;\n  height: 2px;\n  background-color: rgb(130, 130, 130);\n  z-index: 1;\n}\n\n@keyframes navSlide{\n    0%{\n      opacity: 0.5;\n      transform: translateX(20%);\n    }\n    100%{\n      opacity: 1;\n      transform: translateX(0%);\n    }\n}\n/* links holder for mobile nav */\n[data-nav-links=\"true\"]{\n  opacity: 1;\n  display: flex;\n  color: white;\n  border-radius: 0.2rem;\n    \n}\n[data-nav-links=\"false\"]{\n  opacity: 0;\n  display: none;\n}\n/* home page main */\nmain{\n  display: grid;\n  grid-template-areas: \"main\";\n  justify-items: center;\n  color: white; \n }\n.explore-btn{\n  width: 180px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  margin: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border: none;\n  position:absolute;\n  top:3%;\n  left:2.5%;\n  background-color: #d7dff0;\n  }\n\n.big-circle{\n  position: relative;\n  width: 250px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n }\n.big-circle:hover{\n  background-color:hsla(0, 2%, 47%, 0.2);\n  backdrop-filter: blur(2px);\n}\n.home-page-section{\n  color: white;\n  padding-inline: 1rem;\n}\n.intro-text,.intro-par{\n  font-size: 1rem;\n  letter-spacing: 1.5px;\n  line-height: 1.3rem;\n  word-spacing: 1px;\n  text-align: center;\n  font-family: 'Barlow Condensed';\n}\n.intro-title{\n  padding-block: 0.5rem;\n  font-size: 3rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: 'Bellefair';\n}\n.intro-par{\n  font-size: 1rem;\n  text-align: justify;\n  width: 100%;\n}\n.star{\n  width: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  }\n.star{\n  position: absolute;\n  bottom: 0;\n  opacity: 0;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation:  shootingStars 40s cubic-bezier(0.36, 0.55, 0.51, 0.81);\n  animation-direction: alternate;\n  animation-iteration-count: infinite; \n  animation-fill-mode: forwards;\n}\n@keyframes shootingStars{\n  0% { \n   transform: translate3d(0, 0, 0); \n  }\n  10%{\n    opacity: 1;\n }\n 100% {\n   opacity: 0;\n   transform: translate3d(90vw, -90vh, 0);\n  }\n}\n/* second page (destination) style */\n.current-page{\n  display: flex;\n  justify-content: center;\n  gap:0.5rem;\n  padding:1rem ;\n  font-family: 'Barlow Condensed'\n}\n.link-name,.link-number{\n  font-family: 'Barlow Condensed';\n  letter-spacing: 2px;\n  font-weight: 500;\n  font-size: 1.5rem;\n }\n.link-number{\n  display: none;\n  color: #4e4949;\n}\n.planet-info-holder,.planet-nav-holder{\n  display: grid;\n  grid-template-columns: 1fr;\n}\n/* nav buttons  */\n.planets-btn-holder{\n  justify-self: center;\n  align-content: center;\n}\n.planet-name-nav{\n  border: none;\n  background-color: inherit;\n  color: white;\n  padding: 0.6rem;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  font-family: 'Barlow Condensed'\n }\n.planet-name-nav::after{\n  display: block;\n  content: '';\n  margin-top: 0.5rem;\n  border-bottom: solid 3px rgb(255, 255, 255);\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n}\n.planet-name-nav:hover::after{\n  transform: scaleX(1);\n }\n .planet-name-nav:focus::after{\n  transform: scaleX(1);\n }\n .planet-name{\n  font-size: 3rem;\n  font-family: 'Bellefair';\n  font-weight: 500;\n  text-align: center;\n }\n .planet-par{\n  letter-spacing: 2px;\n  line-height: 1.3rem;\n  max-width: 500px;\n  text-align: center;\n  padding: 1rem;\n }\n .about-planet{\n  text-align: justify;\n  padding: 0.3rem;\n }\n .planet-info-holder{\n  text-align: left;\n }\n .distance-info,.travel-info{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n }\n .planet-distance,.travel-time{\n  font-size: 2rem;\n }\n .planet-image{\n  width: 100%;\n  height: 40vh;\n  padding: 1rem;\n}\n.planet{\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  animation: rotatePlanet 50s ease-in-out infinite forwards; \n}\n @keyframes rotatePlanet{\n  0%{\n    transform: rotate(0deg);\n  }\n  100%{\n    transform: rotate(360deg);\n  }\n}\n /* third page style */\n .crew-name{\n  padding-bottom: 0.4rem;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-family: 'Bellefair';\n  letter-spacing: 2px;\n  word-spacing: 2px;\n  word-wrap: break-word;\n }\n.person-info{\n  display: grid;\n  grid-template-areas: \n  \"top\"\n  \"bottom\";\n  padding: 1rem;\n }\n.person-detail-info{\n  text-align: center;\n}\n.crew-bio{\n  line-height: 1.2rem;\n  letter-spacing: 2px;\n  word-wrap: break-word;\n  height: 150px;\n}\n.slider-btn-holder{\n  grid-area: top;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  padding:1rem;\n}\n.slider-btn{\n  padding: 0.5rem;\n  border: none;\n  aspect-ratio: 1;\n  background-color: rgb(95, 92, 92);\n  border-radius: 50%;\n }\n.slider-btn:focus ,.slider-btn-clicked,.slider-btn:hover{\n  background-color: white;\n }\n.person-job{\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  font-size: 1.3rem;\n  color: #969191;\n }\n /* forth and third page image holder,image has same style */\n.crew-image-holder,.techno-image-holder{\n  width: 100%;\n  height: 30vh;\n }  \n .crew-image,.techno-image{\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 1s ease-in;\n}\n.techno-image{\n  background-size: cover;\n  }\n /*fourth page style */\n.technology-info-holder{\n  text-align: center;\n  letter-spacing: 2px;\n  line-height: 1.5rem;\n  padding: 1rem;\n}\n .techno-name{\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-bottom: 1rem;\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  padding-top: 0.5rem;\n }\n.techno-btn-holder{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding-bottom: 0.3rem;\n\n }\n .techno-btn{\n  border: none;\n  width: 2rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  color: #d7dff0;\n  border: 2px solid rgb(66, 65, 65);\n  background-color: inherit;\n}\n.techno-btn:hover{\n  border: 2px solid rgb(255, 255, 255);\n}\n.techno-btn-clicked, .techno-btn:focus{\n  background-color: white;\n  color: black;\n}\n/* media query for tablet screen */\n@media (min-width:501px) {\n  /* first page */\n  .home-page-nav{\n    height: fit-content;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    justify-content:space-between;\n    margin-top: 0;\n    padding: 0;\n    width: 100%;\n    gap:0.5rem;\n   }\n  .home-nav-btn::after {\n    content: \"\";\n    position:absolute;\n    top: 0;\n    left: 0;\n    transform: scale(0);\n    height: 100%;\n    width:100%;\n    border-radius: 0.2rem;\n    background-color: rgb(0, 0, 0);\n    transform-origin: right;\n    transition:transform 400ms ease-in-out;\n    z-index: -1;\n   }\n   .home-nav-btn:hover::after{\n    transform: scale(1);\n    transform-origin: left;\n  } \n  .home-page-nav > li {\n    padding-inline: clamp(0.3rem,2vw,0.5rem);\n    }\n  .home-page-nav > li:nth-child(1){\n    margin-top: 0;\n  }\n  .home-page-nav > li > span{\n    display: none;\n  }\n  .nav-tab-focus{\n    border-bottom: 4px solid  rgb(255, 255, 255); \n  } \n  .home-page-section{\n    padding-block: 1rem;\n  }\n .intro-title{\n    font-size: 4rem;\n    padding-block: 1rem;\n  }\n  /* second page for tab */\n  .current-page{\n    padding: 0.3rem;\n  }\n  .link-number{\n    display: block;\n   font-weight: 700;\n  }\n  .slider-btn-holder{\n    grid-area: bottom;\n  }\n  .crew-image-holder{\n    width: 0;\n    height: 0;\n  }\n  .crew-image{\n    position: absolute;\n    bottom: -20%;\n    height: 50%;\n  }\n  .person-info{\n    padding: 0.3rem;\n  }\n  /* third page */\n }\n  @media(prefers-reduced-motion){\n    /* stop shooting star movement */\n  .star{\n    display:none\n  }\n  .planet{\n    animation: stopRotate 3s infinite ; \n  } \n}\n/* stop rotation fo planet if reduced */\n @keyframes stopRotate{\n  to{\n    transform: rotate(0deg);\n  }\n  from{\n    transform: rotate(0deg);\n  }\n }\n \n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/images/crew-bg/background-crew-desktop.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/crew-bg/background-crew-desktop.jpg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "88a3c692fd34eb311e04c4055f47cbe9.jpg");

/***/ }),

/***/ "./src/assets/images/crew-bg/background-crew-mobile.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/crew-bg/background-crew-mobile.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5f0ed7f1557a2a3ebf68ffe49baa4612.jpg");

/***/ }),

/***/ "./src/assets/images/crew-bg/background-crew-tablet.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/crew-bg/background-crew-tablet.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "16d51cf61e98ce45eb611b6067e12866.jpg");

/***/ }),

/***/ "./src/assets/images/crew/image-anousheh-ansari.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/crew/image-anousheh-ansari.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2d647128496ddc638acd7980db12829e.png");

/***/ }),

/***/ "./src/assets/images/crew/image-anousheh-ansari.webp":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/image-anousheh-ansari.webp ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bb42b775ee0b12430f3a441c1f9ca158.webp");

/***/ }),

/***/ "./src/assets/images/crew/image-douglas-hurley.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/crew/image-douglas-hurley.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7540fbb61923064f065e2f81532d322c.png");

/***/ }),

/***/ "./src/assets/images/crew/image-douglas-hurley.webp":
/*!**********************************************************!*\
  !*** ./src/assets/images/crew/image-douglas-hurley.webp ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e4c7def427824ef543c08c2ded735d78.webp");

/***/ }),

/***/ "./src/assets/images/crew/image-mark-shuttleworth.png":
/*!************************************************************!*\
  !*** ./src/assets/images/crew/image-mark-shuttleworth.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fc30f35b05fc0bc4ee47a5717e4428a0.png");

/***/ }),

/***/ "./src/assets/images/crew/image-mark-shuttleworth.webp":
/*!*************************************************************!*\
  !*** ./src/assets/images/crew/image-mark-shuttleworth.webp ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "665e198adc22fcdf7810e69f4be592fb.webp");

/***/ }),

/***/ "./src/assets/images/crew/image-victor-glover.png":
/*!********************************************************!*\
  !*** ./src/assets/images/crew/image-victor-glover.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8a9a5424588b73ec61c2f67f4b4b4068.png");

/***/ }),

/***/ "./src/assets/images/crew/image-victor-glover.webp":
/*!*********************************************************!*\
  !*** ./src/assets/images/crew/image-victor-glover.webp ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1c271f99bab8b06d7ab58db57a53c09a.webp");

/***/ }),

/***/ "./src/assets/images/destination-bg/background-destination-desktop.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/destination-bg/background-destination-desktop.jpg ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "468b922c69bf5499b4bc37fc385ea6b5.jpg");

/***/ }),

/***/ "./src/assets/images/destination-bg/background-destination-mobile.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/destination-bg/background-destination-mobile.jpg ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e0131e27e751ead1a922c013f5dda715.jpg");

/***/ }),

/***/ "./src/assets/images/destination-bg/background-destination-tablet.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/destination-bg/background-destination-tablet.jpg ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8f55d346d8b6cfd95ab76d600d80566a.jpg");

/***/ }),

/***/ "./src/assets/images/destination/image-europa.png":
/*!********************************************************!*\
  !*** ./src/assets/images/destination/image-europa.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3e95f7d0a16fe2ebf4c6992c4d286207.png");

/***/ }),

/***/ "./src/assets/images/destination/image-europa.webp":
/*!*********************************************************!*\
  !*** ./src/assets/images/destination/image-europa.webp ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c3be32383f31d0f76d96424933326ad5.webp");

/***/ }),

/***/ "./src/assets/images/destination/image-mars.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-mars.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1b224c8663251270d79f3c5949f6efed.png");

/***/ }),

/***/ "./src/assets/images/destination/image-mars.webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-mars.webp ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7f55f721b4a64b7a56a81e78ec68bd8d.webp");

/***/ }),

/***/ "./src/assets/images/destination/image-moon.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-moon.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d287d07182de3015952f44dc7457a1af.png");

/***/ }),

/***/ "./src/assets/images/destination/image-moon.webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-moon.webp ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b5a3c90e9c8eeb2cb68dc545231b9d78.webp");

/***/ }),

/***/ "./src/assets/images/destination/image-titan.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-titan.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d4b078f9ce17e686ae99dec920e4333b.png");

/***/ }),

/***/ "./src/assets/images/destination/image-titan.webp":
/*!********************************************************!*\
  !*** ./src/assets/images/destination/image-titan.webp ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "80738bc61e5d1217a19a201be75f8ba8.webp");

/***/ }),

/***/ "./src/assets/images/home/background-home-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/home/background-home-desktop.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cdf3864ecbfdf20e8c3bc5264b6b53e4.jpg");

/***/ }),

/***/ "./src/assets/images/home/background-home-mobile.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/home/background-home-mobile.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "13f7adecbcb3c3f170d85250584fa7bb.jpg");

/***/ }),

/***/ "./src/assets/images/home/background-home-tablet.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/home/background-home-tablet.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bc9efcc3281fa68010772bac15ea3398.jpg");

/***/ }),

/***/ "./src/assets/images/techno-bg/background-technology-desktop.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/techno-bg/background-technology-desktop.jpg ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b7b589b3c0c5ef0811d4158bfa5cee61.jpg");

/***/ }),

/***/ "./src/assets/images/techno-bg/background-technology-mobile.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/techno-bg/background-technology-mobile.jpg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e3e3a1c30cd4fba89a62c36756e7b393.jpg");

/***/ }),

/***/ "./src/assets/images/techno-bg/background-technology-tablet.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/techno-bg/background-technology-tablet.jpg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "48c38b028217ee0096c4b60d8046c087.jpg");

/***/ }),

/***/ "./src/assets/images/technology/landscape-bg/image-launch-vehicle-landscape.jpg":
/*!**************************************************************************************!*\
  !*** ./src/assets/images/technology/landscape-bg/image-launch-vehicle-landscape.jpg ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4281a59ff7186488fe6ade5d9ef7745e.jpg");

/***/ }),

/***/ "./src/assets/images/technology/landscape-bg/image-space-capsule-landscape.jpg":
/*!*************************************************************************************!*\
  !*** ./src/assets/images/technology/landscape-bg/image-space-capsule-landscape.jpg ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d672da81d5ff3ada7301c0077e73f817.jpg");

/***/ }),

/***/ "./src/assets/images/technology/landscape-bg/image-spaceport-landscape.jpg":
/*!*********************************************************************************!*\
  !*** ./src/assets/images/technology/landscape-bg/image-spaceport-landscape.jpg ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0f3ca5c05a3e87191ea7f182fcbe3833.jpg");

/***/ }),

/***/ "./src/assets/images/technology/portrait-bg/image-launch-vehicle-portrait.jpg":
/*!************************************************************************************!*\
  !*** ./src/assets/images/technology/portrait-bg/image-launch-vehicle-portrait.jpg ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0c758955a178bdcc32300fcf4c3fd08d.jpg");

/***/ }),

/***/ "./src/assets/images/technology/portrait-bg/image-space-capsule-portrait.jpg":
/*!***********************************************************************************!*\
  !*** ./src/assets/images/technology/portrait-bg/image-space-capsule-portrait.jpg ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "dd0ac138afef98c1666afb28e3bca130.jpg");

/***/ }),

/***/ "./src/assets/images/technology/portrait-bg/image-spaceport-portrait.jpg":
/*!*******************************************************************************!*\
  !*** ./src/assets/images/technology/portrait-bg/image-spaceport-portrait.jpg ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "85523db5de13057f36ea771961a51a96.jpg");

/***/ }),

/***/ "./src/desktop.css":
/*!*************************!*\
  !*** ./src/desktop.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./desktop.css */ "./node_modules/css-loader/dist/cjs.js!./src/desktop.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/images/crew-bg sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/crew-bg/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background-crew-desktop.jpg": "./src/assets/images/crew-bg/background-crew-desktop.jpg",
	"./background-crew-mobile.jpg": "./src/assets/images/crew-bg/background-crew-mobile.jpg",
	"./background-crew-tablet.jpg": "./src/assets/images/crew-bg/background-crew-tablet.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/crew-bg sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images/crew sync recursive \\.(png)$":
/*!***********************************************!*\
  !*** ./src/assets/images/crew/ sync \.(png)$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-anousheh-ansari.png": "./src/assets/images/crew/image-anousheh-ansari.png",
	"./image-douglas-hurley.png": "./src/assets/images/crew/image-douglas-hurley.png",
	"./image-mark-shuttleworth.png": "./src/assets/images/crew/image-mark-shuttleworth.png",
	"./image-victor-glover.png": "./src/assets/images/crew/image-victor-glover.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/crew sync recursive \\.(png)$";

/***/ }),

/***/ "./src/assets/images/crew sync recursive \\.(webp)$":
/*!************************************************!*\
  !*** ./src/assets/images/crew/ sync \.(webp)$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-anousheh-ansari.webp": "./src/assets/images/crew/image-anousheh-ansari.webp",
	"./image-douglas-hurley.webp": "./src/assets/images/crew/image-douglas-hurley.webp",
	"./image-mark-shuttleworth.webp": "./src/assets/images/crew/image-mark-shuttleworth.webp",
	"./image-victor-glover.webp": "./src/assets/images/crew/image-victor-glover.webp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/crew sync recursive \\.(webp)$";

/***/ }),

/***/ "./src/assets/images/destination-bg sync \\.(png%7Cjpe?g%7Csvg)$":
/*!************************************************************************************!*\
  !*** ./src/assets/images/destination-bg/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background-destination-desktop.jpg": "./src/assets/images/destination-bg/background-destination-desktop.jpg",
	"./background-destination-mobile.jpg": "./src/assets/images/destination-bg/background-destination-mobile.jpg",
	"./background-destination-tablet.jpg": "./src/assets/images/destination-bg/background-destination-tablet.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/destination-bg sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images/destination sync \\.(png)$":
/*!*******************************************************************!*\
  !*** ./src/assets/images/destination/ sync nonrecursive \.(png)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-europa.png": "./src/assets/images/destination/image-europa.png",
	"./image-mars.png": "./src/assets/images/destination/image-mars.png",
	"./image-moon.png": "./src/assets/images/destination/image-moon.png",
	"./image-titan.png": "./src/assets/images/destination/image-titan.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/destination sync \\.(png)$";

/***/ }),

/***/ "./src/assets/images/destination sync \\.(webp)$":
/*!********************************************************************!*\
  !*** ./src/assets/images/destination/ sync nonrecursive \.(webp)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-europa.webp": "./src/assets/images/destination/image-europa.webp",
	"./image-mars.webp": "./src/assets/images/destination/image-mars.webp",
	"./image-moon.webp": "./src/assets/images/destination/image-moon.webp",
	"./image-titan.webp": "./src/assets/images/destination/image-titan.webp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/destination sync \\.(webp)$";

/***/ }),

/***/ "./src/assets/images/home sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************************!*\
  !*** ./src/assets/images/home/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background-home-desktop.jpg": "./src/assets/images/home/background-home-desktop.jpg",
	"./background-home-mobile.jpg": "./src/assets/images/home/background-home-mobile.jpg",
	"./background-home-tablet.jpg": "./src/assets/images/home/background-home-tablet.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/home sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images/techno-bg sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*******************************************************************************!*\
  !*** ./src/assets/images/techno-bg/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background-technology-desktop.jpg": "./src/assets/images/techno-bg/background-technology-desktop.jpg",
	"./background-technology-mobile.jpg": "./src/assets/images/techno-bg/background-technology-mobile.jpg",
	"./background-technology-tablet.jpg": "./src/assets/images/techno-bg/background-technology-tablet.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/techno-bg sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images/technology/landscape-bg sync \\.(jpg)$":
/*!*******************************************************************************!*\
  !*** ./src/assets/images/technology/landscape-bg/ sync nonrecursive \.(jpg)$ ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-launch-vehicle-landscape.jpg": "./src/assets/images/technology/landscape-bg/image-launch-vehicle-landscape.jpg",
	"./image-space-capsule-landscape.jpg": "./src/assets/images/technology/landscape-bg/image-space-capsule-landscape.jpg",
	"./image-spaceport-landscape.jpg": "./src/assets/images/technology/landscape-bg/image-spaceport-landscape.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/technology/landscape-bg sync \\.(jpg)$";

/***/ }),

/***/ "./src/assets/images/technology/portrait-bg sync \\.(jpg)$":
/*!******************************************************************************!*\
  !*** ./src/assets/images/technology/portrait-bg/ sync nonrecursive \.(jpg)$ ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./image-launch-vehicle-portrait.jpg": "./src/assets/images/technology/portrait-bg/image-launch-vehicle-portrait.jpg",
	"./image-space-capsule-portrait.jpg": "./src/assets/images/technology/portrait-bg/image-space-capsule-portrait.jpg",
	"./image-spaceport-portrait.jpg": "./src/assets/images/technology/portrait-bg/image-spaceport-portrait.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/technology/portrait-bg sync \\.(jpg)$";

/***/ }),

/***/ "./src/assets/images/icons/icon-close.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/icon-close.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60739440d4616edba3eb.svg";

/***/ }),

/***/ "./src/assets/images/icons/icon-hamburger.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/icon-hamburger.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bd5954dc6201a1981ace.svg";

/***/ }),

/***/ "./src/assets/images/icons/logo.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/logo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a61d7651dcc0065253b0.svg";

/***/ }),

/***/ "./src/assets/fonts/barlow-condensed-v12-latin-regular.woff2":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/barlow-condensed-v12-latin-regular.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcf8c5473a52498074ac.woff2";

/***/ }),

/***/ "./src/assets/fonts/bellefair-v14-latin-regular.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/bellefair-v14-latin-regular.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "23e36515ba4483f111d1.woff2";

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"backgroundImage":[{"home":{"mobile":"./assets/images/home/background-home-mobile.jpg","tablet":"./assets/images/home/background-home-tablet.jpg","desktop":"./assets/images/home/background-home-desktop.jpg"}},{"destination":{"mobile":"./assets/images/destination/background-destination-mobile.jpg","tablet":"./assets/images/destination/background-destination-tablet.jpg","desktop":"./assets/images/destination/background-destination-desktop.jpg"}},{"crew":{"mobile":"./assets/images/crew/background-crew-mobile.jpg","tablet":"./assets/images/crew/background-crew-tablet.jpg","desktop":"./assets/images/crew/background-crew-desktop.jpg"}},{"technology":{"mobile":"./assets/images/technology/background-technology-mobile.jpg","tablet":"./assets/images/technology/background-technology-tablet.jpg","desktop":"./assets/images/technology/background-technology-desktop.jpg"}}],"destinations":[{"name":"Moon","images":{"png":"./assets/images/destination/image-moon.png","webp":"./assets/images/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/images/destination/image-mars.png","webp":"./assets/images/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/images/destination/image-europa.png","webp":"./assets/images/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/images/destination/image-titan.png","webp":"./assets/images/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/images/crew/image-douglas-hurley.png","webp":"./assets/images/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/images/crew/image-mark-shuttleworth.png","webp":"./assets/images/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/images/crew/image-victor-glover.png","webp":"./assets/images/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/images/crew/image-anousheh-ansari.png","webp":"./assets/images/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/images/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/images/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/images/technology/image-spaceport-portrait.jpg","landscape":"./assets/images/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/images/technology/image-space-capsule-portrait.jpg","landscape":"./assets/images/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./desktop.css */ "./src/desktop.css");
var _domComponent = __webpack_require__(/*! ./dom-component */ "./src/dom-component.js");
const pageNav = document.querySelector("[data-page-nav]");
const main = document.querySelector('main');
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const nav = document.querySelector("[data-nav-links]");
const body = document.body;
const largeScreen = window.matchMedia("(min-width:501px)");
(0, _domComponent.chooseBgImage)(body, 0);
(0, _domComponent.homePageSection)(main);
(0, _domComponent.navBtnFocus)(0);
pageNav.addEventListener("click", e => {
  if (e.target.matches("[data-home-btn]")) {
    (0, _domComponent.homePageSection)(main);
    (0, _domComponent.chooseBgImage)(body, 0);
    //for mobile hide
    if (largeScreen.matches === false) {
      nav.setAttribute("data-nav-links", "false");
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
    (0, _domComponent.navBtnFocus)(0);
  } else if (e.target.matches("[data-destination-btn]")) {
    (0, _domComponent.secondPage)(main);
    const article = document.querySelector('.about-planet');
    const imageHolder = document.querySelector('.planet');
    const btn = document.querySelector(`[data-nav="0"]`);
    btn.focus();
    (0, _domComponent.planetImage)(imageHolder, 2); //2 rep moon image
    (0, _domComponent.destinationPlanet)(article, 0);
    (0, _domComponent.chooseBgImage)(body, 1);
    //hide mobile menu
    if (largeScreen.matches === false) {
      nav.setAttribute("data-nav-links", "false");
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
    (0, _domComponent.navBtnFocus)(1);
  } else if (e.target.matches("[data-crew-btn]")) {
    (0, _domComponent.thirdPage)(main);
    const crewArticle = document.querySelector("[data-crew-bio]");
    const imageHolder = document.querySelector("[data-crew-image]");
    (0, _domComponent.personInfo)(crewArticle, 3);
    (0, _domComponent.personImage)(imageHolder, 3);
    (0, _domComponent.chooseBgImage)(body, 2);
    (0, _domComponent.sliderBtnFocus)(3);
    //for mobile
    if (largeScreen.matches === false) {
      nav.setAttribute("data-nav-links", "false");
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
    (0, _domComponent.navBtnFocus)(2);
  } else if (e.target.matches("[data-technology-btn]")) {
    (0, _domComponent.fourthPage)(main);
    const techArticle = document.querySelector("[data-techno-info]");
    const imageHolder = document.querySelector("[data-techno-image]");
    (0, _domComponent.technoInfo)(techArticle, 0);
    (0, _domComponent.chooseTechnoImage)(imageHolder, 0);
    (0, _domComponent.chooseBgImage)(body, 3);
    (0, _domComponent.tabFocus)(0);
    //for mobile hide menu
    if (largeScreen.matches === false) {
      nav.setAttribute("data-nav-links", "false");
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
    }
    (0, _domComponent.navBtnFocus)(3);
  }
});
main.addEventListener('click', e => {
  if (e.target.matches("[data-explore-btn]")) {
    (0, _domComponent.secondPage)(main);
    const article = document.querySelector('.about-planet');
    const planetImage = document.querySelector('.planet');
    const btn = document.querySelector(`[data-nav="0"]`);
    btn.focus();
    chooseImage(planetImage, 0);
    (0, _domComponent.destinationPlanet)(article, 0);
    (0, _domComponent.navBtnFocus)(0);
  }
  //second page events 
  else if (e.target.matches(`[data-nav="0"]`)) {
    const article = document.querySelector('.about-planet');
    const imageHolder = document.querySelector('.planet');
    (0, _domComponent.planetImage)(imageHolder, 2);
    (0, _domComponent.destinationPlanet)(article, 0);
  } else if (e.target.matches(`[data-nav="1"]`)) {
    const article = document.querySelector('.about-planet');
    const imageHolder = document.querySelector('.planet');
    (0, _domComponent.planetImage)(imageHolder, 1); //1 rep mars
    (0, _domComponent.destinationPlanet)(article, 1);
  } else if (e.target.matches(`[data-nav="2"]`)) {
    const article = document.querySelector('.about-planet');
    const imageHolder = document.querySelector('.planet');
    (0, _domComponent.planetImage)(imageHolder, 0); //0 rep europa
    (0, _domComponent.destinationPlanet)(article, 2);
  } else if (e.target.matches(`[data-nav="3"]`)) {
    const article = document.querySelector('.about-planet');
    const imageHolder = document.querySelector('.planet');
    (0, _domComponent.planetImage)(imageHolder, 3); //3 rep titan
    (0, _domComponent.destinationPlanet)(article, 3);
  }
  //third page event

  if (e.target.matches(`[data-crew="0"]`)) {
    const crewArticle = document.querySelector("[data-crew-bio]");
    const imageHolder = document.querySelector("[data-crew-image]");
    const slideBtn = document.querySelector(`[data-crew="0"]`);
    (0, _domComponent.personInfo)(crewArticle, 0);
    slideBtn.focus();
    (0, _domComponent.personImage)(imageHolder, 0);
    (0, _domComponent.sliderBtnFocus)(0);
  } else if (e.target.matches(`[data-crew="1"]`)) {
    const crewArticle = document.querySelector("[data-crew-bio]");
    const imageHolder = document.querySelector("[data-crew-image]");
    const slideBtn = document.querySelector(`[data-crew="1"]`);
    (0, _domComponent.personInfo)(crewArticle, 1);
    slideBtn.focus();
    (0, _domComponent.personImage)(imageHolder, 1);
    (0, _domComponent.sliderBtnFocus)(1);
  } else if (e.target.matches(`[data-crew="2"]`)) {
    const crewArticle = document.querySelector("[data-crew-bio]");
    const imageHolder = document.querySelector("[data-crew-image]");
    const slideBtn = document.querySelector(`[data-crew="2"]`);
    (0, _domComponent.personInfo)(crewArticle, 2);
    slideBtn.focus();
    (0, _domComponent.personImage)(imageHolder, 2);
    (0, _domComponent.sliderBtnFocus)(2);
  } else if (e.target.matches(`[data-crew="3"]`)) {
    const crewArticle = document.querySelector("[data-crew-bio]");
    const imageHolder = document.querySelector("[data-crew-image]");
    const slideBtn = document.querySelector(`[data-crew="3"]`);
    (0, _domComponent.personInfo)(crewArticle, 3);
    slideBtn.focus();
    (0, _domComponent.personImage)(imageHolder, 3);
    (0, _domComponent.sliderBtnFocus)(3);
  }
  //fourth page event
  else if (e.target.matches(`[data-technology="0"]`)) {
    const techArticle = document.querySelector("[data-techno-info]");
    const imageHolder = document.querySelector("[data-techno-image]");
    (0, _domComponent.technoInfo)(techArticle, 0);
    (0, _domComponent.chooseTechnoImage)(imageHolder, 0);
    (0, _domComponent.tabFocus)(0);
  } else if (e.target.matches(`[data-technology="1"]`)) {
    const techArticle = document.querySelector("[data-techno-info]");
    const imageHolder = document.querySelector("[data-techno-image]");
    (0, _domComponent.technoInfo)(techArticle, 1);
    (0, _domComponent.chooseTechnoImage)(imageHolder, 1);
    (0, _domComponent.tabFocus)(1);
  } else if (e.target.matches(`[data-technology="2"]`)) {
    const techArticle = document.querySelector("[data-techno-info]");
    const imageHolder = document.querySelector("[data-techno-image]");
    (0, _domComponent.technoInfo)(techArticle, 2);
    (0, _domComponent.chooseTechnoImage)(imageHolder, 2);
    (0, _domComponent.tabFocus)(2);
  }
});
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
largeScreen.addEventListener('change', () => {
  //remove mobile hover and focus style
  const ul = document.querySelector('.home-page-nav').children;
  const li = [...ul];
  if (largeScreen.matches === true) {
    nav.setAttribute("data-nav-links", "true");
    closeMenu.style.display = 'none';
    openMenu.style.display = 'none';
    li.forEach(nav => {
      nav.style.borderRight = "none";
    });
  } else if (largeScreen.matches === false) {
    nav.setAttribute("data-nav-links", "false");
    openMenu.style.display = "block";
  }
});
if (largeScreen.matches === true) {
  nav.setAttribute("data-nav-links", "true");
  closeMenu.style.display = 'none';
  openMenu.style.display = 'none';
} else if (largeScreen.matches === false) {
  openMenu.style.display = 'block';
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFB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Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FB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QyxHQUFHbkMsRUFBRSxDQUFDO0VBQ2xCLElBQUd6QyxXQUFXLENBQUNJLE9BQU8sS0FBSSxJQUFJLEVBQUM7SUFDM0IwQyxHQUFHLENBQUNxQixZQUFZLENBQUMsZ0JBQWdCLEVBQUMsTUFBTSxDQUFDO0lBQ3pDSCxTQUFTLENBQUMzRCxLQUFLLENBQUMrRCxPQUFPLEdBQUcsTUFBTTtJQUNoQ0wsUUFBUSxDQUFDMUQsS0FBSyxDQUFDK0QsT0FBTyxHQUFHLE1BQU07SUFDL0JRLEVBQUUsQ0FBQy9CLE9BQU8sQ0FBQ0MsR0FBRyxJQUFFO01BQ1pBLEdBQUcsQ0FBQ3pDLEtBQUssQ0FBQ3dFLFdBQVcsR0FBRSxNQUFNO0lBQ2pDLENBQUMsQ0FBQztFQUNOLENBQUMsTUFDSSxJQUFHN0UsV0FBVyxDQUFDSSxPQUFPLEtBQUksS0FBSyxFQUFDO0lBQ2pDMEMsR0FBRyxDQUFDcUIsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQztJQUMxQ0osUUFBUSxDQUFDMUQsS0FBSyxDQUFDK0QsT0FBTyxHQUFHLE9BQU87RUFDcEM7QUFFSixDQUFDLENBQUM7QUFDRixJQUFHcEUsV0FBVyxDQUFDSSxPQUFPLEtBQUssSUFBSSxFQUFDO0VBQzVCMEMsR0FBRyxDQUFDcUIsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQztFQUN6Q0gsU0FBUyxDQUFDM0QsS0FBSyxDQUFDK0QsT0FBTyxHQUFHLE1BQU07RUFDaENMLFFBQVEsQ0FBQzFELEtBQUssQ0FBQytELE9BQU8sR0FBRyxNQUFNO0FBQ25DLENBQUMsTUFDSSxJQUFHcEUsV0FBVyxDQUFDSSxPQUFPLEtBQUssS0FBSyxFQUFDO0VBQ2xDMkQsUUFBUSxDQUFDMUQsS0FBSyxDQUFDK0QsT0FBTyxHQUFHLE9BQU87QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZG9tLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Rlc2t0b3AuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtbWFyay1zaHV0dGxld29ydGgud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS10aXRhbi53ZWJwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS1tb2JpbGUuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcvYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLWxhbmRzY2FwZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnL2ltYWdlLXNwYWNlLWNhcHN1bGUtbGFuZHNjYXBlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcvaW1hZ2Utc3BhY2Vwb3J0LWxhbmRzY2FwZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvaW1hZ2UtbGF1bmNoLXZlaGljbGUtcG9ydHJhaXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9kZXNrdG9wLmNzcz85MzAwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvIHN5bmMgXFwuKHdlYnApJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4od2VicCkkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4oanBnKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihqcGcpJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbn1cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuLy9jb25zdCBIb21laW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2hvbWUnLCB0cnVlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcblxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy9ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltYWdlc1swXS5kZWZhdWx0fVwiKWA7XG4vL30pO1xuLy9ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2NyZXd9XCIpYDtcblxuLy8gVXNhZ2U6XG5cblxuLy9mdW5jdGlvbiB0byBkcmF3IGhvbWVwYWdlIGNvbnRlbnRcbmZ1bmN0aW9uIGhvbWVQYWdlU2VjdGlvbihlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPHNlY3Rpb24gY2xhc3M9XCJob21lLXBhZ2Utc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnRyby10ZXh0XCI+U08gWU9VIFdBTlQgVE8gVFJBVkVMIFRPPC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiaW50cm8tdGl0bGVcIj5TUEFDRTwvaDE+XG4gICAgPHAgY2xhc3M9XCJpbnRyby1wYXJcIj5MZXQncyBmYWNlIGl0O2lmIHlvdSB3YW50IHRvIGdvIHRvIHNwYWNlLHlvdSBtaWdodCBhcyB3ZWxsXG4gICAgICBnZW51aW5lbHkgZ28gdG8gb3V0ZXIgc3BhY2UgYW5kIG5vdCBob3ZlciBraW5kIG9mIG9uIHRoZVxuICAgICAgZWRnZSBvZiBpdC5XZWxsIHNpdCBiYWNrLCBhbmQgcmVsYXggYmVjYXVzZSB3ZSB3aWxsIGdpdmUgeW91XG4gICAgICBhIHRydWx5IG91dCBvZiB0aGlzIHdvcmxkIGV4cGVyaWVuY2UuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJzdGFyLWhvbGRlclwiPlxuICAgICA8ZGl2IGNsYXNzPVwic3RhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgPC9zZWN0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJidG4taG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJpZy1jaXJjbGVcIj5cbiAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJleHBsb3JlXCIgY2xhc3M9XCJleHBsb3JlLWJ0blwiIGRhdGEtZXhwbG9yZS1idG4gPkVYUExPUkU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiBjaG9vc2UgcGxhbmV0IGltYWdlXG5mdW5jdGlvbiBwbGFuZXRJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgLy93ZWJwIGZvciBzbWFsbCBzY3JlZW4gYW5kIHBuZyBmb3IgbGFyZ2Ugc2NyZWVuXG4gICAgLy9pbWFnZSBzdG9yZWQgaW4gdGhpcyBvcmRlciBldXJvcGEsbWFycyxtb29uLHRpdGFuIFxuICAgIGNvbnN0IHBsYW5ldEltYWdlc1RhYiA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbicsIGZhbHNlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBwbGFuZXRMYXJnZUltYWdlID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uJywgZmFsc2UsIC9cXC4ocG5nKSQvKSk7XG4gICAgaWYobW9iaWxlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0SW1hZ2VzVGFiW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0TGFyZ2VJbWFnZVtudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIGRlc3RpbmF0aW9uIHBhZ2UgKHNlY29uZCBwYWdlKVxuZnVuY3Rpb24gc2Vjb25kUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICA8c2VjdGlvbiBjbGFzcz1cInBsYW5ldC1pbmZvLWhvbGRlclwiPlxuICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgPHNwYW4gY2xhc3M9XCJsaW5rLW51bWJlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjAxPC9zcGFuPlxuICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+UElDSyBZT1VSIERFU1RJTkFUSU9OPC9kaXY+XG4gICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwicGxhbmV0LWltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5ldFwiPjwvZGl2PlxuICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwbGFuZXQtbmF2LWhvbGRlclwiPlxuICA8bmF2IGNsYXNzPVwicGxhbmV0cy1idG4taG9sZGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYW5ldC1uYW1lLW5hdlwiIGRhdGEtbmF2PVwiMFwiPk1PT048L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIxXCI+TUFSUzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJwbGFuZXQtbmFtZS1uYXZcIiBkYXRhLW5hdj1cIjJcIj5FVVJPUEE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIzXCI+VElUQU48L2J1dHRvbj5cbiAgIDwvbmF2PlxuICA8YXJ0aWNsZSBjbGFzcz1cImFib3V0LXBsYW5ldFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPjwvYXJ0aWNsZT5cblxuPC9zZWN0aW9uPlxuIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uUGxhbmV0KGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPGgxIGNsYXNzPVwicGxhbmV0LW5hbWVcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0ubmFtZX08L2gxPlxuICA8cCBjbGFzcz1cInBsYW5ldC1wYXJcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uZGVzY3JpcHRpb259PC9wPlxuICA8aHI+XG4gIDxkaXYgY2xhc3M9XCJwbGFuZXQtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkaXN0YW5jZS1pbmZvXCI+XG4gICAgICA8ZGl2PkFWRyBESVNUQU5DRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYW5ldC1kaXN0YW5jZVwiPiR7ZGF0YS5kZXN0aW5hdGlvbnNbbnVtYmVyXS5kaXN0YW5jZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHJhdmVsLWluZm9cIj5cbiAgICAgIDxkaXY+RVNULiBUUkFWRUwgVElNRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbC10aW1lXCI+JHtkYXRhLmRlc3RpbmF0aW9uc1tudW1iZXJdLnRyYXZlbH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gdGhpcmRQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuIFxuICA8c2VjdGlvbiBjbGFzcz1cImNyZXctaW5mby1ob2xkZXJcIj5cbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtcGFnZVwiPlxuICAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+TUVFVCBZT1VSIENSRVc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjcmV3LWltYWdlLWhvbGRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNyZXctaW1hZ2VcIiBkYXRhLWNyZXctaW1hZ2U+PC9kaXY+XG4gICA8L3NlY3Rpb24+XG5cbiAgICAgPC9zZWN0aW9uPlxuICAgICA8ZGl2IGNsYXNzPVwicGVyc29uLWluZm9cIiAgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgPGFydGljbGUgY2xhc3M9XCJwZXJzb24tZGV0YWlsLWluZm9cIiBkYXRhLWNyZXctYmlvPjwvYXJ0aWNsZT5cbiAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWJ0bi1ob2xkZXJcIiBkYXRhLXNsaWRlci1idG4+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjBcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjFcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjJcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjNcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cblxuICAgPC9zZWN0aW9uPmA7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiB0byBnZXQgaW5mbyBhYm91dCB0aGUgcGVyc29uXG5mdW5jdGlvbiBwZXJzb25JbmZvKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IGJpb1RlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tam9iXCI+JHtkYXRhLmNyZXdbbnVtYmVyXS5yb2xlfTwvZGl2PlxuICAgIDxoMSBjbGFzcz1cImNyZXctbmFtZVwiPiR7ZGF0YS5jcmV3W251bWJlcl0ubmFtZX08L2gxPlxuICAgIDxwIGNsYXNzPVwiY3Jldy1iaW9cIiBkYXRhLWNyZXctaW5mbz4ke2RhdGEuY3Jld1tudW1iZXJdLmJpb308L3A+XG4gIGA7XG4gICAgZWxlLmlubmVySFRNTCA9IGJpb1RlbXBsYXRlO1xufVxuLy9pbWFnZSBvcmRlciB0byBtYXRjaCBqc29uIGRhdGEgYWJvdXQgcGVyc29uIGluZm9cbmNvbnN0IHBlcnNvbkltYWdlT3JkZXIgPSBbMSwyLDMsMF07XG5mdW5jdGlvbiBwZXJzb25JbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgY29uc3QgdGFiSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2NyZXcnLCB0cnVlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBsYXJnZUltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9jcmV3JywgdHJ1ZSwgL1xcLihwbmcpJC8pKTtcbiAgICAvL2NvbnZlcnQgbnVtIHRvIG1hdGNoIGpzb24gZGF0YVxuICAgIG51bWJlciA9IHBlcnNvbkltYWdlT3JkZXJbbnVtYmVyXTtcbiAgICBjb25zb2xlLmxvZyhsYXJnZUltYWdlcyk7XG4gICAgaWYobW9iaWxlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7dGFiSW1hZ2VzW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2xhcmdlSW1hZ2VzW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBcbn1cbi8vZnVuY3Rpb24gdG8gZHJhdyBmb3VydGggcGFnZVxuZnVuY3Rpb24gZm91cnRoUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCAgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZWNobm8tcGFnZVwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY3VycmVudC1wYWdlLWluZm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1wYWdlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxpbmstbnVtYmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+MDI8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+U1BBQ0UgTEFVTkNIIDEwMTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWNobm8taW1hZ2UtaG9sZGVyXCIgZGF0YS10ZWNobm8taG9sZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWNobm8taW1hZ2VcIiBkYXRhLXRlY2huby1pbWFnZT48L2Rpdj5cbiAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGVjaG5vbG9neS1pbmZvLWhvbGRlclwiPlxuICAgICA8bmF2IGNsYXNzPVwidGVjaG5vLWJ0bi1ob2xkZXJcIiBkYXRhLXRlY2huby1idG5zPlxuICAgICAgICA8YnV0dG9uICBhcmlhLWxhYmVsPVwidGVjaG5vbG9neS11c2VkXCIgY2xhc3M9XCJ0ZWNobm8tYnRuXCIgZGF0YS10ZWNobm9sb2d5PVwiMFwiPjE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAgYXJpYS1sYWJlbD1cInRlY2hub2xvZ3ktdXNlZFwiIGNsYXNzPVwidGVjaG5vLWJ0blwiIGRhdGEtdGVjaG5vbG9neT1cIjFcIj4yPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJ0ZWNobm9sb2d5LXVzZWRcIiBjbGFzcz1cInRlY2huby1idG5cIiBkYXRhLXRlY2hub2xvZ3k9XCIyXCI+MzwvYnV0dG9uPlxuICAgICAgPC9uYXY+XG4gICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlRIRSBURUNITk9MT0dZLi4uPC9kaXY+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInRlY2huby1wYXJcIiAgYXJpYS1saXZlPVwicG9saXRlXCIgZGF0YS10ZWNobm8taW5mbyA+PC9hcnRpY2xlPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb25cbiAgYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG4vL2Z1bmN0aW9uIHRvIHBpY2sgaW1hZ2UgZm9yIHRlY2hub2xvZ3kgcGFnZSBiYXNlZCBvbiBzY3JlZW5cbi8vb3JkZXIgdG8gbWFjaCBqc29uIGFuZCBpbWFnZSBvcmRlciwwIHJlcCBsYXVuY2gsMSByZXAgc3BhY2Vwb3J0LCAyIHJlcCBzcGFjZSBjYXBzdWxlXG5jb25zdCBpbWFnZU9yZGVyID0gWzAgLDIsIDFdO1xuZnVuY3Rpb24gY2hvb3NlVGVjaG5vSW1hZ2UoZWxlLG51bWJlcil7XG4gICAgY29uc3QgbGFyZ2VTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6OTAwcHgpXCIpO1xuICAgIGNvbnN0IGxhcmdlSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcnLCBmYWxzZSwgL1xcLihqcGcpJC8pKTtcbiAgICBjb25zdCB0YWJJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcnLCBmYWxzZSwgL1xcLihqcGcpJC8pKTtcbiAgICBudW1iZXIgPSBpbWFnZU9yZGVyW251bWJlcl07XG4gICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtsYXJnZUltYWdlc1tudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG4gICAgZWxzZSBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt0YWJJbWFnZXNbbnVtYmVyXS5kZWZhdWx0fVwiKWA7XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byB1cGRhdGUgcGFyYWdyYXBoIGFib3V0IHRoZSB0ZWNobm9sb2d5IHVzZWRcbmZ1bmN0aW9uIHRlY2hub0luZm8oZWxlLG51bWJlcil7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuICAgIDxoMSBjbGFzcz1cInRlY2huby1uYW1lXCI+JHtkYXRhLnRlY2hub2xvZ3lbbnVtYmVyXS5uYW1lfTwvaDE+XG4gICAgPHAgY2xhc3M9XCJ0ZWNobm8taW5mb1wiPiR7ZGF0YS50ZWNobm9sb2d5W251bWJlcl0uZGVzY3JpcHRpb259PC9wPlxuICAgIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHBpY2sgYmFja2dyb3VuZCBpbWFnZSBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemUgYW5kIHBhZ2UgbmFtZSAobmF2aWdhdGlvbiB1c2VkIGFzIHBhZ2UgbmFtZSlcbmZ1bmN0aW9uIGNob29zZUJnSW1hZ2UoZWxlLG51bWJlcil7XG4gICAgY29uc3QgbGFyZ2VTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6OTAwcHgpXCIpO1xuICAgIGNvbnN0IHRhYlNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDBweClcIik7XG4gICAgY29uc3QgbW9iaWxlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjUwMHB4KVwiKTtcbiAgICBwaWNrQmcobnVtYmVyKTtcbiAgICBcbiAgICAvL2Z1bmN0aW9uIHRvIHBpY2sgYmFja2dyb3VuZCBpbWFnZSBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuICAgIGZ1bmN0aW9uIHBpY2tCZyhudW1iZXIpe1xuICAgICAgICBjb25zdCBob21lSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2hvbWUnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuICAgICAgICBjb25zdCBjcmV3SW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2NyZXctYmcnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgICAgIGNvbnN0IHRlY2hub0ltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgICAgIGNvbnN0IGltYWdlc1RhYiA9IFtob21lSW1hZ2VzLGRlc3RpbmF0aW9uSW1hZ2VzLGNyZXdJbWFnZXMsdGVjaG5vSW1hZ2VzXTtcbiAgICAgICAgLy9pbWFnZXMgc3RvcmVkIGluIGRlc2t0b3AsIG1vYmlsZSwgdGFiKDAsMSwyKSBvcmRlclxuICAgICAgICBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2VzVGFiW251bWJlcl1bMV0uZGVmYXVsdH1cIilgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2VzVGFiW251bWJlcl1bMF0uZGVmYXVsdH1cIilgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFiU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltYWdlc1RhYltudW1iZXJdWzJdLmRlZmF1bHR9XCIpYDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vZnVuY3Rpb24gdG8gYWRkIGZvY3VzIHN0eWxlIGZvciBuYXZcbmZ1bmN0aW9uIG5hdkJ0bkZvY3VzKG51bWJlcil7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlLW5hdicpO1xuICAgIGNvbnN0IHRhYlNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDBweClcIik7XG4gICAgY29uc3QgYWxsTmF2ICA9IFsuLi51bC5jaGlsZHJlbl07XG4gICAgYWxsTmF2LmZvckVhY2gobmF2PT57XG4gICAgICAgIGlmKGFsbE5hdi5pbmRleE9mKG5hdikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZS1mb2N1cycpO1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi10YWItZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhYlNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYtdGFiLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YWJTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1tb2JpbGUtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy9mdW5jdGlvbiB0byBhZGQgc3R5bGUgZm9yIHNsaWRlciBidXR0b25zIHBhZ2UgdGhyZWVcbmZ1bmN0aW9uIHNsaWRlckJ0bkZvY3VzKG51bWJlcil7XG4gICAgY29uc3Qgc2xpZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1idG4nKTtcbiAgICBjb25zdCBidG5BcnJheSAgPSBbLi4uc2xpZGVyQnRuXTtcbiAgICBidG5BcnJheVtudW1iZXJdLmZvY3VzKCk7XG4gICAgYnRuQXJyYXkuZm9yRWFjaChzbGlkZXI9PntcbiAgICAgICAgaWYoYnRuQXJyYXkuaW5kZXhPZihzbGlkZXIpICE9PSBudW1iZXIpe1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZXItYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ0bi1jbGlja2VkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vL2Z1bmN0aW9uIHRvIGFkZCBmb2N1cyBzdHlsZSBmb3IgcGFnZSBmb3VyIGJ1dHRvbnNcbmZ1bmN0aW9uIHRhYkZvY3VzKG51bWJlcil7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVjaG5vLWJ0blwiKTtcbiAgICBjb25zdCBidG5BcnJheSA9IFsuLi5idG5zXTtcbiAgICBidG5BcnJheVtudW1iZXJdLmZvY3VzKCk7XG4gICAgYnRuQXJyYXkuZm9yRWFjaChidG49PntcbiAgICAgICAgaWYoYnRuQXJyYXkuaW5kZXhPZihidG4pICE9PSBudW1iZXIpe1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZWNobm8tYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidGVjaG5vLWJ0bi1jbGlja2VkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7aG9tZVBhZ2VTZWN0aW9uLHNlY29uZFBhZ2UsZGVzdGluYXRpb25QbGFuZXQscGxhbmV0SW1hZ2UsdGhpcmRQYWdlLHBlcnNvbkluZm8sXG4gICAgcGVyc29uSW1hZ2UsZm91cnRoUGFnZSxjaG9vc2VUZWNobm9JbWFnZSx0ZWNobm9JbmZvLGNob29zZUJnSW1hZ2UsXG4gICAgbmF2QnRuRm9jdXMsc2xpZGVyQnRuRm9jdXMsdGFiRm9jdXNcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIChtaW4td2lkdGg6OTAwcHgpIHtcbiAgICAuaG9tZS1wYWdlLXNlY3Rpb257XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIH1cbiAgICAuYnRuLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgfVxuICAgIC5iaWctY2lyY2xle1xuICAgICByaWdodDogNzAlO1xuICAgIH1cbiAgICAuaG9tZS1wYWdlLWhlYWRlcntcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuaW50cm8tdGl0bGV7XG4gICAgICBmb250LXNpemU6IDVyZW07XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtbmF2e1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMC4zcmVtLDF2dywwLjVyZW0pO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAuaG9tZS1wYWdlLW5hdiA+IGxpe1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOjAuNXJlbTtcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgxcmVtLDF2dywxLjVyZW0pO1xuICAgICB9XG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgfVxuICAgIC5vcGVuLW5hdntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oci1saW5le1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB6LWluZGV4OiAyMDtcbiAgICB9IFxuICAgIC8qIGNvbnRlbnQgbWFpbiBob21lIHBhZ2UgKi9cbiAgICBtYWlue1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XCJsZWZ0IHJpZ2h0XCI7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgICB9XG4gICAgLyogZGVzdGluYXRpb24gb3Igc2Vjb25kIHBhZ2UgKi9cbiAgICAucGxhbmV0LWluZm8taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6MnJlbTtcbiAgICB9XG4gICAgLnBsYW5ldC1uYXYtaG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucGxhbmV0LWltYWdle1xuICAgICAgZmxleC1ncm93OiAxLjU7XG4gICAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgfVxuICAgIC5wbGFuZXQtaW5mb3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIFxuICAgIC8qIHRoaXJkIHBhZ2UgKi9cbiAgICAvKiB0aGlyZCBhbmQgZm91cnRoIGltYWdlIGhvbGRlciBzYW1lIHN0eWxlICovXG4gICAgLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwOyBcbiAgICB9XG4gICAgLmNyZXctaW1hZ2V7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogLTUlO1xuICAgICAgei1pbmRleDogLTEwO1xuICAgIH1cbiAgICAudGVjaG5vLWltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgcmlnaHQ6IDElO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgei1pbmRleDogLTEwO1xuICAgIH1cbiAgICAuY3Jldy1pbmZvLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICB9XG4gICAgLnBlcnNvbi1pbmZve1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLnBlcnNvbi1kZXRhaWwtaW5mb3tcbiAgICAgIGdyaWQtYXJlYTogdG9wO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgYWxpZ24tY29udGVudDogZW5kO1xuICAgIH1cbiAgICAuc2xpZGVyLWJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IGJvdHRvbTtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgfVxuICAgIC8qIGZvdXJ0aCBwYWdlIHN0eWxlICovXG4gICAgLmN1cnJlbnQtcGFnZXtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG4gICAgLnRlY2huby1wYWdle1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgfVxuICAgICAgLnRlY2huby1pbWFnZXtcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgfVxuICAgIC50ZWNobm9sb2d5LWluZm8taG9sZGVye1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2IHRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgIGFydGljbGVcIjtcbiAgICB9XG4gICAgLnRlY2huby1idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMnJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIHBhZGRpbmc6MC41cmVtIDtcbiAgICB9XG4gICAgLnRlY2huby1wYXJ7XG4gICAgICBncmlkLWFyZWE6IGFydGljbGU7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIH1cbiAgICAudGVjaG5vLWluZm97XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OjEuNXJlbTtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Rlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7TUFDRSxVQUFVO01BQ1YsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtLQUNDLFVBQVU7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsY0FBYztNQUNkLHdDQUF3QztNQUN4QyxTQUFTO0lBQ1g7SUFDQTtNQUNFLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixzQ0FBc0M7S0FDdkM7SUFDRDtNQUNFLGNBQWM7S0FDZjtJQUNEO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0lBQ0EsMkJBQTJCO0lBQzNCO01BQ0UsYUFBYTtNQUNiLGdDQUFnQztNQUNoQyxxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCO0lBQ0EsK0JBQStCO0lBQy9CO01BQ0UsZUFBZTtNQUNmLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsUUFBUTtJQUNWO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxjQUFjO01BQ2QsWUFBWTtJQUNkO0lBQ0E7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLGVBQWU7SUFDakI7O0lBRUEsZUFBZTtJQUNmLDZDQUE2QztJQUM3QztNQUNFLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsU0FBUztJQUNYO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFVBQVU7TUFDVixRQUFRO01BQ1IsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0Esc0JBQXNCO0lBQ3RCO01BQ0Usc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7TUFDRTtNQUNBLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixhQUFhO01BQ2I7MENBQ29DO0lBQ3RDO0lBQ0E7TUFDRSxjQUFjO01BQ2QsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQjtJQUNGO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtaW4td2lkdGg6OTAwcHgpIHtcXG4gICAgLmhvbWUtcGFnZS1zZWN0aW9ue1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICB9XFxuICAgIC5idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgIH1cXG4gICAgLmJpZy1jaXJjbGV7XFxuICAgICByaWdodDogNzAlO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtaGVhZGVye1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaW50cm8tdGl0bGV7XFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2e1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgwLjNyZW0sMXZ3LDAuNXJlbSk7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOjAuNXJlbTtcXG4gICAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMXJlbSwxdncsMS41cmVtKTtcXG4gICAgIH1cXG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICB9XFxuICAgIC5vcGVuLW5hdntcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5oci1saW5le1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHotaW5kZXg6IDIwO1xcbiAgICB9IFxcbiAgICAvKiBjb250ZW50IG1haW4gaG9tZSBwYWdlICovXFxuICAgIG1haW57XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcXCJsZWZ0IHJpZ2h0XFxcIjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmJ0bi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICB9XFxuICAgIC8qIGRlc3RpbmF0aW9uIG9yIHNlY29uZCBwYWdlICovXFxuICAgIC5wbGFuZXQtaW5mby1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6MnJlbTtcXG4gICAgfVxcbiAgICAucGxhbmV0LW5hdi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgfVxcbiAgICAucGxhbmV0LWltYWdle1xcbiAgICAgIGZsZXgtZ3JvdzogMS41O1xcbiAgICAgIGhlaWdodDogNDV2aDtcXG4gICAgfVxcbiAgICAucGxhbmV0LWluZm97XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuICAgIFxcbiAgICAvKiB0aGlyZCBwYWdlICovXFxuICAgIC8qIHRoaXJkIGFuZCBmb3VydGggaW1hZ2UgaG9sZGVyIHNhbWUgc3R5bGUgKi9cXG4gICAgLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwOyBcXG4gICAgfVxcbiAgICAuY3Jldy1pbWFnZXtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IC01JTtcXG4gICAgICB6LWluZGV4OiAtMTA7XFxuICAgIH1cXG4gICAgLnRlY2huby1pbWFnZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgIHJpZ2h0OiAxJTtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIGJvdHRvbTogMTAlO1xcbiAgICAgIHotaW5kZXg6IC0xMDtcXG4gICAgfVxcbiAgICAuY3Jldy1pbmZvLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgIH1cXG4gICAgLnBlcnNvbi1pbmZve1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgLnBlcnNvbi1kZXRhaWwtaW5mb3tcXG4gICAgICBncmlkLWFyZWE6IHRvcDtcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGVuZDtcXG4gICAgfVxcbiAgICAuc2xpZGVyLWJ0bi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBib3R0b207XFxuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIH1cXG4gICAgLyogZm91cnRoIHBhZ2Ugc3R5bGUgKi9cXG4gICAgLmN1cnJlbnQtcGFnZXtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgICBnYXA6IDEuNXJlbTtcXG4gICAgfVxcbiAgICAudGVjaG5vLXBhZ2V7XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIH1cXG4gICAgICAudGVjaG5vLWltYWdle1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgIH1cXG4gICAgLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XFxuICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXYgdGl0bGVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2ICBhcnRpY2xlXFxcIjtcXG4gICAgfVxcbiAgICAudGVjaG5vLWJ0bi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMnJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIH1cXG4gICAgLnRpdGxle1xcbiAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgcGFkZGluZzowLjVyZW0gO1xcbiAgICB9XFxuICAgIC50ZWNobm8tcGFye1xcbiAgICAgIGdyaWQtYXJlYTogYXJ0aWNsZTtcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICB9XFxuICAgIC50ZWNobm8taW5mb3tcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6MS41cmVtO1xcbiAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9iZWxsZWZhaXItdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9iYXJsb3ctY29uZGVuc2VkLXYxMi1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWNsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJlbGxlZmFpci1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IHN3YXA7IFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xufVxuLyogYmFybG93LWNvbmRlbnNlZC1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmMicpOyBcbn1cbip7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA3MTc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwdnc7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbnVse1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIGJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufSBcbm1haW57XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsICdCZWxsZWZhaXInLG1vbm9zcGFjZTtcbn1cbi5ob21lLXBhZ2UtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiB9XG4gICAvKiBob21lcGFnZSBsaW5rIHN0eWxlICovXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gYnV0dG9ue1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIGZvbnQtc2l6ZToxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG59XG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG59XG4uaG9tZS1wYWdlLW5hdiA+IGxpe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4ycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBuYXZTbGlkZSAxcyBlYXNlLWluLW91dDtcbiB9XG4ubmF2LW1vYmlsZS1mb2N1c3tcbiAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KSA7XG4gfVxuLmhvbWUtcGFnZS1uYXYgPiA6bnRoLWNoaWxkKDEpe1xuICBtYXJnaW4tdG9wOiAycmVtO1xuIH1cblxuLmhvbWUtcGFnZS1uYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDowLjJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tb2JpbGUtYnRue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDElO1xuICB6LWluZGV4OiAxMDAwO1xuIH1cbi5sb2dve1xuICB3aWR0aDogMC43cmVtO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi8qIHN0eWxlIGZvciBtb2JpbGUgbmF2ICovXG4ub3Blbi1uYXYsLmNsb3NlLW5hdntcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOjMlO1xuICB3aWR0aDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB9XG4ub3Blbi1uYXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbi5jbG9zZS1uYXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cbi5vcGVuLW5hdntcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaHItbGluZXtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxcmVtO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xuICB6LWluZGV4OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIG5hdlNsaWRle1xuICAgIDAle1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG4vKiBsaW5rcyBob2xkZXIgZm9yIG1vYmlsZSBuYXYgKi9cbltkYXRhLW5hdi1saW5rcz1cInRydWVcIl17XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIFxufVxuW2RhdGEtbmF2LWxpbmtzPVwiZmFsc2VcIl17XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBob21lIHBhZ2UgbWFpbiAqL1xubWFpbntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtYWluXCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlOyBcbiB9XG4uZXhwbG9yZS1idG57XG4gIHdpZHRoOiAxODBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MyU7XG4gIGxlZnQ6Mi41JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZGZmMDtcbiAgfVxuXG4uYmlnLWNpcmNsZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuIH1cbi5iaWctY2lyY2xlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG4uaG9tZS1wYWdlLXNlY3Rpb257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG59XG4uaW50cm8tdGV4dCwuaW50cm8tcGFye1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcbn1cbi5pbnRyby10aXRsZXtcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xufVxuLmludHJvLXBhcntcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGFye1xuICB3aWR0aDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbi5zdGFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICBhbmltYXRpb246ICBzaG9vdGluZ1N0YXJzIDQwcyBjdWJpYy1iZXppZXIoMC4zNiwgMC41NSwgMC41MSwgMC44MSk7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgc2hvb3RpbmdTdGFyc3tcbiAgMCUgeyBcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IFxuICB9XG4gIDEwJXtcbiAgICBvcGFjaXR5OiAxO1xuIH1cbiAxMDAlIHtcbiAgIG9wYWNpdHk6IDA7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwdncsIC05MHZoLCAwKTtcbiAgfVxufVxuLyogc2Vjb25kIHBhZ2UgKGRlc3RpbmF0aW9uKSBzdHlsZSAqL1xuLmN1cnJlbnQtcGFnZXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDowLjVyZW07XG4gIHBhZGRpbmc6MXJlbSA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcbn1cbi5saW5rLW5hbWUsLmxpbmstbnVtYmVye1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiB9XG4ubGluay1udW1iZXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjNGU0OTQ5O1xufVxuLnBsYW5ldC1pbmZvLWhvbGRlciwucGxhbmV0LW5hdi1ob2xkZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuLyogbmF2IGJ1dHRvbnMgICovXG4ucGxhbmV0cy1idG4taG9sZGVye1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnBsYW5ldC1uYW1lLW5hdntcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcbiB9XG4ucGxhbmV0LW5hbWUtbmF2OjphZnRlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucGxhbmV0LW5hbWUtbmF2OmhvdmVyOjphZnRlcntcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gfVxuIC5wbGFuZXQtbmFtZS1uYXY6Zm9jdXM6OmFmdGVye1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiB9XG4gLnBsYW5ldC1uYW1le1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiAucGxhbmV0LXBhcntcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuIH1cbiAuYWJvdXQtcGxhbmV0e1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAwLjNyZW07XG4gfVxuIC5wbGFuZXQtaW5mby1ob2xkZXJ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIC5kaXN0YW5jZS1pbmZvLC50cmF2ZWwtaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiB9XG4gLnBsYW5ldC1kaXN0YW5jZSwudHJhdmVsLXRpbWV7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiB9XG4gLnBsYW5ldC1pbWFnZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5wbGFuZXR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBhbmltYXRpb246IHJvdGF0ZVBsYW5ldCA1MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZm9yd2FyZHM7IFxufVxuIEBrZXlmcmFtZXMgcm90YXRlUGxhbmV0e1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAle1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiAvKiB0aGlyZCBwYWdlIHN0eWxlICovXG4gLmNyZXctbmFtZXtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gfVxuLnBlcnNvbi1pbmZve1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ0b3BcIlxuICBcImJvdHRvbVwiO1xuICBwYWRkaW5nOiAxcmVtO1xuIH1cbi5wZXJzb24tZGV0YWlsLWluZm97XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmV3LWJpb3tcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnNsaWRlci1idG4taG9sZGVye1xuICBncmlkLWFyZWE6IHRvcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzoxcmVtO1xufVxuLnNsaWRlci1idG57XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgOTIsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuIH1cbi5zbGlkZXItYnRuOmZvY3VzICwuc2xpZGVyLWJ0bi1jbGlja2VkLC5zbGlkZXItYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiB9XG4ucGVyc29uLWpvYntcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICM5NjkxOTE7XG4gfVxuIC8qIGZvcnRoIGFuZCB0aGlyZCBwYWdlIGltYWdlIGhvbGRlcixpbWFnZSBoYXMgc2FtZSBzdHlsZSAqL1xuLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xuIH0gIFxuIC5jcmV3LWltYWdlLC50ZWNobm8taW1hZ2V7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW47XG59XG4udGVjaG5vLWltYWdle1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gLypmb3VydGggcGFnZSBzdHlsZSAqL1xuLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiAudGVjaG5vLW5hbWV7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuIH1cbi50ZWNobm8tYnRuLWhvbGRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcblxuIH1cbiAudGVjaG5vLWJ0bntcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMnJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZDdkZmYwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjYsIDY1LCA2NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG4udGVjaG5vLWJ0bjpob3ZlcntcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLnRlY2huby1idG4tY2xpY2tlZCwgLnRlY2huby1idG46Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBtZWRpYSBxdWVyeSBmb3IgdGFibGV0IHNjcmVlbiAqL1xuQG1lZGlhIChtaW4td2lkdGg6NTAxcHgpIHtcbiAgLyogZmlyc3QgcGFnZSAqL1xuICAuaG9tZS1wYWdlLW5hdntcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDowLjVyZW07XG4gICB9XG4gIC5ob21lLW5hdi1idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcbiAgICB6LWluZGV4OiAtMTtcbiAgIH1cbiAgIC5ob21lLW5hdi1idG46aG92ZXI6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgfSBcbiAgLmhvbWUtcGFnZS1uYXYgPiBsaSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwydncsMC41cmVtKTtcbiAgICB9XG4gIC5ob21lLXBhZ2UtbmF2ID4gbGk6bnRoLWNoaWxkKDEpe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2LXRhYi1mb2N1c3tcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIHJnYigyNTUsIDI1NSwgMjU1KTsgXG4gIH0gXG4gIC5ob21lLXBhZ2Utc2VjdGlvbntcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICB9XG4gLmludHJvLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICB9XG4gIC8qIHNlY29uZCBwYWdlIGZvciB0YWIgKi9cbiAgLmN1cnJlbnQtcGFnZXtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLmxpbmstbnVtYmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuc2xpZGVyLWJ0bi1ob2xkZXJ7XG4gICAgZ3JpZC1hcmVhOiBib3R0b207XG4gIH1cbiAgLmNyZXctaW1hZ2UtaG9sZGVye1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAuY3Jldy1pbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIC5wZXJzb24taW5mb3tcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLyogdGhpcmQgcGFnZSAqL1xuIH1cbiAgQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pe1xuICAgIC8qIHN0b3Agc2hvb3Rpbmcgc3RhciBtb3ZlbWVudCAqL1xuICAuc3RhcntcbiAgICBkaXNwbGF5Om5vbmVcbiAgfVxuICAucGxhbmV0e1xuICAgIGFuaW1hdGlvbjogc3RvcFJvdGF0ZSAzcyBpbmZpbml0ZSA7IFxuICB9IFxufVxuLyogc3RvcCByb3RhdGlvbiBmbyBwbGFuZXQgaWYgcmVkdWNlZCAqL1xuIEBrZXlmcmFtZXMgc3RvcFJvdGF0ZXtcbiAgdG97XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgZnJvbXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuIH1cbiBcblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5QjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBNEU7QUFDOUU7QUFDQSxxQ0FBcUM7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNERBQW1GO0FBQ3JGO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osOENBQThDO0VBQzlDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7Q0FDQztFQUNDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7Q0FDL0I7R0FDRSx3QkFBd0I7QUFDM0I7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGlC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Q2xDO0VBQ0UsZUFBZTtFQUNmO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0dBQ1g7RUFDRDtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsV0FBVztHQUNaO0dBQ0E7SUFDQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEM7RUFDRjtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtDQUNEO0lBQ0csZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtFQUNBLHdCQUF3QjtFQUN4QjtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7R0FDZixnQkFBZ0I7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQSxlQUFlO0NBQ2hCO0VBQ0M7SUFDRSxnQ0FBZ0M7RUFDbEM7SUFDRTtFQUNGO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtBQUNBLHVDQUF1QztDQUN0QztFQUNDO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7Q0FDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBiZWxsZWZhaXItcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IFxcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9iZWxsZWZhaXItdjE0LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbi8qIGJhcmxvdy1jb25kZW5zZWQtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9iYXJsb3ctY29uZGVuc2VkLXYxMi1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpOyBcXG59XFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNzE3O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAyMDBtcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxudWx7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5he1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4gYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn0gXFxubWFpbntcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsICdCZWxsZWZhaXInLG1vbm9zcGFjZTtcXG59XFxuLmhvbWUtcGFnZS1oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiB9XFxuICAgLyogaG9tZXBhZ2UgbGluayBzdHlsZSAqL1xcbi5ob21lLXBhZ2UtbmF2ID4gbGkgPiBidXR0b257XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgZm9udC1zaXplOjEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxufVxcbi5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG59XFxuLmhvbWUtcGFnZS1uYXYgPiBsaXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFuaW1hdGlvbjogbmF2U2xpZGUgMXMgZWFzZS1pbi1vdXQ7XFxuIH1cXG4ubmF2LW1vYmlsZS1mb2N1c3tcXG4gICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSkgO1xcbiB9XFxuLmhvbWUtcGFnZS1uYXYgPiA6bnRoLWNoaWxkKDEpe1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gfVxcblxcbi5ob21lLXBhZ2UtbmF2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6MC4ycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDIlLCA0NyUsIDAuMik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1vYmlsZS1idG57XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMSU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiB9XFxuLmxvZ297XFxuICB3aWR0aDogMC43cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9sb2dvLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG4vKiBzdHlsZSBmb3IgbW9iaWxlIG5hdiAqL1xcbi5vcGVuLW5hdiwuY2xvc2UtbmF2e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOjMlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4ub3Blbi1uYXZ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2Zyk7XFxufVxcbi5jbG9zZS1uYXZ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24tY2xvc2Uuc3ZnKTtcXG59XFxuLm9wZW4tbmF2e1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5oci1saW5le1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxMzAsIDEzMCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5hdlNsaWRle1xcbiAgICAwJXtcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuLyogbGlua3MgaG9sZGVyIGZvciBtb2JpbGUgbmF2ICovXFxuW2RhdGEtbmF2LWxpbmtzPVxcXCJ0cnVlXFxcIl17XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgXFxufVxcbltkYXRhLW5hdi1saW5rcz1cXFwiZmFsc2VcXFwiXXtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBob21lIHBhZ2UgbWFpbiAqL1xcbm1haW57XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1haW5cXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gfVxcbi5leHBsb3JlLWJ0bntcXG4gIHdpZHRoOiAxODBweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDozJTtcXG4gIGxlZnQ6Mi41JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RmZjA7XFxuICB9XFxuXFxuLmJpZy1jaXJjbGV7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuIH1cXG4uYmlnLWNpcmNsZTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6aHNsYSgwLCAyJSwgNDclLCAwLjIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcbi5ob21lLXBhZ2Utc2VjdGlvbntcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbn1cXG4uaW50cm8tdGV4dCwuaW50cm8tcGFye1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG59XFxuLmludHJvLXRpdGxle1xcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxufVxcbi5pbnRyby1wYXJ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdGFye1xcbiAgd2lkdGg6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxuLnN0YXJ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcXG4gIGFuaW1hdGlvbjogIHNob290aW5nU3RhcnMgNDBzIGN1YmljLWJlemllcigwLjM2LCAwLjU1LCAwLjUxLCAwLjgxKTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob290aW5nU3RhcnN7XFxuICAwJSB7IFxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IFxcbiAgfVxcbiAgMTAle1xcbiAgICBvcGFjaXR5OiAxO1xcbiB9XFxuIDEwMCUge1xcbiAgIG9wYWNpdHk6IDA7XFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg5MHZ3LCAtOTB2aCwgMCk7XFxuICB9XFxufVxcbi8qIHNlY29uZCBwYWdlIChkZXN0aW5hdGlvbikgc3R5bGUgKi9cXG4uY3VycmVudC1wYWdle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOjAuNXJlbTtcXG4gIHBhZGRpbmc6MXJlbSA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXFxufVxcbi5saW5rLW5hbWUsLmxpbmstbnVtYmVye1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuIH1cXG4ubGluay1udW1iZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6ICM0ZTQ5NDk7XFxufVxcbi5wbGFuZXQtaW5mby1ob2xkZXIsLnBsYW5ldC1uYXYtaG9sZGVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4vKiBuYXYgYnV0dG9ucyAgKi9cXG4ucGxhbmV0cy1idG4taG9sZGVye1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGFuZXQtbmFtZS1uYXZ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcXG4gfVxcbi5wbGFuZXQtbmFtZS1uYXY6OmFmdGVye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiAnJztcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLnBsYW5ldC1uYW1lLW5hdjpob3Zlcjo6YWZ0ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gfVxcbiAucGxhbmV0LW5hbWUtbmF2OmZvY3VzOjphZnRlcntcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiB9XFxuIC5wbGFuZXQtbmFtZXtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG4gLnBsYW5ldC1wYXJ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiB9XFxuIC5hYm91dC1wbGFuZXR7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiB9XFxuIC5wbGFuZXQtaW5mby1ob2xkZXJ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiB9XFxuIC5kaXN0YW5jZS1pbmZvLC50cmF2ZWwtaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiB9XFxuIC5wbGFuZXQtZGlzdGFuY2UsLnRyYXZlbC10aW1le1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuIC5wbGFuZXQtaW1hZ2V7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5wbGFuZXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBhbmltYXRpb246IHJvdGF0ZVBsYW5ldCA1MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZm9yd2FyZHM7IFxcbn1cXG4gQGtleWZyYW1lcyByb3RhdGVQbGFuZXR7XFxuICAwJXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAle1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4gLyogdGhpcmQgcGFnZSBzdHlsZSAqL1xcbiAuY3Jldy1uYW1le1xcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuIH1cXG4ucGVyc29uLWluZm97XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwidG9wXFxcIlxcbiAgXFxcImJvdHRvbVxcXCI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiB9XFxuLnBlcnNvbi1kZXRhaWwtaW5mb3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNyZXctYmlve1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uc2xpZGVyLWJ0bi1ob2xkZXJ7XFxuICBncmlkLWFyZWE6IHRvcDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MXJlbTtcXG59XFxuLnNsaWRlci1idG57XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDkyLCA5Mik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuIH1cXG4uc2xpZGVyLWJ0bjpmb2N1cyAsLnNsaWRlci1idG4tY2xpY2tlZCwuc2xpZGVyLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiB9XFxuLnBlcnNvbi1qb2J7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogIzk2OTE5MTtcXG4gfVxcbiAvKiBmb3J0aCBhbmQgdGhpcmQgcGFnZSBpbWFnZSBob2xkZXIsaW1hZ2UgaGFzIHNhbWUgc3R5bGUgKi9cXG4uY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzB2aDtcXG4gfSAgXFxuIC5jcmV3LWltYWdlLC50ZWNobm8taW1hZ2V7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW47XFxufVxcbi50ZWNobm8taW1hZ2V7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbiAvKmZvdXJ0aCBwYWdlIHN0eWxlICovXFxuLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbiAudGVjaG5vLW5hbWV7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiB9XFxuLnRlY2huby1idG4taG9sZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG5cXG4gfVxcbiAudGVjaG5vLWJ0bntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICNkN2RmZjA7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjYsIDY1LCA2NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4udGVjaG5vLWJ0bjpob3ZlcntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnRlY2huby1idG4tY2xpY2tlZCwgLnRlY2huby1idG46Zm9jdXN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLyogbWVkaWEgcXVlcnkgZm9yIHRhYmxldCBzY3JlZW4gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDo1MDFweCkge1xcbiAgLyogZmlyc3QgcGFnZSAqL1xcbiAgLmhvbWUtcGFnZS1uYXZ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6MC41cmVtO1xcbiAgIH1cXG4gIC5ob21lLW5hdi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgfVxcbiAgIC5ob21lLW5hdi1idG46aG92ZXI6OmFmdGVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgfSBcXG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkge1xcbiAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMC4zcmVtLDJ2dywwLjVyZW0pO1xcbiAgICB9XFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpOm50aC1jaGlsZCgxKXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm5hdi10YWItZm9jdXN7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAgcmdiKDI1NSwgMjU1LCAyNTUpOyBcXG4gIH0gXFxuICAuaG9tZS1wYWdlLXNlY3Rpb257XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICB9XFxuIC5pbnRyby10aXRsZXtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgfVxcbiAgLyogc2Vjb25kIHBhZ2UgZm9yIHRhYiAqL1xcbiAgLmN1cnJlbnQtcGFnZXtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgfVxcbiAgLmxpbmstbnVtYmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbiAgLnNsaWRlci1idG4taG9sZGVye1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbTtcXG4gIH1cXG4gIC5jcmV3LWltYWdlLWhvbGRlcntcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIC5jcmV3LWltYWdle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTIwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuICAucGVyc29uLWluZm97XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gIH1cXG4gIC8qIHRoaXJkIHBhZ2UgKi9cXG4gfVxcbiAgQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pe1xcbiAgICAvKiBzdG9wIHNob290aW5nIHN0YXIgbW92ZW1lbnQgKi9cXG4gIC5zdGFye1xcbiAgICBkaXNwbGF5Om5vbmVcXG4gIH1cXG4gIC5wbGFuZXR7XFxuICAgIGFuaW1hdGlvbjogc3RvcFJvdGF0ZSAzcyBpbmZpbml0ZSA7IFxcbiAgfSBcXG59XFxuLyogc3RvcCByb3RhdGlvbiBmbyBwbGFuZXQgaWYgcmVkdWNlZCAqL1xcbiBAa2V5ZnJhbWVzIHN0b3BSb3RhdGV7XFxuICB0b3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICBmcm9te1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gfVxcbiBcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODhhM2M2OTJmZDM0ZWIzMTFlMDRjNDA1NWY0N2NiZTkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmMGVkN2YxNTU3YTJhM2ViZjY4ZmZlNDliYWE0NjEyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNmQ1MWNmNjFlOThjZTQ1ZWI2MTFiNjA2N2UxMjg2Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmQ2NDcxMjg0OTZkZGM2MzhhY2Q3OTgwZGIxMjgyOWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiNDJiNzc1ZWUwYjEyNDMwZjNhNDQxYzFmOWNhMTU4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzU0MGZiYjYxOTIzMDY0ZjA2NWUyZjgxNTMyZDMyMmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU0YzdkZWY0Mjc4MjRlZjU0M2MwOGMyZGVkNzM1ZDc4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmMzMGYzNWIwNWZjMGJjNGVlNDdhNTcxN2U0NDI4YTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY2NWUxOThhZGMyMmZjZGY3ODEwZTY5ZjRiZTU5MmZiLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGE5YTU0MjQ1ODhiNzNlYzYxYzJmNjdmNGI0YjQwNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjMjcxZjk5YmFiOGIwNmQ3YWI1OGRiNTdhNTNjMDlhLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDY4YjkyMmM2OWJmNTQ5OWI0YmMzN2ZjMzg1ZWE2YjUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUwMTMxZTI3ZTc1MWVhZDFhOTIyYzAxM2Y1ZGRhNzE1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZjU1ZDM0NmQ4YjZjZmQ5NWFiNzZkNjAwZDgwNTY2YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2U5NWY3ZDBhMTZmZTJlYmY0YzY5OTJjNGQyODYyMDcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMzYmUzMjM4M2YzMWQwZjc2ZDk2NDI0OTMzMzI2YWQ1LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWIyMjRjODY2MzI1MTI3MGQ3OWYzYzU5NDlmNmVmZWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdmNTVmNzIxYjRhNjRiN2E1NmE4MWU3OGVjNjhiZDhkLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDI4N2QwNzE4MmRlMzAxNTk1MmY0NGRjNzQ1N2ExYWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI1YTNjOTBlOWM4ZWViMmNiNjhkYzU0NTIzMWI5ZDc4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDRiMDc4ZjljZTE3ZTY4NmFlOTlkZWM5MjBlNDMzM2IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgwNzM4YmM2MWU1ZDEyMTdhMTlhMjAxYmU3NWY4YmE4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2RmMzg2NGVjYmZkZjIwZThjM2JjNTI2NGI2YjUzZTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEzZjdhZGVjYmNiM2MzZjE3MGQ4NTI1MDU4NGZhN2JiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzllZmNjMzI4MWZhNjgwMTA3NzJiYWMxNWVhMzM5OC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjdiNTg5YjNjMGM1ZWYwODExZDQxNThiZmE1Y2VlNjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUzZTNhMWMzMGNkNGZiYTg5YTYyYzM2NzU2ZTdiMzkzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0OGMzOGIwMjgyMTdlZTAwOTZjNGI2MGQ4MDQ2YzA4Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDI4MWE1OWZmNzE4NjQ4OGZlNmFkZTVkOWVmNzc0NWUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ2NzJkYTgxZDVmZjNhZGE3MzAxYzAwNzdlNzNmODE3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZjNjYTVjMDVhM2U4NzE5MWVhN2YxODJmY2JlMzgzMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGM3NTg5NTVhMTc4YmRjYzMyMzAwZmNmNGMzZmQwOGQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkMGFjMTM4YWZlZjk4YzE2NjZhZmIyOGUzYmNhMTMwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NTUyM2RiNWRlMTMwNTdmMzZlYTc3MTk2MWE1MWE5Ni5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LWRlc2t0b3AuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWNyZXctbW9iaWxlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy9iYWNrZ3JvdW5kLWNyZXctbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LWJnIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1hbm91c2hlaC1hbnNhcmkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmdcIixcblx0XCIuL2ltYWdlLWRvdWdsYXMtaHVybGV5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmdcIixcblx0XCIuL2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmdcIixcblx0XCIuL2ltYWdlLXZpY3Rvci1nbG92ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLXZpY3Rvci1nbG92ZXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3JldyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicFwiLFxuXHRcIi4vaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS53ZWJwXCIsXG5cdFwiLi9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLndlYnBcIixcblx0XCIuL2ltYWdlLXZpY3Rvci1nbG92ZXIud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnBcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3IHN5bmMgcmVjdXJzaXZlIFxcXFwuKHdlYnApJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLWRlc2t0b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZy9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLWRlc2t0b3AuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZy9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtZXVyb3BhLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtZXVyb3BhLnBuZ1wiLFxuXHRcIi4vaW1hZ2UtbWFycy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMucG5nXCIsXG5cdFwiLi9pbWFnZS1tb29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmdcIixcblx0XCIuL2ltYWdlLXRpdGFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24gc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1ldXJvcGEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtZXVyb3BhLndlYnBcIixcblx0XCIuL2ltYWdlLW1hcnMud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy53ZWJwXCIsXG5cdFwiLi9pbWFnZS1tb29uLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicFwiLFxuXHRcIi4vaW1hZ2UtdGl0YW4ud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ud2VicFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uIHN5bmMgXFxcXC4od2VicCkkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtaG9tZS1tb2JpbGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1tb2JpbGUuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC10ZWNobm9sb2d5LW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktdGFibGV0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtbGF1bmNoLXZlaGljbGUtbGFuZHNjYXBlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcvaW1hZ2UtbGF1bmNoLXZlaGljbGUtbGFuZHNjYXBlLmpwZ1wiLFxuXHRcIi4vaW1hZ2Utc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLWxhbmRzY2FwZS5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlcG9ydC1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZXBvcnQtbGFuZHNjYXBlLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnIHN5bmMgXFxcXC4oanBnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtbGF1bmNoLXZlaGljbGUtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZ1wiLFxuXHRcIi4vaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvaW1hZ2Utc3BhY2Vwb3J0LXBvcnRyYWl0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcgc3luYyBcXFxcLihqcGcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZGVza3RvcC5jc3NcIjtcbmltcG9ydCB7IGhvbWVQYWdlU2VjdGlvbixzZWNvbmRQYWdlLGRlc3RpbmF0aW9uUGxhbmV0LHBsYW5ldEltYWdlLCBcbiAgICB0aGlyZFBhZ2UscGVyc29uSW5mbyxwZXJzb25JbWFnZSxcbiAgICBmb3VydGhQYWdlLHRlY2hub0luZm8sY2hvb3NlVGVjaG5vSW1hZ2UsXG4gICAgY2hvb3NlQmdJbWFnZSxuYXZCdG5Gb2N1cyxzbGlkZXJCdG5Gb2N1cyx0YWJGb2N1c1xufSBmcm9tIFwiLi9kb20tY29tcG9uZW50XCI7XG5jb25zdCBwYWdlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhZ2UtbmF2XVwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuLW1lbnVdXCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlLW1lbnVdXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdi1saW5rc11cIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMXB4KVwiKTtcblxuXG4gICAgXG5jaG9vc2VCZ0ltYWdlKGJvZHksMCk7XG5ob21lUGFnZVNlY3Rpb24obWFpbik7XG5uYXZCdG5Gb2N1cygwKTtcbnBhZ2VOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZT0+e1xuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1ob21lLWJ0bl1cIikpe1xuICAgICAgICBob21lUGFnZVNlY3Rpb24obWFpbik7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwwKTtcbiAgICAgICAgLy9mb3IgbW9iaWxlIGhpZGVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kZXN0aW5hdGlvbi1idG5dXCIpKXtcbiAgICAgICAgc2Vjb25kUGFnZShtYWluKTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hdj1cIjBcIl1gKTtcbiAgICAgICAgYnRuLmZvY3VzKCk7XG4gICAgICAgIHBsYW5ldEltYWdlKGltYWdlSG9sZGVyLDIpOyAvLzIgcmVwIG1vb24gaW1hZ2VcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICAgICAgY2hvb3NlQmdJbWFnZShib2R5LDEpO1xuICAgICAgICAvL2hpZGUgbW9iaWxlIG1lbnVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1jcmV3LWJ0bl1cIikpe1xuICAgICAgICB0aGlyZFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMyk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDMpO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMik7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDMpO1xuICAgICAgICAvL2ZvciBtb2JpbGVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10ZWNobm9sb2d5LWJ0bl1cIikpe1xuICAgICAgICBmb3VydGhQYWdlKG1haW4pO1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMCk7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDApO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMyk7XG4gICAgICAgIHRhYkZvY3VzKDApO1xuICAgICAgICAvL2ZvciBtb2JpbGUgaGlkZSBtZW51XG4gICAgICAgIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwiZmFsc2VcIik7XG4gICAgICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBuYXZCdG5Gb2N1cygzKTtcbiAgICB9XG59KTtcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1leHBsb3JlLWJ0bl1cIikpe1xuICAgICAgICBzZWNvbmRQYWdlKG1haW4pO1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBwbGFuZXRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmF2PVwiMFwiXWApO1xuICAgICAgICBidG4uZm9jdXMoKTtcbiAgICAgICAgY2hvb3NlSW1hZ2UocGxhbmV0SW1hZ2UsMCk7XG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMCk7XG4gICAgICAgIG5hdkJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICAvL3NlY29uZCBwYWdlIGV2ZW50cyBcbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjBcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwyKTtcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIxXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMSk7IC8vMSByZXAgbWFyc1xuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwwKTsgLy8wIHJlcCBldXJvcGFcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwyKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIzXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMyk7Ly8zIHJlcCB0aXRhblxuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDMpO1xuICAgIH1cbiAgICAvL3RoaXJkIHBhZ2UgZXZlbnRcbiAgXG4gICAgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtY3Jldz1cIjBcIl1gKSl7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIGNvbnN0IHNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3Jldz1cIjBcIl1gKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwwKTtcbiAgICAgICAgc2xpZGVCdG4uZm9jdXMoKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMCk7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLWNyZXc9XCIxXCJdYCkpe1xuICAgICAgICBjb25zdCBjcmV3QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWJpb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctaW1hZ2VdXCIpO1xuICAgICAgICBjb25zdCBzbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNyZXc9XCIxXCJdYCk7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMSk7XG4gICAgICAgIHNsaWRlQnRuLmZvY3VzKCk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDEpO1xuICAgICAgICBzbGlkZXJCdG5Gb2N1cygxKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiMlwiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiMlwiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDIpO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwyKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMik7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtY3Jldz1cIjNcIl1gKSl7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIGNvbnN0IHNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3Jldz1cIjNcIl1gKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwzKTtcbiAgICAgICAgc2xpZGVCdG4uZm9jdXMoKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMyk7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDMpO1xuICAgIH1cbiAgICAvL2ZvdXJ0aCBwYWdlIGV2ZW50XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS10ZWNobm9sb2d5PVwiMFwiXWApKXtcbiAgICAgICAgY29uc3QgdGVjaEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWluZm9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW1hZ2VdXCIpO1xuICAgICAgICB0ZWNobm9JbmZvKHRlY2hBcnRpY2xlLDApO1xuICAgICAgICBjaG9vc2VUZWNobm9JbWFnZShpbWFnZUhvbGRlciwwKTtcbiAgICAgICAgdGFiRm9jdXMoMCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtdGVjaG5vbG9neT1cIjFcIl1gKSl7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwxKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMSk7XG4gICAgICAgIHRhYkZvY3VzKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLXRlY2hub2xvZ3k9XCIyXCJdYCkpe1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMik7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDIpO1xuICAgICAgICB0YWJGb2N1cygyKTtcbiAgICB9XG59KTtcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGlmKG5hdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiKSA9PT0gXCJmYWxzZVwiKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJ0cnVlXCIpO1xuICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9XCJub25lXCI7XG4gICAgfVxufSk7XG5jbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYobmF2LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIpID09PSBcInRydWVcIil7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwiZmFsc2VcIik7XG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5sYXJnZVNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCgpPT57XG4gICAgLy9yZW1vdmUgbW9iaWxlIGhvdmVyIGFuZCBmb2N1cyBzdHlsZVxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtcGFnZS1uYXYnKS5jaGlsZHJlbjsgXG4gICAgY29uc3QgbGkgPSBbLi4udWxdO1xuICAgIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09dHJ1ZSl7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwidHJ1ZVwiKTtcbiAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGxpLmZvckVhY2gobmF2PT57XG4gICAgICAgICAgICBuYXYuc3R5bGUuYm9yZGVyUmlnaHQ9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PWZhbHNlKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn0pO1xuaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJ0cnVlXCIpO1xuICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5lbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJfZGF0YSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJtYXAiLCJib2R5IiwiZG9jdW1lbnQiLCJob21lUGFnZVNlY3Rpb24iLCJlbGUiLCJ0ZW1wbGF0ZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwicGxhbmV0SW1hZ2UiLCJudW1iZXIiLCJtb2JpbGVTY3JlZW4iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibGFyZ2VTY3JlZW4iLCJwbGFuZXRJbWFnZXNUYWIiLCJjb250ZXh0IiwicGxhbmV0TGFyZ2VJbWFnZSIsIm1hdGNoZXMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNlY29uZFBhZ2UiLCJkZXN0aW5hdGlvblBsYW5ldCIsImRhdGEiLCJkZXN0aW5hdGlvbnMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkaXN0YW5jZSIsInRyYXZlbCIsInRoaXJkUGFnZSIsInBlcnNvbkluZm8iLCJiaW9UZW1wbGF0ZSIsImNyZXciLCJyb2xlIiwiYmlvIiwicGVyc29uSW1hZ2VPcmRlciIsInBlcnNvbkltYWdlIiwidGFiSW1hZ2VzIiwibGFyZ2VJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZm91cnRoUGFnZSIsImltYWdlT3JkZXIiLCJjaG9vc2VUZWNobm9JbWFnZSIsInRlY2hub0luZm8iLCJ0ZWNobm9sb2d5IiwiY2hvb3NlQmdJbWFnZSIsInRhYlNjcmVlbiIsInBpY2tCZyIsImhvbWVJbWFnZXMiLCJkZXN0aW5hdGlvbkltYWdlcyIsImNyZXdJbWFnZXMiLCJ0ZWNobm9JbWFnZXMiLCJpbWFnZXNUYWIiLCJuYXZCdG5Gb2N1cyIsInVsIiwicXVlcnlTZWxlY3RvciIsImFsbE5hdiIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm5hdiIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzbGlkZXJCdG5Gb2N1cyIsInNsaWRlckJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5BcnJheSIsImZvY3VzIiwic2xpZGVyIiwidGFiRm9jdXMiLCJidG5zIiwiYnRuIiwiX2RvbUNvbXBvbmVudCIsInBhZ2VOYXYiLCJtYWluIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImFydGljbGUiLCJpbWFnZUhvbGRlciIsImNyZXdBcnRpY2xlIiwidGVjaEFydGljbGUiLCJjaG9vc2VJbWFnZSIsInNsaWRlQnRuIiwiZ2V0QXR0cmlidXRlIiwibGkiLCJib3JkZXJSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=