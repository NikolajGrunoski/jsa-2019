var routes = {
    get: [
        {route: '/students,', func: getAllStudents},
        {route : '/students/:id', func: getStudent}
    ],

    post: [
        {route: '/students,', func: storeStudent},
    ],
    put: [
        {route: '/students/:id,', func: updateStudent},
    ],
    patch: [
        {route: '/students/:id,', func: patchStudent},
    ],
    delete: [
        {route: '/students/:id,', func: deleteStudent},
    ]
};

var getAllStudents = () => {};
var getStudent = () => {};
var storeStudent = () => {};
var updateStudent = () => {};
var patchStuden = () => {};
var deleteStudent = () => {};

req.methood = "get";
req.url = "/students/23";

if(routes[req.methood][0].route==req.url){
    routes[req.method][0].func();
}
