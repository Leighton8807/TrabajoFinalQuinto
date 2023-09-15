const express = require('express');
const bodyParser = require('body-parser');
const register = require('./routes/register'); 
const auth = require('./routes/auth'); 
const users = require('./routes/users'); 
const signingKey = require('./config/keys');
const cookieParser = require('cookie-parser');
const dataBase = require('./DB/DB');

const rest = new(require('rest-mssql-nodejs'))({
  user: dataBase.user,
  password: dataBase.password,
  database: dataBase.database
 
})

const app = express()
  .use(bodyParser.json())
  .use(cookieParser(signingKey.SIGNING_KEY_COOKIE))

let port = 10101;

app.use('/register', register);
app.use('/auth', auth);
app.use('/users', users);


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});