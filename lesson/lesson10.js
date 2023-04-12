
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


