import mongoose from 'mongoose'
import {ENV} from './env.js'

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log('This is  mongoDB connection' , conn.connection.host)
    } catch (error) {
        console.error('Error is MongoDB ' , error)
        process.exit(1);
    }
}