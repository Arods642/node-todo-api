const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(results);
// });

Todo.findOneAndRemove({_id: '5bdb45ee2e5ed232833491be'}).then((todo) => {
    console.log(todo);
});


// Todo.findByIdAndRemove('5bdb446a2e5ed232833491b1').then((todo) => {
//     console.log(todo);
// });

