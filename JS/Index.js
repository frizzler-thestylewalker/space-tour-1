// hamburger-menu

var navs = document.querySelector(".navs");
var navsLink = document.querySelectorAll(".navsLink");
var hamburger= document.querySelector(".hamburger");
var closeIcon= document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navs.classList.contains("showMenu")) {
    navs.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    navs.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}




// index js

var home = document.querySelectorAll(".navs-link")
for(i=0;i<home.length;i++){
    document.querySelectorAll("a")[i].addEventListener("click", homeEventhandle)
}

function homeEventhandle(e){
    var a = e.target
    var element = document.querySelectorAll(".navs-link")
    for(j=0;j<element.length;j++){
       element[j].classList.remove("navs-link-active")
    }
    a.classList.add("navs-link-active")

}

// destination js

var planet = document.querySelectorAll(".tabs-item")
for (let i = 0; i <planet.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", eventhandle);

}

function eventhandle(e) {
    console.log(this.innerHTML)
    var button = e.target;
    var element = document.getElementsByClassName("tabs-item")
    for(i=0; i<element.length;i++){
        element[i].classList.remove("tabs-item-active")
    }
    button.classList.add("tabs-item-active")

    var container = document.querySelectorAll(".container")
    

    for (j=0;j<container.length;j++){
        var show = document.querySelectorAll(".content")[j]
        show.style.visibility = "hidden"
    }
    
    if (this.innerHTML == "MOON") {
        var show = document.getElementById("moon");
        var see = document.querySelector(".moon-img");
        show.style.visibility = "visible"
        see.style.visibility = "visible"
        
    }
    else if (this.innerHTML == "MARS"){
        var show = document.getElementById("mars");
        var see = document.querySelector(".mars-img");
        show.style.visibility = "visible"
        see.style.visibility = "visible"
    }
    else if (this.innerHTML == "EUROPA"){
        var show = document.getElementById("europa");
        var see = document.querySelector(".europa-img");
        show.style.visibility = "visible"
        see.style.visibility = "visible"
    }
    else{
        var show = document.getElementById("titan");
        var see = document.querySelector(".titan-img");
        show.style.visibility = "visible"
        see.style.visibility = "visible"
    }

   
    
}

// crew js

var crewBtn = document.querySelectorAll(".crew-buttons")
for(var i=0;i<crewBtn.length;i++){
   document.querySelectorAll('button')[i].addEventListener('click', crewEventhandle)
}

function crewEventhandle(e){
    var button = e.target
    var element = document.getElementsByClassName("crew-buttons")
      
    for(i=0;i<element.length;i++){
        element[i].classList.remove("crew-buttons-active")
    }
    button.classList.add("crew-buttons-active")

    var crewDetails = document.querySelectorAll(".container")
    for(k=0;k<crewDetails.length;k++){
        var show = document.querySelectorAll('.content')[k]
        show.style.visibility = 'hidden'
    }

    switch (this.id) {
        case "1":
            var show = document.querySelector(".commander")
            var see = document.querySelector(".img-1")
            see.style.visibility='visible'
            show.style.visibility = "visible"
            break;
        
        case "2":
            var show = document.querySelector(".specialist")
            show.style.visibility = "visible"
            var see = document.querySelector(".img-2")
            see.style.visibility='visible'
            break;

        case "3":
            var show = document.querySelector(".pilot")
            show.style.visibility = "visible"
            var see = document.querySelector(".img-3")
            see.style.visibility='visible'
            break;

        case "4":
            var show = document.querySelector(".flight")
            show.style.visibility = "visible"
            var see = document.querySelector(".img-4")
            see.style.visibility='visible'
            break;
        
    
        default:
            break;
    }

}
// technology js

var technology = document.querySelectorAll(".tech-btn")
for (var i=0;i< technology.length;i++){
    document.querySelectorAll(".tech-btn")[i].addEventListener("click", techEvetnhandle)
}

function techEvetnhandle(e){
    var button = e.target
    var element = document.getElementsByClassName("tech-btn")
    
    for (let j=0;j<element.length;j++){
        element[j].classList.remove("tech-btn-active")
    }
    button.classList.add("tech-btn-active")

    var techDetails = document.querySelectorAll(".container");
    for(k=0;k<techDetails.length;k++){
        var show = document.querySelectorAll('.content')[k]
        show.style.visibility = 'hidden'
    }

    switch (this.id) {
        case "1":
            var show = document.querySelector(".launch-vehicle")
            var see = document.querySelector(".launch-vehicle-img")
            show.style.visibility = "visible"
            see.style.visibility = "visible"
            break;
           
        case "2":
            var show = document.querySelector(".spaceport")
            var see = document.querySelector(".spaceport-img")
            show.style.visibility = "visible"
            see.style.visibility = "visible"
            break;   
        
        case "3":
            var show = document.querySelector(".space-capsule")
            show.style.visibility = "visible"
            var see = document.querySelector(".space-capsule-img")
            see.style.visibility = "visible"
            break; 
        
    
        default:
            break;
    }
    console.log(buttons)
}
        
   
    
    


