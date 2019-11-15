/*
// Using data event. Not reusable
const stdin = process.openStdin()

console.log("Dein Name:")

const onNameEntered = function (data) {
    console.log("Deine Name ist:", data.toString().trim())

    stdin.removeListener("data", onNameEntered)
    process.exit(0)
}

stdin.once("data", onNameEntered)
*/


/*
// Using data event. Wrapped in a reusable function
const stdin = process.openStdin()

function prompt(question, handler){
    console.log(question)
    stdin.once("data", (...args) => {
        handler(...args)
        stdin.removeListener("data", handler)
    })
}

let onNameEntered = function (data) {
    // note:  data is an object, and when converted to a string it will
    // end with a linefeed. so we account for that with trim()
    console.log("Deine Name ist:", data.toString().trim())
}

prompt("Deine Name:", onNameEntered)
*/


/*
// Using line event. Not reusable
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
})

console.log('Dein Name:')
rl.on('line', function (line) {
    console.log('Dein Name ist:', line);
})
*/