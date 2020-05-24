// Gegeben ist eine beliebige Zeichenkette.
const str = "Hallo du, wie geht es dir?"

// 7.1
// Konvertiere jedes zweite Zeichen zum entsprechenden Grossbuchstaben.
let up = ""
for(let x = 0; x < str.length; x++){
    up += str.charAt(x)
    x++
    up += str.charAt(x).toUpperCase()
}
console.log(up)

// 7.2
// Ersetze alle Konsonanten durch die entsprechenden Selbstlaute. \
// Zum Beispiel aus einem "p" wird "pe", aus "c" wird "ce", aus "k" wird "ka" etc.
let vovel = ""
for(let x = 0; x < str.length; x++){
    if(str.charAt(x)==='H'){
        vovel += "Ha"
    }else if(str.charAt(x)==='l'){
        vovel += "el"
    } else if(str.charAt(x)==='d'){
        vovel += "de"
    } else if(str.charAt(x)==='w'){
        vovel += "we"
    } else if(str.charAt(x)==='g'){
        vovel += "ge"
    } else if(str.charAt(x)==='h'){
        vovel += "ha"
    } else if(str.charAt(x)==='t'){
        vovel += "te"
    } else if(str.charAt(x)==='s'){
        vovel += "es"
    } else if(str.charAt(x)==='r'){
        vovel += "er"
    } else {
        vovel += str.charAt(x)
    }

}
console.log(vovel)

// 7.3
// Gib die Zeichenkette rückwärts aus. \
// z.B. aus "Hallo du" wird "ud ollaH".
let backChars = ""
let chars = str.split("")
let tmp= []
for(let c of chars){
    tmp.unshift(c)
    backChars = tmp.join("")
}

console.log(backChars)

// 7.4
// Gib die Wörter der Zeichenkette rückwärts aus. \
// z.B. aus "Hallo du, wie geht es dir?" wird "dir? es geht wie du, Hallo"

let backWords = ""
let words = str.split(" ")
let temp = []

for (let w of words){
    temp.unshift(w)
    backWords = temp.join(" ")
}

console.log(backWords)
