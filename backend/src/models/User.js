const mongoose = require('moongoose');
const UserSchema = new mongoose.Schema({
    email: String,

})

module.export = mongoose.model('user',UserSchema)
