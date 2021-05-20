const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

// Start hosting web server
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);

console.log ("Server started, website hosting at port 8080...");
console.log ("Please access localhost:8080 to see the website.");