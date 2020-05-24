// 1
// gegeben
// function add(a, b){
//     return a + b
// }

// Erstelle eine Funktion namens aPlusb welche einen Parameter p entgegen nimmt,
// und intern immer add mit a=20 aufruft, b soll mit p belegt werden.
// Gib das Ergebnis der Berechnung zurück.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).

// Variante 1
// function aPlusb(p) {
//     return add (20, p)
// }
//
// console.log(aPlusb(10))

// Variante 2
// function aPlusb() {
//     return add.bind(null,20)
// }
// let addTo20 = aPlusb()
// console.log(addTo20(5))
// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für einen Logger er verwenden möchte.
// z.B. console.log oder console.warn wären mögliche Logger.

function add(a, b, logger){
    logger('berechne ', a, ' plus',b)
    return a + b
}
let warnLogger = console.warn
let defaultLogger = console.log
let dateLogger = function(...message){
    console.log(new Date() + ' ' + message.join(' '))
}
add(10,5, dateLogger)