const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- fabmelo@gmail.com
- mgalgania@gmail.com
- sophyarv@gmail.com
- fab_melo60@hotmail.com`

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// no futuro...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))