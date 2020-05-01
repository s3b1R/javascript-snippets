// 'use strict' // optional, weil im Browser via <script type="module" geladen

// nicht exportiert => kein Zugriff von aussen
function getFormattedDate(){
    return new Date().toISOString()
}

export class Logger {
    constructor(writer){
        this.writer = writer
    }
    warn(msg){
        this.writer('WARNING ' + getFormattedDate() + '\n' + msg)
    }
    log(msg){
        this.writer('LOG ' + getFormattedDate() + '\n' + msg)
    }
}

export const PI=3.141592653
