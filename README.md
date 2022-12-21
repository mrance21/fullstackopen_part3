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

3.9 phonebook backend step9
-
Make the backend work with the phonebook frontend from the exercises of the previous part. 

<img width="204" alt="Screen Shot 2022-12-16 at 9 51 39 PM" src="https://user-images.githubusercontent.com/39681478/208220367-d26e222c-3cad-45c4-aaaf-d81c04d60eaf.png">
<img width="183" alt="Screen Shot 2022-12-16 at 9 52 05 PM" src="https://user-images.githubusercontent.com/39681478/208220401-d652d1bd-af9a-45cb-9c1d-8721b59fef35.png">
<img width="120" alt="Screen Shot 2022-12-16 at 9 52 14 PM" src="https://user-images.githubusercontent.com/39681478/208220428-5bba22ef-e68e-410e-b419-e5d08f5a50d9.png">

3.10 phonebook backend step10
-
Deploy the backend to the internet, for example to Fly.io. URL: https://milesphonebookapp.fly.dev/

3.11 phonebook full stack
-
Also make sure that the frontend still works locally. In the Phonebook's ./service/persona files:
When deploying to Fly.io, I need to use a relative path

<img width="275" alt="Screen Shot 2022-12-16 at 9 55 16 PM" src="https://user-images.githubusercontent.com/39681478/208220517-a0ec1b4e-0387-4e78-9e38-4e41fa7bba1c.png">

Or Just use a proxy in your package.json file, under your react project

<img width="334" alt="Screen Shot 2022-12-16 at 9 55 38 PM" src="https://user-images.githubusercontent.com/39681478/208220533-0273751f-7bca-44d7-9d14-6613f4307f60.png">

3.12: Command-line database
-
Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.

Create a mongo.js file in the project directory, that can be used for adding entries to the phonebook, and for listing all of the existing entries in the phonebook.

<img width="426" alt="Screen Shot 2022-12-19 at 12 12 05 AM" src="https://user-images.githubusercontent.com/39681478/208352416-c04408bc-827b-4712-9421-bcbb5e50b23e.png">

<img width="717" alt="Screen Shot 2022-12-19 at 12 12 33 AM" src="https://user-images.githubusercontent.com/39681478/208352462-1de642f7-c256-4767-a0e5-0074f55b55a4.png">

3.13: Phonebook database, step1
-
Change the fetching of all phonebook entries so that the data is fetched from the database.
Verify that the frontend works after the changes have been made.

<img width="301" alt="Screen Shot 2022-12-20 at 6 36 29 PM" src="https://user-images.githubusercontent.com/39681478/208786461-f7596ba9-83f7-4d41-a868-ed3315929457.png">
<img width="468" alt="Screen Shot 2022-12-20 at 6 37 38 PM" src="https://user-images.githubusercontent.com/39681478/208786600-dec45731-6941-4f7a-bb68-b42047762327.png">

3.14: Phonebook database, step2
-
Change the backend so that new numbers are saved to the database. Verify that your frontend still works after the changes.
At this point, you can choose to simply allow users to create all phonebook entries. At this stage, the phonebook can have multiple entries for a person with the same name.

<img width="381" alt="Screen Shot 2022-12-20 at 6 41 17 PM" src="https://user-images.githubusercontent.com/39681478/208786984-25f19096-197b-4054-ba69-f4a1ebdce596.png">

3.15: Phonebook database, step3
-
Change the backend so that deleting phonebook entries is reflected in the database.
Verify that the frontend still works after making the changes.

<img width="383" alt="Screen Shot 2022-12-20 at 6 42 33 PM" src="https://user-images.githubusercontent.com/39681478/208787123-9476f36c-e89b-4af9-bda7-4d8a92903738.png">

3.16: Phonebook database, step4
-
Move the error handling of the application to a new error handler middleware.

<img width="442" alt="Screen Shot 2022-12-20 at 6 47 57 PM" src="https://user-images.githubusercontent.com/39681478/208787663-887d3df5-a348-4459-8ffa-5f02c9706f3b.png">

3.17*: Phonebook database, step5
-
If the user tries to create a new phonebook entry for a person whose name is already in the phonebook, the frontend will try to update the phone number of the existing entry by making an HTTP PUT request to the entry's unique URL.
Modify the backend to support this request.
Verify that the frontend works after making your changes.

<img width="428" alt="Screen Shot 2022-12-20 at 6 49 06 PM" src="https://user-images.githubusercontent.com/39681478/208787786-d82a034b-7cf0-46b7-8864-9ac0409524ed.png">

3.18*: Phonebook database step6
-
Also update the handling of the api/persons/:id and info routes to use the database, and verify that they work directly with the browser, Postman, or VS Code REST client.

<img width="321" alt="Screen Shot 2022-12-20 at 6 50 45 PM" src="https://user-images.githubusercontent.com/39681478/208788008-72b5a85d-9ae3-4e99-b7b4-c12a6e6f4bd3.png">

3.19: Phonebook database, step7
-
Expand the validation so that the name stored in the database has to be at least three characters long.

<img width="398" alt="Screen Shot 2022-12-20 at 9 38 51 PM" src="https://user-images.githubusercontent.com/39681478/208807584-ee5fed19-463c-4ac8-9873-728fd8524627.png">
<img width="320" alt="Screen Shot 2022-12-20 at 9 39 05 PM" src="https://user-images.githubusercontent.com/39681478/208807614-98fffc1a-8b04-499c-bd97-9ee9e25ec6b8.png">

3.20*: Phonebook database, step8
-
Expand the validation so that the name stored in the database has to be at least three characters long, and the phone number must have at least 8 digits.



3.21 Deploying the database backend to production
-
ENV VARIABLE
<img width="762" alt="Screen Shot 2022-12-20 at 9 44 19 PM" src="https://user-images.githubusercontent.com/39681478/208808367-fc159682-8a22-4324-8b07-f3b68da25702.png">
