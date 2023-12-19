// server.js
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require("./utils/db")

const app = express();
const PORT = process.env.PORT || 5000;

// mongoose.connect('mongodb://your_username:your_password@localhost:27017/yoga', { useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   batch: String,
// });

// const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/api/submit-form', (req, res) => {
  const { name, age, batch } = req.body;
  // res.json({message : req.body})
  console.log(req.body)

  // if (!name || !age || !batch) {
  //   return res.status(400).json({ error: 'Name, age, and batch are required.' });
  // }

  // if (age < 18 || age > 65) {
  //   return res.status(400).json({ error: 'Age must be between 18 and 65.' });
  // }

  // const newUser = new User({ name, age, batch });

  // newUser.save()    
  //   .then(() => res.json({ success: true }))
  //   .catch(err => res.status(500).json({ error: err.message }));
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


