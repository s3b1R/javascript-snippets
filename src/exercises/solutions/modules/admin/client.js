import {Person, Store} from './admin.module.js'

let p1 = new Person('Agatha', 'Kurnikova')

let store = new Store([])

store.add(p1)
store.add({
    name: 'Hans', vorname: 'Meier'
})
console.table(store.items)

store.remove(p1)

let pWithHa = store.findAll((p) => p.name.startsWith('Ha'))
console.log('starts with Ha:', pWithHa[0])

store.remove(pWithHa.pop())

console.log(store.items.length)
