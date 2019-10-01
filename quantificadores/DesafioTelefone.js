const texto = `Lista telefônica:
-(11) 98756-1212
-98765-4321
-98412-9141
-(64)98107-9606
-98171-4400`

const regex = /\(?\d{0,2}?\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))