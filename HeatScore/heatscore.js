// Global Variables
const name = prompt("What is your name?")
const gender = prompt("What is your gender(boy or girl)?")
let average
    
if(gender == "girl") {
    // Local Variables
    let question1 = prompt("How short should your boyfriend hair be?(1-100)")
    let question2 = prompt("How rich should your boyfriend be?(1-100)")
    let question3 = prompt("Does your boyfirnd need to have good personality?(1-100)")
    question1 = parseInt(question1)
    question2 = parseInt(question2)
    question3 = parseInt(question3)
    const score = ((question1+question2+question3)/3)
    average = score.toFixed(2)
    document.write("<div class='name'>" + name +"'s condition of boyfriend</div>")
    document.write("<div class='question1'>Hair should be " + question1 + "/100 short. </div>")
    document.write("<div class='question2'>Should be " + question2 + "/100 rich. </div>")
    document.write("<div class='question3'>Personality should be " + question3 + "/100 good. </div>")
    document.write("<div class='score'>Attraciveness score is " + average + "</div>")
}else if(gender == "boy"){
    let question4 = prompt("How long should your girlfriend hair be?(1-100)")
    let question5 = prompt("How good personality should your girlfriend be?(1-100)")
    let question6 = prompt("Do you think your girlfriend have too be sugar mommies?(1-100)")
    question4 = parseInt(question4)
    question5 = parseInt(question5)
    question6 = parseInt(question6)
    const score = ((question4+question5+question6)/3)
    average = score.toFixed(2)
    document.write("<div class='name'>" + name +"'s condition of girlfriend</div>")
    document.write("<div class='question1'>Hair should be " + question4 + "/100 long. </div>")
    document.write("<div class='question3'>Personality should be " + question5 + "/100 good. </div>")
    document.write("<div class='question2'>Sugar mommies " + question6 + "/100. </div>")

    document.write("<div class='score'>Attraciveness score is " + average + "</div>")
}
if (average <=50){
    document.write("<div class='result'> Not interesting</div>")
    document.write(`<img class="picture1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sad_face.svg/2061px-Sad_face.svg.png"></img>`)
}else if (average >=51 && average <= 80){
    document.write("<div class='result'> Can be a friend</div>")
    document.write(`<img class="picture2" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090"></img>`)
}else if (average >=81 && average <= 100){
    document.write("<div class='result'> Can be your other half</div>")
    document.write(`<img class="picture3" src="https://i.pinimg.com/736x/0f/87/88/0f8788c0d8c13754b8a24b30ba272bd9.jpg"></img>`)
}else{
    document.write("<div class='result'> Someting want wrong. Check your input number.</div>")
    document.write(`<img class="picture4" src="https://t3.ftcdn.net/jpg/01/48/51/58/360_F_148515867_lk91PBPgVnsEJUwD33MTberng2SVd1rF.jpg"></img>`)
}