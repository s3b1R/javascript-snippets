export class Store {
    constructor(items){
        this.items = items || []
    }

    add(item){
        this.items.push(item)
    }

    remove(item){
        let pos = this.items.indexOf(item)
        if(pos > -1){
            this.items.splice(pos, 1)
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
    }
}