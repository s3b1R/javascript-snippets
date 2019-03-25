// Literale Notation
let obj = {
    items: [],
    rootProperty: [],
    add(item) {
        // this ist eine Referenz auf obj
        this.items.push(item)
    }
}


// API für Objekterstellung via Deskriptoren
obj = Object.create(null)
Object.defineProperty(obj, 'items', {
    enumerable: false,
    writable: false,
    value: []
})

Object.defineProperty(obj, 'rootProperty', {
    enumerable: true,
    writable: false,
    value: []
})

obj.add = function(item){
    // this ist eine Referenz auf obj
    this.items.push(item)
}

// --------------------------------------------------------------------------
// Verwendung

obj.add(1)
// selber Effekt:
//obj.items = [1]
console.log(obj.items)

// keys => enumerable, getOwnPropertyNames => all
console.log(Object.keys(obj), Object.getOwnPropertyNames(obj))


let objSub = Object.create(obj)
console.log(Object.keys(objSub), Object.getOwnPropertyNames(objSub))

// for in => enumerable properties inkl prototype chain
for(let p in objSub){
    console.log(p)
}

// Alle Elemente
for(let p of [1,2,3]){
    console.log(p)
}
