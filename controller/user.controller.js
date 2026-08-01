const SignupService = require("../services/signup.services");
const LoginService = require("../services/login.services");

exports.register = async (req, res, next) => {
    try {
        const { name, phone, email, password } = req.body;
        const successRes = await SignupService.registerUser(name, phone, email, password);
        res.json({ status: true, success: "user Registered Successfully" });

    } catch (error) {
        throw error

    }

}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const successRes = await LoginService.loginUser(email, password);
        res.json({ status: true, success: "user Logged In Successfully" });

    } catch (error) {
        throw error

    }

}