const Job = require(`../models/Job`);
const {BadRequestError} = require(`../errors`)

const getAllJobs = async (req, res) => {
    const userID = req.user.id;
    const jobs = await Job.find({createdBy : userID});
    res.status(200).json(jobs);
}

const getJob = async (req, res) => {
    const {user : {id : userID}, params : {id : jobID}} = req;
    const job = await Job.findOne({_id: jobID, createdBy : userID});
    res.status(200).json(job);
}

const createJob = async (req, res) => {
    const userID = req.user.id;
    const { company, jobTitle } = req.body;
    if(!company || !jobTitle)
        throw new BadRequestError(`Need to provide both company and job title. `);
    const newJob = Job({company, jobTitle, createdBy: userID});
    await newJob.save();
    res.status(200).json(newJob);
}

const updateJob = async (req, res) => {
    const { user : {id : userID}, 
            params : {id : jobID},
            body : {company, jobTitle}} = req;
    await Job.findOneAndUpdate({_id: jobID, createdBy : userID}, {company, jobTitle});
    res.status(200).send();
}

const deleteJob = async (req, res) => {
    const {user : {id : userID}, params : {id : jobID}} = req;
    await Job.findOneAndDelete({_id: jobID, createdBy : userID});
    res.status(200).send();
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }