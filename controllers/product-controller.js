const ProductRepo = require('../repos/productRepo.js');
const UseRepo = require('../repos/userRepo');
const enviarCorreo = require('../repos/enviarCorreo');
const validarAdmin = require('../middleware/validarAdmin');

//se obtiene los productos y los devuelve como json

let optenerProductos = (req, res)=>{
    ProductRepo.getAllProducts((productos) =>{
        res.status(200).json(productos)
    });
};

let addProduct = (req, res) => {
  
    validarAdmin.njwtAuth(req,res, null)
    ProductRepo.addProduct(req.body, () => {
      res.status(200).json({
        message: "Producto registrado correctamente",
      });
    });
  };
  
  // Actualiza un producto utilizando los datos proporcionados en el cuerpo de la solicitud y responde con un mensaje de éxito
  let updateAProduct = (req, res) => {
    validarAdmin.njwtAuth(req,res, null)
    ProductRepo.updateProduct(req.body, () => {
      res.status(200).json({
        message: "Producto actualizado correctamente",
      });
    });
  };
  
  // Elimina un producto utilizando el ID proporcionado en la consulta y responde con un mensaje de éxito
  let deleteAProduct = (req, res) => {
    validarAdmin.njwtAuth(req,res, null)
    ProductRepo.deleteProduct(req.query.id, () => {
      res.status(200).json({
        message: "Producto eliminado correctamente",
      });
    });
  };
  
  // Realiza una compra de producto para un usuario y responde con un mensaje de éxito
  let comprarProducto = (req, res) => {
    const usuarioId = req.body.usuarioId; // ID del usuario desde el cuerpo de la solicitud
    const productoId = req.body.productoId; // ID del producto desde el cuerpo de la solicitud
    const cantidad = req.body.cantidad; // Cantidad desde el cuerpo de la solicitud
  
    // Llama a UseRepo para realizar la compra
    UseRepo.comprarProducto(usuarioId, productoId, cantidad, () => {
      // Envía un correo de confirmación al usuario
      //const asuntoCorreo = 'Compra realizada';
      //const contenidoCorreo = 'Gracias por tu compra. Detalles de la compra: ...'; // Ajusta el contenido del correo según tus necesidades
  
      //enviarCorreo.enviarCorreo(usuarioId, asuntoCorreo, contenidoCorreo);
  
      res.status(200).json({
        message: "Compra realizada con éxito",
      });
    });
  };
  
  module.exports = {
    optenerProductos,
    addProduct,
    updateAProduct,
    deleteAProduct,
    comprarProducto
  };
  