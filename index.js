const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3001;

const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

console.log('Before app.listen');
app.listen(PORT, () => {
  console.log(`API server for ${activity} running on port ${PORT}!`);
});

// MongoDB event listener remains unchanged
db.once('open', () => {

  
});