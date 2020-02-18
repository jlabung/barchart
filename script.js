"use strict";
window.addEventListener("DOMContentLoaded", arrayExceeds);
let myArray = [];
let counter = 0;
let timeOut = 1000;

function arrayExceeds() {
  if (counter < 39) {
    addSomething();
  } else {
    addSomething();
    myArray.shift();
  }
}
function addSomething() {
  myArray.push(Math.floor(Math.random() * 32));
  counter++;
  console.log(myArray);
  setTimeout(arrayExceeds, timeOut);
  setHeight();
}

function setHeight() {
  for (let i = 0; i < myArray.length; i++) {
    let bar;
    bar = document.querySelector(`#bar > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", myArray[i]);
  }
}
