const bcrypt = require('bcryptjs');


let register = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let lastName = req.body.last_name;
    console.log(email, password, name, lastName);
    return res.status(201).send(
      { status: 'register ok'}
    );       
}


module.exports = {
    register
}