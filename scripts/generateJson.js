function getDatabase(){
  const Reader = require('g-sheets-api');
  console.log("Reader");
  const options = {
    sheetId: '1pUPlgWceAsU9fNh9qy-pBIdT2Bwcr_t-m9-dF7qhMwU',
    returnAllResults: false,
    filter: {
      'department': 'archaeology'
    }
  }
  GSheetReader(options, results => {
    document.getElementById("test").innerHTML = results;
    // do something with the results here
  });
//   module "c:/Users/ACER/Documents/node_modules/g-sheets-api/dist/index"
// Could not find a declaration file for module 'g-sheets-api'. 'c:/Users/ACER/Documents/node_modules/g-sheets-api/dist/index.js' implicitly has an 'any' type.
//   Try `npm install @types/g-sheets-api` if it exists or add a new declaration (.d.ts) file containing `declare module 'g-sheets-api';`
}
function say(){
  document.getElementById("butt").innerHTML = "Hi";
  console.log("hello");
}