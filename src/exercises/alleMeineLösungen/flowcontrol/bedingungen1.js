let name = "Hans"
let age = 5
let kid = `Hoi ${name}`
let youth = `Hallo ${name}`
let adult = `Grüezi ${name}`
let old = `Grüss Gott ${name}`

// Variante 1
if(age >100){
    console.log(old)
} else if(age >18){
    console.log(adult)
}else if(age >10){
    console.log(youth)
}else{
    console.log(kid)
}

//Variante 2
if(age >100){console.log(old)}
if(age <=100 && age >=19){console.log(adult)}
if(age <=18 && age >=11){console.log(youth)}
if(age <=10){console.log(kid)}

// Schreibe ein Programm, welches eine Person altersgerecht begrüsst.
//     Die Begrüssung soll auf der Console ausgegeben werden.
//
// - Kinder, d.h. bis und mit 10 Jahren: Hoi <name>
// - Jugendliche, d.h. ab 11 Jahren bis und mit 18 Jahren: Hallo <name>
// - Erwachsene, d.h. ab 19 Jahren bis und mit 100 Jahren: Grüezi <name>
// - Alle anderen, d.h. ab 101 Jahren: Grüss Gott <name>
//
// Schreibe zwei Varianten,
//     - eine Variante mit "else if",
//     - eine Variante ohne Verwendung von "else if"
//
// Tip: &&

