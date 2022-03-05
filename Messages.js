const Message = require("./Message");

class Messages{
    #id;
    #privateArray;

    constructor() {
        this.#privateArray = [];
        // load messages from folder, other class

        // running id
        this.#id = 1;
    }
    add(message){
        const ob = {id:this.#id , message}
        this.#id++;
        this.#privateArray.push(ob);
    }
    remove(messageId){
        const message = this.#privateArray.find(c => c.id === parseInt(messageId));
        if(!message) return false;

        // Delete and return true
        const index = this.#privateArray.indexOf(message)
        this.#privateArray.splice(index,1)
        return true;
    }
    get(messageId){
        const message = this.#privateArray.find(c => c.id === parseInt(messageId));
        if(!message) return null;
        return message;
    }
    getAll(){
        return this.#privateArray;
    }
    set(messageId, message){
        // get message
        let boolAnswer = this.remove(messageId);
        if(boolAnswer) {
            this.addForSet(message,messageId);
        }
        return boolAnswer;
    }
    addForSet(message,messageId){
        const ob = {id:parseInt(messageId) , message}
        this.#privateArray.push(ob);
    }
}

module.exports = Messages;