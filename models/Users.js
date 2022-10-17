const { Schema, model } = require('mongoose')

const schema = new Schema({
/*   title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  name: 
  {
    type: String
  } */

})

module.exports = model('users', schema)
