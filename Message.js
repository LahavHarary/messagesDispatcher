
class Message{
    #err;
    constructor(msgSender,msgSubject,msgBody) {
        const senderValid = validateSender(msgSender);
        const subjectValid = validateSubject(msgSubject);
        const bodyValid = validateBody(msgBody);
        this.#err = null;

        if (subjectValid == null && bodyValid == null && senderValid == null) {
            this.msgSender = msgSender;
            this.msgSubject = msgSubject;
            this.msgBody = msgBody;
            this.isPalindrom = checkPali(msgBody);
        } else {
            let errorMsg = ""
            if(senderValid != null) errorMsg += senderValid
            if(subjectValid != null) errorMsg += subjectValid
            if(bodyValid != null) errorMsg += bodyValid
            this.#err = errorMsg;
        }
    }

    tryGetError()
    {
        if(this.#err != null){
            return this.#err
        }
        return null;
    }

}
// Validation
function validateSender(msgSender){
    let errorMsg = null;
    //check if msgSender is empty and if it contains digits.
    if(checkIfEmpty(msgSender)) errorMsg = "msgSender can't be empty. ";
    if(checkIfDigits(msgSender)){
      if(errorMsg == null){
          errorMsg = "msgSender can't contain numbers. ";
      }
      else{
          errorMsg += "msgSender can't contain numbers. ";
      }
    }

    return errorMsg;
}
function validateSubject(msgSubject){
    let errorMsg = null;
    if(checkIfEmpty(msgSubject)) errorMsg = "msgSubject can't be empty. ";
    if(checkIfDigits(msgSubject)){
        if(errorMsg == null){
            errorMsg = "msgSubject can't contain numbers. ";
        }
        else{
            errorMsg += "msgSubject can't contain numbers. ";
        }
    }
    return errorMsg;
}
function validateBody(msgBody){
    let errorMsg = null;
    if(msgBody.length < 1){
        errorMsg = "msgBody's length can't be less then 1. ";
    }
    return errorMsg;
}

// Checkers
function checkPali(str){
    // string size equals one means that it is a Palindrome.
    if(str.length == 1){
        return true;
    }

    /*
        If the size is different than one we will check if the string is
        equal to its reverse.

        NOTE: reverse method only works on array.
         so we are using the split function to create an array
          reverse it and later on joins it together to create a string.
    */
    const reverseString = str.split("").reverse().join("");
    let booleanResult;

    reverseString == str ? booleanResult = true : booleanResult = false;
    return booleanResult
}
function checkIfDigits(str){

    for(let i=0;i<str.length;i++){
        if('0' <= str[i] && str[i] <= '9'){
            return true;
        }
    }
    return false;
}
function checkIfEmpty(str){
    if(str.length == 0){
        return true;
    }
    return false;
}

module.exports = Message;