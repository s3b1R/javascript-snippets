// Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
//     Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.
//     z.B. aus `[1,2,3]` wird `[false, true, false]`

const source = [1,2,3,4,5]
let target = []

for(let int of source){
    target.push(int%2===0)
}
console.log(target)


// Variante forEach

let target2 = []
source.forEach(cb => target2.push(cb % 2 === 0))

console.log(target2)