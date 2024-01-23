let day = 'Tuesday'
console.log(day.length)
let subDay = day.slice(0, 3)
console.log(subDay)
let splitDay = day.split('s')
console.log(splitDay[0])
console.log(splitDay[1])


// Parse string to Integer
let date = '23'
let nextDate = '27'
let diffDate = parseInt(nextDate) - parseInt(date)
console.log(diffDate)

let quote = day + ' is fun day and some day'
console.log(quote)
console.log(quote.indexOf('day', 5))
let val = quote.indexOf('day')

//find occurance of a word in a string
let newQuote = 'Today is a day which is bigger than most days'
let count = 0
while (val !== -1) {
    count++
    val = newQuote.indexOf('day', val + 1)
}
console.log(count)