const mysql = require("mysql2");
const User = require("../modelos/users");

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda",
});

// Establece la conexión a la base de datos
db.connect();

class UseRepo {
  // Método para agregar un nuevo usuario a la base de datos
  static addUser(id, nombre, email, contrasena) {
    // Consulta SQL para insertar un nuevo usuario en la tabla 'usuarios'

    if (id == null || nombre  == null || email == null || contrasena == null) return false;


    const query =
      "INSERT INTO usuarios (id, nombre, email, contrasena) VALUES (?, ?, ?, ?)";
    db.query(query, [id, nombre, email, contrasena], (err, res) => {
      if (err) {
        // Maneja errores al registrar el usuario
        console.error("Error al registrar el usuario: " + err.message);
        return false;
      } else {
        // Registro de éxito al registrar el usuario
        console.log("Usuario registrado con éxito");
        return true;
      }
    });
  }

 

  // Método para obtener la información de un usuario por su ID
  static obtenerInformacionUsuario(usuarioId, callback) {
    // Consulta SQL para seleccionar un usuario por su ID
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(query, [usuarioId], (err, res) => {
      if (err) {
        // Maneja errores al obtener la información del usuario
        console.error('Error al obtener la información del usuario: ' + err.message);
        callback(err, null);
      } else if (res.length === 0) {
        // Si no se encuentra ningún usuario con el ID especificado
        callback(null, null);
      } else {
        // Si se encuentra un usuario, devuelve sus datos
        const usuario = res[0]; // Suponiendo que el resultado es un solo usuario
        callback(null, usuario);
      }
    });
  }
}

module.exports = UseRepo;
