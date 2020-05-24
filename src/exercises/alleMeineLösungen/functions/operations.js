// 1
// gegeben
function add(a, b){
    return a + b
}
// 1.1
// Erstelle eine Funktion welche ein Parameter entgegen nimmt, und intern immer add mit a=20 aufruft.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).

// Variante 1
function tst(v) {
    return add(20, v)
}

let ab = tst(10)
console.log(ab)

// Variante 2
let addTo20 = add.bind(null,20)
console.log(addTo20(10))


// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für ein Logger er verwenden möchte.