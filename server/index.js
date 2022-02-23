const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

port = process.env.PORT || 8000
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/signup'))
app.use('/api', require('./routes/login'))
app.use('/api', require('./routes/profile'))
app.use('/', require('./routes/info'))

app.get('/', (req,res) => {
    res.send('HomePage')
})

app.get('*', (req,res) => {
    res.send('page does not exist')
})

app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`listening at port ${port}`);
})