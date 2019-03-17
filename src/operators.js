// == vs ===

// equality
let a
a = '0' == 0
a = [] == ''
a = [] == 0
a = [0] == 0
a = false == []
a = false == 0
a = new Boolean(false) ? 't' : 'f'
a = new Boolean(false) == false

// logical
// evaluiere solange bis erster true => weisse den zu
a = 0 || 200 || alert('hi')

// evaluiere solange bis erster false ist => weisse den zu
a = 200 && 0 && alert('hi')

// example:
let age = 10
let sex = 'm'
let canEnter = age >= 18 && sex === 'f'
let answer = (canEnter && 'enter') || 'stay away'


// teste ersten OR operand
    // teste obj => truethy
    // teste obj.opt1 truethy
// erster operand true => brich ab
// weisse wert von zuletzt evaluiertem operand (obj.opt1) zu
let obj = { opt1: '3434' }
let opt1Value = (obj && obj.opt1) || 'opt1DefaultValue'
let tryIt = _=>false, fail = _=>'fail'
a = tryIt() || fail()
