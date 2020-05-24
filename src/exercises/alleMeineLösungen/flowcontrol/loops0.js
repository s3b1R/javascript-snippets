// Schreibe ein Programm, welches jedes Zeichen eines Strings einzeln ausgibt, Komma getrennt.
//     z.B. aus `"Pinguin"` wird `"P,i,n,g,u,i,n"`
//
// Schreibe zwei Varianten:
//     - eine ohne Schlaufen zu verwenden
// - eine mit einer Schlaufe

let orig = "Pinguin"

// Variante ohne Schlaufe mit String Concetanation
console.log("P"+","+"i"+","+"n"+","+"g"+","+"u"+","+"i"+","+"n")

//Variante loop und substr

let result = ""
for(let char of orig){
    result += char
    result += ","
}
let pingu = result.substr(0, result.length-1)
console.log(pingu)

//Variante loop und if else

let ergebnis = ""
for (let c of orig){
    if(ergebnis==="")
    {
        ergebnis += c
    }else {
        ergebnis += ","
        ergebnis += c
    }
}
console.log(ergebnis)