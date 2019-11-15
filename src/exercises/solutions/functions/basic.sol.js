'use strict'
// 1.1
function createGreeting(name){
    return `Hello ${name}`
}



// 1.2
function createGreeting(name){
    if(name === undefined){
        name = 'Welt'
    }
    return `Hallo ${name}`
}

// oder
function createGreeting(name = 'Welt'){
    return `Hallo ${name}`
}



// 1.3
// Variante 1
function createGreeting(names = ['Welt']){
    let finalNames = names.join(', ')
    return `Hallo ${finalNames}`
}
// Variante 2
function createGreeting(...names){
    if(names.length === 0) names.push('Welt')
    let finalNames = names.join(', ')
    return `Hallo ${finalNames}`
}
// Variante 3, Default Wert pro Array-Element
function sagHallo(dieNamen = ["Welt"]) {
    let alleNamenKommaGetrennt = ""
    for(let name of dieNamen){
        if(name === undefined){
            name = "Welt"
        }
        alleNamenKommaGetrennt += ", " + name
    }
    console.log("Hallo " + alleNamenKommaGetrennt.substr(2))
}

sagHallo(["Hans", "Thomas", undefined, "Peter"])
sagHallo()
