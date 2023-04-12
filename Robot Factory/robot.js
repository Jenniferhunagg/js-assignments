let tacoRobots = []
let hamburgerRobot = []
let brownieRobot = []
// 1. Create a class for your robots

// Attack

class FoodRobot {
    constructor(type, many) {
        this.type = type
        this.many = many
    }
    food() {
        console.log(`food! ${this.type}`)
    }
}
// 1. crect the value into class


function submit() {

    // 1. read the value from the input
    const tData = document.querySelector(".food").value
    const mData = document.querySelector(".many").value

    // 2. console.log the value to confirm we have it
    console.log(tData, mData)

    // 3. create object with form data
    const foodRobot1 = new FoodRobot(tData, mData)
    console.log(foodRobot1.type)
    console.log(foodRobot1.many)

    if (tData==="taco") {
        tacoRobots.push(foodRobot1)
    }else if (tData==="hamburger"){
        hamburgerRobot.push(foodRobot1)
    }else if (tData==="brownie"){
        brownieRobot.push(foodRobot1)
    }
}

/*

= assigns a value
== soft comparison (checks value is same)
=== hard comparison (checks value AND data type is same)

*/





// const newRobot = new AttackRobot('jen', 'basketball')

// 2. Create an Add Function
//      - create an object from the class
//      - add to the array