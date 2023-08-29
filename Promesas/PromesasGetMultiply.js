/* 
En este ejercicio, se te pide que implementes una función llamada delayedMultiply que tome dos parámetros numéricos, x e y, y devuelva una promesa. Esta promesa debe resolverse después de un retardo aleatorio de tiempo (entre 1 y 5 segundos) y devolver el resultado de la multiplicación de x e y.

Tu tarea es implementar la función delayedMultiply utilizando promesas y la función setTimeout para simular el retardo aleatorio. Luego, deberás utilizar esta función para realizar una llamada asincrónica y mostrar el resultado por consola.

Recuerda, la clave está en usar setTimeout para el retardo y resolver la promesa con el resultado de la multiplicación una vez que haya transcurrido el tiempo especificado.

¡Espero que este ejercicio te resulte interesante y te ayude a practicar con promesas en JavaScript! Si tienes alguna pregunta o necesitas alguna aclaración, no dudes en pedirla. ¡Buena programación!
*/

const delayedMultiply = (x,y)=> 
  new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(x * y)
    }, Math.floor((Math.random() * 5) + 1) * 1000)
  })

delayedMultiply(4,5)
  .then((yes)=> {
    console.log(yes)
  })
