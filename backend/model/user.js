var sql = require('mssql');
var dbConn=require('../dbconnection');
var bodyParser = require("body-parser");

var users={

    
    login:function(user,callback){
        
            //7.
 return dbConn.query("select * from UserMaster where UserId='"+user.UserId+"' and password='"+user.password+"'",callback);
              
         
           
           
    //return  db.query('select * from UserMaster where UserId=? and password=?',[user.email,user.password],callback);
    
},
    deleteuser:function(id,callback)
    {
        
           
            return dbConn.query("DELETE FROM [UserMaster] WHERE (UserId = '"+[id]+"')",callback);
          
        
        
    },
    
    sign_up:function(user,callback){
       
        
            
        
       return     dbConn.query("INSERT INTO [UserMaster] VALUES ('"+user.UserId+"','"+user.password+"','"+user.token+"','"+user.lastlogindatetime+"')");
                        
        //return db.query('insert into UserMaster values(?,?,?,?,?,?,?,?,?)',[user.email,user.uname,user.password,user.address,user.mobile_no,user.gender,null,null,null],callback);
    },
    getalluser:function(callback){  
     
     
       return dbConn.query("select * from [UserMaster]",callback);
              
    
    },
   
    updateUsers: function(id, user, callback) {
        
       
    return    dbConn.query("update UserMaster set UserId='"+user.UserId+"',password='"+user.password+"',token='"+user.token+"',lastlogindatetime='"+user.lastlogindatetime+"' where UserId='"+id+"'");
       
        
        
        //return db.query("update UserMaster set uname=?,gender=?,mobile_no=? where email=?", [User.uname, User.gender, User.mobile,id], callback);
    },
    changePassword: function(id, User, callback) {
        return db.query("update UserMaster set password=? where email=?", [User.password, id], callback);
    }
};

module.exports=users;