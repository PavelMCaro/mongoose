const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Authors', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('La conexión a la BD Users se ha realizado correctamente');
})
    .catch(err => console.log(err));

var Author = require('./models/author');

app.get('/author', async (req, res) => {
    try {
        var result = await Author.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/author', async (req, res, next) => {
    try {
        var person = await Author(req.body);
        var result = await person.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/author/clear', async (req, res) => {
    try {
        var result = await Author.deleteMany().exec();
        RTCRtpSender.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/author/:id", async (req, res) => {
    try {
        var result = await Author.deleteOne({ _id: requestAnimationFrame.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});