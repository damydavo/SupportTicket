const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    product: {
        type: String,
        require: [true, 'Please select a product'],
        enum: ['iphone', 'Macbook Pro', 'iMac', 'iPad']
    },
    description: {
        type: String,
        require: [true, 'Kindly explain the issues'],
    },
    status: {
        type: String,
        require: true,
        enum: ['new', 'open', 'closed'],
        Default: 'new'
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)