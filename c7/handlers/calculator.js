var Calculator = (req, res) => {
    var res = 0;
    switch(req.params.op){
        case 'add':
            result = Number(req.params.a) + Number(req.params.b);
            break;
        case 'sub':
            result = Number(req.params.a) + Number(req.params.b);
            break;
        case 'mul':
            result = Number(req.params.a) + Number(req.params.b);
            break;
        case 'div':
            result = Number(req.params.a) + Number(req.params.b);
            break;
        
    }
    res.send(result + '');
}

module.exports = {
    Calculator
};