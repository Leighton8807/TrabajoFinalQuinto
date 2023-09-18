const { check, validationResult } = require('express-validator');


let validatorParams = [
  check('correo').isEmail(),
  check('contra').isLength({ min: 8, max: 15}),
  check('nombre').isLength({ min: 1, max: 255}),
  check('apellido').isLength({ min: 1, max: 255})
];
   

function validator(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


module.exports = {
    validatorParams,
    validator
}


