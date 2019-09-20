// Blocks and Variables

// A variable has always as NAME and a VALUE.
// We use the EQUAL sign "=" to ASSIGN a VALUE to a variable.
// e.g.
let x = 1; // NAME: x, VALUE: 1


// We use the keyword LET to DECLARE a variable
let x = 1;

// we use the variable name and = to assign a new value
x = 3;

// we use the variable name only, to read its value
console.log(x);

// An alternative to let ist CONST
// CONST does NOT allow re-assignment
const x = 3.14159;
x = 3; // ERROR, re-assignment to const variable not allowed




// Blocks are declared using curly braces (geschweifte Klammer): { and }.
// A block contains a list of STATEMENTS (Anweisungen), each terminated with a semicolon ";".
// A block defines the scope (Geltungsbereich) of a variable

// block start
{
    // Statement 1
    let a = 1;
    // Statement 2
    console.log(a); // 1
}
// block end

console.log(a); // undefined

let a = 2;
console.log(a); // 2