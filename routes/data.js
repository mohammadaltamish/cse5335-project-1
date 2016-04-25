var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var fs = require('fs');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://altamish:1234@ds019491.mlab.com:19491/heroku_1m157wcs';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('Error connecting : ' + uristring + '. ' + err);
    } else {
        console.log ('Success connecting : ' + uristring);
    }
});

var userSchema = new mongoose.Schema({
    id: String,
    name:String,
    age:Number,
    gender:String
});

var person = mongoose.model('dataFile', userSchema);

fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for(var i = 0; i <=99; i++) {

        var myData = new person ({
            id:obj[i].id,
            name:obj[i].name,
            age:obj[i].age,
            gender:obj[i].gender
        });

        myData.save(function (err) {
            if (err) {
                console.log ('Error while saving!!');
                console.log(err);
            }

        });
    }
    console.log('data inserted into mongodb');

});


var data;


/* Get people data */
router.get('/', function(req, res, next) {
    person.find({id:req.query.userId}, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            data = userObj;
            res.contentType('application/json');
            var jsonData = JSON.stringify(data);
            console.log("data: "+data);
            res.send(data);
           // console.log('Found:', userObj);
        }
    });

});

module.exports = router;