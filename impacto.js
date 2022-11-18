const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft =document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft ="-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

function Previous(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection [sliderSection,length-1];
    slider.style.marginLeft ="0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft ="100%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Previous();
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = (progress * (end - start) + start).toFixed(1);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
const joulesgen = document.getElementById("value");
const porpisada = document.getElementById("numpisada");

wrapper = document.getElementById("wrapper");
console.log(wrapper)

document.addEventListener("scroll", ()=>{
    console.log(wrapper.scrollTop)
})
animateValue(joulesgen, 0, 123.4, 900);
animateValue(porpisada, 0, 12.3, 900);

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('.cuantaenergia');

let firstTime = true;

document.addEventListener('scroll', function () {
    
    if (isInViewport(box) && firstTime){
        animateValue(joulesgen, 0, 123.4, 900);
        animateValue(porpisada, 0, 12.3, 900);

        firstTime = false;
    }

}, {
    passive: true
});
