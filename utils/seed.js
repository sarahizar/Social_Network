const mongoose = require('mongoose');
const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

const seedDatabase = async () => {
  try {
    console.log('Connected to MongoDB');

    
    await User.deleteMany();
    await Thought.deleteMany();

    

    const createdUsers = await User.create(users);

    
    await Thought.create(
      thoughts.map((thought, index) => ({
        ...thought,
        username: createdUsers[index % createdUsers.length].username,
      }))
    );

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');
  await seedDatabase();
  console.info('Seeding complete! ');
  process.exit(0);
});
