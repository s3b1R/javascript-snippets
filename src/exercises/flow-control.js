// flow control

/////// Bedingungen / If

// 1
// Schreibe ein Program, welches eine Person altersgerecht begrüsst.
// Die Begrüssung soll auf der Console ausgegeben werden.
//
// Kinder, d.h. bis und mit 10 Jahren: Hoi <name>
// Jugendliche, d.h. ab 11 Jahren bis und mit 18 Jahren: Hallo <name>
// Erwachsene, d.h. ab 19 Jahren bis und mit 100 Jahren: Grüezi <name>
// Alle anderen, d.h. ab 101 Jahren: Grüss Gott <name>
//
// Schreibe zwei Variante,
// - eine Variante mit "else if",
// - eine Variante ohne verwendung von "else if"
//   Tip: &&


/////// Schleifen / Loops

// 1
// Schreibe ein Program, das alle Zahlen eines Arrays summiert.
// z.B. aus [1,2,3] wird 6
// Versuche drei Variante zu schreiben, welche jeweils unterschiedliche Schlaufentypen verwenden

// 2
// Schreibe ein Program, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
// Das Programm ermittelt für jede Zahl ob diese Gerade ist oder nicht.
// z.B. aus [1,2,3] wird [false, true, false]

// 3 Schreibe ein Program, welches jeden ersten Buchstaben aller Wörter eines Strings in einen Grossbuchstaben umwandelt.
// z.B. aus "Ich weiss, dass ich nichts weiss ... !" wird "Ich Weiss, Dass Ich Nichts Weiss ... !"

// 4
// Schreibe ein Program, das alle Primzahlen zwischen 0 und 100 ausgibt
// Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen

// 5
// Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt
// z.B. aus "abcz" wird "bcd{", sofern die Verschiebung 1 ist.


// Warum schleifen?
// =>
let result = 1 + 2 + 3 + 8

// =>
const one = 1
const two = 2
const three = 3
const eight = 8

result = one + two + three + eight

// =>
const ns = [1,2,3,8]
for(let n of ns){
    result = result + n
}