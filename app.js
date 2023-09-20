const express = require('express');
const bodyParser = require('body-parser');
const register = require('./routes/register'); 
const auth = require('./routes/auth'); 
const users = require('./routes/users'); 
const signingKey = require('./config/keys');
const cookieParser = require('cookie-parser');
const dataBase = require('./DB/DB');
const jwtSender = require('./routes/jwtSender'); 
const addProduct = require('./routes/addProduct'); 
const actualizarProducto = require('./routes/actualizarProducto'); 
const deleteAProduct = require('./routes/deleteProduct');
const comprarProducto = require('./routes/buyProduct'); 
const getUserInfo = require('./routes/userInfo'); 
const products = require('./routes/producto'); 


const app = express()
  .use(bodyParser.json())
  .use(cookieParser(signingKey.SIGNING_KEY_COOKIE))

let port = 10101;

app.use('/register', register);
app.use('/auth', auth);
app.use('/users', users);
app.use('/comprarProducto', comprarProducto); 
app.use('/getUserInfo', getUserInfo); 
app.use('/deleteAProduct', deleteAProduct);
app.use('/actualizarProducto', actualizarProducto); 
app.use('/products', products); 
app.use('/readToken', jwtSender);
app.use('/addProduct', addProduct);


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});