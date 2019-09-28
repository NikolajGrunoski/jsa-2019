
var Calculator = (req, rez) => {
    var rez = 0;
    switch(req.params.op){
        case 'add':
        rez = Number(req.params.a) + Number(req.params.b);
        break;
        case 'sub':
        rez = Number(req.params.a) - Number(req.params.b);
        break;
        case 'mul':
        rez = Number(req.params.a) * Number(req.params.b);
        break;
        case 'div':
        rez = Number(req.params.a) / Number(req.params.b);
        break;

    }
    rez.send(rez + '');
}

module.exports = {
    Calculator
};
