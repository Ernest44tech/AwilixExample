class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    getUsers() {
        return this.userRepository.getAll();
    }
}

module.exports = UserService;