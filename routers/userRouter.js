const express=require('express')
const router=express.Router()
// const getUserData= require('../controllers/userController');
const { postTodo, updateTodo,deleteTodo,getAllTodo } = require('../controllers/todoControllers');
// Handle GET requests to the root path ('/')
// router.get('/', getUserData);

// Handle POST requests to the '/ds' path
router.post('/posttodo/:sameNameRakhnaApiMain',postTodo);
router.put('/updateData/:id/:data',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)
router.get('/getAllTodo',getAllTodo)

module.exports=router