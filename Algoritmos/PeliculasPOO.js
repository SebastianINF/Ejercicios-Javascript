/*
27)
  Programa una clase llamada Pelicula.
  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
    7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
    aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
  decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
             - Apartir de un arreglo con la información de 3 películas genera 3
               instancias de la clase de forma automatizada e imprime la ficha técnica
               de cada película.
  
  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Pelicula {
  // Destructuracion {}
  constructor({ id, titulo, director, anio, pais, generos, calificacion }) {
    this.id = id
    this.titulo = titulo
    this.director = director
    this.anio = anio
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarAnio(anio)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
  }

  static get listaGeneros() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western'
    ]
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}.`
    )
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor} esta vacio."`)
    if (typeof valor !== 'string')
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto.`
      )

    return true
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      )

    return true
  }

  validarNumero(propiedad, valor) {
    if (!valor && valor !== 0)
      return console.warn(`${propiedad} "${valor}" esta vacio.`)
    if (typeof valor !== 'number')
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero.`
      )
    if (Math.sign(valor) === -1)
      return console.error(`El valor "${valor}" NO puede ser negativo`)

    return true
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor} esta vacio."`)
    if (!(valor instanceof Array))
      return console.error('Solo se puede ingresar un arreglo.')
    if (valor.length === 0)
      return console.log(`El arreglo de la propiedad ${propiedad} eta vacio.`)

    for (let numero of valor) {
      if (typeof numero !== 'string')
        return console.error(`Solo se pueden ingresar datos tipo texto`)
    }

    return true
  }

  validarIMDB(id) {
    if (this.validarCadena('IMDB id', id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minuculas, los 7 retantes numeros.`
        )
  }

  validarTitulo(titulo) {
    if (this.validarCadena('titulo', titulo))
      this.validarLongitudCadena('titulo', titulo, 100)
  }

  validarDirector(director) {
    if (this.validarCadena('director', director))
      this.validarLongitudCadena('director', director, 50)
  }

  validarAnio(anio) {
    if (this.validarNumero('año', anio)) {
      if (parseInt(anio, 10) !== anio)
        return console.error(`El año "${anio}" debe ser un entero.`)
      if (anio.toString().length !== 4)
        return console.log(
          `El año ${anio} debe ser un numero entero poitivo de cuatro digitos`
        )
    }
  }

  validarPais(pais) {
    if (this.validarArreglo('pais', pais));
  }

  validarGeneros(generos) {
    if (this.validarArreglo('generos', generos)) {
      for (let genero of generos) {
        // console.log(genero, Pelicula.listaGeneros.includes(generos));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(', ')}".`)
          Pelicula.generosAceptados()
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero('calificacion', calificacion)) {
      !(calificacion >= 0 && calificacion <= 10)
        ? console.error(
            `La calificacion ${calificacion} tiene que estar entre 0-10`
          )
        : (this.calificacion = calificacion.toFixed(1))
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.anio}"\nPais: "${this.pais.join(
        '-'
      )}"\nGeneros: "${this.generos.join(', ')}"\nCalificacion: "${
        this.calificacion
      }"\nIMDB id: ${this.id}`
    )
  }
}

Pelicula.generosAceptados()
//ORDEN-- > id, titulo, director, anio, pais, generos, calificacion
const peli = new Pelicula({
  id: 'tt1234567',
  titulo: 'The Dark night',
  director: 'Guillermo del Toro',
  anio: 1989,
  pais: ['Bolivia', 'Argentina'],
  generos: ['Action', 'Comedy'],
  calificacion: 0.45
})

//peli.fichaTecnica()

