const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://sarahizar:<IvyandBeck13!>@studentgrades.cfp9nfc.mongodb.net/?retryWrites=true&w=majority'
 
 connect(connectionString);


 module.exports = connection;
