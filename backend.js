const express = require('express')
const app = express();

app.use(express.json());

// let status = [false];
let status = false;
const pwd = '123456';


// const api = [];

app.get('/api/status', (req, res) => {
  res.json({ status });
});

app.post('/api/changestatus', (req, res) => {
  const password = req.body.password;
  const newStatus = req.body.status;

  if (password == pwd) {
    // Updating the status
    // status.push(newStatus);
    status = newStatus;
    res.status(201).send()
  }

});

app.listen(3001)

