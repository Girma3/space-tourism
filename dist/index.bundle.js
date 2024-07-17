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
exports.chooseImage = chooseImage;
exports.chooseTechnoImage = chooseTechnoImage;
exports.destinationPlanet = destinationPlanet;
exports.fourthPage = fourthPage;
exports.homePageSection = homePageSection;
exports.navBtnFocus = navBtnFocus;
exports.personImage = personImage;
exports.personInfo = personInfo;
exports.secondPage = secondPage;
exports.sliderBtnFocus = sliderBtnFocus;
exports.tabFocus = tabFocus;
exports.technoInfo = technoInfo;
exports.thirdPage = thirdPage;
var _data = _interopRequireDefault(__webpack_require__(/*! ./data.json */ "./src/data.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
//function choose image from json based on the screen width 
function chooseImage(ele, number) {
  const mobileScreen = window.matchMedia("(max-width: 500px)");
  const largeScreen = window.matchMedia("(min-width:501px)");
  if (largeScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.destinations[number].images.png}`);
    ele.style.backgroundImage = `url('${image}')`;
  } else if (mobileScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.destinations[number].images.webp}`);
    ele.style.backgroundImage = `url('${image}')`;
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
function personInfo(ele, number) {
  const bioTemplate = `
    <div class="person-job">${_data.default.crew[number].role}</div>
    <h1 class="crew-name">${_data.default.crew[number].name}</h1>
    <p class="crew-bio" data-crew-info>${_data.default.crew[number].bio}</p>
  `;
  ele.innerHTML = bioTemplate;
}
function personImage(ele, number) {
  const mobileScreen = window.matchMedia("(max-width: 500px)");
  const largeScreen = window.matchMedia("(min-width:501px)");
  if (largeScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.crew[number].images.png}`);
    ele.style.backgroundImage = `url('${image}')`;
  } else if (mobileScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.crew[number].images.webp}`);
    ele.style.backgroundImage = `url('${image}')`;
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
function chooseTechnoImage(ele, number) {
  const largeScreen = window.matchMedia("(min-width:900px)");
  if (largeScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.technology[number].images.portrait}`);
    ele.style.backgroundImage = `url('${image}')`;
  } else if (largeScreen.matches === false) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.technology[number].images.landscape}`);
    ele.style.backgroundImage = `url('${image}')`;
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
  const pages = ["home", "destination", "crew", "technology"];
  if (mobileScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.backgroundImage[number][`${pages[number]}`].mobile}`);
    ele.style.backgroundImage = `url(src'${image}')`;
  } else if (largeScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.backgroundImage[number][`${pages[number]}`].desktop}`);
    ele.style.backgroundImage = `url('${image}')`;
  } else if (tabScreen.matches === true) {
    const image = __webpack_require__("./src sync recursive ^.*$")(`${_data.default.backgroundImage[number][`${pages[number]}`].tablet}`);
    ele.style.backgroundImage = `url('${image}')`;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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
    const planetImage = document.querySelector('.planet');
    const btn = document.querySelector(`[data-nav="0"]`);
    btn.focus();
    (0, _domComponent.chooseImage)(planetImage, 0);
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
    (0, _domComponent.chooseImage)(planetImage, 0);
    (0, _domComponent.destinationPlanet)(article, 0);
    (0, _domComponent.navBtnFocus)(0);
  }
  //second page events
  else if (e.target.matches(`[data-nav="0"]`)) {
    const article = document.querySelector('.about-planet');
    const planetImage = document.querySelector('.planet');
    (0, _domComponent.chooseImage)(planetImage, 0);
    (0, _domComponent.destinationPlanet)(article, 0);
  } else if (e.target.matches(`[data-nav="1"]`)) {
    const article = document.querySelector('.about-planet');
    const planetImage = document.querySelector('.planet');
    (0, _domComponent.chooseImage)(planetImage, 1);
    (0, _domComponent.destinationPlanet)(article, 1);
  } else if (e.target.matches(`[data-nav="2"]`)) {
    const article = document.querySelector('.about-planet');
    const planetImage = document.querySelector('.planet');
    (0, _domComponent.chooseImage)(planetImage, 2);
    (0, _domComponent.destinationPlanet)(article, 2);
  } else if (e.target.matches(`[data-nav="3"]`)) {
    const article = document.querySelector('.about-planet');
    const planetImage = document.querySelector('.planet');
    (0, _domComponent.chooseImage)(planetImage, 3);
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

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>space tourism</title>\n</head>\n<body>\n  <header class=\"home-page-header\">\n    <div class=\"logo\"></div>\n    <div aria-hidden=\"true\" class=\"hr-line\"></div>\n \n    <nav class=\"page-links\">\n      <div class=\"mobile-btn\">\n      <button class=\"open-nav\" aria-label=\"open-menu\" data-open-menu></button> \n      <button class=\"close-nav\" aria-label=\"close-menu\" data-close-menu></button> \n    </div>\n    <ul class=\"home-page-nav\" data-nav-links=\"false\" data-page-nav>\n     \n     <li>\n        <span aria-hidden=\"true\">00</span>\n        <button data-home-btn class=\"home-nav-btn\">HOME</button>\n        \n       </li>\n      <li>\n        <span aria-hidden=\"true\">01</span>\n        <button data-destination-btn class=\"home-nav-btn\">DESTINATION</button>\n        \n      </li>\n      <li >\n        <span aria-hidden=\"true\">02</span>\n        <button data-crew-btn class=\"home-nav-btn\">CREW</button>\n       </li>\n      <li>\n        <span aria-hidden=\"true\">03</span>\n        <button data-technology-btn class=\"home-nav-btn\">TECHNOLOGY</button>\n         \n      </li>\n    </ul>\n  </nav>\n</header>\n  <main class=\"grid-section\" aria-live=\"polite\"></main>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

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

/***/ "./src sync recursive ^.*$":
/*!************************!*\
  !*** ./src/ sync ^.*$ ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	".": "./src/index.js",
	"./": "./src/index.js",
	"./assets/fonts/barlow-condensed-v12-latin-regular.woff2": "./src/assets/fonts/barlow-condensed-v12-latin-regular.woff2",
	"./assets/fonts/bellefair-v14-latin-regular.woff2": "./src/assets/fonts/bellefair-v14-latin-regular.woff2",
	"./assets/fonts/favicon-32x32.png": "./src/assets/fonts/favicon-32x32.png",
	"./assets/images/crew/background-crew-desktop.jpg": "./src/assets/images/crew/background-crew-desktop.jpg",
	"./assets/images/crew/background-crew-mobile.jpg": "./src/assets/images/crew/background-crew-mobile.jpg",
	"./assets/images/crew/background-crew-tablet.jpg": "./src/assets/images/crew/background-crew-tablet.jpg",
	"./assets/images/crew/image-anousheh-ansari.png": "./src/assets/images/crew/image-anousheh-ansari.png",
	"./assets/images/crew/image-anousheh-ansari.webp": "./src/assets/images/crew/image-anousheh-ansari.webp",
	"./assets/images/crew/image-douglas-hurley.png": "./src/assets/images/crew/image-douglas-hurley.png",
	"./assets/images/crew/image-douglas-hurley.webp": "./src/assets/images/crew/image-douglas-hurley.webp",
	"./assets/images/crew/image-mark-shuttleworth.png": "./src/assets/images/crew/image-mark-shuttleworth.png",
	"./assets/images/crew/image-mark-shuttleworth.webp": "./src/assets/images/crew/image-mark-shuttleworth.webp",
	"./assets/images/crew/image-victor-glover.png": "./src/assets/images/crew/image-victor-glover.png",
	"./assets/images/crew/image-victor-glover.webp": "./src/assets/images/crew/image-victor-glover.webp",
	"./assets/images/destination/background-destination-desktop.jpg": "./src/assets/images/destination/background-destination-desktop.jpg",
	"./assets/images/destination/background-destination-mobile.jpg": "./src/assets/images/destination/background-destination-mobile.jpg",
	"./assets/images/destination/background-destination-tablet.jpg": "./src/assets/images/destination/background-destination-tablet.jpg",
	"./assets/images/destination/image-europa.png": "./src/assets/images/destination/image-europa.png",
	"./assets/images/destination/image-europa.webp": "./src/assets/images/destination/image-europa.webp",
	"./assets/images/destination/image-mars.png": "./src/assets/images/destination/image-mars.png",
	"./assets/images/destination/image-mars.webp": "./src/assets/images/destination/image-mars.webp",
	"./assets/images/destination/image-moon.png": "./src/assets/images/destination/image-moon.png",
	"./assets/images/destination/image-moon.webp": "./src/assets/images/destination/image-moon.webp",
	"./assets/images/destination/image-titan.png": "./src/assets/images/destination/image-titan.png",
	"./assets/images/destination/image-titan.webp": "./src/assets/images/destination/image-titan.webp",
	"./assets/images/home/background-home-desktop.jpg": "./src/assets/images/home/background-home-desktop.jpg",
	"./assets/images/home/background-home-mobile.jpg": "./src/assets/images/home/background-home-mobile.jpg",
	"./assets/images/home/background-home-tablet.jpg": "./src/assets/images/home/background-home-tablet.jpg",
	"./assets/images/icons/icon-close.svg": "./src/assets/images/icons/icon-close.svg",
	"./assets/images/icons/icon-hamburger.svg": "./src/assets/images/icons/icon-hamburger.svg",
	"./assets/images/icons/logo.svg": "./src/assets/images/icons/logo.svg",
	"./assets/images/technology/background-technology-desktop.jpg": "./src/assets/images/technology/background-technology-desktop.jpg",
	"./assets/images/technology/background-technology-mobile.jpg": "./src/assets/images/technology/background-technology-mobile.jpg",
	"./assets/images/technology/background-technology-tablet.jpg": "./src/assets/images/technology/background-technology-tablet.jpg",
	"./assets/images/technology/image-launch-vehicle-landscape.jpg": "./src/assets/images/technology/image-launch-vehicle-landscape.jpg",
	"./assets/images/technology/image-launch-vehicle-portrait.jpg": "./src/assets/images/technology/image-launch-vehicle-portrait.jpg",
	"./assets/images/technology/image-space-capsule-landscape.jpg": "./src/assets/images/technology/image-space-capsule-landscape.jpg",
	"./assets/images/technology/image-space-capsule-portrait.jpg": "./src/assets/images/technology/image-space-capsule-portrait.jpg",
	"./assets/images/technology/image-spaceport-landscape.jpg": "./src/assets/images/technology/image-spaceport-landscape.jpg",
	"./assets/images/technology/image-spaceport-portrait.jpg": "./src/assets/images/technology/image-spaceport-portrait.jpg",
	"./data": "./src/data.json",
	"./data.json": "./src/data.json",
	"./desktop.css": "./src/desktop.css",
	"./dom-component": "./src/dom-component.js",
	"./dom-component.js": "./src/dom-component.js",
	"./index": "./src/index.js",
	"./index.js": "./src/index.js",
	"./style.css": "./src/style.css",
	"./template.html": "./src/template.html"
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
webpackContext.id = "./src sync recursive ^.*$";

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

/***/ "./src/assets/fonts/favicon-32x32.png":
/*!********************************************!*\
  !*** ./src/assets/fonts/favicon-32x32.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "324364bda5e0efe48ee5.png";

/***/ }),

/***/ "./src/assets/images/crew/background-crew-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/crew/background-crew-desktop.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88a3c692fd34eb311e04.jpg";

/***/ }),

/***/ "./src/assets/images/crew/background-crew-mobile.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/background-crew-mobile.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f0ed7f1557a2a3ebf68.jpg";

/***/ }),

/***/ "./src/assets/images/crew/background-crew-tablet.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/background-crew-tablet.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16d51cf61e98ce45eb61.jpg";

/***/ }),

/***/ "./src/assets/images/crew/image-anousheh-ansari.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/crew/image-anousheh-ansari.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2d647128496ddc638acd.png";

/***/ }),

/***/ "./src/assets/images/crew/image-anousheh-ansari.webp":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/image-anousheh-ansari.webp ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb42b775ee0b12430f3a.webp";

/***/ }),

/***/ "./src/assets/images/crew/image-douglas-hurley.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/crew/image-douglas-hurley.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7540fbb61923064f065e.png";

/***/ }),

/***/ "./src/assets/images/crew/image-douglas-hurley.webp":
/*!**********************************************************!*\
  !*** ./src/assets/images/crew/image-douglas-hurley.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e4c7def427824ef543c0.webp";

/***/ }),

/***/ "./src/assets/images/crew/image-mark-shuttleworth.png":
/*!************************************************************!*\
  !*** ./src/assets/images/crew/image-mark-shuttleworth.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc30f35b05fc0bc4ee47.png";

/***/ }),

/***/ "./src/assets/images/crew/image-mark-shuttleworth.webp":
/*!*************************************************************!*\
  !*** ./src/assets/images/crew/image-mark-shuttleworth.webp ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "665e198adc22fcdf7810.webp";

/***/ }),

/***/ "./src/assets/images/crew/image-victor-glover.png":
/*!********************************************************!*\
  !*** ./src/assets/images/crew/image-victor-glover.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a9a5424588b73ec61c2.png";

/***/ }),

/***/ "./src/assets/images/crew/image-victor-glover.webp":
/*!*********************************************************!*\
  !*** ./src/assets/images/crew/image-victor-glover.webp ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c271f99bab8b06d7ab5.webp";

/***/ }),

/***/ "./src/assets/images/destination/background-destination-desktop.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-desktop.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "468b922c69bf5499b4bc.jpg";

/***/ }),

/***/ "./src/assets/images/destination/background-destination-mobile.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-mobile.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e0131e27e751ead1a922.jpg";

/***/ }),

/***/ "./src/assets/images/destination/background-destination-tablet.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-tablet.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f55d346d8b6cfd95ab7.jpg";

/***/ }),

/***/ "./src/assets/images/destination/image-europa.png":
/*!********************************************************!*\
  !*** ./src/assets/images/destination/image-europa.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e95f7d0a16fe2ebf4c6.png";

/***/ }),

/***/ "./src/assets/images/destination/image-europa.webp":
/*!*********************************************************!*\
  !*** ./src/assets/images/destination/image-europa.webp ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3be32383f31d0f76d96.webp";

/***/ }),

/***/ "./src/assets/images/destination/image-mars.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-mars.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b224c8663251270d79f.png";

/***/ }),

/***/ "./src/assets/images/destination/image-mars.webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-mars.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f55f721b4a64b7a56a8.webp";

/***/ }),

/***/ "./src/assets/images/destination/image-moon.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-moon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d287d07182de3015952f.png";

/***/ }),

/***/ "./src/assets/images/destination/image-moon.webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-moon.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b5a3c90e9c8eeb2cb68d.webp";

/***/ }),

/***/ "./src/assets/images/destination/image-titan.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-titan.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4b078f9ce17e686ae99.png";

/***/ }),

/***/ "./src/assets/images/destination/image-titan.webp":
/*!********************************************************!*\
  !*** ./src/assets/images/destination/image-titan.webp ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80738bc61e5d1217a19a.webp";

/***/ }),

/***/ "./src/assets/images/home/background-home-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/home/background-home-desktop.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cdf3864ecbfdf20e8c3b.jpg";

/***/ }),

/***/ "./src/assets/images/home/background-home-mobile.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/home/background-home-mobile.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "13f7adecbcb3c3f170d8.jpg";

/***/ }),

/***/ "./src/assets/images/home/background-home-tablet.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/home/background-home-tablet.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc9efcc3281fa6801077.jpg";

/***/ }),

/***/ "./src/assets/images/icons/icon-close.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/icon-close.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d47fda63cbd8b3fedbbc.svg";

/***/ }),

/***/ "./src/assets/images/icons/icon-hamburger.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/icon-hamburger.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5273efa7c50e96ef3e51.svg";

/***/ }),

/***/ "./src/assets/images/icons/logo.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/logo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "565f7f2c0534403f11b7.svg";

/***/ }),

/***/ "./src/assets/images/technology/background-technology-desktop.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/images/technology/background-technology-desktop.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7b589b3c0c5ef0811d4.jpg";

/***/ }),

/***/ "./src/assets/images/technology/background-technology-mobile.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/technology/background-technology-mobile.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3e3a1c30cd4fba89a62.jpg";

/***/ }),

/***/ "./src/assets/images/technology/background-technology-tablet.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/technology/background-technology-tablet.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48c38b028217ee0096c4.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-launch-vehicle-landscape.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/technology/image-launch-vehicle-landscape.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4281a59ff7186488fe6a.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-launch-vehicle-portrait.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/images/technology/image-launch-vehicle-portrait.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c758955a178bdcc3230.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-space-capsule-landscape.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/images/technology/image-space-capsule-landscape.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d672da81d5ff3ada7301.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-space-capsule-portrait.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/technology/image-space-capsule-portrait.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dd0ac138afef98c1666a.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-spaceport-landscape.jpg":
/*!********************************************************************!*\
  !*** ./src/assets/images/technology/image-spaceport-landscape.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f3ca5c05a3e87191ea7.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-spaceport-portrait.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/technology/image-spaceport-portrait.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85523db5de13057f36ea.jpg";

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"backgroundImage":[{"home":{"mobile":"./assets/images/home/background-home-mobile.jpg","tablet":"./assets/images/home/background-home-tablet.jpg","desktop":"src/assets/images/home/background-home-desktop.jpg"}},{"destination":{"mobile":"./assets/images/destination/background-destination-mobile.jpg","tablet":"./assets/images/destination/background-destination-tablet.jpg","desktop":"./assets/images/destination/background-destination-desktop.jpg"}},{"crew":{"mobile":"./assets/images/crew/background-crew-mobile.jpg","tablet":"./assets/images/crew/background-crew-tablet.jpg","desktop":"./assets/images/crew/background-crew-desktop.jpg"}},{"technology":{"mobile":"./assets/images/technology/background-technology-mobile.jpg","tablet":"./assets/images/technology/background-technology-tablet.jpg","desktop":"./assets/images/technology/background-technology-desktop.jpg"}}],"destinations":[{"name":"Moon","images":{"png":"./assets/images/destination/image-moon.png","webp":"./assets/images/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/images/destination/image-mars.png","webp":"./assets/images/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/images/destination/image-europa.png","webp":"./assets/images/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/images/destination/image-titan.png","webp":"./assets/images/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/images/crew/image-douglas-hurley.png","webp":"./assets/images/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/images/crew/image-mark-shuttleworth.png","webp":"./assets/images/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/images/crew/image-victor-glover.png","webp":"./assets/images/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/images/crew/image-anousheh-ansari.png","webp":"./assets/images/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/images/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/images/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/images/technology/image-spaceport-portrait.jpg","landscape":"./assets/images/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/images/technology/image-space-capsule-portrait.jpg","landscape":"./assets/images/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}');

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFV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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLHNFQUFzRSx3QkFBd0IsNkJBQTZCLHVCQUF1QixxQkFBcUIsaUZBQWlGLEdBQUcsc0RBQXNELHVCQUF1QixvQ0FBb0MsdUJBQXVCLHFCQUFxQix5RkFBeUYsR0FBRyxJQUFJLGNBQWMsZUFBZSxHQUFHLE9BQU8sOEJBQThCLDRCQUE0QixpQ0FBaUMsaUJBQWlCLG1EQUFtRCx1QkFBdUIsR0FBRyxLQUFLLHFCQUFxQixHQUFHLElBQUksMEJBQTBCLEdBQUcsVUFBVSxvQkFBb0IsSUFBSSxPQUFPLDJEQUEyRCxHQUFHLG9CQUFvQixrQkFBa0IsdUJBQXVCLG1DQUFtQyxJQUFJLDZEQUE2RCxpQkFBaUIsd0JBQXdCLHFCQUFxQiw4QkFBOEIsaUJBQWlCLHNCQUFzQixvQ0FBb0MsR0FBRyw2QkFBNkIsc0JBQXNCLHFCQUFxQixvQ0FBb0MsR0FBRyxzQkFBc0IsdUJBQXVCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLGdCQUFnQix1Q0FBdUMsSUFBSSxvQkFBb0IsaURBQWlELElBQUksaUNBQWlDLHFCQUFxQixJQUFJLG1CQUFtQixrQkFBa0IsMkJBQTJCLGVBQWUsdUJBQXVCLGFBQWEsNENBQTRDLGtCQUFrQixlQUFlLGtCQUFrQixnQ0FBZ0MsZ0JBQWdCLEdBQUcsY0FBYyx1QkFBdUIsYUFBYSxZQUFZLGtCQUFrQixJQUFJLFFBQVEsa0JBQWtCLG9CQUFvQiwwREFBMEQsaUNBQWlDLGdDQUFnQyx1QkFBdUIsb0JBQW9CLEdBQUcsbURBQW1ELGtCQUFrQix1QkFBdUIsYUFBYSxXQUFXLGdCQUFnQiw4QkFBOEIsZ0NBQWdDLG9CQUFvQixpQ0FBaUMsZ0NBQWdDLGlCQUFpQixLQUFLLFlBQVksb0VBQW9FLEdBQUcsYUFBYSxnRUFBZ0UsR0FBRyxZQUFZLG1CQUFtQixHQUFHLFdBQVcsa0JBQWtCLHVCQUF1QixlQUFlLGVBQWUsZ0JBQWdCLHlDQUF5QyxlQUFlLEdBQUcsd0JBQXdCLFNBQVMscUJBQXFCLG1DQUFtQyxPQUFPLFdBQVcsbUJBQW1CLGtDQUFrQyxPQUFPLEdBQUcsK0RBQStELGVBQWUsa0JBQWtCLGlCQUFpQiwwQkFBMEIsU0FBUyw2QkFBNkIsZUFBZSxrQkFBa0IsR0FBRyw2QkFBNkIsa0JBQWtCLGtDQUFrQywwQkFBMEIsa0JBQWtCLElBQUksZUFBZSxpQkFBaUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsc0JBQXNCLHVCQUF1QixpQkFBaUIsc0JBQXNCLFdBQVcsY0FBYyw4QkFBOEIsS0FBSyxnQkFBZ0IsdUJBQXVCLGlCQUFpQixvQkFBb0IsdUJBQXVCLElBQUksb0JBQW9CLDJDQUEyQywrQkFBK0IsR0FBRyxxQkFBcUIsaUJBQWlCLHlCQUF5QixHQUFHLHlCQUF5QixvQkFBb0IsMEJBQTBCLHdCQUF3QixzQkFBc0IsdUJBQXVCLG9DQUFvQyxHQUFHLGVBQWUsMEJBQTBCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHVCQUF1Qiw2QkFBNkIsR0FBRyxhQUFhLG9CQUFvQix3QkFBd0IsZ0JBQWdCLEdBQUcsUUFBUSxnQkFBZ0Isb0JBQW9CLHVCQUF1QixLQUFLLFFBQVEsdUJBQXVCLGNBQWMsZUFBZSxxRUFBcUUseUNBQXlDLHVFQUF1RSxtQ0FBbUMseUNBQXlDLGtDQUFrQyxHQUFHLDJCQUEyQixTQUFTLHNDQUFzQyxLQUFLLFFBQVEsaUJBQWlCLElBQUksU0FBUyxnQkFBZ0IsNENBQTRDLEtBQUssR0FBRyx1REFBdUQsa0JBQWtCLDRCQUE0QixlQUFlLGtCQUFrQixzQ0FBc0MsMEJBQTBCLG9DQUFvQyx3QkFBd0IscUJBQXFCLHNCQUFzQixJQUFJLGVBQWUsa0JBQWtCLG1CQUFtQixHQUFHLHlDQUF5QyxrQkFBa0IsK0JBQStCLEdBQUcsMENBQTBDLHlCQUF5QiwwQkFBMEIsR0FBRyxtQkFBbUIsaUJBQWlCLDhCQUE4QixpQkFBaUIsb0JBQW9CLG9CQUFvQixvQkFBb0IscUJBQXFCLHVDQUF1QywwQkFBMEIsbUJBQW1CLGdCQUFnQix1QkFBdUIsZ0RBQWdELHlCQUF5Qiw0Q0FBNEMsR0FBRyxnQ0FBZ0MseUJBQXlCLElBQUksaUNBQWlDLHlCQUF5QixJQUFJLGdCQUFnQixvQkFBb0IsNkJBQTZCLHFCQUFxQix1QkFBdUIsSUFBSSxlQUFlLHdCQUF3Qix3QkFBd0IscUJBQXFCLHVCQUF1QixrQkFBa0IsSUFBSSxpQkFBaUIsd0JBQXdCLG9CQUFvQixJQUFJLHVCQUF1QixxQkFBcUIsSUFBSSwrQkFBK0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLG9CQUFvQixJQUFJLGlDQUFpQyxvQkFBb0IsSUFBSSxpQkFBaUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsZ0NBQWdDLGlDQUFpQyw2QkFBNkIsK0RBQStELEdBQUcsMkJBQTJCLE9BQU8sOEJBQThCLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxHQUFHLHVDQUF1QywyQkFBMkIsOEJBQThCLG9CQUFvQiw2QkFBNkIsd0JBQXdCLHNCQUFzQiwwQkFBMEIsSUFBSSxlQUFlLGtCQUFrQixtREFBbUQsa0JBQWtCLElBQUksc0JBQXNCLHVCQUF1QixHQUFHLFlBQVksd0JBQXdCLHdCQUF3QiwwQkFBMEIsa0JBQWtCLEdBQUcscUJBQXFCLG1CQUFtQixrQkFBa0IsY0FBYyw0QkFBNEIsaUJBQWlCLEdBQUcsY0FBYyxvQkFBb0IsaUJBQWlCLG9CQUFvQixzQ0FBc0MsdUJBQXVCLElBQUksMkRBQTJELDRCQUE0QixJQUFJLGNBQWMsOEJBQThCLDZCQUE2QixzQkFBc0IsbUJBQW1CLElBQUkseUdBQXlHLGdCQUFnQixpQkFBaUIsTUFBTSw2QkFBNkIsaUJBQWlCLGdCQUFnQiw2QkFBNkIsaUNBQWlDLGdDQUFnQyw0Q0FBNEMsR0FBRyxnQkFBZ0IsMkJBQTJCLEtBQUssbURBQW1ELHVCQUF1Qix3QkFBd0Isd0JBQXdCLGtCQUFrQixHQUFHLGdCQUFnQixzQkFBc0IscUJBQXFCLHlCQUF5Qiw4QkFBOEIsNkJBQTZCLHdCQUF3QixJQUFJLHFCQUFxQixrQkFBa0IsNEJBQTRCLGNBQWMsMkJBQTJCLE1BQU0sZUFBZSxpQkFBaUIsZ0JBQWdCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHNDQUFzQyw4QkFBOEIsR0FBRyxvQkFBb0IseUNBQXlDLEdBQUcseUNBQXlDLDRCQUE0QixpQkFBaUIsR0FBRyxpRUFBaUUsdUNBQXVDLDBCQUEwQix5QkFBeUIsMEJBQTBCLDBCQUEwQixvQ0FBb0Msb0JBQW9CLGlCQUFpQixrQkFBa0IsaUJBQWlCLE1BQU0sMEJBQTBCLG9CQUFvQix3QkFBd0IsYUFBYSxjQUFjLDBCQUEwQixtQkFBbUIsaUJBQWlCLDRCQUE0QixxQ0FBcUMsOEJBQThCLDZDQUE2QyxrQkFBa0IsTUFBTSxnQ0FBZ0MsMEJBQTBCLDZCQUE2QixNQUFNLHlCQUF5QiwrQ0FBK0MsT0FBTyxxQ0FBcUMsb0JBQW9CLEtBQUssK0JBQStCLG9CQUFvQixLQUFLLG1CQUFtQixvREFBb0QsTUFBTSx1QkFBdUIsMEJBQTBCLEtBQUssZ0JBQWdCLHNCQUFzQiwwQkFBMEIsS0FBSywrQ0FBK0Msc0JBQXNCLEtBQUssaUJBQWlCLHFCQUFxQixzQkFBc0IsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssdUJBQXVCLGVBQWUsZ0JBQWdCLEtBQUssZ0JBQWdCLHlCQUF5QixtQkFBbUIsa0JBQWtCLEtBQUssaUJBQWlCLHNCQUFzQixLQUFLLHdCQUF3QixtQ0FBbUMsaURBQWlELHVCQUF1QixZQUFZLDBDQUEwQyxNQUFNLEdBQUcsbUVBQW1FLE9BQU8sOEJBQThCLEtBQUssU0FBUyw4QkFBOEIsS0FBSyxJQUFJLDBCQUEwQjtBQUNsamY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDampCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5CLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9kb20tY29tcG9uZW50LmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9kZXNrdG9wLmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvZGVza3RvcC5jc3M/OTMwMCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy8gc3luYyBeLiokIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuXG4vL2Z1bmN0aW9uIHRvIGRyYXcgaG9tZXBhZ2UgY29udGVudFxuZnVuY3Rpb24gaG9tZVBhZ2VTZWN0aW9uKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuICA8c2VjdGlvbiBjbGFzcz1cImhvbWUtcGFnZS1zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImludHJvLXRleHRcIj5TTyBZT1UgV0FOVCBUTyBUUkFWRUwgVE88L2Rpdj5cbiAgICA8aDEgY2xhc3M9XCJpbnRyby10aXRsZVwiPlNQQUNFPC9oMT5cbiAgICA8cCBjbGFzcz1cImludHJvLXBhclwiPkxldCdzIGZhY2UgaXQ7aWYgeW91IHdhbnQgdG8gZ28gdG8gc3BhY2UseW91IG1pZ2h0IGFzIHdlbGxcbiAgICAgIGdlbnVpbmVseSBnbyB0byBvdXRlciBzcGFjZSBhbmQgbm90IGhvdmVyIGtpbmQgb2Ygb24gdGhlXG4gICAgICBlZGdlIG9mIGl0LldlbGwgc2l0IGJhY2ssIGFuZCByZWxheCBiZWNhdXNlIHdlIHdpbGwgZ2l2ZSB5b3VcbiAgICAgIGEgdHJ1bHkgb3V0IG9mIHRoaXMgd29ybGQgZXhwZXJpZW5jZS5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cInN0YXItaG9sZGVyXCI+XG4gICAgIDxkaXYgY2xhc3M9XCJzdGFyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ob2xkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmlnLWNpcmNsZVwiPlxuICAgICAgPGJ1dHRvbiAgYXJpYS1sYWJlbD1cImV4cGxvcmVcIiBjbGFzcz1cImV4cGxvcmUtYnRuXCIgZGF0YS1leHBsb3JlLWJ0biA+RVhQTE9SRTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG4vL2Z1bmN0aW9uIGNob29zZSBpbWFnZSBmcm9tIGpzb24gYmFzZWQgb24gdGhlIHNjcmVlbiB3aWR0aCBcbmZ1bmN0aW9uIGNob29zZUltYWdlKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IG1vYmlsZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTAwcHgpXCIpO1xuICAgIGNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMXB4KVwiKTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uaW1hZ2VzLnBuZ31gKTtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2V9JylgO1xuICAgIH1cbiAgICBlbHNlIGlmKG1vYmlsZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uaW1hZ2VzLndlYnB9YCk7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIGRlc3RpbmF0aW9uIHBhZ2UgKHNlY29uZCBwYWdlKVxuZnVuY3Rpb24gc2Vjb25kUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICA8c2VjdGlvbiBjbGFzcz1cInBsYW5ldC1pbmZvLWhvbGRlclwiPlxuICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXBhZ2VcIj5cbiAgICAgPHNwYW4gY2xhc3M9XCJsaW5rLW51bWJlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjAxPC9zcGFuPlxuICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+UElDSyBZT1VSIERFU1RJTkFUSU9OPC9kaXY+XG4gICAgPC9kaXY+XG4gICA8L3NlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwicGxhbmV0LWltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5ldFwiPjwvZGl2PlxuICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwbGFuZXQtbmF2LWhvbGRlclwiPlxuICA8bmF2IGNsYXNzPVwicGxhbmV0cy1idG4taG9sZGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYW5ldC1uYW1lLW5hdlwiIGRhdGEtbmF2PVwiMFwiPk1PT048L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIxXCI+TUFSUzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJwbGFuZXQtbmFtZS1uYXZcIiBkYXRhLW5hdj1cIjJcIj5FVVJPUEE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicGxhbmV0LW5hbWUtbmF2XCIgZGF0YS1uYXY9XCIzXCI+VElUQU48L2J1dHRvbj5cbiAgIDwvbmF2PlxuICA8YXJ0aWNsZSBjbGFzcz1cImFib3V0LXBsYW5ldFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPjwvYXJ0aWNsZT5cblxuPC9zZWN0aW9uPlxuIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uUGxhbmV0KGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgPGgxIGNsYXNzPVwicGxhbmV0LW5hbWVcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0ubmFtZX08L2gxPlxuICA8cCBjbGFzcz1cInBsYW5ldC1wYXJcIj4ke2RhdGEuZGVzdGluYXRpb25zW251bWJlcl0uZGVzY3JpcHRpb259PC9wPlxuICA8aHI+XG4gIDxkaXYgY2xhc3M9XCJwbGFuZXQtaW5mb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkaXN0YW5jZS1pbmZvXCI+XG4gICAgICA8ZGl2PkFWRyBESVNUQU5DRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYW5ldC1kaXN0YW5jZVwiPiR7ZGF0YS5kZXN0aW5hdGlvbnNbbnVtYmVyXS5kaXN0YW5jZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHJhdmVsLWluZm9cIj5cbiAgICAgIDxkaXY+RVNULiBUUkFWRUwgVElNRTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbC10aW1lXCI+JHtkYXRhLmRlc3RpbmF0aW9uc1tudW1iZXJdLnRyYXZlbH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgZWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gdGhpcmRQYWdlKGVsZSl7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBgIFxuIFxuICA8c2VjdGlvbiBjbGFzcz1cImNyZXctaW5mby1ob2xkZXJcIj5cbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjdXJyZW50LXBhZ2UtaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtcGFnZVwiPlxuICAgICAgIDxzcGFuIGNsYXNzPVwibGluay1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4wMjwvc3Bhbj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+TUVFVCBZT1VSIENSRVc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjcmV3LWltYWdlLWhvbGRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNyZXctaW1hZ2VcIiBkYXRhLWNyZXctaW1hZ2U+PC9kaXY+XG4gICA8L3NlY3Rpb24+XG5cbiAgICAgPC9zZWN0aW9uPlxuICAgICA8ZGl2IGNsYXNzPVwicGVyc29uLWluZm9cIiAgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgPGFydGljbGUgY2xhc3M9XCJwZXJzb24tZGV0YWlsLWluZm9cIiBkYXRhLWNyZXctYmlvPjwvYXJ0aWNsZT5cbiAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWJ0bi1ob2xkZXJcIiBkYXRhLXNsaWRlci1idG4+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjBcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjFcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjJcIiA+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cImNyZXctbWVtYmVyXCIgY2xhc3M9XCJzbGlkZXItYnRuXCIgIGRhdGEtY3Jldz1cIjNcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cblxuICAgPC9zZWN0aW9uPmA7XG4gICAgZWxlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gcGVyc29uSW5mbyhlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBiaW9UZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGVyc29uLWpvYlwiPiR7ZGF0YS5jcmV3W251bWJlcl0ucm9sZX08L2Rpdj5cbiAgICA8aDEgY2xhc3M9XCJjcmV3LW5hbWVcIj4ke2RhdGEuY3Jld1tudW1iZXJdLm5hbWV9PC9oMT5cbiAgICA8cCBjbGFzcz1cImNyZXctYmlvXCIgZGF0YS1jcmV3LWluZm8+JHtkYXRhLmNyZXdbbnVtYmVyXS5iaW99PC9wPlxuICBgO1xuICAgIGVsZS5pbm5lckhUTUwgPSBiaW9UZW1wbGF0ZTtcbn1cbmZ1bmN0aW9uIHBlcnNvbkltYWdlKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IG1vYmlsZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTAwcHgpXCIpO1xuICAgIGNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMXB4KVwiKTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAke2RhdGEuY3Jld1tudW1iZXJdLmltYWdlcy5wbmd9YCk7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcbiAgICB9XG4gICAgZWxzZSBpZihtb2JpbGVTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnN0IGltYWdlID0gcmVxdWlyZShgJHtkYXRhLmNyZXdbbnVtYmVyXS5pbWFnZXMud2VicH1gKTtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2V9JylgO1xuICAgIH1cbn1cbi8vZnVuY3Rpb24gdG8gZHJhdyBmb3VydGggcGFnZVxuZnVuY3Rpb24gZm91cnRoUGFnZShlbGUpe1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYCAgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZWNobm8tcGFnZVwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY3VycmVudC1wYWdlLWluZm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1wYWdlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxpbmstbnVtYmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+MDI8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluay1uYW1lXCI+U1BBQ0UgTEFVTkNIIDEwMTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWNobm8taW1hZ2UtaG9sZGVyXCIgZGF0YS10ZWNobm8taG9sZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWNobm8taW1hZ2VcIiBkYXRhLXRlY2huby1pbWFnZT48L2Rpdj5cbiAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGVjaG5vbG9neS1pbmZvLWhvbGRlclwiPlxuICAgICA8bmF2IGNsYXNzPVwidGVjaG5vLWJ0bi1ob2xkZXJcIiBkYXRhLXRlY2huby1idG5zPlxuICAgICAgICA8YnV0dG9uICBhcmlhLWxhYmVsPVwidGVjaG5vbG9neS11c2VkXCIgY2xhc3M9XCJ0ZWNobm8tYnRuXCIgZGF0YS10ZWNobm9sb2d5PVwiMFwiPjE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAgYXJpYS1sYWJlbD1cInRlY2hub2xvZ3ktdXNlZFwiIGNsYXNzPVwidGVjaG5vLWJ0blwiIGRhdGEtdGVjaG5vbG9neT1cIjFcIj4yPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gIGFyaWEtbGFiZWw9XCJ0ZWNobm9sb2d5LXVzZWRcIiBjbGFzcz1cInRlY2huby1idG5cIiBkYXRhLXRlY2hub2xvZ3k9XCIyXCI+MzwvYnV0dG9uPlxuICAgICAgPC9uYXY+XG4gICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlRIRSBURUNITk9MT0dZLi4uPC9kaXY+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInRlY2huby1wYXJcIiAgYXJpYS1saXZlPVwicG9saXRlXCIgZGF0YS10ZWNobm8taW5mbyA+PC9hcnRpY2xlPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb25cbiAgYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG4vL2Z1bmN0aW9uIHRvIHBpY2sgaW1hZ2UgZm9yIHRlY2hub2xvZ3kgcGFnZSBiYXNlZCBvbiBzY3JlZW5cbmZ1bmN0aW9uIGNob29zZVRlY2hub0ltYWdlKGVsZSxudW1iZXIpe1xuICAgIGNvbnN0IGxhcmdlU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjkwMHB4KVwiKTtcbiAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAke2RhdGEudGVjaG5vbG9neVtudW1iZXJdLmltYWdlcy5wb3J0cmFpdH1gKTtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2V9JylgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IGZhbHNlKXtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSByZXF1aXJlKGAke2RhdGEudGVjaG5vbG9neVtudW1iZXJdLmltYWdlcy5sYW5kc2NhcGV9YCk7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcbiAgICB9XG59XG4vL2Z1bmN0aW9uIHRvIHVwZGF0ZSBwYXJhZ3JhcGggYWJvdXQgdGhlIHRlY2hub2xvZ3kgdXNlZFxuZnVuY3Rpb24gdGVjaG5vSW5mbyhlbGUsbnVtYmVyKXtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGAgXG4gICAgPGgxIGNsYXNzPVwidGVjaG5vLW5hbWVcIj4ke2RhdGEudGVjaG5vbG9neVtudW1iZXJdLm5hbWV9PC9oMT5cbiAgICA8cCBjbGFzcz1cInRlY2huby1pbmZvXCI+JHtkYXRhLnRlY2hub2xvZ3lbbnVtYmVyXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgYDtcbiAgICBlbGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBlbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59XG5cbi8vZnVuY3Rpb24gdG8gcGljayBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZSBhbmQgcGFnZSBuYW1lIChuYXZpZ2F0aW9uIHVzZWQgYXMgcGFnZSBuYW1lKVxuZnVuY3Rpb24gY2hvb3NlQmdJbWFnZShlbGUsbnVtYmVyKXtcbiAgICBjb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo5MDBweClcIik7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBtb2JpbGVTY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTAwcHgpXCIpO1xuICAgIGNvbnN0IHBhZ2VzID0gW1wiaG9tZVwiLFwiZGVzdGluYXRpb25cIixcImNyZXdcIixcInRlY2hub2xvZ3lcIl07XG4gICAgaWYobW9iaWxlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBjb25zdCBpbWFnZSA9IHJlcXVpcmUoYCR7ZGF0YS5iYWNrZ3JvdW5kSW1hZ2VbbnVtYmVyXVtgJHtwYWdlc1tudW1iZXJdfWBdLm1vYmlsZX1gKTtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoc3JjJyR7aW1hZ2V9JylgO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICBjb25zdCBpbWFnZSA9IHJlcXVpcmUoYCR7ZGF0YS5iYWNrZ3JvdW5kSW1hZ2VbbnVtYmVyXVtgJHtwYWdlc1tudW1iZXJdfWBdLmRlc2t0b3B9YCk7XG4gICAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcbiAgICB9XG4gICAgZWxzZSBpZih0YWJTY3JlZW4ubWF0Y2hlcyA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnN0IGltYWdlID0gcmVxdWlyZShgJHtkYXRhLmJhY2tncm91bmRJbWFnZVtudW1iZXJdW2Ake3BhZ2VzW251bWJlcl19YF0udGFibGV0fWApO1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZX0nKWA7XG4gICAgfVxufVxuLy9mdW5jdGlvbiB0byBhZGQgZm9jdXMgc3R5bGUgZm9yIG5hdlxuZnVuY3Rpb24gbmF2QnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UtbmF2Jyk7XG4gICAgY29uc3QgdGFiU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOjUwMHB4KVwiKTtcbiAgICBjb25zdCBhbGxOYXYgID0gWy4uLnVsLmNoaWxkcmVuXTtcbiAgICBhbGxOYXYuZm9yRWFjaChuYXY9PntcbiAgICAgICAgaWYoYWxsTmF2LmluZGV4T2YobmF2KSAhPT0gbnVtYmVyKXtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbW9iaWxlLWZvY3VzJyk7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXRhYi1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFiU2NyZWVuLm1hdGNoZXMgPT09IHRydWUpe1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi10YWItZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhYlNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZS1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vL2Z1bmN0aW9uIHRvIGFkZCBzdHlsZSBmb3Igc2xpZGVyIGJ1dHRvbnMgcGFnZSB0aHJlZVxuZnVuY3Rpb24gc2xpZGVyQnRuRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBzbGlkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWJ0bicpO1xuICAgIGNvbnN0IGJ0bkFycmF5ICA9IFsuLi5zbGlkZXJCdG5dO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKHNsaWRlcj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKHNsaWRlcikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlci1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vZnVuY3Rpb24gdG8gYWRkIGZvY3VzIHN0eWxlIGZvciBwYWdlIGZvdXIgYnV0dG9uc1xuZnVuY3Rpb24gdGFiRm9jdXMobnVtYmVyKXtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWNobm8tYnRuXCIpO1xuICAgIGNvbnN0IGJ0bkFycmF5ID0gWy4uLmJ0bnNdO1xuICAgIGJ0bkFycmF5W251bWJlcl0uZm9jdXMoKTtcbiAgICBidG5BcnJheS5mb3JFYWNoKGJ0bj0+e1xuICAgICAgICBpZihidG5BcnJheS5pbmRleE9mKGJ0bikgIT09IG51bWJlcil7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInRlY2huby1idG4tY2xpY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0ZWNobm8tYnRuLWNsaWNrZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtob21lUGFnZVNlY3Rpb24sc2Vjb25kUGFnZSxkZXN0aW5hdGlvblBsYW5ldCxjaG9vc2VJbWFnZSx0aGlyZFBhZ2UscGVyc29uSW5mbyxcbiAgICBwZXJzb25JbWFnZSxmb3VydGhQYWdlLGNob29zZVRlY2hub0ltYWdlLHRlY2hub0luZm8sY2hvb3NlQmdJbWFnZSxcbiAgICBuYXZCdG5Gb2N1cyxzbGlkZXJCdG5Gb2N1cyx0YWJGb2N1c1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Rlc2t0b3AuY3NzXCI7XG5pbXBvcnQgeyBob21lUGFnZVNlY3Rpb24sc2Vjb25kUGFnZSxkZXN0aW5hdGlvblBsYW5ldCxjaG9vc2VJbWFnZSwgXG4gICAgdGhpcmRQYWdlLHBlcnNvbkluZm8scGVyc29uSW1hZ2UsXG4gICAgZm91cnRoUGFnZSx0ZWNobm9JbmZvLGNob29zZVRlY2hub0ltYWdlLFxuICAgIGNob29zZUJnSW1hZ2UsbmF2QnRuRm9jdXMsc2xpZGVyQnRuRm9jdXMsdGFiRm9jdXNcbn0gZnJvbSBcIi4vZG9tLWNvbXBvbmVudFwiO1xuY29uc3QgcGFnZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWdlLW5hdl1cIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtb3Blbi1tZW51XVwiKTtcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tZW51XVwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtbGlua3NdXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBsYXJnZVNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDo1MDFweClcIik7XG5jaG9vc2VCZ0ltYWdlKGJvZHksMCk7XG5ob21lUGFnZVNlY3Rpb24obWFpbik7XG5uYXZCdG5Gb2N1cygwKTtcbnBhZ2VOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZT0+e1xuICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1ob21lLWJ0bl1cIikpe1xuICAgICAgICBob21lUGFnZVNlY3Rpb24obWFpbik7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwwKTtcbiAgICAgICAgLy9mb3IgbW9iaWxlIGhpZGVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDApO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kZXN0aW5hdGlvbi1idG5dXCIpKXtcbiAgICAgICAgc2Vjb25kUGFnZShtYWluKTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgcGxhbmV0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hdj1cIjBcIl1gKTtcbiAgICAgICAgYnRuLmZvY3VzKCk7XG4gICAgICAgIGNob29zZUltYWdlKHBsYW5ldEltYWdlLDApO1xuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDApO1xuICAgICAgICBjaG9vc2VCZ0ltYWdlKGJvZHksMSk7XG4gICAgICAgIC8vaGlkZSBtb2JpbGUgbWVudVxuICAgICAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2QnRuRm9jdXMoMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWNyZXctYnRuXVwiKSl7XG4gICAgICAgIHRoaXJkUGFnZShtYWluKTtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwzKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMyk7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwyKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMyk7XG4gICAgICAgIC8vZm9yIG1vYmlsZVxuICAgICAgICBpZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2QnRuRm9jdXMoMik7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRlY2hub2xvZ3ktYnRuXVwiKSl7XG4gICAgICAgIGZvdXJ0aFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwwKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMCk7XG4gICAgICAgIGNob29zZUJnSW1hZ2UoYm9keSwzKTtcbiAgICAgICAgdGFiRm9jdXMoMCk7XG4gICAgICAgIC8vZm9yIG1vYmlsZSBoaWRlIG1lbnVcbiAgICAgICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdkJ0bkZvY3VzKDMpO1xuICAgIH1cbn0pO1xubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWV4cGxvcmUtYnRuXVwiKSl7XG4gICAgICAgIHNlY29uZFBhZ2UobWFpbik7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IHBsYW5ldEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYXY9XCIwXCJdYCk7XG4gICAgICAgIGJ0bi5mb2N1cygpO1xuICAgICAgICBjaG9vc2VJbWFnZShwbGFuZXRJbWFnZSwwKTtcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwwKTtcbiAgICAgICAgbmF2QnRuRm9jdXMoMCk7XG4gICAgfVxuICAgIC8vc2Vjb25kIHBhZ2UgZXZlbnRzXG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIwXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBwbGFuZXRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgY2hvb3NlSW1hZ2UocGxhbmV0SW1hZ2UsMCk7XG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtbmF2PVwiMVwiXWApKXtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1wbGFuZXQnKTtcbiAgICAgICAgY29uc3QgcGxhbmV0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbmV0Jyk7XG4gICAgICAgIGNob29zZUltYWdlKHBsYW5ldEltYWdlLDEpO1xuICAgICAgICBkZXN0aW5hdGlvblBsYW5ldChhcnRpY2xlLDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLW5hdj1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtcGxhbmV0Jyk7XG4gICAgICAgIGNvbnN0IHBsYW5ldEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5ldCcpO1xuICAgICAgICBjaG9vc2VJbWFnZShwbGFuZXRJbWFnZSwyKTtcbiAgICAgICAgZGVzdGluYXRpb25QbGFuZXQoYXJ0aWNsZSwyKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1uYXY9XCIzXCJdYCkpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXBsYW5ldCcpO1xuICAgICAgICBjb25zdCBwbGFuZXRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXQnKTtcbiAgICAgICAgY2hvb3NlSW1hZ2UocGxhbmV0SW1hZ2UsMyk7XG4gICAgICAgIGRlc3RpbmF0aW9uUGxhbmV0KGFydGljbGUsMyk7XG4gICAgfVxuICAgIC8vdGhpcmQgcGFnZSBldmVudFxuICBcbiAgICBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiMFwiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiMFwiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDApO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwwKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtY3Jldz1cIjFcIl1gKSl7XG4gICAgICAgIGNvbnN0IGNyZXdBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctYmlvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1pbWFnZV1cIik7XG4gICAgICAgIGNvbnN0IHNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY3Jldz1cIjFcIl1gKTtcbiAgICAgICAgcGVyc29uSW5mbyhjcmV3QXJ0aWNsZSwxKTtcbiAgICAgICAgc2xpZGVCdG4uZm9jdXMoKTtcbiAgICAgICAgcGVyc29uSW1hZ2UoaW1hZ2VIb2xkZXIsMSk7XG4gICAgICAgIHNsaWRlckJ0bkZvY3VzKDEpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLWNyZXc9XCIyXCJdYCkpe1xuICAgICAgICBjb25zdCBjcmV3QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWJpb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNyZXctaW1hZ2VdXCIpO1xuICAgICAgICBjb25zdCBzbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNyZXc9XCIyXCJdYCk7XG4gICAgICAgIHBlcnNvbkluZm8oY3Jld0FydGljbGUsMik7XG4gICAgICAgIHNsaWRlQnRuLmZvY3VzKCk7XG4gICAgICAgIHBlcnNvbkltYWdlKGltYWdlSG9sZGVyLDIpO1xuICAgICAgICBzbGlkZXJCdG5Gb2N1cygyKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS1jcmV3PVwiM1wiXWApKXtcbiAgICAgICAgY29uc3QgY3Jld0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3Jldy1iaW9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jcmV3LWltYWdlXVwiKTtcbiAgICAgICAgY29uc3Qgc2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jcmV3PVwiM1wiXWApO1xuICAgICAgICBwZXJzb25JbmZvKGNyZXdBcnRpY2xlLDMpO1xuICAgICAgICBzbGlkZUJ0bi5mb2N1cygpO1xuICAgICAgICBwZXJzb25JbWFnZShpbWFnZUhvbGRlciwzKTtcbiAgICAgICAgc2xpZGVyQnRuRm9jdXMoMyk7XG4gICAgfVxuICAgIC8vZm91cnRoIHBhZ2UgZXZlbnRcbiAgICBlbHNlIGlmKGUudGFyZ2V0Lm1hdGNoZXMoYFtkYXRhLXRlY2hub2xvZ3k9XCIwXCJdYCkpe1xuICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW5mb11cIik7XG4gICAgICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbWFnZV1cIik7XG4gICAgICAgIHRlY2hub0luZm8odGVjaEFydGljbGUsMCk7XG4gICAgICAgIGNob29zZVRlY2hub0ltYWdlKGltYWdlSG9sZGVyLDApO1xuICAgICAgICB0YWJGb2N1cygwKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLnRhcmdldC5tYXRjaGVzKGBbZGF0YS10ZWNobm9sb2d5PVwiMVwiXWApKXtcbiAgICAgICAgY29uc3QgdGVjaEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWluZm9dXCIpO1xuICAgICAgICBjb25zdCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZWNobm8taW1hZ2VdXCIpO1xuICAgICAgICB0ZWNobm9JbmZvKHRlY2hBcnRpY2xlLDEpO1xuICAgICAgICBjaG9vc2VUZWNobm9JbWFnZShpbWFnZUhvbGRlciwxKTtcbiAgICAgICAgdGFiRm9jdXMoMSk7XG4gICAgfVxuICAgIGVsc2UgaWYoZS50YXJnZXQubWF0Y2hlcyhgW2RhdGEtdGVjaG5vbG9neT1cIjJcIl1gKSl7XG4gICAgICAgIGNvbnN0IHRlY2hBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlY2huby1pbmZvXVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVjaG5vLWltYWdlXVwiKTtcbiAgICAgICAgdGVjaG5vSW5mbyh0ZWNoQXJ0aWNsZSwyKTtcbiAgICAgICAgY2hvb3NlVGVjaG5vSW1hZ2UoaW1hZ2VIb2xkZXIsMik7XG4gICAgICAgIHRhYkZvY3VzKDIpO1xuICAgIH1cbn0pO1xub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYobmF2LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIpID09PSBcImZhbHNlXCIpe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG4gICAgICAgIGNsb3NlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICB9XG59KTtcbmNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihuYXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcbmxhcmdlU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKCk9PntcbiAgICAvL3JlbW92ZSBtb2JpbGUgaG92ZXIgYW5kIGZvY3VzIHN0eWxlXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlLW5hdicpLmNoaWxkcmVuOyBcbiAgICBjb25zdCBsaSA9IFsuLi51bF07XG4gICAgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT10cnVlKXtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtzXCIsXCJ0cnVlXCIpO1xuICAgICAgICBjbG9zZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgICBcbiAgICAgICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbGkuZm9yRWFjaChuYXY9PntcbiAgICAgICAgICAgIG5hdi5zdHlsZS5ib3JkZXJSaWdodD0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKGxhcmdlU2NyZWVuLm1hdGNoZXMgPT09ZmFsc2Upe1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcImZhbHNlXCIpO1xuICAgICAgICBvcGVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufSk7XG5pZihsYXJnZVNjcmVlbi5tYXRjaGVzID09PSB0cnVlKXtcbiAgICBuYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua3NcIixcInRydWVcIik7XG4gICAgY2xvc2VNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgb3Blbk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmVsc2UgaWYobGFyZ2VTY3JlZW4ubWF0Y2hlcyA9PT0gZmFsc2Upe1xuICAgIG9wZW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWluLXdpZHRoOjkwMHB4KSB7XG4gICAgLmhvbWUtcGFnZS1zZWN0aW9ue1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICB9XG4gICAgLmJ0bi1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgIH1cbiAgICAuYmlnLWNpcmNsZXtcbiAgICAgcmlnaHQ6IDcwJTtcbiAgICB9XG4gICAgLmhvbWUtcGFnZS1oZWFkZXJ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmludHJvLXRpdGxle1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgIH1cbiAgICAuaG9tZS1wYWdlLW5hdntcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwxdncsMC41cmVtKTtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gICAgLmhvbWUtcGFnZS1uYXYgPiBsaXtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDowLjVyZW07XG4gICAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMXJlbSwxdncsMS41cmVtKTtcbiAgICAgfVxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIH1cbiAgICAub3Blbi1uYXZ7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaHItbGluZXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgei1pbmRleDogMjA7XG4gICAgfSBcbiAgICAvKiBjb250ZW50IG1haW4gaG9tZSBwYWdlICovXG4gICAgbWFpbntcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlwibGVmdCByaWdodFwiO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYnRuLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgfVxuICAgIC8qIGRlc3RpbmF0aW9uIG9yIHNlY29uZCBwYWdlICovXG4gICAgLnBsYW5ldC1pbmZvLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOjJyZW07XG4gICAgfVxuICAgIC5wbGFuZXQtbmF2LWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnBsYW5ldC1pbWFnZXtcbiAgICAgIGZsZXgtZ3JvdzogMS41O1xuICAgICAgaGVpZ2h0OiA0NXZoO1xuICAgIH1cbiAgICAucGxhbmV0LWluZm97XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICBcbiAgICAvKiB0aGlyZCBwYWdlICovXG4gICAgLyogdGhpcmQgYW5kIGZvdXJ0aCBpbWFnZSBob2xkZXIgc2FtZSBzdHlsZSAqL1xuICAgIC5jcmV3LWltYWdlLWhvbGRlciwudGVjaG5vLWltYWdlLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDsgXG4gICAgfVxuICAgIC5jcmV3LWltYWdle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IC01JTtcbiAgICAgIHotaW5kZXg6IC0xMDtcbiAgICB9XG4gICAgLnRlY2huby1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIHJpZ2h0OiAxJTtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBib3R0b206IDEwJTtcbiAgICAgIHotaW5kZXg6IC0xMDtcbiAgICB9XG4gICAgLmNyZXctaW5mby1ob2xkZXJ7XG4gICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgfVxuICAgIC5wZXJzb24taW5mb3tcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5wZXJzb24tZGV0YWlsLWluZm97XG4gICAgICBncmlkLWFyZWE6IHRvcDtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGVuZDtcbiAgICB9XG4gICAgLnNsaWRlci1idG4taG9sZGVye1xuICAgICAgZ3JpZC1hcmVhOiBib3R0b207XG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIH1cbiAgICAvKiBmb3VydGggcGFnZSBzdHlsZSAqL1xuICAgIC5jdXJyZW50LXBhZ2V7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgZ2FwOiAxLjVyZW07XG4gICAgfVxuICAgIC50ZWNobm8tcGFnZXtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cbiAgICAgIC50ZWNobm8taW1hZ2V7XG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgIH1cbiAgICAudGVjaG5vbG9neS1pbmZvLWhvbGRlcntcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiB0aXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2ICBhcnRpY2xlXCI7XG4gICAgfVxuICAgIC50ZWNobm8tYnRuLWhvbGRlcntcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDJyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBwYWRkaW5nOjAuNXJlbSA7XG4gICAgfVxuICAgIC50ZWNobm8tcGFye1xuICAgICAgZ3JpZC1hcmVhOiBhcnRpY2xlO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICB9XG4gICAgLnRlY2huby1pbmZve1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBsaW5lLWhlaWdodDoxLjVyZW07XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kZXNrdG9wLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO01BQ0UsVUFBVTtNQUNWLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7S0FDQyxVQUFVO0lBQ1g7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLGNBQWM7TUFDZCx3Q0FBd0M7TUFDeEMsU0FBUztJQUNYO0lBQ0E7TUFDRSxVQUFVO01BQ1YsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixVQUFVO01BQ1Ysc0NBQXNDO0tBQ3ZDO0lBQ0Q7TUFDRSxjQUFjO0tBQ2Y7SUFDRDtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsY0FBYztNQUNkLFdBQVc7SUFDYjtJQUNBLDJCQUEyQjtJQUMzQjtNQUNFLGFBQWE7TUFDYixnQ0FBZ0M7TUFDaEMscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjtJQUNBLCtCQUErQjtJQUMvQjtNQUNFLGVBQWU7TUFDZixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFFBQVE7SUFDVjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsY0FBYztNQUNkLFlBQVk7SUFDZDtJQUNBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixlQUFlO0lBQ2pCOztJQUVBLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0M7TUFDRSxnQkFBZ0I7TUFDaEIsUUFBUTtNQUNSLFNBQVM7SUFDWDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxVQUFVO01BQ1YsUUFBUTtNQUNSLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7TUFDVixXQUFXO01BQ1gsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixrQkFBa0I7S0FDbkI7SUFDRDtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjtJQUNBLHNCQUFzQjtJQUN0QjtNQUNFLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsV0FBVztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO01BQ0U7TUFDQSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsYUFBYTtNQUNiOzBDQUNvQztJQUN0QztJQUNBO01BQ0UsY0FBYztNQUNkLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsU0FBUztNQUNULG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakI7SUFDRjtNQUNFLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGFBQWE7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSAobWluLXdpZHRoOjkwMHB4KSB7XFxuICAgIC5ob21lLXBhZ2Utc2VjdGlvbntcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAgfVxcbiAgICAuYnRuLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICB9XFxuICAgIC5iaWctY2lyY2xle1xcbiAgICAgcmlnaHQ6IDcwJTtcXG4gICAgfVxcbiAgICAuaG9tZS1wYWdlLWhlYWRlcntcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmludHJvLXRpdGxle1xcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgfVxcbiAgICAuaG9tZS1wYWdlLW5hdntcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBwYWRkaW5nLWlubGluZTogY2xhbXAoMC4zcmVtLDF2dywwLjVyZW0pO1xcbiAgICAgIGdhcDogMXJlbTtcXG4gICAgfVxcbiAgICAuaG9tZS1wYWdlLW5hdiA+IGxpe1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDowLjVyZW07XFxuICAgICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDFyZW0sMXZ3LDEuNXJlbSk7XFxuICAgICB9XFxuICAgIC5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgfVxcbiAgICAub3Blbi1uYXZ7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaHItbGluZXtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB6LWluZGV4OiAyMDtcXG4gICAgfSBcXG4gICAgLyogY29udGVudCBtYWluIGhvbWUgcGFnZSAqL1xcbiAgICBtYWlue1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXFwibGVmdCByaWdodFxcXCI7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgfVxcbiAgICAvKiBkZXN0aW5hdGlvbiBvciBzZWNvbmQgcGFnZSAqL1xcbiAgICAucGxhbmV0LWluZm8taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogbGVmdDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOjJyZW07XFxuICAgIH1cXG4gICAgLnBsYW5ldC1uYXYtaG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIH1cXG4gICAgLnBsYW5ldC1pbWFnZXtcXG4gICAgICBmbGV4LWdyb3c6IDEuNTtcXG4gICAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIH1cXG4gICAgLnBsYW5ldC1pbmZve1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcbiAgICBcXG4gICAgLyogdGhpcmQgcGFnZSAqL1xcbiAgICAvKiB0aGlyZCBhbmQgZm91cnRoIGltYWdlIGhvbGRlciBzYW1lIHN0eWxlICovXFxuICAgIC5jcmV3LWltYWdlLWhvbGRlciwudGVjaG5vLWltYWdlLWhvbGRlcntcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDsgXFxuICAgIH1cXG4gICAgLmNyZXctaW1hZ2V7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAtNSU7XFxuICAgICAgei1pbmRleDogLTEwO1xcbiAgICB9XFxuICAgIC50ZWNobm8taW1hZ2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICByaWdodDogMSU7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICBib3R0b206IDEwJTtcXG4gICAgICB6LWluZGV4OiAtMTA7XFxuICAgIH1cXG4gICAgLmNyZXctaW5mby1ob2xkZXJ7XFxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgICB9XFxuICAgIC5wZXJzb24taW5mb3tcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5wZXJzb24tZGV0YWlsLWluZm97XFxuICAgICAgZ3JpZC1hcmVhOiB0b3A7XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICBhbGlnbi1jb250ZW50OiBlbmQ7XFxuICAgIH1cXG4gICAgLnNsaWRlci1idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogYm90dG9tO1xcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICB9XFxuICAgIC8qIGZvdXJ0aCBwYWdlIHN0eWxlICovXFxuICAgIC5jdXJyZW50LXBhZ2V7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgZ2FwOiAxLjVyZW07XFxuICAgIH1cXG4gICAgLnRlY2huby1wYWdle1xcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB9XFxuICAgICAgLnRlY2huby1pbWFnZXtcXG4gICAgICBncmlkLWFyZWE6IHJpZ2h0O1xcbiAgICB9XFxuICAgIC50ZWNobm9sb2d5LWluZm8taG9sZGVye1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2IHRpdGxlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiAgYXJ0aWNsZVxcXCI7XFxuICAgIH1cXG4gICAgLnRlY2huby1idG4taG9sZGVye1xcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDJyZW07XFxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICB9XFxuICAgIC50aXRsZXtcXG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIHBhZGRpbmc6MC41cmVtIDtcXG4gICAgfVxcbiAgICAudGVjaG5vLXBhcntcXG4gICAgICBncmlkLWFyZWE6IGFydGljbGU7XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICAudGVjaG5vLWluZm97XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OjEuNXJlbTtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYmVsbGVmYWlyLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYmFybG93LWNvbmRlbnNlZC12MTItbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pY29ucy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBiZWxsZWZhaXItcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyBcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbi8qIGJhcmxvdy1jb25kZW5zZWQtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTsgXG59XG4qe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNzE3O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiBidXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0gXG5tYWlue1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCAnQmVsbGVmYWlyJyxtb25vc3BhY2U7XG59XG4uaG9tZS1wYWdlLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gfVxuICAgLyogaG9tZXBhZ2UgbGluayBzdHlsZSAqL1xuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IGJ1dHRvbntcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBmb250LXNpemU6MS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xufVxuLmhvbWUtcGFnZS1uYXYgPiBsaSA+IHNwYW57XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xufVxuLmhvbWUtcGFnZS1uYXYgPiBsaXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogbmF2U2xpZGUgMXMgZWFzZS1pbi1vdXQ7XG4gfVxuLm5hdi1tb2JpbGUtZm9jdXN7XG4gICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSkgO1xuIH1cbi5ob21lLXBhZ2UtbmF2ID4gOm50aC1jaGlsZCgxKXtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiB9XG5cbi5ob21lLXBhZ2UtbmF2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6MC4ycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDIlLCA0NyUsIDAuMik7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgei1pbmRleDogMTA7XG59XG4ubW9iaWxlLWJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogMTAwMDtcbiB9XG4ubG9nb3tcbiAgd2lkdGg6IDAuN3JlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4vKiBzdHlsZSBmb3IgbW9iaWxlIG5hdiAqL1xuLm9wZW4tbmF2LC5jbG9zZS1uYXZ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDozJTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgfVxuLm9wZW4tbmF2e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG4uY2xvc2UtbmF2e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG4ub3Blbi1uYXZ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhyLWxpbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDEzMCwgMTMwKTtcbiAgei1pbmRleDogMTtcbn1cblxuQGtleWZyYW1lcyBuYXZTbGlkZXtcbiAgICAwJXtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuLyogbGlua3MgaG9sZGVyIGZvciBtb2JpbGUgbmF2ICovXG5bZGF0YS1uYXYtbGlua3M9XCJ0cnVlXCJde1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICBcbn1cbltkYXRhLW5hdi1saW5rcz1cImZhbHNlXCJde1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLyogaG9tZSBwYWdlIG1haW4gKi9cbm1haW57XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWFpblwiO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTsgXG4gfVxuLmV4cGxvcmUtYnRue1xuICB3aWR0aDogMTgwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjMlO1xuICBsZWZ0OjIuNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RmZjA7XG4gIH1cblxuLmJpZy1jaXJjbGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiB9XG4uYmlnLWNpcmNsZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsIDIlLCA0NyUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuLmhvbWUtcGFnZS1zZWN0aW9ue1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xufVxuLmludHJvLXRleHQsLmludHJvLXBhcntcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XG59XG4uaW50cm8tdGl0bGV7XG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbn1cbi5pbnRyby1wYXJ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RhcntcbiAgd2lkdGg6IDIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4uc3RhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZWYwZjUsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcbiAgYW5pbWF0aW9uOiAgc2hvb3RpbmdTdGFycyA0MHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNTUsIDAuNTEsIDAuODEpO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHNob290aW5nU3RhcnN7XG4gIDAlIHsgXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyBcbiAgfVxuICAxMCV7XG4gICAgb3BhY2l0eTogMTtcbiB9XG4gMTAwJSB7XG4gICBvcGFjaXR5OiAwO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg5MHZ3LCAtOTB2aCwgMCk7XG4gIH1cbn1cbi8qIHNlY29uZCBwYWdlIChkZXN0aW5hdGlvbikgc3R5bGUgKi9cbi5jdXJyZW50LXBhZ2V7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6MC41cmVtO1xuICBwYWRkaW5nOjFyZW0gO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXG59XG4ubGluay1uYW1lLC5saW5rLW51bWJlcntcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gfVxuLmxpbmstbnVtYmVye1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzRlNDk0OTtcbn1cbi5wbGFuZXQtaW5mby1ob2xkZXIsLnBsYW5ldC1uYXYtaG9sZGVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cbi8qIG5hdiBidXR0b25zICAqL1xuLnBsYW5ldHMtYnRuLWhvbGRlcntcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wbGFuZXQtbmFtZS1uYXZ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXG4gfVxuLnBsYW5ldC1uYW1lLW5hdjo6YWZ0ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiAnJztcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLnBsYW5ldC1uYW1lLW5hdjpob3Zlcjo6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuIH1cbiAucGxhbmV0LW5hbWUtbmF2OmZvY3VzOjphZnRlcntcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gfVxuIC5wbGFuZXQtbmFtZXtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gLnBsYW5ldC1wYXJ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiB9XG4gLmFib3V0LXBsYW5ldHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMC4zcmVtO1xuIH1cbiAucGxhbmV0LWluZm8taG9sZGVye1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuIH1cbiAuZGlzdGFuY2UtaW5mbywudHJhdmVsLWluZm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gfVxuIC5wbGFuZXQtZGlzdGFuY2UsLnRyYXZlbC10aW1le1xuICBmb250LXNpemU6IDJyZW07XG4gfVxuIC5wbGFuZXQtaW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucGxhbmV0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYW5pbWF0aW9uOiByb3RhdGVQbGFuZXQgNTBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGZvcndhcmRzOyBcbn1cbiBAa2V5ZnJhbWVzIHJvdGF0ZVBsYW5ldHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4gLyogdGhpcmQgcGFnZSBzdHlsZSAqL1xuIC5jcmV3LW5hbWV7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIH1cbi5wZXJzb24taW5mb3tcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwidG9wXCJcbiAgXCJib3R0b21cIjtcbiAgcGFkZGluZzogMXJlbTtcbiB9XG4ucGVyc29uLWRldGFpbC1pbmZve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3Jldy1iaW97XG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5zbGlkZXItYnRuLWhvbGRlcntcbiAgZ3JpZC1hcmVhOiB0b3A7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6MXJlbTtcbn1cbi5zbGlkZXItYnRue1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDkyLCA5Mik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiB9XG4uc2xpZGVyLWJ0bjpmb2N1cyAsLnNsaWRlci1idG4tY2xpY2tlZCwuc2xpZGVyLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gfVxuLnBlcnNvbi1qb2J7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjOTY5MTkxO1xuIH1cbiAvKiBmb3J0aCBhbmQgdGhpcmQgcGFnZSBpbWFnZSBob2xkZXIsaW1hZ2UgaGFzIHNhbWUgc3R5bGUgKi9cbi5jcmV3LWltYWdlLWhvbGRlciwudGVjaG5vLWltYWdlLWhvbGRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiB9ICBcbiAuY3Jldy1pbWFnZSwudGVjaG5vLWltYWdle1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xufVxuLnRlY2huby1pbWFnZXtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuIC8qZm91cnRoIHBhZ2Ugc3R5bGUgKi9cbi50ZWNobm9sb2d5LWluZm8taG9sZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG4gLnRlY2huby1uYW1le1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiB9XG4udGVjaG5vLWJ0bi1ob2xkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG5cbiB9XG4gLnRlY2huby1idG57XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDJyZW07XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2Q3ZGZmMDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY2LCA2NSwgNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLnRlY2huby1idG46aG92ZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi50ZWNobm8tYnRuLWNsaWNrZWQsIC50ZWNobm8tYnRuOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLyogbWVkaWEgcXVlcnkgZm9yIHRhYmxldCBzY3JlZW4gKi9cbkBtZWRpYSAobWluLXdpZHRoOjUwMXB4KSB7XG4gIC8qIGZpcnN0IHBhZ2UgKi9cbiAgLmhvbWUtcGFnZS1uYXZ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6MC41cmVtO1xuICAgfVxuICAuaG9tZS1uYXYtYnRuOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgei1pbmRleDogLTE7XG4gICB9XG4gICAuaG9tZS1uYXYtYnRuOmhvdmVyOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIH0gXG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkge1xuICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgwLjNyZW0sMnZ3LDAuNXJlbSk7XG4gICAgfVxuICAuaG9tZS1wYWdlLW5hdiA+IGxpOm50aC1jaGlsZCgxKXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5ob21lLXBhZ2UtbmF2ID4gbGkgPiBzcGFue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdi10YWItZm9jdXN7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICByZ2IoMjU1LCAyNTUsIDI1NSk7IFxuICB9IFxuICAuaG9tZS1wYWdlLXNlY3Rpb257XG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgfVxuIC5pbnRyby10aXRsZXtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgfVxuICAvKiBzZWNvbmQgcGFnZSBmb3IgdGFiICovXG4gIC5jdXJyZW50LXBhZ2V7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICB9XG4gIC5saW5rLW51bWJlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnNsaWRlci1idG4taG9sZGVye1xuICAgIGdyaWQtYXJlYTogYm90dG9tO1xuICB9XG4gIC5jcmV3LWltYWdlLWhvbGRlcntcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgLmNyZXctaW1hZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTIwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuICAucGVyc29uLWluZm97XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICB9XG4gIC8qIHRoaXJkIHBhZ2UgKi9cbiB9XG4gIEBtZWRpYShwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXtcbiAgICAvKiBzdG9wIHNob290aW5nIHN0YXIgbW92ZW1lbnQgKi9cbiAgLnN0YXJ7XG4gICAgZGlzcGxheTpub25lXG4gIH1cbiAgLnBsYW5ldHtcbiAgICBhbmltYXRpb246IHN0b3BSb3RhdGUgM3MgaW5maW5pdGUgOyBcbiAgfSBcbn1cbi8qIHN0b3Agcm90YXRpb24gZm8gcGxhbmV0IGlmIHJlZHVjZWQgKi9cbiBAa2V5ZnJhbWVzIHN0b3BSb3RhdGV7XG4gIHRve1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIGZyb217XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiB9XG4gXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4QkFBOEI7QUFD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QWE7RUFDZjtFQUNBO0lBQ0UsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7Q0FDRDtJQUNHLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0dBQ2YsZ0JBQWdCO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0EsZUFBZTtDQUNoQjtFQUNDO0lBQ0UsZ0NBQWdDO0VBQ2xDO0lBQ0U7RUFDRjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7QUFDQSx1Q0FBdUM7Q0FDdEM7RUFDQztJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0NBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYmVsbGVmYWlyLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyBcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYmVsbGVmYWlyLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG4vKiBiYXJsb3ctY29uZGVuc2VkLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYmFybG93LWNvbmRlbnNlZC12MTItbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgXFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDcxNztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbnVse1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYXtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuIGJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59IFxcbm1haW57XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCAnQmVsbGVmYWlyJyxtb25vc3BhY2U7XFxufVxcbi5ob21lLXBhZ2UtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gfVxcbiAgIC8qIGhvbWVwYWdlIGxpbmsgc3R5bGUgKi9cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gYnV0dG9ue1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIGZvbnQtc2l6ZToxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xcbn1cXG4uaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxufVxcbi5ob21lLXBhZ2UtbmF2ID4gbGl7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IG5hdlNsaWRlIDFzIGVhc2UtaW4tb3V0O1xcbiB9XFxuLm5hdi1tb2JpbGUtZm9jdXN7XFxuICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpIDtcXG4gfVxcbi5ob21lLXBhZ2UtbmF2ID4gOm50aC1jaGlsZCgxKXtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuIH1cXG5cXG4uaG9tZS1wYWdlLW5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOjAuMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAyJSwgNDclLCAwLjIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5tb2JpbGUtYnRue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDElO1xcbiAgei1pbmRleDogMTAwMDtcXG4gfVxcbi5sb2dve1xcbiAgd2lkdGg6IDAuN3JlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLyogc3R5bGUgZm9yIG1vYmlsZSBuYXYgKi9cXG4ub3Blbi1uYXYsLmNsb3NlLW5hdntcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDozJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICB9XFxuLm9wZW4tbmF2e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmcpO1xcbn1cXG4uY2xvc2UtbmF2e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWNsb3NlLnN2Zyk7XFxufVxcbi5vcGVuLW5hdntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaHItbGluZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTMwLCAxMzApO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBuYXZTbGlkZXtcXG4gICAgMCV7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbi8qIGxpbmtzIGhvbGRlciBmb3IgbW9iaWxlIG5hdiAqL1xcbltkYXRhLW5hdi1saW5rcz1cXFwidHJ1ZVxcXCJde1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIFxcbn1cXG5bZGF0YS1uYXYtbGlua3M9XFxcImZhbHNlXFxcIl17XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogaG9tZSBwYWdlIG1haW4gKi9cXG5tYWlue1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuIH1cXG4uZXhwbG9yZS1idG57XFxuICB3aWR0aDogMTgwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6MyU7XFxuICBsZWZ0OjIuNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkZmYwO1xcbiAgfVxcblxcbi5iaWctY2lyY2xle1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiB9XFxuLmJpZy1jaXJjbGU6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwgMiUsIDQ3JSwgMC4yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbn1cXG4uaG9tZS1wYWdlLXNlY3Rpb257XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuLmludHJvLXRleHQsLmludHJvLXBhcntcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICB3b3JkLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxufVxcbi5pbnRyby10aXRsZXtcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbn1cXG4uaW50cm8tcGFye1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3RhcntcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbi5zdGFye1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZWYwZjUsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggI2Q3ZGZmMCk7XFxuICBhbmltYXRpb246ICBzaG9vdGluZ1N0YXJzIDQwcyBjdWJpYy1iZXppZXIoMC4zNiwgMC41NSwgMC41MSwgMC44MSk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuQGtleWZyYW1lcyBzaG9vdGluZ1N0YXJze1xcbiAgMCUgeyBcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyBcXG4gIH1cXG4gIDEwJXtcXG4gICAgb3BhY2l0eTogMTtcXG4gfVxcbiAxMDAlIHtcXG4gICBvcGFjaXR5OiAwO1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOTB2dywgLTkwdmgsIDApO1xcbiAgfVxcbn1cXG4vKiBzZWNvbmQgcGFnZSAoZGVzdGluYXRpb24pIHN0eWxlICovXFxuLmN1cnJlbnQtcGFnZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDowLjVyZW07XFxuICBwYWRkaW5nOjFyZW0gO1xcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJ1xcbn1cXG4ubGluay1uYW1lLC5saW5rLW51bWJlcntcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiB9XFxuLmxpbmstbnVtYmVye1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGNvbG9yOiAjNGU0OTQ5O1xcbn1cXG4ucGxhbmV0LWluZm8taG9sZGVyLC5wbGFuZXQtbmF2LWhvbGRlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuLyogbmF2IGJ1dHRvbnMgICovXFxuLnBsYW5ldHMtYnRuLWhvbGRlcntcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxhbmV0LW5hbWUtbmF2e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnXFxuIH1cXG4ucGxhbmV0LW5hbWUtbmF2OjphZnRlcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogJyc7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGFuZXQtbmFtZS1uYXY6aG92ZXI6OmFmdGVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuIH1cXG4gLnBsYW5ldC1uYW1lLW5hdjpmb2N1czo6YWZ0ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gfVxcbiAucGxhbmV0LW5hbWV7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcic7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiB9XFxuIC5wbGFuZXQtcGFye1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gfVxcbiAuYWJvdXQtcGxhbmV0e1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gfVxcbiAucGxhbmV0LWluZm8taG9sZGVye1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gfVxcbiAuZGlzdGFuY2UtaW5mbywudHJhdmVsLWluZm97XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gfVxcbiAucGxhbmV0LWRpc3RhbmNlLC50cmF2ZWwtdGltZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gfVxcbiAucGxhbmV0LWltYWdle1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucGxhbmV0e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYW5pbWF0aW9uOiByb3RhdGVQbGFuZXQgNTBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGZvcndhcmRzOyBcXG59XFxuIEBrZXlmcmFtZXMgcm90YXRlUGxhbmV0e1xcbiAgMCV7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuIC8qIHRoaXJkIHBhZ2Ugc3R5bGUgKi9cXG4gLmNyZXctbmFtZXtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHdvcmQtc3BhY2luZzogMnB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuLnBlcnNvbi1pbmZve1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInRvcFxcXCJcXG4gIFxcXCJib3R0b21cXFwiO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gfVxcbi5wZXJzb24tZGV0YWlsLWluZm97XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jcmV3LWJpb3tcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLnNsaWRlci1idG4taG9sZGVye1xcbiAgZ3JpZC1hcmVhOiB0b3A7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOjFyZW07XFxufVxcbi5zbGlkZXItYnRue1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCA5MiwgOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiB9XFxuLnNsaWRlci1idG46Zm9jdXMgLC5zbGlkZXItYnRuLWNsaWNrZWQsLnNsaWRlci1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gfVxcbi5wZXJzb24tam9ie1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICM5NjkxOTE7XFxuIH1cXG4gLyogZm9ydGggYW5kIHRoaXJkIHBhZ2UgaW1hZ2UgaG9sZGVyLGltYWdlIGhhcyBzYW1lIHN0eWxlICovXFxuLmNyZXctaW1hZ2UtaG9sZGVyLC50ZWNobm8taW1hZ2UtaG9sZGVye1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwdmg7XFxuIH0gIFxcbiAuY3Jldy1pbWFnZSwudGVjaG5vLWltYWdle1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xcbn1cXG4udGVjaG5vLWltYWdle1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4gLypmb3VydGggcGFnZSBzdHlsZSAqL1xcbi50ZWNobm9sb2d5LWluZm8taG9sZGVye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4gLnRlY2huby1uYW1le1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gfVxcbi50ZWNobm8tYnRuLWhvbGRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuXFxuIH1cXG4gLnRlY2huby1idG57XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZDdkZmYwO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY2LCA2NSwgNjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLnRlY2huby1idG46aG92ZXJ7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi50ZWNobm8tYnRuLWNsaWNrZWQsIC50ZWNobm8tYnRuOmZvY3Vze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi8qIG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXQgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6NTAxcHgpIHtcXG4gIC8qIGZpcnN0IHBhZ2UgKi9cXG4gIC5ob21lLXBhZ2UtbmF2e1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOjAuNXJlbTtcXG4gICB9XFxuICAuaG9tZS1uYXYtYnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgIH1cXG4gICAuaG9tZS1uYXYtYnRuOmhvdmVyOjphZnRlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIH0gXFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IGNsYW1wKDAuM3JlbSwydncsMC41cmVtKTtcXG4gICAgfVxcbiAgLmhvbWUtcGFnZS1uYXYgPiBsaTpudGgtY2hpbGQoMSl7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaG9tZS1wYWdlLW5hdiA+IGxpID4gc3BhbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5uYXYtdGFiLWZvY3Vze1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIHJnYigyNTUsIDI1NSwgMjU1KTsgXFxuICB9IFxcbiAgLmhvbWUtcGFnZS1zZWN0aW9ue1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgfVxcbiAuaW50cm8tdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIH1cXG4gIC8qIHNlY29uZCBwYWdlIGZvciB0YWIgKi9cXG4gIC5jdXJyZW50LXBhZ2V7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gIH1cXG4gIC5saW5rLW51bWJlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG4gIC5zbGlkZXItYnRuLWhvbGRlcntcXG4gICAgZ3JpZC1hcmVhOiBib3R0b207XFxuICB9XFxuICAuY3Jldy1pbWFnZS1ob2xkZXJ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICAuY3Jldy1pbWFnZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0yMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbiAgLnBlcnNvbi1pbmZve1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICB9XFxuICAvKiB0aGlyZCBwYWdlICovXFxuIH1cXG4gIEBtZWRpYShwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXtcXG4gICAgLyogc3RvcCBzaG9vdGluZyBzdGFyIG1vdmVtZW50ICovXFxuICAuc3RhcntcXG4gICAgZGlzcGxheTpub25lXFxuICB9XFxuICAucGxhbmV0e1xcbiAgICBhbmltYXRpb246IHN0b3BSb3RhdGUgM3MgaW5maW5pdGUgOyBcXG4gIH0gXFxufVxcbi8qIHN0b3Agcm90YXRpb24gZm8gcGxhbmV0IGlmIHJlZHVjZWQgKi9cXG4gQGtleWZyYW1lcyBzdG9wUm90YXRle1xcbiAgdG97XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgZnJvbXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuIH1cXG4gXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgPHRpdGxlPnNwYWNlIHRvdXJpc208L3RpdGxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxoZWFkZXIgY2xhc3M9XFxcImhvbWUtcGFnZS1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImhyLWxpbmVcXFwiPjwvZGl2PlxcbiBcXG4gICAgPG5hdiBjbGFzcz1cXFwicGFnZS1saW5rc1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9iaWxlLWJ0blxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwib3Blbi1uYXZcXFwiIGFyaWEtbGFiZWw9XFxcIm9wZW4tbWVudVxcXCIgZGF0YS1vcGVuLW1lbnU+PC9idXR0b24+IFxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImNsb3NlLW5hdlxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2UtbWVudVxcXCIgZGF0YS1jbG9zZS1tZW51PjwvYnV0dG9uPiBcXG4gICAgPC9kaXY+XFxuICAgIDx1bCBjbGFzcz1cXFwiaG9tZS1wYWdlLW5hdlxcXCIgZGF0YS1uYXYtbGlua3M9XFxcImZhbHNlXFxcIiBkYXRhLXBhZ2UtbmF2PlxcbiAgICAgXFxuICAgICA8bGk+XFxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+MDA8L3NwYW4+XFxuICAgICAgICA8YnV0dG9uIGRhdGEtaG9tZS1idG4gY2xhc3M9XFxcImhvbWUtbmF2LWJ0blxcXCI+SE9NRTwvYnV0dG9uPlxcbiAgICAgICAgXFxuICAgICAgIDwvbGk+XFxuICAgICAgPGxpPlxcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjAxPC9zcGFuPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLWRlc3RpbmF0aW9uLWJ0biBjbGFzcz1cXFwiaG9tZS1uYXYtYnRuXFxcIj5ERVNUSU5BVElPTjwvYnV0dG9uPlxcbiAgICAgICAgXFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgPlxcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjAyPC9zcGFuPlxcbiAgICAgICAgPGJ1dHRvbiBkYXRhLWNyZXctYnRuIGNsYXNzPVxcXCJob21lLW5hdi1idG5cXFwiPkNSRVc8L2J1dHRvbj5cXG4gICAgICAgPC9saT5cXG4gICAgICA8bGk+XFxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+MDM8L3NwYW4+XFxuICAgICAgICA8YnV0dG9uIGRhdGEtdGVjaG5vbG9neS1idG4gY2xhc3M9XFxcImhvbWUtbmF2LWJ0blxcXCI+VEVDSE5PTE9HWTwvYnV0dG9uPlxcbiAgICAgICAgIFxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L25hdj5cXG48L2hlYWRlcj5cXG4gIDxtYWluIGNsYXNzPVxcXCJncmlkLXNlY3Rpb25cXFwiIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIj48L21haW4+XFxuPC9ib2R5PlxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi5cIjogXCIuL3NyYy9pbmRleC5qc1wiLFxuXHRcIi4vXCI6IFwiLi9zcmMvaW5kZXguanNcIixcblx0XCIuL2Fzc2V0cy9mb250cy9iYXJsb3ctY29uZGVuc2VkLXYxMi1sYXRpbi1yZWd1bGFyLndvZmYyXCI6IFwiLi9zcmMvYXNzZXRzL2ZvbnRzL2Jhcmxvdy1jb25kZW5zZWQtdjEyLWxhdGluLXJlZ3VsYXIud29mZjJcIixcblx0XCIuL2Fzc2V0cy9mb250cy9iZWxsZWZhaXItdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcIjogXCIuL3NyYy9hc3NldHMvZm9udHMvYmVsbGVmYWlyLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsXG5cdFwiLi9hc3NldHMvZm9udHMvZmF2aWNvbi0zMngzMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvZm9udHMvZmF2aWNvbi0zMngzMi5wbmdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvYmFja2dyb3VuZC1jcmV3LWRlc2t0b3AuanBnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2NyZXcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvYmFja2dyb3VuZC1jcmV3LW1vYmlsZS5qcGdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctdGFibGV0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctdGFibGV0LmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtYW5vdXNoZWgtYW5zYXJpLnBuZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS53ZWJwXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWRvdWdsYXMtaHVybGV5LnBuZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWRvdWdsYXMtaHVybGV5LndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkud2VicFwiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLndlYnBcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLnBuZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLXZpY3Rvci1nbG92ZXIud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY3Jldy9pbWFnZS12aWN0b3ItZ2xvdmVyLndlYnBcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1kZXNrdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2JhY2tncm91bmQtZGVzdGluYXRpb24tbW9iaWxlLmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2JhY2tncm91bmQtZGVzdGluYXRpb24tdGFibGV0LmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLWV1cm9wYS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEud2VicFwiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tYXJzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy5wbmdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbWFycy53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tYXJzLndlYnBcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ucG5nXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtbW9vbi53ZWJwXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVzdGluYXRpb24vaW1hZ2UtdGl0YW4ucG5nXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLndlYnBcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLWRlc2t0b3AuanBnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLW1vYmlsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLW1vYmlsZS5qcGdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWNsb3NlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jbG9zZS5zdmdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1oYW1idXJnZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWhhbWJ1cmdlci5zdmdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvYmFja2dyb3VuZC10ZWNobm9sb2d5LWRlc2t0b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2JhY2tncm91bmQtdGVjaG5vbG9neS1kZXNrdG9wLmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2JhY2tncm91bmQtdGVjaG5vbG9neS1tb2JpbGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2JhY2tncm91bmQtdGVjaG5vbG9neS1tb2JpbGUuanBnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvYmFja2dyb3VuZC10ZWNobm9sb2d5LXRhYmxldC5qcGdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9pbWFnZS1sYXVuY2gtdmVoaWNsZS1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLWxhdW5jaC12ZWhpY2xlLWxhbmRzY2FwZS5qcGdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9pbWFnZS1sYXVuY2gtdmVoaWNsZS1wb3J0cmFpdC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2UtbGF1bmNoLXZlaGljbGUtcG9ydHJhaXQuanBnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlLWNhcHN1bGUtbGFuZHNjYXBlLmpwZ1wiLFxuXHRcIi4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnXCIsXG5cdFwiLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2Vwb3J0LWxhbmRzY2FwZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2Vwb3J0LWxhbmRzY2FwZS5qcGdcIixcblx0XCIuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9pbWFnZS1zcGFjZXBvcnQtcG9ydHJhaXQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIixcblx0XCIuL2RhdGFcIjogXCIuL3NyYy9kYXRhLmpzb25cIixcblx0XCIuL2RhdGEuanNvblwiOiBcIi4vc3JjL2RhdGEuanNvblwiLFxuXHRcIi4vZGVza3RvcC5jc3NcIjogXCIuL3NyYy9kZXNrdG9wLmNzc1wiLFxuXHRcIi4vZG9tLWNvbXBvbmVudFwiOiBcIi4vc3JjL2RvbS1jb21wb25lbnQuanNcIixcblx0XCIuL2RvbS1jb21wb25lbnQuanNcIjogXCIuL3NyYy9kb20tY29tcG9uZW50LmpzXCIsXG5cdFwiLi9pbmRleFwiOiBcIi4vc3JjL2luZGV4LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc3JjL2luZGV4LmpzXCIsXG5cdFwiLi9zdHlsZS5jc3NcIjogXCIuL3NyYy9zdHlsZS5jc3NcIixcblx0XCIuL3RlbXBsYXRlLmh0bWxcIjogXCIuL3NyYy90ZW1wbGF0ZS5odG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF4uKiRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIl9kYXRhIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJob21lUGFnZVNlY3Rpb24iLCJlbGUiLCJ0ZW1wbGF0ZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiY2hvb3NlSW1hZ2UiLCJudW1iZXIiLCJtb2JpbGVTY3JlZW4iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibGFyZ2VTY3JlZW4iLCJtYXRjaGVzIiwiaW1hZ2UiLCJkYXRhIiwiZGVzdGluYXRpb25zIiwiaW1hZ2VzIiwicG5nIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ3ZWJwIiwic2Vjb25kUGFnZSIsImRlc3RpbmF0aW9uUGxhbmV0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZGlzdGFuY2UiLCJ0cmF2ZWwiLCJ0aGlyZFBhZ2UiLCJwZXJzb25JbmZvIiwiYmlvVGVtcGxhdGUiLCJjcmV3Iiwicm9sZSIsImJpbyIsInBlcnNvbkltYWdlIiwiZm91cnRoUGFnZSIsImNob29zZVRlY2hub0ltYWdlIiwidGVjaG5vbG9neSIsInBvcnRyYWl0IiwibGFuZHNjYXBlIiwidGVjaG5vSW5mbyIsImNob29zZUJnSW1hZ2UiLCJ0YWJTY3JlZW4iLCJwYWdlcyIsIm1vYmlsZSIsImRlc2t0b3AiLCJ0YWJsZXQiLCJuYXZCdG5Gb2N1cyIsInVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxsTmF2IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwibmF2IiwiaW5kZXhPZiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNsaWRlckJ0bkZvY3VzIiwic2xpZGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bkFycmF5IiwiZm9jdXMiLCJzbGlkZXIiLCJ0YWJGb2N1cyIsImJ0bnMiLCJidG4iLCJfZG9tQ29tcG9uZW50IiwicGFnZU5hdiIsIm1haW4iLCJvcGVuTWVudSIsImNsb3NlTWVudSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImFydGljbGUiLCJwbGFuZXRJbWFnZSIsImNyZXdBcnRpY2xlIiwiaW1hZ2VIb2xkZXIiLCJ0ZWNoQXJ0aWNsZSIsInNsaWRlQnRuIiwiZ2V0QXR0cmlidXRlIiwibGkiLCJib3JkZXJSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=