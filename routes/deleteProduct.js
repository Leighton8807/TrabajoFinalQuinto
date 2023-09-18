const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
const ValidateAdmin = require('../middleware/ValidarAdmin')

// Ruta para eliminar un producto. Requiere autenticación JWT de administrador.
router.delete('/', productController.deleteAProduct, ValidateAdmin.njwtAuth);


module.exports = router; 