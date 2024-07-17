import "./style.css";
import "./desktop.css";
import { homePageSection,secondPage,destinationPlanet,planetImage, 
    thirdPage,personInfo,personImage,
    fourthPage,technoInfo,chooseTechnoImage,
    chooseBgImage,navBtnFocus,sliderBtnFocus,tabFocus
} from "./dom-component";
const pageNav = document.querySelector("[data-page-nav]");
const main = document.querySelector('main');
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const nav = document.querySelector("[data-nav-links]");
const body = document.body;
const largeScreen = window.matchMedia("(min-width:501px)");


    
chooseBgImage(body,0);
homePageSection(main);
navBtnFocus(0);
pageNav.addEventListener("click",e=>{
    if(e.target.matches("[data-home-btn]")){
        homePageSection(main);
        chooseBgImage(body,0);
        //for mobile hide
        if(largeScreen.matches === false){
            nav.setAttribute("data-nav-links","false");
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
        navBtnFocus(0);
    }
    else if(e.target.matches("[data-destination-btn]")){
        secondPage(main);
        const article = document.querySelector('.about-planet');
        const imageHolder = document.querySelector('.planet');
        const btn = document.querySelector(`[data-nav="0"]`);
        btn.focus();
        planetImage(imageHolder,2); //2 rep moon image
        destinationPlanet(article,0);
        chooseBgImage(body,1);
        //hide mobile menu
        if(largeScreen.matches === false){
            nav.setAttribute("data-nav-links","false");
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
        navBtnFocus(1);
    }
    else if(e.target.matches("[data-crew-btn]")){
        thirdPage(main);
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        personInfo(crewArticle,3);
        personImage(imageHolder,3);
        chooseBgImage(body,2);
        sliderBtnFocus(3);
        //for mobile
        if(largeScreen.matches === false){
            nav.setAttribute("data-nav-links","false");
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
        navBtnFocus(2);
    }
    else if(e.target.matches("[data-technology-btn]")){
        fourthPage(main);
        const techArticle = document.querySelector("[data-techno-info]");
        const imageHolder = document.querySelector("[data-techno-image]");
        technoInfo(techArticle,0);
        chooseTechnoImage(imageHolder,0);
        chooseBgImage(body,3);
        tabFocus(0);
        //for mobile hide menu
        if(largeScreen.matches === false){
            nav.setAttribute("data-nav-links","false");
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
        navBtnFocus(3);
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
        navBtnFocus(0);
    }
    //second page events 
    else if(e.target.matches(`[data-nav="0"]`)){
        const article = document.querySelector('.about-planet');
        const imageHolder = document.querySelector('.planet');
        planetImage(imageHolder,2);
        destinationPlanet(article,0);
    }
    else if(e.target.matches(`[data-nav="1"]`)){
        const article = document.querySelector('.about-planet');
        const imageHolder = document.querySelector('.planet');
        planetImage(imageHolder,1); //1 rep mars
        destinationPlanet(article,1);
    }
    else if(e.target.matches(`[data-nav="2"]`)){
        const article = document.querySelector('.about-planet');
        const imageHolder = document.querySelector('.planet');
        planetImage(imageHolder,0); //0 rep europa
        destinationPlanet(article,2);
    }
    else if(e.target.matches(`[data-nav="3"]`)){
        const article = document.querySelector('.about-planet');
        const imageHolder = document.querySelector('.planet');
        planetImage(imageHolder,3);//3 rep titan
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
        sliderBtnFocus(0);
    }
    else if(e.target.matches(`[data-crew="1"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="1"]`);
        personInfo(crewArticle,1);
        slideBtn.focus();
        personImage(imageHolder,1);
        sliderBtnFocus(1);
    }
    else if(e.target.matches(`[data-crew="2"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="2"]`);
        personInfo(crewArticle,2);
        slideBtn.focus();
        personImage(imageHolder,2);
        sliderBtnFocus(2);
    }
    else if(e.target.matches(`[data-crew="3"]`)){
        const crewArticle = document.querySelector("[data-crew-bio]");
        const imageHolder = document.querySelector("[data-crew-image]");
        const slideBtn = document.querySelector(`[data-crew="3"]`);
        personInfo(crewArticle,3);
        slideBtn.focus();
        personImage(imageHolder,3);
        sliderBtnFocus(3);
    }
    //fourth page event
    else if(e.target.matches(`[data-technology="0"]`)){
        const techArticle = document.querySelector("[data-techno-info]");
        const imageHolder = document.querySelector("[data-techno-image]");
        technoInfo(techArticle,0);
        chooseTechnoImage(imageHolder,0);
        tabFocus(0);
    }
    else if(e.target.matches(`[data-technology="1"]`)){
        const techArticle = document.querySelector("[data-techno-info]");
        const imageHolder = document.querySelector("[data-techno-image]");
        technoInfo(techArticle,1);
        chooseTechnoImage(imageHolder,1);
        tabFocus(1);
    }
    else if(e.target.matches(`[data-technology="2"]`)){
        const techArticle = document.querySelector("[data-techno-info]");
        const imageHolder = document.querySelector("[data-techno-image]");
        technoInfo(techArticle,2);
        chooseTechnoImage(imageHolder,2);
        tabFocus(2);
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
largeScreen.addEventListener('change',()=>{
    //remove mobile hover and focus style
    const ul = document.querySelector('.home-page-nav').children; 
    const li = [...ul];
    if(largeScreen.matches ===true){
        nav.setAttribute("data-nav-links","true");
        closeMenu.style.display = 'none';   
        openMenu.style.display = 'none';
        li.forEach(nav=>{
            nav.style.borderRight= "none";
        });
    }
    else if(largeScreen.matches ===false){
        nav.setAttribute("data-nav-links","false");
        openMenu.style.display = "block";
    }

});
if(largeScreen.matches === true){
    nav.setAttribute("data-nav-links","true");
    closeMenu.style.display = 'none';   
    openMenu.style.display = 'none';
}
else if(largeScreen.matches === false){
    openMenu.style.display = 'block';
}



