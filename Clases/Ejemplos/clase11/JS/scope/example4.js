var funcs = [];

function createfunc(i) {
  return function() {
    console.log("My value: " + i);
  };
}

for (var i = 0; i < 3; i++) {
  funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}

// Esto imprime:

// My value: 0
// My value: 1
// My value: 2
