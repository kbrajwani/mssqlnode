var sql = require('mssql');
var dbConn=require('../dbconnection');
var bodyParser = require("body-parser");

var users={

    
    user_login:function(user,callback){
        dbConn.connect().then(function () {
            //6.
            var request = new sql.Request(dbConn);
            //7.
            request.query("select * from UserMaster").then(function (recordSet) {
                console.log(recordSet);
                dbConn.close();
            }).catch(function (err) {
                //8.
                console.log(err);
                dbConn.close();
            });
        }).catch(function (err) {
            //9.
            console.log(err); 
        });

    //return  db.query('select * from UserMaster where UserId=? and password=?',[user.email,user.password],callback);
    },
    deleteuser:function(id,callback)
    {
        
        dbConn.connect().then(function () {
           
            var request = new sql.Request(dbConn);
           
            request.query("DELETE FROM [UserMaster] WHERE (UserId = '"+[id]+"')");
          
        }).catch(function (err) {
            //9.
            console.log(err);
        });
        
    },
    
    sign_up:function(user,callback){
       
        
            
        dbConn.connect().then(function () {
            //6.
            
            var request = new sql.Request(dbConn);
            request.query("INSERT INTO [UserMaster] VALUES ('"+user.UserId+"','"+user.password+"','"+user.token+"','"+user.lastlogindatetime+"')").then(function(){
                dbConn.close();
            });
            //request.query("INSERT INTO [UserMaster] VALUES ('[user.UserId]','[user.password]','[user.token]','[user.lastlogindatetime]')").then(function(){dbConn.close();});
        }).catch(function (err) {
            //9.
            dbConn.close();
            console.log(err);
        });
        
        //return db.query('insert into UserMaster values(?,?,?,?,?,?,?,?,?)',[user.email,user.uname,user.password,user.address,user.mobile_no,user.gender,null,null,null],callback);
    },
    getalluser:function(callback){  
        dbConn.connect().then(function () {
            //6.
            var request = new sql.Request(dbConn);
            //7.
            request.query("select * from UserMaster").then(function (recordSet) {
                console.log(recordSet);
                dbConn.close();
                return recordSet;
            }).catch(function (err) {
                //8.
                console.log(err);
                dbConn.close();
            });
        }).catch(function (err) {
            //9.
            console.log(err);
        });
    
    },
    getUsersById: function(id, callback) {
        
        //return db.query("select * from UserMaster where email=?", [id], callback)
    },
    updateUsers: function(id, user, callback) {
        
        dbConn.connect().then(function () {
            //6.
            var request = new sql.Request(dbConn);
            //7.
            request.query("update UserMaster set UserId='"+user.UserId+"',password='"+user.password+"',token='"+user.token+"',lastlogindatetime='"+user.lastlogindatetime+"' where UserId='"+id+"'").then(function(){
                dbConn.close();
            });
        }).catch(function (err) {
            //9.
            console.log(err);
        });
        
        
        //return db.query("update UserMaster set uname=?,gender=?,mobile_no=? where email=?", [User.uname, User.gender, User.mobile,id], callback);
    },
    changePassword: function(id, User, callback) {
        return db.query("update UserMaster set password=? where email=?", [User.password, id], callback);
    }
};

module.exports=users;