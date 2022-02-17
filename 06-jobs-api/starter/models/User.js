const mongoose = require(`mongoose`);
const bcrypt = require('bcrypt');
const jwt = require(`jsonwebtoken`);

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : [true, "name is required"],
        minLength : [2, "name needs to be longer than 2 characters"],
        maxLength : [50, "name needs to be shorter than 50 characters"]
    },
    email: {
        type: String,
        require: [true, "email is required"],
        minLength : [5, "email needs to be longer than 5 characters"],
        maxLength : [50, "email needs to be shorter than 50 characters"],
        unique: true,
        match: [
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        , "Email is not in the correct format"]
    },
    password: {
        type: String,
        require: [true, "password is required"]
    },
  });

  userSchema.pre(`save`, async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  })

  userSchema.methods.createToken = function(){
      return jwt.sign({id: this._id, name: this.name, email: this.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
  }

  userSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password, this.password);
  }

  const User = mongoose.model('User', userSchema);
  module.exports = User;