const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

//Database connection
connectDB()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoute'))

app.use(errorHandler)


app.listen(port, () => console.log(`app listening on port ${port}`))