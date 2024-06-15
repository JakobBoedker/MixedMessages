// make a program that returns a random
//
//array of differnt "quotes"
const qoutes = {
  startOfQuote: [],
  MiddelOfQuote: [],
  endOfQuote: [],

  randomNumber(){
    return Math.floor(Math.random() * 4)
  },
  randomQuote(){
    const finalQuote = this.startOfQuote[this.randomNumber()] + this.MiddelOfQuote[this.randomNumber()] + this.endOfQuote[this.randomNumber()]
    return finalQuote
  },
}


console.log(qoutes.randomQuote())
