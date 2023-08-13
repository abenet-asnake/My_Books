const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    fullName: {
        type: 'string',
        required: [true, 'Please Fill Your Full Name']
    },
    userName: {
        type: String,
        required: [true, 'Please Fill Your UserName'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please Fill Your Email Address'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Please Fill Your Phone Number'],
    },
    password: {
        type: String,
        required: [true, 'Please tell us your password'],
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please re-tell us your password']
    }
});

module.exports = mongoose.model('user', usersSchema);