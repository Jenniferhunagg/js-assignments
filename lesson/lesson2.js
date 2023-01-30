//console.log(5+3)
//console.log(5-3)
//console.log(5*3)
//console.log(5/3)
//console.log(5%3) // modulus 
//console.log(1+(2+3)+3)


//let num1=prompt("choose a number")
//let num2=prompt("choose a number")
//let num3=prompt("choose a number")
//let num4=prompt("choose a number")
//let num5=prompt("choose a number")

//num1 = parseInt(num1)
//num2 = parseInt(num2)
//num3 = parseInt(num3)
//num4 = parseInt(num4)
//num5 = parseInt(num5)

//console.log(`output: ${num1}+${num2}+${num3}+${num4}+${num5}=${num1+num2+num3+num4+num5}`)
//console.log(`output: ${num1}+${num2}*(${num3}+${num4})-${num5}=${num1+num2*(num3+num4)-num5}`)

//if 
// soft compre == (same but differet type)
// hard compare ===
// two or more things &&
//if(number >=11){
    //console.log("It is a big number")
//}
//if(number <= 4){
    //console.log("It is a small number")
//}
//if(number <=10 && number>=5){
    //console.log("It is a medium number")
//}
let number = prompt("Choes a number")
number = parseInt(number)

if (number === 1){
    console.log("You are correct")
} else if (number >= 5) {
    console.log("Number is too big")
} else if (number <= 0.9) {
    console.log("Number is too small")
} else{
    console.log("The answer is close")
}