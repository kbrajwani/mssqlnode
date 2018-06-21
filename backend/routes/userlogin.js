var express = require('express');
var router = express.Router();
var user=require('../model/user');
var sql = require('mssql');
var dbConn=require('../dbconnection');

router.post('/',function(req,res,next){
    
        user.sign_up(req.body,function(err,rows){
           
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.delete('/:id',function(req,res,next){

    user.deleteuser(req.params.id,function(err,rows){
       
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){

    user.updateUsers(req.params.id,req.body,function(err,rows){
       
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.get('/',function(req,res,next){
    console.log("hey");

    

    user.getalluser(function(err,rows){
        res.json(rows);
    });

});
module.exports=router;
