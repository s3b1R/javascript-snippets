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
if(age <=10)
    greeting = "Hoi"
if(age > 10 && age <=18)
    greeting = "Hallo"
if(age >18 && age <=100)
    greeting = "Grüezi"
if(age > 100)
    greeting = "Grüss Gott"

const resultat2 = greeting + " " + name
console.log(resultat2)



/////////////////////////// Schleifen / Loops

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