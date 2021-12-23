const mysql = require('mysql2');

let con = mysql.createConnection({
    host: "Lekan",
    user: "LekanOni",
    password: "12qwaszx12",
    database: "importlangaugeapp"
});

function insertSingleQuery(sqlQuery, ...values) {
    con.connect(function(err) {
        if (err) throw err;
        let sql = sqlQuery;
        con.query(sql,...values, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
}

module.exports = { insertSingleQuery };







  