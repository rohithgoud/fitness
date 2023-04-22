const mongoose = require('mongoose')


const connectDB = async ()=>{
try{
    await mongoose.connect('mongodb+srv://admin:rohithgoud15@cluster0.gly38na.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('connected to database')
    
}catch(error){
    console.error(error)
}
}


module.exports = connectDB;