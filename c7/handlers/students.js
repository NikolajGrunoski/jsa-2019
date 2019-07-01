var GetAllStudents = (req,res)=>{
    res.send('Hello from /students');
};


var GetStudentsByID = (req,res) =>{
    res.send('Get single student with id: ' + req.params.id)
};


var GetStudentsSubjectGrades = (req,res) =>{
    res.send('Students  with id: ' + req.params.id + ' grades for subject: ' + req.params.sub);
};


module.exports = {
    GetAllStudents,
    GetStudentsByID,
    GetStudentsSubjectGrades
};

