import data from "./data.json";
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
//function choose image from json based on the screen width 
function chooseImage(ele,number){
    const mobileScreen = window.matchMedia("(max-width: 500px)");
    const largeScreen = window.matchMedia("(min-width:600px)");
    if(largeScreen.matches === true){
        const image = require(`${data.destinations[number].images.png}`);
        ele.style.backgroundImage = `url('${image}')`;
    }
    else if(mobileScreen.matches === true){
        const image = require(`${data.destinations[number].images.webp}`);
        ele.style.backgroundImage = `url('${image}')`;
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
  <article class="about-planet"></article>

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
     <div class="person-info">
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
    const largeScreen = window.matchMedia("(min-width:600px)");
    if(largeScreen.matches === true){
        const image = require(`${data.crew[number].images.png}`);
        ele.style.backgroundImage = `url('${image}')`;
    }
    else if(mobileScreen.matches === true){
        const image = require(`${data.crew[number].images.webp}`);
        ele.style.backgroundImage = `url('${image}')`;
    }
}
//function to draw fourth page
function fourthPage(ele){
    const template = `  
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
   
   
     <nav class="techno-btn-holder">
        <button  aria-label="technology-used" class="techno-btn" data-technology="0">1</button>
        <button  aria-label="technology-used" class="techno-btn" data-technology="1">2</button>
        <button  aria-label="technology-used" class="techno-btn" data-technology="2">3</button>
      </nav>
     <div class="title">THE TECHNOLOGY...</div>
      <article class="techno-par" data-techno-info></article>
   
    </section>`;
    ele.textContent = '';
    ele.innerHTML = template;
}
//function to pick image for technology page based on screen
function chooseTechnoImage(ele,number){
    const mobileScreen = window.matchMedia("(max-width: 500px)");
    const largeScreen = window.matchMedia("(min-width:600px)");
    if(largeScreen.matches === true){
        const image = require(`${data.technology[number].images.portrait}`);
        ele.style.backgroundImage = `url('${image}')`;
    }
    else if(mobileScreen.matches === true){
        const image = require(`${data.technology[number].images.landscape}`);
        ele.style.backgroundImage = `url('${image}')`;
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


export {homePageSection,secondPage,destinationPlanet,chooseImage,thirdPage,personInfo,
    personImage,fourthPage,chooseTechnoImage,technoInfo};
