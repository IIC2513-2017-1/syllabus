var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// console.log(counter); // Se cae porque counter pertenece al closure de add.
