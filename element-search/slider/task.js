"use strict";

const slider = document.querySelectorAll(".slider__item");
const previousSlide = document.getElementsByClassName("slider__arrow_prev")[0];
const nextSlide = document.getElementsByClassName("slider__arrow_next")[0];

let index = 0;

function activeSlide() {
   slider[index].className = "slider__item slider__item_active";
}

previousSlide.onclick = function () {
   slider[index].className = "slider__item";
   index--;
   if (index < 0) {
      index = slider.length - 1;
   }
   activeSlide();
}

nextSlide.onclick = function () {
   slider[index].className = "slider__item";
   index++;
   if (index >= slider.length) {
      index = 0;
   }
   activeSlide();
}