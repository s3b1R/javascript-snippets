// Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt.
//     z.B. aus `"abcz"` wird `"bcd{"`, sofern die Verschiebung 1 ist.

const source = "abcz"
let shift = 1
let temp
let target = ""

for(let c = 0; c < source.length; c++){
    temp = source.charCodeAt(c) + shift
    target += String.fromCharCode(temp)
}
console.log(target)


