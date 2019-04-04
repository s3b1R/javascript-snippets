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

for(const user of users){
    const userCells = ['', user.name, user.score, ''];
    const userRow = userCells.join('|');
    rows.push(userRow)
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

const paddedNameHeader = 'Name'.padEnd(maxNameLength)
const paddedScoreHeader = 'Punkte'.padEnd(maxScoreLength)

const nameBorder = '-'.repeat(maxNameLength);
const scoreBorder = '-'.repeat(maxScoreLength);

let headerCells = ['', paddedNameHeader, paddedScoreHeader, ''];
let borderCells = ['', nameBorder,       scoreBorder,       ''];

let headerRow = headerCells.join('|');
let borderRow = borderCells.join('|');

rows.push(headerRow)
rows.push(borderRow)

for(const user of users){
    const paddedName = user.name.padEnd(maxNameLength)
    const paddedScore = user.score.toString().padEnd(maxScoreLength)
    const userCells = ['', paddedName, paddedScore, '']
    const userRow = userCells.join('|')

    rows.push(userRow)
}

list = rows.join('\n')
console.log(list)
