//1 
document.write("Question 1")
document.write('<br>')
let question1num = 1
while (question1num <= 5){
    document.write("I love web dev class!")
    document.write('<br>')
    question1num ++ 
}
//2 
document.write("Question 2")
document.write('<br>')
for (question2mun = 0;question2mun<5; question2mun++ ){
    document.write("Number is "+ question2mun)
    document.write('<br>')
}
//3 
document.write("Question 3")
document.write('<br>')
for (question3mun = 15;question3mun<31; question3mun=question3mun+3 ){
    document.write("Number is "+ question3mun)
    document.write('<br>')
}
//4
document.write("Question 4")
document.write('<br>')
for (q4 = 0; q4 < 4; q4++ ){
    for(i=0; i<=3; i++){
        document.write("⬜ ")
    }
    document.write('<br>')
}
//5
document.write("Question 5")
document.write('<br>')
for (q5 = 1; q5 < 7; q5++ ){
    for(i=1; i<=q5; i++){
        document.write("🦴 ")
    }
    document.write('<br>')
}
//6
document.write("Question 6")
document.write('<br>')
for (q6 = 1; q6 < 8; q6++ ){
    for(i=q6; i<7; i++){
        document.write("~")
    }
    for(i=1; i<=q6; i++){
        document.write("🦴")
    }
    document.write('<br>')
}
//7
document.write("Question 7")
document.write('<br>')
for (q7 = 1; q7 <6; q7++ ){
    for(i=1; i<=q7; i++){
        for(j=1; j<=i; j++){
            document.write("🦴 ")
        }
        document.write('<br>')

    }
    document.write('<br>')
}
