
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qwertySchema = new Schema({
Underscoreid:String , 


qTitle:String 



})

module.exports = {
  Qwerty : mongoose.model('qwerty', qwertySchema),
}

