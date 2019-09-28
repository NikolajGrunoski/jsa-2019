var express = require('express');
var hbs = require('express-hbs');


var countries = require('./handlers/countries');


var app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


 app.get('/', countries.GetCountries);
 app.get('/countries/:id', countries.GetCountrie);
    



app.listen(8080, (err) =>{
    if(err){
        console.error('Could not start server');
    }
    return console.log('Server successfully started');
});