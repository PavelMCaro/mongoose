var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    instagram: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://instagram.com/') === 0;
            },
            message: 'Instagram handle must start with https://instagram.com/'
        }
    }
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;