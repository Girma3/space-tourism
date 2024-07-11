import "./style.css";
const openMenu = document.querySelector("[data-open-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const nav = document.querySelector("[data-nav-links]");
const ul = document.querySelector(".desktop-nav");




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



