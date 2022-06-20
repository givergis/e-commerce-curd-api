const express = require('express');
const dbConnection = require('./dbConnection')

const userRouter = require('./User/userRoute');
const productRouter = require('./Product/productRoute');
const purchaseRouter = require('./Purchase/purchaseRoute')
const app = express();

var bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())


const port = 4001;

dbConnection.connect((err)=>{
    if(err){
        console.log("Error connecting to db");
    }
    console.log("Connected to MySql db");
})

app.use('/User',userRouter)
app.use('/Product',productRouter)
app.use('/Purchase',purchaseRouter)



app.get("/",(req,res)=>{
    res.json({message:"Welcome to E-commerce app"})
})

app.listen(port,()=>{console.log("Server started on Port 4001")})