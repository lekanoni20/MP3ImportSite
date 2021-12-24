const mysql = require('mysql2');

let con = mysql.createConnection({
    host: "Lekan",
    user: "LekanOni",
    password: "12qwaszx12",
    database: "importlangaugeapp"
});

function runQuery(sqlQuery, ...values) {
    con.connect(function(err) {
        if (err) throw err;
        con.query(sqlQuery,...values, function (err, result) {
          if (err) throw err;
        });
    });
}

module.exports = { runQuery };







  