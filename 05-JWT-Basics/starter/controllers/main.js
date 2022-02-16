require('dotenv').config();
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const Login = async (req, res) =>{
    const {username, password} = req.body;
    if(!username || username === ``){
        throw new CustomAPIError(`Username cannot be empty`, 401);
    }
    if(!password || password === ``){
        throw new CustomAPIError(`Password cannot be empty`, 401);
    }
    const id = 123;
    var token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
    res.status(200).json({msg:`User login`, token})
}

const GetDashboard = async (req, res) =>{
    // auth user
    var token = req.headers.authorization;
    if(!token || token === `` || !token.startsWith("Bearer "))
        throw new CustomAPIError(`token not exist`, 401);
    token = token.split(` `)[1]
    try{
        jwt.verify(token, process.env.JWT_SECRET);
    }catch{
        throw new CustomAPIError(`token invalid`, 401);
    }
    // send data
    const result = Math.floor(Math.random() * 100)
    res.json({msg:`random number`, result})
}

module.exports = {Login, GetDashboard}