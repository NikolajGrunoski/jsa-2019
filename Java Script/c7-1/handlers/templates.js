var modelFood = require('../models/food');

var First = (req, res) => {
    var data = {
        ime: 'Pero', 
        prezime:'Perovski',
        studenti: [
            {ime:'Pero', prezime:'Perovski'},
            {ime:'Pero', prezime:'Perovski'},
            {ime:'Pero', prezime:'Perovski'},
        ]
    };
    res.render('first', data);
}


 var Food =(req, res) => {
     modelFood.GetAll()
     .then(data => {
         return res.render('food', {f: data});
     })
     .catch(err =>{
         return res.send('ERROR!');
     })
    }
module.exports = {
    First,
    Food
}