// Types in JavaScript

//Number
let x = 1 // Integer
let pi = 3.141 // Float (ähnliche wie Double), eine Fliesskommazahl
let pii = Number('3.141')

//Rechnen
let it = (x*pi)**2
it = Math.pow(x*pi, 2)
// JavaScript ist nicht geeignet für hoch präzise Rechenaufgaben

// increment, d.h.  "plus 1"
x = x + 1
x += 1
x++ // evaluate than increment
++x // increment than evaluate



//String
let sa = 'hallo wasdfölkajsfdgelt'

// string concatenation via +
let sax = sa + ', wie geht es dir?'

// Länge
let numberOfCharacters = sa.length
numberOfCharacters

// Einzelne Zeichen aus einem String auslesen
sa[0] // h
sa[1] // a
sa[sa.length - 1]


// ASCII Wert eines Zeichens ermitteln
sa.charCodeAt(1) // 68


// Zeichenkette aufteilen
let words = sa.split(' ') // Array mit Elementen "hallo" und "welt"





// template strings werden in back ticks ` definiert und können über mehrere Zeilen gehen.
// Im String können dann Variablen eingebettet werden mit ${Variable}.
let user = 'Du'
let welcome = `Hallo ${user},
Wie geht es dir?` // 'Hallo Du\nWie geht es dir?'



//Boolean
let either = true
let isEven = 8 % 2 === 0



//Array
let aa = []
let ab = [x, pi, 4]

// Array Operationen
aa.push('ejeje')
let item1 = aa.pop(); // retourniere & entferne letztes element
let arr = [5,1,3,2]
let aj = arr.sort()   // sortiere aufsteigend, in place



//undefined
let ua = undefined // ua hat den Wert undefined
let ub             // ub hat den Wert undefined

//null
let a = null       // a hat den Wert null, das ist nicht das gleiche wie undefined



//Object
let oa = {} // Literale Notation
let ob = Object.create(null)

// Objekt-Eigenschaften definieren
let settings = {}
settings.username = 'alberto'
// Verschachtelte Objekte
settings.position = {x: 12, y: 200}







// Einige Beispiele
typeof ub // 'undefined'
typeof foo // 'undefined'
typeof undefined // 'undefined'
typeof '' // 'string'
typeof true // 'boolean'
typeof null; // 'object'
typeof [] // 'object'
Array.isArray([]) // true
typeof {} // 'object'
typeof new Number('1') // 'object'
typeof Number('1') // 'number'
// => nie `new Number` verwenden
// Kurzum: Die Typenerkennung in JavaScript ist nicht intuitiv