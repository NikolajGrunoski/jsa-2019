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

module.exports = {
    First
}