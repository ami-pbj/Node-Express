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



// const express = require("express");
// const app = express();

// app.use(express.json());

// const users =[]


// app.get("/user", (req, res) => {
//   res.json({ users });
// });

// app.post("/user", (req, res) => {
//   const user = {name: req.body.name, password: req.body.password};


//     // Updating the status
//     users.push(user);
//     res.status(201).send();

// });

// app.listen(3001);



// const express = require("express");
// const app = express();

// app.use(express.json());

// const port = 3000;

// // Variables
// let status = false;

// // GET
// app.get("/api/status", (req, res) => {
//   res.json({ status });
// });

// // POST
// app.post("/api/changestatus", (req, res) => {
//   const newStatus = { password: req.body.password, status: req.body.status };
//   status.push(newStatus);
//   res.status(201).send();
// });

// app.listen(port);
