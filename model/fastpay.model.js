const mongoose = require('mongoose');

const FastPaySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: "Required"
    },
    email: {
        type: String,
        // required: "Required"
    },
    subject: {
        type: String,
        // required: "Required"
    },
    message: {
        type: String,
        // required: "Required"
    }
});

mongoose.model("FastPay", FastPaySchema)