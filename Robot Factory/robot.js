let tacoRobots = [];
let hamburgerRobots = [];
let brownieRobots = [];

class FoodRobot {
  constructor(name, type, many, image) {
    this.name = name;
    this.type = type;
    this.many = many;
    this.image =image
  }
}
function submit() {
  const nData = document.querySelector(".name").value;
  const fData = document.querySelector(".food").value;
  const mData = document.querySelector(".many").value;
  const iData = document.querySelector(".image").value;

  console.log(nData, fData, mData,iData );

  const foodRobot = new FoodRobot(nData, fData, mData, iData)
  console.log(foodRobot.name);
  console.log(foodRobot.type);
  console.log(foodRobot.many);
  console.log(foodRobot.image);

  document.querySelector(".img-container").innerHTML = "";
  

  if (fData === "Taco") {
    tacoRobots.push(foodRobot);
    const tacoRobotsString = JSON.stringify(tacoRobots);
    localStorage.setItem("tacoArray", tacoRobotsString);

    tacoRobots.forEach(function(element) {
        console.log(element);
    
        document.querySelector(".img-container").innerHTML += `
            <h2 class='student-name'>Robot name: ${element.name}</h2>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
            <img src= "${element.image}" width="400" height="400"/>
        `;
      });
  } else if (fData === "Hamburger") {
    hamburgerRobots.push(foodRobot);
    const hamburgerRobotsString = JSON.stringify(hamburgerRobots);
    localStorage.setItem("hamburgerArray", hamburgerRobotsString);
    hamburgerRobots.forEach(function(element) {
        console.log(element);


        document.querySelector(".img-container").innerHTML += `
            <h2 class='student-name'>Robot name: ${element.name}</h2>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
            <img src= "${element.image}" width="400" height="400"/>
        `;
      });
  } else if (fData === "Brownie") {
    brownieRobots.push(foodRobot);
    const brownieRobotsString = JSON.stringify(brownieRobots);
    localStorage.setItem("brownieArray", brownieRobotsString);
    

    brownieRobots.forEach(function(element) {
        console.log(element);
        document.querySelector(".img-container").innerHTML += `
            <h2 class='student-name'>Robot name: ${element.name}</h2>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
            <img src= "${element.image}" width="400" height="400"/>
        `;
      });
  }
  const tacoGotData = localStorage.getItem("tacoArray");
  const hamburgerGotData = localStorage.getItem("hamburgerArray");
  const brownieGotData = localStorage.getItem("brownieArray");

  tacoRobots = JSON.parse(tacoGotData) || [];
  hamburgerRobots = JSON.parse(hamburgerGotData) || [];
  brownieRobots = JSON.parse(brownieGotData) || [];
}





