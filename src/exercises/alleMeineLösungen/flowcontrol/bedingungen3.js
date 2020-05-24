// Schreibe ein Programm, welches entscheidet, wer in den Club darf und wer nicht.
//
// - Männer dürfen ab 20 rein, Frauen bereits ab 18.
//
// Gib die Entscheidung auf der Console aus.
//
//     Schreibe zwei Varianten,
//     - eine Variante mit switch case
// - eine Variante mit && und || (ohne ganz ausgeschriebene if)

let age = 18
let sex = "f"
let entry = false

// Variante Switch
switch (sex) {
    case "m":
        if(age > 19){entry = true}
        break
    case "f":
        if(age > 17){entry = true}
        break
    default:
        entry = false
        break
}
console.log("Eintritt gewährt: " + entry)

//Variante ohne ausgeschriebene if
let canEnter = (age > 19 && sex === "m") || (age > 17 && sex === "f")
console.log("Eintritt gewährt: " + canEnter)
