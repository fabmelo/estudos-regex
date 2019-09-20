const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) // retorna boleano
console.log(regexNove.exec(texto)) 

const regexLetras = /[a-f]/g
console.log('Métodos da String...')
console.log(texto.match(regexLetras)) // retorna um array
console.log(texto.search(regexLetras)) // retornar o indice deste array on de foi encontrado
console.log(texto.replace(regexLetras, 'Achei')) // retorna substituindo os itens encontrados pelo que informou
console.log(texto.split(regexLetras))