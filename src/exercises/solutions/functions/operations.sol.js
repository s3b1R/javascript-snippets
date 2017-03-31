'use strict'
// 1
function add(a, b){
    return a + b
}

// 1.1
// Variante 1
let addTo10 = add.bind(null, 10)
addTo10(20)
// Variante 2
function addTo10(b){
    return add(10, b)
}