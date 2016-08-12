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
  var roomid = req.query.roomid;
  res.render('hy', {topsid: topsid, subsid: subsid, yyuid: yyuid, ISDEBUG: false,roomid:roomid});
});
router.post("/huyadm",function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.json({msg:"success"});
});
module.exports = router;
