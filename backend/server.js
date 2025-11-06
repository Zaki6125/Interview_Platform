import express from 'express'
import {ENV} from './lib/env.js'


const app = express();
console.log(ENV.PORT);
console.log(ENV.DB_URL)
app.get("/" , (req, res)=>{
    res.status(200).json({
        msg:'Server will be ready...'
    })
});
app.get('/books' , (req, res)=>{
    res.status(200).json({
        msg:'This is our book store'
    })
})
app.listen(ENV.PORT, ()=>console.log(`server running ont this port: ${ENV.PORT}`))
