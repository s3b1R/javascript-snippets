'use strict'
// Flow Control in JavaScript

// if
let a = 1
let b
if (a){
    b = 2
}else b = 0

b = a ? 2 : undefined

// for
for(let i = 0; i<10; i++){

}

// while
let i = 0
// kopfgesteuert
while(i++ < 10){

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