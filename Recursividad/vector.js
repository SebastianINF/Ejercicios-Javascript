function verificarLetra(char) {
  const letras =
    'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ' // todas las letras
  return letras.includes(char)
}
function primerPalabra(x) {
  let p
  let c = x.length
  if (c === 0) {
    p = ''
  } else if (c === 1) {
    if (verificarLetra(x[1])) {
      p = x
    } else {
      p = ''
    }
  } else {
    let a = x[0] // a = h
    x = x.substring(1, x.length)
    p = primerPalabra(x) // n-1 => hola mundo -> ola
    if (verificarLetra(a) && verificarLetra(x[0])) {
      p = a + p
    } else if (verificarLetra(a) && !verificarLetra(x[0])) {
      p = a
    } else if (!verificarLetra(a) && verificarLetra(x[0])) {
      // nada
    } else if (!verificarLetra(a) && !verificarLetra(x[0])) {
      // nada
    }
  }
  return p
}

function eliminarPrimerPalabra(ref) {
  let c = ref.x.length
  if (c === 0) {
    // nada
  } else if (c == 1) {
    if (verificarLetra(ref.x[1])) {
      ref.x = ''
    } else {
      // nada
    }
  } else {
    let a = ref.x[0]
    ref.x = ref.x.substring(1, ref.x.length)
    if (verificarLetra(a) && verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
    } else if (verificarLetra(a) && !verificarLetra(ref.x[0])) {
      // nada
    } else if (!verificarLetra(a) && verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
      ref.x = a + ref.x
    } else if (!verificarLetra(a) && !verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
      ref.x = a + ref.x
    }
  }
}
// Cargar Random
function cargar(v, n) {
  if (n === 0) {
    // nada
  } else {
    cargar(v, n - 1)
    v[n - 1] = Math.floor(Math.random(10) * 10) + 1
  }
}

function cargarPalabras(ref, v, a) {
  let p = primerPalabra(ref.x)
  if (p === '') {
    // nada
  } else {
    eliminarPrimerPalabra(ref)
    cargarPalabras(ref, v, a + 1)
    v[a] = p
  }
}

function sumarTodosLosElementos(v, a, b) {
  let s
  let n = b - a + 1
  if (n === 0) {
    s = 0
  } else if (n === 1) {
    s = v[a]
  } else {
    s = sumarTodosLosElementos(v, a + 2, b)
    s = s + v[a] + v[a + 1]
  }
  return s
}

function invertir(v, a, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    let b = a + n - 1
    invertir(v, a + 1, n - 2)
    const temp = v[a]
    v[a] = v[b]
    v[b] = temp
  }
}

function moverMayorAlFinal(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMayorAlFinal(v, n - 1)
    if (v[n - 2] > v[n - 1]) {
      const temp = v[n - 2]
      v[n - 2] = v[n - 1]
      v[n - 1] = temp
    }
  }
}

function moverMenorAlFinal(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMenorAlFinal(v, n - 1)
    if (v[n - 2] < v[n - 1]) {
      const temp = v[n - 2]
      v[n - 2] = v[n - 1]
      v[n - 1] = temp
    }
  }
}

function ordenamamientoAscendente(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMayorAlFinal(v, n)
    ordenamamientoAscendente(v, n - 1)
  }
}

function ordenamientoDescendente(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMenorAlFinal(v, n)
    ordenamientoDescendente(v, n - 1)
  }
}

function busquedaBinaria(x, v, a, b) {
  let bol
  let n = b - a + 1
  if (n === 0) {
    bol = false
  } else if (n === 1) {
    bol = x === v[a]
  } else {
    let c = Math.floor((a + b) / 2)
    if (x == v[c]) {
      bol = true
    } else if (x < v[c]) {
      bol = busquedaBinaria(x, v, a, c - 1)
    } else {
      bol = busquedaBinaria(x, v, c + 1, b)
    }
  }
  return bol
}

function verificarOrdenadoAscendente(v, a, n) {
  let bol
  if (n === 0) {
    bol = true
  } else if (n === 1) {
    bol = true
  } else {
    bol = verificarOrdenadoAscendente(v, a + 1, n - 1)
    if (v[a] > v[a + 1]) {
      bol = false
    }
  }
  return bol
}

function verificarOrdenadoDescendente(v, a, n) {
  let bol
  if (n === 0) {
    bol = true
  } else if (n === 1) {
    bol = true
  } else {
    bol = verificarOrdenadoDescendente(v, a + 1, n - 1)
    if (v[a] < v[a + 1]) {
      bol = false
    }
  }
  return bol
}

const v1 = []
cargar(v1, 4)
console.log(v1)
