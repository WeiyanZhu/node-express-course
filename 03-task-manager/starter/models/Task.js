const mongoose = require(`mongoose`);

const taskSchema = new mongoose.Schema({
    name : {type : String,
            required : [true, "A name for the task is required"],
            maxLength : [20, "Name cannot be longer than 20 characters."],
            trim : true},
    completed : {type: Boolean,
                default:false}
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;