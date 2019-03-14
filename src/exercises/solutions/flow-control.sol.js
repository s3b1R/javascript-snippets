// flow control

/////////////////////////// Bedingungen / If

// 1
const age = 13
const name = "Walter"
let greeting = ""

// Variante 1
if (age <= 10)
    greeting = "Hoi"
else if (age <= 18)
    greeting = "Hallo"
else if (age <= 100)
    greeting = "Grüezi"
else
    greeting = "Grüss Gott"

const resultat1 = greeting + " " + name
console.log(resultat1)

// Variante 2
if (age <= 10)
    greeting = "Hoi"
if (age > 10 && age <= 18)
    greeting = "Hallo"
if (age > 18 && age <= 100)
    greeting = "Grüezi"
if (age > 100)
    greeting = "Grüss Gott"

const resultat2 = greeting + " " + name
console.log(resultat2)


/////////////////////////// Schleifen / Loops

// 0
const word = "Pinguin"
// Variante 1
console.log(`${word[0]},${word[1]},${word[2]},${word[3]},${word[4]},${word[5]},${word[6]}`)

// Variante 2
csv = ""
for (let c of word) {
    if (csv === '') {
        csv += c
    } else {
        csv += "," + c
    }
}
console.log(csv)

// Variante 3
csv = ""
for (let c of word) {
    csv += (csv.length > 0 ? "," : "") + c
}
console.log(csv)

// Variante 4
csv = ""
for (let i = 0; i < word.length; i++) {
    csv += (csv.length > 0 ? "," : "") + word[i]
}
console.log(csv)



const arr = [1, 2, 3]
// 1
// for of
const array = [1, 2, 3]
let sum = 0
for (let n of array) {
    sum += n
}

// for
sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

// while
sum = 0
let i = 0
while (i < arr.length) {
    sum += arr[i]
    i++
}



// 2
let result = []
for (let n of arr) {
    let isEven = n % 2 === 0;
    result.push(isEven)
}



// 3
// Variante mit while & for
let n = 0
while (n++ < 10) {
    let isPrime = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) console.log(n)
}

// Variante mit 2x while
n = 0
while (n++ < 10) {
    let isPrime = true
    let i = 2
    while (++i < n) {
        if (n % i === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) console.log(n)
}



// 4
const phrase = "Ich weiss, dass ich nichts weiss ... !"
const words = phrase.split(' ');
const uppercaseWords = []
for (let word of words) {
    uppercaseWords.push(word[0].toUpperCase() + word.substr(1))
}
let capitalizedPhrase = uppercaseWords.join(' ');
console.log(capitalizedPhrase)



// 5
const plainText = "abcz"
const shift = 1
let cipherText = ""
for (let charIdx = 0; charIdx < plainText.length; charIdx++) {
    const charCode = plainText.charCodeAt(charIdx);
    cipherText += String.fromCharCode(charCode + shift)
}
console.log(cipherText)