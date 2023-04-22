const {Schema,model} = require('mongoose')


const exerciseSchema  = new Schema({
    exerciseID:{type:Number,required:true},
    exerciseName:{type:String,required:true},
    exerciseLength:{type:Number,required:true},
})




const programSchema = new Schema({
    programID:{type:Number,required:true},
    programName:{type:String,required:true},
    exercises:[exerciseSchema],
});


const Program = model("Program", programSchema)

module.exports = Program;