const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://rakesh1234:rakesh1234@cluster0.aajcd.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
