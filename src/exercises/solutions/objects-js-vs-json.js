let users = [
    {
        name: 'Alex #1',
        score: 12
    },
    {
        name: 'Dani Darko',
        score: 3
    },
    {
        name: 'Tim Strub',
        score: 10
    },
    {
        name: 'Ali Bengali',
        score: 2
    }
]

// 1
users
    .sort(function(a, b) {
        return a.score - b.score
    })
    .forEach(function(u){
        console.log(u)
    })



// 2
const highscore = users
    .sort(function(a,b) {
        return b.score - a.score
    })
// Varianten:
let topScore = [highscore[0], highscore[1], highscore[2]]
topScore = highscore.slice(0, 3)
topScore = highscore.filter(function(_, idx){ return idx < 3})
topScore = highscore.splice(0, 3)
console.log(topScore)

const json = JSON.stringify(topScore)
console.log(json)


