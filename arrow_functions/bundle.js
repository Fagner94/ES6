"use strict";

var arr = [1, 3, 4, 5, 8, 9, 10, 12]; //mapemaento do vetor

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //retorna apenas um item, transforma o vetor em único item

var sum = arr.reduce(function (total, next) {
  return total + next;
});
var num1 = prompt("digite o primeiro número");
var num2 = prompt("digite o segundo número");

var soma = function soma(a, b) {
  return a + b;
};

console.log(soma(4, 3));

var sub = function sub(a, b) {
  return a - b;
};

alert(sub(num1, num2));
