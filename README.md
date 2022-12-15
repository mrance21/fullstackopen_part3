3.1: Phonebook backend step1
-
Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons
<img width="609" alt="Screen Shot 2022-12-13 at 9 00 51 PM" src="https://user-images.githubusercontent.com/39681478/207486708-7de833ca-06bb-452d-9325-9cd9cc161105.png">

3.2: Phonebook backend step2
-
Implement a page at the address http://localhost:3001/info that looks roughly like this:
<img width="574" alt="Screen Shot 2022-12-13 at 9 01 47 PM" src="https://user-images.githubusercontent.com/39681478/207486829-90e88d34-da74-411d-951a-34c6843dc88b.png">

3.3: Phonebook backend step3
-
Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
If an entry for the given id is not found, the server has to respond with the appropriate status code.

<img width="378" alt="Screen Shot 2022-12-13 at 9 55 46 PM" src="https://user-images.githubusercontent.com/39681478/207494033-f293bd86-d011-4cb5-bbc6-5fcec91e7997.png">

3.4: Phonebook backend step4
-
Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

Test that your functionality works with either Postman or the Visual Studio Code REST client.

<img width="355" alt="Screen Shot 2022-12-13 at 10 03 31 PM" src="https://user-images.githubusercontent.com/39681478/207494911-c61a225a-5621-4876-acd4-11deba536356.png">

3.5: Phonebook backend step5
-
Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.

<img width="273" alt="Screen Shot 2022-12-13 at 10 48 06 PM" src="https://user-images.githubusercontent.com/39681478/207500801-41869f19-5f9f-4e73-99d7-8d415468371f.png">

3.6: Phonebook backend step6
-
Implement error handling for creating new entries. The request is not allowed to succeed, if:

The name or number is missing
The name already exists in the phonebook
Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error.

<img width="424" alt="Screen Shot 2022-12-13 at 11 47 35 PM" src="https://user-images.githubusercontent.com/39681478/207508298-78b3d03e-b1c3-48a9-ad65-8831bcbab5d7.png">

3.7: Phonebook backend step7
-
Add the morgan middleware to your application for logging. Configure it to log messages to your console based on the tiny configuration.

The documentation for Morgan is not the best, and you may have to spend some time figuring out how to configure it correctly. However, most documentation in the world falls under the same category, so it's good to learn to decipher and interpret cryptic documentation in any case.

Morgan is installed just like all other libraries with the npm install command. Taking morgan into use happens the same way as configuring any other middleware by using the app.use command.

<img width="219" alt="Screen Shot 2022-12-14 at 9 56 56 PM" src="https://user-images.githubusercontent.com/39681478/207761863-4ebe18dd-e3c0-4ce0-83ce-e740e5463c58.png">
<img width="304" alt="Screen Shot 2022-12-14 at 9 56 38 PM" src="https://user-images.githubusercontent.com/39681478/207761816-9ec40697-f93a-4819-80b8-d98557771343.png">

3.8*: Phonebook backend step8
-
Configure morgan so that it also shows the data sent in HTTP POST requests:

<img width="410" alt="Screen Shot 2022-12-14 at 10 52 49 PM" src="https://user-images.githubusercontent.com/39681478/207768563-4b89d91e-299d-4441-98ea-eda8ce957595.png">
