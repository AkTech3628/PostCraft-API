const express=require('express')
const app=express()
const PORT=1000;


app.use(express.json());

app.use(express.urlencoded({extended:true}))
const connectDb=require('./config/db.js');
const { urlencoded } = require('body-parser');
connectDb()



  app.use('/api/auth',require('./routes/auth.routes.js'))
  app.use('/api/blog',require('./routes/blog.routes.js'))


app.listen(PORT,()=>{
    console.log("server started")
    
})

