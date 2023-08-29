/*
Ejercicio: Simulación de autenticación de usuario
Objetivo: Crear una función que simule el proceso de autenticación de un usuario utilizando promesas.

Instrucciones:

Crea una función llamada autenticarUsuario que tome como parámetros un nombre de usuario y una contraseña.
Dentro de la función autenticarUsuario, crea una promesa que resuelva o rechace dependiendo de si las credenciales son válidas o no.
Simula la verificación de las credenciales comparando el nombre de usuario y la contraseña con unos valores predefinidos (por ejemplo, usuario: "admin" y contraseña: "12345").
Si las credenciales son válidas, resuelve la promesa con un objeto que contenga un mensaje de éxito y los datos del usuario autenticado.
Si las credenciales son inválidas, rechaza la promesa con un mensaje de error adecuado.
Llama a la función autenticarUsuario con diferentes credenciales y utiliza el método .then para manejar la resolución de la promesa en caso de éxito, y el método .catch para manejar el rechazo de la promesa en caso de error.
*/

function autenticarUsuario(nombre, constraseña) {
  return new Promise((resolve, reject) => {
    console.log('Verificando credencial...')
    setTimeout(() => {
      if (nombre === 'admin' && constraseña === 12345) {
        resolve(new String('La credencial es valida'))
      }
      reject(new Error('La credencial no es valida'))
    },3000)
  })
}

async function getAutenticarUsuario(nombre, contraseña) {
  const usuario = await autenticarUsuario(nombre, contraseña)
  console.log(usuario.message)
}

getAutenticarUsuario('admin', 12345)
