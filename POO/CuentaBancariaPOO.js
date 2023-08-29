/*
3er Ejercicio:
Crea una clase llamada CuentaBancaria que tenga las propiedades saldo y propietario. La clase debe tener los siguientes métodos:

depositar: recibe una cantidad de dinero como parámetro y lo agrega al saldo de la cuenta.
retirar: recibe una cantidad de dinero como parámetro y la resta del saldo de la cuenta.
obtenerSaldo: devuelve el saldo actual de la cuenta.
Desafío:
Crea una instancia de la clase CuentaBancaria con un saldo inicial y un propietario. Luego, realiza una serie de depósitos y retiros utilizando los métodos de la clase. Finalmente, utiliza el método obtenerSaldo para obtener el saldo final de la cuenta y muéstralo en la consola.
*/

function CuentaBancaria(saldo, propietario) {
  this.saldo = saldo
  this.propietario = propietario
  this.depositar = function (dinero) {
    this.saldo = this.saldo + dinero
  }
  this.retirar = function (dinero) {
    this.saldo = this.saldo - dinero
  }
  this.obtenerSaldo = function () {
    return this.saldo
  }
}

const cuentaJuan = new CuentaBancaria(7000, 'Juan Felipe')

cuentaJuan.depositar(1000)
cuentaJuan.retirar(4000)
console.log(cuentaJuan)

console.log(cuentaJuan.saldo)
console.log(cuentaJuan.propietario)


