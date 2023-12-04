const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    
    mentor_id: {
        type: String,
        required: true
    },
    mentor_password: {
        type: String,
        required: true
    },
    mentor_fname: {
        type: String,
        required: true
    },
    mentor_lname: {
        type: String,
        required: true
    },
    mentor_email: {
        type: String,
        required: true
    },
    mentor_phone: {
        type: Number,
        required: true
    }
})

const Mentor = mongoose.model('MENTOR',mentorSchema);

module.exports = Mentor;