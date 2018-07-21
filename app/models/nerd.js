// app/models/nerd.js

// grab the mongoose module
var mongoose = require('mongoose');

// define our nerdmodel
// module.exports allow us to pass this to the other files when it is called
module.exports = mongoose.model('Nerd', {
    name: {type: String, default: ''}
});
