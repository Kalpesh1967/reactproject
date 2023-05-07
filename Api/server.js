const express=require('express')
const server=express()
 
server.use(express.json())
const apiRouter=require('./routers/api')
const mongoose=require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/reactProject')




server.use('/api',apiRouter)
server.listen(5000,()=>{
    console.log('connect with port 5000')
})