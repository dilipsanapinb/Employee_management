const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// register the user;
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name,email.password);
        const user = await User.findOne({ email });
        if (user) {
            return res
                .status(401)
                .json({ message: "User with this email is allready registered" });
        }

        if (!name || !email || !password) {
            res.status(404).json({ message: "All fields required" });
        }

        const passwordRegex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must be at least 8 characters long and contain at least one capital letter, one symbol, and one number.",
            });
        }

        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                console.log(err);
                res
                    .status(404)
                    .json({ message: "Something went wrong at hashing the password" });
            } else {
                const user = new User({
                    name,
                    email,
                    password: hash,
                });
                await user.save();

                res.status(202).json({ message: "User create successfully", user });
            }
        });
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at registering the user" });
    }
};

// login the user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(404)
                .json({ message: "User not found with this email" });
        }

        const hashedPassword = user.password;

        bcrypt.compare(password, hashedPassword, async function (err, result) {
            if (result) {
                const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_KEY);

                res
                    .status(201)
                    .json({ message: "User logged in successfully", accessToken });
            } else {
                console.log(err);
                res
                    .status(404)
                    .json({ message: "Password is not matched, please login again" });
            }
        });
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at logging the user" });
    }
};


