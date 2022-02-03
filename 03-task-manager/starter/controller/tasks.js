const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json(err);
    }
};

const createATask = async (req, res) => {
    try{
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    }catch(err){
        res.status(500).json(err);
    }
};

const getATask = async(req, res) => {
    try{
        const taskID = req.params.id;
        const task = await Task.findById(taskID);
        if(!task)
        {
            res.status(404).json({msg : `No task with id ${taskID}`});
            return;
        }
        res.status(200).json(task);
    }catch(err){
        res.status(500).json(err);
    }
};

const updateATask = async (req, res) => {
    try{
        const taskID = req.params.id;
        const task = await Task.findByIdAndUpdate(taskID, req.body, {new:true, runValidators:true});
        if(!task)
        {
            res.status(404).json({msg : `No task with id ${taskID}`});
            return;
        }
        res.status(200).json(task);
    }catch(err){
        res.status(500).json(err);
    }
};

const deleteATask = async (req, res) => {
    try{
        const taskID = req.params.id;
        const task = await Task.findByIdAndDelete(taskID);
        if(!task)
        {
            res.status(404).json({msg : `No task with id ${taskID}`});
            return;
        }
        res.status(200).json(task);
    }catch(err){
        res.status(500).json(err);
    }
};

module.exports = {getAllTasks, createATask, getATask, updateATask, deleteATask};