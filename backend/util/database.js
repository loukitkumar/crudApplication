const mysql=require('mysql2');
const config=require('../config/config.json');

// connecting with db
const pool = mysql.createPool({
     host:config.host,
     user:config.user,
     database:config.database,
     password:config.password,
});

//Module exports are the instruction that tells Node. js 
//which bits of code (functions, objects, strings, etc.) to “export” from a given file 
//so other files are allowed to access the exported code
module.exports=pool.promise();