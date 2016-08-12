var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hy', function(req, res, next) {
  var topsid = req.query.topsid;
  var subsid = req.query.subsid;
  var yyuid = req.query.yyuid;
  res.render('hy', {topsid: topsid, subsid: subsid, yyuid: yyuid, ISDEBUG: false});
});

module.exports = router;
