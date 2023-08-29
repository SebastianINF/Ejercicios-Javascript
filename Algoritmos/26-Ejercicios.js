// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// const contador = (frase = "") => console.log(`Tu cadena `)

const contarCaracteres = (cadena = '') =>
  !cadena
    ? console.warn('No ingresaste ninguna cadena')
    : console.info(`Tu cadena: "${cadena}" tiene ${cadena.length} caracteres`)

// contarCaracteres();
// contarCaracteres("Hola mundo");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const miFuncion2 = (cadena = '', numCaracteres = undefined) =>
  !cadena
    ? console.log('La cadena esta vacia')
    : numCaracteres === undefined
    ? console.log(`"${cadena.slice(0, numCaracteres)}"`)
    : console.log(`"${cadena.slice(0, numCaracteres)}, ${numCaracteres}"`)

// miFuncion2();
// miFuncion2("");
// miFuncion2("Hola");
// miFuncion2("",4);
// miFuncion2("Hola mundo",undefined);
// miFuncion2("Hola mundo", 3);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const miFuncion3 = (frase = '', separador = undefined) =>
  !frase
    ? console.log('No ingresate ninguna frase')
    : separador === undefined
    ? console.log('No ingresate ningun separador')
    : console.log(frase.split(separador))

// miFuncion3();
// miFuncion3("");
// miFuncion3("","");
// miFuncion3("Hola mundo");
// miFuncion3("Hola mundo"," ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const miFuncion4 = (texto = '', veces = undefined) => {
  if (!texto) return console.log('No ingresate ninguna cadena')
  if (veces === 0) return console.log('El (number de veces no puede ser 0')
  if (Math.sign(veces) === -1)
    return console.log('El (number de veces no puede ser negativo')
  for (i = 1; i <= veces; i++) {
    console.log(`${texto}, ${i}`)
  }
}
// miFuncion4();
// miFuncion4("");
// miFuncion4("",1);
// miFuncion4("Hola mundo",2);
// miFuncion4("Hola mundo",0);
// miFuncion4("Hola mundo",-1);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (oracion = '') =>
  !oracion
    ? console.log('Esto no es una cadena')
    : console.log(oracion.split('').reverse().join(''))

// invertirCadena()
// invertirCadena("")
// invertirCadena("Hola mundo")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contadorPalabras = (String = '', palabra = '') => {
  if (!String) return console.warn('No ingresate una cadena')
  if (!palabra) return console.warn('No ingresate la palabra a buscar')

  let contador = 0
  for (let i = 0; i !== -1; i++) {
    i = String.indexOf(palabra, i)
    if (i == -1) {
      break
    }
    contador++
  }
  return console.log(`La cantidad  de palabras encontradas es ${contador}`)
}
// contadorPalabras();
// contadorPalabras("mundo pito mundo mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (frase = '') =>
  !frase
    ? console.warn('No ingresaste una frase')
    : console.log(
        frase.toUpperCase() ===
          frase.split('').reverse().join('').toLocaleUpperCase()
      )

// palindromo()
// palindromo("")
// palindromo("oso")
// palindromo("Oso")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".

const elimString = (String = '', palabra = '') =>
  !String
    ? console.log('No ingresaste una secuencia a buscar')
    : !palabra
    ? console.log('No ingresaste una patron a eliminar')
    : console.log(String.replace(new RegExp(palabra, 'ig'), ''))

// elimString()
// elimString("hola", "")
// elimString("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

// 9) Programa una función que obtenga un (number aleatorio entre 501 y 600.
const generateRandomInt = () =>
  console.log(Math.floor(Math.random().toPrecision(3) * (600 - 501) + 501))
// generateRandomInt()

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = num1 => {
  if (!num1 && num1 !== false && num1 !== 0)
    return console.log('No ingresaste ningun numero')
  if (typeof num1 !== 'number')
    return console.log('Solo se pueden ingresarnumeros')

  let num2 = num1.toString().split('').reverse().join('')
  return num1.toString() === num2.toString()
    ? console.log(`Tu (number "${num1}" es capicua, ${true}`)
    : console.log(`Tu (number "${num1}" no es capicua ${false}`)
}
// capicua()
// capicua("")
// capicua("Hola")
// capicua(true)
// capicua(false)
// capicua({})
// capicua(0)
// capicua(202)
// capicua(12.21)

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = num_1 => {
  if (!num_1 && num_1 !== false && num_1 !== 0)
    return console.log('No ingresaste ningun numero')
  if (typeof num_1 !== 'number')
    return console.log('Solo se pueden ingresar numeros')
  if (Math.sign(num_1) === -1)
    return console.log('No se puede ingresar un numero negativo')
  if (num_1 === 0) return console.log(`"1"`)
  let total = 1
  for (i = 1; i <= num_1; i++) {
    total = total * i
  }

  return console.log(`"${total}"`)
}
// factorial();
// factorial("");
// factorial(0);
// factorial(1);
// factorial(4);
// factorial(true);
// factorial([]);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const Primo = number => {
  if (!number && number !== 0) return console.log('No ingresaste ningun numero')
  if (typeof number !== 'number')
    return console.log('Solo se puede ingresar numeros')
  if (number <= 0)
    return console.log(
      `El numero tiene que ser un Natural excluyendo el "0" y el "1"`
    )
  if (number === 1)
    return console.log('El número 1 no es ni primo ni compuesto.')

  let divisibilidad = true
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      divisibilidad = false
      break
    }
  }
  return divisibilidad
    ? console.log('El numero es primo')
    : console.log('El numero no es primo')
}

// Primo("");
// Primo(0);
// Primo(1);
// Primo(13);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = numero => {
  if (!numero && numero != 0) return console.log('No ingreste ningun numero')
  if (typeof numero !== 'number')
    return console.log('Solo se pueden ingresar numeros')
  if (numero === 0) return console.log(`Si, el numero: "0" es par`)
  if (Math.sign(numero) === -1) {
    numero % 2 === 0
      ? console.log(`El numero "${numero}" es par negativo`)
      : console.log(`El numero "${numero}" es impar negativo`)
  } else {
    numero % 2 === 0
      ? console.log(`El numero "${numero}" es par positivo`)
      : console.log(`El numero "${numero}" es impar positivo`)
  }
}

// parImpar(0);
// parImpar(1);
// parImpar(2);
// parImpar(-1);
// parImpar(-2);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const tempertura = (numero = undefined, unidad = '') => {
  if ((!numero && numero !== 0) || !unidad)
    return console.log('Se te olvido ingresar uno o varios valores')
  if (typeof numero !== 'number' || typeof unidad !== 'string')
    return console.log('Solo se acepta un numero y una cadena')
  if (unidad !== 'C' && unidad !== 'F')
    return console.log(`En unidad solo se puede meter "C" o "F"`)

  if (unidad === 'C') {
    let fahrenheit = (numero * 9) / 5 + 32
    console.log(`${numero}°C = ${fahrenheit.toFixed(0)}°F`)
  }
  if (unidad === 'F') {
    let celsius = ((numero - 32) * 5) / 9
    console.log(`${numero}°F = ${celsius.toFixed(0)}°C`)
  }
}
// tempertura();
// tempertura("");
// tempertura(0,"C");
// tempertura(32,"F");

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// let decimal = 725;
// let arraydecimal = decimal.toString().split("").reverse().join("");
// console.log(arraydecimal)

const decimalBinario = (numero, base) => {
  if (!numero === undefined)
    return console.log('No ingresaste ningun numero a convertir')
  if (typeof numero !== 'number')
    return console.log(`El valor "${numero}" NO es un numero`)
  if (base === undefined)
    return console.log('No ingresaste una base a convertir')
  if (typeof base !== 'number')
    return console.log(`El valo "${base}" NO es un numero`)

  if (base === 2) {
    return console.log(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    )
  } else if (base === 10) {
    return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`)
  } else return console.log(`El tipo de base solo puede ser "2" o "10"`)
}

// decimalBinario(725,10);
// decimalBinario(4,10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const precioDescuento = (numero1, porcentaje) => {
  if (numero1 === undefined || porcentaje === undefined)
    return console.warn('Se te olvido ingresar uno o dos parametros')
  if (typeof numero1 !== 'number' || typeof porcentaje !== 'number')
    return alert(`Solo se pueden ingrear parametro tipo "number"`)
  if (Math.sign(numero1) === -1 || Math.sign(porcentaje === -1))
    return console.warn(`No se puede ingresar parametros negativos`)

  let montoDescuento = ((100 - porcentaje) * numero1) / 100
  console.log(
    `El monto de decuento es: "${montoDescuento.toFixed(
      2
    )}", depues de bajarle un ${porcentaje}%`
  )
}
// precioDescuento();
// precioDescuento("");
// precioDescuento(1,60);
// precioDescuento(1000,20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const annio = fecha => {
  let actual = new Date()
  if (fecha.getFullYear() > actual.getFullYear())
    return console.log(`Todavia seguimos en el año "${actual.getFullYear()}"`)
  console.log(
    `Han pasado ${
      actual.getFullYear() - fecha.getFullYear()
    } años hasta el dia de hoy`
  )
}
// "Año, Mes (0.1..), Dia (fecha)"
// annio(new Date(1984, 4, 23,));
// annio(new Date(2024,5,7));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocalesConsonantes = frase => {
  if (!frase) return console.log(`NO ingresaste ninguna cadena de texto`)
  if (typeof frase !== 'string')
    return console.log(`Solo se puede ingresar datos de tipo texto`)

  let vocales = 0,
    consonantes = 0
  let fraseMod = frase.toLocaleLowerCase()

  for (let letra of fraseMod) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++

    if (/[bcdfghjklmnopqrstvwxyz]/.test(letra)) consonantes++
  }

  return console.log({
    frase,
    vocales,
    consonantes
  })
}

// vocalesConsonantes("Hola");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const nombre = cadena => {
  if (!cadena) return console.log(`NO ingresaste una cadena de texto`)
  if (typeof cadena !== 'string')
    return console.log(`Solo se puede ingresar datos tipo texto`)

  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(cadena)

  return expReg
    ? console.log(`Tu nombre: "${cadena}" es VALIDO`)
    : console.log(`Tu nombre: "${cadena}" es NO VALIDO`)
}
// nombre();
// nombre("");
// nombre("Hola");

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. La expresión regular que se usa para el email en este ejercicio es: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

const validarEmail = email => {
  if (!email) return console.log(`NO ingresaste una cadena de texto`)
  if (typeof email !== 'string')
    return console.log(`Solo se puede ingresar datos tipo texto`)

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    )

  return expReg
    ? console.log(`El correo: "${email}" es valido`)
    : console.log(`El correo: "${email}" no es valido`)
}
// validarEmail();
// validarEmail("Hola");
// validarEmail("crsebastian_el_capo_2016@gmail.com");

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayElevar = arr => {
  if (!arr) return console.log(`NO ingresaste una cadena de texto`)
  if (!(arr instanceof Array))
    return console.log(`Solo se pueden ingresar arrays`)
  if (arr.length === 0) return console.log(`El array esta vacio`)

  for (let numero of arr) {
    if (typeof numero !== 'number')
      return console.log(`Solo se permiten ingresar numeros`)
  }

  const newArray = arr.map(el => el * el)
  return console.log(newArray)
}
// arrayElevar([1,2,3,4,5,6]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxMin = arr => {
  if (!arr) return console.log(`No ingresaste ningun dato`)
  if (!(arr instanceof Array))
    return console.log('Solo se puede ingresar datos tipo Array')
  if (arr.length === 0) return console.log('Tu array esta vacio')

  for (let numero of arr) {
    if (typeof numero !== 'number')
      return console.log(`Solo se pueden ingresar numeros`)
  }

  return console.log({
    arr,
    max: Math.max(...arr),
    min: Math.min(...arr)
  })
}
// maxMin([1,3,4,5,]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = arr => {
  if (!arr) return console.log(`No ingresaste ningun dato`)
  if (!(arr instanceof Array))
    return console.log('Solo se puede ingresar datos tipo Array')
  if (arr.length === 0) return console.log('Tu array esta vacio')

  for (let numero of arr) {
    if (typeof numero !== 'number')
      return console.log(`Solo se pueden ingresar numeros`)
  }

  return console.log({
    arr,
    pares: arr.filter(el => el % 2 === 0),
    impares: arr.filter(el => el % 2 !== 0)
  })
}

// map(), filter(), reduce(), sort()
// paresImpares([4,3,4,5,6]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ascendenteDescendente = arr => {
  if (!arr) return console.log(`No ingresaste ningun dato`)
  if (!(arr instanceof Array))
    return console.log('Solo se puede ingresar datos tipo Array')
  if (arr.length === 0) return console.log('Tu array esta vacio')

  for (let numero of arr) {
    if (typeof numero !== 'number')
      return console.log(`Solo se pueden ingresar numeros`)
  }

  return console.log({
    arr,
    ascendete: arr.map(el => el).sort(),
    descendente: arr
      .map(el => el)
      .sort()
      .reverse()
  })
}

// ascendenteDescendente([3,8,5,3,])

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarRepetido = arr => {
  if (!arr) return console.log(`No ingresaste ningun dato`)
  if (!(arr instanceof Array))
    return console.log('Solo se puede ingresar datos tipo Array')
  if (arr.length === 0) return console.log('Tu array esta vacio')

  // return console.log({
  //     arr,
  //     sinDulicado: arr.filter((elemento,indice,arreglo)=> arreglo.indexOf(elemento) === indice)});

  return console.log({
    arr,
    sinDuplicado: [...new Set(arr)]
  })
}
// eliminarRepetido(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const arrayPromedio = arr => {
  if (!arr) return console.log(`No ingresaste ningun dato`)
  if (!(arr instanceof Array))
    return console.log('Solo se puede ingresar datos tipo Array')
  if (arr.length === 0) return console.log('Tu array esta vacio')

  for (let numero of arr) {
    if (typeof numero !== 'number')
      return console.log(`Solo se pueden ingresar numeros`)
  }

  return console.log({
    arr,
    promedio: arr.reduce((a, b) => a + b) / arr.length
  })
}

// arrayPromedio([9,8,7,6,5,4,3,2,1,0]);