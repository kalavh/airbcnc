const express require('express')

const app = express();

app.get("/", (req,res) => {
    res.send("Text Backend")
})

app.listen(1024);