let dogName="Xerox"
let dogBreed="Border Collie"

let wakeDog = function(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Wake${dogName} the ${dogBreed}`)
    return (`Wake ${dogName} the ${dogBreed}`)
}

let leashDog = function(dogName="Boo Radley", dogBreed="Pibble"){
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return (`Leash ${dogName} the ${dogBreed}`)
}

let walkToPark = function(dogName="Boo Radley", dogBreed="Pibble"){
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return (`Walk to the park with ${dogName} the ${dogBreed}`)
}

let throwFrisbee = function(dogName, dogBreed){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`)
}


let walkHome = function(dogName, dogBreed){
    console.log(`Walk home with with ${dogName} the ${dogBreed}`)
    return (`Walk home with ${dogName} the ${dogBreed}`)
}

let unleashDog = function(dogName, dogBreed){
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return (`Unleash ${dogName} the ${dogBreed}`)
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


let exerciseDog = function(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }