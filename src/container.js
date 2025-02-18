const { createContainer, asClass } = require('awilix');

const container = createContainer();

container.register({
    userService: asClass(require('./services/UserService')).singleton(),
    userRepository: asClass(require('./repositories/UserRepository')).singleton()
});

module.exports = container;