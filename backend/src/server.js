const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

mongoose.connect(
    'mongodb+srv://kalavh:root@cluster0-xetfk.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true,
    useUnifiedTopology:true,
    }

)
app.use(express.json())
app.use(routes)

