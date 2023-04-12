//class

class Cokie{
    constructor(color, candy, food){
        this.color=color
        this.candy =candy
        this.food = "chip"
    }
    eatCookie(){
        console.log("Cookie was eaten...")
    }
    gerCookieInfo(){
        console.log(`this is a ${this.food}`)
    }
}
const cookie1 = new Cokie("blue", "M&M")
const cookie2 = new Cokie("yellow", "skittles")

class Movie1{
    constructor(movie1, character1){
        this.movie1=movie1
        this.character1 = character1
        this.time= "2022"
    }
    movieInfo(){
        console.log(`The movie is publish in ${this.time}`)
    }
}
const movie1 = new Movie1("Black Adam", "Dwayne Johnson")


class Movie2{
    constructor(movie2, character2){
        this.movie2=movie2
        this.character2 = character2
        this.time= "2021"
    }
    movieInfo(){
        console.log(`The movie is publish in ${this.time}`)
    }
}
const movie2 = new Movie2("Cinema Judge F9", "Dominic Toretto")

class Movie3{
    constructor(movie3, character3){
        this.movie3=movie3
        this.character3 = character3
        this.time= "2022"
    }
    movieInfo(){
        console.log(`The movie is publish in ${this.time}`)
    }
}
const movie3 = new Movie3("Top Gun: Maverick", "DomLt. Pete Mitchellinic Toretto")

