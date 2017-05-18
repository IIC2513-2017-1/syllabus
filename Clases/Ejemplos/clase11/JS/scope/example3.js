// http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

var funcs = [];
for (var i = 0; i < 3; i++) {      // se definen 3 funciones en un arreglo
  funcs[i] = function() {          // que imprimen el valor de i al ejecutarse
    console.log("My value: " + i);
  };
}

for (var j = 0; j < 3; j++) {
  funcs[j]();                      // se ejecuta cada una de las funciones
}

// Esto imprime:

// My value: 3
// My value: 3
// My value: 3
