let tacoRobots = [];
let hamburgerRobots = [];
let brownieRobots = [];

class FoodRobot {
  constructor(name, type, many, image) {
    this.name = name;
    this.type = type;
    this.many = many;
    this.image = image
  }
}
function submit() {
  const nData = document.querySelector(".name").value;
  const fData = document.querySelector(".food").value;
  const mData = document.querySelector(".many").value;
  const iData = document.querySelector(".image").value;

  console.log(nData, fData, mData, iData);

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
        <div class="robot">
          <img class="robotImage" src="${element.image}" width="400" height="400"/>
          <div class="robotInformation">
            <h1 class="nameRobot">Name: ${element.name}</h1>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
          </div>
        </div>
      `;
    });
  } else if (fData === "Hamburger") {
    hamburgerRobots.push(foodRobot);
    const hamburgerRobotsString = JSON.stringify(hamburgerRobots);
    localStorage.setItem("hamburgerArray", hamburgerRobotsString);
    hamburgerRobots.forEach(function(element) {
      console.log(element);


      document.querySelector(".img-container").innerHTML += `
        <div class="robot">
          <img class="robotImage" src="${element.image}" width="400" height="400"/>
          <div class="robotInformation">
            <h1 class="nameRobot">Name: ${element.name}</h1>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
          </div>
        </div>
      `;
    });
  } else if (fData === "Brownie") {
    brownieRobots.push(foodRobot);
    const brownieRobotsString = JSON.stringify(brownieRobots);
    localStorage.setItem("brownieArray", brownieRobotsString);


    brownieRobots.forEach(function(element) {
      console.log(element);
      document.querySelector(".img-container").innerHTML += `
        <div class="robot">
          <img class="robotImage" src="${element.image}" width="400" height="400"/>
          <div class="robotInformation">
            <h1 class="nameRobot">Name: ${element.name}</h1>
            <p>What will Robot cook for: ${element.type}</p>
            <p>How many food does Robot make: ${element.many}</p>
          </div>
        </div>
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

function del() {
  const nameData = document.querySelector(".name").value;
  const foodData = document.querySelector(".food").value;
  const manyData = document.querySelector(".many").value;
  const imageData = document.querySelector(".image").value;
  const destoryFood = document.querySelector(".destory-food").value;
  const destoryName = document.querySelector(".destory-name").value;


  console.log(nameData, foodData, manyData, imageData);
  if (destoryFood === "Taco") {
    const filteredTaco = tacoRobots.filter(function(element) {
      return element.type === "Taco" && element.name === destoryName;
    });

    if (filteredTaco.length > 0) {
      tacoRobots.splice(tacoRobots.indexOf(filteredTaco[0]), 1);

      const tacoRobotsString = JSON.stringify(tacoRobots);
      localStorage.setItem("tacoArray", tacoRobotsString);
    }
    document.querySelector(".img-container").innerHTML = "";

    tacoRobots.forEach(function(element) {
      document.querySelector(".img-container").innerHTML += `
      <div class="robot">
        <img class="robotImage" src="${element.image}" width="400" height="400"/>
        <div class="robotInformation">
          <h1 class="nameRobot">Name: ${element.name}</h1>
          <p>What will Robot cook for: ${element.type}</p>
          <p>How many food does Robot make: ${element.many}</p>
        </div>
      </div>
    `;
    });
  } else if (destoryFood === "Hamburger") {
    const filteredHamburger = hamburgerRobots.filter(function(element) {
      return element.type === "Hamburger" && element.name === destoryName;
    });

    if (filteredHamburger.length > 0) {
      hamburgerRobots.splice(hamburgerRobots.indexOf(filteredHamburger[0]), 1);

      const hamburgerRobotsString = JSON.stringify(hamburgerRobots);
      localStorage.setItem("hamburgerArray", hamburgerRobotsString);
    }
    document.querySelector(".img-container").innerHTML = "";

    hamburgerRobots.forEach(function(element) {
      document.querySelector(".img-container").innerHTML += `
      <div class="robot">
        <img class="robotImage" src="${element.image}" width="400" height="400"/>
        <div class="robotInformation">
          <h1 class="nameRobot">Name: ${element.name}</h1>
          <p>What will Robot cook for: ${element.type}</p>
          <p>How many food does Robot make: ${element.many}</p>
        </div>
      </div>
    `;
    });
  } else if (destoryFood === "Brownie") {
    const filteredBrownie = brownieRobots.filter(function(element) {
      return element.type === "Brownie" && element.name === destoryName;
    });

    if (filteredBrownie.length > 0) {
      brownieRobots.splice(brownieRobots.indexOf(filteredBrownie[0]), 1);

      const browineRobotsString = JSON.stringify(brownieRobots);
      localStorage.setItem("brownieArray", browineRobotsString);
    }
    document.querySelector(".img-container").innerHTML = "";

    brownieRobots.forEach(function(element) {
      document.querySelector(".img-container").innerHTML += `
      <div class="robot">
        <img class="robotImage" src="${element.image}" width="400" height="400"/>
        <div class="robotInformation">
          <h1 class="nameRobot">Name: ${element.name}</h1>
          <p>What will Robot cook for: ${element.type}</p>
          <p>How many food does Robot make: ${element.many}</p>
        </div>
      </div>
    `;
    });
  }
}