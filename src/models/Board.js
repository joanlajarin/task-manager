import { Schema, model } from 'mongoose';


const boardSchema = new Schema({
    name: String,
    logo: String,
    date: Date
})

const Board = model('Board', boardSchema)

export default Board
