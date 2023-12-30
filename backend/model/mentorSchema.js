const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const mentorSchema = new mongoose.Schema({
    mentor_name: {
        type: String,
        required: true
    },
    mentor_id: {
        type: String,
        required: true,
        unique: true
    },
    mentor_password: {
        type: String,
        required: true
    }
});

const Mentor = mongoose.model('MENTOR',mentorSchema);

module.exports = Mentor;