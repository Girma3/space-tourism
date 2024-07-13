import "./style.css";
import { homePageSection,secondPage,destinationPlanet,chooseImage, thirdPage,personInfo,personImage } from "./dom-component";




const pageNav = document.querySelector("[data-page-nav]");
const main = document.querySelector('main');
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const nav = document.querySelector("[data-nav-links]");


//homePageSection(main);
pageNav.addEventListener("click",e=>{
    if(e.target.matches("[data-home-btn]")){
        homePageSection(main);
    }
    else if(e.target.matches("[data-destination-btn]")){
        secondPage(main);
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        const btn = document.querySelector(`[data-nav="0"]`);
        btn.focus();
        chooseImage(planetImage,0);
        destinationPlanet(article,0);
    }
    else if(e.target.matches("[data-crew-btn]")){
        thirdPage(main);
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="0"]`);
        personInfo(crewArticle,0);
        slideBtn.focus();
        personImage(imageHolder,0);
    }
    
});
main.addEventListener('click',(e)=>{
    if(e.target.matches("[data-explore-btn]")){
        secondPage(main);
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        const btn = document.querySelector(`[data-nav="0"]`);
        btn.focus();
        chooseImage(planetImage,0);
        destinationPlanet(article,0);
    }
    //second page events
    else if(e.target.matches(`[data-nav="0"]`)){
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        chooseImage(planetImage,0);
        destinationPlanet(article,0);
    }
    else if(e.target.matches(`[data-nav="1"]`)){
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        chooseImage(planetImage,1);
        destinationPlanet(article,1);
    }
    else if(e.target.matches(`[data-nav="2"]`)){
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        chooseImage(planetImage,2);
        destinationPlanet(article,2);
    }
    else if(e.target.matches(`[data-nav="3"]`)){
        const article = document.querySelector('.about-planet');
        const planetImage = document.querySelector('.planet');
        chooseImage(planetImage,3);
        destinationPlanet(article,3);
    }
    //third page event
  
    if(e.target.matches(`[data-crew="0"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="0"]`);
        personInfo(crewArticle,0);
        slideBtn.focus();
        personImage(imageHolder,0);

    }
    else if(e.target.matches(`[data-crew="1"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="1"]`);
        personInfo(crewArticle,1);
        slideBtn.focus();
        personImage(imageHolder,1);
    }
    else if(e.target.matches(`[data-crew="2"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="2"]`);
        personInfo(crewArticle,2);
        slideBtn.focus();
        personImage(imageHolder,2);
    }
    else if(e.target.matches(`[data-crew="3"]`)){
        console.log("hey");
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="3"]`);
        personInfo(crewArticle,3);
        slideBtn.focus();
        personImage(imageHolder,3);
    }
});

openMenu.addEventListener('click',()=>{
    if(nav.getAttribute("data-nav-links") === "false"){
        nav.setAttribute("data-nav-links","true");
       
        closeMenu.style.display = "block";
        openMenu.style.display ="none";
    }

});
closeMenu.addEventListener('click',()=>{
    if(nav.getAttribute("data-nav-links") === "true"){
        nav.setAttribute("data-nav-links","false");
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
     
      
       
        
    }
});
console.log("hey there fam");
//nav.setAttribute("data-nav-links","true");
const mobileScreen = window.matchMedia("(max-width: 500px)");
const largeScreen = window.matchMedia("(min-width:600px)");


largeScreen.addEventListener('change',()=>{
  
    nav.setAttribute("data-nav-links","true");
    if(largeScreen.matches ===true){
        closeMenu.style.display = 'none';   
        openMenu.style.display = 'none';
    }

});

mobileScreen.addEventListener('change',()=>{


    console.log(mobileScreen);
    if(mobileScreen.matches === true ){
        openMenu.style.display = "block";
    
        nav.setAttribute("data-nav-links","false");
   
    }
   
   
    
});
if(largeScreen.matches === true){
    nav.setAttribute("data-nav-links","true");
}
else if(mobileScreen.matches === true){
    nav.setAttribute("data-nav-links","false");

}



