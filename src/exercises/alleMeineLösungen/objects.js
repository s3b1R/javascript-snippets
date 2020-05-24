// ## 1
// Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl.

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
    }
]

console.log(users)

// ## 2
// Finde den User mit der höchsten Punktezahl

let winnerPoints = 0
let winnerName =""

for(hs of users){
    if(hs.points > winnerPoints){
        winnerPoints = hs.points
        winnerName = hs.name
    }

}
console.log(winnerName, winnerPoints)


// ## 3
// Gib eine Liste der User aus, im ASCII Format. \
// Das heisst verwende nur einfache Zeichen, um die Liste zu erstellen.

let list = ""
list += "|Name|Punkte|\n"
list += "|----|------|\n"
for(usr of users){
    list += usr.name + "|" + usr.points + "|" +"\n"
}
console.log(list)


// ## 4
// Finde die Länge des längsten Namen, sowie die Länge der höchsten Punktezahl.

let nameLength = 0
let pointsLength = 0
for(usr of users){
    if(usr.name.length > nameLength){
        nameLength = usr.name.length
    }
    if(usr.points.toString().length > pointsLength){
        pointsLength = usr.points.toString().length
    }
}
console.log("Längster Name: " + nameLength + "\n" + "Längste Punktzahl: " + pointsLength)



//     ## 5
// Mache jede Spalte so breit, wie die entsprechende maximale Länge dessen Inhalt. \
// _Achtung_: Der Spaltentitel muss ebenfalls berücksichtigt werden.
//
//     Hinweis: Suche auf MDN nach padEnd und repeat

// |Name  |Punkte|
// |------|------|
// |Hans  |8     |
// |Martin|12    |

let nameRow = "Name".length
let pointsRow = "Punkte".length
let scores = ""

for(usr of users){
    if(usr.name.length > nameRow){
        nameRow = usr.name.length
    }
    if(usr.points.toString().length > pointsRow){
        pointsRow = usr.points.toString().length
    }
}
scores += "|" + "Name".padEnd(nameRow) + "|" + "Punkte".padEnd(pointsRow) + "|\n"
scores += "|" + "-".repeat(nameRow) + "|" + "-".repeat(pointsRow) + "|" + "\n"
for(u of users){
    scores += "|" + u.name.padEnd(nameRow) + "|" + u.points.toString().padEnd(pointsRow) + "|" +"\n"
}

console.log(scores)


