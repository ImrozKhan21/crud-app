# DnaStack

Steps to run project

1. After cloning the project, Run 'npm install' in terminal.
2. Run 'npm start' in terminal.
3. Run 'npm run json-server'. If it throws error install json-server globally.
4. Then go to the corresponding ports to see the project.

What this project includes.
1. This project includes all CRUD operations.
2. Data is being read from json-server by initially creating mock data fo two api a) /people b) /address.
3. 'generate.js' file will tell you the format of json responses for two apis.
4. In the project you will see various people in list and grid format. You can see their details by clicking on their name or Details button.
5. You can add a new person which will then get added to 'db' also and also in the lists too.
6. You can also 'Edit' an existing people.
7. You can delete any people by clicking 'Delete icon'.
6. Both APIs will get updated once you add, delete or update a researcher/people.
7. Everything is live so once you do any CRUD operation you will see the live updates in the app.
8. Adding/Edit form contains standard validation of required field and Reactive form is used to add new people.


Folder Structure and Files
src
--app
---app-routing -> It holds the routing module and all the routes in the app (/home, /list-view etc)
---core -> It includes the app level components like container for all views and header of app.
---features -> It contains feature components for each route.
---materials -> Angular material module
---models -> It contains constants being used in app.
---resolvers -> It contains 'PeopleResolver' which is being used in various routes so tat we resolve people data before going to view.
---services -> It contains two services one is handling Integration of apis and other is handling flow of app.
---store -> It holds the state of the app (current route and people)
-style.scss -> Contains the global styles of app
