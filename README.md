For Deployment

Prior to Run the App:
Installation of Node and Npm is required.


Project Setup: 

1. Go to root folder of the project from command line and run "npm install"
2. After the command has completed, run "npm start".

wait for the message "running server on port 4000"


Information: All the data is managed in the server only and not in DB, hence the data will be reset when server is started.

API Routes:

1. Get Employees

Endpoint: '/users/employees'
Method: 'GET'
Params: {}

2. Get Surveys

Endpoint: '/users/surveys'
Method: 'GET'
Params: {}

3. Add/Remove Survey

Endpoint: '/users/update'
Method: 'POST'
Params: {
	sid,   (Survey Id)
	eid,   (Employ ID)
	action (0 - Add, 1 - Remove)
}