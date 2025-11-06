import express from 'express'
import {ENV} from './lib/env.js'
import path from 'path'

const app = express();
const __dirname = path.resolve()
console.log(ENV.PORT);
console.log(ENV.DB_URL)
app.get("/healt" , (req, res)=>{
    res.status(200).json({
        msg:'This is our healt center'
    })
});
app.get('/books' , (req, res)=>{
    res.status(200).json({
        msg:'This is our book store'
    })
})
if(ENV.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname,'../frontend/dist')))
    app.get('/{*any}' , (req, res)=>{
        res.sendFile(path.join(__dirname, 'frontend' , 'dist' , 'index.html'))
    })
}
app.listen(ENV.PORT, ()=>console.log(`server running ont this port: ${ENV.PORT}`))
