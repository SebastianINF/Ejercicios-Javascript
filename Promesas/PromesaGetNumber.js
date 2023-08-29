/*
En este ejercicio, se te pide que implementes una función llamada getRandomNumber que simule una llamada asincrónica para obtener un número aleatorio entre un rangodado. La función debe recibir dos parámetros: min y max, que indican el valor mínimo y máximo del rango, respectivamente.

Dentro de la función getRandomNumber, debes crear una promesa que se resuelva con el número aleatorio obtenido dentro del rango especificado. Si los parámetros min y max no son números válidos o si min es mayor o igual a max, la promesa debe rechazarse con un mensaje de error.

Tu tarea es implementar la función getRandomNumber utilizando promesas y luego utilizarla para realizar una llamada asincrónica y mostrar el resultado por consola.
Recuerda no compartir tu código final aquí, ¡buena suerte con el ejercicio! Si tienes alguna pregunta o necesitas alguna aclaración, no dudes en pedirla.
*/

function funcionPromesaProgramaPrincipalGetRandomNumber(numero1, numero2) {
  function getRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof min !== 'number' || typeof max !== 'number') {
          reject(new Error('Los paramatros solo pueden ser números'))
        } else if (min >= max) {
          reject(new Error(`${min} no debe ser >= a ${max}`))
        }
        const range = max - min + 1
        const randomDecimal = Math.random()
        const randomNumberInRange = Math.floor(randomDecimal * range) + min
        resolve(randomNumberInRange)
      }, 1000)
    })
  }

  getRandomNumber(numero1, numero2)
    .then(numeroRandom => console.log(`Entre el ${numero1} y el ${numero2} esta: ${numeroRandom}`))
    .catch(error => console.log(error.message))
}

funcionPromesaProgramaPrincipalGetRandomNumber(3,9)
funcionPromesaProgramaPrincipalGetRandomNumber('Hola',3)
funcionPromesaProgramaPrincipalGetRandomNumber(7,4)
funcionPromesaProgramaPrincipalGetRandomNumber(3,3)