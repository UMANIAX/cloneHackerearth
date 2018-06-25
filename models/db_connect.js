const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://umaniax:umianu1234@ds263640.mlab.com:63640/cloneheonnode';
mongoose.connect(mongoDB);
mongoose.Promise = Promise;

module.exports.CardData = require('./h_cards')
module.exports.UserModel = require('./users')
