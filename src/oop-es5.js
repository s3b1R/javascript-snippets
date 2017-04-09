'use strict'
// singleton
let validator = {
    valid: true,
    validate: function(input){
        this.valid = input.indexOf('test') !== -1
        return this.valid
    }
}
let r = validator.validate('buddha')
validator


// Konstruktor Funktion
function Auto(brand){
    this.distance = 0
    this.brand = brand

    // erstelle für jedes auto ein neues funktionsobjekt
    this.drive = function(distance){
        this.distance += distance
    }
}

// Besser: erstelle die drive Funktion einmal im Prototyp Objekt,
// alle Instanzen von Auto verwenden dann diese Funktion
// Auto.prototype.drive = function(distance){
//     this.distance += distance;
// }

let a1 = new Auto('Ford')
let a2 = new Auto('Tesla')
a1.drive(10)
a2.drive(340)
