var express = require('express');
var router = express.Router();
const pool = require('../../connectDB/connectDB');

router.get('/getBillByTableId',(req,res) => {
    var id = req.query.id;
    if(id != null)
    {
      
       pool.query(`SELECT * FROM public."Bill" where "idTable" = $1`,[id], (err, res) => {
            res.json({data : res.rows});
        })
    }
    res.status(404).json({msg : "id table not null"});
   
})

module.exports = router;