//Rest



const usuario = {

    nome:'Fagner',
    idade:25,
    empresa :'Maker'
};
const {nome, ...resto} = usuario;

console.log(resto);

//******* */
const vetor = [1, 2, 3, 4, 5];

const [a,b, ...c]=vetor;

console.log(a);
console.log(b);
console.log(c);


//****** */

function s(...params){
    return params.reduce((total,next) => total + next); 
}
console.log(s(1,4,5,7,8,9));

////// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];
//juntar os 2;
const arr3=[...arr1,...arr2];

console.log(arr3);


///
const user = {
    nome:'Fagner',
    idade:25,
    empresa:'Maker',


};
const user2 ={...user,empresa:'Macrolins'};
console.log(user2);