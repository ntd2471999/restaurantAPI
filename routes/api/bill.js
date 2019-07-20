var express = require('express');
var router = express.Router();
const pool = require('../../connectDB/connectDB');

router.get('/getBillByTableId',(req,res) => {
    var id = req.query.id;
    pool.query('SELECT * FROM public."Bill" where id=?',[id], (err, data) => {
       
        res.json({data : data.rows});
      })
})