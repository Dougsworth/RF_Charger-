const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema ({
  // name: { 
  //       type: String, 
  //       required: true
  // },
  voltage:{
    type: String, 
    required: true 
  },
  
  current:{
    type:String	, 
    required: true 
  },

  power:{
    type:String	, 
    required: true 
  },
  Date:{
    type: String,
    default: Date().toString()

},

})
module.exports = mongoose.model('Data', dataSchema)

