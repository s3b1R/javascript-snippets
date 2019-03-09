'use strict'
// Types in JavaScript

//Number
let x = 1 // Integer
let pi = 3.141 // Float (ähnliche wie Double), eine Fliesskommazahl
let pii = Number('3.141')

//String
let sa = 'hallo welt'
let sax = a + ', wie geht es dir?'

//Boolean
let either = true
let isEven = 8 % 2 === 0


//Object
let oa = {} // Literale Notation
let ob = Object.create(null)

//Array
let aa = []
let ab = [na, sa, oa]


//undefined
let ua = undefined
let ub

//null
let a = null


// Einige Beispiele
typeof ub // 'undefined'
typeof foo // 'undefined'
typeof undefined // 'undefined'
typeof "" // 'string'
typeof true // 'boolean'
typeof null; // 'object'
typeof [] // 'object'
Array.isArray([]) // true
typeof {} // 'object'
typeof new Number('1') // 'object'
typeof Number('1') // 'number'
// => nie `new Number` verwenden
// Kurzum: Die Typenerkennung in JavaScript ist nicht intuitiv

// Rechnen
nb*na^2
Math.pow(nb*na, 2)
// JavaScript ist nicht geeignet für hoch präzise Rechenaufgaben

// string concatenation via +
sa + ' lieber user'
// template strings werden in back ticks ` definiert und können über mehrere Zeilen gehen.
// Im String können dann Variablen eingebettet werden mit ${Variable}.
let user = 'Welt'
let welcome = `Hallo ${user}
Wie geht es dir?` // 'Hallo Welt\nWie geht es dir?'

// Objekt-Eigenschaften definieren
let settings = {}
settings.username = 'alberto'
// Verschachtelte Objekte
settings.position = {x: 12, y: 200}

// Array Operationen
aa.push('ejeje')
let item1 = aa.pop(); // retourniere & entferne letztes element
let arr = [5,1,3,2]
let aj = arr.pop() // sortiere aufsteigend, in place
