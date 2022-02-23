const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

// console.log('connecting to', url)

mongoose.connect(url)
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch((error) => {
        console.log('error connecting to mongoDB', error.message);
    })

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const signupSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'name field is required']},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})  

signupSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const Signup = mongoose.model('signup', signupSchema)

module.exports = Signup