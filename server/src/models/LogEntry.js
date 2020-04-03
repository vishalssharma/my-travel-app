const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 5,
    },
    image: String,
    latitude: {
     ...requiredNumber,
        min: -89,
        max: 89,
    },
    longitude: {
     ...requiredNumber,
        min: -179,
        max:179,
    },
    visitDate: defaultRequiredDate,
}, {
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;