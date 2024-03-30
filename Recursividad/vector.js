import { verificarLetra, primerPalabra, eliminarPrimerPalabra } from './string.js'
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

function sumarTodosLosNumeros(v, a, b) {
  let s
  let n = b - a + 1
  if (n === 0) {
    s = 0
  } else if (n === 1) {
    s = v[a]
  } else {
    s = sumarTodosLosNumeros(v, a + 2, b)
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

function moverNumeroMayorAlFinal(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverNumeroMayorAlFinal(v, n - 1)
    if (v[n - 2] > v[n - 1]) {
      const temp = v[n - 2]
      v[n - 2] = v[n - 1]
      v[n - 1] = temp
    }
  }
}

function moverNumeroMenorAlFinal(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverNumeroMenorAlFinal(v, n - 1)
    if (v[n - 2] < v[n - 1]) {
      const temp = v[n - 2]
      v[n - 2] = v[n - 1]
      v[n - 1] = temp
    }
  }
}

function ordenamamientoBurbujaAscendente(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMayorAlFinal(v, n)
    ordenamamientoBurbujaAscendente(v, n - 1)
  }
}

function ordenamientoBurbujaDescendente(v, n) {
  if (n === 0) {
    // nada
  } else if (n === 1) {
    // nada
  } else {
    moverMenorAlFinal(v, n)
    ordenamientoBurbujaDescendente(v, n - 1)
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

function contarNumerosPares(v, n) {
  let c
  if (n === 0) {
    c = 0
  } else {
    c = contarNumerosPares(v, n - 1)
    if (v[n - 1] % 2 == 0) {
      c++
    }
  }
  return c
}

//Escribir un proceso para eliminar el dato x de un vector.
//Ej. v[2,5,65,23,45,2,13,45,61], x=2 EliminarX(x, v, 9) => v[5,65,23,45,13,45,61]

function Recorrer(v, a, b) {
  let n = b - a + 1
  if (n > 0) {
    v[a] = v[a + 1]
    Recorrer(v, a + 1, b)
  }
}

// Hay un problema cuando se repite el número
// [ 8, 4, 6, 5, 4, 2 ]
// [ 8, 6, 5, 2, undefined ]
function EliminarX(v, a, b, x) {
  let n = b - a + 1
  if (n > 0) {
    let d = v[a]
    EliminarX(v, a + 1, b, x)
    if (d === x) {
      Recorrer(v, a, b)
      v.length--
    }
  }
}

// function verificarPalindromo(v, a, b, n) {
//   let p = true
//   if (a <= n / 2) {
//     p = verificarPalindromo(v, a + 1, b - 1, n)
//     if (p !== false) {
//       if (v[a] === v[b]) {
//         p = true
//       } else {
//         p = false
//       }
//     }
//   }
//   return p
// }

// void factorialvector(TStringGrid *v,byte n){
//  if (n>0){
// 	 int d=factorial(StrToInt(v->Cells[n-1][0]));
// 	 v->Cells[n-1][0]=d;
// 	 factorialvector(v,n-1);
//  }
// }
