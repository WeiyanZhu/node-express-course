const Task = require("../models/Task");

const getAllTasks = (req, res) => {
    res.status(200).end(`all tasks`);
};

const createATask = async (req, res) => {
    try{
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    }catch(err){
        res.status(500).json(err);
    }
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