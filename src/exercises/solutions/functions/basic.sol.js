'use strict'
// 1.1
function createGreeting(name){
    return `Hello ${name}`
}

// 1.2
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
