const joi = require('joi');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Joi = require('joi');

const schema = Joi.object().keys({
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email()
}).with('firstname', 'lastname', 'email')



exports.validate = (req, res, next) => {
    joi.validate(req.body, schema, (err, value) => {
        if (err) {
            setTimeout(function () {
                console.log(err);
                res.sendStatus(400);
            }, 1000);
        }
        else {

            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                req.body.password = hash; 
                next();
            });

        }
    })
}