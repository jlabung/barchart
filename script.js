"use strict";
window.addEventListener("DOMContentLoaded", arrayExceeds);
let myArray = [];
let counter = 0;
let timeOut = 200;

function arrayExceeds() {
  if (counter <= myArray.length) {
    addSomething();
  } else {
    addSomething();
    myArray.pop();
  }
}
function addSomething() {
  myArray.unshift(Math.floor(Math.random() * 32));
  counter++;
  console.log(myArray);
  setTimeout(arrayExceeds, timeOut);
  setHeight();
}

function setHeight() {
  //   document.querySelectorAll(".bar").forEach((bar, i) => {
  // bar.style.setProperty("--height", myArray[i]);

  //});

  for (let i = 0; i < myArray.length; i++) {
    let bar;
    bar = document.querySelector(`#bar > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", myArray[i]);
  }
}
