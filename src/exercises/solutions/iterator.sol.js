'use strict'
// Variante 1
function ReverseIterator(arr){
    this[Symbol.iterator] = ()=>{
        let idx = arr.length
        return {
            next(){
                return {
                    done: --idx < 0,
                    value: arr[idx]
                }
            }
        }
    }
}

// Variante 2
// Array implementiert ebenfalls das iterator Protokoll.
// function ReverseIterator(arr){
//     return arr.reverse()
// }

// Statische factory Methode, um nicht new ReverseIterator… verwenden zu müssen.
// Factory Methoden, wie .create, gelten als bessere Praxis, als new.
ReverseIterator.create = (arr)=>{
    return new ReverseIterator(arr)
}

for(let x of ReverseIterator.create([1,2,3])){
    console.log(x)
}