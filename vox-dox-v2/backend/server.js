const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const projRoutes = express.Router();
const PORT = 2112;

let Proj = require('./proj.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/projects', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MONGO PLUG IN REAL GOOD")
})

projRoutes.route('/').get(function(req, res) {
    Proj.find(function(err, projs) {
        if (err) {
            console.log(err);
        } else {
            res.json(projs);
        }
    });
});

projRoutes.route('/add').post(function(req, res) {
    let proj = new Proj(req.body);
    proj.save()
        .then(proj => {
            res.status(200).json({'project': 'added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new failed');
        })
})

app.use('/projs', projRoutes);

app.listen(PORT, function() {
    console.log("connected to port: " + PORT);
})