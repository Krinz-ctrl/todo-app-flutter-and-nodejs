const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

class LoginService {
    static async loginUser(email, password) {
        try {
            const finduser = await UserModel.findOne({ email });
            if (!finduser) {
                throw new Error("User not found");
            }
            const isMatch = await bcrypt.compare(password, finduser.password);
            if (!isMatch) {
                throw new Error("Invalid password");
            }
            return user;

        } catch (error) {
            throw error;

        }
    }
}
module.exports = LoginService;