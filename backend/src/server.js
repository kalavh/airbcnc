const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("Text Backend");
});

app.listen(1024);