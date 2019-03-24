let users = [
    {
        name: 'Alex #1',
        score: 12
    },
    {
        name: 'Donnie Darko',
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
// Achtung: die sort Methode ändert den Inhalt des Arrays direkt.
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
// Achtung: die splice Methode verändert den Inhalt des Arrays direkt.
//topScore = highscore.splice(0, 3)
console.log(topScore)

const json = JSON.stringify(topScore)
console.log(json)


// 3
function cell(content, colMaxWidth, filler = ' ', align = 'left'){
    let stringContent = content.toString();
    const minWidth = stringContent.length;
    const colWidth = Math.max(minWidth, colMaxWidth)
    const fillCount = colWidth - minWidth;

    if(align === 'left'){
        return stringContent + filler.repeat(fillCount)
    }else if (align === 'right'){
        return filler.repeat(fillCount) + stringContent
    }
}

function userRow(user, nameColWidth, scoreColWidth){
    return '|'+cell(user.name, nameColWidth)+'|'+cell(user.score, scoreColWidth, ' ', 'right')+'|';
}

function headerRow(nameColWidth, scoreColWidth){
    const nameLabel = cell('Name', nameColWidth)
    const nameSpacer = cell('', nameColWidth, '-')

    const scoreLabel = cell('Score', scoreColWidth)
    const scoreSpacer = cell('', scoreColWidth, '-')

    return '|'+nameLabel+'|'+scoreLabel+'|\n'+'|'+nameSpacer+'|'+scoreSpacer+'|';
}

function maxUsernameLength(users){
    return users.map(user => user.name.length).sort((a, b) => a - b).pop()
}

function maxScoreLength(users){
    return users.map(user => user.score.toString().length).sort((a, b) => a - b).pop()
}

const nameColWidth = Math.max('Name'.length, maxUsernameLength(users));
const scoreColWith = Math.max('Score'.length, maxScoreLength(users));
users.sort((a, b) => b.score - a.score)
const list = [
    headerRow(nameColWidth, scoreColWith),
    ...users.map(user => userRow(user, nameColWidth, scoreColWith))]
    .join('\n');

console.log(list)