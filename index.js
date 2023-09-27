{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const bodyParser = require('body-parser');\
const app = express();\
const PORT = process.env.PORT || 3000;\
\
app.use(bodyParser.json());\
\
const users = [];\
\
app.get('/users', (req, res) => \{\
    res.send(users);\
\});\
\
app.post('/user', (req, res) => \{\
    const newUser = req.body;\
    if (newUser.name && newUser.email) \{\
        users.push(newUser);\
        console.log('User added: ', newUser);\
        res.send('User added successfully');\
    \} else \{\
        res.send('Error adding user');\
    \}\
\});\
\
app.get('/add', (req, res) => \{\
    let a = req.query.a;\
    let b = req.query.b;\
    console.log("Adding values");\
    res.send(a + b);\
\});\
\
app.listen(PORT, () => \{\
    console.log('Server running on port ' + PORT);\
\});\
}