const stdin = process.openStdin()

console.log("Dein Name:")

const onNameEntered = function (data) {
    console.log("Deine Name ist:", data.toString().trim())

    stdin.removeListener("data", onNameEntered)
    process.exit(0)
}

stdin.once("data", onNameEntered)


/*
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