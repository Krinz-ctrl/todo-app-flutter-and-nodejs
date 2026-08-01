const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
    try {
        const { name, phone, email, password } = req.body;
        const successRes = await UserService.registerUser(name, phone, email, password);
        res.json({ status: true, success: "user Registered Successfully" });

    } catch (error) {
        throw error

    }

}