// Schreibe ein Programm, das alle Primzahlen zwischen 0 und 100 ausgibt.
//     Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen.

//Variante 1 for loop
let result1 = []
for(let x = 0; x<=100; x++){
    if(x%2===0){
    } else {
        result1.push(x)
    }
}
console.log(result1)

// Variante 2 while loop
let result2=[]
let number=0
while (number <=100){
        if(number%2===0){
        } else {
            result2.push(number)
            }
    number++
}
console.log(result2)
