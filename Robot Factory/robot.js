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
  const nData = document.querySelector(".name").value;
  const fData = document.querySelector(".food").value;
  const mData = document.querySelector(".many").value;

  console.log(nData, fData, mData);

  const foodRobot = new FoodRobot(nData, fData, mData);
  console.log(foodRobot.name);
  console.log(foodRobot.type);
  console.log(foodRobot.many);


  

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
            <img src="https://pbs.twimg.com/profile_images/1267951139/255147712_400x400.png" />
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
            <img src="https://www.csaimages.com/pix/COAR/C/C838200_WP.JPG" />
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
            <p>ow many food does Robot make: ${element.many}</p>
            <img src="https://p7.storage.canalblog.com/78/33/1355766/114525632_o.jpeg" />
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





