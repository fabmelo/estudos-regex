// g - global
// i - ignora case

const texto = 'Carlos assinou o abaixo-assinado'
console.log(texto.match(/C|ab/)) // encontra C porém para antes de encontrar ab
console.log(texto.match(/c|ab/i)) // encontra também o c, mas idependente de c ou C, mas também para antes de achar ab
console.log(texto.match(/ab|c/gi)) // encontra ab e c ignorando o case de forma global