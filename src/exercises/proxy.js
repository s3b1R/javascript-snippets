'use strict'

const l = console.log


class Database{
    constructor(user){
        this.user = user
    }
    read(){}
    write(){}
}

class MySql extends Database{
    read(){ l('read mysql') }
    write(){ l('write mysql') }
}

class DBAccessProxy extends EntryMethodProxy{
    // TODO
}

const db = new MySql('admin')
const proxiedDb = new Proxy(db, new DBAccessProxy())
proxiedDb.read()
proxiedDb.write()

// erwarteter output:
/*
proxying read​​​​​
​​​​​read mysql​​​​​
​​​​​proxying write​​​​​
​​​​​write mysql​​​​​
*/

const db1 = new MySql('notAnAdmin')
const proxiedDb1 = new Proxy(db1, new DBAccessProxy())
proxiedDb1.read()
proxiedDb1.write()

// erwarteter output:
/*
​​​​​proxying read​​​​​
​​​​​read mysql​​​​​
proxiedDb1.write() throws not authorized
*/