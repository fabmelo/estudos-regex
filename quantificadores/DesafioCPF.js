const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
- 132.984.958-24
- 932.070.181-49`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(texto.match(regex))