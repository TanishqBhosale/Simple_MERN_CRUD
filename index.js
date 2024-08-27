const express =require('express')
const app =express()
const mongoose  = require('mongoose')
const Product =require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

//midlleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute);


app.get('/',(req,res)=>{
    res.send("hello from node api")
});




mongoose.connect('mongodb+srv://tanishq:GrHtuhOSmRZ7VA6N@cluster.cwfa5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')
.then(()=>{
    console.log('mongodb is connected');
    app.listen(3000,()=>{
        console.log('Server is running on the port 3000');
    })
})
.catch(()=>{
    console.log("mongoDB is not connected");
})