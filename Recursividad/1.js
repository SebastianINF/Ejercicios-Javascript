// devuelve el numero de fibonacci
function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// El factorial de un número
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1)
}

// Hace la cuenta regresiva
function cuentaRegresiva(n) {
  if (n < 0) return;
  console.log(n)
  cuentaRegresiva(n - 1)
}

// La suma de 1 hasta n
function suma(n) {
  if (n < 1) return n
  return n + suma(n - 1)
}

// Los digitos de 1 hasta n ejem: 5 --> 12345
function ditos(n) {
  if (n < 1) return ''
  return digitos(n - 1) + n;
}

// Cuenta los digitos ejem : 123212 --> 6
function contarDigitos(n) {
  if (n < 10) return 1;
  return contarDigitos(n / 10) + 1;
}

// Eleva un número a otro ejem : base^exponente
function exponencial(base, exponente) {
  if (exponente === 0) return 1 // a^0 = 1
  if (exponente === 1) return base
  return base * exponencial(base, exponente - 1)
}

console.log(exponencial(3, 4))

// Invierte un número
function invertir(n) {
  let aux = 0
  const invertiendo = (n1, respuesta) => {
    if (n1 === 0) return respuesta
    respuesta = (respuesta * 10) + n1 % 10
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