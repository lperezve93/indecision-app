// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55,1, 1001));

/* convert the previous function in an arrow funcion */
const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(addArrow(55,1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Lorena',
    cities: ['London', 'Berlin', 'Paris'],
    /* esta funcion nunca puede ser arrow si queremos usar el this dentro de ella */
    // printPlacesLived: function () { igual que si ponemos:
    printPlacesLived () {
        console.log(this.name);
        console.log(this.cities);
        const that = this;

        this.cities.forEach(function(city) {
            /* en esta función anónima no puedo acceder directamente a this.name, 
            por tanto, nos hemos creado una instancia de this -> that
            con ella ya podemos acceder a los valores de this */
            console.log(that.name + ' has lived in ' + city);
        });
    },
    /* en cambio si cambiamos la funcion interna por una arrow function,
    si que podemos acceder a los parametros de this */
    printPlacesLivedArrow() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    },
    /* MAP similar as forEach but, when you use map you can actually 
    transform each item */
    printPlacesLivedMap() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};

//user.printPlacesLived();
//user.printPlacesLivedArrow();
console.log(user.printPlacesLivedMap());


/* Challenge area */
// number [] - 123456
    // multiplyBy - single number - 2
    // multiply - return a new array where the numbers have been multiplied

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

