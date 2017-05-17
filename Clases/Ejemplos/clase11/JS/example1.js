function f1() {
  var v1 = 1;
  var f2 = function() { // v1 existe en el scope de esta función
    console.log(v1);
  };
  return f2;
}
var unaFuncion = f1(); // retorna una función
unaFuncion(); // al llamarla, imprime 1
