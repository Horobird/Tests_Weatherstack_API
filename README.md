# Tests_Weatherstack_API

________
 [<img src="https://img.shields.io/badge/JavaScript-0000FF?style=flat-square&logo=Javascript&logoColor=FFFF00"/>](https://en.wikipedia.org/wiki/JavaScript) [<img src="https://img.shields.io/badge/Node v19.8.1-7B68EE?style=flat-square&logo=Node .js&logoColor=00FF00"/>](https://nodejs.org/en)  [<img src="https://img.shields.io/badge/Cypress v12.14.0-8B008B?style=flat-square&logo=Cypress&logoColor=FFA500"/>](https://docs.cypress.io/guides/overview/why-cypress)    

   :small_orange_diamond:Tests_Weatherstack_API is one example of API testing with the Cypress tool. The object of testing was the API from https://weatherstack.com/.      
   :small_orange_diamond: After studying the API documentation, I came to the conclusion that an object can be tested by blocks - valid and invalid token, Headers , Body , etc. according to the documentation. The code for testing was implemented in such a way that without leaving TestsWeatherstack.cy.js, you can select any block for the test, commenting out the unnecessary one. The completeness of tests by blocks is regulated in the corresponding files in the Weatherstack/Get , Weatherstack/Headers , Weatherstack/Body.    
   ☝️ I will be glad not only that this example may be useful to someone, but also grateful if I receive comments and corrections to it.
