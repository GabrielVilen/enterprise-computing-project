/**
 * Create a document for each vote in the Cloudant database:
 * https://docs.cloudant.com/document.html#documentCreate
 **/

function main(vote) {
  // Setting up the credentials
  var username = "<CLOUDANT-USERNAME>";
  var password = "<CLOUDANT-PASSWORD>";
  var host = "<CLOUDANT-HOST>";
  
  var cloudantUrl = "https://" + username + ":" + password + "@" + host;
  
  // Retrieving the cloudant module
  var cloudant = require('cloudant')({
    url: cloudantUrl
  });
  
  var dbName = "voteapp";
  var doc = vote;
  var params = {};

  if(!dbName) {
    return Promise.reject('dbname is required.');
  }
  if(!doc) {
    return Promise.reject('doc is required.');
  }
  
  var cloudantDb = cloudant.use(dbName);

  return insert(cloudantDb, doc, params);
}

/**
 * Create document in database.
 */
function insert(cloudantDb, doc, params) {
  return new Promise(function(resolve, reject) {
    cloudantDb.insert(doc, params, function(error, response) {
      if (!error) {
        console.log("success", response);
        resolve(response);
      } else {
        console.log("error", error)
        reject(error);
      }
    });
  });
}
