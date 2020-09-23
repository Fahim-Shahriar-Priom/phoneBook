const mongoose = require('mongoose'); 

const contactSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    mobileNumber :{
        type : Number,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema);