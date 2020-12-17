# nodejs_restapi

<h3>
NodeJS sample Rest API

This is very simple RestAPI that you can use as a start point
and add your customization

<strong>Installation instructions</strong>
1. Clone using git<br/>
  git clone https://github.com/bakrisoft/nodejs_restapi.git
  
2. Open cmd or powersell within project folder to install required modules using npm<br/>
  npm i --save

3. Restore MySQL database file named 'restapi.sql' into your MySQL server
   and modify the database config in 'shared/db.js' file to match your server
   
4. Start the api using node command<br/>
  node server.js
  
<strong>
This API contains 5 endpoints<br/>
- Get all users<br/>
Method: Get<br/>
URL: http://localhost:3500/users<br/>

- Get user by id<br/>
Method: Get<br/>
URL: http://localhost:3500/users/1<br/>

- Create user<br/>
Method: Post<br/>
URL: http://localhost:3500/users<br/>
Body(JSON):<br/>
{
    "userName": "user1",
    "userPass": "123",
    "isActive": 1
}

- Update user<br/>
Method: Put<br/>
URL: http://localhost:3500/users/1<br/>
Body(JSON):<br/>
{
    "userName": "user1",
    "userPass": "123",
    "isActive": 1
}

- Delete user<br/>
Method: Delete<br/>
URL: http://localhost:3500/users/1<br/>

Or simply you can import Postman collection from file 'SampleRestAPI.postman_collection.json'
<strong>

Waiting for your suggestions
</h3>
