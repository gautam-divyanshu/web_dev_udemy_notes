/*--------------moon page--------------*/
$(".moon-btn").click(changeMoon); 
function changeMoon(){
    $(".planet-img>img").attr("src","./assets/destination/image-moon.png");
    $(".moon-btn").addClass("active");
    $(".mars-btn").removeClass("active");
    $(".europa-btn").removeClass("active");
    $(".titan-btn").removeClass("active");

    $(".planet-txt>h1").text("MOON");
    $(".planet-txt>p").text("See our planet as you’ve never seen it before. \
                            A perfect relaxing trip away to help regain perspective and come back refreshed. \
                            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
    $(".distance>h3").text("384,400 KM");
    $(".time>h3").text("3 DAYS");                      
}

/*--------------mars page--------------*/
$(".mars-btn").click(changeMars); 
function changeMars(){
    $(".planet-img>img").attr("src","./assets/destination/image-mars.png");
    $(".mars-btn").addClass("active");
    $(".moon-btn").removeClass("active");
    $(".europa-btn").removeClass("active");
    $(".titan-btn").removeClass("active");

    $(".planet-txt>h1").text("MARS");
    $(".planet-txt>p").text("Don’t forget to pack your hiking boots. \
    You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. \
    It’s two and a half times the size of Everest!");

    $(".distance>h3").text("225 MIL. KM");
    $(".time>h3").text("9 MONTHS");
    
}

/*--------------europa page--------------*/
$(".europa-btn").click(changeEuropa); 
function changeEuropa(){
    $(".planet-img>img").attr("src","./assets/destination/image-europa.png");
    $(".europa-btn").addClass("active");
    $(".moon-btn").removeClass("active");
    $(".mars-btn").removeClass("active");
    $(".titan-btn").removeClass("active");

    $(".planet-txt>h1").text("EUROPA");
    $(".planet-txt>p").text("The smallest of the four Galilean moons orbiting Jupiter, \
    Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, \
    curling, hockey, or simple relaxation in your snug wintery cabin.");

    $(".distance>h3").text("628 MIL. KM");
    $(".time>h3").text("3 YEARS");
}

/*--------------titan page--------------*/
$(".titan-btn").click(changeTitan); 
function changeTitan(){
    $(".planet-img>img").attr("src","./assets/destination/image-titan.png");
    $(".titan-btn").addClass("active");
    $(".moon-btn").removeClass("active");
    $(".europa-btn").removeClass("active");
    $(".mars-btn").removeClass("active");

    $(".planet-txt>h1").text("TITAN");
    $(".planet-txt>p").text("The only moon known to have a dense atmosphere other than Earth,\
     Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get \
     striking views of the Rings of Saturn");

     $(".distance>h3").text("1.6 BIL. KM");
     $(".time>h3").text("7 YEARS");
}

/*----------------------------CREW PAGE------------------------------*/

/*-----slide btn1----*/
$(".slide-btn1").click(changeSlide1); 
function changeSlide1(){
    
    $(".slide-btn1").addClass("activeC");
    $(".slide-btn2").removeClass("activeC");
    $(".slide-btn3").removeClass("activeC");
    $(".slide-btn4").removeClass("activeC");
                
    $(".crew-content>h4").text("COMMANDER");
    $(".crew-content>h3").text("DOUGLAS HURLEY");
    $(".crew-content>p").text("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot \
    and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
    $(".crew-img>img").attr("src","./assets/crew/image-douglas-hurley.png");
    $(".crew-img>img").css("width","57vh");
    if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","45vh");
    }
    if (window.matchMedia("(min-width: 300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","38vh");
    }
}
/*-----slide btn2----*/
$(".slide-btn2").click(changeSlide2); 
function changeSlide2(){
    
    $(".slide-btn2").addClass("activeC");
    $(".slide-btn1").removeClass("activeC");
    $(".slide-btn3").removeClass("activeC");
    $(".slide-btn4").removeClass("activeC");

    $(".crew-content>h4").text("MISSION SPECIALIST"); 
    $(".crew-content>h3").text("MARK SHUTTLEWORTH"); 
    $(".crew-content>p").text("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the \
    Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
    $(".crew-img>img").attr("src","./assets/crew/image-mark-shuttleworth.png");   
    $(".crew-img>img").css("width","57vh");       
    if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","45vh");
    }
    if (window.matchMedia("(min-width: 300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","38vh");
    }
}
/*-----slide btn3----*/
$(".slide-btn3").click(changeSlide3); 
function changeSlide3(){
    
    $(".slide-btn3").addClass("activeC");
    $(".slide-btn2").removeClass("activeC");
    $(".slide-btn1").removeClass("activeC");
    $(".slide-btn4").removeClass("activeC");    
    
    $(".crew-content>h4").text("PILOT");
    $(".crew-content>h3").text("VICTOR GLOVER");
    $(".crew-content>p").text("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. \
    Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.");
    $(".crew-img>img").attr("src","./assets/crew/image-victor-glover.png"); 
    $(".crew-img>img").css("width","68vh");
    if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","53vh");
    }
    if (window.matchMedia("(min-width: 300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","45vh");
    }
    
}
/*-----slide btn4----*/
$(".slide-btn4").click(changeSlide4); 
function changeSlide4(){
    
    $(".slide-btn4").addClass("activeC");
    $(".slide-btn2").removeClass("activeC");
    $(".slide-btn3").removeClass("activeC");
    $(".slide-btn1").removeClass("activeC");   
    
    $(".crew-content>h4").text("FLIGHT ENGINEER");   
    $(".crew-content>h3").text("ANOUSHEH ANSARI");  
    $(".crew-content>p").text("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, \
    the first self-funded woman to fly to the ISS, and the first Iranian in space.");   
    $(".crew-img>img").attr("src","./assets/crew/image-anousheh-ansari.png"); 
    $(".crew-img>img").css("width","70vh");
    if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","55vh");
    }
    if (window.matchMedia("(min-width: 300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".crew-img>img").css("width","50vh");
    }

}


/*-----------------technology page----------------*/
$(".tech-btn1").click(changebtn1); 
function changebtn1(){
    
    $(".tech-btn1").addClass("active");
    $(".tech-btn2").removeClass("active");
    $(".tech-btn3").removeClass("active");

    $(".tech-content>h2").text("LAUNCH VEHICLE"); 
    $(".tech-content>p").text("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond.\
     Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");

     if (window.matchMedia("(min-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-launch-vehicle-portrait.jpg");
    }
     if (window.matchMedia("(min-width:  768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-launch-vehicle-landscape.jpg");
    }
    if (window.matchMedia("(min-width:  300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-launch-vehicle-landscape.jpg");
    }
    
}
function mediaSize(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-launch-vehicle-portrait.jpg");
    }
    if (window.matchMedia("(min-width:  300px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-launch-vehicle-landscape.jpg");
    }
}
mediaSize();

$(".tech-btn2").click(changebtn2); 
function changebtn2(){
    
    $(".tech-btn2").addClass("active");
    $(".tech-btn1").removeClass("active");
    $(".tech-btn3").removeClass("active");

    $(".tech-content>h2").text("SPACEPORT"); 
    $(".tech-content>p").text("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous \
    Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
    
    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-spaceport-portrait.jpg");
    }
    if (window.matchMedia("(min-width:  768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-spaceport-landscape.jpg");
    }
    if (window.matchMedia("(min-width:  300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-spaceport-landscape.jpg");
    }
    
}

$(".tech-btn3").click(changebtn3); 
function changebtn3(){
    
    $(".tech-btn3").addClass("active");
    $(".tech-btn2").removeClass("active");
    $(".tech-btn1").removeClass("active");

    $(".tech-content>h2").text("SPACE CAPSULE"); 
    $(".tech-content>p").text("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where \
     you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");

    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-space-capsule-portrait.jpg");
    }
    if (window.matchMedia("(min-width:  768px) and (max-width: 1024px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-space-capsule-landscape.jpg");
    }
    if (window.matchMedia("(min-width: 300px) and (max-width: 768px)").matches) {
        /* Changes when we reach the min-width  */
        $(".tech-img>img").attr("src","./assets/technology/image-space-capsule-landscape.jpg");
    }
}
/*-------------navbar toggle button------------*/
$(".navbar-toggler").click(toggleButton);
function toggleButton(){
    if (document.querySelector(".navbar-nav").classList.contains("showMenu")) {
        document.querySelector(".navbar-nav").classList.remove("showMenu");
        document.querySelector(".close-icon").style.display = "none";
        document.querySelector(".menu-icon").style.display = "block";
      } else {
        document.querySelector(".navbar-nav").classList.add("showMenu");
        document.querySelector(".close-icon").style.display = "block";
        document.querySelector(".menu-icon").style.display = "none";
      }
}