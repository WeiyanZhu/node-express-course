const getAllJobs = (req, res) => {
    res.status(200).send(`All Jobs`);
}

const getJob = (req, res) => {
    res.status(200).send(`Job`);
}

const createJob = (req, res) => {
    res.status(200).send(`Create Job`);
}

const updateJob = (req, res) => {
    res.status(200).send(`Update Job`);
}

const deleteJob = (req, res) => {
    res.status(200).send(`Delete Job`);
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }