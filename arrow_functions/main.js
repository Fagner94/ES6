

const arr = [1, 3, 4, 5, 8,9,10,12];

//mapemaento do vetor
const newArr = arr.map((item ,index)=>{
    return item + index;


});
console.log(newArr);


//retorna apenas um item, transforma o vetor em único item

const sum = arr.reduce((total,next) =>{

    return total + next;

});

 var num1 = prompt("digite o primeiro número");

  var num2 = prompt("digite o segundo número");

 const soma =(a,b) =>a +b;
console.log(soma(4,3));

const sub = (a,b) => a-b;

alert(sub(num1,num2));



