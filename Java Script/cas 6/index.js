// function person(firstname,lastname,age,profession){
// 	this.firstname=firstname;
// 	this.lastname = lastname;
// 	this.age = age;
// 	this.profession = profession;
// }


// person.prototype.greeting = function(phrase){
// 	alert(phrase + ' Im ' + this.firstname);

// }

// var person = new person('Nikolaj','Grunoski',23,'Agent');
// console.log(person.firstname);
// person.greeting('Hello');

// ova gore ne bilo tolku bitno

// nadole se klasi

// class User{

// 	constructor(name,lastname){
// 		this.name = name;
// 		this.lastname = lastname;
// 	}

// 	sayHi(){
// 		alert("Hi " + this.name + ' ' + this.lastname);
// 	}
// }

// var u = new User("Nikolaj","Grunoski");
// u.sayHi();


class Plostina{

	constructor(a,b){
		this.a = a;
		this.b = b;
	}

	presmetka(){
		alert("Rezultatot e = " + this.a * this.b);
	}
}

var u = new Plostina(5,5)
u.presmetka();