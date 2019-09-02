// class Teacher{

// 	constructor(firstname,lastname,subject){
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.subject = subject;
// 	}

// 	greeting(){
// 		return alert('Hello '+ this.firstname);
// 	}
// }


// //var teacher = new Teacher('Nikolaj','Grunoski','JavaScript');
// class UniTeacher extends Teacher{  // so extends Teacher oznacuvame deka UniTeacher nasleduva od Teacher
// 	constructor(firstname,lastname,subject,university,gender){
// 		super(firstname,lastname,subject); // so super gi povikuvame constructorot na Teacher
// 		this.university = university;
// 		this.gender = gender;
// 	}
// }
// var teacher = new UniTeacher('Nikolaj','Grunoski','JavaScript','Semos','m');
// teacher.greeting();





// class Employee{
// 	constructor(name,age,salary,tasks){
// 		this.name = name;
// 		this.age = age;
// 		this.salary = salary;
// 		this.tasks = [];
// 	}

// 	work(){
// 		var currentTast = this.tasks.shift();
// 		console.log(this.name + ' ' + currentTast);
// 	}

// 	collectSalary(){
// 		console.log(this.name + ' recieved ' + this.salary);
// 	}
// }

// class Junior extends Employee{
// 	constructor(name,age,salary,tasks){
// 		super(name,age,salary,tasks);
// 		this.tasks.push(" is working on a simple task");
// 	}
// }

// class Senior extends Employee{
// 	constructor(name,age,salary,tasks,suppervising){

// 		super(name,age,salary,tasks);
// 		this.suppervising = [];
// 		this.tasks.push(" is working on a complicated task");
// 		this.tasks.push(" is suppervising a Junior Employee");
// 		this.tasks.push(" is taking some time form work");
// 	}
// }

// class Menager extends Employee{
// 	constructor(name,age,salary,tasks){
// 		super(name,age,salary,tasks);
// 		this.tasks.push(" scheduled a meeting");
// 		this.tasks.push(" yelled at an Employee");
// 	}
// }

// var junior = new Junior("Nikolaj",23,12000);
// junior.work();
// junior.tasks.push('s');
// junior.collectSalary();

// var senior = new Senior('Nikolaj',23,18000);
// senior.suppervising.push(junior);
// console.log(senior.suppervising);




// class Email{
// 	constructor(from,to,subject,message){
// 		this.from = from;
// 		this.to = to;
// 		this.subject = subject;
// 		this.message = message;
// 	}


// 	poraka(){
	
// 	console.log(this.from + ' is sending email to ' + this.to + ' with a subject: ' + this.subject + ' and the message is ' + this.message );
// 	}
// }

// var email = new Email ('Nikolaj','Ciki','Piperki','Bukovec');
// email.poraka();




class Momce {
	constructor(ime,prezime,godini){
		this.ime = ime;
		this.prezime = prezime;
		this.godini = godini;
	}
}


class Devojce{
	constructor(ime,prezime,godini){
		this.ime = ime;
		this.prezime = prezime;
		this.godini = godini;
	}
}

class Sredba{
	constructor(momce,devojce){
		this.momce = momce;
		this.devojce = devojce;
	}
	odgovaraat(){
		if (this.momce.godini - this.devojce.godini <= 5) {
			console.log("SI odgovaraat")
		}else{
			console.log('Ne si odgovaraat')
		}
	}
}

var momce = new Momce('Nikolaj','Grunoski',23);
var devojce = new Devojce("Maca",'Brezovska', 22);

var sredba = new Sredba(momce,devojce)
sredba.odgovaraat(); 









