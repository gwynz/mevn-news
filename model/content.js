const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new mongoose.Schema({
    title_id: {
        type: Schema.Types.ObjectId,
        ref: 'News'
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Content', characterSchema);