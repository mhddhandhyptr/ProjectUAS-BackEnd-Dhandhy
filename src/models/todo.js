const mongoose = require('mongoose');

const prayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const todoSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    prayers: [prayerSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);