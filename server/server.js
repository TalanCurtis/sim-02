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

const properties = [
    {
        id: 0,
        name: 'propname',
        desc: 'description of property',
        address: '1111 Dreaver Lane',
        city: 'Salt Lake City',
        state: 'Utah',
        zip: 84101,
        image:'https://www.pexels.com/search/house/',
        loan: 50000000,
        mortgage: 150000,
        desired_rent:10000,
        recommended_rent: 20000
    }
]

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
/// switch req.session.user <> req.user///////////
/////////////////////////////////////////////////
app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            id: 1,
            username: "userName"
        }
    }
    next()
})
/////////////////////////////////////////////////
app.use(checkForSession)


// Controller Imports
const auth_controller = require('./controllers/auth_controller')
const user_controller = require('./controllers/user_controller')

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
app.post('/api/auth/register', auth_controller.register)
// app.get('/api/logout', (req, res) => {
//     req.logout();
//     return res.redirect('http://localhost:3000/')
// })
app.get('/api/properties/:id', user_controller.getProperties)


app.listen(SERVER_PORT, () => { console.log('simin on port: ' + SERVER_PORT) })
