const UserModel = require("../model/user.model");

class UserService {

    static async registerUser(name, phone, email, password) {
        try {
            const createUser = new UserModel({ name, phone, email, password });
            return await createUser.save();

        } catch (err) {
            throw err;
        }


    }
}

module.exports = UserService;