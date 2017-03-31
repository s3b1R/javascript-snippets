'use strict'
// fibonacci, imperativ

let n = 10
let fib = [0,1]
for(let i=2; fib.length<n; i++){
    fib.push(fib[i-2]+fib[i-1])
}
fib = fib.splice(0, n)

console.log(fib)