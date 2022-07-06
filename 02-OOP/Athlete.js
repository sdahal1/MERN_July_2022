/*
Every athelete will have:
1. Properties: name, country, energyLevel, age, sport 
2. Methods-> things an athlete can do

Python->

class Athlete:
    def __init__(self):
        self.name = "Michael Phelps"
        self.country = "USA"
        self.energyLevel = 100
        self.age = 40
        self.sport = "Swimming"

*/

class Athlete{
    constructor(nameInput, countryInput, sportInput){
        this.name = nameInput;
        this.country = countryInput;
        this.sport = sportInput;
        this.energyLevel = 100; //default value for all athletes to 100
        this.salary = 10000; //default value for all athletes to $10,000
    }

    //say name
    sayName(){
        console.log("Hi my name is: " + this.name);
        //f"Hi my name is: {self.name}"
        //`Hi my name is: ${this.name}`
    }

    //display all info-> print the info of the athelte
    displayInfo(){
        console.log(`Details: \n Name: ${this.name} \n Country: ${this.country} \n Sport: ${this.sport} \n Energy Level: ${this.energyLevel}`) 
        //THE THIS KEYWORD REFERS TO THE INSTANCE THAT IS CALLING THE METHOD
    }

    //play a game
    playSport(){
        this.energyLevel -= 10;
    }

    //take a ice bath to restore energy
    takeIceBath(){
        this.energyLevel = 100;
    }

}


class Swimmer extends Athlete{
    constructor(nameInput, countryInput, lapSpeedInput){
        super(nameInput, countryInput, "Swimming"); //super refers to the constructor of the parent class

        //add new more unique properties only swimmers can have here
        this.lapSpeed = lapSpeedInput;
    }

    swim(){
        console.log("splashhhh, im swimming");
        this.energyLevel -= 10;
    }

}

let s1 = new Swimmer("Michael Phelps", "USA", 4);
let s2 = new Swimmer("Katie Ledecky", "USA", 3.9);

s1.swim()
// console.log(s1)
// console.log(s2)



class BBaller extends Athlete{
    //for constructor params, put the inputs the Bballer needs that can vary
    constructor(nameInput, countryInput, freeThrowInput){
        super(nameInput, countryInput, "Basketball");
        this.freethrowPercentage = freeThrowInput;
    }

    slamDunk(){
        this.energyLevel += 25;
    }
}


let b1 = new BBaller("Steph Curry", "USA", "93");
let b2 = new BBaller("Shaq O'neal", "USA", "10");

b1.slamDunk()
b1.displayInfo()

console.log(b1)
console.log(b2)







//instances of the Athlete class-> Athlete objects
// let a1 = new Athlete("Michael Phelps", "USA", "Swimming");
// let a2 = new Athlete("Kobe Bryant", "USA", "Basketball");
// let a3 = new Athlete("Luka Doncic", "Slovenia", "Basketball");


// a1.playSport();
// a2.swim();
// a2.playSport();
// a2.takeIceBath();

// a1.displayInfo();
// a2.displayInfo();
// a3.displayInfo();




// console.log(a1)
// console.log(a2)
// console.log(a3)

















