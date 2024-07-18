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
 

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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;AAChB;AACA;EACE,aAAa;EACb,0BAA0B;AAC5B;AACA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB;CACD;AACD;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,2CAA2C;EAC3C,oBAAoB;EACpB,uCAAuC;AACzC;AACA;EACE,oBAAoB;CACrB;CACA;EACC,oBAAoB;CACrB;CACA;EACC,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;CACnB;CACA;EACC,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,eAAe;CAChB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;EACxB,yDAAyD;AAC3D;CACC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;CACC,qBAAqB;CACrB;EACC,sBAAsB;EACtB,yBAAyB;EACzB,eAAe;EACf,wBAAwB;EACxB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,aAAa;EACb;;UAEQ;EACR,aAAa;CACd;AACD;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,cAAc;EACd,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,iCAAiC;EACjC,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;EACzB,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;CACf;CACA,2DAA2D;AAC5D;EACE,WAAW;EACX,YAAY;CACb;CACA;EACC,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,sBAAsB;EACtB;CACD,qBAAqB;AACtB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;AACf;CACC;EACC,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,sBAAsB;;CAEvB;CACA;EACC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iCAAiC;EACjC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA,kCAAkC;AAClC;EACE,eAAe;EACf;IACE,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,UAAU;IACV,WAAW;IACX,UAAU;GACX;EACD;IACE,WAAW;IACX,iBAAiB;IACjB,MAAM;IACN,OAAO;IACP,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,8BAA8B;IAC9B,uBAAuB;IACvB,sCAAsC;IACtC,WAAW;GACZ;GACA;IACC,mBAAmB;IACnB,sBAAsB;EACxB;EACA;IACE,wCAAwC;IACxC;EACF;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;CACD;IACG,eAAe;IACf,mBAAmB;EACrB;EACA,wBAAwB;EACxB;IACE,eAAe;EACjB;EACA;IACE,cAAc;GACf,gBAAgB;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,QAAQ;IACR,SAAS;EACX;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA,eAAe;CAChB;EACC;IACE,gCAAgC;EAClC;IACE;EACF;EACA;IACE,kCAAkC;EACpC;AACF;AACA,uCAAuC;CACtC;EACC;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;CACD","sourcesContent":["/* bellefair-regular - latin */\n@font-face {\n  font-display: swap; \n  font-family: 'Bellefair';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/bellefair-v14-latin-regular.woff2') format('woff2');\n}\n/* barlow-condensed-regular - latin */\n@font-face {\n  font-display: swap;\n  font-family: 'Barlow Condensed';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./assets/fonts/barlow-condensed-v12-latin-regular.woff2') format('woff2'); \n}\n*{\n  margin: 0;\n  padding: 0;\n}\nbody{\n  background-color: #060717;\n  background-size: cover; \n  background-repeat: no-repeat;\n  width: 100vw;\n  transition: background-image 200ms ease-in-out;\n  overflow-x: hidden;\n}\nul{\n  list-style: none;\n}\na{\n  text-decoration: none;\n}\n button{\n  cursor: pointer;\n} \nmain{\n  font-family: 'Barlow Condensed', 'Bellefair',monospace;\n}\n.home-page-header{\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n }\n   /* homepage link style */\n.home-page-nav > li > button{\n  border: none;\n  padding-block: 1rem;\n  font-size:1.2rem;\n  background-color: inherit;\n  color: white;\n  text-align: start;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li > span{\n  font-size: 1.2rem;\n  font-weight: 700;\n  font-family: 'Barlow Condensed';\n}\n.home-page-nav > li{\n  position: relative;\n  display: flex;\n  gap: 0.2rem;\n  align-items: center;\n  width: 100%;\n  animation: navSlide 1s ease-in-out;\n }\n.nav-mobile-focus{\n   border-right: 2px solid rgb(255, 255, 255) ;\n }\n.home-page-nav > :nth-child(1){\n  margin-top: 2rem;\n }\n\n.home-page-nav{\n  display: flex;\n  flex-direction: column;\n  gap:0.2rem;\n  position: absolute;\n  right: 0;\n  background-color: hsla(0, 2%, 47%, 0.2);\n  padding: 1rem;\n  width: 60%;\n  height: 100vh;\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.mobile-btn{\n  position: absolute;\n  right: 0;\n  top: 1%;\n  z-index: 1000;\n }\n.logo{\n  width: 0.7rem;\n  aspect-ratio: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  padding: 1.5rem;\n}\n/* style for mobile nav */\n.open-nav,.close-nav{\n  display: none;\n  position: absolute;\n  right: 0;\n  top:3%;\n  width: 2rem;\n  background-color: inherit;\n  transform: translateX(-10%);\n  aspect-ratio: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n}\n.open-nav{\n  background-image: url(./assets/images/icons/icon-hamburger.svg);\n}\n.close-nav{\n  background-image: url(./assets/images/icons/icon-close.svg);\n}\n.open-nav{\n  display: block;\n}\n.hr-line{\n  display: none;\n  position: relative;\n  left: 1rem;\n  width: 50%;\n  height: 2px;\n  background-color: rgb(130, 130, 130);\n  z-index: 1;\n}\n\n@keyframes navSlide{\n    0%{\n      opacity: 0.5;\n      transform: translateX(20%);\n    }\n    100%{\n      opacity: 1;\n      transform: translateX(0%);\n    }\n}\n/* links holder for mobile nav */\n[data-nav-links=\"true\"]{\n  opacity: 1;\n  display: flex;\n  color: white;\n  border-radius: 0.2rem;\n    \n}\n[data-nav-links=\"false\"]{\n  opacity: 0;\n  display: none;\n}\n/* home page main */\nmain{\n  display: grid;\n  grid-template-areas: \"main\";\n  justify-items: center;\n  color: white; \n }\n.explore-btn{\n  width: 180px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  margin: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border: none;\n  position:absolute;\n  top:3%;\n  left:2.5%;\n  background-color: #d7dff0;\n  }\n\n.big-circle{\n  position: relative;\n  width: 250px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n }\n.big-circle:hover{\n  background-color:hsla(0, 2%, 47%, 0.2);\n  backdrop-filter: blur(2px);\n}\n.home-page-section{\n  color: white;\n  padding-inline: 1rem;\n}\n.intro-text,.intro-par{\n  font-size: 1rem;\n  letter-spacing: 1.5px;\n  line-height: 1.3rem;\n  word-spacing: 1px;\n  text-align: center;\n  font-family: 'Barlow Condensed';\n}\n.intro-title{\n  padding-block: 0.5rem;\n  font-size: 3rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: 'Bellefair';\n}\n.intro-par{\n  font-size: 1rem;\n  text-align: justify;\n  width: 100%;\n}\n.star{\n  width: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  }\n.star{\n  position: absolute;\n  bottom: 0;\n  opacity: 0;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation:  shootingStars 40s cubic-bezier(0.36, 0.55, 0.51, 0.81);\n  animation-direction: alternate;\n  animation-iteration-count: infinite; \n  animation-fill-mode: forwards;\n}\n@keyframes shootingStars{\n  0% { \n   transform: translate3d(0, 0, 0); \n  }\n  10%{\n    opacity: 1;\n }\n 100% {\n   opacity: 0;\n   transform: translate3d(90vw, -90vh, 0);\n  }\n}\n/* second page (destination) style */\n.current-page{\n  display: flex;\n  justify-content: center;\n  gap:0.5rem;\n  padding:1rem ;\n  font-family: 'Barlow Condensed'\n}\n.link-name,.link-number{\n  font-family: 'Barlow Condensed';\n  letter-spacing: 2px;\n  font-weight: 500;\n  font-size: 1.5rem;\n }\n.link-number{\n  display: none;\n  color: #4e4949;\n}\n.planet-info-holder,.planet-nav-holder{\n  display: grid;\n  grid-template-columns: 1fr;\n}\n/* nav buttons  */\n.planets-btn-holder{\n  justify-self: center;\n  align-content: center;\n}\n.planet-name-nav{\n  border: none;\n  background-color: inherit;\n  color: white;\n  padding: 0.6rem;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  font-family: 'Barlow Condensed'\n }\n.planet-name-nav::after{\n  display: block;\n  content: '';\n  margin-top: 0.5rem;\n  border-bottom: solid 3px rgb(255, 255, 255);\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n}\n.planet-name-nav:hover::after{\n  transform: scaleX(1);\n }\n .planet-name-nav:focus::after{\n  transform: scaleX(1);\n }\n .planet-name{\n  font-size: 3rem;\n  font-family: 'Bellefair';\n  font-weight: 500;\n  text-align: center;\n }\n .planet-par{\n  letter-spacing: 2px;\n  line-height: 1.3rem;\n  max-width: 500px;\n  text-align: center;\n  padding: 1rem;\n }\n .about-planet{\n  text-align: justify;\n  padding: 0.3rem;\n }\n .planet-info-holder{\n  text-align: left;\n }\n .distance-info,.travel-info{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n }\n .planet-distance,.travel-time{\n  font-size: 2rem;\n }\n .planet-image{\n  width: 100%;\n  height: 40vh;\n  padding: 1rem;\n}\n.planet{\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  animation: rotatePlanet 50s ease-in-out infinite forwards; \n}\n @keyframes rotatePlanet{\n  0%{\n    transform: rotate(0deg);\n  }\n  100%{\n    transform: rotate(360deg);\n  }\n}\n /* third page style */\n .crew-name{\n  padding-bottom: 0.4rem;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-family: 'Bellefair';\n  letter-spacing: 2px;\n  word-spacing: 2px;\n  word-wrap: break-word;\n }\n.person-info{\n  display: grid;\n  grid-template-areas: \n  \"top\"\n  \"bottom\";\n  padding: 1rem;\n }\n.person-detail-info{\n  text-align: center;\n}\n.crew-bio{\n  line-height: 1.2rem;\n  letter-spacing: 2px;\n  word-wrap: break-word;\n  height: 150px;\n}\n.slider-btn-holder{\n  grid-area: top;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  padding:1rem;\n}\n.slider-btn{\n  padding: 0.5rem;\n  border: none;\n  aspect-ratio: 1;\n  background-color: rgb(95, 92, 92);\n  border-radius: 50%;\n }\n.slider-btn:focus ,.slider-btn-clicked,.slider-btn:hover{\n  background-color: white;\n }\n.person-job{\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  font-size: 1.3rem;\n  color: #969191;\n }\n /* forth and third page image holder,image has same style */\n.crew-image-holder,.techno-image-holder{\n  width: 100%;\n  height: 30vh;\n }  \n .crew-image,.techno-image{\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 1s ease-in;\n}\n.techno-image{\n  background-size: cover;\n  }\n /*fourth page style */\n.technology-info-holder{\n  text-align: center;\n  letter-spacing: 2px;\n  line-height: 1.5rem;\n  padding: 1rem;\n}\n .techno-name{\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-bottom: 1rem;\n  text-transform: uppercase;\n  font-family: 'Bellefair';\n  padding-top: 0.5rem;\n }\n.techno-btn-holder{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding-bottom: 0.3rem;\n\n }\n .techno-btn{\n  border: none;\n  width: 2rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  color: #d7dff0;\n  border: 2px solid rgb(66, 65, 65);\n  background-color: inherit;\n}\n.techno-btn:hover{\n  border: 2px solid rgb(255, 255, 255);\n}\n.techno-btn-clicked, .techno-btn:focus{\n  background-color: white;\n  color: black;\n}\n/* media query for tablet screen */\n@media (min-width:501px) {\n  /* first page */\n  .home-page-nav{\n    height: fit-content;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    justify-content:space-between;\n    margin-top: 0;\n    padding: 0;\n    width: 100%;\n    gap:0.5rem;\n   }\n  .home-nav-btn::after {\n    content: \"\";\n    position:absolute;\n    top: 0;\n    left: 0;\n    transform: scale(0);\n    height: 100%;\n    width:100%;\n    border-radius: 0.2rem;\n    background-color: rgb(0, 0, 0);\n    transform-origin: right;\n    transition:transform 400ms ease-in-out;\n    z-index: -1;\n   }\n   .home-nav-btn:hover::after{\n    transform: scale(1);\n    transform-origin: left;\n  } \n  .home-page-nav > li {\n    padding-inline: clamp(0.3rem,2vw,0.5rem);\n    }\n  .home-page-nav > li:nth-child(1){\n    margin-top: 0;\n  }\n  .home-page-nav > li > span{\n    display: none;\n  }\n  .nav-tab-focus{\n    border-bottom: 4px solid  rgb(255, 255, 255); \n  } \n  .home-page-section{\n    padding-block: 1rem;\n  }\n .intro-title{\n    font-size: 4rem;\n    padding-block: 1rem;\n  }\n  /* second page for tab */\n  .current-page{\n    padding: 0.3rem;\n  }\n  .link-number{\n    display: block;\n   font-weight: 700;\n  }\n  .slider-btn-holder{\n    grid-area: bottom;\n  }\n  .crew-image-holder{\n    width: 0;\n    height: 0;\n  }\n  .crew-image{\n    position: absolute;\n    bottom: -20%;\n    height: 50%;\n  }\n  .person-info{\n    padding: 0.3rem;\n  }\n  /* third page */\n }\n  @media(prefers-reduced-motion){\n    /* stop shooting star movement */\n  .star{\n    display:none\n  }\n  .planet{\n    animation: stopRotate 3s infinite ; \n  } \n}\n/* stop rotation fo planet if reduced */\n @keyframes stopRotate{\n  to{\n    transform: rotate(0deg);\n  }\n  from{\n    transform: rotate(0deg);\n  }\n }\n \n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtB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QWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1QiwwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhGLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIsMENBQTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEYsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNB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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7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RSxRQUFRLENBQUNFLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxPQUFPO0VBQ3BDO0FBRUosQ0FBQyxDQUFDO0FBQ0YsSUFBRzdELFdBQVcsQ0FBQ0csT0FBTyxLQUFLLElBQUksRUFBQztFQUM1QnFDLEdBQUcsQ0FBQ29CLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxNQUFNLENBQUM7RUFDekN6RSxTQUFTLENBQUNDLEtBQUssQ0FBQ3lFLE9BQU8sR0FBRyxNQUFNO0VBQ2hDM0UsUUFBUSxDQUFDRSxLQUFLLENBQUN5RSxPQUFPLEdBQUcsTUFBTTtBQUNuQyxDQUFDLE1BQ0ksSUFBRzdELFdBQVcsQ0FBQ0csT0FBTyxLQUFLLEtBQUssRUFBQztFQUNsQ2pCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDeUUsT0FBTyxHQUFHLE9BQU87QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZG9tLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Rlc2t0b3AuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LXRhYmxldC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtbWFyay1zaHV0dGxld29ydGgud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS10aXRhbi53ZWJwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24taGFtYnVyZ2VyLnN2ZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktZGVza3RvcC5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktbW9iaWxlLmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnL2JhY2tncm91bmQtdGVjaG5vbG9neS10YWJsZXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1sYXVuY2gtdmVoaWNsZS1sYW5kc2NhcGUuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLWxhbmRzY2FwZS5qcGciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnL2ltYWdlLXNwYWNlcG9ydC1sYW5kc2NhcGUuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZy9pbWFnZS1zcGFjZS1jYXBzdWxlLXBvcnRyYWl0LmpwZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZy9pbWFnZS1zcGFjZXBvcnQtcG9ydHJhaXQuanBnIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZGVza3RvcC5jc3M/OTMwMCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LyBzeW5jIFxcLih3ZWJwKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uLWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi8gc3luYyBub25yZWN1cnNpdmUgXFwuKHdlYnApJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihzdmcpJCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vLWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKGpwZykkIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4oanBnKSQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuLy9mdW5jdGlvbiB0byBpbXBvcnQgaW1hZ2UgdXNpbmcgcmVxdWlyZS5jb250ZXh0XG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgIHJldHVybiByLmtleXMoKS5tYXAocik7XG59XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmNvbnN0IGxvZ29TdmcgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvJywgZmFsc2UsIC9cXC4oc3ZnKSQvKSk7XG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuLW1lbnVdXCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlLW1lbnVdXCIpO1xubG9nby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoXCIke2xvZ29TdmdbMl0uZGVmYXVsdH1cIilgO1xub3Blbk1lbnUuc3R5bGUuYmFja2dyb3VuZEltYWdlID1gdXJsKFwiJHtsb2dvU3ZnWzFdLmRlZmF1bHR9XCIpYDtcbmNsb3NlTWVudS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPWB1cmwoXCIke2xvZ29TdmdbMF0uZGVmYXVsdH1cIilgO1xuLy9mdW5jdGlvbiB0byBkcmF3IGhvbWVwYWdlIGNvbnRlbnRcbmZ1bmN0aW9uIGhvbWVQYWdlU2VjdGlvbihlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPHNlY3Rpb24gY2xhc3M9XCJob21lLXBhZ2Utc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnRyby10ZXh0XCI+U08gWU9VIFdBTlQgVE8gVFJBVkVMIFRPPC9kaXY+XG4gICAgPGgxIGNsYXNzPVwiaW50cm8tdGl0bGVcIj5TUEFDRTwvaDE+XG4gICAgPHAgY2xhc3M9XCJpbnRyby1wYXJcIj5MZXQncyBmYWNlIGl0O2lmIHlvdSB3YW50IHRvIGdvIHRvIHNwYWNlLHlvdSBtaWdodCBhcyB3ZWxsXG4gICAgICBnZW51aW5lbHkgZ28gdG8gb3V0ZXIgc3BhY2UgYW5kIG5vdCBob3ZlciBraW5kIG9mIG9uIHRoZVxuICAgICAgZWRnZSBvZiBpdC5XZWxsIHNpdCBiYWNrLCBhbmQgcmVsYXggYmVjYXVzZSB3ZSB3aWxsIGdpdmUgeW91XG4gICAgICBhIHRydWx5IG91dCBvZiB0aGlzIHdvcmxkIGV4cGVyaWVuY2UuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJzdGFyLWhvbGRlclwiPlxuICAgICA8ZGl2IGNsYXNzPVwic3RhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgPC9zZWN0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJidG4taG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJpZy1jaXJjbGVcIj5cbiAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJleHBsb3JlXCIgY2xhc3M9XCJleHBsb3JlLWJ0blwiIGRhdGEtZXhwbG9yZS1idG4gPkVYUExPUkU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiBjaG9vc2UgcGxhbmV0IGltYWdlXG5mdW5jdGlvbiBwbGFuZXRJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgLy93ZWJwIGZvciBzbWFsbCBzY3JlZW4gYW5kIHBuZyBmb3IgbGFyZ2Ugc2NyZWVuXG4gICAgLy9pbWFnZSBzdG9yZWQgaW4gdGhpcyBvcmRlciBldXJvcGEsbWFycyxtb29uLHRpdGFuIFxuICAgIGNvbnN0IHBsYW5ldEltYWdlc1RhYiA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbicsIGZhbHNlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBwbGFuZXRMYXJnZUltYWdlID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uJywgZmFsc2UsIC9cXC4ocG5nKSQvKSk7XG4gICAgaWYobW9iaWxlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0SW1hZ2VzVGFiW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGxhbmV0TGFyZ2VJbWFnZVtudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIGRlc3RpbmF0aW9uIHBhZ2UgKHNlY29uZCBwYWdlKVxuZnVuY3Rpb24gc2Vjb25kUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICA8c2VjdGlvbiBjbGFzcz1cInBsYW5ldC1pbmZvLWhvbGRlclwiPlxuICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgPHNwYW4gY2xhc3M9XCJsaW5rLW51bWJlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjAxPC9zcGFuPlxuICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+UElDSyBZT1VSIERFU1RJTkFUSU9OPC9kaXY+XG4gICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwicGxhbmV0LWltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5ldFwiPjwvZGl2PlxuICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwbGFuZXQtbmF2LWhvbGRlclwiPlxuICA8bmF2IGNsYXNzPVwicGxhbmV0cy1idG4taG9sZGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYW5ldC1uYW1lLW5hdlwiIGRhdGEtbmF2PVwiMFwiPk1PT048L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIxXCI+TUFSUzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJwbGFuZXQtbmFtZS1uYXZcIiBkYXRhLW5hdj1cIjJcIj5FVVJPUEE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIzXCI+VElUQU48L2J1dHRvbj5cbiAgIDwvbmF2PlxuICA8YXJ0aWNsZSBjbGFzcz1cImFib3V0LXBsYW5ldFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPjwvYXJ0aWNsZT5cblxuPC9zZWN0aW9uPlxuIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uUGxhbmV0KGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPGgxIGNsYXNzPVwicGxhbmV0LW5hbWVcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0ubmFtZX08L2gxPlxuICA8cCBjbGFzcz1cInBsYW5ldC1wYXJcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uZGVzY3JpcHRpb259PC9wPlxuICA8aHI+XG4gIDxkaXYgY2xhc3M9XCJwbGFuZXQtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkaXN0YW5jZS1pbmZvXCI+XG4gICAgICA8ZGl2PkFWRyBESVNUQU5DRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYW5ldC1kaXN0YW5jZVwiPiR7ZGF0YS5kZXN0aW5hdGlvbnNbbnVtYmVyXS5kaXN0YW5jZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHJhdmVsLWluZm9cIj5cbiAgICAgIDxkaXY+RVNULiBUUkFWRUwgVElNRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbC10aW1lXCI+JHtkYXRhLmRlc3RpbmF0aW9uc1tudW1iZXJdLnRyYXZlbH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gdGhpcmRQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuIFxuICA8c2VjdGlvbiBjbGFzcz1cImNyZXctaW5mby1ob2xkZXJcIj5cbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtcGFnZVwiPlxuICAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+TUVFVCBZT1VSIENSRVc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjcmV3LWltYWdlLWhvbGRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNyZXctaW1hZ2VcIiBkYXRhLWNyZXctaW1hZ2U+PC9kaXY+XG4gICA8L3NlY3Rpb24+XG5cbiAgICAgPC9zZWN0aW9uPlxuICAgICA8ZGl2IGNsYXNzPVwicGVyc29uLWluZm9cIiAgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgPGFydGljbGUgY2xhc3M9XCJwZXJzb24tZGV0YWlsLWluZm9cIiBkYXRhLWNyZXctYmlvPjwvYXJ0aWNsZT5cbiAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWJ0bi1ob2xkZXJcIiBkYXRhLXNsaWRlci1idG4+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjBcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjFcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjJcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjNcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cblxuICAgPC9zZWN0aW9uPmA7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuLy9mdW5jdGlvbiB0byBnZXQgaW5mbyBhYm91dCB0aGUgcGVyc29uXG5mdW5jdGlvbiBwZXJzb25JbmZvKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IGJpb1RlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tam9iXCI+JHtkYXRhLmNyZXdbbnVtYmVyXS5yb2xlfTwvZGl2PlxuICAgIDxoMSBjbGFzcz1cImNyZXctbmFtZVwiPiR7ZGF0YS5jcmV3W251bWJlcl0ubmFtZX08L2gxPlxuICAgIDxwIGNsYXNzPVwiY3Jldy1iaW9cIiBkYXRhLWNyZXctaW5mbz4ke2RhdGEuY3Jld1tudW1iZXJdLmJpb308L3A+XG4gIGA7XG4gICAgZWxlLmlubmVySFRNTCA9IGJpb1RlbXBsYXRlO1xufVxuLy9pbWFnZSBvcmRlciB0byBtYXRjaCBqc29uIGRhdGEgYWJvdXQgcGVyc29uIGluZm9cbmNvbnN0IHBlcnNvbkltYWdlT3JkZXIgPSBbMSwyLDMsMF07XG5mdW5jdGlvbiBwZXJzb25JbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG4gICAgY29uc3QgdGFiSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL2NyZXcnLCB0cnVlLCAvXFwuKHdlYnApJC8pKTtcbiAgICBjb25zdCBsYXJnZUltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9jcmV3JywgdHJ1ZSwgL1xcLihwbmcpJC8pKTtcbiAgICAvL2NvbnZlcnQgbnVtIHRvIG1hdGNoIGpzb24gZGF0YVxuICAgIG51bWJlciA9IHBlcnNvbkltYWdlT3JkZXJbbnVtYmVyXTtcbiAgICBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt0YWJJbWFnZXNbbnVtYmVyXS5kZWZhdWx0fVwiKWA7XG4gICAgfVxuICAgIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7bGFyZ2VJbWFnZXNbbnVtYmVyXS5kZWZhdWx0fVwiKWA7XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byBkcmF3IGZvdXJ0aCBwYWdlXG5mdW5jdGlvbiBmb3VydGhQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgICBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInRlY2huby1wYWdlXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLW5hbWVcIj5TUEFDRSBMQVVOQ0ggMTAxPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRlY2huby1pbWFnZS1ob2xkZXJcIiBkYXRhLXRlY2huby1ob2xkZXI+XG4gICAgPGRpdiBjbGFzcz1cInRlY2huby1pbWFnZVwiIGRhdGEtdGVjaG5vLWltYWdlPjwvZGl2PlxuICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZWNobm9sb2d5LWluZm8taG9sZGVyXCI+XG4gICAgIDxuYXYgY2xhc3M9XCJ0ZWNobm8tYnRuLWhvbGRlclwiIGRhdGEtdGVjaG5vLWJ0bnM+XG4gICAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJ0ZWNobm9sb2d5LXVzZWRcIiBjbGFzcz1cInRlY2huby1idG5cIiBkYXRhLXRlY2hub2xvZ3k9XCIwXCI+MTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICBhcmlhLWxhYmVsPVwidGVjaG5vbG9neS11c2VkXCIgY2xhc3M9XCJ0ZWNobm8tYnRuXCIgZGF0YS10ZWNobm9sb2d5PVwiMVwiPjI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAgYXJpYS1sYWJlbD1cInRlY2hub2xvZ3ktdXNlZFwiIGNsYXNzPVwidGVjaG5vLWJ0blwiIGRhdGEtdGVjaG5vbG9neT1cIjJcIj4zPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+VEhFIFRFQ0hOT0xPR1kuLi48L2Rpdj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGVjaG5vLXBhclwiICBhcmlhLWxpdmU9XCJwb2xpdGVcIiBkYXRhLXRlY2huby1pbmZvID48L2FydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvblxuICBgO1xuICAgIGVsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGVsZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbn1cbi8vZnVuY3Rpb24gdG8gcGljayBpbWFnZSBmb3IgdGVjaG5vbG9neSBwYWdlIGJhc2VkIG9uIHNjcmVlblxuLy9vcmRlciB0byBtYWNoIGpzb24gYW5kIGltYWdlIG9yZGVyLDAgcmVwIGxhdW5jaCwxIHJlcCBzcGFjZXBvcnQsIDIgcmVwIHNwYWNlIGNhcHN1bGVcbmNvbnN0IGltYWdlT3JkZXIgPSBbMCAsMiwgMV07XG5mdW5jdGlvbiBjaG9vc2VUZWNobm9JbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo5MDBweClcIik7XG4gICAgY29uc3QgbGFyZ2VJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZycsIGZhbHNlLCAvXFwuKGpwZykkLykpO1xuICAgIGNvbnN0IHRhYkltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZycsIGZhbHNlLCAvXFwuKGpwZykkLykpO1xuICAgIG51bWJlciA9IGltYWdlT3JkZXJbbnVtYmVyXTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2xhcmdlSW1hZ2VzW251bWJlcl0uZGVmYXVsdH1cIilgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3RhYkltYWdlc1tudW1iZXJdLmRlZmF1bHR9XCIpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIHRvIHVwZGF0ZSBwYXJhZ3JhcGggYWJvdXQgdGhlIHRlY2hub2xvZ3kgdXNlZFxuZnVuY3Rpb24gdGVjaG5vSW5mbyhlbGUsbnVtYmVyKXtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGAgXG4gICAgPGgxIGNsYXNzPVwidGVjaG5vLW5hbWVcIj4ke2RhdGEudGVjaG5vbG9neVtudW1iZXJdLm5hbWV9PC9oMT5cbiAgICA8cCBjbGFzcz1cInRlY2huby1pbmZvXCI+JHtkYXRhLnRlY2hub2xvZ3lbbnVtYmVyXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbi8vZnVuY3Rpb24gdG8gcGljayBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZSBhbmQgcGFnZSBuYW1lIChuYXZpZ2F0aW9uIHVzZWQgYXMgcGFnZSBuYW1lKVxuZnVuY3Rpb24gY2hvb3NlQmdJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo5MDBweClcIik7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTAwcHgpXCIpO1xuICAgIHBpY2tCZyhudW1iZXIpO1xuICAgIFxuICAgIC8vZnVuY3Rpb24gdG8gcGljayBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHNjcmVlbiBzaXplXG4gICAgZnVuY3Rpb24gcGlja0JnKG51bWJlcil7XG4gICAgICAgIGNvbnN0IGhvbWVJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvaG9tZScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25JbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgICAgIGNvbnN0IGNyZXdJbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgdGVjaG5vSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvaW1hZ2VzL3RlY2huby1iZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzVGFiID0gW2hvbWVJbWFnZXMsZGVzdGluYXRpb25JbWFnZXMsY3Jld0ltYWdlcyx0ZWNobm9JbWFnZXNdO1xuICAgICAgICAvL2ltYWdlcyBzdG9yZWQgaW4gZGVza3RvcCwgbW9iaWxlLCB0YWIoMCwxLDIpIG9yZGVyXG4gICAgICAgIGlmKG1vYmlsZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZXNUYWJbbnVtYmVyXVsxXS5kZWZhdWx0fVwiKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZXNUYWJbbnVtYmVyXVswXS5kZWZhdWx0fVwiKWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YWJTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2VzVGFiW251bWJlcl1bMl0uZGVmYXVsdH1cIilgO1xuICAgICAgICB9XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byBhZGQgZm9jdXMgc3R5bGUgZm9yIG5hdlxuZnVuY3Rpb24gbmF2QnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UtbmF2Jyk7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBhbGxOYXYgID0gWy4uLnVsLmNoaWxkcmVuXTtcbiAgICBhbGxOYXYuZm9yRWFjaChuYXY9PntcbiAgICAgICAgaWYoYWxsTmF2LmluZGV4T2YobmF2KSAhPT0gbnVtYmVyKXtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbW9iaWxlLWZvY3VzJyk7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXRhYi1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFiU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi10YWItZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhYlNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vL2Z1bmN0aW9uIHRvIGFkZCBzdHlsZSBmb3Igc2xpZGVyIGJ1dHRvbnMgcGFnZSB0aHJlZVxuZnVuY3Rpb24gc2xpZGVyQnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBzbGlkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWJ0bicpO1xuICAgIGNvbnN0IGJ0bkFycmF5ICA9IFsuLi5zbGlkZXJCdG5dO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKHNsaWRlcj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKHNsaWRlcikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlci1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vZnVuY3Rpb24gdG8gYWRkIGZvY3VzIHN0eWxlIGZvciBwYWdlIGZvdXIgYnV0dG9uc1xuZnVuY3Rpb24gdGFiRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWNobm8tYnRuXCIpO1xuICAgIGNvbnN0IGJ0bkFycmF5ID0gWy4uLmJ0bnNdO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKGJ0bj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKGJ0bikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInRlY2huby1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0ZWNobm8tYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtob21lUGFnZVNlY3Rpb24sc2Vjb25kUGFnZSxkZXN0aW5hdGlvblBsYW5ldCxwbGFuZXRJbWFnZSx0aGlyZFBhZ2UscGVyc29uSW5mbyxcbiAgICBwZXJzb25JbWFnZSxmb3VydGhQYWdlLGNob29zZVRlY2hub0ltYWdlLHRlY2hub0luZm8sY2hvb3NlQmdJbWFnZSxcbiAgICBuYXZCdG5Gb2N1cyxzbGlkZXJCdG5Gb2N1cyx0YWJGb2N1c1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgKG1pbi13aWR0aDo5MDBweCkge1xuICAgIC5ob21lLXBhZ2Utc2VjdGlvbntcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgfVxuICAgIC5idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICB9XG4gICAgLmJpZy1jaXJjbGV7XG4gICAgIHJpZ2h0OiA3MCU7XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtaGVhZGVye1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbnRyby10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB9XG4gICAgLmhvbWUtcGFnZS1uYXZ7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgwLjNyZW0sMXZ3LDAuNXJlbSk7XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGl7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6MC41cmVtO1xuICAgICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDFyZW0sMXZ3LDEuNXJlbSk7XG4gICAgIH1cbiAgICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB9XG4gICAgLm9wZW4tbmF2e1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhyLWxpbmV7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IDIwO1xuICAgIH0gXG4gICAgLyogY29udGVudCBtYWluIGhvbWUgcGFnZSAqL1xuICAgIG1haW57XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcImxlZnQgcmlnaHRcIjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIH1cbiAgICAvKiBkZXN0aW5hdGlvbiBvciBzZWNvbmQgcGFnZSAqL1xuICAgIC5wbGFuZXQtaW5mby1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDoycmVtO1xuICAgIH1cbiAgICAucGxhbmV0LW5hdi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wbGFuZXQtaW1hZ2V7XG4gICAgICBmbGV4LWdyb3c6IDEuNTtcbiAgICAgIGhlaWdodDogNDV2aDtcbiAgICB9XG4gICAgLnBsYW5ldC1pbmZve1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgXG4gICAgLyogdGhpcmQgcGFnZSAqL1xuICAgIC8qIHRoaXJkIGFuZCBmb3VydGggaW1hZ2UgaG9sZGVyIHNhbWUgc3R5bGUgKi9cbiAgICAuY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7IFxuICAgIH1cbiAgICAuY3Jldy1pbWFnZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAtNSU7XG4gICAgICB6LWluZGV4OiAtMTA7XG4gICAgfVxuICAgIC50ZWNobm8taW1hZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICByaWdodDogMSU7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgYm90dG9tOiAxMCU7XG4gICAgICB6LWluZGV4OiAtMTA7XG4gICAgfVxuICAgIC5jcmV3LWluZm8taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgIH1cbiAgICAucGVyc29uLWluZm97XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAucGVyc29uLWRldGFpbC1pbmZve1xuICAgICAgZ3JpZC1hcmVhOiB0b3A7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBhbGlnbi1jb250ZW50OiBlbmQ7XG4gICAgfVxuICAgIC5zbGlkZXItYnRuLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogYm90dG9tO1xuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICB9XG4gICAgLyogZm91cnRoIHBhZ2Ugc3R5bGUgKi9cbiAgICAuY3VycmVudC1wYWdle1xuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIGdhcDogMS41cmVtO1xuICAgIH1cbiAgICAudGVjaG5vLXBhZ2V7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICB9XG4gICAgICAudGVjaG5vLWltYWdle1xuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcbiAgICB9XG4gICAgLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgdGl0bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiAgYXJ0aWNsZVwiO1xuICAgIH1cbiAgICAudGVjaG5vLWJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IG5hdjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAycmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgcGFkZGluZzowLjVyZW0gO1xuICAgIH1cbiAgICAudGVjaG5vLXBhcntcbiAgICAgIGdyaWQtYXJlYTogYXJ0aWNsZTtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgfVxuICAgIC50ZWNobm8taW5mb3tcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6MS41cmVtO1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZGVza3RvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtNQUNFLFVBQVU7TUFDVixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO0tBQ0MsVUFBVTtJQUNYO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxjQUFjO01BQ2Qsd0NBQXdDO01BQ3hDLFNBQVM7SUFDWDtJQUNBO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLHNDQUFzQztLQUN2QztJQUNEO01BQ0UsY0FBYztLQUNmO0lBQ0Q7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGNBQWM7TUFDZCxXQUFXO0lBQ2I7SUFDQSwyQkFBMkI7SUFDM0I7TUFDRSxhQUFhO01BQ2IsZ0NBQWdDO01BQ2hDLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7SUFDQSwrQkFBK0I7SUFDL0I7TUFDRSxlQUFlO01BQ2YsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixRQUFRO0lBQ1Y7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsZUFBZTtJQUNqQjs7SUFFQSxlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDO01BQ0UsZ0JBQWdCO01BQ2hCLFFBQVE7TUFDUixTQUFTO0lBQ1g7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsVUFBVTtNQUNWLFFBQVE7TUFDUixXQUFXO01BQ1gsWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixVQUFVO01BQ1Ysa0JBQWtCO0tBQ25CO0lBQ0Q7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7SUFDQSxzQkFBc0I7SUFDdEI7TUFDRSxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtNQUNFO01BQ0EsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYjswQ0FDb0M7SUFDdEM7SUFDQTtNQUNFLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCO0lBQ0Y7TUFDRSxVQUFVO01BQ1YsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1pbi13aWR0aDo5MDBweCkge1xcbiAgICAuaG9tZS1wYWdlLXNlY3Rpb257XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIH1cXG4gICAgLmJ0bi1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgfVxcbiAgICAuYmlnLWNpcmNsZXtcXG4gICAgIHJpZ2h0OiA3MCU7XFxuICAgIH1cXG4gICAgLmhvbWUtcGFnZS1oZWFkZXJ7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5pbnRyby10aXRsZXtcXG4gICAgICBmb250LXNpemU6IDVyZW07XFxuICAgIH1cXG4gICAgLmhvbWUtcGFnZS1uYXZ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwxdncsMC41cmVtKTtcXG4gICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaXtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6MC41cmVtO1xcbiAgICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgxcmVtLDF2dywxLjVyZW0pO1xcbiAgICAgfVxcbiAgICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgIH1cXG4gICAgLm9wZW4tbmF2e1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmhyLWxpbmV7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgei1pbmRleDogMjA7XFxuICAgIH0gXFxuICAgIC8qIGNvbnRlbnQgbWFpbiBob21lIHBhZ2UgKi9cXG4gICAgbWFpbntcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxcImxlZnQgcmlnaHRcXFwiO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYnRuLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIH1cXG4gICAgLyogZGVzdGluYXRpb24gb3Igc2Vjb25kIHBhZ2UgKi9cXG4gICAgLnBsYW5ldC1pbmZvLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDoycmVtO1xcbiAgICB9XFxuICAgIC5wbGFuZXQtbmF2LWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICB9XFxuICAgIC5wbGFuZXQtaW1hZ2V7XFxuICAgICAgZmxleC1ncm93OiAxLjU7XFxuICAgICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB9XFxuICAgIC5wbGFuZXQtaW5mb3tcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIHRoaXJkIHBhZ2UgKi9cXG4gICAgLyogdGhpcmQgYW5kIGZvdXJ0aCBpbWFnZSBob2xkZXIgc2FtZSBzdHlsZSAqL1xcbiAgICAuY3Jldy1pbWFnZS1ob2xkZXIsLnRlY2huby1pbWFnZS1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7IFxcbiAgICB9XFxuICAgIC5jcmV3LWltYWdle1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogLTUlO1xcbiAgICAgIHotaW5kZXg6IC0xMDtcXG4gICAgfVxcbiAgICAudGVjaG5vLWltYWdlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgcmlnaHQ6IDElO1xcbiAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgYm90dG9tOiAxMCU7XFxuICAgICAgei1pbmRleDogLTEwO1xcbiAgICB9XFxuICAgIC5jcmV3LWluZm8taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICAgfVxcbiAgICAucGVyc29uLWluZm97XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAucGVyc29uLWRldGFpbC1pbmZve1xcbiAgICAgIGdyaWQtYXJlYTogdG9wO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgYWxpZ24tY29udGVudDogZW5kO1xcbiAgICB9XFxuICAgIC5zbGlkZXItYnRuLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IGJvdHRvbTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgfVxcbiAgICAvKiBmb3VydGggcGFnZSBzdHlsZSAqL1xcbiAgICAuY3VycmVudC1wYWdle1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICAgIGdhcDogMS41cmVtO1xcbiAgICB9XFxuICAgIC50ZWNobm8tcGFnZXtcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgfVxcbiAgICAgIC50ZWNobm8taW1hZ2V7XFxuICAgICAgZ3JpZC1hcmVhOiByaWdodDtcXG4gICAgfVxcbiAgICAudGVjaG5vbG9neS1pbmZvLWhvbGRlcntcXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiB0aXRsZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJuYXYgIGFydGljbGVcXFwiO1xcbiAgICB9XFxuICAgIC50ZWNobm8tYnRuLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAycmVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgfVxcbiAgICAudGl0bGV7XFxuICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICBwYWRkaW5nOjAuNXJlbSA7XFxuICAgIH1cXG4gICAgLnRlY2huby1wYXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBhcnRpY2xlO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIH1cXG4gICAgLnRlY2huby1pbmZve1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICBsaW5lLWhlaWdodDoxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2JlbGxlZmFpci12MTQtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2Jhcmxvdy1jb25kZW5zZWQtdjEyLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1oYW1idXJnZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24tY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBiZWxsZWZhaXItcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyBcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbi8qIGJhcmxvdy1jb25kZW5zZWQtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTsgXG59XG4qe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNzE3O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiBidXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0gXG5tYWlue1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCAnQmVsbGVmYWlyJyxtb25vc3BhY2U7XG59XG4uaG9tZS1wYWdlLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gfVxuICAgLyogaG9tZXBhZ2UgbGluayBzdHlsZSAqL1xuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IGJ1dHRvbntcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBmb250LXNpemU6MS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xufVxuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xufVxuLmhvbWUtcGFnZS1uYXYgPiBsaXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogbmF2U2xpZGUgMXMgZWFzZS1pbi1vdXQ7XG4gfVxuLm5hdi1tb2JpbGUtZm9jdXN7XG4gICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSkgO1xuIH1cbi5ob21lLXBhZ2UtbmF2ID4gOm50aC1jaGlsZCgxKXtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiB9XG5cbi5ob21lLXBhZ2UtbmF2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6MC4ycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDIlLCA0NyUsIDAuMik7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgei1pbmRleDogMTA7XG59XG4ubW9iaWxlLWJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogMTAwMDtcbiB9XG4ubG9nb3tcbiAgd2lkdGg6IDAuN3JlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLyogc3R5bGUgZm9yIG1vYmlsZSBuYXYgKi9cbi5vcGVuLW5hdiwuY2xvc2UtbmF2e1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6MyU7XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3Blbi1uYXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbi5jbG9zZS1uYXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbi5vcGVuLW5hdntcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaHItbGluZXtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxcmVtO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xuICB6LWluZGV4OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIG5hdlNsaWRle1xuICAgIDAle1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG4vKiBsaW5rcyBob2xkZXIgZm9yIG1vYmlsZSBuYXYgKi9cbltkYXRhLW5hdi1saW5rcz1cInRydWVcIl17XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIFxufVxuW2RhdGEtbmF2LWxpbmtzPVwiZmFsc2VcIl17XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBob21lIHBhZ2UgbWFpbiAqL1xubWFpbntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtYWluXCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlOyBcbiB9XG4uZXhwbG9yZS1idG57XG4gIHdpZHRoOiAxODBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MyU7XG4gIGxlZnQ6Mi41JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZGZmMDtcbiAgfVxuXG4uYmlnLWNpcmNsZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuIH1cbi5iaWctY2lyY2xlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG4uaG9tZS1wYWdlLXNlY3Rpb257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG59XG4uaW50cm8tdGV4dCwuaW50cm8tcGFye1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcbn1cbi5pbnRyby10aXRsZXtcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xufVxuLmludHJvLXBhcntcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGFye1xuICB3aWR0aDogMjBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbi5zdGFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICBhbmltYXRpb246ICBzaG9vdGluZ1N0YXJzIDQwcyBjdWJpYy1iZXppZXIoMC4zNiwgMC41NSwgMC41MSwgMC44MSk7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgc2hvb3RpbmdTdGFyc3tcbiAgMCUgeyBcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IFxuICB9XG4gIDEwJXtcbiAgICBvcGFjaXR5OiAxO1xuIH1cbiAxMDAlIHtcbiAgIG9wYWNpdHk6IDA7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwdncsIC05MHZoLCAwKTtcbiAgfVxufVxuLyogc2Vjb25kIHBhZ2UgKGRlc3RpbmF0aW9uKSBzdHlsZSAqL1xuLmN1cnJlbnQtcGFnZXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDowLjVyZW07XG4gIHBhZGRpbmc6MXJlbSA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcbn1cbi5saW5rLW5hbWUsLmxpbmstbnVtYmVye1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiB9XG4ubGluay1udW1iZXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjNGU0OTQ5O1xufVxuLnBsYW5ldC1pbmZvLWhvbGRlciwucGxhbmV0LW5hdi1ob2xkZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuLyogbmF2IGJ1dHRvbnMgICovXG4ucGxhbmV0cy1idG4taG9sZGVye1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnBsYW5ldC1uYW1lLW5hdntcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCdcbiB9XG4ucGxhbmV0LW5hbWUtbmF2OjphZnRlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucGxhbmV0LW5hbWUtbmF2OmhvdmVyOjphZnRlcntcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gfVxuIC5wbGFuZXQtbmFtZS1uYXY6Zm9jdXM6OmFmdGVye1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiB9XG4gLnBsYW5ldC1uYW1le1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiAucGxhbmV0LXBhcntcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuIH1cbiAuYWJvdXQtcGxhbmV0e1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAwLjNyZW07XG4gfVxuIC5wbGFuZXQtaW5mby1ob2xkZXJ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIC5kaXN0YW5jZS1pbmZvLC50cmF2ZWwtaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiB9XG4gLnBsYW5ldC1kaXN0YW5jZSwudHJhdmVsLXRpbWV7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiB9XG4gLnBsYW5ldC1pbWFnZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5wbGFuZXR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBhbmltYXRpb246IHJvdGF0ZVBsYW5ldCA1MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZm9yd2FyZHM7IFxufVxuIEBrZXlmcmFtZXMgcm90YXRlUGxhbmV0e1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAle1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiAvKiB0aGlyZCBwYWdlIHN0eWxlICovXG4gLmNyZXctbmFtZXtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gfVxuLnBlcnNvbi1pbmZve1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ0b3BcIlxuICBcImJvdHRvbVwiO1xuICBwYWRkaW5nOiAxcmVtO1xuIH1cbi5wZXJzb24tZGV0YWlsLWluZm97XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmV3LWJpb3tcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnNsaWRlci1idG4taG9sZGVye1xuICBncmlkLWFyZWE6IHRvcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzoxcmVtO1xufVxuLnNsaWRlci1idG57XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgOTIsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuIH1cbi5zbGlkZXItYnRuOmZvY3VzICwuc2xpZGVyLWJ0bi1jbGlja2VkLC5zbGlkZXItYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiB9XG4ucGVyc29uLWpvYntcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICM5NjkxOTE7XG4gfVxuIC8qIGZvcnRoIGFuZCB0aGlyZCBwYWdlIGltYWdlIGhvbGRlcixpbWFnZSBoYXMgc2FtZSBzdHlsZSAqL1xuLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xuIH0gIFxuIC5jcmV3LWltYWdlLC50ZWNobm8taW1hZ2V7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW47XG59XG4udGVjaG5vLWltYWdle1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gLypmb3VydGggcGFnZSBzdHlsZSAqL1xuLnRlY2hub2xvZ3ktaW5mby1ob2xkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiAudGVjaG5vLW5hbWV7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuIH1cbi50ZWNobm8tYnRuLWhvbGRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcblxuIH1cbiAudGVjaG5vLWJ0bntcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMnJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZDdkZmYwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjYsIDY1LCA2NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG4udGVjaG5vLWJ0bjpob3ZlcntcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLnRlY2huby1idG4tY2xpY2tlZCwgLnRlY2huby1idG46Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBtZWRpYSBxdWVyeSBmb3IgdGFibGV0IHNjcmVlbiAqL1xuQG1lZGlhIChtaW4td2lkdGg6NTAxcHgpIHtcbiAgLyogZmlyc3QgcGFnZSAqL1xuICAuaG9tZS1wYWdlLW5hdntcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDowLjVyZW07XG4gICB9XG4gIC5ob21lLW5hdi1idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcbiAgICB6LWluZGV4OiAtMTtcbiAgIH1cbiAgIC5ob21lLW5hdi1idG46aG92ZXI6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgfSBcbiAgLmhvbWUtcGFnZS1uYXYgPiBsaSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwydncsMC41cmVtKTtcbiAgICB9XG4gIC5ob21lLXBhZ2UtbmF2ID4gbGk6bnRoLWNoaWxkKDEpe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2LXRhYi1mb2N1c3tcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIHJnYigyNTUsIDI1NSwgMjU1KTsgXG4gIH0gXG4gIC5ob21lLXBhZ2Utc2VjdGlvbntcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICB9XG4gLmludHJvLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICB9XG4gIC8qIHNlY29uZCBwYWdlIGZvciB0YWIgKi9cbiAgLmN1cnJlbnQtcGFnZXtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLmxpbmstbnVtYmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuc2xpZGVyLWJ0bi1ob2xkZXJ7XG4gICAgZ3JpZC1hcmVhOiBib3R0b207XG4gIH1cbiAgLmNyZXctaW1hZ2UtaG9sZGVye1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAuY3Jldy1pbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIC5wZXJzb24taW5mb3tcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLyogdGhpcmQgcGFnZSAqL1xuIH1cbiAgQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pe1xuICAgIC8qIHN0b3Agc2hvb3Rpbmcgc3RhciBtb3ZlbWVudCAqL1xuICAuc3RhcntcbiAgICBkaXNwbGF5Om5vbmVcbiAgfVxuICAucGxhbmV0e1xuICAgIGFuaW1hdGlvbjogc3RvcFJvdGF0ZSAzcyBpbmZpbml0ZSA7IFxuICB9IFxufVxuLyogc3RvcCByb3RhdGlvbiBmbyBwbGFuZXQgaWYgcmVkdWNlZCAqL1xuIEBrZXlmcmFtZXMgc3RvcFJvdGF0ZXtcbiAgdG97XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgZnJvbXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuIH1cbiBcblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5QjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBNEU7QUFDOUU7QUFDQSxxQ0FBcUM7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNERBQW1GO0FBQ3JGO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osOENBQThDO0VBQzlDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7Q0FDQztFQUNDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7Q0FDL0I7R0FDRSx3QkFBd0I7QUFDM0I7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtDQUFrQztDQUNuQztBQUNEO0dBQ0csMkNBQTJDO0NBQzdDO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7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QTtJQUNDLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHdDQUF3QztJQUN4QztFQUNGO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0NBQ0Q7SUFDRyxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0Esd0JBQXdCO0VBQ3hCO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztHQUNmLGdCQUFnQjtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztFQUNYO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBLGVBQWU7Q0FDaEI7RUFDQztJQUNFLGdDQUFnQztFQUNsQztJQUNFO0VBQ0Y7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGO0FBQ0EsdUNBQXVDO0NBQ3RDO0VBQ0M7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtDQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJlbGxlZmFpci1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgXFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL2JlbGxlZmFpci12MTQtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuLyogYmFybG93LWNvbmRlbnNlZC1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL2Jhcmxvdy1jb25kZW5zZWQtdjEyLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7IFxcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA3MTc7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG51bHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmF7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiBidXR0b257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufSBcXG5tYWlue1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgJ0JlbGxlZmFpcicsbW9ub3NwYWNlO1xcbn1cXG4uaG9tZS1wYWdlLWhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuIH1cXG4gICAvKiBob21lcGFnZSBsaW5rIHN0eWxlICovXFxuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IGJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICBmb250LXNpemU6MS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG59XFxuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xcbn1cXG4uaG9tZS1wYWdlLW5hdiA+IGxpe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBuYXZTbGlkZSAxcyBlYXNlLWluLW91dDtcXG4gfVxcbi5uYXYtbW9iaWxlLWZvY3Vze1xcbiAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KSA7XFxuIH1cXG4uaG9tZS1wYWdlLW5hdiA+IDpudGgtY2hpbGQoMSl7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiB9XFxuXFxuLmhvbWUtcGFnZS1uYXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDowLjJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubW9iaWxlLWJ0bntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAxJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuIH1cXG4ubG9nb3tcXG4gIHdpZHRoOiAwLjdyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG4vKiBzdHlsZSBmb3IgbW9iaWxlIG5hdiAqL1xcbi5vcGVuLW5hdiwuY2xvc2UtbmF2e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOjMlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLm9wZW4tbmF2e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmcpO1xcbn1cXG4uY2xvc2UtbmF2e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWNsb3NlLnN2Zyk7XFxufVxcbi5vcGVuLW5hdntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaHItbGluZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBuYXZTbGlkZXtcXG4gICAgMCV7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbi8qIGxpbmtzIGhvbGRlciBmb3IgbW9iaWxlIG5hdiAqL1xcbltkYXRhLW5hdi1saW5rcz1cXFwidHJ1ZVxcXCJde1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIFxcbn1cXG5bZGF0YS1uYXYtbGlua3M9XFxcImZhbHNlXFxcIl17XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogaG9tZSBwYWdlIG1haW4gKi9cXG5tYWlue1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuIH1cXG4uZXhwbG9yZS1idG57XFxuICB3aWR0aDogMTgwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6MyU7XFxuICBsZWZ0OjIuNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkZmYwO1xcbiAgfVxcblxcbi5iaWctY2lyY2xle1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiB9XFxuLmJpZy1jaXJjbGU6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbn1cXG4uaG9tZS1wYWdlLXNlY3Rpb257XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuLmludHJvLXRleHQsLmludHJvLXBhcntcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICB3b3JkLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxufVxcbi5pbnRyby10aXRsZXtcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbn1cXG4uaW50cm8tcGFye1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3RhcntcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbi5zdGFye1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZWYwZjUsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggI2Q3ZGZmMCk7XFxuICBhbmltYXRpb246ICBzaG9vdGluZ1N0YXJzIDQwcyBjdWJpYy1iZXppZXIoMC4zNiwgMC41NSwgMC41MSwgMC44MSk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuQGtleWZyYW1lcyBzaG9vdGluZ1N0YXJze1xcbiAgMCUgeyBcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyBcXG4gIH1cXG4gIDEwJXtcXG4gICAgb3BhY2l0eTogMTtcXG4gfVxcbiAxMDAlIHtcXG4gICBvcGFjaXR5OiAwO1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOTB2dywgLTkwdmgsIDApO1xcbiAgfVxcbn1cXG4vKiBzZWNvbmQgcGFnZSAoZGVzdGluYXRpb24pIHN0eWxlICovXFxuLmN1cnJlbnQtcGFnZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDowLjVyZW07XFxuICBwYWRkaW5nOjFyZW0gO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJ1xcbn1cXG4ubGluay1uYW1lLC5saW5rLW51bWJlcntcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiB9XFxuLmxpbmstbnVtYmVye1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiAjNGU0OTQ5O1xcbn1cXG4ucGxhbmV0LWluZm8taG9sZGVyLC5wbGFuZXQtbmF2LWhvbGRlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuLyogbmF2IGJ1dHRvbnMgICovXFxuLnBsYW5ldHMtYnRuLWhvbGRlcntcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxhbmV0LW5hbWUtbmF2e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXFxuIH1cXG4ucGxhbmV0LW5hbWUtbmF2OjphZnRlcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogJyc7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGFuZXQtbmFtZS1uYXY6aG92ZXI6OmFmdGVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuIH1cXG4gLnBsYW5ldC1uYW1lLW5hdjpmb2N1czo6YWZ0ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gfVxcbiAucGxhbmV0LW5hbWV7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuIC5wbGFuZXQtcGFye1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gfVxcbiAuYWJvdXQtcGxhbmV0e1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gfVxcbiAucGxhbmV0LWluZm8taG9sZGVye1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gfVxcbiAuZGlzdGFuY2UtaW5mbywudHJhdmVsLWluZm97XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gfVxcbiAucGxhbmV0LWRpc3RhbmNlLC50cmF2ZWwtdGltZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gfVxcbiAucGxhbmV0LWltYWdle1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucGxhbmV0e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYW5pbWF0aW9uOiByb3RhdGVQbGFuZXQgNTBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGZvcndhcmRzOyBcXG59XFxuIEBrZXlmcmFtZXMgcm90YXRlUGxhbmV0e1xcbiAgMCV7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuIC8qIHRoaXJkIHBhZ2Ugc3R5bGUgKi9cXG4gLmNyZXctbmFtZXtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHdvcmQtc3BhY2luZzogMnB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuLnBlcnNvbi1pbmZve1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInRvcFxcXCJcXG4gIFxcXCJib3R0b21cXFwiO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gfVxcbi5wZXJzb24tZGV0YWlsLWluZm97XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jcmV3LWJpb3tcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLnNsaWRlci1idG4taG9sZGVye1xcbiAgZ3JpZC1hcmVhOiB0b3A7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOjFyZW07XFxufVxcbi5zbGlkZXItYnRue1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCA5MiwgOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiB9XFxuLnNsaWRlci1idG46Zm9jdXMgLC5zbGlkZXItYnRuLWNsaWNrZWQsLnNsaWRlci1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gfVxcbi5wZXJzb24tam9ie1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICM5NjkxOTE7XFxuIH1cXG4gLyogZm9ydGggYW5kIHRoaXJkIHBhZ2UgaW1hZ2UgaG9sZGVyLGltYWdlIGhhcyBzYW1lIHN0eWxlICovXFxuLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwdmg7XFxuIH0gIFxcbiAuY3Jldy1pbWFnZSwudGVjaG5vLWltYWdle1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xcbn1cXG4udGVjaG5vLWltYWdle1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4gLypmb3VydGggcGFnZSBzdHlsZSAqL1xcbi50ZWNobm9sb2d5LWluZm8taG9sZGVye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4gLnRlY2huby1uYW1le1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gfVxcbi50ZWNobm8tYnRuLWhvbGRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuXFxuIH1cXG4gLnRlY2huby1idG57XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZDdkZmYwO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY2LCA2NSwgNjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLnRlY2huby1idG46aG92ZXJ7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi50ZWNobm8tYnRuLWNsaWNrZWQsIC50ZWNobm8tYnRuOmZvY3Vze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi8qIG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXQgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6NTAxcHgpIHtcXG4gIC8qIGZpcnN0IHBhZ2UgKi9cXG4gIC5ob21lLXBhZ2UtbmF2e1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOjAuNXJlbTtcXG4gICB9XFxuICAuaG9tZS1uYXYtYnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgIH1cXG4gICAuaG9tZS1uYXYtYnRuOmhvdmVyOjphZnRlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIH0gXFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwydncsMC41cmVtKTtcXG4gICAgfVxcbiAgLmhvbWUtcGFnZS1uYXYgPiBsaTpudGgtY2hpbGQoMSl7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5uYXYtdGFiLWZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIHJnYigyNTUsIDI1NSwgMjU1KTsgXFxuICB9IFxcbiAgLmhvbWUtcGFnZS1zZWN0aW9ue1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgfVxcbiAuaW50cm8tdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIH1cXG4gIC8qIHNlY29uZCBwYWdlIGZvciB0YWIgKi9cXG4gIC5jdXJyZW50LXBhZ2V7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gIH1cXG4gIC5saW5rLW51bWJlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG4gIC5zbGlkZXItYnRuLWhvbGRlcntcXG4gICAgZ3JpZC1hcmVhOiBib3R0b207XFxuICB9XFxuICAuY3Jldy1pbWFnZS1ob2xkZXJ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICAuY3Jldy1pbWFnZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0yMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbiAgLnBlcnNvbi1pbmZve1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICB9XFxuICAvKiB0aGlyZCBwYWdlICovXFxuIH1cXG4gIEBtZWRpYShwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXtcXG4gICAgLyogc3RvcCBzaG9vdGluZyBzdGFyIG1vdmVtZW50ICovXFxuICAuc3RhcntcXG4gICAgZGlzcGxheTpub25lXFxuICB9XFxuICAucGxhbmV0e1xcbiAgICBhbmltYXRpb246IHN0b3BSb3RhdGUgM3MgaW5maW5pdGUgOyBcXG4gIH0gXFxufVxcbi8qIHN0b3Agcm90YXRpb24gZm8gcGxhbmV0IGlmIHJlZHVjZWQgKi9cXG4gQGtleWZyYW1lcyBzdG9wUm90YXRle1xcbiAgdG97XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgZnJvbXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuIH1cXG4gXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg4YTNjNjkyZmQzNGViMzExZTA0YzQwNTVmNDdjYmU5LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZjBlZDdmMTU1N2EyYTNlYmY2OGZmZTQ5YmFhNDYxMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTZkNTFjZjYxZTk4Y2U0NWViNjExYjYwNjdlMTI4NjYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJkNjQ3MTI4NDk2ZGRjNjM4YWNkNzk4MGRiMTI4MjllLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYjQyYjc3NWVlMGIxMjQzMGYzYTQ0MWMxZjljYTE1OC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc1NDBmYmI2MTkyMzA2NGYwNjVlMmY4MTUzMmQzMjJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNGM3ZGVmNDI3ODI0ZWY1NDNjMDhjMmRlZDczNWQ3OC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZjMzBmMzViMDVmYzBiYzRlZTQ3YTU3MTdlNDQyOGEwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NjVlMTk4YWRjMjJmY2RmNzgxMGU2OWY0YmU1OTJmYi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhhOWE1NDI0NTg4YjczZWM2MWMyZjY3ZjRiNGI0MDY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzI3MWY5OWJhYjhiMDZkN2FiNThkYjU3YTUzYzA5YS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ2OGI5MjJjNjliZjU0OTliNGJjMzdmYzM4NWVhNmI1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMDEzMWUyN2U3NTFlYWQxYTkyMmMwMTNmNWRkYTcxNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGY1NWQzNDZkOGI2Y2ZkOTVhYjc2ZDYwMGQ4MDU2NmEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNlOTVmN2QwYTE2ZmUyZWJmNGM2OTkyYzRkMjg2MjA3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjM2JlMzIzODNmMzFkMGY3NmQ5NjQyNDkzMzMyNmFkNS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFiMjI0Yzg2NjMyNTEyNzBkNzlmM2M1OTQ5ZjZlZmVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZjU1ZjcyMWI0YTY0YjdhNTZhODFlNzhlYzY4YmQ4ZC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQyODdkMDcxODJkZTMwMTU5NTJmNDRkYzc0NTdhMWFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNWEzYzkwZTljOGVlYjJjYjY4ZGM1NDUyMzFiOWQ3OC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0YjA3OGY5Y2UxN2U2ODZhZTk5ZGVjOTIwZTQzMzNiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MDczOGJjNjFlNWQxMjE3YTE5YTIwMWJlNzVmOGJhOC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNkZjM4NjRlY2JmZGYyMGU4YzNiYzUyNjRiNmI1M2U0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxM2Y3YWRlY2JjYjNjM2YxNzBkODUyNTA1ODRmYTdiYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmM5ZWZjYzMyODFmYTY4MDEwNzcyYmFjMTVlYTMzOTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0N2ZkYTYzY2JkOGIzZmVkYmJjMWIyYTUzZjY0NDcwLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1MjczZWZhN2M1MGU5NmVmM2U1MWU3YTJiNTQwNDhjZS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTY1ZjdmMmMwNTM0NDAzZjExYjcxOTk0ZjQzMTEyMTAuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3YjU4OWIzYzBjNWVmMDgxMWQ0MTU4YmZhNWNlZTYxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlM2UzYTFjMzBjZDRmYmE4OWE2MmMzNjc1NmU3YjM5My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDhjMzhiMDI4MjE3ZWUwMDk2YzRiNjBkODA0NmMwODcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQyODFhNTlmZjcxODY0ODhmZTZhZGU1ZDllZjc3NDVlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNjcyZGE4MWQ1ZmYzYWRhNzMwMWMwMDc3ZTczZjgxNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGYzY2E1YzA1YTNlODcxOTFlYTdmMTgyZmNiZTM4MzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBjNzU4OTU1YTE3OGJkY2MzMjMwMGZjZjRjM2ZkMDhkLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZDBhYzEzOGFmZWY5OGMxNjY2YWZiMjhlM2JjYTEzMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODU1MjNkYjVkZTEzMDU3ZjM2ZWE3NzE5NjFhNTFhOTYuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFja2dyb3VuZC1jcmV3LWRlc2t0b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LWJnL2JhY2tncm91bmQtY3Jldy1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXctYmcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtY3Jldy10YWJsZXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3LWJnL2JhY2tncm91bmQtY3Jldy10YWJsZXQuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy1iZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkucG5nXCIsXG5cdFwiLi9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkucG5nXCIsXG5cdFwiLi9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtbWFyay1zaHV0dGxld29ydGgucG5nXCIsXG5cdFwiLi9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLndlYnBcIixcblx0XCIuL2ltYWdlLWRvdWdsYXMtaHVybGV5LndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicFwiLFxuXHRcIi4vaW1hZ2UtbWFyay1zaHV0dGxld29ydGgud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC53ZWJwXCIsXG5cdFwiLi9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtdmljdG9yLWdsb3Zlci53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3JldyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih3ZWJwKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1tb2JpbGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi1iZy9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLW1vYmlsZS5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtZGVzdGluYXRpb24tdGFibGV0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcvYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24tYmcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlLWV1cm9wYS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLWV1cm9wYS5wbmdcIixcblx0XCIuL2ltYWdlLW1hcnMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tYXJzLnBuZ1wiLFxuXHRcIi4vaW1hZ2UtbW9vbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ucG5nXCIsXG5cdFwiLi9pbWFnZS10aXRhbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2UtZXVyb3BhLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLWV1cm9wYS53ZWJwXCIsXG5cdFwiLi9pbWFnZS1tYXJzLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1hcnMud2VicFwiLFxuXHRcIi4vaW1hZ2UtbW9vbi53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tb29uLndlYnBcIixcblx0XCIuL2ltYWdlLXRpdGFuLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLndlYnBcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbiBzeW5jIFxcXFwuKHdlYnApJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLWRlc2t0b3AuanBnXCIsXG5cdFwiLi9iYWNrZ3JvdW5kLWhvbWUtbW9iaWxlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYmFja2dyb3VuZC1ob21lLXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9pY29uLWNsb3NlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmc/OTU5YVwiLFxuXHRcIi4vaWNvbi1oYW1idXJnZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmc/OGEyM1wiLFxuXHRcIi4vbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMgc3luYyBcXFxcLihzdmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2huby1iZy9iYWNrZ3JvdW5kLXRlY2hub2xvZ3ktZGVza3RvcC5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtdGVjaG5vbG9neS1tb2JpbGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcvYmFja2dyb3VuZC10ZWNobm9sb2d5LW1vYmlsZS5qcGdcIixcblx0XCIuL2JhY2tncm91bmQtdGVjaG5vbG9neS10YWJsZXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcvYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm8tYmcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlLWxhdW5jaC12ZWhpY2xlLWxhbmRzY2FwZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvbGFuZHNjYXBlLWJnL2ltYWdlLWxhdW5jaC12ZWhpY2xlLWxhbmRzY2FwZS5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlLWNhcHN1bGUtbGFuZHNjYXBlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnXCIsXG5cdFwiLi9pbWFnZS1zcGFjZXBvcnQtbGFuZHNjYXBlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9sYW5kc2NhcGUtYmcvaW1hZ2Utc3BhY2Vwb3J0LWxhbmRzY2FwZS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2xhbmRzY2FwZS1iZyBzeW5jIFxcXFwuKGpwZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9wb3J0cmFpdC1iZy9pbWFnZS1sYXVuY2gtdmVoaWNsZS1wb3J0cmFpdC5qcGdcIixcblx0XCIuL2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnXCIsXG5cdFwiLi9pbWFnZS1zcGFjZXBvcnQtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnL2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L3BvcnRyYWl0LWJnIHN5bmMgXFxcXC4oanBnKSRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Rlc2t0b3AuY3NzXCI7XG5pbXBvcnQgeyBob21lUGFnZVNlY3Rpb24sc2Vjb25kUGFnZSxkZXN0aW5hdGlvblBsYW5ldCxwbGFuZXRJbWFnZSwgXG4gICAgdGhpcmRQYWdlLHBlcnNvbkluZm8scGVyc29uSW1hZ2UsXG4gICAgZm91cnRoUGFnZSx0ZWNobm9JbmZvLGNob29zZVRlY2hub0ltYWdlLFxuICAgIGNob29zZUJnSW1hZ2UsbmF2QnRuRm9jdXMsc2xpZGVyQnRuRm9jdXMsdGFiRm9jdXNcbn0gZnJvbSBcIi4vZG9tLWNvbXBvbmVudFwiO1xuY29uc3QgcGFnZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWdlLW5hdl1cIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtb3Blbi1tZW51XVwiKTtcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tZW51XVwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtbGlua3NdXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG5cblxuXG5jaG9vc2VCZ0ltYWdlKGJvZHksMCk7XG5ob21lUGFnZVNlY3Rpb24obWFpbik7XG5uYXZCdG5Gb2N1cygwKTtcbnBhZ2VOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZT0+e1xuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1ob21lLWJ0bl1cIikpe1xuICAgICAgICBob21lUGFnZVNlY3Rpb24obWFpbik7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwwKTtcbiAgICAgICAgLy9mb3IgbW9iaWxlIGhpZGVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kZXN0aW5hdGlvbi1idG5dXCIpKXtcbiAgICAgICAgc2Vjb25kUGFnZShtYWluKTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hdj1cIjBcIl1gKTtcbiAgICAgICAgYnRuLmZvY3VzKCk7XG4gICAgICAgIHBsYW5ldEltYWdlKGltYWdlSG9sZGVyLDIpOyAvLzIgcmVwIG1vb24gaW1hZ2VcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICAgICAgY2hvb3NlQmdJbWFnZShib2R5LDEpO1xuICAgICAgICAvL2hpZGUgbW9iaWxlIG1lbnVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1jcmV3LWJ0bl1cIikpe1xuICAgICAgICB0aGlyZFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMyk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDMpO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMik7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDMpO1xuICAgICAgICAvL2ZvciBtb2JpbGVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10ZWNobm9sb2d5LWJ0bl1cIikpe1xuICAgICAgICBmb3VydGhQYWdlKG1haW4pO1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMCk7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDApO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMyk7XG4gICAgICAgIHRhYkZvY3VzKDApO1xuICAgICAgICAvL2ZvciBtb2JpbGUgaGlkZSBtZW51XG4gICAgICAgIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rc1wiLFwiZmFsc2VcIik7XG4gICAgICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBuYXZCdG5Gb2N1cygzKTtcbiAgICB9XG59KTtcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1leHBsb3JlLWJ0bl1cIikpe1xuICAgICAgICBzZWNvbmRQYWdlKG1haW4pO1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmF2PVwiMFwiXWApO1xuICAgICAgICBidG4uZm9jdXMoKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMik7XG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMCk7XG4gICAgICAgIG5hdkJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICAvL3NlY29uZCBwYWdlIGV2ZW50cyBcbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjBcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwyKTtcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIxXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMSk7IC8vMSByZXAgbWFyc1xuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBwbGFuZXRJbWFnZShpbWFnZUhvbGRlciwwKTsgLy8wIHJlcCBldXJvcGFcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwyKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIzXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgcGxhbmV0SW1hZ2UoaW1hZ2VIb2xkZXIsMyk7Ly8zIHJlcCB0aXRhblxuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDMpO1xuICAgIH1cbiAgICAvL3RoaXJkIHBhZ2UgZXZlbnRcbiAgICBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiMFwiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiMFwiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDApO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwwKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtY3Jldz1cIjFcIl1gKSl7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIGNvbnN0IHNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3Jldz1cIjFcIl1gKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwxKTtcbiAgICAgICAgc2xpZGVCdG4uZm9jdXMoKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMSk7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLWNyZXc9XCIyXCJdYCkpe1xuICAgICAgICBjb25zdCBjcmV3QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWJpb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctaW1hZ2VdXCIpO1xuICAgICAgICBjb25zdCBzbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNyZXc9XCIyXCJdYCk7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMik7XG4gICAgICAgIHNsaWRlQnRuLmZvY3VzKCk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDIpO1xuICAgICAgICBzbGlkZXJCdG5Gb2N1cygyKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiM1wiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiM1wiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDMpO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwzKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMyk7XG4gICAgfVxuICAgIC8vZm91cnRoIHBhZ2UgZXZlbnRcbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLXRlY2hub2xvZ3k9XCIwXCJdYCkpe1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMCk7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDApO1xuICAgICAgICB0YWJGb2N1cygwKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS10ZWNobm9sb2d5PVwiMVwiXWApKXtcbiAgICAgICAgY29uc3QgdGVjaEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWluZm9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW1hZ2VdXCIpO1xuICAgICAgICB0ZWNobm9JbmZvKHRlY2hBcnRpY2xlLDEpO1xuICAgICAgICBjaG9vc2VUZWNobm9JbWFnZShpbWFnZUhvbGRlciwxKTtcbiAgICAgICAgdGFiRm9jdXMoMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtdGVjaG5vbG9neT1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwyKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMik7XG4gICAgICAgIHRhYkZvY3VzKDIpO1xuICAgIH1cbn0pO1xub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYobmF2LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIpID09PSBcImZhbHNlXCIpe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG4gICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICB9XG59KTtcbmNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihuYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcbmxhcmdlU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKCk9PntcbiAgICAvL3JlbW92ZSBtb2JpbGUgaG92ZXIgYW5kIGZvY3VzIHN0eWxlXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlLW5hdicpLmNoaWxkcmVuOyBcbiAgICBjb25zdCBsaSA9IFsuLi51bF07XG4gICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT10cnVlKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJ0cnVlXCIpO1xuICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICBcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbGkuZm9yRWFjaChuYXY9PntcbiAgICAgICAgICAgIG5hdi5zdHlsZS5ib3JkZXJSaWdodD0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09ZmFsc2Upe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufSk7XG5pZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG4gICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmVsc2UgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5cblxuIl0sIm5hbWVzIjpbIl9kYXRhIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsIm1hcCIsImxvZ28iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dvU3ZnIiwiY29udGV4dCIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJob21lUGFnZVNlY3Rpb24iLCJlbGUiLCJ0ZW1wbGF0ZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwicGxhbmV0SW1hZ2UiLCJudW1iZXIiLCJtb2JpbGVTY3JlZW4iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibGFyZ2VTY3JlZW4iLCJwbGFuZXRJbWFnZXNUYWIiLCJwbGFuZXRMYXJnZUltYWdlIiwibWF0Y2hlcyIsInNlY29uZFBhZ2UiLCJkZXN0aW5hdGlvblBsYW5ldCIsImRhdGEiLCJkZXN0aW5hdGlvbnMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkaXN0YW5jZSIsInRyYXZlbCIsInRoaXJkUGFnZSIsInBlcnNvbkluZm8iLCJiaW9UZW1wbGF0ZSIsImNyZXciLCJyb2xlIiwiYmlvIiwicGVyc29uSW1hZ2VPcmRlciIsInBlcnNvbkltYWdlIiwidGFiSW1hZ2VzIiwibGFyZ2VJbWFnZXMiLCJmb3VydGhQYWdlIiwiaW1hZ2VPcmRlciIsImNob29zZVRlY2hub0ltYWdlIiwidGVjaG5vSW5mbyIsInRlY2hub2xvZ3kiLCJjaG9vc2VCZ0ltYWdlIiwidGFiU2NyZWVuIiwicGlja0JnIiwiaG9tZUltYWdlcyIsImRlc3RpbmF0aW9uSW1hZ2VzIiwiY3Jld0ltYWdlcyIsInRlY2hub0ltYWdlcyIsImltYWdlc1RhYiIsIm5hdkJ0bkZvY3VzIiwidWwiLCJhbGxOYXYiLCJjaGlsZHJlbiIsImZvckVhY2giLCJuYXYiLCJpbmRleE9mIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2xpZGVyQnRuRm9jdXMiLCJzbGlkZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuQXJyYXkiLCJmb2N1cyIsInNsaWRlciIsInRhYkZvY3VzIiwiYnRucyIsImJ0biIsIl9kb21Db21wb25lbnQiLCJwYWdlTmF2IiwibWFpbiIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImFydGljbGUiLCJpbWFnZUhvbGRlciIsImNyZXdBcnRpY2xlIiwidGVjaEFydGljbGUiLCJzbGlkZUJ0biIsImdldEF0dHJpYnV0ZSIsImxpIiwiYm9yZGVyUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9