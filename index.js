const PORT = 8000
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import mongoose from './mongo.js'
import Board from './src/models/Board.js'
import Task from './src/models/Task.js'


mongoose

config()


const app = express()
app.use(cors())

app.get('/api/defaultBoard', (req,res) => {

    Board.find({}).sort({ date: 1 }).limit(1).then( boards => {
        res.json(boards)
    }).catch(error => {
        console.error('Error fetching boards:', error)
        res.status(500).json({ error: 'Internal server error' })
    })
})


app.get('/api/boards', (req,res) => {

    Board.find({}).sort({ date: 1 }).then( boards => {
        res.json(boards)
    }).catch(error => {
        console.error('Error fetching boards:', error)
        res.status(500).json({ error: 'Internal server error' })
    })
})

app.get('/api/tasks', (req,res) => {

    Task.find({}).sort({ date: 1 }).then( boards => {
        res.json(boards)
    }).catch(error => {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    })
})


 app.get('/urlphoto', (req,res) => {
     const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_TASK_MANAGER_API_KEY}`
     console.log(url)
     fetch(url)
     .then((response) => response.json())
     .then((data) => {  res.json(data.urls.regular)})
 })

app.listen(PORT, ()=> console.log(`Server task-manager is running on ${PORT}`))


// app.get('/urlphoto', (req,res) => {
//     res.json("https://www.marble-sculpture.com/cdn/shop/products/89608843-85A6-4A08-A7E2-34055245559E_1_105_c_1445x.jpg?v=1627658010")

// })
