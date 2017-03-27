'use strict'
// Functions in JavaScript
let a = 1, b = 2
// function declaration
function sum(a, b){
    return a + b
}
sum(1, 2)

// function expression
let multiply = function dkd(a, b){
    return a * b
}
multiply(a, b)
// dkd(a, b) geht nicht

// rest parameter
function sum(...b){
    // b ist ein array
    // ...
}
sum(1, 2, 3, 4, 5)

// spread operator
multiply(...[1, 2])
// multiply wird gleich aufgerufen wie in: multiply(1, 2)

// optionale parameter
function sayHello(to='World'){
    console.log(`Hello ${to}`)
}

// arguments
function ohneParams(){
    // Zugriff auf alle Argumente die der Aufrufer angegeben hat.
    // Der Aufrufer kann also mehr oder auch weniger Argumente angeben
    // als die Funktionsdefinition "verlangt".
    console.log(arguments)
}


// scopes
let x = 1 // definiert die variable x im aktuellen scope (globaler scope)
let y = 2
function scope(){
    let y = 20 // shadow global y
    // this.x => sucht die variable x nur im this objekt
    // x sucht die variable x im lokalen scope und im äusseren globalen scope
    console.log(this, this.x, x)
}
scope() // undefined undefined 1
new scope() // {} undefined 1
let obj = { scope: scope, x: 2 }
obj.scope() // Object 2 1

// scope ändern
function log(it){
    console.log(this, it)
}
log.call(1, 'hi')
log.apply(1, ['hi'])
let scopeWith1 = log.bind(1)
scopeWith1('hi')

// hoisting
function hoisting(){
    console.log(a, b, f(), inner()) // undefined
    var a = 1
    let b = 2
    function inner(){}
    var f = inner
}
// wird interpretiert/ausgeführt als
function hoisting(){
    function inner(){}
    var a
    var f
    console.log(a, b, f(), inner())
    // fehler1: b nicht definiert
    // fehler2: f ist keine funktion
    a = 1
    let b = 2
    f = inner()
}
