import { Person, Store } from './admin.module.js';

let person1 = new Person('Muster', 'Hans')

let store = new Store([])

store.add(person1)

let person2 = new Person("Müller", "Frieda")
store.add(person2)

store.add({lastName: "Fischer", firstName: "Mirco"})

console.table(store.items)

store.remove(person1)

console.table(store.items)

let search = store.findAll((p) => p.lastName.startsWith('Fis'))
console.log("Suche ergibt: ", search[0])


store.remove(search.pop())

console.table(store.items)
console.log(store.items.length)

