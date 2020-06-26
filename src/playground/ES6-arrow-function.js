const square = function (x) {
    return x * x;
};

console.log(square(7));

function squareTwo(x) {
    return x * x;
};
console.log(squareTwo(8));

/*const squareArrow = (x) => {
    return x * x;
};*/

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

/* Create regular arrow function */


const getFirstNameArrow = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstNameArrow('Lorena Perez'));

/* Create arrow funtion using shorthand syntax */
const getFirstNameArrowShort = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameArrowShort('Alex Sanchez'));

function getLastName(fullName) {
    return fullName.split(' ')[1];
}
console.log(getLastName('Irene Tello'));