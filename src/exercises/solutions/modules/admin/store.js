export class Store {
    constructor(items){
        this.items = items || []
    }

    add(item){
        this.items.push(item)
    }

    remove(item){
        let itemIdx = this.items.indexOf(item)
        if(itemIdx > -1){
            this.items.splice(itemIdx, 1)
        }
    }

    findAll(matcher){
        const matches = []
        for(let item of this.items){
            if(matcher(item)){
                matches.push(item)
            }
        }
        return matches

        // funktionaler ansatz
        // return this.items.filter(matcher)
    }
}
