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
// persons wird nicht geändert
let startWithA = persons.filter(function(p){
    return p.name.startsWith('M')
})

// create new objects from each person
// persons wird nicht geändert
let withLowerCase = persons.map(function(p){
    return {
        name: p.name.toLowerCase()
    }
})

// convert to string
let csv = persons.map(p => p.name).join(', ')

// entferne die ersten beiden elemente aus dem array
persons.splice(0, 2)

let numbers = [0, 1, 2, 3]
// lösche ab index 2, ein element, füge ab index 2 ein element 23 ein.
// => ersetze element an index 2 mit 23
// verändert numbers
numbers.splice(2, 1, 23)
