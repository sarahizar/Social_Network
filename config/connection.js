const { connect, connection } = require('mongoose');

const username = 'sarahizar';
const password = 'IvyandBeck13!';

const encodedUsername = encodeURIComponent(username);
const encodedPassword = encodeURIComponent(password);

const connectionString = process.env.MONGODB_URI || `mongodb+srv://${encodedUsername}:${encodedPassword}@studentgrades.cfp9nfc.mongodb.net/?retryWrites=true&w=majority`;

connect(connectionString);

module.exports = connection;





















