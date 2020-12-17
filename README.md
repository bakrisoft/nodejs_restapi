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
- Get all users
Method: Get
URL: http://localhost:3500/users

- Get user by id
Method: Get
URL: http://localhost:3500/users/1

- Create user
Method: Post
URL: http://localhost:3500/users
Body(JSON):
{
    "userName": "user1",
    "userPass": "123",
    "isActive": 1
}

- Update user
Method: Put
URL: http://localhost:3500/users/1
Body(JSON):
{
    "userName": "user1",
    "userPass": "123",
    "isActive": 1
}

- Delete user
Method: Delete
URL: http://localhost:3500/users/1

Or simply you can import Postman collection from file 'SampleRestAPI.postman_collection.json'
<strong>

Waiting for your suggestions
</h3>
