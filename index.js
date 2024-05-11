const PORT = 8000
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

config()

const app = express()
app.use(express.json())

app.use(cors())

 app.get('/urlphoto', (req,res) => {
     const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_TASK_MANAGER_API_KEY}`
     console.log(url)
     fetch(url)
     .then((response) => response.json())
     .then((data) => {  res.json(data.urls.regular)})
 })

app.listen(PORT, ()=> console.log(`Server task-manager is running on ${PORT}`))
