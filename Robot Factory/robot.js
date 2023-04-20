let tacoRobots = [];
let hamburgerRobots = [];
let brownieRobots = [];

class FoodRobot {
  constructor(name, type, many) {
    this.name = name;
    this.type = type;
    this.many = many;
  }

  food() {
    console.log(`food! ${this.type}`);
  }
}

function submit() {
  const img = document.createElement("img");

  const nData = document.querySelector(".name").value;
  const fData = document.querySelector(".food").value;
  const mData = document.querySelector(".many").value;

  console.log(nData, fData, mData);

  const foodRobot = new FoodRobot(nData, fData, mData);
  console.log(foodRobot.name);
  console.log(foodRobot.type);
  console.log(foodRobot.many);

  if (fData === "taco") {
    tacoRobots.push(foodRobot);
    const tacoRobotsString = JSON.stringify(tacoRobots);
    localStorage.setItem("tacoArray", tacoRobotsString);
  } else if (fData === "hamburger") {
    hamburgerRobots.push(foodRobot);
    const hamburgerRobotsString = JSON.stringify(hamburgerRobots);
    localStorage.setItem("hamburgerArray", hamburgerRobotsString);
  } else if (fData === "brownie") {
    brownieRobots.push(foodRobot);
    const brownieRobotsString = JSON.stringify(brownieRobots);
    localStorage.setItem("brownieArray", brownieRobotsString);
  }

  const tacoGotData = localStorage.getItem("tacoArray");
  const hamburgerGotData = localStorage.getItem("hamburgerArray");
  const brownieGotData = localStorage.getItem("brownieArray");

  tacoRobots = JSON.parse(tacoGotData) || [];
  hamburgerRobots = JSON.parse(hamburgerGotData) || [];
  brownieRobots = JSON.parse(brownieGotData) || [];
}


document.querySelector('.img-container').innerHTML = `
    <h1>Hi</h1>
    <p>this is a p</p>
`