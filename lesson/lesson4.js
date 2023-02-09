function  alleyOop(){
    document.write("Jennifer got a ball");
    document.write("Teammate made a grade pass");
    document.write("Jennifer dunked over Sam");
    console.log(true)
}
function  threePoint(){
    document.write("Player stand outside the three point line");
    document.write("Shot the ball");
    console.log(true)
}
function  dank(){
    document.write("Player get the ball");
    document.write("Jump and put the ball into the basket");
    console.log(true)
}
//call function 
//alleyOop()
//threePoint()
//dank()


// define with parameters 
function reject (player){
    document.write(player +" was rejected")
    console.log(false)
}
function add(num){
    const theNum=parseInt(num)
    const answer = theNum+3
    console.log ("answer is" + answer)
}
function multiply(num1, num2){
    const answeer= num1*num2
    console.log(`${num1} * ${num2} =  ${answeer}`)
}
function add2(num1){
    const answer= (num1*2)/3
    console.log("The answer is "+ answer)
}
function add3(people1,people2){
    console.log("Hellow "+ people1 +"and "+ people2)
}
//call with argument 
reject('Jennifer')
add(2)
multiply(2,10)
add2(50)
add3("Jennifer", "Emily")