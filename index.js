const container = require("./src/container");

const userService = container.resolve("userService");

console.log(userService.getUsers());