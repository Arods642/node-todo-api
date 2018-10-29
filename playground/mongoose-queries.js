const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// let id = '5bd36338a6d21e3112f52310';
let id = '5bd7859b2e5ed23283349198';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     };
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

Todo.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    };
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));