
//let students =[]
//function handleClick(){
    //read the value 
//    const nameData = document.querySelector("#name").value 
    //print out the value 
//    console.log(nameData)
 //   students.push(nameData)
//}


//let namelist =[]
//function name1(){
//    const name1 = document.querySelector("#name1").value 
 //   const name2 = document.querySelector("#name2").value 

    //console.log(name1, name2)
    //const names= {
      //  name1: name1,
     //   name2: name2
   // }
  //  namelist.push(names)
//}



//lesson 11
//localStorage.setItem("pet", "dog")


//const pet= localStorage.getItem("pet")
//console.log(pet)

function update(){
     console.log("check")

     const name1 = document.querySelector("#name1").value
     localStorage.setItem("name", name1)

   console.log(name1)
}


//change thing to be string 
const data = [
  {
      name: 'Jennifer',
      grade: 10
  },
  {
      name: 'Emily',
      grade: 10
  },
]
//change it be string 
const stringData = JSON.stringify(data)
// saave to localstorage
localStorage.setItem('studentArray',stringData)
//get the data back
const gotData = localStorage.getItem("studentArray")

console.log(gotData[0])
//change it be JSON (to be object)
const covertedData =JSON.parse(gotData)

console.log(covertedData[0])
console.log(covertedData[0].name)