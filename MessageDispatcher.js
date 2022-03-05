const express = require('express');
const app = express();
const Message = require("./Message");
const Messages = require("./Messages");
app.use(express.json());

const messages = new Messages();

/***************************************************************************
 * Post method:
 * receives data from the user
 * if the data has a problem it will present it to the user and won't do anything else.
 * if the data is ok than:
 * it will convert it into a message and later on will wrap it in a dictionary.
 ***************************************************************************/
app.post('/api/messages',(req,res) =>{
    const message = new Message(req.body.msgSender,req.body.msgSubject,req.body.msgBody);

    if(message.tryGetError() == null){
        messages.add(message);
        res.send(message);
    }
    else{
        return res.status(400).send(message.tryGetError());
    }
});

/***************************************************************************
 *  Get requests:
 *
 *  Total 4 kinds.
 *  first - will open a default page that welcomes the user to the api.
 *  second - will explain a little about the api usage
 *  third - will show all the messages currently in the program.
 *  fourth - will find a message according to the message id.
 ***************************************************************************/
app.get('/',(req,res) =>{
    // Opening page
    res.send("Welcome to my API: " +
        "<br> <br>" +
        "The task that was given me consisted of creaing an api from scratch, the api should "+
        "be able to save messages" +
        "<br>"+
        " into an array and will let the user know if the message that "+
        "was given to him is a palindrome or not."+
        "<br> <br>" +
        "to see the messages in the api go to: http://localhost:3000/api/messages" +
        "<br>"+
        "Please note that at the beggining there are not messages and you will need to " +
        "post some in order to see them (read documentation)"+
        "<br> <br>" +
        " to see the api documentation go to:  http://localhost:3000/api"
    );
});
app.get('/api',(req,res) =>{
    // Simple explanation about the api
    res.send("Things that you can do with the API:" +
        "<br>"+
        " (please note that requests " +
        "that requiere parameters are expected to receive those in JSON foramt only):"+
        /************************************************************************/
        "<br> <br>"+
        "POST requests - adds a new message to the array of messages. " +
        "<br>"+
        "send to http://localhost:3000/api/messages/ with the following parameters:" +
        "<br>"+
        "msgSender - can't contain numbers and has to be non-empty"+
        "<br>" +
        "msgSubject - can't contain numbers and has to be non-empty"+
        "<br>"+
        "msgBody - has to have at least a single character (or more)"+
        /************************************************************************/
        "<br> <br>" +
        "GET requests -retrive a message from the api (single message / every message)." +
        "<br>" +
        "in order to get a single message with specific id: "+
        "<br>" +
        "send to http://localhost:3000/api/messages/ID with the ID of the message"+
        "<br>" +
        "in order to get all the messages: "+
        "<br>" +
        "send to http://localhost:3000/api/messages/ "+
        /************************************************************************/
        "<br> <br>" +
        "PUT requests - changes existing message according to id." +
        "<br>"+
        "send to http://localhost:3000/api/messages/ID with the ID of the message with the following parameters:"+
        "<br>"+
        "msgSender - can't contain numbers and has to be non-empty"+
        "<br>" +
        "msgSubject - can't contain numbers and has to be non-empty"+
        "<br>"+
        "msgBody - has to have at least a single character (or more)"+
        /************************************************************************/
        "<br> <br>" +
        "DELETE requests - deletes existing message according to id."+
        "<br>"+
        "send to http://localhost:3000/api/messages/ID with the ID of the message"+
        /************************************************************************/
        "<br> <br>"+
        "Few scripts that I prepared for making the check easier for you " +
        "(please note that the scripts format is bat which means it is good " +
        "for windows os only):"+
        "<br>"+
        "1.addSevenMessages.bat : Adds 7 prepared messages to the array of messages"+
        "<br>"+
        "2.updateSevenMessages.bat : Updates the first seven messages (according to id 1-7)"+
        "<br>"+
        "3.deleteSevenMessages.bat : Deletes the first seven messages (according to id 1-7)"+
        "<br>"+
        "4. tryToAddBadMessages.bat : has 7 seven messages with errors, if you try to send those" +
        "requests they will not be added to the message array."+
        "<br>"+
        "5. feel free to use your imagination and use postman / shell to send requests to the api."
    );
});
app.get('/api/messages',(req,res) => {
    // Show messages
    res.send(messages.getAll());
})
app.get('/api/messages/:id', (req,res) =>{
    // Find message according to id
    const message = messages.get(req.params.id);
    if(!message) res.status(404).send('The message with the given ID was not found');
    res.send(message);
})

/***************************************************************************
 *  Put requests:
 *  Looks for the course, if it doesn't exist the method will return 404 (resource
 *  not found).
 *  if it does exist and there is an  error with something it will return 400.
 *  if everything went well and 400 / 404 didn't return from the method
 *  it means that we can update the message.
 *
 ***************************************************************************/
app.put('/api/messages/:id',(req,res) => {
    const message = new Message(req.body.msgSender,req.body.msgSubject,req.body.msgBody);
    if(message.tryGetError() == null){
        messages.set(req.params.id,message);
        res.send(message);
    }
    else{
        return res.status(400).send(message.tryGetError());
    }
});

/***************************************************************************
 *  Delete requests:
 ***************************************************************************/
app.delete('/api/messages/:id',(req,res) => {

    // Look up the course
    // Not existing, return 404
    const isDeleted = messages.remove(req.params.id);
    if(!isDeleted) return res.status(404).send('The message with the given ID was not found');
    res.send("message number " +req.params.id +" was deleted.");
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ',port, ' ...'));
