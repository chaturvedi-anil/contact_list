const mongoose=require('mongoose');

// creating schema  
const contactSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    phone:
    {
        type: String,
        required: true
    }
});

// model name (should start with capital letter)
const Contact = mongoose.model('Contact', contactSchema);

// exporting schema
module.exports = Contact;