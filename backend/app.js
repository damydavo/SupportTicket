const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`app listening on port ${port}`))