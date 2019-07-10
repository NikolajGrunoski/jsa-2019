var modelFood = require('../models/food');

var First = (req,res) => {
    var data = {
        ime: 'Pero',
        prezime: 'Perovski',
        studenti: [
            {ime: 'Janko', prezime: 'Jankovski'},
            {ime: 'Stanko', prezime: 'Stankovski'},
            {ime: 'Smile', prezime: 'Smilevski'}
        ]
        };
    res.render('first',data);
}

var Food = (req,res) =>{
    modelFood.GetAll()
    .then(data => {
        return res.render('food', {f: data});
    })
    .catch(err => {
        return res.send('ERROR!');
    })
};

module.exports = {
    First
}