// TODO hook users to get from database
// const users = require('../models/users');
// let id = 1
// this is the conncetion to database


module.exports={
    login: (req, res, next)=>{
        // hook up connection to database
        const database = req.app.get('db')
        // run query to database passing in variable[username, password] then with that db response do stuff
        database.getUser([req.body.username, req.body.password]).then((dbResponse)=>{
            console.log(dbResponse)
            if (dbResponse.length!==0){
                req.session.user.username = dbResponse[0].username;
                req.session.user.id = dbResponse[0].id
                res.status(200).send(req.session.user);
            } else {
                res.status(401).send('Denied yeah!')
            }
        })
    },
    logout: (req, res, next)=>{
        req.session.destroy()
        res.status(200).send(req.session)
    },
    register:(req, res, next)=>{
        let user = {
            username: req.body.username,
            password: req.body.password
        }
        const database = req.app.get('db')
        database.addUser([user.username, user.password]).then(dbResponse=>{
            // TODO check to see if username already taken.
            // or just use auth 0
            console.log('db res', dbResponse[0])
            req.session.user.username = dbResponse[0].username;
            req.session.user.id = dbResponse[0].id
            res.status(200).send(req.session.user);
        })
    }
}
