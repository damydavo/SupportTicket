const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')

//@desc Get Ticket
//@route GET/api/tickets/ticket:Id/notes
//@access  private

const getNotes = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.findById(req.params.ticketId)

    if (tickets.user.toString() !== req.user.id) {
        res.status(401)

        throw new Error("User not authorized")
    }

    const notes = await Note.find({ tickets: req.params.ticketId })

    res.status(200).json(notes)
})

const createNote = asyncHandler(async () => {

})

module.exports = {
    getNotes,
    createNote,

}