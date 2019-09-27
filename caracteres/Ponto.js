// ponto representa um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'
console.log(texto.match(/1...3/g))

const nota = '8.3,7.1,8.8,10.0'
console.log(nota.match(/8../g))
console.log(nota.match(/.\../g))