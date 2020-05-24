// Schreibe ein Programm, welches jeden ersten Buchstaben aller Wörter eines Strings in einen Grossbuchstaben umwandelt.
//     z.B. aus `"Ich weiss, dass ich nichts weiss ... !"` wird `"Ich Weiss, Dass Ich Nichts Weiss ... !"`

let str = "Ich weiss, dass ich nichts weiss ... !"
let word = str.split(' ')
let solution = ""
for (let up of word){
    if(solution.length<1){
    solution += up.charAt(0).toUpperCase() + up.substring(1)
    }else {
        solution += " " + up.charAt(0).toUpperCase() + up.substring(1)
    }
}

console.log(solution)




// Lösungen Ueli

const phrase = "Ich weiss, dass ich nichts weiss ... !"

// Variante 2
// for
let capitalizedPhrase = ""
for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i]
    if (i === 0) {
        char = char.toUpperCase()
    }
    if (char === " ") {
        capitalizedPhrase += " " + phrase[++i].toUpperCase()
    } else {
        capitalizedPhrase += char
    }
}
console.log(capitalizedPhrase)

// Variante 1
// for of + array
const words = phrase.split(' ');
const uppercaseWords = []
for (let word of words) {
    uppercaseWords.push(word[0].toUpperCase() + word.substr(1))
}
capitalizedPhrase = uppercaseWords.join(' ');
console.log(capitalizedPhrase)

