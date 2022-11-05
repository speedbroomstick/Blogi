const { Schema, model } = require('mongoose')

const schema = new Schema({
   photo: {
    type: String,
    required: true
  },
  text: 
  {
    type: String,
    required: true
  } 

})

module.exports = model('blogs', schema)
