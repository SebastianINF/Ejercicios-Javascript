// devuelve el numero de fibonacci
const fibonacci = (num) => {
  if (num === 1) return 0
  num--;
  const fibo = (n) => {
    if (n <= 1) return n
    return fibo(n - 1) + fibo(n - 2)
  }
  return fibo(num)
}

// El factorial de un número
function factorial(n) {
  if (n < 2) return 1
  return n * factorial(n - 1)
}

// Hace la cuenta regresiva
function cuentaRegresiva(n) {
  if (n < 0) return
  cuentaRegresiva(n - 1)
}

// La suma de 1 hasta n
function suma(n) {
  if (n < 1) return n
  return n + suma(n - 1)
}

// Los digitos de 1 hasta n ejem: 5 --> 12345
function digitos(n) {
  if (n < 1) return ''
  return digitos(n - 1) + n
}

// Cuenta los digitos ejem : 123212 --> 6
function contarDigitos(n) {
  if (n < 10) return 1
  return contarDigitos(n / 10) + 1
}

// Eleva un número a otro ejem : base^exponente
function exponencial(base, exponente) {
  if (exponente === 0) return 1 // a^0 = 1
  if (exponente === 1) return base
  return base * exponencial(base, exponente - 1)
}

// Invierte un número
function invertir(n) {
  let aux = 0
  const invertiendo = (n1, respuesta) => {
    if (n1 < 1) return respuesta
    respuesta = respuesta * 10 + (n1 % 10)
    n1 = Math.floor(n1 / 10)
    return invertiendo(n1, respuesta)
  }
  return invertiendo(n, aux)
}

// crear un cuadrado
function crearlinea(n) {
  if (n < 1) return ''
  return crearlinea(n - 1) + '* '
}

function crearCuadrilatero(base, altura) {
  if (altura === 0) return ''
  return `${crearlinea(base)}\n${crearCuadrilatero(base, altura - 1)}`
}

// crear triangulo
function crearTrianguloRectangulo(altura) {
  if (altura === 0) return ''
  return `${crearTrianguloRectangulo(altura - 1)}\n${crearlinea(altura)}`
}

// suma los digitos de un número
function sumarDigitos(x) {
  let s;
  if (x < 10) {
    s = x;
  }
  else {
    s = sumarDigitos(Math.floor(x / 10)) + x % 10;
  }
  return s;
}

// suma los digitos impares de un número
function sumarDigitosImpares(x) {
  let s;
  if (x < 10) {
    if (x % 2 == 1)
      s = x;
    else
      s = 0;
  }
  else {
    s = sumarDigitosImpares(Math.floor(x / 10));
    if (x % 2 == 1)
      s = s + x % 10;
  }
  return s;
}

function sumarDigitosPares(x) {
  let s;
  if (x < 10) {
    if (x % 2 == 0)
      s = x;
    else
      s = 0;
  }
  else {
    s = sumarDigitosImpares(Math.floor(x / 10));
    if (x % 2 == 0)
      s = s + x % 10;
  }
  return s;
}

function restarDigitosImparPar(x) {
  let s;
  if (x < 10) {
    if (x % 2 == 1)
      s = x;
    else
      s = -x;
  }
  else {
    if (x % 2 == 1)
      s = x % 10;
    else
      s = -x % 10;
    s = restarDigitosImparPar(Math.floor(x / 10)) + s;
  }
  return s;
}

function restarDigitosParImpar(x) {
  let s;
  if (x < 10) {
    if (x % 2 == 0)
      s = x;
    else
      s = -x;
  }
  else {
    if (x % 2 == 0)
      s = x % 10;
    else
      s = -x % 10;
    s = restarDigitosParImpar(Math.floor(x / 10)) + s;
  }
  return s;
}

function agregarComaDigitos(x) {
  let s;
  if (x < 10) {
    s = x;
  }
  else {
    s = agregarComaDigitos(Math.floor(x / 10)) + ',' + x % 10;
  }
  return s;
}

function agregarComaDigitosEInvertir(x) {
  let s;
  if (x < 10) {
    s = x;
  }
  else {
    s = (x % 10) + ',' + agregarComaDigitosEInvertir(Math.floor(x / 10));
  }
  return s;
}

function retornarMenorDigito(x) {
  let m;
  if (x < 10) {
    m = x;
  }
  else {
    m = retornarMenorDigito(Math.floor(x / 10));
    if (x % 10 < m) {
      m = x % 10;
    }
  }
  return m;
}

function verificarOrdenadoAscendente(x) {
  let b;
  if (x < 10) {
    b = true;
  }
  else {
    b = verificarOrdenadoAscendente(Math.floor(x / 10)) && (x / 10 % 10 <= x % 10);
  }
  return b;
}

function verificarOrdenadoDescendente(x) {
  let b;
  if (x < 10) {
    b = true;
  }
  else {
    b = verificarOrdenadoDescendente(Math.floor(x / 10)) && (x / 10 % 10 >= x % 10);
  }
  return b;
}

function moverDigitoMayorAlFinal(ref) {
  if (ref.x < 10) {
    // nada
  }
  else {
    let d = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    moverDigitoMayorAlFinal(ref);
    if (ref.x % 10 <= d) {
      ref.x = ref.x * 10 + d;
    }
    else {
      let z = ref.x % 10;
      ref.x = Math.floor(ref.x / 10);
      ref.x = (ref.x * 10 + d) * 10 + z;
    }
  }
}

function moverDigitoMenorAlFinal(ref) {
  if (ref.x < 10) {
    // nada
  }
  else {
    let d = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    moverDigitoMenorAlFinal(ref);
    if (ref.x % 10 >= d) {
      ref.x = ref.x * 10 + d;
    }
    else {
      let z = ref.x % 10;
      ref.x = Math.floor(ref.x / 10);
      ref.x = (ref.x * 10 + d) * 10 + z;
    }
  }
}

function ordenamientoAscendente(ref) {
  if (ref.x < 10) {
    // nada
  }
  else {
    moverDigitoMayorAlFinal(ref);
    let ultimoDigito = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    ordenamientoAscendente(ref);
    ref.x = ref.x * 10 + ultimoDigito;
  }
}

function ordenamientoDescendente(ref) {
  if (ref.x < 10) {
    // nada
  }
  else {
    moverDigitoMenorAlFinal(ref);
    let ultimoDigito = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    ordenamientoDescendente(ref);
    ref.x = ref.x * 10 + ultimoDigito;
  }
}

function eliminarDigitosImpares(ref) {
  if (ref.x < 10) { // caso base
    if (ref.x % 2 == 0) {
      // nada 
    } if (ref.x % 2 == 1) {
      ref.x = 0;
    }
  }
  else { // caso general
    let ultimoDigito = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    eliminarDigitosImpares(ref);
    if (ultimoDigito % 2 == 0) {
      ref.x = ref.x * 10 + ultimoDigito;
    }
    if (ultimoDigito % 2 == 1) {
      // nada
    }
  }
}

function eliminarDigitosPares(ref) {
  if (ref.x < 10) { // caso base
    if (ref.x % 2 == 1) {
      // nada 
    } if (ref.x % 2 == 0) {
      ref.x = 0;
    }
  }
  else { // caso general
    let ultimoDigito = ref.x % 10;
    ref.x = Math.floor(ref.x / 10);
    eliminarDigitosPares(ref);
    if (ultimoDigito % 2 == 1) {
      ref.x = ref.x * 10 + ultimoDigito;
    }
    if (ultimoDigito % 2 == 0) {
      // nada
    }
  }
}

function encontrarDigitoMayorYMenor(x, ref) {
  if (x < 10) { // caso base
    ref.M = x;
    ref.m = x;
  }
  else { // caso general
    let ultimoDigito = x % 10;
    x = Math.floor(x / 10);
    encontrarDigitoMayorYMenor(x, ref);
    if (ref.M < ultimoDigito) {
      ref.M = ultimoDigito;
    }
    if (ref.m > ultimoDigito) {
      ref.m = ultimoDigito;
    }
  }
}

function repetirNumero(numero, veces) {
  let cad;
  if (veces == 0)
    cad = "";
  else
    cad = repetirNumero(numero, veces - 1) + numero;
  return cad;
}

function repetirDigitos(n) {
  let cad;
  if (n < 10)
    cad = repetirNumero(n, n);
  else {
    let dig = n % 10;
    n = Math.floor(n / 10);
    cad = repetirDigitos(n) + repetirNumero(dig, dig);
  }
  return cad;
}

function contarDigitosImparesAntesDeUnoPar(x) {
  let c;
  if (x < 10) {
    c = 0;
  }
  else {
    let ultimoDigito = x % 10;
    let penultimoDigito = Math.floor(x / 10) % 10;
    if (penultimoDigito % 2 == 0 && ultimoDigito % 2 == 1) {
      c = contarDigitosImparesAntesDeUnoPar(Math.floor(x / 10)) + 1;
    }
    else {
      c = contarDigitosImparesAntesDeUnoPar(Math.floor(x / 10));
    }
  }
  return c;
}
