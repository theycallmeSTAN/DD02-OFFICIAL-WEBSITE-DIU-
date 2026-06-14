/* ==========================
DD02 WEBSITE JAVASCRIPT
========================== */


/* ==========================
ALBUM COUNTDOWN
CHANGE DATE HERE
========================== */


const releaseDate = new Date(
"July 27, 2026 12:00:00"
).getTime();



setInterval(function(){


const now = new Date().getTime();


const distance = releaseDate - now;



const days = Math.floor(
distance / (1000*60*60*24)
);



const hours = Math.floor(
(distance % (1000*60*60*24)) /
(1000*60*60)
);



const minutes = Math.floor(
(distance % (1000*60*60)) /
(1000*60)
);



const seconds = Math.floor(
(distance % (1000*60)) /
1000
);



document.getElementById("days").innerHTML =
days;


document.getElementById("hours").innerHTML =
hours;


document.getElementById("minutes").innerHTML =
minutes;


document.getElementById("seconds").innerHTML =
seconds;



},1000);






/* ==========================
NAVBAR EFFECT
========================== */


window.addEventListener(
"scroll",
()=>{


let nav=document.querySelector("nav");



if(window.scrollY>100){


nav.style.background =
"rgba(0,0,0,0.9)";


}

else{


nav.style.background =
"transparent";


}



});









/* ==========================
SCROLL REVEAL
========================== */



const sections =
document.querySelectorAll("section");



const reveal = ()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect()
.top;



if(position < window.innerHeight-100){


section.style.opacity="1";

section.style.transform=
"translateY(0)";


}


});


};





sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(60px)";


section.style.transition=
"1s ease";


});




window.addEventListener(
"scroll",
reveal
);


reveal();









/* ==========================
DYNAMIC YEAR
========================== */


let year =
new Date().getFullYear();


document.querySelector("footer")
.innerHTML =

`
© ${year} DD02 Records ® | yaa.ssshhhh

<br>

FROM DIU TO THE WORLD
`;
const logo = document.getElementById("logo");
const oceanSound = document.getElementById("oceanSound");

let playing = false;


logo.addEventListener("click",()=>{

if(!playing){

oceanSound.play();
playing=true;

}

else{

oceanSound.pause();
playing=false;

}

});
