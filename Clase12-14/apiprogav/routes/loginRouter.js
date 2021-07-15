const express = require('express');
const loginRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config');

loginRouter.post("/", async (req, res, next) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        //Comparo el hash
        const correctPass = user === null? false : await bcrypt.compare(password, user.passwordHash);

        if(!(user && correctPass)){
            return next({name: "ValidationError", message: "Password o username son inválidos"});
        }

        //Si está todo bien genero el token
        const userToken = {
            username: user.username,
            id: user._id
        }

        const token = await jwt.sign(userToken, SECRET);

        res.status(200).json({
            token,
            username
        })
    } catch (error) {
        next(error);
    }
});

module.exports = loginRouter;