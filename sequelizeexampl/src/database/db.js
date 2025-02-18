const { Sequelize } = require('sequelize');

//Configuracion de Sequelize con SQlite
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "data.sqlite"
});

//Probar Conexion
sequelize.authenticate()
.then(() => console.log("Conectado a la base de Datos"))
.catch(err => console.error("Error de Conexion:", err));

module.exports = sequelize;