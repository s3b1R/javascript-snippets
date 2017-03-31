'use strict'
let persons = []

persons.push(
    {
        name: 'Hendrick'
    },
    {
        name: 'Marc'
    },
    {
        name: 'Anna'
    }
)
// remove last element from array and get it
let anna = persons.pop()

// return all persons that match filter
let startWithA = persons.filter(function(p){
    return p.name.startsWith('M')
})

// create new objects from each person
let withLowerCase = persons.map(function(p){
    return {
        name: p.name.toLowerCase()
    }
})

// convert to string
persons.map(p => p.name).join(', ')
