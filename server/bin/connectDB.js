var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dangkhoa9098:cnpm-2019@cluster0-7bjut.gcp.mongodb.net/TheTea?retryWrites=true',{ useNewUrlParser: true}, function(err){
    if(err) throw err;
    else console.log("Ket noi thanh cong !!");
})