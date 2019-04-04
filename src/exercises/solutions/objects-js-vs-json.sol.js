let users = [
    {
        name: 'Alex Honold',
        nickname: 'Alex #1',
        score: 12
    },
    {
        name: 'Donnie Darko',
        nickname: 'DJ Terrible',
        score: 3
    },
    {
        name: 'Tim Strub',
        nickname: 'Stubi',
        score: 10
    },
    {
        name: 'Ali Bengali',
        nickname: 'AliG',
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
const mappedAndSorted = users
    .map(user => ({
        content: user.name,
        length: user.name.length
    }))
    .sort((a, b) => a.length - b.length)



// 4
function asciiTable4(){
    function cell(content, colMaxWidth, filler = ' ', align = 'left'){
        let stringContent = content.toString();

        if(align === 'left'){
            return stringContent.padEnd(colMaxWidth, filler)
        }else if (align === 'right'){
            return stringContent.padStart(colMaxWidth, filler)
        }
    }

    function row(...cells){
        return ['', ...cells, ''].join('|')
    }

    function userRow(user, nameColWidth, scoreColWidth){
        const userCell = cell(user.name, nameColWidth);
        const scoreCell = cell(user.score, scoreColWidth, ' ', 'right');
        return row(userCell, scoreCell);
    }

    function headerRows(nameColWidth, scoreColWidth){
        const nameLabel = cell('Name', nameColWidth)
        const nameSpacer = cell('', nameColWidth, '-')

        const scoreLabel = cell('Score', scoreColWidth)
        const scoreSpacer = cell('', scoreColWidth, '-')

        return [row(nameLabel, scoreLabel), row(nameSpacer, scoreSpacer)];
    }

    function maxLength(arr, prop){
        return arr
            .map(item => item[prop].toString().length)
                .sort((a, b) => a - b)
                .pop()
    }

    const nameColWidth = Math.max('Name'.length, maxLength(users, 'name'));
    const scoreColWith = Math.max('Score'.length, maxLength(users, 'score'));
    users.sort((a, b) => b.score - a.score)
    const list = [
            ...headerRows(nameColWidth, scoreColWith),
            ...users.map(user => userRow(user, nameColWidth, scoreColWith))
        ]
        .join('\n');

    console.log(list)
}
asciiTable4()



// 5
function asciiTable5(){
    function cell(content, colMaxWidth, filler = ' ', align = 'left'){
        let stringContent = content.toString();

        if(align === 'left'){
            return stringContent.padEnd(colMaxWidth, filler)
        }else if (align === 'right'){
            return stringContent.padStart(colMaxWidth, filler)
        }
    }

    function row(...cells){
        return ['', ...cells, ''].join('|')
    }

    function findMaxLength(arr, prop){
        return arr
            .map(item => item[prop].toString().length)
            .sort((a, b) => a - b)
            .pop()
    }

    function headerRows(colSpecs){
        return [
            row(...colSpecs.map(colSpec => {
                const capitalizedColumnHeader = colSpec.colName[0].toUpperCase() + colSpec.colName.slice(1);
                return cell(capitalizedColumnHeader, colSpec.maxLength)
            })),
            row(...colSpecs.map(colSpec => {
                return cell('', colSpec.maxLength, '-')
            }))
        ]
    }

    function generateAsciiTable(items = [], sortBy){
        if(items.length === 0) return ''

        items.sort((a, b) => b[sortBy] - a[sortBy])

        const colSpecs = Object.getOwnPropertyNames(items[0]).map(colName => {
            let maxLength = Math.max(colName.length, findMaxLength(items, colName))
            return {
                colName,
                maxLength
            }
        })

        return [
            ...headerRows(colSpecs),
            ...items.map(user => {
                const userCells = colSpecs.map(colSpec => {
                    const cellContent = user[colSpec.colName]
                    const align = typeof cellContent === 'number' ? 'right' : 'left'
                    return cell(cellContent, colSpec.maxLength, ' ', align)
                })
                return row(...userCells);
            })
            ].join('\n')
    }

    console.log(generateAsciiTable(users, 'score'));
}
asciiTable5()