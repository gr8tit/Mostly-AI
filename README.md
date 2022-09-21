###Web Automation Test using Cypress ###


This is an automated test scripts for MOSTLY.AI https://mostly.ai/ Website using cypress. 
Cypress is an open source software testing framework. Read more here: https://docs.cypress.io/
In this project, three test scenerios was created and tested as steps 1, 2 and 3
Test Result can be viewed from the results folder
Test script directory is e2e/Testcases/Mostly.cy.js
Css selector script  directory is e2e/Testcases/mostly-selector.cy.js

##Dependencies
Requirement: Download cypress 10 https://www.cypress.io/ 
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

Prerequisite
1. Download and install NodeJS.
2. Download and install VScode

#To start a new Project
1. Create Project folder
2. Launch vs code
3. Open created project folder on vs code
4. Open Terminal
5. Run: npm init
6. Install cypress: npm install cypress --save-dev
7. Run: npm cypress
8. Install Mocha Reporter: npm install cypress-junit-reporter --save-dev 
9. Edit cypress.config.js file
10. Create Folder inside e2e directory like Testcase folder.
11. Add your project_name-selector.js file inside Testcase folder.
12. project_name.js file inside the Testcase folder

#To run the current project
1. Download/ clone the repository
2. Locate the project directory
3. Open terminal
4. run: npx cypress open or 
5. run: npx cypress run --record --key 87ae4862-84ba-4630-b2c1-64d88dc0c96b to show test report on cypress dashboard
6. Choose a browser
7. Click on Mostly.cy.js to run tests

#Test Result
<img width="1195" alt="Screenshot 2022-07-17 at 00 02 59" src="https://user-images.githubusercontent.com/26316863/179374543-0dd0f5d0-f83c-45d2-8f57-bc8c8e693ff4.png">

