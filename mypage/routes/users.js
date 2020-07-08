var express = require('express');
var router = express.Router();
require('../model/connect_db');
const data_movieModel = require('../model/schema');

/* GET users listing. */
router.get('/post_data', function(req, res, next) {
  data_movieModel.find({ 'type': 'movie' }, ['plot', 'type', 'title', 'imdb' ], function (err, doc) {
    if (err) return handleError(err);
    res.json({data: doc});
  });
});


module.exports = router;
