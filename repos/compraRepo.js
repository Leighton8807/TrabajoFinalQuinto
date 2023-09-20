const mysql = require("mysql2");
const User = require("../modelos/users");

class CompraRepo {

    // Método para registrar una compra de un producto por un usuario
    static comprarProducto(usuarioId, productoId, cantidad, callback) {
        // Consulta SQL para registrar una compra en la tabla 'compras'
        const query =
        "INSERT INTO compras (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)";
        db.query(query, [usuarioId, productoId, cantidad], (err, res) => {
            if (err) {
                // Maneja errores al registrar la compra
                console.error("Error al registrar la compra: " + err.message);
                callback();
                return false;
            } else {
                // Registro de éxito al registrar la compra
                console.log("Compra realizada con éxito");
                callback();
                return true;
            }
        });
    }
}  