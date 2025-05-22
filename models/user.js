const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    }
})

userSchema.plugin(passportLocalMongoose);  //as a plugin because it does usename ,password  , hashing , salting automatically

module.exports = mongoose.model('User' , userSchema);