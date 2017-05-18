function f1() {
  var v1 = 1;
  return function() { // v1 existe en el scope de esta función
    console.log(v1);
  };
}
var unaFuncion = f1(); // retorna una función
unaFuncion(); // al llamarla imprime 1
v1 = 2;
unaFuncion(); // al llamarla imprime 1
