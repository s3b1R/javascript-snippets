// ### 1.1
// Schreibe eine Funktion die einen Namen entgegen nimmt und "Hallo \<name\>" zurück gibt.

function hello(name) {
    return `Hallo ${name}`
}

console.log(hello("Sebi"))



// ### 1.2
// Verändere die Funktion so, dass wenn kein Name angegeben wird, als default Name "Welt" genommen wird.

function hello2(name = "Welt") {
    return `Hallo ${name}`
}

console.log(hello2())


// ### 1.3
// Verändere die Funktion so, dass man soviele Namen wie man will mitgeben kann.
//
//     Die Ausgabe ist dann "Hallo \<name1>, \<name2>, ...".
//
//     Als default Name soll immer noch Welt gelten.
//
//     Versuche zwei Lösungsvarianten zu finden (Hint: Rest-Parameter)


function hello3(...name) {
    if(name.length === 0){
        name = "Welt"
    }
    return `Hallo ${name}`
}

console.log(hello3("Hans", "Kurt", "Felix"))
console.log(hello3())

