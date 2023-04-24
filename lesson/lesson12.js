const one = [
    {
        name: 'Jennifer',
        grade: 10
    },
    {
        name: 'Emily',
        grade: 10
    },
  ]


  one.forEach(function(element){

console.log(element)

    document.querySelector(".one").innerHTML += `
<h2> ${element.name} </h2>
<h2> ${element.grade} </h2>
`
})

// array.filter()

const music = ["piano", "wiolin", "trumprt", "cello"]

const filterMusic = music.filter(function(element){
    console.log("We are on element: ", element) 
    return element !== "trumprt"
})

const number =[1,2,3,4,5,6]

const filterNumber = number.filter(function(number){
    console.log("Number: ", number) 
    return number !== 5
} )
