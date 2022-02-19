const mongoose = require(`mongoose`);

const jobScheme = mongoose.Schema({
    company : {
        type : String,
        require: [true, `A company name is required.`],
        maxLength : 50
    },
    jobTitle : {
        type : String,
        require: [true, `A job title is required.`],
        maxLength : 100
    },
    status : {
        type: String,
        enum : [`Applied`, `Interviewing`,`Interviewd`, `Rejected`, `Offer`, `Pending`],
        default: `Pending`
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{validateBeforeSave:true})

const Job = mongoose.model('Job', jobScheme);
module.exports = Job;