'use strict'
//#1
// Schreibe eine Funktion die alle Zahlen eines Arrays summiert. \
// z.B. `sum([1,2,3]) => 6` \
// Schreibe eine funktionale und eine imperative Variante.\
// Schreibe die Signatur als Deklaration.

// sum(Array<Number>):Number


function sum(arr){
    //imperativ
    // let sum = 0
    // for(let n=0; n<arr.length; n++){
    //     sum += arr[n]
    // }
    // return sum

    //functional
    return arr.reduce((total, currentValue) => total + currentValue )
}

console.log(sum([1,2,3]))


// #2
// Schreibe eine Funktion die einen Array von Zahlen entgegennimmt und einen Array mit Booleans zurückgibt. \
// Die Funktion ermittelt für jede Zahl ob diese gerade ist oder nicht. \
// z.B. `even([1,2,3]) => [false, true, false]` \
// Schreibe eine funktionale und imperative Variante. \
// Schreibe die Signatur als Deklaration.

//even(array<Number>=: Array<boolean>

function even(numbers = []) {
    //imperativ
    // const bools = []
    // for(let number of numbers){
    //     bools.push(number %2 === 0)
    // }
    // return bools

    //functional
    return numbers.map(number => number % 2 === 0)
}

const out = even([1,2,3])
console.log(out)

//#3.1 mit filter
// Implementiere eine Funktion `filter(in: Array<A>, predicate: (value: A) => Boolean): Array<A>`. \
// Teste ob diese funktioniert :).
function isEven(arr) {
    return arr.filter(number => number %2 === 0)
}

console.log(isEven([1,2,3,4,5,6,7,8]))

//#3.2
// Implementiere eine Funktion `map(in: Array<A>, mapper: (value: A) => B): Array<B>`. \
// Teste ob diese funktioniert :).

function map(arr = [], mapper) {
    const mapped = []
    for(const item of arr){
        mapped.push(mapper(item))
    }
    return mapped
}


const mapped = map([1,2,3], number => number % 2 === 0)
console.log(mapped)



//Filter (ubg spontan erfunden)
//even(array<Number>=: Array<Number>
function evenOnly(numbers = []) {
    return numbers.filter(number => number % 2 === 0)

}

const out2 = evenOnly([1,2,3,4,5])
console.log(out2)

const isEvent = number => number % 2 === 0
const greatherThan4 = number => number >4

const out3 = [1,2,3,4,5,6,7,8]
    .filter(isEvent)
    .filter(greatherThan4)

console.log(out3)


