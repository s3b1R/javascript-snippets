// 1
let users = [
    {
        name: 'Alex #1',
        score: 10
    },
    {
        name: 'Donnie Darko',
        score: 3
    },
    {
        name: 'Tim Strub',
        score: 12
    },
    {
        name: 'Ali Bengali',
        score: 2
    }
]



// 2
// Variante 1
let topScorer = null
for(let user of users){
    if(topScorer == null || user.score > topScorer.score){
        topScorer = user
    }
}
topScorer



// 3
// Variante 1
// Ohne Array
let list = ''
list += '|Name|Punkte|\n'
list += '|----|------|\n'

for(let user of users){
    list += '|'+ user.name + '|' + user.score + '|' + '\n'
}
console.log(list)


// Variante 2
// Mit Array
let rows = []
rows.push('|Name|Punkte|')
rows.push('|----|------|')

for(let user of users){
    rows.push(['', user.name, user.score, ''].join('|'))
}
list = rows.join('\n')
console.log(list)



// 4
let maxScoreLength = topScorer.score.toString().length
let maxNameLength = 0

for(let user of users){
    maxNameLength = Math.max(maxNameLength, user.name.length)
}
maxNameLength
maxScoreLength



// 5
rows = []
maxNameLength = Math.max('Name'.length, maxNameLength)
maxScoreLength = Math.max('Punkte'.length, maxScoreLength)
rows.push(['', 'Name'.padEnd(maxNameLength), 'Punkte'.padEnd(maxScoreLength), ''].join('|'))
rows.push(['', '-'.repeat(maxNameLength),    '-'.repeat(maxScoreLength),      ''].join('|'))

for(let user of users){
    rows.push(['', user.name.padEnd(maxNameLength), user.score.toString().padEnd(maxScoreLength), ''].join('|'))
}

list = rows.join('\n')
console.log(list)
