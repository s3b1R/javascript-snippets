// Types in JavaScript

//Number
let na = 1
let nb = 3.141
let nc = Number('3.141')
// Immer ein float (gleitkommazahl), JS hat keine integer.

//String
let sa = 'hallo welt'
// multiline strings via template strings möglich (siehe unten)

//Boolean
let ba = true

//Object
let oa = {} // Literale Motation
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
typeof null // 'object'
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
aa.push('item1')
let item1 = aa.pop() // retourniere & entferne erstes element
[5,1,3,2].sort() // sortiere aufsteigend, in place
