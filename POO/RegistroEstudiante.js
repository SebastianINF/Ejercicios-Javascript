/*
1er Ejercicio: 
Sistema de registro de estudiantes
Diseña una clase llamada "Estudiante" que tenga las siguientes propiedades y métodos:
Propiedades:
  Nombre: el nombre del estudiante.
  Edad: la edad del estudiante.
  Carrera: la carrera en la que está inscrito el estudiante.
  Métodos:
ObtenerInformacion(): un método que devuelve un string con la información del estudiante en el siguiente formato: "Nombre: [nombre], Edad: [edad], Carrera: [carrera]."
CambiarCarrera(nuevaCarrera): un método que recibe como parámetro el nombre de una nueva carrera y actualiza la propiedad "Carrera" con el valor proporcionado.

Crea una instancia de la clase "Estudiante" con el nombre "Juan", edad 20 y carrera "Ingeniería de Software". Luego, muestra por consola la información del estudiante utilizando el método "ObtenerInformacion()". A continuación, cambia la carrera del estudiante a "Ingeniería Industrial" utilizando el método "CambiarCarrera()" y muestra nuevamente la información actualizada del estudiante.
*/

function Estudiante(nombre, edad, carrera) {
  this.nombre = nombre
  this.edad = edad
  this.carrera = carrera
  this.ObtenerInformacion = () =>
    `Nombre: ${this.nombre}\nEdad: ${this.edad}\nCarrera: ${this.carrera}`
  this.CambiarCarrera = nuevo => {
    this.carrera = nuevo
  }
}

let Juan = new Estudiante('Juan', 25, 'Ingenieria software')

Juan.CambiarCarrera('Ingenieria Informatica')

console.log(Juan)
