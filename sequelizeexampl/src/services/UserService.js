const User = require("../models/User");

class UserService {
    async createUser(name, email){
        return await User.create({ name, email });
    }

    async getUsers() {
        return await User.findAll();
    }
}

module.exports = new UserService();