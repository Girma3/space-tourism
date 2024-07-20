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
//function to import image using require.context
function importAll(r) {
  return r.keys().map(r);
}
const logo = document.querySelector('.logo');
const logoSvg = importAll(__webpack_require__("./src/assets/images/icons sync \\.(svg)$"));
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
logo.style.backgroundImage = `url("${logoSvg[2].default}")`;
openMenu.style.backgroundImage = `url("${logoSvg[1].default}")`;
closeMenu.style.backgroundImage = `url("${logoSvg[0].default}")`;
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
      bottom: -15%;
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
}`, "",{"version":3,"sources":["webpack://./src/desktop.css"],"names":[],"mappings":"AAAA;IACI;MACE,UAAU;MACV,eAAe;MACf,mBAAmB;MACnB,kBAAkB;MAClB,iBAAiB;IACnB;IACA;MACE,gBAAgB;IAClB;IACA;KACC,UAAU;IACX;IACA;MACE,aAAa;MACb,mBAAmB;IACrB;IACA;MACE,eAAe;IACjB;IACA;MACE,cAAc;MACd,wCAAwC;MACxC,SAAS;IACX;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,mBAAmB;MACnB,UAAU;MACV,sCAAsC;KACvC;IACD;MACE,cAAc;KACf;IACD;MACE,aAAa;IACf;IACA;MACE,cAAc;MACd,WAAW;IACb;IACA,2BAA2B;IAC3B;MACE,aAAa;MACb,gCAAgC;MAChC,qBAAqB;IACvB;IACA;MACE,gBAAgB;MAChB,eAAe;MACf,kBAAkB;IACpB;IACA,+BAA+B;IAC/B;MACE,eAAe;MACf,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;MACE,gBAAgB;MAChB,iBAAiB;IACnB;IACA;MACE,cAAc;MACd,YAAY;IACd;IACA;MACE,aAAa;MACb,8BAA8B;MAC9B,eAAe;IACjB;;IAEA,eAAe;IACf,6CAA6C;IAC7C;MACE,gBAAgB;MAChB,QAAQ;MACR,SAAS;IACX;IACA;MACE,kBAAkB;MAClB,WAAW;MACX,UAAU;MACV,QAAQ;MACR,YAAY;MACZ,YAAY;IACd;IACA;MACE,kBAAkB;MAClB,WAAW;MACX,SAAS;MACT,UAAU;MACV,WAAW;MACX,YAAY;IACd;IACA;MACE,eAAe;MACf,mBAAmB;MACnB,UAAU;MACV,kBAAkB;KACnB;IACD;MACE,UAAU;IACZ;IACA;MACE,cAAc;MACd,iBAAiB;MACjB,aAAa;MACb,kBAAkB;IACpB;IACA;MACE,iBAAiB;MACjB,mBAAmB;MACnB,kBAAkB;IACpB;IACA,sBAAsB;IACtB;MACE,sBAAsB;MACtB,eAAe;MACf,WAAW;IACb;IACA;QACI,eAAe;IACnB;MACE;MACA,gBAAgB;IAClB;IACA;MACE,UAAU;MACV,iBAAiB;MACjB,aAAa;MACb;0CACoC;IACtC;IACA;MACE,cAAc;MACd,aAAa;MACb,sBAAsB;MACtB,SAAS;MACT,mBAAmB;MACnB,iBAAiB;MACjB,gBAAgB;IAClB;IACA;MACE,gBAAgB;MAChB,iBAAiB;MACjB,eAAe;IACjB;IACA;MACE,kBAAkB;MAClB,iBAAiB;MACjB;IACF;MACE,UAAU;MACV,mBAAmB;MACnB,kBAAkB;MAClB,aAAa;IACf;AACJ","sourcesContent":["@media (min-width:900px) {\n    .home-page-section{\n      width: 50%;\n      grid-area: left;\n      justify-self: start;\n      padding-left: 3rem;\n      padding-top: 5rem;\n    }\n    .btn-holder{\n      grid-area: right;\n    }\n    .big-circle{\n     right: 70%;\n    }\n    .home-page-header{\n      padding: 1rem;\n      align-items: center;\n    }\n    .intro-title{\n      font-size: 5rem;\n    }\n    .home-page-nav{\n      margin-left: 0;\n      padding-inline: clamp(0.3rem,1vw,0.5rem);\n      gap: 1rem;\n    }\n    .home-page-nav > li{\n      padding: 0;\n      flex-direction: row;\n      align-items: center;\n      gap:0.5rem;\n      padding-inline: clamp(1rem,1vw,1.5rem);\n     }\n    .home-page-nav > li > span{\n      display: block;\n     }\n    .open-nav{\n      display: none;\n    }\n    .hr-line{\n      display: block;\n      z-index: 20;\n    } \n    /* content main home page */\n    main{\n      display: grid;\n      grid-template-areas:\"left right\";\n      align-content: center;\n    }\n    .btn-holder{\n      grid-area: right;\n      align-self: end;\n      justify-self: left;\n    }\n    /* destination or second page */\n    .planet-info-holder{\n      grid-area: left;\n      display: flex;\n      flex-direction: column;\n      gap:2rem;\n    }\n    .planet-nav-holder{\n      grid-area: right;\n      padding-top: 2rem;\n    }\n    .planet-image{\n      flex-grow: 1.5;\n      height: 45vh;\n    }\n    .planet-info{\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n    }\n    \n    /* third page */\n    /* third and fourth image holder same style */\n    .crew-image-holder,.techno-image-holder{\n      grid-area: right;\n      width: 0;\n      height: 0; \n    }\n    .crew-image{\n      position: absolute;\n      height: 80%;\n      width: 40%;\n      right: 0;\n      bottom: -15%;\n      z-index: -10;\n    }\n    .techno-image {\n      position: absolute;\n      height: 70%;\n      right: 1%;\n      width: 40%;\n      bottom: 10%;\n      z-index: -10;\n    }\n    .crew-info-holder{\n      grid-area: left;\n      justify-self: start;\n      width: 50%;\n      padding-left: 2rem;\n     }\n    .person-info{\n      padding: 0;\n    }\n    .person-detail-info{\n      grid-area: top;\n      text-align: start;\n      height: 300px;\n      align-content: end;\n    }\n    .slider-btn-holder{\n      grid-area: bottom;\n      justify-self: start;\n      margin-top: 1.5rem;\n    }\n    /* fourth page style */\n    .current-page{\n      justify-content: start;\n      padding: 1.5rem;\n      gap: 1.5rem;\n    }\n    .techno-page{\n        padding: 1.5rem;\n    }\n      .techno-image{\n      grid-area: right;\n    }\n    .technology-info-holder{\n      width: 60%;\n      padding-top: 2rem;\n      display: grid;\n      grid-template-areas: \"nav title\" \n                            \"nav  article\";\n    }\n    .techno-btn-holder{\n      grid-area: nav;\n      display: flex;\n      flex-direction: column;\n      gap: 2rem;\n      padding-right: 1rem;\n      align-self: start;\n      margin-top: 1rem;\n    }\n    .title{\n      grid-area: title;\n      text-align: start;\n      padding:0.5rem ;\n    }\n    .techno-par{\n      grid-area: article;\n      text-align: start;\n      }\n    .techno-info{\n      width: 90%;\n      letter-spacing: 2px;\n      line-height:1.5rem;\n      height: 300px;\n    }\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-hamburger.svg */ "./src/assets/images/icons/icon-hamburger.svg?40f7"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/icon-close.svg */ "./src/assets/images/icons/icon-close.svg?6a96"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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
 

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,4DAA4E;AAC9E;AACA,qCAAqC;AACrC;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;EAChB,4DAAmF;AACrF;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;EACZ,8CAA8C;EAC9C,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;AACvB;CACC;EACC,eAAe;AACjB;AACA;EACE,sDAAsD;AACxD;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;CAC/B;GACE,wBAAwB;AAC3B;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,kCAAkC;CACnC;AACD;GACG,2CAA2C;CAC7C;AACD;EACE,gBAAgB;CACjB;;AAED;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,uCAAuC;EACvC,aAAa;EACb,UAAU;EACV,aAAa;EACb,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,aAAa;CACd;AACD;EACE,aAAa;EACb,eAAe;EACf,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;AACjB;AACA,yBAAyB;AACzB;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW;EACX,yBAAyB;EACzB,2BAA2B;EAC3B,eAAe;EACf,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;AACd;AACA;EACE,yDAA+D;AACjE;AACA;EACE,yDAA2D;AAC7D;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,oCAAoC;EACpC,UAAU;AACZ;;AAEA;IACI;MACE,YAAY;MACZ,0BAA0B;IAC5B;IACA;MACE,UAAU;MACV,yBAAyB;IAC3B;AACJ;AACA,gCAAgC;AAChC;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,qBAAqB;;AAEvB;AACA;EACE,UAAU;EACV,aAAa;AACf;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;EACrB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,MAAM;EACN,SAAS;EACT,yBAAyB;EACzB;;AAEF;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,sCAAsC;EACtC,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;AACjC;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB;AACF;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,gEAAgE;EAChE,oCAAoC;EACpC,kEAAkE;EAClE,8BAA8B;EAC9B,mCAAmC;EACnC,6BAA6B;AAC/B;AACA;EACE;GACC,+BAA+B;EAChC;EACA;IACE,UAAU;CACb;CACA;GACE,UAAU;GACV,sCAAsC;EACvC;AACF;AACA,oCAAoC;AACpC;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb;AACF;AACA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,0BAA0B;AAC5B;AACA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB;CACD;AACD;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,2CAA2C;EAC3C,oBAAoB;EACpB,uCAAuC;AACzC;AACA;EACE,oBAAoB;CACrB;CACA;EACC,oBAAoB;CACrB;CACA;EACC,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;CACnB;CACA;EACC,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;EACxB,yDAAyD;AAC3D;CACC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;CACC,qBAAqB;CACrB;EACC,sBAAsB;EACtB,yBAAyB;EACzB,eAAe;EACf,wBAAwB;EACxB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,aAAa;EACb;;UAEQ;EACR,aAAa;CACd;AACD;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,cAAc;EACd,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;EACzB,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;CACf;CACA,2DAA2D;AAC5D;EACE,WAAW;EACX,YAAY;CACb;CACA;EACC,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,sBAAsB;EACtB;CACD,qBAAqB;AACtB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;AACf;CACC;EACC,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,sBAAsB;;CAEvB;CACA;EACC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iCAAiC;EACjC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA,kCAAkC;AAClC;EACE,eAAe;EACf;IACE,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,UAAU;IACV,WAAW;IACX,UAAU;GACX;EACD;IACE,WAAW;IACX,iBAAiB;IACjB,MAAM;IACN,OAAO;IACP,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,8BAA8B;IAC9B,uBAAuB;IACvB,sCAAsC;IACtC,WAAW;GACZ;GACA;IACC,mBAAmB;IACnB,sBAAsB;EACxB;EACA;IACE,wCAAwC;IACxC;EACF;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;CACD;IACG,eAAe;IACf,mBAAmB;EACrB;EACA,wBAAwB;EACxB;IACE,eAAe;EACjB;EACA;IACE,cAAc;GACf,gBAAgB;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,QAAQ;IACR,SAAS;EACX;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA,eAAe;CAChB;EACC;IACE,gCAAgC;EAClC;IACE;EACF;EACA;IACE,kCAAkC;EACpC;AACF;AACA,uCAAuC;CACtC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;CACD","sourcesContent":["/* bellefair-regular - latin */\n@font-face {\n  font-display: swap; \n  font-family: 'Bellefair';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/bellefair-v14-latin-regular.woff2') format('woff2');\n}\n/* barlow-condensed-regular - latin */\n@font-face {\n  font-display: swap;\n  font-family: 'Barlow Condensed';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/barlow-condensed-v12-latin-regular.woff2') format('woff2'); \n}\n*{\n  margin: 0;\n  padding: 0;\n}\nbody{\n  background-color: #060717;\n  background-size: cover; \n  background-repeat: no-repeat;\n  width: 100vw;\n  transition: background-image 200ms ease-in-out;\n  overflow-x: hidden;\n}\nul{\n  list-style: none;\n}\na{\n  text-decoration: none;\n}\n button{\n  cursor: pointer;\n} \nmain{\n  font-family: 'Barlow Condensed', 'Bellefair',monospace;\n}\n.home-page-header{\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n }\n   /* homepage link style */\n.home-page-nav > li > button{\n  border: none;\n  padding-block: 1rem;\n  font-size:1.2rem;\n  background-color: inherit;\n  color: white;\n  text-align: start;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li > span{\n  font-size: 1.2rem;\n  font-weight: 700;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li{\n  position: relative;\n  display: flex;\n  gap: 0.2rem;\n  align-items: center;\n  width: 100%;\n  animation: navSlide 1s ease-in-out;\n }\n.nav-mobile-focus{\n   border-right: 2px solid rgb(255, 255, 255) ;\n }\n.home-page-nav > :nth-child(1){\n  margin-top: 2rem;\n }\n\n.home-page-nav{\n  display: flex;\n  flex-direction: column;\n  gap:0.2rem;\n  position: absolute;\n  right: 0;\n  background-color: hsla(0, 2%, 47%, 0.2);\n  padding: 1rem;\n  width: 60%;\n  height: 100vh;\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.mobile-btn{\n  position: absolute;\n  right: 0;\n  top: 1%;\n  z-index: 1000;\n }\n.logo{\n  width: 0.7rem;\n  aspect-ratio: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  padding: 1.5rem;\n}\n/* style for mobile nav */\n.open-nav,.close-nav{\n  display: none;\n  position: absolute;\n  right: 0;\n  top:3%;\n  width: 2rem;\n  background-color: inherit;\n  transform: translateX(-10%);\n  aspect-ratio: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n}\n.open-nav{\n  background-image: url(./assets/images/icons/icon-hamburger.svg);\n}\n.close-nav{\n  background-image: url(./assets/images/icons/icon-close.svg);\n}\n.open-nav{\n  display: block;\n}\n.hr-line{\n  display: none;\n  position: relative;\n  left: 1rem;\n  width: 50%;\n  height: 2px;\n  background-color: rgb(130, 130, 130);\n  z-index: 1;\n}\n\n@keyframes navSlide{\n    0%{\n      opacity: 0.5;\n      transform: translateX(20%);\n    }\n    100%{\n      opacity: 1;\n      transform: translateX(0%);\n    }\n}\n/* links holder for mobile nav */\n[data-nav-links=\"true\"]{\n  opacity: 1;\n  display: flex;\n  color: white;\n  border-radius: 0.2rem;\n    \n}\n[data-nav-links=\"false\"]{\n  opacity: 0;\n  display: none;\n}\n/* home page main */\nmain{\n  display: grid;\n  grid-template-areas: \"main\";\n  justify-items: center;\n  color: white; \n }\n.explore-btn{\n  width: 180px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  margin: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border: none;\n  position:absolute;\n  top:3%;\n  left:2.5%;\n  background-color: #d7dff0;\n  }\n\n.big-circle{\n  position: relative;\n  width: 250px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n }\n.big-circle:hover{\n  background-color:hsla(0, 2%, 47%, 0.2);\n  backdrop-filter: blur(2px);\n}\n.home-page-section{\n  color: white;\n  padding-inline: 1rem;\n}\n.intro-text,.intro-par{\n  font-size: 1rem;\n  letter-spacing: 1.5px;\n  line-height: 1.3rem;\n  word-spacing: 1px;\n  text-align: center;\n  font-family: 'Barlow Condensed';\n}\n.intro-title{\n  padding-block: 0.5rem;\n  font-size: 3rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: 'Bellefair';\n}\n.intro-par{\n  font-size: 1rem;\n  text-align: justify;\n  width: 100%;\n}\n.star{\n  width: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  }\n.star{\n  position: absolute;\n  bottom: 0;\n  opacity: 0;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation:  shootingStars 40s cubic-bezier(0.36, 0.55, 0.51, 0.81);\n  animation-direction: alternate;\n  animation-iteration-count: infinite; \n  animation-fill-mode: forwards;\n}\n@keyframes shootingStars{\n  0% { \n   transform: translate3d(0, 0, 0); \n  }\n  10%{\n    opacity: 1;\n }\n 100% {\n   opacity: 0;\n   transform: translate3d(90vw, -90vh, 0);\n  }\n}\n/* second page (destination) style */\n.current-page{\n  display: flex;\n  justify-content: center;\n  gap:0.5rem;\n  padding:1rem ;\n  font-family: 'Barlow Condensed'\n}\n.link-name,.link-number{\n  font-family: 'Barlow Condensed';\n  letter-spacing: 2px;\n  font-weight: 500;\n  font-size: 1.5rem;\n }\n.link-number{\n  display: none;\n  color: #4e4949;\n}\n.planet-info-holder,.planet-nav-holder{\n  display: grid;\n  grid-template-columns: 1fr;\n}\n/* nav buttons  */\n.planets-btn-holder{\n  justify-self: center;\n  align-content: center;\n}\n.planet-name-nav{\n  border: none;\n  background-color: inherit;\n  color: white;\n  padding: 0.6rem;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  font-family: 'Barlow Condensed'\n }\n.planet-name-nav::after{\n  display: block;\n  content: '';\n  margin-top: 0.5rem;\n  border-bottom: solid 3px rgb(255, 255, 255);\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n}\n.planet-name-nav:hover::after{\n  transform: scaleX(1);\n }\n .planet-name-nav:focus::after{\n  transform: scaleX(1);\n }\n .planet-name{\n  font-size: 3rem;\n  font-family: 'Bellefair';\n  font-weight: 500;\n  text-align: center;\n }\n .planet-par{\n  letter-spacing: 2px;\n  line-height: 1.3rem;\n  max-width: 500px;\n  text-align: center;\n  padding: 1rem;\n }\n .about-planet{\n  text-align: justify;\n  padding: 0.3rem;\n }\n .planet-info-holder{\n  text-align: left;\n }\n .distance-info,.travel-info{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n }\n .planet-distance,.travel-time{\n  font-size: 2rem;\n }\n .planet-image{\n  width: 100%;\n  height: 40vh;\n  padding: 1rem;\n}\n.planet{\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  animation: rotatePlanet 50s ease-in-out infinite forwards; \n}\n @keyframes rotatePlanet{\n  0%{\n    transform: rotate(0deg);\n  }\n  100%{\n    transform: rotate(360deg);\n  }\n}\n /* third page style */\n .crew-name{\n  padding-bottom: 0.4rem;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-family: 'Bellefair';\n  letter-spacing: 2px;\n  word-spacing: 2px;\n  word-wrap: break-word;\n }\n.person-info{\n  display: grid;\n  grid-template-areas: \n  \"top\"\n  \"bottom\";\n  padding: 1rem;\n }\n.person-detail-info{\n  text-align: center;\n}\n.crew-bio{\n  line-height: 1.2rem;\n  letter-spacing: 2px;\n  word-wrap: break-word;\n  height: 150px;\n}\n.slider-btn-holder{\n  grid-area: top;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  padding:1rem;\n}\n.slider-btn{\n  padding: 0.5rem;\n  border: none;\n  aspect-ratio: 1;\n  background-color: rgb(95, 92, 92);\n  border-radius: 50%;\n }\n.slider-btn:focus ,.slider-btn-clicked,.slider-btn:hover{\n  background-color: white;\n }\n.person-job{\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  font-size: 1.3rem;\n  color: #969191;\n }\n /* forth and third page image holder,image has same style */\n.crew-image-holder,.techno-image-holder{\n  width: 100%;\n  height: 30vh;\n }  \n .crew-image,.techno-image{\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 1s ease-in;\n}\n.techno-image{\n  background-size: cover;\n  }\n /*fourth page style */\n.technology-info-holder{\n  text-align: center;\n  letter-spacing: 2px;\n  line-height: 1.5rem;\n  padding: 1rem;\n}\n .techno-name{\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-bottom: 1rem;\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  padding-top: 0.5rem;\n }\n.techno-btn-holder{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding-bottom: 0.3rem;\n\n }\n .techno-btn{\n  border: none;\n  width: 2rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  color: #d7dff0;\n  border: 2px solid rgb(66, 65, 65);\n  background-color: inherit;\n}\n.techno-btn:hover{\n  border: 2px solid rgb(255, 255, 255);\n}\n.techno-btn-clicked, .techno-btn:focus{\n  background-color: white;\n  color: black;\n}\n/* media query for tablet screen */\n@media (min-width:501px) {\n  /* first page */\n  .home-page-nav{\n    height: fit-content;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    justify-content:space-between;\n    margin-top: 0;\n    padding: 0;\n    width: 100%;\n    gap:0.5rem;\n   }\n  .home-nav-btn::after {\n    content: \"\";\n    position:absolute;\n    top: 0;\n    left: 0;\n    transform: scale(0);\n    height: 100%;\n    width:100%;\n    border-radius: 0.2rem;\n    background-color: rgb(0, 0, 0);\n    transform-origin: right;\n    transition:transform 400ms ease-in-out;\n    z-index: -1;\n   }\n   .home-nav-btn:hover::after{\n    transform: scale(1);\n    transform-origin: left;\n  } \n  .home-page-nav > li {\n    padding-inline: clamp(0.3rem,2vw,0.5rem);\n    }\n  .home-page-nav > li:nth-child(1){\n    margin-top: 0;\n  }\n  .home-page-nav > li > span{\n    display: none;\n  }\n  .nav-tab-focus{\n    border-bottom: 4px solid  rgb(255, 255, 255); \n  } \n  .home-page-section{\n    padding-block: 1rem;\n  }\n .intro-title{\n    font-size: 4rem;\n    padding-block: 1rem;\n  }\n  /* second page for tab */\n  .current-page{\n    padding: 0.3rem;\n  }\n  .link-number{\n    display: block;\n   font-weight: 700;\n  }\n  .slider-btn-holder{\n    grid-area: bottom;\n  }\n  .crew-image-holder{\n    width: 0;\n    height: 0;\n  }\n  .crew-image{\n    position: absolute;\n    bottom: -20%;\n    height: 50%;\n  }\n  .person-info{\n    padding: 0.3rem;\n  }\n  /* third page */\n }\n  @media(prefers-reduced-motion){\n    /* stop shooting star movement */\n  .star{\n    display:none\n  }\n  .planet{\n    animation: stopRotate 3s infinite ; \n  } \n}\n/* stop rotation fo planet if reduced */\n @keyframes stopRotate{\n  to{\n    transform: rotate(0deg);\n  }\n  from{\n    transform: rotate(0deg);\n  }\n }\n \n\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/images/icons/icon-close.svg?959a":
/*!************************************************!*\
  !*** ./src/assets/images/icons/icon-close.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d47fda63cbd8b3fedbbc1b2a53f64470.svg");

/***/ }),

/***/ "./src/assets/images/icons/icon-hamburger.svg?8a23":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/icon-hamburger.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5273efa7c50e96ef3e51e7a2b54048ce.svg");

/***/ }),

/***/ "./src/assets/images/icons/logo.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/logo.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "565f7f2c0534403f11b71994f4311210.svg");

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

/***/ "./src/assets/images/icons sync \\.(svg)$":
/*!*************************************************************!*\
  !*** ./src/assets/images/icons/ sync nonrecursive \.(svg)$ ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./icon-close.svg": "./src/assets/images/icons/icon-close.svg?959a",
	"./icon-hamburger.svg": "./src/assets/images/icons/icon-hamburger.svg?8a23",
	"./logo.svg": "./src/assets/images/icons/logo.svg"
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
webpackContext.id = "./src/assets/images/icons sync \\.(svg)$";

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

/***/ "./src/assets/images/icons/icon-close.svg?6a96":
/*!************************************************!*\
  !*** ./src/assets/images/icons/icon-close.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60739440d4616edba3eb.svg";

/***/ }),

/***/ "./src/assets/images/icons/icon-hamburger.svg?40f7":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/icon-hamburger.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bd5954dc6201a1981ace.svg";

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
module.exports = /*#__PURE__*/JSON.parse('{"destinations":[{"name":"Moon","images":{"png":"./assets/images/destination/image-moon.png","webp":"./assets/images/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/images/destination/image-mars.png","webp":"./assets/images/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/images/destination/image-europa.png","webp":"./assets/images/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/images/destination/image-titan.png","webp":"./assets/images/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/images/crew/image-douglas-hurley.png","webp":"./assets/images/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/images/crew/image-mark-shuttleworth.png","webp":"./assets/images/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/images/crew/image-victor-glover.png","webp":"./assets/images/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/images/crew/image-anousheh-ansari.png","webp":"./assets/images/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/images/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/images/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/images/technology/image-spaceport-portrait.jpg","landscape":"./assets/images/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/images/technology/image-space-capsule-portrait.jpg","landscape":"./assets/images/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}');

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
    const imageHolder = document.querySelector('.planet');
    const btn = document.querySelector(`[data-nav="0"]`);
    btn.focus();
    (0, _domComponent.planetImage)(imageHolder, 2);
    (0, _domComponent.destinationPlanet)(article, 0);
    (0, _domComponent.navBtnFocus)(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxVQUFVLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssbURBQW1ELHlCQUF5QixtQkFBbUIsd0JBQXdCLDRCQUE0QiwyQkFBMkIsMEJBQTBCLE9BQU8sa0JBQWtCLHlCQUF5QixPQUFPLGtCQUFrQixrQkFBa0IsT0FBTyx3QkFBd0Isc0JBQXNCLDRCQUE0QixPQUFPLG1CQUFtQix3QkFBd0IsT0FBTyxxQkFBcUIsdUJBQXVCLGlEQUFpRCxrQkFBa0IsT0FBTywwQkFBMEIsbUJBQW1CLDRCQUE0Qiw0QkFBNEIsbUJBQW1CLCtDQUErQyxRQUFRLGlDQUFpQyx1QkFBdUIsUUFBUSxnQkFBZ0Isc0JBQXNCLE9BQU8sZUFBZSx1QkFBdUIsb0JBQW9CLFFBQVEsNkNBQTZDLHNCQUFzQiwyQ0FBMkMsOEJBQThCLE9BQU8sa0JBQWtCLHlCQUF5Qix3QkFBd0IsMkJBQTJCLE9BQU8sZ0VBQWdFLHdCQUF3QixzQkFBc0IsK0JBQStCLGlCQUFpQixPQUFPLHlCQUF5Qix5QkFBeUIsMEJBQTBCLE9BQU8sb0JBQW9CLHVCQUF1QixxQkFBcUIsT0FBTyxtQkFBbUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IsT0FBTyw4SEFBOEgseUJBQXlCLGlCQUFpQixtQkFBbUIsT0FBTyxrQkFBa0IsMkJBQTJCLG9CQUFvQixtQkFBbUIsaUJBQWlCLHFCQUFxQixxQkFBcUIsT0FBTyxxQkFBcUIsMkJBQTJCLG9CQUFvQixrQkFBa0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsT0FBTyx3QkFBd0Isd0JBQXdCLDRCQUE0QixtQkFBbUIsMkJBQTJCLFFBQVEsbUJBQW1CLG1CQUFtQixPQUFPLDBCQUEwQix1QkFBdUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsT0FBTyx5QkFBeUIsMEJBQTBCLDRCQUE0QiwyQkFBMkIsT0FBTyxpREFBaUQsK0JBQStCLHdCQUF3QixvQkFBb0IsT0FBTyxtQkFBbUIsMEJBQTBCLE9BQU8sc0JBQXNCLHlCQUF5QixPQUFPLDhCQUE4QixtQkFBbUIsMEJBQTBCLHNCQUFzQiwwRkFBMEYsT0FBTyx5QkFBeUIsdUJBQXVCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLDRCQUE0QiwwQkFBMEIseUJBQXlCLE9BQU8sYUFBYSx5QkFBeUIsMEJBQTBCLHdCQUF3QixPQUFPLGtCQUFrQiwyQkFBMkIsMEJBQTBCLFNBQVMsbUJBQW1CLG1CQUFtQiw0QkFBNEIsMkJBQTJCLHNCQUFzQixPQUFPLEdBQUcsbUJBQW1CO0FBQ3AxSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEt2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2S0FBbUU7QUFDL0csNENBQTRDLDJMQUEwRTtBQUN0SCw0Q0FBNEMsa0tBQTJEO0FBQ3ZHLDRDQUE0QywwSkFBdUQ7QUFDbkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sc0VBQXNFLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLHFCQUFxQixpRkFBaUYsR0FBRyxzREFBc0QsdUJBQXVCLG9DQUFvQyx1QkFBdUIscUJBQXFCLHlGQUF5RixHQUFHLElBQUksY0FBYyxlQUFlLEdBQUcsT0FBTyw4QkFBOEIsNEJBQTRCLGlDQUFpQyxpQkFBaUIsbURBQW1ELHVCQUF1QixHQUFHLEtBQUsscUJBQXFCLEdBQUcsSUFBSSwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQixJQUFJLE9BQU8sMkRBQTJELEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIsbUNBQW1DLElBQUksNkRBQTZELGlCQUFpQix3QkFBd0IscUJBQXFCLDhCQUE4QixpQkFBaUIsc0JBQXNCLG9DQUFvQyxHQUFHLDZCQUE2QixzQkFBc0IscUJBQXFCLG9DQUFvQyxHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLGdCQUFnQix3QkFBd0IsZ0JBQWdCLHVDQUF1QyxJQUFJLG9CQUFvQixpREFBaUQsSUFBSSxpQ0FBaUMscUJBQXFCLElBQUksbUJBQW1CLGtCQUFrQiwyQkFBMkIsZUFBZSx1QkFBdUIsYUFBYSw0Q0FBNEMsa0JBQWtCLGVBQWUsa0JBQWtCLGdDQUFnQyxnQkFBZ0IsR0FBRyxjQUFjLHVCQUF1QixhQUFhLFlBQVksa0JBQWtCLElBQUksUUFBUSxrQkFBa0Isb0JBQW9CLGlDQUFpQyxnQ0FBZ0MsdUJBQXVCLG9CQUFvQixHQUFHLG1EQUFtRCxrQkFBa0IsdUJBQXVCLGFBQWEsV0FBVyxnQkFBZ0IsOEJBQThCLGdDQUFnQyxvQkFBb0IsaUNBQWlDLGdDQUFnQyxpQkFBaUIsR0FBRyxZQUFZLG9FQUFvRSxHQUFHLGFBQWEsZ0VBQWdFLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQix1QkFBdUIsZUFBZSxlQUFlLGdCQUFnQix5Q0FBeUMsZUFBZSxHQUFHLHdCQUF3QixTQUFTLHFCQUFxQixtQ0FBbUMsT0FBTyxXQUFXLG1CQUFtQixrQ0FBa0MsT0FBTyxHQUFHLCtEQUErRCxlQUFlLGtCQUFrQixpQkFBaUIsMEJBQTBCLFNBQVMsNkJBQTZCLGVBQWUsa0JBQWtCLEdBQUcsNkJBQTZCLGtCQUFrQixrQ0FBa0MsMEJBQTBCLGtCQUFrQixJQUFJLGVBQWUsaUJBQWlCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHNCQUFzQix1QkFBdUIsaUJBQWlCLHNCQUFzQixXQUFXLGNBQWMsOEJBQThCLEtBQUssZ0JBQWdCLHVCQUF1QixpQkFBaUIsb0JBQW9CLHVCQUF1QixJQUFJLG9CQUFvQiwyQ0FBMkMsK0JBQStCLEdBQUcscUJBQXFCLGlCQUFpQix5QkFBeUIsR0FBRyx5QkFBeUIsb0JBQW9CLDBCQUEwQix3QkFBd0Isc0JBQXNCLHVCQUF1QixvQ0FBb0MsR0FBRyxlQUFlLDBCQUEwQixvQkFBb0IscUJBQXFCLHdCQUF3Qix1QkFBdUIsNkJBQTZCLEdBQUcsYUFBYSxvQkFBb0Isd0JBQXdCLGdCQUFnQixHQUFHLFFBQVEsZ0JBQWdCLG9CQUFvQix1QkFBdUIsS0FBSyxRQUFRLHVCQUF1QixjQUFjLGVBQWUscUVBQXFFLHlDQUF5Qyx1RUFBdUUsbUNBQW1DLHlDQUF5QyxrQ0FBa0MsR0FBRywyQkFBMkIsU0FBUyxzQ0FBc0MsS0FBSyxRQUFRLGlCQUFpQixJQUFJLFNBQVMsZ0JBQWdCLDRDQUE0QyxLQUFLLEdBQUcsdURBQXVELGtCQUFrQiw0QkFBNEIsZUFBZSxrQkFBa0Isc0NBQXNDLDBCQUEwQixvQ0FBb0Msd0JBQXdCLHFCQUFxQixzQkFBc0IsSUFBSSxlQUFlLGtCQUFrQixtQkFBbUIsR0FBRyx5Q0FBeUMsa0JBQWtCLCtCQUErQixHQUFHLDBDQUEwQyx5QkFBeUIsMEJBQTBCLEdBQUcsbUJBQW1CLGlCQUFpQiw4QkFBOEIsaUJBQWlCLG9CQUFvQixvQkFBb0Isb0JBQW9CLHFCQUFxQix1Q0FBdUMsMEJBQTBCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLGdEQUFnRCx5QkFBeUIsNENBQTRDLEdBQUcsZ0NBQWdDLHlCQUF5QixJQUFJLGlDQUFpQyx5QkFBeUIsSUFBSSxnQkFBZ0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsdUJBQXVCLElBQUksZUFBZSx3QkFBd0Isd0JBQXdCLHFCQUFxQix1QkFBdUIsa0JBQWtCLElBQUksaUJBQWlCLHdCQUF3QixvQkFBb0IsSUFBSSx1QkFBdUIscUJBQXFCLElBQUksK0JBQStCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixvQkFBb0IsSUFBSSxpQ0FBaUMsb0JBQW9CLElBQUksaUJBQWlCLGdCQUFnQixpQkFBaUIsa0JBQWtCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGdDQUFnQyxpQ0FBaUMsNkJBQTZCLCtEQUErRCxHQUFHLDJCQUEyQixPQUFPLDhCQUE4QixLQUFLLFNBQVMsZ0NBQWdDLEtBQUssR0FBRyx1Q0FBdUMsMkJBQTJCLDhCQUE4QixvQkFBb0IsNkJBQTZCLHdCQUF3QixzQkFBc0IsMEJBQTBCLElBQUksZUFBZSxrQkFBa0IsbURBQW1ELGtCQUFrQixJQUFJLHNCQUFzQix1QkFBdUIsR0FBRyxZQUFZLHdCQUF3Qix3QkFBd0IsMEJBQTBCLGtCQUFrQixHQUFHLHFCQUFxQixtQkFBbUIsa0JBQWtCLGNBQWMsNEJBQTRCLGlCQUFpQixHQUFHLGNBQWMsb0JBQW9CLGlCQUFpQixvQkFBb0Isc0NBQXNDLHVCQUF1QixJQUFJLDJEQUEyRCw0QkFBNEIsSUFBSSxjQUFjLDhCQUE4Qiw2QkFBNkIsc0JBQXNCLG1CQUFtQixJQUFJLHlHQUF5RyxnQkFBZ0IsaUJBQWlCLE1BQU0sNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLGlDQUFpQyxnQ0FBZ0MsNENBQTRDLEdBQUcsZ0JBQWdCLDJCQUEyQixLQUFLLG1EQUFtRCx1QkFBdUIsd0JBQXdCLHdCQUF3QixrQkFBa0IsR0FBRyxnQkFBZ0Isc0JBQXNCLHFCQUFxQix5QkFBeUIsOEJBQThCLDZCQUE2Qix3QkFBd0IsSUFBSSxxQkFBcUIsa0JBQWtCLDRCQUE0QixjQUFjLDJCQUEyQixNQUFNLGVBQWUsaUJBQWlCLGdCQUFnQixvQkFBb0IsdUJBQXVCLG1CQUFtQixzQ0FBc0MsOEJBQThCLEdBQUcsb0JBQW9CLHlDQUF5QyxHQUFHLHlDQUF5Qyw0QkFBNEIsaUJBQWlCLEdBQUcsaUVBQWlFLHVDQUF1QywwQkFBMEIseUJBQXlCLDBCQUEwQiwwQkFBMEIsb0NBQW9DLG9CQUFvQixpQkFBaUIsa0JBQWtCLGlCQUFpQixNQUFNLDBCQUEwQixvQkFBb0Isd0JBQXdCLGFBQWEsY0FBYywwQkFBMEIsbUJBQW1CLGlCQUFpQiw0QkFBNEIscUNBQXFDLDhCQUE4Qiw2Q0FBNkMsa0JBQWtCLE1BQU0sZ0NBQWdDLDBCQUEwQiw2QkFBNkIsTUFBTSx5QkFBeUIsK0NBQStDLE9BQU8scUNBQXFDLG9CQUFvQixLQUFLLCtCQUErQixvQkFBb0IsS0FBSyxtQkFBbUIsb0RBQW9ELE1BQU0sdUJBQXVCLDBCQUEwQixLQUFLLGdCQUFnQixzQkFBc0IsMEJBQTBCLEtBQUssK0NBQStDLHNCQUFzQixLQUFLLGlCQUFpQixxQkFBcUIsc0JBQXNCLEtBQUssdUJBQXVCLHdCQUF3QixLQUFLLHVCQUF1QixlQUFlLGdCQUFnQixLQUFLLGdCQUFnQix5QkFBeUIsbUJBQW1CLGtCQUFrQixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyx3QkFBd0IsbUNBQW1DLGlEQUFpRCx1QkFBdUIsWUFBWSwwQ0FBMEMsTUFBTSxHQUFHLG1FQUFtRSxPQUFPLDhCQUE4QixLQUFLLFNBQVMsOEJBQThCLEtBQUssSUFBSSwwQkFBMEI7QUFDeitlO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQzlpQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0MvRSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUsd0ZBQU8sSUFBSSx3RkFBTyxVQUFVLHdGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBdkUsbUJBQUE7QUFDQUEsbUJBQUE7QUFDQSxJQUFBaUYsYUFBQSxHQUFBakYsbUJBQUE7QUFLQSxNQUFNa0YsT0FBTyxHQUFHekUsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDekQsTUFBTXlFLElBQUksR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxNQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNELE1BQU1JLFNBQVMsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDN0QsTUFBTXlELEdBQUcsR0FBRzFELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ3RELE1BQU0wRSxJQUFJLEdBQUczRSxRQUFRLENBQUMyRSxJQUFJO0FBQzFCLE1BQU16RCxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0FBSTFELElBQUE0QiwyQkFBYSxFQUFDOEIsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNyQixJQUFBbkUsNkJBQWUsRUFBQ2tFLElBQUksQ0FBQztBQUNyQixJQUFBckIseUJBQVcsRUFBQyxDQUFDLENBQUM7QUFDZG9CLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFDcEYsQ0FBQyxJQUFFO0VBQ2hDLElBQUdBLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0lBQ25DLElBQUFiLDZCQUFlLEVBQUNrRSxJQUFJLENBQUM7SUFDckIsSUFBQTdCLDJCQUFhLEVBQUM4QixJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3JCO0lBQ0EsSUFBR3pELFdBQVcsQ0FBQ0csT0FBTyxLQUFLLEtBQUssRUFBQztNQUM3QnFDLEdBQUcsQ0FBQ29CLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxPQUFPLENBQUM7TUFDMUMxRSxRQUFRLENBQUNFLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxPQUFPO01BQ2hDMUUsU0FBUyxDQUFDQyxLQUFLLENBQUN5RSxPQUFPLEdBQUcsTUFBTTtJQUNwQztJQUNBLElBQUExQix5QkFBVyxFQUFDLENBQUMsQ0FBQztFQUNsQixDQUFDLE1BQ0ksSUFBRzdELENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDO0lBQy9DLElBQUFDLHdCQUFVLEVBQUNvRCxJQUFJLENBQUM7SUFDaEIsTUFBTU0sT0FBTyxHQUFHaEYsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQ3ZELE1BQU1nRixXQUFXLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDckQsTUFBTXNFLEdBQUcsR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3BEc0UsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUNYLElBQUF0RCx5QkFBVyxFQUFDb0UsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBQTFELCtCQUFpQixFQUFDeUQsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUM1QixJQUFBbkMsMkJBQWEsRUFBQzhCLElBQUksRUFBQyxDQUFDLENBQUM7SUFDckI7SUFDQSxJQUFHekQsV0FBVyxDQUFDRyxPQUFPLEtBQUssS0FBSyxFQUFDO01BQzdCcUMsR0FBRyxDQUFDb0IsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQztNQUMxQzFFLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87TUFDaEMxRSxTQUFTLENBQUNDLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0lBQ3BDO0lBQ0EsSUFBQTFCLHlCQUFXLEVBQUMsQ0FBQyxDQUFDO0VBQ2xCLENBQUMsTUFDSSxJQUFHN0QsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7SUFDeEMsSUFBQVMsdUJBQVMsRUFBQzRDLElBQUksQ0FBQztJQUNmLE1BQU1RLFdBQVcsR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzdELE1BQU1nRixXQUFXLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvRCxJQUFBOEIsd0JBQVUsRUFBQ21ELFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekIsSUFBQTdDLHlCQUFXLEVBQUM0QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUFwQywyQkFBYSxFQUFDOEIsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyQixJQUFBWiw0QkFBYyxFQUFDLENBQUMsQ0FBQztJQUNqQjtJQUNBLElBQUc3QyxXQUFXLENBQUNHLE9BQU8sS0FBSyxLQUFLLEVBQUM7TUFDN0JxQyxHQUFHLENBQUNvQixZQUFZLENBQUMsZ0JBQWdCLEVBQUMsT0FBTyxDQUFDO01BQzFDMUUsUUFBUSxDQUFDRSxLQUFLLENBQUN5RSxPQUFPLEdBQUcsT0FBTztNQUNoQzFFLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE1BQU07SUFDcEM7SUFDQSxJQUFBMUIseUJBQVcsRUFBQyxDQUFDLENBQUM7RUFDbEIsQ0FBQyxNQUNJLElBQUc3RCxDQUFDLENBQUNxRixNQUFNLENBQUN4RCxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQztJQUM5QyxJQUFBbUIsd0JBQVUsRUFBQ2tDLElBQUksQ0FBQztJQUNoQixNQUFNUyxXQUFXLEdBQUduRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUNoRSxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDakUsSUFBQTBDLHdCQUFVLEVBQUN3QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUF6QywrQkFBaUIsRUFBQ3VDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDaEMsSUFBQXBDLDJCQUFhLEVBQUM4QixJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUFOLHNCQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ1g7SUFDQSxJQUFHbkQsV0FBVyxDQUFDRyxPQUFPLEtBQUssS0FBSyxFQUFDO01BQzdCcUMsR0FBRyxDQUFDb0IsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQztNQUMxQzFFLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87TUFDaEMxRSxTQUFTLENBQUNDLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0lBQ3BDO0lBQ0EsSUFBQTFCLHlCQUFXLEVBQUMsQ0FBQyxDQUFDO0VBQ2xCO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRXBGLENBQUMsSUFBRztFQUMvQixJQUFHQSxDQUFDLENBQUNxRixNQUFNLENBQUN4RCxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBQztJQUN0QyxJQUFBQyx3QkFBVSxFQUFDb0QsSUFBSSxDQUFDO0lBQ2hCLE1BQU1NLE9BQU8sR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3JELE1BQU1zRSxHQUFHLEdBQUd2RSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwRHNFLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLENBQUM7SUFDWCxJQUFBdEQseUJBQVcsRUFBQ29FLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDMUIsSUFBQTFELCtCQUFpQixFQUFDeUQsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUM1QixJQUFBM0IseUJBQVcsRUFBQyxDQUFDLENBQUM7RUFDbEI7RUFDQTtFQUFBLEtBQ0ssSUFBRzdELENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3ZDLE1BQU0yRCxPQUFPLEdBQUdoRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDdkQsTUFBTWdGLFdBQVcsR0FBR2pGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNyRCxJQUFBWSx5QkFBVyxFQUFDb0UsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUMxQixJQUFBMUQsK0JBQWlCLEVBQUN5RCxPQUFPLEVBQUMsQ0FBQyxDQUFDO0VBQ2hDLENBQUMsTUFDSSxJQUFHeEYsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7SUFDdkMsTUFBTTJELE9BQU8sR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3JELElBQUFZLHlCQUFXLEVBQUNvRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFBMUQsK0JBQWlCLEVBQUN5RCxPQUFPLEVBQUMsQ0FBQyxDQUFDO0VBQ2hDLENBQUMsTUFDSSxJQUFHeEYsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7SUFDdkMsTUFBTTJELE9BQU8sR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3JELElBQUFZLHlCQUFXLEVBQUNvRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFBMUQsK0JBQWlCLEVBQUN5RCxPQUFPLEVBQUMsQ0FBQyxDQUFDO0VBQ2hDLENBQUMsTUFDSSxJQUFHeEYsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7SUFDdkMsTUFBTTJELE9BQU8sR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3JELElBQUFZLHlCQUFXLEVBQUNvRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBQTFELCtCQUFpQixFQUFDeUQsT0FBTyxFQUFDLENBQUMsQ0FBQztFQUNoQztFQUNBO0VBQ0EsSUFBR3hGLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0lBQ25DLE1BQU02RCxXQUFXLEdBQUdsRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDL0QsTUFBTW1GLFFBQVEsR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFELElBQUE4Qix3QkFBVSxFQUFDbUQsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6QkUsUUFBUSxDQUFDakIsS0FBSyxDQUFDLENBQUM7SUFDaEIsSUFBQTlCLHlCQUFXLEVBQUM0QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUFsQiw0QkFBYyxFQUFDLENBQUMsQ0FBQztFQUNyQixDQUFDLE1BQ0ksSUFBR3ZFLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0lBQ3hDLE1BQU02RCxXQUFXLEdBQUdsRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDL0QsTUFBTW1GLFFBQVEsR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFELElBQUE4Qix3QkFBVSxFQUFDbUQsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6QkUsUUFBUSxDQUFDakIsS0FBSyxDQUFDLENBQUM7SUFDaEIsSUFBQTlCLHlCQUFXLEVBQUM0QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUFsQiw0QkFBYyxFQUFDLENBQUMsQ0FBQztFQUNyQixDQUFDLE1BQ0ksSUFBR3ZFLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0lBQ3hDLE1BQU02RCxXQUFXLEdBQUdsRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDL0QsTUFBTW1GLFFBQVEsR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFELElBQUE4Qix3QkFBVSxFQUFDbUQsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6QkUsUUFBUSxDQUFDakIsS0FBSyxDQUFDLENBQUM7SUFDaEIsSUFBQTlCLHlCQUFXLEVBQUM0QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUFsQiw0QkFBYyxFQUFDLENBQUMsQ0FBQztFQUNyQixDQUFDLE1BQ0ksSUFBR3ZFLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0lBQ3hDLE1BQU02RCxXQUFXLEdBQUdsRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxNQUFNZ0YsV0FBVyxHQUFHakYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDL0QsTUFBTW1GLFFBQVEsR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFELElBQUE4Qix3QkFBVSxFQUFDbUQsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6QkUsUUFBUSxDQUFDakIsS0FBSyxDQUFDLENBQUM7SUFDaEIsSUFBQTlCLHlCQUFXLEVBQUM0QyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUFsQiw0QkFBYyxFQUFDLENBQUMsQ0FBQztFQUNyQjtFQUNBO0VBQUEsS0FDSyxJQUFHdkUsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUM7SUFDOUMsTUFBTThELFdBQVcsR0FBR25GLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLE1BQU1nRixXQUFXLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqRSxJQUFBMEMsd0JBQVUsRUFBQ3dDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekIsSUFBQXpDLCtCQUFpQixFQUFDdUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFBWixzQkFBUSxFQUFDLENBQUMsQ0FBQztFQUNmLENBQUMsTUFDSSxJQUFHN0UsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUM7SUFDOUMsTUFBTThELFdBQVcsR0FBR25GLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLE1BQU1nRixXQUFXLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqRSxJQUFBMEMsd0JBQVUsRUFBQ3dDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekIsSUFBQXpDLCtCQUFpQixFQUFDdUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFBWixzQkFBUSxFQUFDLENBQUMsQ0FBQztFQUNmLENBQUMsTUFDSSxJQUFHN0UsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDeEQsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUM7SUFDOUMsTUFBTThELFdBQVcsR0FBR25GLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLE1BQU1nRixXQUFXLEdBQUdqRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqRSxJQUFBMEMsd0JBQVUsRUFBQ3dDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekIsSUFBQXpDLCtCQUFpQixFQUFDdUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFBWixzQkFBUSxFQUFDLENBQUMsQ0FBQztFQUNmO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZqRSxRQUFRLENBQUN3RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsTUFBSTtFQUNsQyxJQUFHbEIsR0FBRyxDQUFDMkIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssT0FBTyxFQUFDO0lBQzlDM0IsR0FBRyxDQUFDb0IsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQztJQUN6Q3pFLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87SUFDakMzRSxRQUFRLENBQUNFLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRSxNQUFNO0VBQ2xDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YxRSxTQUFTLENBQUN1RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsTUFBSTtFQUNuQyxJQUFHbEIsR0FBRyxDQUFDMkIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssTUFBTSxFQUFDO0lBQzdDM0IsR0FBRyxDQUFDb0IsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQztJQUMxQzFFLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87SUFDaEMxRSxTQUFTLENBQUNDLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0VBQ3BDO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y3RCxXQUFXLENBQUMwRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUMsTUFBSTtFQUN0QztFQUNBLE1BQU10QixFQUFFLEdBQUd0RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDdUQsUUFBUTtFQUM1RCxNQUFNOEIsRUFBRSxHQUFHLENBQUMsR0FBR2hDLEVBQUUsQ0FBQztFQUNsQixJQUFHcEMsV0FBVyxDQUFDRyxPQUFPLEtBQUksSUFBSSxFQUFDO0lBQzNCcUMsR0FBRyxDQUFDb0IsWUFBWSxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQztJQUN6Q3pFLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE1BQU07SUFDaEMzRSxRQUFRLENBQUNFLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0lBQy9CTyxFQUFFLENBQUM3QixPQUFPLENBQUNDLEdBQUcsSUFBRTtNQUNaQSxHQUFHLENBQUNwRCxLQUFLLENBQUNpRixXQUFXLEdBQUUsTUFBTTtJQUNqQyxDQUFDLENBQUM7RUFDTixDQUFDLE1BQ0ksSUFBR3JFLFdBQVcsQ0FBQ0csT0FBTyxLQUFJLEtBQUssRUFBQztJQUNqQ3FDLEdBQUcsQ0FBQ29CLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxPQUFPLENBQUM7SUFDMUMxRSxRQUFRLENBQUNFLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxPQUFPO0VBQ3BDO0FBRUosQ0FBQyxDQUFDO0FBQ0YsSUFBRzdELFdBQVcsQ0FBQ0csT0FBTyxLQUFLLElBQUksRUFBQztFQUM1QnFDLEdBQUcsQ0FBQ29CLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxNQUFNLENBQUM7RUFDekN6RSxTQUFTLENBQUNDLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0VBQ2hDM0UsUUFBUSxDQUFDRSxLQUFLLENBQUN5RSxPQUFPLEdBQUcsTUFBTTtBQUNuQyxDQUFDLE1BQ0ksSUFBRzdELFdBQVcsQ0FBQ0csT0FBTyxLQUFLLEtBQUssRUFBQztFQUNsQ2pCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZG9tLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Rlc2t0b3AuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtbWFyay1zaHV0dGxld29ydGgud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS10aXRhbi53ZWJwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2ZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS10YWJsZXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1sYXVuY2gtdmVoaWNsZS1sYW5kc2NhcGUuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLWxhbmRzY2FwZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnL2ltYWdlLXNwYWNlcG9ydC1sYW5kc2NhcGUuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLXBvcnRyYWl0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZy9pbWFnZS1zcGFjZXBvcnQtcG9ydHJhaXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZGVza3RvcC5jc3M/OTMwMCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LyBzeW5jIFxcLih3ZWJwKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi8gc3luYyBub25yZWN1cnNpdmUgXFwuKHdlYnApJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihzdmcpJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKGpwZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4oanBnKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuLy9mdW5jdGlvbiB0byBpbXBvcnQgaW1hZ2UgdXNpbmcgcmVxdWlyZS5jb250ZXh0XG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgIHJldHVybiByLmtleXMoKS5tYXAocik7XG59XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmNvbnN0IGxvZ29TdmcgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvJywgZmFsc2UsIC9cXC4oc3ZnKSQvKSk7XG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuLW1lbnVdXCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlLW1lbnVdXCIpO1xubG9nby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoXCIke2xvZ29TdmdbMl0uZGVmYXVsdH1cIilgO1xub3Blbk1lbnUuc3R5bGUuYmFja2dyb3VuZEltYWdlID1gdXJsKFwiJHtsb2dvU3ZnWzFdLmRlZmF1bHR9XCIpYDtcbmNsb3NlTWVudS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoXCIke2xvZ29TdmdbMF0uZGVmYXVsdH1cIilgO1xuLy9mdW5jdGlvbiB0byBkcmF3IGhvbWVwYWdlIGNvbnRlbnRcbmZ1bmN0aW9uIGhvbWVQYWdlU2VjdGlvbihlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPHNlY3Rpb24gY2xhc3M9XCJob21lLXBhZ2Utc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnRyby10ZXh0XCI+U08gWU9VIFdBTlQgVE8gVFJBVkVMIFRPPC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiaW50cm8tdGl0bGVcIj5TUEFDRTwvaDE+XG4gICAgPHAgY2xhc3M9XCJpbnRyby1wYXJcIj5MZXQncyBmYWNlIGl0O2lmIHlvdSB3YW50IHRvIGdvIHRvIHNwYWNlLHlvdSBtaWdodCBhcyB3ZWxsXG4gICAgICBnZW51aW5lbHkgZ28gdG8gb3V0ZXIgc3BhY2UgYW5kIG5vdCBob3ZlciBraW5kIG9mIG9uIHRoZVxuICAgICAgZWRnZSBvZiBpdC5XZWxsIHNpdCBiYWNrLCBhbmQgcmVsYXggYmVjYXVzZSB3ZSB3aWxsIGdpdmUgeW91XG4gICAgICBhIHRydWx5IG91dCBvZiB0aGlzIHdvcmxkIGV4cGVyaWVuY2UuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJzdGFyLWhvbGRlclwiPlxuICAgICA8ZGl2IGNsYXNzPVwic3RhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgPC9zZWN0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJidG4taG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJpZy1jaXJjbGVcIj5cbiAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJleHBsb3JlXCIgY2xhc3M9XCJleHBsb3JlLWJ0blwiIGRhdGEtZXhwbG9yZS1idG4gPkVYUExPUkU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiBjaG9vc2UgcGxhbmV0IGltYWdlXG5mdW5jdGlvbiBwbGFuZXRJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgLy93ZWJwIGZvciBzbWFsbCBzY3JlZW4gYW5kIHBuZyBmb3IgbGFyZ2Ugc2NyZWVuXG4gICAgLy9pbWFnZSBzdG9yZWQgaW4gdGhpcyBvcmRlciBldXJvcGEsbWFycyxtb29uLHRpdGFuIFxuICAgIGNvbnN0IHBsYW5ldEltYWdlc1RhYiA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbicsIGZhbHNlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBwbGFuZXRMYXJnZUltYWdlID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uJywgZmFsc2UsIC9cXC4ocG5nKSQvKSk7XG4gICAgaWYobW9iaWxlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0SW1hZ2VzVGFiW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0TGFyZ2VJbWFnZVtudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIGRlc3RpbmF0aW9uIHBhZ2UgKHNlY29uZCBwYWdlKVxuZnVuY3Rpb24gc2Vjb25kUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICA8c2VjdGlvbiBjbGFzcz1cInBsYW5ldC1pbmZvLWhvbGRlclwiPlxuICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgPHNwYW4gY2xhc3M9XCJsaW5rLW51bWJlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjAxPC9zcGFuPlxuICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+UElDSyBZT1VSIERFU1RJTkFUSU9OPC9kaXY+XG4gICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwicGxhbmV0LWltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5ldFwiPjwvZGl2PlxuICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwbGFuZXQtbmF2LWhvbGRlclwiPlxuICA8bmF2IGNsYXNzPVwicGxhbmV0cy1idG4taG9sZGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYW5ldC1uYW1lLW5hdlwiIGRhdGEtbmF2PVwiMFwiPk1PT048L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIxXCI+TUFSUzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJwbGFuZXQtbmFtZS1uYXZcIiBkYXRhLW5hdj1cIjJcIj5FVVJPUEE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIzXCI+VElUQU48L2J1dHRvbj5cbiAgIDwvbmF2PlxuICA8YXJ0aWNsZSBjbGFzcz1cImFib3V0LXBsYW5ldFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPjwvYXJ0aWNsZT5cblxuPC9zZWN0aW9uPlxuIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uUGxhbmV0KGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPGgxIGNsYXNzPVwicGxhbmV0LW5hbWVcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0ubmFtZX08L2gxPlxuICA8cCBjbGFzcz1cInBsYW5ldC1wYXJcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uZGVzY3JpcHRpb259PC9wPlxuICA8aHI+XG4gIDxkaXYgY2xhc3M9XCJwbGFuZXQtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkaXN0YW5jZS1pbmZvXCI+XG4gICAgICA8ZGl2PkFWRyBESVNUQU5DRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYW5ldC1kaXN0YW5jZVwiPiR7ZGF0YS5kZXN0aW5hdGlvbnNbbnVtYmVyXS5kaXN0YW5jZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHJhdmVsLWluZm9cIj5cbiAgICAgIDxkaXY+RVNULiBUUkFWRUwgVElNRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbC10aW1lXCI+JHtkYXRhLmRlc3RpbmF0aW9uc1tudW1iZXJdLnRyYXZlbH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gdGhpcmRQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuIFxuICA8c2VjdGlvbiBjbGFzcz1cImNyZXctaW5mby1ob2xkZXJcIj5cbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtcGFnZVwiPlxuICAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+TUVFVCBZT1VSIENSRVc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjcmV3LWltYWdlLWhvbGRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNyZXctaW1hZ2VcIiBkYXRhLWNyZXctaW1hZ2U+PC9kaXY+XG4gICA8L3NlY3Rpb24+XG5cbiAgICAgPC9zZWN0aW9uPlxuICAgICA8ZGl2IGNsYXNzPVwicGVyc29uLWluZm9cIiAgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgPGFydGljbGUgY2xhc3M9XCJwZXJzb24tZGV0YWlsLWluZm9cIiBkYXRhLWNyZXctYmlvPjwvYXJ0aWNsZT5cbiAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWJ0bi1ob2xkZXJcIiBkYXRhLXNsaWRlci1idG4+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjBcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjFcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjJcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjNcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cblxuICAgPC9zZWN0aW9uPmA7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiB0byBnZXQgaW5mbyBhYm91dCB0aGUgcGVyc29uXG5mdW5jdGlvbiBwZXJzb25JbmZvKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IGJpb1RlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tam9iXCI+JHtkYXRhLmNyZXdbbnVtYmVyXS5yb2xlfTwvZGl2PlxuICAgIDxoMSBjbGFzcz1cImNyZXctbmFtZVwiPiR7ZGF0YS5jcmV3W251bWJlcl0ubmFtZX08L2gxPlxuICAgIDxwIGNsYXNzPVwiY3Jldy1iaW9cIiBkYXRhLWNyZXctaW5mbz4ke2RhdGEuY3Jld1tudW1iZXJdLmJpb308L3A+XG4gIGA7XG4gICAgZWxlLmlubmVySFRNTCA9IGJpb1RlbXBsYXRlO1xufVxuLy9pbWFnZSBvcmRlciB0byBtYXRjaCBqc29uIGRhdGEgYWJvdXQgcGVyc29uIGluZm9cbmNvbnN0IHBlcnNvbkltYWdlT3JkZXIgPSBbMSwyLDMsMF07XG5mdW5jdGlvbiBwZXJzb25JbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgY29uc3QgdGFiSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2NyZXcnLCB0cnVlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBsYXJnZUltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9jcmV3JywgdHJ1ZSwgL1xcLihwbmcpJC8pKTtcbiAgICAvL2NvbnZlcnQgbnVtIHRvIG1hdGNoIGpzb24gZGF0YVxuICAgIG51bWJlciA9IHBlcnNvbkltYWdlT3JkZXJbbnVtYmVyXTtcbiAgICBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt0YWJJbWFnZXNbbnVtYmVyXS5kZWZhdWx0fVwiKWA7XG4gICAgfVxuICAgIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7bGFyZ2VJbWFnZXNbbnVtYmVyXS5kZWZhdWx0fVwiKWA7XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byBkcmF3IGZvdXJ0aCBwYWdlXG5mdW5jdGlvbiBmb3VydGhQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgICBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInRlY2huby1wYWdlXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLW5hbWVcIj5TUEFDRSBMQVVOQ0ggMTAxPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRlY2huby1pbWFnZS1ob2xkZXJcIiBkYXRhLXRlY2huby1ob2xkZXI+XG4gICAgPGRpdiBjbGFzcz1cInRlY2huby1pbWFnZVwiIGRhdGEtdGVjaG5vLWltYWdlPjwvZGl2PlxuICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZWNobm9sb2d5LWluZm8taG9sZGVyXCI+XG4gICAgIDxuYXYgY2xhc3M9XCJ0ZWNobm8tYnRuLWhvbGRlclwiIGRhdGEtdGVjaG5vLWJ0bnM+XG4gICAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJ0ZWNobm9sb2d5LXVzZWRcIiBjbGFzcz1cInRlY2huby1idG5cIiBkYXRhLXRlY2hub2xvZ3k9XCIwXCI+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICBhcmlhLWxhYmVsPVwidGVjaG5vbG9neS11c2VkXCIgY2xhc3M9XCJ0ZWNobm8tYnRuXCIgZGF0YS10ZWNobm9sb2d5PVwiMVwiPjI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAgYXJpYS1sYWJlbD1cInRlY2hub2xvZ3ktdXNlZFwiIGNsYXNzPVwidGVjaG5vLWJ0blwiIGRhdGEtdGVjaG5vbG9neT1cIjJcIj4zPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+VEhFIFRFQ0hOT0xPR1kuLi48L2Rpdj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGVjaG5vLXBhclwiICBhcmlhLWxpdmU9XCJwb2xpdGVcIiBkYXRhLXRlY2huby1pbmZvID48L2FydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvblxuICBgO1xuICAgIGVsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGVsZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbn1cbi8vZnVuY3Rpb24gdG8gcGljayBpbWFnZSBmb3IgdGVjaG5vbG9neSBwYWdlIGJhc2VkIG9uIHNjcmVlblxuLy9vcmRlciB0byBtYWNoIGpzb24gYW5kIGltYWdlIG9yZGVyLDAgcmVwIGxhdW5jaCwxIHJlcCBzcGFjZXBvcnQsIDIgcmVwIHNwYWNlIGNhcHN1bGVcbmNvbnN0IGltYWdlT3JkZXIgPSBbMCAsMiwgMV07XG5mdW5jdGlvbiBjaG9vc2VUZWNobm9JbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo5MDBweClcIik7XG4gICAgY29uc3QgbGFyZ2VJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZycsIGZhbHNlLCAvXFwuKGpwZykkLykpO1xuICAgIGNvbnN0IHRhYkltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZycsIGZhbHNlLCAvXFwuKGpwZykkLykpO1xuICAgIG51bWJlciA9IGltYWdlT3JkZXJbbnVtYmVyXTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2xhcmdlSW1hZ2VzW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3RhYkltYWdlc1tudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIHRvIHVwZGF0ZSBwYXJhZ3JhcGggYWJvdXQgdGhlIHRlY2hub2xvZ3kgdXNlZFxuZnVuY3Rpb24gdGVjaG5vSW5mbyhlbGUsbnVtYmVyKXtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGAgXG4gICAgPGgxIGNsYXNzPVwidGVjaG5vLW5hbWVcIj4ke2RhdGEudGVjaG5vbG9neVtudW1iZXJdLm5hbWV9PC9oMT5cbiAgICA8cCBjbGFzcz1cInRlY2huby1pbmZvXCI+JHtkYXRhLnRlY2hub2xvZ3lbbnVtYmVyXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbi8vZnVuY3Rpb24gdG8gcGljayBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZSBhbmQgcGFnZSBuYW1lIChuYXZpZ2F0aW9uIHVzZWQgYXMgcGFnZSBuYW1lKVxuZnVuY3Rpb24gY2hvb3NlQmdJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo5MDBweClcIik7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTAwcHgpXCIpO1xuICAgIHBpY2tCZyhudW1iZXIpO1xuICAgIFxuICAgIC8vZnVuY3Rpb24gdG8gcGljayBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHNjcmVlbiBzaXplXG4gICAgZnVuY3Rpb24gcGlja0JnKG51bWJlcil7XG4gICAgICAgIGNvbnN0IGhvbWVJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvaG9tZScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25JbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgICAgIGNvbnN0IGNyZXdJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgdGVjaG5vSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL3RlY2huby1iZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzVGFiID0gW2hvbWVJbWFnZXMsZGVzdGluYXRpb25JbWFnZXMsY3Jld0ltYWdlcyx0ZWNobm9JbWFnZXNdO1xuICAgICAgICAvL2ltYWdlcyBzdG9yZWQgaW4gZGVza3RvcCwgbW9iaWxlLCB0YWIoMCwxLDIpIG9yZGVyXG4gICAgICAgIGlmKG1vYmlsZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZXNUYWJbbnVtYmVyXVsxXS5kZWZhdWx0fVwiKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZXNUYWJbbnVtYmVyXVswXS5kZWZhdWx0fVwiKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YWJTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2VzVGFiW251bWJlcl1bMl0uZGVmYXVsdH1cIilgO1xuICAgICAgICB9XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byBhZGQgZm9jdXMgc3R5bGUgZm9yIG5hdlxuZnVuY3Rpb24gbmF2QnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UtbmF2Jyk7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBhbGxOYXYgID0gWy4uLnVsLmNoaWxkcmVuXTtcbiAgICBhbGxOYXYuZm9yRWFjaChuYXY9PntcbiAgICAgICAgaWYoYWxsTmF2LmluZGV4T2YobmF2KSAhPT0gbnVtYmVyKXtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbW9iaWxlLWZvY3VzJyk7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXRhYi1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFiU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi10YWItZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhYlNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vL2Z1bmN0aW9uIHRvIGFkZCBzdHlsZSBmb3Igc2xpZGVyIGJ1dHRvbnMgcGFnZSB0aHJlZVxuZnVuY3Rpb24gc2xpZGVyQnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBzbGlkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWJ0bicpO1xuICAgIGNvbnN0IGJ0bkFycmF5ICA9IFsuLi5zbGlkZXJCdG5dO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKHNsaWRlcj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKHNsaWRlcikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlci1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vZnVuY3Rpb24gdG8gYWRkIGZvY3VzIHN0eWxlIGZvciBwYWdlIGZvdXIgYnV0dG9uc1xuZnVuY3Rpb24gdGFiRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWNobm8tYnRuXCIpO1xuICAgIGNvbnN0IGJ0bkFycmF5ID0gWy4uLmJ0bnNdO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKGJ0bj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKGJ0bikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInRlY2huby1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0ZWNobm8tYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtob21lUGFnZVNlY3Rpb24sc2Vjb25kUGFnZSxkZXN0aW5hdGlvblBsYW5ldCxwbGFuZXRJbWFnZSx0aGlyZFBhZ2UscGVyc29uSW5mbyxcbiAgICBwZXJzb25JbWFnZSxmb3VydGhQYWdlLGNob29zZVRlY2hub0ltYWdlLHRlY2hub0luZm8sY2hvb3NlQmdJbWFnZSxcbiAgICBuYXZCdG5Gb2N1cyxzbGlkZXJCdG5Gb2N1cyx0YWJGb2N1c1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgKG1pbi13aWR0aDo5MDBweCkge1xuICAgIC5ob21lLXBhZ2Utc2VjdGlvbntcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgfVxuICAgIC5idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICB9XG4gICAgLmJpZy1jaXJjbGV7XG4gICAgIHJpZ2h0OiA3MCU7XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtaGVhZGVye1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbnRyby10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB9XG4gICAgLmhvbWUtcGFnZS1uYXZ7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgwLjNyZW0sMXZ3LDAuNXJlbSk7XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGl7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6MC41cmVtO1xuICAgICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDFyZW0sMXZ3LDEuNXJlbSk7XG4gICAgIH1cbiAgICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB9XG4gICAgLm9wZW4tbmF2e1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhyLWxpbmV7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IDIwO1xuICAgIH0gXG4gICAgLyogY29udGVudCBtYWluIGhvbWUgcGFnZSAqL1xuICAgIG1haW57XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcImxlZnQgcmlnaHRcIjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIH1cbiAgICAvKiBkZXN0aW5hdGlvbiBvciBzZWNvbmQgcGFnZSAqL1xuICAgIC5wbGFuZXQtaW5mby1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDoycmVtO1xuICAgIH1cbiAgICAucGxhbmV0LW5hdi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wbGFuZXQtaW1hZ2V7XG4gICAgICBmbGV4LWdyb3c6IDEuNTtcbiAgICAgIGhlaWdodDogNDV2aDtcbiAgICB9XG4gICAgLnBsYW5ldC1pbmZve1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgXG4gICAgLyogdGhpcmQgcGFnZSAqL1xuICAgIC8qIHRoaXJkIGFuZCBmb3VydGggaW1hZ2UgaG9sZGVyIHNhbWUgc3R5bGUgKi9cbiAgICAuY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7IFxuICAgIH1cbiAgICAuY3Jldy1pbWFnZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAtMTUlO1xuICAgICAgei1pbmRleDogLTEwO1xuICAgIH1cbiAgICAudGVjaG5vLWltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgcmlnaHQ6IDElO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgei1pbmRleDogLTEwO1xuICAgIH1cbiAgICAuY3Jldy1pbmZvLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICB9XG4gICAgLnBlcnNvbi1pbmZve1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLnBlcnNvbi1kZXRhaWwtaW5mb3tcbiAgICAgIGdyaWQtYXJlYTogdG9wO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgYWxpZ24tY29udGVudDogZW5kO1xuICAgIH1cbiAgICAuc2xpZGVyLWJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IGJvdHRvbTtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgfVxuICAgIC8qIGZvdXJ0aCBwYWdlIHN0eWxlICovXG4gICAgLmN1cnJlbnQtcGFnZXtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG4gICAgLnRlY2huby1wYWdle1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgfVxuICAgICAgLnRlY2huby1pbWFnZXtcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgfVxuICAgIC50ZWNobm9sb2d5LWluZm8taG9sZGVye1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2IHRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgIGFydGljbGVcIjtcbiAgICB9XG4gICAgLnRlY2huby1idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMnJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIHBhZGRpbmc6MC41cmVtIDtcbiAgICB9XG4gICAgLnRlY2huby1wYXJ7XG4gICAgICBncmlkLWFyZWE6IGFydGljbGU7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIH1cbiAgICAudGVjaG5vLWluZm97XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OjEuNXJlbTtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Rlc2t0b3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7TUFDRSxVQUFVO01BQ1YsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtLQUNDLFVBQVU7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsY0FBYztNQUNkLHdDQUF3QztNQUN4QyxTQUFTO0lBQ1g7SUFDQTtNQUNFLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixzQ0FBc0M7S0FDdkM7SUFDRDtNQUNFLGNBQWM7S0FDZjtJQUNEO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0lBQ0EsMkJBQTJCO0lBQzNCO01BQ0UsYUFBYTtNQUNiLGdDQUFnQztNQUNoQyxxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCO0lBQ0EsK0JBQStCO0lBQy9CO01BQ0UsZUFBZTtNQUNmLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsUUFBUTtJQUNWO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxjQUFjO01BQ2QsWUFBWTtJQUNkO0lBQ0E7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLGVBQWU7SUFDakI7O0lBRUEsZUFBZTtJQUNmLDZDQUE2QztJQUM3QztNQUNFLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsU0FBUztJQUNYO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFVBQVU7TUFDVixRQUFRO01BQ1IsWUFBWTtNQUNaLFlBQVk7SUFDZDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0Esc0JBQXNCO0lBQ3RCO01BQ0Usc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7TUFDRTtNQUNBLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixhQUFhO01BQ2I7MENBQ29DO0lBQ3RDO0lBQ0E7TUFDRSxjQUFjO01BQ2QsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQjtJQUNGO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtaW4td2lkdGg6OTAwcHgpIHtcXG4gICAgLmhvbWUtcGFnZS1zZWN0aW9ue1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgICB9XFxuICAgIC5idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgIH1cXG4gICAgLmJpZy1jaXJjbGV7XFxuICAgICByaWdodDogNzAlO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtaGVhZGVye1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaW50cm8tdGl0bGV7XFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2e1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgwLjNyZW0sMXZ3LDAuNXJlbSk7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOjAuNXJlbTtcXG4gICAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMXJlbSwxdncsMS41cmVtKTtcXG4gICAgIH1cXG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICB9XFxuICAgIC5vcGVuLW5hdntcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5oci1saW5le1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHotaW5kZXg6IDIwO1xcbiAgICB9IFxcbiAgICAvKiBjb250ZW50IG1haW4gaG9tZSBwYWdlICovXFxuICAgIG1haW57XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcXCJsZWZ0IHJpZ2h0XFxcIjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmJ0bi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICB9XFxuICAgIC8qIGRlc3RpbmF0aW9uIG9yIHNlY29uZCBwYWdlICovXFxuICAgIC5wbGFuZXQtaW5mby1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6MnJlbTtcXG4gICAgfVxcbiAgICAucGxhbmV0LW5hdi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgfVxcbiAgICAucGxhbmV0LWltYWdle1xcbiAgICAgIGZsZXgtZ3JvdzogMS41O1xcbiAgICAgIGhlaWdodDogNDV2aDtcXG4gICAgfVxcbiAgICAucGxhbmV0LWluZm97XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuICAgIFxcbiAgICAvKiB0aGlyZCBwYWdlICovXFxuICAgIC8qIHRoaXJkIGFuZCBmb3VydGggaW1hZ2UgaG9sZGVyIHNhbWUgc3R5bGUgKi9cXG4gICAgLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwOyBcXG4gICAgfVxcbiAgICAuY3Jldy1pbWFnZXtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IC0xNSU7XFxuICAgICAgei1pbmRleDogLTEwO1xcbiAgICB9XFxuICAgIC50ZWNobm8taW1hZ2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICByaWdodDogMSU7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICBib3R0b206IDEwJTtcXG4gICAgICB6LWluZGV4OiAtMTA7XFxuICAgIH1cXG4gICAgLmNyZXctaW5mby1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgICB9XFxuICAgIC5wZXJzb24taW5mb3tcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5wZXJzb24tZGV0YWlsLWluZm97XFxuICAgICAgZ3JpZC1hcmVhOiB0b3A7XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICBhbGlnbi1jb250ZW50OiBlbmQ7XFxuICAgIH1cXG4gICAgLnNsaWRlci1idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogYm90dG9tO1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICB9XFxuICAgIC8qIGZvdXJ0aCBwYWdlIHN0eWxlICovXFxuICAgIC5jdXJyZW50LXBhZ2V7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgZ2FwOiAxLjVyZW07XFxuICAgIH1cXG4gICAgLnRlY2huby1wYWdle1xcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB9XFxuICAgICAgLnRlY2huby1pbWFnZXtcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICB9XFxuICAgIC50ZWNobm9sb2d5LWluZm8taG9sZGVye1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2IHRpdGxlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiAgYXJ0aWNsZVxcXCI7XFxuICAgIH1cXG4gICAgLnRlY2huby1idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDJyZW07XFxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICB9XFxuICAgIC50aXRsZXtcXG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIHBhZGRpbmc6MC41cmVtIDtcXG4gICAgfVxcbiAgICAudGVjaG5vLXBhcntcXG4gICAgICBncmlkLWFyZWE6IGFydGljbGU7XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICAudGVjaG5vLWluZm97XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OjEuNXJlbTtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYmVsbGVmYWlyLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYmFybG93LWNvbmRlbnNlZC12MTItbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJlbGxlZmFpci1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IHN3YXA7IFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xufVxuLyogYmFybG93LWNvbmRlbnNlZC1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmMicpOyBcbn1cbip7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA3MTc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwdnc7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbnVse1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIGJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufSBcbm1haW57XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsICdCZWxsZWZhaXInLG1vbm9zcGFjZTtcbn1cbi5ob21lLXBhZ2UtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiB9XG4gICAvKiBob21lcGFnZSBsaW5rIHN0eWxlICovXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gYnV0dG9ue1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIGZvbnQtc2l6ZToxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG59XG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG59XG4uaG9tZS1wYWdlLW5hdiA+IGxpe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4ycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBuYXZTbGlkZSAxcyBlYXNlLWluLW91dDtcbiB9XG4ubmF2LW1vYmlsZS1mb2N1c3tcbiAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KSA7XG4gfVxuLmhvbWUtcGFnZS1uYXYgPiA6bnRoLWNoaWxkKDEpe1xuICBtYXJnaW4tdG9wOiAycmVtO1xuIH1cblxuLmhvbWUtcGFnZS1uYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDowLjJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tb2JpbGUtYnRue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDElO1xuICB6LWluZGV4OiAxMDAwO1xuIH1cbi5sb2dve1xuICB3aWR0aDogMC43cmVtO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4vKiBzdHlsZSBmb3IgbW9iaWxlIG5hdiAqL1xuLm9wZW4tbmF2LC5jbG9zZS1uYXZ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDozJTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vcGVuLW5hdntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuLmNsb3NlLW5hdntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuLm9wZW4tbmF2e1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oci1saW5le1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDFyZW07XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxMzAsIDEzMCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBrZXlmcmFtZXMgbmF2U2xpZGV7XG4gICAgMCV7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cbi8qIGxpbmtzIGhvbGRlciBmb3IgbW9iaWxlIG5hdiAqL1xuW2RhdGEtbmF2LWxpbmtzPVwidHJ1ZVwiXXtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgXG59XG5bZGF0YS1uYXYtbGlua3M9XCJmYWxzZVwiXXtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qIGhvbWUgcGFnZSBtYWluICovXG5tYWlue1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1haW5cIjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7IFxuIH1cbi5leHBsb3JlLWJ0bntcbiAgd2lkdGg6IDE4MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDozJTtcbiAgbGVmdDoyLjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkZmYwO1xuICB9XG5cbi5iaWctY2lyY2xle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gfVxuLmJpZy1jaXJjbGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6aHNsYSgwLCAyJSwgNDclLCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cbi5ob21lLXBhZ2Utc2VjdGlvbntcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbn1cbi5pbnRyby10ZXh0LC5pbnRyby1wYXJ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICB3b3JkLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xufVxuLmludHJvLXRpdGxle1xuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG59XG4uaW50cm8tcGFye1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXJ7XG4gIHdpZHRoOiAyMHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuLnN0YXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWVmMGY1LCByZ2JhKDAsIDAsIDI1NSwgMCkpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggI2Q3ZGZmMCk7XG4gIGFuaW1hdGlvbjogIHNob290aW5nU3RhcnMgNDBzIGN1YmljLWJlemllcigwLjM2LCAwLjU1LCAwLjUxLCAwLjgxKTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBzaG9vdGluZ1N0YXJze1xuICAwJSB7IFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgXG4gIH1cbiAgMTAle1xuICAgIG9wYWNpdHk6IDE7XG4gfVxuIDEwMCUge1xuICAgb3BhY2l0eTogMDtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOTB2dywgLTkwdmgsIDApO1xuICB9XG59XG4vKiBzZWNvbmQgcGFnZSAoZGVzdGluYXRpb24pIHN0eWxlICovXG4uY3VycmVudC1wYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOjAuNXJlbTtcbiAgcGFkZGluZzoxcmVtIDtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJ1xufVxuLmxpbmstbmFtZSwubGluay1udW1iZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuIH1cbi5saW5rLW51bWJlcntcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM0ZTQ5NDk7XG59XG4ucGxhbmV0LWluZm8taG9sZGVyLC5wbGFuZXQtbmF2LWhvbGRlcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4vKiBuYXYgYnV0dG9ucyAgKi9cbi5wbGFuZXRzLWJ0bi1ob2xkZXJ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ucGxhbmV0LW5hbWUtbmF2e1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJ1xuIH1cbi5wbGFuZXQtbmFtZS1uYXY6OmFmdGVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogJyc7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbn1cbi5wbGFuZXQtbmFtZS1uYXY6aG92ZXI6OmFmdGVye1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiB9XG4gLnBsYW5ldC1uYW1lLW5hdjpmb2N1czo6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuIH1cbiAucGxhbmV0LW5hbWV7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIC5wbGFuZXQtcGFye1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gfVxuIC5hYm91dC1wbGFuZXR7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiB9XG4gLnBsYW5ldC1pbmZvLWhvbGRlcntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiB9XG4gLmRpc3RhbmNlLWluZm8sLnRyYXZlbC1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuIH1cbiAucGxhbmV0LWRpc3RhbmNlLC50cmF2ZWwtdGltZXtcbiAgZm9udC1zaXplOiAycmVtO1xuIH1cbiAucGxhbmV0LWltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnBsYW5ldHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGFuaW1hdGlvbjogcm90YXRlUGxhbmV0IDUwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBmb3J3YXJkczsgXG59XG4gQGtleWZyYW1lcyByb3RhdGVQbGFuZXR7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCV7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIC8qIHRoaXJkIHBhZ2Ugc3R5bGUgKi9cbiAuY3Jldy1uYW1le1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgd29yZC1zcGFjaW5nOiAycHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiB9XG4ucGVyc29uLWluZm97XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInRvcFwiXG4gIFwiYm90dG9tXCI7XG4gIHBhZGRpbmc6IDFyZW07XG4gfVxuLnBlcnNvbi1kZXRhaWwtaW5mb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNyZXctYmlve1xuICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uc2xpZGVyLWJ0bi1ob2xkZXJ7XG4gIGdyaWQtYXJlYTogdG9wO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOjFyZW07XG59XG4uc2xpZGVyLWJ0bntcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCA5MiwgOTIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gfVxuLnNsaWRlci1idG46Zm9jdXMgLC5zbGlkZXItYnRuLWNsaWNrZWQsLnNsaWRlci1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIH1cbi5wZXJzb24tam9ie1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzk2OTE5MTtcbiB9XG4gLyogZm9ydGggYW5kIHRoaXJkIHBhZ2UgaW1hZ2UgaG9sZGVyLGltYWdlIGhhcyBzYW1lIHN0eWxlICovXG4uY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG4gfSAgXG4gLmNyZXctaW1hZ2UsLnRlY2huby1pbWFnZXtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbjtcbn1cbi50ZWNobm8taW1hZ2V7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAvKmZvdXJ0aCBwYWdlIHN0eWxlICovXG4udGVjaG5vbG9neS1pbmZvLWhvbGRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIC50ZWNobm8tbmFtZXtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gfVxuLnRlY2huby1idG4taG9sZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuXG4gfVxuIC50ZWNobm8tYnRue1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAycmVtO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNkN2RmZjA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2NiwgNjUsIDY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cbi50ZWNobm8tYnRuOmhvdmVye1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG4udGVjaG5vLWJ0bi1jbGlja2VkLCAudGVjaG5vLWJ0bjpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi8qIG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXQgc2NyZWVuICovXG5AbWVkaWEgKG1pbi13aWR0aDo1MDFweCkge1xuICAvKiBmaXJzdCBwYWdlICovXG4gIC5ob21lLXBhZ2UtbmF2e1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOjAuNXJlbTtcbiAgIH1cbiAgLmhvbWUtbmF2LWJ0bjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IC0xO1xuICAgfVxuICAgLmhvbWUtbmF2LWJ0bjpob3Zlcjo6YWZ0ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICB9IFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpIHtcbiAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMC4zcmVtLDJ2dywwLjVyZW0pO1xuICAgIH1cbiAgLmhvbWUtcGFnZS1uYXYgPiBsaTpudGgtY2hpbGQoMSl7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXYtdGFiLWZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAgcmdiKDI1NSwgMjU1LCAyNTUpOyBcbiAgfSBcbiAgLmhvbWUtcGFnZS1zZWN0aW9ue1xuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIH1cbiAuaW50cm8tdGl0bGV7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIH1cbiAgLyogc2Vjb25kIHBhZ2UgZm9yIHRhYiAqL1xuICAuY3VycmVudC1wYWdle1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgfVxuICAubGluay1udW1iZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5zbGlkZXItYnRuLWhvbGRlcntcbiAgICBncmlkLWFyZWE6IGJvdHRvbTtcbiAgfVxuICAuY3Jldy1pbWFnZS1ob2xkZXJ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIC5jcmV3LWltYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0yMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgLnBlcnNvbi1pbmZve1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgfVxuICAvKiB0aGlyZCBwYWdlICovXG4gfVxuICBAbWVkaWEocHJlZmVycy1yZWR1Y2VkLW1vdGlvbil7XG4gICAgLyogc3RvcCBzaG9vdGluZyBzdGFyIG1vdmVtZW50ICovXG4gIC5zdGFye1xuICAgIGRpc3BsYXk6bm9uZVxuICB9XG4gIC5wbGFuZXR7XG4gICAgYW5pbWF0aW9uOiBzdG9wUm90YXRlIDNzIGluZmluaXRlIDsgXG4gIH0gXG59XG4vKiBzdG9wIHJvdGF0aW9uIGZvIHBsYW5ldCBpZiByZWR1Y2VkICovXG4gQGtleWZyYW1lcyBzdG9wUm90YXRle1xuICB0b3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICBmcm9te1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gfVxuIFxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDREQUE0RTtBQUM5RTtBQUNBLHFDQUFxQztBQUNyQztFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBbUY7QUFDckY7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtDQUNDO0VBQ0MsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtDQUMvQjtHQUNFLHdCQUF3QjtBQUMzQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0NBQWtDO0NBQ25DO0FBQ0Q7R0FDRywyQ0FBMkM7Q0FDN0M7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFB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QUNBO0lBQ0MsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDO0VBQ0Y7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7Q0FDRDtJQUNHLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0dBQ2YsZ0JBQWdCO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0EsZUFBZTtDQUNoQjtFQUNDO0lBQ0UsZ0NBQWdDO0VBQ2xDO0lBQ0U7RUFDRjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7QUFDQSx1Q0FBdUM7Q0FDdEM7RUFDQztJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0NBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYmVsbGVmYWlyLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyBcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYmVsbGVmYWlyLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG4vKiBiYXJsb3ctY29uZGVuc2VkLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYmFybG93LWNvbmRlbnNlZC12MTItbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgXFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDcxNztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbnVse1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYXtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuIGJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59IFxcbm1haW57XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCAnQmVsbGVmYWlyJyxtb25vc3BhY2U7XFxufVxcbi5ob21lLXBhZ2UtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gfVxcbiAgIC8qIGhvbWVwYWdlIGxpbmsgc3R5bGUgKi9cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gYnV0dG9ue1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIGZvbnQtc2l6ZToxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xcbn1cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxufVxcbi5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IG5hdlNsaWRlIDFzIGVhc2UtaW4tb3V0O1xcbiB9XFxuLm5hdi1tb2JpbGUtZm9jdXN7XFxuICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpIDtcXG4gfVxcbi5ob21lLXBhZ2UtbmF2ID4gOm50aC1jaGlsZCgxKXtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuIH1cXG5cXG4uaG9tZS1wYWdlLW5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOjAuMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAyJSwgNDclLCAwLjIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5tb2JpbGUtYnRue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDElO1xcbiAgei1pbmRleDogMTAwMDtcXG4gfVxcbi5sb2dve1xcbiAgd2lkdGg6IDAuN3JlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcbi8qIHN0eWxlIGZvciBtb2JpbGUgbmF2ICovXFxuLm9wZW4tbmF2LC5jbG9zZS1uYXZ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6MyU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4ub3Blbi1uYXZ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2Zyk7XFxufVxcbi5jbG9zZS1uYXZ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24tY2xvc2Uuc3ZnKTtcXG59XFxuLm9wZW4tbmF2e1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5oci1saW5le1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxMzAsIDEzMCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5hdlNsaWRle1xcbiAgICAwJXtcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuLyogbGlua3MgaG9sZGVyIGZvciBtb2JpbGUgbmF2ICovXFxuW2RhdGEtbmF2LWxpbmtzPVxcXCJ0cnVlXFxcIl17XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgXFxufVxcbltkYXRhLW5hdi1saW5rcz1cXFwiZmFsc2VcXFwiXXtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBob21lIHBhZ2UgbWFpbiAqL1xcbm1haW57XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1haW5cXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gfVxcbi5leHBsb3JlLWJ0bntcXG4gIHdpZHRoOiAxODBweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDozJTtcXG4gIGxlZnQ6Mi41JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RmZjA7XFxuICB9XFxuXFxuLmJpZy1jaXJjbGV7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuIH1cXG4uYmlnLWNpcmNsZTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6aHNsYSgwLCAyJSwgNDclLCAwLjIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcbi5ob21lLXBhZ2Utc2VjdGlvbntcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbn1cXG4uaW50cm8tdGV4dCwuaW50cm8tcGFye1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG59XFxuLmludHJvLXRpdGxle1xcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxufVxcbi5pbnRyby1wYXJ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdGFye1xcbiAgd2lkdGg6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxuLnN0YXJ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcXG4gIGFuaW1hdGlvbjogIHNob290aW5nU3RhcnMgNDBzIGN1YmljLWJlemllcigwLjM2LCAwLjU1LCAwLjUxLCAwLjgxKTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob290aW5nU3RhcnN7XFxuICAwJSB7IFxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IFxcbiAgfVxcbiAgMTAle1xcbiAgICBvcGFjaXR5OiAxO1xcbiB9XFxuIDEwMCUge1xcbiAgIG9wYWNpdHk6IDA7XFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg5MHZ3LCAtOTB2aCwgMCk7XFxuICB9XFxufVxcbi8qIHNlY29uZCBwYWdlIChkZXN0aW5hdGlvbikgc3R5bGUgKi9cXG4uY3VycmVudC1wYWdle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOjAuNXJlbTtcXG4gIHBhZGRpbmc6MXJlbSA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXFxufVxcbi5saW5rLW5hbWUsLmxpbmstbnVtYmVye1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuIH1cXG4ubGluay1udW1iZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6ICM0ZTQ5NDk7XFxufVxcbi5wbGFuZXQtaW5mby1ob2xkZXIsLnBsYW5ldC1uYXYtaG9sZGVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4vKiBuYXYgYnV0dG9ucyAgKi9cXG4ucGxhbmV0cy1idG4taG9sZGVye1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGFuZXQtbmFtZS1uYXZ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcXG4gfVxcbi5wbGFuZXQtbmFtZS1uYXY6OmFmdGVye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiAnJztcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLnBsYW5ldC1uYW1lLW5hdjpob3Zlcjo6YWZ0ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gfVxcbiAucGxhbmV0LW5hbWUtbmF2OmZvY3VzOjphZnRlcntcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiB9XFxuIC5wbGFuZXQtbmFtZXtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG4gLnBsYW5ldC1wYXJ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiB9XFxuIC5hYm91dC1wbGFuZXR7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiB9XFxuIC5wbGFuZXQtaW5mby1ob2xkZXJ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiB9XFxuIC5kaXN0YW5jZS1pbmZvLC50cmF2ZWwtaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiB9XFxuIC5wbGFuZXQtZGlzdGFuY2UsLnRyYXZlbC10aW1le1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuIC5wbGFuZXQtaW1hZ2V7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5wbGFuZXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBhbmltYXRpb246IHJvdGF0ZVBsYW5ldCA1MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZm9yd2FyZHM7IFxcbn1cXG4gQGtleWZyYW1lcyByb3RhdGVQbGFuZXR7XFxuICAwJXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAle1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4gLyogdGhpcmQgcGFnZSBzdHlsZSAqL1xcbiAuY3Jldy1uYW1le1xcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuIH1cXG4ucGVyc29uLWluZm97XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwidG9wXFxcIlxcbiAgXFxcImJvdHRvbVxcXCI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiB9XFxuLnBlcnNvbi1kZXRhaWwtaW5mb3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNyZXctYmlve1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uc2xpZGVyLWJ0bi1ob2xkZXJ7XFxuICBncmlkLWFyZWE6IHRvcDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MXJlbTtcXG59XFxuLnNsaWRlci1idG57XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDkyLCA5Mik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuIH1cXG4uc2xpZGVyLWJ0bjpmb2N1cyAsLnNsaWRlci1idG4tY2xpY2tlZCwuc2xpZGVyLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiB9XFxuLnBlcnNvbi1qb2J7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogIzk2OTE5MTtcXG4gfVxcbiAvKiBmb3J0aCBhbmQgdGhpcmQgcGFnZSBpbWFnZSBob2xkZXIsaW1hZ2UgaGFzIHNhbWUgc3R5bGUgKi9cXG4uY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzB2aDtcXG4gfSAgXFxuIC5jcmV3LWltYWdlLC50ZWNobm8taW1hZ2V7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW47XFxufVxcbi50ZWNobm8taW1hZ2V7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbiAvKmZvdXJ0aCBwYWdlIHN0eWxlICovXFxuLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbiAudGVjaG5vLW5hbWV7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiB9XFxuLnRlY2huby1idG4taG9sZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG5cXG4gfVxcbiAudGVjaG5vLWJ0bntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICNkN2RmZjA7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjYsIDY1LCA2NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4udGVjaG5vLWJ0bjpob3ZlcntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnRlY2huby1idG4tY2xpY2tlZCwgLnRlY2huby1idG46Zm9jdXN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLyogbWVkaWEgcXVlcnkgZm9yIHRhYmxldCBzY3JlZW4gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDo1MDFweCkge1xcbiAgLyogZmlyc3QgcGFnZSAqL1xcbiAgLmhvbWUtcGFnZS1uYXZ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6MC41cmVtO1xcbiAgIH1cXG4gIC5ob21lLW5hdi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgfVxcbiAgIC5ob21lLW5hdi1idG46aG92ZXI6OmFmdGVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgfSBcXG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkge1xcbiAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMC4zcmVtLDJ2dywwLjVyZW0pO1xcbiAgICB9XFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpOm50aC1jaGlsZCgxKXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm5hdi10YWItZm9jdXN7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAgcmdiKDI1NSwgMjU1LCAyNTUpOyBcXG4gIH0gXFxuICAuaG9tZS1wYWdlLXNlY3Rpb257XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICB9XFxuIC5pbnRyby10aXRsZXtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgfVxcbiAgLyogc2Vjb25kIHBhZ2UgZm9yIHRhYiAqL1xcbiAgLmN1cnJlbnQtcGFnZXtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgfVxcbiAgLmxpbmstbnVtYmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbiAgLnNsaWRlci1idG4taG9sZGVye1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbTtcXG4gIH1cXG4gIC5jcmV3LWltYWdlLWhvbGRlcntcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIC5jcmV3LWltYWdle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTIwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuICAucGVyc29uLWluZm97XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gIH1cXG4gIC8qIHRoaXJkIHBhZ2UgKi9cXG4gfVxcbiAgQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pe1xcbiAgICAvKiBzdG9wIHNob290aW5nIHN0YXIgbW92ZW1lbnQgKi9cXG4gIC5zdGFye1xcbiAgICBkaXNwbGF5Om5vbmVcXG4gIH1cXG4gIC5wbGFuZXR7XFxuICAgIGFuaW1hdGlvbjogc3RvcFJvdGF0ZSAzcyBpbmZpbml0ZSA7IFxcbiAgfSBcXG59XFxuLyogc3RvcCByb3RhdGlvbiBmbyBwbGFuZXQgaWYgcmVkdWNlZCAqL1xcbiBAa2V5ZnJhbWVzIHN0b3BSb3RhdGV7XFxuICB0b3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICBmcm9te1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gfVxcbiBcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODhhM2M2OTJmZDM0ZWIzMTFlMDRjNDA1NWY0N2NiZTkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmMGVkN2YxNTU3YTJhM2ViZjY4ZmZlNDliYWE0NjEyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNmQ1MWNmNjFlOThjZTQ1ZWI2MTFiNjA2N2UxMjg2Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmQ2NDcxMjg0OTZkZGM2MzhhY2Q3OTgwZGIxMjgyOWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiNDJiNzc1ZWUwYjEyNDMwZjNhNDQxYzFmOWNhMTU4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzU0MGZiYjYxOTIzMDY0ZjA2NWUyZjgxNTMyZDMyMmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU0YzdkZWY0Mjc4MjRlZjU0M2MwOGMyZGVkNzM1ZDc4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmMzMGYzNWIwNWZjMGJjNGVlNDdhNTcxN2U0NDI4YTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY2NWUxOThhZGMyMmZjZGY3ODEwZTY5ZjRiZTU5MmZiLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGE5YTU0MjQ1ODhiNzNlYzYxYzJmNjdmNGI0YjQwNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjMjcxZjk5YmFiOGIwNmQ3YWI1OGRiNTdhNTNjMDlhLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDY4YjkyMmM2OWJmNTQ5OWI0YmMzN2ZjMzg1ZWE2YjUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUwMTMxZTI3ZTc1MWVhZDFhOTIyYzAxM2Y1ZGRhNzE1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZjU1ZDM0NmQ4YjZjZmQ5NWFiNzZkNjAwZDgwNTY2YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2U5NWY3ZDBhMTZmZTJlYmY0YzY5OTJjNGQyODYyMDcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMzYmUzMjM4M2YzMWQwZjc2ZDk2NDI0OTMzMzI2YWQ1LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWIyMjRjODY2MzI1MTI3MGQ3OWYzYzU5NDlmNmVmZWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdmNTVmNzIxYjRhNjRiN2E1NmE4MWU3OGVjNjhiZDhkLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDI4N2QwNzE4MmRlMzAxNTk1MmY0NGRjNzQ1N2ExYWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI1YTNjOTBlOWM4ZWViMmNiNjhkYzU0NTIzMWI5ZDc4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDRiMDc4ZjljZTE3ZTY4NmFlOTlkZWM5MjBlNDMzM2IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgwNzM4YmM2MWU1ZDEyMTdhMTlhMjAxYmU3NWY4YmE4LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2RmMzg2NGVjYmZkZjIwZThjM2JjNTI2NGI2YjUzZTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEzZjdhZGVjYmNiM2MzZjE3MGQ4NTI1MDU4NGZhN2JiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzllZmNjMzI4MWZhNjgwMTA3NzJiYWMxNWVhMzM5OC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDQ3ZmRhNjNjYmQ4YjNmZWRiYmMxYjJhNTNmNjQ0NzAuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUyNzNlZmE3YzUwZTk2ZWYzZTUxZTdhMmI1NDA0OGNlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NjVmN2YyYzA1MzQ0MDNmMTFiNzE5OTRmNDMxMTIxMC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjdiNTg5YjNjMGM1ZWYwODExZDQxNThiZmE1Y2VlNjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUzZTNhMWMzMGNkNGZiYTg5YTYyYzM2NzU2ZTdiMzkzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0OGMzOGIwMjgyMTdlZTAwOTZjNGI2MGQ4MDQ2YzA4Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDI4MWE1OWZmNzE4NjQ4OGZlNmFkZTVkOWVmNzc0NWUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ2NzJkYTgxZDVmZjNhZGE3MzAxYzAwNzdlNzNmODE3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZjNjYTVjMDVhM2U4NzE5MWVhN2YxODJmY2JlMzgzMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGM3NTg5NTVhMTc4YmRjYzMyMzAwZmNmNGMzZmQwOGQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkMGFjMTM4YWZlZjk4YzE2NjZhZmIyOGUzYmNhMTMwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NTUyM2RiNWRlMTMwNTdmMzZlYTc3MTk2MWE1MWE5Ni5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LWRlc2t0b3AuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWNyZXctbW9iaWxlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy9iYWNrZ3JvdW5kLWNyZXctbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LWJnIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1hbm91c2hlaC1hbnNhcmkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmdcIixcblx0XCIuL2ltYWdlLWRvdWdsYXMtaHVybGV5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmdcIixcblx0XCIuL2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmdcIixcblx0XCIuL2ltYWdlLXZpY3Rvci1nbG92ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLXZpY3Rvci1nbG92ZXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3JldyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicFwiLFxuXHRcIi4vaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS53ZWJwXCIsXG5cdFwiLi9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLndlYnBcIixcblx0XCIuL2ltYWdlLXZpY3Rvci1nbG92ZXIud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnBcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3IHN5bmMgcmVjdXJzaXZlIFxcXFwuKHdlYnApJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLWRlc2t0b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZy9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLWRlc2t0b3AuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZy9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtZXVyb3BhLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtZXVyb3BhLnBuZ1wiLFxuXHRcIi4vaW1hZ2UtbWFycy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMucG5nXCIsXG5cdFwiLi9pbWFnZS1tb29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmdcIixcblx0XCIuL2ltYWdlLXRpdGFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24gc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZS1ldXJvcGEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtZXVyb3BhLndlYnBcIixcblx0XCIuL2ltYWdlLW1hcnMud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy53ZWJwXCIsXG5cdFwiLi9pbWFnZS1tb29uLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicFwiLFxuXHRcIi4vaW1hZ2UtdGl0YW4ud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ud2VicFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uIHN5bmMgXFxcXC4od2VicCkkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtaG9tZS1tb2JpbGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1tb2JpbGUuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ljb24tY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWNsb3NlLnN2Zz85NTlhXCIsXG5cdFwiLi9pY29uLWhhbWJ1cmdlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2Zz84YTIzXCIsXG5cdFwiLi9sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucyBzeW5jIFxcXFwuKHN2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC10ZWNobm9sb2d5LW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktdGFibGV0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtbGF1bmNoLXZlaGljbGUtbGFuZHNjYXBlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcvaW1hZ2UtbGF1bmNoLXZlaGljbGUtbGFuZHNjYXBlLmpwZ1wiLFxuXHRcIi4vaW1hZ2Utc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLWxhbmRzY2FwZS5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlcG9ydC1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZXBvcnQtbGFuZHNjYXBlLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnIHN5bmMgXFxcXC4oanBnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtbGF1bmNoLXZlaGljbGUtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZ1wiLFxuXHRcIi4vaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcvaW1hZ2Utc3BhY2Vwb3J0LXBvcnRyYWl0LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvcG9ydHJhaXQtYmcgc3luYyBcXFxcLihqcGcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZGVza3RvcC5jc3NcIjtcbmltcG9ydCB7IGhvbWVQYWdlU2VjdGlvbixzZWNvbmRQYWdlLGRlc3RpbmF0aW9uUGxhbmV0LHBsYW5ldEltYWdlLCBcbiAgICB0aGlyZFBhZ2UscGVyc29uSW5mbyxwZXJzb25JbWFnZSxcbiAgICBmb3VydGhQYWdlLHRlY2hub0luZm8sY2hvb3NlVGVjaG5vSW1hZ2UsXG4gICAgY2hvb3NlQmdJbWFnZSxuYXZCdG5Gb2N1cyxzbGlkZXJCdG5Gb2N1cyx0YWJGb2N1c1xufSBmcm9tIFwiLi9kb20tY29tcG9uZW50XCI7XG5jb25zdCBwYWdlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhZ2UtbmF2XVwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuLW1lbnVdXCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlLW1lbnVdXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdi1saW5rc11cIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMXB4KVwiKTtcblxuXG5cbmNob29zZUJnSW1hZ2UoYm9keSwwKTtcbmhvbWVQYWdlU2VjdGlvbihtYWluKTtcbm5hdkJ0bkZvY3VzKDApO1xucGFnZU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlPT57XG4gICAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWhvbWUtYnRuXVwiKSl7XG4gICAgICAgIGhvbWVQYWdlU2VjdGlvbihtYWluKTtcbiAgICAgICAgY2hvb3NlQmdJbWFnZShib2R5LDApO1xuICAgICAgICAvL2ZvciBtb2JpbGUgaGlkZVxuICAgICAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2QnRuRm9jdXMoMCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWRlc3RpbmF0aW9uLWJ0bl1cIikpe1xuICAgICAgICBzZWNvbmRQYWdlKG1haW4pO1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmF2PVwiMFwiXWApO1xuICAgICAgICBidG4uZm9jdXMoKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMik7IC8vMiByZXAgbW9vbiBpbWFnZVxuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDApO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMSk7XG4gICAgICAgIC8vaGlkZSBtb2JpbGUgbWVudVxuICAgICAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2QnRuRm9jdXMoMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWNyZXctYnRuXVwiKSl7XG4gICAgICAgIHRoaXJkUGFnZShtYWluKTtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwzKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMyk7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwyKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMyk7XG4gICAgICAgIC8vZm9yIG1vYmlsZVxuICAgICAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2QnRuRm9jdXMoMik7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRlY2hub2xvZ3ktYnRuXVwiKSl7XG4gICAgICAgIGZvdXJ0aFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwwKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMCk7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwzKTtcbiAgICAgICAgdGFiRm9jdXMoMCk7XG4gICAgICAgIC8vZm9yIG1vYmlsZSBoaWRlIG1lbnVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDMpO1xuICAgIH1cbn0pO1xubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWV4cGxvcmUtYnRuXVwiKSl7XG4gICAgICAgIHNlY29uZFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYXY9XCIwXCJdYCk7XG4gICAgICAgIGJ0bi5mb2N1cygpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwyKTtcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICAgICAgbmF2QnRuRm9jdXMoMSk7XG4gICAgfVxuICAgIC8vc2Vjb25kIHBhZ2UgZXZlbnRzIFxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtbmF2PVwiMFwiXWApKXtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIHBsYW5ldEltYWdlKGltYWdlSG9sZGVyLDIpO1xuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjFcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwxKTsgLy8xIHJlcCBtYXJzXG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtbmF2PVwiMlwiXWApKXtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIHBsYW5ldEltYWdlKGltYWdlSG9sZGVyLDApOyAvLzAgcmVwIGV1cm9wYVxuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjNcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwzKTsvLzMgcmVwIHRpdGFuXG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMyk7XG4gICAgfVxuICAgIC8vdGhpcmQgcGFnZSBldmVudFxuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLWNyZXc9XCIwXCJdYCkpe1xuICAgICAgICBjb25zdCBjcmV3QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWJpb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctaW1hZ2VdXCIpO1xuICAgICAgICBjb25zdCBzbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNyZXc9XCIwXCJdYCk7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMCk7XG4gICAgICAgIHNsaWRlQnRuLmZvY3VzKCk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDApO1xuICAgICAgICBzbGlkZXJCdG5Gb2N1cygwKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiMVwiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiMVwiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDEpO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwxKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtY3Jldz1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIGNvbnN0IHNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3Jldz1cIjJcIl1gKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwyKTtcbiAgICAgICAgc2xpZGVCdG4uZm9jdXMoKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMik7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLWNyZXc9XCIzXCJdYCkpe1xuICAgICAgICBjb25zdCBjcmV3QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWJpb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctaW1hZ2VdXCIpO1xuICAgICAgICBjb25zdCBzbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNyZXc9XCIzXCJdYCk7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMyk7XG4gICAgICAgIHNsaWRlQnRuLmZvY3VzKCk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDMpO1xuICAgICAgICBzbGlkZXJCdG5Gb2N1cygzKTtcbiAgICB9XG4gICAgLy9mb3VydGggcGFnZSBldmVudFxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtdGVjaG5vbG9neT1cIjBcIl1gKSl7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwwKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMCk7XG4gICAgICAgIHRhYkZvY3VzKDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLXRlY2hub2xvZ3k9XCIxXCJdYCkpe1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMSk7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDEpO1xuICAgICAgICB0YWJGb2N1cygxKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS10ZWNobm9sb2d5PVwiMlwiXWApKXtcbiAgICAgICAgY29uc3QgdGVjaEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWluZm9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW1hZ2VdXCIpO1xuICAgICAgICB0ZWNobm9JbmZvKHRlY2hBcnRpY2xlLDIpO1xuICAgICAgICBjaG9vc2VUZWNobm9JbWFnZShpbWFnZUhvbGRlciwyKTtcbiAgICAgICAgdGFiRm9jdXMoMik7XG4gICAgfVxufSk7XG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihuYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIikgPT09IFwiZmFsc2VcIil7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwidHJ1ZVwiKTtcbiAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgIH1cbn0pO1xuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGlmKG5hdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiKSA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xubGFyZ2VTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoKT0+e1xuICAgIC8vcmVtb3ZlIG1vYmlsZSBob3ZlciBhbmQgZm9jdXMgc3R5bGVcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UtbmF2JykuY2hpbGRyZW47IFxuICAgIGNvbnN0IGxpID0gWy4uLnVsXTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PXRydWUpe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG4gICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsaS5mb3JFYWNoKG5hdj0+e1xuICAgICAgICAgICAgbmF2LnN0eWxlLmJvcmRlclJpZ2h0PSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT1mYWxzZSl7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwiZmFsc2VcIik7XG4gICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG59KTtcbmlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwidHJ1ZVwiKTtcbiAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICBcbiAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZWxzZSBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cblxuXG4iXSwibmFtZXMiOlsiX2RhdGEiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwibWFwIiwibG9nbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ29TdmciLCJjb250ZXh0Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImhvbWVQYWdlU2VjdGlvbiIsImVsZSIsInRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJwbGFuZXRJbWFnZSIsIm51bWJlciIsIm1vYmlsZVNjcmVlbiIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJsYXJnZVNjcmVlbiIsInBsYW5ldEltYWdlc1RhYiIsInBsYW5ldExhcmdlSW1hZ2UiLCJtYXRjaGVzIiwic2Vjb25kUGFnZSIsImRlc3RpbmF0aW9uUGxhbmV0IiwiZGF0YSIsImRlc3RpbmF0aW9ucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImRpc3RhbmNlIiwidHJhdmVsIiwidGhpcmRQYWdlIiwicGVyc29uSW5mbyIsImJpb1RlbXBsYXRlIiwiY3JldyIsInJvbGUiLCJiaW8iLCJwZXJzb25JbWFnZU9yZGVyIiwicGVyc29uSW1hZ2UiLCJ0YWJJbWFnZXMiLCJsYXJnZUltYWdlcyIsImZvdXJ0aFBhZ2UiLCJpbWFnZU9yZGVyIiwiY2hvb3NlVGVjaG5vSW1hZ2UiLCJ0ZWNobm9JbmZvIiwidGVjaG5vbG9neSIsImNob29zZUJnSW1hZ2UiLCJ0YWJTY3JlZW4iLCJwaWNrQmciLCJob21lSW1hZ2VzIiwiZGVzdGluYXRpb25JbWFnZXMiLCJjcmV3SW1hZ2VzIiwidGVjaG5vSW1hZ2VzIiwiaW1hZ2VzVGFiIiwibmF2QnRuRm9jdXMiLCJ1bCIsImFsbE5hdiIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm5hdiIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzbGlkZXJCdG5Gb2N1cyIsInNsaWRlckJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5BcnJheSIsImZvY3VzIiwic2xpZGVyIiwidGFiRm9jdXMiLCJidG5zIiwiYnRuIiwiX2RvbUNvbXBvbmVudCIsInBhZ2VOYXYiLCJtYWluIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiYXJ0aWNsZSIsImltYWdlSG9sZGVyIiwiY3Jld0FydGljbGUiLCJ0ZWNoQXJ0aWNsZSIsInNsaWRlQnRuIiwiZ2V0QXR0cmlidXRlIiwibGkiLCJib3JkZXJSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=