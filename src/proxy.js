'use strict'

const l = console.log

const methodProxy = {
    // proxy für lesezugriff auf eine property (function, number, string)
    // target: zielobjekt auf dem die property definiert ist
    // key: name der property
    get: function(target, key) {
        let value = target[key]
        if(typeof value != 'function'){
            return value
        }else{
            return function(...args){
                l('proxying', value.name)
                // rufe funktion auf, setze this auf zielobjekt
                // d.h. beim erneuten aufruf einer funktion wird der proxy nicht getriggert
                return value.apply(target, args)
            }
        }
    }
};

const obj1 = { doit: () => console.log, delegateCall: function(){this.doit('delegating')} };
const proxiedObj1 = new Proxy(obj1, methodProxy);
proxiedObj1.doit('abc')
proxiedObj1.delegateCall('abc') // ruft doit direkt auf, ohne proxy



l('--------Class---------')



class EntryMethodProxy {
    get(target, propertyKey) {
        let propertyValue = target[propertyKey]
        let proxy = this
        if(typeof propertyValue != 'function'){
            return proxy.propertyProxy(propertyValue, target, propertyKey)
        }else{
            return function(...args){
                return proxy.functionProxy(propertyValue, target, args)
            }
        }
    }
    // default implementation für funktion proxy
    functionProxy(fn, target, args){
        l('proxying', fn.name)
        return fn.apply(target, args)
    }
    // default implementation für property proxy
    propertyProxy(value, target, propertyKey){
        l('proxying', propertyKey)
        return value
    }
};

const obj = { doit2: () => console.log, pi: 3.14159 };
const proxiedObj = new Proxy(obj, new EntryMethodProxy());
proxiedObj.doit2('abc')
proxiedObj.pi



l('--------Database Access---------')



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
    functionProxy(fn, target, args){
        if(fn.name === 'write'){
            if(target.user !== 'admin'){
                throw new Error('not authorized')
            }
            return super.functionProxy(fn, target, args)
        }
        return super.functionProxy(fn, target, args)
    }
}

const db = new MySql('admin')
const proxiedDb = new Proxy(db, new DBAccessProxy())
proxiedDb.read()
proxiedDb.write()
