// Primitives
// Haben keine Methoden
let str = ''
let num = 12
let arr = []
let boo = true
let undef
let nul = null

// Objects
// Wrapping primitive types in objects, aka "Boxing"
str = new String('')
num = new Number(12)
arr = new Array()
boo = new Boolean()

// Warum kann man auf dem primitiven string '' also trotzdem Methoden wie z.B. split aufrufen?
let chars = 'abc'.split('')
// Weil JS zur Laufzeit primitve Typen kurzzeitig "boxed", d.h. in ein Objekt umwandelt via new String(''),
// die Methode ausführt und dann das Objekt wieder löscht.
// Dieses Vorgehen gibt es auch in anderen Sprachen, z.B. C# oder Java.


// Literale Notation vs Konstruktoren
str = '' // => literal
str = new String() // => Konstruktor

console.log(typeof str)
console.log(typeof '')

let equal = typeof '' === new String()
equal

equal = typeof '' === typeof ''
equal
equal = typeof new String() === typeof new String()
equal

// => NIE new XY() verwenden, wenn es sich um einen Wrapper für primitive Typen handelt


// JavaScript Objects
const user = {
    permission: {
        read: true,
        write: false
    },
    hobbies: ['grill', 'chill'],
    person: {
        age: 18,
        birthdate: new Date(1973, 0, 24),
        firstname: '',
        lastname: ''
    },
    addresses: {
        postal: {
            street: '',
            zip: '74-334',
            country: 'FR'
        },
        residence: {
            street: '',
            zip: '7306',
            country: 'CH'
        }
    }
}

console.log(user.hobbies)
console.log(user.hobbies[0])
console.log(user['person'].age)

// Date Object toString method output
console.log(user['person']['birthdate'])
// Date Object getFullYear method output
console.log(user['person']['birthdate'].getFullYear())

const json = JSON.stringify(user)
console.log(json)

const fromJson = JSON.parse(json)

// Array kennt sowohl JSON als auch JavaScript => restore JS primitive type
console.log(fromJson.hobbies)

// Date kennt nur JS, d.h. beim serialisieren wurde aus dem JS Date ein JSON String
// beim deserialisieren wurde aus dem JSON String ein JS String
console.log(fromJson['person']['birthdate'])
console.log(typeof fromJson['person']['birthdate'])




