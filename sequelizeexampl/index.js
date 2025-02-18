const sequelize = require("./src/database/db");
const User = require("./src/models/User");
const userService = require("./src/services/UserService");

async function main() {
  // Sincronizar base de datos
  await sequelize.sync({ force: true });
  console.log("Base de datos sincronizada");

  // Crear usuario
  await userService.createUser("John Doe", "john@example.com");
  await userService.createUser("Jane Doe", "jane@example.com");

  // Obtener usuarios
  const users = await userService.getUsers();
  console.log("Usuarios en la base de datos:", users.map(u => u.toJSON()));
}

main();
