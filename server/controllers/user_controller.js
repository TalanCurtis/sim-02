module.exports = {
    getProperties: (req, res, next) => {
        const db = req.app.get('db')
        db.getProperties([req.params.id]).then((dbRes => {
            res.status(200).send(dbRes)
        }))
    },
    addProperty: (req, res, next) => {
        const db = req.app.get('db')
        const { user_id, name, description, address, city, state, zip, image, loan, mortgage, desired_rent, recommended_rent } = req.body
        db.addProperty([user_id, name, description, address, city, state, zip, image, loan, mortgage, desired_rent, recommended_rent]).then((dbRes => {
            res.status(200).send(dbRes)
        }))
    }
}