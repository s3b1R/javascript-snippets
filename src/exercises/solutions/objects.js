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
let topScorer = null
for(let user of users){
    if(topScorer == null || user.score > topScorer.score){
        topScorer = user
    }
}
topScorer