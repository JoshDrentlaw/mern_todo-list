const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../models/Todo');

// @route  GET api/todos
// @desc   Get all todos
// @access Public
router.get('/', (req, res) => {
    Todo.find({})
        .then(todos => res.json(todos));
});

// @route  POST api/todos
// @desc   Create new todo
// @access Public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        todo: req.body.todo
    });

    newTodo.save().then(todo => res.json(todo));
});

// @route  DELETE api/todos
// @desc   Delete todo item
// @access Public
router.post('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;