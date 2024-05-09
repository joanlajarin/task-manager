import mongoose, { Schema, model } from 'mongoose';
import { config } from 'dotenv';
config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    })


export default mongoose