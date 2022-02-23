const express = require('express')
const profileRouter = express.Router()

// profile
profileRouter.get('/profile', (req, res) => {
    res.send('this page is for profile - no id')
})

profileRouter.get('/profile/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(per => per.id === id)
    res.json(user)
})

module.exports = profileRouter
