const mongoose = require('mongoose');

const Call = mongoose.model('Call', {
    computer: String,
    code: String,
    room: String,
    issue: String
})

module.exports = Call