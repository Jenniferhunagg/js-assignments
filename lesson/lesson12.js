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



