class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Lorena PV', 26, 'Computer Science');
/*console.log(me.getGretting());
console.log(me.getDescription());
console.log(me.hasMajor());*/

const other = new Student();
/*console.log(other.getDescription());
console.log(other.hasMajor());*/

/* new subclass from Person: Traveler 
add support for homelocation
override getGreeting
1. 
*/

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gretting = super.getGretting();
        if (this.homeLocation){
            gretting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return gretting;
    }
}

const meTraveler = new Traveler('Lorena PV', 26, 'London');
console.log(meTraveler.getGretting());

const otherTraveler = new Traveler(undefined, undefined, 'Nowhere');
console.log(otherTraveler.getGretting());
