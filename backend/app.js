const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`app listening on port ${port}`))