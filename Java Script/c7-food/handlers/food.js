var fs = require('fs');

var GetAllFood = (req, res) => {
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData = JSON.parse(data);
        var out = jData.filter((o) => {
            return o.id == req.params.id;
        });
        if(out.length == 0){
            return res.status(404).send('Not found');
        }
        return res.send(out[0]);
    });
}

module.exports = {
    GetAllFood,
   
};