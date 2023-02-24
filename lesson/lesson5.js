function button(){
    console.log("Hi")
}
function writeOnScreen(){
    //document.querySelector(".story").innerText = "new story"
    document.querySelector(".story").innerHTML = "<h1>new story</h1>"
    document.getElementById(".story").innerHTML = "<h1>new story</h1>"
}
function sayHi(){
    console.log("Hi")
}

//const sayHiMany= setInterval(sayHi, 1000)
//let sayHiMany
//function stopInterval(){
//    clearInterval(sayHiMany)
//}
//function start(){
//    sayHiMany = setInterval(sayHi,1000)
//}

let sayHiMany
let num=0
let numInterval
function stopInterval(){
    clearInterval(sayHiMany)
}
function start(){
    numInterval = setInterval(addNum,1000)
}
function stop(){
    clearInterval(numInterval)
}
function reset(){
    num=0
    clearInterval(numInterval)
}
function addNum(){
    num++
    //console.log(num)
    console.log(num)
}