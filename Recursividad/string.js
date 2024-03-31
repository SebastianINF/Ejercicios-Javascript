function verificarVocal(char) {
  const vocales = 'aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ' // Todas las vocales
  return vocales.includes(char)
}

function verificarLetra(char) {
  const letras =
    'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ' // todas las letras
  return letras.includes(char)
}

function contarEspacios(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let ultimaLetra = x[x.length - 1]
    x = x.substring(0, x.length - 1)
    c = contarEspacios(x)
    if (ultimaLetra === ' ') {
      c++
    }
  }
  return c
}

// cuenta las vocales aeiouáéíóúäëïöü
function contarVocalesV1(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let ultimaLetra = x[x.length - 1]
    x = x.substring(0, x.length - 1)
    c = contarVocalesV1(x)
    if (verificarVocal(ultimaLetra)) {
      c++
    }
  }
  return c
}

function contarVocalesV2(x) {
  let c
  if (x === '') {
    c = 0
  } else {
    let a = x[0]
    x = x.substring(1, x.length)
    c = contarVocalesV2(x)
    if (verificarVocal(a)) {
      c++
    }
  }
  return c
}

function contarVocalesV3(x) {
  let c
  if (x === '') {
    c = 0
  } else if (x.length === 1) {
    c = verificarVocal(x[0]) ? 1 : 0
  } else {
    let a = x[0]
    let b = x[1]
    x = x.substring(2, x.length)
    c = contarVocalesV3(x)
    if (verificarVocal(a)) {
      c++
    }
    if (verificarVocal(b)) {
      c++
    }
  }
  return c
}

function invertirCadena(ref) {
  if (ref.x === '') {
    // nada
  } else {
    let a = ref.x[0]
    ref.x = ref.x.substring(1, ref.x.length)
    invertirCadena(ref)
    ref.x = ref.x + a
  }
}

function verificarSoloEspacios(x) {
  let b
  if (x === ' ') {
    b = true
  } else {
    let a = x[0]
    x = x.substring(1, x.length)
    if (a !== ' ') {
      b = false
    } else {
      b = verificarSoloEspacios(x)
    }
  }
  return b
}

function eliminarVocales(ref) {
  if (ref.x === '') {
    // nada
  } else {
    let a = ref.x[0]
    ref.x = ref.x.substring(1, ref.x.length)
    eliminarVocales(ref)
    if (!verificarVocal(a)) {
      ref.x = a + ref.x
    }
  }
}

function verificar_palindromo(x) {
  let b
  let length = x.length
  if (length <= 1) {
    b = true
  } else {
    let primero = x[0]
    let ultimo = x[length - 1]
    x = x.substring(1, length - 1)
    b = verificar_palindromo(x)
    if (primero != ultimo) {
      b = false
    }
  }
  return b
}

function primerPalabra(x) {
  let p
  let c = x.length
  if (c === 0) {
    p = ''
  } else if (c === 1) {
    if (verificarLetra(x[0])) {
      p = x
    } else {
      p = ''
    }
  } else {
    let a = x[0] // a = h
    x = x.substring(1, x.length)
    p = primerPalabra(x) // n-1 => hola mundo -> ola
    if (verificarLetra(a) && verificarLetra(x[0])) {
      p = a + p
    } else if (verificarLetra(a) && !verificarLetra(x[0])) {
      p = a
    } else if (!verificarLetra(a) && verificarLetra(x[0])) {
      // nada
    } else if (!verificarLetra(a) && !verificarLetra(x[0])) {
      // nada
    }
  }
  return p
}

function eliminarPrimerPalabra(ref) {
  let c = ref.x.length
  if (c === 0) {
    // nada
  } else if (c === 1) {
    if (verificarLetra(ref.x[0])) {
      ref.x = ''
    } else {
      // nada
    }
  } else {
    let a = ref.x[0]
    ref.x = ref.x.substring(1, ref.x.length)
    if (verificarLetra(a) && verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
    } else if (verificarLetra(a) && !verificarLetra(ref.x[0])) {
      // nada
    } else if (!verificarLetra(a) && verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
      ref.x = a + ref.x
    } else if (!verificarLetra(a) && !verificarLetra(ref.x[0])) {
      eliminarPrimerPalabra(ref)
      ref.x = a + ref.x
    }
  }
}

// Ej1 x = "hola a todos" => " a todos"
// Ej2 x = "123hola a todos" => " a todos"
function eliminarHastaPrimerPalabra(ref) {
  if (ref.x == '') {
    // nada
  } else {
    let a = ref.x[0]
    // a1
    ref.x = ref.x.substring(1, ref.x.length)
    if (!verificarLetra(a)) {
      eliminarHastaPrimerPalabra(ref)
    } else {
      if (ref.x != '' && verificarLetra(ref.x[0])) {
        eliminarHastaPrimerPalabra(ref)
      }
    }
  }
}

// Ej x = "hola a todos *123" => "hola a "
function eliminarDesdePrimerPalabra(ref) {
  if (ref.x == '') {
    // nada
  } else {
    let a = ref.x[ref.x.length - 1]
    ref.x = ref.x.substring(0, ref.x.length - 1)
    if (!verificarLetra(a)) {
      eliminarDesdePrimerPalabra(ref)
    } else {
      if (ref.x != '' && verificarLetra(ref.x[ref.x.length - 1])) {
        eliminarDesdePrimerPalabra(ref)
      }
    }
  }
}

function contarPalabras(x) {
  let c
  let length = x.length
  if (length === 0) {
    c = 0
  } else if (length === 1) {
    if (verificarLetra(x[0])) {
      c = 1
    } else {
      c = 0
    }
  } else {
    let a = x[0]
    x = x.substring(1, x.length)
    c = contarPalabras(x)
    if (verificarLetra(a) && !verificarLetra(x[0])) {
      c++
    }
  }

  return c
}

// void invertir_frase(String x) {
//  invertirCadena(ref);
//  invertir_cada_palabra(ref);
// }

// String palabra_mas_larga(String x)
// {
//     String mas, p;
//     x = x.Trim();
//     byte c = x.Length();

//     if (c == 0) {
//         p = "";
//     } else {
//         int d = x.LastDelimiter(' ');
//         mas = x.SubString(d + 1, c - d);
//         x.Delete(d + 1, c - d);
//         p = palabra_mas_larga(x);
//         if (mas.Length() > p.Length()) {
//             p = mas;
//         }
//     }
//     return p;
// }

// void eliminar_primera_letra_de_cada_palabra(String &x)
// {
//     x = x.Trim();
//     byte c = x.Length();
//     if (c == 0) {
//         x = "";
//     } else {
//         int d = x.LastDelimiter(' ');
//         String mas = x.SubString(d + 1, c - d);
//         x.Delete(d + 1, c - d);
//         eliminar_primera_letra_de_cada_palabra(x);
//         mas.Delete(1, 1);
//         x = x + mas + " ";
//     }
// }

// void invertir_cada_palabra(String &x)
// {
//     x = x.Trim();
//     byte c = x.Length();
//     if (c == 0) {
//         x = "";
//     } else {
//         int d = x.LastDelimiter(' ');
//         String mas = x.SubString(d + 1, c - d);
//         x.Delete(d + 1, c - d);
//         invertir_cada_palabra(x);
//         invertir_cadena(mas);
//         x = x + mas + " ";
//     }
// }

// //double convertir_base_binario_a_decimal(int nro, int base)
// //{
// //    int bin;
// //    if (nro < base) {
// //        bin = nro;
// //    } else {
// //        bin = convertir_base_binario_a_decimal(nro / base, base);
// //        bin = bin * 10 + (nro % base);
// //    }
// //    return bin;
// //}

// EJERCICIO MÁS DIFICIL
// -------------------------------------------------------------
// Ej1: x = "hola104 mundo54 como1 estan" => 104
// Ej2: x = "Hola mundo" => 0
// Cardinal posNum(String cad, bool num)
// {
//     Cardinal pos;
//     if (cad.Length() == 0)
//         pos = 0;
//     else {
//         wchar_t c = cad[cad.Length()];
//         cad.Delete(cad.Length(), 1);
//         pos = posNum(cad, num);
//         if (pos == 0) {
//             if (num) {
//                 if (isdigit(c))
//                     pos = cad.Length() + 1;
//             } else {
//                 if (!isdigit(c))
//                     pos = cad.Length() + 1;
//             }
//         }
//     }
//     return pos;
// }

// Cardinal mayor(String cad)
// {
//     Cardinal may;
//     if (cad.Length() == 0)
//         may = 0;
//     else {
//         Cardinal posA = posNum(cad, true);
//         Cardinal num;
//         if (posA > 0) {
//             cad.Delete(1, posA - 1);
//             Cardinal posB = posNum(cad, false);
//             if (posB == 0)
//                 posB = cad.Length() + 1;
//             num = StrToInt(cad.SubString(1, posB - 1));
//             cad.Delete(1, posB - 1);
//         } else {
//             num = 0;
//             cad = "";
//         }
//         may = mayor(cad);
//         if (num > may)
//             may = num;
//     }
//     return may;
// }

// Cardinal numero_mayor(String x)
// {
//     Cardinal may;
//     if (x.Length() == 0)
//         may = 0;
//     else {
//         Cardinal pos = x.Pos(" ");
//         if (pos == 0)
//             pos = x.Length() + 1;
//         String pal = x.SubString(1, pos - 1);
//         x.Delete(1, pos);
//         may = numero_mayor(x);
//         Cardinal num = mayor(pal);
//         if (num > may)
//             may = num;
//     }
//     return may;
// }
// // -------------------------------------------------------------

// NO FUNCIONA!!!!!!
// void invertir_frase(String &x)
// {
//     byte n = x.Length();
//     if (n == 0) {
//         // nada
//     } else if (n == 1) {
//         // nada
//     } else {
//         byte pos = x.Pos(' ');
//         String palabra = x.SubString(1, pos);
//         x.Delete(1, pos);
//         invertir_cadena(palabra);
//         invertir_frase(x);
//         x = x + palabra;
//     }
// }

// TODO : invertir_cada_palabra(x);
export { verificarLetra, primerPalabra, eliminarPrimerPalabra }
