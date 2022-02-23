const express = require('express')
const signupRouter = express.Router()
const Signup = require('../models/signup')

// sign up
signupRouter.get('/signup', (req, res) => {
    Signup.find({}).then(users => {
        res.json(users)
    })
})

signupRouter.post('/signup', (req, res) => {
    // console.log(req.body.name, req.body.email);
    const body = req.body

    if (body.email === undefined || body.name === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    Signup.create(body)
        .then((user) => {
            res.send(user)
        })
})

module.exports = signupRouter