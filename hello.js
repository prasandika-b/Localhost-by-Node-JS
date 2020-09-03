const express = require('express')
const app = express();
app.listen(8800),
    function(req, res) {
        console.log("Running");
    }
app.get('/', function(req, res) {
    res.send("Initial Respond")
})

app.get('/country', function(req, res) {
    res.send("country : Sri Lanka")
})

app.get('/University', function(req, res) {
    res.send("University Of Westminster")
})