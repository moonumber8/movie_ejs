var mongoose = require('mongoose');

mongoose.set('debug', true);

var data_schema = mongoose.Schema({
    password:   {type:String},
    firstName: {type:String}, 
    lastName: {type:String}, 
    username: {type:String},
    update_timestam: {type:String},
    create_timestam: {type:String}
});


var data_review_schema = mongoose.Schema({
  text_review:   {type:String},
  user_id: {type:String},
  update_timestam: {type:String},
  create_timestam: {type:String}
});

var data_movie = mongoose.Schema({
    plot: {type:String},
    type: {type:String}
})
  

var dataModel = mongoose.model('datas', data_schema);
var dataReviewModel = mongoose.model('review', data_review_schema);
var data_movieModel = mongoose.model('movies', data_movie);
module.exports =  data_movieModel;