import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: String, 
    state: String, 
    src: String,
    tags: Array,
    date: Date
    })

const Task = model('Task', taskSchema)

export default Task
