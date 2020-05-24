// Schreibe ein Programm, das alle Zahlen eines Arrays summiert.
//     z.B. aus `[1,2,3]` wird `6`

let arr = [1,2,3]

// Variante forEach
let result1ForEach = 0
arr.forEach(cb => result1ForEach += cb)
console.log(result1ForEach)

// Variante reduce
let result1Reduce = arr.reduce((accumuluator, currentValue) => accumuluator + currentValue)
console.log(result1Reduce)


// Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
//     Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.
//     z.B. aus `[1,2,3]` wird `[false, true, false]`

const source = [1,2,3,4,5]

// Variante forEach
let target2 = []
source.forEach(cb => target2.push(cb % 2 === 0))

console.log(target2)

// Variante map
let target2Map = source.map(x => x % 2 === 0)
console.log(target2Map)

// Gegegeben ist eine beliebige Menge von Zahlen.
const numbers = [2, 4.3, -2, 3, -3, 6.6]
// 6.1
// Gebe nur die Ganzzahlen aus.
let result61 = numbers.filter(n => Number.isInteger(n))
console.log(result61)

// 6.2
// Gebe nur die positiven Zahlen aus.
let result62 = numbers.filter(n => n>0)
console.log(result62)

// 6.3
// Berechne die Quersumme aller Zahlen.
let result63 = numbers.toString().split("").map(x => parseFloat(x)).reduce((sum, value)=> (!isNaN(value)? sum + value :sum),0)
console.log(result63)


// 6.4
// Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen.
let result64 = numbers.reduce((sum, value) => sum + value)/numbers.length
console.log(result64)