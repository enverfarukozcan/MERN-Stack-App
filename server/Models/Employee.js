const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let employeeSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  }
}, {
    collection: 'employees'
  })
  
module.exports = mongoose.model('Employee', employeeSchema)