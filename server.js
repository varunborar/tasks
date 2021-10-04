const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const task = require('./routes/task');
// app.set('view engine', 'ejs');

require('dotenv').config();

const DB = process.env.MONGODB_CONNECTION;

mongoose.connect(
    DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => console.log("Datebase connected")
).catch(
    err => console.log(err)
);

app.use('/task', task);

const PORT = process.env.PORT || 7700;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));