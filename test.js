"use strict";
const person1 = {
  firstName: "Jugal",
  age: 25,
  student: true
};
const person2 = person1;
person2.firstName = "other Jugal";
console.log(person1.firstName);
