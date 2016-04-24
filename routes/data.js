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
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

var userSchema = new mongoose.Schema({
    id: String,
    name:String,
    age:Number,
    gender:String
});

var PUser = mongoose.model('Peopledata', userSchema);

fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for(var i = 0; i <=99; i++) {

        var myData = new PUser ({
            id:obj[i].id,
            name:obj[i].name,
            age:obj[i].age,
            gender:obj[i].gender
        });

        myData.save(function (err) {
            if (err) {
                console.log ('Error on save 1 !');
                console.log(err);
            }

        });
    }
    console.log('data inserted');

});
var data;
PUser.find({}, function (err, userObj) {
    if (err) {
        console.log(err);
    } else if (userObj) {

        data = userObj;
        console.log('Found:', userObj);
    }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.contentType('application/json');
    var dataJSON = JSON.stringify(data);
    res.send(dataJSON);
});

module.exports = router;