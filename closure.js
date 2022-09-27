/* -- js closures -- */

/* === normal function === */
function temporary() {
    let counter = 0;

    return function () {   // this function is a closures function
        counter += 1;
    }
}


const add = temporary();   // call closures parent function;

// check closures;
console.dir(add);

// invoke closures function 
add();    // 1
add();   // 2
add();  // 3




/* === Use Self-invoking function === */
const total = (function () {
    let count = 0;

    return function () {  //closures function
        count = 1;
    }
})();

// check closures;
console.dir(total); 

// invoke closures function
total();    // 1
total();   // 2
total();  // 3

