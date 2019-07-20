var express = require('express');
var router = express.Router();
const pool = require('../../connectDB/connectDB');


router.get('/getBillByTableId', (req,res) => {
    var idTable = req.query.idTable;
  
    console.log(name);
    
      pool.query(`SELECT * FROM public."Bill" where "idTable" = ${idTable}`, (err, data) => {
      
       console.log(data);
       
        res.json({data : data.rows});
      })
  })

module.exports = router;