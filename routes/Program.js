const express = require('express')
const {createProgram,updateProgram,deleteProgram,createExercise,deleteExercise} = require('../controllers/Program')
const router = express.Router()
// Routes for Program
router.post('/programs/createProgram', createProgram);
router.put('/programs/updateProgram/:id', updateProgram);
router.delete('/programs/deleteProgram/:id', deleteProgram);

//Routes for exercises
router.post('/programs/:programId/exercises', createExercise);
router.delete('/programs/:programId/exercises/:exerciseId', deleteExercise);


module.exports = router;