const exppress = require("express");

const userRouter = exppress.Router();

const userControllers = require("../controllers/user.controllers");



// create new user
userRouter.post("/register", userControllers.registerUser);

//login the user
userRouter.post("/login", userControllers.loginUser);


module.exports = userRouter;
