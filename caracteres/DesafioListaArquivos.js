const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,padcast.mp3,blues.mp3'
console.log(texto.match(/\.mp3/g))

// no futuro...
console.log(texto.match(/\w+\.mp3/g))