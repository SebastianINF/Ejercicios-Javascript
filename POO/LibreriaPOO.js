/*
4to Ejercicio:
Crea una clase llamada Libreria que represente una librería virtual. La clase debe tener las siguientes propiedades y métodos:

Propiedades:
  libros: un array que almacenará objetos que representen libros. Cada objeto debe tener las propiedades titulo, autor y cantidad.
  Métodos:
  agregarLibro(titulo, autor, cantidad): recibe el título, autor y cantidad de un libro y agrega un objeto que lo represente al array libros.
  buscarLibro(titulo): recibe el título de un libro y devuelve un mensaje indicando si el libro está disponible en la librería y, en caso de estarlo, cuántas copias hay.
  venderLibro(titulo): recibe el título de un libro y disminuye la cantidad de copias disponibles en 1. Si no hay copias disponibles, muestra un mensaje indicando que el libro está agotado.
Desafío:
Crea una instancia de la clase Libreria y utiliza los métodos agregarLibro, buscarLibro y venderLibro para realizar las siguientes acciones:
Agrega al menos 3 libros diferentes a la librería.
Busca un libro específico y muestra el mensaje de disponibilidad.
Vende una copia del libro encontrado anteriormente y muestra el mensaje correspondiente.
Intenta vender otra copia del mismo libro y verifica el mensaje cuando el libro está agotado.
*/
function Libreria(titulo, autor, cantidad) {
  this.libro = [
    {
      titulo,
      autor,
      cantidad
    }
  ]

  this.agregarLibro = (titulo, autor, cantidad) => {
    this.libro = this.libro.concat({
      titulo,
      autor,
      cantidad
    })
  }

  this.buscarLibro = tituloBuscado => {
    if (typeof tituloBuscado !== 'string')
      return console.log('Solo se puede ingresar cadenas')
    for (let objeto of this.libro) {
      if (objeto.titulo === tituloBuscado) {
        return console.log(
          `El libro ${tituloBuscado} esta Disponible -- Quedan ${objeto.cantidad} copias`
        )
      }
    }
    return console.log(`El libro ${tituloBuscado} no fue encontrado`)
  }

  this.venderLibro = tituloAVender => {
    if (typeof tituloAVender !== 'string')
      return console.log('Solo se pueden ingresar cadenas')

    for (let indice in this.libro) {
      if (this.libro[indice].titulo === tituloAVender) {
        if (this.libro[indice].cantidad > 0) {
          this.libro[indice].cantidad--
          return console.log(
            `VENDIDO!!!!!\nQuedan ${this.libro[indice].cantidad} copias de ${tituloAVender}`
          )
        } else {
          return console.log('Ya no quedan copias')
        }
      }
    }
    return console.log(`Libro ${tituloAVender} no encontrado`)
  }
}

const libreria1 = new Libreria('HarryPotter', 'Guillermo del Toro', 5)

libreria1.agregarLibro('Principia Mathematica', 'Newton', 1)
libreria1.agregarLibro('Lord of the ring', 'chespirito', 8)
console.log(libreria1)
libreria1.buscarLibro('Principia Mathematica')

libreria1.venderLibro('Principia Mathematica')
libreria1.venderLibro('Principia Mathematicarrrr')
