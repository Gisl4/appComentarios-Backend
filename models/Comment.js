const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);