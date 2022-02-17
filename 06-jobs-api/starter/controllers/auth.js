const User = require(`../models/User`);
const CustomAPIError = require(`../errors/custom-api`);
const BadRequestError = require(`../errors/bad-request`);
const UnauthorizedError = require(`../errors/unauthenticated`);
const { StatusCodes } = require(`http-status-codes`);

const loginUser = async (req, res) => {
    // check credential
    const {email, password} = req.body;
    if(!email || !password)
        throw new BadRequestError(`Please provide both your email and password.`);
    const user = await User.findOne({email});
    if(!user || ! await user.checkPassword(password))
        throw new UnauthorizedError(`Invalid Credential`);
    // return token
    res.status(StatusCodes.OK).json({user : {id : user._id, email: user.email}, token : user.createToken()});
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