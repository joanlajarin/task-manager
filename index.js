const PORT = 8000
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';

config();

const app = express()

app.use(cors())

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
