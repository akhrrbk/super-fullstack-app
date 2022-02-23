const express = require('express')
const infoRouter = express.Router()

// info
infoRouter.get('/info', (req, res) => {
    res.json([
        {
          "id":"1",
          "title":"Book Review: The Bear & The Nightingale"
        },
        {
          "id":"2",
          "title":"Game Review: Pokemon Brillian Diamond"
        },
        {
          "id":"3",
          "title":"Show Review: Alice in Borderland"
        }
      ])
})

module.exports = infoRouter
