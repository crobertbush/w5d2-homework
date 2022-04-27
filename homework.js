//Create an Object


let dog1 = {
    name: "Beanie",
    numLegs: 4,
    numTeeth: 37,
    numEyes: 2,
    numRump: 1,
    nickname: "Bean",
    speak: function() {
        document.write("Hello! My name is " + this.name + ". Some people call me " + this.nickname + ". I have " + this.numLegs + " legs, " + this.numTeeth + " teeth, " + this.numEyes + " eyes, & " + this.numRump + " rump.");
    }
}


//Constructor Function


function Dog() {
    this.name = "Lucky",
    this.numLegs = 4,
    this.numTeeth = 42,
    this.numEyes = 1,
    this.numRump = 1,
    this.nickname = "a good boy"
    this.speak = function() {
        document.write("Hello! My name is " + this.name + ". Some people call me " + this.nickname + ". I have " + this.numLegs + " legs, " + this.numTeeth + " teeth, " + this.numEyes + " eyes, & " + this.numRump + " rump.");
    }
}

let dog2 = new Dog();




//Constructor Function w/ Arguments



function Dog1(name, numLegs, numTeeth, numEyes, nickname) {
    this.name = name;
    this.numLegs = numLegs;
    this.numTeeth = numTeeth;
    this.numEyes = numEyes;
    Dog1.prototype.numRump = 1;
    this.nickname = nickname;
    this.speak = function() {
        document.write("Hello! My name is " + this.name + ". Some people call me " + this.nickname + ". I have " + this.numLegs + " legs, " + this.numTeeth + " teeth, " + this.numEyes + " eyes, & " + this.numRump + " rump.");
    }
}

let dog3 = new Dog1("Roxanne", 4, 40, 2, "Roxy");




//Instancof Checks

//document.write(dog2 instanceof Dog);
//console.log(dog3 instanceof Dog1);
//document.write(dog2 instanceof Dog1);
//console.log(dog3 instanceof Dog);
//document.write(dog1 instanceof Dog);
//console.log(dog1 instanceof Dog1)


//Own Properties

let dogArray = [];

for (let property in dog1) {
    if (dog1.hasOwnProperty(property)) {
        dogArray.push(property);
    }
}

console.log(dogArray);




//Prototypes
//Added to the Constructor Function Dog1

console.log(dog3);
