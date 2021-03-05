const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dateJoined: {type: Date, required: true, defaule: Date.now()}
})

module.exports = mongoose.model('User', userSchema)