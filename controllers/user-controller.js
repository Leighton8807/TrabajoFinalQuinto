const  usersService  = require('../services/users-service');

let index = (req, res)=> {
    const users = usersService.findAll();
    return res.status(201).send(
        { status: 'hola desde users ok', users}
      );  
}

module.exports = {
    index
}