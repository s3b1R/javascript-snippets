// Types in JavaScript

//Number
var na = 1
var nb = 3.141
// immer ein float (gleitkommazahl), JS hat keine integer.

//String
var sa = "hallo welt"

//Boolean
var ba = true

//Date
var da = new Date()

//Object
// literal notation
var oa = {}
var ob = Object.create(null)

//Array
// literal notation
var aa = []
var ab = [na, sa, da, oa]

//undefined
var ua = undefined
var ub


// Einige Beispiele

// Rechenoperatoren in plain text
var nc = nb*na^2
var nd = Math.pow(nb*na, 2)

// string concatenation via +
var sb = sa + " lieber user"

// Datums Arithmetik (Resultat millisekunden)
var db = new Date() - da

// Eigenschaften definieren
var settings = {}
settings.username = "alberto"
settings.position = {x: 12, y: 200}

// Array Operationen
aa.push("item1")
var item1 = aa.pop()
[5,1,3,2].sort()
