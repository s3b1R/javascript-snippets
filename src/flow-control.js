// Flow Control in JavaScript

// if
let a = 1
let b
if (a){
    b = 2
}else{
    b = 0
}

// ternary if
let x = (0 > 1) ? "ja" : "nein"


// Logische Verknüpfungen
// && AND
let age = 10
let sex = 'm'
let canEnter = age >= 18 && sex === 'f'

// || OR
let canApply = age >= 18 && (sex === 'f' || sex === 'm')





// for
for (let i = 0; i < 10; i++) {
    console.log(i)
    // i++
}





// for of
// Inhalte durchlaufen
// z.B. jedes Zeichen eines Strings einzeln
let result = ""
for(let char of "Pinguin"){
    console.log(char)
    result = char
}
result








// while
let i = 0
// kopfgesteuert
// i++ => evaluate than calculate
// ++i => calculate than evaluate
while(i++ < 10){
  console.log(i)
}




// fussgesteuert
do{

}while(i++ < 10)



// switch case
switch(a){
    case 1:
        a += 10
    case 2:
    default:
        throw new Error('unhandled case')
}




// try catch
try{
    throw new Error('error here')
}catch(e){ // catch erwischt immer alles, egal was throwed wurde
    console.log(e)
}

// alles kann geworfen werden
throw 1
throw ['any', 3.14]