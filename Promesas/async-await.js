/*
Ejercicio 6 : Async-await
Enunciado: Cálculo de promedio asincrónico

Escribe una función asincrónica llamada calcularPromedio que tome como parámetro un arreglo de números enteros. La función debe calcular el promedio de los elementos del arreglo y devolverlo como resultado.

El objetivo es que utilices async-await para manejar operaciones asíncronas, aunque en este caso en particular no habrá operaciones asíncronas reales. Simplemente pretendemos practicar el uso de async-await para simular una operación que podría ser asincrónica.

Instrucciones:

Define la función calcularPromedio como una función asincrónica.
En el cuerpo de la función, calcula el promedio de los números del arreglo recibido como parámetro.
Retorna el resultado del promedio.
En caso de que el arreglo esté vacío, retorna un mensaje indicando que no se puede calcular el promedio.
*/

function calcularPromedio(numeros = []) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const suma = numeros.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual
      }, 0)
      const promedio = suma / numeros.length
      resolve(promedio)
    }, 2000)
  })
}

async function getPromedio(arrayDeNumeros) {
  const espera = await calcularPromedio(arrayDeNumeros)
  console.log(espera)
}

getPromedio([6, 7, 7, 3, 3])

const array = [2, 3, 4, 5]
const cadenea = 'Hola mundo'
