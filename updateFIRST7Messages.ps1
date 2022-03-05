invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/1" -body '{"msgSender":"Best Sender","msgSubject":"first message","msgBody":"It is updated yet?"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/2" -body '{"msgSender":"Just A Sender","msgSubject":"second message","msgBody":"YES IT IS!"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/3" -body '{"msgSender":"Another One","msgSubject":"third message","msgBody":"III"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/4" -body '{"msgSender":"I Am runing out of sender names here","msgSubject":"fourth message","msgBody":"PALIILAP?"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/5" -body '{"msgSender":"Running*","msgSubject":"fifth message","msgBody":"ABA"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/6" -body '{"msgSender":"Did you know that sender name can not contain a number?","msgSubject":"SABAABAS","msgBody":"It is updated yet?"}' -ContentType 'application/json'
invoke-webrequest -method Put -uri "http://localhost:3000/api/messages/7" -body '{"msgSender":"Speical characters are fine","msgSubject":"seventh message","msgBody":"112211"}' -ContentType 'application/json'

