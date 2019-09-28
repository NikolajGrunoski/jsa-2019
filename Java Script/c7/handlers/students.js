var GetAllStudents = ('/students', (req, res) =>{          
    res.send('Hello from /students');             
});

var GetStudentById = ('/students/:id', (req, res) =>{          
    res.send('Get single student with id: ' + req.params.id);             
});

var GetStudentSubjectGrades = ('/students/:id/grades/:sub', (req, res) =>{          
    res.send('Get single student with id: ' + req.params.id +' grades for subject' +  req.params.sub);             
});


module.exports = {
    GetAllStudents,
    GetStudentById,
    GetStudentSubjectGrades
};

