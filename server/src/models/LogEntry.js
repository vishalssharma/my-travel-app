const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
};
const defaultRequiredDate = {
    type: Date,
    default: Date.now,
    required: true,
};
const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    Description: String,
    comments: String,
    rating: {
        type: Number,
        min: [0,'Too few Eggs'],
        max: 10,
        default:5,
    },
    image: String,
    latitude: {
        requiredNumber,
        min:-89,
        max:89,
    },
    logitude: {
        requiredNumber,
        min: -179,
        max:179,
    },
    visitDate: defaultRequiredDate,
}, {
    timestamps: true,
});

const logEntry = mongoose.model('logEntry', logEntrySchema);
module.exports = logEntry;