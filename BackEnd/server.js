const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',      // Cambia 'localhost' por la dirección de tu servidor MySQL si es diferente
    user: 'root',           // Usuario de la base de datos (puedes cambiarlo según tus credenciales)
    password: '',   // Contraseña del usuario (cámbiala por la tuya)
    database: 'senpress' // Nombre de la base de datos a la que deseas conectarte
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida.');
});

// Ejemplo de consulta a la base de datos
connection.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) {
        console.error('Error al ejecutar la consulta:', error);
        return;
    }
    console.log('Resultados de la consulta:', results);
});

// Agregar un listener para el evento 'connect'
connection.on('connect', () => {
    console.log('Conexión exitosa al servidor MySQL.');
});

// Cuando hayas terminado de utilizar la conexión, no olvides cerrarla
// connection.end();
