const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    
    mentor_id: {
        type: String,
        required: true,
        unique: true
    },
    mentor_password: String
})

const Mentor = mongoose.model('MENTOR',mentorSchema);

module.exports = Mentor;