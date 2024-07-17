import data from "./data.json";

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
function homePageSection(ele){
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
function planetImage(ele,number){
    const mobileScreen = window.matchMedia("(max-width: 500px)");
    const largeScreen = window.matchMedia("(min-width:501px)");
    //webp for small screen and png for large screen
    //image stored in this order europa,mars,moon,titan 
    const planetImagesTab = importAll(require.context('./assets/images/destination', false, /\.(webp)$/));
    const planetLargeImage = importAll(require.context('./assets/images/destination', false, /\.(png)$/));
    if(mobileScreen.matches === true){
        ele.style.backgroundImage = `url("${planetImagesTab[number].default}")`;
    }
    else if(largeScreen.matches === true){
        ele.style.backgroundImage = `url("${planetLargeImage[number].default}")`;
    }
}
//function destination page (second page)
function secondPage(ele){
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

function destinationPlanet(ele,number){
    const template = ` 
  <h1 class="planet-name">${data.destinations[number].name}</h1>
  <p class="planet-par">${data.destinations[number].description}</p>
  <hr>
  <div class="planet-info">
    <div class="distance-info">
      <div>AVG DISTANCE</div>
      <div class="planet-distance">${data.destinations[number].distance}</div>
    </div>
    <div class="travel-info">
      <div>EST. TRAVEL TIME</div>
      <div class="travel-time">${data.destinations[number].travel}</div>
    </div>
  </div>
  `;
    ele.textContent = '';
    ele.innerHTML = template;
}
function thirdPage(ele){
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

//image order to match json data about person as key and value pair
const personInfoHashmap = new Map();
personInfoHashmap.set(3,0);
personInfoHashmap.set(0,1);
personInfoHashmap.set(1,2);
personInfoHashmap.set(2,3);
function personInfo(ele,number){
    const bioTemplate = `
    <div class="person-job">${data.crew[number].role}</div>
    <h1 class="crew-name">${data.crew[number].name}</h1>
    <p class="crew-bio" data-crew-info>${data.crew[number].bio}</p>
  `;
    ele.innerHTML = bioTemplate;
}
function personImage(ele,number){
    const mobileScreen = window.matchMedia("(max-width: 500px)");
    const largeScreen = window.matchMedia("(min-width:501px)");
    const tabImages = importAll(require.context('./assets/images/crew', true, /\.(webp)$/));
    const largeImages = importAll(require.context('./assets/images/crew', true, /\.(png)$/));
    //convert num to match json data
    number = personInfoHashmap.get(number);
    console.log(largeImages);
    if(mobileScreen.matches === true){
        ele.style.backgroundImage = `url("${tabImages[number].default}")`;
    }
    if(largeScreen.matches === true){
        ele.style.backgroundImage = `url("${largeImages[number].default}")`;
    }
    
}
//function to draw fourth page
function fourthPage(ele){
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
const imageOrder = [0 ,2, 1];
function chooseTechnoImage(ele,number){
    const largeScreen = window.matchMedia("(min-width:900px)");
    const largeImages = importAll(require.context('./assets/images/technology/portrait-bg', false, /\.(jpg)$/));
    const tabImages = importAll(require.context('./assets/images/technology/landscape-bg', false, /\.(jpg)$/));
    number = imageOrder[number];
    if(largeScreen.matches === true){
        ele.style.backgroundImage = `url("${largeImages[number].default}")`;
    }
    else if(largeScreen.matches === false){
        ele.style.backgroundImage = `url("${tabImages[number].default}")`;
    }
}
//function to update paragraph about the technology used
function technoInfo(ele,number){
    const template = ` 
    <h1 class="techno-name">${data.technology[number].name}</h1>
    <p class="techno-info">${data.technology[number].description}</p>
    `;
    ele.textContent = '';
    ele.innerHTML = template;
}

//function to pick background image based on the screen size and page name (navigation used as page name)
function chooseBgImage(ele,number){
    const largeScreen = window.matchMedia("(min-width:900px)");
    const tabScreen = window.matchMedia("(min-width:500px)");
    const mobileScreen = window.matchMedia("(max-width:500px)");
    pickBg(number);
    
    //function to pick background image based on screen size
    function pickBg(number){
        const homeImages = importAll(require.context('./assets/images/home', false, /\.(png|jpe?g|svg)$/));
        const destinationImages = importAll(require.context('./assets/images/destination-bg', false, /\.(png|jpe?g|svg)$/));
        const crewImages = importAll(require.context('./assets/images/crew-bg', false, /\.(png|jpe?g|svg)$/));
        const technoImages = importAll(require.context('./assets/images/techno-bg', false, /\.(png|jpe?g|svg)$/));
        const imagesTab = [homeImages,destinationImages,crewImages,technoImages];
        //images stored in desktop, mobile, tab(0,1,2) order
        if(mobileScreen.matches === true){
            ele.style.backgroundImage = `url("${imagesTab[number][1].default}")`;
        }
        else if(largeScreen.matches === true){
            ele.style.backgroundImage = `url("${imagesTab[number][0].default}")`;
        }
        else if(tabScreen.matches === true){
            ele.style.backgroundImage = `url("${imagesTab[number][2].default}")`;
        }
    }
}
//function to add focus style for nav
function navBtnFocus(number){
    const ul = document.querySelector('.home-page-nav');
    const tabScreen = window.matchMedia("(min-width:500px)");
    const allNav  = [...ul.children];
    allNav.forEach(nav=>{
        if(allNav.indexOf(nav) !== number){
            nav.classList.remove('nav-mobile-focus');
            nav.classList.remove('nav-tab-focus');
        }
        else if(tabScreen.matches === true){
            nav.classList.add('nav-tab-focus');
        }
        else if(tabScreen.matches === false){
            nav.classList.add('nav-mobile-focus');
        }
    });
}
//function to add style for slider buttons page three
function sliderBtnFocus(number){
    const sliderBtn = document.querySelectorAll('.slider-btn');
    const btnArray  = [...sliderBtn];
    btnArray[number].focus();
    btnArray.forEach(slider=>{
        if(btnArray.indexOf(slider) !== number){
            slider.classList.remove("slider-btn-clicked");
        }
        else{
            slider.classList.add("slider-btn-clicked");
        }
    });
}
//function to add focus style for page four buttons
function tabFocus(number){
    const btns = document.querySelectorAll(".techno-btn");
    const btnArray = [...btns];
    btnArray[number].focus();
    btnArray.forEach(btn=>{
        if(btnArray.indexOf(btn) !== number){
            btn.classList.remove("techno-btn-clicked");
        }
        else{
            btn.classList.add("techno-btn-clicked");
        }
    });
}

export {homePageSection,secondPage,destinationPlanet,planetImage,thirdPage,personInfo,
    personImage,fourthPage,chooseTechnoImage,technoInfo,chooseBgImage,
    navBtnFocus,sliderBtnFocus,tabFocus
};
