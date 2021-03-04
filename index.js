const http = require("http")
const fs = require("fs")
const mysql = require('mysql');

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
            res.write(data);
            return res.end();
    })

}).listen(8000)

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodetest"
  });

  con.connect(function(err){

        if(err) throw err;
        console.log('Conected')

        con.query("DELETE FROM user WHERE name = 'Edes'   ", function(err,result) {

                if (err) throw err;

                console.log(result.affectedRows)

        })

  })
