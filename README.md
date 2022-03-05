# messagesDispatcher

Welcome to messagesDispatcher. 

The task that was given me consisted of creaing an api from scratch, the api should be able to save messages
into an array and will let the user know if the message that was given to him is a palindrome or not.

1. to run the app on your enviorment you should have node.js and express installed.
2. nodemon is optional.
3. open the file on webstorm / any other ide which you are familier with. 
4. in the terminal write: nodemon MessageDispatcher.js / run the code in other way (if you don't have nodemon on your machine).
   after running the application you can now go to one of the following adresses:
   <br />
   a. http://localhost:3000/  - landing page
   <br />
   b. http://localhost:3000/api - api documentation
   <br />
   c. http://localhost:3000/api/messages - page where messages will appear.
   Please note that at the beggining there are not messages and you will need to post some in order to see them (read documentation)
   <br />
   d. http://localhost:3000/api/messages/:id - specific message (u will need to write the real message id instead of ":id" in the url.


Things that you can do with the API:
(please note that requests that requiere parameters are expected to receive those in JSON foramt only):

POST requests - adds a new message to the array of messages.
<br />
send to http://localhost:3000/api/messages/ with the following parameters:
<br />
1. msgSender - can't contain numbers and has to be non-empty
2. msgSubject - can't contain numbers and has to be non-empty 
3. msgBody - has to have at least a single character (or more)

GET requests -retrive a message from the api (single message / every message).
<br />
in order to get a single message with specific id:
send to http://localhost:3000/api/messages/ID with the ID of the message
<br />
in order to get all the messages:
send to http://localhost:3000/api/messages/

PUT requests - changes existing message according to id.
send to http://localhost:3000/api/messages/ID with the ID of the message with the following parameters:
msgSender - can't contain numbers and has to be non-empty
msgSubject - can't contain numbers and has to be non-empty
msgBody - has to have at least a single character (or more)

DELETE requests - deletes existing message according to id.
send to http://localhost:3000/api/messages/ID with the ID of the message

Few scripts that I prepared for making the check easier for you (please note that the scripts format is bat which means it is good for windows os only):
1.addSevenMessages.bat : Adds 7 prepared messages to the array of messages
2.updateSevenMessages.bat : Updates the first seven messages (according to id 1-7)
3.deleteSevenMessages.bat : Deletes the first seven messages (according to id 1-7)
4. tryToAddBadMessages.bat : has 7 seven messages with errors, if you try to send thoserequests they will not be added to the message array.
5. feel free to use your imagination and use postman / shell to send requests to the api.
