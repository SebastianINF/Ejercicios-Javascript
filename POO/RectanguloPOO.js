/*
2do Ejercicio:
Crea una clase llamada Rectangulo que tenga dos propiedades: 
ancho y alto. La clase debe tener un método llamado calcularArea que calcule y devuelva el área del rectángulo.

Desafío:
Crea una instancia de la clase Rectangulo y utiliza el método calcularArea para calcular el área del rectángulo. Luego, imprime el resultado en la consola.
*/

function Rectangulo(ancho, alto) {
  this.ancho = ancho
  this.alto = alto
  this.calcularArea = () => {
    console.log(this.alto * this.ancho + ' cm^2')
  }
}

const reactagulo1 = new Rectangulo(10, 20)
reactagulo1.calcularArea()
