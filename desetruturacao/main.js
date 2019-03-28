
const usuario = {

    nome :'Fagner',
    idade: 25,
    end:{
        cidade :'Natal',
        estado : 'RN',

    },

};

const {end:{cidade,estado}} = usuario;
const {nome , idade} = usuario;

console.log(cidade);
console.log(estado);
//console.log(nome)
if(cidade==='Natal'){


    alert('usuario Natalense');
}

function mostra({nome,idade}){


    console.log(nome,idade);
}
mostra(usuario);