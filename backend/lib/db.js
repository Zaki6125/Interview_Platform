import mongoose from 'mongoose'
import {ENV} from './env.js'

export const connectDB = async ()=>{
    try {
        if(!ENV.DB_URL)
        {
            throw new error('DB_URL is not valid')
        }
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log('This is  mongoDB connection' , conn.connection.host)
    } catch (error) {
        console.error('Error is MongoDB ' , error)
        process.exit(1);
    }
}