// Definiere mehrere Hände.
// Jede Hand hat eine Höhe und Breite.

// Ansatz ohne Objekte
handHeight = "10cm"
handWidth = "8cm"

hand2Height = "7cm"
hand2Width = "5cm"


// => Viel Tipparbeit. Nicht in Array speicherbar


const hand = {
    height: "10cm",
    width: "8cm"
}

const hand2 = {
    height: "7cm",
    width: "5cm"
}

const hände = [hand, hand2]


// Zugriff auf Eigenschaften
let heightOfHand = hand.height
heightOfHand = hand['height']

let propertyName = 'width'
let widthOfHand = hand[propertyName]


// Objekt verändern
hand.farbe = 'beige'

hand2.farbe = 'brown'
hand2.width= '6cm'


// Beispiel:
// Finde alle Hände mit Farbe beige
let beigeHände = []
for(let item of hände){
    if(item.farbe === 'beige')
        beigeHände.push(item)
}
beigeHände



// Verschachtelte Objekte
const person = {
    name: "albert",
    children: []
}

const child1 = {
    name: "lucy",
    height: "2m",
    weight: "86kg",
    father: person
}

person.children.push(child1)