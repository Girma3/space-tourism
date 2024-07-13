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
      <button  aria-label="explore" class="explore-btn">EXPLORE</button>
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
export {homePageSection,destinationPlanet,chooseImage};
