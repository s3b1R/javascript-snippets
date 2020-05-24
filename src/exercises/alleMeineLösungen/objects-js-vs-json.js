// ## 1
// Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl. \
// Sortiere die Liste anhand der Punktezahl aufsteigend.


let users = [
    {
        name: "Hans",
        points: 12
    },
    {
        name: "Gustav",
        points: 75
    },
    {
        name: "Felix",
        points: 35
    },
    {
        name: "Ueli",
        points:25
    }

]

console.log(users)
users.sort((a,b) => a.points - b.points)
console.log(users)

// # 2
// Erstelle einen JSON String der 3 top Scorer. \
// Finde mehrere Varianten, um die Top 3 auszulesen
const topScorers = users.sort((a,b) => b.points - a.points)
let top3 = topScorers.slice(0,3)
top3 = topScorers.filter((_,idx)=> {return idx < 3})
console.log(top3)
const str = JSON.stringify(top3)
console.log(str)

// # 3
// Wandle die Liste der User in eine Liste von Objekten in der Form: `{ content: String, length: Number }` um. \
// Wobei content der Username ist und length die länge des Namens. Sortiere die Liste aufsteigend nach length.

let sortedUsers = users.map(user => ({content: user.name, length: user.name.length}))
sortedUsers.sort((a,b)=> a.length - b.length)
console.log(sortedUsers)

// # 4
// Erstelle eine tabellarisch korrekt ausgerichtete Rangliste der 3 top Scorer, im ASCII Format :).
//
// Format der Ausgabe:
//     ```
// |Name  |Score|
// |------|-----|
// |User 1|   13|
// |Maya  |    9|
// ```
//
// Eigenschaften der Tabelle:
//     - Komplett dynamisch generiert, anhand des users Arrays ;)
// - Spaltenbreite genau nur so breit, dass der längste Text darin Platz.
// - Zeilen absteigend nach Score sortiert
// - Score rechts ausgerichtet, Name links ausgerichtet

let listTop3 = users.sort((a,b) => b.points - a.points).slice(0,3)
let nameRow = "Name".length
let pointsRow = "Punkte".length
let table = ""

listTop3.forEach(user => {
    if(user.name.length > nameRow){
        nameRow = user.name.length
    }
    if(user.points.length > pointsRow){
        pointsRow = user.points.length
    }
})

table += "|" + "Name".padEnd(nameRow) + "|" + "Punkte".padStart(pointsRow) + "|\n"
table += "|" + "-".repeat(nameRow) + "|" + "-".repeat(pointsRow) + "|\n"
listTop3.forEach(user => table += "|" + user.name.padEnd(nameRow) + "|" + user.points.toString().padStart(pointsRow) + "|\n")
console.log(table)