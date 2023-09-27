const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const users = [];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res) => {
    const newUser = req.body;
    if (newUser.name && newUser.email) {
        users.push(newUser);
        console.log('User added: ', newUser);
        res.send('User added successfully');
    } else {
        res.send('Error adding user');
    }
});

app.get('/add', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    console.log("Adding values");
    res.send(a + b);
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
