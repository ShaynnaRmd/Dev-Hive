const mongoose = require('mongoose')

const mentoringSchema = new mongoose.Schema({
    user_student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_students'
    },
    
    disponibility: [{
        day: Date,
        time_slot: String
    }],

    pending_reservation: [{
        title: String,
        date: Date,
        duration: Number,
        goals: String,
        student: {
            id: String,
            name: String
        },
        accept: Boolean // A POTENTIELLEMENT RETIRER
    }],

    reservation_history: [{
        title: String,
        date: Date,
        duration: Number,
        goals: String,
        student: {
            id: String,
            name: String
        }
    }],

    future_reservation: [{
        title: String,
        date: Date,
        duration: Number,
        goals: String,
        student: {
            id: String,
            name: String
        },
    }]
})

const mentoring = mongoose.model('mentoring', mentoringSchema);

module.exports = mentoring