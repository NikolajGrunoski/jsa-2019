var fs = require('fs');

const studentFile = './students.json';

var GetAll = () => {
    return new Promise((succes, fail) => {
        fs.readFile(studentFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            return succes(JSON.parse(data));
        });
    });
};


module.exports = {
    GetAll
}