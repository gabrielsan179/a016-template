const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻
const arrElenco = []
for (i in filmes){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  for (j of filmes[i].elenco){
  arrElenco.push(j)
  }
  console.log(`Tem elenco: ${arrElenco}`)
  arrElenco.splice(0,arrElenco.length)
}
//exercicios
const resultadoMega = [
  [6, 10, 23, 89, 12, 34],
  [4, 12, 18, 32, 65],
  [8, 10, 54, 58, 12, 23],
  [9, 13, 16, 10, 40, 50],
];
for (let i = 0; i < resultadoMega.length; i++){
  if(resultadoMega[i].length !== 6){
    console.log(`numero de bolas sorteadas esta errado. sorteio ${i+1}: ${resultadoMega[i].length} bolas, deveria ser 6`)
  }else{
  console.log(`sorteio ${i+1}: ${resultadoMega[i]}`)
  }
}
 const num = []
for (let i = 0; i < resultadoMega.length; i++){
  for (let j = 0; j < resultadoMega[i].length; j++){
    num.push(resultadoMega[i][j])
  }
  console.log(`sorteio ${i+1}: ${num}`)
  num.splice(0,num.length)
}
for (let i in resultadoMega) {
  for (let j of resultadoMega[i]) {
    num.push(j);
  }
  console.log(`sorteio ${Number(i)+1}: ${num}`);
  num.splice(0, num.length);
}
