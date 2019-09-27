// . ? * + - ˆ $ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // uso o \ escape para dizer q vou usar o . literal ao invéz do metacaracter
console.log(texto.split(regexPonto))

// outro exemplo usando o pipe para dizer q o caractere após será o literal
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))