var express = require('express');
var router = express.Router();
const pool = require('../../connectDB/connectDB');

router.get('/getAllFood', (req,res) => {
    pool.query('SELECT f.* FROM public."Food" f, public."typeFood" tf where f.type = tf.id', (err, data) => {
       
        res.json({data : data.rows});
      })
})

router.get('/getFoodByType', (req,res) => {
    var type = req.query.type;

    pool.query('SELECT * FROM public."Food" f, public."typeFood" tf where f.type = tf.id AND f.type = $1',[type], (err, data) => {
       
        res.json({data : data.rows});
      })
})

router.get('/getFoodByKeyword', (req,res) => {
  var name = req.query.name;

  console.log(name);
  
    pool.query(`SELECT * FROM public."Food" f, public."typeFood" tf where f.type = tf.id AND f."foodName" LIKE '%${name}%'`, (err, data) => {
    
     console.log(data);
     
      res.json({data : data.rows});
    })
})


module.exports = router;