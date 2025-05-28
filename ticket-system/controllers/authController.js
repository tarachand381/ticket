const User = require("../models/userModel");

exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(
            { msg: "User registere", status: 1 }
        );
    } catch (err) {
        res.send(
            { msg: "Registration failed", status: 0 }
        );
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
         return res.send(
        { msg: "User not found", status: 0 }
    );
    if (user.password !== password)
         return res.send(
        { msg: "Wrong password", status: 0 }
    );

    res.send(
        { msg: "Login successful", status: 1, user }
    );
};