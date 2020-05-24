
let age = 15
let sen = "CHF " + 10.0
let adult = "CHF " + 15.0
let youth = "CHF "+ 5.0
let kid = "CHF " + 0.0

//Variante 1
if(age >59){
    console.log(sen)
} else if(age >15){
    console.log(adult)
}else if(age >=5){
    console.log(youth)
}else{
    console.log(kid)
}

//Variante 2
if(age >59){console.log(sen)}
if(age <=59 && age >=16){console.log(adult)}
if(age <=15 && age >=5){console.log(youth)}
if(age <=4){console.log(kid)}

// Schreibe ein Programm, welches den Eintrittspreis abhängig vom Alter bestimmt.
//     Es gelten folgende Regeln:
//     - Wer jünger als 5 ist, bekommt Gratiseintritt
// - Ab 5 bis 15 Jahren zahlt man 5 Franken
// - Ab 16 zahlt man denn Vollpreis von 15 Franken
// - Senioren ab 60 bezahlen 10 Franken
//
// Gib den Betrag in Franken auf die Console aus.
//
//     Schreibe zwei Varianten,
//     - eine Variante mit "else if",
//     - eine Variante ohne Verwendung von "else if"
//
// Tip: &&
