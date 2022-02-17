const { StatusCodes } = require('http-status-codes')
const UnauthorizedError = require(`../errors/unauthenticated`);
const jwt = require(`jsonwebtoken`);

const authenticationMiddleware = async (req, res, next) => {
    const authStr = req.headers.authorization;
    if(!authStr || !authStr.startsWith(`Bearer `))
    throw new UnauthorizedError(`Invalid Authentication`);
    const token = authStr.split(` `)[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, email} = decoded;
        req.user = {id, email};
        next();
    }catch(err){
        console.log(err);
        throw new UnauthorizedError(`Invalid Authentication`);
    }
}

module.exports = authenticationMiddleware
