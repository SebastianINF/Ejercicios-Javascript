/*
Escenario: Registro de Usuarios

Imagina que estás desarrollando una aplicación de registro de usuarios. Cada usuario tiene un nombre, una dirección de correo electrónico y una contraseña. Para mejorar la seguridad y la validación, decides implementar getters y setters en la clase Usuario.

Requerimientos:

La contraseña debe ser almacenada de manera segura, por lo que no se debe acceder directamente a ella.
La dirección de correo electrónico debe ser válida y no se deben asignar direcciones de correo electrónico duplicadas.
Pasos a Seguir:

Crea una clase Usuario con atributos nombre, email y password.
Implementa getters y setters para cada atributo. El getter de password debería devolver un valor enmascarado y el setter de email debería validar si la dirección de correo electrónico es válida y si no está duplicada.
Utiliza estos getters y setters para crear instancias de usuarios y acceder a sus atributos.
Este ejercicio te ayudará a entender cómo usar getters y setters en un contexto real. Te animo a intentarlo por tu cuenta, ¡y si tienes alguna pregunta o necesitas orientación, no dudes en preguntar!
*/


const correosValidados = {};

function validarEmail(correo) {
  const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!patron.test(correo)) {
    return false; // El formato del correo no es válido
  }

  if (correosValidados[correo]) {
    return "duplicado"; // El correo ya está duplicado
  }

  correosValidados[correo] = true;
  return true;
}


class Usuario {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  set setPassword(password) {
    let aster = ""
    for (let i = 0; i <= password.length; i++) {
      aster = aster + "*"
    }
    this.password = aster
  }

  get getPassword() {
    return this.password
  }


  set setEmail(email) {
    const resultadoBool = validarEmail(email)

    if (!resultadoBool) {
      this.email = "Correo no valido"
    }
    else if (resultadoBool === "duplicado") {
      this.email = "Correo duplicado"
    }
    else {
      this.email = email
    }

  }

  get getEmail() {
    return this.email
  }

}

const sebastian = new Usuario("sebastian")
const juan = new Usuario("juan")
sebastian.setEmail = "crsebastian_el_capo_2016@hotmail.com"
juan.setEmail = "crsebatian_el_capo_2016@hotmail.com"


console.log(sebastian)
console.log(juan)

console.log(correosValidados)
console.log(juan.getEmail)
console.log(juan.getEmail)


sebastian.setPassword = "crsebastian*2016"
console.log(sebastian.getPassword)


console.log(sebastian)
