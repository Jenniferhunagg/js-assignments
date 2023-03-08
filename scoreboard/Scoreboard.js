let numT1=0 
let numT2= 0 
let nameT1
let nameT2
let numQuarter=0
let timer=0
let sec = 0;
let min = 0;
let RepeatTime;
function add1T1(){
    numT1++
    document.querySelector(".team1Point").innerText = numT1
}
function add2T1(){
    numT1+=2
    document.querySelector(".team1Point").innerText = numT1
}
function add3T1(){
    numT1+=3
    document.querySelector(".team1Point").innerText = numT1
}
function add1T2(){
    numT2++
    document.querySelector(".team2Point").innerText = numT2
}
function add2T2(){
    numT2+=2
    document.querySelector(".team2Point").innerText = numT2
}
function add3T2(){
    numT2+=3
    document.querySelector(".team2Point").innerText = numT2
}
function resetT1() {
    numT1 = 0
    document.querySelector(".team1Point").innerText = numT1
}
function resetT2() {
    numT2 = 0
    document.querySelector(".team2Point").innerText = numT2
}
function add1Quarter(){
    if(numQuarter <=3){
        numQuarter++
        document.querySelector(".quarterTime").innerText = numQuarter
    }
}
function reduceQuarter(){
    if(numQuarter >= 1){
        numQuarter--
        document.querySelector(".quarterTime").innerText = numQuarter
    }
}
function resetQuarter(){
    numQuarter = 0
    document.querySelector(".quarterTime").innerText = numQuarter
}
function start(){
    document.querySelector(".time").innerText = timer
}
function team1Name(){
    nameT1 = prompt('Team 1 name.')
    document.querySelector(".one").innerText = nameT1
}   
function team2Name(){
    nameT2 = prompt('Team 2 name.')
    document.querySelector(".two").innerText = nameT2
}   
function time(){
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  document.querySelector(".time").innerText = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  if(min == 15){
    min=0
    sec=0
    add1Quarter()
  }
}
function start(){
    RepeatTime = setInterval(time, 1000);
}
function stop(){
  clearInterval(RepeatTime);
}
function reset(){
  sec = 0;
  min = 0;
  document.querySelector(".time").innerText = "00:00";
  clearInterval(RepeatTime);
}
