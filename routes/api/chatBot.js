var express = require('express');
var router = express.Router();
var resultChatBot = require('../../ChatBot/ChatBot');

/* GET home page. */
router.get('/:text', function(req, res, next) {
  var text = req.params.text;
 
  var result = resultChatBot(text);
    slug = result;
    slug = slug.toLowerCase();
    
 
  res.json({results : slug });
});

module.exports = router;