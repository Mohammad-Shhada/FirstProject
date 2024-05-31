let section = document.querySelector('.skills');
let span = document.querySelectorAll('.skills span');

let section1 = document.querySelector('.design')
let li = document.querySelectorAll('.li')

window.onscroll = function(){
    if(window.scrollY>=section.offsetTop){
        console.log("jkl;cikl");
        span.forEach((span)=>{
            span.style.width = span.dataset.width;
        })
    }
}


window.addEventListener('scroll',check)

function check(){
    if(window.scrollY>=section1.offsetTop){
        console.log("jkl;cik2");
        document.getElementById('myh2').style.transform = "translateX(0px)";
        document.getElementById('myDIV').style.transform = "translateX(0px)";
        document.getElementById('myDIV1').style.transform = "translateX(0px)";
        document.getElementById('myDIV2').style.transform = "translateX(0px)";
        document.getElementById('myDIV3').style.transform = "translateX(0px)";
    }
}




