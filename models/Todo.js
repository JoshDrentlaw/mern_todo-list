const mongoose = require('mongoose');

let TodoSchema = mongoose.Schema({
    id: String,
    todo: String
});

module.exports = Todo = mongoose.model('Todo', TodoSchema);