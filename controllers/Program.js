const { response } = require('express');
const ProgramModel = require('../models/Program')


//Controllers for Program API
 

const createProgram = async (req, res)=>{

try{
    const {programID, programName, exercises} = req.body;


    const program = new ProgramModel({programID, programName, exercises})
    
    await program.save()

    return res.status(200).json({message:"Successfully created program"})
}catch(error){
    return res.status(404).json({message:error.message})
}

}


const updateProgram = async (req,res)=>{
    try{

        const program = await ProgramModel.findByIdAndUpdate(req.params.id, {
            programId: req.body.programId,
            programName: req.body.programName,
            exercises: req.body.exercises
        }, { new: true })

        if(!program){
            return res.status(404).json({message:"User not found"})
        }

    }catch(error){
        return res.status(404).json({message:error.message})
    }
}


const deleteProgram = async (req,res)=>{
try{
      const program = await ProgramModel.findByIdAndRemove(req.params.id)

    if(!program){
        return res.status(404).json({message:"User not found"})
    }
}catch(error){
    return res.status(404).json({message:error.message})
}
}


//Controllers for Exercise API


const createExercise = async (req,res)=>{
    try{
       
        const program = await ProgramModel.findOne({programID:req.params.programID})

        if(!program){
            return res.status(404).json({message:"No program exists"})
        }
        
        const exercise = {
            exerciseID: req.body.name,
            exerciseName: req.body.description,
            exerciseLength: req.body.duration
        };

            program.exercises.push(exercise)
            await program.save()
          
            return response.statusCode(200).json({message:"Successfully created exercise"})

    }catch(error){
        return res.status(404).json({message:error.message})
    }
}


const deleteExercise = async (req, res)=>{
    try{

        const program = await ProgramModel.findOne({programID:req.params.programID})
        if(!program){
            return res.status(404).json({message:"No program exists"})
        }

        const exercise = await program.exercises.id(req.params.exerciseID)

        if(!exercise){
            return res.status(404).json({message:"No exercise exists"})
        }

        exercise.remove()
        await program.save()

    }catch(error){
        return res.status(404).json({message:error.message})
    }
}


module.exports = {createProgram,updateProgram,deleteProgram,createExercise,deleteExercise};