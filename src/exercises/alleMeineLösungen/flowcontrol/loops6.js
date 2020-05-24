// Gegegeben ist eine beliebige Menge von Zahlen.
const numbers = [2, 4.3, -2, 3, -3, 6.6]
// 6.1
// Gebe nur die Ganzzahlen aus.
let int = []
for(let n of numbers){
    if (Number.isInteger(n)){
        int.push(n)
    }
}
console.log(int)
console.log(int.sort())

// 6.2
// Gebe nur die positiven Zahlen aus.
let pos = []
for(let n of numbers){
    if(n>0){
        pos.push(n)
    }
}
console.log(pos)
console.log(pos.sort())

// 6.3
// Berechne die Quersumme aller Zahlen.
let crossSum = 0

let str = numbers.toString().split("")
for(let nbr of str){
    if(!isNaN(parseInt(nbr))){
        crossSum += parseInt(nbr)
    }
}
console.log(crossSum)

// 6.4
// Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen.
let average = 0
let sum = 0
for(let n of numbers){
    sum += n
    }
average = sum / numbers.length
console.log(average)