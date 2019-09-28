var model = require('../models/countries');


var GetCountries = (req, res) => {
   model.GetAll()
   .then(data => {
       //return res.send(data);
        return res.render('countries', {countries: data});
   })    
   .catch(err => {
       return res.send('ERROR!');
   })
   
};


var GetCountrie = (req, res) => {
    model.GetSingle(req.params.id)
         .then(data => {
            
            return res.send(data)
        })
    .catch(err => {
        return res.send('ERROR!');
    });
}

module.exports = {
    GetCountries,
     GetCountrie
    
}