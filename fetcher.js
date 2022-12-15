//Receive 2 arguments from the command line
const args = process.argv.slice(2, 4);
const URL = args[0];
const filePath = args[1];
//Imports
const request = require('request');
const fs = require('fs');
//Request URL
request(URL, (error, response, body) => {
  //Log Errors and/or Status Code
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //write the body of the webpage to the file path
  fs.writeFile(`${filePath}`,body, err => {
    if (err) {
      console.error(err);
    }
  });
  //log success and the file size
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`); // Print the HTML for the Google homepage.
});