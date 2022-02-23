const express = require('express')
const loginRouter = express.Router()

// log in
loginRouter.get('/login', (req, res) => {
    res.send('this page is for login')
})


loginRouter.post('/login', (req, res) => {
    console.log(req.body.email, req.body.password);
    res.send('this page is for login')
})

module.exports = loginRouter
