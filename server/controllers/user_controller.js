module.exports = {
    getProperties: (req, res, next)=>{
        const db = req.app.get('db')
        db.getProperties([req.params.id]). then((dbRes => {
            res.status(200).send(dbRes)
        }))
    }
}