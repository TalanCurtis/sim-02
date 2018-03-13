require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors')
const massive = require('massive')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

const app = express();

// Deconstruction .env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

// Connect to Database
massive({ connectionString: CONNECTION_STRING }).then(db => {
    app.set('db', db)
    console.log('database connected')
})

// import middleware
const bodyParser = require('body-parser');
const checkForSession = require('./middleware/checkForSession');


// Top level middleware
// app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
//// Auth
/// switch req.session.user <> req.user
// app.use((req, res, next) => {
//     if (!req.session.user) {
//         req.session.user = {
//             id: 16,
//             username: "userName",
//             first_name: "DirstName",
//             last_name: "LastName",
//             email: "email@gmail.com",
//         }
//     }
//     next()
// })
app.use(checkForSession)


// Controller Imports
const auth_controller = require('./controllers/auth_controller')

// Endpoints.
//// Test EP
app.get('/api/test/', (req, res, next) => {
    const db = req.app.get('db')
    db.test().then(dbRes => {
        res.status(200).send(dbRes)
    })
})

//// Auth
/// switch req.session.user <> req.user
/// checks if user is still logged in
app.get('/auth/me', (req, res) => {
    console.log('session user: ',req.session.user)
    if (!req.session.user) {
        return res.status(404).send({})
        // return res.redirect('http://localhost:3000/')
    } else {
        res.status(200).send(req.session.user)
    }
})
//// Auth Controller
app.post('/api/auth/login', auth_controller.login)
app.post('/api/auth/logout', auth_controller.logout)
// app.get('/api/logout', (req, res) => {
//     req.logout();
//     return res.redirect('http://localhost:3000/')
// })


app.listen(SERVER_PORT, () => { console.log('simin on port: ' + SERVER_PORT) })
