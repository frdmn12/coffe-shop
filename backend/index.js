// start
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

// app
const app = express()

// use & middleware
app.use(cors())
app.use(bodyparser.json())


// routers
const mainResponse = (req, res) => res.status(200).send('<h1>BACKEND-UP</h1>')
app.get("/", mainResponse)


// local machine
const PORT = 2000
app.listen(PORT, () => console.log(`API ACTIVE @PORT ${PORT}`))
