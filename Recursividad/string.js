function verificarVocal(c) {
  let vocales = 'aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ' // Todas las vocales
  return vocales.includes(c)
}

function contarEspacios(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let ultimaLetra = x[x.length - 1]
    x = x.substring(0, x.length - 1)
    c = contarEspacios(x)
    if (ultimaLetra === ' ') {
      c++
    }
  }
  return c
}

// cuenta las vocales aeiouáéíóúäëïöü
function contarVocalesV1(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let ultimaLetra = x[x.length - 1]
    x = x.substring(0, x.length - 1)
    c = contarVocalesV1(x)
    if (verificarVocal(ultimaLetra)) {
      c++
    }
  }
  return c
}

function contarVocalesV2(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let a = x[0]
    x = x.substring(1, x.length)
    c = contarVocalesV2(x)
    if (verificarVocal(a)) {
      c++
    }
  }
  return c
}

function contarVocalesV3(x) {
  let c
  if (x === '') {
    c = 0
  } else if (x.length === 1) {
    c = verificarVocal(x[0]) ? 1 : 0;
  } else {
    let a = x[0]
    let b = x[1]
    x = x.substring(2, x.length)
    c = contarVocalesV3(x)
    if (verificarVocal(a)) {
      c++
    }
    if (verificarVocal(b)) {
      c++
    }
  }
  return c
}

console.log(contarVocalesV1('aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ'))
console.log(contarVocalesV2('aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ'))
console.log(contarVocalesV3('aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ'))

