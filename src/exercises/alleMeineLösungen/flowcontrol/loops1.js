// Schreibe ein Programm, das alle Zahlen eines Arrays summiert.
//     z.B. aus `[1,2,3]` wird `6`
// Versuche drei Varianten zu schreiben, welche jeweils unterschiedliche Schlaufentypen verwenden.

let arr = [1,2,3]

//Variante 1
let result1 = 0
for (let x = 0; x < arr.length; x++){
    result1 += arr[x]
}
console.log(result1)


// Variante 2
let result2 = 0
for(let int of arr){
    result2 += int
}
console.log(result2)

// Variante 3
let result3 = 0
let y = -1
while (y++ < arr.length-1){
    result3 += arr[y]
    console.log(y)
}
console.log(result3)


// Variante forEach

let result4 = 0
arr.forEach(cb => result4 += cb)
console.log(result4)