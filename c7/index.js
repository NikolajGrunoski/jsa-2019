var express =  require('express');
var students = require('./handlers/students');
var calculator = require('./handlers/calculator');

var api = express();

api.get('/students', students.GetAllStudents);

api.get('/students/:id', students.GetStudentsByID);

api.get('/students/:id/grades/:sub', students.GetStudentsSubjectGrades);

api.get('/calc/:op/:a/:b', calculator.Calculator);

api.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started succesfully');
});