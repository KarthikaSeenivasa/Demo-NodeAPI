# Developing a RESTful CRUD API With NodeJs, ExpressJs, Swagger and TypeScript using test-driven development (TDD).

 # RESTful- REST stands for Representational State Transfer. In REST, everything is Resource. Resource is consumed by client app using Http endpoints
 # CRUD- Create, Read, Update, Delete ; HTTP methods like GET, POST, PUT and DELETE to perform any CRUD operation on resource
#------------------------------------------------------------------------
HTTP Methods |	CRUD	|    Status Code                                |
-------------|----------|-----------------------------------------------|
GET          |	Read	|   200 (OK), 404 (Not Found)                   |
POST	     |   Create	|    201 (OK), 404 (Not Found)                  |
PUT	         |   Update	|    200 (OK), 204 (No Content), 404 (Not Found)|
DELETE	     |   Delete	|    200 (OK), 404 (Not Found)                  |
-------------------------------------------------------------------------
# Steps to launch & test the API

1. Open project folder
2. run this command to install dependencies- `npm install`
3. run this command to Compile - `npm run build`
4. run this command to Run the development server - `npm start`
5. run this command to Test - `npm test`

# API endpoints

1. Baseroute- http://localhost:3000/
2. Create - http://localhost:3000/api/v1/countries - send details in request body
3. Read-    http://localhost:3000/api/v1/countries  - get all records
4. Read-    http://localhost:3000/api/v1/countries/{countryId}  - get specific record by sending countryId
5. Update-  http://localhost:3000/api/v1/countries/{countryId} - update specific record by sending countryId and send latest details in request body
5. Delete-  http://localhost:3000/api/v1/countries/{countryId} - delete specific record by sending countryId

#additional technologies used are listed below:

1. Used Gulp for automating transpilation, it means to transpile typescript to javascript 
2. Used express for creating HTTP server and hosts the app in browser
3. used Mocha and Chai for creating automated unit tests
4. Used swagger for creating UI for endpoints
5. Used morgan as logger middleware
6. Used body-parser to parse into json type
7. Used mongoose for connecting to mongoDB 

# once running our api, we can see all endpoints & params in swagger ->   http://localhost:3000/swagger-doc/
