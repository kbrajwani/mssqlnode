// var mysql=require('mysql');

// // const cnn = new sql.ConnectionPool({ host:'192.168.200.5',
// // user:'sa',
// // password:'sihl$123',
// // database:'SampleAngular'
// //  })

// var cnn=mysql.createPool({
 


//     host:'192.168.200.5',
//     user:'sa',
//     password:'sihl$123',
//     database:'SampleAngular'
    
//    });
//    console.log("db");
//     module.exports=cnn;

var sql = require('mssql');
//2.
var config = {
    server: '192.168.200.5',
    database: 'SampleAngular',
    user: 'sa',
    password: 'sihl$123',
    port: 1433
};

var dbConn = new sql.ConnectionPool(config);

module.exports=dbConn;