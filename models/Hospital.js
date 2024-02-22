const mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  address: {
    type: String,
    require: [true, 'Please add an address']
  },
  district: {
    type: String,
    required: [true, 'Please add a district']
  },
  province: {
    type: String,
    required: [true, 'Please add a province']
  },
  postalcode: {
    type: String,
    required: [true, 'Please add a postalcode'],
    maxlength: [5, 'Postal Code can not be more than 5 digit']
  },
  tel: {
    type: String
  },
  region: {
    type: String,
    require: [true, 'Please add a region']
  }
});

module.exports = mongoose.model('Hospital', HospitalSchema);