"use strict";

var usuario = {
  nome: 'Fagner',
  idade: 25,
  end: {
    cidade: 'Natal',
    estado: 'RN'
  }
};
var _usuario$end = usuario.end,
    cidade = _usuario$end.cidade,
    estado = _usuario$end.estado;
var nome = usuario.nome,
    idade = usuario.idade;
console.log(cidade);
console.log(estado); //console.log(nome)

if (cidade === 'Natal') {
  alert('usuario Natalense');
}

function mostra(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostra(usuario);
