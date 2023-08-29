/*
5to Ejercicio:
Crea una clase llamada "Shape" (Figura) que tenga las siguientes propiedades y métodos:

Propiedades:

name (nombre): una cadena que representa el nombre de la figura.
numSides (número de lados): un número entero que representa la cantidad de lados de la figura.
sideLengths (longitudes de los lados): un array que contiene las longitudes de cada lado de la figura.
Métodos:

perimeter() (perímetro): devuelve el perímetro de la figura, que se calcula sumando todas las longitudes de los lados.
area() (área): este método debe ser implementado por cada subclase específica de figura y debe calcular y devolver el área de la figura.
Luego, crea al menos dos subclases de "Shape" llamadas "Triangle" (Triángulo) y "Rectangle" (Rectángulo) que extiendan la clase "Shape".

La subclase "Triangle" debe tener las siguientes propiedades y métodos adicionales:
Propiedades:

base (base): un número entero que representa la longitud de la base del triángulo.
height (altura): un número entero que representa la altura del triángulo.
Métodos:

area(): sobrescribe el método area() de la clase base para calcular y devolver el área del triángulo utilizando la fórmula (base * altura) / 2.
La subclase "Rectangle" debe tener las siguientes propiedades y métodos adicionales:
Propiedades:

width (ancho): un número entero que representa el ancho del rectángulo.
height (altura): un número entero que representa la altura del rectángulo.
Métodos:

area(): sobrescribe el método area() de la clase base para calcular y devolver el área del rectángulo utilizando la fórmula base * altura.
Tu tarea es implementar las clases "Shape", "Triangle" y "Rectangle" con sus propiedades y métodos correspondientes. Luego, crea instancias de estas clases y prueba los métodos para obtener el perímetro y el área de las figuras.

Recuerda, no proporcionaré la solución hasta que me la pidas. ¡Buena suerte!
*/

class Shape {
  constructor(name = '', numSides = undefined, sideLengths) {
    this.name = name //String
    this.numSides = numSides //Numero
    this.sideLengths = sideLengths //Array
  }

  perimeter() {
    let suma = 0
    for (let numero of this.sideLengths) {
      suma += Number(numero)
    }
    return suma
  }
}

class Triangle extends Shape {
  constructor(base, altura) {
    super('triangulo', 3, [base, base, base])
    this.base = base
    this.altura = altura
  }
  area() {
    return (this.base * this.altura) / 2
  }
}

class Rectangle extends Shape {
  constructor(ancho, altura) {
    super('rectangulo', 4, [ancho, ancho, altura, altura])
    this.ancho = ancho
    this.altura = altura
  }
  area() {
    return this.ancho * this.altura
  }
}

const triangulo = new Triangle(4, 5)
// console.log(triangulo.area());
// console.log(triangulo.perimeter());

const rectangulo = new Rectangle(5, 6)
console.log(rectangulo)
console.log(rectangulo.area())
console.log(rectangulo.perimeter())
