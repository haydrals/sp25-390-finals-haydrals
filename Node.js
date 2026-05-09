
const express = require('express');
const app = express();

// Hint: Code to support multipart/form-data goes here

app.get('/users', (req, res) => {
  
    res.type('json').send(messages);
});

app.post('/users', (req, res) => {

const newMsg = {
  id: nextId,
  name: req.body.name,
  email: req.body.email,
  message: req.body.message
}
nextId++;

messages.push(newMsg);

res.type('json').send(messages);

});


// Your code goes here.


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});