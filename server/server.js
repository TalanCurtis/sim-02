require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors')
const massive = require('massive')

const app = express();

// Deconstruction .env
const { SERVER_PORT, CONNECTION_STRING } = process.env

// Connect to Database
massive({ connectionString: CONNECTION_STRING }).then(db => {
    app.set('db', db)
    console.log('database connected')
})

// import middleware
const bodyParser = require('body-parser');

// Top level middleware
// app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

// Controller Imports
// Endpoints.
//// Test EP
app.get('/api/test/', (req, res, next) => {
    const db = req.app.get('db')
    db.test().then(dbRes => {
        res.status(200).send(dbRes)
    })
})


app.listen(SERVER_PORT, () => { console.log('simin on port: ' + SERVER_PORT) })
