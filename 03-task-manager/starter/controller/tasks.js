const getAllTasks = (req, res) => {
    res.status(200).end(`all tasks`);
};

const createATask = (req, res) => {
    res.status(200).end(`create a task`);
};

const getATask = (req, res) => {
    res.status(200).end(`get a task`);
};

const modifyATask = (req, res) => {
    res.status(200).end(`modify a task`);
};

const deleteATask = (req, res) => {
    res.status(200).end(`delete a task`);
};

module.exports = {getAllTasks, createATask, getATask, modifyATask, deleteATask};