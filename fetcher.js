const request = require("request");
const fs = require('fs');

const userInput = process.argv.slice(2);

const url = userInput[0];
const filePath = userInput[1];

request(url, function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});