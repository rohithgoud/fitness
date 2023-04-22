const express =  require('express')
const  cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./DBconn')
const router = require('./routes/Program')
const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

//Database connection
connectDB();


//routes

app.use('/api',router)



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})