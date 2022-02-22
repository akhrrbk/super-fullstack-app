const express = require('express')
const router = express.Router()

// sign up
router.get('/signup', (req, res) => {
    res.send('this page is for signup')
})

router.post('/signup', (req, res) => {
    console.log(req.body.name, req.body.email);
    res.send('success').end()
    // res.send('this page is for signup')
})

// log in
router.get('/login', (req, res) => {
    res.send('this page is for login')
})

router.get('/profile', (req, res) => {
    res.send('this page is for profile')
})


router.get('/profile/:id', (req, res) => {
    res.send('this page is for profile with an id')
})

module.exports = router
