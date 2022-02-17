const User = require(`../models/User`);
const CustomAPIError = require(`../errors/custom-api`);
const { StatusCodes } = require(`http-status-codes`);

const loginUser = (req, res) => {
    res.status(200).send(`User Login`);
}

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password)
        throw new CustomAPIError(`Hey, you need to provide name, email and password.`);
    const userData = {name, email, password};
    const newUser = await User.create(userData);
    const token = newUser.createToken();
    res.status(StatusCodes.CREATED).json({user: newUser.email, token});
}

module.exports = {loginUser, registerUser};