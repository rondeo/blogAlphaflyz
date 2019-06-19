var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var BlogSchema = new Schema({
    title: String,
    slug:String,
    picture: String,
    teaser : String,
    content: String,
    author: String,
    time: String
})
var Blog = mongoose.model('Blog',BlogSchema);
module.exports = Blog;