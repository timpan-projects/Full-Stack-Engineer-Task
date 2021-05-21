const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

var results;
var jsonParser = bodyParser.json();

app.use(cors());
app.listen(process.env.PORT || 8888);
console.log ("API Server started, listening to port 8888...");
console.log ("Please access localhost:8888 for API calls.");

app.get("/getAll", async function(req, res) {
    await connectDb(selectAll);
    res.send(results);
});

app.post("/insert", jsonParser, async function(req, res) {
    console.log('Received POST body: ', req.body);
    connectDb(insert, req.body);
});

function connectDb(query) { connectDb(query, null); }
async function connectDb(query, body) {
    var connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'keywords_studios'
        }
    );
    try {
        await connection.connect();
        await query(connection, body);
    } catch (e) {
        console.error(e);
    } finally {
        connection.end();
    }
}

// Get all users in 'user' table
function selectAll(connection, obj) {
    connection.query('SELECT * FROM `user`', function(err, result, fields) {
        if(err) throw err;
        results = result;
        console.log(result);
    });
}

// Insert user data into table
function insert(connection, obj) {
    if (obj.date == null || obj.time == null) return; //prevent api server crash
    var sql = "INSERT INTO `user` (`name`, `email`, `date`, `time`) VALUES ('" + 
        obj.fullname + "', '" +
        obj.email + "', '" +
        obj.date + "', '" +
        obj.time + "')";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record inserted successfully!");
    });
}